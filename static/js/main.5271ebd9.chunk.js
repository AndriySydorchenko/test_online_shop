(this.webpackJsonptest_online_shop=this.webpackJsonptest_online_shop||[]).push([[0],[,,,,,,,,,,,,function(t,e,c){t.exports={compareProduct__wrapper:"CompareProduct_compareProduct__wrapper__iKFO0",compareProduct__imgWrapper:"CompareProduct_compareProduct__imgWrapper__1BqaR",compareProduct__productInfo:"CompareProduct_compareProduct__productInfo__OLBy0",compareProduct__img:"CompareProduct_compareProduct__img__2uQrJ",compareProduct__title:"CompareProduct_compareProduct__title__32Kq6",compareProduct__text:"CompareProduct_compareProduct__text__2xazR",compareProduct__button:"CompareProduct_compareProduct__button__14I8p"}},function(t,e,c){t.exports={productCard:"ProductCard_productCard__3XkVO",productCard_wrapper:"ProductCard_productCard_wrapper__15vim",productCard__imgWrapper:"ProductCard_productCard__imgWrapper__1Dsby",productCard__img:"ProductCard_productCard__img__96RMU",productCard__compareImg:"ProductCard_productCard__compareImg__1rrLX",productCard__title:"ProductCard_productCard__title__8aQg0",productCard__text:"ProductCard_productCard__text__gAdhn",productCard__priceAndColor:"ProductCard_productCard__priceAndColor__2Ny5X",productCard__bay:"ProductCard_productCard__bay__2J6aH"}},,function(t,e,c){t.exports={productCart:"ProductCart_productCart__2HhKH",productCart__imgWrapper:"ProductCart_productCart__imgWrapper__2wFZa",productCart__img:"ProductCart_productCart__img__2TI5H",productCart__title:"ProductCart_productCart__title__1G_Os",productCart__text:"ProductCart_productCart__text__3KIbw"}},,function(t,e,c){t.exports={dropList:"DropList_dropList__17fWt",dropList__header:"DropList_dropList__header__2jJNk",dropList__arrowDown:"DropList_dropList__arrowDown__2NcNG",dropList__list:"DropList_dropList__list__3kIMn",dropList__list_close:"DropList_dropList__list_close__1kQZ3",dropList__item:"DropList_dropList__item__18oWl"}},function(t,e,c){t.exports={comparePage:"ComparePage_comparePage__1Kn7y",comparePage__wrapper:"ComparePage_comparePage__wrapper__g15Zm",comparePage__header:"ComparePage_comparePage__header__3ycci"}},,,,,function(t,e,c){t.exports={counter:"Counter_counter__1W1Qv",counter__item:"Counter_counter__item__m8UDG"}},,,,function(t,e,c){t.exports={customRadio:"Radio_customRadio__lyyq5",radio:"Radio_radio__25l6d",radio__text:"Radio_radio__text__3GdNA"}},function(t,e,c){t.exports={productPage:"AllProductPage_productPage__2GFOd",productPage__link:"AllProductPage_productPage__link__3YHVt"}},function(t,e,c){t.exports={returnDeleted:"RerturnDeleted_returnDeleted__UrLJ_",returnDeleted__productInfo:"RerturnDeleted_returnDeleted__productInfo__3vBfD",returnDeleted__icon:"RerturnDeleted_returnDeleted__icon__2zmEu"}},,,,,,function(t,e,c){t.exports={newProduct:"NewProduct_newProduct__1rSSm"}},,function(t,e,c){t.exports={cardPage__funtionalItems:"CartPage_cardPage__funtionalItems__3DCkt"}},,,,,function(t,e,c){},,,,,function(t,e,c){},,,,function(t,e,c){"use strict";c.r(e);var r=c(1),a=c.n(r),o=c(24),n=c.n(o),i=(c(42),c(5)),d=c(7),s=c(6),u=c(4),l=c(0),_=function(){return Object(l.jsx)("section",{children:Object(l.jsx)("h2",{children:"NO MATCH ERROR 404"})})},p=c(3),j=c(20),m=c(13),b=c.n(m),O=c(27),x=c.n(O),g=function(t){var e=t.text,c=t.id,r=t.checked,a=t.handleChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"radio",id:c,className:x.a.customRadio,checked:r,onChange:a}),Object(l.jsx)("label",{className:x.a.radio,htmlFor:c,children:Object(l.jsx)("span",{className:x.a.radio__text,children:e})})]})},h=function(t){var e=t.volumeList,c=t.setVolume,r=function(t){var r=t.target.id;c(function(t){return e.map((function(e){return e.id===t?Object(p.a)(Object(p.a)({},e),{},{checked:!0}):Object(p.a)(Object(p.a)({},e),{},{checked:!1})}))}(r))},a=e.map((function(t){return Object(l.jsx)(g,Object(p.a)(Object(p.a)({},t),{},{handleChange:r}))}));return Object(l.jsx)("div",{children:a})},C=c(23),A=c.n(C),f=function(t){var e=t.count,c=t.setCount;t.id;return Object(l.jsxs)("div",{className:A.a.counter,children:[Object(l.jsx)("span",{className:A.a.counter__item,onClick:function(){e>1&&c(e-1)},children:"-"}),Object(l.jsx)("span",{className:A.a.counter__item,children:e}),Object(l.jsx)("span",{className:A.a.counter__item,onClick:function(){c(e+1)},children:"+"})]})},P={basic:"button-basic",outline:"button-outline",inactive:"button-inactive",success:"button-success",alert:"button-alert"},v=(c(47),function(t){var e=t.text,c=t.type,r=t.classType,a=t.additionalClass,o=t.handleClick,n=t.disabled,i=n?"button-disabled":"",d="button ".concat(P[r]," ").concat(a," ").concat(i);return Object(l.jsx)("button",{type:c,className:d,onClick:o,disabled:n,children:e})}),N=v;v.defaultProps={additionalClass:"",type:"button",disabled:!1};var I=c(17),L=c.n(I),S=function(t){var e=t.colors,c=t.color,a=t.setColor,o=Object(r.useState)(!1),n=Object(j.a)(o,2),i=n[0],d=n[1],s=i?L.a.dropList__list:"".concat(L.a.dropList__list," ").concat(L.a.dropList__list_close),u=e.map((function(t){return Object(l.jsx)("li",{className:L.a.dropList__item,onClick:function(){a(t),d(!i)},children:t})}));return Object(l.jsxs)("div",{className:L.a.dropList,children:[Object(l.jsxs)("div",{className:L.a.dropList__header,onClick:function(){return d(!i)},children:[Object(l.jsx)("span",{children:c}),Object(l.jsx)("i",{className:L.a.dropList__arrowDown})]}),Object(l.jsx)("ul",{className:s,children:u})]})},k=c(35),y=c.n(k),w=function(){return Object(l.jsx)("div",{className:y.a.newProduct,children:"NEW"})},R=c(16),E=Object(R.b)({name:"cart",initialState:{products:[],deletingId:null},reducers:{addProduct:function(t,e){var c=e.payload.id;if(t.products.findIndex((function(t){return t.id===c}))<0){var r=JSON.stringify([].concat(Object(s.a)(t.products),[e.payload]));return localStorage.setItem("cart",r),Object(p.a)(Object(p.a)({},t),{},{products:[].concat(Object(s.a)(t.products),[e.payload])})}var a=t.products.map((function(t){var e=Object(p.a)({},t);return e.id===c&&e.count++,e})),o=JSON.stringify(a);return localStorage.setItem("cart",o),Object(p.a)(Object(p.a)({},t),{},{products:a})},setCountStore:function(t,e){var c=t.products.map((function(t){return t.id===e.payload.id?Object(p.a)(Object(p.a)({},t),{},{count:e.payload.count}):t})),r=JSON.stringify(c);return localStorage.setItem("cart",r),Object(p.a)(Object(p.a)({},t),{},{products:Object(s.a)(c)})},setDeletingItem:function(t,e){return Object(p.a)(Object(p.a)({},t),{},{deletingId:e.payload})},deleteProduct:function(t,e){if(t.deletingId){var c=t.products.filter((function(e){return e.id!==t.deletingId}));JSON.stringify(c);return localStorage.setItem("cart",null),{products:c,deletingId:null}}return Object(p.a)(Object(p.a)({},t),{},{deletingId:null})}}}),T=E.actions,D=T.addProduct,B=T.setCountStore,F=T.setDeletingItem,U=T.deleteProduct,J=Object(R.b)({name:"compare",initialState:[],reducers:{addProductToCompare:function(t,e){if(t.includes(e.payload)){var c=JSON.stringify(Object(s.a)(t));return localStorage.setItem("compare",c),Object(s.a)(t)}var r=JSON.stringify([].concat(Object(s.a)(t),[e.payload]));return localStorage.setItem("compare",r),[].concat(Object(s.a)(t),[e.payload])}}}),H=J.actions.addProductToCompare,M=function(t){var e=t.id,c=t.title,a=t.price,o=t.img,n=t.description,d=t.colors,u=t.volumes,_=t.newProduct,p=Object(i.c)(),m=Object(r.useState)("\u0426\u0432\u0435\u0442"),O=Object(j.a)(m,2),x=O[0],g=O[1],C=Object(r.useState)(u),A=Object(j.a)(C,2),P=A[0],v=A[1],I=Object(r.useState)(1),L=Object(j.a)(I,2),k=L[0],y=L[1],R=_?Object(l.jsx)(w,{}):Object(l.jsx)("div",{});return Object(l.jsxs)("div",{className:b.a.productCard,children:[Object(l.jsxs)("div",{className:b.a.productCard_wrapper,children:[R,Object(l.jsx)("div",{className:b.a.productCard__imgWrapper,children:Object(l.jsx)("img",{src:o,alt:"shampoo",className:b.a.productCard__img})}),Object(l.jsx)("div",{className:b.a.productCard__compareImg,onClick:function(){p(H(e))},children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHMSURBVHgBrVRLTsMwEH0OLUiARLlBuEEigsSOcALgBkGCwo5yAsoJyBIFpMINuEHbHYIgegN6hC74iXzMs92GVgJaREdyEntm3rw3tgOMM79WwfqhPS6sNC4AL29n/a/d38IsTMmmDORVT+Dt+fiHleAEFUgEEFYd3n4PEC3C38Cy2rg9704KJIovJ7BRmmsA0h/ydiFlRYMvzu+iFfbGA6ktTvMnArW47EPIGqSw6VHAjgmiT5At0Mb9Red7oLXqEyX2EEcuvIMmkAPxxWbB1ioTHBumCGzNVjEVBL+Lrg3Q2n7A6g2kHyvoXHXhHZJF3mSvAhU0osEUtPuzjmabfiwLLSljkuqFsG6KBJlv63eaKHDTG69a5/OELHyCMVaGiC9Plctsv6kwotnMRQXzC0tFDyGPyLTO/rTpCzlqg+tjpK2SrmBiHO3oubpfz68NFnDwEK0YSQcNzbI04xal0uxRF2QvBz1ymNSEEOYcqQTJ9SzZpKzO147+YEK6RprayjRxtW5zbq4I4moQZe/vLCA58hCzZbsYSqayJOkKTGpelX8BGcBiX9Spz7ItFq7ronF0PDlQAYba0EqoQLQ6/NXU3SxTFuUUx4L2CQKrtzfNcIaMAAAAAElFTkSuQmCC",alt:"shampoo",className:b.a.productCard__img})})]}),Object(l.jsx)("h4",{className:b.a.productCard__title,children:c}),Object(l.jsx)("p",{children:n}),Object(l.jsxs)("div",{className:b.a.productCard__priceAndColor,children:[Object(l.jsx)(S,{colors:d,color:x,setColor:g}),Object(l.jsxs)("span",{className:"",children:[a," \u0433\u0440\u043d"]})]}),Object(l.jsx)(h,{volumeList:P,setVolume:v}),Object(l.jsxs)("div",{className:b.a.productCard__bay,children:[Object(l.jsx)(f,{count:k,setCount:y}),Object(l.jsx)(N,{text:"\u041a\u0443\u043f\u0438\u0442\u044c",classType:"basic",handleClick:function(){var t={id:e,color:x,volume:P.find((function(t){return!0===t.checked})),count:k};p(D(t));var c=JSON.parse(localStorage.getItem("cart")),r=JSON.stringify([].concat(Object(s.a)(c),[t]));localStorage.setItem("cart",r)}})]})]},e)},Y=[{id:1,title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",img:c.p+"static/media/image_1.d1b31dde.png",price:200,newProduct:!1,consist:"1 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 2 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 3 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 4 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",colors:["\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0416\u0435\u043b\u0442\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439"],volumes:[{text:"100 \u043c\u043b",id:"radio1_id1",checked:!0},{text:"200 \u043c\u043b",id:"radio2_id1",checked:!1},{text:"300 \u043c\u043b",id:"radio3_id1",checked:!1}]},{id:2,title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",img:c.p+"static/media/image_2.58d36d6f.png",price:200,newProduct:!0,consist:"1 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 2 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 3 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 4 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",colors:["\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0416\u0435\u043b\u0442\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439"],volumes:[{text:"100 \u043c\u043b",id:"radio1_id2",checked:!0},{text:"200 \u043c\u043b",id:"radio2_id2",checked:!1},{text:"300 \u043c\u043b",id:"radio3_id2",checked:!1}]},{id:3,title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",img:c.p+"static/media/image_3.7234034a.png",price:200,newProduct:!0,consist:"1 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 2 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 3 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442, 4 \u0406\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",colors:["\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0416\u0435\u043b\u0442\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439"],volumes:[{text:"100 \u043c\u043b",id:"radio1_id3",checked:!0},{text:"200 \u043c\u043b",id:"radio2_id3",checked:!1},{text:"300 \u043c\u043b",id:"radio3_id3",checked:!1}]}],G=c(28),Q=c.n(G),z=function(){var t=Y.map((function(t){return Object(l.jsx)(M,Object(p.a)({},t))}));return Object(l.jsxs)("section",{children:[Object(l.jsx)("a",{className:Q.a.productPage__link,children:Object(l.jsx)(d.b,{to:"/cart",children:"go to Cart"})}),Object(l.jsx)("a",{className:Q.a.productPage__link,children:Object(l.jsx)(d.b,{to:"/compare",children:"go to Compare"})}),Object(l.jsx)("h2",{children:"ALL PRODUCTS"}),Object(l.jsx)("div",{className:Q.a.productPage,children:t})]})},K=c(15),q=c.n(K),X=c(34),V=c.n(X),W=c(36),Z=function(t){var e=t.id,c=t.title,r=t.price,a=t.img,o=t.color,n=t.volume,d=t.count,s=Object(i.c)();return Object(l.jsxs)("div",{className:q.a.productCart,children:[Object(l.jsx)("div",{className:q.a.productCart__imgWrapper,children:Object(l.jsx)("img",{src:a,alt:"",className:q.a.productCart__img})}),Object(l.jsx)("span",{className:q.a.productCart__title,children:c}),Object(l.jsxs)("span",{className:q.a.productCart__text,children:["\u041a\u043e\u043b\u0456\u0440: ",o]}),Object(l.jsxs)("span",{className:q.a.productCart__text,children:["\u0420\u043e\u0437\u043c\u0456\u0440: ",n]}),Object(l.jsx)(f,{count:d,setCount:function(t){s(B({count:t,id:e}))},id:e}),Object(l.jsxs)("span",{className:q.a.productCart__text,children:[r," \u0433\u0440\u043d"]}),Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFNSURBVHgB7ZbhTcMwEIVfEf8JE/Q2IGwQJiEbICaImAAYgQlgg4oNugFmgqYTtBflTq3c2j3bUX71SU8nxc59vouTGLCrYq/Yu4C/ZY5Jt7CrYzfsD3bvjRG7Za/ZbzAoBTxU49ivgfFGFmCSgon9fGFuLfAO4YXVkXHVJ446Ntywm8kPuGpOLc5cI1zeaKn6wvhGRPWC6TdU50NuzoC3EgljR0r8KLmcBayTapSr8nKawObvbkQkcYsEMKFcd17OKFgnEspFEnsruMc0YP2xwApeY7qKHRLAU1aMFLCTuESZCIkV6/a/R5mynvGgkn8nSeyRANbJJR8RkuiQAHbezTnSRSdVrHBCvpZHeWYFa8X/mBlMCLTZAq6Qv8EIkVNHDPwrsUUetMHhtTzRAnGtJMFPLImnoUMtxjY/wXDWCiV5Z//Bfr7ayIIplngPKut3/stCcAgAAAAASUVORK5CYII=",alt:"",className:q.a.productCart__img,onClick:function(){s(function(t){return function(){var e=Object(W.a)(V.a.mark((function e(c){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(F(t)),e.next=3,setTimeout((function(){c(U())}),3e3);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e))}})]})},$=c(29),tt=c.n($),et=function(){var t=Object(i.d)((function(t){return t.cart}),i.b),e=Object(i.c)(),c=t.products.find((function(e){return e.id===t.deletingId})),r=c.volume,a=c.color,o=Y.find((function(e){return e.id===t.deletingId})).title;return Object(l.jsxs)("div",{className:tt.a.returnDeleted,children:[Object(l.jsxs)("span",{children:["\u0412\u0438 \u0432\u0438\u0434\u0430\u043b\u0438\u043b\u0438 \u0442\u043e\u0432\u0430\u0440 ",Object(l.jsxs)("span",{className:tt.a.returnDeleted__productInfo,children:[o," ",r.text," ",a]})," \u0437 \u0412\u0430\u0448\u043e\u0457 \u043a\u043e\u0440\u0437\u0438\u043d\u0438."]}),Object(l.jsxs)("span",{onClick:function(){e(F(null))},children:[Object(l.jsx)("span",{className:tt.a.returnDeleted__icon,children:"\u21a9"})," \u0412\u0456\u0434\u043c\u0456\u043d\u0456\u0442\u0438 \u0434\u0456\u044e"]})]})},ct=c(37),rt=c.n(ct),at=function(){var t=Object(i.d)((function(t){return t.cart}),i.b),e=t.products.map((function(t){var e=t.id,c=t.color,a=t.volume,o=t.count,n=Y.find((function(t){return t.id===e})),i={id:e,title:n.title,price:n.price,img:n.img,color:c,volume:a.text,count:o};return Object(r.createElement)(Z,Object(p.a)(Object(p.a)({},i),{},{key:e}))})),c=t.deletingId?Object(l.jsx)(et,{}):"";return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"\u041a\u043e\u0448\u0438\u043a"}),e,c,Object(l.jsxs)("div",{className:rt.a.cardPage__funtionalItems,children:[Object(l.jsx)(d.b,{to:"/products",children:"<< \u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u0434\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443"}),Object(l.jsx)(N,{text:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",classType:"basic",handleClick:"handleSubmit"})]})]})},ot=c(18),nt=c.n(ot),it=c(12),dt=c.n(it),st=function(t){var e=t.id,c=t.img,r=t.title,a=t.colors,o=t.consist,n=t.volumes,d=t.price,s=Object(i.c)();return Object(l.jsxs)("div",{className:dt.a.compareProduct__wrapper,children:[Object(l.jsxs)("div",{className:dt.a.compareProduct__productInfo,children:[Object(l.jsx)("div",{className:dt.a.compareProduct__imgWrapper,children:Object(l.jsx)("img",{src:c,alt:"shampoo",className:dt.a.compareProduct__img})}),Object(l.jsx)("span",{className:dt.a.compareProduct__title,children:r})]}),Object(l.jsx)("span",{className:dt.a.compareProduct__text,children:a[0]}),Object(l.jsx)("span",{className:dt.a.compareProduct__text,children:o}),Object(l.jsx)("span",{className:dt.a.compareProduct__text,children:n[0].text}),Object(l.jsxs)("span",{className:dt.a.compareProduct__text,children:[d," \u0433\u0440\u043d"]}),Object(l.jsx)("span",{className:dt.a.compareProduct__button,children:Object(l.jsx)(N,{text:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a",classType:"basic",handleClick:function(){var t={id:e,color:a[0],volume:n[0].text,count:1};s(D(t))}})})]})},ut=function(){var t=Object(i.d)((function(t){return t.compare}),i.b),e=Y.filter((function(e){var c=e.id;return t.includes(c)})),c="";return e.length>0&&(c=e.map((function(t){return Object(l.jsx)(st,Object(p.a)({},t))}))),Object(l.jsxs)("div",{className:nt.a.comparePage,children:[Object(l.jsxs)("div",{className:nt.a.comparePage__wrapper,children:[Object(l.jsx)("div",{}),Object(l.jsx)("span",{className:nt.a.comparePage__header,children:"\u041a\u043e\u043b\u0456\u0440"}),Object(l.jsx)("span",{className:nt.a.comparePage__header,children:"\u0421\u043a\u043b\u0430\u0434"}),Object(l.jsx)("span",{className:nt.a.comparePage__header,children:"\u0420\u043e\u0437\u043c\u0456\u0440"}),Object(l.jsx)("span",{className:nt.a.comparePage__header,children:"\u0426\u0456\u043d\u0430"}),Object(l.jsx)("div",{})]}),c]})},lt=function(){var t=JSON.parse(localStorage.getItem("cart")),e=JSON.parse(localStorage.getItem("compare")),c=Object(i.c)();return t&&c(D.apply(void 0,Object(s.a)(t))),console.log(e),e&&e.map((function(t){return c(H(t))})),Object(l.jsxs)(u.c,{children:[Object(l.jsxs)(u.a,{exact:!0,path:"/",children:[Object(l.jsx)("p",{children:"Home page"}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/products",children:"Products"})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/cart",children:"Cart"})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/compare",children:"Compare"})})]}),Object(l.jsx)(u.a,{exact:!0,path:"/products",children:Object(l.jsx)(z,{})}),Object(l.jsxs)(u.a,{exact:!0,path:"/cart",children:[Object(l.jsx)("p",{children:"Cart"}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/products",children:"go to Products"})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/compare",children:"go to Compare"})}),Object(l.jsx)(at,{})]}),Object(l.jsxs)(u.a,{exact:!0,path:"/compare",children:[Object(l.jsx)("p",{children:"Compare"}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/products",children:"go to Products"})}),Object(l.jsx)("div",{children:Object(l.jsx)(d.b,{to:"/cart",children:"go to Cart"})}),Object(l.jsx)(ut,{})]}),Object(l.jsx)(u.a,{exact:!0,path:"*",children:Object(l.jsx)(_,{})})]})},_t=c(14),pt=Object(_t.b)({cart:E.reducer,compare:J.reducer}),jt=Object(s.a)(Object(R.c)({serializableCheck:!1})),mt=Object(R.a)({reducer:pt,middleware:jt,devTools:!1});var bt=function(){return Object(l.jsx)(i.a,{store:mt,children:Object(l.jsx)(d.a,{children:Object(l.jsx)(lt,{})})})},Ot=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(e){var c=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,n=e.getTTFB;c(t),r(t),a(t),o(t),n(t)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(bt,{})}),document.getElementById("root")),Ot()}],[[51,1,2]]]);
//# sourceMappingURL=main.5271ebd9.chunk.js.map