(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[18,2,47,48,49,51,52,53,54],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},345:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(15),o=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},346:function(e,t,n){"use strict";n.r(t);var a=n(0),p=n.n(a),r=n(15),o=n.n(r),m=n(356),c=n(357),f=n.n(c),d=n(358);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,c=e.hideValue,l=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?u(e):l?s(e):Object(m.renderToStaticMarkup)(e)});else if("html"===r)n+=o?u(a):l?s(a):Object(m.renderToStaticMarkup)(a);else switch(v(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};l.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=l},347:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(15),r=n.n(a),l=n(355);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,o["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"col-2 d-none d-lg-block"},c.a.createElement("div",{className:"doc-toc"},c.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return c.a.createElement("li",{key:t,className:n?"active":""},c.a.createElement(l.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),a&&u(t,a),r}();f.propTypes={component:r.a.func.isRequired},t.default=f},348:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(345);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},349:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(345);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},351:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},352:function(e,t,n){"use strict";n.r(t);var a=n(344);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(346);n.d(t,"ComponentPreview",function(){return r.default});var o=n(353);n.d(t,"DocContainer",function(){return o.default});var c=n(354);n.d(t,"DocHeading",function(){return c.default});var l=n(347);n.d(t,"DocToc",function(){return l.default});var i=n(348);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(349);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(350);n.d(t,"Icon",function(){return s.default});var p=n(351);n.d(t,"PxScript",function(){return p.default})},353:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(352),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(l.DocToc,{component:a}):null))};i.propTypes={docToc:c.a.bool},t.default=i},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=v,t.NavHashLink=y;var o=i(n(0)),c=i(n(15)),l=n(56);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function f(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,a({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function v(e){return h(e,l.Link)}function y(e){return h(e,l.NavLink)}var E={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};y.propTypes=v.propTypes=E},375:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return f}),n.d(t,"Anchorpoints",function(){return d});var o=n(0),c=n.n(o),l=n(352),i=n(35);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"overview"},"Overview"),c.a.createElement("p",null,"Action lists."),c.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"action-list"},"\n",c.a.createElement(l.Icon,{icon:"more_vert"}),"\n",c.a.createElement("div",{className:"action-menu"},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"anchorpoints"},"Anchorpoints"),c.a.createElement("p",null,"You can change where the action list will have its anchor, by default the anchor will be top right."),c.a.createElement("h3",null,"Top left"),c.a.createElement("p",null,"Use class ",c.a.createElement("code",{className:"token property"},".anchor-top-left")," to anchor action-list button to the top left corner of the menu."),c.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"action-list anchor-top-left"},"\n",c.a.createElement(l.Icon,{icon:"more_vert"}),"\n",c.a.createElement("div",{className:"action-menu"},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))),c.a.createElement("h3",null,"Bottom right"),c.a.createElement("p",null,"Use class ",c.a.createElement("code",{className:"token property"},".anchor-bottom-right")," to anchor action-list button to the bottom right corner of the menu."),c.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"action-list anchor-bottom-right"},"\n",c.a.createElement(l.Icon,{icon:"more_vert"}),"\n",c.a.createElement("div",{className:"action-menu"},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))),c.a.createElement("h3",null,"Bottom left"),c.a.createElement("p",null,"Use class ",c.a.createElement("code",{className:"token property"},".anchor-bottom-left")," to anchor action-list button to the bottom left corner of the menu."),c.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement("div",{className:"action-list anchor-bottom-left"},"\n",c.a.createElement(l.Icon,{icon:"more_vert"}),"\n",c.a.createElement("div",{className:"action-menu"},"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"business_center"}),"Add client"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"add_circle"}),"Add document"),"\n",c.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},c.a.createElement(l.Icon,{icon:"person_add"}),"Add user"),"\n"))))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){i.a.init()}},{key:"render",value:function(){return c.a.createElement(l.DocContainer,{docToc:!0},c.a.createElement("p",{className:"lead"},"Action lists are small menus that remain hidden until clicked. In these you can put page links or anchors that trigger an action elsewhere."),c.a.createElement(f,null),c.a.createElement(d,null))}}])&&u(n.prototype,a),r&&u(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_2.js.map?75ce481dba08a5210eef