(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[19,3,5,46,47,48,49,50,52],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(1),r=n.n(a),l=n(2),c=n.n(l),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},s=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};s.propTypes={name:c.a.string,value:c.a.string,data:c.a.bool},o.propTypes={value:c.a.string.isRequired},t.default=s},421:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,c=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?o.a.createElement("p",null,l):null,c?"\n":"",c?o.a.createElement("div",{className:"alert-body"},c):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},422:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};c.propTypes={icon:n.n(l).a.string.isRequired},t.default=c},425:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),l=n.n(r),c=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,c=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return o.a.createElement("span",{key:t},e,t<c.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},l),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),c=n.n(l),o=n(427),s=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(o.DocToc,{component:a}):null))};s.propTypes={docToc:c.a.bool},t.default=s},427:function(e,t,n){"use strict";n.r(t);var a=n(420);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var l=n(426);n.d(t,"DocContainer",function(){return l.default});var c=n(429);n.d(t,"DocHeading",function(){return c.default});var o=n(430);n.d(t,"DocToc",function(){return o.default});var s=n(422);n.d(t,"DeprecatedComponentAlert",function(){return s.default});var u=n(423);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=n(424);n.d(t,"Icon",function(){return i.default});var m=n(425);n.d(t,"PxScript",function(){return m.default})},428:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),l=n.n(r),p=n(431),c=n(432),f=n.n(c),d=n(433);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var a=e.children,r=e.language,l=e.removeOuterTag,c=e.hideValue,o=e.removeList,t=e.showCasePanel,n=e.codeFigure,s=e.dangerousHTML,u=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},i=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&s)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=l?u(e):o?i(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=l?u(a):o?i(a):Object(p.renderToStaticMarkup)(a);else switch(v(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=f.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),c&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=f.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return d.b.style="",m.a.createElement("figure",null,m.a.createElement(d.a,E({},d.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",E({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",E({key:t},l({token:e,key:t})))}))}))}))},null):null)};o.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=o},498:function(e,t,n){"use strict";n.r(t);var l=n(1),s=n.n(l),a=n(434),r=n.n(a),c=n(427),o=n(2),u=n.n(o),i=n(187),m=n.n(i),p=[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0},{title:"Step three",selected:!0},{title:"Step four"}],f=function(e){var t=e.completed,n=e.subtitle,a=e.title;return s.a.createElement(s.a.Fragment,null,t?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"material-icons steps-icon"},"check"),"\n"):null,a,n?s.a.createElement(s.a.Fragment,null,"\n",s.a.createElement("div",{className:"steps-sub-title"},n)):null)},d=function(e){var t=e.steps;return s.a.createElement(s.a.Fragment,null,t.map(function(e,t){var n=e.title,a=e.subtitle,r=e.completed,l=e.ongoing,c=e.selected,o=e.clickable;return s.a.createElement("li",{key:t,className:m()(r?"steps-completed":null,l?"steps-ongoing":null,c?"steps-selected":null)},o?s.a.createElement(s.a.Fragment,null,"\n"," ",s.a.createElement("a",null,s.a.createElement(f,{completed:r,subtitle:a,title:n}))," ","\n"," "):s.a.createElement(f,{completed:r,subtitle:a,title:n}))}))},E=function(e){var t=e.steps;if(!t)return null;var n=t.some(function(e){return e.clickable}),a=n?s.a.createElement("div",{className:"material-icons steps-nav-left"},"keyboard_arrow_left"):null,r=n?s.a.createElement("div",{className:"material-icons steps-nav-right"},"keyboard_arrow_right"):null;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"steps-responsive"},a,s.a.createElement("div",{className:"steps-responsive-text"},"Step 3"),r))},v=function(e){var t=e.steps,n=e.vertical,a=m()("steps",n?"steps-vertical":null);return s.a.createElement("div",{className:a},s.a.createElement("ol",null,t?s.a.createElement(d,{steps:t}):s.a.createElement(d,{steps:p})),s.a.createElement(E,{steps:t}))};v.propTypes={steps:u.a.array,vertical:u.a.bool,clickable:u.a.bool};var g=v;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"BasicSteps",function(){return S}),n.d(t,"VerticalSteps",function(){return w}),n.d(t,"ClickableSteps",function(){return T});var S=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"basic-usage"},"Basic usage"),s.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(g,{steps:[{title:"Step one",subtitle:"24.12.17 12:10",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}]})))},w=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"vertical-steps"},"Vertical steps"),s.a.createElement("p",null,"Add ",s.a.createElement(c.Property,{value:".steps-vertical"})," to the ",s.a.createElement(r.a,{className:"language-html"},"<DocContainer>")," element."),s.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(g,{steps:[{title:"Step one",completed:!0},{title:"Step two",ongoing:!0,selected:!0},{title:"Step three"},{title:"Step four"}],vertical:!0})))},T=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{id:"clickable-steps"},"Clickable steps"),s.a.createElement("p",null,"Add an anchor element (",s.a.createElement(r.a,{className:"language-html"},"<a>"),") to the list item element ( ",s.a.createElement(r.a,{className:"language-html"},"<li>"),"). Ensure that all content within the list element is also inside the anchor element."),s.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},s.a.createElement(g,{steps:[{title:"Step one",completed:!0,clickable:!0},{title:"Step two",ongoing:!0,clickable:!0},{title:"Step three",clickable:!0},{title:"Step four",selected:!0},{title:"Step Five"},{title:"Step Six"}]})))},C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,k(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,l["Component"]),n=t,(a=[{key:"render",value:function(){return s.a.createElement(c.DocContainer,{docToc:!0},s.a.createElement("p",{className:"lead"},"Steps."),s.a.createElement(S,null),s.a.createElement(w,null),s.a.createElement(T,null))}}])&&y(n.prototype,a),r&&y(n,r),t}();t.default=C}}]);
//# sourceMappingURL=doc-route.chunk_18.js.map?c1c9209eda68de60935d