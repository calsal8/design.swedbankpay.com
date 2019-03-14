(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[50],{419:function(e,t,a){"use strict";var n=a(1),f=a.n(n),l=a(2),r=a.n(l),o=a(66),w=a.n(o);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.label,a=e.id,n=e.name,l=e.value,r=e.href,o=e.icon,u=e.loading,i=e.type,c=e.disabled,s=e.btnType,m=e.fullWidth,d=e.loader,p=e.pullRight,b=e.input,g=e.outline,y=e.active,E=e.size,h=w()("btn","btn-".concat(g?"outline-":"").concat(i),E?"btn-".concat(E):null,u?"loading":null,m?"btn-block":null,p?"pull-right":null,y&&r?"active":null,c&&r?"disabled":null),v={href:r,id:a,name:n,defaultValue:l,disabled:r?null:c,"data-button-loader":d?"":null,active:y&&!r?"":null,role:r?"button":null,type:r?null:s||"button","aria-pressed":!!y||null,"aria-disabled":!(!r||!c)||null,tabIndex:r&&c?"-1":null};return r?f.a.createElement("a",P({className:h},v),o?"\n\t":null,o?f.a.createElement("i",{className:"material-icons"},o):null,o&&t?f.a.createElement("span",null,t):t):b?f.a.createElement("input",P({className:h},v)):f.a.createElement("button",P({className:h},v),o?"\n\t\t":null,o?f.a.createElement(f.a.Fragment,null,f.a.createElement("i",{className:"material-icons"},o),"\n\t\t"):null,o&&t?f.a.createElement("span",null,t):t,o?"\n\t":null)};u.propTypes={type:r.a.oneOf(["primary","secondary","danger","link"]).isRequired,label:r.a.string,id:r.a.string,name:r.a.string,value:r.a.string,href:r.a.string,icon:r.a.string,loading:r.a.bool,disabled:r.a.bool,btnType:r.a.string,fullWidth:r.a.bool,loader:r.a.bool,pullRight:r.a.bool,input:r.a.bool,outline:r.a.bool,active:r.a.bool,size:r.a.oneOf(["lg","sm","xs"])},t.a=u},436:function(e,t,a){"use strict";a.r(t),a.d(t,"Examples",function(){return E}),a.d(t,"UsageWithOtherTags",function(){return h}),a.d(t,"OutlineButtons",function(){return v}),a.d(t,"ButtonGroup",function(){return f}),a.d(t,"Sizes",function(){return w}),a.d(t,"ActiveState",function(){return P}),a.d(t,"DisabledState",function(){return C}),a.d(t,"UsageWithIcons",function(){return k}),a.d(t,"ButtonLoader",function(){return N});var r=a(1),o=a.n(r),n=a(82),l=a(417),u=a.n(l),i=a(401),c=a(419),s=a(402),m=a(38);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"examples"},"Examples"),o.a.createElement("p",null,"The DesignGuide includes a few predefined button styles, each serving its own semantic purpose."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{type:"primary",label:"Primary"}),"\n",o.a.createElement(c.a,{type:"secondary",label:"Secondary"}),"\n",o.a.createElement(c.a,{type:"danger",label:"Danger"}),"\n",o.a.createElement(c.a,{type:"link",label:"Link"}),"\n")))},h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-other-tags"},"Usage with other tags"),o.a.createElement("p",null,"The ",o.a.createElement(i.Property,{value:".btn"})," classes are designed to be used with the ",o.a.createElement(u.a,{className:"language-html"},"<button>")," element. However, you can also use these classes on ",o.a.createElement(u.a,{className:"language-html"},"<a>")," or ",o.a.createElement(u.a,{className:"language-html"},"<input>")," elements (though some browsers may apply a slightly different rendering)."),o.a.createElement("p",null,"When using button classes on ",o.a.createElement(u.a,{className:"language-html"},"<a>")," elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ",o.a.createElement(i.Attribute,{name:"role",value:"button"})," to appropriately convey their purpose to assistive technologies such as screen readers."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{type:"primary",label:"Anchor",href:"#"}),"\n",o.a.createElement(c.a,{type:"primary",label:"Button"}),"\n",o.a.createElement(c.a,{type:"primary",input:!0,value:"Input",btnType:"button"}),"\n",o.a.createElement(c.a,{type:"primary",input:!0,value:"Submit",btnType:"submit"}),"\n",o.a.createElement(c.a,{type:"primary",input:!0,value:"Reset",btnType:"reset"}),"\n")))},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"outline-buttons"},"Outline buttons"),o.a.createElement("p",null,"Replace the default modifier classes with the ",o.a.createElement(i.Property,{value:".btn-outline-{style}"})," ones to get an outline of the button style."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{outline:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(c.a,{outline:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(c.a,{outline:!0,type:"danger",label:"Danger"}),"\n")))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-group"},"Using buttons together"),o.a.createElement("p",null,"When you use buttons next to each other you have to wrap them in a ",o.a.createElement(i.Property,{value:".button-group"}),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{type:"primary",label:"Activate"}),"\n",o.a.createElement(c.a,{type:"secondary",label:"Disable"}),"\n",o.a.createElement(c.a,{type:"danger",label:"Delete"}),"\n")))},w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"sizes"},"Sizes"),o.a.createElement("p",null,"For a different sized button add ",o.a.createElement(i.Property,{value:".btn-lg"}),", ",o.a.createElement(i.Property,{value:".btn-sm"})," or ",o.a.createElement(i.Property,{value:".btn-xs"}),"."),o.a.createElement("h3",null,"Large"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{size:"lg",type:"primary",label:"Large button"}),"\n",o.a.createElement(c.a,{size:"lg",type:"secondary",label:"Large button"}),"\n")),o.a.createElement("h3",null,"Small"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{size:"sm",type:"primary",label:"Small button"}),"\n",o.a.createElement(c.a,{size:"sm",type:"secondary",label:"Small button"}),"\n")),o.a.createElement("h3",null,"Extra small"),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{size:"xs",type:"primary",label:"Extra small button"}),"\n",o.a.createElement(c.a,{size:"xs",type:"secondary",label:"Extra small button"}),"\n")),o.a.createElement("h3",null,"Block level"),o.a.createElement("p",null,"Create block level buttons—those that span the full width of a parent by adding ",o.a.createElement(i.Property,{value:".btn-block"}),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{fullWidth:!0,type:"primary",label:"Block level button"}),"\n",o.a.createElement(c.a,{fullWidth:!0,type:"secondary",label:"Block level button"}),"\n")))},P=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"active-state"},"Active state"),o.a.createElement("p",null,"Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. ",o.a.createElement("b",null,"There’s no need to add a class to ",o.a.createElement(u.a,{className:"language-html"},"<button>"),"s as they use a pseudo-class.")," However, you can still force the same active appearance with ",o.a.createElement(i.Property,{value:".active"})," (and include the ",o.a.createElement(i.Attribute,{name:"aria-pressed",value:"true"})," attribute) should you need to replicate the state programmatically."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{href:"#",active:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(c.a,{href:"#",active:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(c.a,{href:"#",active:!0,type:"danger",label:"Danger"}),"\n")))},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"disabled-state"},"Disabled state"),o.a.createElement("p",null,"Make buttons look inactive by adding the ",o.a.createElement(i.Attribute,{name:"disabled"})," boolean attribute to any ",o.a.createElement(u.a,{className:"language-html"},"<button>")," element."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(c.a,{disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(c.a,{disabled:!0,type:"danger",label:"Danger"}),"\n")),o.a.createElement("p",null,"Disabled buttons using the ",o.a.createElement(u.a,{className:"language-html"},"<a>")," element behave a bit different:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(u.a,{className:"language-html"},"<a>"),"s do not support the ",o.a.createElement(i.Attribute,{name:"disabled"}),"attribute, so you must add the ",o.a.createElement(i.Property,{value:".disabled"})," class to make it visually appear disabled."),o.a.createElement("li",null,"Some future-friendly styles are included to disable all ",o.a.createElement(i.Property,{value:"pointer-events"})," on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all."),o.a.createElement("li",null,"Disabled buttons should include the ",o.a.createElement(i.Attribute,{name:"aria-disabled",value:"true"})," attribute to indicate the state of the element to assistive technologies.")),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{href:"#",disabled:!0,type:"primary",label:"Primary"}),"\n",o.a.createElement(c.a,{href:"#",disabled:!0,type:"secondary",label:"Secondary"}),"\n",o.a.createElement(c.a,{href:"#",disabled:!0,type:"danger",label:"Danger"}),"\n")),o.a.createElement(s.a,{type:"warning"},o.a.createElement("h5",null,"Link functionality caveat"),o.a.createElement("p",null,"The ",o.a.createElement(i.Property,{value:".disabled"})," class uses ",o.a.createElement(i.Property,{value:"pointer-events: none"})," to try to disable the link functionality of ",o.a.createElement(u.a,{className:"language-html"},"<a>"),"s, but that CSS property is not yet standardized. In addition, even in browsers that do support ",o.a.createElement(i.Property,{value:"pointer-events: none"}),", keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a ",o.a.createElement(i.Property,{value:'tabindex="-1"'})," attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.")))},k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"usage-with-icons"},"Usage with icons"),o.a.createElement("p",null,"To use a button with an icon simply put the icon markup inside the ",o.a.createElement(u.a,{className:"language-html"},"<button>"),"."),o.a.createElement("p",null,"Read more about icon usage here ",o.a.createElement(n.a,{to:"/docs/core/icons"},"here"),"."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{icon:"cloud",type:"primary",label:"Primary"}),"\n\n",o.a.createElement(c.a,{icon:"cloud",type:"secondary",label:"Secondary"}),"\n",o.a.createElement(c.a,{icon:"cloud",type:"danger",label:"Danger"}),"\n")))},N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"button-loader"},"Button loader"),o.a.createElement("p",null,"To use a button with a loader simply add the attribute ",o.a.createElement(i.Attribute,{data:!0,name:"button-loader"})," to add the required markup for the loader component. Add class ",o.a.createElement(i.Property,{value:".loading"})," to display the loader."),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(c.a,{type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(c.a,{type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"Disabled loader"),o.a.createElement("p",null,o.a.createElement(i.Property,{value:".loading"})," with ",o.a.createElement(i.Attribute,{name:"disabled"})),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{disabled:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(c.a,{disabled:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(c.a,{disabled:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"Outline loader"),o.a.createElement("p",null,o.a.createElement(i.Property,{value:".loading"})," with ",o.a.createElement(i.Property,{value:".outline"})),o.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0,removeOuterTag:!0},o.a.createElement("div",{className:"button-group"},"\n",o.a.createElement(c.a,{outline:!0,type:"primary",label:"Primary",loader:!0,loading:!0}),"\n",o.a.createElement(c.a,{outline:!0,type:"secondary",label:"Secondary",loader:!0,loading:!0}),"\n",o.a.createElement(c.a,{outline:!0,type:"danger",label:"Danger",loader:!0,loading:!0}),"\n")),o.a.createElement("h3",null,"The markup"),o.a.createElement("p",null,"Adding the attribute ",o.a.createElement(i.Attribute,{data:!0,name:"button-loader"})," to a button component will produce the following html:"),o.a.createElement(i.ComponentPreview,{language:"html",codeFigure:!0},o.a.createElement("button",{className:"btn btn-default loading",type:"button","data-button-loader":!0},"\n\t","Default","\n\t",o.a.createElement("div",{className:"loader"},"\n\t\t",o.a.createElement("ul",{className:"loader-icon"},"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t\t",o.a.createElement("li",null),"\n\t\t"),"\n\t"),"\n")),o.a.createElement(s.a,{type:"warning"},o.a.createElement("h5",null,"Including the loader html"),o.a.createElement("p",null,"If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you do ",o.a.createElement("b",null,"not")," add the attribute ",o.a.createElement(i.Attribute,{data:!0,name:"button-loader"}),".")))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,g(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){m.button.init()}},{key:"render",value:function(){return o.a.createElement(i.DocContainer,{docToc:!0},o.a.createElement("p",{className:"lead"},"Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."),o.a.createElement(E,null),o.a.createElement(h,null),o.a.createElement(v,null),o.a.createElement(f,null),o.a.createElement(w,null),o.a.createElement(P,null),o.a.createElement(C,null),o.a.createElement(k,null),o.a.createElement(N,null))}}])&&p(a.prototype,n),l&&p(a,l),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_5.js.map?29cef4b6663f776280b8