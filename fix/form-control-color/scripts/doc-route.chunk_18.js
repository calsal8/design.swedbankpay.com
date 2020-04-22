(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{444:function(e,t,a){"use strict";a.r(t),a.d(t,"BasicList",function(){return f}),a.d(t,"InlineList",function(){return p}),a.d(t,"BulletList",function(){return g}),a.d(t,"DescriptionList",function(){return y}),a.d(t,"SettingsList",function(){return v}),a.d(t,"ItemList",function(){return w}),a.d(t,"ItemListBordered",function(){return N}),a.d(t,"ItemListLarge",function(){return b}),a.d(t,"HoverItemList",function(){return k}),a.d(t,"StripedItemList",function(){return C});var l=a(1),n=a.n(l),r=a(400),i=a(369),c=a(382);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function u(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=window.dg.actionList,h=[{name:"Add bookmark",icon:"bookmark"},{name:"Add client",icon:"business_center"},{name:"Add document",icon:"add_circle"},{name:"Add user",icon:"person_add"}],f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"basic-list"},"Basic list"),n.a.createElement("p",null,"Add ",n.a.createElement(c.default,{type:"secondary",code:".list"})," to a list to display the basic list. Our lists do not use bullet points."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"Bread"),n.a.createElement("li",null,"Coffee beans"),n.a.createElement("li",null,"Milk"),n.a.createElement("li",null,"Butter"))),n.a.createElement("h3",null,"Nested list"),n.a.createElement("p",null,"Use nesting with lists to signify that some items are children of another item."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"Coffee"),n.a.createElement("li",null,"Tea ","\n",n.a.createElement("ul",null,n.a.createElement("li",null,"Black tea"),n.a.createElement("li",null,"Green tea"),n.a.createElement("li",null,"Ice tea"))),n.a.createElement("li",null,"Milk"))))},p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"inline-list"},"Inline list"),n.a.createElement("p",null,"Use ",n.a.createElement(c.default,{type:"secondary",code:".list-inline"})," on a list to make all items appear on the same line."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"list list-inline"},n.a.createElement("li",null,"Coffee"),n.a.createElement("li",null,"Tea"),n.a.createElement("li",null,"Milk"))))},g=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"bullet-list"},"Bullet list"),n.a.createElement("p",null,"Add ",n.a.createElement(c.default,{type:"secondary",code:".list-bullet"})," on a list to make it a bullet list."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"list list-bullet"},n.a.createElement("li",null,"Coffee"),n.a.createElement("li",null,"Tea"),n.a.createElement("li",null,"Milk"))))},y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"description-list"},"Description list"),n.a.createElement("p",null,"The description list lets you provide each item with a more specific description of each item. Add ",n.a.createElement(c.default,{type:"secondary",code:".description-list"})," to your dl."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("dl",{className:"description-list"},"\n",n.a.createElement("dt",null,"Frog"),n.a.createElement("dd",null,"Wet green thing that croaks."),"\n",n.a.createElement("dt",null,"Rabbit"),n.a.createElement("dd",null,"Warm fluffy thing that jumps."),"\n",n.a.createElement("dt",null,"Color"),n.a.createElement("dd",null,"Any hue except white or black."),"\n")))},v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"settings-list"},"Settings list"),n.a.createElement("p",null,"Use ",n.a.createElement(c.default,{type:"secondary",code:".settings-list"})," to visualize different settings in your web application."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"settings-list"},n.a.createElement("li",null,"\n",n.a.createElement("i",{className:"material-icons text-success"},"check"),"Shovels and tapestry newsletter","\n"),n.a.createElement("li",null,"\n",n.a.createElement("i",{className:"material-icons text-warning"},"remove"),"Spoon collectors weekly newsletter","\n"),n.a.createElement("li",null,"\n",n.a.createElement("i",{className:"material-icons text-danger"},"clear"),"Energetic squirrels newsletter","\n"))))},w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"item-list"},"Item list "),n.a.createElement("p",null,n.a.createElement(c.default,{type:"secondary",code:".item-list"}),"s is a good way to offer more extensive information about each item. Each item has their own box which seperates the items more clearly than our other options."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"item-list"},n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Foo"),n.a.createElement("small",null,"Due date 2 days")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"2120 kr"))),n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Bar"),n.a.createElement("small",null,"Due date 1 day")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"1100 kr"))),n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Baz"),n.a.createElement("small",null,"Due date 5 days")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"200 kr"))))))},b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"item-list-lg"},"Large item list "),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"item-list item-list-lg"},n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Foo"),n.a.createElement("small",null,"Due date 2 days")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"2120 kr")),n.a.createElement("footer",null,n.a.createElement("a",{href:"#"},"Se faktura"))),n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Bar"),n.a.createElement("small",null,"Due date 1 day")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"1100 kr")),n.a.createElement("footer",{className:"item-list-footer"},n.a.createElement("a",{href:"#"},"Se faktura"))),n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Baz"),n.a.createElement("small",null,"Due date 5 days")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"200 kr")),n.a.createElement("footer",{className:"item-list-footer"},n.a.createElement("a",{href:"#"},"Se faktura"))))))},N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"item-list-bordered"},"Bordered item list "),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"item-list item-list-bordered"},n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Foo"),n.a.createElement("small",null,"Due date 2 days")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"2120 kr")),n.a.createElement("footer",null,n.a.createElement("a",{href:"#"},"Se faktura"))),n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Bar"),n.a.createElement("small",null,"Due date 1 day")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"1100 kr")),n.a.createElement("footer",{className:"item-list-footer"},n.a.createElement("a",{href:"#"},"Se faktura"))),n.a.createElement("li",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Baz"),n.a.createElement("small",null,"Due date 5 days")),n.a.createElement("div",null,n.a.createElement("span",{className:"h3 text-highlight"},"200 kr")),n.a.createElement("footer",{className:"item-list-footer"},n.a.createElement("a",{href:"#"},"Se faktura"))))))},k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"hover-item-list"},"Hover item list "),n.a.createElement("p",null,"Include ",n.a.createElement(c.default,{type:"secondary",code:".item-list-hover"})," to give your items a hover effect. You can use this on any variation of ",n.a.createElement(c.default,{type:"secondary",code:".item-list"}),"."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"item-list item-list-hover"},n.a.createElement("li",null,"\n",n.a.createElement("span",null,"4925*********004"),"\n",n.a.createElement("span",{className:"status status-success"},"Active"),"\n"),n.a.createElement("li",null,"\n",n.a.createElement("span",null,"4925*********004"),"\n",n.a.createElement("span",{className:"status status-warning"},"Expires soon"),"\n"),n.a.createElement("li",null,"\n",n.a.createElement("span",null,"4925*********004"),"\n",n.a.createElement("span",{className:"status status-danger"},"Expired"),"\n"))))},C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"item-list-striped"},"Striped item list"),n.a.createElement("p",null,"If you want more seperation between each item you can use ",n.a.createElement(c.default,{type:"secondary",code:".item-list-striped"}),"."),n.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},n.a.createElement("ul",{className:"item-list item-list-striped"},n.a.createElement("li",null,n.a.createElement("span",null,"4925*********004"),n.a.createElement(r.default,{items:h})),n.a.createElement("li",null,"\n",n.a.createElement("span",null,"\n\t\t\t","4925*********004","\n\t\t\t",n.a.createElement("span",{className:"badge badge-blue"},"new"),"\n"),"\n",n.a.createElement("a",{href:"https://developer.payex.com"},"developer.swedbankpay.com"),"\n"),n.a.createElement("li",null,"\n",n.a.createElement("span",null,"4925*********004"),"\n",n.a.createElement("i",{className:"material-icons"},"star"),"\n"),n.a.createElement("li",null,"\n",n.a.createElement("span",null,"4925*********004"),"\n",n.a.createElement("span",{className:"status status-success"},"Active"),"\n",n.a.createElement("button",{type:"button",className:"btn btn-danger btn-xs"},n.a.createElement("i",{className:"material-icons"},"delete")),"\n"))))},P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,o(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,l["Component"]),a=t,(r=[{key:"componentDidMount",value:function(){d.init()}},{key:"render",value:function(){return n.a.createElement(i.DocContainer,{docToc:!0},n.a.createElement("p",{className:"lead"},"Use lists to give a structured view of information."),n.a.createElement(f,null),n.a.createElement(p,null),n.a.createElement(g,null),n.a.createElement(y,null),n.a.createElement(v,null),n.a.createElement(w,null),n.a.createElement(b,null),n.a.createElement(N,null),n.a.createElement(k,null),n.a.createElement(C,null))}}])&&s(a.prototype,r),c&&s(a,c),t}();t.default=P}}]);
//# sourceMappingURL=doc-route.chunk_18.js.map?d0cbb06e97e899422eb7