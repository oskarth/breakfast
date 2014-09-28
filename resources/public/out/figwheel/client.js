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
var log__delegate = function (p__79413,args){var map__79415 = p__79413;var map__79415__$1 = ((cljs.core.seq_QMARK_.call(null,map__79415))?cljs.core.apply.call(null,cljs.core.hash_map,map__79415):map__79415);var debug = cljs.core.get.call(null,map__79415__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__79413,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__79413,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__79416){
var p__79413 = cljs.core.first(arglist__79416);
var args = cljs.core.rest(arglist__79416);
return log__delegate(p__79413,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__79417){var map__79419 = p__79417;var map__79419__$1 = ((cljs.core.seq_QMARK_.call(null,map__79419))?cljs.core.apply.call(null,cljs.core.hash_map,map__79419):map__79419);var websocket_url = cljs.core.get.call(null,map__79419__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__79420,callback){var map__79422 = p__79420;var map__79422__$1 = ((cljs.core.seq_QMARK_.call(null,map__79422))?cljs.core.apply.call(null,cljs.core.hash_map,map__79422):map__79422);var msg = map__79422__$1;var dependency_file = cljs.core.get.call(null,map__79422__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__79422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__79422__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7993__auto__ = dependency_file;if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__79422,map__79422__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__79422,map__79422__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__79423,p__79424){var map__79427 = p__79423;var map__79427__$1 = ((cljs.core.seq_QMARK_.call(null,map__79427))?cljs.core.apply.call(null,cljs.core.hash_map,map__79427):map__79427);var opts = map__79427__$1;var url_rewriter = cljs.core.get.call(null,map__79427__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__79428 = p__79424;var map__79428__$1 = ((cljs.core.seq_QMARK_.call(null,map__79428))?cljs.core.apply.call(null,cljs.core.hash_map,map__79428):map__79428);var d = map__79428__$1;var file = cljs.core.get.call(null,map__79428__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__79429,p__79430){var map__79472 = p__79429;var map__79472__$1 = ((cljs.core.seq_QMARK_.call(null,map__79472))?cljs.core.apply.call(null,cljs.core.hash_map,map__79472):map__79472);var opts = map__79472__$1;var on_jsload = cljs.core.get.call(null,map__79472__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__79472__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__79473 = p__79430;var map__79473__$1 = ((cljs.core.seq_QMARK_.call(null,map__79473))?cljs.core.apply.call(null,cljs.core.hash_map,map__79473):map__79473);var files = cljs.core.get.call(null,map__79473__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__,map__79472,map__79472__$1,opts,on_jsload,before_jsload,map__79473,map__79473__$1,files){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__,map__79472,map__79472__$1,opts,on_jsload,before_jsload,map__79473,map__79473__$1,files){
return (function (state_79496){var state_val_79497 = (state_79496[(1)]);if((state_val_79497 === (6)))
{var inst_79478 = (state_79496[(7)]);var inst_79487 = (state_79496[(2)]);var inst_79488 = cljs.core.PersistentVector.EMPTY_NODE;var inst_79489 = [inst_79478];var inst_79490 = (new cljs.core.PersistentVector(null,1,(5),inst_79488,inst_79489,null));var inst_79491 = cljs.core.apply.call(null,on_jsload,inst_79490);var state_79496__$1 = (function (){var statearr_79498 = state_79496;(statearr_79498[(8)] = inst_79487);
return statearr_79498;
})();var statearr_79499_79513 = state_79496__$1;(statearr_79499_79513[(2)] = inst_79491);
(statearr_79499_79513[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79497 === (5)))
{var inst_79494 = (state_79496[(2)]);var state_79496__$1 = state_79496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79496__$1,inst_79494);
} else
{if((state_val_79497 === (4)))
{var state_79496__$1 = state_79496;var statearr_79500_79514 = state_79496__$1;(statearr_79500_79514[(2)] = null);
(statearr_79500_79514[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79497 === (3)))
{var inst_79478 = (state_79496[(7)]);var inst_79481 = console.debug("Figwheel: loaded these files");var inst_79482 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_79478);var inst_79483 = cljs.core.prn_str.call(null,inst_79482);var inst_79484 = console.log(inst_79483);var inst_79485 = cljs.core.async.timeout.call(null,(10));var state_79496__$1 = (function (){var statearr_79501 = state_79496;(statearr_79501[(9)] = inst_79481);
(statearr_79501[(10)] = inst_79484);
return statearr_79501;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79496__$1,(6),inst_79485);
} else
{if((state_val_79497 === (2)))
{var inst_79478 = (state_79496[(7)]);var inst_79478__$1 = (state_79496[(2)]);var inst_79479 = cljs.core.not_empty.call(null,inst_79478__$1);var state_79496__$1 = (function (){var statearr_79502 = state_79496;(statearr_79502[(7)] = inst_79478__$1);
return statearr_79502;
})();if(cljs.core.truth_(inst_79479))
{var statearr_79503_79515 = state_79496__$1;(statearr_79503_79515[(1)] = (3));
} else
{var statearr_79504_79516 = state_79496__$1;(statearr_79504_79516[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79497 === (1)))
{var inst_79474 = before_jsload.call(null,files);var inst_79475 = figwheel.client.add_request_urls.call(null,opts,files);var inst_79476 = figwheel.client.load_all_js_files.call(null,inst_79475);var state_79496__$1 = (function (){var statearr_79505 = state_79496;(statearr_79505[(11)] = inst_79474);
return statearr_79505;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79496__$1,(2),inst_79476);
} else
{return null;
}
}
}
}
}
}
});})(c__11735__auto__,map__79472,map__79472__$1,opts,on_jsload,before_jsload,map__79473,map__79473__$1,files))
;return ((function (switch__11720__auto__,c__11735__auto__,map__79472,map__79472__$1,opts,on_jsload,before_jsload,map__79473,map__79473__$1,files){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_79509 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_79509[(0)] = state_machine__11721__auto__);
(statearr_79509[(1)] = (1));
return statearr_79509;
});
var state_machine__11721__auto____1 = (function (state_79496){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_79496);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e79510){if((e79510 instanceof Object))
{var ex__11724__auto__ = e79510;var statearr_79511_79517 = state_79496;(statearr_79511_79517[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79510;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79518 = state_79496;
state_79496 = G__79518;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_79496){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_79496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__,map__79472,map__79472__$1,opts,on_jsload,before_jsload,map__79473,map__79473__$1,files))
})();var state__11737__auto__ = (function (){var statearr_79512 = f__11736__auto__.call(null);(statearr_79512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_79512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__,map__79472,map__79472__$1,opts,on_jsload,before_jsload,map__79473,map__79473__$1,files))
);
return c__11735__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__79519,link_href){var map__79521 = p__79519;var map__79521__$1 = ((cljs.core.seq_QMARK_.call(null,map__79521))?cljs.core.apply.call(null,cljs.core.hash_map,map__79521):map__79521);var request_url = cljs.core.get.call(null,map__79521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__79521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__,parent){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__,parent){
return (function (state_79542){var state_val_79543 = (state_79542[(1)]);if((state_val_79543 === (2)))
{var inst_79539 = (state_79542[(2)]);var inst_79540 = parent.removeChild(orig_link);var state_79542__$1 = (function (){var statearr_79544 = state_79542;(statearr_79544[(7)] = inst_79539);
return statearr_79544;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79542__$1,inst_79540);
} else
{if((state_val_79543 === (1)))
{var inst_79537 = cljs.core.async.timeout.call(null,(200));var state_79542__$1 = state_79542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79542__$1,(2),inst_79537);
} else
{return null;
}
}
});})(c__11735__auto__,parent))
;return ((function (switch__11720__auto__,c__11735__auto__,parent){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_79548 = [null,null,null,null,null,null,null,null];(statearr_79548[(0)] = state_machine__11721__auto__);
(statearr_79548[(1)] = (1));
return statearr_79548;
});
var state_machine__11721__auto____1 = (function (state_79542){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_79542);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e79549){if((e79549 instanceof Object))
{var ex__11724__auto__ = e79549;var statearr_79550_79552 = state_79542;(statearr_79550_79552[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79549;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79553 = state_79542;
state_79542 = G__79553;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_79542){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_79542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__,parent))
})();var state__11737__auto__ = (function (){var statearr_79551 = f__11736__auto__.call(null);(statearr_79551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_79551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__,parent))
);
return c__11735__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__79554){var map__79556 = p__79554;var map__79556__$1 = ((cljs.core.seq_QMARK_.call(null,map__79556))?cljs.core.apply.call(null,cljs.core.hash_map,map__79556):map__79556);var f_data = map__79556__$1;var request_url = cljs.core.get.call(null,map__79556__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__79556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__79557,files_msg){var map__79579 = p__79557;var map__79579__$1 = ((cljs.core.seq_QMARK_.call(null,map__79579))?cljs.core.apply.call(null,cljs.core.hash_map,map__79579):map__79579);var opts = map__79579__$1;var on_cssload = cljs.core.get.call(null,map__79579__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__79580_79600 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__79581_79601 = null;var count__79582_79602 = (0);var i__79583_79603 = (0);while(true){
if((i__79583_79603 < count__79582_79602))
{var f_79604 = cljs.core._nth.call(null,chunk__79581_79601,i__79583_79603);figwheel.client.reload_css_file.call(null,f_79604);
{
var G__79605 = seq__79580_79600;
var G__79606 = chunk__79581_79601;
var G__79607 = count__79582_79602;
var G__79608 = (i__79583_79603 + (1));
seq__79580_79600 = G__79605;
chunk__79581_79601 = G__79606;
count__79582_79602 = G__79607;
i__79583_79603 = G__79608;
continue;
}
} else
{var temp__4126__auto___79609 = cljs.core.seq.call(null,seq__79580_79600);if(temp__4126__auto___79609)
{var seq__79580_79610__$1 = temp__4126__auto___79609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79580_79610__$1))
{var c__8762__auto___79611 = cljs.core.chunk_first.call(null,seq__79580_79610__$1);{
var G__79612 = cljs.core.chunk_rest.call(null,seq__79580_79610__$1);
var G__79613 = c__8762__auto___79611;
var G__79614 = cljs.core.count.call(null,c__8762__auto___79611);
var G__79615 = (0);
seq__79580_79600 = G__79612;
chunk__79581_79601 = G__79613;
count__79582_79602 = G__79614;
i__79583_79603 = G__79615;
continue;
}
} else
{var f_79616 = cljs.core.first.call(null,seq__79580_79610__$1);figwheel.client.reload_css_file.call(null,f_79616);
{
var G__79617 = cljs.core.next.call(null,seq__79580_79610__$1);
var G__79618 = null;
var G__79619 = (0);
var G__79620 = (0);
seq__79580_79600 = G__79617;
chunk__79581_79601 = G__79618;
count__79582_79602 = G__79619;
i__79583_79603 = G__79620;
continue;
}
}
} else
{}
}
break;
}
var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__,map__79579,map__79579__$1,opts,on_cssload){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__,map__79579,map__79579__$1,opts,on_cssload){
return (function (state_79590){var state_val_79591 = (state_79590[(1)]);if((state_val_79591 === (2)))
{var inst_79586 = (state_79590[(2)]);var inst_79587 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_79588 = on_cssload.call(null,inst_79587);var state_79590__$1 = (function (){var statearr_79592 = state_79590;(statearr_79592[(7)] = inst_79586);
return statearr_79592;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79590__$1,inst_79588);
} else
{if((state_val_79591 === (1)))
{var inst_79584 = cljs.core.async.timeout.call(null,(100));var state_79590__$1 = state_79590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79590__$1,(2),inst_79584);
} else
{return null;
}
}
});})(c__11735__auto__,map__79579,map__79579__$1,opts,on_cssload))
;return ((function (switch__11720__auto__,c__11735__auto__,map__79579,map__79579__$1,opts,on_cssload){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_79596 = [null,null,null,null,null,null,null,null];(statearr_79596[(0)] = state_machine__11721__auto__);
(statearr_79596[(1)] = (1));
return statearr_79596;
});
var state_machine__11721__auto____1 = (function (state_79590){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_79590);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e79597){if((e79597 instanceof Object))
{var ex__11724__auto__ = e79597;var statearr_79598_79621 = state_79590;(statearr_79598_79621[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79597;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79622 = state_79590;
state_79590 = G__79622;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_79590){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_79590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__,map__79579,map__79579__$1,opts,on_cssload))
})();var state__11737__auto__ = (function (){var statearr_79599 = f__11736__auto__.call(null);(statearr_79599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_79599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__,map__79579,map__79579__$1,opts,on_cssload))
);
return c__11735__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__79623){var map__79628 = p__79623;var map__79628__$1 = ((cljs.core.seq_QMARK_.call(null,map__79628))?cljs.core.apply.call(null,cljs.core.hash_map,map__79628):map__79628);var opts = map__79628__$1;var on_compile_fail = cljs.core.get.call(null,map__79628__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__79628__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__79628__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__79628__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__79629 = cljs.core._EQ_;var expr__79630 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__79629.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__79630)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__79629.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__79630)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__79629.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__79630)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__79628,map__79628__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj79635 = {"detail":url};return obj79635;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__79636){var map__79638 = p__79636;var map__79638__$1 = ((cljs.core.seq_QMARK_.call(null,map__79638))?cljs.core.apply.call(null,cljs.core.hash_map,map__79638):map__79638);var class$ = cljs.core.get.call(null,map__79638__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__79638__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__79639){var map__79645 = p__79639;var map__79645__$1 = ((cljs.core.seq_QMARK_.call(null,map__79645))?cljs.core.apply.call(null,cljs.core.hash_map,map__79645):map__79645);var ed = map__79645__$1;var exception_data = cljs.core.get.call(null,map__79645__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__79645__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__79646_79650 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__79647_79651 = null;var count__79648_79652 = (0);var i__79649_79653 = (0);while(true){
if((i__79649_79653 < count__79648_79652))
{var msg_79654 = cljs.core._nth.call(null,chunk__79647_79651,i__79649_79653);console.log(msg_79654);
{
var G__79655 = seq__79646_79650;
var G__79656 = chunk__79647_79651;
var G__79657 = count__79648_79652;
var G__79658 = (i__79649_79653 + (1));
seq__79646_79650 = G__79655;
chunk__79647_79651 = G__79656;
count__79648_79652 = G__79657;
i__79649_79653 = G__79658;
continue;
}
} else
{var temp__4126__auto___79659 = cljs.core.seq.call(null,seq__79646_79650);if(temp__4126__auto___79659)
{var seq__79646_79660__$1 = temp__4126__auto___79659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79646_79660__$1))
{var c__8762__auto___79661 = cljs.core.chunk_first.call(null,seq__79646_79660__$1);{
var G__79662 = cljs.core.chunk_rest.call(null,seq__79646_79660__$1);
var G__79663 = c__8762__auto___79661;
var G__79664 = cljs.core.count.call(null,c__8762__auto___79661);
var G__79665 = (0);
seq__79646_79650 = G__79662;
chunk__79647_79651 = G__79663;
count__79648_79652 = G__79664;
i__79649_79653 = G__79665;
continue;
}
} else
{var msg_79666 = cljs.core.first.call(null,seq__79646_79660__$1);console.log(msg_79666);
{
var G__79667 = cljs.core.next.call(null,seq__79646_79660__$1);
var G__79668 = null;
var G__79669 = (0);
var G__79670 = (0);
seq__79646_79650 = G__79667;
chunk__79647_79651 = G__79668;
count__79648_79652 = G__79669;
i__79649_79653 = G__79670;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7993__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7993__auto__))
{return or__7993__auto__;
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
var watch_and_reload__delegate = function (p__79671){var map__79673 = p__79671;var map__79673__$1 = ((cljs.core.seq_QMARK_.call(null,map__79673))?cljs.core.apply.call(null,cljs.core.hash_map,map__79673):map__79673);var opts = map__79673__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__79671 = null;if (arguments.length > 0) {
  p__79671 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__79671);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__79674){
var p__79671 = cljs.core.seq(arglist__79674);
return watch_and_reload__delegate(p__79671);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map