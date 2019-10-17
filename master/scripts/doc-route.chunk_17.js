(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[19,89],{385:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(14),o=t.n(l),i=t(458),u=t.n(i),c=function(e){var a=e.type,t=e.items,n=e.text,l=e.arrows,o=e.farArrows,i=-1,c=t?t.length-1:-2,s=u()("pagination",a?"pagination-".concat(a):""),m=function(e){var a=e.type,t=!1;return"start"===a||"back"===a?t=0===i:"forward"!==a&&"end"!==a||(t=i===c),r.a.createElement("li",{className:"arrow-".concat(a),"aria-label":a},"\n",t?r.a.createElement("span",null):r.a.createElement("a",{href:"#"}),"\n")};return r.a.createElement("ul",{className:s},o?r.a.createElement(m,{type:"start"}):null,l?r.a.createElement(m,{type:"back"}):null,t?t.map(function(e,a){var t=e.name,n=e.href,l=e.active;return l&&(i=a),r.a.createElement("li",{key:a,className:"".concat(l?"active":"")},"\n",r.a.createElement("a",{href:n},t),"\n")}):null,n?r.a.createElement("li",null,"\n",r.a.createElement("span",{className:"text"},n),"\n"):null,l?r.a.createElement(m,{type:"forward"}):null,o?r.a.createElement(m,{type:"end"}):null)};c.propTypes={type:o.a.oneOf(["bullets","simple"]),items:o.a.array,text:o.a.string,arrows:o.a.bool,farArrows:o.a.bool},a.default=c},416:function(e,a,t){"use strict";t.r(a),t.d(a,"DefaultPagination",function(){return s}),t.d(a,"SimplePagination",function(){return p}),t.d(a,"PaginationBullets",function(){return m});var n=t(1),r=t.n(n),l=t(462),o=t.n(l),i=t(361),u=t(385),c=[{name:"1",href:"#",active:!1},{name:"2",href:"#",active:!1},{name:"3",href:"#",active:!1},{name:"4",href:"#",active:!1},{name:"5",href:"#",active:!0}],s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"default-pagination"},"Default pagination"),r.a.createElement("p",null,"Default pagination shows the pages as numbers. Add ",r.a.createElement(i.Property,{value:".pagination"})," to an ",r.a.createElement(o.a,{className:"language-html"},"<ul>")," containing",r.a.createElement(o.a,{className:"language-html"},"<li>"),". If you wish to present the user with navigational arrows you need to add those as ",r.a.createElement(o.a,{className:"language-html"},"<li>")," elements."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{items:c,arrows:!0,farArrows:!0})))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"pagination-bullets"},"Pagination bullets"),r.a.createElement("p",null,"If you want to show bullets instead of numbers you can add ",r.a.createElement(i.Property,{value:".pagination-bullets"})," to your ",r.a.createElement(o.a,{className:"language-html"},"<ul>"),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{type:"bullets",items:c,arrows:!0,farArrows:!0})))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"simple-pagination"},"Simple pagination"),r.a.createElement("p",null,"If the number of pages get high enough then it is better to use numbers."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(u.default,{text:"16 of 256",arrows:!0,farArrows:!0})))};a.default=function(){return r.a.createElement(i.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Use the pagination component to indicate that a series of related content exist across multiple pages."),r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(p,null))}},457:function(e,a){(function(a){e.exports=a}).call(this,{})},458:function(e,a,t){var n;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var n=r(t);if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)&&t.length){var i=o.apply(null,t);i&&e.push(i)}else if("object"===n)for(var u in t)l.call(t,u)&&t[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===r(t(457))&&t(457)?void 0===(n=function(){return o}.apply(a,[]))||(e.exports=n):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?cf6f19d92d16f46ebf09