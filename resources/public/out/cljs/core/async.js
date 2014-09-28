// Compiled by ClojureScript 0.0-2342
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t76347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76347 = (function (f,fn_handler,meta76348){
this.f = f;
this.fn_handler = fn_handler;
this.meta76348 = meta76348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76347.cljs$lang$type = true;
cljs.core.async.t76347.cljs$lang$ctorStr = "cljs.core.async/t76347";
cljs.core.async.t76347.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76347");
});
cljs.core.async.t76347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t76347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t76347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t76347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76349){var self__ = this;
var _76349__$1 = this;return self__.meta76348;
});
cljs.core.async.t76347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76349,meta76348__$1){var self__ = this;
var _76349__$1 = this;return (new cljs.core.async.t76347(self__.f,self__.fn_handler,meta76348__$1));
});
cljs.core.async.__GT_t76347 = (function __GT_t76347(f__$1,fn_handler__$1,meta76348){return (new cljs.core.async.t76347(f__$1,fn_handler__$1,meta76348));
});
}
return (new cljs.core.async.t76347(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__76351 = buff;if(G__76351)
{var bit__8656__auto__ = null;if(cljs.core.truth_((function (){var or__7993__auto__ = bit__8656__auto__;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return G__76351.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__76351.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__76351);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__76351);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_76352 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_76352);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_76352,ret){
return (function (){return fn1.call(null,val_76352);
});})(val_76352,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8862__auto___76353 = n;var x_76354 = (0);while(true){
if((x_76354 < n__8862__auto___76353))
{(a[x_76354] = (0));
{
var G__76355 = (x_76354 + (1));
x_76354 = G__76355;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__76356 = (i + (1));
i = G__76356;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t76360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76360 = (function (flag,alt_flag,meta76361){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta76361 = meta76361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76360.cljs$lang$type = true;
cljs.core.async.t76360.cljs$lang$ctorStr = "cljs.core.async/t76360";
cljs.core.async.t76360.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76360");
});})(flag))
;
cljs.core.async.t76360.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t76360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t76360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t76360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_76362){var self__ = this;
var _76362__$1 = this;return self__.meta76361;
});})(flag))
;
cljs.core.async.t76360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_76362,meta76361__$1){var self__ = this;
var _76362__$1 = this;return (new cljs.core.async.t76360(self__.flag,self__.alt_flag,meta76361__$1));
});})(flag))
;
cljs.core.async.__GT_t76360 = ((function (flag){
return (function __GT_t76360(flag__$1,alt_flag__$1,meta76361){return (new cljs.core.async.t76360(flag__$1,alt_flag__$1,meta76361));
});})(flag))
;
}
return (new cljs.core.async.t76360(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t76366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76366 = (function (cb,flag,alt_handler,meta76367){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta76367 = meta76367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76366.cljs$lang$type = true;
cljs.core.async.t76366.cljs$lang$ctorStr = "cljs.core.async/t76366";
cljs.core.async.t76366.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76366");
});
cljs.core.async.t76366.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t76366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t76366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t76366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76368){var self__ = this;
var _76368__$1 = this;return self__.meta76367;
});
cljs.core.async.t76366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76368,meta76367__$1){var self__ = this;
var _76368__$1 = this;return (new cljs.core.async.t76366(self__.cb,self__.flag,self__.alt_handler,meta76367__$1));
});
cljs.core.async.__GT_t76366 = (function __GT_t76366(cb__$1,flag__$1,alt_handler__$1,meta76367){return (new cljs.core.async.t76366(cb__$1,flag__$1,alt_handler__$1,meta76367));
});
}
return (new cljs.core.async.t76366(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__76369_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76369_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__76370_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76370_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7993__auto__ = wport;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__76371 = (i + (1));
i = G__76371;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7993__auto__ = ret;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7981__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7981__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7981__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__76372){var map__76374 = p__76372;var map__76374__$1 = ((cljs.core.seq_QMARK_.call(null,map__76374))?cljs.core.apply.call(null,cljs.core.hash_map,map__76374):map__76374);var opts = map__76374__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__76372 = null;if (arguments.length > 1) {
  p__76372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__76372);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__76375){
var ports = cljs.core.first(arglist__76375);
var p__76372 = cljs.core.rest(arglist__76375);
return alts_BANG___delegate(ports,p__76372);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t76383 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76383 = (function (ch,f,map_LT_,meta76384){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta76384 = meta76384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76383.cljs$lang$type = true;
cljs.core.async.t76383.cljs$lang$ctorStr = "cljs.core.async/t76383";
cljs.core.async.t76383.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76383");
});
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t76386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76386 = (function (fn1,_,meta76384,ch,f,map_LT_,meta76387){
this.fn1 = fn1;
this._ = _;
this.meta76384 = meta76384;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta76387 = meta76387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76386.cljs$lang$type = true;
cljs.core.async.t76386.cljs$lang$ctorStr = "cljs.core.async/t76386";
cljs.core.async.t76386.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76386");
});})(___$1))
;
cljs.core.async.t76386.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t76386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t76386.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t76386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__76376_SHARP_){return f1.call(null,(((p1__76376_SHARP_ == null))?null:self__.f.call(null,p1__76376_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t76386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_76388){var self__ = this;
var _76388__$1 = this;return self__.meta76387;
});})(___$1))
;
cljs.core.async.t76386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_76388,meta76387__$1){var self__ = this;
var _76388__$1 = this;return (new cljs.core.async.t76386(self__.fn1,self__._,self__.meta76384,self__.ch,self__.f,self__.map_LT_,meta76387__$1));
});})(___$1))
;
cljs.core.async.__GT_t76386 = ((function (___$1){
return (function __GT_t76386(fn1__$1,___$2,meta76384__$1,ch__$2,f__$2,map_LT___$2,meta76387){return (new cljs.core.async.t76386(fn1__$1,___$2,meta76384__$1,ch__$2,f__$2,map_LT___$2,meta76387));
});})(___$1))
;
}
return (new cljs.core.async.t76386(fn1,___$1,self__.meta76384,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7981__auto__ = ret;if(cljs.core.truth_(and__7981__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7981__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t76383.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t76383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76385){var self__ = this;
var _76385__$1 = this;return self__.meta76384;
});
cljs.core.async.t76383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76385,meta76384__$1){var self__ = this;
var _76385__$1 = this;return (new cljs.core.async.t76383(self__.ch,self__.f,self__.map_LT_,meta76384__$1));
});
cljs.core.async.__GT_t76383 = (function __GT_t76383(ch__$1,f__$1,map_LT___$1,meta76384){return (new cljs.core.async.t76383(ch__$1,f__$1,map_LT___$1,meta76384));
});
}
return (new cljs.core.async.t76383(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t76392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76392 = (function (ch,f,map_GT_,meta76393){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta76393 = meta76393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76392.cljs$lang$type = true;
cljs.core.async.t76392.cljs$lang$ctorStr = "cljs.core.async/t76392";
cljs.core.async.t76392.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76392");
});
cljs.core.async.t76392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t76392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t76392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t76392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t76392.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t76392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t76392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76394){var self__ = this;
var _76394__$1 = this;return self__.meta76393;
});
cljs.core.async.t76392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76394,meta76393__$1){var self__ = this;
var _76394__$1 = this;return (new cljs.core.async.t76392(self__.ch,self__.f,self__.map_GT_,meta76393__$1));
});
cljs.core.async.__GT_t76392 = (function __GT_t76392(ch__$1,f__$1,map_GT___$1,meta76393){return (new cljs.core.async.t76392(ch__$1,f__$1,map_GT___$1,meta76393));
});
}
return (new cljs.core.async.t76392(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t76398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t76398 = (function (ch,p,filter_GT_,meta76399){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta76399 = meta76399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t76398.cljs$lang$type = true;
cljs.core.async.t76398.cljs$lang$ctorStr = "cljs.core.async/t76398";
cljs.core.async.t76398.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t76398");
});
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t76398.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t76398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76400){var self__ = this;
var _76400__$1 = this;return self__.meta76399;
});
cljs.core.async.t76398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76400,meta76399__$1){var self__ = this;
var _76400__$1 = this;return (new cljs.core.async.t76398(self__.ch,self__.p,self__.filter_GT_,meta76399__$1));
});
cljs.core.async.__GT_t76398 = (function __GT_t76398(ch__$1,p__$1,filter_GT___$1,meta76399){return (new cljs.core.async.t76398(ch__$1,p__$1,filter_GT___$1,meta76399));
});
}
return (new cljs.core.async.t76398(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11735__auto___76483 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___76483,out){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___76483,out){
return (function (state_76462){var state_val_76463 = (state_76462[(1)]);if((state_val_76463 === (7)))
{var inst_76458 = (state_76462[(2)]);var state_76462__$1 = state_76462;var statearr_76464_76484 = state_76462__$1;(statearr_76464_76484[(2)] = inst_76458);
(statearr_76464_76484[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (1)))
{var state_76462__$1 = state_76462;var statearr_76465_76485 = state_76462__$1;(statearr_76465_76485[(2)] = null);
(statearr_76465_76485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (4)))
{var inst_76444 = (state_76462[(7)]);var inst_76444__$1 = (state_76462[(2)]);var inst_76445 = (inst_76444__$1 == null);var state_76462__$1 = (function (){var statearr_76466 = state_76462;(statearr_76466[(7)] = inst_76444__$1);
return statearr_76466;
})();if(cljs.core.truth_(inst_76445))
{var statearr_76467_76486 = state_76462__$1;(statearr_76467_76486[(1)] = (5));
} else
{var statearr_76468_76487 = state_76462__$1;(statearr_76468_76487[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (6)))
{var inst_76444 = (state_76462[(7)]);var inst_76449 = p.call(null,inst_76444);var state_76462__$1 = state_76462;if(cljs.core.truth_(inst_76449))
{var statearr_76469_76488 = state_76462__$1;(statearr_76469_76488[(1)] = (8));
} else
{var statearr_76470_76489 = state_76462__$1;(statearr_76470_76489[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (3)))
{var inst_76460 = (state_76462[(2)]);var state_76462__$1 = state_76462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76462__$1,inst_76460);
} else
{if((state_val_76463 === (2)))
{var state_76462__$1 = state_76462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76462__$1,(4),ch);
} else
{if((state_val_76463 === (11)))
{var inst_76452 = (state_76462[(2)]);var state_76462__$1 = state_76462;var statearr_76471_76490 = state_76462__$1;(statearr_76471_76490[(2)] = inst_76452);
(statearr_76471_76490[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (9)))
{var state_76462__$1 = state_76462;var statearr_76472_76491 = state_76462__$1;(statearr_76472_76491[(2)] = null);
(statearr_76472_76491[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (5)))
{var inst_76447 = cljs.core.async.close_BANG_.call(null,out);var state_76462__$1 = state_76462;var statearr_76473_76492 = state_76462__$1;(statearr_76473_76492[(2)] = inst_76447);
(statearr_76473_76492[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (10)))
{var inst_76455 = (state_76462[(2)]);var state_76462__$1 = (function (){var statearr_76474 = state_76462;(statearr_76474[(8)] = inst_76455);
return statearr_76474;
})();var statearr_76475_76493 = state_76462__$1;(statearr_76475_76493[(2)] = null);
(statearr_76475_76493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76463 === (8)))
{var inst_76444 = (state_76462[(7)]);var state_76462__$1 = state_76462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76462__$1,(11),out,inst_76444);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___76483,out))
;return ((function (switch__11720__auto__,c__11735__auto___76483,out){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_76479 = [null,null,null,null,null,null,null,null,null];(statearr_76479[(0)] = state_machine__11721__auto__);
(statearr_76479[(1)] = (1));
return statearr_76479;
});
var state_machine__11721__auto____1 = (function (state_76462){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_76462);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e76480){if((e76480 instanceof Object))
{var ex__11724__auto__ = e76480;var statearr_76481_76494 = state_76462;(statearr_76481_76494[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76480;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76495 = state_76462;
state_76462 = G__76495;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_76462){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_76462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___76483,out))
})();var state__11737__auto__ = (function (){var statearr_76482 = f__11736__auto__.call(null);(statearr_76482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___76483);
return statearr_76482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___76483,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__){
return (function (state_76661){var state_val_76662 = (state_76661[(1)]);if((state_val_76662 === (7)))
{var inst_76657 = (state_76661[(2)]);var state_76661__$1 = state_76661;var statearr_76663_76704 = state_76661__$1;(statearr_76663_76704[(2)] = inst_76657);
(statearr_76663_76704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (20)))
{var inst_76627 = (state_76661[(7)]);var inst_76638 = (state_76661[(2)]);var inst_76639 = cljs.core.next.call(null,inst_76627);var inst_76613 = inst_76639;var inst_76614 = null;var inst_76615 = (0);var inst_76616 = (0);var state_76661__$1 = (function (){var statearr_76664 = state_76661;(statearr_76664[(8)] = inst_76614);
(statearr_76664[(9)] = inst_76613);
(statearr_76664[(10)] = inst_76615);
(statearr_76664[(11)] = inst_76616);
(statearr_76664[(12)] = inst_76638);
return statearr_76664;
})();var statearr_76665_76705 = state_76661__$1;(statearr_76665_76705[(2)] = null);
(statearr_76665_76705[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (1)))
{var state_76661__$1 = state_76661;var statearr_76666_76706 = state_76661__$1;(statearr_76666_76706[(2)] = null);
(statearr_76666_76706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (4)))
{var inst_76602 = (state_76661[(13)]);var inst_76602__$1 = (state_76661[(2)]);var inst_76603 = (inst_76602__$1 == null);var state_76661__$1 = (function (){var statearr_76667 = state_76661;(statearr_76667[(13)] = inst_76602__$1);
return statearr_76667;
})();if(cljs.core.truth_(inst_76603))
{var statearr_76668_76707 = state_76661__$1;(statearr_76668_76707[(1)] = (5));
} else
{var statearr_76669_76708 = state_76661__$1;(statearr_76669_76708[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (15)))
{var state_76661__$1 = state_76661;var statearr_76673_76709 = state_76661__$1;(statearr_76673_76709[(2)] = null);
(statearr_76673_76709[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (21)))
{var state_76661__$1 = state_76661;var statearr_76674_76710 = state_76661__$1;(statearr_76674_76710[(2)] = null);
(statearr_76674_76710[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (13)))
{var inst_76614 = (state_76661[(8)]);var inst_76613 = (state_76661[(9)]);var inst_76615 = (state_76661[(10)]);var inst_76616 = (state_76661[(11)]);var inst_76623 = (state_76661[(2)]);var inst_76624 = (inst_76616 + (1));var tmp76670 = inst_76614;var tmp76671 = inst_76613;var tmp76672 = inst_76615;var inst_76613__$1 = tmp76671;var inst_76614__$1 = tmp76670;var inst_76615__$1 = tmp76672;var inst_76616__$1 = inst_76624;var state_76661__$1 = (function (){var statearr_76675 = state_76661;(statearr_76675[(8)] = inst_76614__$1);
(statearr_76675[(9)] = inst_76613__$1);
(statearr_76675[(10)] = inst_76615__$1);
(statearr_76675[(11)] = inst_76616__$1);
(statearr_76675[(14)] = inst_76623);
return statearr_76675;
})();var statearr_76676_76711 = state_76661__$1;(statearr_76676_76711[(2)] = null);
(statearr_76676_76711[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (22)))
{var state_76661__$1 = state_76661;var statearr_76677_76712 = state_76661__$1;(statearr_76677_76712[(2)] = null);
(statearr_76677_76712[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (6)))
{var inst_76602 = (state_76661[(13)]);var inst_76611 = f.call(null,inst_76602);var inst_76612 = cljs.core.seq.call(null,inst_76611);var inst_76613 = inst_76612;var inst_76614 = null;var inst_76615 = (0);var inst_76616 = (0);var state_76661__$1 = (function (){var statearr_76678 = state_76661;(statearr_76678[(8)] = inst_76614);
(statearr_76678[(9)] = inst_76613);
(statearr_76678[(10)] = inst_76615);
(statearr_76678[(11)] = inst_76616);
return statearr_76678;
})();var statearr_76679_76713 = state_76661__$1;(statearr_76679_76713[(2)] = null);
(statearr_76679_76713[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (17)))
{var inst_76627 = (state_76661[(7)]);var inst_76631 = cljs.core.chunk_first.call(null,inst_76627);var inst_76632 = cljs.core.chunk_rest.call(null,inst_76627);var inst_76633 = cljs.core.count.call(null,inst_76631);var inst_76613 = inst_76632;var inst_76614 = inst_76631;var inst_76615 = inst_76633;var inst_76616 = (0);var state_76661__$1 = (function (){var statearr_76680 = state_76661;(statearr_76680[(8)] = inst_76614);
(statearr_76680[(9)] = inst_76613);
(statearr_76680[(10)] = inst_76615);
(statearr_76680[(11)] = inst_76616);
return statearr_76680;
})();var statearr_76681_76714 = state_76661__$1;(statearr_76681_76714[(2)] = null);
(statearr_76681_76714[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (3)))
{var inst_76659 = (state_76661[(2)]);var state_76661__$1 = state_76661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76661__$1,inst_76659);
} else
{if((state_val_76662 === (12)))
{var inst_76647 = (state_76661[(2)]);var state_76661__$1 = state_76661;var statearr_76682_76715 = state_76661__$1;(statearr_76682_76715[(2)] = inst_76647);
(statearr_76682_76715[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (2)))
{var state_76661__$1 = state_76661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76661__$1,(4),in$);
} else
{if((state_val_76662 === (23)))
{var inst_76655 = (state_76661[(2)]);var state_76661__$1 = state_76661;var statearr_76683_76716 = state_76661__$1;(statearr_76683_76716[(2)] = inst_76655);
(statearr_76683_76716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (19)))
{var inst_76642 = (state_76661[(2)]);var state_76661__$1 = state_76661;var statearr_76684_76717 = state_76661__$1;(statearr_76684_76717[(2)] = inst_76642);
(statearr_76684_76717[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (11)))
{var inst_76613 = (state_76661[(9)]);var inst_76627 = (state_76661[(7)]);var inst_76627__$1 = cljs.core.seq.call(null,inst_76613);var state_76661__$1 = (function (){var statearr_76685 = state_76661;(statearr_76685[(7)] = inst_76627__$1);
return statearr_76685;
})();if(inst_76627__$1)
{var statearr_76686_76718 = state_76661__$1;(statearr_76686_76718[(1)] = (14));
} else
{var statearr_76687_76719 = state_76661__$1;(statearr_76687_76719[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (9)))
{var inst_76649 = (state_76661[(2)]);var inst_76650 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_76661__$1 = (function (){var statearr_76688 = state_76661;(statearr_76688[(15)] = inst_76649);
return statearr_76688;
})();if(cljs.core.truth_(inst_76650))
{var statearr_76689_76720 = state_76661__$1;(statearr_76689_76720[(1)] = (21));
} else
{var statearr_76690_76721 = state_76661__$1;(statearr_76690_76721[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (5)))
{var inst_76605 = cljs.core.async.close_BANG_.call(null,out);var state_76661__$1 = state_76661;var statearr_76691_76722 = state_76661__$1;(statearr_76691_76722[(2)] = inst_76605);
(statearr_76691_76722[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (14)))
{var inst_76627 = (state_76661[(7)]);var inst_76629 = cljs.core.chunked_seq_QMARK_.call(null,inst_76627);var state_76661__$1 = state_76661;if(inst_76629)
{var statearr_76692_76723 = state_76661__$1;(statearr_76692_76723[(1)] = (17));
} else
{var statearr_76693_76724 = state_76661__$1;(statearr_76693_76724[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (16)))
{var inst_76645 = (state_76661[(2)]);var state_76661__$1 = state_76661;var statearr_76694_76725 = state_76661__$1;(statearr_76694_76725[(2)] = inst_76645);
(statearr_76694_76725[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76662 === (10)))
{var inst_76614 = (state_76661[(8)]);var inst_76616 = (state_76661[(11)]);var inst_76621 = cljs.core._nth.call(null,inst_76614,inst_76616);var state_76661__$1 = state_76661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76661__$1,(13),out,inst_76621);
} else
{if((state_val_76662 === (18)))
{var inst_76627 = (state_76661[(7)]);var inst_76636 = cljs.core.first.call(null,inst_76627);var state_76661__$1 = state_76661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76661__$1,(20),out,inst_76636);
} else
{if((state_val_76662 === (8)))
{var inst_76615 = (state_76661[(10)]);var inst_76616 = (state_76661[(11)]);var inst_76618 = (inst_76616 < inst_76615);var inst_76619 = inst_76618;var state_76661__$1 = state_76661;if(cljs.core.truth_(inst_76619))
{var statearr_76695_76726 = state_76661__$1;(statearr_76695_76726[(1)] = (10));
} else
{var statearr_76696_76727 = state_76661__$1;(statearr_76696_76727[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto__))
;return ((function (switch__11720__auto__,c__11735__auto__){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_76700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_76700[(0)] = state_machine__11721__auto__);
(statearr_76700[(1)] = (1));
return statearr_76700;
});
var state_machine__11721__auto____1 = (function (state_76661){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_76661);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e76701){if((e76701 instanceof Object))
{var ex__11724__auto__ = e76701;var statearr_76702_76728 = state_76661;(statearr_76702_76728[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76729 = state_76661;
state_76661 = G__76729;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_76661){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_76661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__))
})();var state__11737__auto__ = (function (){var statearr_76703 = f__11736__auto__.call(null);(statearr_76703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_76703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__))
);
return c__11735__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11735__auto___76824 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___76824){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___76824){
return (function (state_76800){var state_val_76801 = (state_76800[(1)]);if((state_val_76801 === (7)))
{var inst_76796 = (state_76800[(2)]);var state_76800__$1 = state_76800;var statearr_76802_76825 = state_76800__$1;(statearr_76802_76825[(2)] = inst_76796);
(statearr_76802_76825[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (1)))
{var state_76800__$1 = state_76800;var statearr_76803_76826 = state_76800__$1;(statearr_76803_76826[(2)] = null);
(statearr_76803_76826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (4)))
{var inst_76779 = (state_76800[(7)]);var inst_76779__$1 = (state_76800[(2)]);var inst_76780 = (inst_76779__$1 == null);var state_76800__$1 = (function (){var statearr_76804 = state_76800;(statearr_76804[(7)] = inst_76779__$1);
return statearr_76804;
})();if(cljs.core.truth_(inst_76780))
{var statearr_76805_76827 = state_76800__$1;(statearr_76805_76827[(1)] = (5));
} else
{var statearr_76806_76828 = state_76800__$1;(statearr_76806_76828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (13)))
{var state_76800__$1 = state_76800;var statearr_76807_76829 = state_76800__$1;(statearr_76807_76829[(2)] = null);
(statearr_76807_76829[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (6)))
{var inst_76779 = (state_76800[(7)]);var state_76800__$1 = state_76800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76800__$1,(11),to,inst_76779);
} else
{if((state_val_76801 === (3)))
{var inst_76798 = (state_76800[(2)]);var state_76800__$1 = state_76800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76800__$1,inst_76798);
} else
{if((state_val_76801 === (12)))
{var state_76800__$1 = state_76800;var statearr_76808_76830 = state_76800__$1;(statearr_76808_76830[(2)] = null);
(statearr_76808_76830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (2)))
{var state_76800__$1 = state_76800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76800__$1,(4),from);
} else
{if((state_val_76801 === (11)))
{var inst_76789 = (state_76800[(2)]);var state_76800__$1 = state_76800;if(cljs.core.truth_(inst_76789))
{var statearr_76809_76831 = state_76800__$1;(statearr_76809_76831[(1)] = (12));
} else
{var statearr_76810_76832 = state_76800__$1;(statearr_76810_76832[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (9)))
{var state_76800__$1 = state_76800;var statearr_76811_76833 = state_76800__$1;(statearr_76811_76833[(2)] = null);
(statearr_76811_76833[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (5)))
{var state_76800__$1 = state_76800;if(cljs.core.truth_(close_QMARK_))
{var statearr_76812_76834 = state_76800__$1;(statearr_76812_76834[(1)] = (8));
} else
{var statearr_76813_76835 = state_76800__$1;(statearr_76813_76835[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (14)))
{var inst_76794 = (state_76800[(2)]);var state_76800__$1 = state_76800;var statearr_76814_76836 = state_76800__$1;(statearr_76814_76836[(2)] = inst_76794);
(statearr_76814_76836[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (10)))
{var inst_76786 = (state_76800[(2)]);var state_76800__$1 = state_76800;var statearr_76815_76837 = state_76800__$1;(statearr_76815_76837[(2)] = inst_76786);
(statearr_76815_76837[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76801 === (8)))
{var inst_76783 = cljs.core.async.close_BANG_.call(null,to);var state_76800__$1 = state_76800;var statearr_76816_76838 = state_76800__$1;(statearr_76816_76838[(2)] = inst_76783);
(statearr_76816_76838[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___76824))
;return ((function (switch__11720__auto__,c__11735__auto___76824){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_76820 = [null,null,null,null,null,null,null,null];(statearr_76820[(0)] = state_machine__11721__auto__);
(statearr_76820[(1)] = (1));
return statearr_76820;
});
var state_machine__11721__auto____1 = (function (state_76800){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_76800);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e76821){if((e76821 instanceof Object))
{var ex__11724__auto__ = e76821;var statearr_76822_76839 = state_76800;(statearr_76822_76839[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76821;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76840 = state_76800;
state_76800 = G__76840;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_76800){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_76800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___76824))
})();var state__11737__auto__ = (function (){var statearr_76823 = f__11736__auto__.call(null);(statearr_76823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___76824);
return statearr_76823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___76824))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11735__auto___76941 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___76941,tc,fc){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___76941,tc,fc){
return (function (state_76916){var state_val_76917 = (state_76916[(1)]);if((state_val_76917 === (7)))
{var inst_76912 = (state_76916[(2)]);var state_76916__$1 = state_76916;var statearr_76918_76942 = state_76916__$1;(statearr_76918_76942[(2)] = inst_76912);
(statearr_76918_76942[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (1)))
{var state_76916__$1 = state_76916;var statearr_76919_76943 = state_76916__$1;(statearr_76919_76943[(2)] = null);
(statearr_76919_76943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (4)))
{var inst_76893 = (state_76916[(7)]);var inst_76893__$1 = (state_76916[(2)]);var inst_76894 = (inst_76893__$1 == null);var state_76916__$1 = (function (){var statearr_76920 = state_76916;(statearr_76920[(7)] = inst_76893__$1);
return statearr_76920;
})();if(cljs.core.truth_(inst_76894))
{var statearr_76921_76944 = state_76916__$1;(statearr_76921_76944[(1)] = (5));
} else
{var statearr_76922_76945 = state_76916__$1;(statearr_76922_76945[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (13)))
{var state_76916__$1 = state_76916;var statearr_76923_76946 = state_76916__$1;(statearr_76923_76946[(2)] = null);
(statearr_76923_76946[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (6)))
{var inst_76893 = (state_76916[(7)]);var inst_76899 = p.call(null,inst_76893);var state_76916__$1 = state_76916;if(cljs.core.truth_(inst_76899))
{var statearr_76924_76947 = state_76916__$1;(statearr_76924_76947[(1)] = (9));
} else
{var statearr_76925_76948 = state_76916__$1;(statearr_76925_76948[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (3)))
{var inst_76914 = (state_76916[(2)]);var state_76916__$1 = state_76916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76916__$1,inst_76914);
} else
{if((state_val_76917 === (12)))
{var state_76916__$1 = state_76916;var statearr_76926_76949 = state_76916__$1;(statearr_76926_76949[(2)] = null);
(statearr_76926_76949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (2)))
{var state_76916__$1 = state_76916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76916__$1,(4),ch);
} else
{if((state_val_76917 === (11)))
{var inst_76893 = (state_76916[(7)]);var inst_76903 = (state_76916[(2)]);var state_76916__$1 = state_76916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76916__$1,(8),inst_76903,inst_76893);
} else
{if((state_val_76917 === (9)))
{var state_76916__$1 = state_76916;var statearr_76927_76950 = state_76916__$1;(statearr_76927_76950[(2)] = tc);
(statearr_76927_76950[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (5)))
{var inst_76896 = cljs.core.async.close_BANG_.call(null,tc);var inst_76897 = cljs.core.async.close_BANG_.call(null,fc);var state_76916__$1 = (function (){var statearr_76928 = state_76916;(statearr_76928[(8)] = inst_76896);
return statearr_76928;
})();var statearr_76929_76951 = state_76916__$1;(statearr_76929_76951[(2)] = inst_76897);
(statearr_76929_76951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (14)))
{var inst_76910 = (state_76916[(2)]);var state_76916__$1 = state_76916;var statearr_76930_76952 = state_76916__$1;(statearr_76930_76952[(2)] = inst_76910);
(statearr_76930_76952[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (10)))
{var state_76916__$1 = state_76916;var statearr_76931_76953 = state_76916__$1;(statearr_76931_76953[(2)] = fc);
(statearr_76931_76953[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76917 === (8)))
{var inst_76905 = (state_76916[(2)]);var state_76916__$1 = state_76916;if(cljs.core.truth_(inst_76905))
{var statearr_76932_76954 = state_76916__$1;(statearr_76932_76954[(1)] = (12));
} else
{var statearr_76933_76955 = state_76916__$1;(statearr_76933_76955[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___76941,tc,fc))
;return ((function (switch__11720__auto__,c__11735__auto___76941,tc,fc){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_76937 = [null,null,null,null,null,null,null,null,null];(statearr_76937[(0)] = state_machine__11721__auto__);
(statearr_76937[(1)] = (1));
return statearr_76937;
});
var state_machine__11721__auto____1 = (function (state_76916){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_76916);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e76938){if((e76938 instanceof Object))
{var ex__11724__auto__ = e76938;var statearr_76939_76956 = state_76916;(statearr_76939_76956[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76938;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76957 = state_76916;
state_76916 = G__76957;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_76916){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_76916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___76941,tc,fc))
})();var state__11737__auto__ = (function (){var statearr_76940 = f__11736__auto__.call(null);(statearr_76940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___76941);
return statearr_76940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___76941,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__){
return (function (state_77004){var state_val_77005 = (state_77004[(1)]);if((state_val_77005 === (7)))
{var inst_77000 = (state_77004[(2)]);var state_77004__$1 = state_77004;var statearr_77006_77022 = state_77004__$1;(statearr_77006_77022[(2)] = inst_77000);
(statearr_77006_77022[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77005 === (6)))
{var inst_76993 = (state_77004[(7)]);var inst_76990 = (state_77004[(8)]);var inst_76997 = f.call(null,inst_76990,inst_76993);var inst_76990__$1 = inst_76997;var state_77004__$1 = (function (){var statearr_77007 = state_77004;(statearr_77007[(8)] = inst_76990__$1);
return statearr_77007;
})();var statearr_77008_77023 = state_77004__$1;(statearr_77008_77023[(2)] = null);
(statearr_77008_77023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77005 === (5)))
{var inst_76990 = (state_77004[(8)]);var state_77004__$1 = state_77004;var statearr_77009_77024 = state_77004__$1;(statearr_77009_77024[(2)] = inst_76990);
(statearr_77009_77024[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77005 === (4)))
{var inst_76993 = (state_77004[(7)]);var inst_76993__$1 = (state_77004[(2)]);var inst_76994 = (inst_76993__$1 == null);var state_77004__$1 = (function (){var statearr_77010 = state_77004;(statearr_77010[(7)] = inst_76993__$1);
return statearr_77010;
})();if(cljs.core.truth_(inst_76994))
{var statearr_77011_77025 = state_77004__$1;(statearr_77011_77025[(1)] = (5));
} else
{var statearr_77012_77026 = state_77004__$1;(statearr_77012_77026[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77005 === (3)))
{var inst_77002 = (state_77004[(2)]);var state_77004__$1 = state_77004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77004__$1,inst_77002);
} else
{if((state_val_77005 === (2)))
{var state_77004__$1 = state_77004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77004__$1,(4),ch);
} else
{if((state_val_77005 === (1)))
{var inst_76990 = init;var state_77004__$1 = (function (){var statearr_77013 = state_77004;(statearr_77013[(8)] = inst_76990);
return statearr_77013;
})();var statearr_77014_77027 = state_77004__$1;(statearr_77014_77027[(2)] = null);
(statearr_77014_77027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11735__auto__))
;return ((function (switch__11720__auto__,c__11735__auto__){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_77018 = [null,null,null,null,null,null,null,null,null];(statearr_77018[(0)] = state_machine__11721__auto__);
(statearr_77018[(1)] = (1));
return statearr_77018;
});
var state_machine__11721__auto____1 = (function (state_77004){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_77004);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e77019){if((e77019 instanceof Object))
{var ex__11724__auto__ = e77019;var statearr_77020_77028 = state_77004;(statearr_77020_77028[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77004);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77019;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77029 = state_77004;
state_77004 = G__77029;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_77004){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_77004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__))
})();var state__11737__auto__ = (function (){var statearr_77021 = f__11736__auto__.call(null);(statearr_77021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_77021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__))
);
return c__11735__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__){
return (function (state_77103){var state_val_77104 = (state_77103[(1)]);if((state_val_77104 === (7)))
{var inst_77085 = (state_77103[(2)]);var state_77103__$1 = state_77103;var statearr_77105_77128 = state_77103__$1;(statearr_77105_77128[(2)] = inst_77085);
(statearr_77105_77128[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (1)))
{var inst_77079 = cljs.core.seq.call(null,coll);var inst_77080 = inst_77079;var state_77103__$1 = (function (){var statearr_77106 = state_77103;(statearr_77106[(7)] = inst_77080);
return statearr_77106;
})();var statearr_77107_77129 = state_77103__$1;(statearr_77107_77129[(2)] = null);
(statearr_77107_77129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (4)))
{var inst_77080 = (state_77103[(7)]);var inst_77083 = cljs.core.first.call(null,inst_77080);var state_77103__$1 = state_77103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77103__$1,(7),ch,inst_77083);
} else
{if((state_val_77104 === (13)))
{var inst_77097 = (state_77103[(2)]);var state_77103__$1 = state_77103;var statearr_77108_77130 = state_77103__$1;(statearr_77108_77130[(2)] = inst_77097);
(statearr_77108_77130[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (6)))
{var inst_77088 = (state_77103[(2)]);var state_77103__$1 = state_77103;if(cljs.core.truth_(inst_77088))
{var statearr_77109_77131 = state_77103__$1;(statearr_77109_77131[(1)] = (8));
} else
{var statearr_77110_77132 = state_77103__$1;(statearr_77110_77132[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (3)))
{var inst_77101 = (state_77103[(2)]);var state_77103__$1 = state_77103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77103__$1,inst_77101);
} else
{if((state_val_77104 === (12)))
{var state_77103__$1 = state_77103;var statearr_77111_77133 = state_77103__$1;(statearr_77111_77133[(2)] = null);
(statearr_77111_77133[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (2)))
{var inst_77080 = (state_77103[(7)]);var state_77103__$1 = state_77103;if(cljs.core.truth_(inst_77080))
{var statearr_77112_77134 = state_77103__$1;(statearr_77112_77134[(1)] = (4));
} else
{var statearr_77113_77135 = state_77103__$1;(statearr_77113_77135[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (11)))
{var inst_77094 = cljs.core.async.close_BANG_.call(null,ch);var state_77103__$1 = state_77103;var statearr_77114_77136 = state_77103__$1;(statearr_77114_77136[(2)] = inst_77094);
(statearr_77114_77136[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (9)))
{var state_77103__$1 = state_77103;if(cljs.core.truth_(close_QMARK_))
{var statearr_77115_77137 = state_77103__$1;(statearr_77115_77137[(1)] = (11));
} else
{var statearr_77116_77138 = state_77103__$1;(statearr_77116_77138[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (5)))
{var inst_77080 = (state_77103[(7)]);var state_77103__$1 = state_77103;var statearr_77117_77139 = state_77103__$1;(statearr_77117_77139[(2)] = inst_77080);
(statearr_77117_77139[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (10)))
{var inst_77099 = (state_77103[(2)]);var state_77103__$1 = state_77103;var statearr_77118_77140 = state_77103__$1;(statearr_77118_77140[(2)] = inst_77099);
(statearr_77118_77140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77104 === (8)))
{var inst_77080 = (state_77103[(7)]);var inst_77090 = cljs.core.next.call(null,inst_77080);var inst_77080__$1 = inst_77090;var state_77103__$1 = (function (){var statearr_77119 = state_77103;(statearr_77119[(7)] = inst_77080__$1);
return statearr_77119;
})();var statearr_77120_77141 = state_77103__$1;(statearr_77120_77141[(2)] = null);
(statearr_77120_77141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto__))
;return ((function (switch__11720__auto__,c__11735__auto__){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_77124 = [null,null,null,null,null,null,null,null];(statearr_77124[(0)] = state_machine__11721__auto__);
(statearr_77124[(1)] = (1));
return statearr_77124;
});
var state_machine__11721__auto____1 = (function (state_77103){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_77103);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e77125){if((e77125 instanceof Object))
{var ex__11724__auto__ = e77125;var statearr_77126_77142 = state_77103;(statearr_77126_77142[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77143 = state_77103;
state_77103 = G__77143;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_77103){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_77103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__))
})();var state__11737__auto__ = (function (){var statearr_77127 = f__11736__auto__.call(null);(statearr_77127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_77127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__))
);
return c__11735__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj77145 = {};return obj77145;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7981__auto__ = _;if(and__7981__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7981__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8629__auto__ = (((_ == null))?null:_);return (function (){var or__7993__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj77147 = {};return obj77147;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t77369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t77369 = (function (cs,ch,mult,meta77370){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta77370 = meta77370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t77369.cljs$lang$type = true;
cljs.core.async.t77369.cljs$lang$ctorStr = "cljs.core.async/t77369";
cljs.core.async.t77369.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t77369");
});})(cs))
;
cljs.core.async.t77369.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t77369.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t77369.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t77369.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t77369.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t77369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t77369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_77371){var self__ = this;
var _77371__$1 = this;return self__.meta77370;
});})(cs))
;
cljs.core.async.t77369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_77371,meta77370__$1){var self__ = this;
var _77371__$1 = this;return (new cljs.core.async.t77369(self__.cs,self__.ch,self__.mult,meta77370__$1));
});})(cs))
;
cljs.core.async.__GT_t77369 = ((function (cs){
return (function __GT_t77369(cs__$1,ch__$1,mult__$1,meta77370){return (new cljs.core.async.t77369(cs__$1,ch__$1,mult__$1,meta77370));
});})(cs))
;
}
return (new cljs.core.async.t77369(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11735__auto___77590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___77590,cs,m,dchan,dctr,done){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___77590,cs,m,dchan,dctr,done){
return (function (state_77502){var state_val_77503 = (state_77502[(1)]);if((state_val_77503 === (7)))
{var inst_77498 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77504_77591 = state_77502__$1;(statearr_77504_77591[(2)] = inst_77498);
(statearr_77504_77591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (20)))
{var inst_77403 = (state_77502[(7)]);var inst_77413 = cljs.core.first.call(null,inst_77403);var inst_77414 = cljs.core.nth.call(null,inst_77413,(0),null);var inst_77415 = cljs.core.nth.call(null,inst_77413,(1),null);var state_77502__$1 = (function (){var statearr_77505 = state_77502;(statearr_77505[(8)] = inst_77414);
return statearr_77505;
})();if(cljs.core.truth_(inst_77415))
{var statearr_77506_77592 = state_77502__$1;(statearr_77506_77592[(1)] = (22));
} else
{var statearr_77507_77593 = state_77502__$1;(statearr_77507_77593[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (27)))
{var inst_77445 = (state_77502[(9)]);var inst_77450 = (state_77502[(10)]);var inst_77374 = (state_77502[(11)]);var inst_77443 = (state_77502[(12)]);var inst_77450__$1 = cljs.core._nth.call(null,inst_77443,inst_77445);var inst_77451 = cljs.core.async.put_BANG_.call(null,inst_77450__$1,inst_77374,done);var state_77502__$1 = (function (){var statearr_77508 = state_77502;(statearr_77508[(10)] = inst_77450__$1);
return statearr_77508;
})();if(cljs.core.truth_(inst_77451))
{var statearr_77509_77594 = state_77502__$1;(statearr_77509_77594[(1)] = (30));
} else
{var statearr_77510_77595 = state_77502__$1;(statearr_77510_77595[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (1)))
{var state_77502__$1 = state_77502;var statearr_77511_77596 = state_77502__$1;(statearr_77511_77596[(2)] = null);
(statearr_77511_77596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (24)))
{var inst_77403 = (state_77502[(7)]);var inst_77420 = (state_77502[(2)]);var inst_77421 = cljs.core.next.call(null,inst_77403);var inst_77383 = inst_77421;var inst_77384 = null;var inst_77385 = (0);var inst_77386 = (0);var state_77502__$1 = (function (){var statearr_77512 = state_77502;(statearr_77512[(13)] = inst_77386);
(statearr_77512[(14)] = inst_77385);
(statearr_77512[(15)] = inst_77420);
(statearr_77512[(16)] = inst_77384);
(statearr_77512[(17)] = inst_77383);
return statearr_77512;
})();var statearr_77513_77597 = state_77502__$1;(statearr_77513_77597[(2)] = null);
(statearr_77513_77597[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (39)))
{var state_77502__$1 = state_77502;var statearr_77517_77598 = state_77502__$1;(statearr_77517_77598[(2)] = null);
(statearr_77517_77598[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (4)))
{var inst_77374 = (state_77502[(11)]);var inst_77374__$1 = (state_77502[(2)]);var inst_77375 = (inst_77374__$1 == null);var state_77502__$1 = (function (){var statearr_77518 = state_77502;(statearr_77518[(11)] = inst_77374__$1);
return statearr_77518;
})();if(cljs.core.truth_(inst_77375))
{var statearr_77519_77599 = state_77502__$1;(statearr_77519_77599[(1)] = (5));
} else
{var statearr_77520_77600 = state_77502__$1;(statearr_77520_77600[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (15)))
{var inst_77386 = (state_77502[(13)]);var inst_77385 = (state_77502[(14)]);var inst_77384 = (state_77502[(16)]);var inst_77383 = (state_77502[(17)]);var inst_77399 = (state_77502[(2)]);var inst_77400 = (inst_77386 + (1));var tmp77514 = inst_77385;var tmp77515 = inst_77384;var tmp77516 = inst_77383;var inst_77383__$1 = tmp77516;var inst_77384__$1 = tmp77515;var inst_77385__$1 = tmp77514;var inst_77386__$1 = inst_77400;var state_77502__$1 = (function (){var statearr_77521 = state_77502;(statearr_77521[(13)] = inst_77386__$1);
(statearr_77521[(14)] = inst_77385__$1);
(statearr_77521[(18)] = inst_77399);
(statearr_77521[(16)] = inst_77384__$1);
(statearr_77521[(17)] = inst_77383__$1);
return statearr_77521;
})();var statearr_77522_77601 = state_77502__$1;(statearr_77522_77601[(2)] = null);
(statearr_77522_77601[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (21)))
{var inst_77424 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77526_77602 = state_77502__$1;(statearr_77526_77602[(2)] = inst_77424);
(statearr_77526_77602[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (31)))
{var inst_77450 = (state_77502[(10)]);var inst_77454 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_77455 = cljs.core.async.untap_STAR_.call(null,m,inst_77450);var state_77502__$1 = (function (){var statearr_77527 = state_77502;(statearr_77527[(19)] = inst_77454);
return statearr_77527;
})();var statearr_77528_77603 = state_77502__$1;(statearr_77528_77603[(2)] = inst_77455);
(statearr_77528_77603[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (32)))
{var inst_77445 = (state_77502[(9)]);var inst_77444 = (state_77502[(20)]);var inst_77443 = (state_77502[(12)]);var inst_77442 = (state_77502[(21)]);var inst_77457 = (state_77502[(2)]);var inst_77458 = (inst_77445 + (1));var tmp77523 = inst_77444;var tmp77524 = inst_77443;var tmp77525 = inst_77442;var inst_77442__$1 = tmp77525;var inst_77443__$1 = tmp77524;var inst_77444__$1 = tmp77523;var inst_77445__$1 = inst_77458;var state_77502__$1 = (function (){var statearr_77529 = state_77502;(statearr_77529[(9)] = inst_77445__$1);
(statearr_77529[(22)] = inst_77457);
(statearr_77529[(20)] = inst_77444__$1);
(statearr_77529[(12)] = inst_77443__$1);
(statearr_77529[(21)] = inst_77442__$1);
return statearr_77529;
})();var statearr_77530_77604 = state_77502__$1;(statearr_77530_77604[(2)] = null);
(statearr_77530_77604[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (40)))
{var inst_77470 = (state_77502[(23)]);var inst_77474 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_77475 = cljs.core.async.untap_STAR_.call(null,m,inst_77470);var state_77502__$1 = (function (){var statearr_77531 = state_77502;(statearr_77531[(24)] = inst_77474);
return statearr_77531;
})();var statearr_77532_77605 = state_77502__$1;(statearr_77532_77605[(2)] = inst_77475);
(statearr_77532_77605[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (33)))
{var inst_77461 = (state_77502[(25)]);var inst_77463 = cljs.core.chunked_seq_QMARK_.call(null,inst_77461);var state_77502__$1 = state_77502;if(inst_77463)
{var statearr_77533_77606 = state_77502__$1;(statearr_77533_77606[(1)] = (36));
} else
{var statearr_77534_77607 = state_77502__$1;(statearr_77534_77607[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (13)))
{var inst_77393 = (state_77502[(26)]);var inst_77396 = cljs.core.async.close_BANG_.call(null,inst_77393);var state_77502__$1 = state_77502;var statearr_77535_77608 = state_77502__$1;(statearr_77535_77608[(2)] = inst_77396);
(statearr_77535_77608[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (22)))
{var inst_77414 = (state_77502[(8)]);var inst_77417 = cljs.core.async.close_BANG_.call(null,inst_77414);var state_77502__$1 = state_77502;var statearr_77536_77609 = state_77502__$1;(statearr_77536_77609[(2)] = inst_77417);
(statearr_77536_77609[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (36)))
{var inst_77461 = (state_77502[(25)]);var inst_77465 = cljs.core.chunk_first.call(null,inst_77461);var inst_77466 = cljs.core.chunk_rest.call(null,inst_77461);var inst_77467 = cljs.core.count.call(null,inst_77465);var inst_77442 = inst_77466;var inst_77443 = inst_77465;var inst_77444 = inst_77467;var inst_77445 = (0);var state_77502__$1 = (function (){var statearr_77537 = state_77502;(statearr_77537[(9)] = inst_77445);
(statearr_77537[(20)] = inst_77444);
(statearr_77537[(12)] = inst_77443);
(statearr_77537[(21)] = inst_77442);
return statearr_77537;
})();var statearr_77538_77610 = state_77502__$1;(statearr_77538_77610[(2)] = null);
(statearr_77538_77610[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (41)))
{var inst_77461 = (state_77502[(25)]);var inst_77477 = (state_77502[(2)]);var inst_77478 = cljs.core.next.call(null,inst_77461);var inst_77442 = inst_77478;var inst_77443 = null;var inst_77444 = (0);var inst_77445 = (0);var state_77502__$1 = (function (){var statearr_77539 = state_77502;(statearr_77539[(9)] = inst_77445);
(statearr_77539[(27)] = inst_77477);
(statearr_77539[(20)] = inst_77444);
(statearr_77539[(12)] = inst_77443);
(statearr_77539[(21)] = inst_77442);
return statearr_77539;
})();var statearr_77540_77611 = state_77502__$1;(statearr_77540_77611[(2)] = null);
(statearr_77540_77611[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (43)))
{var state_77502__$1 = state_77502;var statearr_77541_77612 = state_77502__$1;(statearr_77541_77612[(2)] = null);
(statearr_77541_77612[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (29)))
{var inst_77486 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77542_77613 = state_77502__$1;(statearr_77542_77613[(2)] = inst_77486);
(statearr_77542_77613[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (44)))
{var inst_77495 = (state_77502[(2)]);var state_77502__$1 = (function (){var statearr_77543 = state_77502;(statearr_77543[(28)] = inst_77495);
return statearr_77543;
})();var statearr_77544_77614 = state_77502__$1;(statearr_77544_77614[(2)] = null);
(statearr_77544_77614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (6)))
{var inst_77434 = (state_77502[(29)]);var inst_77433 = cljs.core.deref.call(null,cs);var inst_77434__$1 = cljs.core.keys.call(null,inst_77433);var inst_77435 = cljs.core.count.call(null,inst_77434__$1);var inst_77436 = cljs.core.reset_BANG_.call(null,dctr,inst_77435);var inst_77441 = cljs.core.seq.call(null,inst_77434__$1);var inst_77442 = inst_77441;var inst_77443 = null;var inst_77444 = (0);var inst_77445 = (0);var state_77502__$1 = (function (){var statearr_77545 = state_77502;(statearr_77545[(9)] = inst_77445);
(statearr_77545[(30)] = inst_77436);
(statearr_77545[(20)] = inst_77444);
(statearr_77545[(29)] = inst_77434__$1);
(statearr_77545[(12)] = inst_77443);
(statearr_77545[(21)] = inst_77442);
return statearr_77545;
})();var statearr_77546_77615 = state_77502__$1;(statearr_77546_77615[(2)] = null);
(statearr_77546_77615[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (28)))
{var inst_77461 = (state_77502[(25)]);var inst_77442 = (state_77502[(21)]);var inst_77461__$1 = cljs.core.seq.call(null,inst_77442);var state_77502__$1 = (function (){var statearr_77547 = state_77502;(statearr_77547[(25)] = inst_77461__$1);
return statearr_77547;
})();if(inst_77461__$1)
{var statearr_77548_77616 = state_77502__$1;(statearr_77548_77616[(1)] = (33));
} else
{var statearr_77549_77617 = state_77502__$1;(statearr_77549_77617[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (25)))
{var inst_77445 = (state_77502[(9)]);var inst_77444 = (state_77502[(20)]);var inst_77447 = (inst_77445 < inst_77444);var inst_77448 = inst_77447;var state_77502__$1 = state_77502;if(cljs.core.truth_(inst_77448))
{var statearr_77550_77618 = state_77502__$1;(statearr_77550_77618[(1)] = (27));
} else
{var statearr_77551_77619 = state_77502__$1;(statearr_77551_77619[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (34)))
{var state_77502__$1 = state_77502;var statearr_77552_77620 = state_77502__$1;(statearr_77552_77620[(2)] = null);
(statearr_77552_77620[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (17)))
{var state_77502__$1 = state_77502;var statearr_77553_77621 = state_77502__$1;(statearr_77553_77621[(2)] = null);
(statearr_77553_77621[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (3)))
{var inst_77500 = (state_77502[(2)]);var state_77502__$1 = state_77502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77502__$1,inst_77500);
} else
{if((state_val_77503 === (12)))
{var inst_77429 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77554_77622 = state_77502__$1;(statearr_77554_77622[(2)] = inst_77429);
(statearr_77554_77622[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (2)))
{var state_77502__$1 = state_77502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77502__$1,(4),ch);
} else
{if((state_val_77503 === (23)))
{var state_77502__$1 = state_77502;var statearr_77555_77623 = state_77502__$1;(statearr_77555_77623[(2)] = null);
(statearr_77555_77623[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (35)))
{var inst_77484 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77556_77624 = state_77502__$1;(statearr_77556_77624[(2)] = inst_77484);
(statearr_77556_77624[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (19)))
{var inst_77403 = (state_77502[(7)]);var inst_77407 = cljs.core.chunk_first.call(null,inst_77403);var inst_77408 = cljs.core.chunk_rest.call(null,inst_77403);var inst_77409 = cljs.core.count.call(null,inst_77407);var inst_77383 = inst_77408;var inst_77384 = inst_77407;var inst_77385 = inst_77409;var inst_77386 = (0);var state_77502__$1 = (function (){var statearr_77557 = state_77502;(statearr_77557[(13)] = inst_77386);
(statearr_77557[(14)] = inst_77385);
(statearr_77557[(16)] = inst_77384);
(statearr_77557[(17)] = inst_77383);
return statearr_77557;
})();var statearr_77558_77625 = state_77502__$1;(statearr_77558_77625[(2)] = null);
(statearr_77558_77625[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (11)))
{var inst_77383 = (state_77502[(17)]);var inst_77403 = (state_77502[(7)]);var inst_77403__$1 = cljs.core.seq.call(null,inst_77383);var state_77502__$1 = (function (){var statearr_77559 = state_77502;(statearr_77559[(7)] = inst_77403__$1);
return statearr_77559;
})();if(inst_77403__$1)
{var statearr_77560_77626 = state_77502__$1;(statearr_77560_77626[(1)] = (16));
} else
{var statearr_77561_77627 = state_77502__$1;(statearr_77561_77627[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (9)))
{var inst_77431 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77562_77628 = state_77502__$1;(statearr_77562_77628[(2)] = inst_77431);
(statearr_77562_77628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (5)))
{var inst_77381 = cljs.core.deref.call(null,cs);var inst_77382 = cljs.core.seq.call(null,inst_77381);var inst_77383 = inst_77382;var inst_77384 = null;var inst_77385 = (0);var inst_77386 = (0);var state_77502__$1 = (function (){var statearr_77563 = state_77502;(statearr_77563[(13)] = inst_77386);
(statearr_77563[(14)] = inst_77385);
(statearr_77563[(16)] = inst_77384);
(statearr_77563[(17)] = inst_77383);
return statearr_77563;
})();var statearr_77564_77629 = state_77502__$1;(statearr_77564_77629[(2)] = null);
(statearr_77564_77629[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (14)))
{var state_77502__$1 = state_77502;var statearr_77565_77630 = state_77502__$1;(statearr_77565_77630[(2)] = null);
(statearr_77565_77630[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (45)))
{var inst_77492 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77566_77631 = state_77502__$1;(statearr_77566_77631[(2)] = inst_77492);
(statearr_77566_77631[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (26)))
{var inst_77434 = (state_77502[(29)]);var inst_77488 = (state_77502[(2)]);var inst_77489 = cljs.core.seq.call(null,inst_77434);var state_77502__$1 = (function (){var statearr_77567 = state_77502;(statearr_77567[(31)] = inst_77488);
return statearr_77567;
})();if(inst_77489)
{var statearr_77568_77632 = state_77502__$1;(statearr_77568_77632[(1)] = (42));
} else
{var statearr_77569_77633 = state_77502__$1;(statearr_77569_77633[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (16)))
{var inst_77403 = (state_77502[(7)]);var inst_77405 = cljs.core.chunked_seq_QMARK_.call(null,inst_77403);var state_77502__$1 = state_77502;if(inst_77405)
{var statearr_77570_77634 = state_77502__$1;(statearr_77570_77634[(1)] = (19));
} else
{var statearr_77571_77635 = state_77502__$1;(statearr_77571_77635[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (38)))
{var inst_77481 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77572_77636 = state_77502__$1;(statearr_77572_77636[(2)] = inst_77481);
(statearr_77572_77636[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (30)))
{var state_77502__$1 = state_77502;var statearr_77573_77637 = state_77502__$1;(statearr_77573_77637[(2)] = null);
(statearr_77573_77637[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (10)))
{var inst_77386 = (state_77502[(13)]);var inst_77384 = (state_77502[(16)]);var inst_77392 = cljs.core._nth.call(null,inst_77384,inst_77386);var inst_77393 = cljs.core.nth.call(null,inst_77392,(0),null);var inst_77394 = cljs.core.nth.call(null,inst_77392,(1),null);var state_77502__$1 = (function (){var statearr_77574 = state_77502;(statearr_77574[(26)] = inst_77393);
return statearr_77574;
})();if(cljs.core.truth_(inst_77394))
{var statearr_77575_77638 = state_77502__$1;(statearr_77575_77638[(1)] = (13));
} else
{var statearr_77576_77639 = state_77502__$1;(statearr_77576_77639[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (18)))
{var inst_77427 = (state_77502[(2)]);var state_77502__$1 = state_77502;var statearr_77577_77640 = state_77502__$1;(statearr_77577_77640[(2)] = inst_77427);
(statearr_77577_77640[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (42)))
{var state_77502__$1 = state_77502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77502__$1,(45),dchan);
} else
{if((state_val_77503 === (37)))
{var inst_77470 = (state_77502[(23)]);var inst_77374 = (state_77502[(11)]);var inst_77461 = (state_77502[(25)]);var inst_77470__$1 = cljs.core.first.call(null,inst_77461);var inst_77471 = cljs.core.async.put_BANG_.call(null,inst_77470__$1,inst_77374,done);var state_77502__$1 = (function (){var statearr_77578 = state_77502;(statearr_77578[(23)] = inst_77470__$1);
return statearr_77578;
})();if(cljs.core.truth_(inst_77471))
{var statearr_77579_77641 = state_77502__$1;(statearr_77579_77641[(1)] = (39));
} else
{var statearr_77580_77642 = state_77502__$1;(statearr_77580_77642[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77503 === (8)))
{var inst_77386 = (state_77502[(13)]);var inst_77385 = (state_77502[(14)]);var inst_77388 = (inst_77386 < inst_77385);var inst_77389 = inst_77388;var state_77502__$1 = state_77502;if(cljs.core.truth_(inst_77389))
{var statearr_77581_77643 = state_77502__$1;(statearr_77581_77643[(1)] = (10));
} else
{var statearr_77582_77644 = state_77502__$1;(statearr_77582_77644[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___77590,cs,m,dchan,dctr,done))
;return ((function (switch__11720__auto__,c__11735__auto___77590,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_77586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77586[(0)] = state_machine__11721__auto__);
(statearr_77586[(1)] = (1));
return statearr_77586;
});
var state_machine__11721__auto____1 = (function (state_77502){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_77502);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e77587){if((e77587 instanceof Object))
{var ex__11724__auto__ = e77587;var statearr_77588_77645 = state_77502;(statearr_77588_77645[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77646 = state_77502;
state_77502 = G__77646;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_77502){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_77502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___77590,cs,m,dchan,dctr,done))
})();var state__11737__auto__ = (function (){var statearr_77589 = f__11736__auto__.call(null);(statearr_77589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___77590);
return statearr_77589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___77590,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj77648 = {};return obj77648;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7981__auto__ = m;if(and__7981__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7981__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8629__auto__ = (((m == null))?null:m);return (function (){var or__7993__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t77768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t77768 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta77769){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta77769 = meta77769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t77768.cljs$lang$type = true;
cljs.core.async.t77768.cljs$lang$ctorStr = "cljs.core.async/t77768";
cljs.core.async.t77768.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t77768");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t77768.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t77768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_77770){var self__ = this;
var _77770__$1 = this;return self__.meta77769;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t77768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_77770,meta77769__$1){var self__ = this;
var _77770__$1 = this;return (new cljs.core.async.t77768(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta77769__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t77768 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t77768(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta77769){return (new cljs.core.async.t77768(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta77769));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t77768(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11735__auto___77887 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___77887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___77887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_77840){var state_val_77841 = (state_77840[(1)]);if((state_val_77841 === (7)))
{var inst_77784 = (state_77840[(7)]);var inst_77789 = cljs.core.apply.call(null,cljs.core.hash_map,inst_77784);var state_77840__$1 = state_77840;var statearr_77842_77888 = state_77840__$1;(statearr_77842_77888[(2)] = inst_77789);
(statearr_77842_77888[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (20)))
{var inst_77799 = (state_77840[(8)]);var state_77840__$1 = state_77840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77840__$1,(23),out,inst_77799);
} else
{if((state_val_77841 === (1)))
{var inst_77774 = (state_77840[(9)]);var inst_77774__$1 = calc_state.call(null);var inst_77775 = cljs.core.seq_QMARK_.call(null,inst_77774__$1);var state_77840__$1 = (function (){var statearr_77843 = state_77840;(statearr_77843[(9)] = inst_77774__$1);
return statearr_77843;
})();if(inst_77775)
{var statearr_77844_77889 = state_77840__$1;(statearr_77844_77889[(1)] = (2));
} else
{var statearr_77845_77890 = state_77840__$1;(statearr_77845_77890[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (24)))
{var inst_77792 = (state_77840[(10)]);var inst_77784 = inst_77792;var state_77840__$1 = (function (){var statearr_77846 = state_77840;(statearr_77846[(7)] = inst_77784);
return statearr_77846;
})();var statearr_77847_77891 = state_77840__$1;(statearr_77847_77891[(2)] = null);
(statearr_77847_77891[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (4)))
{var inst_77774 = (state_77840[(9)]);var inst_77780 = (state_77840[(2)]);var inst_77781 = cljs.core.get.call(null,inst_77780,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_77782 = cljs.core.get.call(null,inst_77780,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_77783 = cljs.core.get.call(null,inst_77780,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_77784 = inst_77774;var state_77840__$1 = (function (){var statearr_77848 = state_77840;(statearr_77848[(11)] = inst_77782);
(statearr_77848[(7)] = inst_77784);
(statearr_77848[(12)] = inst_77783);
(statearr_77848[(13)] = inst_77781);
return statearr_77848;
})();var statearr_77849_77892 = state_77840__$1;(statearr_77849_77892[(2)] = null);
(statearr_77849_77892[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (15)))
{var state_77840__$1 = state_77840;var statearr_77850_77893 = state_77840__$1;(statearr_77850_77893[(2)] = null);
(statearr_77850_77893[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (21)))
{var inst_77792 = (state_77840[(10)]);var inst_77784 = inst_77792;var state_77840__$1 = (function (){var statearr_77851 = state_77840;(statearr_77851[(7)] = inst_77784);
return statearr_77851;
})();var statearr_77852_77894 = state_77840__$1;(statearr_77852_77894[(2)] = null);
(statearr_77852_77894[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (13)))
{var inst_77836 = (state_77840[(2)]);var state_77840__$1 = state_77840;var statearr_77853_77895 = state_77840__$1;(statearr_77853_77895[(2)] = inst_77836);
(statearr_77853_77895[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (22)))
{var inst_77834 = (state_77840[(2)]);var state_77840__$1 = state_77840;var statearr_77854_77896 = state_77840__$1;(statearr_77854_77896[(2)] = inst_77834);
(statearr_77854_77896[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (6)))
{var inst_77838 = (state_77840[(2)]);var state_77840__$1 = state_77840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77840__$1,inst_77838);
} else
{if((state_val_77841 === (25)))
{var state_77840__$1 = state_77840;var statearr_77855_77897 = state_77840__$1;(statearr_77855_77897[(2)] = null);
(statearr_77855_77897[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (17)))
{var inst_77814 = (state_77840[(14)]);var state_77840__$1 = state_77840;var statearr_77856_77898 = state_77840__$1;(statearr_77856_77898[(2)] = inst_77814);
(statearr_77856_77898[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (3)))
{var inst_77774 = (state_77840[(9)]);var state_77840__$1 = state_77840;var statearr_77857_77899 = state_77840__$1;(statearr_77857_77899[(2)] = inst_77774);
(statearr_77857_77899[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (12)))
{var inst_77795 = (state_77840[(15)]);var inst_77814 = (state_77840[(14)]);var inst_77800 = (state_77840[(16)]);var inst_77814__$1 = inst_77795.call(null,inst_77800);var state_77840__$1 = (function (){var statearr_77858 = state_77840;(statearr_77858[(14)] = inst_77814__$1);
return statearr_77858;
})();if(cljs.core.truth_(inst_77814__$1))
{var statearr_77859_77900 = state_77840__$1;(statearr_77859_77900[(1)] = (17));
} else
{var statearr_77860_77901 = state_77840__$1;(statearr_77860_77901[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (2)))
{var inst_77774 = (state_77840[(9)]);var inst_77777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_77774);var state_77840__$1 = state_77840;var statearr_77861_77902 = state_77840__$1;(statearr_77861_77902[(2)] = inst_77777);
(statearr_77861_77902[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (23)))
{var inst_77825 = (state_77840[(2)]);var state_77840__$1 = state_77840;if(cljs.core.truth_(inst_77825))
{var statearr_77862_77903 = state_77840__$1;(statearr_77862_77903[(1)] = (24));
} else
{var statearr_77863_77904 = state_77840__$1;(statearr_77863_77904[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (19)))
{var inst_77822 = (state_77840[(2)]);var state_77840__$1 = state_77840;if(cljs.core.truth_(inst_77822))
{var statearr_77864_77905 = state_77840__$1;(statearr_77864_77905[(1)] = (20));
} else
{var statearr_77865_77906 = state_77840__$1;(statearr_77865_77906[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (11)))
{var inst_77799 = (state_77840[(8)]);var inst_77805 = (inst_77799 == null);var state_77840__$1 = state_77840;if(cljs.core.truth_(inst_77805))
{var statearr_77866_77907 = state_77840__$1;(statearr_77866_77907[(1)] = (14));
} else
{var statearr_77867_77908 = state_77840__$1;(statearr_77867_77908[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (9)))
{var inst_77792 = (state_77840[(10)]);var inst_77792__$1 = (state_77840[(2)]);var inst_77793 = cljs.core.get.call(null,inst_77792__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_77794 = cljs.core.get.call(null,inst_77792__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_77795 = cljs.core.get.call(null,inst_77792__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_77840__$1 = (function (){var statearr_77868 = state_77840;(statearr_77868[(17)] = inst_77794);
(statearr_77868[(15)] = inst_77795);
(statearr_77868[(10)] = inst_77792__$1);
return statearr_77868;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_77840__$1,(10),inst_77793);
} else
{if((state_val_77841 === (5)))
{var inst_77784 = (state_77840[(7)]);var inst_77787 = cljs.core.seq_QMARK_.call(null,inst_77784);var state_77840__$1 = state_77840;if(inst_77787)
{var statearr_77869_77909 = state_77840__$1;(statearr_77869_77909[(1)] = (7));
} else
{var statearr_77870_77910 = state_77840__$1;(statearr_77870_77910[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (14)))
{var inst_77800 = (state_77840[(16)]);var inst_77807 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_77800);var state_77840__$1 = state_77840;var statearr_77871_77911 = state_77840__$1;(statearr_77871_77911[(2)] = inst_77807);
(statearr_77871_77911[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (26)))
{var inst_77830 = (state_77840[(2)]);var state_77840__$1 = state_77840;var statearr_77872_77912 = state_77840__$1;(statearr_77872_77912[(2)] = inst_77830);
(statearr_77872_77912[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (16)))
{var inst_77810 = (state_77840[(2)]);var inst_77811 = calc_state.call(null);var inst_77784 = inst_77811;var state_77840__$1 = (function (){var statearr_77873 = state_77840;(statearr_77873[(7)] = inst_77784);
(statearr_77873[(18)] = inst_77810);
return statearr_77873;
})();var statearr_77874_77913 = state_77840__$1;(statearr_77874_77913[(2)] = null);
(statearr_77874_77913[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (10)))
{var inst_77799 = (state_77840[(8)]);var inst_77800 = (state_77840[(16)]);var inst_77798 = (state_77840[(2)]);var inst_77799__$1 = cljs.core.nth.call(null,inst_77798,(0),null);var inst_77800__$1 = cljs.core.nth.call(null,inst_77798,(1),null);var inst_77801 = (inst_77799__$1 == null);var inst_77802 = cljs.core._EQ_.call(null,inst_77800__$1,change);var inst_77803 = (inst_77801) || (inst_77802);var state_77840__$1 = (function (){var statearr_77875 = state_77840;(statearr_77875[(8)] = inst_77799__$1);
(statearr_77875[(16)] = inst_77800__$1);
return statearr_77875;
})();if(cljs.core.truth_(inst_77803))
{var statearr_77876_77914 = state_77840__$1;(statearr_77876_77914[(1)] = (11));
} else
{var statearr_77877_77915 = state_77840__$1;(statearr_77877_77915[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (18)))
{var inst_77794 = (state_77840[(17)]);var inst_77795 = (state_77840[(15)]);var inst_77800 = (state_77840[(16)]);var inst_77817 = cljs.core.empty_QMARK_.call(null,inst_77795);var inst_77818 = inst_77794.call(null,inst_77800);var inst_77819 = cljs.core.not.call(null,inst_77818);var inst_77820 = (inst_77817) && (inst_77819);var state_77840__$1 = state_77840;var statearr_77878_77916 = state_77840__$1;(statearr_77878_77916[(2)] = inst_77820);
(statearr_77878_77916[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77841 === (8)))
{var inst_77784 = (state_77840[(7)]);var state_77840__$1 = state_77840;var statearr_77879_77917 = state_77840__$1;(statearr_77879_77917[(2)] = inst_77784);
(statearr_77879_77917[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___77887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11720__auto__,c__11735__auto___77887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_77883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77883[(0)] = state_machine__11721__auto__);
(statearr_77883[(1)] = (1));
return statearr_77883;
});
var state_machine__11721__auto____1 = (function (state_77840){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_77840);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e77884){if((e77884 instanceof Object))
{var ex__11724__auto__ = e77884;var statearr_77885_77918 = state_77840;(statearr_77885_77918[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77884;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77919 = state_77840;
state_77840 = G__77919;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_77840){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_77840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___77887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11737__auto__ = (function (){var statearr_77886 = f__11736__auto__.call(null);(statearr_77886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___77887);
return statearr_77886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___77887,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj77921 = {};return obj77921;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7981__auto__ = p;if(and__7981__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7981__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8629__auto__ = (((p == null))?null:p);return (function (){var or__7993__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7981__auto__ = p;if(and__7981__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7981__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8629__auto__ = (((p == null))?null:p);return (function (){var or__7993__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7981__auto__ = p;if(and__7981__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7981__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8629__auto__ = (((p == null))?null:p);return (function (){var or__7993__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7981__auto__ = p;if(and__7981__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7981__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8629__auto__ = (((p == null))?null:p);return (function (){var or__7993__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8629__auto__)]);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7993__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7993__auto__,mults){
return (function (p1__77922_SHARP_){if(cljs.core.truth_(p1__77922_SHARP_.call(null,topic)))
{return p1__77922_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__77922_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7993__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t78037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t78037 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta78038){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta78038 = meta78038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t78037.cljs$lang$type = true;
cljs.core.async.t78037.cljs$lang$ctorStr = "cljs.core.async/t78037";
cljs.core.async.t78037.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"cljs.core.async/t78037");
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t78037.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t78037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_78039){var self__ = this;
var _78039__$1 = this;return self__.meta78038;
});})(mults,ensure_mult))
;
cljs.core.async.t78037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_78039,meta78038__$1){var self__ = this;
var _78039__$1 = this;return (new cljs.core.async.t78037(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta78038__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t78037 = ((function (mults,ensure_mult){
return (function __GT_t78037(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta78038){return (new cljs.core.async.t78037(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta78038));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t78037(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11735__auto___78151 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78151,mults,ensure_mult,p){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78151,mults,ensure_mult,p){
return (function (state_78107){var state_val_78108 = (state_78107[(1)]);if((state_val_78108 === (7)))
{var inst_78103 = (state_78107[(2)]);var state_78107__$1 = state_78107;var statearr_78109_78152 = state_78107__$1;(statearr_78109_78152[(2)] = inst_78103);
(statearr_78109_78152[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (20)))
{var state_78107__$1 = state_78107;var statearr_78110_78153 = state_78107__$1;(statearr_78110_78153[(2)] = null);
(statearr_78110_78153[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (1)))
{var state_78107__$1 = state_78107;var statearr_78111_78154 = state_78107__$1;(statearr_78111_78154[(2)] = null);
(statearr_78111_78154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (4)))
{var inst_78042 = (state_78107[(7)]);var inst_78042__$1 = (state_78107[(2)]);var inst_78043 = (inst_78042__$1 == null);var state_78107__$1 = (function (){var statearr_78112 = state_78107;(statearr_78112[(7)] = inst_78042__$1);
return statearr_78112;
})();if(cljs.core.truth_(inst_78043))
{var statearr_78113_78155 = state_78107__$1;(statearr_78113_78155[(1)] = (5));
} else
{var statearr_78114_78156 = state_78107__$1;(statearr_78114_78156[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (15)))
{var inst_78084 = (state_78107[(2)]);var state_78107__$1 = state_78107;var statearr_78115_78157 = state_78107__$1;(statearr_78115_78157[(2)] = inst_78084);
(statearr_78115_78157[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (21)))
{var inst_78090 = (state_78107[(8)]);var inst_78098 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_78090);var state_78107__$1 = state_78107;var statearr_78116_78158 = state_78107__$1;(statearr_78116_78158[(2)] = inst_78098);
(statearr_78116_78158[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (13)))
{var inst_78066 = (state_78107[(9)]);var inst_78068 = cljs.core.chunked_seq_QMARK_.call(null,inst_78066);var state_78107__$1 = state_78107;if(inst_78068)
{var statearr_78117_78159 = state_78107__$1;(statearr_78117_78159[(1)] = (16));
} else
{var statearr_78118_78160 = state_78107__$1;(statearr_78118_78160[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (22)))
{var inst_78100 = (state_78107[(2)]);var state_78107__$1 = (function (){var statearr_78119 = state_78107;(statearr_78119[(10)] = inst_78100);
return statearr_78119;
})();var statearr_78120_78161 = state_78107__$1;(statearr_78120_78161[(2)] = null);
(statearr_78120_78161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (6)))
{var inst_78042 = (state_78107[(7)]);var inst_78090 = (state_78107[(8)]);var inst_78090__$1 = topic_fn.call(null,inst_78042);var inst_78091 = cljs.core.deref.call(null,mults);var inst_78092 = cljs.core.get.call(null,inst_78091,inst_78090__$1);var inst_78093 = cljs.core.async.muxch_STAR_.call(null,inst_78092);var state_78107__$1 = (function (){var statearr_78121 = state_78107;(statearr_78121[(8)] = inst_78090__$1);
return statearr_78121;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78107__$1,(19),inst_78093,inst_78042);
} else
{if((state_val_78108 === (17)))
{var inst_78066 = (state_78107[(9)]);var inst_78075 = cljs.core.first.call(null,inst_78066);var inst_78076 = cljs.core.async.muxch_STAR_.call(null,inst_78075);var inst_78077 = cljs.core.async.close_BANG_.call(null,inst_78076);var inst_78078 = cljs.core.next.call(null,inst_78066);var inst_78052 = inst_78078;var inst_78053 = null;var inst_78054 = (0);var inst_78055 = (0);var state_78107__$1 = (function (){var statearr_78122 = state_78107;(statearr_78122[(11)] = inst_78053);
(statearr_78122[(12)] = inst_78054);
(statearr_78122[(13)] = inst_78077);
(statearr_78122[(14)] = inst_78055);
(statearr_78122[(15)] = inst_78052);
return statearr_78122;
})();var statearr_78123_78162 = state_78107__$1;(statearr_78123_78162[(2)] = null);
(statearr_78123_78162[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (3)))
{var inst_78105 = (state_78107[(2)]);var state_78107__$1 = state_78107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78107__$1,inst_78105);
} else
{if((state_val_78108 === (12)))
{var inst_78086 = (state_78107[(2)]);var state_78107__$1 = state_78107;var statearr_78124_78163 = state_78107__$1;(statearr_78124_78163[(2)] = inst_78086);
(statearr_78124_78163[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (2)))
{var state_78107__$1 = state_78107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78107__$1,(4),ch);
} else
{if((state_val_78108 === (19)))
{var inst_78095 = (state_78107[(2)]);var state_78107__$1 = state_78107;if(cljs.core.truth_(inst_78095))
{var statearr_78125_78164 = state_78107__$1;(statearr_78125_78164[(1)] = (20));
} else
{var statearr_78126_78165 = state_78107__$1;(statearr_78126_78165[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (11)))
{var inst_78066 = (state_78107[(9)]);var inst_78052 = (state_78107[(15)]);var inst_78066__$1 = cljs.core.seq.call(null,inst_78052);var state_78107__$1 = (function (){var statearr_78127 = state_78107;(statearr_78127[(9)] = inst_78066__$1);
return statearr_78127;
})();if(inst_78066__$1)
{var statearr_78128_78166 = state_78107__$1;(statearr_78128_78166[(1)] = (13));
} else
{var statearr_78129_78167 = state_78107__$1;(statearr_78129_78167[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (9)))
{var inst_78088 = (state_78107[(2)]);var state_78107__$1 = state_78107;var statearr_78130_78168 = state_78107__$1;(statearr_78130_78168[(2)] = inst_78088);
(statearr_78130_78168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (5)))
{var inst_78049 = cljs.core.deref.call(null,mults);var inst_78050 = cljs.core.vals.call(null,inst_78049);var inst_78051 = cljs.core.seq.call(null,inst_78050);var inst_78052 = inst_78051;var inst_78053 = null;var inst_78054 = (0);var inst_78055 = (0);var state_78107__$1 = (function (){var statearr_78131 = state_78107;(statearr_78131[(11)] = inst_78053);
(statearr_78131[(12)] = inst_78054);
(statearr_78131[(14)] = inst_78055);
(statearr_78131[(15)] = inst_78052);
return statearr_78131;
})();var statearr_78132_78169 = state_78107__$1;(statearr_78132_78169[(2)] = null);
(statearr_78132_78169[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (14)))
{var state_78107__$1 = state_78107;var statearr_78136_78170 = state_78107__$1;(statearr_78136_78170[(2)] = null);
(statearr_78136_78170[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (16)))
{var inst_78066 = (state_78107[(9)]);var inst_78070 = cljs.core.chunk_first.call(null,inst_78066);var inst_78071 = cljs.core.chunk_rest.call(null,inst_78066);var inst_78072 = cljs.core.count.call(null,inst_78070);var inst_78052 = inst_78071;var inst_78053 = inst_78070;var inst_78054 = inst_78072;var inst_78055 = (0);var state_78107__$1 = (function (){var statearr_78137 = state_78107;(statearr_78137[(11)] = inst_78053);
(statearr_78137[(12)] = inst_78054);
(statearr_78137[(14)] = inst_78055);
(statearr_78137[(15)] = inst_78052);
return statearr_78137;
})();var statearr_78138_78171 = state_78107__$1;(statearr_78138_78171[(2)] = null);
(statearr_78138_78171[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (10)))
{var inst_78053 = (state_78107[(11)]);var inst_78054 = (state_78107[(12)]);var inst_78055 = (state_78107[(14)]);var inst_78052 = (state_78107[(15)]);var inst_78060 = cljs.core._nth.call(null,inst_78053,inst_78055);var inst_78061 = cljs.core.async.muxch_STAR_.call(null,inst_78060);var inst_78062 = cljs.core.async.close_BANG_.call(null,inst_78061);var inst_78063 = (inst_78055 + (1));var tmp78133 = inst_78053;var tmp78134 = inst_78054;var tmp78135 = inst_78052;var inst_78052__$1 = tmp78135;var inst_78053__$1 = tmp78133;var inst_78054__$1 = tmp78134;var inst_78055__$1 = inst_78063;var state_78107__$1 = (function (){var statearr_78139 = state_78107;(statearr_78139[(11)] = inst_78053__$1);
(statearr_78139[(12)] = inst_78054__$1);
(statearr_78139[(14)] = inst_78055__$1);
(statearr_78139[(16)] = inst_78062);
(statearr_78139[(15)] = inst_78052__$1);
return statearr_78139;
})();var statearr_78140_78172 = state_78107__$1;(statearr_78140_78172[(2)] = null);
(statearr_78140_78172[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (18)))
{var inst_78081 = (state_78107[(2)]);var state_78107__$1 = state_78107;var statearr_78141_78173 = state_78107__$1;(statearr_78141_78173[(2)] = inst_78081);
(statearr_78141_78173[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78108 === (8)))
{var inst_78054 = (state_78107[(12)]);var inst_78055 = (state_78107[(14)]);var inst_78057 = (inst_78055 < inst_78054);var inst_78058 = inst_78057;var state_78107__$1 = state_78107;if(cljs.core.truth_(inst_78058))
{var statearr_78142_78174 = state_78107__$1;(statearr_78142_78174[(1)] = (10));
} else
{var statearr_78143_78175 = state_78107__$1;(statearr_78143_78175[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78151,mults,ensure_mult,p))
;return ((function (switch__11720__auto__,c__11735__auto___78151,mults,ensure_mult,p){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78147[(0)] = state_machine__11721__auto__);
(statearr_78147[(1)] = (1));
return statearr_78147;
});
var state_machine__11721__auto____1 = (function (state_78107){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78107);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78148){if((e78148 instanceof Object))
{var ex__11724__auto__ = e78148;var statearr_78149_78176 = state_78107;(statearr_78149_78176[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78148;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78177 = state_78107;
state_78107 = G__78177;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78107){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78151,mults,ensure_mult,p))
})();var state__11737__auto__ = (function (){var statearr_78150 = f__11736__auto__.call(null);(statearr_78150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78151);
return statearr_78150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78151,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11735__auto___78314 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_78284){var state_val_78285 = (state_78284[(1)]);if((state_val_78285 === (7)))
{var state_78284__$1 = state_78284;var statearr_78286_78315 = state_78284__$1;(statearr_78286_78315[(2)] = null);
(statearr_78286_78315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (1)))
{var state_78284__$1 = state_78284;var statearr_78287_78316 = state_78284__$1;(statearr_78287_78316[(2)] = null);
(statearr_78287_78316[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (4)))
{var inst_78248 = (state_78284[(7)]);var inst_78250 = (inst_78248 < cnt);var state_78284__$1 = state_78284;if(cljs.core.truth_(inst_78250))
{var statearr_78288_78317 = state_78284__$1;(statearr_78288_78317[(1)] = (6));
} else
{var statearr_78289_78318 = state_78284__$1;(statearr_78289_78318[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (15)))
{var inst_78280 = (state_78284[(2)]);var state_78284__$1 = state_78284;var statearr_78290_78319 = state_78284__$1;(statearr_78290_78319[(2)] = inst_78280);
(statearr_78290_78319[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (13)))
{var inst_78273 = cljs.core.async.close_BANG_.call(null,out);var state_78284__$1 = state_78284;var statearr_78291_78320 = state_78284__$1;(statearr_78291_78320[(2)] = inst_78273);
(statearr_78291_78320[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (6)))
{var state_78284__$1 = state_78284;var statearr_78292_78321 = state_78284__$1;(statearr_78292_78321[(2)] = null);
(statearr_78292_78321[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (3)))
{var inst_78282 = (state_78284[(2)]);var state_78284__$1 = state_78284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78284__$1,inst_78282);
} else
{if((state_val_78285 === (12)))
{var inst_78270 = (state_78284[(8)]);var inst_78270__$1 = (state_78284[(2)]);var inst_78271 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_78270__$1);var state_78284__$1 = (function (){var statearr_78293 = state_78284;(statearr_78293[(8)] = inst_78270__$1);
return statearr_78293;
})();if(cljs.core.truth_(inst_78271))
{var statearr_78294_78322 = state_78284__$1;(statearr_78294_78322[(1)] = (13));
} else
{var statearr_78295_78323 = state_78284__$1;(statearr_78295_78323[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (2)))
{var inst_78247 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_78248 = (0);var state_78284__$1 = (function (){var statearr_78296 = state_78284;(statearr_78296[(7)] = inst_78248);
(statearr_78296[(9)] = inst_78247);
return statearr_78296;
})();var statearr_78297_78324 = state_78284__$1;(statearr_78297_78324[(2)] = null);
(statearr_78297_78324[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (11)))
{var inst_78248 = (state_78284[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_78284,(10),Object,null,(9));var inst_78257 = chs__$1.call(null,inst_78248);var inst_78258 = done.call(null,inst_78248);var inst_78259 = cljs.core.async.take_BANG_.call(null,inst_78257,inst_78258);var state_78284__$1 = state_78284;var statearr_78298_78325 = state_78284__$1;(statearr_78298_78325[(2)] = inst_78259);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78284__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (9)))
{var inst_78248 = (state_78284[(7)]);var inst_78261 = (state_78284[(2)]);var inst_78262 = (inst_78248 + (1));var inst_78248__$1 = inst_78262;var state_78284__$1 = (function (){var statearr_78299 = state_78284;(statearr_78299[(7)] = inst_78248__$1);
(statearr_78299[(10)] = inst_78261);
return statearr_78299;
})();var statearr_78300_78326 = state_78284__$1;(statearr_78300_78326[(2)] = null);
(statearr_78300_78326[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (5)))
{var inst_78268 = (state_78284[(2)]);var state_78284__$1 = (function (){var statearr_78301 = state_78284;(statearr_78301[(11)] = inst_78268);
return statearr_78301;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78284__$1,(12),dchan);
} else
{if((state_val_78285 === (14)))
{var inst_78270 = (state_78284[(8)]);var inst_78275 = cljs.core.apply.call(null,f,inst_78270);var state_78284__$1 = state_78284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78284__$1,(16),out,inst_78275);
} else
{if((state_val_78285 === (16)))
{var inst_78277 = (state_78284[(2)]);var state_78284__$1 = (function (){var statearr_78302 = state_78284;(statearr_78302[(12)] = inst_78277);
return statearr_78302;
})();var statearr_78303_78327 = state_78284__$1;(statearr_78303_78327[(2)] = null);
(statearr_78303_78327[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (10)))
{var inst_78252 = (state_78284[(2)]);var inst_78253 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_78284__$1 = (function (){var statearr_78304 = state_78284;(statearr_78304[(13)] = inst_78252);
return statearr_78304;
})();var statearr_78305_78328 = state_78284__$1;(statearr_78305_78328[(2)] = inst_78253);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78284__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78285 === (8)))
{var inst_78266 = (state_78284[(2)]);var state_78284__$1 = state_78284;var statearr_78306_78329 = state_78284__$1;(statearr_78306_78329[(2)] = inst_78266);
(statearr_78306_78329[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78314,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11720__auto__,c__11735__auto___78314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78310[(0)] = state_machine__11721__auto__);
(statearr_78310[(1)] = (1));
return statearr_78310;
});
var state_machine__11721__auto____1 = (function (state_78284){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78284);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78311){if((e78311 instanceof Object))
{var ex__11724__auto__ = e78311;var statearr_78312_78330 = state_78284;(statearr_78312_78330[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78331 = state_78284;
state_78284 = G__78331;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78284){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78314,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11737__auto__ = (function (){var statearr_78313 = f__11736__auto__.call(null);(statearr_78313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78314);
return statearr_78313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78314,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11735__auto___78439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78439,out){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78439,out){
return (function (state_78415){var state_val_78416 = (state_78415[(1)]);if((state_val_78416 === (7)))
{var inst_78395 = (state_78415[(7)]);var inst_78394 = (state_78415[(8)]);var inst_78394__$1 = (state_78415[(2)]);var inst_78395__$1 = cljs.core.nth.call(null,inst_78394__$1,(0),null);var inst_78396 = cljs.core.nth.call(null,inst_78394__$1,(1),null);var inst_78397 = (inst_78395__$1 == null);var state_78415__$1 = (function (){var statearr_78417 = state_78415;(statearr_78417[(7)] = inst_78395__$1);
(statearr_78417[(9)] = inst_78396);
(statearr_78417[(8)] = inst_78394__$1);
return statearr_78417;
})();if(cljs.core.truth_(inst_78397))
{var statearr_78418_78440 = state_78415__$1;(statearr_78418_78440[(1)] = (8));
} else
{var statearr_78419_78441 = state_78415__$1;(statearr_78419_78441[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (1)))
{var inst_78386 = cljs.core.vec.call(null,chs);var inst_78387 = inst_78386;var state_78415__$1 = (function (){var statearr_78420 = state_78415;(statearr_78420[(10)] = inst_78387);
return statearr_78420;
})();var statearr_78421_78442 = state_78415__$1;(statearr_78421_78442[(2)] = null);
(statearr_78421_78442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (4)))
{var inst_78387 = (state_78415[(10)]);var state_78415__$1 = state_78415;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_78415__$1,(7),inst_78387);
} else
{if((state_val_78416 === (6)))
{var inst_78411 = (state_78415[(2)]);var state_78415__$1 = state_78415;var statearr_78422_78443 = state_78415__$1;(statearr_78422_78443[(2)] = inst_78411);
(statearr_78422_78443[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (3)))
{var inst_78413 = (state_78415[(2)]);var state_78415__$1 = state_78415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78415__$1,inst_78413);
} else
{if((state_val_78416 === (2)))
{var inst_78387 = (state_78415[(10)]);var inst_78389 = cljs.core.count.call(null,inst_78387);var inst_78390 = (inst_78389 > (0));var state_78415__$1 = state_78415;if(cljs.core.truth_(inst_78390))
{var statearr_78424_78444 = state_78415__$1;(statearr_78424_78444[(1)] = (4));
} else
{var statearr_78425_78445 = state_78415__$1;(statearr_78425_78445[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (11)))
{var inst_78387 = (state_78415[(10)]);var inst_78404 = (state_78415[(2)]);var tmp78423 = inst_78387;var inst_78387__$1 = tmp78423;var state_78415__$1 = (function (){var statearr_78426 = state_78415;(statearr_78426[(11)] = inst_78404);
(statearr_78426[(10)] = inst_78387__$1);
return statearr_78426;
})();var statearr_78427_78446 = state_78415__$1;(statearr_78427_78446[(2)] = null);
(statearr_78427_78446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (9)))
{var inst_78395 = (state_78415[(7)]);var state_78415__$1 = state_78415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78415__$1,(11),out,inst_78395);
} else
{if((state_val_78416 === (5)))
{var inst_78409 = cljs.core.async.close_BANG_.call(null,out);var state_78415__$1 = state_78415;var statearr_78428_78447 = state_78415__$1;(statearr_78428_78447[(2)] = inst_78409);
(statearr_78428_78447[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (10)))
{var inst_78407 = (state_78415[(2)]);var state_78415__$1 = state_78415;var statearr_78429_78448 = state_78415__$1;(statearr_78429_78448[(2)] = inst_78407);
(statearr_78429_78448[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78416 === (8)))
{var inst_78395 = (state_78415[(7)]);var inst_78396 = (state_78415[(9)]);var inst_78387 = (state_78415[(10)]);var inst_78394 = (state_78415[(8)]);var inst_78399 = (function (){var c = inst_78396;var v = inst_78395;var vec__78392 = inst_78394;var cs = inst_78387;return ((function (c,v,vec__78392,cs,inst_78395,inst_78396,inst_78387,inst_78394,state_val_78416,c__11735__auto___78439,out){
return (function (p1__78332_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__78332_SHARP_);
});
;})(c,v,vec__78392,cs,inst_78395,inst_78396,inst_78387,inst_78394,state_val_78416,c__11735__auto___78439,out))
})();var inst_78400 = cljs.core.filterv.call(null,inst_78399,inst_78387);var inst_78387__$1 = inst_78400;var state_78415__$1 = (function (){var statearr_78430 = state_78415;(statearr_78430[(10)] = inst_78387__$1);
return statearr_78430;
})();var statearr_78431_78449 = state_78415__$1;(statearr_78431_78449[(2)] = null);
(statearr_78431_78449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78439,out))
;return ((function (switch__11720__auto__,c__11735__auto___78439,out){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78435 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78435[(0)] = state_machine__11721__auto__);
(statearr_78435[(1)] = (1));
return statearr_78435;
});
var state_machine__11721__auto____1 = (function (state_78415){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78415);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78436){if((e78436 instanceof Object))
{var ex__11724__auto__ = e78436;var statearr_78437_78450 = state_78415;(statearr_78437_78450[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78436;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78451 = state_78415;
state_78415 = G__78451;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78415){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78439,out))
})();var state__11737__auto__ = (function (){var statearr_78438 = f__11736__auto__.call(null);(statearr_78438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78439);
return statearr_78438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78439,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11735__auto___78544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78544,out){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78544,out){
return (function (state_78521){var state_val_78522 = (state_78521[(1)]);if((state_val_78522 === (7)))
{var inst_78503 = (state_78521[(7)]);var inst_78503__$1 = (state_78521[(2)]);var inst_78504 = (inst_78503__$1 == null);var inst_78505 = cljs.core.not.call(null,inst_78504);var state_78521__$1 = (function (){var statearr_78523 = state_78521;(statearr_78523[(7)] = inst_78503__$1);
return statearr_78523;
})();if(inst_78505)
{var statearr_78524_78545 = state_78521__$1;(statearr_78524_78545[(1)] = (8));
} else
{var statearr_78525_78546 = state_78521__$1;(statearr_78525_78546[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (1)))
{var inst_78498 = (0);var state_78521__$1 = (function (){var statearr_78526 = state_78521;(statearr_78526[(8)] = inst_78498);
return statearr_78526;
})();var statearr_78527_78547 = state_78521__$1;(statearr_78527_78547[(2)] = null);
(statearr_78527_78547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (4)))
{var state_78521__$1 = state_78521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78521__$1,(7),ch);
} else
{if((state_val_78522 === (6)))
{var inst_78516 = (state_78521[(2)]);var state_78521__$1 = state_78521;var statearr_78528_78548 = state_78521__$1;(statearr_78528_78548[(2)] = inst_78516);
(statearr_78528_78548[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (3)))
{var inst_78518 = (state_78521[(2)]);var inst_78519 = cljs.core.async.close_BANG_.call(null,out);var state_78521__$1 = (function (){var statearr_78529 = state_78521;(statearr_78529[(9)] = inst_78518);
return statearr_78529;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78521__$1,inst_78519);
} else
{if((state_val_78522 === (2)))
{var inst_78498 = (state_78521[(8)]);var inst_78500 = (inst_78498 < n);var state_78521__$1 = state_78521;if(cljs.core.truth_(inst_78500))
{var statearr_78530_78549 = state_78521__$1;(statearr_78530_78549[(1)] = (4));
} else
{var statearr_78531_78550 = state_78521__$1;(statearr_78531_78550[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (11)))
{var inst_78498 = (state_78521[(8)]);var inst_78508 = (state_78521[(2)]);var inst_78509 = (inst_78498 + (1));var inst_78498__$1 = inst_78509;var state_78521__$1 = (function (){var statearr_78532 = state_78521;(statearr_78532[(10)] = inst_78508);
(statearr_78532[(8)] = inst_78498__$1);
return statearr_78532;
})();var statearr_78533_78551 = state_78521__$1;(statearr_78533_78551[(2)] = null);
(statearr_78533_78551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (9)))
{var state_78521__$1 = state_78521;var statearr_78534_78552 = state_78521__$1;(statearr_78534_78552[(2)] = null);
(statearr_78534_78552[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (5)))
{var state_78521__$1 = state_78521;var statearr_78535_78553 = state_78521__$1;(statearr_78535_78553[(2)] = null);
(statearr_78535_78553[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (10)))
{var inst_78513 = (state_78521[(2)]);var state_78521__$1 = state_78521;var statearr_78536_78554 = state_78521__$1;(statearr_78536_78554[(2)] = inst_78513);
(statearr_78536_78554[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78522 === (8)))
{var inst_78503 = (state_78521[(7)]);var state_78521__$1 = state_78521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78521__$1,(11),out,inst_78503);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78544,out))
;return ((function (switch__11720__auto__,c__11735__auto___78544,out){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78540 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_78540[(0)] = state_machine__11721__auto__);
(statearr_78540[(1)] = (1));
return statearr_78540;
});
var state_machine__11721__auto____1 = (function (state_78521){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78521);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78541){if((e78541 instanceof Object))
{var ex__11724__auto__ = e78541;var statearr_78542_78555 = state_78521;(statearr_78542_78555[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78541;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78556 = state_78521;
state_78521 = G__78556;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78521){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78544,out))
})();var state__11737__auto__ = (function (){var statearr_78543 = f__11736__auto__.call(null);(statearr_78543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78544);
return statearr_78543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78544,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11735__auto___78653 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78653,out){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78653,out){
return (function (state_78628){var state_val_78629 = (state_78628[(1)]);if((state_val_78629 === (7)))
{var inst_78623 = (state_78628[(2)]);var state_78628__$1 = state_78628;var statearr_78630_78654 = state_78628__$1;(statearr_78630_78654[(2)] = inst_78623);
(statearr_78630_78654[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (1)))
{var inst_78605 = null;var state_78628__$1 = (function (){var statearr_78631 = state_78628;(statearr_78631[(7)] = inst_78605);
return statearr_78631;
})();var statearr_78632_78655 = state_78628__$1;(statearr_78632_78655[(2)] = null);
(statearr_78632_78655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (4)))
{var inst_78608 = (state_78628[(8)]);var inst_78608__$1 = (state_78628[(2)]);var inst_78609 = (inst_78608__$1 == null);var inst_78610 = cljs.core.not.call(null,inst_78609);var state_78628__$1 = (function (){var statearr_78633 = state_78628;(statearr_78633[(8)] = inst_78608__$1);
return statearr_78633;
})();if(inst_78610)
{var statearr_78634_78656 = state_78628__$1;(statearr_78634_78656[(1)] = (5));
} else
{var statearr_78635_78657 = state_78628__$1;(statearr_78635_78657[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (6)))
{var state_78628__$1 = state_78628;var statearr_78636_78658 = state_78628__$1;(statearr_78636_78658[(2)] = null);
(statearr_78636_78658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (3)))
{var inst_78625 = (state_78628[(2)]);var inst_78626 = cljs.core.async.close_BANG_.call(null,out);var state_78628__$1 = (function (){var statearr_78637 = state_78628;(statearr_78637[(9)] = inst_78625);
return statearr_78637;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78628__$1,inst_78626);
} else
{if((state_val_78629 === (2)))
{var state_78628__$1 = state_78628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78628__$1,(4),ch);
} else
{if((state_val_78629 === (11)))
{var inst_78608 = (state_78628[(8)]);var inst_78617 = (state_78628[(2)]);var inst_78605 = inst_78608;var state_78628__$1 = (function (){var statearr_78638 = state_78628;(statearr_78638[(10)] = inst_78617);
(statearr_78638[(7)] = inst_78605);
return statearr_78638;
})();var statearr_78639_78659 = state_78628__$1;(statearr_78639_78659[(2)] = null);
(statearr_78639_78659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (9)))
{var inst_78608 = (state_78628[(8)]);var state_78628__$1 = state_78628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78628__$1,(11),out,inst_78608);
} else
{if((state_val_78629 === (5)))
{var inst_78605 = (state_78628[(7)]);var inst_78608 = (state_78628[(8)]);var inst_78612 = cljs.core._EQ_.call(null,inst_78608,inst_78605);var state_78628__$1 = state_78628;if(inst_78612)
{var statearr_78641_78660 = state_78628__$1;(statearr_78641_78660[(1)] = (8));
} else
{var statearr_78642_78661 = state_78628__$1;(statearr_78642_78661[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (10)))
{var inst_78620 = (state_78628[(2)]);var state_78628__$1 = state_78628;var statearr_78643_78662 = state_78628__$1;(statearr_78643_78662[(2)] = inst_78620);
(statearr_78643_78662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78629 === (8)))
{var inst_78605 = (state_78628[(7)]);var tmp78640 = inst_78605;var inst_78605__$1 = tmp78640;var state_78628__$1 = (function (){var statearr_78644 = state_78628;(statearr_78644[(7)] = inst_78605__$1);
return statearr_78644;
})();var statearr_78645_78663 = state_78628__$1;(statearr_78645_78663[(2)] = null);
(statearr_78645_78663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78653,out))
;return ((function (switch__11720__auto__,c__11735__auto___78653,out){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78649 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_78649[(0)] = state_machine__11721__auto__);
(statearr_78649[(1)] = (1));
return statearr_78649;
});
var state_machine__11721__auto____1 = (function (state_78628){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78628);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78650){if((e78650 instanceof Object))
{var ex__11724__auto__ = e78650;var statearr_78651_78664 = state_78628;(statearr_78651_78664[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78650;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78665 = state_78628;
state_78628 = G__78665;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78628){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78653,out))
})();var state__11737__auto__ = (function (){var statearr_78652 = f__11736__auto__.call(null);(statearr_78652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78653);
return statearr_78652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78653,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11735__auto___78800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78800,out){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78800,out){
return (function (state_78770){var state_val_78771 = (state_78770[(1)]);if((state_val_78771 === (7)))
{var inst_78766 = (state_78770[(2)]);var state_78770__$1 = state_78770;var statearr_78772_78801 = state_78770__$1;(statearr_78772_78801[(2)] = inst_78766);
(statearr_78772_78801[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (1)))
{var inst_78733 = (new Array(n));var inst_78734 = inst_78733;var inst_78735 = (0);var state_78770__$1 = (function (){var statearr_78773 = state_78770;(statearr_78773[(7)] = inst_78734);
(statearr_78773[(8)] = inst_78735);
return statearr_78773;
})();var statearr_78774_78802 = state_78770__$1;(statearr_78774_78802[(2)] = null);
(statearr_78774_78802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (4)))
{var inst_78738 = (state_78770[(9)]);var inst_78738__$1 = (state_78770[(2)]);var inst_78739 = (inst_78738__$1 == null);var inst_78740 = cljs.core.not.call(null,inst_78739);var state_78770__$1 = (function (){var statearr_78775 = state_78770;(statearr_78775[(9)] = inst_78738__$1);
return statearr_78775;
})();if(inst_78740)
{var statearr_78776_78803 = state_78770__$1;(statearr_78776_78803[(1)] = (5));
} else
{var statearr_78777_78804 = state_78770__$1;(statearr_78777_78804[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (15)))
{var inst_78760 = (state_78770[(2)]);var state_78770__$1 = state_78770;var statearr_78778_78805 = state_78770__$1;(statearr_78778_78805[(2)] = inst_78760);
(statearr_78778_78805[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (13)))
{var state_78770__$1 = state_78770;var statearr_78779_78806 = state_78770__$1;(statearr_78779_78806[(2)] = null);
(statearr_78779_78806[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (6)))
{var inst_78735 = (state_78770[(8)]);var inst_78756 = (inst_78735 > (0));var state_78770__$1 = state_78770;if(cljs.core.truth_(inst_78756))
{var statearr_78780_78807 = state_78770__$1;(statearr_78780_78807[(1)] = (12));
} else
{var statearr_78781_78808 = state_78770__$1;(statearr_78781_78808[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (3)))
{var inst_78768 = (state_78770[(2)]);var state_78770__$1 = state_78770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78770__$1,inst_78768);
} else
{if((state_val_78771 === (12)))
{var inst_78734 = (state_78770[(7)]);var inst_78758 = cljs.core.vec.call(null,inst_78734);var state_78770__$1 = state_78770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78770__$1,(15),out,inst_78758);
} else
{if((state_val_78771 === (2)))
{var state_78770__$1 = state_78770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78770__$1,(4),ch);
} else
{if((state_val_78771 === (11)))
{var inst_78750 = (state_78770[(2)]);var inst_78751 = (new Array(n));var inst_78734 = inst_78751;var inst_78735 = (0);var state_78770__$1 = (function (){var statearr_78782 = state_78770;(statearr_78782[(7)] = inst_78734);
(statearr_78782[(8)] = inst_78735);
(statearr_78782[(10)] = inst_78750);
return statearr_78782;
})();var statearr_78783_78809 = state_78770__$1;(statearr_78783_78809[(2)] = null);
(statearr_78783_78809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (9)))
{var inst_78734 = (state_78770[(7)]);var inst_78748 = cljs.core.vec.call(null,inst_78734);var state_78770__$1 = state_78770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78770__$1,(11),out,inst_78748);
} else
{if((state_val_78771 === (5)))
{var inst_78743 = (state_78770[(11)]);var inst_78738 = (state_78770[(9)]);var inst_78734 = (state_78770[(7)]);var inst_78735 = (state_78770[(8)]);var inst_78742 = (inst_78734[inst_78735] = inst_78738);var inst_78743__$1 = (inst_78735 + (1));var inst_78744 = (inst_78743__$1 < n);var state_78770__$1 = (function (){var statearr_78784 = state_78770;(statearr_78784[(11)] = inst_78743__$1);
(statearr_78784[(12)] = inst_78742);
return statearr_78784;
})();if(cljs.core.truth_(inst_78744))
{var statearr_78785_78810 = state_78770__$1;(statearr_78785_78810[(1)] = (8));
} else
{var statearr_78786_78811 = state_78770__$1;(statearr_78786_78811[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (14)))
{var inst_78763 = (state_78770[(2)]);var inst_78764 = cljs.core.async.close_BANG_.call(null,out);var state_78770__$1 = (function (){var statearr_78788 = state_78770;(statearr_78788[(13)] = inst_78763);
return statearr_78788;
})();var statearr_78789_78812 = state_78770__$1;(statearr_78789_78812[(2)] = inst_78764);
(statearr_78789_78812[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (10)))
{var inst_78754 = (state_78770[(2)]);var state_78770__$1 = state_78770;var statearr_78790_78813 = state_78770__$1;(statearr_78790_78813[(2)] = inst_78754);
(statearr_78790_78813[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78771 === (8)))
{var inst_78743 = (state_78770[(11)]);var inst_78734 = (state_78770[(7)]);var tmp78787 = inst_78734;var inst_78734__$1 = tmp78787;var inst_78735 = inst_78743;var state_78770__$1 = (function (){var statearr_78791 = state_78770;(statearr_78791[(7)] = inst_78734__$1);
(statearr_78791[(8)] = inst_78735);
return statearr_78791;
})();var statearr_78792_78814 = state_78770__$1;(statearr_78792_78814[(2)] = null);
(statearr_78792_78814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78800,out))
;return ((function (switch__11720__auto__,c__11735__auto___78800,out){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78796[(0)] = state_machine__11721__auto__);
(statearr_78796[(1)] = (1));
return statearr_78796;
});
var state_machine__11721__auto____1 = (function (state_78770){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78770);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78797){if((e78797 instanceof Object))
{var ex__11724__auto__ = e78797;var statearr_78798_78815 = state_78770;(statearr_78798_78815[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78797;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78816 = state_78770;
state_78770 = G__78816;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78770){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78800,out))
})();var state__11737__auto__ = (function (){var statearr_78799 = f__11736__auto__.call(null);(statearr_78799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78800);
return statearr_78799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78800,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11735__auto___78959 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___78959,out){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___78959,out){
return (function (state_78929){var state_val_78930 = (state_78929[(1)]);if((state_val_78930 === (7)))
{var inst_78925 = (state_78929[(2)]);var state_78929__$1 = state_78929;var statearr_78931_78960 = state_78929__$1;(statearr_78931_78960[(2)] = inst_78925);
(statearr_78931_78960[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (1)))
{var inst_78888 = [];var inst_78889 = inst_78888;var inst_78890 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_78929__$1 = (function (){var statearr_78932 = state_78929;(statearr_78932[(7)] = inst_78889);
(statearr_78932[(8)] = inst_78890);
return statearr_78932;
})();var statearr_78933_78961 = state_78929__$1;(statearr_78933_78961[(2)] = null);
(statearr_78933_78961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (4)))
{var inst_78893 = (state_78929[(9)]);var inst_78893__$1 = (state_78929[(2)]);var inst_78894 = (inst_78893__$1 == null);var inst_78895 = cljs.core.not.call(null,inst_78894);var state_78929__$1 = (function (){var statearr_78934 = state_78929;(statearr_78934[(9)] = inst_78893__$1);
return statearr_78934;
})();if(inst_78895)
{var statearr_78935_78962 = state_78929__$1;(statearr_78935_78962[(1)] = (5));
} else
{var statearr_78936_78963 = state_78929__$1;(statearr_78936_78963[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (15)))
{var inst_78919 = (state_78929[(2)]);var state_78929__$1 = state_78929;var statearr_78937_78964 = state_78929__$1;(statearr_78937_78964[(2)] = inst_78919);
(statearr_78937_78964[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (13)))
{var state_78929__$1 = state_78929;var statearr_78938_78965 = state_78929__$1;(statearr_78938_78965[(2)] = null);
(statearr_78938_78965[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (6)))
{var inst_78889 = (state_78929[(7)]);var inst_78914 = inst_78889.length;var inst_78915 = (inst_78914 > (0));var state_78929__$1 = state_78929;if(cljs.core.truth_(inst_78915))
{var statearr_78939_78966 = state_78929__$1;(statearr_78939_78966[(1)] = (12));
} else
{var statearr_78940_78967 = state_78929__$1;(statearr_78940_78967[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (3)))
{var inst_78927 = (state_78929[(2)]);var state_78929__$1 = state_78929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_78929__$1,inst_78927);
} else
{if((state_val_78930 === (12)))
{var inst_78889 = (state_78929[(7)]);var inst_78917 = cljs.core.vec.call(null,inst_78889);var state_78929__$1 = state_78929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78929__$1,(15),out,inst_78917);
} else
{if((state_val_78930 === (2)))
{var state_78929__$1 = state_78929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_78929__$1,(4),ch);
} else
{if((state_val_78930 === (11)))
{var inst_78893 = (state_78929[(9)]);var inst_78897 = (state_78929[(10)]);var inst_78907 = (state_78929[(2)]);var inst_78908 = [];var inst_78909 = inst_78908.push(inst_78893);var inst_78889 = inst_78908;var inst_78890 = inst_78897;var state_78929__$1 = (function (){var statearr_78941 = state_78929;(statearr_78941[(7)] = inst_78889);
(statearr_78941[(11)] = inst_78907);
(statearr_78941[(8)] = inst_78890);
(statearr_78941[(12)] = inst_78909);
return statearr_78941;
})();var statearr_78942_78968 = state_78929__$1;(statearr_78942_78968[(2)] = null);
(statearr_78942_78968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (9)))
{var inst_78889 = (state_78929[(7)]);var inst_78905 = cljs.core.vec.call(null,inst_78889);var state_78929__$1 = state_78929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_78929__$1,(11),out,inst_78905);
} else
{if((state_val_78930 === (5)))
{var inst_78890 = (state_78929[(8)]);var inst_78893 = (state_78929[(9)]);var inst_78897 = (state_78929[(10)]);var inst_78897__$1 = f.call(null,inst_78893);var inst_78898 = cljs.core._EQ_.call(null,inst_78897__$1,inst_78890);var inst_78899 = cljs.core.keyword_identical_QMARK_.call(null,inst_78890,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_78900 = (inst_78898) || (inst_78899);var state_78929__$1 = (function (){var statearr_78943 = state_78929;(statearr_78943[(10)] = inst_78897__$1);
return statearr_78943;
})();if(cljs.core.truth_(inst_78900))
{var statearr_78944_78969 = state_78929__$1;(statearr_78944_78969[(1)] = (8));
} else
{var statearr_78945_78970 = state_78929__$1;(statearr_78945_78970[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (14)))
{var inst_78922 = (state_78929[(2)]);var inst_78923 = cljs.core.async.close_BANG_.call(null,out);var state_78929__$1 = (function (){var statearr_78947 = state_78929;(statearr_78947[(13)] = inst_78922);
return statearr_78947;
})();var statearr_78948_78971 = state_78929__$1;(statearr_78948_78971[(2)] = inst_78923);
(statearr_78948_78971[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (10)))
{var inst_78912 = (state_78929[(2)]);var state_78929__$1 = state_78929;var statearr_78949_78972 = state_78929__$1;(statearr_78949_78972[(2)] = inst_78912);
(statearr_78949_78972[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78930 === (8)))
{var inst_78889 = (state_78929[(7)]);var inst_78893 = (state_78929[(9)]);var inst_78897 = (state_78929[(10)]);var inst_78902 = inst_78889.push(inst_78893);var tmp78946 = inst_78889;var inst_78889__$1 = tmp78946;var inst_78890 = inst_78897;var state_78929__$1 = (function (){var statearr_78950 = state_78929;(statearr_78950[(7)] = inst_78889__$1);
(statearr_78950[(14)] = inst_78902);
(statearr_78950[(8)] = inst_78890);
return statearr_78950;
})();var statearr_78951_78973 = state_78929__$1;(statearr_78951_78973[(2)] = null);
(statearr_78951_78973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11735__auto___78959,out))
;return ((function (switch__11720__auto__,c__11735__auto___78959,out){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_78955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_78955[(0)] = state_machine__11721__auto__);
(statearr_78955[(1)] = (1));
return statearr_78955;
});
var state_machine__11721__auto____1 = (function (state_78929){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_78929);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e78956){if((e78956 instanceof Object))
{var ex__11724__auto__ = e78956;var statearr_78957_78974 = state_78929;(statearr_78957_78974[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_78929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78956;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78975 = state_78929;
state_78929 = G__78975;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_78929){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_78929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___78959,out))
})();var state__11737__auto__ = (function (){var statearr_78958 = f__11736__auto__.call(null);(statearr_78958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___78959);
return statearr_78958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___78959,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map