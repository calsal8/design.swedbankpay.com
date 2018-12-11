(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[27],{557:function(e,a,n){"use strict";n.r(a);var l=n(1),o=n.n(l),t=n(500),r=n.n(t),i=n(484),c=n(2),m=n.n(c),s=n(203),p=n.n(s);function u(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function(e){var a=e.name,n=e.preview,t=e.previewSize,r=e.size,l=e.className,i=e.type,c=l?l.split(" "):[],m=p.a.apply(void 0,[i,"payment-icon"===i?a:"",r].concat(u(c)));return n||t?o.a.createElement("div",{className:"icon-preview"},o.a.createElement("i",{className:m},m.includes("material-icons")?a:null),o.a.createElement("span",null,n?a:r)):o.a.createElement("i",{className:m},m.includes("material-icons")?a:null)};y.propTypes={name:m.a.string.isRequired,type:m.a.string.isRequired,preview:m.a.bool,size:m.a.oneOf(["tiny","small","medium","large","huge"]),className:m.a.string};var E=y,d=n(48);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function g(e,a){return!a||"object"!==v(a)&&"function"!=typeof a?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):a}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}n.d(a,"MaterialIcons",function(){return b}),n.d(a,"PaymentIcons",function(){return z});var b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"material-icons"},"Material Icons"),o.a.createElement("p",null,"To use an icon, provide the following markup: ",o.a.createElement(r.a,{className:"language-html"},'<i class="material-icons">{icon_name}</i>'),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("i",{className:"material-icons"},"android"),"\n",o.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",o.a.createElement("i",{className:"material-icons"},"face"),"\n",o.a.createElement("i",{className:"material-icons"},"star"),"\n",o.a.createElement("i",{className:"material-icons"},"warning")),o.a.createElement("h3",null,"Sizes"),o.a.createElement("p",null,"You can modify the size of the material icons by adding one of the size classes: ",o.a.createElement(i.Property,{value:".tiny"}),", ",o.a.createElement(i.Property,{value:".small"}),", ",o.a.createElement(i.Property,{value:".medium"})," or ",o.a.createElement(i.Property,{value:".large"}),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("div",{className:"row justify-content-evenly align-items-center"},o.a.createElement(E,{previewSize:!0,type:"material-icons",name:"android",size:"tiny"}),o.a.createElement(E,{previewSize:!0,type:"material-icons",name:"android",size:"small"}),o.a.createElement(E,{previewSize:!0,type:"material-icons",name:"android",size:"medium"}),o.a.createElement(E,{previewSize:!0,type:"material-icons",name:"android",size:"large"}))),o.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("i",{className:"material-icons tiny"},"android"),"\n",o.a.createElement("i",{className:"material-icons small"},"android"),"\n",o.a.createElement("i",{className:"material-icons medium"},"android"),"\n",o.a.createElement("i",{className:"material-icons large"},"android")))},z=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"payment-icons"},"Payment Icons"),o.a.createElement("p",null,"To use an icon, provide the following markup: ",o.a.createElement(r.a,{className:"language-html"},'<i class="payment-icon {icon_name}"></i>'),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("div",{className:"row justify-content-evenly mb-2"},o.a.createElement(E,{preview:!0,type:"payment-icon",name:"amex",size:"large"}),"\n",o.a.createElement(E,{preview:!0,type:"payment-icon",name:"diners",size:"large"}),"\n",o.a.createElement(E,{preview:!0,type:"payment-icon",name:"mastercard",size:"large"}),"\n",o.a.createElement(E,{preview:!0,type:"payment-icon",name:"visa",size:"large"})),o.a.createElement("div",{className:"row justify-content-evenly"},o.a.createElement(E,{preview:!0,type:"payment-icon",name:"mobilepay",size:"large"}),"\n",o.a.createElement(E,{preview:!0,type:"payment-icon",name:"paypal",size:"large"}),"\n",o.a.createElement(E,{preview:!0,type:"payment-icon",name:"swish",size:"large"}),"\n",o.a.createElement(E,{preview:!0,type:"payment-icon",name:"vipps",size:"large"}),"\n")),o.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement(E,{type:"payment-icon",name:"amex"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"diners"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"mastercard"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"visa"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"mobilepay"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"paypal"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"swish"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"vipps"})),o.a.createElement("h3",null,"Sizes"),o.a.createElement("p",null,"Different sizes are available by adding ",o.a.createElement(i.Property,{value:".small"}),", ",o.a.createElement(i.Property,{value:".medium"}),", ",o.a.createElement(i.Property,{value:".large"})," and",o.a.createElement(i.Property,{value:".huge"}),". If no size is provided ",o.a.createElement(i.Property,{value:".medium"})," is defaulted."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0},o.a.createElement("div",{className:"row justify-content-evenly align-items-center"},o.a.createElement(E,{type:"payment-icon",previewSize:!0,name:"visa",size:"small"}),"\n",o.a.createElement(E,{type:"payment-icon",previewSize:!0,name:"visa",size:"medium"}),"\n",o.a.createElement(E,{type:"payment-icon",previewSize:!0,name:"visa",size:"large"}),"\n",o.a.createElement(E,{type:"payment-icon",previewSize:!0,name:"visa",size:"huge"}))),o.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement(E,{type:"payment-icon",name:"visa",size:"small"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"visa",size:"medium"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"visa",size:"large"}),"\n",o.a.createElement(E,{type:"payment-icon",name:"visa",size:"huge"}),"\n"),o.a.createElement("h3",null,"Usage"),o.a.createElement("p",null,"Typical usage would be in for instance an ",o.a.createElement(i.Property,{value:".item-list"}),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("ul",{className:"item-list item-list-striped"},o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(E,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",o.a.createElement("span",null,"4925*********004"),"\n"),o.a.createElement("div",{className:"action-list"},"\n",o.a.createElement(i.Icon,{icon:"more_vert"}),"\n",o.a.createElement("div",{className:"action-menu"},"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(i.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(i.Icon,{icon:"business_center"}),"Add client"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(i.Icon,{icon:"add_circle"}),"Add document"),"\n",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},o.a.createElement(i.Icon,{icon:"person_add"}),"Add user"),"\n"))),o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(E,{type:"payment-icon",name:"mastercard",className:"mr-2"}),"\n",o.a.createElement("span",null,"5792*********138"),"\n",o.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",o.a.createElement("a",{href:"https://developer.payex.com"},"developer.payex.com"),"\n"),o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(E,{type:"payment-icon",name:"amex",className:"mr-2"}),"\n",o.a.createElement("span",null,"3651*********701"),"\n"),o.a.createElement("i",{className:"material-icons"},"star"),"\n"),o.a.createElement("li",null,o.a.createElement("div",{className:"d-flex align-items-center"},"\n",o.a.createElement(E,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",o.a.createElement("span",null,"4925*********007"),"\n"),o.a.createElement("span",{className:"status status-success"},"Active"),"\n",o.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},o.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},N=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),g(this,w(a).apply(this,arguments))}var n,t,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(a,l["Component"]),n=a,(t=[{key:"componentDidMount",value:function(){d.a.init()}},{key:"render",value:function(){return o.a.createElement(i.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"The PayEx DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",o.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),o.a.createElement(b,null),o.a.createElement(z,null))}}])&&f(n.prototype,t),r&&f(n,r),a}();a.default=N}}]);
//# sourceMappingURL=doc-route.chunk_27.js.map?712626ee4a4d6f245a45