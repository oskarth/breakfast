(ns breakfast.core
  (:require-macros
   [cljs.core.async.macros :as async :refer (go go-loop)])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]))

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

(defn login! [uid]
  (do (sente/ajax-call "/login"
                       {:method :post
                        :params {:user-id    uid
                                 :csrf-token (:csrf-token @chsk-state)}}
                       (fn [ajax-resp] (.log js/console "Ajax login response: %s" ajax-resp)))
      (sente/chsk-reconnect! chsk)))

(om/root
  (fn [app owner]
    (reify
      om/IWillMount
      (will-mount [this]
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
