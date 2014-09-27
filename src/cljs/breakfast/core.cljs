(ns breakfast.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [taoensso.encore :as encore :refer (logf)]))


(logf "ClojureScript appears to have loaded correctly.")

(defn log [s x]
  (.log js/console s (str x)))

;; sente stuff

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
       {:type :auto ; e/o #{:auto :ajax :ws}
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(defonce app-state (atom {:text "Hello Breakfast!"
                          :uid nil}))

;; just put something
(chsk-send! [:my-app/some-req {:data "data"}])

;; from example app
;; (do ; Client-side methods  (defmethod event-msg-handler :default ; Fallback
;;     [{:as ev-msg :keys [event]}]
;;     (log "Unhandled event: " event)
;;   (defmethod event-msg-handler :chsk/state
;;     [{:as ev-msg :keys [?data]}]
;;     (if (= ?data {:first-open? true})
;;       (log "Channel socket successfully established!" "")
;;       (log "Channel socket state change: " ?data)))
;;   (defmethod event-msg-handler :chsk/recv
;;     [{:as ev-msg :keys [?data]}]
;;     (log "Push event from server: " ?data))
;;   ;; Add your (defmethod handle-event-msg! <event-id> [ev-msg] <body>)s here...
;; )

;; also, sup with no csfr token available error

;; do this but for just a go loop or smt
;;   (defmethod event-msg-handler :chsk/recv
;;     [{:as ev-msg :keys [?data]}]
;;     (log "Push event from server: " ?data))


;;what

;; (defn test-fast-server>user-pushes []
;;   (doseq [uid (:any @connected-uids)]
;;     (doseq [i (range 100)]
;;       (chsk-send! uid [:fast-push/is-fast (str "hello " i "!!")]))))

;; (test-fast-server>user-pushes)

(defn login! [uid]
  (do (sente/ajax-call "/login"
                       {:method :post
                        :params {:user-id    uid
                                 ;;:csrf-token (:csrf-token @chsk-state) ;; disable for now
                                 }}
                       (fn [ajax-resp] (.log js/console "Ajax login response: %s" ajax-resp)))
      (sente/chsk-reconnect! chsk)))

(om/root
  (fn [app owner]
    (reify
      om/IWillMount
      (will-mount [this]
        (go (while true
              (let [v (<! ch-chsk)] ;; right channel?
                (prn "MSG: " (str (pr-str v)))))) ;; super messy broadcast recv ATM
        ;;(def ch-chsk    ch-recv) ; ChannelSocket's receive channel
        
        (if (not (:uid app))
          (let [uid (str "user_" (rand-int 100))]
            (do (login! uid)
                (om/transact! app :uid (fn [_] uid))))))
      om/IRender
      (render [_]
        (dom/h1 nil (str "uid:" (:uid app))))))
  app-state
  {:target (. js/document (getElementById "app"))})

(def is-dev (.contains (.. js/document -body -classList) "is-dev"))

(when is-dev
  (enable-console-print!)
  (figwheel/watch-and-reload
   :websocket-url "ws://localhost:3449/figwheel-ws"
   :jsload-callback (fn [] (print "reloaded")))
  (weasel/connect "ws://localhost:9001" :verbose true))
