"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Common/Tabs/index.js":
/*!*********************************************!*\
  !*** ./src/components/Common/Tabs/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tab: function() { return /* binding */ Tab; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Tabs,Tab auto */ \nvar _s = $RefreshSig$();\n\nconst generateKey = ()=>{\n    return Math.trunc(Math.random() * 1000).toString();\n};\nconst Tabs = (param)=>{\n    let { children, name } = param;\n    _s();\n    const findActiveTab = (a)=>{\n        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(a)) {\n            a = [\n                a\n            ];\n        }\n        console.log(\"findActiveTab\", a);\n        return a && a.reduce((accumulator, currentValue, i)=>{\n            if (currentValue.props.active) {\n                return i;\n            }\n            return accumulator;\n        }, 0);\n    };\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(findActiveTab(children));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 p-2\",\n                children: children.map((item, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                            currentTab: i,\n                            activeTab: activeTab,\n                            setActiveTab: setActiveTab,\n                            children: item.props.children\n                        }, \"tab-\".concat(i, \"-\").concat(name, \"-\").concat(generateKey()), false, {\n                            fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row p-5\",\n                children: children.map((item, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full \".concat(i === activeTab ? \"visible\" : \"hidden\"),\n                        children: item.props.component\n                    }, \"element-\".concat(i, \"-\").concat(name, \"-\").concat(generateKey()), false, {\n                        fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Tabs, \"FnfkdN/unaKLFR8Si1bXoKkDDWI=\");\n_c = Tabs;\nconst Tab = (param)=>{\n    let { children, activeTab, currentTab, setActiveTab } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row px-5 py-1 cursor-pointer text-black \".concat(activeTab === currentTab ? \"text-blue-500 border-b border-b-blue-500\" : \"text-gray-500\"),\n            onClick: ()=>setActiveTab(currentTab),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Tab;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9UYWJzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFFeEMsTUFBTUUsY0FBYztJQUNoQixPQUFPQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxNQUFNQyxRQUFRO0FBQ3BEO0FBQ0EsTUFBTUMsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFOztJQUM5QixNQUFNQyxnQkFBZ0IsQ0FBQ0M7UUFDbkIsa0JBQUdYLDJEQUFvQixDQUFDVyxJQUFHO1lBQ3ZCQSxJQUFJO2dCQUFDQTthQUFFO1FBQ1g7UUFDQUUsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkg7UUFFL0IsT0FBT0EsS0FBS0EsRUFBRUksTUFBTSxDQUFDLENBQUNDLGFBQWFDLGNBQWNDO1lBQy9DLElBQUlELGFBQWFFLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO2dCQUM3QixPQUFPRjtZQUNUO1lBRUEsT0FBT0Y7UUFDVCxHQUFHO0lBQ0w7SUFFQSxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR3JCLCtDQUFRQSxDQUFDUyxjQUFjRjtJQUV6RCxxQkFDRTs7MEJBQ0UsOERBQUNlO2dCQUFJQyxXQUFVOzBCQUNaaEIsU0FBU2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNUjtvQkFDbkIscUJBQ0U7a0NBQ0ksNEVBQUNTOzRCQUVDQyxZQUFZVjs0QkFDWkcsV0FBV0E7NEJBQ1hDLGNBQWNBO3NDQUViSSxLQUFLUCxLQUFLLENBQUNYLFFBQVE7MkJBTGYsT0FBWUMsT0FBTFMsR0FBRSxLQUFXaEIsT0FBUk8sTUFBSyxLQUFpQixPQUFkUDs7Ozs7O2dCQVNuQzs7Ozs7OzBCQUVGLDhEQUFDcUI7Z0JBQUlDLFdBQVU7MEJBQ1poQixTQUFTaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1SO29CQUNuQixxQkFDRSw4REFBQ0s7d0JBQ0NDLFdBQVcsVUFBaUQsT0FBdkNOLE1BQU1HLFlBQVksWUFBWTtrQ0FFbERLLEtBQUtQLEtBQUssQ0FBQ1UsU0FBUzt1QkFIYixXQUFnQnBCLE9BQUxTLEdBQUUsS0FBV2hCLE9BQVJPLE1BQUssS0FBaUIsT0FBZFA7Ozs7O2dCQU10Qzs7Ozs7Ozs7QUFJUjtHQWpETUs7S0FBQUE7QUFtREwsTUFBTW9CLE1BQU07UUFBQyxFQUFFbkIsUUFBUSxFQUFFYSxTQUFTLEVBQUVPLFVBQVUsRUFBRU4sWUFBWSxFQUFFO0lBQzdELHFCQUNFO2tCQUNFLDRFQUFDQztZQUNDQyxXQUFXLHFEQUVWLE9BRENILGNBQWNPLGFBQWEsNkNBQTZDO1lBRTFFRSxTQUFTLElBQU1SLGFBQWFNO3NCQUUzQnBCOzs7Ozs7O0FBSVQ7TUFiT21CO0FBa0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9UYWJzL2luZGV4LmpzP2FlNWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZ2VuZXJhdGVLZXkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDEwMDApLnRvU3RyaW5nKCk7XG59O1xuY29uc3QgVGFicyA9ICh7IGNoaWxkcmVuLCBuYW1lIH0pID0+IHtcbiAgY29uc3QgZmluZEFjdGl2ZVRhYiA9IChhKSA9PiB7XG4gICAgICBpZihSZWFjdC5pc1ZhbGlkRWxlbWVudChhKSl7XG4gICAgICAgICAgYSA9IFthXTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiZmluZEFjdGl2ZVRhYlwiLCBhKTtcblxuICAgIHJldHVybiBhICYmIGEucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlLCBpKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShmaW5kQWN0aXZlVGFiKGNoaWxkcmVuKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHAtMlwiPlxuICAgICAgICB7Y2hpbGRyZW4ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAga2V5PXtgdGFiLSR7aX0tJHtuYW1lfS0ke2dlbmVyYXRlS2V5KCl9YH1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWI9e2l9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVUYWI9e2FjdGl2ZVRhYn1cbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYj17c2V0QWN0aXZlVGFifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwLTVcIj5cbiAgICAgICAge2NoaWxkcmVuLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17YGVsZW1lbnQtJHtpfS0ke25hbWV9LSR7Z2VuZXJhdGVLZXkoKX1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtpID09PSBhY3RpdmVUYWIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0ucHJvcHMuY29tcG9uZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuIGNvbnN0IFRhYiA9ICh7IGNoaWxkcmVuLCBhY3RpdmVUYWIsIGN1cnJlbnRUYWIsIHNldEFjdGl2ZVRhYiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBweC01IHB5LTEgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFjayAke1xuICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gY3VycmVudFRhYiA/IFwidGV4dC1ibHVlLTUwMCBib3JkZXItYiBib3JkZXItYi1ibHVlLTUwMFwiIDogXCJ0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgfWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihjdXJyZW50VGFiKX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gICAgVGFicyxcbiAgICBUYWJcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2VuZXJhdGVLZXkiLCJNYXRoIiwidHJ1bmMiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlRhYnMiLCJjaGlsZHJlbiIsIm5hbWUiLCJmaW5kQWN0aXZlVGFiIiwiYSIsImlzVmFsaWRFbGVtZW50IiwiY29uc29sZSIsImxvZyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VycmVudFZhbHVlIiwiaSIsInByb3BzIiwiYWN0aXZlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsIlRhYiIsImN1cnJlbnRUYWIiLCJjb21wb25lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Common/Tabs/index.js\n"));

/***/ })

});