;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Breakfast IRC app/bot for Clojure Cup.
;;;
;;; :)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;_* Declarations =====================================================
(ns breakfast.server
  (:require [clojure.java.io :as io]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [org.httpkit.server :refer (run-server)]
            [compojure.core :refer (GET POST defroutes)]
            [compojure.route :refer (resources)]
            [net.cgrand.enlive-html :as html :refer (deftemplate)]
            [environ.core :refer (env)]
            [cemerick.piggieback :as piggieback]
            [weasel.repl.websocket :as weasel]
            [irclj.core :as irc]
            [taoensso.sente :as sente]
            [ring.middleware.keyword-params :refer (wrap-keyword-params)]
            [ring.middleware.nested-params :refer (wrap-nested-params)]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.params :refer [wrap-params]]
            ))

;;;_* Code =============================================================
;;;_ * Channels  -------------------------------------------------------
(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

;; just listen for stuff from client
(go (while true
      (let [v (<! ch-chsk)]
        (do (prn "EVENT: " (str (pr-str v)))
            (prn  "KEYS: " (str (pr-str (keys v))))))))

;; Kind of what we want for IRC broadcast, but a bit more often
(defn start-broadcaster! []
  (go-loop [i 0]
    (<! (async/timeout 5000))
    (println (format "Broadcasting server>user: %s" @connected-uids))
    (doseq [uid (:any @connected-uids)]
      (chsk-send! uid
                  [:some/broadcast
                   {:what-is-this (str "A broadcast pushed from server " (rand-int 100))
                    :how-often "Every 5 seconds"
                    :to-whom uid
                    :i i}]))
    (recur (inc i))))

;;;_ * IRC ------------------------------------------------------------
(defn handle-incoming
  "Deal with incoming IRC messages."
  [_ {:keys [text nick] :as m}]
  (prn (str "INCOMING: " text " (" nick ")")))

(defn start-irc []
  (let [conn (irc/connect "irc.freenode.net" 6667 "breakfastbot"
                          :callbacks {:privmsg handle-incoming})]
    (irc/join conn "#clojurecup-breakfast")
    conn))

(defn message [conn s]
  (irc/message conn "#clojurecup-breakfast" (str "foo says: " s)))
  

;;;_ * Requests/HTML --------------------------------------------------
(defn login!
  "Get some kind of uid going."
  [req]
  (let [{:keys [session params]} req ;; shoud be params but... form-params?
        {:keys [user-id]} params] ;; -- not a key?
    (prn "params: " (str params))
    (prn "user-id: " (str user-id))
    {:status 200 :session (assoc session :uid user-id)}))

(defn body-transforms []
  (if (env :is-dev)
    (comp
     (html/set-attr :class "is-dev")
     (html/prepend (html/html [:script {:type "text/javascript" :src "/out/goog/base.js"}]))
     (html/prepend (html/html [:script {:type "text/javascript" :src "/react/react.js"}]))
     (html/append  (html/html [:script {:type "text/javascript"} "goog.require('breakfast.core')"])))
    identity))

(deftemplate page
  (io/resource "index.html") [] [:body] (body-transforms))

;;;_ * Routes ------------------------------------------------------------
(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})

  ;; channel socket
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))

  (POST "/login" req (login! req))

  (GET "/*" req (page)))

(def app
  (-> routes
      wrap-keyword-params
      wrap-nested-params
      wrap-params
      wrap-session))

;;;_ * Start ------------------------------------------------------------

;; (def conn (start-irc)) ;; automatically connect to irc

(defn browser-repl []
  (piggieback/cljs-repl :repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)))

(defn run [& [port]]
  (defonce ^:private server
    (run-server #'app {:port (Integer. (or port (env :port) 10555))
                       :join? false}))
  server)

(defn start! [& [port]]
  (run port)
  (start-broadcaster!))  

(defn -main [& [port]]
  (run port))
