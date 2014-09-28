// Compiled by ClojureScript 0.0-2342
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17257__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17256 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17256,(0),null);var body = cljs.core.nthnext.call(null,vec__17256,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17257 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17257__delegate.call(this,args);};
G__17257.cljs$lang$maxFixedArity = 0;
G__17257.cljs$lang$applyTo = (function (arglist__17258){
var args = cljs.core.seq(arglist__17258);
return G__17257__delegate(args);
});
G__17257.cljs$core$IFn$_invoke$arity$variadic = G__17257__delegate;
return G__17257;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8730__auto__ = (function iter__17263(s__17264){return (new cljs.core.LazySeq(null,(function (){var s__17264__$1 = s__17264;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17264__$1);if(temp__4126__auto__)
{var s__17264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17264__$2))
{var c__8728__auto__ = cljs.core.chunk_first.call(null,s__17264__$2);var size__8729__auto__ = cljs.core.count.call(null,c__8728__auto__);var b__17266 = cljs.core.chunk_buffer.call(null,size__8729__auto__);if((function (){var i__17265 = (0);while(true){
if((i__17265 < size__8729__auto__))
{var args = cljs.core._nth.call(null,c__8728__auto__,i__17265);cljs.core.chunk_append.call(null,b__17266,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__17267 = (i__17265 + (1));
i__17265 = G__17267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17266),iter__17263.call(null,cljs.core.chunk_rest.call(null,s__17264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17266),null);
}
} else
{var args = cljs.core.first.call(null,s__17264__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__17263.call(null,cljs.core.rest.call(null,s__17264__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8730__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8730__auto__ = (function iter__17272(s__17273){return (new cljs.core.LazySeq(null,(function (){var s__17273__$1 = s__17273;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17273__$1);if(temp__4126__auto__)
{var s__17273__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17273__$2))
{var c__8728__auto__ = cljs.core.chunk_first.call(null,s__17273__$2);var size__8729__auto__ = cljs.core.count.call(null,c__8728__auto__);var b__17275 = cljs.core.chunk_buffer.call(null,size__8729__auto__);if((function (){var i__17274 = (0);while(true){
if((i__17274 < size__8729__auto__))
{var style = cljs.core._nth.call(null,c__8728__auto__,i__17274);cljs.core.chunk_append.call(null,b__17275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__17276 = (i__17274 + (1));
i__17274 = G__17276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17275),iter__17272.call(null,cljs.core.chunk_rest.call(null,s__17273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17275),null);
}
} else
{var style = cljs.core.first.call(null,s__17273__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__17272.call(null,cljs.core.rest.call(null,s__17273__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8730__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17277){
var styles = cljs.core.seq(arglist__17277);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17278 = (function() { 
var link_to17278__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17278 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17278__delegate.call(this,url,content);};
link_to17278.cljs$lang$maxFixedArity = 1;
link_to17278.cljs$lang$applyTo = (function (arglist__17279){
var url = cljs.core.first(arglist__17279);
var content = cljs.core.rest(arglist__17279);
return link_to17278__delegate(url,content);
});
link_to17278.cljs$core$IFn$_invoke$arity$variadic = link_to17278__delegate;
return link_to17278;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17278);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17280 = (function() { 
var mail_to17280__delegate = function (e_mail,p__17281){var vec__17283 = p__17281;var content = cljs.core.nth.call(null,vec__17283,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__7992__auto__ = content;if(cljs.core.truth_(or__7992__auto__))
{return or__7992__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17280 = function (e_mail,var_args){
var p__17281 = null;if (arguments.length > 1) {
  p__17281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17280__delegate.call(this,e_mail,p__17281);};
mail_to17280.cljs$lang$maxFixedArity = 1;
mail_to17280.cljs$lang$applyTo = (function (arglist__17284){
var e_mail = cljs.core.first(arglist__17284);
var p__17281 = cljs.core.rest(arglist__17284);
return mail_to17280__delegate(e_mail,p__17281);
});
mail_to17280.cljs$core$IFn$_invoke$arity$variadic = mail_to17280__delegate;
return mail_to17280;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17280);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17285 = (function unordered_list17285(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__8730__auto__ = (function iter__17290(s__17291){return (new cljs.core.LazySeq(null,(function (){var s__17291__$1 = s__17291;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17291__$1);if(temp__4126__auto__)
{var s__17291__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17291__$2))
{var c__8728__auto__ = cljs.core.chunk_first.call(null,s__17291__$2);var size__8729__auto__ = cljs.core.count.call(null,c__8728__auto__);var b__17293 = cljs.core.chunk_buffer.call(null,size__8729__auto__);if((function (){var i__17292 = (0);while(true){
if((i__17292 < size__8729__auto__))
{var x = cljs.core._nth.call(null,c__8728__auto__,i__17292);cljs.core.chunk_append.call(null,b__17293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17294 = (i__17292 + (1));
i__17292 = G__17294;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17293),iter__17290.call(null,cljs.core.chunk_rest.call(null,s__17291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17293),null);
}
} else
{var x = cljs.core.first.call(null,s__17291__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17290.call(null,cljs.core.rest.call(null,s__17291__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8730__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17285);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17295 = (function ordered_list17295(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__8730__auto__ = (function iter__17300(s__17301){return (new cljs.core.LazySeq(null,(function (){var s__17301__$1 = s__17301;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17301__$1);if(temp__4126__auto__)
{var s__17301__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17301__$2))
{var c__8728__auto__ = cljs.core.chunk_first.call(null,s__17301__$2);var size__8729__auto__ = cljs.core.count.call(null,c__8728__auto__);var b__17303 = cljs.core.chunk_buffer.call(null,size__8729__auto__);if((function (){var i__17302 = (0);while(true){
if((i__17302 < size__8729__auto__))
{var x = cljs.core._nth.call(null,c__8728__auto__,i__17302);cljs.core.chunk_append.call(null,b__17303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__17304 = (i__17302 + (1));
i__17302 = G__17304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17303),iter__17300.call(null,cljs.core.chunk_rest.call(null,s__17301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17303),null);
}
} else
{var x = cljs.core.first.call(null,s__17301__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__17300.call(null,cljs.core.rest.call(null,s__17301__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8730__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17295);
/**
* Create an image element.
*/
sablono.core.image17305 = (function() {
var image17305 = null;
var image17305__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image17305__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image17305 = function(src,alt){
switch(arguments.length){
case 1:
return image17305__1.call(this,src);
case 2:
return image17305__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17305.cljs$core$IFn$_invoke$arity$1 = image17305__1;
image17305.cljs$core$IFn$_invoke$arity$2 = image17305__2;
return image17305;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17305);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17306_SHARP_,p2__17307_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17306_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17307_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17308_SHARP_,p2__17309_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17308_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17309_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17310 = (function() {
var color_field17310 = null;
var color_field17310__1 = (function (name__11071__auto__){return color_field17310.call(null,name__11071__auto__,null);
});
var color_field17310__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11071__auto__,value__11072__auto__);
});
color_field17310 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return color_field17310__1.call(this,name__11071__auto__);
case 2:
return color_field17310__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17310.cljs$core$IFn$_invoke$arity$1 = color_field17310__1;
color_field17310.cljs$core$IFn$_invoke$arity$2 = color_field17310__2;
return color_field17310;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17310);
/**
* Creates a date input field.
*/
sablono.core.date_field17311 = (function() {
var date_field17311 = null;
var date_field17311__1 = (function (name__11071__auto__){return date_field17311.call(null,name__11071__auto__,null);
});
var date_field17311__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11071__auto__,value__11072__auto__);
});
date_field17311 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return date_field17311__1.call(this,name__11071__auto__);
case 2:
return date_field17311__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17311.cljs$core$IFn$_invoke$arity$1 = date_field17311__1;
date_field17311.cljs$core$IFn$_invoke$arity$2 = date_field17311__2;
return date_field17311;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17311);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17312 = (function() {
var datetime_field17312 = null;
var datetime_field17312__1 = (function (name__11071__auto__){return datetime_field17312.call(null,name__11071__auto__,null);
});
var datetime_field17312__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11071__auto__,value__11072__auto__);
});
datetime_field17312 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return datetime_field17312__1.call(this,name__11071__auto__);
case 2:
return datetime_field17312__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17312.cljs$core$IFn$_invoke$arity$1 = datetime_field17312__1;
datetime_field17312.cljs$core$IFn$_invoke$arity$2 = datetime_field17312__2;
return datetime_field17312;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17312);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17313 = (function() {
var datetime_local_field17313 = null;
var datetime_local_field17313__1 = (function (name__11071__auto__){return datetime_local_field17313.call(null,name__11071__auto__,null);
});
var datetime_local_field17313__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11071__auto__,value__11072__auto__);
});
datetime_local_field17313 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17313__1.call(this,name__11071__auto__);
case 2:
return datetime_local_field17313__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17313.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17313__1;
datetime_local_field17313.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17313__2;
return datetime_local_field17313;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17313);
/**
* Creates a email input field.
*/
sablono.core.email_field17314 = (function() {
var email_field17314 = null;
var email_field17314__1 = (function (name__11071__auto__){return email_field17314.call(null,name__11071__auto__,null);
});
var email_field17314__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11071__auto__,value__11072__auto__);
});
email_field17314 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return email_field17314__1.call(this,name__11071__auto__);
case 2:
return email_field17314__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17314.cljs$core$IFn$_invoke$arity$1 = email_field17314__1;
email_field17314.cljs$core$IFn$_invoke$arity$2 = email_field17314__2;
return email_field17314;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17314);
/**
* Creates a file input field.
*/
sablono.core.file_field17315 = (function() {
var file_field17315 = null;
var file_field17315__1 = (function (name__11071__auto__){return file_field17315.call(null,name__11071__auto__,null);
});
var file_field17315__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11071__auto__,value__11072__auto__);
});
file_field17315 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return file_field17315__1.call(this,name__11071__auto__);
case 2:
return file_field17315__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17315.cljs$core$IFn$_invoke$arity$1 = file_field17315__1;
file_field17315.cljs$core$IFn$_invoke$arity$2 = file_field17315__2;
return file_field17315;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17315);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17316 = (function() {
var hidden_field17316 = null;
var hidden_field17316__1 = (function (name__11071__auto__){return hidden_field17316.call(null,name__11071__auto__,null);
});
var hidden_field17316__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11071__auto__,value__11072__auto__);
});
hidden_field17316 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return hidden_field17316__1.call(this,name__11071__auto__);
case 2:
return hidden_field17316__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17316.cljs$core$IFn$_invoke$arity$1 = hidden_field17316__1;
hidden_field17316.cljs$core$IFn$_invoke$arity$2 = hidden_field17316__2;
return hidden_field17316;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17316);
/**
* Creates a month input field.
*/
sablono.core.month_field17317 = (function() {
var month_field17317 = null;
var month_field17317__1 = (function (name__11071__auto__){return month_field17317.call(null,name__11071__auto__,null);
});
var month_field17317__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11071__auto__,value__11072__auto__);
});
month_field17317 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return month_field17317__1.call(this,name__11071__auto__);
case 2:
return month_field17317__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17317.cljs$core$IFn$_invoke$arity$1 = month_field17317__1;
month_field17317.cljs$core$IFn$_invoke$arity$2 = month_field17317__2;
return month_field17317;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17317);
/**
* Creates a number input field.
*/
sablono.core.number_field17318 = (function() {
var number_field17318 = null;
var number_field17318__1 = (function (name__11071__auto__){return number_field17318.call(null,name__11071__auto__,null);
});
var number_field17318__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11071__auto__,value__11072__auto__);
});
number_field17318 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return number_field17318__1.call(this,name__11071__auto__);
case 2:
return number_field17318__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17318.cljs$core$IFn$_invoke$arity$1 = number_field17318__1;
number_field17318.cljs$core$IFn$_invoke$arity$2 = number_field17318__2;
return number_field17318;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17318);
/**
* Creates a password input field.
*/
sablono.core.password_field17319 = (function() {
var password_field17319 = null;
var password_field17319__1 = (function (name__11071__auto__){return password_field17319.call(null,name__11071__auto__,null);
});
var password_field17319__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11071__auto__,value__11072__auto__);
});
password_field17319 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return password_field17319__1.call(this,name__11071__auto__);
case 2:
return password_field17319__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17319.cljs$core$IFn$_invoke$arity$1 = password_field17319__1;
password_field17319.cljs$core$IFn$_invoke$arity$2 = password_field17319__2;
return password_field17319;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17319);
/**
* Creates a range input field.
*/
sablono.core.range_field17320 = (function() {
var range_field17320 = null;
var range_field17320__1 = (function (name__11071__auto__){return range_field17320.call(null,name__11071__auto__,null);
});
var range_field17320__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11071__auto__,value__11072__auto__);
});
range_field17320 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return range_field17320__1.call(this,name__11071__auto__);
case 2:
return range_field17320__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17320.cljs$core$IFn$_invoke$arity$1 = range_field17320__1;
range_field17320.cljs$core$IFn$_invoke$arity$2 = range_field17320__2;
return range_field17320;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17320);
/**
* Creates a search input field.
*/
sablono.core.search_field17321 = (function() {
var search_field17321 = null;
var search_field17321__1 = (function (name__11071__auto__){return search_field17321.call(null,name__11071__auto__,null);
});
var search_field17321__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11071__auto__,value__11072__auto__);
});
search_field17321 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return search_field17321__1.call(this,name__11071__auto__);
case 2:
return search_field17321__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17321.cljs$core$IFn$_invoke$arity$1 = search_field17321__1;
search_field17321.cljs$core$IFn$_invoke$arity$2 = search_field17321__2;
return search_field17321;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17321);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17322 = (function() {
var tel_field17322 = null;
var tel_field17322__1 = (function (name__11071__auto__){return tel_field17322.call(null,name__11071__auto__,null);
});
var tel_field17322__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11071__auto__,value__11072__auto__);
});
tel_field17322 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return tel_field17322__1.call(this,name__11071__auto__);
case 2:
return tel_field17322__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17322.cljs$core$IFn$_invoke$arity$1 = tel_field17322__1;
tel_field17322.cljs$core$IFn$_invoke$arity$2 = tel_field17322__2;
return tel_field17322;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17322);
/**
* Creates a text input field.
*/
sablono.core.text_field17323 = (function() {
var text_field17323 = null;
var text_field17323__1 = (function (name__11071__auto__){return text_field17323.call(null,name__11071__auto__,null);
});
var text_field17323__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11071__auto__,value__11072__auto__);
});
text_field17323 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return text_field17323__1.call(this,name__11071__auto__);
case 2:
return text_field17323__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17323.cljs$core$IFn$_invoke$arity$1 = text_field17323__1;
text_field17323.cljs$core$IFn$_invoke$arity$2 = text_field17323__2;
return text_field17323;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17323);
/**
* Creates a time input field.
*/
sablono.core.time_field17324 = (function() {
var time_field17324 = null;
var time_field17324__1 = (function (name__11071__auto__){return time_field17324.call(null,name__11071__auto__,null);
});
var time_field17324__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11071__auto__,value__11072__auto__);
});
time_field17324 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return time_field17324__1.call(this,name__11071__auto__);
case 2:
return time_field17324__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17324.cljs$core$IFn$_invoke$arity$1 = time_field17324__1;
time_field17324.cljs$core$IFn$_invoke$arity$2 = time_field17324__2;
return time_field17324;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17324);
/**
* Creates a url input field.
*/
sablono.core.url_field17325 = (function() {
var url_field17325 = null;
var url_field17325__1 = (function (name__11071__auto__){return url_field17325.call(null,name__11071__auto__,null);
});
var url_field17325__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11071__auto__,value__11072__auto__);
});
url_field17325 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return url_field17325__1.call(this,name__11071__auto__);
case 2:
return url_field17325__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17325.cljs$core$IFn$_invoke$arity$1 = url_field17325__1;
url_field17325.cljs$core$IFn$_invoke$arity$2 = url_field17325__2;
return url_field17325;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17325);
/**
* Creates a week input field.
*/
sablono.core.week_field17326 = (function() {
var week_field17326 = null;
var week_field17326__1 = (function (name__11071__auto__){return week_field17326.call(null,name__11071__auto__,null);
});
var week_field17326__2 = (function (name__11071__auto__,value__11072__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11071__auto__,value__11072__auto__);
});
week_field17326 = function(name__11071__auto__,value__11072__auto__){
switch(arguments.length){
case 1:
return week_field17326__1.call(this,name__11071__auto__);
case 2:
return week_field17326__2.call(this,name__11071__auto__,value__11072__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17326.cljs$core$IFn$_invoke$arity$1 = week_field17326__1;
week_field17326.cljs$core$IFn$_invoke$arity$2 = week_field17326__2;
return week_field17326;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17326);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17327 = (function() {
var check_box17327 = null;
var check_box17327__1 = (function (name){return check_box17327.call(null,name,null);
});
var check_box17327__2 = (function (name,checked_QMARK_){return check_box17327.call(null,name,checked_QMARK_,"true");
});
var check_box17327__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box17327 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17327__1.call(this,name);
case 2:
return check_box17327__2.call(this,name,checked_QMARK_);
case 3:
return check_box17327__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17327.cljs$core$IFn$_invoke$arity$1 = check_box17327__1;
check_box17327.cljs$core$IFn$_invoke$arity$2 = check_box17327__2;
check_box17327.cljs$core$IFn$_invoke$arity$3 = check_box17327__3;
return check_box17327;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17327);
/**
* Creates a radio button.
*/
sablono.core.radio_button17328 = (function() {
var radio_button17328 = null;
var radio_button17328__1 = (function (group){return radio_button17328.call(null,group,null);
});
var radio_button17328__2 = (function (group,checked_QMARK_){return radio_button17328.call(null,group,checked_QMARK_,"true");
});
var radio_button17328__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button17328 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17328__1.call(this,group);
case 2:
return radio_button17328__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17328__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17328.cljs$core$IFn$_invoke$arity$1 = radio_button17328__1;
radio_button17328.cljs$core$IFn$_invoke$arity$2 = radio_button17328__2;
radio_button17328.cljs$core$IFn$_invoke$arity$3 = radio_button17328__3;
return radio_button17328;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17328);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17329 = (function() {
var select_options17329 = null;
var select_options17329__1 = (function (coll){return select_options17329.call(null,coll,null);
});
var select_options17329__2 = (function (coll,selected){var iter__8730__auto__ = (function iter__17338(s__17339){return (new cljs.core.LazySeq(null,(function (){var s__17339__$1 = s__17339;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17339__$1);if(temp__4126__auto__)
{var s__17339__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17339__$2))
{var c__8728__auto__ = cljs.core.chunk_first.call(null,s__17339__$2);var size__8729__auto__ = cljs.core.count.call(null,c__8728__auto__);var b__17341 = cljs.core.chunk_buffer.call(null,size__8729__auto__);if((function (){var i__17340 = (0);while(true){
if((i__17340 < size__8729__auto__))
{var x = cljs.core._nth.call(null,c__8728__auto__,i__17340);cljs.core.chunk_append.call(null,b__17341,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17344 = x;var text = cljs.core.nth.call(null,vec__17344,(0),null);var val = cljs.core.nth.call(null,vec__17344,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17344,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17329.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17346 = (i__17340 + (1));
i__17340 = G__17346;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17341),iter__17338.call(null,cljs.core.chunk_rest.call(null,s__17339__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17341),null);
}
} else
{var x = cljs.core.first.call(null,s__17339__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17345 = x;var text = cljs.core.nth.call(null,vec__17345,(0),null);var val = cljs.core.nth.call(null,vec__17345,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17345,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options17329.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17338.call(null,cljs.core.rest.call(null,s__17339__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8730__auto__.call(null,coll);
});
select_options17329 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17329__1.call(this,coll);
case 2:
return select_options17329__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17329.cljs$core$IFn$_invoke$arity$1 = select_options17329__1;
select_options17329.cljs$core$IFn$_invoke$arity$2 = select_options17329__2;
return select_options17329;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17329);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17347 = (function() {
var drop_down17347 = null;
var drop_down17347__2 = (function (name,options){return drop_down17347.call(null,name,options,null);
});
var drop_down17347__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17347 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17347__2.call(this,name,options);
case 3:
return drop_down17347__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17347.cljs$core$IFn$_invoke$arity$2 = drop_down17347__2;
drop_down17347.cljs$core$IFn$_invoke$arity$3 = drop_down17347__3;
return drop_down17347;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17347);
/**
* Creates a text area element.
*/
sablono.core.text_area17348 = (function() {
var text_area17348 = null;
var text_area17348__1 = (function (name){return text_area17348.call(null,name,null);
});
var text_area17348__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area17348 = function(name,value){
switch(arguments.length){
case 1:
return text_area17348__1.call(this,name);
case 2:
return text_area17348__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17348.cljs$core$IFn$_invoke$arity$1 = text_area17348__1;
text_area17348.cljs$core$IFn$_invoke$arity$2 = text_area17348__2;
return text_area17348;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17348);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17349 = (function label17349(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17349);
/**
* Creates a submit button.
*/
sablono.core.submit_button17350 = (function submit_button17350(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17350);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17351 = (function reset_button17351(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17351);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17352 = (function() { 
var form_to17352__delegate = function (p__17353,body){var vec__17355 = p__17353;var method = cljs.core.nth.call(null,vec__17355,(0),null);var action = cljs.core.nth.call(null,vec__17355,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17352 = function (p__17353,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17352__delegate.call(this,p__17353,body);};
form_to17352.cljs$lang$maxFixedArity = 1;
form_to17352.cljs$lang$applyTo = (function (arglist__17356){
var p__17353 = cljs.core.first(arglist__17356);
var body = cljs.core.rest(arglist__17356);
return form_to17352__delegate(p__17353,body);
});
form_to17352.cljs$core$IFn$_invoke$arity$variadic = form_to17352__delegate;
return form_to17352;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17352);

//# sourceMappingURL=core.js.map