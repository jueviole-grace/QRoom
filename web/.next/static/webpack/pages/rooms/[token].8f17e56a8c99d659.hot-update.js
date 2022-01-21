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

/***/ "./src/pages/rooms/[token].tsx":
/*!*************************************!*\
  !*** ./src/pages/rooms/[token].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _components_messageSections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/messageSections */ \"./src/components/messageSections.tsx\");\n/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wrapper */ \"./src/components/wrapper.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createURQLClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/createURQLClient */ \"./src/utils/createURQLClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Room = function(param) {\n    var token = param.token;\n    _s();\n    // console.log(token);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery)(), 1), meData = ref[0];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRoomQuery)({\n        variables: {\n            token: token\n        }\n    }), 1), roomData = ref1[0];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useDeleteRoomMutation)(), 2), deleteRoom = ref2[1];\n    var body = null;\n    if (!meData) {}\n    if (roomData.fetching) {}\n    if (roomData.data) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wrapper__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n            variant: \"large\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    justifyContent: \"space-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            border: \"1px\",\n                            p: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    children: \"Room details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    children: [\n                                        \"Room Name :\",\n                                        roomData.data.room.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: function() {\n                                deleteRoom({\n                                    id: roomData.data.room.id\n                                });\n                                router.push(\"/\");\n                            },\n                            backgroundColor: \"red.400\",\n                            variant: \"ghost\",\n                            children: \"delete room\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    mt: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messageSections__WEBPACK_IMPORTED_MODULE_3__.MessageSections, {\n                        token: \"\".concat(token)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        variant: \"large\",\n        children: body\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, _this));\n};\n_s(Room, \"bDYAB30j8L+MtXNXp4sOnAFF4fo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRoomQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useDeleteRoomMutation\n    ];\n});\n_c = Room;\nRoom.getInitialProps = function(param) {\n    var query = param.query;\n    return {\n        token: query.token\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_8__.withUrqlClient)(_utils_createURQLClient__WEBPACK_IMPORTED_MODULE_6__.createURQLClient)(Room));\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFFaEI7QUFDSDtBQUNTO0FBQ2tCO0FBQ2hCO0FBS2xCO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELEdBQUssQ0FBQ2EsSUFBSSxHQUFnQyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ2hELEVBQXNCO0lBQ3RCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQVlLLEdBQVksa0JBQVpBLDhEQUFVLFFBQXBCTSxNQUFNLEdBQUlOLEdBQVk7SUFDN0IsR0FBSyxDQUFjQyxJQUlqQixrQkFKaUJBLGdFQUFZLENBQUMsQ0FBQztRQUMvQk0sU0FBUyxFQUFFLENBQUM7WUFDVkgsS0FBSyxFQUFFQSxLQUFLO1FBQ2QsQ0FBQztJQUNILENBQUMsT0FKTUksUUFBUSxHQUFJUCxJQUlqQjtJQUNGLEdBQUssQ0FBa0JGLElBQXVCLGtCQUF2QkEseUVBQXFCLFFBQW5DVSxVQUFVLEdBQUlWLElBQXVCO0lBQzlDLEdBQUcsQ0FBQ1csSUFBSSxHQUFHLElBQUk7SUFDZixFQUFFLEdBQUdKLE1BQU0sRUFBRSxDQUFDLENBRWI7SUFDRCxFQUFFLEVBQUVFLFFBQVEsQ0FBQ0csUUFBUSxFQUFFLENBQUMsQ0FDdkI7SUFDRCxFQUFFLEVBQUVILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFLENBQUM7UUFDbEJGLElBQUksK0VBQ0RaLHdEQUFPO1lBQUNlLE9BQU8sRUFBQyxDQUFPOzs0RkFDckJyQixrREFBSTtvQkFBQ3NCLGNBQWMsRUFBRSxDQUFlOztvR0FDbEN4QixpREFBRzs0QkFBQ3lCLE1BQU0sRUFBRSxDQUFLOzRCQUFFQyxDQUFDLEVBQUUsQ0FBQzs7NEdBQ3JCdkIsa0RBQUk7OENBQUMsQ0FBWTs7Ozs7OzRHQUNqQkEsa0RBQUk7O3dDQUFDLENBQVc7d0NBQUNlLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDSyxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7b0dBRTFDM0Isb0RBQU07NEJBQ0w0QixPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7Z0NBQ2RWLFVBQVUsQ0FBQyxDQUFDO29DQUFDVyxFQUFFLEVBQUVaLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDSyxJQUFJLENBQUNHLEVBQUU7Z0NBQUMsQ0FBQztnQ0FDeENmLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxDQUFHOzRCQUNqQixDQUFDOzRCQUNEQyxlQUFlLEVBQUUsQ0FBUzs0QkFDMUJULE9BQU8sRUFBRSxDQUFPO3NDQUNqQixDQUVEOzs7Ozs7Ozs7Ozs7NEZBRUR2QixpREFBRztvQkFBQ2lDLEVBQUUsRUFBRSxDQUFDOzBHQUNQMUIsd0VBQWU7d0JBQUNPLEtBQUssRUFBRyxHQUFRLE9BQU5BLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXhDLENBQUM7SUFFRCxNQUFNLDZFQUFFUixzREFBTTtRQUFDaUIsT0FBTyxFQUFDLENBQU87a0JBQUVILElBQUk7Ozs7OztBQUN0QyxDQUFDO0dBM0NLUCxJQUFJOztRQUVPUixrREFBUztRQUNQSywwREFBVTtRQUNSQyw0REFBWTtRQUtSRixxRUFBcUI7OztLQVR4Q0ksSUFBSTtBQTZDVkEsSUFBSSxDQUFDcUIsZUFBZSxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSztJQUM3QixNQUFNLENBQUMsQ0FBQztRQUNOckIsS0FBSyxFQUFFcUIsS0FBSyxDQUFDckIsS0FBSztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlVix5REFBYyxDQUFDUSxxRUFBZ0IsRUFBRUMsSUFBSSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jvb21zL1t0b2tlbl0udHN4PzZhMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lc3NhZ2VTZWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd3JhcHBlclwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZURlbGV0ZVJvb21NdXRhdGlvbixcclxuICB1c2VNZVF1ZXJ5LFxyXG4gIHVzZVJvb21RdWVyeSxcclxufSBmcm9tIFwiLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVVJRTENsaWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9jcmVhdGVVUlFMQ2xpZW50XCI7XHJcblxyXG5jb25zdCBSb29tOiBOZXh0UGFnZTx7IHRva2VuOiBzdHJpbmcgfT4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttZURhdGFdID0gdXNlTWVRdWVyeSgpO1xyXG4gIGNvbnN0IFtyb29tRGF0YV0gPSB1c2VSb29tUXVlcnkoe1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgWywgZGVsZXRlUm9vbV0gPSB1c2VEZWxldGVSb29tTXV0YXRpb24oKTtcclxuICBsZXQgYm9keSA9IG51bGw7XHJcbiAgaWYgKCFtZURhdGEpIHtcclxuICAgIFxyXG4gIH1cclxuICBpZiAocm9vbURhdGEuZmV0Y2hpbmcpIHtcclxuICB9XHJcbiAgaWYgKHJvb21EYXRhLmRhdGEpIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJsYXJnZVwiPlxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XHJcbiAgICAgICAgICA8Qm94IGJvcmRlcj17XCIxcHhcIn0gcD17NH0+XHJcbiAgICAgICAgICAgIDxUZXh0PlJvb20gZGV0YWlsczwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQ+Um9vbSBOYW1lIDp7cm9vbURhdGEuZGF0YS5yb29tLm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBkZWxldGVSb29tKHsgaWQ6IHJvb21EYXRhLmRhdGEucm9vbS5pZCB9KTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJyZWQuNDAwXCJ9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgZGVsZXRlIHJvb21cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgIDxNZXNzYWdlU2VjdGlvbnMgdG9rZW49e2Ake3Rva2VufWB9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExheW91dCB2YXJpYW50PVwibGFyZ2VcIj57Ym9keX08L0xheW91dD47XHJcbn07XHJcblxyXG5Sb29tLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHF1ZXJ5LnRva2VuIGFzIHN0cmluZyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVVJRTENsaWVudCkoUm9vbSk7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsIndpdGhVcnFsQ2xpZW50IiwidXNlUm91dGVyIiwiTGF5b3V0IiwiTWVzc2FnZVNlY3Rpb25zIiwiV3JhcHBlciIsInVzZURlbGV0ZVJvb21NdXRhdGlvbiIsInVzZU1lUXVlcnkiLCJ1c2VSb29tUXVlcnkiLCJjcmVhdGVVUlFMQ2xpZW50IiwiUm9vbSIsInRva2VuIiwicm91dGVyIiwibWVEYXRhIiwidmFyaWFibGVzIiwicm9vbURhdGEiLCJkZWxldGVSb29tIiwiYm9keSIsImZldGNoaW5nIiwiZGF0YSIsInZhcmlhbnQiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsInAiLCJyb29tIiwibmFtZSIsIm9uQ2xpY2siLCJpZCIsInB1c2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtdCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/rooms/[token].tsx\n");

/***/ })

});