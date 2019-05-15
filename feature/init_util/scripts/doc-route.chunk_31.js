(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[31,2,48,49,50,52,53,54,55],{363:function(e,t,n){"use strict";n.r(t);var a=n(364);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(366);n.d(t,"ComponentPreview",function(){return r.default});var l=n(372);n.d(t,"DocContainer",function(){return l.default});var o=n(374);n.d(t,"DocHeading",function(){return o.default});var c=n(367);n.d(t,"DocToc",function(){return c.default});var i=n(368);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var u=n(369);n.d(t,"ExperimentalComponentAlert",function(){return u.default});var s=n(370);n.d(t,"Icon",function(){return s.default});var m=n(373);n.d(t,"JavascriptDocs",function(){return m.default});var p=n(371);n.d(t,"PxScript",function(){return p.default})},364:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:o.a.string,value:o.a.string,data:o.a.bool},c.propTypes={value:o.a.string.isRequired},t.default=i},365:function(e,t,n){"use strict";var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=function(e){var t=e.id,n=e.type,a=e.icon,l=e.close,o=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,o?"\n":"",o?r.a.createElement("p",null,o):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,l?"\n":"",l?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:o.a.string,type:o.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:o.a.string,close:o.a.bool,text:o.a.string},t.a=c},366:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=n(376),i=n(377),u=n.n(i),s=n(378);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,l=e.hideValue,o=e.removeList,i=e.showCasePanel,d=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},E=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,d?r.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):o?E(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):o?E(t):Object(c.renderToStaticMarkup)(t);else switch(p(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=u.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=u.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return s.b.style="",r.a.createElement("figure",null,r.a.createElement(s.a,m({},s.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",m({key:e+t},l({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",m({key:t},o({token:e,key:t})))}))}))}))},null):null)};d.propTypes={language:o.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:o.a.bool,hideValue:o.a.bool,removeList:o.a.bool,showCasePanel:o.a.bool,codeFigure:o.a.bool,dangerousHTML:o.a.bool},t.default=d},367:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=n(375);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,m(t).call(this,e))).state={headings:d(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(l=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&u(n.prototype,l),o&&u(n,o),t}();f.propTypes={component:o.a.func.isRequired},t.default=f},368:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(365);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},369:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(365);t.default=function(){return r.a.createElement(l.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},370:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};o.propTypes={icon:n.n(l).a.string.isRequired},t.default=o},371:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=function(e){var t,n,a=e.component,l=e.subComponents,o=e.func,c=e.params;return l&&(n=l.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t,className:e.includes('"')?"token string":null},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},o),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:o.a.string.isRequired,subComponents:o.a.array,func:o.a.string.isRequired,params:o.a.array},t.default=c},372:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(65),o=n.n(l),c=n(363),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:o.a.bool},t.default=i},373:function(e,t,n){"use strict";n.r(t),n.d(t,"OpenDocs",function(){return c}),n.d(t,"CloseDocs",function(){return i});var a=n(1),r=n.n(a),l=n(95),o=n(363),c=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"open",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Opens the given ",t.toLowerCase(),"."))},i=function(e){var t=e.componentName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"close",params:["<".concat(t.toLowerCase(),"-id>")]})),r.a.createElement("p",null,"Closes the given ",t.toLowerCase(),"."))};t.default=function(e){var t=e.componentName,n=e.open,a=e.close;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement(o.PxScript,{component:t,func:"init"})),r.a.createElement("p",null,r.a.createElement(l.Link,{to:"/docs/getting-started/javascript"},"Initializes")," ",t.toLowerCase(),"."),n?r.a.createElement(c,{componentName:t}):null,a?r.a.createElement(i,{componentName:t}):null)}},375:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.genericHashLink=E,t.HashLink=g,t.NavHashLink=y;var o=u(n(1)),c=u(n(65)),i=n(95);function u(e){return e&&e.__esModule?e:{default:e}}var s="",m=null,p=null,d=null;function f(){s="",null!==m&&m.disconnect(),null!==p&&(window.clearTimeout(p),p=null)}function h(){var e=document.getElementById(s);return null!==e&&(d(e),f(),!0)}function E(e,t){e.scroll,e.smooth;var n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["scroll","smooth"]);return o.default.createElement(t,r({},n,{onClick:function(t){f(),e.onClick&&e.onClick(t),"string"==typeof e.to?s=e.to.split("#").slice(1).join("#"):"object"===l(e.to)&&"string"==typeof e.to.hash&&(s=e.to.hash.replace("#","")),""!==s&&(d=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},window.setTimeout(function(){!1===h()&&(null===m&&(m=new MutationObserver(h)),m.observe(document,{attributes:!0,childList:!0,subtree:!0}),p=window.setTimeout(function(){f()},1e4))},0))}}),e.children)}function g(e){return E(e,i.Link)}function y(e){return E(e,i.NavLink)}var b={onClick:c.default.func,children:c.default.node,scroll:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object])};g.propTypes=b,y.propTypes=b},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(380);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(a).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},380:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),c=(r=o)&&r.__esModule?r:{default:r},i=n(65);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a._handleRefMount=function(e){a._domNode=e},u(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),l(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return c.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}();s.propTypes={async:i.PropTypes.bool,className:i.PropTypes.string,children:i.PropTypes.any,component:i.PropTypes.node},s.defaultProps={component:"code"},t.default=s},415:function(e,t,n){"use strict";n.r(t),n.d(t,"Fonts",function(){return u}),n.d(t,"Headings",function(){return s}),n.d(t,"Small",function(){return m}),n.d(t,"Lead",function(){return p}),n.d(t,"Inline",function(){return d}),n.d(t,"TextUtilities",function(){return f}),n.d(t,"Abbreviations",function(){return h}),n.d(t,"Blockquotes",function(){return E});var a=n(1),r=n.n(a),l=n(95),o=n(379),c=n.n(o),i=n(363),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"font"},"Font"),r.a.createElement("p",null,"The standard font PayEx DesignGuide uses is Roboto. It is included in the stylesheet. The included font weights you can use are: 300, 400, 500, 700 & 900. Both normal and italicized is available."),r.a.createElement("h3",null,"Removing Roboto"),r.a.createElement("p",null,"In case your site is not going to use Roboto, you can modify your font stack by modifying the snippet below to your preferance and add it to your custom stylesheet."),r.a.createElement(i.ComponentPreview,{language:"css",codeFigure:!0},"html {\n                                font-family: GillSans, Calibri, Trebuchet, sans-serif;\n                            }"))},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"headings"},"Headings"),r.a.createElement("p",null,"PayEx DesignGuide provides basic styling on all headings (h1-h6)."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("h1",null,"Heading h1"),r.a.createElement("h2",null,"Heading h2"),r.a.createElement("h3",null,"Heading h3"),r.a.createElement("h4",null,"Heading h4"),r.a.createElement("h5",null,"Heading h5"),r.a.createElement("h6",null,"Heading h6")),r.a.createElement("p",null,"The classes ",r.a.createElement(i.Property,{value:".h1"})," through ",r.a.createElement(i.Property,{value:".h6"})," are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"h1"},".h1 heading"),r.a.createElement("p",{className:"h2"},".h2 heading"),r.a.createElement("p",{className:"h3"},".h3 heading"),r.a.createElement("p",{className:"h4"},".h4 heading"),r.a.createElement("p",{className:"h5"},".h5 heading"),r.a.createElement("p",{className:"h6"},".h6 heading")))},m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"small"},"Small"),r.a.createElement("p",null,"Use the ",r.a.createElement(c.a,{className:"language-html"},"<small></small>")," tags to create a secondary heading within a heading tag or class."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("h2",null,"Main heading ",r.a.createElement("small",null,"with a faded secondary heading"))))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"lead"},"Lead"),r.a.createElement("p",null,"Make a paragraph stand out by using ",r.a.createElement(i.Property,{value:".lead"}),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",{className:"lead"},"This is a leading paragraph which for instance can be used as an introduction.")))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"inline-text-elements"},"Inline text elements"),r.a.createElement("p",null,"Styling for common inline HTML5 elements."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",null,"You can use the mark tag to ",r.a.createElement("mark",null,"highlight")," text."),r.a.createElement("p",null,r.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),r.a.createElement("p",null,r.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),r.a.createElement("p",null,r.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),r.a.createElement("p",null,r.a.createElement("u",null,"This line of text will render as underlined")),r.a.createElement("p",null,r.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),r.a.createElement("p",null,r.a.createElement("strong",null,"This line rendered as bold text.")),r.a.createElement("p",null,r.a.createElement("b",null,"This line really stands out.")),r.a.createElement("p",null,r.a.createElement("em",null,"This line rendered as italicized text.")),r.a.createElement("p",null,r.a.createElement("i",null,"This is the last line, it too will render as italicized text."))),r.a.createElement("p",null,"The ",r.a.createElement(i.Property,{value:".mark"})," and ",r.a.createElement(i.Property,{value:".small"})," classes are also available to apply the same styles as ",r.a.createElement(c.a,{className:"language-html"},"<mark>")," and ",r.a.createElement(c.a,{className:"language-html"},"<small>")," while avoiding any unwanted semantic implications that the tags would bring."),r.a.createElement("p",null,"While not shown above, feel free to use ",r.a.createElement(c.a,{className:"language-html"},"<b>")," and ",r.a.createElement(c.a,{className:"language-html"},"<i>")," in HTML5. ",r.a.createElement(c.a,{className:"language-html"},"<b>")," is meant to highlight words or phrases without conveying additional importance while ",r.a.createElement(c.a,{className:"language-html"},"<i>")," is mostly for voice, technical terms, etc."))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"text-utilities"},"Text utilities"),r.a.createElement("p",null,"Change text color with our ",r.a.createElement(l.Link,{to:"/docs/utilities/colors"},"color utilities"),"."))},h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"abbreviations"},"Abbreviations"),r.a.createElement("p",null,"Stylized implementation of HTML’s ",r.a.createElement(c.a,{className:"language-html"},"<abbr>")," element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies."),r.a.createElement("p",null,"Add ",r.a.createElement(i.Property,{value:".initialism"})," to an abbreviation for a slightly smaller font-size."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("p",null,r.a.createElement("abbr",{title:"Laugh Out Loud"},"LOL")),r.a.createElement("p",null,r.a.createElement("abbr",{title:"HyperText Markup Language",className:"initialism"},"HTML"))),r.a.createElement("p",null,r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",target:"_blank",rel:"noopener noreferrer"},"Read more")," about abbreviations."))},E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"blockquotes"},"Blockquotes"),r.a.createElement("p",null,"For quoting blocks of content from another source within your document. Wrap ",r.a.createElement(c.a,{className:"language-html"},"<blockquote>")," or ",r.a.createElement(i.Property,{value:".blockquote"})," around any HTML as the quote."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))))},null),r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Naming a source"),r.a.createElement("p",null,"Add a ",r.a.createElement(c.a,{className:"language-html"},"<footer>")," for identifying the source. Wrap the name of the source work in ",r.a.createElement(c.a,{className:"language-html"},"<cite>"),"."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",null,"Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?"),r.a.createElement("footer",null,r.a.createElement("cite",{title:"The Karate Kid (1984)"},"Mr. Miyagi")))))},null),r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Alignment"),r.a.createElement("p",null,"Use ",r.a.createElement(l.Link,{to:"/docs/utilities/text"},"text utilities")," ",r.a.createElement("b",null,"(NOT YET IMPLEMENTED)")," as needed to change the alignment of your blockquote."),r.a.createElement(i.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement("blockquote",{className:"blockquote text-center"},r.a.createElement("p",null,"It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man."),r.a.createElement("footer",null,r.a.createElement("cite",{title:"Star Wars: Episode IV - A New Hope (1977)"},"Han Solo")))))},null))};t.default=function(){return r.a.createElement(i.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"Documentation and examples for PayEx DesignGuide typography."),r.a.createElement(u,null),r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(h,null),r.a.createElement(E,null))}}}]);
//# sourceMappingURL=doc-route.chunk_31.js.map?ada0311bb58a82242187