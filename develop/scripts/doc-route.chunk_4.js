(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[42,3,44,45,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},423:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(422);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},426:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(a=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},427:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(2),l=a.n(r),p=a(431),o=a(432),d=a.n(o),E=a(433);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var n=e.children,r=e.language,l=e.removeOuterTag,o=e.hideValue,c=e.removeList,t=e.showCasePanel,a=e.codeFigure,u=e.dangerousHTML,i=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},m=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return s.a.createElement(s.a.Fragment,null,t?s.a.createElement(function(){return s.a.createElement("div",{className:"showcase-panel"},n)},null):null,a?s.a.createElement(function(){var e,t,a="";if("html"===r&&u)t="","function"==typeof(e=n).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,a=t;else if("html"===r&&n&&"function"==typeof n.map)n.map(function(e){a+=l?i(e):c?m(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)a+=l?i(n):c?m(n):Object(p.renderToStaticMarkup)(n);else switch(g(n)){case"string":a=n;break;case"object":n.forEach(function(e){return a+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":a=(a=d.a.html_beautify(a)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(a=a.replace(/ value="(.*)"/g,""));break;case"css":a=d.a.css(a);break;case"javascript":break;default:return"update switchcase!"}return E.b.style="",s.a.createElement("figure",null,s.a.createElement(E.a,b({},E.b,{theme:void 0,code:a,language:r}),function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,l=e.getTokenProps;return s.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return s.a.createElement("div",b({key:e+t},r({line:e,key:t})),e.map(function(e,t){return s.a.createElement("span",b({key:t},l({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(427);a.d(t,"ComponentPreview",function(){return r.default});var l=a(428);a.d(t,"DocHeading",function(){return l.default});var o=a(429);a.d(t,"DocToc",function(){return o.default});var c=a(423);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=a(425);a.d(t,"Icon",function(){return i.default});var m=a(426);a.d(t,"PxScript",function(){return m.default})},436:function(e,t,a){"use strict";var n=a(1),h=a.n(n),r=a(2),l=a.n(r),o=a(186),w=a.n(o);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.label,a=e.id,n=e.name,r=e.value,l=e.href,o=e.icon,c=e.loading,u=e.type,i=e.disabled,m=e.btnType,s=e.fullWidth,p=e.loader,d=e.pullRight,E=e.input,b=e.outline,g=e.active,y=e.size,f=w()("btn","btn-".concat(b?"outline-":"").concat(u),y?"btn-".concat(y):null,c?"loading":null,s?"btn-block":null,d?"pull-right":null,g?"active":null),v={href:l,id:a,name:n,disabled:i,"data-button-loader":p?"":null,defaultValue:r};return l?v.role="button":v.type=m||"button",l?h.a.createElement("a",P({className:f},v),o?"\n\t":null,o?h.a.createElement("i",{className:"material-icons"},o):null,o&&t?h.a.createElement("span",null,t):t):E?h.a.createElement("input",P({className:f},v)):h.a.createElement("button",P({className:f},v),o?"\n\t\t":null,o?h.a.createElement("i",{className:"material-icons"},o):null,o?"\n\t\t":null,o&&t?h.a.createElement("span",null,t):t,o?"\n\t":null)};c.propTypes={type:l.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:l.a.string,id:l.a.string,name:l.a.string,value:l.a.string,href:l.a.string,icon:l.a.string,loading:l.a.bool,disabled:l.a.bool,btnType:l.a.string,fullWidth:l.a.bool,loader:l.a.bool,pullRight:l.a.bool,input:l.a.bool,outline:l.a.bool,active:l.a.bool,size:l.a.oneOf(["lg","sm","xs"])},t.a=c},455:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return g}),a.d(t,"UsageWithOtherTags",function(){return y}),a.d(t,"OutlineButtons",function(){return f}),a.d(t,"Sizes",function(){return h}),a.d(t,"ActiveState",function(){return w}),a.d(t,"DisabledState",function(){return P}),a.d(t,"UsageWithIcons",function(){return N}),a.d(t,"ButtonLoader",function(){return k}),a.d(t,"ButtonsText",function(){return T}),a.d(t,"ButtonGroup",function(){return v});var l=a(1),o=a.n(l),n=a(183),r=a(434),c=a.n(r),u=a(430),i=a(436),m=a(67);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"examples"},"Examples"),o.a.createElement("p",null,"Several button styles etc..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{type:"danger",label:"Danger"}),"\n",o.a.createElement(i.a,{type:"link",label:"Link"}),"\n")))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),o.a.createElement("p",null,"The ",o.a.createElement(u.Property,{value:".btn"})," class can also be used with other html-tags like ",o.a.createElement(c.a,{className:"language-html"},"<a>")," or ",o.a.createElement(c.a,{className:"language-html"},"<input>"),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Anchor",href:"#"}),"\n",o.a.createElement(i.a,{type:"primary",label:"Button"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),o.a.createElement("p",null,"Several button styles etc...",o.a.createElement(u.Property,{value:".btn-outline-{variant}"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-group"},"Using buttons together"),o.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",o.a.createElement(u.Property,{value:".button-group"}),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Activate"}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Disable"}),"\n",o.a.createElement(i.a,{type:"danger",label:"Delete"}),"\n")))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"Several button sizes etc..."),o.a.createElement("h3",null,"Large buttons"),o.a.createElement("p",null,"...",o.a.createElement(u.Property,{value:".btn-lg"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"lg",type:"primary",label:"Large button"}),"\n",o.a.createElement(i.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),o.a.createElement("h3",null,"Small buttons"),o.a.createElement("p",null,"...",o.a.createElement(u.Property,{value:".btn-sm"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"sm",type:"primary",label:"Small button"}),"\n",o.a.createElement(i.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),o.a.createElement("h3",null,"Extra small buttons"),o.a.createElement("p",null,"...",o.a.createElement(u.Property,{value:".btn-xs"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",o.a.createElement(i.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),o.a.createElement("h3",null,"Block level"),o.a.createElement("p",null,"...",o.a.createElement(u.Property,{value:".btn-block"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",o.a.createElement(i.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"active-state"},"Active state"),o.a.createElement("p",null,"Active state with ",o.a.createElement(u.Property,{value:".active"}),"..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{active:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{active:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{active:!0,type:"danger",label:"Danger"}),"\n")))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-state"},"Disabled state"),o.a.createElement("p",null,"Disabled state with ",o.a.createElement(u.Attribute,{name:"disabled"}),"..."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),o.a.createElement("p",null,"To use a button with an icon... Read more about icon usage here ",o.a.createElement(n.a,{to:"/docs/core/icons"},"here"),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",o.a.createElement(i.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n")))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-loader"},"Button loader"),o.a.createElement("p",null,"To use a button with a loader simply add the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",o.a.createElement(u.Property,{value:".loading"})," to display the loader."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("p",null,"With ",o.a.createElement(u.Property,{value:"disabled"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("p",null,"With ",o.a.createElement(u.Property,{value:".outline"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("p",null,"Adding the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),o.a.createElement(u.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",o.a.createElement("div",{className:"loader"},"\n\t\t",o.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),o.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you ",o.a.createElement("b",null,"don","'","t")," add the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"}),"."))},T=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Use buttons..."),o.a.createElement(g,null),o.a.createElement(y,null),o.a.createElement(f,null),o.a.createElement(v,null),o.a.createElement(h,null),o.a.createElement(w,null),o.a.createElement(P,null),o.a.createElement(N,null),o.a.createElement(k,null))},C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,E(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,l["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(T,null),o.a.createElement(u.DocToc,{component:T})))}}])&&p(a.prototype,n),r&&p(a,r),t}();t.default=C}}]);
//# sourceMappingURL=doc-route.chunk_4.js.map?6a75f3662be41a2fa447