(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[18,5,46,48,49,50,52],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return s});var a=n(1),r=n.n(a),l=n(2),c=n.n(l),s=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},s.propTypes={value:c.a.string.isRequired},t.default=u},421:function(e,t,n){"use strict";var a=n(1),s=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return s.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?s.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?s.a.createElement("p",null,l):null,c?"\n":"",c?s.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?s.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",s.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},422:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},425:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(2),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return s.a.createElement("span",{key:t},e,s.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return s.a.createElement("span",{key:t},e,t<c.length-1?s.a.createElement("span",{className:"token punctuation"},", "):null)})),s.a.createElement("code",null,s.a.createElement("span",null,"px"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",null,a),s.a.createElement("span",{className:"token punctuation"},"."),n,s.a.createElement("span",{className:"token function"},l),s.a.createElement("span",{className:"token punctuation"},"("),t,s.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=n.n(l),s=n(427),u=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(s.DocToc,{component:a}):null))};u.propTypes={docToc:c.a.bool},t.default=u},427:function(e,t,n){"use strict";n.r(t);var a=n(420);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var l=n(426);n.d(t,"DocContainer",function(){return l.default});var c=n(429);n.d(t,"DocHeading",function(){return c.default});var s=n(430);n.d(t,"DocToc",function(){return s.default});var u=n(422);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var o=n(423);n.d(t,"ExperimentalComponentAlert",function(){return o.default});var i=n(424);n.d(t,"Icon",function(){return i.default});var m=n(425);n.d(t,"PxScript",function(){return m.default})},464:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return p}),n.d(t,"ExtendedUsage",function(){return d});var l=n(1),c=n.n(l),s=n(427);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement("p",null,"Overview... ",c.a.createElement(s.Property,{value:".status"}),"..."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeList:!0},c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,c.a.createElement("span",{className:"status status-default"},"Default")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-neutral"},"Neutral")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-success"},"Success")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-warning"},"Warning")),c.a.createElement("li",null,c.a.createElement("span",{className:"status status-danger"},"Danger")))))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"extended-usage"},"Extended usage"),c.a.createElement("p",null,"Extended usage... ",c.a.createElement(s.Property,{value:".status"}),"..."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("h1",{className:"status status-default"},"Default"),c.a.createElement("h2",{className:"status status-neutral"},"Neutral"),c.a.createElement("h3",{className:"status status-success"},"Success"),c.a.createElement("h4",{className:"status status-warning"},"Warning"),c.a.createElement("h5",{className:"status status-danger"},"Danger")))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,i(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,l["Component"]),n=t,(a=[{key:"render",value:function(){return c.a.createElement(s.DocContainer,{docToc:!0},c.a.createElement("p",{className:"lead"},"Status..."),c.a.createElement(p,null),c.a.createElement(d,null))}}])&&u(n.prototype,a),r&&u(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?6afd4967bcdb7c718c99