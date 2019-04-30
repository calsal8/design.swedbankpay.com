(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[54,2,46,47,48,50,51,52,53],{363:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return o});var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:i.a.string,value:i.a.string,data:i.a.bool},o.propTypes={value:i.a.string.isRequired},t.default=u},364:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,i=e.text,o=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?l.a.createElement("i",{className:"material-icons alert-icon"},n):null,i?"\n":"",i?l.a.createElement("p",null,i):null,o?"\n":"",o?l.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:i.a.string,type:i.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:i.a.string,close:i.a.bool,text:i.a.string},t.a=o},365:function(e,t,a){"use strict";a.r(t);var n=a(363);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(366);a.d(t,"ComponentPreview",function(){return l.default});var r=a(372);a.d(t,"DocContainer",function(){return r.default});var i=a(373);a.d(t,"DocHeading",function(){return i.default});var o=a(367);a.d(t,"DocToc",function(){return o.default});var u=a(368);a.d(t,"DeprecatedComponentAlert",function(){return u.default});var c=a(369);a.d(t,"ExperimentalComponentAlert",function(){return c.default});var s=a(370);a.d(t,"Icon",function(){return s.default});var m=a(371);a.d(t,"PxScript",function(){return m.default})},366:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=a(375),u=a(376),c=a.n(u),s=a(377);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t=e.children,a=e.language,n=e.removeOuterTag,r=e.hideValue,i=e.removeList,u=e.showCasePanel,p=e.codeFigure,f=e.dangerousHTML,b=function(e){var t=document.createElement("div");return t.innerHTML=Object(o.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(o.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return l.a.createElement(l.a.Fragment,null,u?l.a.createElement(function(){return l.a.createElement("div",{className:"showcase-panel"},t)},null):null,p?l.a.createElement(function(){var e="";if("html"===a&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===a&&t&&"function"==typeof t.map)t.map(function(t){e+=n?b(t):i?E(t):Object(o.renderToStaticMarkup)(t)});else if("html"===a)e+=n?b(t):i?E(t):Object(o.renderToStaticMarkup)(t);else switch(d(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(a){case"html":e=(e=c.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),r&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=c.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",l.a.createElement("figure",null,l.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:a}),function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,i=e.getTokenProps;return l.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return l.a.createElement("div",m({key:e+t},r({line:e,key:t})),e.map(function(e,t){return l.a.createElement("span",m({key:t},i({token:e,key:t})))}))}))}))},null):null)};p.propTypes={language:i.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:i.a.bool,hideValue:i.a.bool,removeList:i.a.bool,showCasePanel:i.a.bool,codeFigure:i.a.bool,dangerousHTML:i.a.bool},t.default=p},367:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=a(374);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var a=e.type().props.children[0];if("h2"===a.type)t.push({title:a.props.children,id:a.props.id});else if("function"==typeof a.type){var n=a.type().props.children[0];"h2"===n.type&&t.push({title:n.props.children,id:n.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,m(t).call(this,e))).state={headings:p(a.props.component().props.children),windowTopPosition:window.pageYOffset},a}var a,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,n["Component"]),a=t,(r=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(t,a){if(t.id&&t.title){var n=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[a+1].top;return l.a.createElement("li",{key:a,className:n?"active":""},l.a.createElement(o.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&c(a.prototype,r),i&&c(a,i),t}();f.propTypes={component:i.a.func.isRequired},t.default=f},368:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(364);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(364);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"text-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(65),i=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};i.propTypes={icon:a.n(r).a.string.isRequired},t.default=i},371:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=function(e){var t,a,n=e.component,r=e.subComponents,i=e.func,o=e.params;return r&&Array.isArray(r)&&(a=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),o&&Array.isArray(o)&&(t=o.map(function(e,t){return l.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<o.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,n),l.a.createElement("span",{className:"token punctuation"},"."),a,l.a.createElement("span",{className:"token function"},i),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:i.a.string.isRequired,subComponents:i.a.array,func:i.a.string.isRequired,params:i.a.array},t.default=o},372:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=a(365),u=function(e){var t=e.docToc,a=e.children,n=function(){return l.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},a)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(n,null),t?l.a.createElement(o.DocToc,{component:n}):null))};u.propTypes={docToc:i.a.bool},t.default=u},374:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)};t.genericHashLink=E,t.HashLink=v,t.NavHashLink=h;var i=c(a(1)),o=c(a(65)),u=a(95);function c(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,d=null,p=null;function f(){s="",null!==m&&m.disconnect(),null!==d&&(window.clearTimeout(d),d=null)}function b(){var e=document.getElementById(s);return null!==e&&(p(e),f(),!0)}function E(e,t){e.scroll,e.smooth;var a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["scroll","smooth"]);return i.default.createElement(t,l({},a,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===r(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(p=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===b()&&(null===m&&(m=new MutationObserver(b)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),d=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function v(e){return E(e,u.Link)}function h(e){return E(e,u.NavLink)}var y={onClick:o.default.func,children:o.default.node,scroll:o.default.func,to:o.default.oneOfType([o.default.string,o.default.object])};v.propTypes=y,h.propTypes=y},380:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=a(312),u=a.n(o),c=function(e){var t=e.type,a=e.value,n=e.color,r=e.disabled;return"button"===t?l.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:r},a):l.a.createElement("span",{className:"input-group-addon"},"icon"===t?l.a.createElement("i",{className:"material-icons"},a):a)},s=function(e){var t=e.icon;return l.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",l.a.createElement("i",{className:"material-icons"},t),"\n\t")},m=function(e){var t=e.id,a=e.type,r=e.placeholder,i=e.pattern,o=e.validate,m=e.required,d=e.defaultValue,p=e.autoComplete,f=e.disabled,b=e.readOnly,E=e.label,v=e.validationState,h=e.selectOptions,y=e.prefixValue,g=e.prefixType,k=e.prefixBtnColor,w=e.postfixValue,x=e.postfixType,T=e.postfixBtnColor,N=e.feedbackIcon,A=e.helpBlock,C=e.errorMessage,O=e.successMessage,P={type:a||null,className:"form-control",id:t||null,placeholder:r||null,defaultValue:d||"",disabled:f||null,readOnly:b||null,autoComplete:p||null,required:m||null,pattern:i?"":null,"data-validate":o?"":null},S=u()("input-group",v?"has-".concat(v):null,N?"has-feedback":null);return l.a.createElement("div",{className:"form-group"},"\n",E?l.a.createElement("label",{htmlFor:t},E):null,E?"\n":null,l.a.createElement("div",{className:S},"\n",y?l.a.createElement(c,{type:g,value:y,color:k,disabled:f}):null,y?"\n":null,"textarea"===a?l.a.createElement("textarea",P):"select"===a?l.a.createElement("select",{className:"form-control",disabled:f,readOnly:b},"\n\t\t",h.map(function(e,t){return l.a.createElement(n.Fragment,{key:e+t},l.a.createElement("option",null,e),t!==h.length-1?"\n\t\t":"")}),"\n\t"):l.a.createElement("input",P),"\n",N?l.a.createElement(s,{icon:N}):null," ",N?"\n":null,w?l.a.createElement(c,{type:x,value:w,color:T,disabled:f}):null,w?"\n":null),A?l.a.createElement("div",{className:"help-block","data-success":O||null,"data-error":C||null},A):null)};m.propTypes={type:i.a.string.isRequired,id:i.a.string,placeholder:i.a.string,pattern:i.a.string,validate:i.a.bool,required:i.a.bool,defaultValue:i.a.string,autoComplete:i.a.string,disabled:i.a.bool,readOnly:i.a.bool,label:i.a.string,validationState:i.a.oneOf(["success","error",""]),selectOptions:i.a.array,prefixValue:i.a.string,prefixType:i.a.oneOf(["button","icon",""]),prefixBtnColor:i.a.oneOf(["primary","secondary","danger"]),postfixValue:i.a.string,postfixType:i.a.oneOf(["button","icon",""]),postfixBtnColor:i.a.oneOf(["primary","secondary","danger"]),feedbackIcon:i.a.string,helpBlock:i.a.oneOfType([i.a.string,i.a.bool]),errorMessag:i.a.string,successMessag:i.a.string},t.b=m},385:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(65),i=a.n(r),o=function(e){var t=e.id,a=e.checked,n=e.disabled,r=e.label,i={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return l.a.createElement("div",{className:"checkbox"},"\n",l.a.createElement("input",i),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};o.propTypes={id:i.a.string,checked:i.a.bool,disabled:i.a.bool,label:i.a.string};var u=o,c=a(380),s=function(e){var t=e.format,a=e.time,n=e.min,r=e.max,i=e.months,o=e.value,u=e.label,s=e.prefixValue,m=e.prefixType,d=e.fulldate,p=e.mode,f=e.allowinput,b=e.required,E=e.id,v={className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":t||null,"data-datepicker-time":a||null,"data-datepicker-min":n||null,"data-datepicker-max":r||null,"data-datepicker-value":o||null,"data-datepicker-months":i||null,"data-datepicker-fulldate":d||null,"data-datepicker-mode":p||null,"data-datepicker-allowinput":f||null,"data-required":b||null,id:E};return u?l.a.createElement("div",{className:"form-group"},"\n",l.a.createElement("label",{htmlFor:E||null},u),"\n",l.a.createElement("div",{className:"input-group"},"\n",s?l.a.createElement(c.a,{type:m,value:s}):null,"\n",l.a.createElement("input",v),"\n")):l.a.createElement("input",v)};s.propTypes={format:i.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:i.a.bool,min:i.a.string,max:i.a.string,months:i.a.string,value:i.a.string,label:i.a.string,id:i.a.string,required:i.a.bool};var m=s,d=function(e){var t=e.text,a=e.label;return l.a.createElement("div",{className:"form-group"},"\n",a?l.a.createElement("label",null,a):null,a?"\n":null,l.a.createElement("span",{className:"form-control-text"},t),"\n")};d.propTypes={text:i.a.string.isRequired,label:i.a.string};var p=d,f=function(e){var t=e.id,a=e.checked,n=e.disabled,r=e.label,i={type:"radio",id:t||null,name:e.name||null,disabled:n||null,defaultChecked:a||null};return l.a.createElement("div",{className:"radio"},"\n",l.a.createElement("input",i),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};f.propTypes={id:i.a.string,name:i.a.string,checked:i.a.bool,disabled:i.a.bool,label:i.a.string};var b=f,E=function(e){var t=e.name,a=e.min,n=e.max,r=e.step,i=e.color,o=e.value,u=e.disabled,c=e.valueLabel,s=e.valueLabelPrefix,m=e.valueLabelPostfix,d=e.valueLabelPosition,p={type:"range",name:t,min:a,max:n,step:r,defaultValue:o,disabled:u};return l.a.createElement("div",{className:"rangeslider rangeslider-".concat(i||"brand"," label-").concat(d||"right")},"\n",l.a.createElement("input",p),c?"\n":null,c?l.a.createElement(function(){return l.a.createElement("output",{className:"value-label"},"\n\t\t",l.a.createElement("p",null,"\n\t\t\t",s?l.a.createElement("span",null,s):null,s?"\n\t\t\t":null,l.a.createElement("span",{"data-rs-value":!0},o),"\n\t\t\t",m?l.a.createElement("span",null,m):null,m?"\n\t\t":null),"\n\t")},null):null,c?"\n":null)};E.propTypes={name:i.a.string,min:i.a.number,max:i.a.number,step:i.a.number,color:i.a.oneOf(["brand","neutral","default"]),value:i.a.number,disabled:i.a.bool,valueLabel:i.a.bool,valueLabelPrefix:i.a.string,valueLabelPostfix:i.a.string,valueLabelPosition:i.a.string};var v=E,h=function(e){var t=e.id,a=e.checked,n=e.disabled,r=e.label,i={type:"checkbox",id:t||null,disabled:n||null,defaultChecked:a||null};return l.a.createElement("div",{className:"togglebox"},"\n",l.a.createElement("input",i),"\n",r?l.a.createElement("label",{htmlFor:t},r):null,r?"\n":null)};h.propTypes={id:i.a.string,checked:i.a.bool,disabled:i.a.bool,label:i.a.string};var y=h;a.d(t,"a",function(){return u}),a.d(t,"b",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return v}),a.d(t,"f",function(){return y})},397:function(e,t,a){"use strict";a.r(t),a.d(t,"AboutDatepickers",function(){return E}),a.d(t,"SimpleDatepicker",function(){return v}),a.d(t,"AllowInput",function(){return h}),a.d(t,"HumanReadable",function(){return g}),a.d(t,"InitialValue",function(){return y}),a.d(t,"CustomFormat",function(){return k}),a.d(t,"IncludeTime",function(){return w}),a.d(t,"ShowingMultipleMonths",function(){return x}),a.d(t,"ValidDates",function(){return T}),a.d(t,"DateRange",function(){return N}),a.d(t,"MultipleDates",function(){return A}),a.d(t,"Options",function(){return C}),a.d(t,"JavascriptMethods",function(){return O});var n=a(1),l=a.n(n),r=a(374),i=a(95),o=a(365),u=a(385),c=a(364);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=window.px.datepicker,E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"about-datepickers"},"About"),l.a.createElement("p",null,"Datepickers give a visual presentation of days, months and years. By utilizing the datepicker you can be assured the given input is in the format you expect without having to deal with too much client-side validation. Datepickers should be used for recent dates to avoid having the user click a lot of times to find the required date. If you need a date of birth or something similarly far back, an input field with proper validation will be easier to use."))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"simple-datepicker"},"Simple datepicker"),l.a.createElement("p",null,"A basic datepicker can be made by applying the attribute ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker"})," to an input element inside a ",l.a.createElement(o.Property,{value:".form-group"}),". The basic datepicker has a read-only input field."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simple-datepicker"})))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"allow-input"},"Allow input"),l.a.createElement("p",null,"By default datepickers do not allow input but you can use ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-allowinput"}),". When you allow input then the given date has to match the datepicker format (",l.a.createElement(o.Attribute,{value:"iso8601"})," if you have not specified a format)."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{label:"Date",prefixType:"icon",prefixValue:"event",id:"simple-datepicker",allowinput:!0})))},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"initial-value"},"Initial value"),l.a.createElement("p",null,"If you want to set an initial value for your datepicker use ",l.a.createElement(o.Attribute,{data:!0,value:"{your-date}",name:"datepicker-value"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"1972-12-28",label:"Date",prefixType:"icon",prefixValue:"event",id:"init-value-datepicker"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"human-readable"},"Human readable date"),l.a.createElement("p",null,"If you wish to make the date more readable to humans you can add ",l.a.createElement(o.Attribute,{data:!0,value:"true",name:"datepicker-fulldate"})),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"1972-12-28",label:"Date",prefixType:"icon",prefixValue:"event",fulldate:!0,id:"init-value-datepicker"})))},k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"custom-format"},"Custom format"),l.a.createElement("p",null,"To use a custom format include ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-format",value:"[nb|sv|da|fi|en|iso8601(default)]"}),". If no format is provided then datepicker will default to ",l.a.createElement(o.Attribute,{value:"iso8601"}),". Same behaviour applies if you try to set an invalid date."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{label:"nb (norwegian):",value:"28.12.1972",format:"nb",prefixType:"icon",prefixValue:"event",id:"nb-datepicker"}),l.a.createElement(u.b,{label:"sv (swedish):",value:"1972-12-28",format:"sv",prefixType:"icon",prefixValue:"event",id:"sv-datepicker"}),l.a.createElement(u.b,{label:"da (danish):",value:"28.12.1972",format:"da",prefixType:"icon",prefixValue:"event",id:"da-datepicker"}),l.a.createElement(u.b,{label:"fi (finnish):",value:"28.12.1972",format:"fi",prefixType:"icon",prefixValue:"event",id:"fi-datepicker"}),l.a.createElement(u.b,{label:"en (english):",value:"28/12/1972",format:"en",prefixType:"icon",prefixValue:"event",id:"en-datepicker"}),l.a.createElement(u.b,{label:"iso8601 (robotic):",value:"1972-12-28",format:"iso8601",prefixType:"icon",prefixValue:"event",id:"iso8601-datepicker"})))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"include-time"},"Include time"),l.a.createElement("p",null,"Adding time to your datepicker is as easy as using ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-time",value:"true"}),". If you wish to set a default time for the time picker just include it in the ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-value"})," attribute."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"28.12.1972 12:00",time:!0,format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"include-time-datepicker"})))},x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"showing-multiple-months"},"Showing multiple months"),l.a.createElement("p",null,"If you need to show more than one month in your date picker use the attribute ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-months",value:"{number}"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{months:"2",label:"Date",prefixType:"icon",prefixValue:"event",id:"multiple-months-datepicker"})))},T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"valid-dates"},"Valid dates"),l.a.createElement("p",null,"You can set a range of available dates to select from by using ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-min"})," and ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-max"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{value:"28.12.1972",min:"28.12.1972",max:"10.05.2017",format:"nb",label:"Date",prefixType:"icon",prefixValue:"event",id:"valid-dates-datepicker"})))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"date-range"},"Date range"),l.a.createElement("p",null,"You can make it possible to select a range of dates with ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker-mode",value:"range"}),"."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{min:"10.12.1972",label:"date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker",mode:"range",format:"nb"})))},A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"multiple-dates"},"Multiple dates"),l.a.createElement("p",null,"Set mode to ",l.a.createElement(o.Attribute,{value:"multiple"})," for multiple date selection."),l.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{min:"10.12.1972",label:"date",prefixType:"icon",prefixValue:"event",id:"date-range-datepicker",mode:"multiple",format:"nb"})),l.a.createElement(c.a,{type:"warning"},l.a.createElement("h5",null,"Max number of dates"),l.a.createElement("p",null,"The ",l.a.createElement(o.Attribute,{value:"multiple"})," variation of datepicker does not have an upper limit of dates. Use ",l.a.createElement(r.NavHashLink,{to:"#date-range"},"range")," if you want to select a continuous range of dates.")))},C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"available-options"},"Available options"),l.a.createElement("p",null,"Options available through ",l.a.createElement(o.Attribute,{data:!0,name:"datepicker"}),"...")," Keep in mind that setting any of these values will render them true, so setting an attribute to ",l.a.createElement(o.Attribute,{value:"false"})," will still render it true.",l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Attribute"),l.a.createElement("th",null,"Default value"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-value"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"null"})),l.a.createElement("td",null,"Value used to initialize calendar. Set this value with the same format currently set for the datepicker (including time if you have enabled that).")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-allowinput"})),l.a.createElement("td",null),l.a.createElement("td",null,"This allows the user to write in the input field. The dates given must match the format of the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-format"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"iso8601"})),l.a.createElement("td",null,l.a.createElement("p",null,"Format string used for the input field and names for days and months. All have the same time format (HH:mm), and starts the week on monday (1)."),l.a.createElement("p",null,"The following options are available:"),l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"nb"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"sv"}),": YYYY-MM-DD"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"da"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"fi"}),": DD.MM.YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"en"}),": DD/MM/YYYY"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"iso8601"}),": YYYY-MM-DD (default)")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-time"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"false"})),l.a.createElement("td",null,"If the calendar shows the current time and allows you to change it using a dropdown.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-months"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"1"})),l.a.createElement("td",null,"Number of months to display in the datepicker.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-min"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"null"})),l.a.createElement("td",null,"Disallow dates before min.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-max"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"null"})),l.a.createElement("td",null,"Disallow dates past max.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-altinput"})),l.a.createElement("td",null),l.a.createElement("td",null,"Use a custom format to display the selected date(s) shown in the input field.")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.Attribute,{data:!0,name:"datepicker-mode"})),l.a.createElement("td",null,l.a.createElement(o.Attribute,{value:"single"})),l.a.createElement("td",null,"Different variations of date selection. Available options are:",l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"single"}),"User can select one date"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"multiple"}),"User can select multiple dates"),l.a.createElement("li",{className:"mb-sm"},l.a.createElement(o.Attribute,{value:"range"}),"User can select a range of continuous dates")))))))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"javascript-methods"},"Javascript methods"),l.a.createElement("h4",null,l.a.createElement(o.PxScript,{component:"datepicker",func:"init"})),l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/docs/getting-started/javascript"},"Initializes")," datepickers."))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,p(t).apply(this,arguments))}var a,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n["Component"]),a=t,(r=[{key:"componentDidMount",value:function(){b.init()}},{key:"render",value:function(){return l.a.createElement(o.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Datepickers makes it easy to get dates from your users. With datepickers you do not have to worry about how your users write the given date, alleviating the need to do format validation."),l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(h,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(x,null),l.a.createElement(T,null),l.a.createElement(N,null),l.a.createElement(A,null),l.a.createElement(C,null),l.a.createElement(O,null))}}])&&m(a.prototype,r),i&&m(a,i),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?aa392eab6d52d93d0625