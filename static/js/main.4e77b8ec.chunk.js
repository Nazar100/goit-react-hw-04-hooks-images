(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(e,t,n){},56:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),o=n(4),s=n.n(o),i=(n(32),n(10)),l=n.n(i),u=n(11),b=n(20),j=n(5),h=n(21),p=n.n(h),d=n(8);n(55),n(56);var m=function(e){var t=e.onSubmit,n=Object(r.useState)(""),c=Object(j.a)(n,2),o=c[0],s=c[1];return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return d.b.error("Please enter the key word");s(""),t(o)},children:[Object(a.jsx)("button",{className:"SearchForm-button",type:"submit",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",value:o,onChange:function(e){var t=e.target;s(t.value)},autoFocus:!0,placeholder:"Search images"})})]})})},f=n(22),O=n.n(f),g=function(e){var t=e.query,n=e.crntPage;return O.a.get("https://pixabay.com/api/?key=".concat("19419978-f0acf28c61118c5b5b844fb84","&q=").concat(t,"&page=").concat(n,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.total?e.data.hits:Promise.reject(new Error("No photos of ".concat(t)))}))};function v(e){var t=e.url,n=e.openModal,r=e.largeUrl,c=e.category;return Object(a.jsx)("img",{"data-url":r,src:t,alt:c,className:"ImageGalleryItem-image",onClick:n})}function y(e){var t=e.photos,n=e.openModal,r=e.openLargePhoto;return Object(a.jsx)("ul",{className:"ImageGallery ",children:t.map((function(e){return Object(a.jsx)("li",{onClick:r,className:"ImageGalleryItem",children:Object(a.jsx)(v,{category:e.category,url:e.webformatURL,largeUrl:e.largeImageURL,openModal:n})},e.id)}))})}function x(e){var t=e.onClick;return Object(a.jsx)("button",{onClick:t,className:"Button",type:"button",children:"Load More"})}var k=n(23),w=n(24),S=n(26),C=n(25),N=document.querySelector("#modal-root"),F=function(e){Object(S.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.key&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:this.props.largeUrl,alt:""})})}),N)}}]),n}(r.Component);var L=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(1),s=Object(j.a)(o,2),i=s[0],h=s[1],f=Object(r.useState)(""),O=Object(j.a)(f,2),v=O[0],k=O[1],w=Object(r.useState)(!1),S=Object(j.a)(w,2),C=S[0],N=S[1],L=Object(r.useState)(""),P=Object(j.a)(L,2),I=P[0],M=P[1],E=Object(r.useState)(null),U=Object(j.a)(E,2),B=U[0],D=U[1],q=Object(r.useState)(!1),T=Object(j.a)(q,2),G=T[0],K=T[1];function A(){return J.apply(this,arguments)}function J(){return(J=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return t={query:v,crntPage:i},K(!0),e.prev=4,e.next=7,g(t);case 7:n=e.sent,c((function(e){return[].concat(Object(u.a)(e),Object(u.a)(n))})),h((function(e){return e+1})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),D(B);case 15:return e.prev=15,K(!1),W(),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[4,12,15,19]])})))).apply(this,arguments)}Object(r.useEffect)((function(){A()}),[v]);var R=function(){N((function(e){return!e}))};function W(){i>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}var _=n.length>0&&!G;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onSubmit:function(e){k(e),h(1),c([]),D(null)}}),Object(a.jsx)(y,{photos:n,openModal:R,openLargePhoto:function(e){var t=e.target.dataset.url;M(t)}}),G&&Object(a.jsx)(p.a,{className:"Loader",type:"Audio",color:"#00BFFF",height:100,width:100}),B&&Object(a.jsxs)("p",{className:"error",children:["Whoops, something went wrong: ",B.message]}),_&&Object(a.jsx)(x,{onClick:A}),C&&Object(a.jsx)(F,{largeUrl:I,onClose:R}),Object(a.jsx)(d.a,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.4e77b8ec.chunk.js.map