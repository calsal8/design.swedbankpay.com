(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,45,47,48,49,50,52],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},422:function(e,t,n){"use strict";var a=n(1),c=n.n(a),l=n(2),r=n.n(l),o=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,r=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?c.a.createElement("p",null,r):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=o},423:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(r).a.string.isRequired},t.default=o},426:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(2),r=n.n(l),o=function(e){var t,n,a=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(n=l.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=o},430:function(e,t,n){"use strict";n.r(t);var a=n(421);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(427);n.d(t,"ComponentPreview",function(){return l.default});var r=n(428);n.d(t,"DocHeading",function(){return r.default});var o=n(429);n.d(t,"DocToc",function(){return o.default});var c=n(423);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(424);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(425);n.d(t,"Icon",function(){return i.default});var s=n(426);n.d(t,"PxScript",function(){return s.default})},491:function(e,t,n){"use strict";n.r(t);var r=n(1),d=n.n(r),o=n(430),a=n(2),l=n.n(a),c=n(186),f=n.n(c),u=function(e){var t=e.title,n=e.subTitle,a=e.id,l=e.type,r=e.removeBottomPadding,o=e.removeAllPadding,c=e.halfPadding,u=e.darkMode,i=e.bodyContent,s=e.panelTable,m=e.footerText,p=f()("panel",l?"panel-".concat(l):"panel-default",r?"panel-bottomless":null,o?"panel-no-padding":null,c?"panel-half-padding":null,u?"panel-dark":null);return d.a.createElement("section",{className:p,id:a},t?d.a.createElement("header",null,d.a.createElement("h2",{className:"panel-title"},t),n?d.a.createElement("p",{className:"panel-sub-title"},n):null):null,i?d.a.createElement("div",{className:"panel-body"},i.map(function(e,t){return d.a.createElement("p",{key:t},e)})):null,s?d.a.createElement("div",{className:"panel-table"},s()):null,m?d.a.createElement("footer",null,d.a.createElement("p",null,m)):null)};u.propTypes={title:l.a.string,subTitle:l.a.string,id:l.a.string,type:l.a.oneOf(["brand","default","muted",""]),halfPadding:l.a.bool,removeAllPadding:l.a.bool,removeBottomPadding:l.a.bool,darkMode:l.a.bool,bodyContent:l.a.array,footerText:l.a.string};var i=u;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return h}),n.d(t,"PanelHeaders",function(){return g}),n.d(t,"PanelDark",function(){return P}),n.d(t,"PanelMuted",function(){return w}),n.d(t,"PanelText",function(){return N}),n.d(t,"PanelTable",function(){return k}),n.d(t,"TableContent",function(){return v});var y=["Your main panel content is put here.","Some more content over here.","And one more line, just to be safe."],v=function(){return d.a.createElement("table",{className:"table"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"},"#"),d.a.createElement("th",{scope:"col"},"First Name"),d.a.createElement("th",{scope:"col"},"Last Name"),d.a.createElement("th",{scope:"col"},"Location"))),d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},"1"),d.a.createElement("td",null,"Sven"),d.a.createElement("td",null,"Svensson"),d.a.createElement("td",null,"Visby")),d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},"2"),d.a.createElement("td",null,"Sara"),d.a.createElement("td",null,"Svensson"),d.a.createElement("td",null,"Stockholm")),d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},"3"),d.a.createElement("td",null,"Ola"),d.a.createElement("td",null,"Nordmann"),d.a.createElement("td",null,"Oslo")),d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},"4"),d.a.createElement("td",null,"Holger"),d.a.createElement("td",null,"Danske"),d.a.createElement("td",null,"Copenhagen")),d.a.createElement("tr",null,d.a.createElement("th",{scope:"row"},"5"),d.a.createElement("td",null,"Matti"),d.a.createElement("td",null,"Meikäläinen"),d.a.createElement("td",null,"Lahti"))))},h=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"overview"},"Overview"),d.a.createElement("p",null,"Panel..."),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement(i,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",bodyContent:y})))},g=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"panel-headers"},"Panel headers"),d.a.createElement("p",null,"Two types of headers... ",d.a.createElement(o.Property,{value:".panel-default"})," and ",d.a.createElement(o.Property,{value:".panel-brand"}),"..."),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement(i,{title:"Default panel"}),"\n\n",d.a.createElement(i,{type:"brand",title:"Panel brand"})))},P=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"panel-dark-mode"},"Panel dark mode"),d.a.createElement("p",null,"Dark body with ",d.a.createElement(o.Property,{value:".panel-dark"}),"..."),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement(i,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:y,footerText:"Footer content goes here.",footerBtnText:"Footer button",darkMode:!0})))},w=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"muted-panel"},"Muted panel"),d.a.createElement("p",null,"Muted panel with ",d.a.createElement(o.Property,{value:".panel-muted"}),"..."),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement(i,{type:"muted",title:"Panel title",subTitle:"Panel subtitle",bodyContent:y,footerText:"Footer content goes here.",footerBtnText:"Footer button"})))},k=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{id:"panel-with-table"},"Displaying a full width table"),d.a.createElement("p",null,"To display a full width table in a panel use ",d.a.createElement(o.Property,{value:".panel-table"})," on a div wrapping the table. Put ",d.a.createElement(o.Property,{value:".panel-table"})," as a direct child of ",d.a.createElement(o.Property,{value:".panel"}),". Tables put in a panel are given a border bottom to seperate it from the following elements."),d.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},d.a.createElement(i,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:y,footerText:"Footer content goes here.",footerBtnText:"Footer button",panelTable:v})))},N=function(){return d.a.createElement("div",{className:"col-lg-10 doc-body"},d.a.createElement("p",{className:"lead"},"Panels..."),d.a.createElement(h,null),d.a.createElement(g,null),d.a.createElement(P,null),d.a.createElement(w,null),d.a.createElement(k,null))},T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,E(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return d.a.createElement("div",{className:"doc-container"},d.a.createElement("div",{className:"row"},d.a.createElement(N,null),d.a.createElement(o.DocToc,{component:N})))}}])&&m(n.prototype,a),l&&m(n,l),t}();t.default=T}}]);
//# sourceMappingURL=doc-route.chunk_14.js.map?9effc768522e4e6d25e2