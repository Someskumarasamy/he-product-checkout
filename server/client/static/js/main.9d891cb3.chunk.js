(this.webpackJsonphackerend=this.webpackJsonphackerend||[]).push([[0],{17:function(e,t,a){e.exports=a(36)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(7),r=a.n(l),o=(a(22),a(23),a(10)),i=(a(24),a(25),a(26),a(40)),m=a(41),u=a(42),s=a(43),E=a(44),d=a(45),f=a(46),p=a(47),g=a(51),y=a(48),h=a(49),S=a(50),b=a(9),k=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],r=a[1],g=Object(n.useState)(130),y=Object(o.a)(g,2),h=y[0],S=y[1],k=Object(n.useState)(4),v=Object(o.a)(k,2),x=v[0],I=v[1],q=Object(n.useState)(!1),N=Object(o.a)(q,2),j=N[0],w=N[1];Object(n.useEffect)((function(){if(null==localStorage.getItem("checkoutdta")){var e=[{item:"pr-01",quantity:1,price:25},{item:"pr-02",quantity:1,price:30},{item:"pr-03",quantity:1,price:35},{item:"pr-04",quantity:1,price:40}];localStorage.setItem("checkoutdta",JSON.stringify(e)),r(e)}else JSON.stringify(l)!==localStorage.getItem("checkoutdta")&&(r(JSON.parse(localStorage.getItem("checkoutdta"))),I(Number(localStorage.getItem("quan"))),S(Number(localStorage.getItem("total"))))}),[l]),Object(n.useEffect)((function(){localStorage.setItem("quan",x),localStorage.setItem("total",h),0==x&&w(!0)}),[x]);return c.a.createElement(i.a,null,c.a.createElement(O,{isopen:j,close:function(){w(!1)},reload:function(){w(!1),localStorage.removeItem("checkoutdta"),r([]),S(130),I(4)}}),c.a.createElement(m.a,{className:"page-main"},c.a.createElement(u.a,{xs:"8",className:"product-left"},l.map((function(e,t){return c.a.createElement(s.a,{id:"item-".concat(e.item)},c.a.createElement(m.a,{className:"item-row",id:"items-".concat(t)},c.a.createElement(u.a,{xs:"3"},e.item),c.a.createElement(u.a,{xs:"3"},c.a.createElement("i",{role:"button",id:"a-".concat(t),onClick:function(e){e.preventDefault(),function(e){var t=e.split("a-")[1],a=l,n=a[t];n.quantity=n.quantity+1,a[t]=n,r(a),I(x+1),S(h+n.price),localStorage.setItem("checkoutdta",JSON.stringify(a))}(e.target.id)}},"+"),e.quantity,c.a.createElement("i",{role:"button",id:"m-".concat(t),onClick:function(e){e.preventDefault(),function(e){var t=e.split("m-")[1],a=l,n=a[t];0==n.quantity?b.b.error("the quatity is zero"):(n.quantity=n.quantity-1,a[t]=n,r(a),I(x-1),S(h-n.price),localStorage.setItem("checkoutdta",JSON.stringify(a)))}(e.target.id)}},"-")),c.a.createElement(u.a,{xs:"3",id:"p-".concat(t)},e.price),c.a.createElement(u.a,{xs:"3"},c.a.createElement("i",{role:"button",id:"r-".concat(t),onClick:function(e){e.preventDefault(),function(e){var t=e.split("r-")[1],a=l,n=a[t],c=n.quantity,o=c*n.price;n.quantity=0;l.indexOf(t);t>-1&&a.splice(t,1),r(a),S(h-o),I(x-c),Object(b.b)("Item Removed From Cart"),document.getElementById("item-".concat(n.item)).style="display:none",localStorage.setItem("checkoutdta",JSON.stringify(l))}(e.target.id)}},"X"))))}))),c.a.createElement(u.a,{xs:"4",className:"product-right"},c.a.createElement(E.a,null,c.a.createElement(d.a,null,"Total"),c.a.createElement(f.a,null,c.a.createElement(m.a,null,c.a.createElement(u.a,{xs:"5"},"Items (".concat(x,")")),c.a.createElement(u.a,{xs:"7"},h)),c.a.createElement(m.a,null,c.a.createElement(u.a,{xs:"5"},"Discount"),c.a.createElement(u.a,{xs:"7"},"10%")),c.a.createElement(m.a,null,c.a.createElement(u.a,{xs:"5"},"TypeDiscount"),c.a.createElement(u.a,{xs:"7"},"20%"))),c.a.createElement(p.a,null,c.a.createElement(m.a,null,c.a.createElement(u.a,{xs:"4"},"Total"),c.a.createElement(u.a,{xs:"8"},0==h?0:h+3)))))))},O=function(e){return c.a.createElement(g.a,{isOpen:e.isopen},c.a.createElement(y.a,{toggle:e.close},"Alert"),c.a.createElement(h.a,null,c.a.createElement(m.a,null,c.a.createElement("h2",null,"Reload deafult cart")),c.a.createElement(m.a,null,c.a.createElement(S.a,{className:"okbtn",onClick:function(t){e.reload()}},"yes"),c.a.createElement(S.a,{onClick:function(t){e.close()}},"no"))))};var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(b.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9d891cb3.chunk.js.map