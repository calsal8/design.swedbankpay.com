(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[92],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultSteps",function(){return i});var a=n(1),l=n.n(a),r=n(14),s=n.n(r),o=n(458),c=n.n(o),i=[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0},{title:"Step three",selected:!0},{title:"Step four"}],u=function(e){var t=e.completed,n=e.subtitle,a=e.title;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"material-icons steps-icon"},"check"),"\n"):null,a,n?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:"steps-sub-title"},n)):null)},p=function(e){var t=e.steps;return l.a.createElement(l.a.Fragment,null,t.map(function(e,t){var n=e.title,a=e.subtitle,r=e.completed,s=e.ongoing,o=e.selected,i=e.clickable;return l.a.createElement("li",{key:t,className:c()(r?"steps-completed":null,s?"steps-ongoing":null,o?"steps-selected":null)},i?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement("a",null,l.a.createElement(u,{completed:r,subtitle:a,title:n}))," ","\n"," "):l.a.createElement(u,{completed:r,subtitle:a,title:n}))}))},m=function(e){var t=e.steps;if(!t)return null;var n=t.some(function(e){return e.clickable}),a=n?l.a.createElement("div",{className:"material-icons steps-nav-left"},"keyboard_arrow_left"):null,r=n?l.a.createElement("div",{className:"material-icons steps-nav-right"},"keyboard_arrow_right"):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"steps-responsive"},a,l.a.createElement("div",{className:"steps-responsive-text"},"Step 3"),r))},f=function(e){var t=e.steps,n=e.vertical,a=c()("steps",n?"steps-vertical":null);return l.a.createElement("div",{className:a},l.a.createElement("ol",null,t?l.a.createElement(p,{steps:t}):l.a.createElement(p,{steps:i})),l.a.createElement(m,{steps:t}))};f.propTypes={steps:s.a.array,vertical:s.a.bool,clickable:s.a.bool},t.default=f},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,n){var a;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=l(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var o=s.apply(null,n);o&&e.push(o)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):"object"===l(n(457))&&n(457)?void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a):window.classNames=s}()}}]);
//# sourceMappingURL=doc-route.chunk_93.js.map?b6abcbb86395aed1baf5