# breakfast

## About

breakfast is a live web chat connected to IRC. It's a proof of concept
of connecting individual visitors to your website with you, through
the IRC channel you are already in.

Most live chats are (a) products (b) non-extensible (c) not on
IRC. The idea is that you can add this to your Clojure/Clojurescript
code base and then answer questions straight from IRC. One could also
send other notifications. For example: when a user gets a 404 this
could show up in the chat, and you can start comforting them straight
away.

It's extremely rough around the edges, and right now it's showing all
IRC traffic, rather than just a subset (say, when the user in question
gets highighlighted). In fact, it's showing a superset of IRC
traffic - it looked so empty with just #clojurecup-breakfast that I
added the #clojure channel too (you can however not reply to that
channel).

CSFR is missing. Basic throttling is in place at 1 msg per sec (which
might be a tad too muc). User-based throttling is missing.

## Development

Start a REPL (in a terminal: `lein repl`, or from Emacs: open a
clj/cljs file in the project, then do `M-x cider-jack-in`. Make sure
CIDER is up to date).

In the REPL do

```clojure
(run)
(browser-repl)
```

The first starts the webserver at 10555. The second starts the Weasel
REPL server.

In a terminal do `lein figwheel`, this will watch and recompile your
ClojureScript, and start the figwheel server (the
default). Whenever your code changes, figwheel will recompile it and
send it to the browser immediately.

Now browse to `http://localhost:10555` and enjoy.

## License

Copyright © 2014 OSKARTH

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
