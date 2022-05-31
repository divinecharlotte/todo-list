/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import _ from 'lodash';\n\nconst mylist = [\n  {\n    description: 'house chores',\n    completed: false,\n    index: 1,\n  },\n  {\n    description: 'side project',\n    completed: false,\n    index: 2,\n  },\n  {\n    description: 'today projects',\n    completed: true,\n    index: 3,\n  },\n  {\n    description: '4hackerranck challenges',\n    completed: false,\n    index: 4,\n  },\n];\n\nconst getmylist = () => {\n  const listGroup = document.querySelector('.todo-group');\n  mylist.map((item) => {\n    const listElement = document.createElement('li');\n    listElement.classList = 'todo-list todo-item';\n    listElement.id = `${item.index}`;\n    listElement.innerHTML = `\n        <button type=\"button\" class=${\n  item.completed === true ? 'checked-button' : 'unchecked-button'\n}>\n        <i class=\"fa-solid fa-check\"></i></button>\n        <input type=\"text\" class=${\n  item.completed === true ? 'decoration' : 'undecoration'\n}  value=\"${item.description}\">\n        <span class=\"todo-item-more\"><i class=\"fa-solid fa-ellipsis-vertical\"></i></span>\n    `;\n    return listGroup.appendChild(listElement);\n  });\n};\nwindow.addEventListener('load', getmylist);\n\n// function component() {\n//   const element = document.createElement('div');\n\n//   // Lodash, now imported by this script\n//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n//   return element;\n// }\n\n// document.body.appendChild(component());\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;