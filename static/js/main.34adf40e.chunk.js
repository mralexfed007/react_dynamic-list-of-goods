(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),u=n(5),i=n(1),s=n.n(i),l=n(2);n(12);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var p=function(){var t=Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return(e=t.sent).sort((function(t,e){return t.name.localeCompare(e.name)})),e.length=5,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name,"---",t.color)})))},b=function(){var t=function(){var t=Object(l.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e=Object(r.useState)([]),n=Object(u.a)(e,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){t(f)}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("button",{type:"submit",onClick:function(){return t(f)}},"all"),a.a.createElement("button",{type:"submit",onClick:function(){return t(m)}},"red"),a.a.createElement("button",{type:"submit",onClick:function(){return t(p)}},"5")),a.a.createElement(d,{goods:c}))};o.a.render(a.a.createElement(b,null),document.getElementById("root"))},6:function(t,e,n){t.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.34adf40e.chunk.js.map