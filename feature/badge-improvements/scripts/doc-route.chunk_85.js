(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[83,85],{374:function(e,a,l){"use strict";l.r(a),l.d(a,"Addon",function(){return c});var t=l(1),n=l.n(t),r=l(14),o=l.n(r),i=l(458),u=l.n(i),c=function(e){var a=e.type,l=e.value,t=e.color,r=e.disabled;return"button"===a?n.a.createElement("button",{type:"button",className:"btn btn-".concat(t),disabled:r},l):n.a.createElement("span",{className:"input-group-addon"},"icon"===a?n.a.createElement("i",{className:"material-icons"},l):l)},s=function(e){var a=e.icon;return n.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",n.a.createElement("i",{className:"material-icons"},a),"\n\t")},d=function(e){var a=e.id,l=e.type,r=e.placeholder,o=e.pattern,i=e.validate,d=e.required,p=e.defaultValue,m=e.autoComplete,b=e.disabled,f=e.readOnly,v=e.label,g=e.validationState,y=e.selectOptions,x=e.prefixValue,E=e.prefixType,h=e.prefixBtnColor,k=e.postfixValue,N=e.postfixType,T=e.postfixBtnColor,O=e.feedbackIcon,C=e.helpBlock,w=e.errorMessage,V=e.successMessage,q={type:l||null,className:"form-control",id:a||null,placeholder:r||null,defaultValue:p||"",disabled:b||null,readOnly:f||null,autoComplete:m||null,required:d||null,pattern:o?"":null,"data-validate":i?"":null},F=u()("input-group",g?"has-".concat(g):null,O?"has-feedback":null);return n.a.createElement("div",{className:"form-group"},"\n",v?n.a.createElement("label",{htmlFor:a},v):null,v?"\n":null,n.a.createElement("div",{className:F},"\n",x?n.a.createElement(c,{type:E,value:x,color:h,disabled:b}):null,x?"\n":null,"textarea"===l?n.a.createElement("textarea",q):"select"===l?n.a.createElement("select",{className:"form-control",disabled:b,readOnly:f},"\n\t\t",y.map(function(e,a){return n.a.createElement(t.Fragment,{key:e+a},n.a.createElement("option",null,e),a!==y.length-1?"\n\t\t":"")}),"\n\t"):n.a.createElement("input",q),"\n",O?n.a.createElement(s,{icon:O}):null," ",O?"\n":null,k?n.a.createElement(c,{type:N,value:k,color:T,disabled:b}):null,k?"\n":null),C?n.a.createElement("div",{className:"help-block","data-success":V||null,"data-error":w||null},C):null)};d.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessag:o.a.string,successMessag:o.a.string},a.default=d},378:function(e,a,l){"use strict";l.r(a);var t=l(1),n=l.n(t),r=l(14),o=l.n(r),i=function(e){var a=e.id,l=e.checked,t=e.disabled,r=e.label,o={type:"checkbox",id:a||null,disabled:t||null,defaultChecked:l||null};return n.a.createElement("div",{className:"checkbox"},"\n",n.a.createElement("input",o),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};i.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var u=i,c=l(374),s=function(e){var a=e.format,l=e.time,t=e.min,r=e.max,o=e.months,i=e.value,u=e.label,s=e.prefixValue,d=e.prefixType,p=e.fulldate,m=e.mode,b=e.allowinput,f=e.required,v=e.id,g={id:v,className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":a||null,"data-datepicker-time":l||null,"data-datepicker-min":t||null,"data-datepicker-max":r||null,"data-datepicker-value":i||null,"data-datepicker-months":o||null,"data-datepicker-fulldate":p||null,"data-datepicker-mode":m||null,"data-datepicker-allowinput":b||null,"data-required":f||null};return u?n.a.createElement("div",{className:"form-group"},"\n",n.a.createElement("label",{htmlFor:v||null},u),"\n",n.a.createElement("div",{className:"input-group"},"\n",s?n.a.createElement(c.Addon,{type:d,value:s}):null,"\n",n.a.createElement("input",g),"\n")):n.a.createElement("input",g)};s.propTypes={format:o.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:o.a.bool,min:o.a.string,max:o.a.string,months:o.a.string,value:o.a.string,label:o.a.string,id:o.a.string,required:o.a.bool};var d=s,p=function(e){var a=e.text,l=e.label;return n.a.createElement("div",{className:"form-group"},"\n",l?n.a.createElement("label",null,l):null,l?"\n":null,n.a.createElement("span",{className:"form-control-text"},a),"\n")};p.propTypes={text:o.a.string.isRequired,label:o.a.string};var m=p,b=function(e){var a=e.id,l=e.checked,t=e.disabled,r=e.label,o={type:"radio",id:a||null,name:e.name||null,disabled:t||null,defaultChecked:l||null};return n.a.createElement("div",{className:"radio"},"\n",n.a.createElement("input",o),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};b.propTypes={id:o.a.string,name:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var f=b,v=function(e){var a=e.name,l=e.min,t=e.max,r=e.step,o=e.color,i=e.value,u=e.disabled,c=e.valueLabel,s=e.valueLabelPrefix,d=e.valueLabelPostfix,p=e.valueLabelPosition,m={type:"range",name:a,min:l,max:t,step:r,defaultValue:i,disabled:u};return n.a.createElement("div",{className:"rangeslider rangeslider-".concat(o||"brand"," label-").concat(p||"right")},"\n",n.a.createElement("input",m),c?"\n":null,c?n.a.createElement(function(){return n.a.createElement("output",{className:"value-label"},"\n\t\t",n.a.createElement("p",null,"\n\t\t\t",s?n.a.createElement("span",null,s):null,s?"\n\t\t\t":null,n.a.createElement("span",{"data-rs-value":!0},i),"\n\t\t\t",d?n.a.createElement("span",null,d):null,d?"\n\t\t":null),"\n\t")},null):null,c?"\n":null)};v.propTypes={name:o.a.string,min:o.a.number,max:o.a.number,step:o.a.number,color:o.a.oneOf(["brand","neutral","default"]),value:o.a.number,disabled:o.a.bool,valueLabel:o.a.bool,valueLabelPrefix:o.a.string,valueLabelPostfix:o.a.string,valueLabelPosition:o.a.string};var g=v,y=function(e){var a=e.id,l=e.checked,t=e.disabled,r=e.label,o={type:"checkbox",id:a||null,disabled:t||null,defaultChecked:l||null};return n.a.createElement("div",{className:"togglebox"},"\n",n.a.createElement("input",o),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};y.propTypes={id:o.a.string,checked:o.a.bool,disabled:o.a.bool,label:o.a.string};var x=y;l.d(a,"Checkbox",function(){return u}),l.d(a,"Datepicker",function(){return d}),l.d(a,"FormControlText",function(){return m}),l.d(a,"Radio",function(){return f}),l.d(a,"Rangeslider",function(){return g}),l.d(a,"Togglebox",function(){return x});a.default={Checkbox:u,Datepicker:d,FormControlText:m,Radio:f,Rangeslider:g,Togglebox:x}},457:function(e,a){(function(a){e.exports=a}).call(this,{})},458:function(e,a,l){var t;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],a=0;a<arguments.length;a++){var l=arguments[a];if(l){var t=n(l);if("string"===t||"number"===t)e.push(l);else if(Array.isArray(l)&&l.length){var i=o.apply(null,l);i&&e.push(i)}else if("object"===t)for(var u in l)r.call(l,u)&&l[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===n(l(457))&&l(457)?void 0===(t=function(){return o}.apply(a,[]))||(e.exports=t):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_85.js.map?a7f2a444333a64febc67