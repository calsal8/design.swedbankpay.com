(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[56,5,46,48,49,50,52],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},u=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};u.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=u},421:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t=e.id,n=e.type,a=e.icon,r=e.close,l=e.text,o=e.children;return c.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?c.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?c.a.createElement("p",null,l):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,r?"\n":"",r?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=o},422:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(421);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"color-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},425:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),l=n.n(r),o=function(e){var t,n,a=e.component,r=e.subComponents,l=e.func,o=e.params;return r&&(n=r.map(function(e,t){return c.a.createElement("span",{key:t},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(t=o.map(function(e,t){return c.a.createElement("span",{key:t},e,t<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,a),c.a.createElement("span",{className:"token punctuation"},"."),n,c.a.createElement("span",{className:"token function"},l),c.a.createElement("span",{className:"token punctuation"},"("),t,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=o},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(2),o=n.n(l),c=n(427),u=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};u.propTypes={docToc:o.a.bool},t.default=u},427:function(e,t,n){"use strict";n.r(t);var a=n(420);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(428);n.d(t,"ComponentPreview",function(){return r.default});var l=n(426);n.d(t,"DocContainer",function(){return l.default});var o=n(429);n.d(t,"DocHeading",function(){return o.default});var c=n(430);n.d(t,"DocToc",function(){return c.default});var u=n(422);n.d(t,"DeprecatedComponentAlert",function(){return u.default});var i=n(423);n.d(t,"ExperimentalComponentAlert",function(){return i.default});var s=n(424);n.d(t,"Icon",function(){return s.default});var p=n(425);n.d(t,"PxScript",function(){return p.default})},435:function(e,t,n){"use strict";n.d(t,"a",function(){return P});var O=n(1),T=n.n(O),a=n(2),r=n.n(a),l=n(187),V=n.n(l),P=function(e){var t=e.type,n=e.value,a=e.color;return"button"===t?T.a.createElement("button",{type:"button",className:"btn btn-".concat(a)},n):T.a.createElement("span",{className:"input-group-addon"},"icon"===t?T.a.createElement("i",{className:"material-icons"},n):n)},B=function(e){var t=e.icon;return T.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",T.a.createElement("i",{className:"material-icons"},t),"\n\t")},o=function(e){var t=e.id,n=e.type,a=e.placeholder,r=e.pattern,l=e.validate,o=e.required,c=e.defaultValue,u=e.autoComplete,i=e.disabled,s=e.readOnly,p=e.label,m=e.validationState,d=e.selectOptions,f=e.prefixValue,E=e.prefixType,b=e.prefixBtnColor,y=e.postfixValue,g=e.postfixType,v=e.postfixBtnColor,h=e.feedbackIcon,x=e.helpBlock,N=e.errorMessage,k=e.successMessage,C={type:n||null,className:"form-control",id:t||null,placeholder:a||null,defaultValue:c||"",disabled:i||null,readOnly:s||null,autoComplete:u||null,required:o||null,pattern:r?"":null,"data-validate":l?"":null},w=V()("input-group",m?"has-".concat(m):null,h?"has-feedback":null);return T.a.createElement("div",{className:"form-group"},"\n",p?T.a.createElement("label",{htmlFor:t},p):null,p?"\n":null,T.a.createElement("div",{className:w},"\n",f?T.a.createElement(P,{type:E,value:f,color:b}):null,f?"\n":null,"textarea"===n?T.a.createElement("textarea",C):"select"===n?T.a.createElement("select",{className:"form-control",disabled:i,readOnly:s},"\n\t\t",d.map(function(e,t){return T.a.createElement(O.Fragment,{key:e+t},T.a.createElement("option",null,e),t!==d.length-1?"\n\t\t":"")}),"\n\t"):T.a.createElement("input",C),"\n",h?T.a.createElement(B,{icon:h}):null," ",h?"\n":null,y?T.a.createElement(P,{type:g,value:y,color:v}):null,y?"\n":null),x?T.a.createElement("div",{className:"help-block","data-success":k||null,"data-error":N||null},x):null)};o.propTypes={type:r.a.string.isRequired,id:r.a.string,placeholder:r.a.string,pattern:r.a.string,validate:r.a.bool,required:r.a.bool,defaultValue:r.a.string,autoComplete:r.a.string,disabled:r.a.bool,readOnly:r.a.bool,label:r.a.string,validationState:r.a.oneOf(["success","error",""]),selectOptions:r.a.array,prefixValue:r.a.string,prefixType:r.a.oneOf(["button","icon",""]),prefixBtnColor:r.a.oneOf(["primary","secondary","danger"]),postfixValue:r.a.string,postfixType:r.a.oneOf(["button","icon",""]),postfixBtnColor:r.a.oneOf(["primary","secondary","danger"]),feedbackIcon:r.a.string,helpBlock:r.a.string,errorMessag:r.a.string,successMessag:r.a.string},t.b=o},459:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicExample",function(){return m}),n.d(t,"CheckboxesAndRadios",function(){return d}),n.d(t,"ButtonAddons",function(){return f}),n.d(t,"WithSelect",function(){return E}),n.d(t,"WithFeedbackIcon",function(){return b}),n.d(t,"ValidationStates",function(){return y}),n.d(t,"Disabled",function(){return g});var l=n(1),o=n.n(l),c=n(427),a=n(435);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"basic-example"},"Basic example"),o.a.createElement("p",null,"Basic input group..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement(a.b,{id:"input-id-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr."})," ","\n\n",o.a.createElement(a.b,{id:"input-id-2",type:"text",label:"Email",placeholder:"Email",prefixType:"icon",prefixValue:"email"})," ","\n\n",o.a.createElement(a.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"})," ","\n\n",o.a.createElement(a.b,{id:"input-id-4",type:"textarea",label:"Notes",placeholder:"Special requests",prefixType:"icon",prefixValue:"format_quote"})))},d=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),o.a.createElement("p",null,"Place any checkbox or radio option within an input group’s addon instead of text."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},"\n",o.a.createElement("span",{className:"input-group-addon"},"\n\t\t",o.a.createElement("input",{type:"checkbox"}),"\n\t"),"\n",o.a.createElement("input",{type:"text",className:"form-control"}),"\n")),"\n\n",o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},"\n",o.a.createElement("span",{className:"input-group-addon"},"\n\t\t",o.a.createElement("input",{type:"radio"}),"\n\t"),"\n",o.a.createElement("input",{type:"text",className:"form-control"}),"\n"))))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-addons"},"Button addons"),o.a.createElement("p",null,"Addons..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(a.b,{type:"text",postfixType:"button",postfixValue:"Button",postfixBtnColor:"primary"})," ","\n\n",o.a.createElement(a.b,{type:"text",prefixType:"button",prefixValue:"Button",prefixBtnColor:"secondary",postfixType:"button",postfixValue:"Button",postfixBtnColor:"danger"})))},E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"with-select"},"With select"),o.a.createElement("p",null,"Select..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(a.b,{type:"select",selectOptions:["Bounty hunter","Smuggler","Jedi"],prefixValue:"Profession"})))},b=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"with-feedback"},"With feedback"),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(a.b,{id:"input-with-feedback-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr.",feedbackIcon:"cancel"})))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"validation-states"},"Validation states"),o.a.createElement("p",null,"Validation..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(a.b,{type:"text",validationState:"success",placeholder:"Name",prefixValue:"Mr.",defaultValue:"Anderson"})," ","\n\n",o.a.createElement(a.b,{type:"text",validationState:"error",placeholder:"Name",prefixValue:"Agent",defaultValue:"Smith"})))},g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled"},"Disabled"),o.a.createElement("p",null,"Disabled blabla..."),o.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement(a.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",disabled:!0,prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"}),o.a.createElement(a.b,{id:"input-id-4",type:"textarea",label:"Special requests",placeholder:"Extra frosting, no pineapple...",disabled:!0,prefixType:"icon",prefixValue:"format_quote"}),o.a.createElement(a.b,{type:"select",selectOptions:["Option one","Option two","Option three"],label:"Flavor",prefixValue:"Options",disabled:!0})))},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,s(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(c.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Input groups..."),o.a.createElement(m,null),o.a.createElement(f,null),o.a.createElement(E,null),o.a.createElement(y,null),o.a.createElement(g,null))}}])&&u(n.prototype,a),r&&u(n,r),t}();t.default=v}}]);
//# sourceMappingURL=doc-route.chunk_9.js.map?c1c9209eda68de60935d