(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[66,2,57,58,59,60,61,63,75],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(364);n.d(t,"ComponentPreview",function(){return l.default});var o=n(369);n.d(t,"DocContainer",function(){return o.default});var r=n(365);n.d(t,"DocHeading",function(){return r.default});var i=n(366);n.d(t,"DocToc",function(){return i.default});var c=n(370);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var s=n(371);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(367);n.d(t,"Icon",function(){return u.default});var m=n(372);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(368);n.d(t,"DgScript",function(){return p.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:r.a.string,value:r.a.string,data:r.a.bool},i.propTypes={value:r.a.string.isRequired},t.default=c},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return s});var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=n(361),c=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,r=e.text,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,r?"\n":"",r?l.a.createElement("p",null,r):null,i?"\n":"",i?l.a.createElement("div",{className:"alert-body"},i):null,o?"\n":"",o?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},s=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,r=e.headerText,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},l.a.createElement("header",{className:"alert-header"},a?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement(i.Icon,{classNames:"alert-icon",type:a})):null,r?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("h3",null,r),"\n"):null,o?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement(i.Icon,{type:"close"}),"\n\t"):null,"\n"),c?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:"alert-body"},c),"\n"):null)};c.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.default=c},364:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=n(459),c=n(460),s=n.n(c),u=n(461);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,r=e.removeList,c=e.showCasePanel,d=e.showCasePanelSm,f=e.codeFigure,h=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},g=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return l.a.createElement(l.a.Fragment,null,c?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel".concat(d?" showcasepanel-sm":"")},t)},null):null,f?l.a.createElement(function(){var e="";if("html"===n&&h)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):r?g(t):Object(i.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):r?g(t):Object(i.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",l.a.createElement("figure",null,l.a.createElement(u.a,m({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,r=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",m({key:e+t},o({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},r({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,showCasePanelSm:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},t.default=d},365:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(41);t.default=Object(o.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),l.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=n(456);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:a?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,o),r&&s(n,r),t}();f.propTypes={component:r.a.func.isRequired},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(14),r=function(e){var t=e.type,n=e.classNames;return l.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};r.propTypes={type:n.n(o).a.string.isRequired},t.default=r},368:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=function(e){var t,n,a=e.component,o=e.subComponents,r=e.func,i=e.params;return o&&(n=o.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<i.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"dg"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},r),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=i},369:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=n(361),c=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement(i.DocHeading,null),l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:r.a.bool},t.default=c},370:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(363);t.default=function(){return l.a.createElement(o.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(363);t.default=function(){return l.a.createElement(o.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return i}),n.d(t,"CloseDocs",function(){return c});var a=n(1),l=n.n(a),o=n(50),r=n(361),i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(r.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(r.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Function"),l.a.createElement("th",{scope:"col"},"Purpose"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(r.DgScript,{component:t,func:"init"})),l.a.createElement("td",null,l.a.createElement(o.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?l.a.createElement(i,{componentName:t}):null,a?l.a.createElement(c,{componentName:t}):null)))}},373:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(14),r=n.n(o),i=n(458),c=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(e){var t=e.label,n=e.id,a=e.name,o=e.value,r=e.href,i=e.icon,u=e.loading,m=e.type,p=e.disabled,d=e.btnType,f=e.fullWidth,h=e.pullRight,y=e.input,g=e.outline,b=e.active,v=e.size,E=c()("btn",m?"btn-".concat(m):null,g?"btn-outline":null,v?"btn-".concat(v):null,u?"loading":null,f?"btn-block":null,h?"pull-right":null,b&&r?"active":null,p&&r?"disabled":null),w={href:r,id:n,name:a,defaultValue:o,disabled:r?null:p,active:b&&!r?"":null,role:r?"button":null,type:r?null:d||"button","aria-pressed":!!b||null,"aria-disabled":!(!r||!p)||null,tabIndex:r&&p?"-1":null};return r?l.a.createElement("a",s({className:E},w),i?"\n\t":null,i?l.a.createElement("i",{className:"material-icons"},i):null,i&&t?l.a.createElement("span",null,t):t):y?l.a.createElement("input",s({className:E},w)):l.a.createElement("button",s({className:E},w),i?"\n\t\t":null,i?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"material-icons"},i),"\n\t\t"):null,i&&t?l.a.createElement("span",null,t):t,i?"\n\t":null)};u.propTypes={type:r.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},t.default=u},450:function(e,t,n){"use strict";n.r(t),n.d(t,"Overview",function(){return s}),n.d(t,"Download",function(){return c}),n.d(t,"Guidelines",function(){return u});var a=n(1),l=n.n(a),o=n(361),r=n(373),i="/feature/page-layout-height/",c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"download"},"Download"),l.a.createElement("div",{className:"slab slab-default slab-elevated"},l.a.createElement("p",null,"Before downloading any logotype files, make sure to read the Swedbank Pay logotype guidelines. The guidelines can be found below."),l.a.createElement(r.default,{type:"executive",icon:"file_download",href:"".concat(i,"release/logos/cid_2799998.zip"),label:"Download"})))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799392.png"),className:"img-fluid mb-4"}),l.a.createElement("p",null,"The Swedbank Pay logotype is designed to highlight and communicate our commerce offer. It should be used as a sender on any material or information regarding Swedbank Pay to both merchants and consumers."),l.a.createElement("p",null,"The Swedbank Pay logotype is used in Swedbank Pay channels and touchpoints."),l.a.createElement("p",null,"In Swedbank channels, for example Swedbank.se, we refer to Swedbank Pay in text or in a link, we don’t use the Swedbank Pay logotype. The Swedbank Pay logotype can, however, be a natural part of an image showing the user interface or other parts of the service."))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"guidelines"},"Logotype guidelines"),l.a.createElement("h3",null,"General"),l.a.createElement("p",null,"The Swedbank Pay logotype is available in a vertical and horizontal version, and the two variants can be used as positive or negative. The vertical version is used as the primary logotype. In situations where both the negative or positive version can be used, the recommendation is to use the negative version as it gives a lighter and more friendly impression."),l.a.createElement("p",null,"Note that the logotype is an image and does not need to comply with the WCAG contrast requirements even though legibility of course must be considered."),l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799410.png"),className:"img-fluid mb-4"}),l.a.createElement("h3",null,"Background"),l.a.createElement("p",null,"The Swedbank Pay logotype can be placed on white, all our background colours and images."),l.a.createElement("p",null,"When using images as background, the logotype may only be placed if the area has low level of detail and is naturally light or dark. You may not alter or retouch the image to place the logotype. Use the negative version on dark images, and the positive on light images."),l.a.createElement("p",null,"Swedbank Pay uses Yellow as an accent colour. When placing the Swedbank Pay logotype on Yellow background always use the negative version. Make sure to keep the logotype above the minimum size recommendation for legibility."),l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799428.png"),className:"img-fluid mb-4"}),l.a.createElement("h3",null,"Size"),l.a.createElement("p",null,"The recommended size for the logotype is based on the height of the Symbol."),l.a.createElement("p",null,"The recommended sizes are based on initial design drafts and may be adjusted during the implementation."),l.a.createElement("h4",null,"Size in printed units, vertical logotype (A5–A3)"),l.a.createElement("ul",null,l.a.createElement("li",null,"Recommended symbol height: 22 mm"),l.a.createElement("li",null,"Minimum symbol height: 12 mm")),l.a.createElement("h4",null,"Size in printed units, horisontal logotype (A5–A3)"),l.a.createElement("ul",null,l.a.createElement("li",null,"Recommended symbol height: 16 mm"),l.a.createElement("li",null,"Minimum symbol height: 12 mm")),l.a.createElement("h4",null,"Size in digital units, vertical logotype"),l.a.createElement("ul",null,l.a.createElement("li",null,"Recommended symbol height: 160 px"),l.a.createElement("li",null,"Minimum symbol height: 24 px")),l.a.createElement("h4",null,"Size in digital units, horisontal logotype"),l.a.createElement("ul",null,l.a.createElement("li",null,"Recommended symbol height: 64 px"),l.a.createElement("li",null,"Minimum symbol height: 24 px")),l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799443.png"),className:"img-fluid mb-4"}),l.a.createElement("h3",null,"Placement"),l.a.createElement("p",null,"For best recognition and a consistent expression, our primary placement of the Swedbank Pay logotype is in the top right corner. As secondary placement we place the logotype in the bottom right corner. In end frames such as in film clips and other video formats, mobile splash screens, animated banners or Powerpoint the logotype may be placed centered."),l.a.createElement("p",null,"On websites the logotype can be placed top left, this is as an exception."),l.a.createElement("h4",null,"Placement of the vertical logotype"),l.a.createElement("p",null,"The vertical Swedbank Pay logotype is placed at a consistent distance from the edge of the unit based on the height of the Symbol. Both the vertical and horizontal distance is 75% of the height of the Symbol, but when placed bottom right the vertical distance to the lower edge is 60% of the height of the Symbol."),l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799444.png"),className:"img-fluid mb-4"}),l.a.createElement("h4",null,"Placement of the horizontal logotype"),l.a.createElement("p",null,"The horizontal Swedbank Pay logotype is placed at a consistent distance from the edge of the unit based on the height of the Symbol. In print both the vertical and horizontal distance is 75% of the height of the Symbol. In digital units the vertical and horizontal distance can vary depending on the space needed in the design, but the distance may never be smaller than 30% of the height of the Symbol. Round up to nearest 8pt-grid step."),l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799455.png"),className:"img-fluid mb-4"}),l.a.createElement("h3",null,"Clear space"),l.a.createElement("p",null,"The Swedbank Pay logotype should be used with a defined clear space for best visibility. The space differs from the vertical and horizontal version, and in digital units the clear space is fairly smaller to maintain a big and proud appearance despite the limited space."),l.a.createElement("p",null,"For digital units round up the clear space to the nearest 8pt-grid step (e.g recommended symbol height for horizontal logotype is 64 px, clear space should be 24 px. [64 × 0.3 = 19.2] → 24px)."),l.a.createElement("img",{src:"".concat(i,"img/logotype/cid_2799483.png"),className:"img-fluid mb-4"}),l.a.createElement("h3",null,"Avoid"),l.a.createElement("ul",null,l.a.createElement("li",null,"Do not alter the Swedbank Pay logotype in any way."),l.a.createElement("li",null,"Never separate the wordmark and the symbol."),l.a.createElement("li",null,"Do not use positive logotype (black wordmark) version on Yellow background."),l.a.createElement("li",null,"Never create your own logotype by combining the symbol and typing the text “Pay”"),l.a.createElement("li",null,"When the logotype is not used, always write “Swedbank Pay” when referring to the brand. Never use shortened versions such as “Pay”, “S-Pay” or “Swed-Pay”.")))};t.default=function(){return l.a.createElement(o.DocContainer,{docToc:!0},l.a.createElement(s,null),l.a.createElement(c,null),l.a.createElement(u,null))}},456:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=y,t.HashLink=g,t.NavHashLink=b;var r=s(n(1)),i=s(n(14)),c=n(50);function s(e){return e&&e.__esModule?e:{default:e}}var u="",m=null,p=null,d=null;function f(){u="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function h(){var e=document.getElementById(u);return null!==e&&(d(e),f(),!0)}function y(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return r.default.createElement(t,l({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?u=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(u=e.to.hash.replace("#","")),""!==u&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===m&&(m=new MutationObserver(h)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function g(e){return y(e,c.Link)}function b(e){return y(e,c.NavLink)}var v={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};g.propTypes=v,b.propTypes=v},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,n){var a;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=l(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)o.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):"object"===l(n(457))&&n(457)?void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a):window.classNames=r}()}}]);
//# sourceMappingURL=doc-route.chunk_68.js.map?d19a044b16f78f127133