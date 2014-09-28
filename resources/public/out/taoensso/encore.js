// Compiled by ClojureScript 0.0-2342
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.XhrIoPool');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('clojure.set');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
/**
* Stolen from `clojure.tools.macro`.
* Handles optional docstrings & attr maps for a macro def's name.
*/
taoensso.encore.name_with_attrs = (function name_with_attrs(name,macro_args){var vec__79926 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));var docstring = cljs.core.nth.call(null,vec__79926,(0),null);var macro_args__$1 = cljs.core.nth.call(null,vec__79926,(1),null);var vec__79927 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));var attr = cljs.core.nth.call(null,vec__79927,(0),null);var macro_args__$2 = cljs.core.nth.call(null,vec__79927,(1),null);var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.nnil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
taoensso.encore.nblank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
taoensso.encore.nblank_str_QMARK_ = (function nblank_str_QMARK_(x){var and__7981__auto__ = typeof x === 'string';if(and__7981__auto__)
{return taoensso.encore.nblank_QMARK_.call(null,x);
} else
{return and__7981__auto__;
}
});
/**
* @param {...*} var_args
*/
taoensso.encore.nnil_EQ_ = (function() {
var nnil_EQ_ = null;
var nnil_EQ___2 = (function (x,y){var and__7981__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);if(cljs.core.truth_(and__7981__auto__))
{return cljs.core._EQ_.call(null,x,y);
} else
{return and__7981__auto__;
}
});
var nnil_EQ___3 = (function() { 
var G__79928__delegate = function (x,y,more){var and__7981__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);if(cljs.core.truth_(and__7981__auto__))
{return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else
{return and__7981__auto__;
}
};
var G__79928 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__79928__delegate.call(this,x,y,more);};
G__79928.cljs$lang$maxFixedArity = 2;
G__79928.cljs$lang$applyTo = (function (arglist__79929){
var x = cljs.core.first(arglist__79929);
arglist__79929 = cljs.core.next(arglist__79929);
var y = cljs.core.first(arglist__79929);
var more = cljs.core.rest(arglist__79929);
return G__79928__delegate(x,y,more);
});
G__79928.cljs$core$IFn$_invoke$arity$variadic = G__79928__delegate;
return G__79928;
})()
;
nnil_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return nnil_EQ___2.call(this,x,y);
default:
return nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nnil_EQ_.cljs$lang$maxFixedArity = 2;
nnil_EQ_.cljs$lang$applyTo = nnil_EQ___3.cljs$lang$applyTo;
nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = nnil_EQ___2;
nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = nnil_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return nnil_EQ_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.asserted = (function() {
var asserted = null;
var asserted__2 = (function (pred,x){if(cljs.core.truth_(pred.call(null,x)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))));
}
return x;
});
var asserted__3 = (function() { 
var G__79930__delegate = function (pred,x,more){return cljs.core.mapv.call(null,cljs.core.partial.call(null,asserted,pred),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),more));
};
var G__79930 = function (pred,x,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__79930__delegate.call(this,pred,x,more);};
G__79930.cljs$lang$maxFixedArity = 2;
G__79930.cljs$lang$applyTo = (function (arglist__79931){
var pred = cljs.core.first(arglist__79931);
arglist__79931 = cljs.core.next(arglist__79931);
var x = cljs.core.first(arglist__79931);
var more = cljs.core.rest(arglist__79931);
return G__79930__delegate(pred,x,more);
});
G__79930.cljs$core$IFn$_invoke$arity$variadic = G__79930__delegate;
return G__79930;
})()
;
asserted = function(pred,x,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return asserted__2.call(this,pred,x);
default:
return asserted__3.cljs$core$IFn$_invoke$arity$variadic(pred,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asserted.cljs$lang$maxFixedArity = 2;
asserted.cljs$lang$applyTo = asserted__3.cljs$lang$applyTo;
asserted.cljs$core$IFn$_invoke$arity$2 = asserted__2;
asserted.cljs$core$IFn$_invoke$arity$variadic = asserted__3.cljs$core$IFn$_invoke$arity$variadic;
return asserted;
})()
;
taoensso.encore.have = cljs.core.partial.call(null,taoensso.encore.asserted,taoensso.encore.nnil_QMARK_);
/**
* Is `x` a vector of size `n`?
*/
taoensso.encore.nvec_QMARK_ = (function nvec_QMARK_(n,x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.first_nth = (function() {
var first_nth = null;
var first_nth__1 = (function (coll){return cljs.core.nth.call(null,coll,(0));
});
var first_nth__2 = (function (coll,not_found){return cljs.core.nth.call(null,coll,(0),not_found);
});
first_nth = function(coll,not_found){
switch(arguments.length){
case 1:
return first_nth__1.call(this,coll);
case 2:
return first_nth__2.call(this,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_nth.cljs$core$IFn$_invoke$arity$1 = first_nth__1;
first_nth.cljs$core$IFn$_invoke$arity$2 = first_nth__2;
return first_nth;
})()
;
taoensso.encore.undefined__GT_nil = (function undefined__GT_nil(x){if((void 0 === x))
{return null;
} else
{return x;
}
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
taoensso.encore.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,cljs.core.map.call(null,taoensso.encore.undefined__GT_nil,args));
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__79932){
var fmt = cljs.core.first(arglist__79932);
var args = cljs.core.rest(arglist__79932);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
taoensso.encore.set_STAR_ = (function set_STAR_(x){if(cljs.core.set_QMARK_.call(null,x))
{return x;
} else
{return cljs.core.set.call(null,x);
}
});
taoensso.encore.keys_EQ_ = (function keys_EQ_(m,ks){return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_LT__EQ_ = (function keys_LT__EQ_(m,ks){return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_GT__EQ_ = (function keys_GT__EQ_(m,ks){return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.nnil_keys_QMARK_ = (function nnil_keys_QMARK_(m,ks){return cljs.core.every_QMARK_.call(null,(function (p1__79933_SHARP_){return !((cljs.core.get.call(null,m,p1__79933_SHARP_) == null));
}),ks);
});
/**
* Returns x as a unambiguous Boolean, or nil on failure. Requires more
* explicit truthiness than (boolean x).
*/
taoensso.encore.parse_bool = (function parse_bool(x){if(cljs.core.truth_(x))
{if((x === true) || (x === false))
{return x;
} else
{if((cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")) || (cljs.core._EQ_.call(null,x,(0))))
{return false;
} else
{if((cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")) || (cljs.core._EQ_.call(null,x,(1))))
{return true;
} else
{return null;

}
}
}
} else
{return null;
}
});
taoensso.encore.as_bool = (function as_bool(x){if(cljs.core.truth_(x))
{var p = taoensso.encore.parse_bool.call(null,x);if(!((p == null)))
{return p;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-bool failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else
{return null;
}
});
/**
* Returns x as Long (or JavaScript integer), or nil on failure.
*/
taoensso.encore.parse_int = (function parse_int(x){if(cljs.core.truth_(x))
{if(typeof x === 'number')
{return cljs.core.long$.call(null,x);
} else
{if(typeof x === 'string')
{var x__$1 = parseInt(x);if(cljs.core.truth_(isNaN(x__$1)))
{return null;
} else
{return x__$1;
}
} else
{return null;

}
}
} else
{return null;
}
});
taoensso.encore.as_int = (function as_int(x){if(cljs.core.truth_(x))
{var or__7993__auto__ = taoensso.encore.parse_int.call(null,x);if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-int failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else
{return null;
}
});
/**
* Returns x as Double (or JavaScript float), or nil on failure.
*/
taoensso.encore.parse_float = (function parse_float(x){if(cljs.core.truth_(x))
{if(typeof x === 'number')
{return x;
} else
{if(typeof x === 'string')
{var x__$1 = parseFloat(x);if(cljs.core.truth_(isNan(x__$1)))
{return null;
} else
{return x__$1;
}
} else
{return null;

}
}
} else
{return null;
}
});
taoensso.encore.as_float = (function as_float(x){var or__7993__auto__ = taoensso.encore.parse_float.call(null,x);if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-float failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.encore.stringy_QMARK_ = (function stringy_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
/**
* Like `name` but includes namespace in string when present.
*/
taoensso.encore.fq_name = (function fq_name(x){if(typeof x === 'string')
{return x;
} else
{var n = cljs.core.name.call(null,x);var temp__4124__auto__ = cljs.core.namespace.call(null,x);if(cljs.core.truth_(temp__4124__auto__))
{var ns = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
} else
{return n;
}
}
});
taoensso.encore.explode_keyword = (function explode_keyword(k){return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
/**
* @param {...*} var_args
*/
taoensso.encore.merge_keywords = (function() { 
var merge_keywords__delegate = function (ks,p__79934){var vec__79936 = p__79934;var as_ns_QMARK_ = cljs.core.nth.call(null,vec__79936,(0),null);var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));if(cljs.core.empty_QMARK_.call(null,parts))
{return null;
} else
{if(cljs.core.truth_(as_ns_QMARK_))
{return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else
{var ppop = cljs.core.pop.call(null,parts);return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
};
var merge_keywords = function (ks,var_args){
var p__79934 = null;if (arguments.length > 1) {
  p__79934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_keywords__delegate.call(this,ks,p__79934);};
merge_keywords.cljs$lang$maxFixedArity = 1;
merge_keywords.cljs$lang$applyTo = (function (arglist__79937){
var ks = cljs.core.first(arglist__79937);
var p__79934 = cljs.core.rest(arglist__79937);
return merge_keywords__delegate(ks,p__79934);
});
merge_keywords.cljs$core$IFn$_invoke$arity$variadic = merge_keywords__delegate;
return merge_keywords;
})()
;
taoensso.encore.error_QMARK_ = (function error_QMARK_(x){var or__7993__auto__ = cljs.core.ex_data.call(null,x);if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return (x instanceof Error);
}
});
taoensso.encore.pos_int_QMARK_ = (function pos_int_QMARK_(x){return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function nneg_int_QMARK_(x){return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.pow = (function pow(n,exp){return Math.pow.call(null,n,exp);
});
/**
* @param {...*} var_args
*/
taoensso.encore.round = (function() { 
var round__delegate = function (n,p__79938){var vec__79941 = p__79938;var type = cljs.core.nth.call(null,vec__79941,(0),null);var nplaces = cljs.core.nth.call(null,vec__79941,(1),null);var modifier = (cljs.core.truth_(nplaces)?Math.pow.call(null,10.0,nplaces):null);var n_STAR_ = ((cljs.core.not.call(null,modifier))?n:(n * modifier));var rounded = (function (){var G__79942 = ((((function (){var or__7993__auto__ = type;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__7993__auto__ = type;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);switch (G__79942) {
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
case "ceil":
return cljs.core.long$.call(null,Math.ceil.call(null,n_STAR_));

break;
case "floor":
return cljs.core.long$.call(null,Math.floor.call(null,n_STAR_));

break;
case "round":
return Math.round.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();if(cljs.core.not.call(null,modifier))
{return rounded;
} else
{return (rounded / modifier);
}
};
var round = function (n,var_args){
var p__79938 = null;if (arguments.length > 1) {
  p__79938 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return round__delegate.call(this,n,p__79938);};
round.cljs$lang$maxFixedArity = 1;
round.cljs$lang$applyTo = (function (arglist__79944){
var n = cljs.core.first(arglist__79944);
var p__79938 = cljs.core.rest(arglist__79944);
return round__delegate(n,p__79938);
});
round.cljs$core$IFn$_invoke$arity$variadic = round__delegate;
return round;
})()
;
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
* Optimized common case.
*/
taoensso.encore.round2 = (function round2(n){return (Math.round.call(null,(n * 1000.0)) / 1000.0);
});
/**
* Returns binary exponential backoff value.
* @param {...*} var_args
*/
taoensso.encore.exp_backoff = (function() { 
var exp_backoff__delegate = function (nattempt,p__79945){var vec__79948 = p__79945;var map__79949 = cljs.core.nth.call(null,vec__79948,(0),null);var map__79949__$1 = ((cljs.core.seq_QMARK_.call(null,map__79949))?cljs.core.apply.call(null,cljs.core.hash_map,map__79949):map__79949);var factor = cljs.core.get.call(null,map__79949__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__79949__$1,new cljs.core.Keyword(null,"min","min",444991522));var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__79949__$1,new cljs.core.Keyword(null,"max","max",61366548));var binary_exp = Math.pow.call(null,(2),(nattempt - (1)));var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__8300__auto__ = min_SINGLEQUOTE_;var y__8301__auto__ = time;return ((x__8300__auto__ > y__8301__auto__) ? x__8300__auto__ : y__8301__auto__);
})():time);var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__8307__auto__ = max_SINGLEQUOTE_;var y__8308__auto__ = time__$1;return ((x__8307__auto__ < y__8308__auto__) ? x__8307__auto__ : y__8308__auto__);
})():time__$1);return time__$2;
})());
};
var exp_backoff = function (nattempt,var_args){
var p__79945 = null;if (arguments.length > 1) {
  p__79945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return exp_backoff__delegate.call(this,nattempt,p__79945);};
exp_backoff.cljs$lang$maxFixedArity = 1;
exp_backoff.cljs$lang$applyTo = (function (arglist__79950){
var nattempt = cljs.core.first(arglist__79950);
var p__79945 = cljs.core.rest(arglist__79950);
return exp_backoff__delegate(nattempt,p__79945);
});
exp_backoff.cljs$core$IFn$_invoke$arity$variadic = exp_backoff__delegate;
return exp_backoff;
})()
;
taoensso.encore.now_udt = (function now_udt(){return (new Date()).valueOf();
});
/**
* Useful for testing.
* @param {...*} var_args
*/
taoensso.encore.now_udt_mock_fn = (function() { 
var now_udt_mock_fn__delegate = function (p__79951){var vec__79953 = p__79951;var mock_udts = cljs.core.nth.call(null,vec__79953,(0),null);var mock_udts__$1 = (function (){var or__7993__auto__ = mock_udts;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return cljs.core.range.call(null);
}
})();var idx = cljs.core.atom.call(null,(-1));return ((function (mock_udts__$1,idx,vec__79953,mock_udts){
return (function (){return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__79953,mock_udts))
};
var now_udt_mock_fn = function (var_args){
var p__79951 = null;if (arguments.length > 0) {
  p__79951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return now_udt_mock_fn__delegate.call(this,p__79951);};
now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__79954){
var p__79951 = cljs.core.seq(arglist__79954);
return now_udt_mock_fn__delegate(p__79951);
});
now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = now_udt_mock_fn__delegate;
return now_udt_mock_fn;
})()
;
taoensso.encore.secs__GT_ms = (function secs__GT_ms(secs){return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function ms__GT_secs(ms){return cljs.core.quot.call(null,ms,(1000));
});
/**
* Returns number of milliseconds in period defined by given args.
* @param {...*} var_args
*/
taoensso.encore.ms = (function() { 
var ms__delegate = function (p__79955){var map__79957 = p__79955;var map__79957__$1 = ((cljs.core.seq_QMARK_.call(null,map__79957))?cljs.core.apply.call(null,cljs.core.hash_map,map__79957):map__79957);var opts = map__79957__$1;var ms__$1 = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));var msecs = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));var secs = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));var mins = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"mins","mins",467369676));var hours = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"hours","hours",58380855));var days = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"days","days",-1394072564));var weeks = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));var months = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"months","months",-45571637));var years = cljs.core.get.call(null,map__79957__$1,new cljs.core.Keyword(null,"years","years",-1298579689));if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.keys.call(null,opts)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))))));
}
return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms__$1)?ms__$1:(0))));
};
var ms = function (var_args){
var p__79955 = null;if (arguments.length > 0) {
  p__79955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ms__delegate.call(this,p__79955);};
ms.cljs$lang$maxFixedArity = 0;
ms.cljs$lang$applyTo = (function (arglist__79958){
var p__79955 = cljs.core.seq(arglist__79958);
return ms__delegate(p__79955);
});
ms.cljs$core$IFn$_invoke$arity$variadic = ms__delegate;
return ms;
})()
;
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.atom_QMARK_ = (function atom_QMARK_(x){return (x instanceof cljs.core.Atom);
});

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8588__auto__,k__8589__auto__){var self__ = this;
var this__8588__auto____$1 = this;return cljs.core._lookup.call(null,this__8588__auto____$1,k__8589__auto__,null);
});
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8590__auto__,k79960,else__8591__auto__){var self__ = this;
var this__8590__auto____$1 = this;var G__79962 = (((k79960 instanceof cljs.core.Keyword))?k79960.fqn:null);switch (G__79962) {
case "return-val":
return self__.return_val;

break;
case "new-val":
return self__.new_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k79960,else__8591__auto__);

}
});
taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8602__auto__,writer__8603__auto__,opts__8604__auto__){var self__ = this;
var this__8602__auto____$1 = this;var pr_pair__8605__auto__ = ((function (this__8602__auto____$1){
return (function (keyval__8606__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8603__auto__,cljs.core.pr_writer,""," ","",opts__8604__auto__,keyval__8606__auto__);
});})(this__8602__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8603__auto__,pr_pair__8605__auto__,"#taoensso.encore.Swapped{",", ","}",opts__8604__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});
taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8586__auto__){var self__ = this;
var this__8586__auto____$1 = this;return self__.__meta;
});
taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8582__auto__){var self__ = this;
var this__8582__auto____$1 = this;return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8592__auto__){var self__ = this;
var this__8592__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8583__auto__){var self__ = this;
var this__8583__auto____$1 = this;var h__8404__auto__ = self__.__hash;if(!((h__8404__auto__ == null)))
{return h__8404__auto__;
} else
{var h__8404__auto____$1 = cljs.core.hash_imap.call(null,this__8583__auto____$1);self__.__hash = h__8404__auto____$1;
return h__8404__auto____$1;
}
});
taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8584__auto__,other__8585__auto__){var self__ = this;
var this__8584__auto____$1 = this;if(cljs.core.truth_((function (){var and__7981__auto__ = other__8585__auto__;if(cljs.core.truth_(and__7981__auto__))
{return ((this__8584__auto____$1.constructor === other__8585__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8584__auto____$1,other__8585__auto__));
} else
{return and__7981__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8597__auto__,k__8598__auto__){var self__ = this;
var this__8597__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__8598__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8597__auto____$1),self__.__meta),k__8598__auto__);
} else
{return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8598__auto__)),null));
}
});
taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8595__auto__,k__8596__auto__,G__79959){var self__ = this;
var this__8595__auto____$1 = this;var pred__79963 = cljs.core.keyword_identical_QMARK_;var expr__79964 = k__8596__auto__;if(cljs.core.truth_(pred__79963.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__79964)))
{return (new taoensso.encore.Swapped(G__79959,self__.return_val,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__79963.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__79964)))
{return (new taoensso.encore.Swapped(self__.new_val,G__79959,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8596__auto__,G__79959),null));
}
}
});
taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8600__auto__){var self__ = this;
var this__8600__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});
taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8587__auto__,G__79959){var self__ = this;
var this__8587__auto____$1 = this;return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__79959,self__.__extmap,self__.__hash));
});
taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8593__auto__,entry__8594__auto__){var self__ = this;
var this__8593__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8594__auto__))
{return cljs.core._assoc.call(null,this__8593__auto____$1,cljs.core._nth.call(null,entry__8594__auto__,(0)),cljs.core._nth.call(null,entry__8594__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8593__auto____$1,entry__8594__auto__);
}
});
taoensso.encore.Swapped.cljs$lang$type = true;
taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__8622__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});
taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__8622__auto__,writer__8623__auto__){return cljs.core._write.call(null,writer__8623__auto__,"taoensso.encore/Swapped");
});
taoensso.encore.__GT_Swapped = (function __GT_Swapped(new_val,return_val){return (new taoensso.encore.Swapped(new_val,return_val));
});
taoensso.encore.map__GT_Swapped = (function map__GT_Swapped(G__79961){return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__79961),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__79961),null,cljs.core.dissoc.call(null,G__79961,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489))));
});
taoensso.encore.swapped = (function swapped(new_val,return_val){return (new taoensso.encore.Swapped(new_val,return_val));
});
taoensso.encore.as_swapped = (function as_swapped(x){if((x instanceof taoensso.encore.Swapped))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
* Reduces input with
* [<type> <ks> <reset-val-or-swap-fn>] or
* [<ks> <reset-val-or-swap-fn>] ops.
*/
taoensso.encore.replace_in_STAR_ = (function replace_in_STAR_(_QMARK_vf_type,m,ops){return cljs.core.reduce.call(null,(function (accum,_QMARK_op){if(cljs.core.not.call(null,_QMARK_op))
{return accum;
} else
{var vec__79969 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));var vf_type = cljs.core.nth.call(null,vec__79969,(0),null);var ks = cljs.core.nth.call(null,vec__79969,(1),null);var valf = cljs.core.nth.call(null,vec__79969,(2),null);var G__79970 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);switch (G__79970) {
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks))
{return valf.call(null,accum);
} else
{return cljs.core.assoc_in.call(null,accum,ks,valf.call(null,cljs.core.get_in.call(null,accum,ks)));
}

break;
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks))
{return valf;
} else
{return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(vf_type))));

}
}
}),m,ops);
});
/**
* Experimental. For use with `swap!`, etc.
* @param {...*} var_args
*/
taoensso.encore.replace_in = (function() { 
var replace_in__delegate = function (m,ops){return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
};
var replace_in = function (m,var_args){
var ops = null;if (arguments.length > 1) {
  ops = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return replace_in__delegate.call(this,m,ops);};
replace_in.cljs$lang$maxFixedArity = 1;
replace_in.cljs$lang$applyTo = (function (arglist__79972){
var m = cljs.core.first(arglist__79972);
var ops = cljs.core.rest(arglist__79972);
return replace_in__delegate(m,ops);
});
replace_in.cljs$core$IFn$_invoke$arity$variadic = replace_in__delegate;
return replace_in;
})()
;
/**
* More powerful version of `swap!`:
* * Supports optional `update-in` semantics.
* * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
* <new-val>. This is useful when writing atomic pull fns, etc.
* @param {...*} var_args
*/
taoensso.encore.swap_in_BANG_ = (function() {
var swap_in_BANG_ = null;
var swap_in_BANG___3 = (function (atom_,ks,f){if(cljs.core.empty_QMARK_.call(null,ks))
{while(true){
var old_val = cljs.core.deref.call(null,atom_);var vec__79975 = taoensso.encore.as_swapped.call(null,f.call(null,old_val));var new_val = cljs.core.nth.call(null,vec__79975,(0),null);var return_val = cljs.core.nth.call(null,vec__79975,(1),null);if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val)))
{{
continue;
}
} else
{return return_val;
}
break;
}
} else
{while(true){
var old_val = cljs.core.deref.call(null,atom_);var old_val_in = cljs.core.get_in.call(null,old_val,ks);var vec__79976 = taoensso.encore.as_swapped.call(null,f.call(null,old_val_in));var new_val_in = cljs.core.nth.call(null,vec__79976,(0),null);var return_val = cljs.core.nth.call(null,vec__79976,(1),null);var new_val = cljs.core.assoc_in.call(null,old_val,ks,new_val_in);if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val)))
{{
continue;
}
} else
{return return_val;
}
break;
}
}
});
var swap_in_BANG___4 = (function() { 
var G__79977__delegate = function (atom_,ks,f,more){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))))))));
}
var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));return cljs.core.swap_BANG_.call(null,atom_,((function (pairs){
return (function (old_val){return taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
});})(pairs))
);
};
var G__79977 = function (atom_,ks,f,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__79977__delegate.call(this,atom_,ks,f,more);};
G__79977.cljs$lang$maxFixedArity = 3;
G__79977.cljs$lang$applyTo = (function (arglist__79978){
var atom_ = cljs.core.first(arglist__79978);
arglist__79978 = cljs.core.next(arglist__79978);
var ks = cljs.core.first(arglist__79978);
arglist__79978 = cljs.core.next(arglist__79978);
var f = cljs.core.first(arglist__79978);
var more = cljs.core.rest(arglist__79978);
return G__79977__delegate(atom_,ks,f,more);
});
G__79977.cljs$core$IFn$_invoke$arity$variadic = G__79977__delegate;
return G__79977;
})()
;
swap_in_BANG_ = function(atom_,ks,f,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return swap_in_BANG___3.call(this,atom_,ks,f);
default:
return swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,f, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_in_BANG_.cljs$lang$maxFixedArity = 3;
swap_in_BANG_.cljs$lang$applyTo = swap_in_BANG___4.cljs$lang$applyTo;
swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_in_BANG___3;
swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return swap_in_BANG_;
})()
;
/**
* To `reset!` as `swap-in!` is to `swap!`.
* @param {...*} var_args
*/
taoensso.encore.reset_in_BANG_ = (function() {
var reset_in_BANG_ = null;
var reset_in_BANG___3 = (function (atom_,ks,new_val){if(cljs.core.empty_QMARK_.call(null,ks))
{return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else
{return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});
var reset_in_BANG___4 = (function() { 
var G__79979__delegate = function (atom_,ks,new_val,more){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))))))));
}
var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));return cljs.core.swap_BANG_.call(null,atom_,((function (pairs){
return (function (old_val){return taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
});})(pairs))
);
};
var G__79979 = function (atom_,ks,new_val,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__79979__delegate.call(this,atom_,ks,new_val,more);};
G__79979.cljs$lang$maxFixedArity = 3;
G__79979.cljs$lang$applyTo = (function (arglist__79980){
var atom_ = cljs.core.first(arglist__79980);
arglist__79980 = cljs.core.next(arglist__79980);
var ks = cljs.core.first(arglist__79980);
arglist__79980 = cljs.core.next(arglist__79980);
var new_val = cljs.core.first(arglist__79980);
var more = cljs.core.rest(arglist__79980);
return G__79979__delegate(atom_,ks,new_val,more);
});
G__79979.cljs$core$IFn$_invoke$arity$variadic = G__79979__delegate;
return G__79979;
})()
;
reset_in_BANG_ = function(atom_,ks,new_val,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return reset_in_BANG___3.call(this,atom_,ks,new_val);
default:
return reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic(atom_,ks,new_val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_in_BANG_.cljs$lang$maxFixedArity = 3;
reset_in_BANG_.cljs$lang$applyTo = reset_in_BANG___4.cljs$lang$applyTo;
reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = reset_in_BANG___3;
reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reset_in_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return reset_in_BANG_;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.dissoc_in = (function() { 
var dissoc_in__delegate = function (m,ks,dissoc_ks){return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
};
var dissoc_in = function (m,ks,var_args){
var dissoc_ks = null;if (arguments.length > 2) {
  dissoc_ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dissoc_in__delegate.call(this,m,ks,dissoc_ks);};
dissoc_in.cljs$lang$maxFixedArity = 2;
dissoc_in.cljs$lang$applyTo = (function (arglist__79982){
var m = cljs.core.first(arglist__79982);
arglist__79982 = cljs.core.next(arglist__79982);
var ks = cljs.core.first(arglist__79982);
var dissoc_ks = cljs.core.rest(arglist__79982);
return dissoc_in__delegate(m,ks,dissoc_ks);
});
dissoc_in.cljs$core$IFn$_invoke$arity$variadic = dissoc_in__delegate;
return dissoc_in;
})()
;
taoensso.encore.contains_in_QMARK_ = (function contains_in_QMARK_(coll,ks){return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
* Assocs each kv iff its value is not nil.
* @param {...*} var_args
*/
taoensso.encore.assoc_some = (function() { 
var assoc_some__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__7993__auto__ = m;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__8731__auto__ = (function iter__79991(s__79992){return (new cljs.core.LazySeq(null,(function (){var s__79992__$1 = s__79992;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79992__$1);if(temp__4126__auto__)
{var s__79992__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79992__$2))
{var c__8729__auto__ = cljs.core.chunk_first.call(null,s__79992__$2);var size__8730__auto__ = cljs.core.count.call(null,c__8729__auto__);var b__79994 = cljs.core.chunk_buffer.call(null,size__8730__auto__);if((function (){var i__79993 = (0);while(true){
if((i__79993 < size__8730__auto__))
{var vec__79997 = cljs.core._nth.call(null,c__8729__auto__,i__79993);var k = cljs.core.nth.call(null,vec__79997,(0),null);var v = cljs.core.nth.call(null,vec__79997,(1),null);if(!((v == null)))
{cljs.core.chunk_append.call(null,b__79994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__79999 = (i__79993 + (1));
i__79993 = G__79999;
continue;
}
} else
{{
var G__80000 = (i__79993 + (1));
i__79993 = G__80000;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79994),iter__79991.call(null,cljs.core.chunk_rest.call(null,s__79992__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79994),null);
}
} else
{var vec__79998 = cljs.core.first.call(null,s__79992__$2);var k = cljs.core.nth.call(null,vec__79998,(0),null);var v = cljs.core.nth.call(null,vec__79998,(1),null);if(!((v == null)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__79991.call(null,cljs.core.rest.call(null,s__79992__$2)));
} else
{{
var G__80001 = cljs.core.rest.call(null,s__79992__$2);
s__79992__$1 = G__80001;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8731__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_some = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_some__delegate.call(this,m,kvs);};
assoc_some.cljs$lang$maxFixedArity = 1;
assoc_some.cljs$lang$applyTo = (function (arglist__80002){
var m = cljs.core.first(arglist__80002);
var kvs = cljs.core.rest(arglist__80002);
return assoc_some__delegate(m,kvs);
});
assoc_some.cljs$core$IFn$_invoke$arity$variadic = assoc_some__delegate;
return assoc_some;
})()
;
/**
* Assocs each kv iff its val is truthy.
* @param {...*} var_args
*/
taoensso.encore.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__7993__auto__ = m;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__8731__auto__ = (function iter__80011(s__80012){return (new cljs.core.LazySeq(null,(function (){var s__80012__$1 = s__80012;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__80012__$1);if(temp__4126__auto__)
{var s__80012__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__80012__$2))
{var c__8729__auto__ = cljs.core.chunk_first.call(null,s__80012__$2);var size__8730__auto__ = cljs.core.count.call(null,c__8729__auto__);var b__80014 = cljs.core.chunk_buffer.call(null,size__8730__auto__);if((function (){var i__80013 = (0);while(true){
if((i__80013 < size__8730__auto__))
{var vec__80017 = cljs.core._nth.call(null,c__8729__auto__,i__80013);var k = cljs.core.nth.call(null,vec__80017,(0),null);var v = cljs.core.nth.call(null,vec__80017,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__80014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__80019 = (i__80013 + (1));
i__80013 = G__80019;
continue;
}
} else
{{
var G__80020 = (i__80013 + (1));
i__80013 = G__80020;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80014),iter__80011.call(null,cljs.core.chunk_rest.call(null,s__80012__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80014),null);
}
} else
{var vec__80018 = cljs.core.first.call(null,s__80012__$2);var k = cljs.core.nth.call(null,vec__80018,(0),null);var v = cljs.core.nth.call(null,vec__80018,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__80011.call(null,cljs.core.rest.call(null,s__80012__$2)));
} else
{{
var G__80021 = cljs.core.rest.call(null,s__80012__$2);
s__80012__$1 = G__80021;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8731__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__80022){
var m = cljs.core.first(arglist__80022);
var kvs = cljs.core.rest(arglist__80022);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* (seq     {:a :A}) => ([:a :A])
* (seq-kvs {:a :A}) => (:a :A)
*/
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
* Like `apply` but assumes last arg is a map whose elements should be applied
* to `f` as an unpaired seq:
* (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
* where fn will receive args as: `(1 :y 2 :z 3)`.
* @param {...*} var_args
*/
taoensso.encore.mapply = (function() { 
var mapply__delegate = function (f,args){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
};
var mapply = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mapply__delegate.call(this,f,args);};
mapply.cljs$lang$maxFixedArity = 1;
mapply.cljs$lang$applyTo = (function (arglist__80023){
var f = cljs.core.first(arglist__80023);
var args = cljs.core.rest(arglist__80023);
return mapply__delegate(f,args);
});
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__delegate;
return mapply;
})()
;
/**
* Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
* against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
*/
taoensso.encore.clj1098 = (function clj1098(x){var or__7993__auto__ = x;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function map_kvs(kf,vf,m){if(cljs.core.not.call(null,m))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){return cljs.core.keyword.call(null,k);
}));var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){return cljs.core.keyword.call(null,v);
});})(kf__$1))
);return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,v,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function map_keys(f,m){return taoensso.encore.map_kvs.call(null,(function (k,_){return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function map_vals(f,m){return taoensso.encore.map_kvs.call(null,null,(function (_,v){return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function filter_kvs(predk,predv,m){if(cljs.core.not.call(null,m))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){if(cljs.core.truth_((function (){var and__7981__auto__ = predk.call(null,k);if(cljs.core.truth_(and__7981__auto__))
{return predv.call(null,v);
} else
{return and__7981__auto__;
}
})()))
{return m__$1;
} else
{return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function filter_keys(pred,m){return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function filter_vals(pred,m){return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
* Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
* pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
* way that preservers :or semantics.
*/
taoensso.encore.remove_vals = (function remove_vals(pred,m){if(cljs.core.not.call(null,m))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){if(cljs.core.truth_(pred.call(null,v)))
{return cljs.core.dissoc.call(null,m__$1,k);
} else
{return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function keywordize_map(m){if(cljs.core.not.call(null,m))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
* Cross between `hash-map` & `map-kvs`.
* @param {...*} var_args
*/
taoensso.encore.as_map = (function() { 
var as_map__delegate = function (coll,p__80024){var vec__80030 = p__80024;var kf = cljs.core.nth.call(null,vec__80030,(0),null);var vf = cljs.core.nth.call(null,vec__80030,(1),null);if((cljs.core.coll_QMARK_.call(null,coll)) || ((coll == null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null))))))));
}
if(cljs.core.truth_((function (){var or__7993__auto__ = (kf == null);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var or__7993__auto____$1 = cljs.core.fn_QMARK_.call(null,kf);if(or__7993__auto____$1)
{return or__7993__auto____$1;
} else
{return taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758));
}
}
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"kw-identical?","kw-identical?",-1893901709,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))))));
}
if(((vf == null)) || (cljs.core.fn_QMARK_.call(null,vf)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))))));
}
var _PERCENT_ = (cljs.core.truth_(coll)?((cljs.core.empty_QMARK_.call(null,coll))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__80030,kf,vf){
return (function (k,_){return cljs.core.keyword.call(null,k);
});})(vec__80030,kf,vf))
);var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var G__80032 = coll;var vec__80033 = G__80032;var k = cljs.core.nth.call(null,vec__80033,(0),null);var v = cljs.core.nth.call(null,vec__80033,(1),null);var s = vec__80033;var m__$1 = m;var G__80032__$1 = G__80032;while(true){
var m__$2 = m__$1;var vec__80034 = G__80032__$1;var k__$1 = cljs.core.nth.call(null,vec__80034,(0),null);var v__$1 = cljs.core.nth.call(null,vec__80034,(1),null);var s__$1 = vec__80034;var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);var temp__4124__auto__ = cljs.core.nnext.call(null,s__$1);if(temp__4124__auto__)
{var n = temp__4124__auto__;{
var G__80035 = new_m;
var G__80036 = n;
m__$1 = G__80035;
G__80032__$1 = G__80036;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})()):null);if(((_PERCENT_ == null)) || (cljs.core.map_QMARK_.call(null,_PERCENT_)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))))));
}
return _PERCENT_;
};
var as_map = function (coll,var_args){
var p__80024 = null;if (arguments.length > 1) {
  p__80024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return as_map__delegate.call(this,coll,p__80024);};
as_map.cljs$lang$maxFixedArity = 1;
as_map.cljs$lang$applyTo = (function (arglist__80037){
var coll = cljs.core.first(arglist__80037);
var p__80024 = cljs.core.rest(arglist__80037);
return as_map__delegate(coll,p__80024);
});
as_map.cljs$core$IFn$_invoke$arity$variadic = as_map__delegate;
return as_map;
})()
;
/**
* Like `into` but supports multiple "from"s.
* @param {...*} var_args
*/
taoensso.encore.into_all = (function() {
var into_all = null;
var into_all__2 = (function (to,from){return cljs.core.into.call(null,to,from);
});
var into_all__3 = (function() { 
var G__80038__delegate = function (to,from,more){return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
};
var G__80038 = function (to,from,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__80038__delegate.call(this,to,from,more);};
G__80038.cljs$lang$maxFixedArity = 2;
G__80038.cljs$lang$applyTo = (function (arglist__80039){
var to = cljs.core.first(arglist__80039);
arglist__80039 = cljs.core.next(arglist__80039);
var from = cljs.core.first(arglist__80039);
var more = cljs.core.rest(arglist__80039);
return G__80038__delegate(to,from,more);
});
G__80038.cljs$core$IFn$_invoke$arity$variadic = G__80038__delegate;
return G__80038;
})()
;
into_all = function(to,from,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return into_all__2.call(this,to,from);
default:
return into_all__3.cljs$core$IFn$_invoke$arity$variadic(to,from, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_all.cljs$lang$maxFixedArity = 2;
into_all.cljs$lang$applyTo = into_all__3.cljs$lang$applyTo;
into_all.cljs$core$IFn$_invoke$arity$2 = into_all__2;
into_all.cljs$core$IFn$_invoke$arity$variadic = into_all__3.cljs$core$IFn$_invoke$arity$variadic;
return into_all;
})()
;
/**
* Greedy version of `interleave`.
* Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
* @param {...*} var_args
*/
taoensso.encore.interleave_all = (function() {
var interleave_all = null;
var interleave_all__0 = (function (){return cljs.core.List.EMPTY;
});
var interleave_all__1 = (function (c1){return (new cljs.core.LazySeq(null,(function (){return c1;
}),null,null));
});
var interleave_all__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{if(s1)
{return s1;
} else
{if(s2)
{return s2;
} else
{return null;
}
}
}
}),null,null));
});
var interleave_all__3 = (function() { 
var G__80040__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
};
var G__80040 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__80040__delegate.call(this,c1,c2,colls);};
G__80040.cljs$lang$maxFixedArity = 2;
G__80040.cljs$lang$applyTo = (function (arglist__80041){
var c1 = cljs.core.first(arglist__80041);
arglist__80041 = cljs.core.next(arglist__80041);
var c2 = cljs.core.first(arglist__80041);
var colls = cljs.core.rest(arglist__80041);
return G__80040__delegate(c1,c2,colls);
});
G__80040.cljs$core$IFn$_invoke$arity$variadic = G__80040__delegate;
return G__80040;
})()
;
interleave_all = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 0:
return interleave_all__0.call(this);
case 1:
return interleave_all__1.call(this,c1);
case 2:
return interleave_all__2.call(this,c1,c2);
default:
return interleave_all__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave_all.cljs$lang$maxFixedArity = 2;
interleave_all.cljs$lang$applyTo = interleave_all__3.cljs$lang$applyTo;
interleave_all.cljs$core$IFn$_invoke$arity$0 = interleave_all__0;
interleave_all.cljs$core$IFn$_invoke$arity$1 = interleave_all__1;
interleave_all.cljs$core$IFn$_invoke$arity$2 = interleave_all__2;
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave_all;
})()
;
/**
* Prefer `set` when order doesn't matter (much faster).
*/
taoensso.encore.distinctv = (function() {
var distinctv = null;
var distinctv__1 = (function (coll){return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__80046,in$){var vec__80047 = p__80046;var v = cljs.core.nth.call(null,vec__80047,(0),null);var seen = cljs.core.nth.call(null,vec__80047,(1),null);if(!(cljs.core.contains_QMARK_.call(null,seen,in$)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
var distinctv__2 = (function (keyfn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__80048,in$){var vec__80049 = p__80048;var v = cljs.core.nth.call(null,vec__80049,(0),null);var seen = cljs.core.nth.call(null,vec__80049,(1),null);var in_STAR_ = keyfn.call(null,in$);if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});
distinctv = function(keyfn,coll){
switch(arguments.length){
case 1:
return distinctv__1.call(this,keyfn);
case 2:
return distinctv__2.call(this,keyfn,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinctv.cljs$core$IFn$_invoke$arity$1 = distinctv__1;
distinctv.cljs$core$IFn$_invoke$arity$2 = distinctv__2;
return distinctv;
})()
;
/**
* Like `sort-by` for distinct. Based on clojure.core/distinct.
*/
taoensso.encore.distinct_by = (function distinct_by(keyfn,coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__80056,seen__$1){while(true){
var vec__80057 = p__80056;var v = cljs.core.nth.call(null,vec__80057,(0),null);var xs__$1 = vec__80057;var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;var v_STAR_ = keyfn.call(null,v);if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_))
{{
var G__80058 = cljs.core.rest.call(null,s);
var G__80059 = seen__$1;
p__80056 = G__80058;
seen__$1 = G__80059;
continue;
}
} else
{return cljs.core.cons.call(null,v,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
* Reverse comparator.
*/
taoensso.encore.rcompare = (function rcompare(x,y){return cljs.core.compare.call(null,y,x);
});
/**
* Like `merge-with` but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
* 
* (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
taoensso.encore.merge_deep_with = (function() { 
var merge_deep_with__delegate = function (f,maps){return cljs.core.apply.call(null,(function() { 
var m__delegate = function (maps__$1){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1))
{return cljs.core.apply.call(null,cljs.core.merge_with,m,maps__$1);
} else
{return cljs.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;if (arguments.length > 0) {
  maps__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return m__delegate.call(this,maps__$1);};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__80060){
var maps__$1 = cljs.core.seq(arglist__80060);
return m__delegate(maps__$1);
});
m.cljs$core$IFn$_invoke$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var merge_deep_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_deep_with__delegate.call(this,f,maps);};
merge_deep_with.cljs$lang$maxFixedArity = 1;
merge_deep_with.cljs$lang$applyTo = (function (arglist__80061){
var f = cljs.core.first(arglist__80061);
var maps = cljs.core.rest(arglist__80061);
return merge_deep_with__delegate(f,maps);
});
merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = merge_deep_with__delegate;
return merge_deep_with;
})()
;
taoensso.encore.merge_deep = cljs.core.partial.call(null,taoensso.encore.merge_deep_with,(function (x,y){return y;
}));
/**
* Returns the 'greatest' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.greatest = (function() { 
var greatest__delegate = function (coll,p__80064){var vec__80066 = p__80064;var _QMARK_comparator = cljs.core.nth.call(null,vec__80066,(0),null);var comparator = (function (){var or__7993__auto__ = _QMARK_comparator;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return taoensso.encore.rcompare;
}
})();return cljs.core.reduce.call(null,((function (comparator,vec__80066,_QMARK_comparator){
return (function (p1__80062_SHARP_,p2__80063_SHARP_){if((comparator.call(null,p1__80062_SHARP_,p2__80063_SHARP_) > (0)))
{return p2__80063_SHARP_;
} else
{return p1__80062_SHARP_;
}
});})(comparator,vec__80066,_QMARK_comparator))
,coll);
};
var greatest = function (coll,var_args){
var p__80064 = null;if (arguments.length > 1) {
  p__80064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return greatest__delegate.call(this,coll,p__80064);};
greatest.cljs$lang$maxFixedArity = 1;
greatest.cljs$lang$applyTo = (function (arglist__80067){
var coll = cljs.core.first(arglist__80067);
var p__80064 = cljs.core.rest(arglist__80067);
return greatest__delegate(coll,p__80064);
});
greatest.cljs$core$IFn$_invoke$arity$variadic = greatest__delegate;
return greatest;
})()
;
/**
* Returns the 'least' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.least = (function() { 
var least__delegate = function (coll,p__80070){var vec__80072 = p__80070;var _QMARK_comparator = cljs.core.nth.call(null,vec__80072,(0),null);var comparator = (function (){var or__7993__auto__ = _QMARK_comparator;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return taoensso.encore.rcompare;
}
})();return cljs.core.reduce.call(null,((function (comparator,vec__80072,_QMARK_comparator){
return (function (p1__80068_SHARP_,p2__80069_SHARP_){if((comparator.call(null,p1__80068_SHARP_,p2__80069_SHARP_) < (0)))
{return p2__80069_SHARP_;
} else
{return p1__80068_SHARP_;
}
});})(comparator,vec__80072,_QMARK_comparator))
,coll);
};
var least = function (coll,var_args){
var p__80070 = null;if (arguments.length > 1) {
  p__80070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return least__delegate.call(this,coll,p__80070);};
least.cljs$lang$maxFixedArity = 1;
least.cljs$lang$applyTo = (function (arglist__80073){
var coll = cljs.core.first(arglist__80073);
var p__80070 = cljs.core.rest(arglist__80073);
return least__delegate(coll,p__80070);
});
least.cljs$core$IFn$_invoke$arity$variadic = least__delegate;
return least;
})()
;
/**
* Like `repeatedly` but faster and `conj`s items into given collection.
*/
taoensso.encore.repeatedly_into = (function repeatedly_into(coll,n,f){if((coll instanceof clojure.lang.IEditableCollection))
{var v = cljs.core.transient$.call(null,coll);var idx = (0);while(true){
if((idx >= n))
{return cljs.core.persistent_BANG_.call(null,v);
} else
{{
var G__80074 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__80075 = (idx + (1));
v = G__80074;
idx = G__80075;
continue;
}
}
break;
}
} else
{var v = coll;var idx = (0);while(true){
if((idx >= n))
{return v;
} else
{{
var G__80076 = cljs.core.conj.call(null,v,f.call(null));
var G__80077 = (idx + (1));
v = G__80076;
idx = G__80077;
continue;
}
}
break;
}
}
});
/**
* Gives a consistent, flexible, cross-platform substring API with support for:
* * Clamping of indexes beyond string limits.
* * Negative indexes: [   0   |   1   |  ...  |  n-1  |   n   ) or
* [  -n   | -n+1  |  ...  |  -1   |   0   ).
* (start index inclusive, end index exclusive).
* 
* Note that `max-len` was chosen over `end-idx` since it's less ambiguous and
* easier to reason about - esp. when accepting negative indexes.
* @param {...*} var_args
*/
taoensso.encore.substr = (function() { 
var substr__delegate = function (s,start_idx,p__80078){var vec__80080 = p__80078;var max_len = cljs.core.nth.call(null,vec__80080,(0),null);if(((max_len == null)) || (taoensso.encore.nneg_int_QMARK_.call(null,max_len)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))))));
}
var slen = cljs.core.count.call(null,s);var start_idx_STAR_ = (((start_idx >= (0)))?(function (){var x__8307__auto__ = start_idx;var y__8308__auto__ = slen;return ((x__8307__auto__ < y__8308__auto__) ? x__8307__auto__ : y__8308__auto__);
})():(function (){var x__8300__auto__ = (0);var y__8301__auto__ = ((slen + start_idx) - (1));return ((x__8300__auto__ > y__8301__auto__) ? x__8300__auto__ : y__8301__auto__);
})());var end_idx_STAR_ = ((cljs.core.not.call(null,max_len))?slen:(function (){var x__8307__auto__ = (start_idx_STAR_ + max_len);var y__8308__auto__ = slen;return ((x__8307__auto__ < y__8308__auto__) ? x__8307__auto__ : y__8308__auto__);
})());return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var substr = function (s,start_idx,var_args){
var p__80078 = null;if (arguments.length > 2) {
  p__80078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return substr__delegate.call(this,s,start_idx,p__80078);};
substr.cljs$lang$maxFixedArity = 2;
substr.cljs$lang$applyTo = (function (arglist__80081){
var s = cljs.core.first(arglist__80081);
arglist__80081 = cljs.core.next(arglist__80081);
var start_idx = cljs.core.first(arglist__80081);
var p__80078 = cljs.core.rest(arglist__80081);
return substr__delegate(s,start_idx,p__80078);
});
substr.cljs$core$IFn$_invoke$arity$variadic = substr__delegate;
return substr;
})()
;
taoensso.encore.str_contains_QMARK_ = (function str_contains_QMARK_(s,substr){return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function str_starts_with_QMARK_(s,substr){return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function str_ends_with_QMARK_(s,substr){var s_len = s.length;var substr_len = substr.length;if((s_len >= substr_len))
{return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else
{return null;
}
});
/**
* Like `clojure.string/join` but ensures no double separators.
* @param {...*} var_args
*/
taoensso.encore.join_once = (function() { 
var join_once__delegate = function (separator,coll){return cljs.core.reduce.call(null,(function (s1,s2){var s1__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1));var s2__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2));if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator)))
{if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1.substring((1))));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
}
} else
{if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
} else
{if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,"")))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
}
}
}
}),null,coll);
};
var join_once = function (separator,var_args){
var coll = null;if (arguments.length > 1) {
  coll = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return join_once__delegate.call(this,separator,coll);};
join_once.cljs$lang$maxFixedArity = 1;
join_once.cljs$lang$applyTo = (function (arglist__80082){
var separator = cljs.core.first(arglist__80082);
var coll = cljs.core.rest(arglist__80082);
return join_once__delegate(separator,coll);
});
join_once.cljs$core$IFn$_invoke$arity$variadic = join_once__delegate;
return join_once;
})()
;
/**
* Joins string paths (URLs, file paths, etc.) ensuring correct "/"
* interposition.
* @param {...*} var_args
*/
taoensso.encore.path = (function() { 
var path__delegate = function (parts){return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
};
var path = function (var_args){
var parts = null;if (arguments.length > 0) {
  parts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,parts);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__80083){
var parts = cljs.core.seq(arglist__80083);
return path__delegate(parts);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* Converts all word breaks of any form and length (including line breaks of any
* form, tabs, spaces, etc.) to a single regular space.
*/
taoensso.encore.norm_word_breaks = (function norm_word_breaks(s){return clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/\s+/," ");
});
taoensso.encore.count_words = (function count_words(s){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return (0);
} else
{return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
taoensso.encore.count_words.call(null,"Hello this is a    test");
/**
* Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
* Ref. http://www.ietf.org/rfc/rfc4122.txt,
* https://gist.github.com/franks42/4159427
*/
taoensso.encore.uuid_str = (function() {
var uuid_str = null;
var uuid_str__0 = (function (){var fs = (function (n){return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});var g = ((function (fs){
return (function (){return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));return sb.toString();
});
var uuid_str__1 = (function (max_length){return taoensso.encore.substr.call(null,uuid_str.call(null),(0),max_length);
});
uuid_str = function(max_length){
switch(arguments.length){
case 0:
return uuid_str__0.call(this);
case 1:
return uuid_str__1.call(this,max_length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
uuid_str.cljs$core$IFn$_invoke$arity$0 = uuid_str__0;
uuid_str.cljs$core$IFn$_invoke$arity$1 = uuid_str__1;
return uuid_str;
})()
;
taoensso.encore.gc_rate = (1.0 / (16000));
/**
* Swaps associative value at key and returns the new value.
* Specialized, fast `swap-in!` for use mostly by memoization utils.
*/
taoensso.encore.swap_val_BANG_ = (function swap_val_BANG_(atom_,k,f){while(true){
var old_m = cljs.core.deref.call(null,atom_);var new_v = f.call(null,cljs.core.get.call(null,old_m,k));var new_m = cljs.core.assoc.call(null,old_m,k,new_v);if(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))
{return new_v;
} else
{{
continue;
}
}
break;
}
});
/**
* Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
* and immediately applies memoized f to given arguments.
* @param {...*} var_args
*/
taoensso.encore.memoized = (function() { 
var memoized__delegate = function (cache,f,args){if(cljs.core.not.call(null,cache))
{return cljs.core.apply.call(null,f,args);
} else
{return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__80084_SHARP_){if(cljs.core.truth_(p1__80084_SHARP_))
{return p1__80084_SHARP_;
} else
{return (new cljs.core.Delay((function (){return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
};
var memoized = function (cache,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return memoized__delegate.call(this,cache,f,args);};
memoized.cljs$lang$maxFixedArity = 2;
memoized.cljs$lang$applyTo = (function (arglist__80085){
var cache = cljs.core.first(arglist__80085);
arglist__80085 = cljs.core.next(arglist__80085);
var f = cljs.core.first(arglist__80085);
var args = cljs.core.rest(arglist__80085);
return memoized__delegate(cache,f,args);
});
memoized.cljs$core$IFn$_invoke$arity$variadic = memoized__delegate;
return memoized;
})()
;
/**
* Like `clojure.core/memoize` but:
* * Uses delays to prevent race conditions on writes.
* * Supports auto invalidation & gc with `ttl-ms` option.
* * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
* * Supports cache size limit & gc with `cache-size` option.
*/
taoensso.encore.memoize_STAR_ = (function() {
var memoize_STAR_ = null;
var memoize_STAR___1 = (function (f){var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (cache){
return (function() { 
var G__80124__delegate = function (p__80106){var vec__80107 = p__80106;var arg1 = cljs.core.nth.call(null,vec__80107,(0),null);var argn = cljs.core.nthnext.call(null,vec__80107,(1));var args = vec__80107;if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667))))
{if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139))))
{cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else
{cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}
return null;
} else
{var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__80107,arg1,argn,args,cache){
return (function (_QMARK_dv){if(cljs.core.truth_((function (){var and__7981__auto__ = _QMARK_dv;if(cljs.core.truth_(and__7981__auto__))
{return cljs.core.not.call(null,fresh_QMARK_);
} else
{return and__7981__auto__;
}
})()))
{return _QMARK_dv;
} else
{return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__80107,arg1,argn,args,cache){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__80107,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__80107,arg1,argn,args,cache))
));
}
};
var G__80124 = function (var_args){
var p__80106 = null;if (arguments.length > 0) {
  p__80106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__80124__delegate.call(this,p__80106);};
G__80124.cljs$lang$maxFixedArity = 0;
G__80124.cljs$lang$applyTo = (function (arglist__80125){
var p__80106 = cljs.core.seq(arglist__80125);
return G__80124__delegate(p__80106);
});
G__80124.cljs$core$IFn$_invoke$arity$variadic = G__80124__delegate;
return G__80124;
})()
;
;})(cache))
});
var memoize_STAR___2 = (function (ttl_ms,f){var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (cache){
return (function() { 
var G__80126__delegate = function (p__80108){var vec__80109 = p__80108;var arg1 = cljs.core.nth.call(null,vec__80109,(0),null);var argn = cljs.core.nthnext.call(null,vec__80109,(1));var args = vec__80109;if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667))))
{if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139))))
{cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else
{cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}
return null;
} else
{if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_80127 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,cache,((function (instant_80127,vec__80109,arg1,argn,args,cache){
return (function (m){return cljs.core.reduce_kv.call(null,((function (instant_80127,vec__80109,arg1,argn,args,cache){
return (function (m_STAR_,k,p__80110){var vec__80111 = p__80110;var dv = cljs.core.nth.call(null,vec__80111,(0),null);var udt = cljs.core.nth.call(null,vec__80111,(1),null);var cv = vec__80111;if(((instant_80127 - udt) > ttl_ms))
{return m_STAR_;
} else
{return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_80127,vec__80109,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_80127,vec__80109,arg1,argn,args,cache))
);
} else
{}
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);var instant = taoensso.encore.now_udt.call(null);return cljs.core.deref.call(null,taoensso.encore.first_nth.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__80109,arg1,argn,args,cache){
return (function (_QMARK_cv){if(cljs.core.truth_((function (){var and__7981__auto__ = _QMARK_cv;if(cljs.core.truth_(and__7981__auto__))
{var and__7981__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);if(and__7981__auto____$1)
{var vec__80113 = _QMARK_cv;var _dv = cljs.core.nth.call(null,vec__80113,(0),null);var udt = cljs.core.nth.call(null,vec__80113,(1),null);return ((instant - udt) < ttl_ms);
} else
{return and__7981__auto____$1;
}
} else
{return and__7981__auto__;
}
})()))
{return _QMARK_cv;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__80109,arg1,argn,args,cache){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__80109,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__80109,arg1,argn,args,cache))
)));
}
};
var G__80126 = function (var_args){
var p__80108 = null;if (arguments.length > 0) {
  p__80108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__80126__delegate.call(this,p__80108);};
G__80126.cljs$lang$maxFixedArity = 0;
G__80126.cljs$lang$applyTo = (function (arglist__80128){
var p__80108 = cljs.core.seq(arglist__80128);
return G__80126__delegate(p__80108);
});
G__80126.cljs$core$IFn$_invoke$arity$variadic = G__80126__delegate;
return G__80126;
})()
;
;})(cache))
});
var memoize_STAR___3 = (function (cache_size,ttl_ms,f){var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));return ((function (state){
return (function() { 
var G__80129__delegate = function (p__80114){var vec__80115 = p__80114;var arg1 = cljs.core.nth.call(null,vec__80115,(0),null);var argn = cljs.core.nthnext.call(null,vec__80115,(1));var args = vec__80115;if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667))))
{if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139))))
{cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else
{cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}
return null;
} else
{if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_80130 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,state,((function (instant_80130,vec__80115,arg1,argn,args,state){
return (function (m){var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_80130,vec__80115,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__80116){var vec__80117 = p__80116;var dv = cljs.core.nth.call(null,vec__80117,(0),null);var udt = cljs.core.nth.call(null,vec__80117,(1),null);var _ = cljs.core.nth.call(null,vec__80117,(2),null);var ___$1 = cljs.core.nth.call(null,vec__80117,(3),null);var cv = vec__80117;if(((instant_80130 - udt) > ttl_ms))
{return m_STAR___$1;
} else
{return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_80130,vec__80115,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_80130,vec__80115,arg1,argn,args,state){
return (function (p1__80087_SHARP_){return cljs.core.nth.call(null,p1__80087_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_80130,vec__80115,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_80130,vec__80115,arg1,argn,args,state){
return (function (p1__80086_SHARP_){return cljs.core.nth.call(null,p1__80086_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_80130,vec__80115,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_80130,vec__80115,arg1,argn,args,state){
return (function (k){var vec__80118 = m_STAR___$1.call(null,k);var _ = cljs.core.nth.call(null,vec__80118,(0),null);var ___$1 = cljs.core.nth.call(null,vec__80118,(1),null);var tick_lru = cljs.core.nth.call(null,vec__80118,(2),null);var tick_lfu = cljs.core.nth.call(null,vec__80118,(3),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_80130,vec__80115,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_80130,vec__80115,arg1,argn,args,state))
);
} else
{}
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var dv = taoensso.encore.first_nth.call(null,taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__80115,arg1,argn,args,state){
return (function (_QMARK_cv){if(cljs.core.truth_((function (){var and__7981__auto__ = _QMARK_cv;if(cljs.core.truth_(and__7981__auto__))
{var and__7981__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);if(and__7981__auto____$1)
{var or__7993__auto__ = (_QMARK_instant == null);if(or__7993__auto__)
{return or__7993__auto__;
} else
{var vec__80122 = _QMARK_cv;var _dv = cljs.core.nth.call(null,vec__80122,(0),null);var udt = cljs.core.nth.call(null,vec__80122,(1),null);return ((_QMARK_instant - udt) < ttl_ms);
}
} else
{return and__7981__auto____$1;
}
} else
{return and__7981__auto__;
}
})()))
{return _QMARK_cv;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__80115,arg1,argn,args,state){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__80115,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__80115,arg1,argn,args,state))
));cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,dv,vec__80115,arg1,argn,args,state){
return (function (m){var temp__4126__auto__ = cljs.core.get.call(null,m,args__$1);if(cljs.core.truth_(temp__4126__auto__))
{var vec__80123 = temp__4126__auto__;var dv__$1 = cljs.core.nth.call(null,vec__80123,(0),null);var _QMARK_udt = cljs.core.nth.call(null,vec__80123,(1),null);var tick_lru = cljs.core.nth.call(null,vec__80123,(2),null);var tick_lfu = cljs.core.nth.call(null,vec__80123,(3),null);var cv = vec__80123;return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null));
} else
{return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,dv,vec__80115,arg1,argn,args,state))
);
return cljs.core.deref.call(null,dv);
}
};
var G__80129 = function (var_args){
var p__80114 = null;if (arguments.length > 0) {
  p__80114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__80129__delegate.call(this,p__80114);};
G__80129.cljs$lang$maxFixedArity = 0;
G__80129.cljs$lang$applyTo = (function (arglist__80131){
var p__80114 = cljs.core.seq(arglist__80131);
return G__80129__delegate(p__80114);
});
G__80129.cljs$core$IFn$_invoke$arity$variadic = G__80129__delegate;
return G__80129;
})()
;
;})(state))
});
memoize_STAR_ = function(cache_size,ttl_ms,f){
switch(arguments.length){
case 1:
return memoize_STAR___1.call(this,cache_size);
case 2:
return memoize_STAR___2.call(this,cache_size,ttl_ms);
case 3:
return memoize_STAR___3.call(this,cache_size,ttl_ms,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = memoize_STAR___1;
memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = memoize_STAR___2;
memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = memoize_STAR___3;
return memoize_STAR_;
})()
;
/**
* Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
* msecs until next rate limit window (rate limited).
*/
taoensso.encore.rate_limiter = (function rate_limiter(ncalls_limit,window_ms){var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));return ((function (state){
return (function() { 
var G__80150__delegate = function (p__80141){var vec__80142 = p__80141;var id = cljs.core.nth.call(null,vec__80142,(0),null);if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_80151 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,state,((function (instant_80151,vec__80142,id,state){
return (function (p__80143){var vec__80144 = p__80143;var _ = cljs.core.nth.call(null,vec__80144,(0),null);var m = cljs.core.nth.call(null,vec__80144,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__80144,_,m,instant_80151,vec__80142,id,state){
return (function (m_STAR_,id__$1,p__80145){var vec__80146 = p__80145;var udt_window_start = cljs.core.nth.call(null,vec__80146,(0),null);var ncalls = cljs.core.nth.call(null,vec__80146,(1),null);if(((instant_80151 - udt_window_start) > window_ms))
{return m_STAR_;
} else
{return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__80144,_,m,instant_80151,vec__80142,id,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m))], null);
});})(instant_80151,vec__80142,id,state))
);
} else
{}
return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__80142,id,state){
return (function (p__80147){var vec__80148 = p__80147;var _ = cljs.core.nth.call(null,vec__80148,(0),null);var m = cljs.core.nth.call(null,vec__80148,(1),null);var temp__4124__auto__ = m.call(null,id);if(cljs.core.truth_(temp__4124__auto__))
{var vec__80149 = temp__4124__auto__;var udt_window_start = cljs.core.nth.call(null,vec__80149,(0),null);var ncalls = cljs.core.nth.call(null,vec__80149,(1),null);if(((instant - udt_window_start) > window_ms))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else
{if((ncalls < ncalls_limit))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__80142,id,state))
);
})(),(0));
};
var G__80150 = function (var_args){
var p__80141 = null;if (arguments.length > 0) {
  p__80141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__80150__delegate.call(this,p__80141);};
G__80150.cljs$lang$maxFixedArity = 0;
G__80150.cljs$lang$applyTo = (function (arglist__80152){
var p__80141 = cljs.core.seq(arglist__80152);
return G__80150__delegate(p__80141);
});
G__80150.cljs$core$IFn$_invoke$arity$variadic = G__80150__delegate;
return G__80150;
})()
;
;})(state))
});
/**
* Wraps fn so that it returns {:result _ :backoff-ms _}.
*/
taoensso.encore.rate_limited = (function rate_limited(ncalls_limit,window_ms,f){var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);return ((function (rl){
return (function() { 
var G__80153__delegate = function (args){var temp__4124__auto__ = rl.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var backoff_ms = temp__4124__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__80153 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__80153__delegate.call(this,args);};
G__80153.cljs$lang$maxFixedArity = 0;
G__80153.cljs$lang$applyTo = (function (arglist__80154){
var args = cljs.core.seq(arglist__80154);
return G__80153__delegate(args);
});
G__80153.cljs$core$IFn$_invoke$arity$variadic = G__80153__delegate;
return G__80153;
})()
;
;})(rl))
});
taoensso.encore.log = (function log(x){if(cljs.core.truth_(typeof console != 'undefined'))
{console.log(x);
} else
{print(x);
}
return null;
});
/**
* @param {...*} var_args
*/
taoensso.encore.sayp = (function() { 
var sayp__delegate = function (xs){return alert(clojure.string.join.call(null," ",xs));
};
var sayp = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sayp__delegate.call(this,xs);};
sayp.cljs$lang$maxFixedArity = 0;
sayp.cljs$lang$applyTo = (function (arglist__80155){
var xs = cljs.core.seq(arglist__80155);
return sayp__delegate(xs);
});
sayp.cljs$core$IFn$_invoke$arity$variadic = sayp__delegate;
return sayp;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.sayf = (function() { 
var sayf__delegate = function (fmt,xs){return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var sayf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sayf__delegate.call(this,fmt,xs);};
sayf.cljs$lang$maxFixedArity = 1;
sayf.cljs$lang$applyTo = (function (arglist__80156){
var fmt = cljs.core.first(arglist__80156);
var xs = cljs.core.rest(arglist__80156);
return sayf__delegate(fmt,xs);
});
sayf.cljs$core$IFn$_invoke$arity$variadic = sayf__delegate;
return sayf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.logp = (function() { 
var logp__delegate = function (xs){return taoensso.encore.log.call(null,clojure.string.join.call(null," ",xs));
};
var logp = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return logp__delegate.call(this,xs);};
logp.cljs$lang$maxFixedArity = 0;
logp.cljs$lang$applyTo = (function (arglist__80157){
var xs = cljs.core.seq(arglist__80157);
return logp__delegate(xs);
});
logp.cljs$core$IFn$_invoke$arity$variadic = logp__delegate;
return logp;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.logf = (function() { 
var logf__delegate = function (fmt,xs){return taoensso.encore.log.call(null,cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var logf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return logf__delegate.call(this,fmt,xs);};
logf.cljs$lang$maxFixedArity = 1;
logf.cljs$lang$applyTo = (function (arglist__80158){
var fmt = cljs.core.first(arglist__80158);
var xs = cljs.core.rest(arglist__80158);
return logf__delegate(fmt,xs);
});
logf.cljs$core$IFn$_invoke$arity$variadic = logf__delegate;
return logf;
})()
;
/**
* Log only >= <this-level> calls
*/
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.logging_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){var current_level = cljs.core.deref.call(null,taoensso.encore.logging_level);if(cljs.core.truth_(valid_level_QMARK_.call(null,current_level)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null),new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)))))));
}
if(cljs.core.truth_(valid_level_QMARK_.call(null,level)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null),new cljs.core.Symbol(null,"level","level",-1363938217,null)))))));
}
return (scored_levels.call(null,level) >= scored_levels.call(null,current_level));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();
taoensso.encore.lls_QMARK_ = taoensso.encore.logging_level_sufficient_QMARK_;
/**
* @param {...*} var_args
*/
taoensso.encore.tracef = (function() { 
var tracef__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415))))
{return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else
{return null;
}
};
var tracef = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return tracef__delegate.call(this,fmt,xs);};
tracef.cljs$lang$maxFixedArity = 1;
tracef.cljs$lang$applyTo = (function (arglist__80159){
var fmt = cljs.core.first(arglist__80159);
var xs = cljs.core.rest(arglist__80159);
return tracef__delegate(fmt,xs);
});
tracef.cljs$core$IFn$_invoke$arity$variadic = tracef__delegate;
return tracef;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.debugf = (function() { 
var debugf__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596))))
{return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else
{return null;
}
};
var debugf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return debugf__delegate.call(this,fmt,xs);};
debugf.cljs$lang$maxFixedArity = 1;
debugf.cljs$lang$applyTo = (function (arglist__80160){
var fmt = cljs.core.first(arglist__80160);
var xs = cljs.core.rest(arglist__80160);
return debugf__delegate(fmt,xs);
});
debugf.cljs$core$IFn$_invoke$arity$variadic = debugf__delegate;
return debugf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.infof = (function() { 
var infof__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002))))
{return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else
{return null;
}
};
var infof = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return infof__delegate.call(this,fmt,xs);};
infof.cljs$lang$maxFixedArity = 1;
infof.cljs$lang$applyTo = (function (arglist__80161){
var fmt = cljs.core.first(arglist__80161);
var xs = cljs.core.rest(arglist__80161);
return infof__delegate(fmt,xs);
});
infof.cljs$core$IFn$_invoke$arity$variadic = infof__delegate;
return infof;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.warnf = (function() { 
var warnf__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552))))
{return ("WARN: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs)));
} else
{return null;
}
};
var warnf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return warnf__delegate.call(this,fmt,xs);};
warnf.cljs$lang$maxFixedArity = 1;
warnf.cljs$lang$applyTo = (function (arglist__80162){
var fmt = cljs.core.first(arglist__80162);
var xs = cljs.core.rest(arglist__80162);
return warnf__delegate(fmt,xs);
});
warnf.cljs$core$IFn$_invoke$arity$variadic = warnf__delegate;
return warnf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.errorf = (function() { 
var errorf__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032))))
{return ("ERROR: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs)));
} else
{return null;
}
};
var errorf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return errorf__delegate.call(this,fmt,xs);};
errorf.cljs$lang$maxFixedArity = 1;
errorf.cljs$lang$applyTo = (function (arglist__80163){
var fmt = cljs.core.first(arglist__80163);
var xs = cljs.core.rest(arglist__80163);
return errorf__delegate(fmt,xs);
});
errorf.cljs$core$IFn$_invoke$arity$variadic = errorf__delegate;
return errorf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.fatalf = (function() { 
var fatalf__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888))))
{return ("FATAL: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs)));
} else
{return null;
}
};
var fatalf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fatalf__delegate.call(this,fmt,xs);};
fatalf.cljs$lang$maxFixedArity = 1;
fatalf.cljs$lang$applyTo = (function (arglist__80164){
var fmt = cljs.core.first(arglist__80164);
var xs = cljs.core.rest(arglist__80164);
return fatalf__delegate(fmt,xs);
});
fatalf.cljs$core$IFn$_invoke$arity$variadic = fatalf__delegate;
return fatalf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.reportf = (function() { 
var reportf__delegate = function (fmt,xs){if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010))))
{return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else
{return null;
}
};
var reportf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reportf__delegate.call(this,fmt,xs);};
reportf.cljs$lang$maxFixedArity = 1;
reportf.cljs$lang$applyTo = (function (arglist__80165){
var fmt = cljs.core.first(arglist__80165);
var xs = cljs.core.rest(arglist__80165);
return reportf__delegate(fmt,xs);
});
reportf.cljs$core$IFn$_invoke$arity$variadic = reportf__delegate;
return reportf;
})()
;
/**
* Returns browser window's current location. Forgeable.
*/
taoensso.encore.get_window_location = (function get_window_location(){var loc_STAR_ = window.location;var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);return loc;
});
/**
* @param {...*} var_args
*/
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__80166){var vec__80168 = p__80166;var nattempt = cljs.core.nth.call(null,vec__80168,(0),null);return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__7993__auto__ = nattempt;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return (0);
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__80166 = null;if (arguments.length > 1) {
  p__80166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__80166);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__80169){
var nullary_f = cljs.core.first(arglist__80169);
var p__80166 = cljs.core.rest(arglist__80169);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__80166);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){return (new goog.net.XhrIoPool());
}),null));
/**
* Returns an immediately available XhrIo instance, or nil. The instance must be
* released back to pool manually. Use core.async to wait for an available
* instance, etc.
*/
taoensso.encore.get_pooled_xhr_BANG_ = (function get_pooled_xhr_BANG_(){var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();if((void 0 === result))
{return null;
} else
{return result;
}
});
/**
* [uri method get-or-post-params] -> [uri post-content]
*/
taoensso.encore.coerce_xhr_params = (function coerce_xhr_params(uri,method,params){if(((params == null)) || (cljs.core.map_QMARK_.call(null,params)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))))));
}
var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
})());var G__80171 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__80171) {
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_pstr)):uri),null], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
* Ref. https://developers.google.com/closure/library/docs/xhrio.
* 
* (ajax-lite "/my-post-route"
* {:method     :post
* :params     {:username "Rich Hickey"
* :type     "Awesome"}
* :headers    {"Foo" "Bar"}
* :resp-type  :text
* :timeout-ms 7000}
* (fn async-callback [resp-map]
* (let [{:keys [?status ?error ?content ?content-type]} resp-map]
* ;; ?status - 200, 404, ..., or nil on no response
* ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
* ;;                 :timeout <http-error-status> nil}
* (js/alert (str "Ajax response: " resp-map)))))
*/
taoensso.encore.ajax_lite = (function ajax_lite(uri,p__80175,callback){var map__80189 = p__80175;var map__80189__$1 = ((cljs.core.seq_QMARK_.call(null,map__80189))?cljs.core.apply.call(null,cljs.core.hash_map,map__80189):map__80189);var opts = map__80189__$1;var resp_type = cljs.core.get.call(null,map__80189__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));var timeout_ms = cljs.core.get.call(null,map__80189__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));var headers = cljs.core.get.call(null,map__80189__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));var params = cljs.core.get.call(null,map__80189__$1,new cljs.core.Keyword(null,"params","params",710516235));var method = cljs.core.get.call(null,map__80189__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));if(((timeout_ms == null)) || (taoensso.encore.nneg_int_QMARK_.call(null,timeout_ms)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))))));
}
var temp__4124__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var xhr = temp__4124__auto__;try{var timeout_ms__$1 = (function (){var or__7993__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return timeout_ms;
}
})();var method_STAR_ = (function (){var G__80192 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__80192) {
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
})();var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));var vec__80191 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);var uri_STAR_ = cljs.core.nth.call(null,vec__80191,(0),null);var post_content_STAR_ = cljs.core.nth.call(null,vec__80191,(1),null);var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));var G__80193_80203 = xhr;goog.events.listenOnce(G__80193_80203,goog.net.EventType.READY,((function (G__80193_80203,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__80191,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__80189,map__80189__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (_){return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__80193_80203,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__80191,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__80189,map__80189__$1,opts,resp_type,timeout_ms,headers,params,method))
);
goog.events.listenOnce(G__80193_80203,goog.net.EventType.COMPLETE,((function (G__80193_80203,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__80191,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__80189,map__80189__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function wrapped_callback(resp){var status = xhr.getStatus();var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),(cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__80198 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__80193_80203,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__80191,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__80189,map__80189__$1,opts,resp_type,timeout_ms,headers,params,method){
return (function (p1__80174_SHARP_,p2__80173_SHARP_){return taoensso.encore.str_contains_QMARK_.call(null,p2__80173_SHARP_,p1__80174_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__80193_80203,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__80191,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__80189,map__80189__$1,opts,resp_type,timeout_ms,headers,params,method))
;var expr__80199 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));if(pred__80198.call(null,"/edn",expr__80199))
{return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else
{if(pred__80198.call(null,"/json",expr__80199))
{return new cljs.core.Keyword(null,"json","json",1279968570);
} else
{if(pred__80198.call(null,"/xml",expr__80199))
{return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else
{if(pred__80198.call(null,"/html",expr__80199))
{return new cljs.core.Keyword(null,"text","text",-1790561697);
} else
{return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());var G__80201 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);switch (G__80201) {
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
case "xml":
return xhr.getResponseXml();

break;
case "json":
return xhr.getResponseJson();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp_type__$1))));

}
})():null),new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(_QMARK_http_status)?(((((200) <= _QMARK_http_status)) && ((_QMARK_http_status <= (299))))?null:_QMARK_http_status):cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)))], null);return callback.call(null,cb_arg);
});})(G__80193_80203,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__80191,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__80189,map__80189__$1,opts,resp_type,timeout_ms,headers,params,method))
);
G__80193_80203.setTimeoutInterval((function (){var or__7993__auto__ = timeout_ms__$1;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return (0);
}
})());
G__80193_80203.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
return xhr;
}catch (e80190){if((e80190 instanceof Error))
{var e = e80190;taoensso.encore.logf.call(null,"Ajax error: %s",e);
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
return null;
} else
{throw e80190;

}
}} else
{callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));
return null;
}
});

//# sourceMappingURL=encore.js.map