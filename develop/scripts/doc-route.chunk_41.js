(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[43,3,46,47,48,49,51,52,53],{201:function(e,t,n){"use strict";n.r(t);var r=n(28),a=n.n(r),o=n(1),i=n.n(o),l=n(2),c=n.n(l),s=n(151),u=n(427);function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t=p(this,o.call.apply(o,[this].concat(r)))).history=Object(s.a)(t.props),p(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){a()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(i.a.Component);m.propTypes={basename:c.a.string,forceRefresh:c.a.bool,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var f=m;function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t=d(this,o.call.apply(o,[this].concat(r)))).history=Object(s.b)(t.props),d(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){a()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(u.a,{history:this.history,children:this.props.children})},l}(i.a.Component);h.propTypes={basename:c.a.string,getUserConfirmation:c.a.func,hashType:c.a.oneOf(["hashbang","noslash","slash"]),children:c.a.node};var y=h,v=n(94),E=n(153);function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(o){function l(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t=b(this,o.call.apply(o,[this].concat(r)))).history=Object(s.d)(t.props),b(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.componentWillMount=function(){a()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},l.prototype.render=function(){return i.a.createElement(E.a,{history:this.history,children:this.props.children})},l}(i.a.Component);g.propTypes={initialEntries:c.a.array,initialIndex:c.a.number,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var P=g,w=n(428),k=n(19),O=n.n(k);var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.enable=function(e){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(e)},t.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},t.prototype.componentWillMount=function(){O()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},t.prototype.componentWillReceiveProps=function(e){e.when?this.props.when&&this.props.message===e.message||this.enable(e.message):this.disable()},t.prototype.componentWillUnmount=function(){this.disable()},t.prototype.render=function(){return null},t}(i.a.Component);T.propTypes={when:c.a.bool,message:c.a.oneOfType([c.a.func,c.a.string]).isRequired},T.defaultProps={when:!0},T.contextTypes={router:c.a.shape({history:c.a.shape({block:c.a.func.isRequired}).isRequired}).isRequired};var j=T,C=n(443),R=n(152),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){return"/"===e.charAt(0)?e:"/"+e},_=function(e,t){return e?x({},t,{pathname:S(e)+t.pathname}):t},L=function(e){return"string"==typeof e?e:Object(s.e)(e)},H=function(e){return function(){O()(!1,"You cannot %s with <StaticRouter>",e)}},M=function(){},q=function(o){function l(){var e,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a=N(this,o.call.apply(o,[this].concat(n)))).createHref=function(e){return S(a.props.basename+L(e))},a.handlePush=function(e){var t=a.props,n=t.basename,r=t.context;r.action="PUSH",r.location=_(n,Object(s.c)(e)),r.url=L(r.location)},a.handleReplace=function(e){var t=a.props,n=t.basename,r=t.context;r.action="REPLACE",r.location=_(n,Object(s.c)(e)),r.url=L(r.location)},a.handleListen=function(){return M},a.handleBlock=function(){return M},N(a,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,o),l.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},l.prototype.componentWillMount=function(){a()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},l.prototype.render=function(){var e=this.props,t=e.basename,n=(e.context,e.location),r=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["basename","context","location"]),a={createHref:this.createHref,action:"POP",location:function(e,t){if(!e)return t;var n=S(e);return 0!==t.pathname.indexOf(n)?t:x({},t,{pathname:t.pathname.substr(n.length)})}(t,Object(s.c)(n)),push:this.handlePush,replace:this.handleReplace,go:H("go"),goBack:H("goBack"),goForward:H("goForward"),listen:this.handleListen,block:this.handleBlock};return i.a.createElement(E.a,x({},r,{history:a}))},l}(i.a.Component);q.propTypes={basename:c.a.string,context:c.a.object.isRequired,location:c.a.oneOfType([c.a.string,c.a.object])},q.defaultProps={basename:"",location:"/"},q.childContextTypes={router:c.a.object.isRequired};var W=q,A=n(430),F=n(444).a,D=n(80).a,B=n(429);n.d(t,"BrowserRouter",function(){return f}),n.d(t,"HashRouter",function(){return y}),n.d(t,"Link",function(){return v.a}),n.d(t,"MemoryRouter",function(){return P}),n.d(t,"NavLink",function(){return w.a}),n.d(t,"Prompt",function(){return j}),n.d(t,"Redirect",function(){return C.a}),n.d(t,"Route",function(){return R.a}),n.d(t,"Router",function(){return u.a}),n.d(t,"StaticRouter",function(){return W}),n.d(t,"Switch",function(){return A.a}),n.d(t,"generatePath",function(){return F}),n.d(t,"matchPath",function(){return D}),n.d(t,"withRouter",function(){return B.a})},431:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var r=n(1),a=n.n(r),o=n(2),l=n.n(o),i=function(e){var t=e.value;return a.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,r=e.value;return n&&r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),r,a.a.createElement("span",{className:"token punctuation"},'"'))):n&&!r?a.a.createElement("code",null,t?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},n)):!n&&r?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},r)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},432:function(e,t,n){"use strict";n.r(t);var r=n(431);n.d(t,"Attribute",function(){return r.default}),n.d(t,"Property",function(){return r.Property});var a=n(434);n.d(t,"ComponentPreview",function(){return a.default});var o=n(440);n.d(t,"DocContainer",function(){return o.default});var l=n(441);n.d(t,"DocHeading",function(){return l.default});var i=n(435);n.d(t,"DocToc",function(){return i.default});var c=n(436);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=n(437);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(438);n.d(t,"Icon",function(){return u.default});var p=n(439);n.d(t,"PxScript",function(){return p.default})},433:function(e,t,n){"use strict";var r=n(1),i=n.n(r),a=n(2),o=n.n(a),l=function(e){var t=e.id,n=e.type,r=e.icon,a=e.close,o=e.text,l=e.children;return i.a.createElement("div",{id:t,className:"alert alert-".concat(n)},r?"\n":"",r?i.a.createElement("i",{className:"material-icons alert-icon"},r):null,o?"\n":"",o?i.a.createElement("p",null,o):null,l?"\n":"",l?i.a.createElement("div",{className:"alert-body"},l):null,a?"\n":"",a?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=l},434:function(e,t,n){"use strict";n.r(t);var r=n(1),p=n.n(r),a=n(2),o=n.n(a),m=n(445),l=n(446),f=n.n(l),d=n(447);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var r=e.children,a=e.language,o=e.removeOuterTag,l=e.hideValue,i=e.removeList,t=e.showCasePanel,n=e.codeFigure,c=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(m.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(m.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),r="";return n.forEach(function(e){r+="".concat(e.innerHTML," \n")}),r};return p.a.createElement(p.a.Fragment,null,t?p.a.createElement(function(){return p.a.createElement("div",{className:"showcase-panel"},r)},null):null,n?p.a.createElement(function(){var e,t,n="";if("html"===a&&c)t="","function"==typeof(e=r).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===a&&r&&"function"==typeof r.map)r.map(function(e){n+=o?s(e):i?u(e):Object(m.renderToStaticMarkup)(e)});else if("html"===a)n+=o?s(r):i?u(r):Object(m.renderToStaticMarkup)(r);else switch(y(r)){case"string":n=r;break;case"object":r.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(a){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",p.a.createElement("figure",null,p.a.createElement(d.a,h({},d.b,{theme:void 0,code:n,language:a}),function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,o=e.getTokenProps;return p.a.createElement("pre",{className:t,style:n},r.map(function(e,t){return p.a.createElement("div",h({key:e+t},a({line:e,key:t})),e.map(function(e,t){return p.a.createElement("span",h({key:t},o({token:e,key:t})))}))}))}))},null):null)};i.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=i},435:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n.n(o),r=n(2),a=n.n(r),i=n(442);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function a(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u(this,p(a).call(this,e))).state={headings:(n=t.props.component().props.children,r=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)r.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)r.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&r.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&r.push({title:e.props.children,id:e.props.id})}),r),windowTopPosition:window.pageYOffset},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,o["Component"]),t=a,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var r=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=r.state.windowTopPosition>=e.top&&r.state.windowTopPosition<r.state.headings[t+1].top;return l.a.createElement("li",{key:t,className:n?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:r.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),r&&s(t,r),a}();f.propTypes={component:a.a.func.isRequired},t.default=f},436:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(433);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},437:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(433);t.default=function(){return a.a.createElement(o.a,{type:"danger"},a.a.createElement("h3",{className:"color-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},438:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(2),l=function(e){var t=e.icon;return a.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},439:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(2),o=n.n(a),l=function(e){var t,n,r=e.component,a=e.subComponents,o=e.func,l=e.params;return a&&(n=a.map(function(e,t){return i.a.createElement("span",{key:t},e,i.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return i.a.createElement("span",{key:t},e,t<l.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,r),i.a.createElement("span",{className:"token punctuation"},"."),n,i.a.createElement("span",{className:"token function"},o),i.a.createElement("span",{className:"token punctuation"},"("),t,i.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=l},440:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(2),l=n.n(o),i=n(432),c=function(e){var t=e.docToc,n=e.children,r=function(){return a.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(r,null),t?a.a.createElement(i.DocToc,{component:r}):null))};c.propTypes={docToc:l.a.bool},t.default=c},442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=v;var o=c(n(1)),l=c(n(2)),i=n(201);function c(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,p=null,m=null;function f(){s="",null!==u&&u.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(s);return null!==e&&(m(e),f(),!0)}function h(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,r({},n,{onClick:function(e){f(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===a(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(m=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===u&&(u=new MutationObserver(d)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),t.children)}function y(e){return h(e,i.Link)}function v(e){return h(e,i.NavLink)}var E={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};v.propTypes=y.propTypes=E},499:function(e,t,n){"use strict";n.r(t),n.d(t,"HowItWorks",function(){return l}),n.d(t,"Notation",function(){return i}),n.d(t,"Examples",function(){return c});var r=n(1),a=n.n(r),o=n(432),l=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"how-it-works"},"How it works"),a.a.createElement("p",null,"Assign responsive-friendly ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are ranging from ",a.a.createElement(o.Property,{value:"0.25rem"})," to ",a.a.createElement(o.Property,{value:"3rem"}),"."))},i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"notation"},"Notation"),a.a.createElement("p",null,"Spacing utilities that apply to all breakpoints, from ",a.a.createElement(o.Property,{value:"xs"})," to ",a.a.createElement(o.Property,{value:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",a.a.createElement(o.Property,{value:"min-width: 0"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."),a.a.createElement("p",null,"The classes are named using the format ",a.a.createElement(o.Property,{value:"{property}{sides}-{size}"})," for ",a.a.createElement(o.Property,{value:"xs"})," and ",a.a.createElement(o.Property,{value:"{property}{sides}-{breakpoint}-{size}"})," for ",a.a.createElement(o.Property,{value:"sm"}),", ",a.a.createElement(o.Property,{value:"md"}),", ",a.a.createElement(o.Property,{value:"lg"}),", ",a.a.createElement(o.Property,{value:"xl"}),", and ",a.a.createElement(o.Property,{value:"xxl"}),"."),a.a.createElement("p",null,"Where ",a.a.createElement("i",null,"property")," is one of:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.Property,{value:"m"})," - for classes that set ",a.a.createElement(o.Property,{value:"margin"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"p"})," - for classes that set ",a.a.createElement(o.Property,{value:"padding"}))),a.a.createElement("p",null,"Where ",a.a.createElement("i",null,"sides")," is one of:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.Property,{value:"t"})," - for classes that set ",a.a.createElement(o.Property,{value:"margin-top"})," or ",a.a.createElement(o.Property,{value:"padding-top"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"b"})," - for classes that set ",a.a.createElement(o.Property,{value:"margin-bottom"})," or ",a.a.createElement(o.Property,{value:"padding-bottom"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"l"})," - for classes that set ",a.a.createElement(o.Property,{value:"margin-left"})," or ",a.a.createElement(o.Property,{value:"padding-left"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"r"})," - for classes that set ",a.a.createElement(o.Property,{value:"margin-right"})," or ",a.a.createElement(o.Property,{value:"padding-right"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"x"})," - for classes that set both ",a.a.createElement(o.Property,{value:"*-left"})," or ",a.a.createElement(o.Property,{value:"*-right"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"y"})," - for classes that set both ",a.a.createElement(o.Property,{value:"*-top"})," or ",a.a.createElement(o.Property,{value:"*-bottom"}))),a.a.createElement("p",null,"Where ",a.a.createElement("i",null,"size")," is one of:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.Property,{value:"0"})," - for classes that eliminate the ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," by setting it to ",a.a.createElement(o.Property,{value:"0"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"1"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," to ",a.a.createElement(o.Property,{value:"@spacer * 0.25"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"2"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," to ",a.a.createElement(o.Property,{value:"@spacer * 0.5"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"3"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," to ",a.a.createElement(o.Property,{value:"@spacer"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"4"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," to ",a.a.createElement(o.Property,{value:"@spacer * 1.5"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"5"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," or ",a.a.createElement(o.Property,{value:"padding"})," to ",a.a.createElement(o.Property,{value:"@spacer * 3"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"auto"})," - for classes that set ",a.a.createElement(o.Property,{value:"margin"})," to ",a.a.createElement(o.Property,{value:"auto"}))),a.a.createElement("p",null,"For margin you can also set negative ",a.a.createElement("i",null,"size")," (excluding ",a.a.createElement(o.Property,{value:"0"}),"):"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.Property,{value:"n1"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," to ",a.a.createElement(o.Property,{value:"-@spacer * 0.25"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"n2"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," to ",a.a.createElement(o.Property,{value:"-@spacer * 0.5"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"n3"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," to ",a.a.createElement(o.Property,{value:"-@spacer"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"n4"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," to ",a.a.createElement(o.Property,{value:"-@spacer * 1.5"})),a.a.createElement("li",null,a.a.createElement(o.Property,{value:"n5"})," - for classes that set the ",a.a.createElement(o.Property,{value:"margin"})," to ",a.a.createElement(o.Property,{value:"-@spacer * 3"}))),a.a.createElement("p",null,"(",a.a.createElement(o.Property,{value:"@spacer"})," is set to ",a.a.createElement(o.Property,{value:"1rem (16px)"}),")"))},c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"examples"},"Examples"),a.a.createElement("p",null,"Here are some representative examples of these classes:"),a.a.createElement(o.ComponentPreview,{language:"css",codeFigure:!0},"\n                .mt-0 {\n                    margin-top: 0 !important;\n                }\n                \n                .ml-1 {\n                    margin-left: (@spacer * 0.25) !important;\n                }\n                \n                .px-2 {\n                    padding-left: (@spacer * 0.5) !important;\n                    padding-right: (@spacer * 0.5) !important;\n                }\n                \n                .p-3 {\n                    padding: @spacer !important;\n                }\n            "),a.a.createElement("h3",null,"Horizontal centering"),a.a.createElement("p",null,"Additionally, DesignGuide also includes an ",a.a.createElement(o.Property,{value:".mx-auto"})," class for horizontally centering fixed-width block level content—that is, content that has ",a.a.createElement(o.Property,{value:"display: block"})," and a ",a.a.createElement(o.Property,{value:"width"})," set—by setting the horizontal margins to auto."),a.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0,showCasePanel:!0,removeOuterTag:!0},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"mx-auto p-2 bg-default"},"\n","Centered element","\n"))))};t.default=function(){return a.a.createElement(o.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"The DesignGuide includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance."),a.a.createElement(l,null),a.a.createElement(i,null),a.a.createElement(c,null))}}}]);
//# sourceMappingURL=doc-route.chunk_41.js.map?fab230f554db03f398a2