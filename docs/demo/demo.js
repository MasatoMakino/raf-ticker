/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demo": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demo.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! exports provided: Demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Demo\", function() { return Demo; });\n/* harmony import */ var _esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm */ \"./esm/index.js\");\n\nclass Demo {\n  constructor() {\n    const types = Object.values(_esm__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"]);\n    types.forEach(type => {\n      _esm__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"].on(type, e => {\n        consoleEvent(type, e);\n      });\n    });\n  }\n\n}\n\nconst consoleEvent = (type, e) => {\n  console.log(`${type} : ${e.delta}, ${e.timestamp}`);\n};\n\nwindow.onload = () => {\n  const demo = new Demo();\n};\n\n//# sourceURL=webpack:///./demoSrc/demo.js?");

/***/ }),

/***/ "./esm/RAFTicker.js":
/*!**************************!*\
  !*** ./esm/RAFTicker.js ***!
  \**************************/
/*! exports provided: RAFTicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTicker\", function() { return RAFTicker; });\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./esm/RAFTickerEvent.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass RAFTicker {\n  static initialize() {\n    if (this._dispatcher != null) return;\n    this._dispatcher = new eventemitter3__WEBPACK_IMPORTED_MODULE_1___default.a();\n    RAFTicker.onTick(performance.now());\n  }\n\n  static reset() {\n    this._dispatcher.removeAllListeners();\n\n    this._dispatcher = null;\n    this._dispatcher = new eventemitter3__WEBPACK_IMPORTED_MODULE_1___default.a();\n    RAFTicker.onTick(performance.now());\n  }\n\n  static addListener(type, listener) {\n    this._dispatcher.on(type, listener);\n  }\n  /**\n   * Alias for addListener\n   *\n   * @param type\n   * @param listener\n   */\n\n\n  static on(type, listener) {\n    this.addListener(type, listener);\n  }\n  /**\n   * Alias for addListener\n   *\n   * @deprecated use addListener\n   * @param type\n   * @param listener\n   */\n\n\n  static addEventListener(type, listener) {\n    this.addListener(type, listener);\n  }\n  /**\n   *\n   * @param type\n   * @param listener\n   */\n\n\n  static hasListener(type, listener) {\n    const listeners = this._dispatcher.listeners(type);\n\n    return listeners.includes(listener);\n  }\n  /**\n   * Alias for hasListener\n   *\n   * @deprecated use hasListener\n   * @param type\n   * @param listener\n   */\n\n\n  static hasEventListener(type, listener) {\n    return this.hasListener(type, listener);\n  }\n  /**\n   * Removes the specified listener\n   *\n   * @param type\n   * @param listener\n   */\n\n\n  static removeListener(type, listener) {\n    this._dispatcher.removeListener(type, listener);\n  }\n  /**\n   * Alias for removeListener\n   *\n   * @param type\n   * @param listener\n   */\n\n\n  static off(type, listener) {\n    this.removeListener(type, listener);\n  }\n  /**\n   * Alias for removeListener\n   *\n   * @deprecated use removeListener\n   * @param type\n   * @param listener\n   */\n\n\n  static removeEventListener(type, listener) {\n    this.removeListener(type, listener);\n  }\n  /**\n   * イベントを発効する。\n   * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。\n   *\n   * @param type\n   * @param event\n   */\n\n\n  static emit(type, event) {\n    this._dispatcher.emit(type, event);\n  }\n\n}\n\nRAFTicker.onTick = timestamp => {\n  if (RAFTicker._lastUpdateTimestamp == null) {\n    RAFTicker._lastUpdateTimestamp = timestamp;\n  }\n\n  const delta = timestamp - RAFTicker._lastUpdateTimestamp;\n  RAFTicker.emit(_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onBeforeTick, new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](timestamp, delta));\n  RAFTicker.emit(_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].tick, new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](timestamp, delta));\n  RAFTicker.emit(_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEventType\"].onAfterTick, new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__[\"RAFTickerEvent\"](timestamp, delta));\n  RAFTicker._lastUpdateTimestamp = timestamp;\n  RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);\n};\n\nRAFTicker.initialize();\n\n//# sourceURL=webpack:///./esm/RAFTicker.js?");

/***/ }),

/***/ "./esm/RAFTickerEvent.js":
/*!*******************************!*\
  !*** ./esm/RAFTickerEvent.js ***!
  \*******************************/
/*! exports provided: RAFTickerEventType, RAFTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEventType\", function() { return RAFTickerEventType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEvent\", function() { return RAFTickerEvent; });\nvar RAFTickerEventType;\n\n(function (RAFTickerEventType) {\n  RAFTickerEventType[\"onBeforeTick\"] = \"onBeforeTick\";\n  RAFTickerEventType[\"tick\"] = \"tick\";\n  RAFTickerEventType[\"onAfterTick\"] = \"onAfterTick\";\n})(RAFTickerEventType || (RAFTickerEventType = {}));\n\nclass RAFTickerEvent {\n  constructor(timestamp, delta) {\n    this.timestamp = timestamp;\n    this.delta = delta;\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/RAFTickerEvent.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! exports provided: RAFTicker, RAFTickerEventType, RAFTickerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RAFTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTicker */ \"./esm/RAFTicker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTicker\", function() { return _RAFTicker__WEBPACK_IMPORTED_MODULE_0__[\"RAFTicker\"]; });\n\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./esm/RAFTickerEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEventType\", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEventType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RAFTickerEvent\", function() { return _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__[\"RAFTickerEvent\"]; });\n\n\n\n\n//# sourceURL=webpack:///./esm/index.js?");

/***/ })

/******/ });