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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15640 = (function (f,fn_handler,meta15641){
this.f = f;
this.fn_handler = fn_handler;
this.meta15641 = meta15641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15640.cljs$lang$type = true;
cljs.core.async.t15640.cljs$lang$ctorStr = "cljs.core.async/t15640";
cljs.core.async.t15640.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15640");
});
cljs.core.async.t15640.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15642){var self__ = this;
var _15642__$1 = this;return self__.meta15641;
});
cljs.core.async.t15640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15642,meta15641__$1){var self__ = this;
var _15642__$1 = this;return (new cljs.core.async.t15640(self__.f,self__.fn_handler,meta15641__$1));
});
cljs.core.async.__GT_t15640 = (function __GT_t15640(f__$1,fn_handler__$1,meta15641){return (new cljs.core.async.t15640(f__$1,fn_handler__$1,meta15641));
});
}
return (new cljs.core.async.t15640(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15644 = buff;if(G__15644)
{var bit__8655__auto__ = null;if(cljs.core.truth_((function (){var or__7992__auto__ = bit__8655__auto__;if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{return G__15644.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15644.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15644);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15644);
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
{var val_15645 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15645);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15645,ret){
return (function (){return fn1.call(null,val_15645);
});})(val_15645,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8861__auto___15646 = n;var x_15647 = (0);while(true){
if((x_15647 < n__8861__auto___15646))
{(a[x_15647] = (0));
{
var G__15648 = (x_15647 + (1));
x_15647 = G__15648;
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
var G__15649 = (i + (1));
i = G__15649;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15653 = (function (flag,alt_flag,meta15654){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15654 = meta15654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15653.cljs$lang$type = true;
cljs.core.async.t15653.cljs$lang$ctorStr = "cljs.core.async/t15653";
cljs.core.async.t15653.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15653");
});})(flag))
;
cljs.core.async.t15653.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15655){var self__ = this;
var _15655__$1 = this;return self__.meta15654;
});})(flag))
;
cljs.core.async.t15653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15655,meta15654__$1){var self__ = this;
var _15655__$1 = this;return (new cljs.core.async.t15653(self__.flag,self__.alt_flag,meta15654__$1));
});})(flag))
;
cljs.core.async.__GT_t15653 = ((function (flag){
return (function __GT_t15653(flag__$1,alt_flag__$1,meta15654){return (new cljs.core.async.t15653(flag__$1,alt_flag__$1,meta15654));
});})(flag))
;
}
return (new cljs.core.async.t15653(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15659 = (function (cb,flag,alt_handler,meta15660){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15660 = meta15660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15659.cljs$lang$type = true;
cljs.core.async.t15659.cljs$lang$ctorStr = "cljs.core.async/t15659";
cljs.core.async.t15659.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15659");
});
cljs.core.async.t15659.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15661){var self__ = this;
var _15661__$1 = this;return self__.meta15660;
});
cljs.core.async.t15659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15661,meta15660__$1){var self__ = this;
var _15661__$1 = this;return (new cljs.core.async.t15659(self__.cb,self__.flag,self__.alt_handler,meta15660__$1));
});
cljs.core.async.__GT_t15659 = (function __GT_t15659(cb__$1,flag__$1,alt_handler__$1,meta15660){return (new cljs.core.async.t15659(cb__$1,flag__$1,alt_handler__$1,meta15660));
});
}
return (new cljs.core.async.t15659(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15662_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15662_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15663_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15663_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7992__auto__ = wport;if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15664 = (i + (1));
i = G__15664;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7992__auto__ = ret;if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7980__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7980__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7980__auto__;
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
var alts_BANG___delegate = function (ports,p__15665){var map__15667 = p__15665;var map__15667__$1 = ((cljs.core.seq_QMARK_.call(null,map__15667))?cljs.core.apply.call(null,cljs.core.hash_map,map__15667):map__15667);var opts = map__15667__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__15665 = null;if (arguments.length > 1) {
  p__15665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15665);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15668){
var ports = cljs.core.first(arglist__15668);
var p__15665 = cljs.core.rest(arglist__15668);
return alts_BANG___delegate(ports,p__15665);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15676 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15676 = (function (ch,f,map_LT_,meta15677){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15677 = meta15677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15676.cljs$lang$type = true;
cljs.core.async.t15676.cljs$lang$ctorStr = "cljs.core.async/t15676";
cljs.core.async.t15676.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15676");
});
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15679 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15679 = (function (fn1,_,meta15677,ch,f,map_LT_,meta15680){
this.fn1 = fn1;
this._ = _;
this.meta15677 = meta15677;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15680 = meta15680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15679.cljs$lang$type = true;
cljs.core.async.t15679.cljs$lang$ctorStr = "cljs.core.async/t15679";
cljs.core.async.t15679.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15679");
});})(___$1))
;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15669_SHARP_){return f1.call(null,(((p1__15669_SHARP_ == null))?null:self__.f.call(null,p1__15669_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15681){var self__ = this;
var _15681__$1 = this;return self__.meta15680;
});})(___$1))
;
cljs.core.async.t15679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15681,meta15680__$1){var self__ = this;
var _15681__$1 = this;return (new cljs.core.async.t15679(self__.fn1,self__._,self__.meta15677,self__.ch,self__.f,self__.map_LT_,meta15680__$1));
});})(___$1))
;
cljs.core.async.__GT_t15679 = ((function (___$1){
return (function __GT_t15679(fn1__$1,___$2,meta15677__$1,ch__$2,f__$2,map_LT___$2,meta15680){return (new cljs.core.async.t15679(fn1__$1,___$2,meta15677__$1,ch__$2,f__$2,map_LT___$2,meta15680));
});})(___$1))
;
}
return (new cljs.core.async.t15679(fn1,___$1,self__.meta15677,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7980__auto__ = ret;if(cljs.core.truth_(and__7980__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7980__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15678){var self__ = this;
var _15678__$1 = this;return self__.meta15677;
});
cljs.core.async.t15676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15678,meta15677__$1){var self__ = this;
var _15678__$1 = this;return (new cljs.core.async.t15676(self__.ch,self__.f,self__.map_LT_,meta15677__$1));
});
cljs.core.async.__GT_t15676 = (function __GT_t15676(ch__$1,f__$1,map_LT___$1,meta15677){return (new cljs.core.async.t15676(ch__$1,f__$1,map_LT___$1,meta15677));
});
}
return (new cljs.core.async.t15676(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15685 = (function (ch,f,map_GT_,meta15686){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15686 = meta15686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15685.cljs$lang$type = true;
cljs.core.async.t15685.cljs$lang$ctorStr = "cljs.core.async/t15685";
cljs.core.async.t15685.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15685");
});
cljs.core.async.t15685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15685.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15687){var self__ = this;
var _15687__$1 = this;return self__.meta15686;
});
cljs.core.async.t15685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15687,meta15686__$1){var self__ = this;
var _15687__$1 = this;return (new cljs.core.async.t15685(self__.ch,self__.f,self__.map_GT_,meta15686__$1));
});
cljs.core.async.__GT_t15685 = (function __GT_t15685(ch__$1,f__$1,map_GT___$1,meta15686){return (new cljs.core.async.t15685(ch__$1,f__$1,map_GT___$1,meta15686));
});
}
return (new cljs.core.async.t15685(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15691 = (function (ch,p,filter_GT_,meta15692){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15692 = meta15692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15691.cljs$lang$type = true;
cljs.core.async.t15691.cljs$lang$ctorStr = "cljs.core.async/t15691";
cljs.core.async.t15691.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t15691");
});
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15693){var self__ = this;
var _15693__$1 = this;return self__.meta15692;
});
cljs.core.async.t15691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15693,meta15692__$1){var self__ = this;
var _15693__$1 = this;return (new cljs.core.async.t15691(self__.ch,self__.p,self__.filter_GT_,meta15692__$1));
});
cljs.core.async.__GT_t15691 = (function __GT_t15691(ch__$1,p__$1,filter_GT___$1,meta15692){return (new cljs.core.async.t15691(ch__$1,p__$1,filter_GT___$1,meta15692));
});
}
return (new cljs.core.async.t15691(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11147__auto___15776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___15776,out){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___15776,out){
return (function (state_15755){var state_val_15756 = (state_15755[(1)]);if((state_val_15756 === (7)))
{var inst_15751 = (state_15755[(2)]);var state_15755__$1 = state_15755;var statearr_15757_15777 = state_15755__$1;(statearr_15757_15777[(2)] = inst_15751);
(statearr_15757_15777[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (1)))
{var state_15755__$1 = state_15755;var statearr_15758_15778 = state_15755__$1;(statearr_15758_15778[(2)] = null);
(statearr_15758_15778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (4)))
{var inst_15737 = (state_15755[(7)]);var inst_15737__$1 = (state_15755[(2)]);var inst_15738 = (inst_15737__$1 == null);var state_15755__$1 = (function (){var statearr_15759 = state_15755;(statearr_15759[(7)] = inst_15737__$1);
return statearr_15759;
})();if(cljs.core.truth_(inst_15738))
{var statearr_15760_15779 = state_15755__$1;(statearr_15760_15779[(1)] = (5));
} else
{var statearr_15761_15780 = state_15755__$1;(statearr_15761_15780[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (6)))
{var inst_15737 = (state_15755[(7)]);var inst_15742 = p.call(null,inst_15737);var state_15755__$1 = state_15755;if(cljs.core.truth_(inst_15742))
{var statearr_15762_15781 = state_15755__$1;(statearr_15762_15781[(1)] = (8));
} else
{var statearr_15763_15782 = state_15755__$1;(statearr_15763_15782[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (3)))
{var inst_15753 = (state_15755[(2)]);var state_15755__$1 = state_15755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15755__$1,inst_15753);
} else
{if((state_val_15756 === (2)))
{var state_15755__$1 = state_15755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15755__$1,(4),ch);
} else
{if((state_val_15756 === (11)))
{var inst_15745 = (state_15755[(2)]);var state_15755__$1 = state_15755;var statearr_15764_15783 = state_15755__$1;(statearr_15764_15783[(2)] = inst_15745);
(statearr_15764_15783[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (9)))
{var state_15755__$1 = state_15755;var statearr_15765_15784 = state_15755__$1;(statearr_15765_15784[(2)] = null);
(statearr_15765_15784[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (5)))
{var inst_15740 = cljs.core.async.close_BANG_.call(null,out);var state_15755__$1 = state_15755;var statearr_15766_15785 = state_15755__$1;(statearr_15766_15785[(2)] = inst_15740);
(statearr_15766_15785[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (10)))
{var inst_15748 = (state_15755[(2)]);var state_15755__$1 = (function (){var statearr_15767 = state_15755;(statearr_15767[(8)] = inst_15748);
return statearr_15767;
})();var statearr_15768_15786 = state_15755__$1;(statearr_15768_15786[(2)] = null);
(statearr_15768_15786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15756 === (8)))
{var inst_15737 = (state_15755[(7)]);var state_15755__$1 = state_15755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15755__$1,(11),out,inst_15737);
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
});})(c__11147__auto___15776,out))
;return ((function (switch__11082__auto__,c__11147__auto___15776,out){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_15772 = [null,null,null,null,null,null,null,null,null];(statearr_15772[(0)] = state_machine__11083__auto__);
(statearr_15772[(1)] = (1));
return statearr_15772;
});
var state_machine__11083__auto____1 = (function (state_15755){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_15755);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e15773){if((e15773 instanceof Object))
{var ex__11086__auto__ = e15773;var statearr_15774_15787 = state_15755;(statearr_15774_15787[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15755);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15773;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15788 = state_15755;
state_15755 = G__15788;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_15755){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_15755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___15776,out))
})();var state__11149__auto__ = (function (){var statearr_15775 = f__11148__auto__.call(null);(statearr_15775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___15776);
return statearr_15775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___15776,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11147__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto__){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto__){
return (function (state_15954){var state_val_15955 = (state_15954[(1)]);if((state_val_15955 === (7)))
{var inst_15950 = (state_15954[(2)]);var state_15954__$1 = state_15954;var statearr_15956_15997 = state_15954__$1;(statearr_15956_15997[(2)] = inst_15950);
(statearr_15956_15997[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (20)))
{var inst_15920 = (state_15954[(7)]);var inst_15931 = (state_15954[(2)]);var inst_15932 = cljs.core.next.call(null,inst_15920);var inst_15906 = inst_15932;var inst_15907 = null;var inst_15908 = (0);var inst_15909 = (0);var state_15954__$1 = (function (){var statearr_15957 = state_15954;(statearr_15957[(8)] = inst_15909);
(statearr_15957[(9)] = inst_15931);
(statearr_15957[(10)] = inst_15906);
(statearr_15957[(11)] = inst_15908);
(statearr_15957[(12)] = inst_15907);
return statearr_15957;
})();var statearr_15958_15998 = state_15954__$1;(statearr_15958_15998[(2)] = null);
(statearr_15958_15998[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (1)))
{var state_15954__$1 = state_15954;var statearr_15959_15999 = state_15954__$1;(statearr_15959_15999[(2)] = null);
(statearr_15959_15999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (4)))
{var inst_15895 = (state_15954[(13)]);var inst_15895__$1 = (state_15954[(2)]);var inst_15896 = (inst_15895__$1 == null);var state_15954__$1 = (function (){var statearr_15960 = state_15954;(statearr_15960[(13)] = inst_15895__$1);
return statearr_15960;
})();if(cljs.core.truth_(inst_15896))
{var statearr_15961_16000 = state_15954__$1;(statearr_15961_16000[(1)] = (5));
} else
{var statearr_15962_16001 = state_15954__$1;(statearr_15962_16001[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (15)))
{var state_15954__$1 = state_15954;var statearr_15966_16002 = state_15954__$1;(statearr_15966_16002[(2)] = null);
(statearr_15966_16002[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (21)))
{var state_15954__$1 = state_15954;var statearr_15967_16003 = state_15954__$1;(statearr_15967_16003[(2)] = null);
(statearr_15967_16003[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (13)))
{var inst_15909 = (state_15954[(8)]);var inst_15906 = (state_15954[(10)]);var inst_15908 = (state_15954[(11)]);var inst_15907 = (state_15954[(12)]);var inst_15916 = (state_15954[(2)]);var inst_15917 = (inst_15909 + (1));var tmp15963 = inst_15906;var tmp15964 = inst_15908;var tmp15965 = inst_15907;var inst_15906__$1 = tmp15963;var inst_15907__$1 = tmp15965;var inst_15908__$1 = tmp15964;var inst_15909__$1 = inst_15917;var state_15954__$1 = (function (){var statearr_15968 = state_15954;(statearr_15968[(14)] = inst_15916);
(statearr_15968[(8)] = inst_15909__$1);
(statearr_15968[(10)] = inst_15906__$1);
(statearr_15968[(11)] = inst_15908__$1);
(statearr_15968[(12)] = inst_15907__$1);
return statearr_15968;
})();var statearr_15969_16004 = state_15954__$1;(statearr_15969_16004[(2)] = null);
(statearr_15969_16004[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (22)))
{var state_15954__$1 = state_15954;var statearr_15970_16005 = state_15954__$1;(statearr_15970_16005[(2)] = null);
(statearr_15970_16005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (6)))
{var inst_15895 = (state_15954[(13)]);var inst_15904 = f.call(null,inst_15895);var inst_15905 = cljs.core.seq.call(null,inst_15904);var inst_15906 = inst_15905;var inst_15907 = null;var inst_15908 = (0);var inst_15909 = (0);var state_15954__$1 = (function (){var statearr_15971 = state_15954;(statearr_15971[(8)] = inst_15909);
(statearr_15971[(10)] = inst_15906);
(statearr_15971[(11)] = inst_15908);
(statearr_15971[(12)] = inst_15907);
return statearr_15971;
})();var statearr_15972_16006 = state_15954__$1;(statearr_15972_16006[(2)] = null);
(statearr_15972_16006[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (17)))
{var inst_15920 = (state_15954[(7)]);var inst_15924 = cljs.core.chunk_first.call(null,inst_15920);var inst_15925 = cljs.core.chunk_rest.call(null,inst_15920);var inst_15926 = cljs.core.count.call(null,inst_15924);var inst_15906 = inst_15925;var inst_15907 = inst_15924;var inst_15908 = inst_15926;var inst_15909 = (0);var state_15954__$1 = (function (){var statearr_15973 = state_15954;(statearr_15973[(8)] = inst_15909);
(statearr_15973[(10)] = inst_15906);
(statearr_15973[(11)] = inst_15908);
(statearr_15973[(12)] = inst_15907);
return statearr_15973;
})();var statearr_15974_16007 = state_15954__$1;(statearr_15974_16007[(2)] = null);
(statearr_15974_16007[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (3)))
{var inst_15952 = (state_15954[(2)]);var state_15954__$1 = state_15954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15954__$1,inst_15952);
} else
{if((state_val_15955 === (12)))
{var inst_15940 = (state_15954[(2)]);var state_15954__$1 = state_15954;var statearr_15975_16008 = state_15954__$1;(statearr_15975_16008[(2)] = inst_15940);
(statearr_15975_16008[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (2)))
{var state_15954__$1 = state_15954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15954__$1,(4),in$);
} else
{if((state_val_15955 === (23)))
{var inst_15948 = (state_15954[(2)]);var state_15954__$1 = state_15954;var statearr_15976_16009 = state_15954__$1;(statearr_15976_16009[(2)] = inst_15948);
(statearr_15976_16009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (19)))
{var inst_15935 = (state_15954[(2)]);var state_15954__$1 = state_15954;var statearr_15977_16010 = state_15954__$1;(statearr_15977_16010[(2)] = inst_15935);
(statearr_15977_16010[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (11)))
{var inst_15920 = (state_15954[(7)]);var inst_15906 = (state_15954[(10)]);var inst_15920__$1 = cljs.core.seq.call(null,inst_15906);var state_15954__$1 = (function (){var statearr_15978 = state_15954;(statearr_15978[(7)] = inst_15920__$1);
return statearr_15978;
})();if(inst_15920__$1)
{var statearr_15979_16011 = state_15954__$1;(statearr_15979_16011[(1)] = (14));
} else
{var statearr_15980_16012 = state_15954__$1;(statearr_15980_16012[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (9)))
{var inst_15942 = (state_15954[(2)]);var inst_15943 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15954__$1 = (function (){var statearr_15981 = state_15954;(statearr_15981[(15)] = inst_15942);
return statearr_15981;
})();if(cljs.core.truth_(inst_15943))
{var statearr_15982_16013 = state_15954__$1;(statearr_15982_16013[(1)] = (21));
} else
{var statearr_15983_16014 = state_15954__$1;(statearr_15983_16014[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (5)))
{var inst_15898 = cljs.core.async.close_BANG_.call(null,out);var state_15954__$1 = state_15954;var statearr_15984_16015 = state_15954__$1;(statearr_15984_16015[(2)] = inst_15898);
(statearr_15984_16015[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (14)))
{var inst_15920 = (state_15954[(7)]);var inst_15922 = cljs.core.chunked_seq_QMARK_.call(null,inst_15920);var state_15954__$1 = state_15954;if(inst_15922)
{var statearr_15985_16016 = state_15954__$1;(statearr_15985_16016[(1)] = (17));
} else
{var statearr_15986_16017 = state_15954__$1;(statearr_15986_16017[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (16)))
{var inst_15938 = (state_15954[(2)]);var state_15954__$1 = state_15954;var statearr_15987_16018 = state_15954__$1;(statearr_15987_16018[(2)] = inst_15938);
(statearr_15987_16018[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15955 === (10)))
{var inst_15909 = (state_15954[(8)]);var inst_15907 = (state_15954[(12)]);var inst_15914 = cljs.core._nth.call(null,inst_15907,inst_15909);var state_15954__$1 = state_15954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15954__$1,(13),out,inst_15914);
} else
{if((state_val_15955 === (18)))
{var inst_15920 = (state_15954[(7)]);var inst_15929 = cljs.core.first.call(null,inst_15920);var state_15954__$1 = state_15954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15954__$1,(20),out,inst_15929);
} else
{if((state_val_15955 === (8)))
{var inst_15909 = (state_15954[(8)]);var inst_15908 = (state_15954[(11)]);var inst_15911 = (inst_15909 < inst_15908);var inst_15912 = inst_15911;var state_15954__$1 = state_15954;if(cljs.core.truth_(inst_15912))
{var statearr_15988_16019 = state_15954__$1;(statearr_15988_16019[(1)] = (10));
} else
{var statearr_15989_16020 = state_15954__$1;(statearr_15989_16020[(1)] = (11));
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
});})(c__11147__auto__))
;return ((function (switch__11082__auto__,c__11147__auto__){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_15993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15993[(0)] = state_machine__11083__auto__);
(statearr_15993[(1)] = (1));
return statearr_15993;
});
var state_machine__11083__auto____1 = (function (state_15954){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_15954);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e15994){if((e15994 instanceof Object))
{var ex__11086__auto__ = e15994;var statearr_15995_16021 = state_15954;(statearr_15995_16021[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15994;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16022 = state_15954;
state_15954 = G__16022;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_15954){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_15954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto__))
})();var state__11149__auto__ = (function (){var statearr_15996 = f__11148__auto__.call(null);(statearr_15996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto__);
return statearr_15996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto__))
);
return c__11147__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11147__auto___16117 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___16117){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___16117){
return (function (state_16093){var state_val_16094 = (state_16093[(1)]);if((state_val_16094 === (7)))
{var inst_16089 = (state_16093[(2)]);var state_16093__$1 = state_16093;var statearr_16095_16118 = state_16093__$1;(statearr_16095_16118[(2)] = inst_16089);
(statearr_16095_16118[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (1)))
{var state_16093__$1 = state_16093;var statearr_16096_16119 = state_16093__$1;(statearr_16096_16119[(2)] = null);
(statearr_16096_16119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (4)))
{var inst_16072 = (state_16093[(7)]);var inst_16072__$1 = (state_16093[(2)]);var inst_16073 = (inst_16072__$1 == null);var state_16093__$1 = (function (){var statearr_16097 = state_16093;(statearr_16097[(7)] = inst_16072__$1);
return statearr_16097;
})();if(cljs.core.truth_(inst_16073))
{var statearr_16098_16120 = state_16093__$1;(statearr_16098_16120[(1)] = (5));
} else
{var statearr_16099_16121 = state_16093__$1;(statearr_16099_16121[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (13)))
{var state_16093__$1 = state_16093;var statearr_16100_16122 = state_16093__$1;(statearr_16100_16122[(2)] = null);
(statearr_16100_16122[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (6)))
{var inst_16072 = (state_16093[(7)]);var state_16093__$1 = state_16093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16093__$1,(11),to,inst_16072);
} else
{if((state_val_16094 === (3)))
{var inst_16091 = (state_16093[(2)]);var state_16093__$1 = state_16093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16093__$1,inst_16091);
} else
{if((state_val_16094 === (12)))
{var state_16093__$1 = state_16093;var statearr_16101_16123 = state_16093__$1;(statearr_16101_16123[(2)] = null);
(statearr_16101_16123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (2)))
{var state_16093__$1 = state_16093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16093__$1,(4),from);
} else
{if((state_val_16094 === (11)))
{var inst_16082 = (state_16093[(2)]);var state_16093__$1 = state_16093;if(cljs.core.truth_(inst_16082))
{var statearr_16102_16124 = state_16093__$1;(statearr_16102_16124[(1)] = (12));
} else
{var statearr_16103_16125 = state_16093__$1;(statearr_16103_16125[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (9)))
{var state_16093__$1 = state_16093;var statearr_16104_16126 = state_16093__$1;(statearr_16104_16126[(2)] = null);
(statearr_16104_16126[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (5)))
{var state_16093__$1 = state_16093;if(cljs.core.truth_(close_QMARK_))
{var statearr_16105_16127 = state_16093__$1;(statearr_16105_16127[(1)] = (8));
} else
{var statearr_16106_16128 = state_16093__$1;(statearr_16106_16128[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (14)))
{var inst_16087 = (state_16093[(2)]);var state_16093__$1 = state_16093;var statearr_16107_16129 = state_16093__$1;(statearr_16107_16129[(2)] = inst_16087);
(statearr_16107_16129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (10)))
{var inst_16079 = (state_16093[(2)]);var state_16093__$1 = state_16093;var statearr_16108_16130 = state_16093__$1;(statearr_16108_16130[(2)] = inst_16079);
(statearr_16108_16130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16094 === (8)))
{var inst_16076 = cljs.core.async.close_BANG_.call(null,to);var state_16093__$1 = state_16093;var statearr_16109_16131 = state_16093__$1;(statearr_16109_16131[(2)] = inst_16076);
(statearr_16109_16131[(1)] = (10));
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
});})(c__11147__auto___16117))
;return ((function (switch__11082__auto__,c__11147__auto___16117){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_16113 = [null,null,null,null,null,null,null,null];(statearr_16113[(0)] = state_machine__11083__auto__);
(statearr_16113[(1)] = (1));
return statearr_16113;
});
var state_machine__11083__auto____1 = (function (state_16093){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_16093);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e16114){if((e16114 instanceof Object))
{var ex__11086__auto__ = e16114;var statearr_16115_16132 = state_16093;(statearr_16115_16132[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16093);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16133 = state_16093;
state_16093 = G__16133;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___16117))
})();var state__11149__auto__ = (function (){var statearr_16116 = f__11148__auto__.call(null);(statearr_16116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___16117);
return statearr_16116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___16117))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11147__auto___16234 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___16234,tc,fc){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___16234,tc,fc){
return (function (state_16209){var state_val_16210 = (state_16209[(1)]);if((state_val_16210 === (7)))
{var inst_16205 = (state_16209[(2)]);var state_16209__$1 = state_16209;var statearr_16211_16235 = state_16209__$1;(statearr_16211_16235[(2)] = inst_16205);
(statearr_16211_16235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (1)))
{var state_16209__$1 = state_16209;var statearr_16212_16236 = state_16209__$1;(statearr_16212_16236[(2)] = null);
(statearr_16212_16236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (4)))
{var inst_16186 = (state_16209[(7)]);var inst_16186__$1 = (state_16209[(2)]);var inst_16187 = (inst_16186__$1 == null);var state_16209__$1 = (function (){var statearr_16213 = state_16209;(statearr_16213[(7)] = inst_16186__$1);
return statearr_16213;
})();if(cljs.core.truth_(inst_16187))
{var statearr_16214_16237 = state_16209__$1;(statearr_16214_16237[(1)] = (5));
} else
{var statearr_16215_16238 = state_16209__$1;(statearr_16215_16238[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (13)))
{var state_16209__$1 = state_16209;var statearr_16216_16239 = state_16209__$1;(statearr_16216_16239[(2)] = null);
(statearr_16216_16239[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (6)))
{var inst_16186 = (state_16209[(7)]);var inst_16192 = p.call(null,inst_16186);var state_16209__$1 = state_16209;if(cljs.core.truth_(inst_16192))
{var statearr_16217_16240 = state_16209__$1;(statearr_16217_16240[(1)] = (9));
} else
{var statearr_16218_16241 = state_16209__$1;(statearr_16218_16241[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (3)))
{var inst_16207 = (state_16209[(2)]);var state_16209__$1 = state_16209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16209__$1,inst_16207);
} else
{if((state_val_16210 === (12)))
{var state_16209__$1 = state_16209;var statearr_16219_16242 = state_16209__$1;(statearr_16219_16242[(2)] = null);
(statearr_16219_16242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (2)))
{var state_16209__$1 = state_16209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16209__$1,(4),ch);
} else
{if((state_val_16210 === (11)))
{var inst_16186 = (state_16209[(7)]);var inst_16196 = (state_16209[(2)]);var state_16209__$1 = state_16209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16209__$1,(8),inst_16196,inst_16186);
} else
{if((state_val_16210 === (9)))
{var state_16209__$1 = state_16209;var statearr_16220_16243 = state_16209__$1;(statearr_16220_16243[(2)] = tc);
(statearr_16220_16243[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (5)))
{var inst_16189 = cljs.core.async.close_BANG_.call(null,tc);var inst_16190 = cljs.core.async.close_BANG_.call(null,fc);var state_16209__$1 = (function (){var statearr_16221 = state_16209;(statearr_16221[(8)] = inst_16189);
return statearr_16221;
})();var statearr_16222_16244 = state_16209__$1;(statearr_16222_16244[(2)] = inst_16190);
(statearr_16222_16244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (14)))
{var inst_16203 = (state_16209[(2)]);var state_16209__$1 = state_16209;var statearr_16223_16245 = state_16209__$1;(statearr_16223_16245[(2)] = inst_16203);
(statearr_16223_16245[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (10)))
{var state_16209__$1 = state_16209;var statearr_16224_16246 = state_16209__$1;(statearr_16224_16246[(2)] = fc);
(statearr_16224_16246[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16210 === (8)))
{var inst_16198 = (state_16209[(2)]);var state_16209__$1 = state_16209;if(cljs.core.truth_(inst_16198))
{var statearr_16225_16247 = state_16209__$1;(statearr_16225_16247[(1)] = (12));
} else
{var statearr_16226_16248 = state_16209__$1;(statearr_16226_16248[(1)] = (13));
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
});})(c__11147__auto___16234,tc,fc))
;return ((function (switch__11082__auto__,c__11147__auto___16234,tc,fc){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_16230 = [null,null,null,null,null,null,null,null,null];(statearr_16230[(0)] = state_machine__11083__auto__);
(statearr_16230[(1)] = (1));
return statearr_16230;
});
var state_machine__11083__auto____1 = (function (state_16209){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_16209);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e16231){if((e16231 instanceof Object))
{var ex__11086__auto__ = e16231;var statearr_16232_16249 = state_16209;(statearr_16232_16249[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16231;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16250 = state_16209;
state_16209 = G__16250;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_16209){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_16209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___16234,tc,fc))
})();var state__11149__auto__ = (function (){var statearr_16233 = f__11148__auto__.call(null);(statearr_16233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___16234);
return statearr_16233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___16234,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11147__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto__){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto__){
return (function (state_16297){var state_val_16298 = (state_16297[(1)]);if((state_val_16298 === (7)))
{var inst_16293 = (state_16297[(2)]);var state_16297__$1 = state_16297;var statearr_16299_16315 = state_16297__$1;(statearr_16299_16315[(2)] = inst_16293);
(statearr_16299_16315[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16298 === (6)))
{var inst_16283 = (state_16297[(7)]);var inst_16286 = (state_16297[(8)]);var inst_16290 = f.call(null,inst_16283,inst_16286);var inst_16283__$1 = inst_16290;var state_16297__$1 = (function (){var statearr_16300 = state_16297;(statearr_16300[(7)] = inst_16283__$1);
return statearr_16300;
})();var statearr_16301_16316 = state_16297__$1;(statearr_16301_16316[(2)] = null);
(statearr_16301_16316[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16298 === (5)))
{var inst_16283 = (state_16297[(7)]);var state_16297__$1 = state_16297;var statearr_16302_16317 = state_16297__$1;(statearr_16302_16317[(2)] = inst_16283);
(statearr_16302_16317[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16298 === (4)))
{var inst_16286 = (state_16297[(8)]);var inst_16286__$1 = (state_16297[(2)]);var inst_16287 = (inst_16286__$1 == null);var state_16297__$1 = (function (){var statearr_16303 = state_16297;(statearr_16303[(8)] = inst_16286__$1);
return statearr_16303;
})();if(cljs.core.truth_(inst_16287))
{var statearr_16304_16318 = state_16297__$1;(statearr_16304_16318[(1)] = (5));
} else
{var statearr_16305_16319 = state_16297__$1;(statearr_16305_16319[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16298 === (3)))
{var inst_16295 = (state_16297[(2)]);var state_16297__$1 = state_16297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16297__$1,inst_16295);
} else
{if((state_val_16298 === (2)))
{var state_16297__$1 = state_16297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16297__$1,(4),ch);
} else
{if((state_val_16298 === (1)))
{var inst_16283 = init;var state_16297__$1 = (function (){var statearr_16306 = state_16297;(statearr_16306[(7)] = inst_16283);
return statearr_16306;
})();var statearr_16307_16320 = state_16297__$1;(statearr_16307_16320[(2)] = null);
(statearr_16307_16320[(1)] = (2));
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
});})(c__11147__auto__))
;return ((function (switch__11082__auto__,c__11147__auto__){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_16311 = [null,null,null,null,null,null,null,null,null];(statearr_16311[(0)] = state_machine__11083__auto__);
(statearr_16311[(1)] = (1));
return statearr_16311;
});
var state_machine__11083__auto____1 = (function (state_16297){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_16297);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e16312){if((e16312 instanceof Object))
{var ex__11086__auto__ = e16312;var statearr_16313_16321 = state_16297;(statearr_16313_16321[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16312;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16322 = state_16297;
state_16297 = G__16322;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_16297){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_16297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto__))
})();var state__11149__auto__ = (function (){var statearr_16314 = f__11148__auto__.call(null);(statearr_16314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto__);
return statearr_16314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto__))
);
return c__11147__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11147__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto__){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto__){
return (function (state_16396){var state_val_16397 = (state_16396[(1)]);if((state_val_16397 === (7)))
{var inst_16378 = (state_16396[(2)]);var state_16396__$1 = state_16396;var statearr_16398_16421 = state_16396__$1;(statearr_16398_16421[(2)] = inst_16378);
(statearr_16398_16421[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (1)))
{var inst_16372 = cljs.core.seq.call(null,coll);var inst_16373 = inst_16372;var state_16396__$1 = (function (){var statearr_16399 = state_16396;(statearr_16399[(7)] = inst_16373);
return statearr_16399;
})();var statearr_16400_16422 = state_16396__$1;(statearr_16400_16422[(2)] = null);
(statearr_16400_16422[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (4)))
{var inst_16373 = (state_16396[(7)]);var inst_16376 = cljs.core.first.call(null,inst_16373);var state_16396__$1 = state_16396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16396__$1,(7),ch,inst_16376);
} else
{if((state_val_16397 === (13)))
{var inst_16390 = (state_16396[(2)]);var state_16396__$1 = state_16396;var statearr_16401_16423 = state_16396__$1;(statearr_16401_16423[(2)] = inst_16390);
(statearr_16401_16423[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (6)))
{var inst_16381 = (state_16396[(2)]);var state_16396__$1 = state_16396;if(cljs.core.truth_(inst_16381))
{var statearr_16402_16424 = state_16396__$1;(statearr_16402_16424[(1)] = (8));
} else
{var statearr_16403_16425 = state_16396__$1;(statearr_16403_16425[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (3)))
{var inst_16394 = (state_16396[(2)]);var state_16396__$1 = state_16396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16396__$1,inst_16394);
} else
{if((state_val_16397 === (12)))
{var state_16396__$1 = state_16396;var statearr_16404_16426 = state_16396__$1;(statearr_16404_16426[(2)] = null);
(statearr_16404_16426[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (2)))
{var inst_16373 = (state_16396[(7)]);var state_16396__$1 = state_16396;if(cljs.core.truth_(inst_16373))
{var statearr_16405_16427 = state_16396__$1;(statearr_16405_16427[(1)] = (4));
} else
{var statearr_16406_16428 = state_16396__$1;(statearr_16406_16428[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (11)))
{var inst_16387 = cljs.core.async.close_BANG_.call(null,ch);var state_16396__$1 = state_16396;var statearr_16407_16429 = state_16396__$1;(statearr_16407_16429[(2)] = inst_16387);
(statearr_16407_16429[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (9)))
{var state_16396__$1 = state_16396;if(cljs.core.truth_(close_QMARK_))
{var statearr_16408_16430 = state_16396__$1;(statearr_16408_16430[(1)] = (11));
} else
{var statearr_16409_16431 = state_16396__$1;(statearr_16409_16431[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (5)))
{var inst_16373 = (state_16396[(7)]);var state_16396__$1 = state_16396;var statearr_16410_16432 = state_16396__$1;(statearr_16410_16432[(2)] = inst_16373);
(statearr_16410_16432[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (10)))
{var inst_16392 = (state_16396[(2)]);var state_16396__$1 = state_16396;var statearr_16411_16433 = state_16396__$1;(statearr_16411_16433[(2)] = inst_16392);
(statearr_16411_16433[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16397 === (8)))
{var inst_16373 = (state_16396[(7)]);var inst_16383 = cljs.core.next.call(null,inst_16373);var inst_16373__$1 = inst_16383;var state_16396__$1 = (function (){var statearr_16412 = state_16396;(statearr_16412[(7)] = inst_16373__$1);
return statearr_16412;
})();var statearr_16413_16434 = state_16396__$1;(statearr_16413_16434[(2)] = null);
(statearr_16413_16434[(1)] = (2));
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
});})(c__11147__auto__))
;return ((function (switch__11082__auto__,c__11147__auto__){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_16417 = [null,null,null,null,null,null,null,null];(statearr_16417[(0)] = state_machine__11083__auto__);
(statearr_16417[(1)] = (1));
return statearr_16417;
});
var state_machine__11083__auto____1 = (function (state_16396){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_16396);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e16418){if((e16418 instanceof Object))
{var ex__11086__auto__ = e16418;var statearr_16419_16435 = state_16396;(statearr_16419_16435[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16418;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16436 = state_16396;
state_16396 = G__16436;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_16396){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_16396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto__))
})();var state__11149__auto__ = (function (){var statearr_16420 = f__11148__auto__.call(null);(statearr_16420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto__);
return statearr_16420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto__))
);
return c__11147__auto__;
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
cljs.core.async.Mux = (function (){var obj16438 = {};return obj16438;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7980__auto__ = _;if(and__7980__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7980__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8628__auto__ = (((_ == null))?null:_);return (function (){var or__7992__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16440 = {};return obj16440;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16662 = (function (cs,ch,mult,meta16663){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16663 = meta16663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16662.cljs$lang$type = true;
cljs.core.async.t16662.cljs$lang$ctorStr = "cljs.core.async/t16662";
cljs.core.async.t16662.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t16662");
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16664){var self__ = this;
var _16664__$1 = this;return self__.meta16663;
});})(cs))
;
cljs.core.async.t16662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16664,meta16663__$1){var self__ = this;
var _16664__$1 = this;return (new cljs.core.async.t16662(self__.cs,self__.ch,self__.mult,meta16663__$1));
});})(cs))
;
cljs.core.async.__GT_t16662 = ((function (cs){
return (function __GT_t16662(cs__$1,ch__$1,mult__$1,meta16663){return (new cljs.core.async.t16662(cs__$1,ch__$1,mult__$1,meta16663));
});})(cs))
;
}
return (new cljs.core.async.t16662(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11147__auto___16883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___16883,cs,m,dchan,dctr,done){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___16883,cs,m,dchan,dctr,done){
return (function (state_16795){var state_val_16796 = (state_16795[(1)]);if((state_val_16796 === (7)))
{var inst_16791 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16797_16884 = state_16795__$1;(statearr_16797_16884[(2)] = inst_16791);
(statearr_16797_16884[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (20)))
{var inst_16696 = (state_16795[(7)]);var inst_16706 = cljs.core.first.call(null,inst_16696);var inst_16707 = cljs.core.nth.call(null,inst_16706,(0),null);var inst_16708 = cljs.core.nth.call(null,inst_16706,(1),null);var state_16795__$1 = (function (){var statearr_16798 = state_16795;(statearr_16798[(8)] = inst_16707);
return statearr_16798;
})();if(cljs.core.truth_(inst_16708))
{var statearr_16799_16885 = state_16795__$1;(statearr_16799_16885[(1)] = (22));
} else
{var statearr_16800_16886 = state_16795__$1;(statearr_16800_16886[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (27)))
{var inst_16743 = (state_16795[(9)]);var inst_16736 = (state_16795[(10)]);var inst_16667 = (state_16795[(11)]);var inst_16738 = (state_16795[(12)]);var inst_16743__$1 = cljs.core._nth.call(null,inst_16736,inst_16738);var inst_16744 = cljs.core.async.put_BANG_.call(null,inst_16743__$1,inst_16667,done);var state_16795__$1 = (function (){var statearr_16801 = state_16795;(statearr_16801[(9)] = inst_16743__$1);
return statearr_16801;
})();if(cljs.core.truth_(inst_16744))
{var statearr_16802_16887 = state_16795__$1;(statearr_16802_16887[(1)] = (30));
} else
{var statearr_16803_16888 = state_16795__$1;(statearr_16803_16888[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (1)))
{var state_16795__$1 = state_16795;var statearr_16804_16889 = state_16795__$1;(statearr_16804_16889[(2)] = null);
(statearr_16804_16889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (24)))
{var inst_16696 = (state_16795[(7)]);var inst_16713 = (state_16795[(2)]);var inst_16714 = cljs.core.next.call(null,inst_16696);var inst_16676 = inst_16714;var inst_16677 = null;var inst_16678 = (0);var inst_16679 = (0);var state_16795__$1 = (function (){var statearr_16805 = state_16795;(statearr_16805[(13)] = inst_16676);
(statearr_16805[(14)] = inst_16678);
(statearr_16805[(15)] = inst_16713);
(statearr_16805[(16)] = inst_16679);
(statearr_16805[(17)] = inst_16677);
return statearr_16805;
})();var statearr_16806_16890 = state_16795__$1;(statearr_16806_16890[(2)] = null);
(statearr_16806_16890[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (39)))
{var state_16795__$1 = state_16795;var statearr_16810_16891 = state_16795__$1;(statearr_16810_16891[(2)] = null);
(statearr_16810_16891[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (4)))
{var inst_16667 = (state_16795[(11)]);var inst_16667__$1 = (state_16795[(2)]);var inst_16668 = (inst_16667__$1 == null);var state_16795__$1 = (function (){var statearr_16811 = state_16795;(statearr_16811[(11)] = inst_16667__$1);
return statearr_16811;
})();if(cljs.core.truth_(inst_16668))
{var statearr_16812_16892 = state_16795__$1;(statearr_16812_16892[(1)] = (5));
} else
{var statearr_16813_16893 = state_16795__$1;(statearr_16813_16893[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (15)))
{var inst_16676 = (state_16795[(13)]);var inst_16678 = (state_16795[(14)]);var inst_16679 = (state_16795[(16)]);var inst_16677 = (state_16795[(17)]);var inst_16692 = (state_16795[(2)]);var inst_16693 = (inst_16679 + (1));var tmp16807 = inst_16676;var tmp16808 = inst_16678;var tmp16809 = inst_16677;var inst_16676__$1 = tmp16807;var inst_16677__$1 = tmp16809;var inst_16678__$1 = tmp16808;var inst_16679__$1 = inst_16693;var state_16795__$1 = (function (){var statearr_16814 = state_16795;(statearr_16814[(13)] = inst_16676__$1);
(statearr_16814[(18)] = inst_16692);
(statearr_16814[(14)] = inst_16678__$1);
(statearr_16814[(16)] = inst_16679__$1);
(statearr_16814[(17)] = inst_16677__$1);
return statearr_16814;
})();var statearr_16815_16894 = state_16795__$1;(statearr_16815_16894[(2)] = null);
(statearr_16815_16894[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (21)))
{var inst_16717 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16819_16895 = state_16795__$1;(statearr_16819_16895[(2)] = inst_16717);
(statearr_16819_16895[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (31)))
{var inst_16743 = (state_16795[(9)]);var inst_16747 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16748 = cljs.core.async.untap_STAR_.call(null,m,inst_16743);var state_16795__$1 = (function (){var statearr_16820 = state_16795;(statearr_16820[(19)] = inst_16747);
return statearr_16820;
})();var statearr_16821_16896 = state_16795__$1;(statearr_16821_16896[(2)] = inst_16748);
(statearr_16821_16896[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (32)))
{var inst_16737 = (state_16795[(20)]);var inst_16735 = (state_16795[(21)]);var inst_16736 = (state_16795[(10)]);var inst_16738 = (state_16795[(12)]);var inst_16750 = (state_16795[(2)]);var inst_16751 = (inst_16738 + (1));var tmp16816 = inst_16737;var tmp16817 = inst_16735;var tmp16818 = inst_16736;var inst_16735__$1 = tmp16817;var inst_16736__$1 = tmp16818;var inst_16737__$1 = tmp16816;var inst_16738__$1 = inst_16751;var state_16795__$1 = (function (){var statearr_16822 = state_16795;(statearr_16822[(20)] = inst_16737__$1);
(statearr_16822[(22)] = inst_16750);
(statearr_16822[(21)] = inst_16735__$1);
(statearr_16822[(10)] = inst_16736__$1);
(statearr_16822[(12)] = inst_16738__$1);
return statearr_16822;
})();var statearr_16823_16897 = state_16795__$1;(statearr_16823_16897[(2)] = null);
(statearr_16823_16897[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (40)))
{var inst_16763 = (state_16795[(23)]);var inst_16767 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16768 = cljs.core.async.untap_STAR_.call(null,m,inst_16763);var state_16795__$1 = (function (){var statearr_16824 = state_16795;(statearr_16824[(24)] = inst_16767);
return statearr_16824;
})();var statearr_16825_16898 = state_16795__$1;(statearr_16825_16898[(2)] = inst_16768);
(statearr_16825_16898[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (33)))
{var inst_16754 = (state_16795[(25)]);var inst_16756 = cljs.core.chunked_seq_QMARK_.call(null,inst_16754);var state_16795__$1 = state_16795;if(inst_16756)
{var statearr_16826_16899 = state_16795__$1;(statearr_16826_16899[(1)] = (36));
} else
{var statearr_16827_16900 = state_16795__$1;(statearr_16827_16900[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (13)))
{var inst_16686 = (state_16795[(26)]);var inst_16689 = cljs.core.async.close_BANG_.call(null,inst_16686);var state_16795__$1 = state_16795;var statearr_16828_16901 = state_16795__$1;(statearr_16828_16901[(2)] = inst_16689);
(statearr_16828_16901[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (22)))
{var inst_16707 = (state_16795[(8)]);var inst_16710 = cljs.core.async.close_BANG_.call(null,inst_16707);var state_16795__$1 = state_16795;var statearr_16829_16902 = state_16795__$1;(statearr_16829_16902[(2)] = inst_16710);
(statearr_16829_16902[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (36)))
{var inst_16754 = (state_16795[(25)]);var inst_16758 = cljs.core.chunk_first.call(null,inst_16754);var inst_16759 = cljs.core.chunk_rest.call(null,inst_16754);var inst_16760 = cljs.core.count.call(null,inst_16758);var inst_16735 = inst_16759;var inst_16736 = inst_16758;var inst_16737 = inst_16760;var inst_16738 = (0);var state_16795__$1 = (function (){var statearr_16830 = state_16795;(statearr_16830[(20)] = inst_16737);
(statearr_16830[(21)] = inst_16735);
(statearr_16830[(10)] = inst_16736);
(statearr_16830[(12)] = inst_16738);
return statearr_16830;
})();var statearr_16831_16903 = state_16795__$1;(statearr_16831_16903[(2)] = null);
(statearr_16831_16903[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (41)))
{var inst_16754 = (state_16795[(25)]);var inst_16770 = (state_16795[(2)]);var inst_16771 = cljs.core.next.call(null,inst_16754);var inst_16735 = inst_16771;var inst_16736 = null;var inst_16737 = (0);var inst_16738 = (0);var state_16795__$1 = (function (){var statearr_16832 = state_16795;(statearr_16832[(20)] = inst_16737);
(statearr_16832[(21)] = inst_16735);
(statearr_16832[(10)] = inst_16736);
(statearr_16832[(27)] = inst_16770);
(statearr_16832[(12)] = inst_16738);
return statearr_16832;
})();var statearr_16833_16904 = state_16795__$1;(statearr_16833_16904[(2)] = null);
(statearr_16833_16904[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (43)))
{var state_16795__$1 = state_16795;var statearr_16834_16905 = state_16795__$1;(statearr_16834_16905[(2)] = null);
(statearr_16834_16905[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (29)))
{var inst_16779 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16835_16906 = state_16795__$1;(statearr_16835_16906[(2)] = inst_16779);
(statearr_16835_16906[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (44)))
{var inst_16788 = (state_16795[(2)]);var state_16795__$1 = (function (){var statearr_16836 = state_16795;(statearr_16836[(28)] = inst_16788);
return statearr_16836;
})();var statearr_16837_16907 = state_16795__$1;(statearr_16837_16907[(2)] = null);
(statearr_16837_16907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (6)))
{var inst_16727 = (state_16795[(29)]);var inst_16726 = cljs.core.deref.call(null,cs);var inst_16727__$1 = cljs.core.keys.call(null,inst_16726);var inst_16728 = cljs.core.count.call(null,inst_16727__$1);var inst_16729 = cljs.core.reset_BANG_.call(null,dctr,inst_16728);var inst_16734 = cljs.core.seq.call(null,inst_16727__$1);var inst_16735 = inst_16734;var inst_16736 = null;var inst_16737 = (0);var inst_16738 = (0);var state_16795__$1 = (function (){var statearr_16838 = state_16795;(statearr_16838[(20)] = inst_16737);
(statearr_16838[(21)] = inst_16735);
(statearr_16838[(30)] = inst_16729);
(statearr_16838[(29)] = inst_16727__$1);
(statearr_16838[(10)] = inst_16736);
(statearr_16838[(12)] = inst_16738);
return statearr_16838;
})();var statearr_16839_16908 = state_16795__$1;(statearr_16839_16908[(2)] = null);
(statearr_16839_16908[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (28)))
{var inst_16735 = (state_16795[(21)]);var inst_16754 = (state_16795[(25)]);var inst_16754__$1 = cljs.core.seq.call(null,inst_16735);var state_16795__$1 = (function (){var statearr_16840 = state_16795;(statearr_16840[(25)] = inst_16754__$1);
return statearr_16840;
})();if(inst_16754__$1)
{var statearr_16841_16909 = state_16795__$1;(statearr_16841_16909[(1)] = (33));
} else
{var statearr_16842_16910 = state_16795__$1;(statearr_16842_16910[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (25)))
{var inst_16737 = (state_16795[(20)]);var inst_16738 = (state_16795[(12)]);var inst_16740 = (inst_16738 < inst_16737);var inst_16741 = inst_16740;var state_16795__$1 = state_16795;if(cljs.core.truth_(inst_16741))
{var statearr_16843_16911 = state_16795__$1;(statearr_16843_16911[(1)] = (27));
} else
{var statearr_16844_16912 = state_16795__$1;(statearr_16844_16912[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (34)))
{var state_16795__$1 = state_16795;var statearr_16845_16913 = state_16795__$1;(statearr_16845_16913[(2)] = null);
(statearr_16845_16913[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (17)))
{var state_16795__$1 = state_16795;var statearr_16846_16914 = state_16795__$1;(statearr_16846_16914[(2)] = null);
(statearr_16846_16914[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (3)))
{var inst_16793 = (state_16795[(2)]);var state_16795__$1 = state_16795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16795__$1,inst_16793);
} else
{if((state_val_16796 === (12)))
{var inst_16722 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16847_16915 = state_16795__$1;(statearr_16847_16915[(2)] = inst_16722);
(statearr_16847_16915[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (2)))
{var state_16795__$1 = state_16795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16795__$1,(4),ch);
} else
{if((state_val_16796 === (23)))
{var state_16795__$1 = state_16795;var statearr_16848_16916 = state_16795__$1;(statearr_16848_16916[(2)] = null);
(statearr_16848_16916[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (35)))
{var inst_16777 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16849_16917 = state_16795__$1;(statearr_16849_16917[(2)] = inst_16777);
(statearr_16849_16917[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (19)))
{var inst_16696 = (state_16795[(7)]);var inst_16700 = cljs.core.chunk_first.call(null,inst_16696);var inst_16701 = cljs.core.chunk_rest.call(null,inst_16696);var inst_16702 = cljs.core.count.call(null,inst_16700);var inst_16676 = inst_16701;var inst_16677 = inst_16700;var inst_16678 = inst_16702;var inst_16679 = (0);var state_16795__$1 = (function (){var statearr_16850 = state_16795;(statearr_16850[(13)] = inst_16676);
(statearr_16850[(14)] = inst_16678);
(statearr_16850[(16)] = inst_16679);
(statearr_16850[(17)] = inst_16677);
return statearr_16850;
})();var statearr_16851_16918 = state_16795__$1;(statearr_16851_16918[(2)] = null);
(statearr_16851_16918[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (11)))
{var inst_16676 = (state_16795[(13)]);var inst_16696 = (state_16795[(7)]);var inst_16696__$1 = cljs.core.seq.call(null,inst_16676);var state_16795__$1 = (function (){var statearr_16852 = state_16795;(statearr_16852[(7)] = inst_16696__$1);
return statearr_16852;
})();if(inst_16696__$1)
{var statearr_16853_16919 = state_16795__$1;(statearr_16853_16919[(1)] = (16));
} else
{var statearr_16854_16920 = state_16795__$1;(statearr_16854_16920[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (9)))
{var inst_16724 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16855_16921 = state_16795__$1;(statearr_16855_16921[(2)] = inst_16724);
(statearr_16855_16921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (5)))
{var inst_16674 = cljs.core.deref.call(null,cs);var inst_16675 = cljs.core.seq.call(null,inst_16674);var inst_16676 = inst_16675;var inst_16677 = null;var inst_16678 = (0);var inst_16679 = (0);var state_16795__$1 = (function (){var statearr_16856 = state_16795;(statearr_16856[(13)] = inst_16676);
(statearr_16856[(14)] = inst_16678);
(statearr_16856[(16)] = inst_16679);
(statearr_16856[(17)] = inst_16677);
return statearr_16856;
})();var statearr_16857_16922 = state_16795__$1;(statearr_16857_16922[(2)] = null);
(statearr_16857_16922[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (14)))
{var state_16795__$1 = state_16795;var statearr_16858_16923 = state_16795__$1;(statearr_16858_16923[(2)] = null);
(statearr_16858_16923[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (45)))
{var inst_16785 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16859_16924 = state_16795__$1;(statearr_16859_16924[(2)] = inst_16785);
(statearr_16859_16924[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (26)))
{var inst_16727 = (state_16795[(29)]);var inst_16781 = (state_16795[(2)]);var inst_16782 = cljs.core.seq.call(null,inst_16727);var state_16795__$1 = (function (){var statearr_16860 = state_16795;(statearr_16860[(31)] = inst_16781);
return statearr_16860;
})();if(inst_16782)
{var statearr_16861_16925 = state_16795__$1;(statearr_16861_16925[(1)] = (42));
} else
{var statearr_16862_16926 = state_16795__$1;(statearr_16862_16926[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (16)))
{var inst_16696 = (state_16795[(7)]);var inst_16698 = cljs.core.chunked_seq_QMARK_.call(null,inst_16696);var state_16795__$1 = state_16795;if(inst_16698)
{var statearr_16863_16927 = state_16795__$1;(statearr_16863_16927[(1)] = (19));
} else
{var statearr_16864_16928 = state_16795__$1;(statearr_16864_16928[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (38)))
{var inst_16774 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16865_16929 = state_16795__$1;(statearr_16865_16929[(2)] = inst_16774);
(statearr_16865_16929[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (30)))
{var state_16795__$1 = state_16795;var statearr_16866_16930 = state_16795__$1;(statearr_16866_16930[(2)] = null);
(statearr_16866_16930[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (10)))
{var inst_16679 = (state_16795[(16)]);var inst_16677 = (state_16795[(17)]);var inst_16685 = cljs.core._nth.call(null,inst_16677,inst_16679);var inst_16686 = cljs.core.nth.call(null,inst_16685,(0),null);var inst_16687 = cljs.core.nth.call(null,inst_16685,(1),null);var state_16795__$1 = (function (){var statearr_16867 = state_16795;(statearr_16867[(26)] = inst_16686);
return statearr_16867;
})();if(cljs.core.truth_(inst_16687))
{var statearr_16868_16931 = state_16795__$1;(statearr_16868_16931[(1)] = (13));
} else
{var statearr_16869_16932 = state_16795__$1;(statearr_16869_16932[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (18)))
{var inst_16720 = (state_16795[(2)]);var state_16795__$1 = state_16795;var statearr_16870_16933 = state_16795__$1;(statearr_16870_16933[(2)] = inst_16720);
(statearr_16870_16933[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (42)))
{var state_16795__$1 = state_16795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16795__$1,(45),dchan);
} else
{if((state_val_16796 === (37)))
{var inst_16754 = (state_16795[(25)]);var inst_16667 = (state_16795[(11)]);var inst_16763 = (state_16795[(23)]);var inst_16763__$1 = cljs.core.first.call(null,inst_16754);var inst_16764 = cljs.core.async.put_BANG_.call(null,inst_16763__$1,inst_16667,done);var state_16795__$1 = (function (){var statearr_16871 = state_16795;(statearr_16871[(23)] = inst_16763__$1);
return statearr_16871;
})();if(cljs.core.truth_(inst_16764))
{var statearr_16872_16934 = state_16795__$1;(statearr_16872_16934[(1)] = (39));
} else
{var statearr_16873_16935 = state_16795__$1;(statearr_16873_16935[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16796 === (8)))
{var inst_16678 = (state_16795[(14)]);var inst_16679 = (state_16795[(16)]);var inst_16681 = (inst_16679 < inst_16678);var inst_16682 = inst_16681;var state_16795__$1 = state_16795;if(cljs.core.truth_(inst_16682))
{var statearr_16874_16936 = state_16795__$1;(statearr_16874_16936[(1)] = (10));
} else
{var statearr_16875_16937 = state_16795__$1;(statearr_16875_16937[(1)] = (11));
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
});})(c__11147__auto___16883,cs,m,dchan,dctr,done))
;return ((function (switch__11082__auto__,c__11147__auto___16883,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_16879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16879[(0)] = state_machine__11083__auto__);
(statearr_16879[(1)] = (1));
return statearr_16879;
});
var state_machine__11083__auto____1 = (function (state_16795){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_16795);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e16880){if((e16880 instanceof Object))
{var ex__11086__auto__ = e16880;var statearr_16881_16938 = state_16795;(statearr_16881_16938[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16795);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16880;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16939 = state_16795;
state_16795 = G__16939;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_16795){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_16795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___16883,cs,m,dchan,dctr,done))
})();var state__11149__auto__ = (function (){var statearr_16882 = f__11148__auto__.call(null);(statearr_16882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___16883);
return statearr_16882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___16883,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16941 = {};return obj16941;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7980__auto__ = m;if(and__7980__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7980__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8628__auto__ = (((m == null))?null:m);return (function (){var or__7992__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t17061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17061 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17062){
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
this.meta17062 = meta17062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17061.cljs$lang$type = true;
cljs.core.async.t17061.cljs$lang$ctorStr = "cljs.core.async/t17061";
cljs.core.async.t17061.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t17061");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17061.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17063){var self__ = this;
var _17063__$1 = this;return self__.meta17062;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17063,meta17062__$1){var self__ = this;
var _17063__$1 = this;return (new cljs.core.async.t17061(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17062__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17061 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17061(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17062){return (new cljs.core.async.t17061(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17062));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17061(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11147__auto___17180 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___17180,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___17180,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17133){var state_val_17134 = (state_17133[(1)]);if((state_val_17134 === (7)))
{var inst_17077 = (state_17133[(7)]);var inst_17082 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17077);var state_17133__$1 = state_17133;var statearr_17135_17181 = state_17133__$1;(statearr_17135_17181[(2)] = inst_17082);
(statearr_17135_17181[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (20)))
{var inst_17092 = (state_17133[(8)]);var state_17133__$1 = state_17133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17133__$1,(23),out,inst_17092);
} else
{if((state_val_17134 === (1)))
{var inst_17067 = (state_17133[(9)]);var inst_17067__$1 = calc_state.call(null);var inst_17068 = cljs.core.seq_QMARK_.call(null,inst_17067__$1);var state_17133__$1 = (function (){var statearr_17136 = state_17133;(statearr_17136[(9)] = inst_17067__$1);
return statearr_17136;
})();if(inst_17068)
{var statearr_17137_17182 = state_17133__$1;(statearr_17137_17182[(1)] = (2));
} else
{var statearr_17138_17183 = state_17133__$1;(statearr_17138_17183[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (24)))
{var inst_17085 = (state_17133[(10)]);var inst_17077 = inst_17085;var state_17133__$1 = (function (){var statearr_17139 = state_17133;(statearr_17139[(7)] = inst_17077);
return statearr_17139;
})();var statearr_17140_17184 = state_17133__$1;(statearr_17140_17184[(2)] = null);
(statearr_17140_17184[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (4)))
{var inst_17067 = (state_17133[(9)]);var inst_17073 = (state_17133[(2)]);var inst_17074 = cljs.core.get.call(null,inst_17073,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17075 = cljs.core.get.call(null,inst_17073,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17076 = cljs.core.get.call(null,inst_17073,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17077 = inst_17067;var state_17133__$1 = (function (){var statearr_17141 = state_17133;(statearr_17141[(11)] = inst_17074);
(statearr_17141[(12)] = inst_17075);
(statearr_17141[(7)] = inst_17077);
(statearr_17141[(13)] = inst_17076);
return statearr_17141;
})();var statearr_17142_17185 = state_17133__$1;(statearr_17142_17185[(2)] = null);
(statearr_17142_17185[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (15)))
{var state_17133__$1 = state_17133;var statearr_17143_17186 = state_17133__$1;(statearr_17143_17186[(2)] = null);
(statearr_17143_17186[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (21)))
{var inst_17085 = (state_17133[(10)]);var inst_17077 = inst_17085;var state_17133__$1 = (function (){var statearr_17144 = state_17133;(statearr_17144[(7)] = inst_17077);
return statearr_17144;
})();var statearr_17145_17187 = state_17133__$1;(statearr_17145_17187[(2)] = null);
(statearr_17145_17187[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (13)))
{var inst_17129 = (state_17133[(2)]);var state_17133__$1 = state_17133;var statearr_17146_17188 = state_17133__$1;(statearr_17146_17188[(2)] = inst_17129);
(statearr_17146_17188[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (22)))
{var inst_17127 = (state_17133[(2)]);var state_17133__$1 = state_17133;var statearr_17147_17189 = state_17133__$1;(statearr_17147_17189[(2)] = inst_17127);
(statearr_17147_17189[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (6)))
{var inst_17131 = (state_17133[(2)]);var state_17133__$1 = state_17133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17133__$1,inst_17131);
} else
{if((state_val_17134 === (25)))
{var state_17133__$1 = state_17133;var statearr_17148_17190 = state_17133__$1;(statearr_17148_17190[(2)] = null);
(statearr_17148_17190[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (17)))
{var inst_17107 = (state_17133[(14)]);var state_17133__$1 = state_17133;var statearr_17149_17191 = state_17133__$1;(statearr_17149_17191[(2)] = inst_17107);
(statearr_17149_17191[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (3)))
{var inst_17067 = (state_17133[(9)]);var state_17133__$1 = state_17133;var statearr_17150_17192 = state_17133__$1;(statearr_17150_17192[(2)] = inst_17067);
(statearr_17150_17192[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (12)))
{var inst_17088 = (state_17133[(15)]);var inst_17107 = (state_17133[(14)]);var inst_17093 = (state_17133[(16)]);var inst_17107__$1 = inst_17088.call(null,inst_17093);var state_17133__$1 = (function (){var statearr_17151 = state_17133;(statearr_17151[(14)] = inst_17107__$1);
return statearr_17151;
})();if(cljs.core.truth_(inst_17107__$1))
{var statearr_17152_17193 = state_17133__$1;(statearr_17152_17193[(1)] = (17));
} else
{var statearr_17153_17194 = state_17133__$1;(statearr_17153_17194[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (2)))
{var inst_17067 = (state_17133[(9)]);var inst_17070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17067);var state_17133__$1 = state_17133;var statearr_17154_17195 = state_17133__$1;(statearr_17154_17195[(2)] = inst_17070);
(statearr_17154_17195[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (23)))
{var inst_17118 = (state_17133[(2)]);var state_17133__$1 = state_17133;if(cljs.core.truth_(inst_17118))
{var statearr_17155_17196 = state_17133__$1;(statearr_17155_17196[(1)] = (24));
} else
{var statearr_17156_17197 = state_17133__$1;(statearr_17156_17197[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (19)))
{var inst_17115 = (state_17133[(2)]);var state_17133__$1 = state_17133;if(cljs.core.truth_(inst_17115))
{var statearr_17157_17198 = state_17133__$1;(statearr_17157_17198[(1)] = (20));
} else
{var statearr_17158_17199 = state_17133__$1;(statearr_17158_17199[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (11)))
{var inst_17092 = (state_17133[(8)]);var inst_17098 = (inst_17092 == null);var state_17133__$1 = state_17133;if(cljs.core.truth_(inst_17098))
{var statearr_17159_17200 = state_17133__$1;(statearr_17159_17200[(1)] = (14));
} else
{var statearr_17160_17201 = state_17133__$1;(statearr_17160_17201[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (9)))
{var inst_17085 = (state_17133[(10)]);var inst_17085__$1 = (state_17133[(2)]);var inst_17086 = cljs.core.get.call(null,inst_17085__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17087 = cljs.core.get.call(null,inst_17085__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17088 = cljs.core.get.call(null,inst_17085__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17133__$1 = (function (){var statearr_17161 = state_17133;(statearr_17161[(15)] = inst_17088);
(statearr_17161[(10)] = inst_17085__$1);
(statearr_17161[(17)] = inst_17087);
return statearr_17161;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17133__$1,(10),inst_17086);
} else
{if((state_val_17134 === (5)))
{var inst_17077 = (state_17133[(7)]);var inst_17080 = cljs.core.seq_QMARK_.call(null,inst_17077);var state_17133__$1 = state_17133;if(inst_17080)
{var statearr_17162_17202 = state_17133__$1;(statearr_17162_17202[(1)] = (7));
} else
{var statearr_17163_17203 = state_17133__$1;(statearr_17163_17203[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (14)))
{var inst_17093 = (state_17133[(16)]);var inst_17100 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17093);var state_17133__$1 = state_17133;var statearr_17164_17204 = state_17133__$1;(statearr_17164_17204[(2)] = inst_17100);
(statearr_17164_17204[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (26)))
{var inst_17123 = (state_17133[(2)]);var state_17133__$1 = state_17133;var statearr_17165_17205 = state_17133__$1;(statearr_17165_17205[(2)] = inst_17123);
(statearr_17165_17205[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (16)))
{var inst_17103 = (state_17133[(2)]);var inst_17104 = calc_state.call(null);var inst_17077 = inst_17104;var state_17133__$1 = (function (){var statearr_17166 = state_17133;(statearr_17166[(7)] = inst_17077);
(statearr_17166[(18)] = inst_17103);
return statearr_17166;
})();var statearr_17167_17206 = state_17133__$1;(statearr_17167_17206[(2)] = null);
(statearr_17167_17206[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (10)))
{var inst_17093 = (state_17133[(16)]);var inst_17092 = (state_17133[(8)]);var inst_17091 = (state_17133[(2)]);var inst_17092__$1 = cljs.core.nth.call(null,inst_17091,(0),null);var inst_17093__$1 = cljs.core.nth.call(null,inst_17091,(1),null);var inst_17094 = (inst_17092__$1 == null);var inst_17095 = cljs.core._EQ_.call(null,inst_17093__$1,change);var inst_17096 = (inst_17094) || (inst_17095);var state_17133__$1 = (function (){var statearr_17168 = state_17133;(statearr_17168[(16)] = inst_17093__$1);
(statearr_17168[(8)] = inst_17092__$1);
return statearr_17168;
})();if(cljs.core.truth_(inst_17096))
{var statearr_17169_17207 = state_17133__$1;(statearr_17169_17207[(1)] = (11));
} else
{var statearr_17170_17208 = state_17133__$1;(statearr_17170_17208[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (18)))
{var inst_17088 = (state_17133[(15)]);var inst_17087 = (state_17133[(17)]);var inst_17093 = (state_17133[(16)]);var inst_17110 = cljs.core.empty_QMARK_.call(null,inst_17088);var inst_17111 = inst_17087.call(null,inst_17093);var inst_17112 = cljs.core.not.call(null,inst_17111);var inst_17113 = (inst_17110) && (inst_17112);var state_17133__$1 = state_17133;var statearr_17171_17209 = state_17133__$1;(statearr_17171_17209[(2)] = inst_17113);
(statearr_17171_17209[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17134 === (8)))
{var inst_17077 = (state_17133[(7)]);var state_17133__$1 = state_17133;var statearr_17172_17210 = state_17133__$1;(statearr_17172_17210[(2)] = inst_17077);
(statearr_17172_17210[(1)] = (9));
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
});})(c__11147__auto___17180,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11082__auto__,c__11147__auto___17180,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_17176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17176[(0)] = state_machine__11083__auto__);
(statearr_17176[(1)] = (1));
return statearr_17176;
});
var state_machine__11083__auto____1 = (function (state_17133){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_17133);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e17177){if((e17177 instanceof Object))
{var ex__11086__auto__ = e17177;var statearr_17178_17211 = state_17133;(statearr_17178_17211[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17212 = state_17133;
state_17133 = G__17212;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_17133){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_17133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___17180,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11149__auto__ = (function (){var statearr_17179 = f__11148__auto__.call(null);(statearr_17179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___17180);
return statearr_17179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___17180,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17214 = {};return obj17214;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7980__auto__ = p;if(and__7980__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7980__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8628__auto__ = (((p == null))?null:p);return (function (){var or__7992__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7980__auto__ = p;if(and__7980__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7980__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8628__auto__ = (((p == null))?null:p);return (function (){var or__7992__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7980__auto__ = p;if(and__7980__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7980__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8628__auto__ = (((p == null))?null:p);return (function (){var or__7992__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7980__auto__ = p;if(and__7980__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7980__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8628__auto__ = (((p == null))?null:p);return (function (){var or__7992__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8628__auto__)]);if(or__7992__auto__)
{return or__7992__auto__;
} else
{var or__7992__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7992__auto____$1)
{return or__7992__auto____$1;
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
return (function (topic){var or__7992__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7992__auto__,mults){
return (function (p1__17215_SHARP_){if(cljs.core.truth_(p1__17215_SHARP_.call(null,topic)))
{return p1__17215_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17215_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7992__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17330 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17331){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17331 = meta17331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17330.cljs$lang$type = true;
cljs.core.async.t17330.cljs$lang$ctorStr = "cljs.core.async/t17330";
cljs.core.async.t17330.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"cljs.core.async/t17330");
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17332){var self__ = this;
var _17332__$1 = this;return self__.meta17331;
});})(mults,ensure_mult))
;
cljs.core.async.t17330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17332,meta17331__$1){var self__ = this;
var _17332__$1 = this;return (new cljs.core.async.t17330(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17331__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17330 = ((function (mults,ensure_mult){
return (function __GT_t17330(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17331){return (new cljs.core.async.t17330(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17331));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17330(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11147__auto___17444 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___17444,mults,ensure_mult,p){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___17444,mults,ensure_mult,p){
return (function (state_17400){var state_val_17401 = (state_17400[(1)]);if((state_val_17401 === (7)))
{var inst_17396 = (state_17400[(2)]);var state_17400__$1 = state_17400;var statearr_17402_17445 = state_17400__$1;(statearr_17402_17445[(2)] = inst_17396);
(statearr_17402_17445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (20)))
{var state_17400__$1 = state_17400;var statearr_17403_17446 = state_17400__$1;(statearr_17403_17446[(2)] = null);
(statearr_17403_17446[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (1)))
{var state_17400__$1 = state_17400;var statearr_17404_17447 = state_17400__$1;(statearr_17404_17447[(2)] = null);
(statearr_17404_17447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (4)))
{var inst_17335 = (state_17400[(7)]);var inst_17335__$1 = (state_17400[(2)]);var inst_17336 = (inst_17335__$1 == null);var state_17400__$1 = (function (){var statearr_17405 = state_17400;(statearr_17405[(7)] = inst_17335__$1);
return statearr_17405;
})();if(cljs.core.truth_(inst_17336))
{var statearr_17406_17448 = state_17400__$1;(statearr_17406_17448[(1)] = (5));
} else
{var statearr_17407_17449 = state_17400__$1;(statearr_17407_17449[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (15)))
{var inst_17377 = (state_17400[(2)]);var state_17400__$1 = state_17400;var statearr_17408_17450 = state_17400__$1;(statearr_17408_17450[(2)] = inst_17377);
(statearr_17408_17450[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (21)))
{var inst_17383 = (state_17400[(8)]);var inst_17391 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17383);var state_17400__$1 = state_17400;var statearr_17409_17451 = state_17400__$1;(statearr_17409_17451[(2)] = inst_17391);
(statearr_17409_17451[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (13)))
{var inst_17359 = (state_17400[(9)]);var inst_17361 = cljs.core.chunked_seq_QMARK_.call(null,inst_17359);var state_17400__$1 = state_17400;if(inst_17361)
{var statearr_17410_17452 = state_17400__$1;(statearr_17410_17452[(1)] = (16));
} else
{var statearr_17411_17453 = state_17400__$1;(statearr_17411_17453[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (22)))
{var inst_17393 = (state_17400[(2)]);var state_17400__$1 = (function (){var statearr_17412 = state_17400;(statearr_17412[(10)] = inst_17393);
return statearr_17412;
})();var statearr_17413_17454 = state_17400__$1;(statearr_17413_17454[(2)] = null);
(statearr_17413_17454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (6)))
{var inst_17383 = (state_17400[(8)]);var inst_17335 = (state_17400[(7)]);var inst_17383__$1 = topic_fn.call(null,inst_17335);var inst_17384 = cljs.core.deref.call(null,mults);var inst_17385 = cljs.core.get.call(null,inst_17384,inst_17383__$1);var inst_17386 = cljs.core.async.muxch_STAR_.call(null,inst_17385);var state_17400__$1 = (function (){var statearr_17414 = state_17400;(statearr_17414[(8)] = inst_17383__$1);
return statearr_17414;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17400__$1,(19),inst_17386,inst_17335);
} else
{if((state_val_17401 === (17)))
{var inst_17359 = (state_17400[(9)]);var inst_17368 = cljs.core.first.call(null,inst_17359);var inst_17369 = cljs.core.async.muxch_STAR_.call(null,inst_17368);var inst_17370 = cljs.core.async.close_BANG_.call(null,inst_17369);var inst_17371 = cljs.core.next.call(null,inst_17359);var inst_17345 = inst_17371;var inst_17346 = null;var inst_17347 = (0);var inst_17348 = (0);var state_17400__$1 = (function (){var statearr_17415 = state_17400;(statearr_17415[(11)] = inst_17348);
(statearr_17415[(12)] = inst_17345);
(statearr_17415[(13)] = inst_17370);
(statearr_17415[(14)] = inst_17346);
(statearr_17415[(15)] = inst_17347);
return statearr_17415;
})();var statearr_17416_17455 = state_17400__$1;(statearr_17416_17455[(2)] = null);
(statearr_17416_17455[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (3)))
{var inst_17398 = (state_17400[(2)]);var state_17400__$1 = state_17400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17400__$1,inst_17398);
} else
{if((state_val_17401 === (12)))
{var inst_17379 = (state_17400[(2)]);var state_17400__$1 = state_17400;var statearr_17417_17456 = state_17400__$1;(statearr_17417_17456[(2)] = inst_17379);
(statearr_17417_17456[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (2)))
{var state_17400__$1 = state_17400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17400__$1,(4),ch);
} else
{if((state_val_17401 === (19)))
{var inst_17388 = (state_17400[(2)]);var state_17400__$1 = state_17400;if(cljs.core.truth_(inst_17388))
{var statearr_17418_17457 = state_17400__$1;(statearr_17418_17457[(1)] = (20));
} else
{var statearr_17419_17458 = state_17400__$1;(statearr_17419_17458[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (11)))
{var inst_17345 = (state_17400[(12)]);var inst_17359 = (state_17400[(9)]);var inst_17359__$1 = cljs.core.seq.call(null,inst_17345);var state_17400__$1 = (function (){var statearr_17420 = state_17400;(statearr_17420[(9)] = inst_17359__$1);
return statearr_17420;
})();if(inst_17359__$1)
{var statearr_17421_17459 = state_17400__$1;(statearr_17421_17459[(1)] = (13));
} else
{var statearr_17422_17460 = state_17400__$1;(statearr_17422_17460[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (9)))
{var inst_17381 = (state_17400[(2)]);var state_17400__$1 = state_17400;var statearr_17423_17461 = state_17400__$1;(statearr_17423_17461[(2)] = inst_17381);
(statearr_17423_17461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (5)))
{var inst_17342 = cljs.core.deref.call(null,mults);var inst_17343 = cljs.core.vals.call(null,inst_17342);var inst_17344 = cljs.core.seq.call(null,inst_17343);var inst_17345 = inst_17344;var inst_17346 = null;var inst_17347 = (0);var inst_17348 = (0);var state_17400__$1 = (function (){var statearr_17424 = state_17400;(statearr_17424[(11)] = inst_17348);
(statearr_17424[(12)] = inst_17345);
(statearr_17424[(14)] = inst_17346);
(statearr_17424[(15)] = inst_17347);
return statearr_17424;
})();var statearr_17425_17462 = state_17400__$1;(statearr_17425_17462[(2)] = null);
(statearr_17425_17462[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (14)))
{var state_17400__$1 = state_17400;var statearr_17429_17463 = state_17400__$1;(statearr_17429_17463[(2)] = null);
(statearr_17429_17463[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (16)))
{var inst_17359 = (state_17400[(9)]);var inst_17363 = cljs.core.chunk_first.call(null,inst_17359);var inst_17364 = cljs.core.chunk_rest.call(null,inst_17359);var inst_17365 = cljs.core.count.call(null,inst_17363);var inst_17345 = inst_17364;var inst_17346 = inst_17363;var inst_17347 = inst_17365;var inst_17348 = (0);var state_17400__$1 = (function (){var statearr_17430 = state_17400;(statearr_17430[(11)] = inst_17348);
(statearr_17430[(12)] = inst_17345);
(statearr_17430[(14)] = inst_17346);
(statearr_17430[(15)] = inst_17347);
return statearr_17430;
})();var statearr_17431_17464 = state_17400__$1;(statearr_17431_17464[(2)] = null);
(statearr_17431_17464[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (10)))
{var inst_17348 = (state_17400[(11)]);var inst_17345 = (state_17400[(12)]);var inst_17346 = (state_17400[(14)]);var inst_17347 = (state_17400[(15)]);var inst_17353 = cljs.core._nth.call(null,inst_17346,inst_17348);var inst_17354 = cljs.core.async.muxch_STAR_.call(null,inst_17353);var inst_17355 = cljs.core.async.close_BANG_.call(null,inst_17354);var inst_17356 = (inst_17348 + (1));var tmp17426 = inst_17345;var tmp17427 = inst_17346;var tmp17428 = inst_17347;var inst_17345__$1 = tmp17426;var inst_17346__$1 = tmp17427;var inst_17347__$1 = tmp17428;var inst_17348__$1 = inst_17356;var state_17400__$1 = (function (){var statearr_17432 = state_17400;(statearr_17432[(11)] = inst_17348__$1);
(statearr_17432[(12)] = inst_17345__$1);
(statearr_17432[(16)] = inst_17355);
(statearr_17432[(14)] = inst_17346__$1);
(statearr_17432[(15)] = inst_17347__$1);
return statearr_17432;
})();var statearr_17433_17465 = state_17400__$1;(statearr_17433_17465[(2)] = null);
(statearr_17433_17465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (18)))
{var inst_17374 = (state_17400[(2)]);var state_17400__$1 = state_17400;var statearr_17434_17466 = state_17400__$1;(statearr_17434_17466[(2)] = inst_17374);
(statearr_17434_17466[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17401 === (8)))
{var inst_17348 = (state_17400[(11)]);var inst_17347 = (state_17400[(15)]);var inst_17350 = (inst_17348 < inst_17347);var inst_17351 = inst_17350;var state_17400__$1 = state_17400;if(cljs.core.truth_(inst_17351))
{var statearr_17435_17467 = state_17400__$1;(statearr_17435_17467[(1)] = (10));
} else
{var statearr_17436_17468 = state_17400__$1;(statearr_17436_17468[(1)] = (11));
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
});})(c__11147__auto___17444,mults,ensure_mult,p))
;return ((function (switch__11082__auto__,c__11147__auto___17444,mults,ensure_mult,p){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_17440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17440[(0)] = state_machine__11083__auto__);
(statearr_17440[(1)] = (1));
return statearr_17440;
});
var state_machine__11083__auto____1 = (function (state_17400){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_17400);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e17441){if((e17441 instanceof Object))
{var ex__11086__auto__ = e17441;var statearr_17442_17469 = state_17400;(statearr_17442_17469[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17441;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17470 = state_17400;
state_17400 = G__17470;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_17400){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_17400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___17444,mults,ensure_mult,p))
})();var state__11149__auto__ = (function (){var statearr_17443 = f__11148__auto__.call(null);(statearr_17443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___17444);
return statearr_17443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___17444,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11147__auto___17607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___17607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___17607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17577){var state_val_17578 = (state_17577[(1)]);if((state_val_17578 === (7)))
{var state_17577__$1 = state_17577;var statearr_17579_17608 = state_17577__$1;(statearr_17579_17608[(2)] = null);
(statearr_17579_17608[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (1)))
{var state_17577__$1 = state_17577;var statearr_17580_17609 = state_17577__$1;(statearr_17580_17609[(2)] = null);
(statearr_17580_17609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (4)))
{var inst_17541 = (state_17577[(7)]);var inst_17543 = (inst_17541 < cnt);var state_17577__$1 = state_17577;if(cljs.core.truth_(inst_17543))
{var statearr_17581_17610 = state_17577__$1;(statearr_17581_17610[(1)] = (6));
} else
{var statearr_17582_17611 = state_17577__$1;(statearr_17582_17611[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (15)))
{var inst_17573 = (state_17577[(2)]);var state_17577__$1 = state_17577;var statearr_17583_17612 = state_17577__$1;(statearr_17583_17612[(2)] = inst_17573);
(statearr_17583_17612[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (13)))
{var inst_17566 = cljs.core.async.close_BANG_.call(null,out);var state_17577__$1 = state_17577;var statearr_17584_17613 = state_17577__$1;(statearr_17584_17613[(2)] = inst_17566);
(statearr_17584_17613[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (6)))
{var state_17577__$1 = state_17577;var statearr_17585_17614 = state_17577__$1;(statearr_17585_17614[(2)] = null);
(statearr_17585_17614[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (3)))
{var inst_17575 = (state_17577[(2)]);var state_17577__$1 = state_17577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17577__$1,inst_17575);
} else
{if((state_val_17578 === (12)))
{var inst_17563 = (state_17577[(8)]);var inst_17563__$1 = (state_17577[(2)]);var inst_17564 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17563__$1);var state_17577__$1 = (function (){var statearr_17586 = state_17577;(statearr_17586[(8)] = inst_17563__$1);
return statearr_17586;
})();if(cljs.core.truth_(inst_17564))
{var statearr_17587_17615 = state_17577__$1;(statearr_17587_17615[(1)] = (13));
} else
{var statearr_17588_17616 = state_17577__$1;(statearr_17588_17616[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (2)))
{var inst_17540 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17541 = (0);var state_17577__$1 = (function (){var statearr_17589 = state_17577;(statearr_17589[(9)] = inst_17540);
(statearr_17589[(7)] = inst_17541);
return statearr_17589;
})();var statearr_17590_17617 = state_17577__$1;(statearr_17590_17617[(2)] = null);
(statearr_17590_17617[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (11)))
{var inst_17541 = (state_17577[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17577,(10),Object,null,(9));var inst_17550 = chs__$1.call(null,inst_17541);var inst_17551 = done.call(null,inst_17541);var inst_17552 = cljs.core.async.take_BANG_.call(null,inst_17550,inst_17551);var state_17577__$1 = state_17577;var statearr_17591_17618 = state_17577__$1;(statearr_17591_17618[(2)] = inst_17552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17577__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (9)))
{var inst_17541 = (state_17577[(7)]);var inst_17554 = (state_17577[(2)]);var inst_17555 = (inst_17541 + (1));var inst_17541__$1 = inst_17555;var state_17577__$1 = (function (){var statearr_17592 = state_17577;(statearr_17592[(10)] = inst_17554);
(statearr_17592[(7)] = inst_17541__$1);
return statearr_17592;
})();var statearr_17593_17619 = state_17577__$1;(statearr_17593_17619[(2)] = null);
(statearr_17593_17619[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (5)))
{var inst_17561 = (state_17577[(2)]);var state_17577__$1 = (function (){var statearr_17594 = state_17577;(statearr_17594[(11)] = inst_17561);
return statearr_17594;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17577__$1,(12),dchan);
} else
{if((state_val_17578 === (14)))
{var inst_17563 = (state_17577[(8)]);var inst_17568 = cljs.core.apply.call(null,f,inst_17563);var state_17577__$1 = state_17577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17577__$1,(16),out,inst_17568);
} else
{if((state_val_17578 === (16)))
{var inst_17570 = (state_17577[(2)]);var state_17577__$1 = (function (){var statearr_17595 = state_17577;(statearr_17595[(12)] = inst_17570);
return statearr_17595;
})();var statearr_17596_17620 = state_17577__$1;(statearr_17596_17620[(2)] = null);
(statearr_17596_17620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (10)))
{var inst_17545 = (state_17577[(2)]);var inst_17546 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17577__$1 = (function (){var statearr_17597 = state_17577;(statearr_17597[(13)] = inst_17545);
return statearr_17597;
})();var statearr_17598_17621 = state_17577__$1;(statearr_17598_17621[(2)] = inst_17546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17577__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17578 === (8)))
{var inst_17559 = (state_17577[(2)]);var state_17577__$1 = state_17577;var statearr_17599_17622 = state_17577__$1;(statearr_17599_17622[(2)] = inst_17559);
(statearr_17599_17622[(1)] = (5));
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
});})(c__11147__auto___17607,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11082__auto__,c__11147__auto___17607,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_17603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17603[(0)] = state_machine__11083__auto__);
(statearr_17603[(1)] = (1));
return statearr_17603;
});
var state_machine__11083__auto____1 = (function (state_17577){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_17577);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e17604){if((e17604 instanceof Object))
{var ex__11086__auto__ = e17604;var statearr_17605_17623 = state_17577;(statearr_17605_17623[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17604;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17624 = state_17577;
state_17577 = G__17624;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_17577){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___17607,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11149__auto__ = (function (){var statearr_17606 = f__11148__auto__.call(null);(statearr_17606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___17607);
return statearr_17606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___17607,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11147__auto___17732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___17732,out){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___17732,out){
return (function (state_17708){var state_val_17709 = (state_17708[(1)]);if((state_val_17709 === (7)))
{var inst_17687 = (state_17708[(7)]);var inst_17688 = (state_17708[(8)]);var inst_17687__$1 = (state_17708[(2)]);var inst_17688__$1 = cljs.core.nth.call(null,inst_17687__$1,(0),null);var inst_17689 = cljs.core.nth.call(null,inst_17687__$1,(1),null);var inst_17690 = (inst_17688__$1 == null);var state_17708__$1 = (function (){var statearr_17710 = state_17708;(statearr_17710[(9)] = inst_17689);
(statearr_17710[(7)] = inst_17687__$1);
(statearr_17710[(8)] = inst_17688__$1);
return statearr_17710;
})();if(cljs.core.truth_(inst_17690))
{var statearr_17711_17733 = state_17708__$1;(statearr_17711_17733[(1)] = (8));
} else
{var statearr_17712_17734 = state_17708__$1;(statearr_17712_17734[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (1)))
{var inst_17679 = cljs.core.vec.call(null,chs);var inst_17680 = inst_17679;var state_17708__$1 = (function (){var statearr_17713 = state_17708;(statearr_17713[(10)] = inst_17680);
return statearr_17713;
})();var statearr_17714_17735 = state_17708__$1;(statearr_17714_17735[(2)] = null);
(statearr_17714_17735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (4)))
{var inst_17680 = (state_17708[(10)]);var state_17708__$1 = state_17708;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17708__$1,(7),inst_17680);
} else
{if((state_val_17709 === (6)))
{var inst_17704 = (state_17708[(2)]);var state_17708__$1 = state_17708;var statearr_17715_17736 = state_17708__$1;(statearr_17715_17736[(2)] = inst_17704);
(statearr_17715_17736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (3)))
{var inst_17706 = (state_17708[(2)]);var state_17708__$1 = state_17708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17708__$1,inst_17706);
} else
{if((state_val_17709 === (2)))
{var inst_17680 = (state_17708[(10)]);var inst_17682 = cljs.core.count.call(null,inst_17680);var inst_17683 = (inst_17682 > (0));var state_17708__$1 = state_17708;if(cljs.core.truth_(inst_17683))
{var statearr_17717_17737 = state_17708__$1;(statearr_17717_17737[(1)] = (4));
} else
{var statearr_17718_17738 = state_17708__$1;(statearr_17718_17738[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (11)))
{var inst_17680 = (state_17708[(10)]);var inst_17697 = (state_17708[(2)]);var tmp17716 = inst_17680;var inst_17680__$1 = tmp17716;var state_17708__$1 = (function (){var statearr_17719 = state_17708;(statearr_17719[(11)] = inst_17697);
(statearr_17719[(10)] = inst_17680__$1);
return statearr_17719;
})();var statearr_17720_17739 = state_17708__$1;(statearr_17720_17739[(2)] = null);
(statearr_17720_17739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (9)))
{var inst_17688 = (state_17708[(8)]);var state_17708__$1 = state_17708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17708__$1,(11),out,inst_17688);
} else
{if((state_val_17709 === (5)))
{var inst_17702 = cljs.core.async.close_BANG_.call(null,out);var state_17708__$1 = state_17708;var statearr_17721_17740 = state_17708__$1;(statearr_17721_17740[(2)] = inst_17702);
(statearr_17721_17740[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (10)))
{var inst_17700 = (state_17708[(2)]);var state_17708__$1 = state_17708;var statearr_17722_17741 = state_17708__$1;(statearr_17722_17741[(2)] = inst_17700);
(statearr_17722_17741[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17709 === (8)))
{var inst_17689 = (state_17708[(9)]);var inst_17687 = (state_17708[(7)]);var inst_17680 = (state_17708[(10)]);var inst_17688 = (state_17708[(8)]);var inst_17692 = (function (){var c = inst_17689;var v = inst_17688;var vec__17685 = inst_17687;var cs = inst_17680;return ((function (c,v,vec__17685,cs,inst_17689,inst_17687,inst_17680,inst_17688,state_val_17709,c__11147__auto___17732,out){
return (function (p1__17625_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17625_SHARP_);
});
;})(c,v,vec__17685,cs,inst_17689,inst_17687,inst_17680,inst_17688,state_val_17709,c__11147__auto___17732,out))
})();var inst_17693 = cljs.core.filterv.call(null,inst_17692,inst_17680);var inst_17680__$1 = inst_17693;var state_17708__$1 = (function (){var statearr_17723 = state_17708;(statearr_17723[(10)] = inst_17680__$1);
return statearr_17723;
})();var statearr_17724_17742 = state_17708__$1;(statearr_17724_17742[(2)] = null);
(statearr_17724_17742[(1)] = (2));
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
});})(c__11147__auto___17732,out))
;return ((function (switch__11082__auto__,c__11147__auto___17732,out){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_17728 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17728[(0)] = state_machine__11083__auto__);
(statearr_17728[(1)] = (1));
return statearr_17728;
});
var state_machine__11083__auto____1 = (function (state_17708){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_17708);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e17729){if((e17729 instanceof Object))
{var ex__11086__auto__ = e17729;var statearr_17730_17743 = state_17708;(statearr_17730_17743[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17744 = state_17708;
state_17708 = G__17744;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_17708){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_17708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___17732,out))
})();var state__11149__auto__ = (function (){var statearr_17731 = f__11148__auto__.call(null);(statearr_17731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___17732);
return statearr_17731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___17732,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11147__auto___17837 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___17837,out){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___17837,out){
return (function (state_17814){var state_val_17815 = (state_17814[(1)]);if((state_val_17815 === (7)))
{var inst_17796 = (state_17814[(7)]);var inst_17796__$1 = (state_17814[(2)]);var inst_17797 = (inst_17796__$1 == null);var inst_17798 = cljs.core.not.call(null,inst_17797);var state_17814__$1 = (function (){var statearr_17816 = state_17814;(statearr_17816[(7)] = inst_17796__$1);
return statearr_17816;
})();if(inst_17798)
{var statearr_17817_17838 = state_17814__$1;(statearr_17817_17838[(1)] = (8));
} else
{var statearr_17818_17839 = state_17814__$1;(statearr_17818_17839[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (1)))
{var inst_17791 = (0);var state_17814__$1 = (function (){var statearr_17819 = state_17814;(statearr_17819[(8)] = inst_17791);
return statearr_17819;
})();var statearr_17820_17840 = state_17814__$1;(statearr_17820_17840[(2)] = null);
(statearr_17820_17840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (4)))
{var state_17814__$1 = state_17814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17814__$1,(7),ch);
} else
{if((state_val_17815 === (6)))
{var inst_17809 = (state_17814[(2)]);var state_17814__$1 = state_17814;var statearr_17821_17841 = state_17814__$1;(statearr_17821_17841[(2)] = inst_17809);
(statearr_17821_17841[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (3)))
{var inst_17811 = (state_17814[(2)]);var inst_17812 = cljs.core.async.close_BANG_.call(null,out);var state_17814__$1 = (function (){var statearr_17822 = state_17814;(statearr_17822[(9)] = inst_17811);
return statearr_17822;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17814__$1,inst_17812);
} else
{if((state_val_17815 === (2)))
{var inst_17791 = (state_17814[(8)]);var inst_17793 = (inst_17791 < n);var state_17814__$1 = state_17814;if(cljs.core.truth_(inst_17793))
{var statearr_17823_17842 = state_17814__$1;(statearr_17823_17842[(1)] = (4));
} else
{var statearr_17824_17843 = state_17814__$1;(statearr_17824_17843[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (11)))
{var inst_17791 = (state_17814[(8)]);var inst_17801 = (state_17814[(2)]);var inst_17802 = (inst_17791 + (1));var inst_17791__$1 = inst_17802;var state_17814__$1 = (function (){var statearr_17825 = state_17814;(statearr_17825[(8)] = inst_17791__$1);
(statearr_17825[(10)] = inst_17801);
return statearr_17825;
})();var statearr_17826_17844 = state_17814__$1;(statearr_17826_17844[(2)] = null);
(statearr_17826_17844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (9)))
{var state_17814__$1 = state_17814;var statearr_17827_17845 = state_17814__$1;(statearr_17827_17845[(2)] = null);
(statearr_17827_17845[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (5)))
{var state_17814__$1 = state_17814;var statearr_17828_17846 = state_17814__$1;(statearr_17828_17846[(2)] = null);
(statearr_17828_17846[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (10)))
{var inst_17806 = (state_17814[(2)]);var state_17814__$1 = state_17814;var statearr_17829_17847 = state_17814__$1;(statearr_17829_17847[(2)] = inst_17806);
(statearr_17829_17847[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17815 === (8)))
{var inst_17796 = (state_17814[(7)]);var state_17814__$1 = state_17814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17814__$1,(11),out,inst_17796);
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
});})(c__11147__auto___17837,out))
;return ((function (switch__11082__auto__,c__11147__auto___17837,out){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_17833 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17833[(0)] = state_machine__11083__auto__);
(statearr_17833[(1)] = (1));
return statearr_17833;
});
var state_machine__11083__auto____1 = (function (state_17814){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_17814);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e17834){if((e17834 instanceof Object))
{var ex__11086__auto__ = e17834;var statearr_17835_17848 = state_17814;(statearr_17835_17848[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17814);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17849 = state_17814;
state_17814 = G__17849;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_17814){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_17814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___17837,out))
})();var state__11149__auto__ = (function (){var statearr_17836 = f__11148__auto__.call(null);(statearr_17836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___17837);
return statearr_17836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___17837,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11147__auto___17946 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___17946,out){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___17946,out){
return (function (state_17921){var state_val_17922 = (state_17921[(1)]);if((state_val_17922 === (7)))
{var inst_17916 = (state_17921[(2)]);var state_17921__$1 = state_17921;var statearr_17923_17947 = state_17921__$1;(statearr_17923_17947[(2)] = inst_17916);
(statearr_17923_17947[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (1)))
{var inst_17898 = null;var state_17921__$1 = (function (){var statearr_17924 = state_17921;(statearr_17924[(7)] = inst_17898);
return statearr_17924;
})();var statearr_17925_17948 = state_17921__$1;(statearr_17925_17948[(2)] = null);
(statearr_17925_17948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (4)))
{var inst_17901 = (state_17921[(8)]);var inst_17901__$1 = (state_17921[(2)]);var inst_17902 = (inst_17901__$1 == null);var inst_17903 = cljs.core.not.call(null,inst_17902);var state_17921__$1 = (function (){var statearr_17926 = state_17921;(statearr_17926[(8)] = inst_17901__$1);
return statearr_17926;
})();if(inst_17903)
{var statearr_17927_17949 = state_17921__$1;(statearr_17927_17949[(1)] = (5));
} else
{var statearr_17928_17950 = state_17921__$1;(statearr_17928_17950[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (6)))
{var state_17921__$1 = state_17921;var statearr_17929_17951 = state_17921__$1;(statearr_17929_17951[(2)] = null);
(statearr_17929_17951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (3)))
{var inst_17918 = (state_17921[(2)]);var inst_17919 = cljs.core.async.close_BANG_.call(null,out);var state_17921__$1 = (function (){var statearr_17930 = state_17921;(statearr_17930[(9)] = inst_17918);
return statearr_17930;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17921__$1,inst_17919);
} else
{if((state_val_17922 === (2)))
{var state_17921__$1 = state_17921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17921__$1,(4),ch);
} else
{if((state_val_17922 === (11)))
{var inst_17901 = (state_17921[(8)]);var inst_17910 = (state_17921[(2)]);var inst_17898 = inst_17901;var state_17921__$1 = (function (){var statearr_17931 = state_17921;(statearr_17931[(7)] = inst_17898);
(statearr_17931[(10)] = inst_17910);
return statearr_17931;
})();var statearr_17932_17952 = state_17921__$1;(statearr_17932_17952[(2)] = null);
(statearr_17932_17952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (9)))
{var inst_17901 = (state_17921[(8)]);var state_17921__$1 = state_17921;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17921__$1,(11),out,inst_17901);
} else
{if((state_val_17922 === (5)))
{var inst_17898 = (state_17921[(7)]);var inst_17901 = (state_17921[(8)]);var inst_17905 = cljs.core._EQ_.call(null,inst_17901,inst_17898);var state_17921__$1 = state_17921;if(inst_17905)
{var statearr_17934_17953 = state_17921__$1;(statearr_17934_17953[(1)] = (8));
} else
{var statearr_17935_17954 = state_17921__$1;(statearr_17935_17954[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (10)))
{var inst_17913 = (state_17921[(2)]);var state_17921__$1 = state_17921;var statearr_17936_17955 = state_17921__$1;(statearr_17936_17955[(2)] = inst_17913);
(statearr_17936_17955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17922 === (8)))
{var inst_17898 = (state_17921[(7)]);var tmp17933 = inst_17898;var inst_17898__$1 = tmp17933;var state_17921__$1 = (function (){var statearr_17937 = state_17921;(statearr_17937[(7)] = inst_17898__$1);
return statearr_17937;
})();var statearr_17938_17956 = state_17921__$1;(statearr_17938_17956[(2)] = null);
(statearr_17938_17956[(1)] = (2));
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
});})(c__11147__auto___17946,out))
;return ((function (switch__11082__auto__,c__11147__auto___17946,out){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_17942 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17942[(0)] = state_machine__11083__auto__);
(statearr_17942[(1)] = (1));
return statearr_17942;
});
var state_machine__11083__auto____1 = (function (state_17921){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_17921);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e17943){if((e17943 instanceof Object))
{var ex__11086__auto__ = e17943;var statearr_17944_17957 = state_17921;(statearr_17944_17957[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17921);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17943;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17958 = state_17921;
state_17921 = G__17958;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_17921){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_17921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___17946,out))
})();var state__11149__auto__ = (function (){var statearr_17945 = f__11148__auto__.call(null);(statearr_17945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___17946);
return statearr_17945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___17946,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11147__auto___18093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___18093,out){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___18093,out){
return (function (state_18063){var state_val_18064 = (state_18063[(1)]);if((state_val_18064 === (7)))
{var inst_18059 = (state_18063[(2)]);var state_18063__$1 = state_18063;var statearr_18065_18094 = state_18063__$1;(statearr_18065_18094[(2)] = inst_18059);
(statearr_18065_18094[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (1)))
{var inst_18026 = (new Array(n));var inst_18027 = inst_18026;var inst_18028 = (0);var state_18063__$1 = (function (){var statearr_18066 = state_18063;(statearr_18066[(7)] = inst_18027);
(statearr_18066[(8)] = inst_18028);
return statearr_18066;
})();var statearr_18067_18095 = state_18063__$1;(statearr_18067_18095[(2)] = null);
(statearr_18067_18095[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (4)))
{var inst_18031 = (state_18063[(9)]);var inst_18031__$1 = (state_18063[(2)]);var inst_18032 = (inst_18031__$1 == null);var inst_18033 = cljs.core.not.call(null,inst_18032);var state_18063__$1 = (function (){var statearr_18068 = state_18063;(statearr_18068[(9)] = inst_18031__$1);
return statearr_18068;
})();if(inst_18033)
{var statearr_18069_18096 = state_18063__$1;(statearr_18069_18096[(1)] = (5));
} else
{var statearr_18070_18097 = state_18063__$1;(statearr_18070_18097[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (15)))
{var inst_18053 = (state_18063[(2)]);var state_18063__$1 = state_18063;var statearr_18071_18098 = state_18063__$1;(statearr_18071_18098[(2)] = inst_18053);
(statearr_18071_18098[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (13)))
{var state_18063__$1 = state_18063;var statearr_18072_18099 = state_18063__$1;(statearr_18072_18099[(2)] = null);
(statearr_18072_18099[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (6)))
{var inst_18028 = (state_18063[(8)]);var inst_18049 = (inst_18028 > (0));var state_18063__$1 = state_18063;if(cljs.core.truth_(inst_18049))
{var statearr_18073_18100 = state_18063__$1;(statearr_18073_18100[(1)] = (12));
} else
{var statearr_18074_18101 = state_18063__$1;(statearr_18074_18101[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (3)))
{var inst_18061 = (state_18063[(2)]);var state_18063__$1 = state_18063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18063__$1,inst_18061);
} else
{if((state_val_18064 === (12)))
{var inst_18027 = (state_18063[(7)]);var inst_18051 = cljs.core.vec.call(null,inst_18027);var state_18063__$1 = state_18063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18063__$1,(15),out,inst_18051);
} else
{if((state_val_18064 === (2)))
{var state_18063__$1 = state_18063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18063__$1,(4),ch);
} else
{if((state_val_18064 === (11)))
{var inst_18043 = (state_18063[(2)]);var inst_18044 = (new Array(n));var inst_18027 = inst_18044;var inst_18028 = (0);var state_18063__$1 = (function (){var statearr_18075 = state_18063;(statearr_18075[(10)] = inst_18043);
(statearr_18075[(7)] = inst_18027);
(statearr_18075[(8)] = inst_18028);
return statearr_18075;
})();var statearr_18076_18102 = state_18063__$1;(statearr_18076_18102[(2)] = null);
(statearr_18076_18102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (9)))
{var inst_18027 = (state_18063[(7)]);var inst_18041 = cljs.core.vec.call(null,inst_18027);var state_18063__$1 = state_18063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18063__$1,(11),out,inst_18041);
} else
{if((state_val_18064 === (5)))
{var inst_18031 = (state_18063[(9)]);var inst_18027 = (state_18063[(7)]);var inst_18028 = (state_18063[(8)]);var inst_18036 = (state_18063[(11)]);var inst_18035 = (inst_18027[inst_18028] = inst_18031);var inst_18036__$1 = (inst_18028 + (1));var inst_18037 = (inst_18036__$1 < n);var state_18063__$1 = (function (){var statearr_18077 = state_18063;(statearr_18077[(12)] = inst_18035);
(statearr_18077[(11)] = inst_18036__$1);
return statearr_18077;
})();if(cljs.core.truth_(inst_18037))
{var statearr_18078_18103 = state_18063__$1;(statearr_18078_18103[(1)] = (8));
} else
{var statearr_18079_18104 = state_18063__$1;(statearr_18079_18104[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (14)))
{var inst_18056 = (state_18063[(2)]);var inst_18057 = cljs.core.async.close_BANG_.call(null,out);var state_18063__$1 = (function (){var statearr_18081 = state_18063;(statearr_18081[(13)] = inst_18056);
return statearr_18081;
})();var statearr_18082_18105 = state_18063__$1;(statearr_18082_18105[(2)] = inst_18057);
(statearr_18082_18105[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (10)))
{var inst_18047 = (state_18063[(2)]);var state_18063__$1 = state_18063;var statearr_18083_18106 = state_18063__$1;(statearr_18083_18106[(2)] = inst_18047);
(statearr_18083_18106[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18064 === (8)))
{var inst_18027 = (state_18063[(7)]);var inst_18036 = (state_18063[(11)]);var tmp18080 = inst_18027;var inst_18027__$1 = tmp18080;var inst_18028 = inst_18036;var state_18063__$1 = (function (){var statearr_18084 = state_18063;(statearr_18084[(7)] = inst_18027__$1);
(statearr_18084[(8)] = inst_18028);
return statearr_18084;
})();var statearr_18085_18107 = state_18063__$1;(statearr_18085_18107[(2)] = null);
(statearr_18085_18107[(1)] = (2));
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
});})(c__11147__auto___18093,out))
;return ((function (switch__11082__auto__,c__11147__auto___18093,out){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_18089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18089[(0)] = state_machine__11083__auto__);
(statearr_18089[(1)] = (1));
return statearr_18089;
});
var state_machine__11083__auto____1 = (function (state_18063){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_18063);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e18090){if((e18090 instanceof Object))
{var ex__11086__auto__ = e18090;var statearr_18091_18108 = state_18063;(statearr_18091_18108[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18063);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18090;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18109 = state_18063;
state_18063 = G__18109;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_18063){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_18063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___18093,out))
})();var state__11149__auto__ = (function (){var statearr_18092 = f__11148__auto__.call(null);(statearr_18092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___18093);
return statearr_18092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___18093,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11147__auto___18252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto___18252,out){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto___18252,out){
return (function (state_18222){var state_val_18223 = (state_18222[(1)]);if((state_val_18223 === (7)))
{var inst_18218 = (state_18222[(2)]);var state_18222__$1 = state_18222;var statearr_18224_18253 = state_18222__$1;(statearr_18224_18253[(2)] = inst_18218);
(statearr_18224_18253[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (1)))
{var inst_18181 = [];var inst_18182 = inst_18181;var inst_18183 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18222__$1 = (function (){var statearr_18225 = state_18222;(statearr_18225[(7)] = inst_18183);
(statearr_18225[(8)] = inst_18182);
return statearr_18225;
})();var statearr_18226_18254 = state_18222__$1;(statearr_18226_18254[(2)] = null);
(statearr_18226_18254[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (4)))
{var inst_18186 = (state_18222[(9)]);var inst_18186__$1 = (state_18222[(2)]);var inst_18187 = (inst_18186__$1 == null);var inst_18188 = cljs.core.not.call(null,inst_18187);var state_18222__$1 = (function (){var statearr_18227 = state_18222;(statearr_18227[(9)] = inst_18186__$1);
return statearr_18227;
})();if(inst_18188)
{var statearr_18228_18255 = state_18222__$1;(statearr_18228_18255[(1)] = (5));
} else
{var statearr_18229_18256 = state_18222__$1;(statearr_18229_18256[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (15)))
{var inst_18212 = (state_18222[(2)]);var state_18222__$1 = state_18222;var statearr_18230_18257 = state_18222__$1;(statearr_18230_18257[(2)] = inst_18212);
(statearr_18230_18257[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (13)))
{var state_18222__$1 = state_18222;var statearr_18231_18258 = state_18222__$1;(statearr_18231_18258[(2)] = null);
(statearr_18231_18258[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (6)))
{var inst_18182 = (state_18222[(8)]);var inst_18207 = inst_18182.length;var inst_18208 = (inst_18207 > (0));var state_18222__$1 = state_18222;if(cljs.core.truth_(inst_18208))
{var statearr_18232_18259 = state_18222__$1;(statearr_18232_18259[(1)] = (12));
} else
{var statearr_18233_18260 = state_18222__$1;(statearr_18233_18260[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (3)))
{var inst_18220 = (state_18222[(2)]);var state_18222__$1 = state_18222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18222__$1,inst_18220);
} else
{if((state_val_18223 === (12)))
{var inst_18182 = (state_18222[(8)]);var inst_18210 = cljs.core.vec.call(null,inst_18182);var state_18222__$1 = state_18222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18222__$1,(15),out,inst_18210);
} else
{if((state_val_18223 === (2)))
{var state_18222__$1 = state_18222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18222__$1,(4),ch);
} else
{if((state_val_18223 === (11)))
{var inst_18186 = (state_18222[(9)]);var inst_18190 = (state_18222[(10)]);var inst_18200 = (state_18222[(2)]);var inst_18201 = [];var inst_18202 = inst_18201.push(inst_18186);var inst_18182 = inst_18201;var inst_18183 = inst_18190;var state_18222__$1 = (function (){var statearr_18234 = state_18222;(statearr_18234[(7)] = inst_18183);
(statearr_18234[(8)] = inst_18182);
(statearr_18234[(11)] = inst_18202);
(statearr_18234[(12)] = inst_18200);
return statearr_18234;
})();var statearr_18235_18261 = state_18222__$1;(statearr_18235_18261[(2)] = null);
(statearr_18235_18261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (9)))
{var inst_18182 = (state_18222[(8)]);var inst_18198 = cljs.core.vec.call(null,inst_18182);var state_18222__$1 = state_18222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18222__$1,(11),out,inst_18198);
} else
{if((state_val_18223 === (5)))
{var inst_18183 = (state_18222[(7)]);var inst_18186 = (state_18222[(9)]);var inst_18190 = (state_18222[(10)]);var inst_18190__$1 = f.call(null,inst_18186);var inst_18191 = cljs.core._EQ_.call(null,inst_18190__$1,inst_18183);var inst_18192 = cljs.core.keyword_identical_QMARK_.call(null,inst_18183,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18193 = (inst_18191) || (inst_18192);var state_18222__$1 = (function (){var statearr_18236 = state_18222;(statearr_18236[(10)] = inst_18190__$1);
return statearr_18236;
})();if(cljs.core.truth_(inst_18193))
{var statearr_18237_18262 = state_18222__$1;(statearr_18237_18262[(1)] = (8));
} else
{var statearr_18238_18263 = state_18222__$1;(statearr_18238_18263[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (14)))
{var inst_18215 = (state_18222[(2)]);var inst_18216 = cljs.core.async.close_BANG_.call(null,out);var state_18222__$1 = (function (){var statearr_18240 = state_18222;(statearr_18240[(13)] = inst_18215);
return statearr_18240;
})();var statearr_18241_18264 = state_18222__$1;(statearr_18241_18264[(2)] = inst_18216);
(statearr_18241_18264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (10)))
{var inst_18205 = (state_18222[(2)]);var state_18222__$1 = state_18222;var statearr_18242_18265 = state_18222__$1;(statearr_18242_18265[(2)] = inst_18205);
(statearr_18242_18265[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18223 === (8)))
{var inst_18182 = (state_18222[(8)]);var inst_18186 = (state_18222[(9)]);var inst_18190 = (state_18222[(10)]);var inst_18195 = inst_18182.push(inst_18186);var tmp18239 = inst_18182;var inst_18182__$1 = tmp18239;var inst_18183 = inst_18190;var state_18222__$1 = (function (){var statearr_18243 = state_18222;(statearr_18243[(7)] = inst_18183);
(statearr_18243[(8)] = inst_18182__$1);
(statearr_18243[(14)] = inst_18195);
return statearr_18243;
})();var statearr_18244_18266 = state_18222__$1;(statearr_18244_18266[(2)] = null);
(statearr_18244_18266[(1)] = (2));
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
});})(c__11147__auto___18252,out))
;return ((function (switch__11082__auto__,c__11147__auto___18252,out){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_18248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18248[(0)] = state_machine__11083__auto__);
(statearr_18248[(1)] = (1));
return statearr_18248;
});
var state_machine__11083__auto____1 = (function (state_18222){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_18222);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e18249){if((e18249 instanceof Object))
{var ex__11086__auto__ = e18249;var statearr_18250_18267 = state_18222;(statearr_18250_18267[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18268 = state_18222;
state_18222 = G__18268;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_18222){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_18222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto___18252,out))
})();var state__11149__auto__ = (function (){var statearr_18251 = f__11148__auto__.call(null);(statearr_18251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto___18252);
return statearr_18251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto___18252,out))
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