var payex=webpackJsonppayex(["polyfills"],{"./src/polyfills/Element.closest.js":function(t,e,s){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})},"./src/polyfills/String.includes.js":function(t,e,s){"use strict";String.prototype.includes||(String.prototype.includes=function(t,e){return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)})},"./src/polyfills/String.startsWith.js":function(t,e,s){"use strict";String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t})},"./src/polyfills/index.js":function(t,e,s){"use strict";s("./src/polyfills/String.startsWith.js"),s("./src/polyfills/String.includes.js"),s("./src/polyfills/Element.closest.js")}},["./src/polyfills/index.js"]);
//# sourceMappingURL=polyfills.js.map?d5c1657088111204857b