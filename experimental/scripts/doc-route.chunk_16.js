(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,2,47,48,49,51,52,53,54],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(0),r=n.n(a),o=n(15),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},345:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(15),o=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?c.a.createElement("p",null,o):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},346:function(e,t,n){"use strict";n.r(t);var a=n(0),p=n.n(a),r=n(15),o=n.n(r),m=n(356),l=n(357),f=n.n(l),d=n(358);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?u(e):c?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?u(a):c?s(a):Object(m.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=c},347:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),a=n(15),r=n.n(a),c=n(355);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},348:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(345);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},349:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(345);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},351:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,l=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},o),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},352:function(e,t,n){"use strict";n.r(t);var a=n(344);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(346);n.d(t,"ComponentPreview",function(){return r.default});var o=n(353);n.d(t,"DocContainer",function(){return o.default});var l=n(354);n.d(t,"DocHeading",function(){return l.default});var c=n(347);n.d(t,"DocToc",function(){return c.default});var i=n(348);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(349);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(350);n.d(t,"Icon",function(){return s.default});var p=n(351);n.d(t,"PxScript",function(){return p.default})},353:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n.n(o),c=n(352),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var o=i(n(0)),l=i(n(15)),c=n(56);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function f(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=y.propTypes=v},359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(360);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),o=n(0),c=(a=o)&&a.__esModule?a:{default:a},l=n(15);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function l(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n=i(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(r))))._handleRefMount=function(e){n._domNode=e},i(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o.PureComponent),r(l,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),l}();u.propTypes={async:l.PropTypes.bool,className:l.PropTypes.string,children:l.PropTypes.any,component:l.PropTypes.node},u.defaultProps={component:"code"},t.default=u},421:function(e,t,n){"use strict";n.r(t);var o=n(0),f=n.n(o),a=n(359),r=n.n(a),l=n(352),c=n(15),i=n.n(c),u=n(63),d=n.n(u),s=function(e){var t=e.title,n=e.subTitle,a=e.id,r=e.type,o=e.removeBottomPadding,l=e.removeAllPadding,c=e.halfPadding,i=e.darkMode,u=e.bodyContent,s=e.panelTable,p=e.footerText,m=d()("panel",r?"panel-".concat(r):"panel-default",o?"panel-bottomless":null,l?"panel-no-padding":null,c?"panel-half-padding":null,i?"panel-dark":null);return f.a.createElement("section",{className:m,id:a},t?f.a.createElement("header",null,f.a.createElement("h2",{className:"panel-title"},t),n?f.a.createElement("p",{className:"panel-sub-title"},n):null):null,u?f.a.createElement("div",{className:"panel-body"},u.map(function(e,t){return f.a.createElement("p",{key:t},e)})):null,s?f.a.createElement("div",{className:"panel-table"},s()):null,p?f.a.createElement("footer",null,f.a.createElement("p",null,p)):null)};s.propTypes={title:i.a.string,subTitle:i.a.string,id:i.a.string,type:i.a.oneOf(["brand","default","muted",""]),halfPadding:i.a.bool,removeAllPadding:i.a.bool,removeBottomPadding:i.a.bool,darkMode:i.a.bool,bodyContent:i.a.array,footerText:i.a.string};var p=s;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return w}),n.d(t,"PanelHeaders",function(){return P}),n.d(t,"PanelDark",function(){return T}),n.d(t,"PanelMuted",function(){return k}),n.d(t,"PanelTable",function(){return O}),n.d(t,"TableContent",function(){return g});var E=["Your main panel content is put here.","Some more content over here.","And one more line, just to be safe."],g=function(){return f.a.createElement("table",{className:"table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"col"},"#"),f.a.createElement("th",{scope:"col"},"First Name"),f.a.createElement("th",{scope:"col"},"Last Name"),f.a.createElement("th",{scope:"col"},"Location"))),f.a.createElement("tbody",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"1"),f.a.createElement("td",null,"Sven"),f.a.createElement("td",null,"Svensson"),f.a.createElement("td",null,"Visby")),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"2"),f.a.createElement("td",null,"Sara"),f.a.createElement("td",null,"Svensson"),f.a.createElement("td",null,"Stockholm")),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"3"),f.a.createElement("td",null,"Ola"),f.a.createElement("td",null,"Nordmann"),f.a.createElement("td",null,"Oslo")),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"4"),f.a.createElement("td",null,"Holger"),f.a.createElement("td",null,"Danske"),f.a.createElement("td",null,"Copenhagen")),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"5"),f.a.createElement("td",null,"Matti"),f.a.createElement("td",null,"Meikäläinen"),f.a.createElement("td",null,"Lahti"))))},w=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{id:"overview"},"Overview"),f.a.createElement("p",null,"A panel consists of three parts: A header, a body and a footer. You can mostly put whatever you want in any of these, but try not to put too much in the header and footer as these are meant to contain short and concise information about the body content."),f.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},f.a.createElement(p,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",bodyContent:E})))},P=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{id:"panel-headers"},"Panel headers"),f.a.createElement("p",null,"You can pick between two different panel headers, brand color with white text and white with green text. add ",f.a.createElement(l.Property,{value:".panel-default"})," or ",f.a.createElement(l.Property,{value:".panel-brand"})," to the header to use one of them."),f.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},f.a.createElement(p,{title:"Default panel"}),"\n\n",f.a.createElement(p,{type:"brand",title:"Panel brand"})))},T=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{id:"panel-dark-mode"},"Panel dark mode"),f.a.createElement("p",null,"Dark body with ",f.a.createElement(l.Property,{value:".panel-dark"}),"..."),f.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},f.a.createElement(p,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:E,footerText:"Footer content goes here.",footerBtnText:"Footer button",darkMode:!0})))},k=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{id:"muted-panel"},"Muted panel"),f.a.createElement("p",null,"If you wish to use a completely gray panel you can add ",f.a.createElement(l.Property,{value:".panel-muted"})," to the panel ",f.a.createElement(r.a,{className:"language-html"},"<section>"),"."),f.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},f.a.createElement(p,{type:"muted",title:"Panel title",subTitle:"Panel subtitle",bodyContent:E,footerText:"Footer content goes here.",footerBtnText:"Footer button"})))},O=function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",{id:"panel-with-table"},"Displaying a full width table"),f.a.createElement("p",null,"To display a full width table in a panel use ",f.a.createElement(l.Property,{value:".panel-table"})," on a div wrapping the table. Put ",f.a.createElement(l.Property,{value:".panel-table"})," as a direct child of ",f.a.createElement(l.Property,{value:".panel"}),". Tables put in a panel are given a border bottom to seperate it from the following elements."),f.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},f.a.createElement(p,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:E,footerText:"Footer content goes here.",footerBtnText:"Footer button",panelTable:g})))},N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){return f.a.createElement(l.DocContainer,{docToc:!0},f.a.createElement("p",{className:"lead"},"Panels are large containers meant to be able to contain all of our other components."),f.a.createElement(w,null),f.a.createElement(P,null),f.a.createElement(T,null),f.a.createElement(k,null),f.a.createElement(O,null))}}])&&h(n.prototype,a),r&&h(n,r),t}();t.default=N}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?75ce481dba08a5210eef