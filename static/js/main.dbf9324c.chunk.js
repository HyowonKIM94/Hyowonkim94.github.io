(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),s=n.n(i),a=n(17),r=n.n(a),j=(n(66),n(44)),o=n(28),l=(n.p,n(67),n(105)),d=n(106),h=n(104),b=n(103),O=n(60),u=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States ",price:13e4}],x=n(22),p=n(7),m=n(39),f=n(40),g=(n(68),n(38)),v=n.n(g);function N(){var e=Object(m.a)(["\n    font-size :  25px;\n    color : ","\n"]);return N=function(){return e},e}function S(){var e=Object(m.a)(["\n    padding : 20px;\n    fontSize\n"]);return S=function(){return e},e}var k=f.a.div(S()),w=f.a.h4(N(),(function(e){return e.\uc0c9\uc0c1}));function B(e){return Object(c.jsxs)("p",{children:["\uc7ac\uace0: ",e.\uc7ac\uace0[0]," "]})}var C=function(e){var t=Object(i.useState)(!0),n=Object(o.a)(t,2),s=n[0],a=n[1];Object(i.useEffect)((function(){setTimeout((function(){a(!1)}),2e3)}),[]);var r=Object(p.f)(),j=Object(p.g)().id;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(k,{children:Object(c.jsx)(w,{className:"red",children:"Detail"})}),!0===s?Object(c.jsx)("div",{className:"my-alert2",children:Object(c.jsx)("p",{children:" \uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):null,Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(c.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(c.jsxs)("h4",{className:"pt-5",children:[" ",e.shoes[j].title]}),Object(c.jsx)("p",{children:e.shoes[j].content}),Object(c.jsxs)("p",{children:[e.shoes[j].price,"\uc6d0"]}),Object(c.jsx)(B,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,11,12])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){r.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})};function F(e){return Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("img",{src:"http://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(c.jsxs)("h4",{children:[" ",e.\uc2e0\ubc1c.title," "]}),Object(c.jsxs)("p",{children:[" ",e.\uc2e0\ubc1c.content," & ",e.\uc2e0\ubc1c.price," "]})]})}var y=function(){var e=Object(i.useState)(u),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)([10,11,12]),r=Object(o.a)(a,2),m=r[0],f=r[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(c.jsx)(l.a.Brand,{href:"#home",children:"Shoeshop"}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(d.a,{className:"ml-auto",children:[Object(c.jsx)(d.a.Link,{as:x.b,to:"/",children:" Home "}),Object(c.jsx)(d.a.Link,{as:x.b,to:"/detail",children:" Detail "}),Object(c.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(c.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(c.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(c.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(c.jsx)(h.a.Divider,{}),Object(c.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(c.jsxs)(p.c,{children:[Object(c.jsxs)(p.a,{exact:!0,path:"/",children:[Object(c.jsxs)(b.a,{className:"background",children:[Object(c.jsx)("h1",{children:"20% Season OFF"}),Object(c.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(c.jsx)("p",{children:Object(c.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(c.jsx)(F,{"\uc2e0\ubc1c":n[t],i:t})}))}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){v.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){s([].concat(Object(j.a)(n),Object(j.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:" \ub354\ubcf4\uae30"})]})]}),Object(c.jsx)(p.a,{path:"/detail/:id",children:Object(c.jsx)(C,{shoes:n,"\uc7ac\uace0":m,"\uc7ac\uace0\ubcc0\uacbd":f})}),Object(c.jsx)(p.a,{path:"/:id",children:Object(c.jsx)("idv",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc8fc\uc148"})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root")),I()}},[[97,1,2]]]);
//# sourceMappingURL=main.dbf9324c.chunk.js.map