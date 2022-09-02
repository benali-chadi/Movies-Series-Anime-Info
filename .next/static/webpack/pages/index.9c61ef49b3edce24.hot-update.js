/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/trailers/Trailer.tsx":
/*!*********************************************!*\
  !*** ./src/components/trailers/Trailer.tsx ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/components/trailers/Trailers.tsx":
/*!**********************************************!*\
  !*** ./src/components/trailers/Trailers.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Trailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trailer */ \"./src/components/trailers/Trailer.tsx\");\n/* harmony import */ var _Trailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Trailer__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Trailers = function(param) {\n    var videosIds = param.videosIds;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://img.youtube.com/vi/\".concat(videosIds[0], \"/mqdefault.jpg\")), selectedImage = ref[0], setSelectedImage = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative mx-4 overflow-hidden h-[20rem] flex flex-col gap-2 justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: selectedImage,\n                alt: \"Thumbnail image\",\n                className: \"absolute inset-0 top-[-50%] w-full h-[200%] blur-lg opacity-50\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailers.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"relative z-10 pl-2 text-4xl font-bold text-my-white\",\n                children: \"Latest Trailers\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailers.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10 flex w-full gap-4 p-2 noScroll\",\n                children: videosIds.map(function(id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Trailer__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        id: id,\n                        setSelectedImage: setSelectedImage\n                    }, id, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailers.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailers.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailers.tsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailers, \"XWWl0Ttm8wrv0lBn5sO4PF6j93o=\");\n_c = Trailers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailers);\nvar _c;\n$RefreshReg$(_c, \"Trailers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90cmFpbGVycy9UcmFpbGVycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBdUQ7QUFDdkI7QUFNaEMsSUFBTUcsUUFBUSxHQUFjLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTOztJQUN2QyxJQUEwQ0gsR0FFekMsR0FGeUNBLCtDQUFRLENBQ2pELDZCQUE0QixDQUFlLE1BQWMsQ0FBM0JHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxnQkFBYyxDQUFDLENBQzFELEVBRk1DLGFBQWEsR0FBc0JKLEdBRXpDLEdBRm1CLEVBQUVLLGdCQUFnQixHQUFJTCxHQUV6QyxHQUZxQztJQUl0QyxxQkFDQyw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsNEVBQTRFOzswQkFDMUYsOERBQUNDLEtBQUc7Z0JBQ0hDLEdBQUcsRUFBRUwsYUFBYTtnQkFDbEJNLEdBQUcsRUFBQyxpQkFBaUI7Z0JBQ3JCSCxTQUFTLEVBQUMsZ0VBQWdFOzs7OztxQkFDekU7MEJBQ0YsOERBQUNJLElBQUU7Z0JBQUNKLFNBQVMsRUFBQyxxREFBcUQ7MEJBQUMsaUJBRXBFOzs7OztxQkFBSzswQkFDTCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDhDQUE4QzswQkFDM0RKLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLEVBQUUsRUFBSztvQkFDdEIscUJBQ0MsOERBQUNaLGlEQUFPO3dCQUNQWSxFQUFFLEVBQUVBLEVBQUU7d0JBQ05SLGdCQUFnQixFQUFFQSxnQkFBZ0I7dUJBQzdCUSxFQUFFOzs7OzZCQUNOLENBQ0Q7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0c7Ozs7OzthQUNELENBQ0w7Q0FDRjtHQTVCS1gsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBOEJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJhaWxlcnMvVHJhaWxlcnMudHN4P2JlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhaWxlciBmcm9tIFwiLi9UcmFpbGVyXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdHZpZGVvc0lkczogc3RyaW5nW107XG59XG5cbmNvbnN0IFRyYWlsZXJzOiBGQzxQcm9wcz4gPSAoeyB2aWRlb3NJZHMgfSkgPT4ge1xuXHRjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZShcblx0XHRgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt2aWRlb3NJZHNbMF19L21xZGVmYXVsdC5qcGdgLFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC00IG92ZXJmbG93LWhpZGRlbiBoLVsyMHJlbV0gZmxleCBmbGV4LWNvbCBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9e3NlbGVjdGVkSW1hZ2V9XG5cdFx0XHRcdGFsdD1cIlRodW1ibmFpbCBpbWFnZVwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdG9wLVstNTAlXSB3LWZ1bGwgaC1bMjAwJV0gYmx1ci1sZyBvcGFjaXR5LTUwXCJcblx0XHRcdC8+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBwbC0yIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LW15LXdoaXRlXCI+XG5cdFx0XHRcdExhdGVzdCBUcmFpbGVyc1xuXHRcdFx0PC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4IHctZnVsbCBnYXAtNCBwLTIgbm9TY3JvbGxcIj5cblx0XHRcdFx0e3ZpZGVvc0lkcy5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxUcmFpbGVyXG5cdFx0XHRcdFx0XHRcdGlkPXtpZH1cblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRJbWFnZT17c2V0U2VsZWN0ZWRJbWFnZX1cblx0XHRcdFx0XHRcdFx0a2V5PXtpZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWlsZXJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUcmFpbGVyIiwiVHJhaWxlcnMiLCJ2aWRlb3NJZHMiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/trailers/Trailers.tsx\n"));

/***/ })

});