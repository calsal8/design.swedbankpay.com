(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[45,2,53,54,55,56,57,58],{359:function(e,t,n){"use strict";n.r(t);var a=n(360);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(362);n.d(t,"ComponentPreview",function(){return l.default});var r=n(367);n.d(t,"DocContainer",function(){return r.default});var o=n(363);n.d(t,"DocHeading",function(){return o.default});var c=n(364);n.d(t,"DocToc",function(){return c.default});var i=n(368);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(369);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(365);n.d(t,"Icon",function(){return s.default});var m=n(370);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(366);n.d(t,"PxScript",function(){return p.default})},360:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),l=n.n(a),r=n(65),o=n.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},361:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(1),l=n.n(a),r=n(65),o=n.n(r),c=n(359),i=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},u=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.headerText,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},l.a.createElement("header",{className:"alert-header"},a?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement(c.Icon,{classNames:"alert-icon",icon:a})):null,o?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("h3",null,o),"\n"):null,r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement(c.Icon,{icon:"close"}),"\n\t"):null,"\n"),i?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.b=i},362:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(65),o=n.n(r),c=n(372),i=n(373),u=n.n(i),s=n(375);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,E=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},v=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?l.a.createElement(function(){var e="";if("html"===n&&E)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):o?v(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):o?v(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",l.a.createElement("figure",null,l.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},363:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(66);t.default=Object(r.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),l.a.createElement("h2",{className:"h1"},t)})},364:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(65),o=n.n(r),c=n(371);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:a?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),o&&u(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},365:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(65),o=function(e){var t=e.icon,n=e.classNames;return l.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};o.propTypes={icon:n.n(r).a.string.isRequired},t.default=o},366:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(65),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},367:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(65),o=n.n(r),c=n(359),i=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement(c.DocHeading,null),l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},368:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(361);t.default=function(){return l.a.createElement(r.b,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(361);t.default=function(){return l.a.createElement(r.b,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),l=n.n(a),r=n(96),o=n(359),c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:t,func:"init"})),l.a.createElement("p",null,l.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?l.a.createElement(c,{componentName:t}):null,a?l.a.createElement(i,{componentName:t}):null)}},371:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=v,t.NavHashLink=h;var o=u(n(1)),c=u(n(65)),i=n(96);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,d=null;function f(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function E(){var e=document.getElementById(s);return null!==e&&(d(e),f(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,l({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===E()&&(null===m&&(m=new MutationObserver(E)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return y(e,i.Link)}function h(e){return y(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};v.propTypes=b,h.propTypes=b},428:function(e,t,n){"use strict";n.r(t),n.d(t,"HowItWorks",function(){return c}),n.d(t,"Notation",function(){return i}),n.d(t,"Examples",function(){return u}),n.d(t,"HidingElements",function(){return s});var a=n(1),l=n.n(a),r=n(96),o=n(359),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"how-it-works"},"How it works"),l.a.createElement("p",null,"Change the value of the ",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display"},"display property")," with our responsive display utility classes. We purposely support only a subset of all possible values for ",l.a.createElement(o.Property,{value:"display"}),". Classes can be combined for various effects as you need."))},i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"notation"},"Notation"),l.a.createElement("p",null,"Display utility classes that apply to all ",l.a.createElement(r.Link,{to:"/docs/core/breakpoints"},"breakpoints"),", from ",l.a.createElement(o.Property,{value:"xs"})," to ",l.a.createElement(o.Property,{value:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",l.a.createElement(o.Property,{value:"min-width: 0;"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."),l.a.createElement("p",null,"As such, the classes are named using the format:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.Property,{value:".d-{value}"})," for ",l.a.createElement(o.Property,{value:"xs"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:".d-{breakpoint}-{value}"})," for ",l.a.createElement(o.Property,{value:"sm"}),", ",l.a.createElement(o.Property,{value:"md"}),", ",l.a.createElement(o.Property,{value:"lg"}),", ",l.a.createElement(o.Property,{value:"xl"})," and ",l.a.createElement(o.Property,{value:"xxl"}),".")),l.a.createElement("p",null,"Where ",l.a.createElement("i",null,"value")," is one of:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.Property,{value:"none"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"inline"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"inline-block"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"block"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"table"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"table-cell"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"table-row"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"flex"})),l.a.createElement("li",null,l.a.createElement(o.Property,{value:"inline-flex"}))),l.a.createElement("p",null,"The media queries effect screen widths with the given breakpoint ",l.a.createElement("i",null,"or larger"),". For example, ",l.a.createElement(o.Property,{value:".d-xl-none"})," sets ",l.a.createElement(o.Property,{value:"display: none;"})," on both ",l.a.createElement(o.Property,{value:"xl"})," and ",l.a.createElement(o.Property,{value:"xxl"})," screens."))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"examples"},"Examples"),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"d-inline p-2 bg-brand"},"d-inline"),l.a.createElement("div",{className:"d-inline p-2 bg-default"},"d-inline")),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"d-block p-2 bg-brand"},"d-block"),l.a.createElement("div",{className:"d-block p-2 bg-default"},"d-block")))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"hiding-elements"},"Hiding elements"),l.a.createElement("p",null,"For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size."),l.a.createElement("p",null,"To hide elements simply use the ",l.a.createElement(o.Property,{value:".d-none"})," class or one of the ",l.a.createElement(o.Property,{value:".d-{sm,md,lg,xl}-none"})," classes for any responsive screen variation."),l.a.createElement("p",null,"To show an element only on a given interval of screen sizes you can combine one ",l.a.createElement(o.Property,{value:".d-*-none"})," class with a ",l.a.createElement(o.Property,{value:".d-*-*"})," class, for example ",l.a.createElement(o.Property,{value:".d-none .d-md-block .d-xl-none"})," will hide the element for all screen sizes except on medium and large devices."),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Screen Size"),l.a.createElement("th",null,"Class"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden on all"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on xs"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-none .d-sm-block"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on sm"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-sm-none .d-md-block"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on md"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-md-none .d-lg-block"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on lg"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-lg-none .d-xl-block"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on xl"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-xl-none .d-xxl-block"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Hidden only on xxl"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-xxl-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible on all"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-block"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on xs"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-block .d-sm-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on sm"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-sm-block .d-md-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on md"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-md-block .d-lg-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on lg"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-lg-block .d-xl-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on xl"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-xl-block .d-xxl-none"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Visible only on xxl"),l.a.createElement("td",null,l.a.createElement(o.Property,{value:".d-xxl-block"}))))),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"d-lg-none"},"Hidden on screens wider than lg"),l.a.createElement("div",{className:"d-none d-lg-block"},"Hidden on screens smaller than lg")))};t.default=function(){return l.a.createElement(o.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing."),l.a.createElement(c,null),l.a.createElement(i,null),l.a.createElement(u,null),l.a.createElement(s,null))}}}]);
//# sourceMappingURL=doc-route.chunk_43.js.map?6de07e4f618250cec4b0