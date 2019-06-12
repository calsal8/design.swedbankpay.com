(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[21],{443:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(97),i=n(377),c=n.n(i),l=n(361),u=n(53),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,y(t).call(this,e))).state={active:1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(a=[{key:"setActive",value:function(e,t){e.preventDefault(),this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,o=t.items;return r.a.createElement("div",{className:"tabs".concat(n?" tabs-horizontal-".concat(n):"")},"\n",r.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"),r.a.createElement("ul",null,o.map(function(t,n){return r.a.createElement("li",{key:"tab-item-".concat(t,"-").concat(n),className:e.state.active===n?"active":null},"\n",r.a.createElement("a",{href:"#",onClick:function(t){return e.setActive(t,n)}},t),"\n")})))}}])&&p(n.prototype,a),i&&p(n,i),t}();d.propTypes={mode:s.a.oneOf(["xs","sm","md","lg","xl","xxl"]),items:s.a.array.isRequired};var h=d;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicUsage",function(){return j}),n.d(t,"Collapsed",function(){return S}),n.d(t,"JavascriptMethods",function(){return k});var _=window.px.tabs,P=["Card","Discounts","Transactions","Invoice","Settings","Audit trail"],j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-usage"},"Basic usage"),r.a.createElement("p",null,"Add class ",r.a.createElement(l.Property,{value:".tabs"})," with a ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," to a div containing an arrow icon along with ",r.a.createElement(c.a,{className:"language-html"},"<ul>")," and nest ",r.a.createElement(c.a,{className:"language-html"},"<li>")," as needed. The ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our ",r.a.createElement(a.Link,{to:"/docs/core/breakpoints"},"breakpoints documentation"),"."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{mode:"sm",items:P})))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"collapsed"},"Collapsed"),r.a.createElement("p",null,"If no ",r.a.createElement(l.Property,{value:".tabs-horizontal-desired_size"})," is provided then the tabs will always be in collapsed mode."),r.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{items:P})))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript methods"),r.a.createElement(l.JavascriptDocs,{componentName:"tabs",open:!0,close:!0}))},C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,g(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){_.init()}},{key:"render",value:function(){return r.a.createElement(l.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use tabs to show which page or section that is active out of several options."),r.a.createElement(j,null),r.a.createElement(S,null),r.a.createElement(k,null))}}])&&w(n.prototype,a),i&&w(n,i),t}();t.default=C}}]);
//# sourceMappingURL=doc-route.chunk_22.js.map?2e76b17fa5816de7afe2