(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,44,46,47,48,49,51],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(427);n.d(t,"ComponentPreview",function(){return r.default});var l=n(428);n.d(t,"DocHeading",function(){return l.default});var o=n(429);n.d(t,"DocToc",function(){return o.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(424);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(425);n.d(t,"Icon",function(){return i.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},490:function(e,t,n){"use strict";n.r(t);var l=n(1),p=n.n(l),o=n(430),a=n(2),r=n.n(a),c=n(186),d=n.n(c),u=function(e){var t=e.title,n=e.subTitle,a=e.id,r=e.type,l=e.removeBottomPadding,o=e.removeAllPadding,c=e.halfPadding,u=e.darkMode,i=e.children,s=e.footerText,m=d()("panel",r?"panel-".concat(r):"panel-default",l?"panel-bottomless":null,o?"panel-no-padding":null,c?"panel-half-padding":null,u?"panel-dark":null);return p.a.createElement("section",{className:m,id:a},t?p.a.createElement("header",null,p.a.createElement("h2",{className:"panel-title"},t),n?p.a.createElement("p",{className:"panel-sub-title"},n):null):null,i?p.a.createElement("div",{className:"panel-body"},i):null,s?p.a.createElement("footer",null,p.a.createElement("p",null,s)):null)};u.propTypes={title:r.a.string,subTitle:r.a.string,id:r.a.string,type:r.a.oneOf(["brand","default","muted",""]),halfPadding:r.a.bool,removeAllPadding:r.a.bool,removeBottomPadding:r.a.bool,darkMode:r.a.bool,footerText:r.a.string};var i=u;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return b}),n.d(t,"PanelHeaders",function(){return y}),n.d(t,"PanelDark",function(){return h}),n.d(t,"PanelMuted",function(){return g}),n.d(t,"PanelText",function(){return P});var b=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{id:"overview"},"Overview"),p.a.createElement("p",null,"Panel..."),p.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},p.a.createElement(i,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button"},p.a.createElement("p",null,"Your main panel content is put here."),p.a.createElement("p",null,"Some more content over here."),p.a.createElement("p",null,"And one more line, just to be safe."))))},y=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{id:"panel-headers"},"Panel headers"),p.a.createElement("p",null,"Two types of headers... ",p.a.createElement(o.Property,{value:".panel-default"})," and ",p.a.createElement(o.Property,{value:".panel-brand"}),"..."),p.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},p.a.createElement(i,{title:"Default panel"}),"\n\n",p.a.createElement(i,{type:"brand",title:"Panel brand"})))},h=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{id:"panel-dark-mode"},"Panel dark mode"),p.a.createElement("p",null,"Dark body with ",p.a.createElement(o.Property,{value:".panel-dark"}),"..."),p.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},p.a.createElement(i,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",darkMode:!0},p.a.createElement("p",{className:"lead"},"This is a dark panel."),p.a.createElement("p",null,"Your main panel content is put here."),p.a.createElement("p",null,"Some more content over here."),p.a.createElement("p",null,"And one more line, just to be safe."))))},g=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{id:"muted-panel"},"Muted panel"),p.a.createElement("p",null,"Muted panel with ",p.a.createElement(o.Property,{value:".panel-muted"}),"..."),p.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},p.a.createElement(i,{type:"muted",title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button"},p.a.createElement("p",{className:"lead"},"This is a muted panel."),p.a.createElement("p",null,"Your main panel content is put here."),p.a.createElement("p",null,"Some more content over here."),p.a.createElement("p",null,"And one more line, just to be safe."))))},P=function(){return p.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},p.a.createElement("p",{className:"lead"},"Panels..."),p.a.createElement(b,null),p.a.createElement(y,null),p.a.createElement(h,null),p.a.createElement(g,null))},k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,E(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,l["Component"]),n=t,(a=[{key:"render",value:function(){return p.a.createElement("div",{className:"doc-container"},p.a.createElement("div",{className:"row"},p.a.createElement(P,null),p.a.createElement(o.DocToc,{component:P})))}}])&&m(n.prototype,a),r&&m(n,r),t}();t.default=k}}]);
//# sourceMappingURL=doc-route.chunk_14.js.map?8cea91837dc37691c3e1