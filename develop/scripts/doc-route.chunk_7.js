(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[55,3,46,47,48,49,51,52,53],{201:function(e,t,n){"use strict";n.r(t);var o=n(28),r=n.n(o),a=n(1),c=n.n(a),i=n(2),l=n.n(i),u=n(151),s=n(427);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=p(this,a.call.apply(a,[this].concat(o)))).history=Object(u.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},i}(c.a.Component);f.propTypes={basename:l.a.string,forceRefresh:l.a.bool,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var d=f;function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=m(this,a.call.apply(a,[this].concat(o)))).history=Object(u.b)(t.props),m(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(s.a,{history:this.history,children:this.props.children})},i}(c.a.Component);h.propTypes={basename:l.a.string,getUserConfirmation:l.a.func,hashType:l.a.oneOf(["hashbang","noslash","slash"]),children:l.a.node};var y=h,b=n(94),v=n(153);function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E=function(a){function i(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t=g(this,a.call.apply(a,[this].concat(o)))).history=Object(u.d)(t.props),g(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},i.prototype.render=function(){return c.a.createElement(v.a,{history:this.history,children:this.props.children})},i}(c.a.Component);E.propTypes={initialEntries:l.a.array,initialIndex:l.a.number,getUserConfirmation:l.a.func,keyLength:l.a.number,children:l.a.node};var w=E,O=n(428),k=n(19),T=n.n(k);var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){T()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(c.a.Component);j.propTypes={when:l.a.bool,message:l.a.oneOfType([l.a.func,l.a.string]).isRequired},j.defaultProps={when:!0},j.contextTypes={router:l.a.shape({history:l.a.shape({block:l.a.func.isRequired}).isRequired}).isRequired};var P=j,C=n(443),R=n(152),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=function(e){return"/"===e.charAt(0)?e:"/"+e},S=function(e,t){return e?N({},t,{pathname:_(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(u.e)(e)},M=function(e){return function(){T()(!1,"You cannot %s with <StaticRouter>",e)}},H=function(){},q=function(a){function i(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r=x(this,a.call.apply(a,[this].concat(n)))).createHref=function(e){return _(r.props.basename+L(e))},r.handlePush=function(e){var t=r.props,n=t.basename,o=t.context;o.action="PUSH",o.location=S(n,Object(u.c)(e)),o.url=L(o.location)},r.handleReplace=function(e){var t=r.props,n=t.basename,o=t.context;o.action="REPLACE",o.location=S(n,Object(u.c)(e)),o.url=L(o.location)},r.handleListen=function(){return H},r.handleBlock=function(){return H},x(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},i.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},i.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),o=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=_(e);return 0!==t.pathname.indexOf(n)?t:N({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(u.c)(n)),push:this.handlePush,replace:this.handleReplace,go:M("go"),goBack:M("goBack"),goForward:M("goForward"),listen:this.handleListen,block:this.handleBlock};return c.a.createElement(v.a,N({},o,{history:r}))},i}(c.a.Component);q.propTypes={basename:l.a.string,context:l.a.object.isRequired,location:l.a.oneOfType([l.a.string,l.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:l.a.object.isRequired};var A=q,D=n(430),F=n(444).a,W=n(80).a,B=n(429);n.d(t,"BrowserRouter",function(){return d}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return b.a}),n.d(t,"MemoryRouter",function(){return w}),n.d(t,"NavLink",function(){return O.a}),n.d(t,"Prompt",function(){return P}),n.d(t,"Redirect",function(){return C.a}),n.d(t,"Route",function(){return R.a}),n.d(t,"Router",function(){return s.a}),n.d(t,"StaticRouter",function(){return A}),n.d(t,"Switch",function(){return D.a}),n.d(t,"generatePath",function(){return F}),n.d(t,"matchPath",function(){return W}),n.d(t,"withRouter",function(){return B.a})},431:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var o=n(1),r=n.n(o),a=n(2),i=n.n(a),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},l=function(e){var t=e.data,n=e.name,o=e.value;return n&&o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),o,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!o?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&o?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},o)):void 0};l.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},c.propTypes={value:i.a.string.isRequired},t.default=l},432:function(e,t,n){"use strict";n.r(t);var o=n(431);n.d(t,"Attribute",function(){return o.default}),n.d(t,"Property",function(){return o.Property});var r=n(434);n.d(t,"ComponentPreview",function(){return r.default});var a=n(440);n.d(t,"DocContainer",function(){return a.default});var i=n(441);n.d(t,"DocHeading",function(){return i.default});var c=n(435);n.d(t,"DocToc",function(){return c.default});var l=n(436);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var u=n(437);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(438);n.d(t,"Icon",function(){return s.default});var p=n(439);n.d(t,"PxScript",function(){return p.default})},433:function(e,t,n){"use strict";var o=n(1),c=n.n(o),r=n(2),a=n.n(r),i=function(e){var t=e.id,n=e.type,o=e.icon,r=e.close,a=e.text,i=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},o?"\n":"",o?c.a.createElement("i",{className:"material-icons alert-icon"},o):null,a?"\n":"",a?c.a.createElement("p",null,a):null,i?"\n":"",i?c.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:a.a.string,type:a.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:a.a.string,close:a.a.bool,text:a.a.string},t.a=i},434:function(e,t,n){"use strict";n.r(t);var o=n(1),p=n.n(o),r=n(2),a=n.n(r),f=n(445),i=n(446),d=n.n(i),m=n(447);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var o=e.children,r=e.language,a=e.removeOuterTag,i=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,l=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(f.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(f.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),o="";return n.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},o)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===r&&l)t="","function"==typeof(e=o).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&o&&"function"==typeof o.map)o.map(function(e){n+=a?u(e):c?s(e):Object(f.renderToStaticMarkup)(e)});else if("html"===r)n+=a?u(o):c?s(o):Object(f.renderToStaticMarkup)(o);else switch(y(o)){case"string":n=o;break;case"object":o.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),i&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return m.b.style="",p.a.createElement("figure",null,p.a.createElement(m.a,h({},m.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,a=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},o.map(function(e,t){return p.a.createElement("div",h({key:e+t},r({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},a({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:a.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:a.a.bool,hideValue:a.a.bool,removeList:a.a.bool,showCasePanel:a.a.bool,codeFigure:a.a.bool,dangerousHTML:a.a.bool},t.default=c},435:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(2),r=n.n(o),c=n(442);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=s(this,p(r).call(this,e))).state={headings:(n=t.props.component().props.children,o=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)o.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)o.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&o.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&o.push({title:e.props.children,id:e.props.id})}),o),windowTopPosition:window.pageYOffset},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,a["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return i.a.createElement("div",{className:"col-2 d-none d-lg-block"},i.a.createElement("div",{className:"doc-toc"},i.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=o.state.windowTopPosition>=e.top&&o.state.windowTopPosition<o.state.headings[t+1].top;return i.a.createElement("li",{key:t,className:n?"active":""},i.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:o.scrollToElement},e.title))}}))))}}])&&u(t.prototype,n),o&&u(t,o),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},436:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(433);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},437:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(433);t.default=function(){return r.a.createElement(a.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},438:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(2),i=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:n.n(a).a.string.isRequired},t.default=i},439:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(2),a=n.n(r),i=function(e){var t,n,o=e.component,r=e.subComponents,a=e.func,i=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return c.a.createElement("span",{key:t},e,t<i.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,o),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},a),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:a.a.string.isRequired,subComponents:a.a.array,func:a.a.string.isRequired,params:a.a.array},t.default=i},440:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(2),i=n.n(a),c=n(432),l=function(e){var t=e.docToc,n=e.children,o=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(o,null),t?r.a.createElement(c.DocToc,{component:o}):null))};l.propTypes={docToc:i.a.bool},t.default=l},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=b;var a=l(n(1)),i=l(n(2)),c=n(201);function l(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,f=null;function d(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function m(){var e=document.getElementById(u);return null!==e&&(f(e),d(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["scroll","smooth"]);return a.default.createElement(e,o({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?u=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(u=t.to.hash.replace("#","")),""!==u&&(f=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===m()&&(null===s&&(s=new MutationObserver(m)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function y(e){return h(e,c.Link)}function b(e){return h(e,c.NavLink)}var v={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=y.propTypes=v},468:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return m}),n.d(t,"UsageWithJavascript",function(){return h});var a=n(1),i=n.n(a),c=n(94),l=n(432),u=n(66);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"example"},"Example"),i.a.createElement("p",null,"Dialog boxes consist of a header, a body and a footer. In these you can put whatever you want, but some basic functionality should be included in all dialogs. The header should contain a short descriptive text for what the dialog-box does. Remember to include a way to close the dialog box in the header in the form of a clickable icon or something similar. The dialog body should contain the main content, usually just text confirming an action. In the footer you will find buttons to confirm or cancel the requested action. To make a button open the dialog box you need to include ",i.a.createElement(l.Attribute,{data:!0,name:"datepicker-time",value:"{#your-dialog-id}"})," as an attribute to that button."),i.a.createElement(l.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},i.a.createElement("div",{className:"dialog",id:"demo-dialog"},i.a.createElement("section",null,i.a.createElement("header",null,i.a.createElement("h5",null,"Delete item 456?"),"\n",i.a.createElement("a",{href:"#",className:"dialog-close"},"\n\t\t\t\t",i.a.createElement(l.Icon,{icon:"close"}),"\n\t\t\t"),"\n\t\t"),i.a.createElement("div",{className:"dialog-body"},i.a.createElement("p",null,"Are you sure you want to permanently delete the item ",i.a.createElement("i",null,"German Swashbuckle (456)?"))),i.a.createElement("footer",null,"\n",i.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dialog-close":"demo-dialog"},"Cancel"),"\n",i.a.createElement("button",{className:"btn btn-danger",type:"button"},"Delete"),"\n"))),"\n",i.a.createElement("button",{className:"btn btn-primary",type:"button","data-dialog-open":"demo-dialog"},"Open dialog")))},h=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),i.a.createElement(l.ComponentPreview,{language:"html",codeFigure:!0},i.a.createElement("div",{className:"dialog",id:"demo-dialog"},"\n","...","\n"),"\n"),i.a.createElement("p",null,"To open a dialog:"),i.a.createElement(l.ComponentPreview,{language:"javascript",codeFigure:!0},'px.dialog.open("demo-dialog")'),i.a.createElement("p",null,"To close a dialog:"),i.a.createElement(l.ComponentPreview,{language:"javascript",codeFigure:!0},'px.dialog.close("demo-dialog")'))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){u.dialog.init()}},{key:"render",value:function(){return i.a.createElement(l.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"Dialog is meant to be used to show a snippet of text like a confirmation box before you delete something. Use ",i.a.createElement(c.a,{to:"/docs/components/sheet"},"sheet")," if you wish to receive input from the user or display a large chunk of information."),i.a.createElement(m,null),i.a.createElement(h,null))}}])&&s(n.prototype,o),r&&s(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_7.js.map?fab230f554db03f398a2