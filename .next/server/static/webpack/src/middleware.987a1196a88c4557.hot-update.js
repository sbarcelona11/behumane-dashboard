"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    const path = request.nextUrl.pathname;\n    const isPublicPath = path === \"/auth/sign-in\";\n    const token = request.cookies.get(\"token\")?.value || \"\";\n    if (isPublicPath && token.length > 0) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/dashboard\", request.nextUrl));\n    }\n    if (!isPublicPath && !token.length > 0) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/auth/sign-in\", request.nextUrl));\n    }\n}\nconst config = {\n    matcher: [\n        \"/auth/sign-in\",\n        \"/dashboard\",\n        \"/dashboard/individual-students\",\n        \"/dashboard/group-dynamics\",\n        \"/dashboard/emotional-intelligence\",\n        \"/dashboard/action-items\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ3BDLFNBQVNDLFdBQVdDLE9BQU87SUFDaEMsTUFBTUMsT0FBT0QsUUFBUUUsT0FBTyxDQUFDQyxRQUFRO0lBQ3JDLE1BQU1DLGVBQWVILFNBQVM7SUFDOUIsTUFBTUksUUFBUUwsUUFBUU0sT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUMsU0FBUztJQUNyRCxJQUFJSixnQkFBZ0JDLE1BQU1JLE1BQU0sR0FBRyxHQUFHO1FBQ3BDLE9BQU9YLGtGQUFZQSxDQUFDWSxRQUFRLENBQUMsSUFBSUMsSUFBSSxjQUFjWCxRQUFRRSxPQUFPO0lBQ3BFO0lBRUEsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ0MsTUFBTUksTUFBTSxHQUFHLEdBQUc7UUFDdEMsT0FBT1gsa0ZBQVlBLENBQUNZLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGlCQUFpQlgsUUFBUUUsT0FBTztJQUN2RTtBQUNGO0FBRU8sTUFBTVUsU0FBUztJQUNwQkMsU0FBUztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS5qcz9hNDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xuICBjb25zdCBwYXRoID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lO1xuICBjb25zdCBpc1B1YmxpY1BhdGggPSBwYXRoID09PSBcIi9hdXRoL3NpZ24taW5cIjtcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwidG9rZW5cIik/LnZhbHVlIHx8IFwiXCI7XG4gIGlmIChpc1B1YmxpY1BhdGggJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9kYXNoYm9hcmRcIiwgcmVxdWVzdC5uZXh0VXJsKSk7XG4gIH1cblxuICBpZiAoIWlzUHVibGljUGF0aCAmJiAhdG9rZW4ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hdXRoL3NpZ24taW5cIiwgcmVxdWVzdC5uZXh0VXJsKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1xuICAgIFwiL2F1dGgvc2lnbi1pblwiLFxuICAgIFwiL2Rhc2hib2FyZFwiLFxuICAgIFwiL2Rhc2hib2FyZC9pbmRpdmlkdWFsLXN0dWRlbnRzXCIsXG4gICAgXCIvZGFzaGJvYXJkL2dyb3VwLWR5bmFtaWNzXCIsXG4gICAgXCIvZGFzaGJvYXJkL2Vtb3Rpb25hbC1pbnRlbGxpZ2VuY2VcIixcbiAgICBcIi9kYXNoYm9hcmQvYWN0aW9uLWl0ZW1zXCIsXG4gIF0sXG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwicGF0aCIsIm5leHRVcmwiLCJwYXRobmFtZSIsImlzUHVibGljUGF0aCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwibGVuZ3RoIiwicmVkaXJlY3QiLCJVUkwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});