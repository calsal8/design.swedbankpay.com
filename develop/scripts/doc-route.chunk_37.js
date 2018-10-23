(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[49,50,51,52,53,54,55],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(0),r=n.n(a),l=n(1),c=n.n(l),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},i.propTypes={value:c.a.string.isRequired},t.default=s},148:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?i.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?i.a.createElement("p",null,l):null,c?"\n":"",c?i.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},152:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return i.a.createElement("span",{key:t},e,t<c.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,a),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},l),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},156:function(e,t,n){"use strict";n.r(t);var a=n(147);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(154);n.d(t,"ComponentPreview",function(){return r.default});var l=n(153);n.d(t,"DocHeading",function(){return l.default});var c=n(155);n.d(t,"DocToc",function(){return c.default});var i=n(149);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(150);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var o=n(151);n.d(t,"Icon",function(){return o.default});var u=n(152);n.d(t,"PxScript",function(){return u.default})},199:function(e,t,n){"use strict";n.r(t),n.d(t,"Intro",function(){return c}),n.d(t,"VisibilityText",function(){return i});var a=n(0),r=n.n(a),l=n(156),c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Set the ",r.a.createElement("code",{className:"token property"},"visibility")," of elements with our visibility utilities. These do not modify the ",r.a.createElement("code",{className:"token property"},"display")," value at all and are helpful for hiding content from most users, but still keeping them for screen readers."),r.a.createElement("p",null,"Apply ",r.a.createElement("code",{className:"token property"},".visible")," or ",r.a.createElement("code",{className:"token property"},".invisible")," as needed."),r.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("div",{className:"visible"},"..."),r.a.createElement("div",{className:"invisible"},"...")),r.a.createElement(l.ComponentPreview,{language:"css",codeFigure:!0},"\n                // Class\n                .visible {\n                    visibility: visible !important;\n                }\n                .invisible {\n                    visibility: hidden !important;\n                }\n            "))},i=function(){return r.a.createElement("div",{className:"col-12 doc-body"},r.a.createElement("p",{className:"lead"},"Control the visibility, without modifying the display, of elements with visibility utilities."),r.a.createElement(c,null))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(i,null))))}}}]);
//# sourceMappingURL=doc-route.chunk_37.js.map?16bf261aa250e760e518