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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Trailers = function(param) {\n    var videsIds = param.videsIds;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedImage = ref[0], setSelectedImage = ref[1];\n    var opts = {\n        width: 400,\n        height: 300\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative mx-4 overflow-hidden h-[20rem] flex flex-col gap-2 justify-center rounded-3xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: selectedImage,\n                alt: \"Thumbnail image\",\n                className: \"absolute inset-0 top-[-50%] w-full h-[200%] blur-lg\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"relative z-10 pl-2 text-3xl font-bold text-my-white\",\n                children: \"Latest Trailers\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex w-full gap-2 px-2 noScroll\",\n                children: videsIds.map(function(id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://img.youtube.com/vi/\".concat(id, \"/mqdefault.jpg\"),\n                        className: \"w-full h-full cursor-pointer hover:scale-125\",\n                        onMouseEnter: function() {\n                            return setSelectedImage(\"https://img.youtube.com/vi/\".concat(id, \"/hqdefault.jpg\"));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailers, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Trailers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailers);\nvar _c;\n$RefreshReg$(_c, \"Trailers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFpbGVycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBTzVDLElBQU1FLFFBQVEsR0FBYyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUN0QyxJQUEwQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ0csYUFBYSxHQUFzQkgsR0FBWSxHQUFsQyxFQUFFSSxnQkFBZ0IsR0FBSUosR0FBWSxHQUFoQjtJQUV0QyxJQUFNSyxJQUFJLEdBQUc7UUFDWkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsTUFBTSxFQUFFLEdBQUc7S0FDWDtJQUVELHFCQUNDLDhEQUFDQyxLQUFHO1FBQ0hDLFNBQVMsRUFBQyx3RkFBd0Y7OzBCQU1sRyw4REFBQ0MsS0FBRztnQkFDSEMsR0FBRyxFQUFFUixhQUFhO2dCQUNsQlMsR0FBRyxFQUFDLGlCQUFpQjtnQkFDckJILFNBQVMsRUFBQyxxREFBcUQ7Ozs7O3FCQUM5RDswQkFDRiw4REFBQ0ksSUFBRTtnQkFBQ0osU0FBUyxFQUFDLHFEQUFxRDswQkFBQyxpQkFFcEU7Ozs7O3FCQUFLOzBCQUNMLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0NBQStDOzBCQUM1RFAsUUFBUSxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsRUFBRSxFQUFLO29CQUNyQixxQkFDQyw4REFBQ0wsS0FBRzt3QkFDSEMsR0FBRyxFQUFFLDZCQUE0QixDQUFLLE1BQWMsQ0FBakJJLEVBQUUsRUFBQyxnQkFBYyxDQUFDO3dCQUNyRE4sU0FBUyxFQUFDLDhDQUE4Qzt3QkFDeERPLFlBQVksRUFBRTttQ0FDYlosZ0JBQWdCLENBQ2YsNkJBQTRCLENBQUssTUFBYyxDQUFqQlcsRUFBRSxFQUFDLGdCQUFjLENBQUMsQ0FDaEQ7eUJBQUE7Ozs7OzZCQUVELENBTUQ7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0c7Ozs7OzthQUNELENBQ0w7Q0FDRjtHQTlDS2QsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBZ0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVHJhaWxlcnMudHN4PzliYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC15b3V0dWJlL2Rpc3QvWW91VHViZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR2aWRlc0lkczogc3RyaW5nW107XG59XG5cbmNvbnN0IFRyYWlsZXJzOiBGQzxQcm9wcz4gPSAoeyB2aWRlc0lkcyB9KSA9PiB7XG5cdGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IG9wdHMgPSB7XG5cdFx0d2lkdGg6IDQwMCxcblx0XHRoZWlnaHQ6IDMwMCxcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LTQgb3ZlcmZsb3ctaGlkZGVuIGgtWzIwcmVtXSBmbGV4IGZsZXgtY29sIGdhcC0yIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtM3hsXCJcblx0XHRcdC8vIHN0eWxlPXt7XG5cdFx0XHQvLyBcdGJhY2tncm91bmQ6IGB1cmwoJHtzZWxlY3RlZEltYWdlfSkgbm8tcmVwZWF0YCxcblx0XHRcdC8vIFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblx0XHRcdC8vIH19XG5cdFx0PlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9e3NlbGVjdGVkSW1hZ2V9XG5cdFx0XHRcdGFsdD1cIlRodW1ibmFpbCBpbWFnZVwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdG9wLVstNTAlXSB3LWZ1bGwgaC1bMjAwJV0gYmx1ci1sZ1wiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcGwtMiB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1teS13aGl0ZVwiPlxuXHRcdFx0XHRMYXRlc3QgVHJhaWxlcnNcblx0XHRcdDwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCB3LWZ1bGwgZ2FwLTIgcHgtMiBub1Njcm9sbFwiPlxuXHRcdFx0XHR7dmlkZXNJZHMubWFwKChpZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7aWR9L21xZGVmYXVsdC5qcGdgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTEyNVwiXG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEltYWdlKFxuXHRcdFx0XHRcdFx0XHRcdFx0YGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7aWR9L2hxZGVmYXVsdC5qcGdgLFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdC8vIDxZb3VUdWJlXG5cdFx0XHRcdFx0XHQvLyBcdHZpZGVvSWQ9e2lkfVxuXHRcdFx0XHRcdFx0Ly8gXHRvcHRzPXtvcHRzfVxuXHRcdFx0XHRcdFx0Ly8gXHRjbGFzc05hbWU9XCJwLTIgYmctYmxhY2sgcm91bmRlZC0zeGxcIlxuXHRcdFx0XHRcdFx0Ly8gLz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxlcnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRyYWlsZXJzIiwidmlkZXNJZHMiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsIm9wdHMiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwibWFwIiwiaWQiLCJvbk1vdXNlRW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Trailers.tsx\n"));

/***/ })

});