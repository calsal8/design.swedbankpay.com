(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[20,2,45,46,47,48,50,51,52],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var o=n(1),a=n.n(o),r=n(72),i=n.n(r),l=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),o,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&o?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},o)):void 0};c.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},l.propTypes={value:i.a.string.isRequired},t.default=c},389:function(e,t,n){"use strict";var o=n(1),l=n.n(o),a=n(72),r=n.n(a),i=function(e){var t=e.id,n=e.type,o=e.icon,a=e.close,r=e.text,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?l.a.createElement("i",{className:"material-icons alert-icon"},o):null,r?"\n":"",r?l.a.createElement("p",null,r):null,i?"\n":"",i?l.a.createElement("div",{className:"alert-body"},i):null,a?"\n":"",a?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=i},390:function(e,t,n){"use strict";n.r(t);var o=n(1),p=n.n(o),a=n(72),r=n.n(a),f=n(400),i=n(401),m=n.n(i),d=n(402);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){var o=e.children,a=e.language,r=e.removeOuterTag,i=e.hideValue,l=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},o)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===a&&c)t="","function"==typeof(e=o).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===a&&o&&"function"==typeof o.map)o.map(function(e){n+=r?u(e):l?s(e):Object(f.renderToStaticMarkup)(e)});else if("html"===a)n+=r?u(o):l?s(o):Object(f.renderToStaticMarkup)(o);else switch(h(o)){case"string":n=o;break;case"object":o.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(a){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),i&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,y({},d.b,{theme:void 0,code:n,language:a}),function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,r=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return p.a.createElement("div",y({key:e+t},a({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",y({key:t},r({token:e,key:t})))}))}))}))},null):null)};l.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},t.default=l},391:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(72),a=n.n(o),l=n(399);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function a(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=s(this,p(a).call(this,e))).state={headings:(n=t.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)o.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)o.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&o.push({title:e.props.children,id:e.props.id})}),o),windowTopPosition:window.pageYOffset},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,r["Component"]),t=a,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return i.a.createElement("div",{className:"col-2 d-none d-lg-block"},i.a.createElement("div",{className:"doc-toc"},i.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=o.state.windowTopPosition>=e.top&&o.state.windowTopPosition<o.state.headings[t+1].top;return i.a.createElement("li",{key:t,className:n?"active":""},i.a.createElement(l.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:o.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),o&&u(t,o),a}();m.propTypes={component:a.a.func.isRequired},t.default=m},392:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(389);t.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},393:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(389);t.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},394:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(72),i=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(r).a.string.isRequired},t.default=i},395:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),a=n(72),r=n.n(a),i=function(e){var t,n,o=e.component,a=e.subComponents,r=e.func,i=e.params;return a&&(n=a.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return l.a.createElement("span",{key:t},e,t<i.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,o),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},r),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=i},396:function(e,t,n){"use strict";n.r(t);var o=n(388);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var a=n(390);n.d(t,"ComponentPreview",function(){return a.default});var r=n(397);n.d(t,"DocContainer",function(){return r.default});var i=n(398);n.d(t,"DocHeading",function(){return i.default});var l=n(391);n.d(t,"DocToc",function(){return l.default});var c=n(392);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(393);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(394);n.d(t,"Icon",function(){return s.default});var p=n(395);n.d(t,"PxScript",function(){return p.default})},397:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(72),i=n.n(r),l=n(396),c=function(e){var t=e.docToc,n=e.children,o=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(o,null),t?a.a.createElement(l.DocToc,{component:o}):null))};c.propTypes={docToc:i.a.bool},t.default=c},399:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=y,t.HashLink=h,t.NavHashLink=b;var r=c(n(1)),i=c(n(72)),l=n(106);function c(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,f=null;function m(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(f(e),m(),!0)}function y(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["scroll","smooth"]);return r.default.createElement(e,o({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===a(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function h(e){return y(e,l.Link)}function b(e){return y(e,l.NavLink)}var v={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=h.propTypes=v},432:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return f});var r=n(1),i=n.n(r),l=n(396);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"overview"},"Overview"),i.a.createElement("p",null,"Add the attribute ",i.a.createElement(l.Attribute,{data:!0,name:"tooltip"})," to the desired element and add your content in its value to create a tooltip."),i.a.createElement("p",null,"You can use the attribute ",i.a.createElement(l.Attribute,{data:!0,name:"tooltip-position"})," to position the tooltip relative to the containing element, use the values ",i.a.createElement(l.Attribute,{value:"top"}),", ",i.a.createElement(l.Attribute,{value:"right"}),", ",i.a.createElement(l.Attribute,{value:"bottom"})," or ",i.a.createElement(l.Attribute,{value:"left"}),". If the attribute is not provided, it will default to top."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},i.a.createElement("div",{className:"button-group"},"\n",i.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"left"},"Tooltip to the left"),"\n",i.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"top"},"Tooltip on top"),"\n",i.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"bottom"},"Tooltip to the bottom"),"\n",i.a.createElement("button",{className:"btn btn-primary",type:"button","data-tooltip":"This is a tooltip!","data-tooltip-position":"right"},"Tooltip to the right"),"\n")))},a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return i.a.createElement(l.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"Tooltips are small, interactive, textual hints for mainly graphical elements. When using icons for actions you can use a tooltip to give people clarification on its function."),i.a.createElement(f,null))}}])&&c(n.prototype,o),a&&c(n,a),t}();t.default=a}}]);
//# sourceMappingURL=doc-route.chunk_21.js.map?fe83f8bddffd7458f6d8