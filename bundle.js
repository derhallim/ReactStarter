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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: [BABEL] D:\\Projects\\Dev\\react2\\src\\app.js: Unknown option: D:\\Projects\\Dev\\react2\\node_modules\\react\\index.js.Children. Check out http://babeljs.io/docs/usage/options/ for more information about options.\n\nA common cause of this error is the presence of a configuration options object without the corresponding preset name. Example:\n\nInvalid:\n  `{ presets: [{option: value}] }`\nValid:\n  `{ presets: [['presetName', {option: value}]] }`\n\nFor more detailed information on preset configuration, please see http://babeljs.io/docs/plugins/#pluginpresets-options. (While processing preset: \"D:\\\\Projects\\\\Dev\\\\react2\\\\node_modules\\\\react\\\\index.js\")\n    at Logger.error (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\logger.js:41:11)\n    at OptionManager.mergeOptions (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:226:20)\n    at D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:265:14\n    at D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:323:22\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (D:\\Projects\\Dev\\react2\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (D:\\Projects\\Dev\\react2\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at Object.module.exports (D:\\Projects\\Dev\\react2\\node_modules\\babel-loader\\lib\\index.js:175:20)");

/***/ })
/******/ ]);