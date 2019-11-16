(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[29,94],{390:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),l=a.n(o),c=a(467),i=a.n(c),m=(a(468),"swedbankpay"),u=(i.a,function(){return r.a.createElement("button",{type:"button",className:"topbar-btn"},"\n\t\t",r.a.createElement("i",{className:"material-icons topbar-btn-icon"},"menu"),"\n\t\t")}),s=function(e){var t=e.menu,a=e.logout,o=t.items;return r.a.createElement("nav",{className:"topbar-nav"},r.a.createElement("div",{className:"topbar-link-container"},"\n",r.a.createElement("button",{type:"button",className:"topbar-close"},"\n",r.a.createElement("i",{className:"material-icons"},"close"),"\n"),o.map(function(e,t){return r.a.createElement(n.Fragment,{key:t},"\n",r.a.createElement("a",{href:"#",className:"Home"===e.name?"active":null,onClick:function(e){return e.preventDefault()}},"\n",e.icon?r.a.createElement("i",{className:"material-icons"},e.icon):null,"\n",r.a.createElement("span",null,e.name),"\n"))}),"\n",a?r.a.createElement(p,null):null))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"topbar-link-right",href:"#",onClick:function(e){return e.preventDefault()}},"\n",r.a.createElement("i",{className:"material-icons"},"exit_to_app"),"\n",r.a.createElement("span",null,"Log out"),"\n"),"\n")},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"topbar-logo",href:"/",onClick:function(e){return e.preventDefault()}},"\n",r.a.createElement("img",{src:"".concat("/feature/page-layout-height/","img/").concat(m,"-logo.svg"),alt:"".concat(m,"-logo")}),"\n"),"\n")},f=function(e){var t=e.topbarContent,a=e.wide,n=e.logout,o=e.id;return r.a.createElement("header",{className:"topbar".concat(a?" topbar-".concat(a,"-wide"):""),id:o},"\n",t?r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),"\n",r.a.createElement(b,null),r.a.createElement(s,{menu:t,logout:!!n})):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),n?r.a.createElement(p,null):null))};f.propTypes={topbarContent:l.a.object,fixed:l.a.bool,logout:l.a.bool},t.default=f},425:function(e,t,a){"use strict";a.r(t),a.d(t,"Overview",function(){return d}),a.d(t,"TopbarWide",function(){return g}),a.d(t,"JavascriptMethods",function(){return h});var n=a(1),r=a.n(n),o=a(462),l=a.n(o),c=a(361),i=a(390);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=window.dg.topbar,E={btn:{name:"Menu",icon:"menu"},items:[{name:"Home",icon:"home"},{name:"Purchase history",icon:"shopping_cart"},{name:"Settings",icon:"settings"}]},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"overview"},"Overview"),r.a.createElement("p",null,"To use a topbar the bare minimum markup required is:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.Property,{value:".topbar"})," wrapper."),r.a.createElement("li",null,"Anchor with class ",r.a.createElement(c.Property,{value:".topbar-logo"})," to display the logo and make it clickable.")),r.a.createElement("p",null,"With this you get a topbar with the Swedbank Pay logo. In the topbar you can add additional functionality like a menu containing links. To enable this add a ",r.a.createElement(l.a,{className:"language-html"},"<button>")," and a ",r.a.createElement(l.a,{className:"language-html"},"<nav>")," containing anchors. Remember to include ",r.a.createElement(c.Attribute,{data:!0,name:"toggle-nav",value:"{your_nav_id}"})," as a ",r.a.createElement(l.a,{className:"language-html"},"<button>")," attribute to get the menu to appear when the menu-button is clicked."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(i.default,{topbarContent:E,logout:!0,id:"demo-topbar"})),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("header",{className:"topbar topbar-xl-wide",id:"demo-topbar-1"},r.a.createElement("button",{type:"button",className:"topbar-btn"},r.a.createElement("i",{className:"material-icons topbar-btn-icon"},"menu")),r.a.createElement("a",{className:"topbar-logo",href:"/"},r.a.createElement("img",{src:"/img/swedbankpay-logo.svg?8f76620b1e058f7a32c5f5b59e0adee5",alt:"swedbankpay-logo"})),r.a.createElement("nav",{className:"topbar-nav"},r.a.createElement("div",{className:"topbar-link-container"},r.a.createElement("button",{type:"button",className:"topbar-close"},r.a.createElement("i",{className:"material-icons"},"close")),r.a.createElement("a",{href:"#",className:"active"},r.a.createElement("i",{className:"material-icons"},"home"),r.a.createElement("span",null,"Home")),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"material-icons"},"shopping_cart"),r.a.createElement("span",null,"Purchase history")),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"material-icons"},"settings"),r.a.createElement("span",null,"Settings")),r.a.createElement("a",{className:"topbar-link-right",href:"#"},r.a.createElement("i",{className:"material-icons"},"exit_to_app"),r.a.createElement("span",null,"Log out")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto"},"Sidebar component..."),r.a.createElement("main",{className:"col main-content border-left"},"Main content things...")))))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"topbar-wide"},"Wide topbar"),r.a.createElement("p",null,"This is a wide topbar."),r.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(i.default,{id:"demo-topbar-1",topbarContent:E,wide:"xl",logout:!0})))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"javascript-methods"},"JavaScript Methods"),r.a.createElement(c.JavascriptDocs,{componentName:"topbar",open:!0,close:!0}))},y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var a,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n["Component"]),a=t,(o=[{key:"componentDidMount",value:function(){f.init("demo-topbar"),f.init("demo-topbar-1")}},{key:"render",value:function(){return r.a.createElement(c.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"The topbar is used to give users an easily available navigational bar at the top of your web application."),r.a.createElement(d,null),r.a.createElement(g,null),r.a.createElement(h,null))}}])&&u(a.prototype,o),l&&u(a,l),t}();t.default=y},467:function(e,t,a){e.exports=a.p+"img/swedbankpay-logo.svg?19b6f40ff24042e34940f290059f1199"},468:function(e,t,a){e.exports=a.p+"img/payex-logo.svg?467d541679b8f5b7ec3bcfdc39af22a5"}}]);
//# sourceMappingURL=doc-route.chunk_26.js.map?d19a044b16f78f127133