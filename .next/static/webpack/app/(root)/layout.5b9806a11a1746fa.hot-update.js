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

/***/ "(app-pages-browser)/./components/MobileNav.tsx":
/*!**********************************!*\
  !*** ./components/MobileNav.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//MobileNavProps interface => types/index.d.ts\nconst MobileNav = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full max-w-[264px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.Sheet, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetTrigger, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: \"/icons/hamburger.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"菜單\",\n                        className: \"cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {\n                    side: \"left\",\n                    className: \"border-none bg-white\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_4__.sidebarLinks.map((item)=>{\n                        const isActive = item.route === pathname || pathname.startsWith(\"\".concat(item.route, \"/\"));\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: item.route,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"sidebar-link\", {\n                                \"bg-bank-gradient\": isActive\n                            }),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative size-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: item.imgURL,\n                                        alt: item.label,\n                                        fill: true,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)({\n                                            \"brightness-[3] isActive\": isActive\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"sidebar-label\", {\n                                        \"!text-white\": isActive\n                                    }),\n                                    children: item.label\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, item.label, true, {\n                            fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Program UIUX\\\\NextJS_Banking_20240503\\\\banking_app\\\\components\\\\MobileNav.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MobileNav, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTW9iaWxlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRStCO0FBUVg7QUFDUztBQUNjO0FBQ0c7QUFDYjtBQUVqQyw4Q0FBOEM7QUFDOUMsTUFBTVEsWUFBWTtRQUFDLEVBQUVDLElBQUksRUFBa0I7O0lBQ3pDLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixxQkFDRSw4REFBQ0s7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNYLDRDQUFLQTs7OEJBQ0osOERBQUNFLG1EQUFZQTs4QkFDWCw0RUFBQ0gsa0RBQUtBO3dCQUNKYSxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKSixXQUFVOzs7Ozs7Ozs7Ozs4QkFJZCw4REFBQ1YsbURBQVlBO29CQUFDZSxNQUFNO29CQUFRTCxXQUFVOzhCQUNuQ1Asb0RBQVlBLENBQUNhLEdBQUcsQ0FBQyxDQUFDQzt3QkFDakIsTUFBTUMsV0FDSkQsS0FBS0UsS0FBSyxLQUFLWCxZQUFZQSxTQUFTWSxVQUFVLENBQUMsR0FBYyxPQUFYSCxLQUFLRSxLQUFLLEVBQUM7d0JBQy9ELHFCQUNFLDhEQUFDakIsaURBQUlBOzRCQUVIbUIsTUFBTUosS0FBS0UsS0FBSzs0QkFDaEJULFdBQVdMLDhDQUFFQSxDQUFDLGdCQUFnQjtnQ0FBRSxvQkFBb0JhOzRCQUFTOzs4Q0FFN0QsOERBQUNJO29DQUFJWixXQUFVOzhDQUNiLDRFQUFDWixrREFBS0E7d0NBQ0phLEtBQUtNLEtBQUtNLE1BQU07d0NBQ2hCVCxLQUFLRyxLQUFLTyxLQUFLO3dDQUNmQyxJQUFJO3dDQUNKZixXQUFXTCw4Q0FBRUEsQ0FBQzs0Q0FBRSwyQkFBMkJhO3dDQUFTOzs7Ozs7Ozs7Ozs4Q0FJeEQsOERBQUNRO29DQUFFaEIsV0FBV0wsOENBQUVBLENBQUMsaUJBQWlCO3dDQUFFLGVBQWVhO29DQUFTOzhDQUN6REQsS0FBS08sS0FBSzs7Ozs7OzsyQkFkUlAsS0FBS08sS0FBSzs7Ozs7b0JBa0JyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQTVDTWxCOztRQUNhRix3REFBV0E7OztLQUR4QkU7QUE4Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVOYXYudHN4P2FiNzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtcclxuICBTaGVldCxcclxuICBTaGVldENvbnRlbnQsXHJcbiAgU2hlZXRIZWFkZXIsXHJcbiAgU2hlZXRUaXRsZSxcclxuICBTaGVldERlc2NyaXB0aW9uLFxyXG4gIFNoZWV0VHJpZ2dlcixcclxufSBmcm9tIFwiLi91aS9zaGVldFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHNpZGViYXJMaW5rcyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuXHJcbi8vTW9iaWxlTmF2UHJvcHMgaW50ZXJmYWNlID0+IHR5cGVzL2luZGV4LmQudHNcclxuY29uc3QgTW9iaWxlTmF2ID0gKHsgdXNlciB9OiBNb2JpbGVOYXZQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LVsyNjRweF1cIj5cclxuICAgICAgPFNoZWV0PlxyXG4gICAgICAgIDxTaGVldFRyaWdnZXI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ljb25zL2hhbWJ1cmdlci5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgIGFsdD1cIuiPnOWWrlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TaGVldFRyaWdnZXI+XHJcblxyXG4gICAgICAgIDxTaGVldENvbnRlbnQgc2lkZT17XCJsZWZ0XCJ9IGNsYXNzTmFtZT1cImJvcmRlci1ub25lIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XHJcbiAgICAgICAgICAgICAgaXRlbS5yb3V0ZSA9PT0gcGF0aG5hbWUgfHwgcGF0aG5hbWUuc3RhcnRzV2l0aChgJHtpdGVtLnJvdXRlfS9gKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5yb3V0ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJzaWRlYmFyLWxpbmtcIiwgeyBcImJnLWJhbmstZ3JhZGllbnRcIjogaXNBY3RpdmUgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzaXplLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1VSTH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oeyBcImJyaWdodG5lc3MtWzNdIGlzQWN0aXZlXCI6IGlzQWN0aXZlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbihcInNpZGViYXItbGFiZWxcIiwgeyBcIiF0ZXh0LXdoaXRlXCI6IGlzQWN0aXZlIH0pfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TaGVldENvbnRlbnQ+XHJcbiAgICAgIDwvU2hlZXQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU2hlZXQiLCJTaGVldENvbnRlbnQiLCJTaGVldFRyaWdnZXIiLCJMaW5rIiwic2lkZWJhckxpbmtzIiwidXNlUGF0aG5hbWUiLCJjbiIsIk1vYmlsZU5hdiIsInVzZXIiLCJwYXRobmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpZGUiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJocmVmIiwiZGl2IiwiaW1nVVJMIiwibGFiZWwiLCJmaWxsIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MobileNav.tsx\n"));

/***/ })

});