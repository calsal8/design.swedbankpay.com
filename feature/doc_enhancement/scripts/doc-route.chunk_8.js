(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[54,3,44,45,46,47,48,49,50],{417:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return i});var n=t(1),l=t.n(n),r=t(2),o=t.n(r),i=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},c=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};c.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},i.propTypes={value:o.a.string.isRequired},a.default=c},418:function(e,a,t){"use strict";var n=t(1),i=t.n(n),l=t(2),r=t.n(l),o=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,r=e.text,o=e.children;return i.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?i.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?i.a.createElement("p",null,r):null,o?"\n":"",o?i.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?i.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",i.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=o},419:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(418);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},420:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(418);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},421:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(2),o=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};o.propTypes={icon:t.n(r).a.string.isRequired},a.default=o},422:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(2),r=t.n(l),o=function(e){var a,t,n=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(t=l.map(function(e,a){return i.a.createElement("span",{key:a},e,i.a.createElement("span",{className:"token punctuation"},"."))})),o&&(a=o.map(function(e,a){return i.a.createElement("span",{key:a},e,a<o.length-1?i.a.createElement("span",{className:"token punctuation"},", "):null)})),i.a.createElement("code",null,i.a.createElement("span",null,"px"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",null,n),i.a.createElement("span",{className:"token punctuation"},"."),t,i.a.createElement("span",{className:"token function"},r),i.a.createElement("span",{className:"token punctuation"},"("),a,i.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=o},423:function(e,a,t){"use strict";t.r(a);var n=t(1),m=t.n(n),l=t(2),r=t.n(l),d=t(427),o=t(428),p=t.n(o),b=t(429);function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e){var n=e.children,l=e.language,r=e.removeOuterTag,o=e.hideValue,i=e.removeList,a=e.showCasePanel,t=e.codeFigure,c=e.dangerousHTML,u=function(e){var a=document.createElement("div");return a.innerHTML=Object(d.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var a=document.createElement("div");a.innerHTML=Object(d.renderToStaticMarkup)(e);var t=a.querySelectorAll("li"),n="";return t.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return m.a.createElement(m.a.Fragment,null,a?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},n)},null):null,t?m.a.createElement(function(){var e,a,t="";if("html"===l&&c)a="","function"==typeof(e=n).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,t=a;else if("html"===l&&n&&"function"==typeof n.map)n.map(function(e){t+=r?u(e):i?s(e):Object(d.renderToStaticMarkup)(e)});else if("html"===l)t+=r?u(n):i?s(n):Object(d.renderToStaticMarkup)(n);else switch(h(n)){case"string":t=n;break;case"object":n.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(l){case"html":t=(t=p.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=p.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return b.b.style="",m.a.createElement("figure",null,m.a.createElement(b.a,f({},b.b,{theme:void 0,code:t,language:l}),function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return m.a.createElement("pre",{className:a,style:t},n.map(function(e,a){return m.a.createElement("div",f({key:e+a},l({line:e,key:a})),e.map(function(e,a){return m.a.createElement("span",f({key:a},r({token:e,key:a})))}))}))}))},null):null)};i.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},a.default=i},426:function(e,a,t){"use strict";t.r(a);var n=t(417);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(423);t.d(a,"ComponentPreview",function(){return l.default});var r=t(424);t.d(a,"DocHeading",function(){return r.default});var o=t(425);t.d(a,"DocToc",function(){return o.default});var i=t(419);t.d(a,"DeprecatedComponentAlert",function(){return i.default});var c=t(420);t.d(a,"ExperimentalComponentAlert",function(){return c.default});var u=t(421);t.d(a,"Icon",function(){return u.default});var s=t(422);t.d(a,"PxScript",function(){return s.default})},431:function(e,a,t){"use strict";t.d(a,"a",function(){return O});var N=t(1),T=t.n(N),n=t(2),l=t.n(n),r=t(115),F=t.n(r),O=function(e){var a=e.type,t=e.value,n=e.color;return"button"===a?T.a.createElement("button",{type:"button",className:"btn btn-".concat(n)},t):T.a.createElement("span",{className:"input-group-addon"},"icon"===a?T.a.createElement("i",{className:"material-icons"},t):t)},S=function(e){var a=e.icon;return T.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",T.a.createElement("i",{className:"material-icons"},a),"\n\t")},o=function(e){var a=e.id,t=e.type,n=e.placeholder,l=e.pattern,r=e.validate,o=e.required,i=e.defaultValue,c=e.autoComplete,u=e.disabled,s=e.readOnly,m=e.label,d=e.validationState,p=e.selectOptions,b=e.prefixValue,f=e.prefixType,h=e.prefixBtnColor,E=e.postfixValue,g=e.postfixType,v=e.postfixBtnColor,y=e.feedbackIcon,x=e.helpBlock,k=e.errorMessage,w=e.successMessage,C={type:t||null,className:"form-control",id:a||null,placeholder:n||null,defaultValue:i||"",disabled:u||null,readOnly:s||null,autoComplete:c||null,required:o||null,pattern:l?"":null,"data-validate":r?"":null},P=F()("input-group",d?"has-".concat(d):null,y?"has-feedback":null);return T.a.createElement("div",{className:"form-group"},"\n",m?T.a.createElement("label",{htmlFor:a},m):null,m?"\n":null,T.a.createElement("div",{className:P},"\n",b?T.a.createElement(O,{type:f,value:b,color:h}):null,b?"\n":null,"textarea"===t?T.a.createElement("textarea",C):"select"===t?T.a.createElement("select",{className:"form-control",disabled:u,readOnly:s},"\n\t\t",p.map(function(e,a){return T.a.createElement(N.Fragment,{key:e+a},T.a.createElement("option",null,e),a!==p.length-1?"\n\t\t":"")}),"\n\t"):T.a.createElement("input",C),"\n",y?T.a.createElement(S,{icon:y}):null," ",y?"\n":null,E?T.a.createElement(O,{type:g,value:E,color:v}):null,E?"\n":null),x?T.a.createElement("div",{className:"help-block","data-success":w||null,"data-error":k||null},x):null)};o.propTypes={type:l.a.string.isRequired,id:l.a.string,placeholder:l.a.string,pattern:l.a.string,validate:l.a.bool,required:l.a.bool,defaultValue:l.a.string,autoComplete:l.a.string,disabled:l.a.bool,readOnly:l.a.bool,label:l.a.string,validationState:l.a.oneOf(["success","error",""]),selectOptions:l.a.array,prefixValue:l.a.string,prefixType:l.a.oneOf(["button","icon",""]),prefixBtnColor:l.a.oneOf(["primary","secondary","danger"]),postfixValue:l.a.string,postfixType:l.a.oneOf(["button","icon",""]),postfixBtnColor:l.a.oneOf(["primary","secondary","danger"]),feedbackIcon:l.a.string,helpBlock:l.a.string,errorMessag:l.a.string,successMessag:l.a.string},a.b=o},432:function(e,a,t){"use strict";var n=t(1),y=t.n(n),l=t(2),r=t.n(l),o=t(115),x=t.n(o);function k(){return(k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i=function(e){var a=e.label,t=e.id,n=e.name,l=e.value,r=e.href,o=e.icon,i=e.loading,c=e.type,u=e.disabled,s=e.btnType,m=e.fullWidth,d=e.loader,p=e.pullRight,b=e.input,f=e.outline,h=e.active,E=e.size,g=x()("btn","btn-".concat(f?"outline-":"").concat(c),E?"btn-".concat(E):null,i?"loading":null,m?"btn-block":null,p?"pull-right":null,h?"active":null),v={href:r,id:t,name:n,disabled:u,"data-button-loader":d?"":null,defaultValue:l};return r?v.role="button":v.type=s||"button",r?y.a.createElement("a",k({className:g},v),o?"\n\t":null,o?y.a.createElement("i",{className:"material-icons"},o):null,o&&a?y.a.createElement("span",null,a):a):b?y.a.createElement("input",k({className:g},v)):y.a.createElement("button",k({className:g},v),o?"\n\t\t":null,o?y.a.createElement("i",{className:"material-icons"},o):null,o?"\n\t\t":null,o&&a?y.a.createElement("span",null,a):a,o?"\n\t":null)};i.propTypes={type:r.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},a.a=i},435:function(e,a,t){"use strict";var n=t(1),p=t.n(n),l=t(2),r=t.n(l),o=function(e){var a=e.id,t=e.checked,n=e.disabled,l=e.label,r={type:"checkbox",id:a||null,disabled:n||null,defaultChecked:t||null};return p.a.createElement("div",{className:"checkbox"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:a},l):null,l?"\n":null)};o.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var i=o,b=t(431),c=function(e){var a=e.format,t=e.time,n=e.min,l=e.max,r=e.months,o=e.value,i=e.label,c=e.required,u=e.prefixValue,s=e.prefixType,m=e.id,d={className:"form-control",type:"text","data-datepicker":"","data-datepicker-format":a||null,"data-datepicker-time":t||null,"data-datepicker-min":n||null,"data-datepicker-max":l||null,"data-datepicker-value":o||null,"data-datepicker-months":r||null,"data-required":c||null,id:m};return i?p.a.createElement("div",{className:"form-group"},"\n",p.a.createElement("label",{htmlFor:m||null},i),"\n",p.a.createElement("div",{className:"input-group"},"\n",u?p.a.createElement(b.a,{type:s,value:u}):null,"\n",p.a.createElement("input",d),"\n")):p.a.createElement("input",d)};c.propTypes={format:r.a.oneOf(["nb","sv","da","fi","en","iso8601"]),time:r.a.bool,min:r.a.string,max:r.a.string,months:r.a.string,value:r.a.string,label:r.a.string,id:r.a.string,required:r.a.bool};var u=c,s=function(e){var a=e.text,t=e.label;return p.a.createElement("div",{className:"form-group"},"\n",t?p.a.createElement("label",null,t):null,t?"\n":null,p.a.createElement("span",{className:"form-control-text"},a),"\n")};s.propTypes={text:r.a.string.isRequired,label:r.a.string};var m=s,d=function(e){var a=e.id,t=e.checked,n=e.disabled,l=e.label,r={type:"radio",id:a||null,name:e.name||null,disabled:n||null,defaultChecked:t||null};return p.a.createElement("div",{className:"radio"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:a},l):null,l?"\n":null)};d.propTypes={id:r.a.string,name:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var f=d,h=function(e){var a=e.name,t=e.min,n=e.max,l=e.step,r=e.color,o=e.value,i=e.disabled,c=e.valueLabel,u=e.valueLabelPrefix,s=e.valueLabelPostfix,m=e.valueLabelPosition,d={type:"range",name:a,min:t,max:n,step:l,defaultValue:o,disabled:i};return p.a.createElement("div",{className:"rangeslider rangeslider-".concat(r||"brand"," label-").concat(m||"right")},"\n",p.a.createElement("input",d),c?"\n":null,c?p.a.createElement(function(){return p.a.createElement("output",{className:"value-label"},"\n\t\t",p.a.createElement("p",null,"\n\t\t\t",u?p.a.createElement("span",null,u):null,u?"\n\t\t\t":null,p.a.createElement("span",{"data-rs-value":!0},o),"\n\t\t\t",s?p.a.createElement("span",null,s):null,s?"\n\t\t":null),"\n\t")},null):null,c?"\n":null)};h.propTypes={name:r.a.string,min:r.a.number,max:r.a.number,step:r.a.number,color:r.a.oneOf(["brand","neutral","default"]),value:r.a.number,disabled:r.a.bool,valueLabel:r.a.bool,valueLabelPrefix:r.a.string,valueLabelPostfix:r.a.string,valueLabelPosition:r.a.string};var E=h,g=function(e){var a=e.id,t=e.checked,n=e.disabled,l=e.label,r={type:"checkbox",id:a||null,disabled:n||null,defaultChecked:t||null};return p.a.createElement("div",{className:"togglebox"},"\n",p.a.createElement("input",r),"\n",l?p.a.createElement("label",{htmlFor:a},l):null,l?"\n":null)};g.propTypes={id:r.a.string,checked:r.a.bool,disabled:r.a.bool,label:r.a.string};var v=g;t.d(a,"a",function(){return i}),t.d(a,"b",function(){return u}),t.d(a,"c",function(){return m}),t.d(a,"d",function(){return f}),t.d(a,"e",function(){return E}),t.d(a,"f",function(){return v})},452:function(e,a,t){"use strict";t.r(a),t.d(a,"Overview",function(){return E}),t.d(a,"FormGrid",function(){return g}),t.d(a,"Validation",function(){return v}),t.d(a,"UsageWithFieldsets",function(){return y}),t.d(a,"StaticText",function(){return x}),t.d(a,"Checkboxes",function(){return k}),t.d(a,"DisabledCheckboxes",function(){return w}),t.d(a,"RadioButtons",function(){return C}),t.d(a,"DisabledRadioButtons",function(){return P}),t.d(a,"Toggleboxes",function(){return N}),t.d(a,"DisabledToggleboxes",function(){return T}),t.d(a,"RangeSlider",function(){return F}),t.d(a,"DisabledRangeSlider",function(){return O}),t.d(a,"FormsText",function(){return S});var r=t(1),o=t.n(r),n=t(430),l=t.n(n),i=t(426),c=t(75),u=t(431),s=t(432),m=t(435);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,a){return!a||"object"!==d(a)&&"function"!=typeof a?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):a}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"overview"},"Overview"),o.a.createElement("p",null,"Forms overview..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement(u.b,{id:"first-name",type:"text",autoComplete:"given-name",label:"First name",placeholder:"Enter your first name",helpBlock:"The first word of your full name"}),o.a.createElement(u.b,{id:"last-name",type:"text",label:"Last name",autoComplete:"family-name",placeholder:"Enter your last name",helpBlock:"The very last collection of letters in your name"}),o.a.createElement(u.b,{id:"email-address",type:"text",label:"Email",autoComplete:"email",placeholder:"Enter your email",helpBlock:"The last part is probably @payex.com"}),o.a.createElement("div",{className:"form-group"},o.a.createElement(m.a,{label:"Subscribe to our Shovels and Tapestry catalogue",id:"subscribe-checkbox"})),"\n",o.a.createElement(s.a,{type:"primary",label:"Submit",btnType:"submit"}),"\n")))},g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"form-grid"},"Form grid"),o.a.createElement("p",null,"Form grid..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5"},o.a.createElement(u.b,{id:"grid-first-name",type:"text",autoComplete:"given-name",label:"First name",placeholder:"Enter your first name",helpBlock:"Hope it is something cool"})),o.a.createElement("div",{className:"col-5"},o.a.createElement(u.b,{id:"grid-last-name",type:"text",label:"Last name",autoComplete:"family-name",placeholder:"Enter your last name",helpBlock:"Most likely in your passport"})),o.a.createElement("div",{className:"col-2"},o.a.createElement("div",{className:"form-group"},"\n",o.a.createElement("br",null),"\n",o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search"),"\n"))))))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"validation"},"Validation overview"),o.a.createElement("p",null,"To use our validation, start by adding the attribute ",o.a.createElement(i.Attribute,{name:"novalidate"})," to your ",o.a.createElement(l.a,{className:"language-html"},"<form>")," element. If you wish to validate your entire form, add the ",o.a.createElement(i.Attribute,{data:!0,name:"validate"})," attribute to the ",o.a.createElement(l.a,{className:"language-html"},"<form>")," tag, if not add it to the desired ",o.a.createElement(l.a,{className:"language-html"},"<input>")," tags."),o.a.createElement("p",null,"Validates against ",o.a.createElement(i.Attribute,{name:"required"})," and ",o.a.createElement(i.Attribute,{name:"pattern"}),". Using ",o.a.createElement(i.Attribute,{name:"pattern"})," overrides default patterns."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{noValidate:!0,"data-validate":""},o.a.createElement(u.b,{id:"validation-name-1",type:"text",label:"Name",placeholder:"Enter your name",helpBlock:"This one should be easy"}),o.a.createElement(u.b,{id:"validation-email-1",type:"email",label:"Email",placeholder:"Enter your email",helpBlock:"This one should be pretty easy too"}),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))),o.a.createElement("h3",null,"Feedback"),o.a.createElement("p",null,"To give users validation feedback on each input insert the message in the attributes ",o.a.createElement(i.Attribute,{data:!0,name:"success"})," and ",o.a.createElement(i.Attribute,{data:!0,name:"error"})," in the ",o.a.createElement(i.Attribute,{value:".help-block"})," element."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{action:"#",noValidate:!0,"data-validate":""},o.a.createElement(u.b,{required:!0,id:"validation-email-2",type:"email",label:"Email",placeholder:"bob.corlsan@example.com",prefixType:"icon",prefixValue:"email",helpBlock:"This one might be a little tricky",successMessage:"Right!",errorMessage:"Wrong!"}),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))),o.a.createElement("h3",null,"Dynamically disabled submit button"),o.a.createElement("p",null,"You can also dynamically disable the submit button by adding ",o.a.createElement(i.Attribute,{data:!0,name:"disable-invalid"})," to the ",o.a.createElement(l.a,{className:"language-html"},'<button type="submit">')," element."),o.a.createElement("p",null,o.a.createElement("b",null,"NOTE:")," For this to work you also need the ",o.a.createElement(i.Attribute,{data:!0,name:"validate"})," attribute to be present in the ",o.a.createElement(l.a,{className:"language-html"},"<form>")," tag."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{action:"#",noValidate:!0,"data-validate":""},o.a.createElement(u.b,{required:!0,id:"validation-email-3",type:"email",label:"Email",placeholder:"bob.corlsan@example.com",prefixType:"icon",prefixValue:"email",helpBlock:"Keep your eye on that submit button",successMessage:"Right!",errorMessage:"Wrong!"}),"\n",o.a.createElement("button",{className:"btn btn-primary",type:"submit","data-disable-invalid":""},"Submit"))))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-fieldsets"},"Usage with fieldsets"),o.a.createElement("p",null,"Usage with fieldsets..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Log in"),o.a.createElement(u.b,{id:"fieldset-username",type:"text",autoComplete:"username",label:"Username",placeholder:"Enter your username"}),o.a.createElement(u.b,{id:"fieldset-password",type:"password",label:"Password",autoComplete:"current-password",placeholder:"Enter your password"}),o.a.createElement(m.a,{label:"Remember me",id:"fieldset-checkbox"})),"\n",o.a.createElement(s.a,{type:"primary",label:"Log in",btnType:"submit"}),"\n")),o.a.createElement("h3",null,"Disable a fieldset"),o.a.createElement("p",null,"Disable entire fieldsets with ",o.a.createElement(i.Attribute,{name:"disabled"})," attribute..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("form",null,o.a.createElement("fieldset",{disabled:!0},o.a.createElement("legend",null,"Log in"),o.a.createElement(u.b,{id:"fieldset-disabled-username",type:"text",autoComplete:"username",label:"Username",placeholder:"Enter your username"}),o.a.createElement(u.b,{id:"fieldset-disabled-password",type:"password",label:"Password",autoComplete:"current-password",placeholder:"Enter your password"}),o.a.createElement(m.a,{label:"Remember me",id:"fieldset-disabled-checkbox"})),"\n",o.a.createElement(s.a,{type:"primary",label:"Log in",btnType:"submit",disabled:!0}),"\n")))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"static-text"},"Static text"),o.a.createElement("p",null,"Static text..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.c,{label:"Company",text:"PayEx"}),o.a.createElement(m.c,{label:"Employee",text:"Bob Corlsan"})))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"checkboxes"},"Checkboxes"),o.a.createElement("p",null,"Checkboxes..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.a,{label:"Bread",id:"checkbox-example-1"}),o.a.createElement(m.a,{label:"Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long.",id:"checkbox-example-2"}),o.a.createElement(m.a,{label:"Milk",id:"checkbox-example-3",checked:!0})))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-checkboxes"},"Disabled checkboxes"),o.a.createElement("p",null,"Disabled checkboxes..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.a,{label:"Bread",id:"checkbox-disabled-example-1",disabled:!0}),o.a.createElement(m.a,{label:"Not bread. I'm not really fond of it. What I would really like, however, is one single piece of cracker with some nutella on it. Perhaps this could be the second checkbox. These thoughts are written here simply to show you how the checkboxes align themselves when label text is fairly long.",id:"checkbox-disabled-example-2",disabled:!0}),o.a.createElement(m.a,{label:"Milk",id:"checkbox-disabled-example-3",disabled:!0,checked:!0})))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"radio-buttons"},"Radio buttons"),o.a.createElement("p",null,"Radio buttons..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.d,{label:"Hamburgers",id:"radio-example-1",name:"radio-example"}),o.a.createElement(m.d,{label:"Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long.",id:"radio-example-2",name:"radio-example"}),o.a.createElement(m.d,{label:"Pizza",id:"radio-example-3",name:"radio-example",checked:!0})))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-radio-buttons"},"Disabled radio buttons"),o.a.createElement("p",null,"Disabled radio buttons..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.d,{label:"Hamburgers",id:"radio-disabled-example-1",name:"radio-disabled-example",disabled:!0}),o.a.createElement(m.d,{label:"Not the one above because I'm not really fond of hamburgers. What I would really like, however, is a nice piece of steak. Perhaps that could be the second option. These thoughts are written here simply to show you how radio buttons align themselves when label text is fairly long.",id:"radio-disabled-example-2",name:"radio-disabled-example",disabled:!0}),o.a.createElement(m.d,{label:"Pizza",id:"radio-disabled-example-3",name:"radio-disabled-example",disabled:!0,checked:!0})))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"toggleboxes"},"Toggleboxes"),o.a.createElement("p",null,"Toggleboxes..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.f,{id:"togglebox-example-1",label:"Enable overdrive"}),o.a.createElement(m.f,{id:"togglebox-example-2",label:"Enable superpowers",checked:!0})))},T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-toggleboxes"},"Disabled toggleboxes"),o.a.createElement("p",null,"Disabled toggleboxes..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.f,{id:"togglebox-disabled-example-1",label:"Enable overdrive",disabled:!0}),o.a.createElement(m.f,{id:"togglebox-disabled-example-2",label:"Enable superpowers",disabled:!0,checked:!0})))},F=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"rangeslider"},"Rangeslider"),o.a.createElement("p",null,"Asides from the default behavior of a range input, the Rangeslider","'","s colors and label positioning can be customized."),o.a.createElement("p",null,"Currently there are three different supported colors for the slider: ",o.a.createElement(i.Property,{value:".rangeslider-brand"}),", ",o.a.createElement(i.Property,{value:".rangeslider-default"})," and ",o.a.createElement(i.Property,{value:".rangeslider-neutral"}),"."),o.a.createElement("p",null,"The Rangeslider currently supports two positions: ",o.a.createElement(i.Property,{value:".label-right"})," and ",o.a.createElement(i.Property,{value:".label-top"}),". If no position is given, ",o.a.createElement(i.Property,{value:"right"})," is defaulted."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.e,{min:0,max:200,step:1,value:100,valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%"})),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.e,{min:0,max:200,step:1,value:100,color:"neutral",valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%",valueLabelPosition:"top"})))},O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-rangeslider"},"Disabled rangeslider"),o.a.createElement("p",null,"Disabled rangeslider..."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(m.e,{min:0,max:200,step:1,value:100,valueLabel:!0,valueLabelPrefix:"$",valueLabelPostfix:"%",disabled:!0})))},S=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Forms..."),o.a.createElement(E,null),o.a.createElement(g,null),o.a.createElement(v,null),o.a.createElement(y,null),o.a.createElement(x,null),o.a.createElement(k,null),o.a.createElement(w,null),o.a.createElement(C,null),o.a.createElement(P,null),o.a.createElement(N,null),o.a.createElement(T,null),o.a.createElement(F,null),o.a.createElement(O,null))},L=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),b(this,f(a).apply(this,arguments))}var t,n,l;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(a,r["Component"]),t=a,(n=[{key:"componentDidMount",value:function(){c.rangeslider.init(),c.validation.init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(S,null),o.a.createElement(i.DocToc,{component:S})))}}])&&p(t.prototype,n),l&&p(t,l),a}();a.default=L}}]);
//# sourceMappingURL=doc-route.chunk_8.js.map?375bb1f8d0f115b03a72