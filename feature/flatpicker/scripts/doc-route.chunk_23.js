(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[23,3,46,47,48,49,51,52,53],{201:function(e,t,n){"use strict";n.r(t);var r=n(28),o=n.n(r),a=n(1),c=n.n(a),l=n(2),i=n.n(l),u=n(151),s=n(427);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=p(this,a.call.apply(a,[this].concat(r)))).history=Object(u.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);f.propTypes={basename:i.a.string,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var m=f;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(a){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=d(this,a.call.apply(a,[this].concat(r)))).history=Object(u.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.componentWillMount=function(){o()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);h.propTypes={basename:i.a.string,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"]),children:i.a.node};var y=h,b=n(94),v=n(153);function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(a){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=E(this,a.call.apply(a,[this].concat(r)))).history=Object(u.d)(t.props),E(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(v.a,{history:this.history,children:this.props.children})},l}(c.a.Component);g.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var w=g,k=n(428),O=n(19),P=n.n(O);var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){P()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);T.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},T.defaultProps={when:!0},T.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired};var j=T,x=n(443),R=n(152),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?C({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(u.e)(e)},M=function(e){return function(){P()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},q=function(a){function l(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o=N(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return S(o.props.basename+L(e))},o.handlePush=function(e){var t=o.props,n=t.basename,r=t.context;r.action="PUSH",r.location=_(n,Object(u.c)(e)),r.url=L(r.location)},o.handleReplace=function(e){var t=o.props,n=t.basename,r=t.context;r.action="REPLACE",r.location=_(n,Object(u.c)(e)),r.url=L(r.location)},o.handleListen=function(){return H},o.handleBlock=function(){return H},N(o,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:C({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(v.a,C({},r,{history:o}))},l}(c.a.Component);q.propTypes={basename:i.a.string,context:i.a.object.isRequired,location:i.a.oneOfType([i.a.string,i.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:i.a.object.isRequired};var A=q,B=n(430),W=n(444).a,D=n(80).a,I=n(429);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return j}),n.d(t,"Redirect",function(){return x.a}),n.d(t,"Route",function(){return R.a}),n.d(t,"Router",function(){return s.a}),n.d(t,"StaticRouter",function(){return A}),n.d(t,"Switch",function(){return B.a}),n.d(t,"generatePath",function(){return W}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return I.a})},431:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var r=n(1),o=n.n(r),a=n(2),l=n.n(a),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),r,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&r?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},r)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},432:function(e,t,n){"use strict";n.r(t);var r=n(431);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var o=n(434);n.d(t,"ComponentPreview",function(){return o.default});var a=n(440);n.d(t,"DocContainer",function(){return a.default});var l=n(441);n.d(t,"DocHeading",function(){return l.default});var c=n(435);n.d(t,"DocToc",function(){return c.default});var i=n(436);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(437);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(438);n.d(t,"Icon",function(){return s.default});var p=n(439);n.d(t,"PxScript",function(){return p.default})},433:function(e,t,n){"use strict";var r=n(1),c=n.n(r),o=n(2),a=n.n(o),l=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,a=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?c.a.createElement("i",{className:"material-icons alert-icon"},r):null,a?"\n":"",a?c.a.createElement("p",null,a):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=l},434:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),o=n(2),a=n.n(o),f=n(445),l=n(446),m=n.n(l),d=n(447);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var r=e.children,o=e.language,a=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&i)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&r&&"function"==typeof r.map)r.map(function(e){n+=a?u(e):c?s(e):Object(f.renderToStaticMarkup)(e)});else if("html"===o)n+=a?u(r):c?s(r):Object(f.renderToStaticMarkup)(r);else switch(y(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",h({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},a({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=c},435:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=n(442);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),r&&u(t,r),o}();m.propTypes={component:o.a.func.isRequired},t.default=m},436:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(433);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},437:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(433);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},438:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(a).a.string.isRequired},t.default=l},439:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(2),a=n.n(o),l=function(e){var t,n,r=e.component,o=e.subComponents,a=e.func,l=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,r),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},a),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=l},440:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),l=n.n(a),c=n(432),i=function(e){var t=e.docToc,n=e.children,r=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(r,null),t?o.a.createElement(c.DocToc,{component:r}):null))};i.propTypes={docToc:l.a.bool},t.default=i},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var a=i(n(1)),l=i(n(2)),c=n(201);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,f=null;function m(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(f(e),m(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,r({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=y.propTypes=v},478:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return l});var r=n(1),o=n.n(r),a=n(432),l=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"Like Bootstrap our breakpoints are ranged from ",o.a.createElement(a.Property,{value:"xs"})," to ",o.a.createElement(a.Property,{value:"xl"}),". In addition, we have added yet another breakpoint for even bigger screens called ",o.a.createElement(a.Property,{value:"xxl"}),"."),o.a.createElement("p",null,"Note that when targeting screensize ",o.a.createElement(a.Property,{value:"xs"}),", it is optional to append the infix to the classname."),o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Infix"),o.a.createElement("th",null,"Min-width"),o.a.createElement("th",null,"Example usage"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(a.Property,{value:"xs"})),o.a.createElement("td",null,o.a.createElement(a.Property,{value:"0px"})),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement(a.Property,{value:".col-8"}),", ",o.a.createElement(a.Property,{value:".d-block"})))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(a.Property,{value:"sm"})),o.a.createElement("td",null,o.a.createElement(a.Property,{value:"576px"})),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement(a.Property,{value:".col-sm-8"}),", ",o.a.createElement(a.Property,{value:".d-sm-block"})))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(a.Property,{value:"md"})),o.a.createElement("td",null,o.a.createElement(a.Property,{value:"768px"})),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement(a.Property,{value:".col-md-8"}),", ",o.a.createElement(a.Property,{value:".d-md-block"})))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(a.Property,{value:"lg"})),o.a.createElement("td",null,o.a.createElement(a.Property,{value:"992px"})),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement(a.Property,{value:".col-lg-8"}),", ",o.a.createElement(a.Property,{value:".d-lg-block"})))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(a.Property,{value:"xl"})),o.a.createElement("td",null,o.a.createElement(a.Property,{value:"1200px"})),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement(a.Property,{value:".col-xl-8"}),", ",o.a.createElement(a.Property,{value:".d-xl-block"})))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(a.Property,{value:"xxl"})),o.a.createElement("td",null,o.a.createElement(a.Property,{value:"1600px"})),o.a.createElement("td",null,o.a.createElement("p",null,o.a.createElement(a.Property,{value:".col-xxl-8"}),", ",o.a.createElement(a.Property,{value:".d-xxl-block"})))))))};t.default=function(){return o.a.createElement(a.DocContainer,null,o.a.createElement("p",{className:"lead"},"Our breakpoints is based on ",o.a.createElement("a",{href:"http://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints"},"Bootstrap","'","s breakpoints"),", but has some modifications."),o.a.createElement(l,null))}}}]);
//# sourceMappingURL=doc-route.chunk_23.js.map?31039f3300747509ac0b