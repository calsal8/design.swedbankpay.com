(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[54,13,106],{373:function(e,a,t){"use strict";t.r(a),t.d(a,"Addon",function(){return c});var l=t(1),n=t.n(l),r=t(14),i=t.n(r),o=t(471),u=t.n(o),c=function(e){var a=e.type,t=e.value,l=e.color,r=e.disabled;return"button"===a?n.a.createElement("button",{type:"button",className:"btn btn-".concat(l),disabled:r},t):n.a.createElement("span",{className:"input-group-addon"},"icon"===a?n.a.createElement("i",{className:"material-icons"},t):t)},s=function(e){var a=e.icon;return n.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",n.a.createElement("i",{className:"material-icons"},a),"\n\t")},d=function(e){var a=e.id,t=e.type,r=e.placeholder,i=e.pattern,o=e.validate,d=e.required,p=e.defaultValue,m=e.autoComplete,f=e.disabled,b=e.readOnly,v=e.label,g=e.validationState,y=e.selectOptions,x=e.prefixValue,E=e.prefixType,k=e.prefixBtnColor,h=e.postfixValue,N=e.postfixType,T=e.postfixBtnColor,w=e.feedbackIcon,O=e.helpBlock,C=e.errorMessage,V=e.successMessage,F={type:t||null,className:"form-control",id:a||null,placeholder:r||null,defaultValue:p||"",disabled:f||null,readOnly:b||null,autoComplete:m||null,required:d||null,pattern:i?"":null,"data-validate":o?"":null},q=u()("input-group",g?"has-".concat(g):null,w?"has-feedback":null);return n.a.createElement("div",{className:"form-group"},"\n",v?n.a.createElement("label",{htmlFor:a},v):null,v?"\n":null,n.a.createElement("div",{className:q},"\n",x?n.a.createElement(c,{type:E,value:x,color:k,disabled:f}):null,x?"\n":null,"textarea"===t?n.a.createElement("textarea",F):"select"===t?n.a.createElement("select",{className:"form-control",disabled:f,readOnly:b},"\n\t\t",y.map(function(e,a){return n.a.createElement(l.Fragment,{key:e+a},n.a.createElement("option",null,e),a!==y.length-1?"\n\t\t":"")}),"\n\t"):n.a.createElement("input",F),"\n",w?n.a.createElement(s,{icon:w}):null," ",w?"\n":null,h?n.a.createElement(c,{type:N,value:h,color:T,disabled:f}):null,h?"\n":null),O?n.a.createElement("div",{className:"help-block","data-success":V||null,"data-error":C||null},O):null)};d.propTypes={type:i.a.string.isRequired,id:i.a.string,placeholder:i.a.string,pattern:i.a.string,validate:i.a.bool,required:i.a.bool,defaultValue:i.a.string,autoComplete:i.a.string,disabled:i.a.bool,readOnly:i.a.bool,label:i.a.string,validationState:i.a.oneOf(["success","error",""]),selectOptions:i.a.array,prefixValue:i.a.string,prefixType:i.a.oneOf(["button","icon",""]),prefixBtnColor:i.a.oneOf(["executive","guiding","destructive"]),postfixValue:i.a.string,postfixType:i.a.oneOf(["button","icon",""]),postfixBtnColor:i.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:i.a.string,helpBlock:i.a.oneOfType([i.a.string,i.a.bool]),errorMessage:i.a.string,successMessage:i.a.string},a.default=d},375:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(14),i=t.n(r),o=function(e){var a=e.id,t=e.checked,l=e.disabled,r=e.label,i={type:"checkbox",id:a||null,disabled:l||null,defaultChecked:t||null};return n.a.createElement("div",{className:"checkbox"},"\n",n.a.createElement("input",i),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};o.propTypes={id:i.a.string,checked:i.a.bool,disabled:i.a.bool,label:i.a.string};var u=o,c=t(373),s=function(e){var a=e.format,t=e.time,l=e.min,r=e.max,i=e.months,o=e.value,u=e.label,s=e.prefixValue,d=e.prefixType,p=e.fulldate,m=e.mode,f=e.allowinput,b=e.required,v=e.id,g={id:v,className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":a||null,"data-datepicker-time":t||null,"data-datepicker-min":l||null,"data-datepicker-max":r||null,"data-datepicker-value":o||null,"data-datepicker-months":i||null,"data-datepicker-fulldate":p||null,"data-datepicker-mode":m||null,"data-datepicker-allowinput":f||null,"data-required":b||null};return u?n.a.createElement("div",{className:"form-group"},"\n",n.a.createElement("label",{htmlFor:v||null},u),"\n",n.a.createElement("div",{className:"input-group"},"\n",s?n.a.createElement(c.Addon,{type:d,value:s}):null,"\n",n.a.createElement("input",g),"\n")):n.a.createElement("input",g)};s.propTypes={format:i.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:i.a.bool,min:i.a.string,max:i.a.string,months:i.a.string,value:i.a.string,label:i.a.string,id:i.a.string,required:i.a.bool};var d=s,p=function(e){var a=e.text,t=e.label;return n.a.createElement("div",{className:"form-group"},"\n",t?n.a.createElement("label",null,t):null,t?"\n":null,n.a.createElement("span",{className:"form-control-text"},a),"\n")};p.propTypes={text:i.a.string.isRequired,label:i.a.string};var m=p,f=function(e){var a=e.id,t=e.checked,l=e.disabled,r=e.label,i={type:"radio",id:a||null,name:e.name||null,disabled:l||null,defaultChecked:t||null};return n.a.createElement("div",{className:"radio"},"\n",n.a.createElement("input",i),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};f.propTypes={id:i.a.string,name:i.a.string,checked:i.a.bool,disabled:i.a.bool,label:i.a.string};var b=f,v=function(e){var a=e.name,t=e.min,l=e.max,r=e.step,i=e.color,o=e.value,u=e.disabled,c=e.valueLabel,s=e.valueLabelPrefix,d=e.valueLabelPostfix,p=e.valueLabelPosition,m={type:"range",name:a,min:t,max:l,step:r,defaultValue:o,disabled:u};return n.a.createElement("div",{className:"rangeslider rangeslider-".concat(i||"brand"," label-").concat(p||"right")},"\n",n.a.createElement("input",m),c?"\n":null,c?n.a.createElement(function(){return n.a.createElement("output",{className:"value-label"},"\n\t\t",n.a.createElement("p",null,"\n\t\t\t",s?n.a.createElement("span",null,s):null,s?"\n\t\t\t":null,n.a.createElement("span",{"data-rs-value":!0},o),"\n\t\t\t",d?n.a.createElement("span",null,d):null,d?"\n\t\t":null),"\n\t")},null):null,c?"\n":null)};v.propTypes={name:i.a.string,min:i.a.number,max:i.a.number,step:i.a.number,color:i.a.oneOf(["brand","neutral","default"]),value:i.a.number,disabled:i.a.bool,valueLabel:i.a.bool,valueLabelPrefix:i.a.string,valueLabelPostfix:i.a.string,valueLabelPosition:i.a.string};var g=v,y=function(e){var a=e.id,t=e.checked,l=e.disabled,r=e.label,i={type:"checkbox",id:a||null,disabled:l||null,defaultChecked:t||null};return n.a.createElement("div",{className:"togglebox"},"\n",n.a.createElement("input",i),"\n",r?n.a.createElement("label",{htmlFor:a},r):null,r?"\n":null)};y.propTypes={id:i.a.string,checked:i.a.bool,disabled:i.a.bool,label:i.a.string};var x=y;t.d(a,"Checkbox",function(){return u}),t.d(a,"Datepicker",function(){return d}),t.d(a,"FormControlText",function(){return m}),t.d(a,"Radio",function(){return b}),t.d(a,"Rangeslider",function(){return g}),t.d(a,"Togglebox",function(){return x});a.default={Checkbox:u,Datepicker:d,FormControlText:m,Radio:b,Rangeslider:g,Togglebox:x}},378:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(375),i=window.dg.datepicker;a.default=function(){return Object(l.useEffect)(function(){i.init()}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(r.Datepicker,{value:"2000-01-01",label:"From:",prefixType:"icon",prefixValue:"event",fulldate:!0,id:"init-value-datepicker-from"})),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(r.Datepicker,{value:"2020-01-01",label:"To:",prefixType:"icon",prefixValue:"event",fulldate:!0,id:"init-value-datepicker-to"})))}},470:function(e,a){(function(a){e.exports=a}).call(this,{})},471:function(e,a,t){var l;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var l=n(t);if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)&&t.length){var o=i.apply(null,t);o&&e.push(o)}else if("object"===l)for(var u in t)r.call(t,u)&&t[u]&&e.push(u)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"object"===n(t(470))&&t(470)?void 0===(l=function(){return i}.apply(a,[]))||(e.exports=l):window.classNames=i}()}}]);
//# sourceMappingURL=doc-route.chunk_40.js.map?86afae5392683a4ac5be