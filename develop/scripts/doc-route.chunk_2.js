(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[21,5,46,48,49,50,52],{420:function(e,a,n){"use strict";n.r(a),n.d(a,"Property",function(){return u});var t=n(1),l=n.n(t),r=n(2),c=n.n(r),u=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,n=e.name,t=e.value;return n&&t?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),t,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!t?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&t?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},t)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},u.propTypes={value:c.a.string.isRequired},a.default=s},421:function(e,a,n){"use strict";var t=n(1),u=n.n(t),l=n(2),r=n.n(l),c=function(e){var a=e.id,n=e.type,t=e.icon,l=e.close,r=e.text,c=e.children;return u.a.createElement("div",{id:a,className:"alert alert-".concat(n)},t?"\n":"",t?u.a.createElement("i",{className:"material-icons alert-icon"},t):null,r?"\n":"",r?u.a.createElement("p",null,r):null,c?"\n":"",c?u.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?u.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",u.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=c},422:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(421);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(421);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(2),c=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};c.propTypes={icon:n.n(r).a.string.isRequired},a.default=c},425:function(e,a,n){"use strict";n.r(a);var t=n(1),u=n.n(t),l=n(2),r=n.n(l),c=function(e){var a,n,t=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(n=l.map(function(e,a){return u.a.createElement("span",{key:a},e,u.a.createElement("span",{className:"token punctuation"},"."))})),c&&(a=c.map(function(e,a){return u.a.createElement("span",{key:a},e,a<c.length-1?u.a.createElement("span",{className:"token punctuation"},", "):null)})),u.a.createElement("code",null,u.a.createElement("span",null,"px"),u.a.createElement("span",{className:"token punctuation"},"."),u.a.createElement("span",null,t),u.a.createElement("span",{className:"token punctuation"},"."),n,u.a.createElement("span",{className:"token function"},r),u.a.createElement("span",{className:"token punctuation"},"("),a,u.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=c},426:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(2),c=n.n(r),u=n(427),s=function(e){var a=e.docToc,n=e.children,t=function(){return l.a.createElement("div",{className:"doc-body ".concat(a?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(t,null),a?l.a.createElement(u.DocToc,{component:t}):null))};s.propTypes={docToc:c.a.bool},a.default=s},427:function(e,a,n){"use strict";n.r(a);var t=n(420);n.d(a,"Attribute",function(){return t.default}),n.d(a,"Property",function(){return t.Property});var l=n(428);n.d(a,"ComponentPreview",function(){return l.default});var r=n(426);n.d(a,"DocContainer",function(){return r.default});var c=n(429);n.d(a,"DocHeading",function(){return c.default});var u=n(430);n.d(a,"DocToc",function(){return u.default});var s=n(422);n.d(a,"DeprecatedComponentAlert",function(){return s.default});var o=n(423);n.d(a,"ExperimentalComponentAlert",function(){return o.default});var m=n(424);n.d(a,"Icon",function(){return m.default});var d=n(425);n.d(a,"PxScript",function(){return d.default})},454:function(e,a,n){"use strict";n.r(a),n.d(a,"Overview",function(){return c}),n.d(a,"FurtherUsage",function(){return u});var t=n(1),l=n.n(t),r=n(427),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"Overview... ",l.a.createElement("code",{className:"token property"},".badge"),"..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-default"},"default")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-brand"},"brand")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-blue"},"blue")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-purple"},"purple")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-yellow"},"yellow")),l.a.createElement("p",null,"Badge ",l.a.createElement("span",{className:"badge badge-red"},"red"))))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"further-usage"},"Further usage"),l.a.createElement("p",null,"Further usage... ",l.a.createElement(r.Property,{value:".badge"}),"..."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",null,"Badge ",l.a.createElement("small",{className:"badge badge-default"},"default")),l.a.createElement("h2",null,"Badge ",l.a.createElement("small",{className:"badge badge-brand"},"brand")),l.a.createElement("h3",null,"Badge ",l.a.createElement("small",{className:"badge badge-blue"},"blue")),l.a.createElement("h4",null,"Badge ",l.a.createElement("small",{className:"badge badge-purple"},"purple")),l.a.createElement("h5",null,"Badge ",l.a.createElement("small",{className:"badge badge-yellow"},"yellow")),l.a.createElement("h6",null,"Badge ",l.a.createElement("small",{className:"badge badge-red"},"red"))))};a.default=function(){return l.a.createElement(r.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Badge..."),l.a.createElement(c,null),l.a.createElement(u,null))}}}]);
//# sourceMappingURL=doc-route.chunk_2.js.map?37ac0b0012d0cabffa16