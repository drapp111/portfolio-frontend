"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_RoxboroughCF_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/RoxboroughCF.ttf */ \"./styles/fonts/RoxboroughCF.ttf\");\n/* harmony import */ var _fonts_Lora_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Lora.ttf */ \"./styles/fonts/Lora.ttf\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_RoxboroughCF_ttf__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Lora_ttf__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');\\n@font-face {\\n  font-family: RoxboroughCF;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: Lora;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \")\\n}\\n/*\\nCSS Provided by template for navbar\\n*/\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  outline: none;\\n  box-sizing: border-box;\\n  font-family: 'Work Sans', sans-serif;\\n}\\na{\\n  text-decoration: none;\\n  color: inherit;\\n}\\nnav{\\n  display: flex;\\n  padding: 16px;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #f1f1f1;\\n}\\n\\n.nav__menu-bar{\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 6px;\\n  cursor: pointer;\\n}\\n.nav__menu-bar div{\\n  width: 40px;\\n  height: 4px;\\n  background-color: black;\\n  border-radius: 2px;\\n}\\n.nav__menu-list{\\n  display: flex;\\n  flex-direction: column;\\n  position: fixed;\\n  top: 60px;\\n  width: 288px;\\n  row-gap: 24px;\\n  right: -288px;\\n  padding: 24px 16px;\\n  transition: all 0.2s;\\n  min-height: calc(100vh - 60px);\\n  background-color: #f1f1f1;\\n}\\n.nav__menu-list.active{\\n  right: 0;\\n}\\n.nav__link{\\n  font-size: 18px;\\n  position: relative;\\n  transition: all 0.2s;\\n}\\n\\n.nav__link:hover{\\n font-weight: bold;\\n}\\n\\n.center{\\n  min-height: 600px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n@media screen and (min-width: 768px) {\\n  .nav__menu-bar{\\n    display: none;\\n  }\\n  .nav__menu-list{\\n    position: unset;\\n    flex-direction: row;\\n    min-height: -moz-fit-content;\\n    min-height: fit-content;\\n    width: -moz-fit-content;\\n    width: fit-content;\\n    column-gap: 24px;\\n    align-items: center;\\n  }\\n  .nav__link::before{\\n    content: '';\\n    position: absolute;\\n    width: 0%;\\n    height: 6px;\\n    bottom: -16px;\\n    left: 0;\\n    background-color: black;\\n    transition: all 0.2s;\\n  }\\n\\n  .nav__link:hover:before{\\n   width: 100%;\\n  }\\n}\\n\\n/*\\nGeneral Formatting\\n*/\\n\\nh1 {\\n  font-family: RoxboroughCF;\\n  font-size: 60px;\\n  white-space: nowrap;\\n}\\n\\nh2 {\\n  font-family: RoxboroughCF;\\n  font-size: 45px;\\n  white-space: nowrap;\\n}\\nh3 {\\n  font-family: RoxboroughCF;\\n  font-size: 30px;\\n  white-space: nowrap;\\n}\\nh4 {\\n  font-family: Lora;\\n  font-size: 45px;\\n  white-space: nowrap;\\n}\\nh5 {\\n  font-family: Lora;\\n  font-size: 30px;\\n  white-space: nowrap;\\n}\\n\\nh6 {\\n  font-family: Lora;\\n  font-size: 20px;\\n  white-space: nowrap;\\n}\\n\\np {\\n  font-family: Lora;\\n  font-size: 15px;\\n  white-space: nowrap;\\n}\\n\\n/*\\nContact Text Formatting\\n*/\\n\\n.contact-text{\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: white;\\n}\\n\\n/*\\nLogo Image Formatting\\n*/\\n\\n.logoContainer{\\n  align-items: center;\\n  height: 20%;\\n  width: 20%;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,+FAA+F;AAC/F;EACE,yBAAyB;EACzB,4CAAgC;AAClC;AACA;EACE,iBAAiB;EACjB;AACF;AACA;;CAEC;;AAED;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,SAAS;EACT,YAAY;EACZ,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,8BAA8B;EAC9B,yBAAyB;AAC3B;AACA;EACE,QAAQ;AACV;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,eAAe;IACf,mBAAmB;IACnB,4BAAuB;IAAvB,uBAAuB;IACvB,uBAAkB;IAAlB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,oBAAoB;EACtB;;EAEA;GACC,WAAW;EACZ;AACF;;AAEA;;CAEC;;AAED;EACE,yBAAyB;EACzB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;;CAEC;;AAED;EACE,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;AACd;;AAEA;;CAEC;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;AACZ\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');\\n@font-face {\\n  font-family: RoxboroughCF;\\n  src: url(fonts/RoxboroughCF.ttf);\\n}\\n@font-face {\\n  font-family: Lora;\\n  src: url(fonts/Lora.ttf)\\n}\\n/*\\nCSS Provided by template for navbar\\n*/\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  outline: none;\\n  box-sizing: border-box;\\n  font-family: 'Work Sans', sans-serif;\\n}\\na{\\n  text-decoration: none;\\n  color: inherit;\\n}\\nnav{\\n  display: flex;\\n  padding: 16px;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #f1f1f1;\\n}\\n\\n.nav__menu-bar{\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 6px;\\n  cursor: pointer;\\n}\\n.nav__menu-bar div{\\n  width: 40px;\\n  height: 4px;\\n  background-color: black;\\n  border-radius: 2px;\\n}\\n.nav__menu-list{\\n  display: flex;\\n  flex-direction: column;\\n  position: fixed;\\n  top: 60px;\\n  width: 288px;\\n  row-gap: 24px;\\n  right: -288px;\\n  padding: 24px 16px;\\n  transition: all 0.2s;\\n  min-height: calc(100vh - 60px);\\n  background-color: #f1f1f1;\\n}\\n.nav__menu-list.active{\\n  right: 0;\\n}\\n.nav__link{\\n  font-size: 18px;\\n  position: relative;\\n  transition: all 0.2s;\\n}\\n\\n.nav__link:hover{\\n font-weight: bold;\\n}\\n\\n.center{\\n  min-height: 600px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n@media screen and (min-width: 768px) {\\n  .nav__menu-bar{\\n    display: none;\\n  }\\n  .nav__menu-list{\\n    position: unset;\\n    flex-direction: row;\\n    min-height: fit-content;\\n    width: fit-content;\\n    column-gap: 24px;\\n    align-items: center;\\n  }\\n  .nav__link::before{\\n    content: '';\\n    position: absolute;\\n    width: 0%;\\n    height: 6px;\\n    bottom: -16px;\\n    left: 0;\\n    background-color: black;\\n    transition: all 0.2s;\\n  }\\n\\n  .nav__link:hover:before{\\n   width: 100%;\\n  }\\n}\\n\\n/*\\nGeneral Formatting\\n*/\\n\\nh1 {\\n  font-family: RoxboroughCF;\\n  font-size: 60px;\\n  white-space: nowrap;\\n}\\n\\nh2 {\\n  font-family: RoxboroughCF;\\n  font-size: 45px;\\n  white-space: nowrap;\\n}\\nh3 {\\n  font-family: RoxboroughCF;\\n  font-size: 30px;\\n  white-space: nowrap;\\n}\\nh4 {\\n  font-family: Lora;\\n  font-size: 45px;\\n  white-space: nowrap;\\n}\\nh5 {\\n  font-family: Lora;\\n  font-size: 30px;\\n  white-space: nowrap;\\n}\\n\\nh6 {\\n  font-family: Lora;\\n  font-size: 20px;\\n  white-space: nowrap;\\n}\\n\\np {\\n  font-family: Lora;\\n  font-size: 15px;\\n  white-space: nowrap;\\n}\\n\\n/*\\nContact Text Formatting\\n*/\\n\\n.contact-text{\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: white;\\n}\\n\\n/*\\nLogo Image Formatting\\n*/\\n\\n.logoContainer{\\n  align-items: center;\\n  height: 20%;\\n  width: 20%;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ3dIO0FBQ087QUFDMUQ7QUFDUjtBQUM3RCw4QkFBOEIsa0hBQTJCO0FBQ3pELHlDQUF5QyxxSEFBK0IsQ0FBQyxvREFBNkI7QUFDdEcseUNBQXlDLHFIQUErQixDQUFDLDRDQUE2QjtBQUN0RztBQUNBLG1IQUFtSCxJQUFJLG1CQUFtQixjQUFjLDhCQUE4Qix5REFBeUQsR0FBRyxjQUFjLHNCQUFzQiwyREFBMkQsb0RBQW9ELGNBQWMsZUFBZSxrQkFBa0IsMkJBQTJCLHlDQUF5QyxHQUFHLElBQUksMEJBQTBCLG1CQUFtQixHQUFHLE1BQU0sa0JBQWtCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDhCQUE4QixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGlCQUFpQixvQkFBb0IsR0FBRyxxQkFBcUIsZ0JBQWdCLGdCQUFnQiw0QkFBNEIsdUJBQXVCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsb0JBQW9CLGNBQWMsaUJBQWlCLGtCQUFrQixrQkFBa0IsdUJBQXVCLHlCQUF5QixtQ0FBbUMsOEJBQThCLEdBQUcseUJBQXlCLGFBQWEsR0FBRyxhQUFhLG9CQUFvQix1QkFBdUIseUJBQXlCLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLFlBQVksc0JBQXNCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsd0NBQXdDLG1CQUFtQixvQkFBb0IsS0FBSyxvQkFBb0Isc0JBQXNCLDBCQUEwQixt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OEJBQThCLDJCQUEyQixLQUFLLDhCQUE4QixpQkFBaUIsS0FBSyxHQUFHLHNDQUFzQyw4QkFBOEIsb0JBQW9CLHdCQUF3QixHQUFHLFFBQVEsOEJBQThCLG9CQUFvQix3QkFBd0IsR0FBRyxNQUFNLDhCQUE4QixvQkFBb0Isd0JBQXdCLEdBQUcsTUFBTSxzQkFBc0Isb0JBQW9CLHdCQUF3QixHQUFHLE1BQU0sc0JBQXNCLG9CQUFvQix3QkFBd0IsR0FBRyxRQUFRLHNCQUFzQixvQkFBb0Isd0JBQXdCLEdBQUcsT0FBTyxzQkFBc0Isb0JBQW9CLHdCQUF3QixHQUFHLHFEQUFxRCw0QkFBNEIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsYUFBYSxjQUFjLHFDQUFxQyxpQkFBaUIsR0FBRyxvREFBb0Qsd0JBQXdCLGdCQUFnQixlQUFlLEdBQUcsbUJBQW1CO0FBQzFvTztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz8wNGRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9mb250cy9Sb3hib3JvdWdoQ0YudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vZm9udHMvTG9yYS50dGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9V29yaytTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm94Ym9yb3VnaENGO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBMb3JhO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpXFxufVxcbi8qXFxuQ1NTIFByb3ZpZGVkIGJ5IHRlbXBsYXRlIGZvciBuYXZiYXJcXG4qL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5he1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5uYXZfX21lbnUtYmFye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZfX21lbnUtYmFyIGRpdntcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLm5hdl9fbWVudS1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDYwcHg7XFxuICB3aWR0aDogMjg4cHg7XFxuICByb3ctZ2FwOiAyNHB4O1xcbiAgcmlnaHQ6IC0yODhweDtcXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuLm5hdl9fbWVudS1saXN0LmFjdGl2ZXtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ubmF2X19saW5re1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5uYXZfX2xpbms6aG92ZXJ7XFxuIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VudGVye1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdl9fbWVudS1iYXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubmF2X19tZW51LWxpc3R7XFxuICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWluLWhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGNvbHVtbi1nYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubmF2X19saW5rOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIGJvdHRvbTogLTE2cHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIH1cXG5cXG4gIC5uYXZfX2xpbms6aG92ZXI6YmVmb3Jle1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4vKlxcbkdlbmVyYWwgRm9ybWF0dGluZ1xcbiovXFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFJveGJvcm91Z2hDRjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBSb3hib3JvdWdoQ0Y7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5oMyB7XFxuICBmb250LWZhbWlseTogUm94Ym9yb3VnaENGO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuaDQge1xcbiAgZm9udC1mYW1pbHk6IExvcmE7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5oNSB7XFxuICBmb250LWZhbWlseTogTG9yYTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmg2IHtcXG4gIGZvbnQtZmFtaWx5OiBMb3JhO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxucCB7XFxuICBmb250LWZhbWlseTogTG9yYTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qXFxuQ29udGFjdCBUZXh0IEZvcm1hdHRpbmdcXG4qL1xcblxcbi5jb250YWN0LXRleHR7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKlxcbkxvZ28gSW1hZ2UgRm9ybWF0dGluZ1xcbiovXFxuXFxuLmxvZ29Db250YWluZXJ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICB3aWR0aDogMjAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtGQUErRjtBQUMvRjtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGO0FBQ0E7O0NBRUM7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNEJBQXVCO0lBQXZCLHVCQUF1QjtJQUN2Qix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7O0VBRUE7R0FDQyxXQUFXO0VBQ1o7QUFDRjs7QUFFQTs7Q0FFQzs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTs7Q0FFQzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVdvcmsrU2Fuczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJveGJvcm91Z2hDRjtcXG4gIHNyYzogdXJsKGZvbnRzL1JveGJvcm91Z2hDRi50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBMb3JhO1xcbiAgc3JjOiB1cmwoZm9udHMvTG9yYS50dGYpXFxufVxcbi8qXFxuQ1NTIFByb3ZpZGVkIGJ5IHRlbXBsYXRlIGZvciBuYXZiYXJcXG4qL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5he1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbm5hdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5uYXZfX21lbnUtYmFye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICByb3ctZ2FwOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZfX21lbnUtYmFyIGRpdntcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLm5hdl9fbWVudS1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDYwcHg7XFxuICB3aWR0aDogMjg4cHg7XFxuICByb3ctZ2FwOiAyNHB4O1xcbiAgcmlnaHQ6IC0yODhweDtcXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuLm5hdl9fbWVudS1saXN0LmFjdGl2ZXtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ubmF2X19saW5re1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5uYXZfX2xpbms6aG92ZXJ7XFxuIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2VudGVye1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdl9fbWVudS1iYXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubmF2X19tZW51LWxpc3R7XFxuICAgIHBvc2l0aW9uOiB1bnNldDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgY29sdW1uLWdhcDogMjRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5uYXZfX2xpbms6OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgYm90dG9tOiAtMTZweDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgfVxcblxcbiAgLm5hdl9fbGluazpob3ZlcjpiZWZvcmV7XFxuICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi8qXFxuR2VuZXJhbCBGb3JtYXR0aW5nXFxuKi9cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogUm94Ym9yb3VnaENGO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IFJveGJvcm91Z2hDRjtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmgzIHtcXG4gIGZvbnQtZmFtaWx5OiBSb3hib3JvdWdoQ0Y7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5oNCB7XFxuICBmb250LWZhbWlseTogTG9yYTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmg1IHtcXG4gIGZvbnQtZmFtaWx5OiBMb3JhO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuaDYge1xcbiAgZm9udC1mYW1pbHk6IExvcmE7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiBMb3JhO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLypcXG5Db250YWN0IFRleHQgRm9ybWF0dGluZ1xcbiovXFxuXFxuLmNvbnRhY3QtdGV4dHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qXFxuTG9nbyBJbWFnZSBGb3JtYXR0aW5nXFxuKi9cXG5cXG4ubG9nb0NvbnRhaW5lcntcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHdpZHRoOiAyMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});