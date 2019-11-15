(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[26,93],{389:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(14),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,u(t).call(this,e))).state={active:1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.scroll,r=t.items;return o.a.createElement("div",{className:"tabs".concat(n?" tabs-scroll":"")},"\n",o.a.createElement("ul",null,r.map(function(t,n){return o.a.createElement("li",{key:"tab-item-".concat(t,"-").concat(n),className:e.state.active===n?"active":null},"\n",o.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,n)}},t),"\n")})))}}])&&l(n.prototype,a),i&&l(n,i),t}();p.propTypes={items:i.a.array.isRequired,scroll:i.a.bool},t.default=p},422:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicUsage",function(){return d}),n.d(t,"TabsScroll",function(){return v}),n.d(t,"JavascriptMethods",function(){return w});var r=n(1),o=n.n(r),a=n(462),i=n.n(a),c=n(361),l=n(389);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=window.dg.tabs,h=["Card","Discounts","Transactions","Invoice","Settings","Audit trail","History"],d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-usage"},"Basic usage"),o.a.createElement("p",null,"Add class ",o.a.createElement(c.Property,{value:".tabs"})," to a div containing ",o.a.createElement(i.a,{className:"language-html"},"<ul>"),"and nest ",o.a.createElement(i.a,{className:"language-html"},"<li>")," as needed. Make sure that the tabs will not overflow on screens of normal size. Consider revising the design or the decision to use tabs when more than 3 alternatives are present. If using tabs really is necessary, tabs with scroll might be a more suitable alternative."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(l.default,{items:b(h.slice(0,3))})))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"tabs-scroll"},"Tabs with scroll"),o.a.createElement("p",null,"To make tabs more mobile friendly, use class ",o.a.createElement(c.Property,{value:".tabs-scroll"}),".",o.a.createElement(c.Property,{value:".tabs-scroll"})," will make the tabs scrollable in case of overflow. Note that the scrollable property is not optimized for desktop usage. Consider the usage when 4 or more tabs are present."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(l.default,{items:h,scroll:!0})))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),o.a.createElement(c.JavascriptDocs,{componentName:"tabs"}))},g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){y.init()}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),o.a.createElement(d,null),o.a.createElement(v,null),o.a.createElement(w,null))}}])&&u(n.prototype,a),i&&u(n,i),t}();t.default=g}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?5490167a612ccd022679