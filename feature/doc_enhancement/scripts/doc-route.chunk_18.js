(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[19,44,46,47,48,49,50],{417:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},418:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},419:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(418);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},420:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(418);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},421:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},422:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},426:function(e,t,n){"use strict";n.r(t);var a=n(417);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(423);n.d(t,"ComponentPreview",function(){return r.default});var l=n(424);n.d(t,"DocHeading",function(){return l.default});var o=n(425);n.d(t,"DocToc",function(){return o.default});var c=n(419);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(420);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(421);n.d(t,"Icon",function(){return s.default});var m=n(422);n.d(t,"PxScript",function(){return m.default})},457:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return d}),n.d(t,"Options",function(){return E}),n.d(t,"PremadeToasts",function(){return b}),n.d(t,"ToastText",function(){return y});var l=n(1),o=n.n(l),a=n(119),c=n(426),r=n(75);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"You want jam on that toast?"),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'px.toast({ html: "I am a toast!" });'),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button onclick="px.toast({ html: \'I am a toast!\' })" class="btn btn-primary">Toast!</button>'),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(r.toast)({html:"I am a toast!"})}},"Click for toast!")))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"options"},"Options"),o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"html"),o.a.createElement("td",null,"String"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:'""'})),o.a.createElement("td",null,"The HTML content of the Toast.")),o.a.createElement("tr",null,o.a.createElement("td",null,"type"),o.a.createElement("td",null,"String"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:'""'})),o.a.createElement("td",null,"Premade alert types; ",o.a.createElement(c.Attribute,{value:"success"}),", ",o.a.createElement(c.Attribute,{value:"neutral"}),", ",o.a.createElement(c.Attribute,{value:"warning"})," and ",o.a.createElement(c.Attribute,{value:"danger"})," are available.")),o.a.createElement("tr",null,o.a.createElement("td",null,"dismissable"),o.a.createElement("td",null,"Boolean"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:"true"})),o.a.createElement("td",null,"Wether or not the alert should be dismissable by the user (close button).")),o.a.createElement("tr",null,o.a.createElement("td",null,"icon"),o.a.createElement("td",null,"String"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:'""'})),o.a.createElement("td",null,"Custom icon for the toast. See ",o.a.createElement(a.a,{to:"/docs/core/icons"},"icons")," for more info.")),o.a.createElement("tr",null,o.a.createElement("td",null,"displayLength"),o.a.createElement("td",null,"Number"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:"4000"})),o.a.createElement("td",null,"Length in ms the Toast stays before dismissal.")),o.a.createElement("tr",null,o.a.createElement("td",null,"classes"),o.a.createElement("td",null,"Array of strings"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:"[]"})),o.a.createElement("td",null,"Classes to be added to the toast element.")),o.a.createElement("tr",null,o.a.createElement("td",null,"completeCallback"),o.a.createElement("td",null,"Function"),o.a.createElement("td",null,o.a.createElement(c.Attribute,{value:"null"})),o.a.createElement("td",null,"Callback function called when toast is dismissed.")))))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"premade-toasts"},"Premade toasts"),o.a.createElement("p",null,"There are four premade toast styles other than the default one; ",o.a.createElement(c.Attribute,{value:"neutral"}),", ",o.a.createElement(c.Attribute,{value:"success"}),", ",o.a.createElement(c.Attribute,{value:"warning"})," and ",o.a.createElement(c.Attribute,{value:"danger"}),". Apply the desired one to the options object and be amazed!"),o.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0,dangerousHTML:!0},'<button type="button" onclick="px.toast({ html: \'I am a neutral toast!\', type: \'neutral\' })" class="btn btn-primary">Neutral toast</button>','<button type="button" onclick="px.toast({ html: \'I am a success toast!\', type: \'success\' })" class="btn btn-primary">Success toast</button>','<button type="button" onclick="px.toast({ html: \'I am a warning toast!\', type: \'warning\' })" class="btn btn-primary">Warning toast</button>','<button type="button" onclick="px.toast({ html: \'I am a danger toast!\', type: \'danger\' })" class="btn btn-primary">Danger toast</button>'),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(r.toast)({html:"I am a toast!",type:"neutral"})}},"Neutral toast"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(r.toast)({html:"I am a toast!",type:"success"})}},"Success toast"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(r.toast)({html:"I am a toast!",type:"warning"})}},"Warning toast"),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(r.toast)({html:"I am a toast!",type:"danger"})}},"Danger toast")))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"custom-html"},"Custom HTML"),o.a.createElement("p",null,"You can pass in an HTML String as the first argument as well. Take a look at the example below, where we pass in text as well as a flat button. If you call an external function instead of in-line JavaScript, you will not need to escape quotation marks."),o.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},"const toastHtml = \"<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class='btn toast-action'>Undo</button>\";","\n","px.toast({ html: toastHtml });"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return Object(r.toast)({html:'<span><p>I am toast content.</p><p>You can put me on several lines.</p></span><button class="btn toast-action">Undo</button>'})}},"Toast with action")))},y=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement(c.ExperimentalComponentAlert,null),o.a.createElement("p",{className:"lead"},"Toast..."),o.a.createElement(d,null),o.a.createElement(E,null),o.a.createElement(b,null),o.a.createElement(f,null))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,i(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(y,null),o.a.createElement(c.DocToc,{component:y})))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=v}}]);
//# sourceMappingURL=doc-route.chunk_18.js.map?a939d09beb4e9ecabced