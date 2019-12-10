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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demoSrc/demo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/EventDispatcher.js":
/*!********************************!*\
  !*** ./bin/EventDispatcher.js ***!
  \********************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventDispatcher\", function() { return EventDispatcher; });\n/**\n * Based on mrdoob/eventdispatcher.js\n * https://github.com/mrdoob/eventdispatcher.js\n * Copyright（c）mrdoob / http://mrdoob.com/\n * Licensed under MIT ( https://github.com/mrdoob/eventdispatcher.js/blob/master/LICENSE )\n */\nclass EventDispatcher {\n  addEventListener(type, listener) {\n    if (this._listeners === undefined) this._listeners = {};\n    const listeners = this._listeners;\n\n    if (listeners[type] === undefined) {\n      listeners[type] = [];\n    }\n\n    if (listeners[type].indexOf(listener) === -1) {\n      listeners[type].push(listener);\n    }\n  }\n\n  hasEventListener(type, listener) {\n    if (this._listeners === undefined) return false;\n    const listeners = this._listeners;\n    return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;\n  }\n\n  removeEventListener(type, listener) {\n    if (this._listeners === undefined) return;\n    const listeners = this._listeners;\n    const listenerArray = listeners[type];\n\n    if (listenerArray !== undefined) {\n      const index = listenerArray.indexOf(listener);\n\n      if (index !== -1) {\n        listenerArray.splice(index, 1);\n      }\n    }\n  }\n\n  dispatchEvent(event) {\n    if (this._listeners === undefined) return;\n    const listeners = this._listeners;\n    const listenerArray = listeners[event.type];\n\n    if (listenerArray !== undefined) {\n      event.target = this;\n      const array = listenerArray.slice(0);\n\n      for (var i = 0, l = array.length; i < l; i++) {\n        array[i].call(this, event);\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/EventDispatcher.js?");

/***/ }),

/***/ "./bin/RAFTicker.js":
/*!**************************!*\
  !*** ./bin/RAFTicker.js ***!
  \**************************/
/*! exports provided: RAFTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTicker\", function() { return RAFTicker; });\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./bin/RAFTickerEvent.js\");\n/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDispatcher */ \"./bin/EventDispatcher.js\");\n\n\nclass RAFTicker {\n  static initialize() {\n    this._dispatcher = new _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__[\"EventDispatcher\"]();\n    RAFTicker.onTick(performance.now());\n  }\n\n  static addEventListener(type, listener) {\n    this._dispatcher.addEventListener(type, listener);\n  }\n\n  static hasEventListener(type, listener) {\n    return this._dispatcher.hasEventListener(type, listener);\n  }\n\n  static removeEventListener(type, listener) {\n    this._dispatcher.removeEventListener(type, listener);\n  }\n\n}\n\nRAFTicker.onTick = timestamp => {\n  if (RAFTicker._lastUpdateTimestamp == null) {\n    RAFTicker._lastUpdateTimestamp = timestamp;\n  }\n\n  const delta = timestamp - RAFTicker._lastUpdateTimestamp;\n\n  RAFTicker._dispatcher.dispatchEvent(new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onBeforeTick, timestamp, delta));\n\n  RAFTicker._dispatcher.dispatchEvent(new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].tick, timestamp, delta));\n\n  RAFTicker._dispatcher.dispatchEvent(new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onAfterTick, timestamp, delta));\n\n  RAFTicker._lastUpdateTimestamp = timestamp;\n  RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);\n};\n\nRAFTicker.initialize();\n\n//# sourceURL=webpack:///./bin/RAFTicker.js?");

/***/ }),

/***/ "./bin/RAFTickerEvent.js":
/*!*******************************!*\
  !*** ./bin/RAFTickerEvent.js ***!
  \*******************************/
/*! exports provided: RAFTickerEventType, RAFTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEventType\", function() { return RAFTickerEventType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEvent\", function() { return RAFTickerEvent; });\nvar RAFTickerEventType;\n\n(function (RAFTickerEventType) {\n  RAFTickerEventType[\"onBeforeTick\"] = \"onBeforeTick\";\n  RAFTickerEventType[\"tick\"] = \"tick\";\n  RAFTickerEventType[\"onAfterTick\"] = \"onAfterTick\";\n})(RAFTickerEventType || (RAFTickerEventType = {}));\n\nclass RAFTickerEvent {\n  constructor(type, timestamp, delta) {\n    this.type = type;\n    this.timestamp = timestamp;\n    this.delta = delta;\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/RAFTickerEvent.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! exports provided: RAFTicker, RAFTickerEventType, RAFTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RAFTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTicker */ \"./bin/RAFTicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTicker\", function() { return _RAFTicker__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"]; });\n\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./bin/RAFTickerEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEventType\", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEvent\", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEvent\"]; });\n\n\n\n\n//# sourceURL=webpack:///./bin/index.js?");

/***/ }),

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! exports provided: Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Demo\", function() { return Demo; });\n/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bin */ \"./bin/index.js\");\n\nclass Demo {\n  constructor() {\n    _bin__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"].addEventListener(_bin__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onBeforeTick, e => {\n      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);\n    });\n    _bin__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"].addEventListener(_bin__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].tick, e => {\n      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);\n    });\n    _bin__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"].addEventListener(_bin__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onAfterTick, e => {\n      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);\n    });\n  }\n\n}\n\nwindow.onload = () => {\n  const demo = new Demo();\n};\n\n//# sourceURL=webpack:///./demoSrc/demo.js?");

/***/ })

/******/ });