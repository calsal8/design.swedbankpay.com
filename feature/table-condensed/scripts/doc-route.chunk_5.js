(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[50,44,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},422:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},426:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(a=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(427);a.d(t,"ComponentPreview",function(){return r.default});var l=a(428);a.d(t,"DocHeading",function(){return l.default});var o=a(429);a.d(t,"DocToc",function(){return o.default});var c=a(423);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var i=a(424);a.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=a(425);a.d(t,"Icon",function(){return s.default});var u=a(426);a.d(t,"PxScript",function(){return u.default})},439:function(e,t,a){"use strict";var n=a(1),m=a.n(n),r=a(2),l=a.n(r),o=a(186),d=a.n(o),c=function(e){var t=e.size,a=e.imgUrl,n=e.icon,r=e.heading,l=e.text,o=e.textSmall,c=e.mediaRight,i=e.muted,s=d()("media",c?"media-right":null,t?"media-".concat(t):null),u=d()("material-icons",i?"text-muted":null);return m.a.createElement("div",{className:s},a||n?m.a.createElement("div",{className:"media-img"},"\n",a?m.a.createElement("img",{src:a}):null,a?"\n":null,n?m.a.createElement("i",{className:u},n):null,n?"\n":null):null,m.a.createElement("div",{className:"media-body"},function(){var e=d()(i?"text-muted":null);switch(t){case"sm":return m.a.createElement("h4",{className:e},r);case"lg":return m.a.createElement("h2",{className:e},r);default:return m.a.createElement("h3",{className:e},r)}}(),m.a.createElement("p",null,o?m.a.createElement("small",null,l):l)))};c.propTypes={size:l.a.oneOf(["sm","lg"]),imgUrl:l.a.string,icon:l.a.string,heading:l.a.string.isRequired,text:l.a.string,textSmall:l.a.bool,mediaRight:l.a.bool,muted:l.a.bool},t.a=c},485:function(e,t,a){"use strict";a.r(t);var l=a(1),m=a.n(l),n=a(183),o=a(430),r=a(2),c=a.n(r),i=function(e){var t=e.type,a=e.title,n=e.imgSrc,r=e.text,l=e.smallText,o=e.btnTxt,c=e.footerTxt,i=e.footerLink,s=e.footerLinkTxt,u=e.children;return m.a.createElement("div",{className:"card".concat(t?" card-".concat(t):"")},a?m.a.createElement("header",null,m.a.createElement("h3",null,m.a.createElement("a",{href:"#"},a))):null,n?m.a.createElement("div",{className:"card-img"},"\n",m.a.createElement("img",{src:n,alt:""}),"\n"):null,m.a.createElement("div",{className:"highlight"},u),m.a.createElement("div",{className:"card-body"},r?m.a.createElement("p",null,r):null,"\n",l?m.a.createElement("small",null,l):null),m.a.createElement("footer",null,o?m.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},o):null,c?m.a.createElement("div",{className:"footer-text"},m.a.createElement("p",null,c)):null,s?m.a.createElement("div",{className:"footer-link"},m.a.createElement("a",{href:i||"#"},s)):null))};i.propTypes={type:c.a.oneOf(["brand","default","light"]),title:c.a.string,imgSrc:c.a.string,icon:c.a.string,text:c.a.string,smallText:c.a.string,btnTxt:c.a.string,footerTxt:c.a.string,footerLink:c.a.string,footerLinkTxt:c.a.string};var s=i,u=a(439);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"DefaultBehaviour",function(){return x}),a.d(t,"CardTypes",function(){return g}),a.d(t,"CardText",function(){return y});var x=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",{id:"default-behaviour"},"Default behaviour"),m.a.createElement("p",null,"Wrap indiviual cards in the ",m.a.createElement(o.Property,{value:".cards"})," class to display them lined up next to each other. When the window reaches ",m.a.createElement(n.a,{to:"/docs/core/breakpoints"},"breakpoint")," sm the cards will switch to mobile view and take up one row each and stretch to fill the width of the container."),m.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},m.a.createElement("div",{className:"cards"},m.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},m.a.createElement(u.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com",textSmall:!0,muted:!0})),m.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},m.a.createElement(u.a,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0})),m.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},m.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})))))},g=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h2",{id:"card-types"},"Card Types"),m.a.createElement("p",null,"To decide how your cards will look use ",m.a.createElement(o.Property,{value:".card-default"}),", ",m.a.createElement(o.Property,{value:".card-brand"}),", or ",m.a.createElement(o.Property,{value:".card-light"})),m.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},m.a.createElement("div",{className:"cards"},m.a.createElement(s,{type:"default",title:"Card default",imgSrc:"https://picsum.photos/300",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},m.a.createElement(u.a,{size:"sm",icon:"account_circle",heading:"Bob Corlsan",text:"bob.corlsan@payex.com",textSmall:!0,muted:!0})),m.a.createElement(s,{type:"brand",title:"Card brand",imgSrc:"https://picsum.photos/300",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},m.a.createElement(u.a,{size:"sm",icon:"account_balance",heading:"725 NOK",text:"Outstanding balance",textSmall:!0,muted:!0})),m.a.createElement(s,{type:"light",title:"Card light",imgSrc:"https://picsum.photos/300",text:"This is the cards text",smallText:"And the small text",btnTxt:"Button",footerTxt:"This is some text that goes in the footer.",footerLinkTxt:"You wanna click this link?"},m.a.createElement(u.a,{size:"sm",icon:"verified_user",heading:"75%",text:"Complete",textSmall:!0,muted:!0})))))},y=function(){return m.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},m.a.createElement(o.ExperimentalComponentAlert,null),m.a.createElement("p",{className:"lead"},"Card..."),m.a.createElement(x,null),m.a.createElement(g,null))},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,h(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,l["Component"]),a=t,(n=[{key:"render",value:function(){return m.a.createElement("div",{className:"doc-container"},m.a.createElement("div",{className:"row"},m.a.createElement(y,null),m.a.createElement(o.DocToc,{component:y})))}}])&&p(a.prototype,n),r&&p(a,r),t}();t.default=b}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?8cea91837dc37691c3e1