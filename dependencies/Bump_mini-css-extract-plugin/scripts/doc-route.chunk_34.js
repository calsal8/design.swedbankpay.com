(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[36,3,45,46,47,48,49,50,52],{422:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return o});var a=n(1),r=n.n(a),c=n(2),l=n.n(c),o=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},o.propTypes={value:l.a.string.isRequired},t.default=u},423:function(e,t,n){"use strict";var a=n(1),o=n.n(a),r=n(2),c=n.n(r),l=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,c=e.text,l=e.children;return o.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?o.a.createElement("i",{className:"material-icons alert-icon"},a):null,c?"\n":"",c?o.a.createElement("p",null,c):null,l?"\n":"",l?o.a.createElement("div",{className:"alert-body"},l):null,r?"\n":"",r?o.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",o.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:c.a.string,type:c.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:c.a.string,close:c.a.bool,text:c.a.string},t.a=l},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(423);t.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},425:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(423);t.default=function(){return r.a.createElement(c.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(2),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(c).a.string.isRequired},t.default=l},427:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(2),c=n.n(r),l=function(e){var t,n,a=e.component,r=e.subComponents,c=e.func,l=e.params;return r&&(n=r.map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("span",{className:"token punctuation"},"."))})),l&&(t=l.map(function(e,t){return o.a.createElement("span",{key:t},e,t<l.length-1?o.a.createElement("span",{className:"token punctuation"},", "):null)})),o.a.createElement("code",null,o.a.createElement("span",null,"px"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",null,a),o.a.createElement("span",{className:"token punctuation"},"."),n,o.a.createElement("span",{className:"token function"},c),o.a.createElement("span",{className:"token punctuation"},"("),t,o.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:c.a.string.isRequired,subComponents:c.a.array,func:c.a.string.isRequired,params:c.a.array},t.default=l},428:function(e,t,n){"use strict";n.r(t);var a=n(1),m=n.n(a),r=n(2),c=n.n(r),p=n(432),l=n(433),d=n.n(l),f=n(434);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var a=e.children,r=e.language,c=e.removeOuterTag,l=e.hideValue,o=e.removeList,t=e.showCasePanel,n=e.codeFigure,u=e.dangerousHTML,s=function(e){var t=document.createElement("div");return t.innerHTML=Object(p.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},i=function(e){var t=document.createElement("div");t.innerHTML=Object(p.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return m.a.createElement(m.a.Fragment,null,t?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},a)},null):null,n?m.a.createElement(function(){var e,t,n="";if("html"===r&&u)t="","function"==typeof(e=a).forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,n=t;else if("html"===r&&a&&"function"==typeof a.map)a.map(function(e){n+=c?s(e):o?i(e):Object(p.renderToStaticMarkup)(e)});else if("html"===r)n+=c?s(a):o?i(a):Object(p.renderToStaticMarkup)(a);else switch(g(a)){case"string":n=a;break;case"object":a.forEach(function(e){return n+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(r){case"html":n=(n=d.a.html_beautify(n)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(n=n.replace(/ value="(.*)"/g,""));break;case"css":n=d.a.css(n);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",m.a.createElement("figure",null,m.a.createElement(f.a,E({},f.b,{theme:void 0,code:n,language:r}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,c=e.getTokenProps;return m.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return m.a.createElement("div",E({key:e+t},r({line:e,key:t})),e.map(function(e,t){return m.a.createElement("span",E({key:t},c({token:e,key:t})))}))}))}))},null):null)};o.propTypes={language:c.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:c.a.bool,hideValue:c.a.bool,removeList:c.a.bool,showCasePanel:c.a.bool,codeFigure:c.a.bool,dangerousHTML:c.a.bool},t.default=o},431:function(e,t,n){"use strict";n.r(t);var a=n(422);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var c=n(429);n.d(t,"DocHeading",function(){return c.default});var l=n(430);n.d(t,"DocToc",function(){return l.default});var o=n(424);n.d(t,"DeprecatedComponentAlert",function(){return o.default});var u=n(425);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(426);n.d(t,"Icon",function(){return s.default});var i=n(427);n.d(t,"PxScript",function(){return i.default})},476:function(e,t,n){"use strict";n.r(t),n.d(t,"QuickStart",function(){return m}),n.d(t,"Css",function(){return p}),n.d(t,"JavaScript",function(){return d}),n.d(t,"IntroductionText",function(){return f});var a=n(1),r=n.n(a),c=n(435),l=n.n(c),o=n(431),u="/dependencies/Bump_mini-css-extract-plugin/",s="https://design.payex.com".concat(u,"scripts/px-script.js"),i="https://design.payex.com".concat(u,"styles/px.css"),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"quick-start"},"Quick start"),r.a.createElement("p",null,"To quickly add the designguide to your project, include the snippets below in your project."))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"css"},"CSS"),r.a.createElement("p",null,"Copy-paste the stylesheet ",r.a.createElement(l.a,{className:"language-html"},"<link>")," into your ",r.a.createElement(l.a,{className:"language-html"},"<head>")," before all other stylesheets to load our CSS."),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("link",{rel:"stylesheet",href:i})))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript"},"JavaScript"),r.a.createElement("p",null,"Many of our components require the use of JavaScript to function. Place the following ",r.a.createElement(l.a,{className:"language-html"},"<script>")," tag near the end of your pages, right before the closing ",r.a.createElement(l.a,{className:"language-html"},"</body>")," tag, to enable them."),r.a.createElement(o.ComponentPreview,{language:"html",codeFigure:!0},r.a.createElement("script",{src:s})))},f=function(){return r.a.createElement("div",{className:"col-lg-10 doc-body"},r.a.createElement("p",{className:"lead"},"Get started with the PayEx DesignGuide."),r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(d,null))};t.default=function(){return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(f,null),r.a.createElement(o.DocToc,{component:f})))}}}]);
//# sourceMappingURL=doc-route.chunk_34.js.map?0d99b00edcacd4cfaac1