// Compiled by ClojureScript 0.0-2342
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__15361,args){var map__15363 = p__15361;var map__15363__$1 = ((cljs.core.seq_QMARK_.call(null,map__15363))?cljs.core.apply.call(null,cljs.core.hash_map,map__15363):map__15363);var debug = cljs.core.get.call(null,map__15363__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__15361,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__15361,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15364){
var p__15361 = cljs.core.first(arglist__15364);
var args = cljs.core.rest(arglist__15364);
return log__delegate(p__15361,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__15365){var map__15367 = p__15365;var map__15367__$1 = ((cljs.core.seq_QMARK_.call(null,map__15367))?cljs.core.apply.call(null,cljs.core.hash_map,map__15367):map__15367);var websocket_url = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__15368,callback){var map__15370 = p__15368;var map__15370__$1 = ((cljs.core.seq_QMARK_.call(null,map__15370))?cljs.core.apply.call(null,cljs.core.hash_map,map__15370):map__15370);var msg = map__15370__$1;var dependency_file = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7992__auto__ = dependency_file;if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__15370,map__15370__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__15370,map__15370__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__15371,p__15372){var map__15375 = p__15371;var map__15375__$1 = ((cljs.core.seq_QMARK_.call(null,map__15375))?cljs.core.apply.call(null,cljs.core.hash_map,map__15375):map__15375);var opts = map__15375__$1;var url_rewriter = cljs.core.get.call(null,map__15375__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__15376 = p__15372;var map__15376__$1 = ((cljs.core.seq_QMARK_.call(null,map__15376))?cljs.core.apply.call(null,cljs.core.hash_map,map__15376):map__15376);var d = map__15376__$1;var file = cljs.core.get.call(null,map__15376__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__15377,p__15378){var map__15420 = p__15377;var map__15420__$1 = ((cljs.core.seq_QMARK_.call(null,map__15420))?cljs.core.apply.call(null,cljs.core.hash_map,map__15420):map__15420);var opts = map__15420__$1;var on_jsload = cljs.core.get.call(null,map__15420__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__15420__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__15421 = p__15378;var map__15421__$1 = ((cljs.core.seq_QMARK_.call(null,map__15421))?cljs.core.apply.call(null,cljs.core.hash_map,map__15421):map__15421);var files = cljs.core.get.call(null,map__15421__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11147__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto__,map__15420,map__15420__$1,opts,on_jsload,before_jsload,map__15421,map__15421__$1,files){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto__,map__15420,map__15420__$1,opts,on_jsload,before_jsload,map__15421,map__15421__$1,files){
return (function (state_15444){var state_val_15445 = (state_15444[(1)]);if((state_val_15445 === (6)))
{var inst_15426 = (state_15444[(7)]);var inst_15435 = (state_15444[(2)]);var inst_15436 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15437 = [inst_15426];var inst_15438 = (new cljs.core.PersistentVector(null,1,(5),inst_15436,inst_15437,null));var inst_15439 = cljs.core.apply.call(null,on_jsload,inst_15438);var state_15444__$1 = (function (){var statearr_15446 = state_15444;(statearr_15446[(8)] = inst_15435);
return statearr_15446;
})();var statearr_15447_15461 = state_15444__$1;(statearr_15447_15461[(2)] = inst_15439);
(statearr_15447_15461[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15445 === (5)))
{var inst_15442 = (state_15444[(2)]);var state_15444__$1 = state_15444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15444__$1,inst_15442);
} else
{if((state_val_15445 === (4)))
{var state_15444__$1 = state_15444;var statearr_15448_15462 = state_15444__$1;(statearr_15448_15462[(2)] = null);
(statearr_15448_15462[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15445 === (3)))
{var inst_15426 = (state_15444[(7)]);var inst_15429 = console.debug("Figwheel: loaded these files");var inst_15430 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_15426);var inst_15431 = cljs.core.prn_str.call(null,inst_15430);var inst_15432 = console.log(inst_15431);var inst_15433 = cljs.core.async.timeout.call(null,(10));var state_15444__$1 = (function (){var statearr_15449 = state_15444;(statearr_15449[(9)] = inst_15429);
(statearr_15449[(10)] = inst_15432);
return statearr_15449;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15444__$1,(6),inst_15433);
} else
{if((state_val_15445 === (2)))
{var inst_15426 = (state_15444[(7)]);var inst_15426__$1 = (state_15444[(2)]);var inst_15427 = cljs.core.not_empty.call(null,inst_15426__$1);var state_15444__$1 = (function (){var statearr_15450 = state_15444;(statearr_15450[(7)] = inst_15426__$1);
return statearr_15450;
})();if(cljs.core.truth_(inst_15427))
{var statearr_15451_15463 = state_15444__$1;(statearr_15451_15463[(1)] = (3));
} else
{var statearr_15452_15464 = state_15444__$1;(statearr_15452_15464[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15445 === (1)))
{var inst_15422 = before_jsload.call(null,files);var inst_15423 = figwheel.client.add_request_urls.call(null,opts,files);var inst_15424 = figwheel.client.load_all_js_files.call(null,inst_15423);var state_15444__$1 = (function (){var statearr_15453 = state_15444;(statearr_15453[(11)] = inst_15422);
return statearr_15453;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15444__$1,(2),inst_15424);
} else
{return null;
}
}
}
}
}
}
});})(c__11147__auto__,map__15420,map__15420__$1,opts,on_jsload,before_jsload,map__15421,map__15421__$1,files))
;return ((function (switch__11082__auto__,c__11147__auto__,map__15420,map__15420__$1,opts,on_jsload,before_jsload,map__15421,map__15421__$1,files){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_15457 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15457[(0)] = state_machine__11083__auto__);
(statearr_15457[(1)] = (1));
return statearr_15457;
});
var state_machine__11083__auto____1 = (function (state_15444){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_15444);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e15458){if((e15458 instanceof Object))
{var ex__11086__auto__ = e15458;var statearr_15459_15465 = state_15444;(statearr_15459_15465[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15444);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15466 = state_15444;
state_15444 = G__15466;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_15444){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_15444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto__,map__15420,map__15420__$1,opts,on_jsload,before_jsload,map__15421,map__15421__$1,files))
})();var state__11149__auto__ = (function (){var statearr_15460 = f__11148__auto__.call(null);(statearr_15460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto__);
return statearr_15460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto__,map__15420,map__15420__$1,opts,on_jsload,before_jsload,map__15421,map__15421__$1,files))
);
return c__11147__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__15467,link_href){var map__15469 = p__15467;var map__15469__$1 = ((cljs.core.seq_QMARK_.call(null,map__15469))?cljs.core.apply.call(null,cljs.core.hash_map,map__15469):map__15469);var request_url = cljs.core.get.call(null,map__15469__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__15469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11147__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto__,parent){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto__,parent){
return (function (state_15490){var state_val_15491 = (state_15490[(1)]);if((state_val_15491 === (2)))
{var inst_15487 = (state_15490[(2)]);var inst_15488 = parent.removeChild(orig_link);var state_15490__$1 = (function (){var statearr_15492 = state_15490;(statearr_15492[(7)] = inst_15487);
return statearr_15492;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15490__$1,inst_15488);
} else
{if((state_val_15491 === (1)))
{var inst_15485 = cljs.core.async.timeout.call(null,(200));var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15490__$1,(2),inst_15485);
} else
{return null;
}
}
});})(c__11147__auto__,parent))
;return ((function (switch__11082__auto__,c__11147__auto__,parent){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_15496 = [null,null,null,null,null,null,null,null];(statearr_15496[(0)] = state_machine__11083__auto__);
(statearr_15496[(1)] = (1));
return statearr_15496;
});
var state_machine__11083__auto____1 = (function (state_15490){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_15490);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e15497){if((e15497 instanceof Object))
{var ex__11086__auto__ = e15497;var statearr_15498_15500 = state_15490;(statearr_15498_15500[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15497;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15501 = state_15490;
state_15490 = G__15501;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_15490){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_15490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto__,parent))
})();var state__11149__auto__ = (function (){var statearr_15499 = f__11148__auto__.call(null);(statearr_15499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto__);
return statearr_15499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto__,parent))
);
return c__11147__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__15502){var map__15504 = p__15502;var map__15504__$1 = ((cljs.core.seq_QMARK_.call(null,map__15504))?cljs.core.apply.call(null,cljs.core.hash_map,map__15504):map__15504);var f_data = map__15504__$1;var request_url = cljs.core.get.call(null,map__15504__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__15504__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__15505,files_msg){var map__15527 = p__15505;var map__15527__$1 = ((cljs.core.seq_QMARK_.call(null,map__15527))?cljs.core.apply.call(null,cljs.core.hash_map,map__15527):map__15527);var opts = map__15527__$1;var on_cssload = cljs.core.get.call(null,map__15527__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__15528_15548 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__15529_15549 = null;var count__15530_15550 = (0);var i__15531_15551 = (0);while(true){
if((i__15531_15551 < count__15530_15550))
{var f_15552 = cljs.core._nth.call(null,chunk__15529_15549,i__15531_15551);figwheel.client.reload_css_file.call(null,f_15552);
{
var G__15553 = seq__15528_15548;
var G__15554 = chunk__15529_15549;
var G__15555 = count__15530_15550;
var G__15556 = (i__15531_15551 + (1));
seq__15528_15548 = G__15553;
chunk__15529_15549 = G__15554;
count__15530_15550 = G__15555;
i__15531_15551 = G__15556;
continue;
}
} else
{var temp__4126__auto___15557 = cljs.core.seq.call(null,seq__15528_15548);if(temp__4126__auto___15557)
{var seq__15528_15558__$1 = temp__4126__auto___15557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15528_15558__$1))
{var c__8761__auto___15559 = cljs.core.chunk_first.call(null,seq__15528_15558__$1);{
var G__15560 = cljs.core.chunk_rest.call(null,seq__15528_15558__$1);
var G__15561 = c__8761__auto___15559;
var G__15562 = cljs.core.count.call(null,c__8761__auto___15559);
var G__15563 = (0);
seq__15528_15548 = G__15560;
chunk__15529_15549 = G__15561;
count__15530_15550 = G__15562;
i__15531_15551 = G__15563;
continue;
}
} else
{var f_15564 = cljs.core.first.call(null,seq__15528_15558__$1);figwheel.client.reload_css_file.call(null,f_15564);
{
var G__15565 = cljs.core.next.call(null,seq__15528_15558__$1);
var G__15566 = null;
var G__15567 = (0);
var G__15568 = (0);
seq__15528_15548 = G__15565;
chunk__15529_15549 = G__15566;
count__15530_15550 = G__15567;
i__15531_15551 = G__15568;
continue;
}
}
} else
{}
}
break;
}
var c__11147__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11147__auto__,map__15527,map__15527__$1,opts,on_cssload){
return (function (){var f__11148__auto__ = (function (){var switch__11082__auto__ = ((function (c__11147__auto__,map__15527,map__15527__$1,opts,on_cssload){
return (function (state_15538){var state_val_15539 = (state_15538[(1)]);if((state_val_15539 === (2)))
{var inst_15534 = (state_15538[(2)]);var inst_15535 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_15536 = on_cssload.call(null,inst_15535);var state_15538__$1 = (function (){var statearr_15540 = state_15538;(statearr_15540[(7)] = inst_15534);
return statearr_15540;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15538__$1,inst_15536);
} else
{if((state_val_15539 === (1)))
{var inst_15532 = cljs.core.async.timeout.call(null,(100));var state_15538__$1 = state_15538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15538__$1,(2),inst_15532);
} else
{return null;
}
}
});})(c__11147__auto__,map__15527,map__15527__$1,opts,on_cssload))
;return ((function (switch__11082__auto__,c__11147__auto__,map__15527,map__15527__$1,opts,on_cssload){
return (function() {
var state_machine__11083__auto__ = null;
var state_machine__11083__auto____0 = (function (){var statearr_15544 = [null,null,null,null,null,null,null,null];(statearr_15544[(0)] = state_machine__11083__auto__);
(statearr_15544[(1)] = (1));
return statearr_15544;
});
var state_machine__11083__auto____1 = (function (state_15538){while(true){
var ret_value__11084__auto__ = (function (){try{while(true){
var result__11085__auto__ = switch__11082__auto__.call(null,state_15538);if(cljs.core.keyword_identical_QMARK_.call(null,result__11085__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11085__auto__;
}
break;
}
}catch (e15545){if((e15545 instanceof Object))
{var ex__11086__auto__ = e15545;var statearr_15546_15569 = state_15538;(statearr_15546_15569[(5)] = ex__11086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15545;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11084__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15570 = state_15538;
state_15538 = G__15570;
continue;
}
} else
{return ret_value__11084__auto__;
}
break;
}
});
state_machine__11083__auto__ = function(state_15538){
switch(arguments.length){
case 0:
return state_machine__11083__auto____0.call(this);
case 1:
return state_machine__11083__auto____1.call(this,state_15538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11083__auto____0;
state_machine__11083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11083__auto____1;
return state_machine__11083__auto__;
})()
;})(switch__11082__auto__,c__11147__auto__,map__15527,map__15527__$1,opts,on_cssload))
})();var state__11149__auto__ = (function (){var statearr_15547 = f__11148__auto__.call(null);(statearr_15547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11147__auto__);
return statearr_15547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11149__auto__);
});})(c__11147__auto__,map__15527,map__15527__$1,opts,on_cssload))
);
return c__11147__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__15571){var map__15576 = p__15571;var map__15576__$1 = ((cljs.core.seq_QMARK_.call(null,map__15576))?cljs.core.apply.call(null,cljs.core.hash_map,map__15576):map__15576);var opts = map__15576__$1;var on_compile_fail = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__15576__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__15577 = cljs.core._EQ_;var expr__15578 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__15577.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__15578)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15577.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__15578)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__15577.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__15578)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__15576,map__15576__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15583 = {"detail":url};return obj15583;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__15584){var map__15586 = p__15584;var map__15586__$1 = ((cljs.core.seq_QMARK_.call(null,map__15586))?cljs.core.apply.call(null,cljs.core.hash_map,map__15586):map__15586);var class$ = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__15587){var map__15593 = p__15587;var map__15593__$1 = ((cljs.core.seq_QMARK_.call(null,map__15593))?cljs.core.apply.call(null,cljs.core.hash_map,map__15593):map__15593);var ed = map__15593__$1;var exception_data = cljs.core.get.call(null,map__15593__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__15593__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__15594_15598 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__15595_15599 = null;var count__15596_15600 = (0);var i__15597_15601 = (0);while(true){
if((i__15597_15601 < count__15596_15600))
{var msg_15602 = cljs.core._nth.call(null,chunk__15595_15599,i__15597_15601);console.log(msg_15602);
{
var G__15603 = seq__15594_15598;
var G__15604 = chunk__15595_15599;
var G__15605 = count__15596_15600;
var G__15606 = (i__15597_15601 + (1));
seq__15594_15598 = G__15603;
chunk__15595_15599 = G__15604;
count__15596_15600 = G__15605;
i__15597_15601 = G__15606;
continue;
}
} else
{var temp__4126__auto___15607 = cljs.core.seq.call(null,seq__15594_15598);if(temp__4126__auto___15607)
{var seq__15594_15608__$1 = temp__4126__auto___15607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15594_15608__$1))
{var c__8761__auto___15609 = cljs.core.chunk_first.call(null,seq__15594_15608__$1);{
var G__15610 = cljs.core.chunk_rest.call(null,seq__15594_15608__$1);
var G__15611 = c__8761__auto___15609;
var G__15612 = cljs.core.count.call(null,c__8761__auto___15609);
var G__15613 = (0);
seq__15594_15598 = G__15610;
chunk__15595_15599 = G__15611;
count__15596_15600 = G__15612;
i__15597_15601 = G__15613;
continue;
}
} else
{var msg_15614 = cljs.core.first.call(null,seq__15594_15608__$1);console.log(msg_15614);
{
var G__15615 = cljs.core.next.call(null,seq__15594_15608__$1);
var G__15616 = null;
var G__15617 = (0);
var G__15618 = (0);
seq__15594_15598 = G__15615;
chunk__15595_15599 = G__15616;
count__15596_15600 = G__15617;
i__15597_15601 = G__15618;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7992__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__15619){var map__15621 = p__15619;var map__15621__$1 = ((cljs.core.seq_QMARK_.call(null,map__15621))?cljs.core.apply.call(null,cljs.core.hash_map,map__15621):map__15621);var opts = map__15621__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__15619 = null;if (arguments.length > 0) {
  p__15619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__15619);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__15622){
var p__15619 = cljs.core.seq(arglist__15622);
return watch_and_reload__delegate(p__15619);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map