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

/***/ "./src/components/navBar.tsx":
/*!***********************************!*\
  !*** ./src/components/navBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var D_Programming_Programming_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Programming_Programming_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Programming_Programming_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//#1a202c background color\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NavBar = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useLogoutMutation)(), 2), ref1 = ref[0], logoutFetching = ref1.fetching, logout = ref[1];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useMeQuery)({\n        pause: (0,_utils_isServer__WEBPACK_IMPORTED_MODULE_5__.isServer)()\n    }), 1), ref3 = ref2[0], data = ref3.data, fetching = ref3.fetching;\n    var body = null;\n    if (fetching) {\n    //user not logged in\n    } else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                        mr: 2,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/register\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true);\n    } else {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    mr: 3,\n                    p: 1,\n                    children: data.me.username\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    backgroundColor: \"red.500\",\n                    variant: \"ghost\",\n                    onClick: _asyncToGenerator(D_Programming_Programming_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return D_Programming_Programming_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.next = 2;\n                                    return logout();\n                                case 2:\n                                    router.reload();\n                                case 3:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    })),\n                    isLoading: logoutFetching,\n                    children: \"Log Out\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this);\n    }\n    lorem * 10;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        position: \"sticky\",\n        top: 0,\n        zIndex: 1,\n        bg: \"#AABBCC\",\n        p: 4,\n        mb: 8,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            flex: 1,\n            m: 'auto',\n            maxW: 800,\n            align: 'center',\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                            children: \"QRoom\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    ml: \"auto\",\n                    fontSize: 20,\n                    fontWeight: 600,\n                    fontFamily: \"heading\",\n                    children: body\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\components\\\\navBar.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this));\n};\n_s(NavBar, \"9XhURlKSSl6TRs5u9rI4IU4nI/E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useLogoutMutation,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useMeQuery\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBMEI7QUFDeUM7QUFDMUM7QUFDTztBQUNvQztBQUN4QjtBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsR0FBSyxDQUFDVyxNQUFNLEdBQTBCLFFBQVEsU0FBQzs7O0lBQ3BELEdBQUssQ0FBQ0MsTUFBTSxHQUFHRixzREFBUztJQUN4QixHQUFLLENBQTBDSCxHQUFtQixrQkFBbkJBLHFFQUFpQixlQUFqQkEsR0FBbUIsS0FBL0NNLGNBQWMsUUFBeEJDLFFBQVEsRUFBb0JDLE1BQU0sR0FBSVIsR0FBbUI7SUFDbEUsR0FBSyxDQUF3QkMsSUFFM0Isa0JBRjJCQSw4REFBVSxDQUFDLENBQUM7UUFDdkNRLEtBQUssRUFBRVAseURBQVE7SUFDakIsQ0FBQyxjQUY0QkQsSUFFM0IsS0FGT1MsSUFBSSxRQUFKQSxJQUFJLEVBQUVILFFBQVEsUUFBUkEsUUFBUTtJQUl2QixHQUFHLENBQUNJLElBQUksR0FBRyxJQUFJO0lBQ2YsRUFBRSxFQUFFSixRQUFRLEVBQUUsQ0FBQztJQUNiLEVBQW9CO0lBQ3RCLENBQUMsTUFBTSxFQUFFLElBQUdHLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVEsR0FBUkEsSUFBSSxDQUFKQSxDQUFRLEdBQVJBLElBQUksQ0FBRUUsRUFBRSxHQUFFLENBQUM7UUFDckJELElBQUk7OzRGQUVDWixrREFBUTtvQkFBQ2MsSUFBSSxFQUFDLENBQVE7MEdBQ3BCaEIsa0RBQUk7d0JBQUNpQixFQUFFLEVBQUUsQ0FBQztrQ0FBRSxDQUFLOzs7Ozs7Ozs7Ozs0RkFFbkJmLGtEQUFRO29CQUFDYyxJQUFJLEVBQUUsQ0FBVzswR0FDeEJoQixrREFBSTtrQ0FBQyxDQUFROzs7Ozs7Ozs7Ozs7O0lBSXRCLENBQUMsTUFBTSxDQUFDO1FBQ05jLElBQUksK0VBQ0RoQixrREFBSTs7NEZBQ0ZGLGlEQUFHO29CQUFDcUIsRUFBRSxFQUFFLENBQUM7b0JBQUVDLENBQUMsRUFBRSxDQUFDOzhCQUFHTCxJQUFJLENBQUNFLEVBQUUsQ0FBQ0ksUUFBUTs7Ozs7OzRGQUNsQ3RCLG9EQUFNO29CQUNMdUIsZUFBZSxFQUFFLENBQVM7b0JBQzFCQyxPQUFPLEVBQUUsQ0FBTztvQkFDaEJDLE9BQU8sbUtBQUUsUUFBUSxXQUFHLENBQUM7Ozs7OzJDQUNiWCxNQUFNOztvQ0FDWkgsTUFBTSxDQUFDZSxNQUFNOzs7Ozs7b0JBQ2YsQ0FBQztvQkFDREMsU0FBUyxFQUFFZixjQUFjOzhCQUMxQixDQUVEOzs7Ozs7Ozs7Ozs7SUFHTixDQUFDO0lBQ0RnQixLQUFLLEdBQUMsRUFBRTtJQUNSLE1BQU0sNkVBQ0gzQixrREFBSTtRQUFDNEIsUUFBUSxFQUFFLENBQVE7UUFBRUMsR0FBRyxFQUFFLENBQUM7UUFBRUMsTUFBTSxFQUFFLENBQUM7UUFBRUMsRUFBRSxFQUFDLENBQVM7UUFBQ1gsQ0FBQyxFQUFFLENBQUM7UUFBRVksRUFBRSxFQUFFLENBQUM7OEZBQ2xFaEMsa0RBQUk7WUFBQ2lDLElBQUksRUFBRSxDQUFDO1lBQUVDLENBQUMsRUFBRSxDQUFNO1lBQUVDLElBQUksRUFBRSxHQUFHO1lBQUVDLEtBQUssRUFBRSxDQUFROzs0RkFDbkRoQyxrREFBUTtvQkFBQ2MsSUFBSSxFQUFFLENBQUc7MEdBQ2hCaEIsa0RBQUk7OEdBQ0ZELHFEQUFPO3NDQUFDLENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR2pCSCxpREFBRztvQkFBQ3VDLEVBQUUsRUFBRSxDQUFNO29CQUFFQyxRQUFRLEVBQUUsRUFBRTtvQkFBRUMsVUFBVSxFQUFFLEdBQUc7b0JBQUVDLFVBQVUsRUFBRSxDQUFTOzhCQUNsRXhCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2IsQ0FBQztHQXREWVAsTUFBTTs7UUFDRkQsa0RBQVM7UUFDdUJILGlFQUFpQjtRQUNuQ0MsMERBQVU7OztLQUg1QkcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZCYXIudHN4P2M4NTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jMWEyMDJjIGJhY2tncm91bmQgY29sb3JcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIEhlYWRpbmcsIExpbmsgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUxvZ291dE11dGF0aW9uLCB1c2VNZVF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSBcIi4uL3V0aWxzL2lzU2VydmVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIE5hdkJhclByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxOYXZCYXJQcm9wcz4gPSAoe30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFt7IGZldGNoaW5nOiBsb2dvdXRGZXRjaGluZyB9LCBsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcclxuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZU1lUXVlcnkoe1xyXG4gICAgcGF1c2U6IGlzU2VydmVyKCksXHJcbiAgfSk7XHJcblxyXG4gIGxldCBib2R5ID0gbnVsbDtcclxuICBpZiAoZmV0Y2hpbmcpIHtcclxuICAgIC8vdXNlciBub3QgbG9nZ2VkIGluXHJcbiAgfSBlbHNlIGlmICghZGF0YT8ubWUpIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxMaW5rIG1yPXsyfT5Mb2dpbjwvTGluaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtcIi9yZWdpc3RlclwifT5cclxuICAgICAgICAgIDxMaW5rPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPEZsZXg+XHJcbiAgICAgICAgPEJveCBtcj17M30gcD17MX0+e2RhdGEubWUudXNlcm5hbWV9PC9Cb3g+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcInJlZC41MDBcIn1cclxuICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaXNMb2FkaW5nPXtsb2dvdXRGZXRjaGluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG4gIGxvcmVtKjEwXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IHBvc2l0aW9uPXtcInN0aWNreVwifSB0b3A9ezB9IHpJbmRleD17MX0gYmc9XCIjQUFCQkNDXCIgcD17NH0gbWI9ezh9PlxyXG4gICAgICA8RmxleCBmbGV4PXsxfSBtPXsnYXV0byd9IG1heFc9ezgwMH0gYWxpZ249eydjZW50ZXInfT5cclxuICAgICAgPE5leHRMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICA8TGluaz5cclxuICAgICAgICAgIDxIZWFkaW5nPlFSb29tPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgPEJveCBtbD17XCJhdXRvXCJ9IGZvbnRTaXplPXsyMH0gZm9udFdlaWdodD17NjAwfSBmb250RmFtaWx5PXtcImhlYWRpbmdcIn0+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJIZWFkaW5nIiwiTGluayIsIlJlYWN0IiwiTmV4dExpbmsiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsInVzZU1lUXVlcnkiLCJpc1NlcnZlciIsInVzZVJvdXRlciIsIk5hdkJhciIsInJvdXRlciIsImxvZ291dEZldGNoaW5nIiwiZmV0Y2hpbmciLCJsb2dvdXQiLCJwYXVzZSIsImRhdGEiLCJib2R5IiwibWUiLCJocmVmIiwibXIiLCJwIiwidXNlcm5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YXJpYW50Iiwib25DbGljayIsInJlbG9hZCIsImlzTG9hZGluZyIsImxvcmVtIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJiZyIsIm1iIiwiZmxleCIsIm0iLCJtYXhXIiwiYWxpZ24iLCJtbCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navBar.tsx\n");

/***/ })

});