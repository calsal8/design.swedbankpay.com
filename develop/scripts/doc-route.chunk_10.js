(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[22,50,51,52,53,54,55],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(0),r=a.n(n),l=a(1),c=a.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=i},148:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(1),l=a.n(r),c=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(l).a.string.isRequired},t.default=c},152:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(1),l=a.n(r),c=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(a=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},156:function(e,t,a){"use strict";a.r(t);var n=a(147);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(154);a.d(t,"ComponentPreview",function(){return r.default});var l=a(153);a.d(t,"DocHeading",function(){return l.default});var c=a(155);a.d(t,"DocToc",function(){return c.default});var o=a(149);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var i=a(150);a.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=a(151);a.d(t,"Icon",function(){return s.default});var u=a(152);a.d(t,"PxScript",function(){return u.default})},181:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicUsage",function(){return E}),a.d(t,"Sizes",function(){return h}),a.d(t,"MutedLoader",function(){return g}),a.d(t,"StaticHtml",function(){return v}),a.d(t,"UsageWithJavascript",function(){return y}),a.d(t,"LoadersText",function(){return b});var l=a(0),c=a.n(l),n=a(157),r=a.n(n),o=a(156),i=a(54),s=a(18);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"Basic usage..."),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{size:"default",visible:!0})))},h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"sizes"},"Sizes"),c.a.createElement("p",null,"In addition to ",c.a.createElement("code",{className:"token property"},".loader-default")," you can use ",c.a.createElement("code",{className:"token property"},".loader-small")," and ",c.a.createElement("code",{className:"token property"},".loader-large")," to decrease or increase the size of the loader."),c.a.createElement("h3",null,"Small"),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{size:"small",visible:!0})),c.a.createElement("h3",null,"Large"),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{size:"large",visible:!0})))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"muted-loader"},"Muted loader"),c.a.createElement("p",null,"Use class ",c.a.createElement("code",{className:"token property"},".loader-muted")," to mute the loader..."),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(i.a,{id:"test",size:"default",visible:!0,muted:!0})))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"static-html"},"Static HTML"),c.a.createElement("p",null,"Using the attribute ",c.a.createElement(o.Attribute,{data:!0,name:"loader"})," will append the following HTML to the element:"),c.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},c.a.createElement("ul",{className:"loader-icon"},c.a.createElement("li",null),c.a.createElement("li",null),c.a.createElement("li",null))),c.a.createElement("p",null,"If you want to use the static HTML instead of the data-attribute, make sure to ",c.a.createElement("b",null,"NOT")," include the attribute ",c.a.createElement(o.Attribute,{data:!0,name:"loader"}),"."))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),c.a.createElement("p",null,"To interact with the loader-component with javascript..."),c.a.createElement("h3",null,"Show loaders"),c.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},"px.loader.show();","\n","// OR","\n","px.loader.show(id);"),c.a.createElement("h3",null,"Hide loaders"),c.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},"px.loader.hide();","\n","// OR","\n","px.loader.hide(id);"),c.a.createElement("h3",null,"Methods"),c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Method"),c.a.createElement("th",null,"Description"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(o.PxScript,{component:"loader",func:"show"})),c.a.createElement("td",null,"Gives all rendered loaders the class ",c.a.createElement("code",{className:"token property"},".in"),", effectively giving them the css property ",c.a.createElement(r.a,{className:"language-css"},"display: inline-block;"),".")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(o.PxScript,{component:"loader",func:"show",params:["id"]})),c.a.createElement("td",null,"Gives the specified loader the class ",c.a.createElement("code",{className:"token property"},".in"),", giving it the css property ",c.a.createElement(r.a,{className:"language-css"},"display: inline-block;"),". If no loader with the specified id is rendered to the DOM, the method does nothing.")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(o.PxScript,{component:"loader",func:"hide"})),c.a.createElement("td",null,"Removes the class ",c.a.createElement("code",{className:"token property"},".in")," from all rendered loaders, effectively giving them the css property ",c.a.createElement(r.a,{className:"language-css"},"display: none;"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(o.PxScript,{component:"loader",func:"hide",params:["id"]})),c.a.createElement("td",null,"Removes the class ",c.a.createElement("code",{className:"token property"},".in")," from the loader specified by id, giving it the css property ",c.a.createElement(r.a,{className:"language-css"},"display: none;"),". If no alert with the specified id is rendered to the DOM, the method does nothing.")))))},b=function(){return c.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},c.a.createElement("p",{className:"lead"},"Use loaders..."),c.a.createElement(E,null),c.a.createElement(h,null),c.a.createElement(g,null),c.a.createElement(v,null))},w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,p(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,l["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){s.loader.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(b,null),c.a.createElement(o.DocToc,{component:b})))}}])&&m(a.prototype,n),r&&m(a,r),t}();t.default=w}}]);
//# sourceMappingURL=doc-route.chunk_10.js.map?16bf261aa250e760e518