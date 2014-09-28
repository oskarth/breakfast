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
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('sablono.core');
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
var map__27709_27710 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__27709_27711__$1 = ((cljs.core.seq_QMARK_.call(null,map__27709_27710))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709_27710):map__27709_27710);var state_27712 = cljs.core.get.call(null,map__27709_27711__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_27713 = cljs.core.get.call(null,map__27709_27711__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_27714 = cljs.core.get.call(null,map__27709_27711__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_27715 = cljs.core.get.call(null,map__27709_27711__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));breakfast.core.chsk = chsk_27715;
breakfast.core.ch_chsk = ch_recv_27714;
breakfast.core.chsk_send_BANG_ = send_fn_27713;
breakfast.core.chsk_state = state_27712;
if(typeof breakfast.core.app_state !== 'undefined')
{} else
{breakfast.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Breakfast!",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["message"], null),new cljs.core.Keyword(null,"input-box","input-box",-2063413289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"foobar"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),null], null));
}
breakfast.core.handle_events = (function handle_events(app){var c__9869__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9869__auto__){
return (function (){var f__9870__auto__ = (function (){var switch__9854__auto__ = ((function (c__9869__auto__){
return (function (state_27817){var state_val_27818 = (state_27817[(1)]);if((state_val_27818 === (7)))
{var inst_27784 = (state_27817[(7)]);var inst_27790 = (state_27817[(8)]);var inst_27783 = (state_27817[(2)]);var inst_27784__$1 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_27783);var inst_27785 = cljs.core.second.call(null,inst_27784__$1);var inst_27786 = cljs.core.second.call(null,inst_27785);var inst_27790__$1 = cljs.core.first.call(null,inst_27784__$1);var inst_27791 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),inst_27790__$1);var state_27817__$1 = (function (){var statearr_27819 = state_27817;(statearr_27819[(9)] = inst_27786);
(statearr_27819[(7)] = inst_27784__$1);
(statearr_27819[(8)] = inst_27790__$1);
return statearr_27819;
})();if(inst_27791)
{var statearr_27820_27843 = state_27817__$1;(statearr_27820_27843[(1)] = (8));
} else
{var statearr_27821_27844 = state_27817__$1;(statearr_27821_27844[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (1)))
{var state_27817__$1 = state_27817;var statearr_27822_27845 = state_27817__$1;(statearr_27822_27845[(2)] = null);
(statearr_27822_27845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (4)))
{var state_27817__$1 = state_27817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27817__$1,(7),breakfast.core.ch_chsk);
} else
{if((state_val_27818 === (13)))
{var inst_27807 = (state_27817[(2)]);var state_27817__$1 = state_27817;var statearr_27823_27846 = state_27817__$1;(statearr_27823_27846[(2)] = inst_27807);
(statearr_27823_27846[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (6)))
{var inst_27813 = (state_27817[(2)]);var state_27817__$1 = state_27817;var statearr_27824_27847 = state_27817__$1;(statearr_27824_27847[(2)] = inst_27813);
(statearr_27824_27847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (3)))
{var inst_27815 = (state_27817[(2)]);var state_27817__$1 = state_27817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27817__$1,inst_27815);
} else
{if((state_val_27818 === (12)))
{var inst_27790 = (state_27817[(8)]);var inst_27803 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27790));var inst_27804 = (new Error(inst_27803));var inst_27805 = (function(){throw inst_27804})();var state_27817__$1 = state_27817;var statearr_27825_27848 = state_27817__$1;(statearr_27825_27848[(2)] = inst_27805);
(statearr_27825_27848[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (2)))
{var state_27817__$1 = state_27817;var statearr_27826_27849 = state_27817__$1;(statearr_27826_27849[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (11)))
{var inst_27786 = (state_27817[(9)]);var inst_27784 = (state_27817[(7)]);var inst_27790 = (state_27817[(8)]);var inst_27797 = (function (){var expr__27788 = inst_27790;var pred__27787 = cljs.core.keyword_identical_QMARK_;var msg = inst_27786;var ev = inst_27784;return ((function (expr__27788,pred__27787,msg,ev,inst_27786,inst_27784,inst_27790,state_val_27818,c__9869__auto__){
return (function (p1__27716_SHARP_){return cljs.core.conj.call(null,p1__27716_SHARP_,msg);
});
;})(expr__27788,pred__27787,msg,ev,inst_27786,inst_27784,inst_27790,state_val_27818,c__9869__auto__))
})();var inst_27798 = om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"messages","messages",345434482),inst_27797);var inst_27799 = cljs.core.pr_str.call(null,inst_27786);var inst_27800 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27799));var inst_27801 = cljs.core.prn.call(null,"msg: ",inst_27800);var state_27817__$1 = (function (){var statearr_27828 = state_27817;(statearr_27828[(10)] = inst_27798);
return statearr_27828;
})();var statearr_27829_27850 = state_27817__$1;(statearr_27829_27850[(2)] = inst_27801);
(statearr_27829_27850[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (9)))
{var inst_27790 = (state_27817[(8)]);var inst_27795 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_27790);var state_27817__$1 = state_27817;if(inst_27795)
{var statearr_27830_27851 = state_27817__$1;(statearr_27830_27851[(1)] = (11));
} else
{var statearr_27831_27852 = state_27817__$1;(statearr_27831_27852[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (5)))
{var state_27817__$1 = state_27817;var statearr_27832_27853 = state_27817__$1;(statearr_27832_27853[(2)] = null);
(statearr_27832_27853[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (10)))
{var inst_27809 = (state_27817[(2)]);var state_27817__$1 = (function (){var statearr_27833 = state_27817;(statearr_27833[(11)] = inst_27809);
return statearr_27833;
})();var statearr_27834_27854 = state_27817__$1;(statearr_27834_27854[(2)] = null);
(statearr_27834_27854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27818 === (8)))
{var inst_27793 = cljs.core.prn.call(null,"sup, checking state");var state_27817__$1 = state_27817;var statearr_27835_27855 = state_27817__$1;(statearr_27835_27855[(2)] = inst_27793);
(statearr_27835_27855[(1)] = (10));
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
});})(c__9869__auto__))
;return ((function (switch__9854__auto__,c__9869__auto__){
return (function() {
var state_machine__9855__auto__ = null;
var state_machine__9855__auto____0 = (function (){var statearr_27839 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27839[(0)] = state_machine__9855__auto__);
(statearr_27839[(1)] = (1));
return statearr_27839;
});
var state_machine__9855__auto____1 = (function (state_27817){while(true){
var ret_value__9856__auto__ = (function (){try{while(true){
var result__9857__auto__ = switch__9854__auto__.call(null,state_27817);if(cljs.core.keyword_identical_QMARK_.call(null,result__9857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9857__auto__;
}
break;
}
}catch (e27840){if((e27840 instanceof Object))
{var ex__9858__auto__ = e27840;var statearr_27841_27856 = state_27817;(statearr_27841_27856[(5)] = ex__9858__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27857 = state_27817;
state_27817 = G__27857;
continue;
}
} else
{return ret_value__9856__auto__;
}
break;
}
});
state_machine__9855__auto__ = function(state_27817){
switch(arguments.length){
case 0:
return state_machine__9855__auto____0.call(this);
case 1:
return state_machine__9855__auto____1.call(this,state_27817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9855__auto____0;
state_machine__9855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9855__auto____1;
return state_machine__9855__auto__;
})()
;})(switch__9854__auto__,c__9869__auto__))
})();var state__9871__auto__ = (function (){var statearr_27842 = f__9870__auto__.call(null);(statearr_27842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9869__auto__);
return statearr_27842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9871__auto__);
});})(c__9869__auto__))
);
return c__9869__auto__;
});
breakfast.core.input_box_input = (function input_box_input(owner,chan){return React.DOM.div({"className": "form-group"},sablono.interpreter.input.call(null,{"className": "form-control input-lg", "type": "text", "onKeyPress": (function (e){if(cljs.core._EQ_.call(null,e.keyCode,(13)))
{breakfast.core.log.call(null,"foobar",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)));
var value = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,chan,value);
} else
{return null;
}
} else
{return null;
}
}), "onChange": (function (e){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217),e.target.value);
})}));
});
breakfast.core.input_box_button = (function input_box_button(owner,chan){return React.DOM.button({"onClick": (function (e){var value = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217));if(cljs.core.truth_(value))
{return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"value","value",305978217),value], null));
} else
{return null;
}
}), "type": "button"},"Send");
});
breakfast.core.input_view = (function input_view(cursor,owner){if(typeof breakfast.core.t27861 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t27861 = (function (owner,cursor,input_view,meta27862){
this.owner = owner;
this.cursor = cursor;
this.input_view = input_view;
this.meta27862 = meta27862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t27861.cljs$lang$type = true;
breakfast.core.t27861.cljs$lang$ctorStr = "breakfast.core/t27861";
breakfast.core.t27861.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"breakfast.core/t27861");
});
breakfast.core.t27861.prototype.om$core$IRender$ = true;
breakfast.core.t27861.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var event_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null));return React.DOM.div(null,breakfast.core.input_box_input.call(null,self__.owner,event_chan),breakfast.core.input_box_button.call(null,self__.owner,event_chan));
});
breakfast.core.t27861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27863){var self__ = this;
var _27863__$1 = this;return self__.meta27862;
});
breakfast.core.t27861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27863,meta27862__$1){var self__ = this;
var _27863__$1 = this;return (new breakfast.core.t27861(self__.owner,self__.cursor,self__.input_view,meta27862__$1));
});
breakfast.core.__GT_t27861 = (function __GT_t27861(owner__$1,cursor__$1,input_view__$1,meta27862){return (new breakfast.core.t27861(owner__$1,cursor__$1,input_view__$1,meta27862));
});
}
return (new breakfast.core.t27861(owner,cursor,input_view,null));
});
breakfast.core.login_BANG_ = (function login_BANG_(uid){taoensso.sente.ajax_call.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),uid], null)], null),(function (ajax_resp){return console.log("Ajax login response: %s",ajax_resp);
}));
return taoensso.sente.chsk_reconnect_BANG_.call(null,breakfast.core.chsk);
});
breakfast.core.post_message_BANG_ = (function post_message_BANG_(uid,msg){breakfast.core.log.call(null,"posting message: ",("uid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)+" msg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));
return breakfast.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("irc","message","irc/message",-406029284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null)], null));
});
breakfast.core.main_view = (function main_view(app,owner){if(typeof breakfast.core.t27869 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t27869 = (function (owner,app,main_view,meta27870){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta27870 = meta27870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t27869.cljs$lang$type = true;
breakfast.core.t27869.cljs$lang$ctorStr = "breakfast.core/t27869";
breakfast.core.t27869.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"breakfast.core/t27869");
});
breakfast.core.t27869.prototype.om$core$IRender$ = true;
breakfast.core.t27869.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "bs-component"},sablono.interpreter.interpret.call(null,React.DOM.h1(null,("Welcome "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.app))+" \\o_"))),React.DOM.h4({"className": "text-primary"},"Breakfast is a proof-of-concept live web chat connected to\n               IRC. Go to #clojurecup-breakfast at Freenode to see it\n               from the other side. It was build during Clojure Cup\n               2014 by @oskarth."));
});
breakfast.core.t27869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27871){var self__ = this;
var _27871__$1 = this;return self__.meta27870;
});
breakfast.core.t27869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27871,meta27870__$1){var self__ = this;
var _27871__$1 = this;return (new breakfast.core.t27869(self__.owner,self__.app,self__.main_view,meta27870__$1));
});
breakfast.core.__GT_t27869 = (function __GT_t27869(owner__$1,app__$1,main_view__$1,meta27870){return (new breakfast.core.t27869(owner__$1,app__$1,main_view__$1,meta27870));
});
}
return (new breakfast.core.t27869(owner,app,main_view,null));
});
breakfast.core.irc_view = (function irc_view(messages,owner){if(typeof breakfast.core.t27877 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t27877 = (function (owner,messages,irc_view,meta27878){
this.owner = owner;
this.messages = messages;
this.irc_view = irc_view;
this.meta27878 = meta27878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t27877.cljs$lang$type = true;
breakfast.core.t27877.cljs$lang$ctorStr = "breakfast.core/t27877";
breakfast.core.t27877.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"breakfast.core/t27877");
});
breakfast.core.t27877.prototype.om$core$IRender$ = true;
breakfast.core.t27877.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (msg){return React.DOM.li(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg));
});})(___$1))
,self__.messages)));
});
breakfast.core.t27877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27879){var self__ = this;
var _27879__$1 = this;return self__.meta27878;
});
breakfast.core.t27877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27879,meta27878__$1){var self__ = this;
var _27879__$1 = this;return (new breakfast.core.t27877(self__.owner,self__.messages,self__.irc_view,meta27878__$1));
});
breakfast.core.__GT_t27877 = (function __GT_t27877(owner__$1,messages__$1,irc_view__$1,meta27878){return (new breakfast.core.t27877(owner__$1,messages__$1,irc_view__$1,meta27878));
});
}
return (new breakfast.core.t27877(owner,messages,irc_view,null));
});
breakfast.core.app_view = (function app_view(app,owner){if(typeof breakfast.core.t27941 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t27941 = (function (owner,app,app_view,meta27942){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta27942 = meta27942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t27941.cljs$lang$type = true;
breakfast.core.t27941.cljs$lang$ctorStr = "breakfast.core/t27941";
breakfast.core.t27941.cljs$lang$ctorPrWriter = (function (this__8568__auto__,writer__8569__auto__,opt__8570__auto__){return cljs.core._write.call(null,writer__8569__auto__,"breakfast.core/t27941");
});
breakfast.core.t27941.prototype.om$core$IRenderState$ = true;
breakfast.core.t27941.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__27944){var self__ = this;
var map__27945 = p__27944;var map__27945__$1 = ((cljs.core.seq_QMARK_.call(null,map__27945))?cljs.core.apply.call(null,cljs.core.hash_map,map__27945):map__27945);var chans = cljs.core.get.call(null,map__27945__$1,new cljs.core.Keyword(null,"chans","chans",-1107816853));var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "col-lg-2"}),(function (){var attrs27948 = om.core.build.call(null,breakfast.core.main_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs27948))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-lg-8"], null)], null),attrs27948)):{"className": "col-lg-8"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27948))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.input_view,new cljs.core.Keyword(null,"input-box","input-box",-2063413289).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),chans], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.irc_view,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(self__.app)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27948),sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.input_view,new cljs.core.Keyword(null,"input-box","input-box",-2063413289).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),chans], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.irc_view,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(self__.app)))], null))));
})(),React.DOM.div({"className": "col-lg-2"}));
});
breakfast.core.t27941.prototype.om$core$IWillMount$ = true;
breakfast.core.t27941.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;breakfast.core.handle_events.call(null,self__.app);
var event_chan_28002 = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null));var c__9869__auto___28003 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9869__auto___28003,event_chan_28002,this$__$1){
return (function (){var f__9870__auto__ = (function (){var switch__9854__auto__ = ((function (c__9869__auto___28003,event_chan_28002,this$__$1){
return (function (state_27981){var state_val_27982 = (state_27981[(1)]);if((state_val_27982 === (7)))
{var inst_27961 = (state_27981[(7)]);var inst_27954 = (state_27981[(8)]);var inst_27954__$1 = (state_27981[(2)]);var inst_27955 = cljs.core.pr_str.call(null,inst_27954__$1);var inst_27956 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27955));var inst_27957 = breakfast.core.log.call(null,"IRC message: ",inst_27956);var inst_27961__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(inst_27954__$1);var inst_27962 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"message","message",-406056002),inst_27961__$1);var state_27981__$1 = (function (){var statearr_27983 = state_27981;(statearr_27983[(9)] = inst_27957);
(statearr_27983[(7)] = inst_27961__$1);
(statearr_27983[(8)] = inst_27954__$1);
return statearr_27983;
})();if(inst_27962)
{var statearr_27984_28004 = state_27981__$1;(statearr_27984_28004[(1)] = (8));
} else
{var statearr_27985_28005 = state_27981__$1;(statearr_27985_28005[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (1)))
{var state_27981__$1 = state_27981;var statearr_27986_28006 = state_27981__$1;(statearr_27986_28006[(2)] = null);
(statearr_27986_28006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (4)))
{var state_27981__$1 = state_27981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27981__$1,(7),event_chan_28002);
} else
{if((state_val_27982 === (6)))
{var inst_27977 = (state_27981[(2)]);var state_27981__$1 = state_27981;var statearr_27987_28007 = state_27981__$1;(statearr_27987_28007[(2)] = inst_27977);
(statearr_27987_28007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (3)))
{var inst_27979 = (state_27981[(2)]);var state_27981__$1 = state_27981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,inst_27979);
} else
{if((state_val_27982 === (2)))
{var state_27981__$1 = state_27981;var statearr_27988_28008 = state_27981__$1;(statearr_27988_28008[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (9)))
{var inst_27961 = (state_27981[(7)]);var inst_27969 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27961));var inst_27970 = (new Error(inst_27969));var inst_27971 = (function(){throw inst_27970})();var state_27981__$1 = state_27981;var statearr_27990_28009 = state_27981__$1;(statearr_27990_28009[(2)] = inst_27971);
(statearr_27990_28009[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (5)))
{var state_27981__$1 = state_27981;var statearr_27991_28010 = state_27981__$1;(statearr_27991_28010[(2)] = null);
(statearr_27991_28010[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (10)))
{var inst_27973 = (state_27981[(2)]);var state_27981__$1 = (function (){var statearr_27992 = state_27981;(statearr_27992[(10)] = inst_27973);
return statearr_27992;
})();var statearr_27993_28011 = state_27981__$1;(statearr_27993_28011[(2)] = null);
(statearr_27993_28011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27982 === (8)))
{var inst_27954 = (state_27981[(8)]);var inst_27964 = cljs.core.deref.call(null,self__.app);var inst_27965 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_27964);var inst_27966 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_27954);var inst_27967 = breakfast.core.post_message_BANG_.call(null,inst_27965,inst_27966);var state_27981__$1 = state_27981;var statearr_27994_28012 = state_27981__$1;(statearr_27994_28012[(2)] = inst_27967);
(statearr_27994_28012[(1)] = (10));
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
});})(c__9869__auto___28003,event_chan_28002,this$__$1))
;return ((function (switch__9854__auto__,c__9869__auto___28003,event_chan_28002,this$__$1){
return (function() {
var state_machine__9855__auto__ = null;
var state_machine__9855__auto____0 = (function (){var statearr_27998 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27998[(0)] = state_machine__9855__auto__);
(statearr_27998[(1)] = (1));
return statearr_27998;
});
var state_machine__9855__auto____1 = (function (state_27981){while(true){
var ret_value__9856__auto__ = (function (){try{while(true){
var result__9857__auto__ = switch__9854__auto__.call(null,state_27981);if(cljs.core.keyword_identical_QMARK_.call(null,result__9857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9857__auto__;
}
break;
}
}catch (e27999){if((e27999 instanceof Object))
{var ex__9858__auto__ = e27999;var statearr_28000_28013 = state_27981;(statearr_28000_28013[(5)] = ex__9858__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28014 = state_27981;
state_27981 = G__28014;
continue;
}
} else
{return ret_value__9856__auto__;
}
break;
}
});
state_machine__9855__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return state_machine__9855__auto____0.call(this);
case 1:
return state_machine__9855__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9855__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9855__auto____0;
state_machine__9855__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9855__auto____1;
return state_machine__9855__auto__;
})()
;})(switch__9854__auto__,c__9869__auto___28003,event_chan_28002,this$__$1))
})();var state__9871__auto__ = (function (){var statearr_28001 = f__9870__auto__.call(null);(statearr_28001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9869__auto___28003);
return statearr_28001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9871__auto__);
});})(c__9869__auto___28003,event_chan_28002,this$__$1))
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
breakfast.core.t27941.prototype.om$core$IInitState$ = true;
breakfast.core.t27941.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)))], null)], null);
});
breakfast.core.t27941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27943){var self__ = this;
var _27943__$1 = this;return self__.meta27942;
});
breakfast.core.t27941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27943,meta27942__$1){var self__ = this;
var _27943__$1 = this;return (new breakfast.core.t27941(self__.owner,self__.app,self__.app_view,meta27942__$1));
});
breakfast.core.__GT_t27941 = (function __GT_t27941(owner__$1,app__$1,app_view__$1,meta27942){return (new breakfast.core.t27941(owner__$1,app__$1,app_view__$1,meta27942));
});
}
return (new breakfast.core.t27941(owner,app,app_view,null));
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