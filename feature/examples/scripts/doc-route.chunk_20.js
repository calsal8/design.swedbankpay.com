(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[24,2,58,59,60,61,62,64],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(364);n.d(t,"ComponentPreview",function(){return l.default});var r=n(369);n.d(t,"DocContainer",function(){return r.default});var o=n(365);n.d(t,"DocHeading",function(){return o.default});var c=n(366);n.d(t,"DocToc",function(){return c.default});var i=n(370);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(371);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(367);n.d(t,"Icon",function(){return u.default});var m=n(372);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"DgScript",function(){return p.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),l=n.n(a),r=n(14),o=n.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return s});var a=n(1),l=n.n(a),r=n(14),o=n.n(r),c=n(361),i=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.headerText,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},l.a.createElement("header",{className:"alert-header"},a?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement(c.Icon,{classNames:"alert-icon",type:a})):null,o?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("h3",null,o),"\n"):null,r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement(c.Icon,{type:"close"}),"\n\t"):null,"\n"),i?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:"alert-body"},i),"\n"):null)};i.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.default=i},364:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),c=n(464),i=n(465),s=n.n(i),u=n(466);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,b=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?l.a.createElement(function(){var e="";if("html"===n&&b)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):o?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):o?E(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",l.a.createElement("figure",null,l.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(41);t.default=Object(r.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),l.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),c=n(461);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:a?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,r),o&&s(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=function(e){var t=e.type,n=e.classNames;return l.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};o.propTypes={type:n.n(r).a.string.isRequired},t.default=o},368:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"dg"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},369:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),c=n(361),i=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement(c.DocHeading,null),l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},370:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(363);t.default=function(){return l.a.createElement(r.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(363);t.default=function(){return l.a.createElement(r.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),l=n.n(a),r=n(50),o=n(361),c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Function"),l.a.createElement("th",{scope:"col"},"Purpose"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"init"})),l.a.createElement("td",null,l.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?l.a.createElement(c,{componentName:t}):null,a?l.a.createElement(i,{componentName:t}):null)))}},419:function(e,t,n){"use strict";n.r(t),n.d(t,"DefaultSlab",function(){return p}),n.d(t,"SlabElevated",function(){return f}),n.d(t,"SlabWell",function(){return b}),n.d(t,"SlabArrow",function(){return h}),n.d(t,"SlabColors",function(){return d}),n.d(t,"SlabSizes",function(){return y}),n.d(t,"SlabMuted",function(){return E});var a=n(1),l=n.n(a),r=n(361);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=window.dg.validation,p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"default-slab"},"Default slab"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default"},l.a.createElement("p",null,"Do you want to sign up for the slab mailing list?"),l.a.createElement("form",{action:"#",noValidate:!0,"data-validate":!0},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"validation-email-2"},"Email"),l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon"},l.a.createElement("i",{className:"material-icons"},"email")),l.a.createElement("input",{type:"email",className:"form-control",id:"validation-email-2",placeholder:"bob.corlsan@example.com",required:!0})),l.a.createElement("div",{className:"help-block","data-success":"Right!","data-error":"Wrong!"},"This one might be a little tricky")),l.a.createElement("button",{className:"btn btn-executive",type:"submit"},"Submit")))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-colors"},"Slab colors"),l.a.createElement("p",null,"We offer three additional slab types; ",l.a.createElement(r.Property,{value:".slab-primary"}),", ",l.a.createElement(r.Property,{value:".slab-secondary"})," and ",l.a.createElement(r.Property,{value:".slab-plain"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-primary"},l.a.createElement("h4",null,"Here is some text and then a striped item list"),l.a.createElement("small",null,"Some text with a small listing of items underneath."),l.a.createElement("ul",{className:"list item-list"},l.a.createElement("li",null,"Item 1"),l.a.createElement("li",null,"Item 2"),l.a.createElement("li",null,"Item 3"))),l.a.createElement("div",{className:"slab slab-secondary"},l.a.createElement("h4",null,"Here is some text and then a striped item list"),l.a.createElement("small",null,"Some text with a small listing of items underneath."),l.a.createElement("ul",{className:"list item-list"},l.a.createElement("li",null,"Item 1"),l.a.createElement("li",null,"Item 2"),l.a.createElement("li",null,"Item 3"))),l.a.createElement("div",{className:"slab slab-plain"},l.a.createElement("h4",null,"Here is some text and then a striped item list"),l.a.createElement("small",null,"Some text with a small listing of items underneath."),l.a.createElement("ul",{className:"list item-list"},l.a.createElement("li",null,"Item 1"),l.a.createElement("li",null,"Item 2"),l.a.createElement("li",null,"Item 3")))),l.a.createElement("p",null,"If no slab extension class is added, it is defaulted to white. In this example we use the utility class ",l.a.createElement(r.Property,{value:".border"})," to make it easier for us to see the actual slab container."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab border"},l.a.createElement("h4",null,"Here is some text and then a striped item list"),l.a.createElement("small",null,"Some text with a small listing of items underneath."),l.a.createElement("ul",{className:"list item-list"},l.a.createElement("li",null,"Item 1"),l.a.createElement("li",null,"Item 2"),l.a.createElement("li",null,"Item 3")))))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"elevated-slab"},"Elevated slab"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default slab-elevated"},"Look ma, im elevated!")))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-well"},"Slab well"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default slab-well"},"Look ma, im in a well!")))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-arrow"},"Slab arrow"),l.a.createElement("p",null,l.a.createElement(r.Property,{value:".slab-arrow"})," inherits the color from the slab it is appended to."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default slab-arrow"},l.a.createElement("p",null,"This slab has some connection to the content above.")),l.a.createElement("div",{className:"slab border slab-arrow"},l.a.createElement("p",null,"This slab has some connection to the content above.")),l.a.createElement("div",{className:"slab slab-primary slab-arrow"},l.a.createElement("p",null,"This slab has some connection to the content above.")),l.a.createElement("div",{className:"slab slab-secondary slab-arrow"},l.a.createElement("p",null,"This slab has some connection to the content above.")),l.a.createElement("div",{className:"slab slab-plain slab-arrow"},l.a.createElement("p",null,"This slab has some connection to the content above."))))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-muted"},"Slab muted"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default slab-muted"},l.a.createElement("h4",null,"This text will be gray."),"\n",l.a.createElement("span",null,"And this text will be gray."),"\n","Even this text will be gray!")))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"slab-sizes"},"Slab sizes"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default slab-sm"},"This is very snug.")),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("div",{className:"slab slab-default slab-lg"},"This is so spacious I can hardly believe it!")))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,s(t).apply(this,arguments))}var n,o,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){m.init()}},{key:"render",value:function(){return l.a.createElement(r.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Slabs are container components, therefore it works with whatever you want to put in it."),l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(y,null))}}])&&c(n.prototype,o),v&&c(n,v),t}();t.default=v},461:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=E,t.NavHashLink=y;var o=s(n(1)),c=s(n(14)),i=n(50);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,d=null;function f(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function b(){var e=document.getElementById(u);return null!==e&&(d(e),f(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,l({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function E(e){return h(e,i.Link)}function y(e){return h(e,i.NavLink)}var v={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};E.propTypes=v,y.propTypes=v}}]);
//# sourceMappingURL=doc-route.chunk_20.js.map?ebf0eace4df627da82da