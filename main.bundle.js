"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_kanban"] = self["webpackChunkcapstone_kanban"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style-type: none;\\r\\n  text-decoration: none;\\r\\n  color: darkslategrey;\\r\\n  font-family: 'Baumans', 'Courier New', Courier, monospace;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  gap: 2rem;\\r\\n  padding: 0.6rem 1rem;\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 1px 3px 0 black;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 30px;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\nh1 img {\\r\\n  width: 21px;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  flex: 1;\\r\\n  display: none;\\r\\n  justify-content: space-around;\\r\\n  font-size: x-large;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  flex-direction: column;\\r\\n  background-color: lightsteelblue;\\r\\n  padding: 2rem;\\r\\n  order: 999;\\r\\n}\\r\\n\\r\\n.x-menu {\\r\\n  position: absolute;\\r\\n  top: 1rem;\\r\\n  left: 1rem;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  border: solid 1px;\\r\\n  border-left: 0;\\r\\n  border-right: 0;\\r\\n}\\r\\n\\r\\n.menu a {\\r\\n  margin: 0 1px;\\r\\n  padding: 1rem;\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.menu a:hover {\\r\\n  border: solid 1px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  display: grid;\\r\\n  grid-template-columns: 100%;\\r\\n  row-gap: 2rem;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  background-color: yellow;\\r\\n  padding: 1rem;\\r\\n  border-radius: 1rem;\\r\\n  box-shadow: 3px 3px 9px 0 darkgoldenrod;\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n.popup img {\\r\\n  align-self: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.cards li img {\\r\\n  max-width: 100%;\\r\\n  aspect-ratio: 1/1;\\r\\n}\\r\\n\\r\\n.popup h2 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.cards li h2 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font-size: 14px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.cards li p {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.cards li p a:hover {\\r\\n  transform: scale(1.2);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.cards li button {\\r\\n  padding: 1rem;\\r\\n  font-size: large;\\r\\n  border-radius: 0 1rem 1rem 1rem;\\r\\n}\\r\\n\\r\\n.cards li button:hover {\\r\\n  font-weight: bold;\\r\\n  background-color: darkslategrey;\\r\\n  border: solid white 2px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 2rem;\\r\\n  background-color: lightgoldenrodyellow;\\r\\n  box-shadow: 1rem 1rem 3rem 0 darkslategrey;\\r\\n  overflow-y: scroll;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  padding: 1rem;\\r\\n  gap: 2rem;\\r\\n  order: 9999;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  font-size: 2rem;\\r\\n  background-color: lightgoldenrodyellow;\\r\\n  align-self: flex-start;\\r\\n  border-radius: 50%;\\r\\n  aspect-ratio: 1/1;\\r\\n  text-align: center;\\r\\n  box-shadow: 0 0 1rem 1rem lightgoldenrodyellow;\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\n.close:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.features {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto;\\r\\n  row-gap: 1rem;\\r\\n}\\r\\n\\r\\n.popup li {\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.popup form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.popup form * {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: vertical;\\r\\n}\\r\\n\\r\\ninput:focus,\\r\\ntextarea:focus {\\r\\n  outline: solid goldenrod;\\r\\n  border: solid yellow 1px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: sticky;\\r\\n  background-color: darkslategrey;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  padding: 0.6rem;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  background-color: #f1f1f1;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background-color: #888;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 600px) {\\r\\n  .cards {\\r\\n    grid-template-columns: 48% 48%;\\r\\n    column-gap:4%;\\r\\n  }\\r\\n\\r\\n  .features {\\r\\n    grid-template-columns: auto auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px){\\r\\n  .cards {\\r\\n    grid-template-columns: 31.5% 31.5% 31.5% ;\\r\\n    column-gap: 2.75%;\\r\\n  }\\r\\n\\r\\n  .menu-icon{\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    flex: none;\\r\\n  }\\r\\n\\r\\n  .x-menu {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .menu {\\r\\n    flex: 1;\\r\\n    display: flex;\\r\\n    position: static;\\r\\n    flex-direction: row;\\r\\n    padding: 1rem;\\r\\n    background: none;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 50px;\\r\\n  }\\r\\n  \\r\\n  h1 img {\\r\\n    width: 35px;\\r\\n  }\\r\\n\\r\\n  .popup img {\\r\\n    width: 50%;\\r\\n  }\\r\\n\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 992px){\\r\\n  .cards {\\r\\n    grid-template-columns: 23% 23% 23% 23% ;\\r\\n    column-gap: 2.67%;\\r\\n  }\\r\\n\\r\\n  .popup{\\r\\n    padding: 2rem;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-kanban/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-kanban/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-kanban/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_pokeball_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pokeball-icon.png */ \"./src/images/pokeball-icon.png\");\n/* harmony import */ var _modules_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards.js */ \"./src/modules/cards.js\");\n/* harmony import */ var _modules_namesApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/namesApi.js */ \"./src/modules/namesApi.js\");\n\r\n\r\n\r\n\r\n\r\nconst BallIcon = document.getElementById('icon');\r\nBallIcon.src = _images_pokeball_icon_png__WEBPACK_IMPORTED_MODULE_1__;\r\nconst NumOfCards = 32;\r\n\r\n(0,_modules_cards_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0, NumOfCards, _images_pokeball_icon_png__WEBPACK_IMPORTED_MODULE_1__);\r\n(0,_modules_namesApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(NumOfCards);\r\n\r\nconst XMenu = document.querySelector('.x-menu');\r\nconst Menu = document.querySelector('.menu');\r\nconst menuIcon = document.querySelector('.menu-icon')\r\nXMenu.addEventListener('click', () =>{\r\n    Menu.style.display='none';\r\n    document.body.style.overflowY = 'scroll';\r\n});\r\n\r\nmenuIcon.addEventListener('click', () => {\r\n    Menu.style.display='flex';\r\n    document.body.style.overflowY = 'hidden';\r\n})\n\n//# sourceURL=webpack://capstone-kanban/./src/index.js?");

/***/ }),

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _detailsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailsApi.js */ \"./src/modules/detailsApi.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\n\r\n\r\nconst Cards = document.querySelector('.cards');\r\nconst Popup = document.querySelector('.popup');\r\nconst CloseIcon = document.querySelector('.close');\r\nconst userName = document.getElementById('user-name');\r\nconst userComment = document.getElementById('user-comment');\r\nconst countLikes = (num) => num + 1;\r\n\r\nconst createCards = (x = 0, NumOfCards = 32, icon) => {\r\n  // Create Empty Cards\r\n  for (let i = x; i < x + NumOfCards; i += 1) {\r\n    Cards.innerHTML += `\r\n        <li class=\"card\">\r\n            <img class=\"card-img\" src=\"${icon}\" alt=\"Poke Image\">\r\n            <h2 class=\"card-name\">Poke Name ${i}</h2>\r\n            <p><span>(<span class=\"likes-num\">0</span>) Likes</span><a id=\"like${i}\">❤️</a></p>\r\n            <button id=\"show-comments${i}\">Comment</button>\r\n        </li>\r\n        `;\r\n  }\r\n\r\n  // Add Event Listener To Comment and Like Buttons\r\n  Cards.addEventListener('click', (e) => {\r\n    if (e.target.tagName === 'BUTTON' && e.target.id.indexOf('show-comments') === 0) {\r\n      document.body.style.overflowY = 'hidden';\r\n      const index = e.target.id.replace('show-comments', '');\r\n      Popup.style.display = 'flex';\r\n      (0,_detailsApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parseInt(index, 10) + 1);\r\n      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.setIndex)(index);\r\n      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)();\r\n    }\r\n    if (e.target.tagName === 'A' && e.target.id.indexOf('like') === 0) {\r\n      const index = e.target.id.replace('like', '');\r\n      if ((0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(index)) {\r\n        const likesNum = document.querySelectorAll('.likes-num');\r\n        const LikesCount = countLikes(parseInt(likesNum[index].innerHTML, 10));\r\n        likesNum[index].innerHTML = LikesCount;\r\n      }\r\n    }\r\n  });\r\n\r\n  // Add Event Listener To Close Icon\r\n  CloseIcon.addEventListener('click', () => {\r\n    Popup.style.display = 'none';\r\n    document.body.style.overflowY = 'scroll';\r\n    userName.value = '';\r\n    userComment.value = '';\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCards);\r\n\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/cards.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   setIndex: () => (/* binding */ setIndex)\n/* harmony export */ });\n/* harmony import */ var _gamaId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamaId.js */ \"./src/modules/gamaId.js\");\n\r\n\r\nconst CommentForm = document.querySelector('.comment-form');\r\nconst userName = document.getElementById('user-name');\r\nconst userComment = document.getElementById('user-comment');\r\nconst commentsList = document.querySelector('.comments-list');\r\nconst commentsNum = document.querySelector('.comments-num');\r\nlet index = 0;\r\nconst setIndex = (x) => {\r\n  index = x;\r\n};\r\n\r\nconst countComment = (num) => num + 1;\r\n\r\n// Get Comments From API & Create List\r\nconst getComments = async () => {\r\n  commentsList.innerHTML = '';\r\n  commentsNum.innerHTML = 0;\r\n  const appId = await (0,_gamaId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${index}`;\r\n  const response = await fetch(url);\r\n  if (response.status === 200) {\r\n    const data = await response.json();\r\n    let CommentsCount = 0;\r\n    data.reverse().forEach((e) => {\r\n      commentsList.innerHTML += `\r\n            <li> [${e.creation_date}] ${e.username}: ${e.comment}\r\n            `;\r\n      CommentsCount = countComment(CommentsCount);\r\n    });\r\n    commentsNum.innerHTML = CommentsCount;\r\n  }\r\n};\r\n\r\n// Add EvetListener For Commenting\r\nCommentForm.addEventListener('submit', async (e) => {\r\n  e.preventDefault();\r\n  const appId = await (0,_gamaId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;\r\n  const data = {\r\n    item_id: index.toString(),\r\n    username: userName.value,\r\n    comment: userComment.value,\r\n  };\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  if (response.status === 201) {\r\n    getComments();\r\n  }\r\n  userName.value = '';\r\n  userComment.value = '';\r\n});\r\n\r\n\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/detailsApi.js":
/*!***********************************!*\
  !*** ./src/modules/detailsApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pokemon_preview_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pokemon-preview.gif */ \"./src/images/pokemon-preview.gif\");\n\r\nconst PokeImg = document.querySelector('.poke-img');\r\nconst PokeName = document.querySelector('.poke-name');\r\nconst PokeFeatures = document.querySelector('.features');\r\n\r\nconst fetchDetailsApi = async (index) => {\r\n  PokeName.innerHTML = 'Poké Name';\r\n  PokeFeatures.innerHTML = `\r\n    <li>Height: ?</li>\r\n    <li>Weight: ?</li>\r\n    <li>Base Experience: ?</li>\r\n    <li>Abilities: ?</li>\r\n    <li>Moves: ?</li>\r\n    `;\r\n  PokeImg.src = _images_pokemon_preview_gif__WEBPACK_IMPORTED_MODULE_0__;\r\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);\r\n  const json = await response.json();\r\n  let abilities = '';\r\n  json.abilities.forEach((e) => {\r\n    abilities += `${e.ability.name}, `;\r\n  });\r\n  abilities = abilities.slice(0, -2);\r\n  let moves = '';\r\n  for (let i = 0; i < 3; i += 1) {\r\n    moves = `${json.moves[i].move.name}, `;\r\n  }\r\n  moves = moves.slice(0, -2);\r\n  PokeName.innerHTML = json.name.toUpperCase();\r\n  PokeFeatures.innerHTML = `\r\n    <li>Height: ${json.height / 10} m</li>\r\n    <li>Weight: ${json.weight / 10} kg</li>\r\n    <li>Base Experience: ${json.base_experience}</li>\r\n    <li>Abilities: ${abilities}</li>\r\n    <li>Moves: ${moves}</li>\r\n    `;\r\n  PokeImg.src = json.sprites.other['official-artwork'].front_default;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchDetailsApi);\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/detailsApi.js?");

/***/ }),

/***/ "./src/modules/gamaId.js":
/*!*******************************!*\
  !*** ./src/modules/gamaId.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGameId = async (newGame) => {\r\n  if (newGame) {\r\n    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {\r\n      method: 'POST',\r\n    });\r\n    const data = await response.text();\r\n    return data;\r\n  }\r\n  return 'TdwdZGs8O01Fy9Rblj8S';\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGameId);\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/gamaId.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   getLikes: () => (/* binding */ getLikes)\n/* harmony export */ });\n/* harmony import */ var _gamaId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamaId.js */ \"./src/modules/gamaId.js\");\n\r\n\r\nconst addLike = async (index) => {\r\n  const appId = await (0,_gamaId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\r\n  const data = {\r\n    item_id: index.toString(),\r\n  };\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response.ok;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const appId = await (0,_gamaId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  const likesArray = [];\r\n  data.forEach((e) => {\r\n    likesArray[parseInt(e.item_id, 10)] = e.likes;\r\n  });\r\n  return likesArray;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/namesApi.js":
/*!*********************************!*\
  !*** ./src/modules/namesApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\nconst fetchNamesApi = async (x) => {\r\n  // Fetching Pokemon Api For Names\r\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${x}&offset=0/`);\r\n  const json = await response.json();\r\n  const PokeNames = [];\r\n  json.results.forEach((e, i) => {\r\n    PokeNames[i] = e.name;\r\n  });\r\n\r\n  // Fill Cards With Names & Images & Likes\r\n  const CardName = document.querySelectorAll('.card-name');\r\n  const CardImg = document.querySelectorAll('.card-img');\r\n  const likesNum = document.querySelectorAll('.likes-num');\r\n  const likesArray = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\r\n  PokeNames.forEach((e, i) => {\r\n    CardName[i].innerHTML = e;\r\n    CardImg[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;\r\n    if (likesArray[i] === undefined) {\r\n      likesArray[i] = 0;\r\n    }\r\n    likesNum[i].innerHTML = likesArray[i];\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchNamesApi);\n\n//# sourceURL=webpack://capstone-kanban/./src/modules/namesApi.js?");

/***/ }),

/***/ "./src/images/pokeball-icon.png":
/*!**************************************!*\
  !*** ./src/images/pokeball-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf883b3c317f5d16fe00.png\";\n\n//# sourceURL=webpack://capstone-kanban/./src/images/pokeball-icon.png?");

/***/ }),

/***/ "./src/images/pokemon-preview.gif":
/*!****************************************!*\
  !*** ./src/images/pokemon-preview.gif ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18262ee6914906c3bdd4.gif\";\n\n//# sourceURL=webpack://capstone-kanban/./src/images/pokemon-preview.gif?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);