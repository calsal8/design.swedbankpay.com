(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[42,3,44,45,46,47,48,49,51],{421:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),l=a.n(n),r=a(2),o=a.n(r),c=function(e){var t=e.value;return l.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?l.a.createElement("code",null,t?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},a)):!a&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},422:function(e,t,a){"use strict";var n=a(1),c=a.n(n),l=a(2),r=a.n(l),o=function(e){var t=e.id,a=e.type,n=e.icon,l=e.close,r=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?c.a.createElement("p",null,r):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},t.a=o},423:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},424:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(422);t.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},425:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(2),o=function(e){var t=e.icon;return l.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(r).a.string.isRequired},t.default=o},426:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(2),r=a.n(l),o=function(e){var t,a,n=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(a=l.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},t.default=o},427:function(e,t,a){"use strict";a.r(t);var n=a(1),m=a.n(n),l=a(2),r=a.n(l),d=a(431),o=a(432),p=a.n(o),b=a(433);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var n=e.children,l=e.language,r=e.removeOuterTag,o=e.hideValue,c=e.removeList,t=e.showCasePanel,a=e.codeFigure,u=e.dangerousHTML,i=function(e){var t=document.createElement("div");return t.innerHTML=Object(d.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var t=document.createElement("div");t.innerHTML=Object(d.renderToStaticMarkup)(e);var a=t.querySelectorAll("li"),n="";return a.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},n)},null):null,a?m.a.createElement(function(){var e,t,a="";if("html"===l&&u)t="","function"==typeof(e=n).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,a=t;else if("html"===l&&n&&"function"==typeof n.map)n.map(function(e){a+=r?i(e):c?s(e):Object(d.renderToStaticMarkup)(e)});else if("html"===l)a+=r?i(n):c?s(n):Object(d.renderToStaticMarkup)(n);else switch(E(n)){case"string":a=n;break;case"object":n.forEach(function(e){return a+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(l){case"html":a=(a=p.a.html_beautify(a)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(a=a.replace(/ value="(.*)"/g,""));break;case"css":a=p.a.css(a);break;case"javascript":break;default:return"update switchcase!"}return b.b.style="",m.a.createElement("figure",null,m.a.createElement(b.a,g({},b.b,{theme:void 0,code:a,language:l}),function(e){var t=e.className,a=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return m.a.createElement("pre",{className:t,style:a},n.map(function(e,t){return m.a.createElement("div",g({key:e+t},l({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",g({key:t},r({token:e,key:t})))}))}))}))},null):null)};c.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},t.default=c},430:function(e,t,a){"use strict";a.r(t);var n=a(421);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var l=a(427);a.d(t,"ComponentPreview",function(){return l.default});var r=a(428);a.d(t,"DocHeading",function(){return r.default});var o=a(429);a.d(t,"DocToc",function(){return o.default});var c=a(423);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=a(424);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=a(425);a.d(t,"Icon",function(){return i.default});var s=a(426);a.d(t,"PxScript",function(){return s.default})},436:function(e,t,a){"use strict";var n=a(1),v=a.n(n),l=a(2),r=a.n(l),o=a(186),w=a.n(o);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.label,a=e.id,n=e.name,l=e.value,r=e.href,o=e.icon,c=e.loading,u=e.type,i=e.disabled,s=e.btnType,m=e.fullWidth,d=e.loader,p=e.pullRight,b=e.input,g=e.outline,E=e.active,y=e.size,h=w()("btn","btn-".concat(g?"outline-":"").concat(u),y?"btn-".concat(y):null,c?"loading":null,m?"btn-block":null,p?"pull-right":null,E&&r?"active":null,i&&r?"disabled":null),f={href:r,id:a,name:n,defaultValue:l,disabled:r?null:i,"data-button-loader":d?"":null,active:E&&!r?"":null,role:r?"button":null,type:r?null:s||"button","aria-pressed":!!E||null,"aria-disabled":!(!r||!i)||null,tabIndex:r&&i?"-1":null};return r?v.a.createElement("a",P({className:h},f),o?"\n\t":null,o?v.a.createElement("i",{className:"material-icons"},o):null,o&&t?v.a.createElement("span",null,t):t):b?v.a.createElement("input",P({className:h},f)):v.a.createElement("button",P({className:h},f),o?"\n\t\t":null,o?v.a.createElement(v.a.Fragment,null,v.a.createElement("i",{className:"material-icons"},o),"\n\t\t"):null,t,o?"\n\t":null)};c.propTypes={type:r.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},t.a=c},455:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return y}),a.d(t,"UsageWithOtherTags",function(){return h}),a.d(t,"OutlineButtons",function(){return f}),a.d(t,"ButtonGroup",function(){return v}),a.d(t,"Sizes",function(){return w}),a.d(t,"ActiveState",function(){return P}),a.d(t,"DisabledState",function(){return k}),a.d(t,"UsageWithIcons",function(){return N}),a.d(t,"ButtonLoader",function(){return T}),a.d(t,"ButtonsText",function(){return C});var r=a(1),o=a.n(r),n=a(183),l=a(434),c=a.n(l),u=a(430),i=a(436),s=a(422),m=a(67);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"examples"},"Examples"),o.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{type:"danger",label:"Danger"}),"\n",o.a.createElement(i.a,{type:"link",label:"Link"}),"\n")))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),o.a.createElement("p",null,"The ",o.a.createElement(u.Property,{value:".btn"})," classes are designed to be used with the ",o.a.createElement(c.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",o.a.createElement(c.a,{className:"language-html"},"<a>")," or ",o.a.createElement(c.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),o.a.createElement("p",null,"When using button classes on ",o.a.createElement(c.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",o.a.createElement(u.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Anchor",href:"#"}),"\n",o.a.createElement(i.a,{type:"primary",label:"Button"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",o.a.createElement(i.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),o.a.createElement("p",null,"Replace the default modifier classes with the ",o.a.createElement(u.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-group"},"Using buttons together"),o.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",o.a.createElement(u.Property,{value:".button-group"}),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Activate"}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Disable"}),"\n",o.a.createElement(i.a,{type:"danger",label:"Delete"}),"\n")))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"For a different sized button add ",o.a.createElement(u.Property,{value:".btn-lg"}),", ",o.a.createElement(u.Property,{value:".btn-sm"})," or ",o.a.createElement(u.Property,{value:".btn-xs"}),"."),o.a.createElement("h3",null,"Large"),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"lg",type:"primary",label:"Large button"}),"\n",o.a.createElement(i.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),o.a.createElement("h3",null,"Small"),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"sm",type:"primary",label:"Small button"}),"\n",o.a.createElement(i.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),o.a.createElement("h3",null,"Extra small"),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",o.a.createElement(i.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),o.a.createElement("h3",null,"Block level"),o.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",o.a.createElement(u.Property,{value:".btn-block"}),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",o.a.createElement(i.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"active-state"},"Active state"),o.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",o.a.createElement("b",null,"There’s no need to add a class to ",o.a.createElement(c.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",o.a.createElement(u.Property,{value:".active"})," (and include the ",o.a.createElement(u.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{href:"#",active:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{href:"#",active:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{href:"#",active:!0,type:"danger",label:"Danger"}),"\n")))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-state"},"Disabled state"),o.a.createElement("p",null,"Make buttons look inactive by adding the ",o.a.createElement(u.Attribute,{name:"disabled"})," boolean attribute to any ",o.a.createElement(c.a,{className:"language-html"},"<button>")," element."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")),o.a.createElement("p",null,"Disabled buttons using the ",o.a.createElement(c.a,{className:"language-html"},"<a>")," element behave a bit different:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{className:"language-html"},"<a>"),"s do not support the ",o.a.createElement(u.Attribute,{name:"disabled"}),"attribute, so you must add the ",o.a.createElement(u.Property,{value:".disabled"})," class to make it visually appear disabled."),o.a.createElement("li",null,"Some future-friendly styles are included to disable all ",o.a.createElement(u.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),o.a.createElement("li",null,"Disabled buttons should include the ",o.a.createElement(u.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{href:"#",disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(i.a,{href:"#",disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{href:"#",disabled:!0,type:"danger",label:"Danger"}),"\n")),o.a.createElement(s.a,{type:"warning"},o.a.createElement("h5",null,"Link functionality caveat"),o.a.createElement("p",null,"The ",o.a.createElement(u.Property,{value:".disabled"})," class uses ",o.a.createElement(u.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",o.a.createElement(c.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",o.a.createElement(u.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",o.a.createElement(u.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),o.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",o.a.createElement(c.a,{className:"language-html"},"<button>"),"."),o.a.createElement("p",null,"Read more about icon usage here ",o.a.createElement(n.a,{to:"/docs/core/icons"},"here"),"."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",o.a.createElement(i.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n",o.a.createElement(i.a,{icon:"cloud",type:"danger",label:"Danger"}),"\n")))},T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-loader"},"Button loader"),o.a.createElement("p",null,"To use a button with a loader simply add the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",o.a.createElement(u.Property,{value:".loading"})," to display the loader."),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"Disabled loader"),o.a.createElement("p",null,o.a.createElement(u.Property,{value:".loading"})," with ",o.a.createElement(u.Attribute,{name:"disabled"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{disabled:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{disabled:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{disabled:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"Outline loader"),o.a.createElement("p",null,o.a.createElement(u.Property,{value:".loading"})," with ",o.a.createElement(u.Property,{value:".outline"})),o.a.createElement(u.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(i.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(i.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"The markup"),o.a.createElement("p",null,"Adding the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),o.a.createElement(u.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",o.a.createElement("div",{className:"loader"},"\n\t\t",o.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),o.a.createElement(s.a,{type:"warning"},o.a.createElement("h5",null,"Including the loader html"),o.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you do ",o.a.createElement("b",null,"not")," add the attribute ",o.a.createElement(u.Attribute,{data:!0,name:"button-loader"}),".")))},C=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),o.a.createElement(y,null),o.a.createElement(h,null),o.a.createElement(f,null),o.a.createElement(v,null),o.a.createElement(w,null),o.a.createElement(P,null),o.a.createElement(k,null),o.a.createElement(N,null),o.a.createElement(T,null))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,g(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(C,null),o.a.createElement(u.DocToc,{component:C})))}}])&&p(a.prototype,n),l&&p(a,l),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_4.js.map?62323dfd4494f61a3006