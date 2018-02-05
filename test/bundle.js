/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const tmpl = __webpack_require__(1)
console.log('tmpl', tmpl)
const output = tmpl.render({name: 'Bob'})
console.log(output)


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["render"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nunjucks_src_environment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nunjucks_src_environment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nunjucks_src_environment__);

    
    const templates = {
      
        "/Users/chrisfarmiloe/src/github.com/chrisfarms/paas-node-starter/test/example.njk": __webpack_require__(3)
      ,
        "/Users/chrisfarmiloe/src/github.com/chrisfarms/paas-node-starter/test/example.njk:../src/templates/layout/main.njk": __webpack_require__(4)
      ,
        "/Users/chrisfarmiloe/src/github.com/chrisfarms/paas-node-starter/test/example.njk:./macro.njk": __webpack_require__(5)
      
    }
    function Loader(){};
    Loader.prototype.getSource = function(name) {
      console.log('getSource', name);
      let tmpl = templates[name];
      if (!tmpl) {
        throw new Error('no njk template: '+name);
      }
      if (typeof tmpl === 'object' && tmpl.default) {
        tmpl = tmpl.default;
      }
      if (typeof tmpl === 'function') {
        tmpl = tmpl();
      }
      if (typeof tmpl !== 'string') {
        throw new Error('template ' + name + ' did not return a string, maybe another webpack loader messed with the source');
      }
      return {
        src: tmpl,
        path: name,
        noCache: false,
      };
    }
    Loader.prototype.isRelative = function(templateName) {
      console.log('isRelative');
      return true;
    }
    Loader.prototype.resolve = function(parentName, templateName) {
      const rel = (parentName + ':' + templateName).split(':').slice(-2).join(':');
      for (let k in templates) {
        console.log(k, 'ENDSWITH', rel)
        if (k.endsWith(rel)) {
          return k;
        }
      }
      return rel;
    }
    function render(o) {
      var env = new __WEBPACK_IMPORTED_MODULE_0_nunjucks_src_environment__["Environment"](new Loader());
      return env.render('/Users/chrisfarmiloe/src/github.com/chrisfarms/paas-node-starter/test/example.njk', o);
    }
    /* harmony default export */ __webpack_exports__["default"] = (render);
  

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nunjucks/src/environment");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("{% extends \"../src/templates/layout/main.njk\" %}\n{% import \"./macro.njk\" as forms %}\n{% from \"./macro.njk\" import field %}\n\n{% block content %}\n\t<div>\n\t\tHey {{ name }}!\n\t</div>\n\t<div>\n\t\t{{ field('name') }}\n\t</div>\n{% endblock %}\n\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n\t<title>Hello</title>\n\t<link rel=\"stylesheet\" href=\"../../styles/all.scss\">\n</head>\n<body>\n\t{% block main %}\n\t\tThis is the default content\n\t{% endblock %}\n</body>\n</html>\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("{% macro field(name, value='', type='text') %}\n\t  <input type=\"{{ type }}\" name=\"{{ name }}\" value=\"{{ value | escape }}\" />\n\t</div>\n{% endmacro %}\n");

/***/ })
/******/ ]);