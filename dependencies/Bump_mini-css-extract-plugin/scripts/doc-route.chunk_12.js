(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[12,3,45,46,47,48,49,50,52],{422:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return l});var a=n(1),r=n.n(a),o=n(2),c=n.n(o),l=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},l.propTypes={value:c.a.string.isRequired},t.default=i},423:function(e,t,n){"use strict";var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,o=e.text,c=e.children;return l.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?l.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?l.a.createElement("p",null,o):null,c?"\n":"",c?l.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?l.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",l.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(423);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(423);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(o).a.string.isRequired},t.default=c},427:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(2),o=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,o=e.func,c=e.params;return r&&(n=r.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return l.a.createElement("span",{key:t},e,t<c.length-1?l.a.createElement("span",{className:"token punctuation"},", "):null)})),l.a.createElement("code",null,l.a.createElement("span",null,"px"),l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",null,a),l.a.createElement("span",{className:"token punctuation"},"."),n,l.a.createElement("span",{className:"token function"},o),l.a.createElement("span",{className:"token punctuation"},"("),t,l.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},428:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),o=n.n(r),p=n(432),c=n(433),f=n.n(c),d=n(434);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){var a=e.children,r=e.language,o=e.removeOuterTag,c=e.hideValue,l=e.removeList,t=e.showCasePanel,n=e.codeFigure,i=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},u=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&i)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=o?s(e):l?u(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=o?s(a):l?u(a):Object(p.renderToStaticMarkup)(a);else switch(y(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",m.a.createElement("figure",null,m.a.createElement(d.a,v({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",v({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",v({key:t},o({token:e,key:t})))}))}))}))},null):null)};l.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=l},431:function(e,t,n){"use strict";n.r(t);var a=n(422);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var o=n(429);n.d(t,"DocHeading",function(){return o.default});var c=n(430);n.d(t,"DocToc",function(){return c.default});var l=n(424);n.d(t,"DeprecatedComponentAlert",function(){return l.default});var i=n(425);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(426);n.d(t,"Icon",function(){return s.default});var u=n(427);n.d(t,"PxScript",function(){return u.default})},489:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(184),r=n(435),l=n.n(r),i=n(431),s=n(68),u=n(2),m=n.n(u),p=n(187),f=n.n(p);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=y(this,h(n).call(this,e))).state={active:"main-0",activeParent:null},t}var t,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(n,o["Component"]),t=n,(a=[{key:"setActive",value:function(e,t){e.preventDefault();var n=e.target.closest(".submenu");n?(this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),n.classList.add("submenu-active-parent"),this.setState({activeParent:n})):this.state.activeParent&&this.state.activeParent.classList.remove("submenu-active-parent"),this.setState({active:t})}},{key:"render",value:function(){var o=this,e=this.props,t=e.items,n=e.vertsize,a=e.widesize,r=f()("nav",n?"nav-".concat(n,"-vertical"):"",a?"nav-".concat(a,"-vertical-wide"):"");return c.a.createElement("nav",{className:r},c.a.createElement("ul",null,t.map(function(e,n){var t=e.name,a=e.icon,r=e.subItems;return c.a.createElement("li",{key:"nav-item-".concat(t,"-").concat(n)},"\n",r?c.a.createElement("div",{className:"submenu"},"\n",c.a.createElement("i",{className:"material-icons"},a),"\n",c.a.createElement("span",null,t),c.a.createElement("ul",null,r.map(function(e,t){return c.a.createElement("li",{key:"nav-subItems-".concat(e,"-").concat(t),className:o.state.active==="sub-".concat(n,"-").concat(t)?"active":null},c.a.createElement("a",{href:"#",onClick:function(e){return o.setActive(e,"sub-".concat(n,"-").concat(t))}},e))}))):c.a.createElement("a",{href:"#",onClick:function(e){return o.setActive(e,"main-".concat(n))},className:o.state.active==="main-".concat(n)?"active":null},"\n",c.a.createElement("i",{className:"material-icons"},a),"\n",c.a.createElement("span",null,t),"\n"),"\n")})))}}])&&v(t.prototype,a),r&&v(t,r),n}(),g=["xs","sm","md","lg","xl","xxl"];b.propTypes={items:m.a.array.isRequired,vertsize:m.a.oneOf(g),widesize:m.a.oneOf(g)};var w=b;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"StandardNav",function(){return _}),n.d(t,"TwoLevels",function(){return j}),n.d(t,"IconsOnly",function(){return x}),n.d(t,"Mix",function(){return L}),n.d(t,"Mobile",function(){return F}),n.d(t,"NavText",function(){return M});var C=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart"},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance"},{name:"Authentication",icon:"fingerprint"}],S=[{name:"Home",icon:"home"},{name:"Transactions",icon:"shopping_cart",subItems:["Purchase history","Invoice"]},{name:"Notifications",icon:"notification_important"},{name:"Language",icon:"language"},{name:"Account",icon:"account_balance",subItems:["Email","Information","Other things"]}],_=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"nav-standard"},"Standard nav"),c.a.createElement("p",null,"Add class ",c.a.createElement(i.Property,{value:".nav"})," and ",c.a.createElement(i.Property,{value:".nav-{desired_size}-vertical-wide"})," to a nav containing an ",c.a.createElement(l.a,{className:"language-html"},"<ul>")," to get a standard nav. Add ",c.a.createElement(l.a,{className:"language-html"},"<i>")," and ",c.a.createElement(l.a,{className:"language-html"},"<span>")," with your desired ",c.a.createElement(a.a,{to:"/docs/core/icons"},"icon")," and text. ",c.a.createElement(i.Property,{value:".nav-{desired_size}-vertical-wide"})," determines when your nav will switch from mobile view to vertical. If you have more than five icons then the first four icons will be the only visible ones in mobile view."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(w,{widesize:"lg",items:C})))},j=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"nav-twolevels"},"Two levels"),c.a.createElement("p",null,"You can also display another level of items in the standard nav. Just nest a ",c.a.createElement(l.a,{className:"language-html"},"<div>")," with class ",c.a.createElement(i.Property,{value:".submenu"})," containing an icon and text like the standard nav and add a new ",c.a.createElement(l.a,{className:"language-html"},"<ul>")," with ",c.a.createElement(l.a,{className:"language-html"},"<li>")," items. This level does not use icons. List items containing another level are not visible in responsive mode, they will be displayed when the items are expanded."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(w,{widesize:"lg",items:S})))},x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"nav-tablet"},"Icons only"),c.a.createElement("p",null,"To display only icons use class ",c.a.createElement(i.Property,{value:".nav-{desired_size}-vertical"}),". Like the first example, this determines when your ",c.a.createElement(i.Property,{value:".nav"})," will switch from mobile to icons only. In this mode it is possible to display another level of items."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(w,{vertsize:"md",items:S})))},L=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"nav-mix"},"Tablet and wide"),c.a.createElement("p",null,"You can also use both icons only and wide together."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(w,{vertsize:"md",widesize:"lg",items:S})))},F=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{id:"nav-mobile"},"Mobile nav"),c.a.createElement("p",null,"To only display mobile view use class ",c.a.createElement(i.Property,{value:".nav"})," alone."),c.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},c.a.createElement(w,{items:C})))},M=function(){return c.a.createElement("div",{className:"col-lg-10 doc-body"},c.a.createElement(i.ExperimentalComponentAlert,null),c.a.createElement("p",{className:"lead"},"Navs."),c.a.createElement(_,null),c.a.createElement(j,null),c.a.createElement(x,null),c.a.createElement(L,null),c.a.createElement(F,null))},A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,T(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(){s.nav.init()}},{key:"componentDidMount",value:function(){s.nav.init()}},{key:"render",value:function(){return c.a.createElement("div",{className:"doc-container"},c.a.createElement("div",{className:"row"},c.a.createElement(M,null),c.a.createElement(i.DocToc,{component:M})))}}])&&N(n.prototype,a),r&&N(n,r),t}();t.default=A}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?0d99b00edcacd4cfaac1