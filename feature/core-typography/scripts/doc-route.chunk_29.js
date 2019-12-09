(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[32,75],{373:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(14),o=t.n(l),c=t(458),r=t.n(c);function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=function(e){var a=e.label,t=e.id,n=e.name,l=e.value,o=e.href,c=e.icon,u=e.loading,s=e.type,m=e.disabled,d=e.btnType,h=e.fullWidth,g=e.pullRight,f=e.input,b=e.outline,x=e.active,v=e.size,E=r()("btn",s?"btn-".concat(s):null,b?"btn-outline":null,v?"btn-".concat(v):null,u?"loading":null,h?"btn-block":null,g?"pull-right":null,x&&o?"active":null,m&&o?"disabled":null),w={href:o,id:t,name:n,defaultValue:l,disabled:o?null:m,active:x&&!o?"":null,role:o?"button":null,type:o?null:d||"button","aria-pressed":!!x||null,"aria-disabled":!(!o||!m)||null,tabIndex:o&&m?"-1":null};return o?i.a.createElement("a",p({className:E},w),c?"\n\t":null,c?i.a.createElement("i",{className:"material-icons"},c):null,c&&a?i.a.createElement("span",null,a):a):f?i.a.createElement("input",p({className:E},w)):i.a.createElement("button",p({className:E},w),c?"\n\t\t":null,c?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"material-icons"},c),"\n\t\t"):null,c&&a?i.a.createElement("span",null,a):a,c?"\n\t":null)};u.propTypes={type:o.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:o.a.string,id:o.a.string,name:o.a.string,value:o.a.string,href:o.a.string,icon:o.a.string,loading:o.a.bool,disabled:o.a.bool,btnType:o.a.string,fullWidth:o.a.bool,loader:o.a.bool,pullRight:o.a.bool,input:o.a.bool,outline:o.a.bool,active:o.a.bool,size:o.a.oneOf(["lg","sm","xs"])},a.default=u},427:function(e,a,t){"use strict";t.r(a),t.d(a,"OurFavicon",function(){return u}),t.d(a,"Usage",function(){return s});var n=t(1),i=t.n(n),l=t(462),o=t.n(l),c=t(361),r=t(373),p="/feature/core-typography/",u=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"our-favicon"},"Our favicon"),i.a.createElement("p",null,"Our favicon..."),i.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0},i.a.createElement("img",{src:"".concat(p,"icons/android-chrome-96x96.png"),alt:"Swedbank Pay favicon"})))},s=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{id:"usage"},"Usage"),i.a.createElement("p",null,"To use our favicons download the zip-file below and extract it to the root of your build-folder. Insert the code below in the ",i.a.createElement(o.a,{className:"language-html"},"<head>")," tag of your html documents and you are ready to go."),i.a.createElement("p",null,"You should also rename the ",i.a.createElement(c.Attribute,{name:"content"})," of the ",i.a.createElement(c.Attribute,{value:"apple-mobile-web-app-title"})," and ",i.a.createElement(c.Attribute,{value:"application-name"})," ",i.a.createElement(o.a,{className:"language-html"},"<meta>")," tags to reflect the title of your project. Make sure to also do this in the ",i.a.createElement(c.Property,{value:"manifest.json"})," file in the icons folder."),i.a.createElement(r.default,{type:"executive",icon:"file_download",href:"".concat(p,"release/icons.zip"),label:"Download Favicons"}),i.a.createElement(c.ComponentPreview,{language:"html",codeFigure:!0},i.a.createElement("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-touch-icon-114x114.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/apple-touch-icon-120x120.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/apple-touch-icon-144x144.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-touch-icon-152x152.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-touch-icon-180x180.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-touch-icon-57x57.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-touch-icon-60x60.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-touch-icon-72x72.png"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-touch-icon-76x76.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-320x460.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x920.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-640x1096.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-750x1294.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1182x2208.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)",href:"/icons/apple-touch-startup-image-1242x2148.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-748x1024.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1496x2048.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)",href:"/icons/apple-touch-startup-image-768x1004.png"}),i.a.createElement("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)",href:"/icons/apple-touch-startup-image-1536x2008.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"228x228",href:"/icons/coast-228x228.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),i.a.createElement("link",{rel:"manifest",href:"/icons/manifest.json"}),i.a.createElement("link",{rel:"shortcut icon",href:"/icons/favicon.ico"}),i.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),i.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),i.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"Swedbank Pay App"}),i.a.createElement("meta",{name:"application-name",content:"Swedbank Pay App"}),i.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),i.a.createElement("meta",{name:"msapplication-TileColor",content:"#000"}),i.a.createElement("meta",{name:"msapplication-TileImage",content:"/icons/mstile-144x144.png"}),i.a.createElement("meta",{name:"msapplication-config",content:"/icons/browserconfig.xml"}),i.a.createElement("meta",{name:"theme-color",content:"#000"})))};a.default=function(){return i.a.createElement(c.DocContainer,{docToc:!0},i.a.createElement("p",{className:"lead"},"The Swedbank Pay favicon..."),i.a.createElement(u,null),i.a.createElement(s,null))}},457:function(e,a){(function(a){e.exports=a}).call(this,{})},458:function(e,a,t){var n;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var n=i(t);if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)&&t.length){var c=o.apply(null,t);c&&e.push(c)}else if("object"===n)for(var r in t)l.call(t,r)&&t[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===i(t(457))&&t(457)?void 0===(n=function(){return o}.apply(a,[]))||(e.exports=n):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_29.js.map?965d8c7ecc73704ab368