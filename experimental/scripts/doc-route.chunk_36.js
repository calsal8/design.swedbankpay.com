(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[36,2,47,48,49,51,52,53,54],{344:function(e,n,t){"use strict";t.r(n),t.d(n,"Property",function(){return c});var o=t(0),a=t.n(o),r=t(15),l=t.n(r),c=function(e){var n=e.value;return a.a.createElement("code",{className:"token property"},n)},i=function(e){var n=e.data,t=e.name,o=e.value;return t&&o?a.a.createElement("code",null,n?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},t),a.a.createElement("span",{className:"token attr-value"},a.a.createElement("span",{className:"token punctuation"},'="'),o,a.a.createElement("span",{className:"token punctuation"},'"'))):t&&!o?a.a.createElement("code",null,n?a.a.createElement("span",{className:"token attr-name"},"data-"):null,a.a.createElement("span",{className:"token attr-name"},t)):!t&&o?a.a.createElement("code",null,a.a.createElement("span",{className:"token attr-value"},o)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},n.default=i},345:function(e,n,t){"use strict";var o=t(0),c=t.n(o),a=t(15),r=t.n(a),l=function(e){var n=e.id,t=e.type,o=e.icon,a=e.close,r=e.text,l=e.children;return c.a.createElement("div",{id:n,className:"alert alert-".concat(t)},o?"\n":"",o?c.a.createElement("i",{className:"material-icons alert-icon"},o):null,r?"\n":"",r?c.a.createElement("p",null,r):null,l?"\n":"",l?c.a.createElement("div",{className:"alert-body"},l):null,a?"\n":"",a?c.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",c.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};l.propTypes={id:r.a.string,type:r.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:r.a.string,close:r.a.bool,text:r.a.string},n.a=l},346:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t.n(o),a=t(15),r=t.n(a),m=t(356),l=t(357),d=t.n(l),f=t(358);function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){var o=e.children,a=e.language,r=e.removeOuterTag,l=e.hideValue,c=e.removeList,n=e.showCasePanel,t=e.codeFigure,i=e.dangerousHTML,u=function(e){var n=document.createElement("div");return n.innerHTML=Object(m.renderToStaticMarkup)(e),n.firstElementChild?n.firstElementChild.innerHTML:n.firstChild?n.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},p=function(e){var n=document.createElement("div");n.innerHTML=Object(m.renderToStaticMarkup)(e);var t=n.querySelectorAll("li"),o="";return t.forEach(function(e){o+="".concat(e.innerHTML," \n")}),o};return s.a.createElement(s.a.Fragment,null,n?s.a.createElement(function(){return s.a.createElement("div",{className:"showcase-panel"},o)},null):null,t?s.a.createElement(function(){var e,n,t="";if("html"===a&&i)n="","function"==typeof(e=o).forEach?e.forEach(function(e){return n+="".concat(e,"\n")}):n=e,t=n;else if("html"===a&&o&&"function"==typeof o.map)o.map(function(e){t+=r?u(e):c?p(e):Object(m.renderToStaticMarkup)(e)});else if("html"===a)t+=r?u(o):c?p(o):Object(m.renderToStaticMarkup)(o);else switch(h(o)){case"string":t=o;break;case"object":o.forEach(function(e){return t+=e});break;default:console.warn("CodeFigure: children needs attention!")}switch(a){case"html":t=(t=d.a.html_beautify(t)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),l&&(t=t.replace(/ value="(.*)"/g,""));break;case"css":t=d.a.css(t);break;case"javascript":break;default:return"update switchcase!"}return f.b.style="",s.a.createElement("figure",null,s.a.createElement(f.a,y({},f.b,{theme:void 0,code:t,language:a}),function(e){var n=e.className,t=e.style,o=e.tokens,a=e.getLineProps,r=e.getTokenProps;return s.a.createElement("pre",{className:n,style:t},o.map(function(e,n){return s.a.createElement("div",y({key:e+n},a({line:e,key:n})),e.map(function(e,n){return s.a.createElement("span",y({key:n},r({token:e,key:n})))}))}))}))},null):null)};c.propTypes={language:r.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:r.a.bool,hideValue:r.a.bool,removeList:r.a.bool,showCasePanel:r.a.bool,codeFigure:r.a.bool,dangerousHTML:r.a.bool},n.default=c},347:function(e,n,t){"use strict";t.r(n);var r=t(0),l=t.n(r),o=t(15),a=t.n(o),c=t(355);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function a(e){var n,t,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(n=p(this,s(a).call(this,e))).state={headings:(t=n.props.component().props.children,o=[],"function"==typeof t.map&&t.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)o.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)o.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var t=n.type().props.children[0];"h2"===t.type&&o.push({title:t.props.children,id:t.props.id})}}else"h2"===e.type&&o.push({title:e.props.children,id:e.props.id})}),o),windowTopPosition:window.pageYOffset},n}var n,t,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(a,r["Component"]),n=a,(t=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,n){e.top=0===n?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var o=this;return l.a.createElement("div",{className:"col-2 d-none d-lg-block"},l.a.createElement("div",{className:"doc-toc"},l.a.createElement("ul",null,this.state.headings.map(function(e,n){if(e.id&&e.title){var t=o.state.windowTopPosition>=e.top&&o.state.windowTopPosition<o.state.headings[n+1].top;return l.a.createElement("li",{key:n,className:t?"active":""},l.a.createElement(c.NavHashLink,{to:"#".concat(e.id),activeClassName:"active",scroll:o.scrollToElement},e.title))}}))))}}])&&u(n.prototype,t),o&&u(n,o),a}();d.propTypes={component:a.a.func.isRequired},n.default=d},348:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(345);n.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),a.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},349:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(345);n.default=function(){return a.a.createElement(r.a,{type:"danger"},a.a.createElement("h3",{className:"text-danger"},"Component under development!"),a.a.createElement("p",null,"This component is still under development and is subject to change."))}},350:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(15),l=function(e){var n=e.icon;return a.a.createElement("i",{className:"material-icons"},n)};l.propTypes={icon:t.n(r).a.string.isRequired},n.default=l},351:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(15),r=t.n(a),l=function(e){var n,t,o=e.component,a=e.subComponents,r=e.func,l=e.params;return a&&(t=a.map(function(e,n){return c.a.createElement("span",{key:n},e,c.a.createElement("span",{className:"token punctuation"},"."))})),l&&(n=l.map(function(e,n){return c.a.createElement("span",{key:n},e,n<l.length-1?c.a.createElement("span",{className:"token punctuation"},", "):null)})),c.a.createElement("code",null,c.a.createElement("span",null,"px"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",null,o),c.a.createElement("span",{className:"token punctuation"},"."),t,c.a.createElement("span",{className:"token function"},r),c.a.createElement("span",{className:"token punctuation"},"("),n,c.a.createElement("span",{className:"token punctuation"},");"))};l.propTypes={component:r.a.string.isRequired,subComponents:r.a.array,func:r.a.string.isRequired,params:r.a.array},n.default=l},352:function(e,n,t){"use strict";t.r(n);var o=t(344);t.d(n,"Attribute",function(){return o.default}),t.d(n,"Property",function(){return o.Property});var a=t(346);t.d(n,"ComponentPreview",function(){return a.default});var r=t(353);t.d(n,"DocContainer",function(){return r.default});var l=t(354);t.d(n,"DocHeading",function(){return l.default});var c=t(347);t.d(n,"DocToc",function(){return c.default});var i=t(348);t.d(n,"DeprecatedComponentAlert",function(){return i.default});var u=t(349);t.d(n,"ExperimentalComponentAlert",function(){return u.default});var p=t(350);t.d(n,"Icon",function(){return p.default});var s=t(351);t.d(n,"PxScript",function(){return s.default})},353:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(15),l=t.n(r),c=t(352),i=function(e){var n=e.docToc,t=e.children,o=function(){return a.a.createElement("div",{className:"doc-body ".concat(n?"col-lg-10":"col-12")},t)};return a.a.createElement("div",{className:"doc-container"},a.a.createElement("div",{className:"row"},a.a.createElement(o,null),n?a.a.createElement(c.DocToc,{component:o}):null))};i.propTypes={docToc:l.a.bool},n.default=i},355:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.genericHashLink=y,n.HashLink=h,n.NavHashLink=E;var r=i(t(0)),l=i(t(15)),c=t(56);function i(e){return e&&e.__esModule?e:{default:e}}var u="",p=null,s=null,m=null;function d(){u="",null!==p&&p.disconnect(),null!==s&&(window.clearTimeout(s),s=null)}function f(){var e=document.getElementById(u);return null!==e&&(m(e),d(),!0)}function y(n,e){n.scroll,n.smooth;var t=function(e,n){var t={};for(var o in e)0<=n.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(n,["scroll","smooth"]);return r.default.createElement(e,o({},t,{onClick:function(e){d(),n.onClick&&n.onClick(e),"string"==typeof n.to?u=n.to.split("#").slice(1).join("#"):"object"===a(n.to)&&"string"==typeof n.to.hash&&(u=n.to.hash.replace("#","")),""!==u&&(m=n.scroll||function(e){return n.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout(function(){!1===f()&&(null===p&&(p=new MutationObserver(f)),p.observe(document,{attributes:!0,childList:!0,subtree:!0}),s=window.setTimeout(function(){d()},1e4))},0))}}),n.children)}function h(e){return y(e,c.Link)}function E(e){return y(e,c.NavLink)}var v={onClick:l.default.func,children:l.default.node,scroll:l.default.func,to:l.default.oneOfType([l.default.string,l.default.object])};E.propTypes=h.propTypes=v},359:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(360);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"PrismCode",{enumerable:!0,get:function(){return a(o).default}}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a(o).default}})},360:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,a=function(){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}}(),r=t(0),c=(o=r)&&o.__esModule?o:{default:o},l=t(15);function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var u=function(e){function l(){var e,n,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l);for(var o=arguments.length,a=Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=t=i(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(a))))._handleRefMount=function(e){t._domNode=e},i(t,n)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(l,r.PureComponent),a(l,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.component,o=e.children;return c.default.createElement(t,{ref:this._handleRefMount,className:n},o)}}]),l}();u.propTypes={async:l.PropTypes.bool,className:l.PropTypes.string,children:l.PropTypes.any,component:l.PropTypes.node},u.defaultProps={component:"code"},n.default=u},405:function(e,n,t){"use strict";t.r(n),t.d(n,"CreatingYourComponent",function(){return i}),t.d(n,"CreateADocumentationPage",function(){return u}),t.d(n,"AddComponentToRoutes",function(){return p}),t.d(n,"AddingStyles",function(){return s}),t.d(n,"AddingJavaScript",function(){return m});var o=t(0),a=t.n(o),r=t(359),l=t.n(r),c=t(352),i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"creating-your-component"},"Creating your component"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(c.Property,{value:"./src/App/components/[MyExampleComponent]/"})," for your component, name it ",a.a.createElement(c.Property,{value:"index.js"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example component\nimport React from "react";\nimport PropTypes from "prop-types";\nconst MyExampleComponent = ({ type, title, separator }) => (\n    <div className={`well well-${type}`}>\n        <h3>{title}</h3>\n        {separator ? <hr /> : null}\n        This is my example component in a well.\n    </div>\n);\nMyExampleComponent.propTypes = {\n    type: PropTypes.oneOf(["light", "dark"]).isRequired,\n    title: PropTypes.string.isRequired,\n    separator: PropTypes.bool\n};\nexport default MyExampleComponent;\n            '))},u=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"create-a-documentation-page"},"Create a documentation page"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(c.Property,{value:"./src/App/Documentation/Components/[MyExampleDocumentationComponent]/"})," for your component, call it ",a.a.createElement(c.Property,{value:"index.js"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example documentation component\nimport React from "react";\nimport { ComponentPreview, DocContainer } from "#";\nimport MyExampleComponent from "@/MyExampleComponent";\nconst MyExampleDocumentationComponent = () => (\n    <DocContainer docToc>\n        <p className="lead">This is the documentation for My Example Component.</p>\n        <h2 id="example-usage">Example usage</h2>\n        <ComponentPreview language="html" showCasePanel codeFigure>\n            <MyExampleComponent type="dark" title="My Example Component" separator />\n        </ComponentPreview>\n    </DocContainer>\n);\nexport default MyExampleDocumentationComponent;\n            '),a.a.createElement("p",null,"Use the custom ",a.a.createElement(c.Property,{value:"ComponentPreview"})," component to preview your component. It has several props, for this example we are going to be using ",a.a.createElement(c.Property,{value:"language"}),", ",a.a.createElement(c.Property,{value:"showCasePanel"})," and ",a.a.createElement(c.Property,{value:"codeFigure"}),"."),a.a.createElement("p",null,"We are also using the ",a.a.createElement(c.Property,{value:"DocContainer"})," component to sentralize the layout of the documentation, pass the ",a.a.createElement(c.Property,{value:"docToc"})," prop to add a dynamic table of contents to the documentation of your component. This component scans the provided component for ",a.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tags and creates anchors for easier navigation. Just remember to add an id to the ",a.a.createElement(l.a,{className:"language-html"},"<h2>"),"-tag."))},p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{id:"add-component-to-routes"},"Add component to routes"),a.a.createElement("p",null,"In ",a.a.createElement(c.Property,{value:"./src/App/routes/docs.js"})," under the components object add the following:"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n/**\n * Components\n */\n{\n    title: "Components",\n    path: "/docs/components",\n    redirect: "/docs/components/alerts",\n    routes: [\n        ...\n        ...\n        // ADD THIS\n        {\n            title: "My Example Documentation Component",\n            path: "/docs/components/my-example-documentation-component",\n            componentPath: "components/My-example-documentation-component"\n        },\n        ...\n        ...\n    ]\n},\n            '),a.a.createElement("p",null,"You will now be able to go to the route you provided to preview your component. Run ",a.a.createElement(c.Property,{value:"npm start"})," if you haven","'","t already done so, and navigate to ",a.a.createElement(c.Property,{value:"localhost:3000/docs/components/my-example-documentation-component"})," to see your component in action."))},s=function(){return a.a.createElement("div",null,a.a.createElement("h2",{id:"adding-styles"},"Adding styles"),a.a.createElement("p",null,"To add styling for your component create a new file in ",a.a.createElement(c.Property,{value:"./src/less/components/"}),", name it ",a.a.createElement(c.Property,{value:"my-example-component.less"}),"."),a.a.createElement(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Importing the styles"),a.a.createElement("p",null,"Import it in the appropriate root-file (",a.a.createElement(c.Property,{value:"px.less"})," for the core styles, under ",a.a.createElement(c.Property,{value:"/themes"})," if the component is going to be part of a specific theme)."),a.a.createElement("p",null,"Assuming you are creating a core component the import would look like this:"),a.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},'\n/* px.less */\n...\n/* Components */\n@import "components/my-example-component";\n...\n                '))},null),a.a.createElement(function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Creating variables"),a.a.createElement("p",null,"To add custom variables to your component modify ",a.a.createElement(c.Property,{value:"./src/less/_variables.less"}),", and add a section for your component. Add it alphabetically and update the table of contents."),a.a.createElement("p",null,"Adding a section should look like this:"),a.a.createElement(c.ComponentPreview,{language:"css",codeFigure:!0},'\n// _variables.less\n// [number]. My Example Component\n// ==========================================================================\n@my-example-component-color: @gray-3;\n@my-example-component-background: @gray-8;\n@my-example-component-padding: 1rem;\n@my-example-component-font-family: "Arial";\n                '))},null),a.a.createElement("p",null,"Your the styles for ",a.a.createElement(c.Property,{value:"MyExampleComponent"})," should now be included properly, and you should see changes immediatly while running dev."),a.a.createElement("p",null,"When writing styles for your component, try to use ",a.a.createElement(c.Property,{value:"rem"})," (",a.a.createElement(c.Property,{value:"1rem"})," = ~",a.a.createElement(c.Property,{value:"16px"}),") and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by ",a.a.createElement(c.Property,{value:"./.stylelintrc"}),"."))},m=function(){return a.a.createElement("div",null,a.a.createElement("h2",{id:"adding-javascript"},"Adding javascript"),a.a.createElement("p",null,"If your component needs javascript to run, you will need to add the javascript to the ",a.a.createElement(c.Property,{value:"px-script"})),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Create a script file for your component"),a.a.createElement("p",null,"Create a new file under ",a.a.createElement(c.Property,{value:"./src/px-script/main/[MyExampleComponent]/"})," for your component, name it ",a.a.createElement(c.Property,{value:"index.js"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\nconst init = () => {\n    alert("MyExampleComponent was initialized");\n};\nconst MyExampleComponent = {\n    init\n};\nexport default MyExampleComponent;\n                '),a.a.createElement("p",null,"Note: All essential functionality for your component needs to be called within the ",a.a.createElement(c.Property,{value:"init"})," method."))},null),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"Add your components script to px-script"),a.a.createElement("p",null,"Open ",a.a.createElement(c.Property,{value:"./src/px-script/main/index.js"})," and add your component:"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n...\nimport MyExampleComponent from "./MyExampleComponent";\n...\nconst px = {\n...\nMyExampleComponent,\n...\n};\n...\nexport { ... MyExampleComponent, ... }\n                '))},null),a.a.createElement(function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Initializing the script in the documentation"),a.a.createElement("p",null,"Considering the documentation is built in react your documentation component will load after ",a.a.createElement(c.Property,{value:"px-script"})," runs it","'","s ",a.a.createElement(c.Property,{value:"initAll"})," method, you will need to run your component","'","s init method when the component actually renders."),a.a.createElement("p",null,"You can do this by slightly modifying the ",a.a.createElement(c.Property,{value:"MyExampleDocumentationComponent"}),":"),a.a.createElement(c.ComponentPreview,{language:"javascript",codeFigure:!0},'\n//example documentation component\n// change this line\nimport React, { Component } from "react";\n...\n// import your components script\nimport { MyExampleComponent } from "$/px-script/main";\n...\n...\n// modify MyExampleDocumentationComponent\nclass MyExampleDocumentationComponent extends Component {\n    componentDidMount () {\n        MyExampleComponent.init();\n    }\n    render() {\n        return (\n            <DocContainer docToc>\n                <p className="lead">This is the documentation for My Example Component.</p>\n                <h2 id="example-usage">Example usage</h2>\n                <ComponentPreview language="html" showCasePanel codeFigure>\n                    <MyExampleComponent type="dark" title="My Example Component" separator />\n                </ComponentPreview>\n            </DocContainer>\n        )\n    }\n}\n                '))},null))};n.default=function(){return a.a.createElement(c.DocContainer,{docToc:!0},a.a.createElement("p",{className:"lead"},"To create a new component"),a.a.createElement(i,null),a.a.createElement(u,null),a.a.createElement(p,null),a.a.createElement(s,null),a.a.createElement(m,null))}}}]);
//# sourceMappingURL=doc-route.chunk_36.js.map?75ce481dba08a5210eef