(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[45,1,79,80,81,83,84,85,94,100,106],{361:function(e,t,a){"use strict";a.r(t);var n=a(362);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(364);a.d(t,"ComponentPreview",function(){return l.default});var r=a(369);a.d(t,"DocContainer",function(){return r.default});var o=a(365);a.d(t,"DocHeading",function(){return o.default});var c=a(366);a.d(t,"DocToc",function(){return c.default});var i=a(370);a.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=a(371);a.d(t,"ExperimentalComponentAlert",function(){return s.default});var m=a(367);a.d(t,"Icon",function(){return m.default});var u=a(372);a.d(t,"JavascriptDocs",function(){return u.default});var p=a(368);a.d(t,"DgScript",function(){return p.default})},362:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},363:function(e,t,a){"use strict";a.r(t),a.d(t,"ComplexAlert",function(){return s});var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(361),i=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?l.a.createElement("i",{className:"material-icons alert-icon"},n):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,o=e.headerText,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(a)},l.a.createElement("header",{className:"alert-header"},n?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement(c.Icon,{classNames:"alert-icon",type:n})):null,o?l.a.createElement(l.a.Fragment,null,"\n",n?l.a.createElement("h3",{className:"ml-2"},o):l.a.createElement("h3",null,o),"\n"):null,r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),i?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:n?"alert-body ml-5":"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default","informative"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.default=i},364:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(472),i=a(473),s=a.n(i),m=a(474);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,a=e.language,n=e.removeOuterTag,r=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,y=e.dangerousHTML,g=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?l.a.createElement(function(){var e="";if("html"===a&&y)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===a&&t&&"function"==typeof t.map)t.map(function(t){e+=n?g(t):o?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===a)e+=n?g(t):o?E(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(a){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return m.b.style="",l.a.createElement("figure",null,l.a.createElement(m.a,u({},m.b,{theme:void 0,code:e,language:a}),function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return l.a.createElement("div",u({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",u({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},365:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(41);t.default=Object(r.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),l.a.createElement("h1",null,t)})},366:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(469);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var a=e.type().props.children[0];if("h2"===a.type)t.push({title:a.props.children,id:a.props.id});else if("function"==typeof a.type){var n=a.type().props.children[0];"h2"===n.type&&t.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=m(this,u(t).call(this,e))).state={headings:d(a.props.component().props.children),windowTopPosition:window.pageYOffset},a}var a,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),a=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,a){if(t.id&&t.title){var n=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[a+1].top;return l.a.createElement("li",{key:a,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(a.prototype,r),o&&s(a,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},367:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=function(e){var t=e.type,a=e.classNames;return l.a.createElement("i",{className:"material-icons".concat(a?" ".concat(a):"")},t)};o.propTypes={type:a.n(r).a.string.isRequired},t.default=o},368:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=function(e){var t,a,n=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(a=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"dg"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,n),l.a.createElement("span",{className:"token punctuation"},"."),a,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},369:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(361),i=function(e){var t=e.docToc,a=e.children,n=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement(c.DocHeading,null),l.a.createElement("div",{className:"row"},l.a.createElement(n,null),t?l.a.createElement(c.DocToc,{component:n}):null))};i.propTypes={docToc:o.a.bool},t.default=i},370:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(363);t.default=function(){return l.a.createElement(r.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(363);t.default=function(){return l.a.createElement(r.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,a){"use strict";a.r(t),a.d(t,"OpenDocs",function(){return c}),a.d(t,"CloseDocs",function(){return i});var n=a(1),l=a.n(n),r=a(50),o=a(361),c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,a=e.open,n=e.close,s=e.others;return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Function"),l.a.createElement("th",{scope:"col"},"Purpose"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"init"})),l.a.createElement("td",null,l.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),a?l.a.createElement(c,{componentName:t}):null,n?l.a.createElement(i,{componentName:t}):null,s&&s.map(function(e,a){return l.a.createElement(e,{key:a,componentName:t})}))))}},373:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=function(e){var t=e.type,a=e.code;return l.a.createElement("code",{className:"code-tags code-tags-".concat(t)},a)};c.propTypes={type:o.a.string.isRequired,code:o.a.string.isRequired},t.default=c},380:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(361),i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{id:"actionListToggle",type:"button",className:"action-toggle","aria-haspopup":"true"},"\n",l.a.createElement("i",{className:"material-icons"},"more_vert"),"\n"),"\n")},s=function(e){var t=e.id,a=e.classNames,r=e.toggleBtn,o=e.items;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:t,className:"action-list".concat(a?" ".concat(a):"")},"\n",r?l.a.createElement(l.a.Fragment,null,r,"\n"):l.a.createElement(i,null),l.a.createElement("div",{className:"action-menu","aria-labelledby":"actionListToggle"},"\n",Array.isArray(o)?o.map(function(e,t){var a=e.name,r=e.icon;return l.a.createElement(n.Fragment,{key:t},l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},r?l.a.createElement(c.Icon,{type:r}):null,a),"\n")}):null)))};s.propTypes={id:o.a.string,classNames:o.a.string,items:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired,icon:o.a.string})).isRequired},t.default=s},396:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(471),i=a.n(c);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(e){var t=e.name,a=e.squaredFlag,n=e.preview,r=e.previewSize,o=e.size,c=e.className,m=e.type,u=c?c.split(" "):[],p=i.a.apply(void 0,[m,o?"".concat(m,"-").concat(o):"","material-icons"===m?"":"".concat(m,"-").concat(t),a?"flag-icon-squared":""].concat(s(u)));return n||r?l.a.createElement("div",{className:"icon-preview"},l.a.createElement("i",{className:p},p.includes("material-icons")?t:null),l.a.createElement("code",{className:"code-tags code-tags-secondary mt-2"},r?o:t)):l.a.createElement("i",{className:p},p.includes("material-icons")?t:null)};m.propTypes={name:o.a.string.isRequired,type:o.a.oneOf(["material-icons","payment-icon","flag-icon"]),squaredFlag:o.a.bool,preview:o.a.bool,size:o.a.oneOf(["tiny","small","medium","large","huge"]),className:o.a.string},t.default=m},439:function(e,t,a){"use strict";a.r(t),a.d(t,"MaterialIcons",function(){return g}),a.d(t,"PaymentIcons",function(){return E}),a.d(t,"Flags",function(){return v});var n=a(1),l=a.n(n),r=a(361),o=a(396),c=a(380),i=a(373);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=window.dg.actionList,y=[{name:"Add bookmark",icon:"bookmark"},{name:"Add client",icon:"business_center"},{name:"Add document",icon:"add_circle"},{name:"Add user",icon:"person_add"}],g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"material-icons"},"Material Icons"),l.a.createElement("p",{className:"lead"},"DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",l.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),l.a.createElement("p",null,"To use an icon, provide the following markup: ",l.a.createElement(i.default,{type:"primary",code:'<i class="material-icons">{icon_name}</i>'}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{preview:!0,type:"material-icons",name:"android"}),l.a.createElement(o.default,{preview:!0,type:"material-icons",name:"contact_support"}),l.a.createElement(o.default,{preview:!0,type:"material-icons",name:"face"}),l.a.createElement(o.default,{preview:!0,type:"material-icons",name:"star"}),l.a.createElement(o.default,{preview:!0,type:"material-icons",name:"warning"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"material-icons"},"android"),"\n",l.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",l.a.createElement("i",{className:"material-icons"},"face"),"\n",l.a.createElement("i",{className:"material-icons"},"star"),"\n",l.a.createElement("i",{className:"material-icons"},"warning")),l.a.createElement("h3",null,"Sizes"),l.a.createElement("p",null,"You can modify the size of the material icons by adding one of the size classes: ",l.a.createElement(i.default,{type:"secondary",code:"material-icons-tiny"}),", ",l.a.createElement(i.default,{type:"secondary",code:"material-icons-small"}),", ",l.a.createElement(i.default,{type:"secondary",code:"material-icons-medium"})," or ",l.a.createElement(i.default,{type:"secondary",code:"material-icons-large"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{previewSize:!0,type:"material-icons",name:"android",size:"tiny"}),l.a.createElement(o.default,{previewSize:!0,type:"material-icons",name:"android",size:"small"}),l.a.createElement(o.default,{previewSize:!0,type:"material-icons",name:"android",size:"medium"}),l.a.createElement(o.default,{previewSize:!0,type:"material-icons",name:"android",size:"large"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"material-icons material-icons-tiny"},"android"),"\n",l.a.createElement("i",{className:"material-icons material-icons-small"},"android"),"\n",l.a.createElement("i",{className:"material-icons material-icons-medium"},"android"),"\n",l.a.createElement("i",{className:"material-icons material-icons-large"},"android")))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"payment-icons"},"Payment Icons"),l.a.createElement("p",null,"To use an icon, provide the following markup: ",l.a.createElement(i.default,{type:"primary",code:'<i class="payment-icon payment-icon-{icon_name}"></i>'}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly mb-2"},l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"amex",size:"large"}),"\n",l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"diners",size:"large"}),"\n",l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"mastercard",size:"large"}),"\n",l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"visa",size:"large"})),l.a.createElement("div",{className:"row justify-content-evenly"},l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"mobilepay",size:"large"}),"\n",l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"paypal",size:"large"}),"\n",l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"swish",size:"large"}),"\n",l.a.createElement(o.default,{preview:!0,type:"payment-icon",name:"vipps",size:"large"}),"\n")),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(o.default,{type:"payment-icon",name:"amex"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"diners"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"mastercard"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"visa"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"mobilepay"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"paypal"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"swish"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"vipps"})),l.a.createElement("h3",null,"Sizes"),l.a.createElement("p",null,"Different sizes are available by adding ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-small"}),", ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-medium"}),", ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-large"})," and ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-huge"}),". If no size is provided ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-medium"})," is defaulted."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{type:"payment-icon",previewSize:!0,name:"visa",size:"small"}),"\n",l.a.createElement(o.default,{type:"payment-icon",previewSize:!0,name:"visa",size:"medium"}),"\n",l.a.createElement(o.default,{type:"payment-icon",previewSize:!0,name:"visa",size:"large"}),"\n",l.a.createElement(o.default,{type:"payment-icon",previewSize:!0,name:"visa",size:"huge"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(o.default,{type:"payment-icon",name:"visa",size:"small"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"visa",size:"medium"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"visa",size:"large"}),"\n",l.a.createElement(o.default,{type:"payment-icon",name:"visa",size:"huge"}),"\n"),l.a.createElement("h3",null,"Usage"),l.a.createElement("p",null,"Typical usage would be in for instance an ",l.a.createElement(i.default,{type:"secondary",code:".item-list"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list item-list-striped"},l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(o.default,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",l.a.createElement("span",null,"4925*********004"),"\n"),l.a.createElement(c.default,{items:y})),l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(o.default,{type:"payment-icon",name:"mastercard",className:"mr-2"}),"\n",l.a.createElement("span",null,"5792*********138"),"\n",l.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",l.a.createElement("a",{href:"https://payex.com"},"www.payex.com"),"\n"),l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(o.default,{type:"payment-icon",name:"amex",className:"mr-2"}),"\n",l.a.createElement("span",null,"3651*********701"),"\n"),l.a.createElement("i",{className:"material-icons"},"star"),"\n"),l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(o.default,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",l.a.createElement("span",null,"4925*********007"),"\n"),"\n",l.a.createElement("span",{className:"status status-success"},"Active"),"\n",l.a.createElement("button",{type:"button",className:"btn btn-destructive btn-xs ml-2"},l.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"flags"},"Flags"),l.a.createElement("p",null,"To use the flag icons add the classes ",l.a.createElement(i.default,{type:"secondary",code:".flag-icon"})," and ",l.a.createElement(i.default,{type:"secondary",code:".flag-icon-xx"})," (where xx is the ",l.a.createElement("a",{href:"https://www.iso.org/obp/ui/#search"},"ISO 3166-1-alpha-2 code")," of a country) to an empty ",l.a.createElement(i.default,{type:"primary",code:"<i>"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{preview:!0,type:"flag-icon",name:"se"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",name:"no"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",name:"dk"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",name:"fi"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",name:"eu"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-no"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-sv"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-dk"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-fi"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-eu"}),"\n"),l.a.createElement("h3",null,"Squared"),l.a.createElement("p",null,"To use a squared version of a flag add the class ",l.a.createElement(i.default,{type:"secondary",code:".flag-icon-squared"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"se"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"no"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"dk"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"fi"}),l.a.createElement(o.default,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"eu"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu"}),"\n"),l.a.createElement("h3",null,"Sizes"),l.a.createElement("p",null,"Flags support sizes ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-tiny"}),", ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-small"}),", ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-medium"}),", ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-large"})," and ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-huge"}),". If no size is provided ",l.a.createElement(i.default,{type:"secondary",code:".payment-icon-tiny"})," is defaulted."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",name:"se",size:"tiny"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",name:"no",size:"small"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",name:"dk",size:"medium"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",name:"fi",size:"large"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",name:"eu",size:"huge"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-no flag-icon-tiny"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-sv flag-icon-small"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-dk flag-icon-medium"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-fi flag-icon-large"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-eu flag-icon-huge"}),"\n"),l.a.createElement("h3",null,"Squared Sizes"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"se",size:"tiny"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"no",size:"small"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"dk",size:"medium"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"fi",size:"large"}),l.a.createElement(o.default,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"eu",size:"huge"}))),l.a.createElement(r.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no flag-icon-tiny"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv flag-icon-small"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk flag-icon-medium"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi flag-icon-large"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu flag-icon-huge"}),"\n"))},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,p(t).apply(this,arguments))}var a,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(o=[{key:"componentDidMount",value:function(){f.init()}},{key:"render",value:function(){return l.a.createElement(r.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"The Swedbank Pay DesignGuide includes a variety of icons. Mainly we use the material icons, but we also include icons for known payment providers, and flags for most nations in the world."),l.a.createElement(g,null),l.a.createElement(E,null),l.a.createElement(v,null))}}])&&m(a.prototype,o),c&&m(a,c),t}();t.default=h},469:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)};t.genericHashLink=g,t.HashLink=E,t.NavHashLink=v;var o=s(a(1)),c=s(a(14)),i=a(50);function s(e){return e&&e.__esModule?e:{default:e}}var m="",u=null,p=null,d=null;function f(){m="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function y(){var e=document.getElementById(m);return null!==e&&(d(e),f(),!0)}function g(e,t){e.scroll,e.smooth;var a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["scroll","smooth"]);return o.default.createElement(t,l({},a,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?m=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(m=e.to.hash.replace("#","")),""!==m&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===u&&(u=new MutationObserver(y)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return g(e,i.Link)}function v(e){return g(e,i.NavLink)}var h={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=h,v.propTypes=h},470:function(e,t){(function(t){e.exports=t}).call(this,{})},471:function(e,t,a){var n;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=l(a);if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var c=o.apply(null,a);c&&e.push(c)}else if("object"===n)for(var i in a)r.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===l(a(470))&&a(470)?void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_32.js.map?b178ad85587e6fe34ab5