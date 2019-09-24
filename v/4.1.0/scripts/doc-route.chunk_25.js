(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[27],{422:function(e,t,n){e.exports=n.p+"img/swedbankpay-logo.svg?19b6f40ff24042e34940f290059f1199"},423:function(e,t,n){e.exports=n.p+"img/payex-logo.svg?467d541679b8f5b7ec3bcfdc39af22a5"},464:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(394),l=n.n(r),c=n(376),i=n(71),u=n.n(i),m=n(422),s=n.n(m),p=(n(423),"swedbankpay"),b=(s.a,function(){return o.a.createElement("button",{type:"button",className:"topbar-btn"},"\n\t\t",o.a.createElement("i",{className:"material-icons topbar-btn-icon"},"menu"),"\n\t\t")}),f=function(e){var t=e.menu,n=e.logout,r=t.items;return o.a.createElement("nav",{className:"topbar-nav"},o.a.createElement("div",{className:"topbar-link-container"},"\n",o.a.createElement("button",{type:"button",className:"topbar-close"},"\n",o.a.createElement("i",{className:"material-icons"},"close"),"\n"),r.map(function(e,t){return o.a.createElement(a.Fragment,{key:t},"\n",o.a.createElement("a",{href:"#",className:"Home"===e.name?"active":null,onClick:function(e){return e.preventDefault()}},"\n",e.icon?o.a.createElement("i",{className:"material-icons"},e.icon):null,"\n",o.a.createElement("span",null,e.name),"\n"))}),"\n",n?o.a.createElement(d,null):null))},d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"topbar-link-right",href:"#",onClick:function(e){return e.preventDefault()}},"\n",o.a.createElement("i",{className:"material-icons"},"exit_to_app"),"\n",o.a.createElement("span",null,"Log out"),"\n"),"\n")},g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"topbar-logo",href:"/",onClick:function(e){return e.preventDefault()}},"\n",o.a.createElement("img",{src:"".concat("/v/4.1.0/","img/").concat(p,"-logo.svg"),alt:"".concat(p,"-logo")}),"\n"),"\n")},E=function(e){var t=e.topbarContent,n=e.wide,a=e.logout,r=e.id;return o.a.createElement("header",{className:"topbar".concat(n?" topbar-".concat(n,"-wide"):""),id:r},"\n",t?o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),"\n",o.a.createElement(g,null),o.a.createElement(f,{menu:t,logout:!!a})):o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),a?o.a.createElement(d,null):null))};E.propTypes={topbarContent:u.a.object,fixed:u.a.bool,logout:u.a.bool};var h=E;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return _}),n.d(t,"TopbarWide",function(){return O}),n.d(t,"JavascriptMethods",function(){return F});var C=window.dg.topbar,P={btn:{name:"Menu",icon:"menu"},items:[{name:"Home",icon:"home"},{name:"Purchase history",icon:"shopping_cart"},{name:"Settings",icon:"settings"}]},_=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"To use a topbar the bare minimum markup required is:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Property,{value:".topbar"})," wrapper."),o.a.createElement("li",null,"Anchor with class ",o.a.createElement(c.Property,{value:".topbar-logo"})," to display the logo and make it clickable.")),o.a.createElement("p",null,"With this you get a topbar with the Swedbank Pay logo. In the topbar you can add additional functionality like a menu containing links. To enable this add a ",o.a.createElement(l.a,{className:"language-html"},"<button>")," and a ",o.a.createElement(l.a,{className:"language-html"},"<nav>")," containing anchors. Remember to include ",o.a.createElement(c.Attribute,{data:!0,name:"toggle-nav",value:"{your_nav_id}"})," as a ",o.a.createElement(l.a,{className:"language-html"},"<button>")," attribute to get the menu to appear when the menu-button is clicked."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(h,{topbarContent:P,logout:!0,id:"demo-topbar"})))},O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"topbar-wide"},"Wide topbar"),o.a.createElement("p",null,"This is a wide topbar."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(h,{id:"demo-topbar-1",topbarContent:P,wide:"xl",logout:!0})))},F=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"JavaScript Methods"),o.a.createElement(c.JavascriptDocs,{componentName:"topbar",open:!0,close:!0}))},j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,k(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){C.init("demo-topbar"),C.init("demo-topbar-1")}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"The topbar is used to give users an easily available navigational bar at the top of your web application."),o.a.createElement(_,null),o.a.createElement(O,null),o.a.createElement(F,null))}}])&&v(n.prototype,r),l&&v(n,l),t}();t.default=j}}]);
//# sourceMappingURL=doc-route.chunk_25.js.map?a29383c63ddefc743c26