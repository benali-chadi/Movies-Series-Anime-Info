"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Trailers.tsx":
/*!*************************************!*\
  !*** ./src/components/Trailers.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Trailers = function(param) {\n    var videsIds = param.videsIds;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedImage = ref[0], setSelectedImage = ref[1];\n    var opts = {\n        width: 400,\n        height: 300\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative mx-4 overflow-hidden h-[20rem] flex flex-col gap-2 justify-center rounded-3xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: selectedImage,\n                alt: \"Thumbnail image\",\n                className: \"absolute inset-0 top-[-50%] w-full h-[200%] blur-lg\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"relative z-10 pl-2 text-3xl font-bold text-my-white\",\n                children: \"Latest Trailers\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex w-full gap-2 px-2 noScroll\",\n                children: videsIds.map(function(id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://img.youtube.com/vi/\".concat(id, \"/mqdefault.jpg\"),\n                        className: \"w-full\",\n                        onMouseEnter: function() {\n                            return setSelectedImage(\"https://img.youtube.com/vi/\".concat(id, \"/hqdefault.jpg\"));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailers, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Trailers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailers);\nvar _c;\n$RefreshReg$(_c, \"Trailers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFpbGVycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBTzVDLElBQU1FLFFBQVEsR0FBYyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUN0QyxJQUEwQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ0csYUFBYSxHQUFzQkgsR0FBWSxHQUFsQyxFQUFFSSxnQkFBZ0IsR0FBSUosR0FBWSxHQUFoQjtJQUV0QyxJQUFNSyxJQUFJLEdBQUc7UUFDWkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsTUFBTSxFQUFFLEdBQUc7S0FDWDtJQUVELHFCQUNDLDhEQUFDQyxLQUFHO1FBQ0hDLFNBQVMsRUFBQyx3RkFBd0Y7OzBCQU1sRyw4REFBQ0MsS0FBRztnQkFDSEMsR0FBRyxFQUFFUixhQUFhO2dCQUNsQlMsR0FBRyxFQUFDLGlCQUFpQjtnQkFDckJILFNBQVMsRUFBQyxxREFBcUQ7Ozs7O3FCQUM5RDswQkFDRiw4REFBQ0ksSUFBRTtnQkFBQ0osU0FBUyxFQUFDLHFEQUFxRDswQkFBQyxpQkFFcEU7Ozs7O3FCQUFLOzBCQUNMLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0NBQStDOzBCQUM1RFAsUUFBUSxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsRUFBRSxFQUFLO29CQUNyQixxQkFDQyw4REFBQ0wsS0FBRzt3QkFDSEMsR0FBRyxFQUFFLDZCQUE0QixDQUFLLE1BQWMsQ0FBakJJLEVBQUUsRUFBQyxnQkFBYyxDQUFDO3dCQUNyRE4sU0FBUyxFQUFDLFFBQVE7d0JBQ2xCTyxZQUFZLEVBQUU7bUNBQ2JaLGdCQUFnQixDQUNmLDZCQUE0QixDQUFLLE1BQWMsQ0FBakJXLEVBQUUsRUFBQyxnQkFBYyxDQUFDLENBQ2hEO3lCQUFBOzs7Ozs2QkFFRCxDQU1EO2lCQUNGLENBQUM7Ozs7O3FCQUNHOzs7Ozs7YUFDRCxDQUNMO0NBQ0Y7R0E5Q0tkLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYWlsZXJzLnRzeD85YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QteW91dHViZS9kaXN0L1lvdVR1YmVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dmlkZXNJZHM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBUcmFpbGVyczogRkM8UHJvcHM+ID0gKHsgdmlkZXNJZHMgfSkgPT4ge1xuXHRjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBvcHRzID0ge1xuXHRcdHdpZHRoOiA0MDAsXG5cdFx0aGVpZ2h0OiAzMDAsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC00IG92ZXJmbG93LWhpZGRlbiBoLVsyMHJlbV0gZmxleCBmbGV4LWNvbCBnYXAtMiBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLTN4bFwiXG5cdFx0XHQvLyBzdHlsZT17e1xuXHRcdFx0Ly8gXHRiYWNrZ3JvdW5kOiBgdXJsKCR7c2VsZWN0ZWRJbWFnZX0pIG5vLXJlcGVhdGAsXG5cdFx0XHQvLyBcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cdFx0XHQvLyB9fVxuXHRcdD5cblx0XHRcdDxpbWdcblx0XHRcdFx0c3JjPXtzZWxlY3RlZEltYWdlfVxuXHRcdFx0XHRhbHQ9XCJUaHVtYm5haWwgaW1hZ2VcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHRvcC1bLTUwJV0gdy1mdWxsIGgtWzIwMCVdIGJsdXItbGdcIlxuXHRcdFx0Lz5cblx0XHRcdDxoMiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIHBsLTIgdGV4dC0zeGwgZm9udC1ib2xkIHRleHQtbXktd2hpdGVcIj5cblx0XHRcdFx0TGF0ZXN0IFRyYWlsZXJzXG5cdFx0XHQ8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggdy1mdWxsIGdhcC0yIHB4LTIgbm9TY3JvbGxcIj5cblx0XHRcdFx0e3ZpZGVzSWRzLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke2lkfS9tcWRlZmF1bHQuanBnYH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsXCJcblx0XHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkSW1hZ2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtpZH0vaHFkZWZhdWx0LmpwZ2AsXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0Ly8gPFlvdVR1YmVcblx0XHRcdFx0XHRcdC8vIFx0dmlkZW9JZD17aWR9XG5cdFx0XHRcdFx0XHQvLyBcdG9wdHM9e29wdHN9XG5cdFx0XHRcdFx0XHQvLyBcdGNsYXNzTmFtZT1cInAtMiBiZy1ibGFjayByb3VuZGVkLTN4bFwiXG5cdFx0XHRcdFx0XHQvLyAvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFpbGVycztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVHJhaWxlcnMiLCJ2aWRlc0lkcyIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwib3B0cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJtYXAiLCJpZCIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Trailers.tsx\n"));

/***/ })

});