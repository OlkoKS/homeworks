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

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task_1-weather_widget_webpack/./src/scss/index.scss?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n\n\n;\n\nconst refs = {\n    humidityEl: document.getElementById(\"js--humidity\"),\n    pressureEl: document.getElementById(\"js--pressure\"),\n    windEl: document.getElementById(\"js--wind\"),\n    cityEl: document.getElementById(\"js--city\"),\n    tempEl: document.getElementById(\"js--temperature\"),\n    tempFeelsEl: document.getElementById(\"js--temp-feels\"),\n    descriptionEl: document.getElementById(\"js--description\"),\n    imageButtonEl: document.getElementById(\"button-img\"),\n    buttonEl: document.getElementById(\"js--loading-button\"),\n}\n\nconst {\n    humidityEl,\n    pressureEl,\n    windEl,\n    cityEl,\n    tempEl,\n    tempFeelsEl,\n    descriptionEl,\n    imageButtonEl,\n    buttonEl,\n} = refs;\n\nasync function getWeather(url) {\n    try {\n        let response = await fetch(url);\n\n        if (response.status === 200) {\n            let weatherData = await response.json();\n            showWeatherData(weatherData);\n        } else {\n            console.log(\"ERROR\");\n        }\n    } catch (error) {\n        console.log(error);\n    }\n}\n\nfunction showWeatherData(data) {\n    buttonEl.disabled = false;\n    buttonEl.classList.remove(\"button-loader\");\n    imageButtonEl.classList.remove(\"hidden\");\n\n    humidityEl.textContent = `Humidity: ${data.main.humidity}%`;\n    pressureEl.textContent = `Pressure: ${data.main.pressure} hPa`;\n    windEl.textContent = `Wind: ${data.wind.speed} m/s`;\n\n    const imageEl = document.getElementById(\"js--weather-icon\");\n    if (imageEl) {\n        imageEl.remove();\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createWeatherIcon)(data.weather[0].icon);\n    } else {\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createWeatherIcon)(data.weather[0].icon);\n    }\n\n    cityEl.textContent = `${data.name}`;\n    tempEl.textContent = `${Math.round(data.main.temp)} °C`;\n    tempFeelsEl.textContent = `Feels Like: ${Math.round(data.main.feels_like)} °C`;\n    descriptionEl.textContent = `${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.textToUpperCase)(data.weather[0].description)}`;\n\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.showWeatherUpdateTime)();\n    buttonEl.classList.remove(\"hidden\");\n}\n\n//# sourceURL=webpack://task_1-weather_widget_webpack/./src/js/api.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeatherIcon: () => (/* binding */ createWeatherIcon),\n/* harmony export */   showCurrentDateAndTime: () => (/* binding */ showCurrentDateAndTime),\n/* harmony export */   showWeatherUpdateTime: () => (/* binding */ showWeatherUpdateTime),\n/* harmony export */   textToUpperCase: () => (/* binding */ textToUpperCase),\n/* harmony export */   updateWeather: () => (/* binding */ updateWeather)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n\n\n;\n\nconst refs = {\n    dateEl: document.getElementById(\"js--date\"),\n    timeEl: document.getElementById(\"js--time\"),\n    weatherInfoEl: document.getElementById(\"js--weather-info\"),\n    dateTimeEl: document.getElementById(\"js--date-time\"),\n    imageButtonEl: document.getElementById(\"button-img\"),\n    buttonEl: document.getElementById(\"js--loading-button\"),\n}\n\nconst {\n    dateEl,\n    timeEl,\n    weatherInfoEl,\n    dateTimeEl,\n    imageButtonEl,\n    buttonEl,\n} = refs;\n\nfunction showCurrentDateAndTime() {\n    showCurrentDate();\n    showCurrentTime();\n\n    setInterval(() => {\n        showCurrentDate();\n        showCurrentTime();\n    }, 1000);\n}\n\nfunction showCurrentDate() {\n    let month = showMonth(new Date().getMonth());\n    let date = new Date().getDate();\n    let year = new Date().getFullYear();\n    let day = showDayOfWeek(new Date().getDay());\n    dateEl.textContent = `${month} ${date}, ${year} - ${day}`;\n}\n\nfunction showCurrentTime() {\n    let localTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n    timeEl.textContent = `${localTime}`;\n}\n\nfunction createWeatherIcon(iconId) {\n    const image = document.createElement(\"img\");\n    let iconURL = `https://openweathermap.org/img/wn/${iconId}@2x.png`;\n    image.setAttribute(\"src\", iconURL);\n    image.setAttribute(\"alt\", \"weather-icon\");\n    image.setAttribute(\"class\", \"weather-image\");\n    image.setAttribute(\"id\", \"js--weather-icon\");\n    image.setAttribute(\"width\", \"400px\");\n    image.setAttribute(\"height\", \"400px\");\n    weatherInfoEl.insertAdjacentElement(\"afterbegin\", image);\n}\n\nfunction textToUpperCase(text) {\n    text = `${text[0].toUpperCase()}${text.slice(1)}`;\n    return text;\n}\n\nfunction showWeatherUpdateTime() {\n    let month = showMonth(new Date().getMonth());\n    let date = new Date().getDate();\n    let localTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});\n\n    dateTimeEl.textContent = `${month} ${date} ${localTime}`;\n}\n\nfunction showMonth(index) {\n    let months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    return months[index];\n}\n\nfunction showDayOfWeek(index) {\n    let daysOfWeek = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\n    return daysOfWeek[index];\n}\n\nfunction updateWeather(e) {\n    e.preventDefault();\n\n    imageButtonEl.classList.add(\"hidden\");\n    buttonEl.disabled = true;\n    buttonEl.classList.add(\"button-loader\");\n\n    if (e.target.classList.contains(\"js--update-button\")) {\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.createWeatherWidget)();\n    }\n}\n\n//# sourceURL=webpack://task_1-weather_widget_webpack/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeatherWidget: () => (/* binding */ createWeatherWidget)\n/* harmony export */ });\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n\n\n;\n\n\n\nlet BASE_URL = \"https://api.openweathermap.org/data/2.5/weather\";\nconst API_KEY = \"fbec1845f200ad90ac1dddeb10c7be7e\";\n\nconst buttonEl = document.getElementById(\"js--loading-button\");\n\ncreateWeatherWidget();\n\nfunction createWeatherWidget() {\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.showCurrentDateAndTime)();\n\n    navigator.geolocation ? navigator.geolocation.getCurrentPosition(showSuccessPosition, showErrorPosition) : console.error(\"Geolocation не підтримується Вашим браузером\");\n\n    buttonEl.addEventListener(\"click\", _helpers__WEBPACK_IMPORTED_MODULE_2__.updateWeather);\n}\n\nfunction showSuccessPosition(position) {\n    let latitude = position.coords.latitude;\n    let longitude = position.coords.longitude;\n\n    let URL = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.getWeather)(URL);\n}\n\nfunction showErrorPosition() {\n    console.error(\"Неможливо отримати Ваше місцезнаходження\");\n}\n\n\n//# sourceURL=webpack://task_1-weather_widget_webpack/./src/js/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;