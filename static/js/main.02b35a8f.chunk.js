(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{16:function(e,t,o){},23:function(e,t,o){},25:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(4),d=o.n(c),r=o(8),a=(o(16),o(2)),l=(o(23),o(1));function s(e){var t=e.title,o=e.body,n=e.handleRem,c=e.id;return Object(l.jsxs)("div",{className:"flex border-2 border-dark fade-in rounded p-4 flex-col",children:[Object(l.jsx)("p",{className:"font-bold",children:t}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:o}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){n(c)},className:"px-4 py-2 rounded text-white font-bold dark",children:"Remove Todo"})]})}function i(e){var t=function(e){for(var t=[],o=e.length-1;o>=0;o--)t.push(e[o]);return console.log(t),t}(Object(a.c)((function(e){return e}))),o=Object(a.c)((function(e){return e.length})),c=Object(a.b)(),d=Object(n.useState)(""),i=Object(r.a)(d,2),b=i[0],j=i[1],u=Object(n.useState)(""),x=Object(r.a)(u,2),O=x[0],f=x[1],p=function(t){c(e.remove(t))};return Object(l.jsxs)("div",{className:"mx-auto py-16 w-96",children:[Object(l.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(l.jsx)("h1",{className:"text-3xl font-bold",children:"Todo List"}),Object(l.jsx)("button",{onClick:function(){""!==b&&""!==O&&c(e.add(o+1,b,O)),j(""),f("")},className:"px-4 py-2 rounded text-white font-bold dark",children:"Add Todo"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("input",{value:b,onChange:function(e){j(e.target.value)},className:"border-2 rounded border-dark px-4 py-2",placeholder:"Enter Title"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{value:O,onChange:function(e){f(e.target.value)},className:"border-2 rounded border-dark px-4 py-2",placeholder:"Enter Body"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h2",{className:"text-xl font-bold",children:["Active Todos: ",o]}),Object(l.jsx)("br",{}),t.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s,{title:e.title,body:e.body,id:e.id,handleRem:p}),Object(l.jsx)("br",{})]})}))]})}var b=o(11),j=o(10),u="ADD_TODO",x="REM_TODO",O=[],f=localStorage.getItem("todos");null!==f&&(O=JSON.parse(f));var p={addTodo:function(e,t,o){return{type:u,payload:{id:e,title:t,body:o}}},removeTodo:function(e){return{type:x,payload:{id:e}}}},h=Object(b.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type===u?[].concat(Object(j.a)(e),[{id:t.payload.id,title:t.payload.title,body:t.payload.body}]):t.type===x?e.filter((function(e){return e.id!==t.payload.id})):e}));h.subscribe((function(){console.log(h.getState()),localStorage.setItem("todos",JSON.stringify(h.getState()))})),d.a.render(Object(l.jsx)(a.a,{store:h,children:Object(l.jsx)(i,{add:p.addTodo,remove:p.removeTodo})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.02b35a8f.chunk.js.map