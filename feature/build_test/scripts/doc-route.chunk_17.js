(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[15],{440:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(377),o=a.n(r),c=a(361),u=a(53),m=a.n(u),i=a(315),d=a.n(i),s=function(e){var t=e.title,a=e.subTitle,n=e.id,r=e.type,o=e.removeBottomPadding,c=e.removeAllPadding,u=e.halfPadding,m=e.bodyContent,i=e.panelTable,s=e.footerText,p=d()("panel",r?"panel-".concat(r):"panel-default",o?"panel-bottomless":null,c?"panel-no-padding":null,u?"panel-half-padding":null);return l.a.createElement("section",{className:p,id:n},t?l.a.createElement("header",null,l.a.createElement("h2",{className:"panel-title"},t),a?l.a.createElement("p",{className:"panel-sub-title"},a):null):null,m?l.a.createElement("div",{className:"panel-body"},m.map(function(e,t){return l.a.createElement("p",{key:t},e)})):null,i?l.a.createElement("div",{className:"panel-table"},i()):null,s?l.a.createElement("footer",null,l.a.createElement("p",null,s)):null)};s.propTypes={title:m.a.string,subTitle:m.a.string,id:m.a.string,type:m.a.oneOf(["brand","default","muted",""]),halfPadding:m.a.bool,removeAllPadding:m.a.bool,removeBottomPadding:m.a.bool,darkMode:m.a.bool,bodyContent:m.a.array,footerText:m.a.string};var p=s;a.d(t,"Overview",function(){return b}),a.d(t,"PanelHeaders",function(){return f}),a.d(t,"PanelMuted",function(){return g}),a.d(t,"PanelTable",function(){return w}),a.d(t,"TableContent",function(){return h});var E=["Your main panel content is put here.","Some more content over here.","And one more line, just to be safe."],h=function(){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Location"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Sven"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Visby")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Sara"),l.a.createElement("td",null,"Svensson"),l.a.createElement("td",null,"Stockholm")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3"),l.a.createElement("td",null,"Ola"),l.a.createElement("td",null,"Nordmann"),l.a.createElement("td",null,"Oslo")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4"),l.a.createElement("td",null,"Holger"),l.a.createElement("td",null,"Danske"),l.a.createElement("td",null,"Copenhagen")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Matti"),l.a.createElement("td",null,"Meikäläinen"),l.a.createElement("td",null,"Lahti"))))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"overview"},"Overview"),l.a.createElement("p",null,"A panel consists of three parts: A header, a body and a footer. You can mostly put whatever you want in any of these, but try not to put too much in the header and footer as these are meant to contain short and concise information about the body content."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(p,{title:"Panel title",subTitle:"Panel subtitle",footerText:"Footer content goes here.",footerBtnText:"Footer button",bodyContent:E})))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"panel-headers"},"Panel headers"),l.a.createElement("p",null,"You can pick between two different panel headers, brand color with white text and white with green text. add ",l.a.createElement(c.Property,{value:".panel-default"})," or ",l.a.createElement(c.Property,{value:".panel-brand"})," to the header to use one of them."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(p,{title:"Default panel"}),"\n\n",l.a.createElement(p,{type:"brand",title:"Panel brand"})))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"muted-panel"},"Muted panel"),l.a.createElement("p",null,"If you wish to use a completely gray panel you can add ",l.a.createElement(c.Property,{value:".panel-muted"})," to the panel ",l.a.createElement(o.a,{className:"language-html"},"<section>"),"."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(p,{type:"muted",title:"Panel title",subTitle:"Panel subtitle",bodyContent:E,footerText:"Footer content goes here.",footerBtnText:"Footer button"})))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"panel-with-table"},"Displaying a full width table"),l.a.createElement("p",null,"To display a full width table in a panel use ",l.a.createElement(c.Property,{value:".panel-table"})," on a div wrapping the table. Put ",l.a.createElement(c.Property,{value:".panel-table"})," as a direct child of ",l.a.createElement(c.Property,{value:".panel"}),". Tables put in a panel are given a border bottom to seperate it from the following elements."),l.a.createElement(c.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement(p,{type:"brand",title:"Panel title",subTitle:"Panel subtitle",bodyContent:E,footerText:"Footer content goes here.",footerBtnText:"Footer button",panelTable:h})))};t.default=function(){return l.a.createElement(c.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Panels are large containers meant to be able to contain all of our other components."),l.a.createElement(b,null),l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(w,null))}}}]);
//# sourceMappingURL=doc-route.chunk_17.js.map?81203e81393aa5d172d9