(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),r=n(8),l=n(2),s=n(6),c=n(1),o=(n(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=n(0),d=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=function(e){var t=e.todo;return Object(u.jsxs)("article",{className:"TodoInfo\n     ".concat(t.completed?"TodoInfo--completed":""),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(u.jsx)(d,{user:t.user})]})},j=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(m,{todo:e},e.title)}))})};function b(e){return o.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:b(e.userId)})})),f=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),d=s[0],m=s[1],f=Object(c.useState)(h),O=Object(l.a)(f,2),p=O[0],x=O[1],v=Object(c.useState)(null),S=Object(l.a)(v,2),y=S[0],g=S[1],I=Object(c.useState)(null),N=Object(l.a)(I,2),_=N[0],C=N[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title",children:"Static list of todos"}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),d)if(n){var t=o.find((function(e){return e.name===n}));if(t){var i={id:h.length+1,title:d,userId:(null===t||void 0===t?void 0:t.id)||1,completed:!1,user:t?b(t.id):null};x((function(e){return[].concat(Object(r.a)(e),[i])})),m(""),a(""),g(null),C(null)}}else g("Please choose a user");else C("Please enter a title")},children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(u.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Enter title","data-cy":"titleInput",value:d,onChange:function(e){m(e.target.value),C(null)}}),_&&Object(u.jsx)("p",{className:"error-message",children:_}),Object(u.jsx)("label",{htmlFor:"user",children:"User:"}),Object(u.jsxs)("select",{id:"user",name:"userId","data-cy":"userSelect",value:n,onChange:function(e){a(e.target.value),g(null)},children:[Object(u.jsx)("option",{value:"",children:"Choose a user"}),o.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},d+e.id)}))]}),y&&Object(u.jsx)("p",{className:"error-message",children:y}),Object(u.jsx)("button",{type:"submit",children:"Add"})]}),Object(u.jsx)(j,{todos:p})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6705636b.chunk.js.map