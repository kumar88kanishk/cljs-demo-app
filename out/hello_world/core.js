// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.core');
hello_world.core.global$module$react_dom = goog.global["ReactDOM"];
hello_world.core.click_count = reagent.core.atom.call(null,(0));
hello_world.core.counting_component = (function hello_world$core$counting_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The state has a value: ",cljs.core.deref.call(null,hello_world.core.click_count),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,hello_world.core.click_count,cljs.core.inc);
})], null)], null)], null);
});
ReactDOM.render(React.createElement(hello_world.core.counting_component),document.getElementById("app"));

//# sourceMappingURL=core.js.map
