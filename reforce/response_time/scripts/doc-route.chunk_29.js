(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[30,44,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(1),l=a.n(n),r=a(2),c=a.n(r),o=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(2),r=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(r).a.string.isRequired},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(2),r=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(a=l.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(427);a.d(t,"ComponentPreview",function(){return l.default});var r=a(428);a.d(t,"DocHeading",function(){return r.default});var c=a(429);a.d(t,"DocToc",function(){return c.default});var o=a(423);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=a(425);a.d(t,"Icon",function(){return s.default});var m=a(426);a.d(t,"PxScript",function(){return m.default})},472:function(e,t,a){"use strict";a.r(t),a.d(t,"DocTable",function(){return u}),a.d(t,"BasicTable",function(){return s}),a.d(t,"StripedTable",function(){return m}),a.d(t,"CondensedTable",function(){return i}),a.d(t,"HoverTable",function(){return d}),a.d(t,"HoverStripedTable",function(){return p}),a.d(t,"DescriptionTable",function(){return E}),a.d(t,"TablesText",function(){return f});var n=a(1),r=a.n(n),l=a(186),c=a.n(l),o=a(430),u=function(e){var t=e.striped,a=e.condensed,n=e.hover,l=c()("table",t?"table-striped":null,a?"table-condensed":null,n?"table-hover":null);return r.a.createElement("table",{className:l},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Location"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,"Sven"),r.a.createElement("td",null,"Svensson"),r.a.createElement("td",null,"Visby")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"2"),r.a.createElement("td",null,"Sara"),r.a.createElement("td",null,"Svensson"),r.a.createElement("td",null,"Stockholm")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"3"),r.a.createElement("td",null,"Ola"),r.a.createElement("td",null,"Nordmann"),r.a.createElement("td",null,"Oslo")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"4"),r.a.createElement("td",null,"Holger"),r.a.createElement("td",null,"Danske"),r.a.createElement("td",null,"Copenhagen")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"5"),r.a.createElement("td",null,"Matti"),r.a.createElement("td",null,"Meikäläinen"),r.a.createElement("td",null,"Lahti"))))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-table"},"Basic table"),r.a.createElement("p",null,"Basic tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,null)))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"striped-table"},"Striped table"),r.a.createElement("p",null,"Striped tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{striped:!0})))},i=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"condensed-table"},"Condensed table"),r.a.createElement("p",null,"Condensed table info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{condensed:!0})))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"hover-table"},"Hover table"),r.a.createElement("p",null,"Hover tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{hover:!0})))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"hover-striped-table"},"Hover striped table"),r.a.createElement("p",null,"Hover striped tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u,{hover:!0,striped:!0})))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"description-table"},"Description table"),r.a.createElement("p",null,"Description tables info..."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("table",{className:"table table-description table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Key"),r.a.createElement("th",{scope:"col"},"Value"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Name"),r.a.createElement("td",null,"John Doe")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Occupation"),r.a.createElement("td",null,"Unknown")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Skills"),r.a.createElement("td",null,"Unknown"))))))},f=function(){return r.a.createElement("div",{className:"col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Lots of nice info about tables will be here..."),r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(i,null),r.a.createElement(d,null),r.a.createElement(p,null),r.a.createElement(E,null))};t.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(f,null),r.a.createElement(o.DocToc,{component:f})))}}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?9072a16ae3e4b8504385