(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(6),c=s.n(r),i=s(2),o=s(7),u=s(8),a=s(1),l=(s(13),s(14),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var d=function(){var t=Object(a.useState)({sortType:n.NONE,isReversed:!1}),e=Object(o.a)(t,2),s=e[0],r=e[1],c=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);return c.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(b,s),d=Object(a.useRef)(null),g=Object(a.useRef)(null),j=Object(a.useRef)(null);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:" button is-info is-light ",onClick:function(t){!function(t){t.currentTarget.classList.remove("is-light"),g.current&&g.current.classList.add("is-light"),r((function(t){return Object(i.a)(Object(i.a)({},t),{},{sortType:n.ALPHABET})}))}(t)},ref:d,children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:" button is-success is-light ",onClick:function(t){!function(t){t.currentTarget.classList.remove("is-light"),d.current&&d.current.classList.add("is-light"),r((function(t){return Object(i.a)(Object(i.a)({},t),{},{sortType:n.LENGTH})}))}(t)},ref:g,children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:" button is-warning is-light ",onClick:function(t){!function(t){t.currentTarget.classList.toggle("is-light"),r((function(t){return Object(i.a)(Object(i.a)({},t),{},{isReversed:!t.isReversed})}))}(t)},ref:j,children:"Reverse"}),c.toString()!==b.toString()&&Object(l.jsx)("button",{type:"button",className:" button is-danger is-light ",onClick:function(){g.current&&g.current.classList.add("is-light"),d.current&&d.current.classList.add("is-light"),j.current&&j.current.classList.add("is-light"),r({sortType:n.NONE,isReversed:!1})},children:"Reset"})]}),Object(l.jsx)("ul",{children:c.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f3970b70.chunk.js.map