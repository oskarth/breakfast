;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Breakfast IRC app/bot for Clojure Cup.
;;;
;;; :)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;_* Declarations =====================================================
(ns breakfast.server
  (:require [clojure.java.io :as io]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop sliding-buffer)]
            [org.httpkit.server :refer (run-server)]
            [compojure.core :refer (GET POST defroutes)]
            [compojure.route :refer (resources)]
            [net.cgrand.enlive-html :as html :refer (deftemplate)]
            [environ.core :refer (env)]
            [cemerick.piggieback :as piggieback]
            [weasel.repl.websocket :as weasel]
            [irclj.core :as irc]
            [taoensso.sente :as sente]
            [throttler.core :refer [throttle-chan throttle-fn]]
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

;; TODO
;; just listen for stuff from client

;; this is a chan, not a chan.
(def irc-chan (chan (sliding-buffer 1)))

(defn handle-irc-events []
  (go (while true
        (let [msg (<! irc-chan)]
          (do (println (format "IRC Broadcasting: %s" @connected-uids))
              (doseq [uid (:any @connected-uids)]
                (chsk-send! uid
                            [:irc/message
                             {:message msg
                              :to-whom uid}])))))))

(declare conn)

;;;_ * IRC ------------------------------------------------------------

(defn handle-incoming
  "Deal with incoming IRC messages."
  [_ {:keys [text nick] :as m}]
  (do (put! irc-chan (str nick ": " text))
      (println (str "[IRC] " nick ": " text " mk? " (keys m))))) ;; prn before

(defn start-irc []
  (let [conn (irc/connect "irc.freenode.net" 6667 "breakfastbot"
                          :callbacks {:privmsg handle-incoming})]
    (irc/join conn "#clojurecup-breakfast")
    (irc/join conn "#clojure") ;; why not? message is separate fn
    conn))

;; 2 seocnds per line !!! TODO damn.
;; https://github.com/brunoV/throttler
;;(def +# (throttle-fn + 100 :second))

(defn send-message
  "Send a message to a IRC channel."
  [conn nick msg]
  (throttle-fn
   (irc/message conn "#clojurecup-breakfast" (str nick " says: " msg))
   1 :second))
;; does this work? try 1 first. then 0.5.

;; based on http://www.reddit.com/r/irc/comments/1rdejj/freenode_flood_limits/
;; "I can answer this with some confidence unless it has
;; changed (unlikely). The rule of thumb is 2 seconds per line, and
;; that includes lines without content, like PINGs. The algorithm
;; allows for bursts up to 5 at once (in a 10 second span)."


;; TODO: nick

;; feck.
;; 19:10 < breakfastbot> foo says: garbg subset: [:chsk/uidport-open]
;; 19:10 < breakfastbot> foo says: garbg subset: [:chsk/ws-ping]
;; 19:10 < breakfastbot> foo says: garbg subset: [:chsk/ws-ping]
;; 19:10 < breakfastbot> foo says: garbg subset: [:chsk/ws-ping]
;; 19:10 < breakfastbot> foo says: garbg subset: [:chsk/ws-ping]
;; 19:10 -!- breakfastbot [~breakfast@5.63.151.188] has quit [Excess Flood]

;; ok I'm tired, so just gonna go with the post thing. Refactor is for another day.
;; no we should do this, better transport. BE CARUFLE.

;; what hpapened with this -- haha, wtf. why didn't you use this!
;; CNOTROL THE MESSAGE
;;(send-message conn (str "garbg subset: " (:event v)))  ;; something something message
;;              msg (:msg (second ev)) ;; what if fail?
;;              uid (:uid (second ev))
(defn handle-client-events []
  (go (while true
        (let [v (<! ch-chsk)
              ev (:event v)
              load (second ev)]
          (condp identical? (first ev)
            :chsk/uidport-open (println "uidport open")
            :chsk/uidport-close (println "uidport close")
            :chsk/ws-ping (println "ws-ping")
            :irc/message (do
                           (println (str "nick " (:uid load) " msg " (:msg load)))
                           (send-message conn (:uid load) (:msg load)))  ;; buffering? nick msg
            )))))
 ;; (str "nick " uid " msg " msg)))
;; :irc/message {:uid "user_42", :msg "foobar"}]

;; yay! [:my-app/some-req {:data "data"}]





;;;_ * Requests/HTML --------------------------------------------------
(defn login!
  "Get some kind of uid going."
  [req]
  (let [{:keys [session params]} req ;; shoud be params but... form-params?
        {:keys [user-id]} params] ;; -- not a key?
    (prn "params: " (str params))
    (prn "user-id: " (str user-id))
    {:status 200 :session (assoc session :uid user-id)}))

(defn message!
  "Get some kind of IRCCIng gonning."
  [req]
  (let [{:keys [session params]} req
        {:keys [user-id message]} params]
    (prn "params: " (str params))
    (prn "message: " (str message))
    ;; actual message
    {:status 200 :session (assoc session :uid user-id)})) ;; w or w/o session?


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
  (POST "/message" req (message! req))

  (GET "/*" req (page)))

(def app
  (-> routes
      wrap-keyword-params
      wrap-nested-params
      wrap-params
      wrap-session))

;;;_ * Start ------------------------------------------------------------

(def conn (start-irc)) ;; automatically connect to irc, need that global

(handle-irc-events) ;; listens for irc events
(handle-client-events)

(defn browser-repl []
  (piggieback/cljs-repl :repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)))

(defn run [& [port]]
  (defonce ^:private server
    (run-server #'app {:port (Integer. (or port (env :port) 10555))
                       :join? false}))
  server)

(defn -main [& [port]]
  (run port))
