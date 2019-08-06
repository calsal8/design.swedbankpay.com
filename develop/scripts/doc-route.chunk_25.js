(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[25],{406:function(e,t,n){e.exports=n.p+"img/spay_horizontal_pos.svg?19b6f40ff24042e34940f290059f1199"},444:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(376),l=n.n(r),c=n(358),i=n(65),u=n.n(i),m=(n(406),function(){return o.a.createElement("button",{type:"button",className:"topbar-btn"},"\n\t\t",o.a.createElement("i",{className:"material-icons topbar-btn-icon"},"menu"),"\n\t\t")}),s=function(e){var t=e.menu,n=e.logout,r=t.items;return o.a.createElement("nav",{className:"topbar-nav"},o.a.createElement("div",{className:"topbar-link-container"},"\n",o.a.createElement("i",{className:"material-icons close-topbar-nav"},"close"),r.map(function(e,t){return o.a.createElement(a.Fragment,{key:t},"\n",o.a.createElement("a",{href:"#",className:"Home"===e.name?"active":null,onClick:function(e){return e.preventDefault()}},"\n",e.icon?o.a.createElement("i",{className:"material-icons"},e.icon):null,"\n",o.a.createElement("span",null,e.name),"\n"))}),"\n",n?o.a.createElement(p,null):null))},p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"topbar-link-right",href:"#",onClick:function(e){return e.preventDefault()}},"\n",o.a.createElement("i",{className:"material-icons"},"exit_to_app"),"\n",o.a.createElement("span",null,"Log out"),"\n"),"\n")},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"topbar-logo",href:"/",onClick:function(e){return e.preventDefault()}},"\n",o.a.createElement("img",{src:"".concat("/develop/","img/spay_horizontal_pos.svg"),alt:"swedbankpay-logo"}),"\n"),"\n")},f=function(e){var t=e.topbarContent,n=e.wide,a=e.logout,r=e.id;return o.a.createElement("header",{className:"topbar".concat(n?" topbar-".concat(n,"-wide"):""),id:r},"\n",t?o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),"\n",o.a.createElement(b,null),o.a.createElement(s,{menu:t,logout:!!a})):o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),a?o.a.createElement(p,null):null))};f.propTypes={topbarContent:u.a.object,fixed:u.a.bool,logout:u.a.bool};var d=f;function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"Overview",function(){return _}),n.d(t,"TopbarWide",function(){return N}),n.d(t,"JavascriptMethods",function(){return C});var w=window.px.topbar,k={btn:{name:"Menu",icon:"menu"},items:[{name:"Home",icon:"home"},{name:"Purchase history",icon:"shopping_cart"},{name:"Settings",icon:"settings"}]},_=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"To use a topbar the bare minimum markup required is:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Property,{value:".topbar"})," wrapper."),o.a.createElement("li",null,"Anchor with class ",o.a.createElement(c.Property,{value:".topbar-logo"})," to display the logo and make it clickable.")),o.a.createElement("p",null,"With this you get a topbar with the Swedbank Pay logo. In the topbar you can add additional functionality like a menu containing links. To enable this add a ",o.a.createElement(l.a,{className:"language-html"},"<button>")," and a ",o.a.createElement(l.a,{className:"language-html"},"<nav>")," containing anchors. Remember to include ",o.a.createElement(c.Attribute,{data:!0,name:"toggle-nav",value:"{your_nav_id}"})," as a ",o.a.createElement(l.a,{className:"language-html"},"<button>")," attribute to get the menu to appear when the menu-button is clicked."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(d,{topbarContent:k,logout:!0,id:"demo-topbar"})))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"topbar-wide"},"Wide topbar"),o.a.createElement("p",null,"This is a wide topbar."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(d,{id:"demo-topbar-1",topbarContent:k,wide:"xl",logout:!0})))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"javascript-methods"},"JavaScript Methods"),o.a.createElement(c.JavascriptDocs,{componentName:"topbar",open:!0,close:!0}))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,y(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){w.init("demo-topbar"),w.init("demo-topbar-1")}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"The topbar is used to give users an easily available navigational bar at the top of your web application."),o.a.createElement(_,null),o.a.createElement(N,null),o.a.createElement(C,null))}}])&&g(n.prototype,r),l&&g(n,l),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_25.js.map?972bf3b537f799c1a6b4