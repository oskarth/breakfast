(defproject breakfast "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2342"]
                 [org.clojure/core.match    "0.2.1"]
                 [ring "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [http-kit "2.1.18"]
                 [compojure "1.1.9"]
                 [enlive "1.1.5"]
                 [om "0.7.1"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [environ "1.0.0"]
                 [com.cemerick/piggieback "0.1.3"]
                 [sablono "0.2.20"]
                 [weasel "0.4.0-SNAPSHOT"]
                 [irclj "0.5.0-alpha4"]
                 [throttler "1.0.0"]
                 [com.taoensso/sente "1.1.0"]
                 [com.taoensso/encore "1.9.3"]] ;; for logf?

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-environ "1.0.0"]]
  
  :aot [breakfast.server]
  :main breakfast.server

  :min-lein-version "2.0.0"

  :uberjar-name "breakfast.jar"

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "resources/public/app.js"
                                        :output-dir    "resources/public/out"
                                        :source-map    "resources/public/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :externs       ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev {:repl-options {:init-ns breakfast.server}
                   :plugins [[lein-figwheel "0.1.4-SNAPSHOT"]]
                   :figwheel {:http-server-root "public"
                              :port 3449 }
                   :env {:is-dev true}}

             :uberjar {:hooks [leiningen.cljsbuild]
                       :env {:is-dev true} ;; sure. :production before.
                       :omit-source true
                       :aot :all
                       :cljsbuild {:builds {:app
                                            {:compiler
                                             {:optimizations :none ;;:advanced
                                              :pretty-print true}}}}}}) ;; false
