(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[29,50,51,52,53,54,55],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(0),r=a.n(n),l=a(1),c=a.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(1),l=a.n(r),c=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(148);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(l).a.string.isRequired},t.default=c},152:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(1),l=a.n(r),c=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(a=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},156:function(e,t,a){"use strict";a.r(t);var n=a(147);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(154);a.d(t,"ComponentPreview",function(){return r.default});var l=a(153);a.d(t,"DocHeading",function(){return l.default});var c=a(155);a.d(t,"DocToc",function(){return c.default});var o=a(149);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var s=a(150);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=a(151);a.d(t,"Icon",function(){return u.default});var i=a(152);a.d(t,"PxScript",function(){return i.default})},209:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(157),l=a.n(r),o=a(156),s=a(1),u=a.n(s),i=a(34),m=a.n(i),p=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"step-bar-item-complete"},c.a.createElement("div",{className:"material-icons step-bar-icon"},"check"),"Step one"),c.a.createElement("li",{className:"step-bar-item-active"},"Step two"),c.a.createElement("li",null,"Step three"),c.a.createElement("li",null,"Step four"))},d=function(e){var t=e.items,a=e.horizontal,n=m()("step-bar",a?"step-bar--horizontal":null);return c.a.createElement("ol",{className:n},t?t.map(function(e,t){var a=e.title,n=e.subtitle,r=e.completed,l=e.active;return c.a.createElement("li",{key:t,className:"".concat(r?"step-bar-item-complete":"").concat(l?" step-bar-item-active":"")},r?c.a.createElement("div",{className:"material-icons step-bar-icon"},"check"):null,a,n?c.a.createElement("div",{className:"step-bar-item-sub-title"},n):null)}):c.a.createElement(p,null))};d.propTypes={items:u.a.array,horizontal:u.a.bool};var E=d;a.d(t,"BasicStepBar",function(){return f}),a.d(t,"HorizontalStepBar",function(){return v}),a.d(t,"StepBarText",function(){return N});var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"basic-usage"},"Basic usage"),c.a.createElement("p",null,"Add class ",c.a.createElement("code",{className:"token property"},".step-bar")," to an ",c.a.createElement(l.a,{className:"language-html"},"<ol>")," element."),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(E,{items:[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",active:!0},{title:"Step three"},{title:"Step four"}]})))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"horizontal-step-bar"},"Horizontal step bar"),c.a.createElement("p",null,"In addition to class ",c.a.createElement("code",{className:"token property"},".step-bar"),", add the extension class ",c.a.createElement("code",{className:"token property"},".step-bar--horizontal")," to an ",c.a.createElement(l.a,{className:"language-html"},"<ol>")," element."),c.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(E,{items:[{title:"Step one",completed:!0},{title:"Step two",active:!0},{title:"Step three"},{title:"Step four"}],horizontal:!0})))},N=function(){return c.a.createElement("div",{className:"col-12 col-lg-10 doc-body"},c.a.createElement(o.ExperimentalComponentAlert,null),c.a.createElement("p",{className:"lead"},"Step Bar."),c.a.createElement(f,null),c.a.createElement(v,null))};t.default=function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(N,null),c.a.createElement(o.DocToc,{component:N})))}}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?16bf261aa250e760e518