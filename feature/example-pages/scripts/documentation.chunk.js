(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[58],{429:function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n),a=o(418);e.default=Object(a.a)(function(t){var e,o=t.location,n=o.pathname.match(/[^/]*$/)[0].split("-").map(function(t,e){return 0<e?t:t.charAt(0).toUpperCase()+t.substr(1)}).join(" ");return e=n,document.title="".concat(e," | PayEx DesignGuide"),i.a.createElement("h2",{className:"h1"},n)})},441:function(t,e){t.exports=[{title:"Getting Started",path:"/docs/getting-started",redirect:"/docs/getting-started/introduction",routes:[{title:"Introduction",path:"/docs/getting-started/introduction",componentPath:"getting-started/Introduction"},{title:"Browser Support",path:"/docs/getting-started/browser-support",componentPath:"getting-started/BrowserSupport"},{title:"Contributing",path:"/docs/getting-started/contributing",componentPath:"getting-started/Contributing"}]},{title:"Core",path:"/docs/core",redirect:"/docs/core/breakpoints",routes:[{title:"Breakpoints",path:"/docs/core/breakpoints",componentPath:"core/Breakpoints"},{title:"Color",path:"/docs/core/color",componentPath:"core/Color"},{title:"Favicons",path:"/docs/core/favicons",componentPath:"core/Favicons"},{title:"Grid",path:"/docs/core/grid",componentPath:"core/Grid"},{title:"Iconography",path:"/docs/core/iconography",componentPath:"core/Iconography"},{title:"Lists",path:"/docs/core/lists",componentPath:"core/Lists"},{title:"Tables",path:"/docs/core/tables",componentPath:"core/Tables"},{title:"Typography",path:"/docs/core/typography",componentPath:"core/Typography"}]},{title:"Components",path:"/docs/components",redirect:"/docs/components/action-list",routes:[{title:"Action List (experimental)",path:"/docs/components/action-list",componentPath:"components/ActionList"},{title:"Alerts",path:"/docs/components/alerts",componentPath:"components/Alerts"},{title:"Badge",path:"/docs/components/badge",componentPath:"components/Badge"},{title:"Breadcrumb",path:"/docs/components/breadcrumb",componentPath:"components/Breadcrumb"},{title:"Buttons",path:"/docs/components/buttons",componentPath:"components/Buttons"},{title:"Card (experimental)",path:"/docs/components/card",componentPath:"components/Card"},{title:"Datepickers",path:"/docs/components/datepickers",componentPath:"components/Datepickers"},{title:"Dialog",path:"/docs/components/dialog",componentPath:"components/Dialog"},{title:"Forms",path:"/docs/components/forms",componentPath:"components/Forms"},{title:"Input Group",path:"/docs/components/input-group",componentPath:"components/InputGroup"},{title:"Loaders",path:"/docs/components/loaders",componentPath:"components/Loaders"},{title:"Media Object",path:"/docs/components/media-object",componentPath:"components/MediaObject"},{title:"Nav (experimental)",path:"/docs/components/nav",componentPath:"components/Nav"},{title:"Pagination",path:"/docs/components/pagination",componentPath:"components/Pagination"},{title:"Panel",path:"/docs/components/panel",componentPath:"components/Panel"},{title:"Sheet",path:"/docs/components/sheet",componentPath:"components/Sheet"},{title:"Slab (experimental)",path:"/docs/components/slab",componentPath:"components/Slab"},{title:"Status",path:"/docs/components/status",componentPath:"components/Status"},{title:"Steps",path:"/docs/components/steps",componentPath:"components/Steps"},{title:"Tabs (experimental)",path:"/docs/components/tabs",componentPath:"components/Tabs"},{title:"Toast (experimental)",path:"/docs/components/toast",componentPath:"components/Toast"},{title:"Tooltips",path:"/docs/components/tooltips",componentPath:"components/Tooltips"},{title:"Topbar",path:"/docs/components/topbar",componentPath:"components/Topbar"}]},{title:"Utilities",path:"/docs/utilities",redirect:"/docs/utilities/colors",routes:[{title:"Colors",path:"/docs/utilities/colors",componentPath:"utilities/Colors"},{title:"Display",path:"/docs/utilities/display",componentPath:"utilities/Display"},{title:"Flex",path:"/docs/utilities/flex",componentPath:"utilities/Flex"},{title:"Images",path:"/docs/utilities/images",componentPath:"utilities/Images"},{title:"Sizing",path:"/docs/utilities/sizing",componentPath:"utilities/Sizing"},{title:"Spacing",path:"/docs/utilities/spacing",componentPath:"utilities/Spacing"},{title:"Text",path:"/docs/utilities/text",componentPath:"utilities/Text"},{title:"Visibility",path:"/docs/utilities/visibility",componentPath:"utilities/Visibility"}]}]},442:function(t,e,i){"use strict";i.r(e);var o=i(1),a=i.n(o),n=i(2),s=i.n(n),r=i(419),c=i(190),p=i(444),l=i(67),u=i.n(l),m=i(66),d=function(t){var e=t.path,o=t.redirect,n=t.routes;return a.a.createElement(r.a,null,a.a.createElement(c.a,{exact:!0,path:e,render:function(){return a.a.createElement(p.a,{to:o})}}),n.map(function(t){var e=t.path,o=t.componentPath,n=u()({loader:function(){return i(445)("./".concat(o,"/index.js"))},loading:m.a});return a.a.createElement(c.a,{key:"doc_route_".concat(e),exact:!0,path:e,render:function(){return a.a.createElement(n,null)}})}),a.a.createElement(p.a,{from:"".concat(e,"/*"),to:"/404"}))};d.propTypes={path:s.a.string.isRequired,redirect:s.a.string.isRequired,routes:s.a.array.isRequired},e.default=d},443:function(t,e,o){"use strict";var n=o(222),i=o.n(n),a={},s=0;e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"/",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,o=a[e]||(a[e]={});if(o[t])return o[t];var n=i.a.compile(t);return s<1e4&&(o[t]=n,s++),n}(t)(e,{pretty:!0})}},444:function(t,e,o){"use strict";var n=o(1),i=o.n(n),a=o(2),s=o.n(a),r=o(29),c=o.n(r),p=o(18),l=o.n(p),u=o(188),m=o(443),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(u.c)(t.to),o=Object(u.c)(this.props.to);Object(u.f)(e,o)?c()(!1,"You tried to redirect to the same route you're currently on: \""+o.pathname+o.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,o=t.to;return e?"string"==typeof o?Object(m.a)(o,e.params):d({},o,{pathname:Object(m.a)(o.pathname,e.params)}):o},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,o=this.computeTo(this.props);e?t.push(o):t.replace(o)},e.prototype.render=function(){return null},e}(i.a.Component);h.propTypes={computedMatch:s.a.object,push:s.a.bool,from:s.a.string,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired},h.defaultProps={push:!1},h.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired}).isRequired,staticContext:s.a.object}).isRequired};var f=h;e.a=f},445:function(t,e,n){var i={"./components/ActionList/index.js":[446,1,2,0,3,9],"./components/Alerts/index.js":[452,1,2,4,0,10],"./components/Badge/index.js":[454,1,2,0,3,21],"./components/Breadcrumb/index.js":[491,1,2,4,0,32],"./components/Buttons/index.js":[455,1,2,4,0,43],"./components/Card/index.js":[499,1,2,0,3,51],"./components/Datepickers/index.js":[456,1,2,0,3,53],"./components/Dialog/index.js":[457,1,2,0,3,54],"./components/Forms/index.js":[458,1,2,4,0,55],"./components/InputGroup/index.js":[459,1,2,0,3,56],"./components/Loaders/index.js":[460,1,2,0,3,11],"./components/MediaObject/index.js":[461,1,2,0,3,12],"./components/Nav/index.js":[494,1,2,4,0,13],"./components/Pagination/index.js":[495,1,2,0,3,14],"./components/Panel/index.js":[497,1,2,0,3,15],"./components/Sheet/index.js":[462,1,2,0,3,16],"./components/Slab/index.js":[463,1,2,0,3,17],"./components/Status/index.js":[464,1,2,0,3,18],"./components/Steps/index.js":[498,1,2,4,0,19],"./components/Tabs/index.js":[496,1,2,4,0,20],"./components/Toast/index.js":[465,1,2,0,3,22],"./components/Tooltips/index.js":[466,1,2,0,3,23],"./components/Topbar/index.js":[490,1,2,4,0,24],"./core/Breakpoints/index.js":[467,1,2,0,3,25],"./core/Color/index.js":[493,1,2,0,3,26],"./core/Favicons/index.js":[468,1,2,4,0,27],"./core/Grid/index.js":[469,1,2,0,3,28],"./core/Iconography/index.js":[492,1,2,4,0,29],"./core/Lists/index.js":[470,1,2,0,3,30],"./core/Tables/index.js":[471,1,2,0,3,31],"./core/Typography/index.js":[472,1,2,4,0,33],"./getting-started/BrowserSupport/index.js":[473,1,2,0,3,34],"./getting-started/Contributing/index.js":[480,1,2,4,0,35],"./getting-started/Introduction/index.js":[481,1,2,4,0,36],"./utilities/Colors/index.js":[482,1,2,4,0,37],"./utilities/Display/index.js":[483,1,2,0,3,38],"./utilities/Flex/index.js":[484,1,2,0,3,39],"./utilities/Images/index.js":[485,1,2,0,3,40],"./utilities/Sizing/index.js":[486,1,2,0,3,41],"./utilities/Spacing/index.js":[487,1,2,0,3,42],"./utilities/Text/index.js":[488,1,2,0,3,44],"./utilities/Visibility/index.js":[489,1,2,0,3,45],"./utils/Attribute/index.js":[420,46],"./utils/ComponentPreview/index.js":[428,1,47],"./utils/DeprecatedComponentAlert/index.js":[422,48],"./utils/DocContainer/index.js":[426,1,2,0,3,5],"./utils/DocHeading/index.js":[429],"./utils/DocToc/index.js":[430,2,0],"./utils/ExperimentalComponentAlert/index.js":[423,49],"./utils/Icon/index.js":[424,50],"./utils/PxScript/index.js":[425,52],"./utils/RenderRoutes/index.js":[442],"./utils/index.js":[427,1,2,0,3,5]};function o(e){var o=i[e];return o?Promise.all(o.slice(1).map(n.e)).then(function(){var t=o[0];return n(t)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(i)},o.id=445,t.exports=o},504:function(t,e,o){"use strict";o.r(e);var a=o(1),s=o.n(a),n=o(419),i=o(190),r=o(444),c=o(417),p=o(418),l=o(441),u=o.n(l);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=h(this,f(o).call(this,t))).state={isActive:t.location.pathname.includes(t.route.path)},e}var e,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(o,a["Component"]),e=o,(n=[{key:"toggleActive",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"shouldComponentUpdate",value:function(t,e){return this.state!==e}},{key:"render",value:function(){var t=this,e=this.props.route,o=e.title,n=e.routes;return s.a.createElement("div",{className:"nav-group".concat(this.state.isActive?" active":"")},s.a.createElement("div",{className:"nav-heading"},s.a.createElement("i",{className:"material-icons",onClick:function(){return t.toggleActive()}},"keyboard_arrow_right"),s.a.createElement("span",{onClick:function(){return t.toggleActive()}},o)),s.a.createElement("ul",null,n.map(function(t,e){return s.a.createElement("li",{key:"nav_link_".concat(e)},s.a.createElement(c.a,{activeClassName:"active",to:t.path},t.title))})))}}])&&d(e.prototype,n),i&&d(e,i),o}(),x=Object(p.a)(function(){return s.a.createElement("div",{className:"doc-sidebar col-xxl-2 col-md-3"},s.a.createElement("nav",{className:"documentation-nav"},u.a.map(function(t,e){var o=Object(p.a)(b);return s.a.createElement(o,{key:"nav_group_".concat(e),route:t})})))}),y=o(429),j=o(442);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e.default=function(){return s.a.createElement("div",{className:"documentation"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"sidebar-heading col-xxl-2 col-md-3"},s.a.createElement("h1",null,"DesignGuide")),s.a.createElement("div",{className:"view-heading col-xxl-10 col-md-9"},s.a.createElement(y.default,null))),s.a.createElement("div",{className:"row"},s.a.createElement(x,null),s.a.createElement("main",{className:"doc-view col-xxl-10 col-md-9"},s.a.createElement(n.a,null,s.a.createElement(i.a,{exact:!0,path:"/docs",render:function(){return s.a.createElement(r.a,{to:"/docs/getting-started"})}}),u.a.map(function(t){return s.a.createElement(j.default,v({key:"renderRoutes_".concat(t.title)},t))}),s.a.createElement(r.a,{from:"/docs/*",to:"/404"})))))}}}]);
//# sourceMappingURL=documentation.chunk.js.map?372bc49b8e71ea498a9d