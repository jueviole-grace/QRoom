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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _components_messageSections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/messageSections */ \"./src/components/messageSections.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Room = function(param) {\n    var token = param.token;\n    _s();\n    // console.log(token);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery)(), 1), meData = ref[0];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useRoomQuery)({\n        variables: {\n            token: token\n        }\n    }), 1), roomData = ref1[0];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useDeleteRoomMutation)(), 2), deleteRoom = ref2[1];\n    var body = null;\n    if (!meData) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"pls login\"\n        }, void 0, false);\n    }\n    if (roomData.fetching) {}\n    if (!r) body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                justifyContent: 'space-between',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        border: '1px',\n                        p: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: \"Room details\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"Room Name :\",\n                                    roomData.data.room.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: function() {\n                            deleteRoom({\n                                id: roomData.data.room.id\n                            });\n                            router.push('/');\n                        },\n                        backgroundColor: 'red.400',\n                        variant: 'ghost',\n                        children: \"delete room\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                mt: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messageSections__WEBPACK_IMPORTED_MODULE_4__.MessageSections, {\n                    token: \"\".concat(token)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        variant: \"regular\",\n        children: body\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this));\n};\n_s(Room, \"bDYAB30j8L+MtXNXp4sOnAFF4fo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useRoomQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useDeleteRoomMutation\n    ];\n});\n_c = Room;\nRoom.getInitialProps = function(param) {\n    var query = param.query;\n    return {\n        token: query.token\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Room);\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFHbkI7QUFHUztBQUVtRTtBQUVqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRSxHQUFLLENBQUNVLElBQUksR0FBZ0MsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztJQUNoRCxFQUFzQjtJQUN0QixHQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7SUFDeEIsR0FBSyxDQUFZRyxHQUFZLGtCQUFaQSw4REFBVSxRQUFwQk0sTUFBTSxHQUFJTixHQUFZO0lBQzdCLEdBQUssQ0FBY0MsSUFJakIsa0JBSmlCQSxnRUFBWSxDQUFDLENBQUM7UUFDL0JNLFNBQVMsRUFBQyxDQUFDO1lBQ1ZILEtBQUssRUFBQ0EsS0FBSztRQUNaLENBQUM7SUFDSCxDQUFDLE9BSk1JLFFBQVEsR0FBSVAsSUFJakI7SUFDRixHQUFLLENBQWtCRixJQUF1QixrQkFBdkJBLHlFQUFxQixRQUFuQ1UsVUFBVSxHQUFJVixJQUF1QjtJQUM5QyxHQUFHLENBQUNXLElBQUksR0FBRyxJQUFJO0lBQ2YsRUFBRSxHQUFFSixNQUFNLEVBQUMsQ0FBQztRQUNWSSxJQUFJO3NCQUNBLENBQVM7O0lBRWYsQ0FBQztJQUNELEVBQUUsRUFBQ0YsUUFBUSxDQUFDRyxRQUFRLEVBQUMsQ0FBQyxDQUVyQjtJQUNELEVBQUUsR0FBRUMsQ0FBQyxFQUNIRixJQUFJOzt3RkFFRGYsa0RBQUk7Z0JBQUNrQixjQUFjLEVBQUUsQ0FBZTs7Z0dBQ3BDcEIsaURBQUc7d0JBQUNxQixNQUFNLEVBQUUsQ0FBSzt3QkFBRUMsQ0FBQyxFQUFFLENBQUM7O3dHQUNyQm5CLGtEQUFJOzBDQUFDLENBQVk7Ozs7Ozt3R0FDakJBLGtEQUFJOztvQ0FBQyxDQUFXO29DQUFDWSxRQUFRLENBQUNRLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7O2dHQUV4Q3hCLG9EQUFNO3dCQUNMeUIsT0FBTyxFQUFFLFFBQ25CLEdBRHdCLENBQUM7NEJBQ2JWLFVBQVUsQ0FBQyxDQUFDVztnQ0FBQUEsRUFBRSxFQUFDWixRQUFRLENBQUNRLElBQUksQ0FBQ0MsSUFBSSxDQUFDRyxFQUFFOzRCQUFBLENBQUM7NEJBQ3JDZixNQUFNLENBQUNnQixJQUFJLENBQUMsQ0FBRzt3QkFDakIsQ0FBQzt3QkFDREMsZUFBZSxFQUFFLENBQVM7d0JBQzFCQyxPQUFPLEVBQUUsQ0FBTztrQ0FDakIsQ0FFQzs7Ozs7Ozs7Ozs7O3dGQUVIOUIsaURBQUc7Z0JBQUMrQixFQUFFLEVBQUUsQ0FBQztzR0FDTHRCLHdFQUFlO29CQUFDRSxLQUFLLEVBQUcsR0FBUSxPQUFOQSxLQUFLOzs7Ozs7Ozs7Ozs7O0lBS3hDLE1BQU0sNkVBQ0hOLHNEQUFNO1FBQUN5QixPQUFPLEVBQUMsQ0FBUztrQkFDeEJiLElBQUk7Ozs7OztBQUdULENBQUM7R0FqREtQLElBQUk7O1FBRU9OLGtEQUFTO1FBQ1BHLDBEQUFVO1FBQ1JDLDREQUFZO1FBS1JGLHFFQUFxQjs7O0tBVHhDSSxJQUFJO0FBbURWQSxJQUFJLENBQUNzQixlQUFlLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLO0lBQzdCLE1BQU0sQ0FBQyxDQUFDO1FBQ050QixLQUFLLEVBQUVzQixLQUFLLENBQUN0QixLQUFLO0lBQ3BCLENBQUM7QUFDSCxDQUFDO0FBRUQsK0RBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3g/NmEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lucHV0RmllbGRcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93cmFwcGVyXCI7XHJcbmltcG9ydCB7IHVzZURlbGV0ZVJvb21NdXRhdGlvbiwgdXNlTWF0Y2hQYXNzd29yZE11dGF0aW9uLCB1c2VNZVF1ZXJ5LCB1c2VSb29tUXVlcnkgfSBmcm9tIFwiLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTWVzc2FnZVNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZVNlY3Rpb25zXCI7XHJcbmltcG9ydCB7IHRvRXJyb3JNYXAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZXJyb3JNYXBcIjtcclxuXHJcbmNvbnN0IFJvb206IE5leHRQYWdlPHsgdG9rZW46IHN0cmluZyB9PiA9ICh7IHRva2VuIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbWVEYXRhXSA9IHVzZU1lUXVlcnkoKVxyXG4gIGNvbnN0IFtyb29tRGF0YV0gPSB1c2VSb29tUXVlcnkoe1xyXG4gICAgdmFyaWFibGVzOntcclxuICAgICB0b2tlbjp0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgWywgZGVsZXRlUm9vbV0gPSB1c2VEZWxldGVSb29tTXV0YXRpb24oKVxyXG4gIGxldCBib2R5ID0gbnVsbFxyXG4gIGlmKCFtZURhdGEpe1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPD5wbHMgbG9naW48Lz5cclxuICAgIClcclxuICB9XHJcbiAgaWYocm9vbURhdGEuZmV0Y2hpbmcpe1xyXG5cclxuICB9XHJcbiAgaWYoIXIpXHJcbiAgICBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfT5cclxuICAgICAgPEJveCBib3JkZXI9eycxcHgnfSBwPXs0fT5cclxuICAgICAgICA8VGV4dD5Sb29tIGRldGFpbHM8L1RleHQ+XHJcbiAgICAgICAgPFRleHQ+Um9vbSBOYW1lIDp7cm9vbURhdGEuZGF0YS5yb29tLm5hbWV9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PntcclxuICAgICAgICAgICAgZGVsZXRlUm9vbSh7aWQ6cm9vbURhdGEuZGF0YS5yb29tLmlkfSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17J3JlZC40MDAnfVxyXG4gICAgICAgICAgdmFyaWFudD17J2dob3N0J31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBkZWxldGUgcm9vbVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEJveCBtdD17NH0+XHJcbiAgICAgICAgICA8TWVzc2FnZVNlY3Rpb25zIHRva2VuPXtgJHt0b2tlbn1gfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB2YXJpYW50PVwicmVndWxhclwiPlxyXG4gICAge2JvZHl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuUm9vbS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBxdWVyeS50b2tlbiBhcyBzdHJpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb207XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsInVzZVJvdXRlciIsIkxheW91dCIsInVzZURlbGV0ZVJvb21NdXRhdGlvbiIsInVzZU1lUXVlcnkiLCJ1c2VSb29tUXVlcnkiLCJNZXNzYWdlU2VjdGlvbnMiLCJSb29tIiwidG9rZW4iLCJyb3V0ZXIiLCJtZURhdGEiLCJ2YXJpYWJsZXMiLCJyb29tRGF0YSIsImRlbGV0ZVJvb20iLCJib2R5IiwiZmV0Y2hpbmciLCJyIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXIiLCJwIiwiZGF0YSIsInJvb20iLCJuYW1lIiwib25DbGljayIsImlkIiwicHVzaCIsImJhY2tncm91bmRDb2xvciIsInZhcmlhbnQiLCJtdCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/rooms/[token].tsx\n");

/***/ })

});