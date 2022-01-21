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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _components_messageSections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/messageSections */ \"./src/components/messageSections.tsx\");\n/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wrapper */ \"./src/components/wrapper.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createURQLClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/createURQLClient */ \"./src/utils/createURQLClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Room = function(param) {\n    var token = param.token;\n    _s();\n    // console.log(token);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery)(), 1), meData = ref[0];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRoomQuery)({\n        variables: {\n            token: token\n        }\n    }), 1), roomData = ref1[0];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useDeleteRoomMutation)(), 2), deleteRoom = ref2[1];\n    var body = null;\n    if (!meData) {\n        router.push('/login');\n    }\n    if (roomData.fetching) {}\n    if (roomData.data) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wrapper__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n            variant: \"large\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    justifyContent: \"space-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            border: \"1px\",\n                            p: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    children: \"Room details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    children: [\n                                        \"Room Name :\",\n                                        roomData.data.room.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: function() {\n                                deleteRoom({\n                                    id: roomData.data.room.id\n                                });\n                                router.push(\"/\");\n                            },\n                            backgroundColor: \"red.400\",\n                            variant: \"ghost\",\n                            children: \"delete room\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    mt: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messageSections__WEBPACK_IMPORTED_MODULE_3__.MessageSections, {\n                        token: \"\".concat(token)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        variant: \"large\",\n        children: body\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n        lineNumber: 58,\n        columnNumber: 10\n    }, _this));\n};\n_s(Room, \"bDYAB30j8L+MtXNXp4sOnAFF4fo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRoomQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useDeleteRoomMutation\n    ];\n});\n_c = Room;\nRoom.getInitialProps = function(param) {\n    var query = param.query;\n    return {\n        token: query.token\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_8__.withUrqlClient)(_utils_createURQLClient__WEBPACK_IMPORTED_MODULE_6__.createURQLClient)(Room));\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFFaEI7QUFDSDtBQUNTO0FBQ2tCO0FBQ2hCO0FBS2xCO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELEdBQUssQ0FBQ2EsSUFBSSxHQUFnQyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ2hELEVBQXNCO0lBQ3RCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQVlLLEdBQVksa0JBQVpBLDhEQUFVLFFBQXBCTSxNQUFNLEdBQUlOLEdBQVk7SUFDN0IsR0FBSyxDQUFjQyxJQUlqQixrQkFKaUJBLGdFQUFZLENBQUMsQ0FBQztRQUMvQk0sU0FBUyxFQUFFLENBQUM7WUFDVkgsS0FBSyxFQUFFQSxLQUFLO1FBQ2QsQ0FBQztJQUNILENBQUMsT0FKTUksUUFBUSxHQUFJUCxJQUlqQjtJQUNGLEdBQUssQ0FBa0JGLElBQXVCLGtCQUF2QkEseUVBQXFCLFFBQW5DVSxVQUFVLEdBQUlWLElBQXVCO0lBQzlDLEdBQUcsQ0FBQ1csSUFBSSxHQUFHLElBQUk7SUFDZixFQUFFLEdBQUdKLE1BQU0sRUFBRSxDQUFDO1FBQ1pELE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQVE7SUFDdEIsQ0FBQztJQUNELEVBQUUsRUFBRUgsUUFBUSxDQUFDSSxRQUFRLEVBQUUsQ0FBQyxDQUV2QjtJQUNELEVBQUUsRUFBRUosUUFBUSxDQUFDSyxJQUFJLEVBQUUsQ0FBQztRQUNsQkgsSUFBSSwrRUFDRFosd0RBQU87WUFBQ2dCLE9BQU8sRUFBQyxDQUFPOzs0RkFDckJ0QixrREFBSTtvQkFBQ3VCLGNBQWMsRUFBRSxDQUFlOztvR0FDbEN6QixpREFBRzs0QkFBQzBCLE1BQU0sRUFBRSxDQUFLOzRCQUFFQyxDQUFDLEVBQUUsQ0FBQzs7NEdBQ3JCeEIsa0RBQUk7OENBQUMsQ0FBWTs7Ozs7OzRHQUNqQkEsa0RBQUk7O3dDQUFDLENBQVc7d0NBQUNlLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDSyxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7Ozs7Ozs7b0dBRTFDNUIsb0RBQU07NEJBQ0w2QixPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7Z0NBQ2RYLFVBQVUsQ0FBQyxDQUFDO29DQUFDWSxFQUFFLEVBQUViLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDSyxJQUFJLENBQUNHLEVBQUU7Z0NBQUMsQ0FBQztnQ0FDeENoQixNQUFNLENBQUNNLElBQUksQ0FBQyxDQUFHOzRCQUNqQixDQUFDOzRCQUNEVyxlQUFlLEVBQUUsQ0FBUzs0QkFDMUJSLE9BQU8sRUFBRSxDQUFPO3NDQUNqQixDQUVEOzs7Ozs7Ozs7Ozs7NEZBRUR4QixpREFBRztvQkFBQ2lDLEVBQUUsRUFBRSxDQUFDOzBHQUNQMUIsd0VBQWU7d0JBQUNPLEtBQUssRUFBRyxHQUFRLE9BQU5BLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXhDLENBQUM7SUFFRCxNQUFNLDZFQUFFUixzREFBTTtRQUFDa0IsT0FBTyxFQUFDLENBQU87a0JBQUVKLElBQUk7Ozs7OztBQUN0QyxDQUFDO0dBNUNLUCxJQUFJOztRQUVPUixrREFBUztRQUNQSywwREFBVTtRQUNSQyw0REFBWTtRQUtSRixxRUFBcUI7OztLQVR4Q0ksSUFBSTtBQThDVkEsSUFBSSxDQUFDcUIsZUFBZSxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSztJQUM3QixNQUFNLENBQUMsQ0FBQztRQUNOckIsS0FBSyxFQUFFcUIsS0FBSyxDQUFDckIsS0FBSztJQUNwQixDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlVix5REFBYyxDQUFDUSxxRUFBZ0IsRUFBRUMsSUFBSSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jvb21zL1t0b2tlbl0udHN4PzZhMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lc3NhZ2VTZWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd3JhcHBlclwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZURlbGV0ZVJvb21NdXRhdGlvbixcclxuICB1c2VNZVF1ZXJ5LFxyXG4gIHVzZVJvb21RdWVyeSxcclxufSBmcm9tIFwiLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVVJRTENsaWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9jcmVhdGVVUlFMQ2xpZW50XCI7XHJcblxyXG5jb25zdCBSb29tOiBOZXh0UGFnZTx7IHRva2VuOiBzdHJpbmcgfT4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttZURhdGFdID0gdXNlTWVRdWVyeSgpO1xyXG4gIGNvbnN0IFtyb29tRGF0YV0gPSB1c2VSb29tUXVlcnkoe1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgWywgZGVsZXRlUm9vbV0gPSB1c2VEZWxldGVSb29tTXV0YXRpb24oKTtcclxuICBsZXQgYm9keSA9IG51bGw7XHJcbiAgaWYgKCFtZURhdGEpIHtcclxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gIH1cclxuICBpZiAocm9vbURhdGEuZmV0Y2hpbmcpIHtcclxuICAgIFxyXG4gIH1cclxuICBpZiAocm9vbURhdGEuZGF0YSkge1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPFdyYXBwZXIgdmFyaWFudD1cImxhcmdlXCI+XHJcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifT5cclxuICAgICAgICAgIDxCb3ggYm9yZGVyPXtcIjFweFwifSBwPXs0fT5cclxuICAgICAgICAgICAgPFRleHQ+Um9vbSBkZXRhaWxzPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD5Sb29tIE5hbWUgOntyb29tRGF0YS5kYXRhLnJvb20ubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlbGV0ZVJvb20oeyBpZDogcm9vbURhdGEuZGF0YS5yb29tLmlkIH0pO1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcInJlZC40MDBcIn1cclxuICAgICAgICAgICAgdmFyaWFudD17XCJnaG9zdFwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBkZWxldGUgcm9vbVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgPE1lc3NhZ2VTZWN0aW9ucyB0b2tlbj17YCR7dG9rZW59YH0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0IHZhcmlhbnQ9XCJsYXJnZVwiPntib2R5fTwvTGF5b3V0PjtcclxufTtcclxuXHJcblJvb20uZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogcXVlcnkudG9rZW4gYXMgc3RyaW5nLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVUlFMQ2xpZW50KShSb29tKTtcclxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJUZXh0Iiwid2l0aFVycWxDbGllbnQiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJNZXNzYWdlU2VjdGlvbnMiLCJXcmFwcGVyIiwidXNlRGVsZXRlUm9vbU11dGF0aW9uIiwidXNlTWVRdWVyeSIsInVzZVJvb21RdWVyeSIsImNyZWF0ZVVSUUxDbGllbnQiLCJSb29tIiwidG9rZW4iLCJyb3V0ZXIiLCJtZURhdGEiLCJ2YXJpYWJsZXMiLCJyb29tRGF0YSIsImRlbGV0ZVJvb20iLCJib2R5IiwicHVzaCIsImZldGNoaW5nIiwiZGF0YSIsInZhcmlhbnQiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsInAiLCJyb29tIiwibmFtZSIsIm9uQ2xpY2siLCJpZCIsImJhY2tncm91bmRDb2xvciIsIm10IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/rooms/[token].tsx\n");

/***/ })

});