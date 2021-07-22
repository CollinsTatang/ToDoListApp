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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: black;\\n}\\n\\nh1,\\nh3,\\nh6,\\np {\\n  margin: unset;\\n}\\n\\nbutton {\\n  border: unset;\\n  background-color: unset;\\n  cursor: pointer;\\n}\\n\\n.container {\\n  width: 500px;\\n  min-height: max-content;\\n  background: #f6f6f6;\\n  box-shadow: 3px 3px 3px 3px grey;\\n  justify-items: stretch;\\n  display: grid;\\n  grid-template-rows: 36px 36px auto 36px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 10%;\\n}\\n\\n.top {\\n  display: grid;\\n  grid-template-columns: 90% 10%;\\n  min-height: 36px;\\n  align-items: center;\\n  background-color: white;\\n}\\n\\n.title {\\n  text-align: start;\\n  font-family: monospace;\\n  padding-left: 12px;\\n  font-size: 14px;\\n  grid-row-start: 1;\\n  margin: unset;\\n}\\n\\n#task-form {\\n  min-height: 36px;\\n  grid-row-start: 2;\\n  background-color: white;\\n  border: 1px solid #dcdcdc7a;\\n  display: grid;\\n  grid-template-columns: auto 10%;\\n}\\n\\n.text {\\n  width: 90%;\\n  font-style: italic;\\n  border: unset;\\n  padding-left: 12px;\\n}\\n\\n.text::first-letter {\\n  text-transform: capitalize !important;\\n}\\n\\ninput:focus-visible {\\n  border: unset;\\n  outline: unset;\\n}\\n\\nul {\\n  grid-row-start: 3;\\n  margin: unset;\\n  padding: unset;\\n  background-color: white;\\n  list-style-type: none;\\n}\\n\\nli {\\n  padding: unset;\\n  border: 1px solid #dcdcdc7a;\\n}\\n\\n.task {\\n  display: grid;\\n  grid-template-columns: 10% auto 10%;\\n  padding: 1%;\\n  align-items: center;\\n}\\n\\n.description {\\n  font-family: monospace;\\n  font-weight: 200;\\n  font-size: 12px;\\n  letter-spacing: 1px;\\n  border: unset;\\n  background: transparent;\\n}\\n\\n.circle {\\n  width: 28px;\\n  height: 28px;\\n  background-color: black;\\n}\\n\\n#add-btn {\\n  opacity: 0.3;\\n}\\n\\n.add-btn-img {\\n  width: 14px;\\n  opacity: 0.3;\\n}\\n\\n.edit-btn {\\n  cursor: all-scroll;\\n}\\n\\n.refresh-btn {\\n  text-align: end;\\n}\\n\\n.dragging {\\n  opacity: 0.2;\\n  cursor: all-scroll;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_m2-w2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack_m2-w2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_m2-w2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add_remove.js":
/*!***************************!*\
  !*** ./src/add_remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\n/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.svg */ \"./src/delete.svg\");\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n/* --- This file contains the functions required to add and remove tasks   */\n\n\n\n\nfunction addTask(tasks) {\n  const str = document.getElementById('description').value;\n  const firstLetter = str.charAt(0).toUpperCase();\n  str.replace(str.charAt(0), firstLetter);\n  const description = str;\n  const completed = false;\n  const date = new Date();\n  const id = date.getMilliseconds();\n\n  if (!tasks) {\n    tasks = [];\n  }\n\n  const index = tasks.length + 1;\n\n  if (tasks && description !== '') {\n    const task = {\n      description,\n      completed,\n      index,\n      id,\n    };\n    tasks.push(task);\n    tasks.sort((taskA, taskB) => {\n      const indexA = taskA.position;\n      const indexB = taskB.position;\n      if (indexA < indexB) {\n        return -1;\n      }\n      if (indexA > indexB) {\n        return 1;\n      }\n      return 0;\n    });\n    window.update(tasks);\n  }\n}\n\nfunction removeTask(data, tasks) {\n  const str = data.replace('div', '');\n  const newTasks = [];\n  tasks.forEach((task) => {\n    if (task.index !== parseInt(str, 10)) {\n      newTasks.push(task);\n    }\n  });\n  window.update(newTasks);\n}\n\nfunction editTask(divId, tasks) {\n  const list = document.getElementsByClassName('drag-div');\n  Array.from(list).forEach((li) => {\n    if (li.id === divId) {\n      li.style.backgroundColor = '#fff59c78';\n      const img = li.getElementsByTagName('img')[0];\n      img.src = _delete_svg__WEBPACK_IMPORTED_MODULE_0__;\n      img.style.cursor = 'pointer';\n      img.addEventListener('click', () => {\n        removeTask(divId, tasks);\n      });\n    } else {\n      li.style.backgroundColor = 'white';\n      const img = li.getElementsByTagName('img')[0];\n      img.src = _more_svg__WEBPACK_IMPORTED_MODULE_1__;\n      img.style.cursor = 'all-scroll';\n    }\n  });\n}\n\nfunction clear(tasks) {\n  const temp = [];\n  tasks.forEach((task) => {\n    if (task.completed !== true) {\n      temp.push(task);\n    }\n  });\n  window.update(temp);\n}\n\n\n\n//# sourceURL=webpack://webpack_m2-w2/./src/add_remove.js?");

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b93a41b701ac18332f8.svg\";\n\n//# sourceURL=webpack://webpack_m2-w2/./src/delete.svg?");

/***/ }),

/***/ "./src/drag_drop.js":
/*!**************************!*\
  !*** ./src/drag_drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allowDrop\": () => (/* binding */ allowDrop),\n/* harmony export */   \"drag\": () => (/* binding */ drag),\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n/* --- This file contains the functions required to create the Drag&Drop effect    */\nlet toLiIndex = null;\n\nfunction allowDrop(e) {\n  e.preventDefault();\n  toLiIndex = e.currentTarget.id;\n}\n\nfunction drag(e) {\n  e.dataTransfer.setData('text', e.currentTarget.id);\n}\n\nfunction drop(e) {\n  e.preventDefault();\n  const data = e.dataTransfer.getData('text');\n  const oldDiv = document.getElementById(data);\n  const oldLi = document.getElementById(oldDiv.data);\n  const newLi = document.getElementById(toLiIndex);\n  const newDiv = newLi.getElementsByTagName('div')[0];\n  const oldDivData = oldDiv.data;\n  const newDivData = newDiv.data;\n  oldDiv.data = newDivData;\n  newDiv.data = oldDivData;\n  oldLi.appendChild(newDiv);\n  oldLi.removeChild(oldDiv);\n  newLi.appendChild(oldDiv);\n\n  window.update();\n}\n\n\n\n\n//# sourceURL=webpack://webpack_m2-w2/./src/drag_drop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _recycle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recycle.svg */ \"./src/recycle.svg\");\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag_drop */ \"./src/drag_drop.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n/* harmony import */ var _add_remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add_remove */ \"./src/add_remove.js\");\n\n\n\n\n\n\n\nlet tasks = null;\n\n/**       Saves and retrieves from local storage       */\nwindow.updateLocalStorage = function updateLocalStorage(retrieve) {\n  if (retrieve === true) {\n    if (tasks === null) {\n      tasks = JSON.parse(window.localStorage.getItem('tasks'));\n    }\n  } else {\n    window.localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n  window.displayTasks();\n};\n\n/**       Handler for calling a task from and inline declared listener */\nwindow.callAddTask = function callAddTask() {\n  (0,_add_remove__WEBPACK_IMPORTED_MODULE_5__.addTask)(tasks);\n};\n\n/**       Handler for calling a task from and inline declared listener */\nwindow.restart = function restart() {\n  tasks = null;\n  window.updateLocalStorage(false);\n};\n\n/**       Update the state of the tasks            */\nwindow.update = function update(data) {\n  if (!data) {\n    const response = (0,_status__WEBPACK_IMPORTED_MODULE_4__.default)();\n    tasks = response;\n  } else {\n    tasks = data;\n  }\n\n  window.updateLocalStorage(false);\n};\n\n/**       Display tasks is used to show the Task collection      */\nwindow.displayTasks = function displayTasks() {\n  const container = document.getElementById('container');\n  const list = document.createElement('ul');\n  list.id = 'list';\n  const EnterImg = '&#8629';\n\n  if (tasks) {\n    tasks.forEach((task, index) => {\n      const { description, id } = task;\n      const li = document.createElement('li');\n      li.id = index;\n      li.addEventListener('drop', (EventTarget) => {\n        li.classList.remove('dragging');\n        (0,_drag_drop__WEBPACK_IMPORTED_MODULE_3__.drop)(EventTarget);\n      });\n\n      li.addEventListener('dragover', (EventTarget) => {\n        (0,_drag_drop__WEBPACK_IMPORTED_MODULE_3__.allowDrop)(EventTarget);\n      });\n\n      const div = document.createElement('div');\n      const divId = `div${task.index}`;\n\n      div.classList.add('task');\n      div.id = divId;\n      div.classList.add('drag-div');\n      div.draggable = true;\n      div.addEventListener('click', () => (0,_add_remove__WEBPACK_IMPORTED_MODULE_5__.editTask)(divId, tasks));\n      div.data = index;\n      div.addEventListener('dragstart', (EventTarget) => {\n        div.classList.add('dragging');\n        (0,_drag_drop__WEBPACK_IMPORTED_MODULE_3__.drag)(EventTarget);\n      });\n\n      const inputCheckbox = document.createElement('input');\n      inputCheckbox.addEventListener('click', () => {\n        window.update();\n      });\n      inputCheckbox.type = 'checkbox';\n      inputCheckbox.name = task.id;\n      inputCheckbox.id = `input-check-${id}`;\n      inputCheckbox.checked = task.completed;\n\n      const inputTask = document.createElement('input');\n      inputTask.id = `li-description-${id}`;\n      inputTask.type = 'text';\n      inputTask.classList.add('description');\n      inputTask.placeholder = description;\n      inputTask.value = description || null;\n      inputTask.data = task.index;\n      inputTask.addEventListener('change', () => {\n        window.update();\n      });\n\n      const button = document.createElement('button');\n      button.classList.add('edit-btn');\n      button.id = `edit-btn-${id}`;\n      button.type = 'button';\n\n      const img = document.createElement('img');\n      img.src = _more_svg__WEBPACK_IMPORTED_MODULE_2__;\n      img.alt = 'image';\n      img.classList.add('add-btn-img');\n\n      button.appendChild(img);\n      div.appendChild(inputCheckbox);\n      div.appendChild(inputTask);\n      div.appendChild(button);\n      li.appendChild(div);\n      list.appendChild(li);\n    });\n  }\n  const template = `\n  <div class=\"top\">\n  <h1 class=\"title\">Today's To Do</h1>\n           <button id=\"refresh-btn\" type=\"button\" \n            onclick=\"window.restart()\"\n            type=\"button\"> \n            <img class=\"add-btn-img\" src=${_recycle_svg__WEBPACK_IMPORTED_MODULE_1__} alt=\"\" /> \n            </button>\n  </div>       \n          <form onsubmit=\"window.callAddTask()\" id=\"task-form\">\n            <input\n              id=\"description\"\n              type=\"text\"\n              class=\"text\"\n              placeholder=\"Add to your list ...\"\n            />\n            <button id=\"add-btn\" type=\"submit\" \n            type=\"button\"> \n          ${EnterImg}\n            </button>\n          </form>       \n          `;\n\n  container.innerHTML = template;\n  const buttonHtml = document.createElement('button');\n  buttonHtml.id = 'clear-btn';\n  buttonHtml.addEventListener('click', () => {\n    (0,_add_remove__WEBPACK_IMPORTED_MODULE_5__.clear)(tasks);\n  });\n  buttonHtml.textContent = 'Clear completed tasks.';\n  container.insertAdjacentElement('beforeend', list);\n  container.insertAdjacentElement('beforeend', buttonHtml);\n};\n\nwindow.updateLocalStorage(true);\nwindow.displayTasks();\n\n\n//# sourceURL=webpack://webpack_m2-w2/./src/index.js?");

/***/ }),

/***/ "./src/more.svg":
/*!**********************!*\
  !*** ./src/more.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3adb9cb42cd31f0448c7.svg\";\n\n//# sourceURL=webpack://webpack_m2-w2/./src/more.svg?");

/***/ }),

/***/ "./src/recycle.svg":
/*!*************************!*\
  !*** ./src/recycle.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ede1a9b720f79252166c.svg\";\n\n//# sourceURL=webpack://webpack_m2-w2/./src/recycle.svg?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* --- This file contains the functions needed to update the task object when a change is noted  */\n\nfunction updateTasks() {\n  const list = document.getElementsByTagName('li');\n  const tempTasks = [];\n\n  if (list.length !== 0) {\n    Array.from(list).forEach((li, index) => {\n      const div = li.getElementsByTagName('div')[0];\n      const completed = div.getElementsByTagName('input')[0].checked;\n      const id = div.getElementsByTagName('input')[0].name;\n      const description = div.getElementsByTagName('input')[1].value;\n\n      const task = {\n        completed,\n        description,\n        index,\n        id,\n      };\n      tempTasks.push(task);\n    });\n  }\n\n  return tempTasks;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTasks);\n\n\n//# sourceURL=webpack://webpack_m2-w2/./src/status.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/ToDoListApp/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;