(this["webpackJsonpfood-pick-up"]=this["webpackJsonpfood-pick-up"]||[]).push([[0],{176:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(64),l=t.n(r),c=(t(79),t(73)),o=(t(85),t(18)),s=t(4),u=t(5);function d(){var e=Object(s.a)(["\n  background-color: tomato;\n  width: 100px;\n  height: 40px;\n  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);\n  border: none;\n  font-size: 16px;\n  color: white;\n  transition: all 0.1s ease-in-out;\n\n  &:hover {\n    transform: scale(0.95);\n    background-color: white;\n    color: tomato;\n  }\n"]);return d=function(){return e},e}var p=u.a.button(d());var m=function(e){return i.a.createElement("div",null,i.a.createElement("a",{href:e.slug},i.a.createElement(p,null,"Read more")))};function f(){var e=Object(s.a)(["\n  width: 350px;\n  margin: 10px;\n  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);\n  margin-bottom: 50px;\n\n  :nth-child(1) {\n    margin-top: 100px;\n  }\n  h3 {\n    color: red;\n    text-align: center;\n    padding: 10px;\n  }\n\n  img {\n    width: 350px;\n    height: 300px;\n    object-fit: cover;\n  }\n\n  div {\n    padding: 5px;\n\n    div {\n      display: flex;\n      justify-content: space-evenly;\n\n      p {\n        color: #6e6e6e;\n      }\n    }\n  }\n"]);return f=function(){return e},e}var g=u.a.div(f());var h=function(e){return i.a.createElement(g,{key:e.i},i.a.createElement("img",{alt:"food",src:e.image}),i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("div",null,i.a.createElement("p",null,e.price," kr"),i.a.createElement("p",null,e.date),i.a.createElement("p",null,e.address)),i.a.createElement(m,{slug:e.slug})))},v=t(175).createClient({space:"z0hmv8oc0lsu",accessToken:"3-L9336mKejRFpzkQcUAMtzMJFB7Wwx-XMY3ZhYnQb8"});function x(){var e=Object(s.a)(["\n  width: 100vw;\n  background-color: white;\n  display: flex;\n  jusify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return x=function(){return e},e}var E=u.a.div(x());var b=function(){var e=i.a.useState(null),n=Object(o.a)(e,2),t=n[0],a=n[1];return i.a.useEffect((function(){v.getEntries({content_type:"quarantineFoodPickUp"}).then((function(e){a(e.items)}))}),[]),t?i.a.createElement(E,null,t&&t.map((function(e,n){var t=e.fields.pickUpDate.split("T"),a=t[0].split("-"),r="".concat(t[1]," ").concat(a[2],"/").concat(a[1],"/").concat(a[0]);return i.a.createElement(h,{key:n,title:e.fields.dish,image:e.fields.image.fields.file.url,price:e.fields.price,date:r,address:e.fields.pickUpAddress,slug:"posts/".concat(e.fields.slug)})}))):i.a.createElement("div",null,"Loading")};function w(){var e=Object(s.a)(["\n  width: 350px;\n  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);\n  margin-top: 100px;\n\n  h3 {\n    color: red;\n    text-align: center;\n  }\n  .portions {\n    text-align: right;\n    margin-top: -20px;\n    margin-bottom: 20px;\n  }\n  img {\n    width: 350px;\n    height: 300px;\n    object-fit: cover;\n  }\n\n  div {\n    padding: 10px;\n    .info-box {\n      display: flex;\n      justify-content: space-evenly;\n\n      p {\n        color: #6e6e6e;\n      }\n    }\n  }\n\n  .ingredients {\n    border: 1px solid #6e6e6e;\n    width: 50%;\n  }\n  ul {\n    list-style-type: none;\n  }\n"]);return w=function(){return e},e}var k=u.a.div(w());var y=function(e){return i.a.createElement(k,{key:e.i},i.a.createElement("img",{className:"image",alt:"food",src:e.image}),i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("p",{className:"portions"},e.portions," Portions"),i.a.createElement("div",{className:"info-box"},i.a.createElement("p",null,e.price," Kr"),i.a.createElement("p",null,e.date),i.a.createElement("p",null,e.address)),i.a.createElement("p",null,e.description),i.a.createElement("div",{className:"ingredients"},i.a.createElement("p",null,"Ingredients:"),i.a.createElement("ul",null,e.ingredients.map((function(e,n){return i.a.createElement("li",{key:n},e)}))))))};function j(){var e=Object(s.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return j=function(){return e},e}var O=u.a.div(j());var U=function(e){var n=i.a.useState(null),t=Object(o.a)(n,2),a=t[0],r=t[1];if(i.a.useEffect((function(){v.getEntries({content_type:"quarantineFoodPickUp","fields.slug":e.slug}).then((function(e){r(e.items[0])}))}),[e.slug]),!a)return i.a.createElement("div",null,"Loading");var l=a.fields.pickUpDate.split("T"),c=l[0].split("-"),s="".concat(l[1]," ").concat(c[2],"/").concat(c[1],"/").concat(c[0]);return i.a.createElement(O,null,i.a.createElement(y,{title:a.fields.dish,image:a.fields.image.fields.file.url,ingredients:a.fields.ingredients,portions:a.fields.portions,price:a.fields.price,date:s,address:a.fields.pickUpAddress,description:a.fields.description}))};function F(){var e=Object(s.a)(['\n  width: 100vw;\n  height: 60px;\n  background-color: tomato;\n  position: fixed;\n  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.41);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-family: "Raleway", sans-serif;\n    font-weight: 100;\n  }\n']);return F=function(){return e},e}var z=u.a.div(F());var M=function(){return i.a.createElement(z,null,i.a.createElement("h1",null,"Food pick up"))};var N=function(){return i.a.createElement("div",null,i.a.createElement(M,null),i.a.createElement(c.a,null,i.a.createElement(b,{path:"/"}),i.a.createElement(U,{path:"posts/:slug"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,n){},74:function(e,n,t){e.exports=t(176)},79:function(e,n,t){},85:function(e,n,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.0c6e4f0c.chunk.js.map