(window.webpackJsonpswedbankpay=window.webpackJsonpswedbankpay||[]).push([[62,75],{373:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(14),u=a.n(r),i=a(458),o=a.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var s=function(e){var t=e.label,a=e.id,l=e.name,r=e.value,u=e.href,i=e.icon,s=e.loading,m=e.type,d=e.disabled,g=e.btnType,p=e.fullWidth,b=e.pullRight,E=e.input,v=e.outline,h=e.active,f=e.size,y=o()("btn",m?"btn-".concat(m):null,v?"btn-outline":null,f?"btn-".concat(f):null,s?"loading":null,p?"btn-block":null,b?"pull-right":null,h&&u?"active":null,d&&u?"disabled":null),w={href:u,id:a,name:l,defaultValue:r,disabled:u?null:d,active:h&&!u?"":null,role:u?"button":null,type:u?null:g||"button","aria-pressed":!!h||null,"aria-disabled":!(!u||!d)||null,tabIndex:u&&d?"-1":null};return u?n.a.createElement("a",c({className:y},w),i?"\n\t":null,i?n.a.createElement("i",{className:"material-icons"},i):null,i&&t?n.a.createElement("span",null,t):t):E?n.a.createElement("input",c({className:y},w)):n.a.createElement("button",c({className:y},w),i?"\n\t\t":null,i?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"material-icons"},i),"\n\t\t"):null,i&&t?n.a.createElement("span",null,t):t,i?"\n\t":null)};s.propTypes={type:u.a.oneOf(["executive","guiding","destructive","link"]).isRequired,label:u.a.string,id:u.a.string,name:u.a.string,value:u.a.string,href:u.a.string,icon:u.a.string,loading:u.a.bool,disabled:u.a.bool,btnType:u.a.string,fullWidth:u.a.bool,loader:u.a.bool,pullRight:u.a.bool,input:u.a.bool,outline:u.a.bool,active:u.a.bool,size:u.a.oneOf(["lg","sm","xs"])},t.default=s},405:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return m}),a.d(t,"UsageWithOtherTags",function(){return d}),a.d(t,"OutlineButtons",function(){return g}),a.d(t,"ButtonGroup",function(){return p}),a.d(t,"Sizes",function(){return b}),a.d(t,"ActiveState",function(){return E}),a.d(t,"DisabledState",function(){return v}),a.d(t,"UsageWithIcons",function(){return h}),a.d(t,"ButtonLoader",function(){return f});var l=a(1),n=a.n(l),r=a(50),u=a(462),i=a.n(u),o=a(361),c=a(373),s=a(363),m=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"examples"},"Examples"),n.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{type:"executive",label:"Executive"}),"\n",n.a.createElement(c.default,{type:"guiding",label:"Guiding"}),"\n",n.a.createElement(c.default,{type:"destructive",label:"Destructive"}),"\n",n.a.createElement(c.default,{type:"link",label:"Link"}),"\n")))},d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),n.a.createElement("p",null,"The ",n.a.createElement(o.Property,{value:".btn"})," classes are designed to be used with the ",n.a.createElement(i.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",n.a.createElement(i.a,{className:"language-html"},"<a>")," or ",n.a.createElement(i.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),n.a.createElement("p",null,"When using button classes on ",n.a.createElement(i.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",n.a.createElement(o.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{type:"executive",label:"Anchor",href:"#"}),"\n",n.a.createElement(c.default,{type:"executive",label:"Button"}),"\n",n.a.createElement(c.default,{type:"executive",input:!0,value:"Input",btnType:"button"}),"\n",n.a.createElement(c.default,{type:"executive",input:!0,value:"Submit",btnType:"submit"}),"\n",n.a.createElement(c.default,{type:"executive",input:!0,value:"Reset",btnType:"reset"}),"\n")))},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),n.a.createElement("p",null,"Replace the default modifier classes with the ",n.a.createElement(o.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{outline:!0,type:"executive",label:"Executive"}),"\n",n.a.createElement(c.default,{outline:!0,type:"guiding",label:"Guiding"}),"\n",n.a.createElement(c.default,{outline:!0,type:"destructive",label:"Destructive"}),"\n")))},p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"button-group"},"Using buttons together"),n.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",n.a.createElement(o.Property,{value:".button-group"}),"."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{type:"executive",label:"Activate"}),"\n",n.a.createElement(c.default,{type:"guiding",label:"Disable"}),"\n",n.a.createElement(c.default,{type:"destructive",label:"Delete"}),"\n")))},b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"sizes"},"Sizes"),n.a.createElement("p",null,"For a different sized button add ",n.a.createElement(o.Property,{value:".btn-lg"}),", ",n.a.createElement(o.Property,{value:".btn-sm"})," or ",n.a.createElement(o.Property,{value:".btn-xs"}),"."),n.a.createElement("h3",null,"Large"),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{size:"lg",type:"executive",label:"Large button"}),"\n",n.a.createElement(c.default,{size:"lg",type:"guiding",label:"Large button"}),"\n")),n.a.createElement("h3",null,"Small"),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{size:"sm",type:"executive",label:"Small button"}),"\n",n.a.createElement(c.default,{size:"sm",type:"guiding",label:"Small button"}),"\n")),n.a.createElement("h3",null,"Extra small"),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{size:"xs",type:"executive",label:"Extra small button"}),"\n",n.a.createElement(c.default,{size:"xs",type:"guiding",label:"Extra small button"}),"\n")),n.a.createElement("h3",null,"Block level"),n.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",n.a.createElement(o.Property,{value:".btn-block"}),"."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{fullWidth:!0,type:"executive",label:"Block level button"}),"\n",n.a.createElement(c.default,{fullWidth:!0,type:"guiding",label:"Block level button"}),"\n")))},E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"active-state"},"Active state"),n.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",n.a.createElement("b",null,"There’s no need to add a class to ",n.a.createElement(i.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",n.a.createElement(o.Property,{value:".active"})," (and include the ",n.a.createElement(o.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{href:"#",active:!0,type:"executive",label:"Executive"}),"\n",n.a.createElement(c.default,{href:"#",active:!0,type:"guiding",label:"Guiding"}),"\n",n.a.createElement(c.default,{href:"#",active:!0,type:"destructive",label:"Destructive"}),"\n")))},v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"disabled-state"},"Disabled state"),n.a.createElement("p",null,"Make buttons look inactive by adding the ",n.a.createElement(o.Attribute,{name:"disabled"})," boolean attribute to any ",n.a.createElement(i.a,{className:"language-html"},"<button>")," element."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{disabled:!0,type:"executive",label:"Executive"}),"\n",n.a.createElement(c.default,{disabled:!0,type:"guiding",label:"Guiding"}),"\n",n.a.createElement(c.default,{disabled:!0,type:"destructive",label:"Destructive"}),"\n")),n.a.createElement("p",null,"Disabled buttons using the ",n.a.createElement(i.a,{className:"language-html"},"<a>")," element behave a bit different:"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(i.a,{className:"language-html"},"<a>"),"s do not support the ",n.a.createElement(o.Attribute,{name:"disabled"}),"attribute, so you must add the ",n.a.createElement(o.Property,{value:".disabled"})," class to make it visually appear disabled."),n.a.createElement("li",null,"Some future-friendly styles are included to disable all ",n.a.createElement(o.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),n.a.createElement("li",null,"Disabled buttons should include the ",n.a.createElement(o.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{href:"#",disabled:!0,type:"executive",label:"Executive"}),"\n",n.a.createElement(c.default,{href:"#",disabled:!0,type:"guiding",label:"Guiding"}),"\n",n.a.createElement(c.default,{href:"#",disabled:!0,type:"destructive",label:"Destructive"}),"\n")),n.a.createElement(s.default,{type:"warning"},n.a.createElement("h5",null,"Link functionality caveat"),n.a.createElement("p",null,"The ",n.a.createElement(o.Property,{value:".disabled"})," class uses ",n.a.createElement(o.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",n.a.createElement(i.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",n.a.createElement(o.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",n.a.createElement(o.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),n.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",n.a.createElement(i.a,{className:"language-html"},"<button>"),"."),n.a.createElement("p",null,"Read more about icon usage here ",n.a.createElement(r.Link,{to:"/docs/core/icons"},"here"),"."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{icon:"cloud",type:"executive",label:"Executive"}),"\n\n",n.a.createElement(c.default,{icon:"cloud",type:"guiding",label:"Guiding"}),"\n",n.a.createElement(c.default,{icon:"cloud",type:"destructive",label:"Destructive"}),"\n")))},f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"button-loader"},"Button loader"),n.a.createElement("p",null,"Add class ",n.a.createElement(o.Property,{value:".loading"})," to display the loader."),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",n.a.createElement(c.default,{type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",n.a.createElement(c.default,{type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),n.a.createElement("h3",null,"Disabled loader"),n.a.createElement("p",null,n.a.createElement(o.Property,{value:".loading"})," with ",n.a.createElement(o.Attribute,{name:"disabled"})),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{disabled:!0,type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",n.a.createElement(c.default,{disabled:!0,type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",n.a.createElement(c.default,{disabled:!0,type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")),n.a.createElement("h3",null,"Outline loader"),n.a.createElement("p",null,n.a.createElement(o.Property,{value:".loading"})," with ",n.a.createElement(o.Property,{value:".outline"})),n.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},n.a.createElement("div",{className:"button-group"},"\n",n.a.createElement(c.default,{outline:!0,type:"executive",label:"Executive",loader:!0,loading:!0}),"\n",n.a.createElement(c.default,{outline:!0,type:"guiding",label:"Guiding",loader:!0,loading:!0}),"\n",n.a.createElement(c.default,{outline:!0,type:"destructive",label:"Destructive",loader:!0,loading:!0}),"\n")))};t.default=function(){return n.a.createElement(o.DocContainer,{docToc:!0},n.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),n.a.createElement(m,null),n.a.createElement(d,null),n.a.createElement(g,null),n.a.createElement(p,null),n.a.createElement(b,null),n.a.createElement(E,null),n.a.createElement(v,null),n.a.createElement(h,null),n.a.createElement(f,null))}},457:function(e,t){(function(t){e.exports=t}).call(this,{})},458:function(e,t,a){var l;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var r={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=n(a);if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var i=u.apply(null,a);i&&e.push(i)}else if("object"===l)for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===n(a(457))&&a(457)?void 0===(l=function(){return u}.apply(t,[]))||(e.exports=l):window.classNames=u}()}}]);
//# sourceMappingURL=doc-route.chunk_6.js.map?cf6f19d92d16f46ebf09