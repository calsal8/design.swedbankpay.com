(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[10],{378:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(1),l=a.n(n),r=a(53),o=a.n(r),i=a(315),u=a.n(i),c=function(e){var t=e.type,a=e.value,n=e.color,r=e.disabled;return"button"===t?l.a.createElement("button",{type:"button",className:"btn btn-".concat(n),disabled:r},a):l.a.createElement("span",{className:"input-group-addon"},"icon"===t?l.a.createElement("i",{className:"material-icons"},a):a)},s=function(e){var t=e.icon;return l.a.createElement("span",{className:"form-control-feedback"},"\n\t\t",l.a.createElement("i",{className:"material-icons"},t),"\n\t")},m=function(e){var t=e.id,a=e.type,r=e.placeholder,o=e.pattern,i=e.validate,m=e.required,p=e.defaultValue,d=e.autoComplete,f=e.disabled,g=e.readOnly,E=e.label,b=e.validationState,h=e.selectOptions,x=e.prefixValue,y=e.prefixType,v=e.prefixBtnColor,N=e.postfixValue,w=e.postfixType,C=e.postfixBtnColor,V=e.feedbackIcon,k=e.helpBlock,P=e.errorMessage,T=e.successMessage,B={type:a||null,className:"form-control",id:t||null,placeholder:r||null,defaultValue:p||"",disabled:f||null,readOnly:g||null,autoComplete:d||null,required:m||null,pattern:o?"":null,"data-validate":i?"":null},O=u()("input-group",b?"has-".concat(b):null,V?"has-feedback":null);return l.a.createElement("div",{className:"form-group"},"\n",E?l.a.createElement("label",{htmlFor:t},E):null,E?"\n":null,l.a.createElement("div",{className:O},"\n",x?l.a.createElement(c,{type:y,value:x,color:v,disabled:f}):null,x?"\n":null,"textarea"===a?l.a.createElement("textarea",B):"select"===a?l.a.createElement("select",{className:"form-control",disabled:f,readOnly:g},"\n\t\t",h.map(function(e,t){return l.a.createElement(n.Fragment,{key:e+t},l.a.createElement("option",null,e),t!==h.length-1?"\n\t\t":"")}),"\n\t"):l.a.createElement("input",B),"\n",V?l.a.createElement(s,{icon:V}):null," ",V?"\n":null,N?l.a.createElement(c,{type:w,value:N,color:C,disabled:f}):null,N?"\n":null),k?l.a.createElement("div",{className:"help-block","data-success":T||null,"data-error":P||null},k):null)};m.propTypes={type:o.a.string.isRequired,id:o.a.string,placeholder:o.a.string,pattern:o.a.string,validate:o.a.bool,required:o.a.bool,defaultValue:o.a.string,autoComplete:o.a.string,disabled:o.a.bool,readOnly:o.a.bool,label:o.a.string,validationState:o.a.oneOf(["success","error",""]),selectOptions:o.a.array,prefixValue:o.a.string,prefixType:o.a.oneOf(["button","icon",""]),prefixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),postfixValue:o.a.string,postfixType:o.a.oneOf(["button","icon",""]),postfixBtnColor:o.a.oneOf(["executive","guiding","destructive"]),feedbackIcon:o.a.string,helpBlock:o.a.oneOfType([o.a.string,o.a.bool]),errorMessag:o.a.string,successMessag:o.a.string},t.b=m},399:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicExample",function(){return c}),a.d(t,"CheckboxesAndRadios",function(){return s}),a.d(t,"ButtonAddons",function(){return m}),a.d(t,"WithSelect",function(){return p}),a.d(t,"WithFeedbackIcon",function(){return d}),a.d(t,"ValidationStates",function(){return f}),a.d(t,"Disabled",function(){return g});var n=a(1),l=a.n(n),r=a(361),o=a(377),i=a.n(o),u=a(378),c=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"basic-example"},"Basic example"),l.a.createElement("p",null,"Add a ",l.a.createElement(i.a,{className:"language-html"},"<span>")," with class ",l.a.createElement(r.Property,{value:".input-group-addon"})," to get a gray box on the left, right or both sides of an ",l.a.createElement(i.a,{className:"language-html"},"<input>")," element. The position of your ",l.a.createElement(r.Property,{value:".input-group-addon"})," depends on if you place it before or after the ",l.a.createElement(i.a,{className:"language-html"},"<input")," element."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(u.b,{id:"input-id-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr."})," ","\n\n",l.a.createElement(u.b,{id:"input-id-2",type:"text",label:"Email",placeholder:"Email",prefixType:"icon",prefixValue:"email"})," ","\n\n",l.a.createElement(u.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"})," ","\n\n",l.a.createElement(u.b,{id:"input-id-4",type:"textarea",label:"Notes",placeholder:"Special requests",prefixType:"icon",prefixValue:"format_quote"})))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"checkboxes-and-radios"},"Checkboxes and radios"),l.a.createElement("p",null,"Place any checkbox or radio option within an input group’s addon instead of text."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},"\n",l.a.createElement("span",{className:"input-group-addon"},"\n\t\t",l.a.createElement("input",{type:"checkbox"}),"\n\t"),"\n",l.a.createElement("input",{type:"text",className:"form-control"}),"\n")),"\n\n",l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},"\n",l.a.createElement("span",{className:"input-group-addon"},"\n\t\t",l.a.createElement("input",{type:"radio"}),"\n\t"),"\n",l.a.createElement("input",{type:"text",className:"form-control"}),"\n"))))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"button-addons"},"Button addons"),l.a.createElement("p",null,"If you want ",l.a.createElement(i.a,{className:"language-html"},"<button>"),"s included with your input elements you can just add a ",l.a.createElement(i.a,{className:"language-html"},"<button>")," inside a input-group like you would anywhere else."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(u.b,{type:"text",postfixType:"button",postfixValue:"Button",postfixBtnColor:"executive"})," ","\n\n",l.a.createElement(u.b,{type:"text",prefixType:"button",prefixValue:"Button",prefixBtnColor:"guiding",postfixType:"button",postfixValue:"Button",postfixBtnColor:"destructive"})))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"with-select"},"With select"),l.a.createElement("p",null,"Inserting text next to a ",l.a.createElement(i.a,{className:"language-html"},"<select>")," works just like any other input element."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(u.b,{type:"select",selectOptions:["Bounty hunter","Smuggler","Jedi"],prefixValue:"Profession"})))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"with-feedback"},"With feedback"),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(u.b,{id:"input-with-feedback-1",type:"text",label:"Name",placeholder:"Name",prefixValue:"Mr.",feedbackIcon:"cancel"})))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"validation-states"},"Validation states"),l.a.createElement("p",null,"You can also visualize validation on your input-groups. Just add ",l.a.createElement(r.Property,{value:".has-success"})," or ",l.a.createElement(r.Property,{value:".has-error"})," with a ",l.a.createElement(r.Property,{value:".input-group"}),"."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(u.b,{type:"text",validationState:"success",placeholder:"Name",prefixValue:"Mr.",defaultValue:"Anderson"})," ","\n\n",l.a.createElement(u.b,{type:"text",validationState:"error",placeholder:"Name",prefixValue:"Agent",defaultValue:"Smith"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"disabled"},"Disabled"),l.a.createElement("p",null,"Just like for forms you can add ",l.a.createElement(r.Attribute,{name:"disabled"})," to an input element to disable it. If you are going to disable an element in a ",l.a.createElement(r.Property,{value:".input-group"})," make sure to also add the ",l.a.createElement(r.Attribute,{name:"disabled"})," attribute to the buttons."),l.a.createElement(r.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},l.a.createElement(u.b,{id:"input-id-3",type:"number",label:"Amount",placeholder:"Rounded to nearest $",disabled:!0,prefixType:"icon",prefixValue:"attach_money",postfixValue:".00"}),l.a.createElement(u.b,{type:"text",disabled:!0,prefixType:"button",prefixValue:"Button",prefixBtnColor:"guiding",postfixType:"button",postfixValue:"Button",postfixBtnColor:"destructive"})))};t.default=function(){return l.a.createElement(r.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"You can include additional information to specific input elements by adding ",l.a.createElement(i.a,{className:"language-html"},"<span>"),"s or ",l.a.createElement(i.a,{className:"language-html"},"<button>"),"s in a ",l.a.createElement(r.Property,{value:".input-group"}),"."),l.a.createElement(c,null),l.a.createElement(m,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(g,null))}}}]);
//# sourceMappingURL=doc-route.chunk_12.js.map?5c843627c77e05a6b2ee