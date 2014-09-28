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
var map__12901_12902 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__12901_12903__$1 = ((cljs.core.seq_QMARK_.call(null,map__12901_12902))?cljs.core.apply.call(null,cljs.core.hash_map,map__12901_12902):map__12901_12902);var state_12904 = cljs.core.get.call(null,map__12901_12903__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_12905 = cljs.core.get.call(null,map__12901_12903__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_12906 = cljs.core.get.call(null,map__12901_12903__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_12907 = cljs.core.get.call(null,map__12901_12903__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));breakfast.core.chsk = chsk_12907;
breakfast.core.ch_chsk = ch_recv_12906;
breakfast.core.chsk_send_BANG_ = send_fn_12905;
breakfast.core.chsk_state = state_12904;
if(typeof breakfast.core.app_state !== 'undefined')
{} else
{breakfast.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Breakfast!",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["message"], null),new cljs.core.Keyword(null,"input-box","input-box",-2063413289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"foobar"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),null], null));
}
breakfast.core.handle_events = (function handle_events(app){var c__5807__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5807__auto__){
return (function (){var f__5808__auto__ = (function (){var switch__5792__auto__ = ((function (c__5807__auto__){
return (function (state_13009){var state_val_13010 = (state_13009[(1)]);if((state_val_13010 === (7)))
{var inst_12982 = (state_13009[(7)]);var inst_12976 = (state_13009[(8)]);var inst_12975 = (state_13009[(2)]);var inst_12976__$1 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(inst_12975);var inst_12977 = cljs.core.second.call(null,inst_12976__$1);var inst_12978 = cljs.core.second.call(null,inst_12977);var inst_12982__$1 = cljs.core.first.call(null,inst_12976__$1);var inst_12983 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),inst_12982__$1);var state_13009__$1 = (function (){var statearr_13011 = state_13009;(statearr_13011[(9)] = inst_12978);
(statearr_13011[(7)] = inst_12982__$1);
(statearr_13011[(8)] = inst_12976__$1);
return statearr_13011;
})();if(inst_12983)
{var statearr_13012_13035 = state_13009__$1;(statearr_13012_13035[(1)] = (8));
} else
{var statearr_13013_13036 = state_13009__$1;(statearr_13013_13036[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (1)))
{var state_13009__$1 = state_13009;var statearr_13014_13037 = state_13009__$1;(statearr_13014_13037[(2)] = null);
(statearr_13014_13037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (4)))
{var state_13009__$1 = state_13009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13009__$1,(7),breakfast.core.ch_chsk);
} else
{if((state_val_13010 === (13)))
{var inst_12999 = (state_13009[(2)]);var state_13009__$1 = state_13009;var statearr_13015_13038 = state_13009__$1;(statearr_13015_13038[(2)] = inst_12999);
(statearr_13015_13038[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (6)))
{var inst_13005 = (state_13009[(2)]);var state_13009__$1 = state_13009;var statearr_13016_13039 = state_13009__$1;(statearr_13016_13039[(2)] = inst_13005);
(statearr_13016_13039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (3)))
{var inst_13007 = (state_13009[(2)]);var state_13009__$1 = state_13009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13009__$1,inst_13007);
} else
{if((state_val_13010 === (12)))
{var inst_12982 = (state_13009[(7)]);var inst_12995 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12982));var inst_12996 = (new Error(inst_12995));var inst_12997 = (function(){throw inst_12996})();var state_13009__$1 = state_13009;var statearr_13017_13040 = state_13009__$1;(statearr_13017_13040[(2)] = inst_12997);
(statearr_13017_13040[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (2)))
{var state_13009__$1 = state_13009;var statearr_13018_13041 = state_13009__$1;(statearr_13018_13041[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (11)))
{var inst_12978 = (state_13009[(9)]);var inst_12982 = (state_13009[(7)]);var inst_12976 = (state_13009[(8)]);var inst_12989 = (function (){var expr__12980 = inst_12982;var pred__12979 = cljs.core.keyword_identical_QMARK_;var msg = inst_12978;var ev = inst_12976;return ((function (expr__12980,pred__12979,msg,ev,inst_12978,inst_12982,inst_12976,state_val_13010,c__5807__auto__){
return (function (p1__12908_SHARP_){return cljs.core.conj.call(null,p1__12908_SHARP_,msg);
});
;})(expr__12980,pred__12979,msg,ev,inst_12978,inst_12982,inst_12976,state_val_13010,c__5807__auto__))
})();var inst_12990 = om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"messages","messages",345434482),inst_12989);var inst_12991 = cljs.core.pr_str.call(null,inst_12978);var inst_12992 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_12991));var inst_12993 = cljs.core.prn.call(null,"msg: ",inst_12992);var state_13009__$1 = (function (){var statearr_13020 = state_13009;(statearr_13020[(10)] = inst_12990);
return statearr_13020;
})();var statearr_13021_13042 = state_13009__$1;(statearr_13021_13042[(2)] = inst_12993);
(statearr_13021_13042[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (9)))
{var inst_12982 = (state_13009[(7)]);var inst_12987 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_12982);var state_13009__$1 = state_13009;if(inst_12987)
{var statearr_13022_13043 = state_13009__$1;(statearr_13022_13043[(1)] = (11));
} else
{var statearr_13023_13044 = state_13009__$1;(statearr_13023_13044[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (5)))
{var state_13009__$1 = state_13009;var statearr_13024_13045 = state_13009__$1;(statearr_13024_13045[(2)] = null);
(statearr_13024_13045[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (10)))
{var inst_13001 = (state_13009[(2)]);var state_13009__$1 = (function (){var statearr_13025 = state_13009;(statearr_13025[(11)] = inst_13001);
return statearr_13025;
})();var statearr_13026_13046 = state_13009__$1;(statearr_13026_13046[(2)] = null);
(statearr_13026_13046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13010 === (8)))
{var inst_12985 = cljs.core.prn.call(null,"sup, checking state");var state_13009__$1 = state_13009;var statearr_13027_13047 = state_13009__$1;(statearr_13027_13047[(2)] = inst_12985);
(statearr_13027_13047[(1)] = (10));
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
});})(c__5807__auto__))
;return ((function (switch__5792__auto__,c__5807__auto__){
return (function() {
var state_machine__5793__auto__ = null;
var state_machine__5793__auto____0 = (function (){var statearr_13031 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13031[(0)] = state_machine__5793__auto__);
(statearr_13031[(1)] = (1));
return statearr_13031;
});
var state_machine__5793__auto____1 = (function (state_13009){while(true){
var ret_value__5794__auto__ = (function (){try{while(true){
var result__5795__auto__ = switch__5792__auto__.call(null,state_13009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5795__auto__;
}
break;
}
}catch (e13032){if((e13032 instanceof Object))
{var ex__5796__auto__ = e13032;var statearr_13033_13048 = state_13009;(statearr_13033_13048[(5)] = ex__5796__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13032;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13049 = state_13009;
state_13009 = G__13049;
continue;
}
} else
{return ret_value__5794__auto__;
}
break;
}
});
state_machine__5793__auto__ = function(state_13009){
switch(arguments.length){
case 0:
return state_machine__5793__auto____0.call(this);
case 1:
return state_machine__5793__auto____1.call(this,state_13009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5793__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5793__auto____0;
state_machine__5793__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5793__auto____1;
return state_machine__5793__auto__;
})()
;})(switch__5792__auto__,c__5807__auto__))
})();var state__5809__auto__ = (function (){var statearr_13034 = f__5808__auto__.call(null);(statearr_13034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5807__auto__);
return statearr_13034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5809__auto__);
});})(c__5807__auto__))
);
return c__5807__auto__;
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
breakfast.core.input_view = (function input_view(cursor,owner){if(typeof breakfast.core.t13053 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t13053 = (function (owner,cursor,input_view,meta13054){
this.owner = owner;
this.cursor = cursor;
this.input_view = input_view;
this.meta13054 = meta13054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t13053.cljs$lang$type = true;
breakfast.core.t13053.cljs$lang$ctorStr = "breakfast.core/t13053";
breakfast.core.t13053.cljs$lang$ctorPrWriter = (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"breakfast.core/t13053");
});
breakfast.core.t13053.prototype.om$core$IRender$ = true;
breakfast.core.t13053.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var event_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null));return React.DOM.div(null,breakfast.core.input_box_input.call(null,self__.owner,event_chan),breakfast.core.input_box_button.call(null,self__.owner,event_chan));
});
breakfast.core.t13053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13055){var self__ = this;
var _13055__$1 = this;return self__.meta13054;
});
breakfast.core.t13053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13055,meta13054__$1){var self__ = this;
var _13055__$1 = this;return (new breakfast.core.t13053(self__.owner,self__.cursor,self__.input_view,meta13054__$1));
});
breakfast.core.__GT_t13053 = (function __GT_t13053(owner__$1,cursor__$1,input_view__$1,meta13054){return (new breakfast.core.t13053(owner__$1,cursor__$1,input_view__$1,meta13054));
});
}
return (new breakfast.core.t13053(owner,cursor,input_view,null));
});
breakfast.core.login_BANG_ = (function login_BANG_(uid){taoensso.sente.ajax_call.call(null,"/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),uid], null)], null),(function (ajax_resp){return console.log("Ajax login response: %s",ajax_resp);
}));
return taoensso.sente.chsk_reconnect_BANG_.call(null,breakfast.core.chsk);
});
breakfast.core.post_message_BANG_ = (function post_message_BANG_(uid,msg){breakfast.core.log.call(null,"posting message: ",("uid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)+" msg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));
return breakfast.core.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("irc","message","irc/message",-406029284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null)], null));
});
breakfast.core.main_view = (function main_view(app,owner){if(typeof breakfast.core.t13061 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t13061 = (function (owner,app,main_view,meta13062){
this.owner = owner;
this.app = app;
this.main_view = main_view;
this.meta13062 = meta13062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t13061.cljs$lang$type = true;
breakfast.core.t13061.cljs$lang$ctorStr = "breakfast.core/t13061";
breakfast.core.t13061.cljs$lang$ctorPrWriter = (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"breakfast.core/t13061");
});
breakfast.core.t13061.prototype.om$core$IRender$ = true;
breakfast.core.t13061.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "bs-component"},sablono.interpreter.interpret.call(null,React.DOM.h1(null,("Welcome "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(self__.app))+" \\o_"))),React.DOM.h4({"className": "text-primary"},"Breakfast is a proof-of-concept live web chat connected to\n               IRC. Go to #clojurecup-breakfast at Freenode to see it\n               from the other side. It was build during Clojure Cup\n               2014 by @oskarth."));
});
breakfast.core.t13061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13063){var self__ = this;
var _13063__$1 = this;return self__.meta13062;
});
breakfast.core.t13061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13063,meta13062__$1){var self__ = this;
var _13063__$1 = this;return (new breakfast.core.t13061(self__.owner,self__.app,self__.main_view,meta13062__$1));
});
breakfast.core.__GT_t13061 = (function __GT_t13061(owner__$1,app__$1,main_view__$1,meta13062){return (new breakfast.core.t13061(owner__$1,app__$1,main_view__$1,meta13062));
});
}
return (new breakfast.core.t13061(owner,app,main_view,null));
});
breakfast.core.irc_view = (function irc_view(messages,owner){if(typeof breakfast.core.t13069 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t13069 = (function (owner,messages,irc_view,meta13070){
this.owner = owner;
this.messages = messages;
this.irc_view = irc_view;
this.meta13070 = meta13070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t13069.cljs$lang$type = true;
breakfast.core.t13069.cljs$lang$ctorStr = "breakfast.core/t13069";
breakfast.core.t13069.cljs$lang$ctorPrWriter = (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"breakfast.core/t13069");
});
breakfast.core.t13069.prototype.om$core$IRender$ = true;
breakfast.core.t13069.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (msg){return React.DOM.li(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg));
});})(___$1))
,self__.messages)));
});
breakfast.core.t13069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13071){var self__ = this;
var _13071__$1 = this;return self__.meta13070;
});
breakfast.core.t13069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13071,meta13070__$1){var self__ = this;
var _13071__$1 = this;return (new breakfast.core.t13069(self__.owner,self__.messages,self__.irc_view,meta13070__$1));
});
breakfast.core.__GT_t13069 = (function __GT_t13069(owner__$1,messages__$1,irc_view__$1,meta13070){return (new breakfast.core.t13069(owner__$1,messages__$1,irc_view__$1,meta13070));
});
}
return (new breakfast.core.t13069(owner,messages,irc_view,null));
});
breakfast.core.app_view = (function app_view(app,owner){if(typeof breakfast.core.t13133 !== 'undefined')
{} else
{
/**
* @constructor
*/
breakfast.core.t13133 = (function (owner,app,app_view,meta13134){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta13134 = meta13134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
breakfast.core.t13133.cljs$lang$type = true;
breakfast.core.t13133.cljs$lang$ctorStr = "breakfast.core/t13133";
breakfast.core.t13133.cljs$lang$ctorPrWriter = (function (this__4200__auto__,writer__4201__auto__,opt__4202__auto__){return cljs.core._write.call(null,writer__4201__auto__,"breakfast.core/t13133");
});
breakfast.core.t13133.prototype.om$core$IRenderState$ = true;
breakfast.core.t13133.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13136){var self__ = this;
var map__13137 = p__13136;var map__13137__$1 = ((cljs.core.seq_QMARK_.call(null,map__13137))?cljs.core.apply.call(null,cljs.core.hash_map,map__13137):map__13137);var chans = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"chans","chans",-1107816853));var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "col-lg-2"}),(function (){var attrs13140 = om.core.build.call(null,breakfast.core.main_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13140))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-lg-8"], null)], null),attrs13140)):{"className": "col-lg-8"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13140))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.input_view,new cljs.core.Keyword(null,"input-box","input-box",-2063413289).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),chans], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.irc_view,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(self__.app)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13140),sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.input_view,new cljs.core.Keyword(null,"input-box","input-box",-2063413289).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),chans], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,breakfast.core.irc_view,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(self__.app)))], null))));
})(),React.DOM.div({"className": "col-lg-2"}));
});
breakfast.core.t13133.prototype.om$core$IWillMount$ = true;
breakfast.core.t13133.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;breakfast.core.handle_events.call(null,self__.app);
var event_chan_13194 = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null));var c__5807__auto___13195 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5807__auto___13195,event_chan_13194,this$__$1){
return (function (){var f__5808__auto__ = (function (){var switch__5792__auto__ = ((function (c__5807__auto___13195,event_chan_13194,this$__$1){
return (function (state_13173){var state_val_13174 = (state_13173[(1)]);if((state_val_13174 === (7)))
{var inst_13153 = (state_13173[(7)]);var inst_13146 = (state_13173[(8)]);var inst_13146__$1 = (state_13173[(2)]);var inst_13147 = cljs.core.pr_str.call(null,inst_13146__$1);var inst_13148 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13147));var inst_13149 = breakfast.core.log.call(null,"IRC message: ",inst_13148);var inst_13153__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(inst_13146__$1);var inst_13154 = cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"message","message",-406056002),inst_13153__$1);var state_13173__$1 = (function (){var statearr_13175 = state_13173;(statearr_13175[(7)] = inst_13153__$1);
(statearr_13175[(8)] = inst_13146__$1);
(statearr_13175[(9)] = inst_13149);
return statearr_13175;
})();if(inst_13154)
{var statearr_13176_13196 = state_13173__$1;(statearr_13176_13196[(1)] = (8));
} else
{var statearr_13177_13197 = state_13173__$1;(statearr_13177_13197[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (1)))
{var state_13173__$1 = state_13173;var statearr_13178_13198 = state_13173__$1;(statearr_13178_13198[(2)] = null);
(statearr_13178_13198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (4)))
{var state_13173__$1 = state_13173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13173__$1,(7),event_chan_13194);
} else
{if((state_val_13174 === (6)))
{var inst_13169 = (state_13173[(2)]);var state_13173__$1 = state_13173;var statearr_13179_13199 = state_13173__$1;(statearr_13179_13199[(2)] = inst_13169);
(statearr_13179_13199[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (3)))
{var inst_13171 = (state_13173[(2)]);var state_13173__$1 = state_13173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13173__$1,inst_13171);
} else
{if((state_val_13174 === (2)))
{var state_13173__$1 = state_13173;var statearr_13180_13200 = state_13173__$1;(statearr_13180_13200[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (9)))
{var inst_13153 = (state_13173[(7)]);var inst_13161 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13153));var inst_13162 = (new Error(inst_13161));var inst_13163 = (function(){throw inst_13162})();var state_13173__$1 = state_13173;var statearr_13182_13201 = state_13173__$1;(statearr_13182_13201[(2)] = inst_13163);
(statearr_13182_13201[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (5)))
{var state_13173__$1 = state_13173;var statearr_13183_13202 = state_13173__$1;(statearr_13183_13202[(2)] = null);
(statearr_13183_13202[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (10)))
{var inst_13165 = (state_13173[(2)]);var state_13173__$1 = (function (){var statearr_13184 = state_13173;(statearr_13184[(10)] = inst_13165);
return statearr_13184;
})();var statearr_13185_13203 = state_13173__$1;(statearr_13185_13203[(2)] = null);
(statearr_13185_13203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13174 === (8)))
{var inst_13146 = (state_13173[(8)]);var inst_13156 = cljs.core.deref.call(null,self__.app);var inst_13157 = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(inst_13156);var inst_13158 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_13146);var inst_13159 = breakfast.core.post_message_BANG_.call(null,inst_13157,inst_13158);var state_13173__$1 = state_13173;var statearr_13186_13204 = state_13173__$1;(statearr_13186_13204[(2)] = inst_13159);
(statearr_13186_13204[(1)] = (10));
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
});})(c__5807__auto___13195,event_chan_13194,this$__$1))
;return ((function (switch__5792__auto__,c__5807__auto___13195,event_chan_13194,this$__$1){
return (function() {
var state_machine__5793__auto__ = null;
var state_machine__5793__auto____0 = (function (){var statearr_13190 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13190[(0)] = state_machine__5793__auto__);
(statearr_13190[(1)] = (1));
return statearr_13190;
});
var state_machine__5793__auto____1 = (function (state_13173){while(true){
var ret_value__5794__auto__ = (function (){try{while(true){
var result__5795__auto__ = switch__5792__auto__.call(null,state_13173);if(cljs.core.keyword_identical_QMARK_.call(null,result__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5795__auto__;
}
break;
}
}catch (e13191){if((e13191 instanceof Object))
{var ex__5796__auto__ = e13191;var statearr_13192_13205 = state_13173;(statearr_13192_13205[(5)] = ex__5796__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13191;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13206 = state_13173;
state_13173 = G__13206;
continue;
}
} else
{return ret_value__5794__auto__;
}
break;
}
});
state_machine__5793__auto__ = function(state_13173){
switch(arguments.length){
case 0:
return state_machine__5793__auto____0.call(this);
case 1:
return state_machine__5793__auto____1.call(this,state_13173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5793__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5793__auto____0;
state_machine__5793__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5793__auto____1;
return state_machine__5793__auto__;
})()
;})(switch__5792__auto__,c__5807__auto___13195,event_chan_13194,this$__$1))
})();var state__5809__auto__ = (function (){var statearr_13193 = f__5808__auto__.call(null);(statearr_13193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5807__auto___13195);
return statearr_13193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5809__auto__);
});})(c__5807__auto___13195,event_chan_13194,this$__$1))
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
breakfast.core.t13133.prototype.om$core$IInitState$ = true;
breakfast.core.t13133.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chans","chans",-1107816853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)))], null)], null);
});
breakfast.core.t13133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13135){var self__ = this;
var _13135__$1 = this;return self__.meta13134;
});
breakfast.core.t13133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13135,meta13134__$1){var self__ = this;
var _13135__$1 = this;return (new breakfast.core.t13133(self__.owner,self__.app,self__.app_view,meta13134__$1));
});
breakfast.core.__GT_t13133 = (function __GT_t13133(owner__$1,app__$1,app_view__$1,meta13134){return (new breakfast.core.t13133(owner__$1,app__$1,app_view__$1,meta13134));
});
}
return (new breakfast.core.t13133(owner,app,app_view,null));
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