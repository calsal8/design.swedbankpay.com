(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[14],{374:function(e,t){(function(t){e.exports=t}).call(this,{})},376:function(e,t,n){var a;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=o(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var l=i.apply(null,n);l&&e.push(l)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"object"===o(n(374))&&n(374)?void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a):window.classNames=i}()},439:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(96),i=n(377),l=n.n(i),c=n(359),s=n(65),u=n.n(s),m=n(376),f=n.n(m);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,y(t).call(this,e))).state={active:"main-0",activeParent:null},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,(r=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.vertsize,r=t.widesize,i=f()("nav",a?"nav-".concat(a,"-vertical"):"",r?"nav-".concat(r,"-vertical-wide"):"");return o.a.createElement("nav",{className:i},o.a.createElement("ul",null,n.map(function(t,n){var a=t.name,r=t.icon,i=t.subItems;return o.a.createElement("li",{key:"nav-item-".concat(a,"-").concat(n)},"\n",i?o.a.createElement("div",{className:"submenu"},"\n",o.a.createElement("i",{className:"material-icons"},r),"\n",o.a.createElement("span",null,a),o.a.createElement("ul",null,i.map(function(t,a){return o.a.createElement("li",{key:"nav-subItems-".concat(t,"-").concat(a),className:e.state.active==="sub-".concat(n,"-").concat(a)?"active":null},o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"sub-".concat(n,"-").concat(a))}},t))}))):o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,"main-".concat(n))},className:e.state.active==="main-".concat(n)?"active":null},"\n",o.a.createElement("i",{className:"material-icons"},r),"\n",o.a.createElement("span",null,a),"\n"),"\n")})))}}])&&v(n.prototype,r),i&&v(n,i),t}(),g=["xs","sm","md","lg","xl","xxl"];b.propTypes={items:u.a.array.isRequired,vertsize:u.a.oneOf(g),widesize:u.a.oneOf(g)};var E=b;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return C}),n.d(t,"TwoLevels",function(){return x}),n.d(t,"IconsOnly",function(){return T}),n.d(t,"Mix",function(){return z}),n.d(t,"Mobile",function(){return F}),n.d(t,"JavascriptMethods",function(){return A});var k=window.px.nav,N=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],j=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-standard"},"Standard nav"),o.a.createElement("p",null,"Add class ",o.a.createElement(c.Property,{value:".nav"})," and ",o.a.createElement(c.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",o.a.createElement(l.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",o.a.createElement(l.a,{className:"language-html"},"<i>")," and ",o.a.createElement(l.a,{className:"language-html"},"<span>")," with your desired ",o.a.createElement(r.Link,{to:"/docs/core/icons"},"icon")," and text. ",o.a.createElement(c.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(E,{widesize:"lg",items:N})))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),o.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",o.a.createElement(l.a,{className:"language-html"},"<DocContainer>")," with class ",o.a.createElement(c.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",o.a.createElement(l.a,{className:"language-html"},"<ul>")," with ",o.a.createElement(l.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(E,{widesize:"lg",items:j})))},T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-tablet"},"Icons only"),o.a.createElement("p",null,"To display only icons use class ",o.a.createElement(c.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",o.a.createElement(c.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(E,{vertsize:"md",items:j})))},z=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),o.a.createElement("p",null,"You can also use both icons only and wide together."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(E,{vertsize:"md",widesize:"lg",items:j})))},F=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),o.a.createElement("p",null,"To only display mobile view use class ",o.a.createElement(c.Property,{value:".nav"})," alone."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(E,{items:N})))},A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),o.a.createElement(c.JavascriptDocs,{componentName:"nav",open:!0,close:!0}))},I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,_(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidUpdate",value:function(){k.init()}},{key:"componentDidMount",value:function(){k.init()}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use ",o.a.createElement(l.a,{className:"language-html"},"<nav>"),"s to create a basic navigational element containing links."),o.a.createElement(C,null),o.a.createElement(x,null),o.a.createElement(T,null),o.a.createElement(z,null),o.a.createElement(F,null),o.a.createElement(A,null))}}])&&P(n.prototype,r),i&&P(n,i),t}();t.default=I}}]);
//# sourceMappingURL=doc-route.chunk_15.js.map?6de07e4f618250cec4b0