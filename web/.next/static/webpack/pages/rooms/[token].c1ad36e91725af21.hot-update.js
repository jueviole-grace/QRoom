"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rooms/[token]",{

/***/ "./src/components/messageBox.tsx":
/*!***************************************!*\
  !*** ./src/components/messageBox.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageBox\": function() { return /* binding */ MessageBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar MessageBox = function(param) {\n    var author = param.author, children = param.children, _variant = param.variant, variant = _variant === void 0 ? \"they\" : _variant;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        width: \"max-content\",\n        maxWidth: \"50%\",\n        padding: 2,\n        m: 4,\n        ml: variant === \"me\" ? \"auto\" : \"4\",\n        border: \"2px solid transparent\",\n        borderRadius: 10,\n        backgroundColor: variant === \"me\" ? \"orange.400\" : \"blue.900\",\n        flexDirection: 'column',\n        children: [\n            author,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageBox.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_c = MessageBox;\nvar _c;\n$RefreshReg$(_c, \"MessageBox\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlQm94LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNmOztBQU9sQixHQUFLLENBQUNFLFVBQVUsR0FBOEIsUUFDakQsUUFHRSxDQUFDO1FBSExDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxRQUFRLFNBQVJBLFFBQVEsbUJBQ1JDLE9BQU8sRUFBUEEsT0FBTyx5QkFBRyxDQUFNO0lBRWhCLE1BQU0sNkVBQ0hMLGtEQUFJO1FBQ0hNLEtBQUssRUFBRSxDQUFhO1FBQ3BCQyxRQUFRLEVBQUUsQ0FBSztRQUNmQyxPQUFPLEVBQUUsQ0FBQztRQUNWQyxDQUFDLEVBQUUsQ0FBQztRQUNKQyxFQUFFLEVBQUVMLE9BQU8sS0FBSyxDQUFJLE1BQUcsQ0FBTSxRQUFHLENBQUc7UUFDbkNNLE1BQU0sRUFBRSxDQUF1QjtRQUMvQkMsWUFBWSxFQUFFLEVBQUU7UUFDaEJDLGVBQWUsRUFBRVIsT0FBTyxLQUFLLENBQUksTUFBRyxDQUFZLGNBQUcsQ0FBVTtRQUM3RFMsYUFBYSxFQUFFLENBQVE7O1lBRXBCWCxNQUFNO1lBQ1JDLFFBQVE7Ozs7Ozs7QUFHZixDQUFDO0tBckJZRixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21lc3NhZ2VCb3gudHN4PzQ0MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgbWVzc2FnZUJveFByb3BzIHtcclxuICB2YXJpYW50PzogXCJtZVwiIHwgXCJ0aGV5XCI7XHJcbiAgYXV0aG9yPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUJveDogUmVhY3QuRkM8bWVzc2FnZUJveFByb3BzPiA9ICh7XHJcbiAgYXV0aG9yLFxyXG4gIGNoaWxkcmVuLFxyXG4gIHZhcmlhbnQgPSBcInRoZXlcIixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICB3aWR0aD17XCJtYXgtY29udGVudFwifVxyXG4gICAgICBtYXhXaWR0aD17XCI1MCVcIn1cclxuICAgICAgcGFkZGluZz17Mn1cclxuICAgICAgbT17NH1cclxuICAgICAgbWw9e3ZhcmlhbnQgPT09IFwibWVcIiA/IFwiYXV0b1wiIDogXCI0XCJ9XHJcbiAgICAgIGJvcmRlcj17XCIycHggc29saWQgdHJhbnNwYXJlbnRcIn1cclxuICAgICAgYm9yZGVyUmFkaXVzPXsxMH1cclxuICAgICAgYmFja2dyb3VuZENvbG9yPXt2YXJpYW50ID09PSBcIm1lXCIgPyBcIm9yYW5nZS40MDBcIiA6IFwiYmx1ZS45MDBcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17J2NvbHVtbid9XHJcbiAgICA+XHJcbiAgICAgICAge2F1dGhvcn1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwiUmVhY3QiLCJNZXNzYWdlQm94IiwiYXV0aG9yIiwiY2hpbGRyZW4iLCJ2YXJpYW50Iiwid2lkdGgiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJtIiwibWwiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/messageBox.tsx\n");

/***/ })

});