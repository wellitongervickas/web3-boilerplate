"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_shared_Modal_tsx";
exports.ids = ["components_shared_Modal_tsx"];
exports.modules = {

/***/ "./components/shared/Modal.tsx":
/*!*************************************!*\
  !*** ./components/shared/Modal.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"@heroicons/react/24/solid\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_utils_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/utils/classnames */ \"./modules/utils/classnames.ts\");\n\n\n\n\nconst Modal = ({ children , setIsOpen , isOpen  })=>{\n    const [isBoxOpen, setIsBoxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const doChangeBoxOpened = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(setIsOpen, [\n        setIsOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const time = setTimeout(()=>{\n            setIsBoxOpen(isOpen);\n        }, 100) // delay of animation box entering\n        ;\n        return ()=>{\n            setIsBoxOpen(false);\n            clearTimeout(time);\n        };\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        hidden: !isOpen,\n        className: _modules_utils_classnames__WEBPACK_IMPORTED_MODULE_3__[\"default\"].merge([\n            \"absolute right-0 top-0 bottom-0 left-0 z-[1000] \",\n            \"h-full w-full bg-black bg-opacity-30\",\n            \"flex items-center justify-center\",\n            \" transition-all duration-300 \",\n            isOpen ? \"visible\" : \"invisible\"\n        ]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _modules_utils_classnames__WEBPACK_IMPORTED_MODULE_3__[\"default\"].merge([\n                    \"relative z-[98] bg-white\",\n                    \"h-screen min-h-[60px] w-screen min-w-[60px] md:h-auto md:w-auto\",\n                    \"transform transition-all duration-300 md:rounded-md lg:mx-0\",\n                    isBoxOpen ? \"opacity-100\" : \"opacity-0\"\n                ]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        \"aria-label\": \"Close Modal\",\n                        type: \"button\",\n                        className: \"absolute top-3 right-4 md:-top-8 md:right-0\",\n                        onClick: ()=>setIsOpen(false),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__.XMarkIcon, {\n                            title: \"close\",\n                            width: 24,\n                            className: \"text-neutral-700 md:text-neutral-200\"\n                        }, void 0, false, {\n                            fileName: \"/home/welliton/web3-boilerplate/components/shared/Modal.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/welliton/web3-boilerplate/components/shared/Modal.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/welliton/web3-boilerplate/components/shared/Modal.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/welliton/web3-boilerplate/components/shared/Modal.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _modules_utils_classnames__WEBPACK_IMPORTED_MODULE_3__[\"default\"].merge([\n                    \"absolute right-0 top-0 bottom-0 left-0 z-[97]\",\n                    \"h-full w-full bg-blue-900 bg-opacity-30 blur-[99%]\"\n                ]),\n                onClick: ()=>doChangeBoxOpened(false)\n            }, void 0, false, {\n                fileName: \"/home/welliton/web3-boilerplate/components/shared/Modal.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/welliton/web3-boilerplate/components/shared/Modal.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9Nb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUN3RDtBQUNIO0FBRUg7QUFRbEQsTUFBTUssUUFBUSxDQUFDLEVBQUVDLFNBQVEsRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQWMsR0FBSztJQUM3RCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxNQUFNVSxvQkFBb0JULGtEQUFXQSxDQUFDSyxXQUFXO1FBQUNBO0tBQVU7SUFFNURQLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNWSxPQUFPQyxXQUFXLElBQU07WUFDNUJILGFBQWFGO1FBQ2YsR0FBRyxLQUFLLGtDQUFrQzs7UUFFMUMsT0FBTyxJQUFNO1lBQ1hFLGFBQWEsS0FBSztZQUNsQkksYUFBYUY7UUFDZjtJQUNGLEdBQUc7UUFBQ0o7S0FBTztJQUVYLHFCQUNFLDhEQUFDTztRQUNDQyxRQUFRLENBQUNSO1FBQ1RTLFdBQVdiLHVFQUFnQixDQUFDO1lBQzFCO1lBQ0E7WUFDQTtZQUNBO1lBQ0FJLFNBQVMsWUFBWSxXQUFXO1NBQ2pDOzswQkFFRCw4REFBQ087Z0JBQ0NFLFdBQVdiLHVFQUFnQixDQUFDO29CQUMxQjtvQkFDQTtvQkFDQTtvQkFDQUssWUFBWSxnQkFBZ0IsV0FBVztpQkFDeEM7O2tDQUVELDhEQUFDVTt3QkFDQ0MsY0FBVzt3QkFDWEMsTUFBSzt3QkFDTEosV0FBVTt3QkFDVkssU0FBUyxJQUFNZixVQUFVLEtBQUs7a0NBRTlCLDRFQUFDSixnRUFBU0E7NEJBQ1JvQixPQUFNOzRCQUNOQyxPQUFPOzRCQUNQUCxXQUFVOzs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0Y7a0NBQUtUOzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNTO2dCQUNDRSxXQUFXYix1RUFBZ0IsQ0FBQztvQkFDMUI7b0JBQ0E7aUJBQ0Q7Z0JBQ0RrQixTQUFTLElBQU1YLGtCQUFrQixLQUFLOzs7Ozs7Ozs7Ozs7QUFJOUM7QUFFQSxpRUFBZU4sS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjMtYm9pbGVycGxhdGUvLi9jb21wb25lbnRzL3NoYXJlZC9Nb2RhbC50c3g/NGFiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnXG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ0Btb2R1bGVzL3V0aWxzL2NsYXNzbmFtZXMnXG5cbmludGVyZmFjZSBNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgc2V0SXNPcGVuOiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmNvbnN0IE1vZGFsID0gKHsgY2hpbGRyZW4sIHNldElzT3BlbiwgaXNPcGVuIH06IE1vZGFsUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQm94T3Blbiwgc2V0SXNCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGRvQ2hhbmdlQm94T3BlbmVkID0gdXNlQ2FsbGJhY2soc2V0SXNPcGVuLCBbc2V0SXNPcGVuXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzQm94T3Blbihpc09wZW4pXG4gICAgfSwgMTAwKSAvLyBkZWxheSBvZiBhbmltYXRpb24gYm94IGVudGVyaW5nXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0SXNCb3hPcGVuKGZhbHNlKVxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpXG4gICAgfVxuICB9LCBbaXNPcGVuXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGhpZGRlbj17IWlzT3Blbn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcy5tZXJnZShbXG4gICAgICAgICdhYnNvbHV0ZSByaWdodC0wIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCB6LVsxMDAwXSAnLFxuICAgICAgICAnaC1mdWxsIHctZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTMwJyxcbiAgICAgICAgJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJyxcbiAgICAgICAgJyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJyxcbiAgICAgICAgaXNPcGVuID8gJ3Zpc2libGUnIDogJ2ludmlzaWJsZSdcbiAgICAgIF0pfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzLm1lcmdlKFtcbiAgICAgICAgICAncmVsYXRpdmUgei1bOThdIGJnLXdoaXRlJyxcbiAgICAgICAgICAnaC1zY3JlZW4gbWluLWgtWzYwcHhdIHctc2NyZWVuIG1pbi13LVs2MHB4XSBtZDpoLWF1dG8gbWQ6dy1hdXRvJyxcbiAgICAgICAgICAndHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBtZDpyb3VuZGVkLW1kIGxnOm14LTAnLFxuICAgICAgICAgIGlzQm94T3BlbiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuICAgICAgICBdKX1cbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9J0Nsb3NlIE1vZGFsJ1xuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0zIHJpZ2h0LTQgbWQ6LXRvcC04IG1kOnJpZ2h0LTAnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxYTWFya0ljb25cbiAgICAgICAgICAgIHRpdGxlPSdjbG9zZSdcbiAgICAgICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1uZXV0cmFsLTcwMCBtZDp0ZXh0LW5ldXRyYWwtMjAwJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMubWVyZ2UoW1xuICAgICAgICAgICdhYnNvbHV0ZSByaWdodC0wIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCB6LVs5N10nLFxuICAgICAgICAgICdoLWZ1bGwgdy1mdWxsIGJnLWJsdWUtOTAwIGJnLW9wYWNpdHktMzAgYmx1ci1bOTklXSdcbiAgICAgICAgXSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRvQ2hhbmdlQm94T3BlbmVkKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiWE1hcmtJY29uIiwiY2xhc3NuYW1lcyIsIk1vZGFsIiwiY2hpbGRyZW4iLCJzZXRJc09wZW4iLCJpc09wZW4iLCJpc0JveE9wZW4iLCJzZXRJc0JveE9wZW4iLCJkb0NoYW5nZUJveE9wZW5lZCIsInRpbWUiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiaGlkZGVuIiwiY2xhc3NOYW1lIiwibWVyZ2UiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwidHlwZSIsIm9uQ2xpY2siLCJ0aXRsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shared/Modal.tsx\n");

/***/ })

};
;