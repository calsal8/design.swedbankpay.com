(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[15,2,47,48,49,51,52,53,54],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),o=n(45),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},355:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(45),l=n.n(o),c=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(45),l=n.n(o),c=n(366),i=n(367),u=n.n(i),s=n(368);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,i=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},y=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):l?y(t):Object(c.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",p({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},l({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=f},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(45),l=n.n(o),c=n(365);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),l&&u(n,l),t}();d.propTypes={component:l.a.func.isRequired},t.default=d},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(355);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},359:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(355);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},360:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(45),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(45),l=n.n(o),c=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},362:function(e,t,n){"use strict";n.r(t);var a=n(354);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(356);n.d(t,"ComponentPreview",function(){return r.default});var o=n(363);n.d(t,"DocContainer",function(){return o.default});var l=n(364);n.d(t,"DocHeading",function(){return l.default});var c=n(357);n.d(t,"DocToc",function(){return c.default});var i=n(358);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(359);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(360);n.d(t,"Icon",function(){return s.default});var p=n(361);n.d(t,"PxScript",function(){return p.default})},363:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(45),l=n.n(o),c=n(362),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=h,t.HashLink=y,t.NavHashLink=v;var o=i(n(1)),l=i(n(45)),c=n(98);function i(e){return e&&e.__esModule?e:{default:e}}var u="",s=null,p=null,m=null;function f(){u="",null!==s&&s.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function d(){var e=document.getElementById(u);return null!==e&&(m(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,a({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(m=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function y(e){return h(e,c.Link)}function v(e){return h(e,c.NavLink)}var b={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};y.propTypes=b,v.propTypes=b},395:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return m}),n.d(t,"UsageWithJavascript",function(){return f});var a=n(1),r=n.n(a),o=n(362),l=n(66);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"example"},"Example"),r.a.createElement("p",null,"A standard sheet should display content that complements the screen’s primary content. It will close when the user clicks outside of the sheet or exits out of it in another way."),r.a.createElement("p",null,"Sheets can be used for a number of different things, but common use cases for a sheet are for example displaying a list of actions that affet the screen’s primary content such as filters, deletion or other ways to manipulate the main content. If you have a form then you could include an icon that opens said sheet to display more information about what the expected input is."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"sheet",id:"demo-sheet"},r.a.createElement("section",null,"\n",r.a.createElement("a",{href:"#",className:"sheet-close"},"\n\t\t\t",r.a.createElement(o.Icon,{icon:"close"}),"\n\t\t"),r.a.createElement("h2",null,"Sheet component"),r.a.createElement("p",null,"This is the sheet component. It can contain anything you want."),r.a.createElement("p",null,"It can also contain lots of useless text, just like the text in this paragraph. Or it can contain useful info and cheats. For example if you have a math quiz coming up;"),r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,r.a.createElement("code",null,"3 + 8 = 11")),r.a.createElement("li",null,r.a.createElement("code",null,"36 - 22 = 14")),r.a.createElement("li",null,r.a.createElement("code",null,"256 + 113 = 369")),r.a.createElement("li",null,r.a.createElement("code",null,"356 - 1 = 355"))),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"full-name"},"Full name"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"full-name",placeholder:"Enter your full name"})),r.a.createElement("div",{className:"help-block"},"Your full name")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email-address"},"Email"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"email-address",placeholder:"Enter your email"})),r.a.createElement("div",{className:"help-block"},"Email means electronic mail, not express mail")),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",id:"subscribe-checkbox"}),r.a.createElement("label",{htmlFor:"subscribe-checkbox"},"Sign up to our math newsletter"))),r.a.createElement("button",{className:"btn btn-executive",type:"submit",onClick:function(e){return e.preventDefault()}},"Submit")))),"\n",r.a.createElement("button",{className:"btn btn-executive",type:"button","data-sheet-open":"demo-sheet"},"Open sheet")))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"usage-with-javascript"},"Usage with javascript"),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("div",{className:"sheet",id:"demo-sheet"},"\n","...","\n"),"\n"),r.a.createElement("p",null,"To open a sheet:"),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'px.sheet.open("demo-sheet")'),r.a.createElement("p",null,"To close a sheet:"),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'px.sheet.close("demo-sheet")'))},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).apply(this,arguments))}var n,c,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(c=[{key:"componentDidMount",value:function(){l.sheet.init()}},{key:"render",value:function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Sheet is a container component that is anchored on the right side of the screen and can contain a number of different things."),r.a.createElement(m,null),r.a.createElement(f,null))}}])&&i(n.prototype,c),d&&i(n,d),t}();t.default=d}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?d2899b844d64a3baccf6