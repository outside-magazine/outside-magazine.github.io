(self.webpackChunksass_tutorial=self.webpackChunksass_tutorial||[]).push([[155],{8916:()=>{var e,t,r,n,o,a;e=window.pageYOffset,t=null,r=document.body,n="js-scroll-dir__up",o="js-scroll-dir__down",a="js-scroll-dir__top",document.addEventListener("scroll",(function(){var i=window.pageYOffset||document.documentElement.scrollTop;i<40||(i>40?Math.abs(e-window.pageYOffset)>10&&(e>=window.pageYOffset?"up"!==t&&(t="up",r.classList.remove(o),r.classList.remove(a),r.classList.add(n)):"down"!==t&&(t="down",r.classList.remove(n),r.classList.remove(a),r.classList.add(o))):(r.classList.remove(a),r.classList.remove(n)),e=window.pageYOffset)}),{passive:!0})},5199:(e,t,r)=>{"use strict";r.r(t);r(8916),r(4553),r(9753),r(1249),r(1539),r(8674),r(7727),r(2222);var n=r(5697),o=r.n(n);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=window.React,u=c.useState,l=c.useEffect,s=c.useRef;function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=window,m=p.React,y=m.useState,v=m.useEffect,b=p.React,h=function(e){var t=e.alt,r=e.imageSrc,n=e.onLoad,o=void 0===n?function(){}:n,a=e.type,i=void 0===a?"normal":a,c=f(y(!1),2),u=c[0],l=c[1];v((function(){u&&o()}),[u]);var s={};return"bg"===i&&u&&(s.backgroundImage="url(".concat(r,")")),b.createElement("div",{className:"progressive-image".concat(u?" is-loaded":""),style:s},b.createElement("img",{alt:t,src:r,onLoad:function(){return l(!0)},style:{opacity:u&&"bg"===i?0:1}}))};function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=window,E=O.React,S=E.useState,j=E.useEffect,A=O.React,I=function(e){var t=e.image,r=void 0===t?null:t,n=e.type,o=void 0===n?"normal":n,i=e.alt,c=void 0===i?"No Alt":i,f=e.onLoad,d=void 0===f?function(){}:f,p=g(S(""),2),m=p[0],y=p[1],v=g(function(e){var t=e.root,r=void 0===t?null:t,n=e.rootMargin,o=e.threshold,i=void 0===o?0:o,c=a(u({}),2),f=c[0],d=c[1],p=a(u(null),2),m=p[0],y=p[1],v=s(null);return l((function(){v.current&&v.current.disconnect(),v.current=new window.IntersectionObserver((function(e){var t=a(e,1)[0];return d(t)}),{root:r,rootMargin:n,threshold:i});var e=v.current;return m&&e.observe(m),function(){e.disconnect()}}),[m,r,n,i]),[y,f.isIntersecting,v.current]}({}),2),b=v[0],w=v[1];return j((function(){w&&""===m&&y(r)}),[w]),null===r?null:A.createElement(A.Fragment,null,w?A.createElement(h,{type:o,onLoad:d,imageSrc:m,alt:c}):A.createElement("div",{ref:b,className:"progressive-image"}))};var x=window.React,R=function(e){var t=e.title,r=e.dek,n=e.date,o=e.image,a=e.url;return x.createElement("article",null,x.createElement("a",{href:"https://www.outsideonline.com".concat(a)},x.createElement(I,{image:o,alt:t})),x.createElement("header",null,x.createElement("a",{href:"https://www.outsideonline.com".concat(a)},x.createElement("h3",null,t)),x.createElement("time",{dateTime:n},n),x.createElement("p",null,r)))};R.propTypes={title:o().string,dek:o().string,date:o().string,image:o().number,url:o().number};var T=function(){return React.createElement("div",{className:"loader-bounce"},React.createElement("div",{className:"double-bounce1"}),React.createElement("div",{className:"double-bounce2"}))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=window,L=C.React,N=L.useEffect,M=L.useState,W=C.React,D=function(e){var t=e.posts,r=e.ppp,n=e.title,o=e.dek,a=e.count,i=e.loadMore,c=e.pending,u=e.image,l=e.index,s=e.cat_id,f=e.allLoaded,d=void 0!==f&&f,p=P(M(1),2),m=p[0],y=p[1],v=P(M(r),2),b=v[0],h=v[1];return N((function(){1!==m&&(b<a&&h(r*m>a?t.length:r*m),d||i(s,m))}),[m]),W.createElement("section",{className:"winter101-section section-".concat(s),style:{zIndex:l}},W.createElement("header",null,W.createElement(I,{type:"bg",image:u,alt:"".concat(n," - ").concat(o)}),W.createElement("div",{className:"winter101-container"},W.createElement("caption",null,W.createElement("h2",null,n),W.createElement("p",null,o),W.createElement("div",{className:"separator is-loaded"})))),W.createElement("div",{className:"winter101-posts winter101-container"},t.map((function(e,t){return W.createElement(W.Fragment,null,b>t&&W.createElement(R,k({key:"post-".concat(e.id)},e)))}))),c?W.createElement(T,null):b<a&&W.createElement("div",{className:"align-center"},W.createElement("button",{disabled:c,onClick:function(){y(m+1)}},W.createElement("span",null,"+")," ",a-b)),1!==l&&W.createElement("div",{className:"separator is-loaded"}))};D.propTypes={ppp:o().number,count:o().number,index:o().number,title:o().string,dek:o().string,image:o().string,loadMore:o().func,pending:o().bool,cat_id:o().string,allLoaded:o().bool,posts:o().arrayOf(o().shape({author:o().string,image:o().string,url:o().string,title:o().string,dek:o().string,id:o().number,date:o().dateTime}))};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var J=window.React.useState,V=JSON.parse(document.getElementById("outside-initial-data").innerText),X=function(){var e=q(J(!1),2),t=e[0],r=e[1],n=q(J(!1),2),o=n[0],a=n[1],i=q(J(V),2),c=i[0],u=i[1],l=function(){t||o?a(!1):(a(!0),r(!0),fetch("https://run.mocky.io/v3/6f58c901-cb5f-4544-834a-020be1349266?mocky-delay=1000ms").then((function(e){return e.json()})).then((function(e){for(var t=B(c),r=function(r,n){var o,a=t.findIndex((function(t){return t.cat_id===e[r].cat_id}));(o=t[a].posts).push.apply(o,B(e[r].posts))},n=0,o=e.length;n<o;n++)r(n);u(t)}),(function(e){console.error(e)})).finally((function(){a(!1)})))};return React.createElement("div",{className:"".concat(o?"pending":"")},c.map((function(e,r){return React.createElement(D,U({key:e.cat_id},F(F({},e),{},{loadMore:l,index:c.length-r,pending:o,allLoaded:t,ppp:4})))})))};ReactDOM.render(React.createElement(X,null),document.getElementById("outside-app")),"paintWorklet"in window.CSS&&window.CSS.paintWorklet.addModule("dist/js/paint-worklet-separator.js"),console.log("Welcome candidate 👋")},1223:(e,t,r)=>{var n=r(5112),o=r(30),a=r(3070),i=n("unscopables"),c=Array.prototype;null==c[i]&&a.f(c,i,{configurable:!0,value:o(null)}),e.exports=function(e){c[i][e]=!0}},2092:(e,t,r)=>{var n=r(9974),o=r(8361),a=r(7908),i=r(7466),c=r(5417),u=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(m,y,v,b){for(var h,g,w=a(m),O=o(w),E=n(y,v,3),S=i(O.length),j=0,A=b||c,I=t?A(m,S):r||d?A(m,0):void 0;S>j;j++)if((p||j in O)&&(g=E(h=O[j],j,w),e))if(t)I[j]=g;else if(g)switch(e){case 3:return!0;case 5:return h;case 6:return j;case 2:u.call(I,h)}else switch(e){case 4:return!1;case 7:u.call(I,h)}return f?-1:l||s?s:I}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},1194:(e,t,r)=>{var n=r(7293),o=r(5112),a=r(7392),i=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9207:(e,t,r)=>{var n=r(9781),o=r(7293),a=r(6656),i=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,t){if(a(c,e))return c[e];t||(t={});var r=[][e],l=!!a(t,"ACCESSORS")&&t.ACCESSORS,s=a(t,0)?t[0]:u,f=a(t,1)?t[1]:void 0;return c[e]=!!r&&!o((function(){if(l&&!n)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:u}):e[1]=1,r.call(e,s,f)}))}},5417:(e,t,r)=>{var n=r(111),o=r(3157),a=r(5112)("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},6135:(e,t,r)=>{"use strict";var n=r(7593),o=r(3070),a=r(9114);e.exports=function(e,t,r){var i=n(t);i in e?o.f(e,i,a(0,r)):e[i]=r}},3157:(e,t,r)=>{var n=r(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},30:(e,t,r)=>{var n,o=r(9670),a=r(6048),i=r(748),c=r(3501),u=r(490),l=r(317),s=r(6200),f=s("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"</"+"script>"},m=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;m=n?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=l("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var r=i.length;r--;)delete m.prototype[i[r]];return m()};c[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(d.prototype=o(e),r=new d,d.prototype=null,r[f]=e):r=m(),void 0===t?r:a(r,t)}},6048:(e,t,r)=>{var n=r(9781),o=r(3070),a=r(9670),i=r(1956);e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=i(t),c=n.length,u=0;c>u;)o.f(e,r=n[u++],t[r]);return e}},2222:(e,t,r)=>{"use strict";var n=r(2109),o=r(7293),a=r(3157),i=r(111),c=r(7908),u=r(7466),l=r(6135),s=r(5417),f=r(1194),d=r(5112),p=r(7392),m=d("isConcatSpreadable"),y=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),h=f("concat"),g=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!b||!h},{concat:function(e){var t,r,n,o,a,i=c(this),f=s(i,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(g(a=-1===t?i:arguments[t])){if(d+(o=u(a.length))>y)throw TypeError(v);for(r=0;r<o;r++,d++)r in a&&l(f,d,a[r])}else{if(d>=y)throw TypeError(v);l(f,d++,a)}return f.length=d,f}})},4553:(e,t,r)=>{"use strict";var n=r(2109),o=r(2092).findIndex,a=r(1223),i=r(9207),c="findIndex",u=!0,l=i(c);c in[]&&Array(1).findIndex((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!l},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(c)},9753:(e,t,r)=>{r(2109)({target:"Array",stat:!0},{isArray:r(3157)})},1249:(e,t,r)=>{"use strict";var n=r(2109),o=r(2092).map,a=r(1194),i=r(9207),c=a("map"),u=i("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},7727:(e,t,r)=>{"use strict";var n=r(2109),o=r(1913),a=r(3366),i=r(7293),c=r(5005),u=r(6707),l=r(9478),s=r(1320);n({target:"Promise",proto:!0,real:!0,forced:!!a&&i((function(){a.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,c("Promise")),r="function"==typeof e;return this.then(r?function(r){return l(t,e()).then((function(){return r}))}:e,r?function(r){return l(t,e()).then((function(){throw r}))}:e)}}),o||"function"!=typeof a||a.prototype.finally||s(a.prototype,"finally",c("Promise").prototype.finally)},2703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);