(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[69,2,58,59,60,61,62,64,82,90,92,93],{361:function(e,t,n){"use strict";n.r(t);var a=n(362);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var l=n(364);n.d(t,"ComponentPreview",function(){return l.default});var r=n(369);n.d(t,"DocContainer",function(){return r.default});var o=n(365);n.d(t,"DocHeading",function(){return o.default});var i=n(366);n.d(t,"DocToc",function(){return i.default});var c=n(370);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(371);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(367);n.d(t,"Icon",function(){return s.default});var m=n(372);n.d(t,"JavascriptDocs",function(){return m.default});var d=n(368);n.d(t,"DgScript",function(){return d.default})},362:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),a,l.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},n)):!n&&a?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},t.default=c},363:function(e,t,n){"use strict";n.r(t),n.d(t,"ComplexAlert",function(){return u});var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(361),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,i=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,i?"\n":"",i?l.a.createElement("div",{className:"alert-body"},i):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")},u=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.headerText,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-complex alert-".concat(n)},l.a.createElement("header",{className:"alert-header"},a?l.a.createElement(l.a.Fragment,null,"\n"," ",l.a.createElement(i.Icon,{classNames:"alert-icon",type:a})):null,o?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("h3",null,o),"\n"):null,r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement(i.Icon,{type:"close"}),"\n\t"):null,"\n"),c?l.a.createElement(l.a.Fragment,null,"\n",l.a.createElement("div",{className:"alert-body"},c),"\n"):null)};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.default=c},364:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(464),c=n(465),u=n.n(c),s=n(466);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,r=e.hideValue,o=e.removeList,c=e.showCasePanel,p=e.showCasePanelSm,f=e.codeFigure,b=e.dangerousHTML,v=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},y=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return l.a.createElement(l.a.Fragment,null,c?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel".concat(p?" showcasepanel-sm":"")},t)},null):null,f?l.a.createElement(function(){var e="";if("html"===n&&b)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?v(t):o?y(t):Object(i.renderToStaticMarkup)(t)});else if("html"===n)e+=a?v(t):o?y(t):Object(i.renderToStaticMarkup)(t);else switch(d(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",l.a.createElement("figure",null,l.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};p.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,showCasePanelSm:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=p},365:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(41);t.default=Object(r.k)(function(e){var t=e.location.pathname.split("/").filter(function(e){return e.length}).pop().split("-").map(function(e,t){return t>0?e:e.charAt(0).toUpperCase()+e.substr(1)}).join(" ");return document.title="".concat(t," | Swedbank Pay DesignGuide"),l.a.createElement("h1",null,t)})},366:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(461);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type&&"withRouter(DocHeading)"!==e.type.displayName)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:p(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a["Component"]),n=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:a?"active":""},l.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,r),o&&u(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},367:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=function(e){var t=e.type,n=e.classNames;return l.a.createElement("i",{className:"material-icons".concat(n?" ".concat(n):"")},t)};o.propTypes={type:n.n(r).a.string.isRequired},t.default=o},368:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,i=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<i.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"dg"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=i},369:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(361),c=function(e){var t=e.docToc,n=e.children,a=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement(i.DocHeading,null),l.a.createElement("div",{className:"row"},l.a.createElement(a,null),t?l.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:o.a.bool},t.default=c},370:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(363);t.default=function(){return l.a.createElement(r.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},371:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(363);t.default=function(){return l.a.createElement(r.default,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},372:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return i}),n.d(t,"CloseDocs",function(){return c});var a=n(1),l=n.n(a),r=n(50),o=n(361),i=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Opens the given ",t.toLowerCase())))},c=function(e){var t=e.componentName;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),l.a.createElement("td",null,"Closes the given ",t.toLowerCase())))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Function"),l.a.createElement("th",{scope:"col"},"Purpose"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"},l.a.createElement(o.DgScript,{component:t,func:"init"})),l.a.createElement("td",null,l.a.createElement(r.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase())),n?l.a.createElement(i,{componentName:t}):null,a?l.a.createElement(c,{componentName:t}):null)))}},373:function(e,t,n){"use strict";n.r(t),n.d(t,"Addon",function(){return u});var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(463),c=n.n(i),u=function(e){var t=e.type,n=e.value,a=e.color,r=e.disabled;return"button"===t?l.a.createElement("button",{type:"button",className:"btn btn-".concat(a),disabled:r},n):l.a.createElement("span",{className:"input-group-addon"},"icon"===t?l.a.createElement("i",{className:"material-icons"},n):n)},s=function(e){var t=e.icon;return l.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",l.a.createElement("i",{className:"material-icons"},t),"\n\t")},m=function(e){var t=e.id,n=e.type,r=e.placeholder,o=e.pattern,i=e.validate,m=e.required,d=e.defaultValue,p=e.autoComplete,f=e.disabled,b=e.readOnly,v=e.label,y=e.validationState,g=e.selectOptions,E=e.prefixValue,h=e.prefixType,N=e.prefixBtnColor,k=e.postfixValue,w=e.postfixType,x=e.postfixBtnColor,T=e.feedbackIcon,O=e.helpBlock,C=e.errorMessage,S=e.successMessage,P={type:n||null,className:"form-control",id:t||null,placeholder:r||null,defaultValue:d||"",disabled:f||null,readOnly:b||null,autoComplete:p||null,required:m||null,pattern:o?"":null,"data-validate":i?"":null},j=c()("input-group",y?"has-".concat(y):null,T?"has-feedback":null);return l.a.createElement("div",{className:"form-group"},"\n",v?l.a.createElement("label",{htmlFor:t},v):null,v?"\n":null,l.a.createElement("div",{className:j},"\n",E?l.a.createElement(u,{type:h,value:E,color:N,disabled:f}):null,E?"\n":null,"textarea"===n?l.a.createElement("textarea",P):"select"===n?l.a.createElement("select",{className:"form-control",disabled:f,readOnly:b},"\n\t\t",g.map(function(e,t){return l.a.createElement(a.Fragment,{key:e+t},l.a.createElement("option",null,e),t!==g.length-1?"\n\t\t":"")}),"\n\t"):l.a.createElement("input",P),"\n",T?l.a.createElement(s,{icon:T}):null," ",T?"\n":null,k?l.a.createElement(u,{type:w,value:k,color:x,disabled:f}):null,k?"\n":null),O?l.a.createElement("div",{className:"help-block","data-success":S||null,"data-error":C||null},O):null)};m.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessage:o.a.string,successMessage:o.a.string},t.default=m},374:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(463),c=n.n(i);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,n=e.id,a=e.name,r=e.value,o=e.href,i=e.icon,s=e.loading,m=e.type,d=e.disabled,p=e.btnType,f=e.fullWidth,b=e.pullRight,v=e.input,y=e.outline,g=e.active,E=e.size,h=c()("btn",m?"btn-".concat(m):null,y?"btn-outline":null,E?"btn-".concat(E):null,s?"loading":null,f?"btn-block":null,b?"pull-right":null,g&&o?"active":null,d&&o?"disabled":null),N={href:o,id:n,name:a,defaultValue:r,disabled:o?null:d,active:g&&!o?"":null,role:o?"button":null,type:o?null:p||"button","aria-pressed":!!g||null,"aria-disabled":!(!o||!d)||null,tabIndex:o&&d?"-1":null};return o?l.a.createElement("a",u({className:h},N),i?"\n\t":null,i?l.a.createElement("i",{className:"material-icons"},i):null,i&&t?l.a.createElement("span",null,t):t):v?l.a.createElement("input",u({className:h},N)):l.a.createElement("button",u({className:h},N),i?"\n\t\t":null,i?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"material-icons"},i),"\n\t\t"):null,i&&t?l.a.createElement("span",null,t):t,i?"\n\t":null)};s.propTypes={type:o.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:o.a.string,id:o.a.string,name:o.a.string,value:o.a.string,href:o.a.string,icon:o.a.string,loading:o.a.bool,disabled:o.a.bool,btnType:o.a.string,fullWidth:o.a.bool,loader:o.a.bool,pullRight:o.a.bool,input:o.a.bool,outline:o.a.bool,active:o.a.bool,size:o.a.oneOf(["lg","sm","xs"])},t.default=s},375:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(463),c=n.n(i),u=function(e){var t=e.size,n=e.imgUrl,a=e.icon,r=e.heading,o=e.text,i=e.textSmall,u=e.mediaRight,s=e.muted,m=c()("media",u?"media-right":null,t?"media-".concat(t):null),d=c()("material-icons",s?"text-muted":null);return l.a.createElement("div",{className:m},n||a?l.a.createElement("div",{className:"media-img"},"\n",n?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("img",{src:n})," ","\n"," "):null,a?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("i",{className:d},a)," ","\n"," "):null):null,l.a.createElement("div",{className:"media-body"},function(){var e=c()(s?"text-muted":null);switch(t){case"sm":return l.a.createElement("h4",{className:e},r);case"lg":return l.a.createElement("h2",{className:e},r);default:return l.a.createElement("h3",{className:e},r)}}(),l.a.createElement("p",null,i?l.a.createElement("small",null,o):o)))};u.propTypes={size:o.a.oneOf(["sm","lg"]),imgUrl:o.a.string,icon:o.a.string,heading:o.a.string.isRequired,text:o.a.string,textSmall:o.a.bool,mediaRight:o.a.bool,muted:o.a.bool},t.default=u},376:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=function(e){var t=e.id,n=e.checked,a=e.disabled,r=e.label,o={type:"checkbox",id:t||null,disabled:a||null,defaultChecked:n||null};return l.a.createElement("div",{className:"checkbox"},"\n",l.a.createElement("input",o),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};i.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var c=i,u=n(373),s=function(e){var t=e.format,n=e.time,a=e.min,r=e.max,o=e.months,i=e.value,c=e.label,s=e.prefixValue,m=e.prefixType,d=e.fulldate,p=e.mode,f=e.allowinput,b=e.required,v=e.id,y={id:v,className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":t||null,"data-datepicker-time":n||null,"data-datepicker-min":a||null,"data-datepicker-max":r||null,"data-datepicker-value":i||null,"data-datepicker-months":o||null,"data-datepicker-fulldate":d||null,"data-datepicker-mode":p||null,"data-datepicker-allowinput":f||null,"data-required":b||null};return c?l.a.createElement("div",{className:"form-group"},"\n",l.a.createElement("label",{htmlFor:v||null},c),"\n",l.a.createElement("div",{className:"input-group"},"\n",s?l.a.createElement(u.Addon,{type:m,value:s}):null,"\n",l.a.createElement("input",y),"\n")):l.a.createElement("input",y)};s.propTypes={format:o.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:o.a.bool,min:o.a.string,max:o.a.string,months:o.a.string,value:o.a.string,label:o.a.string,id:o.a.string,required:o.a.bool};var m=s,d=function(e){var t=e.text,n=e.label;return l.a.createElement("div",{className:"form-group"},"\n",n?l.a.createElement("label",null,n):null,n?"\n":null,l.a.createElement("span",{className:"form-control-text"},t),"\n")};d.propTypes={text:o.a.string.isRequired,label:o.a.string};var p=d,f=function(e){var t=e.id,n=e.checked,a=e.disabled,r=e.label,o={type:"radio",id:t||null,name:e.name||null,disabled:a||null,defaultChecked:n||null};return l.a.createElement("div",{className:"radio"},"\n",l.a.createElement("input",o),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};f.propTypes={id:o.a.string,name:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var b=f,v=function(e){var t=e.name,n=e.min,a=e.max,r=e.step,o=e.color,i=e.value,c=e.disabled,u=e.valueLabel,s=e.valueLabelPrefix,m=e.valueLabelPostfix,d=e.valueLabelPosition,p={type:"range",name:t,min:n,max:a,step:r,defaultValue:i,disabled:c};return l.a.createElement("div",{className:"rangeslider rangeslider-".concat(o||"brand"," label-").concat(d||"right")},"\n",l.a.createElement("input",p),u?"\n":null,u?l.a.createElement(function(){return l.a.createElement("output",{className:"value-label"},"\n\t\t",l.a.createElement("p",null,"\n\t\t\t",s?l.a.createElement("span",null,s):null,s?"\n\t\t\t":null,l.a.createElement("span",{"data-rs-value":!0},i),"\n\t\t\t",m?l.a.createElement("span",null,m):null,m?"\n\t\t":null),"\n\t")},null):null,u?"\n":null)};v.propTypes={name:o.a.string,min:o.a.number,max:o.a.number,step:o.a.number,color:o.a.oneOf(["brand","neutral","default"]),value:o.a.number,disabled:o.a.bool,valueLabel:o.a.bool,valueLabelPrefix:o.a.string,valueLabelPostfix:o.a.string,valueLabelPosition:o.a.string};var y=v,g=function(e){var t=e.id,n=e.checked,a=e.disabled,r=e.label,o={type:"checkbox",id:t||null,disabled:a||null,defaultChecked:n||null};return l.a.createElement("div",{className:"togglebox"},"\n",l.a.createElement("input",o),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};g.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var E=g;n.d(t,"Checkbox",function(){return c}),n.d(t,"Datepicker",function(){return m}),n.d(t,"FormControlText",function(){return p}),n.d(t,"Radio",function(){return b}),n.d(t,"Rangeslider",function(){return y}),n.d(t,"Togglebox",function(){return E});t.default={Checkbox:c,Datepicker:m,FormControlText:p,Radio:b,Rangeslider:y,Togglebox:E}},452:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsHeader",function(){return N}),n.d(t,"SettingsBasic",function(){return g}),n.d(t,"SettingsEmailNotification",function(){return E}),n.d(t,"SettingsDescription",function(){return h});var a=n(1),l=n.n(a),r=n(14),o=n.n(r),i=n(361),c=n(373),u=n(374),s=n(376),m=n(375);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=window.dg.rangeslider,g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(c.default,{id:"validation-firstname",type:"text",label:"First name",placeholder:"John"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(c.default,{id:"validation-lastname",type:"text",label:"Last name",placeholder:"Smith"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(c.default,{id:"validation-email",type:"email",label:"Email",placeholder:"john.smith@email.com",prefixType:"icon",prefixValue:"email"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(c.default,{id:"validation-password",type:"password",label:"Password",placeholder:"***********",prefixType:"icon",prefixValue:"vpn_key"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(c.default,{id:"validation-confirm-password",type:"password",label:"Confirm password",placeholder:"***********",prefixType:"icon",prefixValue:"vpn_key"}))))},E=function(e){var t=e.emailNotif,n=e.toggleEmailNotif;return Object(a.useEffect)(function(){y.init()}),l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"togglebox"},l.a.createElement("input",{type:"checkbox",id:"togglebox-settings-email",checked:t,onChange:n}),l.a.createElement("label",{htmlFor:"togglebox-settings-email"},"Email notifications"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("label",{className:"d-none d-lg-block"},"Email notification frequency"),l.a.createElement(s.Rangeslider,{min:1,max:50,step:1,value:7,valueLabel:!0,valueLabelPrefix:"Every",valueLabelPostfix:"days",disabled:!t})))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(c.default,{id:"settings-description",type:"textarea",label:"Profile description",placeholder:"This profile description is an example to be followed",prefixType:"icon",prefixValue:"format_quote"}))),l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-lg-7"},l.a.createElement(c.default,{type:"select",selectOptions:["Available","Away","On break","Not Available"],prefixValue:"Status"})),l.a.createElement("div",{className:"col-lg-5"},l.a.createElement("label",null,"Profile visibility"),l.a.createElement(s.Radio,{label:"Visible to all",id:"settings-radio-1",name:"settings-radio",checked:!0}),l.a.createElement(s.Radio,{label:"Visible to accepted contacts only",id:"settings-radio-2",name:"settings-radio"}),l.a.createElement(s.Radio,{label:"Hidden",id:"settings-radio-3",name:"settings-radio"}))))},N=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-auto mr-auto"},l.a.createElement("h2",{className:"panel-title"},"Profile settings")),l.a.createElement("div",{className:"col-auto"},l.a.createElement(m.default,{size:"sm",icon:"account_circle",heading:"John Smith",text:"john.smith@email.com"}))))},k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,b(t).call(this,e))).state={emailNotif:!0},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,(r=[{key:"toggleEmailNotif",value:function(){this.setState({emailNotif:!this.state.emailNotif})}},{key:"render",value:function(){var e=this;return l.a.createElement(i.DocContainer,null,l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("section",{className:"panel panel-brand"},l.a.createElement(N,null),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",null,l.a.createElement(g,null),l.a.createElement(E,{emailNotif:this.state.emailNotif,toggleEmailNotif:function(){return e.toggleEmailNotif()}}),l.a.createElement(h,null),l.a.createElement(u.default,{type:"executive",label:"Save changes",icon:"save",btnType:"submit"}))))))}}])&&p(n.prototype,r),o&&p(n,o),t}();E.propTypes={emailNotif:o.a.bool.isRequired,toggleEmailNotif:o.a.func.isRequired},t.default=k},461:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=v,t.HashLink=y,t.NavHashLink=g;var o=u(n(1)),i=u(n(14)),c=n(50);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,d=null,p=null;function f(){s="",null!==m&&m.disconnect(),null!==d&&(window.clearTimeout(d),d=null)}function b(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function v(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,l({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),d=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function y(e){return v(e,c.Link)}function g(e){return v(e,c.NavLink)}var E={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};y.propTypes=E,g.propTypes=E},462:function(e,t){(function(t){e.exports=t}).call(this,{})},463:function(e,t,n){var a;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=l(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===l(n(462))&&n(462)?void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_69.js.map?ebf0eace4df627da82da