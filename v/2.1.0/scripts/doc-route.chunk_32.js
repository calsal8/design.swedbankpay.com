(window.webpackJsonppayex=window.webpackJsonppayex||[]).push([[32,47,48,49,52,53,54],{345:function(e,t,n){"use strict";n.r(t);var a=n(334),r=n.n(a);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e,t){var n=e.data;return o({},e,{data:{labels:n.labels,datasets:n.datasets.map(function(e,n){return function(e,n){var a=e.data,r=e.type,l=o({},e,{backgroundColor:[],borderColor:[],borderWidth:1,hoverBorderWidth:2});return"line"===r?(l.pointBackgroundColor=[],l.pointBorderColor=[],l.pointHoverBorderColor=[],l.pointHoverBackgroundColor=[],l.borderWidth=4,l.pointBorderWidth=2,l.pointRadius=4,l.pointHoverRadius=6):(l.hoverBackgroundColor=[],l.hoverBorderColor=[]),a.forEach(function(){r?"line"===r&&(l.backgroundColor.push("rgba(".concat(t[n],", 0.2)")),l.borderColor.push("rgba(".concat(t[n],", 0.7)")),l.pointBackgroundColor.push("rgba(".concat(t[n],", 0.9)")),l.pointBorderColor.push("rgba(".concat(t[n],", 0.9)")),l.pointHoverBorderColor.push("rgba(".concat(t[n],", 1)")),l.pointHoverBackgroundColor.push("rgba(".concat(t[n],", 1)"))):(l.backgroundColor.push("rgba(".concat(t[n],", 0.5)")),l.borderColor.push("rgba(".concat(t[n],", 0.9)")),l.hoverBackgroundColor.push("rgba(".concat(t[n],", 0.7)")),l.hoverBorderColor.push("rgba(".concat(t[n],", 1)")))}),l}(e,n)})}})};function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n=e.data;return i({},e,{data:{labels:n.labels,datasets:n.datasets.map(function(e){return function(e){var n=i({},e,{backgroundColor:[],borderColor:[],hoverBackgroundColor:[],hoverBorderColor:[],borderWidth:1,hoverBorderWidth:2});return e.data.forEach(function(e,a){n.backgroundColor.push("rgba(".concat(t[a],", 0.5)")),n.hoverBackgroundColor.push("rgba(".concat(t[a],", 0.7)")),n.borderColor.push("rgba(".concat(t[a],", 0.9)")),n.hoverBorderColor.push("rgba(".concat(t[a],", 1)"))}),n}(e)})}})};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e,t){var n=function(e,n){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){p(e,t,n[t])})}return e}({},e,{backgroundColor:[],borderColor:[],pointBackgroundColor:[],pointHoverBackgroundColor:[],pointHoverBorderColor:[],pointBorderColor:[],pointBorderWidth:2,borderWidth:4,pointRadius:4,pointHoverRadius:6});return e.data.forEach(function(){a.backgroundColor.push("rgba(".concat(t[n],", 0.2)")),a.borderColor.push("rgba(".concat(t[n],", 0.7)")),a.pointBackgroundColor.push("rgba(".concat(t[n],", 0.9)")),a.pointHoverBackgroundColor.push("rgba(".concat(t[n],", 1)")),a.pointHoverBorderColor.push("rgba(".concat(t[n],", 1)")),a.pointBorderColor.push("rgba(".concat(t[n],", 0.9)"))}),a},a=e.type,r=e.data,o=e.options;return{type:a,data:{labels:r.labels,datasets:r.datasets.map(function(e,t){return n(e,t)})},options:o}},m=["45, 169, 68","38, 108, 154","125, 85, 170","255, 159, 0","205, 46, 0","19, 70, 17","0, 52, 89","106, 1, 54","245, 184, 65","255, 34, 12"],f=function(e,t){var n=document.getElementById(e);n&&"CANVAS"===n.tagName&&t.type&&t.data&&function(e,t){var n;switch(t.type){case"bar":case"horizontalBar":n=c(t,m);break;case"pie":case"doughnut":n=u(t,m);break;case"line":n=d(t,m)}n&&new r.a(e,n)}(n.getContext("2d"),t)};n.d(t,"chart",function(){return f});var h=window.px||{};h.chart=f,window.px=h;t.default=h},389:function(e,t,n){"use strict";n.r(t),n.d(t,"Property",function(){return c});var a=n(2),r=n.n(a),o=n(74),l=n.n(o),c=function(e){var t=e.value;return r.a.createElement("code",{className:"token property"},t)},i=function(e){var t=e.data,n=e.name,a=e.value;return n&&a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},'="'),a,r.a.createElement("span",{className:"token punctuation"},'"'))):n&&!a?r.a.createElement("code",null,t?r.a.createElement("span",{className:"token attr-name"},"data-"):null,r.a.createElement("span",{className:"token attr-name"},n)):!n&&a?r.a.createElement("code",null,r.a.createElement("span",{className:"token attr-value"},a)):void 0};i.propTypes={name:l.a.string,value:l.a.string,data:l.a.bool},c.propTypes={value:l.a.string.isRequired},t.default=i},390:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(74),l=n.n(o),c=function(e){var t=e.id,n=e.type,a=e.icon,o=e.close,l=e.text,c=e.children;return r.a.createElement("div",{id:t,className:"alert alert-".concat(n)},a?"\n":"",a?r.a.createElement("i",{className:"material-icons alert-icon"},a):null,l?"\n":"",l?r.a.createElement("p",null,l):null,c?"\n":"",c?r.a.createElement("div",{className:"alert-body"},c):null,o?"\n":"",o?r.a.createElement("a",{href:"#","data-alert-close":"",onClick:function(e){return e.preventDefault()}},"\n\t\t",r.a.createElement("i",{className:"material-icons"},"close"),"\n\t"):null,"\n")};c.propTypes={id:l.a.string,type:l.a.oneOf(["success","neutral","warning","danger","default"]).isRequired,icon:l.a.string,close:l.a.bool,text:l.a.string},t.a=c},391:function(e,t,n){"use strict";n.r(t);var a=n(389);n.d(t,"Attribute",function(){return a.default}),n.d(t,"Property",function(){return a.Property});var r=n(392);n.d(t,"ComponentPreview",function(){return r.default});var o=n(398);n.d(t,"DocContainer",function(){return o.default});var l=n(399);n.d(t,"DocHeading",function(){return l.default});var c=n(393);n.d(t,"DocToc",function(){return c.default});var i=n(394);n.d(t,"DeprecatedComponentAlert",function(){return i.default});var s=n(395);n.d(t,"ExperimentalComponentAlert",function(){return s.default});var u=n(396);n.d(t,"Icon",function(){return u.default});var p=n(397);n.d(t,"PxScript",function(){return p.default})},392:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(74),l=n.n(o),c=n(401),i=n(402),s=n.n(i),u=n(403);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=function(e){var t=e.children,n=e.language,a=e.removeOuterTag,o=e.hideValue,l=e.removeList,i=e.showCasePanel,m=e.codeFigure,f=e.dangerousHTML,h=function(e){var t=document.createElement("div");return t.innerHTML=Object(c.renderToStaticMarkup)(e),t.firstElementChild?t.firstElementChild.innerHTML:t.firstChild?t.firstChild.nodeValue:"Check ComponentPreview _removeOuterTag!"},b=function(e){var t=document.createElement("div");t.innerHTML=Object(c.renderToStaticMarkup)(e);var n=t.querySelectorAll("li"),a="";return n.forEach(function(e){a+="".concat(e.innerHTML," \n")}),a};return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(function(){return r.a.createElement("div",{className:"showcase-panel"},t)},null):null,m?r.a.createElement(function(){var e="";if("html"===n&&f)e=function(e){var t="";return"function"==typeof e.forEach?e.forEach(function(e){return t+="".concat(e,"\n")}):t=e,t}(t);else if("html"===n&&t&&"function"==typeof t.map)t.map(function(t){e+=a?h(t):l?b(t):Object(c.renderToStaticMarkup)(t)});else if("html"===n)e+=a?h(t):l?b(t):Object(c.renderToStaticMarkup)(t);else switch(d(t)){case"string":e=t;break;case"object":t.forEach(function(t){return e+=t})}switch(n){case"html":e=(e=s.a.html_beautify(e)).replace(/=""/g,"").replace(/ class>/g,">").replace(/ class /g," ").replace(/value /g,""),o&&(e=e.replace(/ value="(.*)"/g,""));break;case"css":e=s.a.css(e);break;case"javascript":break;default:return"update switchcase!"}return u.b.style="",r.a.createElement("figure",null,r.a.createElement(u.a,p({},u.b,{theme:void 0,code:e,language:n}),function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},a.map(function(e,t){return r.a.createElement("div",p({key:e+t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",p({key:t},l({token:e,key:t})))}))}))}))},null):null)};m.propTypes={language:l.a.oneOf(["html","javascript","css"]).isRequired,removeOuterTag:l.a.bool,hideValue:l.a.bool,removeList:l.a.bool,showCasePanel:l.a.bool,codeFigure:l.a.bool,dangerousHTML:l.a.bool},t.default=m},393:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(74),l=n.n(o),c=n(400);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=[];return"function"==typeof e.map&&e.map(function(e){if("ExperimentalComponentAlert"!==e.type.name&&"function"==typeof e.type)if("h2"===e.type().props.children.type)t.push({title:e.type().props.children.props.children,id:e.type().props.children.props.id});else{var n=e.type().props.children[0];if("h2"===n.type)t.push({title:n.props.children,id:n.props.id});else if("function"==typeof n.type){var a=n.type().props.children[0];"h2"===a.type&&t.push({title:a.props.children,id:a.props.id})}}else"h2"===e.type&&t.push({title:e.props.children,id:e.props.id})}),t},f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,p(t).call(this,e))).state={headings:m(n.props.component().props.children),windowTopPosition:window.pageYOffset},n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a["Component"]),n=t,(o=[{key:"updateWindowPosition",value:function(){this.setState({windowTopPosition:window.pageYOffset})}},{key:"scrollToElement",value:function(e){window.scrollTo({top:e.offsetTop+100,left:0,behavior:"instant"})}},{key:"componentDidMount",value:function(){this.state.headings&&(this.state.headings.map(function(e,t){e.top=0===t?0:document.getElementById(e.id).offsetTop}),this.state.headings.push({top:document.body.clientHeight})),this.scrollListener=this.updateWindowPosition.bind(this),window.addEventListener("scroll",this.scrollListener),this.updateWindowPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-2 d-none d-lg-block"},r.a.createElement("div",{className:"doc-toc"},r.a.createElement("ul",null,this.state.headings.map(function(t,n){if(t.id&&t.title){var a=e.state.windowTopPosition>=t.top&&e.state.windowTopPosition<e.state.headings[n+1].top;return r.a.createElement("li",{key:n,className:a?"active":""},r.a.createElement(c.NavHashLink,{to:"#".concat(t.id),activeClassName:"active",scroll:e.scrollToElement},t.title))}}))))}}])&&s(n.prototype,o),l&&s(n,l),t}();f.propTypes={component:l.a.func.isRequired},t.default=f},394:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(390);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component deprecated!"),r.a.createElement("p",null,"This component has been deprecated and should not be used!"))}},395:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(390);t.default=function(){return r.a.createElement(o.a,{type:"danger"},r.a.createElement("h3",{className:"text-danger"},"Component under development!"),r.a.createElement("p",null,"This component is still under development and is subject to change."))}},396:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(74),l=function(e){var t=e.icon;return r.a.createElement("i",{className:"material-icons"},t)};l.propTypes={icon:n.n(o).a.string.isRequired},t.default=l},397:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(74),l=n.n(o),c=function(e){var t,n,a=e.component,o=e.subComponents,l=e.func,c=e.params;return o&&(n=o.map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("span",{className:"token punctuation"},"."))})),c&&(t=c.map(function(e,t){return r.a.createElement("span",{key:t},e,t<c.length-1?r.a.createElement("span",{className:"token punctuation"},", "):null)})),r.a.createElement("code",null,r.a.createElement("span",null,"px"),r.a.createElement("span",{className:"token punctuation"},"."),r.a.createElement("span",null,a),r.a.createElement("span",{className:"token punctuation"},"."),n,r.a.createElement("span",{className:"token function"},l),r.a.createElement("span",{className:"token punctuation"},"("),t,r.a.createElement("span",{className:"token punctuation"},");"))};c.propTypes={component:l.a.string.isRequired,subComponents:l.a.array,func:l.a.string.isRequired,params:l.a.array},t.default=c},398:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(74),l=n.n(o),c=n(391),i=function(e){var t=e.docToc,n=e.children,a=function(){return r.a.createElement("div",{className:"doc-body ".concat(t?"col-lg-10":"col-12")},n)};return r.a.createElement("div",{className:"doc-container"},r.a.createElement("div",{className:"row"},r.a.createElement(a,null),t?r.a.createElement(c.DocToc,{component:a}):null))};i.propTypes={docToc:l.a.bool},t.default=i},461:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(391),l=n(74),c=n.n(l),i=n(345);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.id,n=e.options;Object(i.chart)(t,n)}},{key:"render",value:function(){return r.a.createElement("canvas",{id:this.props.id})}}])&&u(n.prototype,o),l&&u(n,l),t}();f.propTypes={id:c.a.string.isRequired,options:c.a.object.isRequired};var h=f;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"LineChart",function(){return w}),n.d(t,"BarChart",function(){return k}),n.d(t,"DoughnutAndPieCharts",function(){return C}),n.d(t,"MixingTypes",function(){return P});var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"line-chart"},"Line chart"),r.a.createElement("p",{className:"lead"},"If Johnny Cash could, then you too should be able to..."),r.a.createElement("p",null,"A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets."),r.a.createElement("p",null,"See ",r.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/line.html",target:"_blank",rel:"noopener noreferrer"},"chart.js")," for more information on line charts."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"simple-line-chart",options:{type:"line",data:{labels:["2013","2014","2015","2016","2017","2018"],datasets:[{label:"Peak",data:[261,673,962,1067,1007,779]}]}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("simple-line-chart", {\n    type: "line",\n    data: {\n        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],\n        datasets: [\n            {\n                label: "Peak",\n                data: [261, 673, 962, 1067, 1007, 779]\n            }\n        ]\n    }\n});\n                '),r.a.createElement("h3",null,"Stepped and dashed line"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"stepped-dashed-line-chart",options:{type:"line",data:{labels:["2014","2015","2016","2017","2018","2019","2020","2021"],datasets:[{label:"Active users",data:[1815,1958,2080,2210,2341,2471,2600,2725],steppedLine:!0},{label:"Registered users",data:[2196,2327,2421,2573,2644,2767,2913,3004],borderDash:[15,5]}]}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("stepped-dashed-line-chart", {\n    type: "line",\n    data: {\n        labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],\n        datasets: [\n            {\n                label: "Active users",\n                data: [1815, 1958, 2080, 2210, 2341, 2471, 2600, 2725],\n                steppedLine: true\n            },\n            {\n                label: "Registered users",\n                data: [2196, 2327, 2421, 2573, 2644, 2767, 2913, 3004],\n                borderDash: [15, 5]\n            }\n        ]\n    }\n});\n                '),r.a.createElement("h3",null,"Advanced options"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"advanced-line-chart",options:{type:"line",data:{labels:["2011","2012","2013","2014","2015","2016","2017","2018"],datasets:[{label:"DotA2 TI Prize Pool",data:[1.6,1.6,2.87,10.92,18.42,20.77,24.78,25.53],fill:!1},{label:"LoL World Championship Prize Pool",data:[.1,2,2.05,2.13,2.13,5.07,4.94,2.25],fill:!1}]},options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"In millions"},ticks:{callback:function(e){return"$".concat(e)}}}]}}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("advanced-line-chart", {\n    type: "line",\n    data: {\n        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],\n        datasets: [\n            {\n                label: "DotA2 TI Prize Pool",\n                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53],\n                fill: false\n            },\n            {\n                label: "LoL World Championship Prize Pool",\n                data: [0.1, 2, 2.05, 2.13, 2.13, 5.07, 4.94, 2.25],\n                fill: false\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                scaleLabel: {\n                    display: true,\n                    labelString: "In millions"\n                },\n                ticks: {\n                    callback: value => `$${value}`\n                }\n            }]\n        }\n    }\n});\n                '))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"bar-chart"},"Bar chart"),r.a.createElement("p",{className:"lead"},"A priest and a rabbi walked into a bar..."),r.a.createElement("p",null,"A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."),r.a.createElement("p",null,"See ",r.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/bar.html",target:"_blank",rel:"noopener noreferrer"},"chart.js")," for more information on bar charts."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"simple-bar-chart",options:{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Hours of daylight",data:[6.75,9.25,11.75,14.5,17,18.75,18,15.5,13,10.25,7.5,6]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("simple-bar-chart", {\n    type: "bar",\n    data: {\n        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n        datasets: [\n            {\n                label: "Hours of daylight",\n                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true\n                }\n            }]\n        }\n    }\n});\n        '),r.a.createElement("h3",null,"Multiple datasets"),r.a.createElement("p",null,"You can add multiple datasets"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"multi-bar-chart",options:{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Hours of daylight",data:[6.75,9.25,11.75,14.5,17,18.75,18,15.5,13,10.25,7.5,6]},{label:"Total rain (in cm)",data:[4.9,3.6,4.7,4.1,5.3,6.5,8.1,8.9,9,8.4,7.3,5.5]},{label:"Average temperature (in celcius)",data:[-1.7,-4.1,-2.3,6.5,16.1,17.9,22.2,16.3,12.5,7.4,1.6,-1.5]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("multi-bar-chart", {\n    type: "bar",\n    data: {\n        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n        datasets: [\n            {\n                label: "Hours of daylight",\n                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]\n            },\n            {\n                label: "Total rain (in cm)",\n                data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]\n            },\n            {\n                label: "Average temperature (in celcius)",\n                data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true\n                }\n            }]\n        }\n    }\n});\n            '),r.a.createElement("h3",null,"Stacked bar"),r.a.createElement("p",{className:"lead"},"You can stack, because a stacked bar is almost as good as a stocked one"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"stacked-multi-bar-chart",options:{type:"bar",data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"Paid with cash",data:[19,23,29,24,28,33,21,24,20,17,23,24]},{label:"Paid with credit card",data:[31,29,32,17,25,32,28,30,24,22,20,37]},{label:"Paid with Vipps",data:[11,9,7,12,4,13,8,10,4,1,13,16]}]},options:{scales:{yAxes:[{stacked:!0,ticks:{beginAtZero:!0}}],xAxes:[{stacked:!0}]}}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("stacked-multi-bar-chart", {\n    type: "bar",\n    data: {\n        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],\n        datasets: [\n            {\n                label: "Paid with cash",\n                data: [19, 23, 29, 24, 28, 33, 21, 24, 20, 17, 23, 24]\n            },\n            {\n                label: "Paid with credit card",\n                data: [31, 29, 32, 17, 25, 32, 28, 30, 24, 22, 20, 37]\n            },\n            {\n                label: "Paid with Vipps",\n                data: [11, 9, 7, 12, 4, 13, 8, 10, 4, 1, 13, 16]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                stacked: true,\n                ticks: {\n                    beginAtZero: true\n                }\n            }],\n            xAxes: [{\n                stacked: true\n            }]\n        }\n    }\n});\n                '))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"doughnut-and-pie-charts"},"Doughnut and Pie charts"),r.a.createElement("p",{className:"lead"},"Stress cannot exist in the presence of pie..."),r.a.createElement("p",null,"Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."),r.a.createElement("p",null,"See ",r.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/doughnut.html",target:"_blank",rel:"noopener noreferrer"},"chart.js")," for more information on doughnut and pie charts."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"simple-pie-chart",options:{type:"pie",data:{labels:["Chrome","Internet Explorer","Firefox","Edge","Safari","Opera","Other"],datasets:[{data:[63.14,11.43,10.23,4.34,3.83,1.56,4.19]}]}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("simple-pie-chart", {\n    type: "pie",\n    data: {\n        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],\n        datasets: [\n            {\n                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]\n            }\n        ]\n    }\n});\n            '),r.a.createElement("h2",null,"Doughnut"),r.a.createElement("p",{className:"lead"},"Did anyone say ",r.a.createElement("code",{className:"token string"},"doughnut"),"?"),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"doughnut-chart",options:{type:"doughnut",data:{labels:["PC and Mac","Smartphones and Tablets","PS4/PRO","VR Headsets","Xbox one/Scorpio","Web Browsers","Linux","Nintendo Switch","Other"],datasets:[{data:[53,38,27,24,22,13,7,3,9]}]}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("doughnut-chart", {\n    type: "doughnut",\n    data: {\n        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],\n        datasets: [\n            {\n                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]\n            }\n        ]\n    }\n});\n        '))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"mixing-types"},"Mixing types"),r.a.createElement("p",{className:"lead"},"With Chart.js, it is possible to create ",r.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/charts/mixed.html",target:"_blank",rel:"noopener noreferrer"},"mixed charts")," that are a combination of two or more different chart types. A common example is a bar chart that also includes a line dataset."),r.a.createElement(o.ComponentPreview,{language:"html",showCasePanel:!0,codeFigure:!0},r.a.createElement(h,{id:"mixed-chart",options:{type:"bar",data:{labels:["2016","2017","2018","2019","2020","2021"],datasets:[{label:"Growth",data:[20,25,30]},{label:"Expected Growth",data:[20,25,30,35,40,45],type:"line",fill:!1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}})),r.a.createElement(o.ComponentPreview,{language:"javascript",codeFigure:!0},'\npx.chart("mixed-chart", {\n    type: "bar",\n    data: {\n        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],\n        datasets: [\n            {\n                label: "Growth",\n                data: [20, 25, 30]\n            },\n            {\n                label: "Expected Growth",\n                data: [20, 25, 30, 35, 40, 45],\n                type: "line", // Changes this dataset to become a line\n                fill: false\n            }\n        ]\n    },\n    options: {\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true\n                }\n            }]\n        }\n    }\n});\n        '))},O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,v(t).apply(this,arguments))}var n,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a["Component"]),n=t,(l=[{key:"render",value:function(){return r.a.createElement(o.DocContainer,{docToc:!0},r.a.createElement("p",{className:"lead"},"We are using ",r.a.createElement("a",{href:"https://www.chartjs.org/",target:"_blank",rel:"noopener noreferrer"},"chart.js")," to generate the charts. Our script is mainly just a wrapper around that library to add the correct styling etc."),r.a.createElement("p",null,"Most options and settings available in the chart.js documentation will be available."),r.a.createElement("p",null,"For now, the following chart types are available:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",{className:"token string"},'"line"')),r.a.createElement("li",null,r.a.createElement("code",{className:"token string"},'"bar"/"horizontalBar"')),r.a.createElement("li",null,r.a.createElement("code",{className:"token string"},'"pie"/"doughnut"'))),r.a.createElement(w,null),r.a.createElement(k,null),r.a.createElement(C,null),r.a.createElement(P,null))}}])&&y(n.prototype,l),c&&y(n,c),t}();t.default=O}}]);
//# sourceMappingURL=doc-route.chunk_32.js.map?47c78be1b266c6a009e4