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

/***/ "./components/Navbar/Navbar.jsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ \"./components/Navbar/Logo.js\");\n/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItem */ \"./components/Navbar/NavItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MENU_LIST = [\n    {\n        text: \"Home\",\n        href: \"/\"\n    },\n    {\n        text: \"About Us\",\n        href: \"/about\"\n    },\n    {\n        text: \"Contact\",\n        href: \"/contact\"\n    },\n    {\n        text: \"Portfolio\",\n        href: \"/portfolio\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [navActive, setNavActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [activeIdx, setActiveIdx] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"logoContainer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            class: \"logoContainer\",\n                            src: \"/logo.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>setNavActive(!navActive),\n                    className: \"nav__menu-bar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(navActive ? \"active\" : \"\", \" nav__menu-list\"),\n                    children: MENU_LIST.map((menu, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                setActiveIdx(idx);\n                                setNavActive(false);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                active: activeIdx === idx,\n                                ...menu\n                            }, void 0, false, {\n                                fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, undefined)\n                        }, menu.text, false, {\n                            fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/declanrapp/Documents/GitHub/portfolio-app-react/components/Navbar/Navbar.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"H2IMVLlRb9597dOwe6poJC3MbMw=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNTO0FBQ2Q7QUFDTTtBQUVoQyxNQUFNTSxZQUFZO0lBQ2hCO1FBQUVDLE1BQU07UUFBUUMsTUFBTTtJQUFJO0lBQzFCO1FBQUVELE1BQU07UUFBWUMsTUFBTTtJQUFTO0lBQ25DO1FBQUVELE1BQU07UUFBV0MsTUFBTTtJQUFXO0lBQ3BDO1FBQUVELE1BQU07UUFBYUMsTUFBTTtJQUFhO0NBQ3pDO0FBQ0QsTUFBTUMsU0FBUzs7SUFDYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLENBQUM7SUFFNUMscUJBQ0UsOERBQUNXO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFZOzs4QkFDZiw4REFBQ2hCLGtEQUFJQTtvQkFBQ1EsTUFBTTs4QkFDViw0RUFBQ1M7d0JBQUlDLE9BQU07a0NBQ1QsNEVBQUNDOzRCQUFJRCxPQUFNOzRCQUFnQkUsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHbkMsOERBQUNIO29CQUNDSSxTQUFTLElBQU1WLGFBQWEsQ0FBQ0Q7b0JBQzdCTSxXQUFZOztzQ0FFWiw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7c0NBQ0QsOERBQUNBOzs7Ozs7Ozs7Ozs4QkFFSCw4REFBQ0E7b0JBQUlELFdBQVcsR0FBNkIsT0FBMUJOLFlBQVksV0FBVyxJQUFHOzhCQUMxQ0osVUFBVWdCLElBQUksQ0FBQ0MsTUFBTUMsb0JBQ3BCLDhEQUFDUDs0QkFDQ0ksU0FBUztnQ0FDUFIsYUFBYVc7Z0NBQ2JiLGFBQWE7NEJBQ2Y7c0NBR0EsNEVBQUNOLGdEQUFPQTtnQ0FBQ29CLFFBQVFiLGNBQWNZO2dDQUFNLEdBQUdELElBQUk7Ozs7OzsyQkFGdkNBLEtBQUtoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hCO0dBcENNRTtLQUFBQTtBQXNDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4PzFlYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBOYXZJdGVtIGZyb20gXCIuL05hdkl0ZW1cIjtcblxuY29uc3QgTUVOVV9MSVNUID0gW1xuICB7IHRleHQ6IFwiSG9tZVwiLCBocmVmOiBcIi9cIiB9LFxuICB7IHRleHQ6IFwiQWJvdXQgVXNcIiwgaHJlZjogXCIvYWJvdXRcIiB9LFxuICB7IHRleHQ6IFwiQ29udGFjdFwiLCBocmVmOiBcIi9jb250YWN0XCIgfSxcbiAgeyB0ZXh0OiBcIlBvcnRmb2xpb1wiLCBocmVmOiBcIi9wb3J0Zm9saW9cIiB9XG5dO1xuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbbmF2QWN0aXZlLCBzZXROYXZBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY3RpdmVJZHgsIHNldEFjdGl2ZUlkeF0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXZgfT5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibG9nb0NvbnRhaW5lclwiIHNyYz1cIi9sb2dvLnBuZ1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2QWN0aXZlKCFuYXZBY3RpdmUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YG5hdl9fbWVudS1iYXJgfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bmF2QWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG5hdl9fbWVudS1saXN0YH0+XG4gICAgICAgICAge01FTlVfTElTVC5tYXAoKG1lbnUsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlSWR4KGlkeCk7XG4gICAgICAgICAgICAgICAgc2V0TmF2QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXttZW51LnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGFjdGl2ZT17YWN0aXZlSWR4ID09PSBpZHh9IHsuLi5tZW51fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ28iLCJOYXZJdGVtIiwiTUVOVV9MSVNUIiwidGV4dCIsImhyZWYiLCJOYXZiYXIiLCJuYXZBY3RpdmUiLCJzZXROYXZBY3RpdmUiLCJhY3RpdmVJZHgiLCJzZXRBY3RpdmVJZHgiLCJoZWFkZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzcyIsImltZyIsInNyYyIsIm9uQ2xpY2siLCJtYXAiLCJtZW51IiwiaWR4IiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.jsx\n"));

/***/ })

});