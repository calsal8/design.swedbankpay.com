(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[47,50,51,52,53,54,55],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(0),l=a.n(n),r=a(1),c=a.n(r),o=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=s},145:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(1),r=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?o.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?o.a.createElement("p",null,r):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},146:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(145);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},147:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(145);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},148:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(r).a.string.isRequired},t.default=c},149:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(1),r=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(a=l.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,n),o.a.createElement("span",{className:"token punctuation"},"."),a,o.a.createElement("span",{className:"token function"},r),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},153:function(e,t,a){"use strict";a.r(t);var n=a(144);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(151);a.d(t,"ComponentPreview",function(){return l.default});var r=a(150);a.d(t,"DocHeading",function(){return r.default});var c=a(152);a.d(t,"DocToc",function(){return c.default});var o=a(146);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var s=a(147);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var m=a(148);a.d(t,"Icon",function(){return m.default});var d=a(149);a.d(t,"PxScript",function(){return d.default})},195:function(e,t,a){"use strict";a.r(t),a.d(t,"HowItWorks",function(){return o}),a.d(t,"Notation",function(){return s}),a.d(t,"Examples",function(){return m}),a.d(t,"HidingElements",function(){return d}),a.d(t,"DisplayText",function(){return i});var n=a(0),l=a.n(n),r=a(35),c=a(153),o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"how-it-works"},"How it works"),l.a.createElement("p",null,"Change the value of the ",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display"},"display property")," with our responsive display utility classes. We purposely support only a subset of all possible values for ",l.a.createElement("code",{className:"token property"},"display"),". Classes can be combined for various effects as you need."))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"notation"},"Notation"),l.a.createElement("p",null,"Display utility classes that apply to all ",l.a.createElement(r.a,{to:"/docs/core/breakpoints"},"breakpoints"),", from ",l.a.createElement("code",{className:"token property"},"xs")," to ",l.a.createElement("code",{className:"token property"},"xxl"),", have no breakpoint abbreviation in them. This is because those classes are applied from ",l.a.createElement("code",{className:"token property"},"min-width: 0;")," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."),l.a.createElement("p",null,"As such, the classes are named using the format:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},".d-{value}")," for ",l.a.createElement("code",{className:"token property"},"xs")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},".d-{breakpoint}-{value}")," for ",l.a.createElement("code",{className:"token property"},"sm"),", ",l.a.createElement("code",{className:"token property"},"md"),", ",l.a.createElement("code",{className:"token property"},"lg"),", ",l.a.createElement("code",{className:"token property"},"xl")," and ",l.a.createElement("code",{className:"token property"},"xxl"),".")),l.a.createElement("p",null,"Where ",l.a.createElement("i",null,"value")," is one of:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"none")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"inline")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"inline-block")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"block")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"table")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"table-cell")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"table-row")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"flex")),l.a.createElement("li",null,l.a.createElement("code",{className:"token property"},"inline-flex"))),l.a.createElement("p",null,"The media queries effect screen widths with the given breakpoint ",l.a.createElement("i",null,"or larger"),". For example, ",l.a.createElement("code",{className:"token property"},".d-xl-none")," sets ",l.a.createElement("code",{className:"token property"},"display: none;")," on both ",l.a.createElement("code",{className:"token property"},"xl")," and ",l.a.createElement("code",{className:"token property"},"xxl")," screens."))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"examples"},"Examples"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"d-inline bg-brand"},"d-inline"),l.a.createElement("div",{className:"d-inline bg-default"},"d-inline")),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"d-block bg-brand"},"d-block"),l.a.createElement("div",{className:"d-block bg-default"},"d-block")))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hiding-elements"},"Hiding elements"),l.a.createElement("p",null,"For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size."),l.a.createElement("p",null,"To hide elements simply use the ",l.a.createElement("code",{className:"token property"},".d-none")," class or one of the ",l.a.createElement("code",{className:"token property"},".d-{sm,md,lg,xl}-none")," classes for any responsive screen variation."),l.a.createElement("p",null,"To show an element only on a given interval of screen sizes you can combine one ",l.a.createElement("code",{className:"token property"},".d-*-none")," class with a ",l.a.createElement("code",{className:"token property"},".d-*-*")," class, for example ",l.a.createElement("code",{className:"token property"},".d-none .d-md-block .d-xl-none")," will hide the element for all screen sizes except on medium and large devices."),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Screen Size"),l.a.createElement("th",null,"Class"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden on all"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on xs"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-none .d-sm-block"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on sm"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-sm-none .d-md-block"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on md"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-md-none .d-lg-block"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on lg"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-lg-none .d-xl-block"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on xl"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-xl-none .d-xxl-block"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on xxl"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-xxl-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible on all"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-block"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on xs"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-block .d-sm-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on sm"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-sm-block .d-md-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on md"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-md-block .d-lg-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on lg"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-lg-block .d-xl-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on xl"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-xl-block .d-xxl-none"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on xxl"),l.a.createElement("td",null,l.a.createElement("code",{className:"token property"},".d-xxl-block"))))),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"d-lg-none"},"Hidden on screens wider than lg"),l.a.createElement("div",{className:"d-none d-lg-block"},"Hidden on screens smaller than lg")))},i=function(){return l.a.createElement("div",{className:"col-12 col-lg-10 doc-body"},l.a.createElement("p",{className:"lead"},"Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."),l.a.createElement(o,null),l.a.createElement(s,null),l.a.createElement(m,null),l.a.createElement(d,null))};t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(i,null),l.a.createElement(c.DocToc,{component:i}))))}}}]);
//# sourceMappingURL=doc-route.chunk_35.js.map?2ccd72ac879ebaf34cab