(ns breakfast.server
  (:require [clojure.java.io :as io]
            [org.httpkit.server :refer (run-server)]
            [compojure.core :refer (GET defroutes)]
            [compojure.route :refer (resources)]
            [net.cgrand.enlive-html :as html :refer (deftemplate)]
            [environ.core :refer (env)]
            [cemerick.piggieback :as piggieback]
            [weasel.repl.websocket :as weasel]
            [irclj.core :as irc]))

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

;; (def conn (start-irc)) ;; automatically connect to irc

(defn message
  "Send a message through IRC."
  [conn s]
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

(defroutes site
  (resources "/")
  (resources "/react" {:root "react"})
  (GET "/*" req (page)))

(defn browser-repl []
  (piggieback/cljs-repl :repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)))

(defn run [& [port]]
  (defonce ^:private server
    (run-server #'site {:port (Integer. (or port (env :port) 10555))
                        :join? false}))
  server)

(defn -main [& [port]]
  (run port))
