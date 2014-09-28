;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Breakfast IRC app/bot for Clojure Cup.
;;;
;;; :)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;_* Declarations =====================================================
(ns breakfast.core
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]
   [cljs.core.match.macros :refer (match)])
  (:require [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]
            [cljs.core.async :as async :refer (<! >! put! chan sliding-buffer)]
            [cljs.core.match]
            [cljs.reader :as reader]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [taoensso.encore :as encore :refer (logf)]))

;;;_* Code =============================================================
;;;_ * Misc  -----------------------------------------------------------
(logf "ClojureScript appears to have loaded correctly.")

(defn log [s x]
  (.log js/console s (str x)))

;;;_ * Channels  -------------------------------------------------------
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
                          :messages ["message"]
                          :input-box {:text "foobar"}
                          :uid nil}))

(defn handle-events [app]
  (go (while true
        (let [ev (:event (<! ch-chsk))
              msg (second (second ev))]
          (condp keyword-identical? (first ev)
            :chsk/state (prn "sup, checking state")
            :chsk/recv  (do (om/transact! app :messages #(conj % msg)) ;;(fn [_] msg))
                            (prn "msg: " (str (pr-str msg))))
            )))))

;;;_ * Actions  -------------------------------------------------------

;; ;; from om-data-vis
;; (defn input-box
;;   [cursor owner]
;;   (reify
;;     om/IRenderState
;;     (render-state [_ {:keys [event-chan]}]
;;        (dom/div
;;         #js {:class "form-inline" :role "form"}
;;         (dom/div
;;          #js {:class "form-group"}
;;          (dom/input
;;           #js {:type "text"
;;                :class "form-control"
;;                :onChange (fn [e] (om/set-state! owner :value (.-value (.-target e))))
;;                :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
;;                                        (let [value (om/get-state owner :value)]
;;                                          (when value
;;                                            (put! event-chan value)))))}))
;;         (dom/button
;;          #js {:type "button" :class "btn btn-primary"
;;               :onClick
;;               (fn [e]
;;                 (let [value (om/get-state owner :value)]
;;                   (when value
;;                     (put! event-chan value))))} "Go")))))

(defn input-box-input [owner chan]
  (dom/div nil
           (dom/input
            #js {:type "text"

                 ;; key press not working
                 :onKeyPress (fn [e] (when (= (.-keyCode e) 13)
                                       (let [value (om/get-state owner :value)]
                                         (when value
                                           (put! chan value)))))
                 :onChange (fn [e]
                   (om/set-state! owner :value (.-value (.-target e))))})))

(defn input-box-button [owner chan]
  (dom/button #js {:type "button"
                   :onClick
                   (fn [e]
                     (let [value (om/get-state owner :value)]
                       (when value
                         (put! chan {:tag :message :value value}))))}
              "Send"))

;; (let [event-chan (om/get-state owner [:event-chan])]

(defn input-view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (let [event-chan (om/get-state owner [:event-chan])]
        (dom/div nil
                 (input-box-input owner event-chan)
                 (input-box-button owner event-chan))))))

;;;_ * Actions  -------------------------------------------------------
(defn login! [uid]
  (do (sente/ajax-call "/login"
                       {:method :post
                        :params {:user-id    uid
                                 ;;:csrf-token (:csrf-token @chsk-state) ;; disable for now
                                 }}
                       (fn [ajax-resp] (.log js/console "Ajax login response: %s" ajax-resp)))
      (sente/chsk-reconnect! chsk)))

(defn post-message! [uid msg]
  (log "posting message: " (str "uid: " uid " msg: " msg))
  (sente/ajax-call "/message"
                   {:method :post
                    :params {:user-id uid
                             :message msg
                             ;;:csrf-token (:csrf-token @chsk-state) ;; disable for now
                             }}
                   (fn [ajax-resp] (.log js/console "Ajax message response: %s" ajax-resp))))


;;;_ * Root -------------------------------------------------------

(defn main-view [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/h1 nil (str "uid:" (:uid app)))))))

(defn irc-view [messages owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (apply dom/ul nil
                      (map (fn [msg] (dom/li nil (:message msg))) messages))
               (dom/h1 nil (str "hi " (first messages)))))))

(defn app-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:chans {:event-chan (chan (sliding-buffer 1))}})
    
    om/IWillMount
    (will-mount [this]
      (handle-events app)

      ;; two event handler because stupid
      (let [event-chan (om/get-state owner [:chans :event-chan])]
        (go (while true
              (let [v (<! event-chan)]
                (log "IRC message: " (str (pr-str v)))
                (condp keyword-identical? (:tag v) :message (post-message! (:uid @app) (:value v)))))))

      ;; uid login stuff
      (if (not (:uid app))
        (let [uid (str "user_" (rand-int 100))]
          (do (login! uid)
              (om/transact! app :uid (fn [_] uid))))))
    
    om/IRenderState
    (render-state [_ {:keys [chans]}]
      (dom/div nil
               (dom/p nil (str "APP STATE: " @app-state))
               
               (om/build main-view app)
               (om/build input-view (:input-box app) {:init-state chans})
               ;;(om/build input-view (:input app) {:init-state chans})
               (om/build irc-view (:messages app)))
      )))

(om/root app-view
         app-state
         {:target (. js/document (getElementById "app"))})

;;;_ * Dev mode -------------------------------------------------------
(def is-dev (.contains (.. js/document -body -classList) "is-dev"))

(when is-dev
  (enable-console-print!)
  (figwheel/watch-and-reload
   :websocket-url "ws://localhost:3449/figwheel-ws"
   :jsload-callback (fn [] (print "reloaded")))
  (weasel/connect "ws://localhost:9001" :verbose true))
