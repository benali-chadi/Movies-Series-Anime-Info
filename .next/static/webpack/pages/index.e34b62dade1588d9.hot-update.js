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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Trailers = function(param) {\n    var videsIds = param.videsIds;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedImage = ref[0], setSelectedImage = ref[1];\n    var opts = {\n        width: 400,\n        height: 300\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-4 overflow-hidden\",\n        style: {\n            background: \"url(\".concat(selectedImage, \") no-repeat\"),\n            backgroundSize: \"100% 100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl font-bold text-my-yellow\",\n                children: \"Latest Trailers\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full gap-2 noScroll\",\n                children: videsIds.map(function(id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://img.youtube.com/vi/\".concat(id, \"/hqdefault.jpg\"),\n                        className: \"w-full\",\n                        onMouseEnter: function() {\n                            return setSelectedImage(\"https://img.youtube.com/vi/\".concat(id, \"/hqdefault.jpg\"));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Trailers.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailers, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Trailers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailers);\nvar _c;\n$RefreshReg$(_c, \"Trailers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFpbGVycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBTzVDLElBQU1FLFFBQVEsR0FBYyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUN0QyxJQUEwQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ0csYUFBYSxHQUFzQkgsR0FBWSxHQUFsQyxFQUFFSSxnQkFBZ0IsR0FBSUosR0FBWSxHQUFoQjtJQUV0QyxJQUFNSyxJQUFJLEdBQUc7UUFDWkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsTUFBTSxFQUFFLEdBQUc7S0FDWDtJQUVELHFCQUNDLDhEQUFDQyxLQUFHO1FBQ0hDLFNBQVMsRUFBQyxzQkFBc0I7UUFDaENDLEtBQUssRUFBRTtZQUNOQyxVQUFVLEVBQUUsTUFBSyxDQUFnQixNQUFXLENBQXpCUixhQUFhLEVBQUMsYUFBVyxDQUFDO1lBQzdDUyxjQUFjLEVBQUUsV0FBVztTQUMzQjs7MEJBRUQsOERBQUNDLElBQUU7Z0JBQUNKLFNBQVMsRUFBQyxtQ0FBbUM7MEJBQUMsaUJBRWxEOzs7OztxQkFBSzswQkFDTCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0QjswQkFDekNQLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLEVBQUUsRUFBSztvQkFDckIscUJBQ0MsOERBQUNDLEtBQUc7d0JBQ0hDLEdBQUcsRUFBRSw2QkFBNEIsQ0FBSyxNQUFjLENBQWpCRixFQUFFLEVBQUMsZ0JBQWMsQ0FBQzt3QkFDckROLFNBQVMsRUFBQyxRQUFRO3dCQUNsQlMsWUFBWSxFQUFFO21DQUNiZCxnQkFBZ0IsQ0FDZiw2QkFBNEIsQ0FBSyxNQUFjLENBQWpCVyxFQUFFLEVBQUMsZ0JBQWMsQ0FBQyxDQUNoRDt5QkFBQTs7Ozs7NkJBRUQsQ0FNRDtpQkFDRixDQUFDOzs7OztxQkFDRzs7Ozs7O2FBQ0QsQ0FDTDtDQUNGO0dBekNLZCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUEyQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UcmFpbGVycy50c3g/OWJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgWW91VHViZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXlvdXR1YmUvZGlzdC9Zb3VUdWJlXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdHZpZGVzSWRzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgVHJhaWxlcnM6IEZDPFByb3BzPiA9ICh7IHZpZGVzSWRzIH0pID0+IHtcblx0Y29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3Qgb3B0cyA9IHtcblx0XHR3aWR0aDogNDAwLFxuXHRcdGhlaWdodDogMzAwLFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwibXgtNCBvdmVyZmxvdy1oaWRkZW5cIlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0YmFja2dyb3VuZDogYHVybCgke3NlbGVjdGVkSW1hZ2V9KSBuby1yZXBlYXRgLFxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlIDEwMCVcIixcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LW15LXllbGxvd1wiPlxuXHRcdFx0XHRMYXRlc3QgVHJhaWxlcnNcblx0XHRcdDwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGdhcC0yIG5vU2Nyb2xsXCI+XG5cdFx0XHRcdHt2aWRlc0lkcy5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtpZH0vaHFkZWZhdWx0LmpwZ2B9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbFwiXG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEltYWdlKFxuXHRcdFx0XHRcdFx0XHRcdFx0YGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7aWR9L2hxZGVmYXVsdC5qcGdgLFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdC8vIDxZb3VUdWJlXG5cdFx0XHRcdFx0XHQvLyBcdHZpZGVvSWQ9e2lkfVxuXHRcdFx0XHRcdFx0Ly8gXHRvcHRzPXtvcHRzfVxuXHRcdFx0XHRcdFx0Ly8gXHRjbGFzc05hbWU9XCJwLTIgYmctYmxhY2sgcm91bmRlZC0zeGxcIlxuXHRcdFx0XHRcdFx0Ly8gLz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxlcnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRyYWlsZXJzIiwidmlkZXNJZHMiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsIm9wdHMiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiaDIiLCJtYXAiLCJpZCIsImltZyIsInNyYyIsIm9uTW91c2VFbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Trailers.tsx\n"));

/***/ })

});