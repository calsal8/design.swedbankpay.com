(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[55,44,46,47,48,49,50],{417:function(e,t,a){"use strict";a.r(t),a.d(t,"Property",function(){return c});var n=a(1),r=a.n(n),l=a(2),o=a.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,a=e.name,n=e.value;return a&&n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),n,r.a.createElement("span",{className:"token punctuation"},'"'))):a&&!n?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},a)):!a&&n?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},n)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},418:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t=e.id,a=e.type,n=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(a)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},419:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(418);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},420:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(418);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},421:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:a.n(l).a.string.isRequired},t.default=o},422:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(2),l=a.n(r),o=function(e){var t,a,n=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(a=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),a,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},426:function(e,t,a){"use strict";a.r(t);var n=a(417);a.d(t,"Attribute",function(){return n.default}),a.d(t,"Property",function(){return n.Property});var r=a(423);a.d(t,"ComponentPreview",function(){return r.default});var l=a(424);a.d(t,"DocHeading",function(){return l.default});var o=a(425);a.d(t,"DocToc",function(){return o.default});var c=a(419);a.d(t,"DeprecatedComponentAlert",function(){return c.default});var u=a(420);a.d(t,"ExperimentalComponentAlert",function(){return u.default});var i=a(421);a.d(t,"Icon",function(){return i.default});var s=a(422);a.d(t,"PxScript",function(){return s.default})},431:function(e,t,a){"use strict";a.d(t,"a",function(){return P});var O=a(1),T=a.n(O),n=a(2),r=a.n(n),l=a(115),V=a.n(l),P=function(e){var t=e.type,a=e.value,n=e.color;return"button"===t?T.a.createElement("button",{type:"button",className:"btn btn-".concat(n)},a):T.a.createElement("span",{className:"input-group-addon"},"icon"===t?T.a.createElement("i",{className:"material-icons"},a):a)},B=function(e){var t=e.icon;return T.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",T.a.createElement("i",{className:"material-icons"},t),"\n\t")},o=function(e){var t=e.id,a=e.type,n=e.placeholder,r=e.pattern,l=e.validate,o=e.required,c=e.defaultValue,u=e.autoComplete,i=e.disabled,s=e.readOnly,p=e.label,m=e.validationState,d=e.selectOptions,f=e.prefixValue,E=e.prefixType,b=e.prefixBtnColor,y=e.postfixValue,g=e.postfixType,v=e.postfixBtnColor,h=e.feedbackIcon,x=e.helpBlock,N=e.errorMessage,k=e.successMessage,w={type:a||null,className:"form-control",id:t||null,placeholder:n||null,defaultValue:c||"",disabled:i||null,readOnly:s||null,autoComplete:u||null,required:o||null,pattern:r?"":null,"data-validate":l?"":null},C=V()("input-group",m?"has-".concat(m):null,h?"has-feedback":null);return T.a.createElement("div",{className:"form-group"},"\n",p?T.a.createElement("label",{htmlFor:t},p):null,p?"\n":null,T.a.createElement("div",{className:C},"\n",f?T.a.createElement(P,{type:E,value:f,color:b}):null,f?"\n":null,"textarea"===a?T.a.createElement("textarea",w):"select"===a?T.a.createElement("select",{className:"form-control",disabled:i,readOnly:s},"\n\t\t",d.map(function(e,t){return T.a.createElement(O.Fragment,{key:e+t},T.a.createElement("option",null,e),t!==d.length-1?"\n\t\t":"")}),"\n\t"):T.a.createElement("input",w),"\n",h?T.a.createElement(B,{icon:h}):null," ",h?"\n":null,y?T.a.createElement(P,{type:g,value:y,color:v}):null,y?"\n":null),x?T.a.createElement("div",{className:"help-block","data-success":k||null,"data-error":N||null},x):null)};o.propTypes={type:r.a.string.isRequired,id:r.a.string,placeholder:r.a.string,pattern:r.a.string,validate:r.a.bool,required:r.a.bool,defaultValue:r.a.string,autoComplete:r.a.string,disabled:r.a.bool,readOnly:r.a.bool,label:r.a.string,validationState:r.a.oneOf(["success","error",""]),selectOptions:r.a.array,prefixValue:r.a.string,prefixType:r.a.oneOf(["button","icon",""]),prefixBtnColor:r.a.oneOf(["primary","secondary","danger"]),postfixValue:r.a.string,postfixType:r.a.oneOf(["button","icon",""]),postfixBtnColor:r.a.oneOf(["primary","secondary","danger"]),feedbackIcon:r.a.string,helpBlock:r.a.string,errorMessag:r.a.string,successMessag:r.a.string},t.b=o},453:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicExample",function(){return m}),a.d(t,"CheckboxesAndRadios",function(){return d}),a.d(t,"ButtonAddons",function(){return f}),a.d(t,"WithSelect",function(){return E}),a.d(t,"WithFeedbackIcon",function(){return b}),a.d(t,"ValidationStates",function(){return y}),a.d(t,"Disabled",function(){return g}),a.d(t,"InputGroupText",function(){return v});var l=a(1),o=a.n(l),c=a(426),n=a(431);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-example"},"Basic example"),o.a.createElement("p",null,"Basic input group..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(n.b,{id:"input-id-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr."})," ","\n\n",o.a.createElement(n.b,{id:"input-id-2",type:"text",label:"Email",placeholder:"Email",prefixType:"icon",prefixValue:"email"})," ","\n\n",o.a.createElement(n.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"})," ","\n\n",o.a.createElement(n.b,{id:"input-id-4",type:"textarea",label:"Notes",placeholder:"Special requests",prefixType:"icon",prefixValue:"format_quote"})))},d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),o.a.createElement("p",null,"Place any checkbox or radio option within an input group’s addon instead of text."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},"\n",o.a.createElement("span",{className:"input-group-addon"},"\n\t\t",o.a.createElement("input",{type:"checkbox"}),"\n\t"),"\n",o.a.createElement("input",{type:"text",className:"form-control"}),"\n")),"\n\n",o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},"\n",o.a.createElement("span",{className:"input-group-addon"},"\n\t\t",o.a.createElement("input",{type:"radio"}),"\n\t"),"\n",o.a.createElement("input",{type:"text",className:"form-control"}),"\n"))))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-addons"},"Button addons"),o.a.createElement("p",null,"Addons..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(n.b,{type:"text",postfixType:"button",postfixValue:"Button",postfixBtnColor:"primary"})," ","\n\n",o.a.createElement(n.b,{type:"text",prefixType:"button",prefixValue:"Button",prefixBtnColor:"secondary",postfixType:"button",postfixValue:"Button",postfixBtnColor:"danger"})))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"with-select"},"With select"),o.a.createElement("p",null,"Select..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(n.b,{type:"select",selectOptions:["Bounty hunter","Smuggler","Jedi"],prefixValue:"Profession"})))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"with-feedback"},"With feedback"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(n.b,{id:"input-with-feedback-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr.",feedbackIcon:"cancel"})))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"validation-states"},"Validation states"),o.a.createElement("p",null,"Validation..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(n.b,{type:"text",validationState:"success",placeholder:"Name",prefixValue:"Mr.",defaultValue:"Anderson"})," ","\n\n",o.a.createElement(n.b,{type:"text",validationState:"error",placeholder:"Name",prefixValue:"Agent",defaultValue:"Smith"})))},g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled"},"Disabled"),o.a.createElement("p",null,"Disabled blabla..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(n.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",disabled:!0,prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"}),o.a.createElement(n.b,{id:"input-id-4",type:"textarea",label:"Special requests",placeholder:"Extra frosting, no pineapple...",disabled:!0,prefixType:"icon",prefixValue:"format_quote"}),o.a.createElement(n.b,{type:"select",selectOptions:["Option one","Option two","Option three"],label:"Flavor",prefixValue:"Options",disabled:!0})))},v=function(){return o.a.createElement("div",{className:"col-md-12 col-lg-10 doc-body"},o.a.createElement("p",{className:"lead"},"Input groups..."),o.a.createElement(m,null),o.a.createElement(f,null),o.a.createElement(E,null),o.a.createElement(y,null),o.a.createElement(g,null))},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,s(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"doc-container"},o.a.createElement("div",{className:"row"},o.a.createElement(v,null),o.a.createElement(c.DocToc,{component:v})))}}])&&u(a.prototype,n),r&&u(a,r),t}();t.default=h}}]);
//# sourceMappingURL=doc-route.chunk_9.js.map?a939d09beb4e9ecabced