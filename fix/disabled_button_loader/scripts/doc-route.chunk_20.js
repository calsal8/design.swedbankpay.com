(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[21,44,46,47,48,49,51],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),a,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&a?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),o=n(2),r=n.n(o),l=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,r=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?c.a.createElement("p",null,r):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=l},423:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(422);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(422);t.default=function(){return o.a.createElement(r.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(r).a.string.isRequired},t.default=l},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(2),r=n.n(o),l=function(e){var t,n,a=e.component,o=e.subComponents,r=e.func,l=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=l},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var o=n(427);n.d(t,"ComponentPreview",function(){return o.default});var r=n(428);n.d(t,"DocHeading",function(){return r.default});var l=n(429);n.d(t,"DocToc",function(){return l.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var i=n(424);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var u=n(425);n.d(t,"Icon",function(){return u.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},465:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return o}),n.d(t,"TooltipText",function(){return m});var r=n(1),l=n.n(r),c=n(430);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"Add the attribute ",l.a.createElement(c.Attribute,{data:!0,name:"tooltip"})," to the desired element and add your content in its value to create a tooltip."),l.a.createElement("p",null,"You can use the attribute ",l.a.createElement(c.Attribute,{data:!0,name:"tooltip-position"})," to position the tooltip relative to the containing element, use the values ",l.a.createElement(c.Attribute,{value:"top"}),", ",l.a.createElement(c.Attribute,{value:"right"}),", ",l.a.createElement(c.Attribute,{value:"bottom"})," or ",l.a.createElement(c.Attribute,{value:"left"}),". If the attribute is not provided, it will default to top."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"button-group"},"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"left"},"Tooltip to the left"),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"top"},"Tooltip on top"),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"bottom"},"Tooltip to the bottom"),"\n",l.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"right"},"Tooltip to the right"),"\n")))},m=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function."),l.a.createElement(o,null))},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(m,null),l.a.createElement(c.DocToc,{component:m})))}}])&&i(n.prototype,a),o&&i(n,o),t}();t.default=d}}]);
//# sourceMappingURL=doc-route.chunk_20.js.map?4c2f5d7c45a44aeef638