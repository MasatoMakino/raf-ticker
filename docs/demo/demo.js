/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! namespace exports */
/*! export Demo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Demo\": () => /* binding */ Demo\n/* harmony export */ });\n/* harmony import */ var _esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm */ \"./esm/index.js\");\n\nclass Demo {\n  constructor() {\n    const types = Object.values(_esm__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEventType);\n    types.forEach(type => {\n      _esm__WEBPACK_IMPORTED_MODULE_0__.RAFTicker.on(type, e => {\n        consoleEvent(type, e);\n      });\n    });\n  }\n\n}\n\nconst consoleEvent = (type, e) => {\n  console.log(`${type} : ${e.delta}, ${e.timestamp}`);\n};\n\nwindow.onload = () => {\n  const demo = new Demo();\n};\n\n//# sourceURL=webpack://raf-ticker/./demoSrc/demo.js?");

/***/ }),

/***/ "./esm/RAFTicker.js":
/*!**************************!*\
  !*** ./esm/RAFTicker.js ***!
  \**************************/
/*! namespace exports */
/*! export RAFTicker [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RAFTicker\": () => /* binding */ RAFTicker\n/* harmony export */ });\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./esm/RAFTickerEvent.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass RAFTicker {\n  static initialize() {\n    if (this._dispatcher != null) return;\n    this._dispatcher = new (eventemitter3__WEBPACK_IMPORTED_MODULE_1___default())();\n    RAFTicker.onTick(performance.now());\n  }\n\n  static reset() {\n    this._dispatcher.removeAllListeners();\n\n    this._dispatcher = null;\n    this._dispatcher = new (eventemitter3__WEBPACK_IMPORTED_MODULE_1___default())();\n    RAFTicker.onTick(performance.now());\n  }\n\n  static addListener(type, listener) {\n    this._dispatcher.on(type, listener);\n  }\n  /**\n   *\n   * @param type\n   * @param listener\n   */\n\n\n  static hasListener(type, listener) {\n    const listeners = this._dispatcher.listeners(type);\n\n    return listeners.includes(listener);\n  }\n  /**\n   * Removes the specified listener\n   *\n   * @param type\n   * @param listener\n   */\n\n\n  static removeListener(type, listener) {\n    this._dispatcher.removeListener(type, listener);\n  }\n  /**\n   * イベントを発効する。\n   * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。\n   *\n   * @param type\n   * @param event\n   */\n\n\n  static emit(type, event) {\n    this._dispatcher.emit(type, event);\n  }\n\n}\n/**\n * Alias for addListener\n *\n * @param type\n * @param listener\n */\n\nRAFTicker.on = RAFTicker.addListener;\n/**\n * Alias for addListener\n *\n * @deprecated use addListener\n * @param type\n * @param listener\n */\n\nRAFTicker.addEventListener = RAFTicker.addListener;\n/**\n * Alias for hasListener\n *\n * @deprecated use hasListener\n * @param type\n * @param listener\n */\n\nRAFTicker.hasEventListener = RAFTicker.hasListener;\n/**\n * Alias for removeListener\n *\n * @param type\n * @param listener\n */\n\nRAFTicker.off = RAFTicker.removeListener;\n/**\n * Alias for removeListener\n *\n * @deprecated use removeListener\n * @param type\n * @param listener\n */\n\nRAFTicker.removeEventListener = RAFTicker.removeListener;\n\nRAFTicker.onTick = timestamp => {\n  if (RAFTicker._lastUpdateTimestamp == null) {\n    RAFTicker._lastUpdateTimestamp = timestamp;\n  }\n\n  const delta = timestamp - RAFTicker._lastUpdateTimestamp;\n  RAFTicker.emit(_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEventType.onBeforeTick, new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEvent(timestamp, delta));\n  RAFTicker.emit(_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEventType.tick, new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEvent(timestamp, delta));\n  RAFTicker.emit(_RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEventType.onAfterTick, new _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_0__.RAFTickerEvent(timestamp, delta));\n  RAFTicker._lastUpdateTimestamp = timestamp;\n  RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);\n};\n\nRAFTicker.initialize();\n\n//# sourceURL=webpack://raf-ticker/./esm/RAFTicker.js?");

/***/ }),

/***/ "./esm/RAFTickerEvent.js":
/*!*******************************!*\
  !*** ./esm/RAFTickerEvent.js ***!
  \*******************************/
/*! namespace exports */
/*! export RAFTickerEvent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RAFTickerEventType [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RAFTickerEventType\": () => /* binding */ RAFTickerEventType,\n/* harmony export */   \"RAFTickerEvent\": () => /* binding */ RAFTickerEvent\n/* harmony export */ });\nvar RAFTickerEventType;\n\n(function (RAFTickerEventType) {\n  RAFTickerEventType[\"onBeforeTick\"] = \"onBeforeTick\";\n  RAFTickerEventType[\"tick\"] = \"tick\";\n  RAFTickerEventType[\"onAfterTick\"] = \"onAfterTick\";\n})(RAFTickerEventType || (RAFTickerEventType = {}));\n\nclass RAFTickerEvent {\n  constructor(timestamp, delta) {\n    this.timestamp = timestamp;\n    this.delta = delta;\n  }\n\n}\n\n//# sourceURL=webpack://raf-ticker/./esm/RAFTickerEvent.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! namespace exports */
/*! export RAFTicker [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/RAFTicker.js .RAFTicker */
/*! export RAFTickerEvent [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/RAFTickerEvent.js .RAFTickerEvent */
/*! export RAFTickerEventType [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/RAFTickerEvent.js .RAFTickerEventType */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RAFTicker\": () => /* reexport safe */ _RAFTicker__WEBPACK_IMPORTED_MODULE_0__.RAFTicker,\n/* harmony export */   \"RAFTickerEvent\": () => /* reexport safe */ _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__.RAFTickerEvent,\n/* harmony export */   \"RAFTickerEventType\": () => /* reexport safe */ _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__.RAFTickerEventType\n/* harmony export */ });\n/* harmony import */ var _RAFTicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAFTicker */ \"./esm/RAFTicker.js\");\n/* harmony import */ var _RAFTickerEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RAFTickerEvent */ \"./esm/RAFTickerEvent.js\");\n\n\n\n//# sourceURL=webpack://raf-ticker/./esm/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkraf_ticker"] = self["webpackChunkraf_ticker"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;