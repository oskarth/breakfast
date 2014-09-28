// Compiled by ClojureScript 0.0-2342
goog.provide('breakfast.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('weasel.repl');
goog.require('om.dom');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('figwheel.client');
goog.require('taoensso.encore');
goog.require('om.core');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('cljs.reader');
goog.require('cljs.core.match');
goog.require('cljs.reader');
taoensso.encore.logf.call(null,"ClojureScript appears to have loaded correctly.");
breakfast.core.log = (function log(s,x){return console.log(s,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
});
var map__74399_74400 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__74399_74401__$1 = ((cljs.core.seq_QMARK_.call(null,map__74399_74400))?cljs.core.apply.call(null,cljs.core.hash_map,map__74399_74400):map__74399_74400);var state_74402 = cljs.core.get.call(null,map__74399_74401__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_74403 = cljs.core.get.call(null,map__74399_74401__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_74404 = cljs.core.get.call(null,map__74399_74401__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_74405 = cljs.core.get.call(null,map__74399_74401__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));breakfast.core.chsk = chsk_74405;
breakfast.core.ch_chsk = ch_recv_74404;
breakfast.core.chsk_send_BANG_ = send_fn_74403;
breakfast.core.chsk_state = state_74402;
if(typeof breakfast.core.app_state !== 'undefined')
{} else
{breakfast.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Breakfast!",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["message"], null),new cljs.core.Keyword(null,"input-box","input-box",-2063413289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"foobar"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),null], null));
}
breakfast.core.handle_events = (function handle_events(app){var c__11735__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto__){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto__){
return (function (state_74507){var state_val_74508 = (state_74507[(1)]);if((state_val_74508 === (7)))
{var inst_74480 = (state_74507[(7)]);var inst_74474 = (state_74507[(8)]);var inst_74473 = (state_74507[(2)]);var inst_74474__$1 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_74473);var inst_74475 = cljs.core.second.call(null,inst_74474__$1);var inst_74476 = cljs.core.second.call(null,inst_74475);var inst_74480__$1 = cljs.core.first.call(null,inst_74474__$1);var inst_74481 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),inst_74480__$1);var state_74507__$1 = (function (){var statearr_74509 = state_74507;(statearr_74509[(7)] = inst_74480__$1);
(statearr_74509[(9)] = inst_74476);
(statearr_74509[(8)] = inst_74474__$1);
return statearr_74509;
})();if(inst_74481)
{var statearr_74510_74533 = state_74507__$1;(statearr_74510_74533[(1)] = (8));
} else
{var statearr_74511_74534 = state_74507__$1;(statearr_74511_74534[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (1)))
{var state_74507__$1 = state_74507;var statearr_74512_74535 = state_74507__$1;(statearr_74512_74535[(2)] = null);
(statearr_74512_74535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (4)))
{var state_74507__$1 = state_74507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74507__$1,(7),breakfast.core.ch_chsk);
} else
{if((state_val_74508 === (13)))
{var inst_74497 = (state_74507[(2)]);var state_74507__$1 = state_74507;var statearr_74513_74536 = state_74507__$1;(statearr_74513_74536[(2)] = inst_74497);
(statearr_74513_74536[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (6)))
{var inst_74503 = (state_74507[(2)]);var state_74507__$1 = state_74507;var statearr_74514_74537 = state_74507__$1;(statearr_74514_74537[(2)] = inst_74503);
(statearr_74514_74537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (3)))
{var inst_74505 = (state_74507[(2)]);var state_74507__$1 = state_74507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74507__$1,inst_74505);
} else
{if((state_val_74508 === (12)))
{var inst_74480 = (state_74507[(7)]);var inst_74493 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74480));var inst_74494 = (new Error(inst_74493));var inst_74495 = (function(){throw inst_74494})();var state_74507__$1 = state_74507;var statearr_74515_74538 = state_74507__$1;(statearr_74515_74538[(2)] = inst_74495);
(statearr_74515_74538[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (2)))
{var state_74507__$1 = state_74507;var statearr_74516_74539 = state_74507__$1;(statearr_74516_74539[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (11)))
{var inst_74480 = (state_74507[(7)]);var inst_74476 = (state_74507[(9)]);var inst_74474 = (state_74507[(8)]);var inst_74487 = (function (){var expr__74478 = inst_74480;var pred__74477 = cljs.core.keyword_identical_QMARK_;var msg = inst_74476;var ev = inst_74474;return ((function (expr__74478,pred__74477,msg,ev,inst_74480,inst_74476,inst_74474,state_val_74508,c__11735__auto__){
return (function (p1__74406_SHARP_){return cljs.core.conj.call(null,p1__74406_SHARP_,msg);
});
;})(expr__74478,pred__74477,msg,ev,inst_74480,inst_74476,inst_74474,state_val_74508,c__11735__auto__))
})();var inst_74488 = om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"messages","messages",345434482),inst_74487);var inst_74489 = cljs.core.pr_str.call(null,inst_74476);var inst_74490 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74489));var inst_74491 = cljs.core.prn.call(null,"msg: ",inst_74490);var state_74507__$1 = (function (){var statearr_74518 = state_74507;(statearr_74518[(10)] = inst_74488);
return statearr_74518;
})();var statearr_74519_74540 = state_74507__$1;(statearr_74519_74540[(2)] = inst_74491);
(statearr_74519_74540[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (9)))
{var inst_74480 = (state_74507[(7)]);var inst_74485 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_74480);var state_74507__$1 = state_74507;if(inst_74485)
{var statearr_74520_74541 = state_74507__$1;(statearr_74520_74541[(1)] = (11));
} else
{var statearr_74521_74542 = state_74507__$1;(statearr_74521_74542[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (5)))
{var state_74507__$1 = state_74507;var statearr_74522_74543 = state_74507__$1;(statearr_74522_74543[(2)] = null);
(statearr_74522_74543[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (10)))
{var inst_74499 = (state_74507[(2)]);var state_74507__$1 = (function (){var statearr_74523 = state_74507;(statearr_74523[(11)] = inst_74499);
return statearr_74523;
})();var statearr_74524_74544 = state_74507__$1;(statearr_74524_74544[(2)] = null);
(statearr_74524_74544[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74508 === (8)))
{var inst_74483 = cljs.core.prn.call(null,"sup, checking state");var state_74507__$1 = state_74507;var statearr_74525_74545 = state_74507__$1;(statearr_74525_74545[(2)] = inst_74483);
(statearr_74525_74545[(1)] = (10));
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
var state_machine__11721__auto____0 = (function (){var statearr_74529 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_74529[(0)] = state_machine__11721__auto__);
(statearr_74529[(1)] = (1));
return statearr_74529;
});
var state_machine__11721__auto____1 = (function (state_74507){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_74507);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e74530){if((e74530 instanceof Object))
{var ex__11724__auto__ = e74530;var statearr_74531_74546 = state_74507;(statearr_74531_74546[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e74530;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__74547 = state_74507;
state_74507 = G__74547;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_74507){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_74507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto__))
})();var state__11737__auto__ = (function (){var statearr_74532 = f__11736__auto__.call(null);(statearr_74532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto__);
return statearr_74532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto__))
);
return c__11735__auto__;
});
breakfast.core.input_box_input = (function input_box_input(owner,chan){return React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217),e.target.value);
}), "onKeyPress": (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{breakfast.core.log.call(null,"foobar",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)));
var value = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,chan,value);
} else
{return null;
}
} else
{return null;
}
}), "type": "text"}));
});
breakfast.core.input_box_button = (function input_box_button(owner,chan){return React.DOM.button({"onClick": (function (e){var value = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"value","value",305978217),value], null));
} else
{return null;
}
}), "type": "button"},"Send");
});
breakfast.core.input_view = (function input_view(cursor,owner){if(typeof breakfast.core.t74551 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t74551 = (function (owner,cursor,input_view,meta74552){
this.owner = owner;
this.cursor = cursor;
this.input_view = input_view;
this.meta74552 = meta74552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t74551.cljs$lang$type = true;
breakfast.core.t74551.cljs$lang$ctorStr = "breakfast.core/t74551";
breakfast.core.t74551.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"breakfast.core/t74551");
});
breakfast.core.t74551.prototype.om$core$IRender$ = true;
breakfast.core.t74551.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var event_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null));return React.DOM.div(null,breakfast.core.input_box_input.call(null,self__.owner,event_chan),breakfast.core.input_box_button.call(null,self__.owner,event_chan));
});
breakfast.core.t74551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74553){var self__ = this;
var _74553__$1 = this;return self__.meta74552;
});
breakfast.core.t74551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74553,meta74552__$1){var self__ = this;
var _74553__$1 = this;return (new breakfast.core.t74551(self__.owner,self__.cursor,self__.input_view,meta74552__$1));
});
breakfast.core.__GT_t74551 = (function __GT_t74551(owner__$1,cursor__$1,input_view__$1,meta74552){return (new breakfast.core.t74551(owner__$1,cursor__$1,input_view__$1,meta74552));
});
}
return (new breakfast.core.t74551(owner,cursor,input_view,null));
});
breakfast.core.login_BANG_ = (function login_BANG_(uid){taoensso.sente.ajax_call.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),uid], null)], null),(function (ajax_resp){return console.log("Ajax login response: %s",ajax_resp);
}));
return taoensso.sente.chsk_reconnect_BANG_.call(null,breakfast.core.chsk);
});
breakfast.core.post_message_BANG_ = (function post_message_BANG_(uid,msg){breakfast.core.log.call(null,"posting message: ",("uid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)+" msg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));
return breakfast.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("irc","message","irc/message",-406029284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null)], null));
});
breakfast.core.main_view = (function main_view(app,owner){if(typeof breakfast.core.t74557 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t74557 = (function (owner,app,main_view,meta74558){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta74558 = meta74558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t74557.cljs$lang$type = true;
breakfast.core.t74557.cljs$lang$ctorStr = "breakfast.core/t74557";
breakfast.core.t74557.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"breakfast.core/t74557");
});
breakfast.core.t74557.prototype.om$core$IRender$ = true;
breakfast.core.t74557.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,("Welcome "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.app))+" \\o_")),React.DOM.p(null,"Breakfast is a proof-of-concept live web\n               chat connected to IRC. Go to #clojurecup-breakfast at\n               Freenode to see it from the other side. It was build\n               during Clojure Cup 2014 by @oskarth."));
});
breakfast.core.t74557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74559){var self__ = this;
var _74559__$1 = this;return self__.meta74558;
});
breakfast.core.t74557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74559,meta74558__$1){var self__ = this;
var _74559__$1 = this;return (new breakfast.core.t74557(self__.owner,self__.app,self__.main_view,meta74558__$1));
});
breakfast.core.__GT_t74557 = (function __GT_t74557(owner__$1,app__$1,main_view__$1,meta74558){return (new breakfast.core.t74557(owner__$1,app__$1,main_view__$1,meta74558));
});
}
return (new breakfast.core.t74557(owner,app,main_view,null));
});
breakfast.core.irc_view = (function irc_view(messages,owner){if(typeof breakfast.core.t74563 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t74563 = (function (owner,messages,irc_view,meta74564){
this.owner = owner;
this.messages = messages;
this.irc_view = irc_view;
this.meta74564 = meta74564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t74563.cljs$lang$type = true;
breakfast.core.t74563.cljs$lang$ctorStr = "breakfast.core/t74563";
breakfast.core.t74563.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"breakfast.core/t74563");
});
breakfast.core.t74563.prototype.om$core$IRender$ = true;
breakfast.core.t74563.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (msg){return React.DOM.li(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg));
});})(___$1))
,self__.messages)));
});
breakfast.core.t74563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74565){var self__ = this;
var _74565__$1 = this;return self__.meta74564;
});
breakfast.core.t74563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74565,meta74564__$1){var self__ = this;
var _74565__$1 = this;return (new breakfast.core.t74563(self__.owner,self__.messages,self__.irc_view,meta74564__$1));
});
breakfast.core.__GT_t74563 = (function __GT_t74563(owner__$1,messages__$1,irc_view__$1,meta74564){return (new breakfast.core.t74563(owner__$1,messages__$1,irc_view__$1,meta74564));
});
}
return (new breakfast.core.t74563(owner,messages,irc_view,null));
});
breakfast.core.app_view = (function app_view(app,owner){if(typeof breakfast.core.t74622 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t74622 = (function (owner,app,app_view,meta74623){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta74623 = meta74623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t74622.cljs$lang$type = true;
breakfast.core.t74622.cljs$lang$ctorStr = "breakfast.core/t74622";
breakfast.core.t74622.cljs$lang$ctorPrWriter = (function (this__8569__auto__,writer__8570__auto__,opt__8571__auto__){return cljs.core._write.call(null,writer__8570__auto__,"breakfast.core/t74622");
});
breakfast.core.t74622.prototype.om$core$IRenderState$ = true;
breakfast.core.t74622.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__74625){var self__ = this;
var map__74626 = p__74625;var map__74626__$1 = ((cljs.core.seq_QMARK_.call(null,map__74626))?cljs.core.apply.call(null,cljs.core.hash_map,map__74626):map__74626);var chans = cljs.core.get.call(null,map__74626__$1,new cljs.core.Keyword(null,"chans","chans",-1107816853));var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,breakfast.core.main_view,self__.app),om.core.build.call(null,breakfast.core.input_view,new cljs.core.Keyword(null,"input-box","input-box",-2063413289).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),chans], null)),om.core.build.call(null,breakfast.core.irc_view,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
breakfast.core.t74622.prototype.om$core$IWillMount$ = true;
breakfast.core.t74622.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;breakfast.core.handle_events.call(null,self__.app);
var event_chan_74678 = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null));var c__11735__auto___74679 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11735__auto___74679,event_chan_74678,this$__$1){
return (function (){var f__11736__auto__ = (function (){var switch__11720__auto__ = ((function (c__11735__auto___74679,event_chan_74678,this$__$1){
return (function (state_74657){var state_val_74658 = (state_74657[(1)]);if((state_val_74658 === (7)))
{var inst_74637 = (state_74657[(7)]);var inst_74630 = (state_74657[(8)]);var inst_74630__$1 = (state_74657[(2)]);var inst_74631 = cljs.core.pr_str.call(null,inst_74630__$1);var inst_74632 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74631));var inst_74633 = breakfast.core.log.call(null,"IRC message: ",inst_74632);var inst_74637__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(inst_74630__$1);var inst_74638 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"message","message",-406056002),inst_74637__$1);var state_74657__$1 = (function (){var statearr_74659 = state_74657;(statearr_74659[(7)] = inst_74637__$1);
(statearr_74659[(9)] = inst_74633);
(statearr_74659[(8)] = inst_74630__$1);
return statearr_74659;
})();if(inst_74638)
{var statearr_74660_74680 = state_74657__$1;(statearr_74660_74680[(1)] = (8));
} else
{var statearr_74661_74681 = state_74657__$1;(statearr_74661_74681[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (1)))
{var state_74657__$1 = state_74657;var statearr_74662_74682 = state_74657__$1;(statearr_74662_74682[(2)] = null);
(statearr_74662_74682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (4)))
{var state_74657__$1 = state_74657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74657__$1,(7),event_chan_74678);
} else
{if((state_val_74658 === (6)))
{var inst_74653 = (state_74657[(2)]);var state_74657__$1 = state_74657;var statearr_74663_74683 = state_74657__$1;(statearr_74663_74683[(2)] = inst_74653);
(statearr_74663_74683[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (3)))
{var inst_74655 = (state_74657[(2)]);var state_74657__$1 = state_74657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74657__$1,inst_74655);
} else
{if((state_val_74658 === (2)))
{var state_74657__$1 = state_74657;var statearr_74664_74684 = state_74657__$1;(statearr_74664_74684[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (9)))
{var inst_74637 = (state_74657[(7)]);var inst_74645 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74637));var inst_74646 = (new Error(inst_74645));var inst_74647 = (function(){throw inst_74646})();var state_74657__$1 = state_74657;var statearr_74666_74685 = state_74657__$1;(statearr_74666_74685[(2)] = inst_74647);
(statearr_74666_74685[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (5)))
{var state_74657__$1 = state_74657;var statearr_74667_74686 = state_74657__$1;(statearr_74667_74686[(2)] = null);
(statearr_74667_74686[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (10)))
{var inst_74649 = (state_74657[(2)]);var state_74657__$1 = (function (){var statearr_74668 = state_74657;(statearr_74668[(10)] = inst_74649);
return statearr_74668;
})();var statearr_74669_74687 = state_74657__$1;(statearr_74669_74687[(2)] = null);
(statearr_74669_74687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_74658 === (8)))
{var inst_74630 = (state_74657[(8)]);var inst_74640 = cljs.core.deref.call(null,self__.app);var inst_74641 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_74640);var inst_74642 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_74630);var inst_74643 = breakfast.core.post_message_BANG_.call(null,inst_74641,inst_74642);var state_74657__$1 = state_74657;var statearr_74670_74688 = state_74657__$1;(statearr_74670_74688[(2)] = inst_74643);
(statearr_74670_74688[(1)] = (10));
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
});})(c__11735__auto___74679,event_chan_74678,this$__$1))
;return ((function (switch__11720__auto__,c__11735__auto___74679,event_chan_74678,this$__$1){
return (function() {
var state_machine__11721__auto__ = null;
var state_machine__11721__auto____0 = (function (){var statearr_74674 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_74674[(0)] = state_machine__11721__auto__);
(statearr_74674[(1)] = (1));
return statearr_74674;
});
var state_machine__11721__auto____1 = (function (state_74657){while(true){
var ret_value__11722__auto__ = (function (){try{while(true){
var result__11723__auto__ = switch__11720__auto__.call(null,state_74657);if(cljs.core.keyword_identical_QMARK_.call(null,result__11723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11723__auto__;
}
break;
}
}catch (e74675){if((e74675 instanceof Object))
{var ex__11724__auto__ = e74675;var statearr_74676_74689 = state_74657;(statearr_74676_74689[(5)] = ex__11724__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74657);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e74675;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__74690 = state_74657;
state_74657 = G__74690;
continue;
}
} else
{return ret_value__11722__auto__;
}
break;
}
});
state_machine__11721__auto__ = function(state_74657){
switch(arguments.length){
case 0:
return state_machine__11721__auto____0.call(this);
case 1:
return state_machine__11721__auto____1.call(this,state_74657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11721__auto____0;
state_machine__11721__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11721__auto____1;
return state_machine__11721__auto__;
})()
;})(switch__11720__auto__,c__11735__auto___74679,event_chan_74678,this$__$1))
})();var state__11737__auto__ = (function (){var statearr_74677 = f__11736__auto__.call(null);(statearr_74677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11735__auto___74679);
return statearr_74677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11737__auto__);
});})(c__11735__auto___74679,event_chan_74678,this$__$1))
);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.app)))
{var uid = ("user_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100))));breakfast.core.login_BANG_.call(null,uid);
return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"uid","uid",-1447769400),((function (uid,this$__$1){
return (function (_){return uid;
});})(uid,this$__$1))
);
} else
{return null;
}
});
breakfast.core.t74622.prototype.om$core$IInitState$ = true;
breakfast.core.t74622.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)))], null)], null);
});
breakfast.core.t74622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74624){var self__ = this;
var _74624__$1 = this;return self__.meta74623;
});
breakfast.core.t74622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74624,meta74623__$1){var self__ = this;
var _74624__$1 = this;return (new breakfast.core.t74622(self__.owner,self__.app,self__.app_view,meta74623__$1));
});
breakfast.core.__GT_t74622 = (function __GT_t74622(owner__$1,app__$1,app_view__$1,meta74623){return (new breakfast.core.t74622(owner__$1,app__$1,app_view__$1,meta74623));
});
}
return (new breakfast.core.t74622(owner,app,app_view,null));
});
om.core.root.call(null,breakfast.core.app_view,breakfast.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
breakfast.core.is_dev = document.body.classList.contains("is-dev");
if(cljs.core.truth_(breakfast.core.is_dev))
{cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
} else
{}

//# sourceMappingURL=core.js.map