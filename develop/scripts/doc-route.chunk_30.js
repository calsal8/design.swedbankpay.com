(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[33,3,5,46,47,48,49,50,52],{420:function(e,a,t){"use strict";t.r(a),t.d(a,"Property",function(){return c});var n=t(1),l=t.n(n),r=t(2),o=t.n(r),c=function(e){var a=e.value;return l.a.createElement("code",{className:"token property"},a)},i=function(e){var a=e.data,t=e.name,n=e.value;return t&&n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t),l.a.createElement("span",{className:"token attr-value"},l.a.createElement("span",{className:"token punctuation"},'="'),n,l.a.createElement("span",{className:"token punctuation"},'"'))):t&&!n?l.a.createElement("code",null,a?l.a.createElement("span",{className:"token attr-name"},"data-"):null,l.a.createElement("span",{className:"token attr-name"},t)):!t&&n?l.a.createElement("code",null,l.a.createElement("span",{className:"token attr-value"},n)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},a.default=i},421:function(e,a,t){"use strict";var n=t(1),c=t.n(n),l=t(2),r=t.n(l),o=function(e){var a=e.id,t=e.type,n=e.icon,l=e.close,r=e.text,o=e.children;return c.a.createElement("div",{id:a,className:"alert alert-".concat(t)},n?"\n":"",n?c.a.createElement("i",{className:"material-icons alert-icon"},n):null,r?"\n":"",r?c.a.createElement("p",null,r):null,o?"\n":"",o?c.a.createElement("div",{className:"alert-body"},o):null,l?"\n":"",l?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};o.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},a.a=o},422:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(421);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component deprecated!"),l.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},423:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(421);a.default=function(){return l.a.createElement(r.a,{type:"danger"},l.a.createElement("h3",{className:"color-danger"},"Component under development!"),l.a.createElement("p",null,"This component is still under development and is subject to change."))}},424:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(2),o=function(e){var a=e.icon;return l.a.createElement("i",{className:"material-icons"},a)};o.propTypes={icon:t.n(r).a.string.isRequired},a.default=o},425:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(2),r=t.n(l),o=function(e){var a,t,n=e.component,l=e.subComponents,r=e.func,o=e.params;return l&&(t=l.map(function(e,a){return c.a.createElement("span",{key:a},e,c.a.createElement("span",{className:"token punctuation"},"."))})),o&&(a=o.map(function(e,a){return c.a.createElement("span",{key:a},e,a<o.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,n),c.a.createElement("span",{className:"token punctuation"},"."),t,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),a,c.a.createElement("span",{className:"token punctuation"},");"))};o.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},a.default=o},426:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(2),o=t.n(r),c=t(427),i=function(e){var a=e.docToc,t=e.children,n=function(){return l.a.createElement("div",{className:"doc-body ".concat(a?"col-lg-10":"col-12")},t)};return l.a.createElement("div",{className:"doc-container"},l.a.createElement("div",{className:"row"},l.a.createElement(n,null),a?l.a.createElement(c.DocToc,{component:n}):null))};i.propTypes={docToc:o.a.bool},a.default=i},427:function(e,a,t){"use strict";t.r(a);var n=t(420);t.d(a,"Attribute",function(){return n.default}),t.d(a,"Property",function(){return n.Property});var l=t(428);t.d(a,"ComponentPreview",function(){return l.default});var r=t(426);t.d(a,"DocContainer",function(){return r.default});var o=t(429);t.d(a,"DocHeading",function(){return o.default});var c=t(430);t.d(a,"DocToc",function(){return c.default});var i=t(422);t.d(a,"DeprecatedComponentAlert",function(){return i.default});var u=t(423);t.d(a,"ExperimentalComponentAlert",function(){return u.default});var s=t(424);t.d(a,"Icon",function(){return s.default});var m=t(425);t.d(a,"PxScript",function(){return m.default})},428:function(e,a,t){"use strict";t.r(a);var n=t(1),m=t.n(n),l=t(2),r=t.n(l),d=t(431),o=t(432),p=t.n(o),h=t(433);function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var n=e.children,l=e.language,r=e.removeOuterTag,o=e.hideValue,c=e.removeList,a=e.showCasePanel,t=e.codeFigure,i=e.dangerousHTML,u=function(e){var a=document.createElement("div");return a.innerHTML=Object(d.renderToStaticMarkup)(e),a.firstElementChild?a.firstElementChild.innerHTML:a.firstChild?a.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},s=function(e){var a=document.createElement("div");a.innerHTML=Object(d.renderToStaticMarkup)(e);var t=a.querySelectorAll("li"),n="";return t.forEach(function(e){n+="".concat(e.innerHTML," \n")}),n};return m.a.createElement(m.a.Fragment,null,a?m.a.createElement(function(){return m.a.createElement("div",{className:"showcase-panel"},n)},null):null,t?m.a.createElement(function(){var e,a,t="";if("html"===l&&i)a="","function"==typeof(e=n).forEach?e.forEach(function(e){return a+="".concat(e,"\n")}):a=e,t=a;else if("html"===l&&n&&"function"==typeof n.map)n.map(function(e){t+=r?u(e):c?s(e):Object(d.renderToStaticMarkup)(e)});else if("html"===l)t+=r?u(n):c?s(n):Object(d.renderToStaticMarkup)(n);else switch(g(n)){case"string":t=n;break;case"object":n.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(l){case"html":t=(t=p.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=p.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return h.b.style="",m.a.createElement("figure",null,m.a.createElement(h.a,E({},h.b,{theme:void 0,code:t,language:l}),function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return m.a.createElement("pre",{className:a,style:t},n.map(function(e,a){return m.a.createElement("div",E({key:e+a},l({line:e,key:a})),e.map(function(e,a){return m.a.createElement("span",E({key:a},r({token:e,key:a})))}))}))}))},null):null)};c.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},a.default=c},472:function(e,a,t){"use strict";t.r(a),t.d(a,"Fonts",function(){return u}),t.d(a,"Headings",function(){return s}),t.d(a,"Small",function(){return m}),t.d(a,"Lead",function(){return d}),t.d(a,"Inline",function(){return p}),t.d(a,"TextUtilities",function(){return h}),t.d(a,"Abbreviations",function(){return E}),t.d(a,"Blockquotes",function(){return g});var n=t(1),l=t.n(n),r=t(184),o=t(434),c=t.n(o),i=t(427),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"font"},"Font"),l.a.createElement("p",null,"The standard font PayEx DesignGuide uses is Roboto. It is included in the stylesheet. The included font weights you can use are: 300, 400, 500, 700 & 900. Both normal and italicized is available."),l.a.createElement("h3",null,"Removing Roboto"),l.a.createElement("p",null,"In case your site is not going to use Roboto, you can modify your font stack by modifying the snippet below to your preferance and add it to your custom stylesheet."),l.a.createElement(i.ComponentPreview,{language:"css",codeFigure:!0},"html {\n                                font-family: GillSans, Calibri, Trebuchet, sans-serif;\n                            }"))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"headings"},"Headings"),l.a.createElement("p",null,"PayEx DesignGuide provides basic styling on all headings (h1-h6)."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h1",null,"Heading h1"),l.a.createElement("h2",null,"Heading h2"),l.a.createElement("h3",null,"Heading h3"),l.a.createElement("h4",null,"Heading h4"),l.a.createElement("h5",null,"Heading h5"),l.a.createElement("h6",null,"Heading h6")),l.a.createElement("p",null,"The classes ",l.a.createElement(i.Property,{value:".h1"})," through ",l.a.createElement(i.Property,{value:".h6"})," are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"h1"},".h1 heading"),l.a.createElement("p",{className:"h2"},".h2 heading"),l.a.createElement("p",{className:"h3"},".h3 heading"),l.a.createElement("p",{className:"h4"},".h4 heading"),l.a.createElement("p",{className:"h5"},".h5 heading"),l.a.createElement("p",{className:"h6"},".h6 heading")))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"small"},"Small"),l.a.createElement("p",null,"Use the ",l.a.createElement(c.a,{className:"language-html"},"<small></small>")," tags to create a secondary heading within a heading tag or class."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("h2",null,"Main heading ",l.a.createElement("small",null,"with a faded secondary heading"))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"lead"},"Lead"),l.a.createElement("p",null,"Make a paragraph stand out by using ",l.a.createElement(i.Property,{value:".lead"}),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",{className:"lead"},"This is a leading paragraph which for instance can be used as an introduction.")))},p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"inline-text-elements"},"Inline text elements"),l.a.createElement("p",null,"Styling for common inline HTML5 elements."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,"You can use the mark tag to ",l.a.createElement("mark",null,"highlight")," text."),l.a.createElement("p",null,l.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),l.a.createElement("p",null,l.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),l.a.createElement("p",null,l.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),l.a.createElement("p",null,l.a.createElement("u",null,"This line of text will render as underlined")),l.a.createElement("p",null,l.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),l.a.createElement("p",null,l.a.createElement("strong",null,"This line rendered as bold text.")),l.a.createElement("p",null,l.a.createElement("b",null,"This line really stands out.")),l.a.createElement("p",null,l.a.createElement("em",null,"This line rendered as italicized text.")),l.a.createElement("p",null,l.a.createElement("i",null,"This is the last line, it too will render as italicized text."))),l.a.createElement("p",null,"The ",l.a.createElement(i.Property,{value:".mark"})," and ",l.a.createElement(i.Property,{value:".small"})," classes are also available to apply the same styles as ",l.a.createElement(c.a,{className:"language-html"},"<mark>")," and ",l.a.createElement(c.a,{className:"language-html"},"<small>")," while avoiding any unwanted semantic implications that the tags would bring."),l.a.createElement("p",null,"While not shown above, feel free to use ",l.a.createElement(c.a,{className:"language-html"},"<b>")," and ",l.a.createElement(c.a,{className:"language-html"},"<i>")," in HTML5. ",l.a.createElement(c.a,{className:"language-html"},"<b>")," is meant to highlight words or phrases without conveying additional importance while ",l.a.createElement(c.a,{className:"language-html"},"<i>")," is mostly for voice, technical terms, etc."))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"text-utilities"},"Text utilities"),l.a.createElement("p",null,"Change text color with our ",l.a.createElement(r.a,{to:"/docs/utilities/colors"},"color utilities"),"."))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"abbreviations"},"Abbreviations"),l.a.createElement("p",null,"Stylized implementation of HTML’s ",l.a.createElement(c.a,{className:"language-html"},"<abbr>")," element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies."),l.a.createElement("p",null,"Add ",l.a.createElement(i.Property,{value:".initialism"})," to an abbreviation for a slightly smaller font-size."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("p",null,l.a.createElement("abbr",{title:"Laugh Out Loud"},"LOL")),l.a.createElement("p",null,l.a.createElement("abbr",{title:"HyperText Markup Language",className:"initialism"},"HTML"))),l.a.createElement("p",null,l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",target:"_blank",rel:"noopener noreferrer"},"Read more")," about abbreviations."))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:"blockquotes"},"Blockquotes"),l.a.createElement("p",null,"For quoting blocks of content from another source within your document. Wrap ",l.a.createElement(c.a,{className:"language-html"},"<blockquote>")," or ",l.a.createElement(i.Property,{value:".blockquote"})," around any HTML as the quote."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Naming a source"),l.a.createElement("p",null,"Add a ",l.a.createElement(c.a,{className:"language-html"},"<footer>")," for identifying the source. Wrap the name of the source work in ",l.a.createElement(c.a,{className:"language-html"},"<cite>"),"."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",null,"Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?"),l.a.createElement("footer",null,l.a.createElement("cite",{title:"The Karate Kid (1984)"},"Mr. Miyagi")))))},null),l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Alignment"),l.a.createElement("p",null,"Use ",l.a.createElement(r.a,{to:"/docs/utilities/text"},"text utilities")," ",l.a.createElement("b",null,"(NOT YET IMPLEMENTED)")," as needed to change the alignment of your blockquote."),l.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},l.a.createElement("blockquote",{className:"blockquote text-center"},l.a.createElement("p",null,"It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man."),l.a.createElement("footer",null,l.a.createElement("cite",{title:"Star Wars: Episode IV - A New Hope (1977)"},"Han Solo")))))},null))};a.default=function(){return l.a.createElement(i.DocContainer,{docToc:!0},l.a.createElement("p",{className:"lead"},"Documentation and examples for PayEx DesignGuide typography."),l.a.createElement(u,null),l.a.createElement(s,null),l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(h,null),l.a.createElement(E,null),l.a.createElement(g,null))}}}]);
//# sourceMappingURL=doc-route.chunk_30.js.map?37ac0b0012d0cabffa16