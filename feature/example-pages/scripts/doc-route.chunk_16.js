(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[17,5,46,48,49,50,52],{420:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return s});var n=a(1),l=a.n(n),r=a(2),c=a.n(r),s=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},o=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};o.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},s.propTypes={value:c.a.string.isRequired},t.default=o},421:function(e,t,a){"use strict";var n=a(1),s=a.n(n),l=a(2),r=a.n(l),c=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,c=e.children;return s.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?s.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?s.a.createElement("p",null,r):null,c?"\n":"",c?s.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?s.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",s.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=c},422:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(421);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(421);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),c=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:a.n(r).a.string.isRequired},t.default=c},425:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(2),r=a.n(l),c=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,c=e.params;return l&&(a=l.map(function(e,t){return s.a.createElement("span",{key:t},e,s.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return s.a.createElement("span",{key:t},e,t<c.length-1?s.a.createElement("span",{className:"token punctuation"},", "):null)})),s.a.createElement("code",null,s.a.createElement("span",null,"px"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",null,n),s.a.createElement("span",{className:"token punctuation"},"."),a,s.a.createElement("span",{className:"token function"},r),s.a.createElement("span",{className:"token punctuation"},"("),t,s.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=c},426:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),c=a.n(r),s=a(427),o=function(e){var t=e.docToc,a=e.children,n=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(n,null),t?l.a.createElement(s.DocToc,{component:n}):null))};o.propTypes={docToc:c.a.bool},t.default=o},427:function(e,t,a){"use strict";a.r(t);var n=a(420);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(428);a.d(t,"ComponentPreview",function(){return l.default});var r=a(426);a.d(t,"DocContainer",function(){return r.default});var c=a(429);a.d(t,"DocHeading",function(){return c.default});var s=a(430);a.d(t,"DocToc",function(){return s.default});var o=a(422);a.d(t,"DeprecatedComponentAlert",function(){return o.default});var i=a(423);a.d(t,"ExperimentalComponentAlert",function(){return i.default});var u=a(424);a.d(t,"Icon",function(){return u.default});var m=a(425);a.d(t,"PxScript",function(){return m.default})},463:function(e,t,a){"use strict";a.r(t),a.d(t,"DefaultSlab",function(){return d}),a.d(t,"SlabElevated",function(){return E}),a.d(t,"SlabWell",function(){return f}),a.d(t,"SlabWhite",function(){return b}),a.d(t,"SlabSizes",function(){return h}),a.d(t,"SlabMuted",function(){return v}),a.d(t,"SlabCombinations",function(){return g});var r=a(1),c=a.n(r),s=a(427),o=a(68);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"default-slab"},"Default slab"),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab"},c.a.createElement("p",null,"Do you want to sign up for the slab mailing list?"),c.a.createElement("form",{action:"#",noValidate:!0,"data-validate":!0},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"validation-email-2"},"Email"),c.a.createElement("div",{className:"input-group"},c.a.createElement("span",{className:"input-group-addon"},c.a.createElement("i",{className:"material-icons"},"email")),c.a.createElement("input",{type:"email",className:"form-control",id:"validation-email-2",placeholder:"bob.corlsan@example.com",required:!0})),c.a.createElement("div",{className:"help-block","data-success":"Right!","data-error":"Wrong!"},"This one might be a little tricky")),c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"elevated-slab"},"Elevated slab"),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-elevated"},"Look ma, im elevated!")))},f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"slab-well"},"Slab well"),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-well"},"Look ma, im in a well!")))},b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"slab-white"},"Slab white"),c.a.createElement("p",null,"This slab can contain so many things"),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-white"},c.a.createElement("p",{className:"lead text-center"},"Here is some text and then a striped item list"),c.a.createElement("ul",{className:"item-list item-list-striped"},c.a.createElement("li",null,c.a.createElement("span",null,"4925*********004")),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",c.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",c.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("i",{className:"material-icons"},"star"),"\n"),c.a.createElement("li",null,"\n",c.a.createElement("span",null,"4925*********004"),"\n",c.a.createElement("span",{className:"status status-success"},"Active"),"\n",c.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},c.a.createElement("i",{className:"material-icons"},"delete")),"\n")),c.a.createElement("p",null,"Maybe include a steps component in this slab so you can track your progress!"),c.a.createElement("div",{className:"steps"},c.a.createElement("ol",null,c.a.createElement("li",{className:"steps-completed"},c.a.createElement("div",{className:"material-icons steps-icon"},"check"),"Step one",c.a.createElement("div",{className:"steps-sub-title"},"24.12.17 12:10")),c.a.createElement("li",{className:"steps-ongoing steps-selected"},"Step two"),c.a.createElement("li",null,"Step three"),c.a.createElement("li",null,"Step four")),c.a.createElement("div",{className:"steps-responsive"},c.a.createElement("div",{className:"steps-responsive-text"},"Step 3"))))))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"slab-muted"},"Slab muted"),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-muted"},c.a.createElement("h4",null,"This text will be gray."),"\n",c.a.createElement("span",null,"And this text will be gray."),"\n","Even this text will be gray!")))},h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"slab-sizes"},"Slab sizes"),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-sm"},"This is very snug.")),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-lg"},"This is so spacious I can hardly believe it!")))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"slab-combinations"},"Slab combinations"),c.a.createElement("p",null,"You can mix and match slab variations as you see fit."),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-white slab-muted slab-elevated"},"This is an elevated white slab with muted text.")),c.a.createElement(s.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"slab slab-well slab-lg"},"This is a big well!")))},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){o.validation.init()}},{key:"render",value:function(){return c.a.createElement(s.DocContainer,{docToc:!0},c.a.createElement(s.ExperimentalComponentAlert,null),c.a.createElement("p",{className:"lead"},"Slabs are container components, therefore it works with whatever you want to put in it."),c.a.createElement(d,null),c.a.createElement(E,null),c.a.createElement(f,null),c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(h,null),c.a.createElement(g,null))}}])&&i(a.prototype,n),l&&i(a,l),t}();t.default=l}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?372bc49b8e71ea498a9d