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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tab: function() { return /* binding */ Tab; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Tabs,Tab auto */ \nvar _s = $RefreshSig$();\n\nconst generateKey = ()=>{\n    return Math.trunc(Math.random() * 1000).toString();\n};\nconst Tabs = (param)=>{\n    let { children, name } = param;\n    _s();\n    const findActiveTab = (a)=>{\n        console.log(\"findActiveTab\", a);\n        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(a)) {\n            a = [\n                a\n            ];\n        }\n        ;\n        return a && a.reduce((accumulator, currentValue, i)=>{\n            if (currentValue.props.active) {\n                return i;\n            }\n            return accumulator;\n        }, 0);\n    };\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(findActiveTab(children));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 p-2\",\n                children: children.map((item, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                            currentTab: i,\n                            activeTab: activeTab,\n                            setActiveTab: setActiveTab,\n                            children: item.props.children\n                        }, \"tab-\".concat(i, \"-\").concat(name, \"-\").concat(generateKey()), false, {\n                            fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row p-5\",\n                children: children.map((item, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full \".concat(i === activeTab ? \"visible\" : \"hidden\"),\n                        children: item.props.component\n                    }, \"element-\".concat(i, \"-\").concat(name, \"-\").concat(generateKey()), false, {\n                        fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Tabs, \"FnfkdN/unaKLFR8Si1bXoKkDDWI=\");\n_c = Tabs;\nconst Tab = (param)=>{\n    let { children, activeTab, currentTab, setActiveTab } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row px-5 py-1 cursor-pointer text-black \".concat(activeTab === currentTab ? \"text-blue-500 border-b border-b-blue-500\" : \"text-gray-500\"),\n            onClick: ()=>setActiveTab(currentTab),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Tab;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9UYWJzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFFeEMsTUFBTUUsY0FBYztJQUNoQixPQUFPQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxNQUFNQyxRQUFRO0FBQ3BEO0FBQ0EsTUFBTUMsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFOztJQUM5QixNQUFNQyxnQkFBZ0IsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGO1FBQzdCLGtCQUFHWCwyREFBb0IsQ0FBQ1csSUFBRztZQUN2QkEsSUFBSTtnQkFBQ0E7YUFBRTtRQUNYOztRQUVGLE9BQU9BLEtBQUtBLEVBQUVJLE1BQU0sQ0FBQyxDQUFDQyxhQUFhQyxjQUFjQztZQUMvQyxJQUFJRCxhQUFhRSxLQUFLLENBQUNDLE1BQU0sRUFBRTtnQkFDN0IsT0FBT0Y7WUFDVDtZQUVBLE9BQU9GO1FBQ1QsR0FBRztJQUNMO0lBRUEsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQ1MsY0FBY0Y7SUFFekQscUJBQ0U7OzBCQUNFLDhEQUFDZTtnQkFBSUMsV0FBVTswQkFDWmhCLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVI7b0JBQ25CLHFCQUNFO2tDQUNJLDRFQUFDUzs0QkFFQ0MsWUFBWVY7NEJBQ1pHLFdBQVdBOzRCQUNYQyxjQUFjQTtzQ0FFYkksS0FBS1AsS0FBSyxDQUFDWCxRQUFROzJCQUxmLE9BQVlDLE9BQUxTLEdBQUUsS0FBV2hCLE9BQVJPLE1BQUssS0FBaUIsT0FBZFA7Ozs7OztnQkFTbkM7Ozs7OzswQkFFRiw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNaaEIsU0FBU2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNUjtvQkFDbkIscUJBQ0UsOERBQUNLO3dCQUNDQyxXQUFXLFVBQWlELE9BQXZDTixNQUFNRyxZQUFZLFlBQVk7a0NBRWxESyxLQUFLUCxLQUFLLENBQUNVLFNBQVM7dUJBSGIsV0FBZ0JwQixPQUFMUyxHQUFFLEtBQVdoQixPQUFSTyxNQUFLLEtBQWlCLE9BQWRQOzs7OztnQkFNdEM7Ozs7Ozs7O0FBSVI7R0FqRE1LO0tBQUFBO0FBbURMLE1BQU1vQixNQUFNO1FBQUMsRUFBRW5CLFFBQVEsRUFBRWEsU0FBUyxFQUFFTyxVQUFVLEVBQUVOLFlBQVksRUFBRTtJQUM3RCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFDQ0MsV0FBVyxxREFFVixPQURDSCxjQUFjTyxhQUFhLDZDQUE2QztZQUUxRUUsU0FBUyxJQUFNUixhQUFhTTtzQkFFM0JwQjs7Ozs7OztBQUlUO01BYk9tQjtBQWtCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db21tb24vVGFicy9pbmRleC5qcz9hZTVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGdlbmVyYXRlS2V5ID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiAxMDAwKS50b1N0cmluZygpO1xufTtcbmNvbnN0IFRhYnMgPSAoeyBjaGlsZHJlbiwgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGZpbmRBY3RpdmVUYWIgPSAoYSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJmaW5kQWN0aXZlVGFiXCIsIGEpO1xuICAgICAgaWYoUmVhY3QuaXNWYWxpZEVsZW1lbnQoYSkpe1xuICAgICAgICAgIGEgPSBbYV07XG4gICAgICB9O1xuXG4gICAgcmV0dXJuIGEgJiYgYS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGkpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKGZpbmRBY3RpdmVUYWIoY2hpbGRyZW4pKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgcC0yXCI+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICBrZXk9e2B0YWItJHtpfS0ke25hbWV9LSR7Z2VuZXJhdGVLZXkoKX1gfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFRhYj17aX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYj17YWN0aXZlVGFifVxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiPXtzZXRBY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHAtNVwiPlxuICAgICAgICB7Y2hpbGRyZW4ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtgZWxlbWVudC0ke2l9LSR7bmFtZX0tJHtnZW5lcmF0ZUtleSgpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke2kgPT09IGFjdGl2ZVRhYiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbS5wcm9wcy5jb21wb25lbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG4gY29uc3QgVGFiID0gKHsgY2hpbGRyZW4sIGFjdGl2ZVRhYiwgY3VycmVudFRhYiwgc2V0QWN0aXZlVGFiIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IHB4LTUgcHktMSBjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWNrICR7XG4gICAgICAgICAgYWN0aXZlVGFiID09PSBjdXJyZW50VGFiID8gXCJ0ZXh0LWJsdWUtNTAwIGJvcmRlci1iIGJvcmRlci1iLWJsdWUtNTAwXCIgOiBcInRleHQtZ3JheS01MDBcIlxuICAgICAgICB9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKGN1cnJlbnRUYWIpfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgICBUYWJzLFxuICAgIFRhYlxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZW5lcmF0ZUtleSIsIk1hdGgiLCJ0cnVuYyIsInJhbmRvbSIsInRvU3RyaW5nIiwiVGFicyIsImNoaWxkcmVuIiwibmFtZSIsImZpbmRBY3RpdmVUYWIiLCJhIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWRFbGVtZW50IiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJpIiwicHJvcHMiLCJhY3RpdmUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiVGFiIiwiY3VycmVudFRhYiIsImNvbXBvbmVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Common/Tabs/index.js\n"));

/***/ })

});