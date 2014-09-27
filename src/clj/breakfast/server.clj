(ns breakfast.server
  (:require [clojure.java.io :as io]
            [clojure.core.async :refer (go)]
            [org.httpkit.server :refer (run-server)]
            [compojure.core :refer (GET POST defroutes)]
            [compojure.route :refer (resources)]
            [net.cgrand.enlive-html :as html :refer (deftemplate)]
            [environ.core :refer (env)]
            [cemerick.piggieback :as piggieback]
            [weasel.repl.websocket :as weasel]
            [irclj.core :as irc]
            [taoensso.sente :as sente]
            ;;[ring.middleware.defaults]
            ;;[ring.middleware.anti-forgery :as ring-anti-forgery]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.params :refer [wrap-params]]
            ))

;; sente stuff
(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defn login!
  "Get some kind of uid going."
  [req]
  (let [{:keys [session params]} req
        {:keys [user-id]} params]
    (prn (str "login!req " (str req)))
    ;; does this work?
    {:status 200 :session (assoc session :uid user-id)}
    
    ;;{:status 200 :session (assoc session :uid (str (rand-int 100)))}
    ))

;; key OR supply a :user-id-fn (takes request, returns an identity
;; string) to the make-channel-socket! constructor.

;; just listen for stuff from client
(go (while true
      (let [v (<! ch-chsk)]
        (do (prn "EVENT: " (str (pr-str v)))
            (prn  "KEYS: " (str (pr-str (keys v))))))))

;; something like
;; (chsk-send! "destination-user-id" [:some/alert-id <edn-payload>]).

;; To give a user an identity, either set the user's :uid Ring session key OR supply a :user-id-fn (takes request, returns an identity string) to the make-channel-socket! constructor.

;; IRC stuff

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

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})

  ;; channel socket
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))

  (POST "/login" req (login! req))

  (GET "/*" req (page)))


;; from sente example project, csrf stuff
;; (def my-ring-handler
;;   (let [ring-defaults-config
;;         (assoc-in ring.middleware.defaults/site-defaults [:security :anti-forgery]
;;                   {:read-token (fn [req] (-> req :params :csrf-token))})]
;;     (ring.middleware.defaults/wrap-defaults my-routes ring-defaults-config)))

(def app
  (-> routes
      wrap-params
      wrap-session))

;; (def conn (start-irc)) ;; automatically connect to irc

(defn browser-repl []
  (piggieback/cljs-repl :repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)))

(defn run [& [port]]
  (defonce ^:private server
    (run-server #'app {:port (Integer. (or port (env :port) 10555))
                       :join? false}))
  server)

(defn -main [& [port]]
  (run port))
