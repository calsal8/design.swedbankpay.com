(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[30],{447:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),i=n(377),r=n.n(i),c=n(361),m=n(48),o=n.n(m),s=n(307),p=n.n(s);function u(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var a=e.name,n=e.squaredFlag,t=e.preview,i=e.previewSize,r=e.size,c=e.className,m=e.type,o=c?c.split(" "):[],s=p.a.apply(void 0,[m,r?"".concat(m,"-").concat(r):"","material-icons"===m?"":"".concat(m,"-").concat(a),n?"flag-icon-squared":""].concat(u(o)));return t||i?l.a.createElement("div",{className:"icon-preview"},l.a.createElement("i",{className:s},s.includes("material-icons")?a:null),l.a.createElement("code",{className:"token property p-0 mt-2"},i?r:a)):l.a.createElement("i",{className:s},s.includes("material-icons")?a:null)};g.propTypes={name:o.a.string.isRequired,type:o.a.oneOf(["material-icons","payment-icon","flag-icon"]),squaredFlag:o.a.bool,preview:o.a.bool,size:o.a.oneOf(["tiny","small","medium","large","huge"]),className:o.a.string};var y=g;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function d(e,a){return!a||"object"!==f(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,a){return(w=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}n.d(a,"MaterialIcons",function(){return N}),n.d(a,"PaymentIcons",function(){return z}),n.d(a,"Flags",function(){return b});var h=window.px.actionList,N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"material-icons"},"Material Icons"),l.a.createElement("p",{className:"lead"},"DesignGuide includes Google","'","s material icons. For a full overview of the available icons please visit ",l.a.createElement("a",{href:"https://material.io/tools/icons/"},"this site"),"."),l.a.createElement("p",null,"To use an icon, provide the following markup: ",l.a.createElement(r.a,{className:"language-html"},'<i class="material-icons">{icon_name}</i>'),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{preview:!0,type:"material-icons",name:"android"}),l.a.createElement(y,{preview:!0,type:"material-icons",name:"contact_support"}),l.a.createElement(y,{preview:!0,type:"material-icons",name:"face"}),l.a.createElement(y,{preview:!0,type:"material-icons",name:"star"}),l.a.createElement(y,{preview:!0,type:"material-icons",name:"warning"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"material-icons"},"android"),"\n",l.a.createElement("i",{className:"material-icons"},"contact_support"),"\n",l.a.createElement("i",{className:"material-icons"},"face"),"\n",l.a.createElement("i",{className:"material-icons"},"star"),"\n",l.a.createElement("i",{className:"material-icons"},"warning")),l.a.createElement("h3",null,"Sizes"),l.a.createElement("p",null,"You can modify the size of the material icons by adding one of the size classes: ",l.a.createElement(c.Property,{value:"material-icons-tiny"}),", ",l.a.createElement(c.Property,{value:"material-icons-small"}),", ",l.a.createElement(c.Property,{value:"material-icons-medium"})," or ",l.a.createElement(c.Property,{value:"material-icons-large"}),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"tiny"}),l.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"small"}),l.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"medium"}),l.a.createElement(y,{previewSize:!0,type:"material-icons",name:"android",size:"large"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"material-icons material-icons-tiny"},"android"),"\n",l.a.createElement("i",{className:"material-icons material-icons-small"},"android"),"\n",l.a.createElement("i",{className:"material-icons material-icons-medium"},"android"),"\n",l.a.createElement("i",{className:"material-icons material-icons-large"},"android")))},z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"payment-icons"},"Payment Icons"),l.a.createElement("p",null,"To use an icon, provide the following markup: ",l.a.createElement(r.a,{className:"language-html"},'<i class="payment-icon payment-icon-{icon_name}"></i>'),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly mb-2"},l.a.createElement(y,{preview:!0,type:"payment-icon",name:"amex",size:"large"}),"\n",l.a.createElement(y,{preview:!0,type:"payment-icon",name:"diners",size:"large"}),"\n",l.a.createElement(y,{preview:!0,type:"payment-icon",name:"mastercard",size:"large"}),"\n",l.a.createElement(y,{preview:!0,type:"payment-icon",name:"visa",size:"large"})),l.a.createElement("div",{className:"row justify-content-evenly"},l.a.createElement(y,{preview:!0,type:"payment-icon",name:"mobilepay",size:"large"}),"\n",l.a.createElement(y,{preview:!0,type:"payment-icon",name:"paypal",size:"large"}),"\n",l.a.createElement(y,{preview:!0,type:"payment-icon",name:"swish",size:"large"}),"\n",l.a.createElement(y,{preview:!0,type:"payment-icon",name:"vipps",size:"large"}),"\n")),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(y,{type:"payment-icon",name:"amex"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"diners"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"mastercard"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"visa"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"mobilepay"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"paypal"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"swish"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"vipps"})),l.a.createElement("h3",null,"Sizes"),l.a.createElement("p",null,"Different sizes are available by adding ",l.a.createElement(c.Property,{value:".payment-icon-small"}),", ",l.a.createElement(c.Property,{value:".payment-icon-medium"}),", ",l.a.createElement(c.Property,{value:".payment-icon-large"})," and ",l.a.createElement(c.Property,{value:".payment-icon-huge"}),". If no size is provided ",l.a.createElement(c.Property,{value:".payment-icon-medium"})," is defaulted."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"small"}),"\n",l.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"medium"}),"\n",l.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"large"}),"\n",l.a.createElement(y,{type:"payment-icon",previewSize:!0,name:"visa",size:"huge"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement(y,{type:"payment-icon",name:"visa",size:"small"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"visa",size:"medium"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"visa",size:"large"}),"\n",l.a.createElement(y,{type:"payment-icon",name:"visa",size:"huge"}),"\n"),l.a.createElement("h3",null,"Usage"),l.a.createElement("p",null,"Typical usage would be in for instance an ",l.a.createElement(c.Property,{value:".item-list"}),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("ul",{className:"item-list item-list-striped"},l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(y,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",l.a.createElement("span",null,"4925*********004"),"\n"),l.a.createElement("div",{className:"action-list"},"\n",l.a.createElement(c.Icon,{icon:"more_vert"}),"\n",l.a.createElement("div",{className:"action-menu"},"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(c.Icon,{icon:"bookmark"}),"Add bookmark"),"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(c.Icon,{icon:"business_center"}),"Add client"),"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(c.Icon,{icon:"add_circle"}),"Add document"),"\n",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement(c.Icon,{icon:"person_add"}),"Add user"),"\n"))),l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(y,{type:"payment-icon",name:"mastercard",className:"mr-2"}),"\n",l.a.createElement("span",null,"5792*********138"),"\n",l.a.createElement("span",{className:"badge badge-blue ml-2"},"new"),"\n"),"\n",l.a.createElement("a",{href:"https://payex.com"},"www.payex.com"),"\n"),l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(y,{type:"payment-icon",name:"amex",className:"mr-2"}),"\n",l.a.createElement("span",null,"3651*********701"),"\n"),l.a.createElement("i",{className:"material-icons"},"star"),"\n"),l.a.createElement("li",null,l.a.createElement("div",{className:"d-flex align-items-center"},"\n",l.a.createElement(y,{type:"payment-icon",name:"visa",className:"mr-2"}),"\n",l.a.createElement("span",null,"4925*********007"),"\n"),l.a.createElement("span",{className:"status status-success"},"Active"),"\n",l.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},l.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"flags"},"Flags"),l.a.createElement("p",null,"To use the flag icons add the classes ",l.a.createElement(c.Property,{value:".flag-icon"})," and ",l.a.createElement(c.Property,{value:".flag-icon-xx"})," (where xx is the ",l.a.createElement("a",{href:"https://www.iso.org/obp/ui/#search"},"ISO 3166-1-alpha-2 code")," of a country) to an empty ",l.a.createElement(r.a,{className:"language-html"},"<i>"),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{preview:!0,type:"flag-icon",name:"se"}),l.a.createElement(y,{preview:!0,type:"flag-icon",name:"no"}),l.a.createElement(y,{preview:!0,type:"flag-icon",name:"dk"}),l.a.createElement(y,{preview:!0,type:"flag-icon",name:"fi"}),l.a.createElement(y,{preview:!0,type:"flag-icon",name:"eu"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-no"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-sv"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-dk"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-fi"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-eu"}),"\n"),l.a.createElement("h3",null,"Squared"),l.a.createElement("p",null,"To use a squared version of a flag add the class ",l.a.createElement(c.Property,{value:".flag-icon-squared"}),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"se"}),l.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"no"}),l.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"dk"}),l.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"fi"}),l.a.createElement(y,{preview:!0,type:"flag-icon",squaredFlag:!0,name:"eu"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu"}),"\n"),l.a.createElement("h3",null,"Sizes"),l.a.createElement("p",null,"Flags support sizes ",l.a.createElement(c.Property,{value:".payment-icon-tiny"}),", ",l.a.createElement(c.Property,{value:".payment-icon-small"}),", ",l.a.createElement(c.Property,{value:".payment-icon-medium"}),", ",l.a.createElement(c.Property,{value:".payment-icon-large"})," and ",l.a.createElement(c.Property,{value:".payment-icon-huge"}),". If no size is provided ",l.a.createElement(c.Property,{value:".payment-icon-tiny"})," is defaulted."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"se",size:"tiny"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"no",size:"small"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"dk",size:"medium"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"fi",size:"large"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",name:"eu",size:"huge"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-no flag-icon-tiny"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-sv flag-icon-small"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-dk flag-icon-medium"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-fi flag-icon-large"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-eu flag-icon-huge"}),"\n"),l.a.createElement("h3",null,"Squared Sizes"),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},l.a.createElement("div",{className:"row justify-content-evenly align-items-end"},l.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"se",size:"tiny"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"no",size:"small"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"dk",size:"medium"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"fi",size:"large"}),l.a.createElement(y,{previewSize:!0,type:"flag-icon",squaredFlag:!0,name:"eu",size:"huge"}))),l.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-no flag-icon-tiny"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-sv flag-icon-small"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-dk flag-icon-medium"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-fi flag-icon-large"}),"\n",l.a.createElement("i",{className:"flag-icon flag-icon-squared flag-icon-eu flag-icon-huge"}),"\n"))},P=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),d(this,v(a).apply(this,arguments))}var n,i,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&w(e,a)}(a,t["Component"]),n=a,(i=[{key:"componentDidMount",value:function(){h.init()}},{key:"render",value:function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"The Swedbank Pay DesignGuide includes a variety of icons. Mainly we use the material icons, but we also include icons for known payment providers, and flags for most nations in the world."),l.a.createElement(N,null),l.a.createElement(z,null),l.a.createElement(b,null))}}])&&E(n.prototype,i),r&&E(n,r),a}();a.default=P}}]);
//# sourceMappingURL=doc-route.chunk_30.js.map?8519aabd84cf5f0568bd