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

/***/ "./components/shared/Header.tsx":
/*!**************************************!*\
  !*** ./components/shared/Header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_utils_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/utils/classnames */ \"./modules/utils/classnames.ts\");\n/* harmony import */ var _components_shared_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/shared/Logo */ \"./components/shared/Logo.tsx\");\n/* harmony import */ var _components_shared_Nav_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/shared/Nav/Bar */ \"./components/shared/Nav/Bar.tsx\");\n/* harmony import */ var _components_shared_Wallet_Connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/shared/Wallet/Connect */ \"./components/shared/Wallet/Connect.tsx\");\n\n\n\n\n\nconst Header = (param)=>{\n    let { className  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: _modules_utils_classnames__WEBPACK_IMPORTED_MODULE_1__[\"default\"].merge([\n            className,\n            \"border-b border-neutral-700 container\",\n            \"flex items-center justify-between p-4 md:p-5\"\n        ]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/welliton/web3-boilerplate/components/shared/Header.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav_Bar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/welliton/web3-boilerplate/components/shared/Header.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Wallet_Connect__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"hidden md:block\"\n                    }, void 0, false, {\n                        fileName: \"/home/welliton/web3-boilerplate/components/shared/Header.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/welliton/web3-boilerplate/components/shared/Header.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/welliton/web3-boilerplate/components/shared/Header.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNSO0FBQ0s7QUFDYztBQU10RCxNQUFNSSxTQUFTLFNBQWdDO1FBQS9CLEVBQUVDLFVBQVMsRUFBZTtJQUMvQyxxQkFDRSw4REFBQ0M7UUFDQ0QsV0FBV0wsdUVBQWdCLENBQUM7WUFDMUJLO1lBQ0E7WUFDQTtTQUNEOzswQkFFRCw4REFBQ0osK0RBQUlBOzs7OzswQkFDTCw4REFBQ087Z0JBQUlILFdBQVU7O2tDQUNiLDhEQUFDSCxrRUFBTUE7Ozs7O2tDQUNQLDhEQUFDQyx5RUFBYUE7d0JBQUNFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQyxFQUFDO0tBaEJZRDtBQWtCYiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXIudHN4PzkwMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnQG1vZHVsZXMvdXRpbHMvY2xhc3NuYW1lcydcbmltcG9ydCBMb2dvIGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZC9Mb2dvJ1xuaW1wb3J0IE5hdmJhciBmcm9tICdAY29tcG9uZW50cy9zaGFyZWQvTmF2L0JhcidcbmltcG9ydCBXYWxsZXRDb25uZWN0IGZyb20gJ0Bjb21wb25lbnRzL3NoYXJlZC9XYWxsZXQvQ29ubmVjdCdcblxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUgfTogSGVhZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMubWVyZ2UoW1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICdib3JkZXItYiBib3JkZXItbmV1dHJhbC03MDAgY29udGFpbmVyJyxcbiAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgbWQ6cC01J1xuICAgICAgXSl9XG4gICAgPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQnPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxXYWxsZXRDb25uZWN0IGNsYXNzTmFtZT0naGlkZGVuIG1kOmJsb2NrJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiY2xhc3NuYW1lcyIsIkxvZ28iLCJOYXZiYXIiLCJXYWxsZXRDb25uZWN0IiwiSGVhZGVyIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibWVyZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/shared/Header.tsx\n"));

/***/ })

});