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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tab: function() { return /* binding */ Tab; },\n/* harmony export */   Tabs: function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Tabs,Tab auto */ \nvar _s = $RefreshSig$();\n\nconst generateKey = ()=>{\n    return Math.trunc(Math.random() * 1000).toString();\n};\nconst Tabs = (param)=>{\n    let { children, name } = param;\n    _s();\n    const findActiveTab = (a)=>{\n        console.log(a);\n        return a && a.reduce((accumulator, currentValue, i)=>{\n            if (currentValue.props.active) {\n                return i;\n            }\n            return accumulator;\n        }, 0);\n    };\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(findActiveTab(children));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 p-2\",\n                children: children.map((item, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                            currentTab: i,\n                            activeTab: activeTab,\n                            setActiveTab: setActiveTab,\n                            children: item.props.children\n                        }, \"tab-\".concat(i, \"-\").concat(name, \"-\").concat(generateKey()), false, {\n                            fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row p-5\",\n                children: children.map((item, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full \".concat(i === activeTab ? \"visible\" : \"hidden\"),\n                        children: item.props.component\n                    }, \"element-\".concat(i, \"-\").concat(name, \"-\").concat(generateKey()), false, {\n                        fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Tabs, \"FnfkdN/unaKLFR8Si1bXoKkDDWI=\");\n_c = Tabs;\nconst Tab = (param)=>{\n    let { children, activeTab, currentTab, setActiveTab } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row px-5 py-1 cursor-pointer text-black \".concat(activeTab === currentTab ? \"text-blue-500 border-b border-b-blue-500\" : \"text-gray-500\"),\n            onClick: ()=>setActiveTab(currentTab),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/sebastianbarcelona/Desarrollo/behumane-educator-dashboard/src/components/Common/Tabs/index.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Tab;\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Tabs\");\n$RefreshReg$(_c1, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbW1vbi9UYWJzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFFeEMsTUFBTUUsY0FBYztJQUNoQixPQUFPQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSyxNQUFNQyxRQUFRO0FBQ3BEO0FBQ0EsTUFBTUMsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFOztJQUM5QixNQUFNQyxnQkFBZ0IsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZCxPQUFPQSxLQUFLQSxFQUFFRyxNQUFNLENBQUMsQ0FBQ0MsYUFBYUMsY0FBY0M7WUFDL0MsSUFBSUQsYUFBYUUsS0FBSyxDQUFDQyxNQUFNLEVBQUU7Z0JBQzdCLE9BQU9GO1lBQ1Q7WUFFQSxPQUFPRjtRQUNULEdBQUc7SUFDTDtJQUVBLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUNTLGNBQWNGO0lBRXpELHFCQUNFOzswQkFDRSw4REFBQ2M7Z0JBQUlDLFdBQVU7MEJBQ1pmLFNBQVNnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVI7b0JBQ25CLHFCQUNFO2tDQUNJLDRFQUFDUzs0QkFFQ0MsWUFBWVY7NEJBQ1pHLFdBQVdBOzRCQUNYQyxjQUFjQTtzQ0FFYkksS0FBS1AsS0FBSyxDQUFDVixRQUFROzJCQUxmLE9BQVlDLE9BQUxRLEdBQUUsS0FBV2YsT0FBUk8sTUFBSyxLQUFpQixPQUFkUDs7Ozs7O2dCQVNuQzs7Ozs7OzBCQUVGLDhEQUFDb0I7Z0JBQUlDLFdBQVU7MEJBQ1pmLFNBQVNnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTVI7b0JBQ25CLHFCQUNFLDhEQUFDSzt3QkFDQ0MsV0FBVyxVQUFpRCxPQUF2Q04sTUFBTUcsWUFBWSxZQUFZO2tDQUVsREssS0FBS1AsS0FBSyxDQUFDVSxTQUFTO3VCQUhiLFdBQWdCbkIsT0FBTFEsR0FBRSxLQUFXZixPQUFSTyxNQUFLLEtBQWlCLE9BQWRQOzs7OztnQkFNdEM7Ozs7Ozs7O0FBSVI7R0E3Q01LO0tBQUFBO0FBK0NMLE1BQU1tQixNQUFNO1FBQUMsRUFBRWxCLFFBQVEsRUFBRVksU0FBUyxFQUFFTyxVQUFVLEVBQUVOLFlBQVksRUFBRTtJQUM3RCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFDQ0MsV0FBVyxxREFFVixPQURDSCxjQUFjTyxhQUFhLDZDQUE2QztZQUUxRUUsU0FBUyxJQUFNUixhQUFhTTtzQkFFM0JuQjs7Ozs7OztBQUlUO01BYk9rQjtBQWtCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db21tb24vVGFicy9pbmRleC5qcz9hZTVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGdlbmVyYXRlS2V5ID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiAxMDAwKS50b1N0cmluZygpO1xufTtcbmNvbnN0IFRhYnMgPSAoeyBjaGlsZHJlbiwgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGZpbmRBY3RpdmVUYWIgPSAoYSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYSlcbiAgICByZXR1cm4gYSAmJiBhLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSwgaSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoZmluZEFjdGl2ZVRhYihjaGlsZHJlbikpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBwLTJcIj5cbiAgICAgICAge2NoaWxkcmVuLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgIGtleT17YHRhYi0ke2l9LSR7bmFtZX0tJHtnZW5lcmF0ZUtleSgpfWB9XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VGFiPXtpfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiPXthY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWI9e3NldEFjdGl2ZVRhYn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcC01XCI+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2BlbGVtZW50LSR7aX0tJHtuYW1lfS0ke2dlbmVyYXRlS2V5KCl9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7aSA9PT0gYWN0aXZlVGFiID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLnByb3BzLmNvbXBvbmVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbiBjb25zdCBUYWIgPSAoeyBjaGlsZHJlbiwgYWN0aXZlVGFiLCBjdXJyZW50VGFiLCBzZXRBY3RpdmVUYWIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgcHgtNSBweS0xIGN1cnNvci1wb2ludGVyIHRleHQtYmxhY2sgJHtcbiAgICAgICAgICBhY3RpdmVUYWIgPT09IGN1cnJlbnRUYWIgPyBcInRleHQtYmx1ZS01MDAgYm9yZGVyLWIgYm9yZGVyLWItYmx1ZS01MDBcIiA6IFwidGV4dC1ncmF5LTUwMFwiXG4gICAgICAgIH1gfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoY3VycmVudFRhYil9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQge1xuICAgIFRhYnMsXG4gICAgVGFiXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImdlbmVyYXRlS2V5IiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwidG9TdHJpbmciLCJUYWJzIiwiY2hpbGRyZW4iLCJuYW1lIiwiZmluZEFjdGl2ZVRhYiIsImEiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJpIiwicHJvcHMiLCJhY3RpdmUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiVGFiIiwiY3VycmVudFRhYiIsImNvbXBvbmVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Common/Tabs/index.js\n"));

/***/ })

});