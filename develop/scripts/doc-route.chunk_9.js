(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[58,2,47,48,49,51,52,53,54],{371:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return i});var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},c=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};c.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},i.propTypes={value:l.a.string.isRequired},t.default=c},372:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,i=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,i?"\n":"",i?r.a.createElement("div",{className:"alert-body"},i):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};i.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=i},373:function(e,t,n){"use strict";n.r(t);var a=n(371);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(374);n.d(t,"ComponentPreview",function(){return r.default});var o=n(380);n.d(t,"DocContainer",function(){return o.default});var l=n(381);n.d(t,"DocHeading",function(){return l.default});var i=n(375);n.d(t,"DocToc",function(){return i.default});var c=n(376);n.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=n(377);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(378);n.d(t,"Icon",function(){return s.default});var p=n(379);n.d(t,"PxScript",function(){return p.default})},374:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=n(383),c=n(384),u=n.n(c),s=n(385);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,c=e.showCasePanel,f=e.codeFigure,d=e.dangerousHTML,y=function(e){var t=document.createElement("div");return t.innerHTML=Object(i.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},h=function(e){var t=document.createElement("div");t.innerHTML=Object(i.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,f?r.a.createElement(function(){var e="";if("html"===n&&d)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?y(t):l?h(t):Object(i.renderToStaticMarkup)(t)});else if("html"===n)e+=a?y(t):l?h(t):Object(i.renderToStaticMarkup)(t);else switch(m(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,p({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",p({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},l({token:e,key:t})))}))}))}))},null):null)};f.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=f},375:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=n(382);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,p(t).call(this,e))).state={headings:f(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(i.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,o),l&&u(n,l),t}();d.propTypes={component:l.a.func.isRequired},t.default=d},376:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(372);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},377:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(372);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},378:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},379:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,i=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),i&&(t=i.map(function(e,t){return r.a.createElement("span",{key:t},e,t<i.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};i.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=i},380:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=n(373),c=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(i.DocToc,{component:a}):null))};c.propTypes={docToc:l.a.bool},t.default=c},382:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=h,t.HashLink=b,t.NavHashLink=g;var l=u(n(1)),i=u(n(65)),c=n(96);function u(e){return e&&e.__esModule?e:{default:e}}var s="",p=null,m=null,f=null;function d(){s="",null!==p&&p.disconnect(),null!==m&&(window.clearTimeout(m),m=null)}function y(){var e=document.getElementById(s);return null!==e&&(f(e),d(),!0)}function h(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return l.default.createElement(t,r({},n,{onClick:function(t){d(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===o(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(f=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===y()&&(null===p&&(p=new MutationObserver(y)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),m=window.setTimeout(function(){d()},1e4))},0))}}),e.children)}function b(e){return h(e,c.Link)}function g(e){return h(e,c.NavLink)}var v={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};b.propTypes=v,g.propTypes=v},386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(387);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},387:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),i=(r=l)&&r.__esModule?r:{default:r},c=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a._handleRefMount=function(e){a._domNode=e},u(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();s.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},s.defaultProps={component:"code"},t.default=s},388:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(1),r=n.n(a),o=n(65),l=n.n(o),i=n(317),c=n.n(i),u=function(e){var t=e.type,n=e.value,a=e.color,o=e.disabled;return"button"===t?r.a.createElement("button",{type:"button",className:"btn btn-".concat(a),disabled:o},n):r.a.createElement("span",{className:"input-group-addon"},"icon"===t?r.a.createElement("i",{className:"material-icons"},n):n)},s=function(e){var t=e.icon;return r.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",r.a.createElement("i",{className:"material-icons"},t),"\n\t")},p=function(e){var t=e.id,n=e.type,o=e.placeholder,l=e.pattern,i=e.validate,p=e.required,m=e.defaultValue,f=e.autoComplete,d=e.disabled,y=e.readOnly,h=e.label,b=e.validationState,g=e.selectOptions,v=e.prefixValue,E=e.prefixType,w=e.prefixBtnColor,k=e.postfixValue,x=e.postfixType,T=e.postfixBtnColor,N=e.feedbackIcon,O=e.helpBlock,P=e.errorMessage,C=e.successMessage,S={type:n||null,className:"form-control",id:t||null,placeholder:o||null,defaultValue:m||"",disabled:d||null,readOnly:y||null,autoComplete:f||null,required:p||null,pattern:l?"":null,"data-validate":i?"":null},_=c()("input-group",b?"has-".concat(b):null,N?"has-feedback":null);return r.a.createElement("div",{className:"form-group"},"\n",h?r.a.createElement("label",{htmlFor:t},h):null,h?"\n":null,r.a.createElement("div",{className:_},"\n",v?r.a.createElement(u,{type:E,value:v,color:w,disabled:d}):null,v?"\n":null,"textarea"===n?r.a.createElement("textarea",S):"select"===n?r.a.createElement("select",{className:"form-control",disabled:d,readOnly:y},"\n\t\t",g.map(function(e,t){return r.a.createElement(a.Fragment,{key:e+t},r.a.createElement("option",null,e),t!==g.length-1?"\n\t\t":"")}),"\n\t"):r.a.createElement("input",S),"\n",N?r.a.createElement(s,{icon:N}):null," ",N?"\n":null,k?r.a.createElement(u,{type:x,value:k,color:T,disabled:d}):null,k?"\n":null),O?r.a.createElement("div",{className:"help-block","data-success":C||null,"data-error":P||null},O):null)};p.propTypes={type:l.a.string.isRequired,id:l.a.string,placeholder:l.a.string,pattern:l.a.string,validate:l.a.bool,required:l.a.bool,defaultValue:l.a.string,autoComplete:l.a.string,disabled:l.a.bool,readOnly:l.a.bool,label:l.a.string,validationState:l.a.oneOf(["success","error",""]),selectOptions:l.a.array,prefixValue:l.a.string,prefixType:l.a.oneOf(["button","icon",""]),prefixBtnColor:l.a.oneOf(["primary","secondary","danger"]),postfixValue:l.a.string,postfixType:l.a.oneOf(["button","icon",""]),postfixBtnColor:l.a.oneOf(["primary","secondary","danger"]),feedbackIcon:l.a.string,helpBlock:l.a.oneOfType([l.a.string,l.a.bool]),errorMessag:l.a.string,successMessag:l.a.string},t.b=p},408:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicExample",function(){return d}),n.d(t,"CheckboxesAndRadios",function(){return y}),n.d(t,"ButtonAddons",function(){return h}),n.d(t,"WithSelect",function(){return b}),n.d(t,"WithFeedbackIcon",function(){return g}),n.d(t,"ValidationStates",function(){return v}),n.d(t,"Disabled",function(){return E});var a=n(1),r=n.n(a),o=n(373),l=n(386),i=n.n(l),c=n(388);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"basic-example"},"Basic example"),r.a.createElement("p",null,"Add a ",r.a.createElement(i.a,{className:"language-html"},"<span>")," with class ",r.a.createElement(o.Property,{value:".input-group-addon"})," to get a gray box on the left, right or both sides of an ",r.a.createElement(i.a,{className:"language-html"},"<input>")," element. The position of your ",r.a.createElement(o.Property,{value:".input-group-addon"})," depends on if you place it before or after the ",r.a.createElement(i.a,{className:"language-html"},"<input")," element."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(c.b,{id:"input-id-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr."})," ","\n\n",r.a.createElement(c.b,{id:"input-id-2",type:"text",label:"Email",placeholder:"Email",prefixType:"icon",prefixValue:"email"})," ","\n\n",r.a.createElement(c.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"})," ","\n\n",r.a.createElement(c.b,{id:"input-id-4",type:"textarea",label:"Notes",placeholder:"Special requests",prefixType:"icon",prefixValue:"format_quote"})))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),r.a.createElement("p",null,"Place any checkbox or radio option within an input group’s addon instead of text."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},"\n",r.a.createElement("span",{className:"input-group-addon"},"\n\t\t",r.a.createElement("input",{type:"checkbox"}),"\n\t"),"\n",r.a.createElement("input",{type:"text",className:"form-control"}),"\n")),"\n\n",r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},"\n",r.a.createElement("span",{className:"input-group-addon"},"\n\t\t",r.a.createElement("input",{type:"radio"}),"\n\t"),"\n",r.a.createElement("input",{type:"text",className:"form-control"}),"\n"))))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"button-addons"},"Button addons"),r.a.createElement("p",null,"If you want ",r.a.createElement(i.a,{className:"language-html"},"<button>"),"s included with your input elements you can just add a ",r.a.createElement(i.a,{className:"language-html"},"<button>")," inside a input-group like you would anywhere else."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement(c.b,{type:"text",postfixType:"button",postfixValue:"Button",postfixBtnColor:"primary"})," ","\n\n",r.a.createElement(c.b,{type:"text",prefixType:"button",prefixValue:"Button",prefixBtnColor:"secondary",postfixType:"button",postfixValue:"Button",postfixBtnColor:"danger"})))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"with-select"},"With select"),r.a.createElement("p",null,"Inserting text next to a ",r.a.createElement(i.a,{className:"language-html"},"<select>")," works just like any other input element."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement(c.b,{type:"select",selectOptions:["Bounty hunter","Smuggler","Jedi"],prefixValue:"Profession"})))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"with-feedback"},"With feedback"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement(c.b,{id:"input-with-feedback-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr.",feedbackIcon:"cancel"})))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"validation-states"},"Validation states"),r.a.createElement("p",null,"You can also visualize validation on your input-groups. Just add ",r.a.createElement(o.Property,{value:".has-success"})," or ",r.a.createElement(o.Property,{value:".has-error"})," with a ",r.a.createElement(o.Property,{value:".input-group"}),"."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement(c.b,{type:"text",validationState:"success",placeholder:"Name",prefixValue:"Mr.",defaultValue:"Anderson"})," ","\n\n",r.a.createElement(c.b,{type:"text",validationState:"error",placeholder:"Name",prefixValue:"Agent",defaultValue:"Smith"})))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"disabled"},"Disabled"),r.a.createElement("p",null,"Just like for forms you can add ",r.a.createElement(o.Attribute,{name:"disabled"})," to an input element to disable it. If you are going to disable an element in a ",r.a.createElement(o.Property,{value:".input-group"})," make sure to also add the ",r.a.createElement(o.Attribute,{name:"disabled"})," attribute to the buttons."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},r.a.createElement(c.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",disabled:!0,prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"}),r.a.createElement(c.b,{type:"text",disabled:!0,prefixType:"button",prefixValue:"Button",prefixBtnColor:"secondary",postfixType:"button",postfixValue:"Button",postfixBtnColor:"danger"})))},w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"You can include additional information to specific input elements by adding ",r.a.createElement(i.a,{className:"language-html"},"<span>"),"s or ",r.a.createElement(i.a,{className:"language-html"},"<button>"),"s in a ",r.a.createElement(o.Property,{value:".input-group"}),"."),r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(E,null))}}])&&s(n.prototype,l),c&&s(n,c),t}();t.default=w}}]);
//# sourceMappingURL=doc-route.chunk_9.js.map?ef9d593efc9abb95b48d