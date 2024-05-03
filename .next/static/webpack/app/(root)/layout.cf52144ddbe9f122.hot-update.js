"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n//SiderbarProps interface => types/index.d.ts\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    href: \"/\",\n                    className: \"mb-12 cursor-pointer items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/icons/logo.svg\",\n                            width: 34,\n                            height: 34,\n                            alt: \"天際綫\",\n                            className: \"size-[24px] max-xl:size-14\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"sidebar-logo\",\n                            children: \"天際線\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                _constants__WEBPACK_IMPORTED_MODULE_1__.sidebarLinks.map((item)=>{\n                    const isActive = item.route === pathname || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: item.route,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"sidebar-link\", {\n                            \"bg-bank-gradient\": isActive\n                        }),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative size-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: item.imgURL,\n                                alt: item.label,\n                                full: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.label, false, {\n                        fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\Sidebar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTJDO0FBQ1Y7QUFDRjtBQUNGO0FBQ2lCO0FBRTlDLDZDQUE2QztBQUM3QyxNQUFNSyxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFpQjs7SUFDdEMsTUFBTUMsV0FBV0gsNERBQVdBO0lBRTVCLHFCQUNFLDhEQUFDSTtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNOLGlEQUFJQTtvQkFBQ1EsTUFBSztvQkFBSUYsV0FBVTs7c0NBQ3ZCLDhEQUFDUCxrREFBS0E7NEJBQ0pVLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUk7NEJBQ0pOLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ087NEJBQUdQLFdBQVU7c0NBQWU7Ozs7Ozs7Ozs7OztnQkFHOUJULG9EQUFZQSxDQUFDaUIsR0FBRyxDQUFDLENBQUNDO29CQUNqQixNQUFNQyxXQUNKRCxLQUFLRSxLQUFLLEtBQUtiLFlBQVlBLFNBQVNjLFVBQVUsQ0FBQyxHQUFjLE9BQVhILEtBQUtFLEtBQUssRUFBQztvQkFDL0QscUJBQ0UsOERBQUNqQixpREFBSUE7d0JBRUhRLE1BQU1PLEtBQUtFLEtBQUs7d0JBQ2hCWCxXQUFXUiw4Q0FBRUEsQ0FBQyxnQkFBZ0I7NEJBQUUsb0JBQW9Ca0I7d0JBQVM7a0NBRTdELDRFQUFDRzs0QkFBSWIsV0FBVTtzQ0FDYiw0RUFBQ1Asa0RBQUtBO2dDQUFDVSxLQUFLTSxLQUFLSyxNQUFNO2dDQUFFUixLQUFLRyxLQUFLTSxLQUFLO2dDQUFFQyxJQUFJOzs7Ozs7Ozs7Ozt1QkFMM0NQLEtBQUtNLEtBQUs7Ozs7O2dCQVNyQjs7Ozs7Ozs7Ozs7O0FBSVI7R0FuQ01uQjs7UUFDYUQsd0RBQVdBOzs7S0FEeEJDO0FBcUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3g/NmJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHNpZGViYXJMaW5rcyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbi8vU2lkZXJiYXJQcm9wcyBpbnRlcmZhY2UgPT4gdHlwZXMvaW5kZXguZC50c1xyXG5jb25zdCBTaWRlYmFyID0gKHsgdXNlciB9OiBTaWRlcmJhclByb3BzKSA9PiB7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1iLTEyIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXszNH1cclxuICAgICAgICAgICAgaGVpZ2h0PXszNH1cclxuICAgICAgICAgICAgYWx0PVwi5aSp6Zqb57arXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1bMjRweF0gbWF4LXhsOnNpemUtMTRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWRlYmFyLWxvZ29cIj7lpKnpmpvnt5o8L2gxPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAge3NpZGViYXJMaW5rcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID1cclxuICAgICAgICAgICAgaXRlbS5yb3V0ZSA9PT0gcGF0aG5hbWUgfHwgcGF0aG5hbWUuc3RhcnRzV2l0aChgJHtpdGVtLnJvdXRlfS9gKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucm91dGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcInNpZGViYXItbGlua1wiLCB7IFwiYmctYmFuay1ncmFkaWVudFwiOiBpc0FjdGl2ZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2l6ZS02XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmltZ1VSTH0gYWx0PXtpdGVtLmxhYmVsfSBmdWxsIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsic2lkZWJhckxpbmtzIiwiY24iLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIlNpZGViYXIiLCJ1c2VyIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZ1bGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});