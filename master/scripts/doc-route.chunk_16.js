(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[14,2,45,46,47,48,50,51,52],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(64),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},353:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(64),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},354:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(64),l=n.n(r),p=n(364),o=n(365),d=n.n(o),f=n(366);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var a=e.children,r=e.language,l=e.removeOuterTag,o=e.hideValue,c=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=l?s(e):c?u(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=l?s(a):c?u(a):Object(p.renderToStaticMarkup)(a);else switch(h(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,b({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",b({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",b({key:t},l({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=c},355:function(e,t,n){"use strict";n.r(t);var l=n(1),o=n.n(l),a=n(64),r=n.n(a),c=n(363);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function r(e){var t,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=u(this,m(r).call(this,e))).state={headings:(n=t.props.component().props.children,a=[],"function"==typeof n.map&&n.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)a.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var t=e.type().props.children[0];if("h2"===t.type)a.push({title:t.props.children,id:t.props.id});else if("function"==typeof t.type){var n=t.type().props.children[0];"h2"===n.type&&a.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&a.push({title:e.props.children,id:e.props.id})}),a),windowTopPosition:window.pageYOffset},t}var t,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,l["Component"]),t=r,(n=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var a=this;return o.a.createElement("div",{className:"col-2 d-none d-lg-block"},o.a.createElement("div",{className:"doc-toc"},o.a.createElement("ul",null,this.state.headings.map(function(e,t){if(e.id&&e.title){var n=a.state.windowTopPosition>=e.top&&a.state.windowTopPosition<a.state.headings[t+1].top;return o.a.createElement("li",{key:t,className:n?"active":""},o.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:a.scrollToElement},e.title))}}))))}}])&&s(t.prototype,n),a&&s(t,a),r}();d.propTypes={component:r.a.func.isRequired},t.default=d},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(353);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(353);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},358:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(64),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},359:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(64),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},360:function(e,t,n){"use strict";n.r(t);var a=n(352);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(354);n.d(t,"ComponentPreview",function(){return r.default});var l=n(361);n.d(t,"DocContainer",function(){return l.default});var o=n(362);n.d(t,"DocHeading",function(){return o.default});var c=n(355);n.d(t,"DocToc",function(){return c.default});var i=n(356);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(357);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(358);n.d(t,"Icon",function(){return u.default});var m=n(359);n.d(t,"PxScript",function(){return m.default})},361:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(64),o=n.n(l),c=n(360),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=b,t.HashLink=h,t.NavHashLink=y;var l=i(n(1)),o=i(n(64)),c=n(96);function i(e){return e&&e.__esModule?e:{default:e}}var s="",u=null,m=null,p=null;function d(){s="",null!==u&&u.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function f(){var e=document.getElementById(s);return null!==e&&(p(e),d(),!0)}function b(t,e){t.scroll,t.smooth;var n=function(e,t){var n={};for(var a in e)0<=t.indexOf(a)||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scroll","smooth"]);return l.default.createElement(e,a({},n,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"==typeof t.to?s=t.to.split("#").slice(1).join("#"):"object"===r(t.to)&&"string"==typeof t.to.hash&&(s=t.to.hash.replace("#","")),""!==s&&(p=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===u&&(u=new MutationObserver(f)),u.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),t.children)}function h(e){return b(e,c.Link)}function y(e){return b(e,c.NavLink)}var v={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};y.propTypes=h.propTypes=v},393:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultSlab",function(){return d}),n.d(t,"SlabElevated",function(){return f}),n.d(t,"SlabWell",function(){return b}),n.d(t,"SlabWhite",function(){return h}),n.d(t,"SlabSizes",function(){return v}),n.d(t,"SlabMuted",function(){return y}),n.d(t,"SlabCombinations",function(){return E});var l=n(1),o=n.n(l),c=n(360),i=n(97);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"default-slab"},"Default slab"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab"},o.a.createElement("p",null,"Do you want to sign up for the slab mailing list?"),o.a.createElement("form",{action:"#",noValidate:!0,"data-validate":!0},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"validation-email-2"},"Email"),o.a.createElement("div",{className:"input-group"},o.a.createElement("span",{className:"input-group-addon"},o.a.createElement("i",{className:"material-icons"},"email")),o.a.createElement("input",{type:"email",className:"form-control",id:"validation-email-2",placeholder:"bob.corlsan@example.com",required:!0})),o.a.createElement("div",{className:"help-block","data-success":"Right!","data-error":"Wrong!"},"This one might be a little tricky")),o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"elevated-slab"},"Elevated slab"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-elevated"},"Look ma, im elevated!")))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"slab-well"},"Slab well"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-well"},"Look ma, im in a well!")))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"slab-white"},"Slab white"),o.a.createElement("p",null,"This slab can contain so many things"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-white"},o.a.createElement("p",{className:"lead text-center"},"Here is some text and then a striped item list"),o.a.createElement("ul",{className:"item-list item-list-striped"},o.a.createElement("li",null,o.a.createElement("span",null,"4925*********004")),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",o.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",o.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("i",{className:"material-icons"},"star"),"\n"),o.a.createElement("li",null,"\n",o.a.createElement("span",null,"4925*********004"),"\n",o.a.createElement("span",{className:"status status-success"},"Active"),"\n",o.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},o.a.createElement("i",{className:"material-icons"},"delete")),"\n")),o.a.createElement("p",null,"Maybe include a steps component in this slab so you can track your progress!"),o.a.createElement("div",{className:"steps"},o.a.createElement("ol",null,o.a.createElement("li",{className:"steps-completed"},o.a.createElement("div",{className:"material-icons steps-icon"},"check"),"Step one",o.a.createElement("div",{className:"steps-sub-title"},"24.12.17 12:10")),o.a.createElement("li",{className:"steps-ongoing steps-selected"},"Step two"),o.a.createElement("li",null,"Step three"),o.a.createElement("li",null,"Step four")),o.a.createElement("div",{className:"steps-responsive"},o.a.createElement("div",{className:"steps-responsive-text"},"Step 3"))))))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"slab-muted"},"Slab muted"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-muted"},o.a.createElement("h4",null,"This text will be gray."),"\n",o.a.createElement("span",null,"And this text will be gray."),"\n","Even this text will be gray!")))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"slab-sizes"},"Slab sizes"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-sm"},"This is very snug.")),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-lg"},"This is so spacious I can hardly believe it!")))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"slab-combinations"},"Slab combinations"),o.a.createElement("p",null,"You can mix and match slab variations as you see fit."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-white slab-muted slab-elevated"},"This is an elevated white slab with muted text.")),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"slab slab-well slab-lg"},"This is a big well!")))},r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){i.validation.init()}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Slabs are container components, therefore it works with whatever you want to put in it."),o.a.createElement(d,null),o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(h,null),o.a.createElement(y,null),o.a.createElement(v,null),o.a.createElement(E,null))}}])&&s(n.prototype,a),r&&s(n,r),t}();t.default=r}}]);
//# sourceMappingURL=doc-route.chunk_16.js.map?eb7d5457f01eb1c8277e