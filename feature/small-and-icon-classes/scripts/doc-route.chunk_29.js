(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[29,3,46,47,48,49,51,52,53],{167:function(e,t,n){"use strict";n.r(t);var r=n(23),o=n.n(r),a=n(1),c=n.n(a),l=n(2),i=n.n(l),u=n(117),s=n(395);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=p(this,a.call.apply(a,[this].concat(r)))).history=Object(u.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.componentWillMount=function(){o()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);f.propTypes={basename:i.a.string,forceRefresh:i.a.bool,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var m=f;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(a){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=d(this,a.call.apply(a,[this].concat(r)))).history=Object(u.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.componentWillMount=function(){o()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},l}(c.a.Component);h.propTypes={basename:i.a.string,getUserConfirmation:i.a.func,hashType:i.a.oneOf(["hashbang","noslash","slash"]),children:i.a.node};var y=h,b=n(81),E=n(119);function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(a){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t=v(this,a.call.apply(a,[this].concat(r)))).history=Object(u.d)(t.props),v(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.componentWillMount=function(){o()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return c.a.createElement(E.a,{history:this.history,children:this.props.children})},l}(c.a.Component);g.propTypes={initialEntries:i.a.array,initialIndex:i.a.number,getUserConfirmation:i.a.func,keyLength:i.a.number,children:i.a.node};var w=g,k=n(396),O=n(16),T=n.n(O);var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);P.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},P.defaultProps={when:!0},P.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired};var C=P,j=n(411),R=n(118),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=function(e){return"/"===e.charAt(0)?e:"/"+e},L=function(e,t){return e?N({},t,{pathname:_(e)+t.pathname}):t},x=function(e){return"string"==typeof e?e:Object(u.e)(e)},H=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},M=function(){},F=function(a){function l(){var e,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o=S(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return _(o.props.basename+x(e))},o.handlePush=function(e){var t=o.props,n=t.basename,r=t.context;r.action="PUSH",r.location=L(n,Object(u.c)(e)),r.url=x(r.location)},o.handleReplace=function(e){var t=o.props,n=t.basename,r=t.context;r.action="REPLACE",r.location=L(n,Object(u.c)(e)),r.url=x(r.location)},o.handleListen=function(){return M},o.handleBlock=function(){return M},S(o,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){o()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),o={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=_(e);return 0!==t.pathname.indexOf(n)?t:N({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:H("go"),goBack:H("goBack"),goForward:H("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(E.a,N({},r,{history:o}))},l}(c.a.Component);F.propTypes={basename:i.a.string,context:i.a.object.isRequired,location:i.a.oneOfType([i.a.string,i.a.object])},F.defaultProps={basename:"",location:"/"},F.childContextTypes={router:i.a.object.isRequired};var q=F,D=n(398),B=n(412).a,A=n(66).a,W=n(397);n.d(t,"BrowserRouter",function(){return m}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return k.a}),n.d(t,"Prompt",function(){return C}),n.d(t,"Redirect",function(){return j.a}),n.d(t,"Route",function(){return R.a}),n.d(t,"Router",function(){return s.a}),n.d(t,"StaticRouter",function(){return q}),n.d(t,"Switch",function(){return D.a}),n.d(t,"generatePath",function(){return B}),n.d(t,"matchPath",function(){return A}),n.d(t,"withRouter",function(){return W.a})},399:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var r=n(1),o=n.n(r),a=n(2),l=n.n(a),c=function(e){var t=e.value;return o.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n),o.a.createElement("span",{className:"token attr-value"},o.a.createElement("span",{className:"token punctuation"},'="'),r,o.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?o.a.createElement("code",null,t?o.a.createElement("span",{className:"token attr-name"},"data-"):null,o.a.createElement("span",{className:"token attr-name"},n)):!n&&r?o.a.createElement("code",null,o.a.createElement("span",{className:"token attr-value"},r)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},400:function(e,t,n){"use strict";n.r(t);var r=n(399);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var o=n(402);n.d(t,"ComponentPreview",function(){return o.default});var a=n(408);n.d(t,"DocContainer",function(){return a.default});var l=n(409);n.d(t,"DocHeading",function(){return l.default});var c=n(403);n.d(t,"DocToc",function(){return c.default});var i=n(404);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(405);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(406);n.d(t,"Icon",function(){return s.default});var p=n(407);n.d(t,"PxScript",function(){return p.default})},401:function(e,t,n){"use strict";var r=n(1),c=n.n(r),o=n(2),a=n.n(o),l=function(e){var t=e.id,n=e.type,r=e.icon,o=e.close,a=e.text,l=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?c.a.createElement("i",{className:"material-icons alert-icon"},r):null,a?"\n":"",a?c.a.createElement("p",null,a):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,o?"\n":"",o?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=l},402:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),o=n(2),a=n.n(o),f=n(413),l=n(414),m=n.n(l),d=n(415);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var r=e.children,o=e.language,a=e.removeOuterTag,l=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===o&&i)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===o&&r&&"function"==typeof r.map)r.map(function(e){n+=a?u(e):c?s(e):Object(f.renderToStaticMarkup)(e)});else if("html"===o)n+=a?u(r):c?s(r):Object(f.renderToStaticMarkup)(r);else switch(y(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(o){case"html":n=(n=m.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=m.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:o}),function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",h({key:e+t},o({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},a({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=c},403:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=n(410);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=s(this,p(o).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(o,a["Component"]),t=o,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),r&&u(t,r),o}();m.propTypes={component:o.a.func.isRequired},t.default=m},404:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(401);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),o.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},405:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(401);t.default=function(){return o.a.createElement(a.a,{type:"danger"},o.a.createElement("h3",{className:"color-danger"},"Component under development!"),o.a.createElement("p",null,"This component is still under development and is subject to change."))}},406:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),l=function(e){var t=e.icon;return o.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(a).a.string.isRequired},t.default=l},407:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(2),a=n.n(o),l=function(e){var t,n,r=e.component,o=e.subComponents,a=e.func,l=e.params;return o&&(n=o.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return c.a.createElement("span",{key:t},e,t<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,r),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},a),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=l},408:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(2),l=n.n(a),c=n(400),i=function(e){var t=e.docToc,n=e.children,r=function(){return o.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(r,null),t?o.a.createElement(c.DocToc,{component:r}):null))};i.propTypes={docToc:l.a.bool},t.default=i},410:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var a=i(n(1)),l=i(n(2)),c=n(167);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,f=null;function m(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(f(e),m(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,r({},n,{onClick:function(e){m(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===o(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){m()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};b.propTypes=y.propTypes=E},450:function(e,t,n){"use strict";n.r(t),n.d(t,"DocTable",function(){return i}),n.d(t,"BasicTable",function(){return u}),n.d(t,"StripedTable",function(){return s}),n.d(t,"CondensedTable",function(){return p}),n.d(t,"HoverTable",function(){return f}),n.d(t,"HoverStripedTable",function(){return m}),n.d(t,"DescriptionTable",function(){return d});var r=n(1),a=n.n(r),o=n(120),l=n.n(o),c=n(400),i=function(e){var t=e.striped,n=e.condensed,r=e.hover,o=l()("table",t?"table-striped":null,n?"table-condensed":null,r?"table-hover":null);return a.a.createElement("table",{className:o},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"#"),a.a.createElement("th",{scope:"col"},"First Name"),a.a.createElement("th",{scope:"col"},"Last Name"),a.a.createElement("th",{scope:"col"},"Location"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"1"),a.a.createElement("td",null,"Sven"),a.a.createElement("td",null,"Svensson"),a.a.createElement("td",null,"Visby")),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"2"),a.a.createElement("td",null,"Sara"),a.a.createElement("td",null,"Svensson"),a.a.createElement("td",null,"Stockholm")),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"3"),a.a.createElement("td",null,"Ola"),a.a.createElement("td",null,"Nordmann"),a.a.createElement("td",null,"Oslo")),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"4"),a.a.createElement("td",null,"Holger"),a.a.createElement("td",null,"Danske"),a.a.createElement("td",null,"Copenhagen")),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"5"),a.a.createElement("td",null,"Matti"),a.a.createElement("td",null,"Meikäläinen"),a.a.createElement("td",null,"Lahti"))))},u=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"basic-table"},"Basic table"),a.a.createElement("p",null,"Basic tables info..."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(i,null)))},s=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"striped-table"},"Striped table"),a.a.createElement("p",null,"Striped tables info..."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(i,{striped:!0})))},p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"condensed-table"},"Condensed table"),a.a.createElement("p",null,"Condensed table info..."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(i,{condensed:!0})))},f=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"hover-table"},"Hover table"),a.a.createElement("p",null,"Hover tables info..."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(i,{hover:!0})))},m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"hover-striped-table"},"Hover striped table"),a.a.createElement("p",null,"Hover striped tables info..."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement(i,{hover:!0,striped:!0})))},d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"description-table"},"Description table"),a.a.createElement("p",null,"Description tables info..."),a.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},a.a.createElement("table",{className:"table table-description table-striped"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"Key"),a.a.createElement("th",{scope:"col"},"Value"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Name"),a.a.createElement("td",null,"John Doe")),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Occupation"),a.a.createElement("td",null,"Unknown")),a.a.createElement("tr",null,a.a.createElement("th",{scope:"row"},"Skills"),a.a.createElement("td",null,"Unknown"))))))};t.default=function(){return a.a.createElement(c.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"Lots of nice info about tables will be here..."),a.a.createElement(u,null),a.a.createElement(s,null),a.a.createElement(p,null),a.a.createElement(f,null),a.a.createElement(m,null),a.a.createElement(d,null))}}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?a8f559284d93e83819e6