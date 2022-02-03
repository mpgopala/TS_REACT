/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Person.ts":
/*!***********************!*\
  !*** ./src/Person.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Person = /** @class */ (function () {\r\n    function Person(name, age) {\r\n        this.name = name;\r\n        this.age = age;\r\n    }\r\n    Person.prototype.getName = function () {\r\n        return this.name;\r\n    };\r\n    Person.prototype.getAge = function () {\r\n        return this.age;\r\n    };\r\n    return Person;\r\n}());\r\nexports[\"default\"] = Person;\r\n\n\n//# sourceURL=webpack://webpackexample/./src/Person.ts?");

/***/ }),

/***/ "./src/compute.ts":
/*!************************!*\
  !*** ./src/compute.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.sub = exports.add = void 0;\r\nvar add = function (x, y) { return x + y; };\r\nexports.add = add;\r\nvar sub = function (x, y) { return x - y; };\r\nexports.sub = sub;\r\n\n\n//# sourceURL=webpack://webpackexample/./src/compute.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar compute_1 = __webpack_require__(/*! ./compute */ \"./src/compute.ts\");\r\nvar Person_1 = __importDefault(__webpack_require__(/*! ./Person */ \"./src/Person.ts\"));\r\nconsole.log(\"Hello World!!!\");\r\nvar p1 = new Person_1.default(\"Gopal\", 21);\r\nconsole.log(p1.getName(), p1.getAge());\r\nconsole.log((0, compute_1.add)(3, 4));\r\nconsole.log((0, compute_1.sub)(41, 1));\r\n\n\n//# sourceURL=webpack://webpackexample/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;