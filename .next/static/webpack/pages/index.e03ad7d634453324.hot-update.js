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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Trailers = function(param) {\n    var videsIds = param.videsIds;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedImage = ref[0], setSelectedImage = ref[1];\n    var opts = {\n        width: 400,\n        height: 300\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full mx-4 overflow-hidden h-[20rem] flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: selectedImage,\n                alt: \"Thumbnail image\",\n                className: \"absolute inset-0 bottom-[50%] w-full h-[200%]\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"relative z-10 text-4xl font-bold text-my-yellow\",\n                children: \"Latest Trailers\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex w-full gap-2 noScroll\",\n                children: videsIds.map(function(id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://img.youtube.com/vi/\".concat(id, \"/mqdefault.jpg\"),\n                        className: \"w-full\",\n                        onMouseEnter: function() {\n                            return setSelectedImage(\"https://img.youtube.com/vi/\".concat(id, \"/hqdefault.jpg\"));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailers, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Trailers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailers);\nvar _c;\n$RefreshReg$(_c, \"Trailers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFpbGVycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBTzVDLElBQU1FLFFBQVEsR0FBYyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUN0QyxJQUEwQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ0csYUFBYSxHQUFzQkgsR0FBWSxHQUFsQyxFQUFFSSxnQkFBZ0IsR0FBSUosR0FBWSxHQUFoQjtJQUV0QyxJQUFNSyxJQUFJLEdBQUc7UUFDWkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsTUFBTSxFQUFFLEdBQUc7S0FDWDtJQUVELHFCQUNDLDhEQUFDQyxLQUFHO1FBQ0hDLFNBQVMsRUFBQyw2RUFBNkU7OzBCQU12Riw4REFBQ0MsS0FBRztnQkFDSEMsR0FBRyxFQUFFUixhQUFhO2dCQUNsQlMsR0FBRyxFQUFDLGlCQUFpQjtnQkFDckJILFNBQVMsRUFBQywrQ0FBK0M7Ozs7O3FCQUN4RDswQkFDRiw4REFBQ0ksSUFBRTtnQkFBQ0osU0FBUyxFQUFDLGlEQUFpRDswQkFBQyxpQkFFaEU7Ozs7O3FCQUFLOzBCQUNMLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMENBQTBDOzBCQUN2RFAsUUFBUSxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsRUFBRSxFQUFLO29CQUNyQixxQkFDQyw4REFBQ0wsS0FBRzt3QkFDSEMsR0FBRyxFQUFFLDZCQUE0QixDQUFLLE1BQWMsQ0FBakJJLEVBQUUsRUFBQyxnQkFBYyxDQUFDO3dCQUNyRE4sU0FBUyxFQUFDLFFBQVE7d0JBQ2xCTyxZQUFZLEVBQUU7bUNBQ2JaLGdCQUFnQixDQUNmLDZCQUE0QixDQUFLLE1BQWMsQ0FBakJXLEVBQUUsRUFBQyxnQkFBYyxDQUFDLENBQ2hEO3lCQUFBOzs7Ozs2QkFFRCxDQU1EO2lCQUNGLENBQUM7Ozs7O3FCQUNHOzs7Ozs7YUFDRCxDQUNMO0NBQ0Y7R0E5Q0tkLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYWlsZXJzLnRzeD85YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QteW91dHViZS9kaXN0L1lvdVR1YmVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dmlkZXNJZHM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBUcmFpbGVyczogRkM8UHJvcHM+ID0gKHsgdmlkZXNJZHMgfSkgPT4ge1xuXHRjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBvcHRzID0ge1xuXHRcdHdpZHRoOiA0MDAsXG5cdFx0aGVpZ2h0OiAzMDAsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbXgtNCBvdmVyZmxvdy1oaWRkZW4gaC1bMjByZW1dIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIlxuXHRcdFx0Ly8gc3R5bGU9e3tcblx0XHRcdC8vIFx0YmFja2dyb3VuZDogYHVybCgke3NlbGVjdGVkSW1hZ2V9KSBuby1yZXBlYXRgLFxuXHRcdFx0Ly8gXHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRcdFx0Ly8gfX1cblx0XHQ+XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHNyYz17c2VsZWN0ZWRJbWFnZX1cblx0XHRcdFx0YWx0PVwiVGh1bWJuYWlsIGltYWdlXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBib3R0b20tWzUwJV0gdy1mdWxsIGgtWzIwMCVdXCJcblx0XHRcdC8+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1teS15ZWxsb3dcIj5cblx0XHRcdFx0TGF0ZXN0IFRyYWlsZXJzXG5cdFx0XHQ8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggdy1mdWxsIGdhcC0yIG5vU2Nyb2xsXCI+XG5cdFx0XHRcdHt2aWRlc0lkcy5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtpZH0vbXFkZWZhdWx0LmpwZ2B9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbFwiXG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEltYWdlKFxuXHRcdFx0XHRcdFx0XHRcdFx0YGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7aWR9L2hxZGVmYXVsdC5qcGdgLFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdC8vIDxZb3VUdWJlXG5cdFx0XHRcdFx0XHQvLyBcdHZpZGVvSWQ9e2lkfVxuXHRcdFx0XHRcdFx0Ly8gXHRvcHRzPXtvcHRzfVxuXHRcdFx0XHRcdFx0Ly8gXHRjbGFzc05hbWU9XCJwLTIgYmctYmxhY2sgcm91bmRlZC0zeGxcIlxuXHRcdFx0XHRcdFx0Ly8gLz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxlcnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRyYWlsZXJzIiwidmlkZXNJZHMiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsIm9wdHMiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwibWFwIiwiaWQiLCJvbk1vdXNlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Trailers.tsx\n"));

/***/ })

});