(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[38,50,51,52,53,54,55],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return o});var n=t(0),l=t.n(n),c=t(1),r=t.n(c),o=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},s=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:r.a.string,value:r.a.string,data:r.a.bool},o.propTypes={value:r.a.string.isRequired},a.default=s},148:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(1),c=t.n(l),r=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,c=e.text,r=e.children;return o.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,c?"\n":"",c?o.a.createElement("p",null,c):null,r?"\n":"",r?o.a.createElement("div",{className:"alert-body"},r):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};r.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},a.a=r},149:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(148);a.default=function(){return l.a.createElement(c.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},150:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(148);a.default=function(){return l.a.createElement(c.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},151:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(1),r=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};r.propTypes={icon:t.n(c).a.string.isRequired},a.default=r},152:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(1),c=t.n(l),r=function(e){var a,t,n=e.component,l=e.subComponents,c=e.func,r=e.params;return l&&(t=l.map(function(e,a){return o.a.createElement("span",{key:a},e,o.a.createElement("span",{className:"token punctuation"},"."))})),r&&(a=r.map(function(e,a){return o.a.createElement("span",{key:a},e,a<r.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),t,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),a,o.a.createElement("span",{className:"token punctuation"},");"))};r.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},a.default=r},156:function(e,a,t){"use strict";t.r(a);var n=t(147);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(154);t.d(a,"ComponentPreview",function(){return l.default});var c=t(153);t.d(a,"DocHeading",function(){return c.default});var r=t(155);t.d(a,"DocToc",function(){return r.default});var o=t(149);t.d(a,"DeprecatedComponentAlert",function(){return o.default});var s=t(150);t.d(a,"ExperimentalComponentAlert",function(){return s.default});var m=t(151);t.d(a,"Icon",function(){return m.default});var i=t(152);t.d(a,"PxScript",function(){return i.default})},189:function(e,a,t){"use strict";t.r(a),t.d(a,"HowItWorks",function(){return r}),t.d(a,"GridOptions",function(){return o}),t.d(a,"AutoLayoutColumns",function(){return s}),t.d(a,"Alignment",function(){return m}),t.d(a,"GridText",function(){return i});var n=t(0),l=t.n(n),c=t(156),r=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"how-it-works"},"How it works"),l.a.createElement("p",null,"The grid system is heavily based on Bootstrap","'","s grid from v.4."),l.a.createElement("p",null,"Most classes from Bootstrap is available. Click ",l.a.createElement("a",{href:"http://getbootstrap.com/docs/4.1/layout/grid/",target:"_blank",rel:"noopener noreferrer"},"here")," to read more about it."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"showcase-grid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},"One of three columns"),l.a.createElement("div",{className:"col-sm"},"One of three columns"),l.a.createElement("div",{className:"col-sm"},"One of three columns"))))),l.a.createElement("p",null,"The above example creates three equal-width columns on small, medium, large, extra large, and extra extra large devices using our predefined grid classes. Those columns are centered in the page with the parent ",l.a.createElement("code",{className:"token property"},".container"),"."))},o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"grid-options"},"Grid options"),l.a.createElement("p",null,"Most sizes in the PayEx DesignGuide is defined using ",l.a.createElement("code",{className:"token property"},"em"),"s or ",l.a.createElement("code",{className:"token property"},"rem"),"s, ",l.a.createElement("code",{className:"token property"},"px"),"s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size."),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",{scope:"col"},"Extra small",l.a.createElement("p",null,l.a.createElement("small",null,"<","576px"))),l.a.createElement("th",{scope:"col"},"Small",l.a.createElement("p",null,l.a.createElement("small",null,"≥","576px"))),l.a.createElement("th",{scope:"col"},"Medium",l.a.createElement("p",null,l.a.createElement("small",null,"≥","768px"))),l.a.createElement("th",{scope:"col"},"Large",l.a.createElement("p",null,l.a.createElement("small",null,"≥","992px"))),l.a.createElement("th",{scope:"col"},"Extra large",l.a.createElement("p",null,l.a.createElement("small",null,"≥","1200px"))),l.a.createElement("th",{scope:"col"},"Extra extra large",l.a.createElement("p",null,l.a.createElement("small",null,"≥","1600px"))))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Max container width"),l.a.createElement("td",null,"None (auto)"),l.a.createElement("td",null,"540px"),l.a.createElement("td",null,"720px"),l.a.createElement("td",null,"960px"),l.a.createElement("td",null,"1140px"),l.a.createElement("td",null,"1460px")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Class prefix"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".col-")),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".col-sm-")),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".col-md-")),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".col-lg-")),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".col-xl-")),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".col-xxl-"))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"# of columns"),l.a.createElement("td",{colSpan:"6"},"12")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Gutter width"),l.a.createElement("td",{colSpan:"6"},"30px (15px on each side of a column)")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Nestable"),l.a.createElement("td",{colSpan:"6"},"Yes")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Column ordering"),l.a.createElement("td",{colSpan:"6"},"Yes")))))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"auto-layout-columns"},"Auto-layout columns"),l.a.createElement("p",null,"Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like ",l.a.createElement("code",{className:"token property"},".col-sm-6"),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"showcase-grid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"1 of 2"),l.a.createElement("div",{className:"col"},"2 of 2")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"1 of 3"),l.a.createElement("div",{className:"col"},"2 of 3"),l.a.createElement("div",{className:"col"},"3 of 3"))))))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"alignment"},"Alignment"),l.a.createElement("p",null,"Use flexbox alignment utilities to vertically and horizontally align columns."),l.a.createElement("h3",null,"Vertical alignment"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"showcase-grid showcase-vertical-space"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-start"},l.a.createElement("div",{className:"col"},"1 of 3"),l.a.createElement("div",{className:"col"},"2 of 3"),l.a.createElement("div",{className:"col"},"3 of 3")),l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col"},"1 of 3"),l.a.createElement("div",{className:"col"},"2 of 3"),l.a.createElement("div",{className:"col"},"3 of 3")),l.a.createElement("div",{className:"row align-items-end"},l.a.createElement("div",{className:"col"},"1 of 3"),l.a.createElement("div",{className:"col"},"2 of 3"),l.a.createElement("div",{className:"col"},"3 of 3"))))),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"showcase-grid showcase-vertical-space"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col align-self-start"},"1 of 3"),l.a.createElement("div",{className:"col align-self-center"},"1 of 3"),l.a.createElement("div",{className:"col align-self-end"},"1 of 3"))))),l.a.createElement("h3",null,"Horizontal alignment"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"showcase-grid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-start"},l.a.createElement("div",{className:"col-4"},"One of two columns"),l.a.createElement("div",{className:"col-4"},"One of two columns")),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4"},"One of two columns"),l.a.createElement("div",{className:"col-4"},"One of two columns")),l.a.createElement("div",{className:"row justify-content-end"},l.a.createElement("div",{className:"col-4"},"One of two columns"),l.a.createElement("div",{className:"col-4"},"One of two columns")),l.a.createElement("div",{className:"row justify-content-around"},l.a.createElement("div",{className:"col-4"},"One of two columns"),l.a.createElement("div",{className:"col-4"},"One of two columns")),l.a.createElement("div",{className:"row justify-content-between"},l.a.createElement("div",{className:"col-4"},"One of two columns"),l.a.createElement("div",{className:"col-4"},"One of two columns"))))))},i=function(){return l.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Use our grid system..."),l.a.createElement(r,null),l.a.createElement(o,null),l.a.createElement(s,null),l.a.createElement(m,null))};a.default=function(){return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(i,null),l.a.createElement(c.DocToc,{component:i})))}}}]);
//# sourceMappingURL=doc-route.chunk_26.js.map?35d0e61ea1eddbbb0a36