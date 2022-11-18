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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_postScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/postScore.js */ \"./src/modules/postScore.js\");\n/* harmony import */ var _modules_getScoreAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getScoreAPI.js */ \"./src/modules/getScoreAPI.js\");\n\n\n\nconst submitBtn = document.querySelector('.submit-btn');\nconst refreshBtn = document.querySelector('.refresh-btn');\nconst ulElement = document.querySelector('.render-score');\n\nrefreshBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_getScoreAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  ulElement.innerHTML = '';\n});\n\nsubmitBtn.addEventListener('click', async (e) => {\n  e.preventDefault();\n  await (0,_modules_postScore_js__WEBPACK_IMPORTED_MODULE_0__.postData)();\n  _modules_postScore_js__WEBPACK_IMPORTED_MODULE_0__.nameInput.value = '';\n  _modules_postScore_js__WEBPACK_IMPORTED_MODULE_0__.scoreInput.value = '';\n});\n\n// getScore();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/getScoreAPI.js":
/*!************************************!*\
  !*** ./src/modules/getScoreAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postScore.js */ \"./src/modules/postScore.js\");\n\n\nconst ulElement = document.querySelector('.render-score');\n\nconst getScore = async () => {\n  const response = await fetch(_postScore_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl);\n  const data = await response.json();\n  const scoreBoard = data.result;\n  scoreBoard.sort((a, b) => b.score - a.score);\n\n  scoreBoard.forEach((scoreLine) => {\n    const { user, score } = scoreLine;\n    const liElement = document.createElement('li');\n    liElement.innerHTML = `<span>${user}</span><span>:${score}</span>`;\n    ulElement.append(liElement);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScore);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/getScoreAPI.js?");

/***/ }),

/***/ "./src/modules/postScore.js":
/*!**********************************!*\
  !*** ./src/modules/postScore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUrl\": () => (/* binding */ apiUrl),\n/* harmony export */   \"nameInput\": () => (/* binding */ nameInput),\n/* harmony export */   \"postData\": () => (/* binding */ postData),\n/* harmony export */   \"scoreInput\": () => (/* binding */ scoreInput)\n/* harmony export */ });\nconst nameInput = document.querySelector('.name-input');\nconst scoreInput = document.querySelector('.score-input');\nconst apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${\"5FKWsSzfBxeCiMP4dQ2R\"}/scores/`;\n\nconst postData = async () => {\n  await fetch(apiUrl, {\n    method: 'POST',\n    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),\n    headers: { 'Content-Type': 'application/json' },\n  });\n};\n\n//# sourceURL=webpack://webpack-demo/./src/modules/postScore.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.css");
/******/ 	
/******/ })()
;