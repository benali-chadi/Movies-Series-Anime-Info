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

/***/ "./src/components/trailers/Trailer.tsx":
/*!*********************************************!*\
  !*** ./src/components/trailers/Trailer.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_react_youtube_dist_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/react-youtube/dist/YouTube */ \"./node_modules/react-youtube/dist/YouTube.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ \"./src/components/Modal.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Trailer = function(param) {\n    var id = param.id, setSelectedImage = param.setSelectedImage;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showVideo = ref[0], setShowVideo = ref[1];\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var imagePath = \"https://img.youtube.com/vi/\".concat(id, \"/mqdefault.jpg\");\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500), width = ref1[0], setWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300), height = ref2[0], setHeight = ref2[1];\n    // useEffect(() => {\n    // \tconsole.log(\"current =\", containerRef.current);\n    // \tif (containerRef.current) {\n    // \t\tconsole.log(\n    // \t\t\t\"width =\",\n    // \t\t\tcontainerRef.current.clientWidth,\n    // \t\t\t\"height =\",\n    // \t\t\tcontainerRef.current.clientHeight,\n    // \t\t);\n    // \t\tsetWidth(containerRef.current.clientWidth);\n    // \t\tsetHeight(containerRef.current.clientHeight);\n    // \t}\n    // }, [containerRef]);\n    var setWidthAndHeight = function(current) {\n        setWidth(current.clientWidth);\n        setHeight(current.clientHeight);\n    };\n    var opts = {\n        width: width,\n        height: height\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex-shrink-0 cursor-pointer hover:scale-110\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa-solid fa-play absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)] text-white text-[3rem]\",\n                onClick: function() {\n                    return setShowVideo(true);\n                }\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imagePath,\n                className: \"rounded-3xl\",\n                id: \"trailer-image\",\n                onMouseEnter: function() {\n                    return setSelectedImage(imagePath);\n                }\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                show: showVideo,\n                close: function() {\n                    return setShowVideo(false);\n                },\n                myRef: containerRef,\n                setWidthAndHeight: setWidthAndHeight,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_react_youtube_dist_YouTube__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    videoId: id,\n                    opts: {\n                        width: width,\n                        height: height\n                    },\n                    className: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 53,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailer, \"sgkQ4Gv5JIakVOkpmPeBuv85qHY=\");\n_c = Trailer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailer);\nvar _c;\n$RefreshReg$(_c, \"Trailer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90cmFpbGVycy9UcmFpbGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUErRDtBQUNRO0FBQzFDO0FBTzdCLElBQU1LLE9BQU8sR0FBYyxnQkFBOEI7UUFBM0JDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQjs7SUFDakQsSUFBa0NMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNNLFNBQVMsR0FBa0JOLEdBQWUsR0FBakMsRUFBRU8sWUFBWSxHQUFJUCxHQUFlLEdBQW5CO0lBQzlCLElBQU1RLFlBQVksR0FBR1QsNkNBQU0sQ0FBd0IsSUFBSSxDQUFDO0lBQ3hELElBQU1VLFNBQVMsR0FBRyw2QkFBNEIsQ0FBSyxNQUFjLENBQWpCTCxFQUFFLEVBQUMsZ0JBQWMsQ0FBQztJQUNsRSxJQUEwQkosSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFoQ1UsS0FBSyxHQUFjVixJQUFhLEdBQTNCLEVBQUVXLFFBQVEsR0FBSVgsSUFBYSxHQUFqQjtJQUN0QixJQUE0QkEsSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFsQ1ksTUFBTSxHQUFlWixJQUFhLEdBQTVCLEVBQUVhLFNBQVMsR0FBSWIsSUFBYSxHQUFqQjtJQUV4QixvQkFBb0I7SUFDcEIsbURBQW1EO0lBQ25ELCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLE9BQU87SUFDUCxnREFBZ0Q7SUFDaEQsa0RBQWtEO0lBQ2xELEtBQUs7SUFDTCxzQkFBc0I7SUFFdEIsSUFBTWMsaUJBQWlCLEdBQUcsU0FBQ0MsT0FBTyxFQUFLO1FBQ3RDSixRQUFRLENBQUNJLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDLENBQUM7UUFDOUJILFNBQVMsQ0FBQ0UsT0FBTyxDQUFDRSxZQUFZLENBQUMsQ0FBQztLQUNoQztJQUVELElBQU1DLElBQUksR0FBRztRQUNaUixLQUFLLEVBQUVBLEtBQUs7UUFDWkUsTUFBTSxFQUFFQSxNQUFNO0tBQ2Q7SUFFRCxxQkFDQyw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsdURBQXVEOzswQkFDckUsOERBQUNDLEdBQUM7Z0JBQ0RELFNBQVMsRUFBQyw2RkFBNkY7Z0JBQ3ZHRSxPQUFPLEVBQUU7MkJBQU1mLFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQUE7Ozs7O3FCQUM3QjswQkFDTCw4REFBQ2dCLEtBQUc7Z0JBQ0hDLEdBQUcsRUFBRWYsU0FBUztnQkFDZFcsU0FBUyxFQUFDLGFBQWE7Z0JBQ3ZCaEIsRUFBRSxFQUFDLGVBQWU7Z0JBQ2xCcUIsWUFBWSxFQUFFOzJCQUFNcEIsZ0JBQWdCLENBQUNJLFNBQVMsQ0FBQztpQkFBQTs7Ozs7cUJBQzlDOzBCQUNGLDhEQUFDUCw4Q0FBSztnQkFDTHdCLElBQUksRUFBRXBCLFNBQVM7Z0JBQ2ZxQixLQUFLLEVBQUU7MkJBQU1wQixZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUFBO2dCQUNoQ3FCLEtBQUssRUFBRXBCLFlBQVk7Z0JBQ25CTSxpQkFBaUIsRUFBRUEsaUJBQWlCOzBCQUVwQyw0RUFBQ2IsZ0ZBQU87b0JBQ1A0QixPQUFPLEVBQUV6QixFQUFFO29CQUNYYyxJQUFJLEVBQUU7d0JBQUVSLEtBQUssRUFBRUEsS0FBSzt3QkFBRUUsTUFBTSxFQUFFQSxNQUFNO3FCQUFFO29CQUN0Q1EsU0FBUyxFQUFDLEVBQUU7Ozs7O3lCQUNYOzs7OztxQkFDSzs7Ozs7O2FBQ0gsQ0FDTDtDQUNGO0dBekRLakIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBMkRiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJhaWxlcnMvVHJhaWxlci50c3g/YThiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC15b3V0dWJlL2Rpc3QvWW91VHViZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRpZDogc3RyaW5nO1xuXHRzZXRTZWxlY3RlZEltYWdlOiAocGF0aDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBUcmFpbGVyOiBGQzxQcm9wcz4gPSAoeyBpZCwgc2V0U2VsZWN0ZWRJbWFnZSB9KSA9PiB7XG5cdGNvbnN0IFtzaG93VmlkZW8sIHNldFNob3dWaWRlb10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCBpbWFnZVBhdGggPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtpZH0vbXFkZWZhdWx0LmpwZ2A7XG5cdGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoNTAwKTtcblx0Y29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDMwMCk7XG5cblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZyhcImN1cnJlbnQgPVwiLCBjb250YWluZXJSZWYuY3VycmVudCk7XG5cdC8vIFx0aWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG5cdC8vIFx0XHRjb25zb2xlLmxvZyhcblx0Ly8gXHRcdFx0XCJ3aWR0aCA9XCIsXG5cdC8vIFx0XHRcdGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoLFxuXHQvLyBcdFx0XHRcImhlaWdodCA9XCIsXG5cdC8vIFx0XHRcdGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRzZXRXaWR0aChjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aCk7XG5cdC8vIFx0XHRzZXRIZWlnaHQoY29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcblx0Ly8gXHR9XG5cdC8vIH0sIFtjb250YWluZXJSZWZdKTtcblxuXHRjb25zdCBzZXRXaWR0aEFuZEhlaWdodCA9IChjdXJyZW50KSA9PiB7XG5cdFx0c2V0V2lkdGgoY3VycmVudC5jbGllbnRXaWR0aCk7XG5cdFx0c2V0SGVpZ2h0KGN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcblx0fTtcblxuXHRjb25zdCBvcHRzID0ge1xuXHRcdHdpZHRoOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGhlaWdodCxcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC1zaHJpbmstMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTBcIj5cblx0XHRcdDxpXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsYXkgYWJzb2x1dGUgdG9wLVtjYWxjKDUwJS0xcmVtKV0gbGVmdC1bY2FsYyg1MCUtMXJlbSldIHRleHQtd2hpdGUgdGV4dC1bM3JlbV1cIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRTaG93VmlkZW8odHJ1ZSl9XG5cdFx0XHQ+PC9pPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9e2ltYWdlUGF0aH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC0zeGxcIlxuXHRcdFx0XHRpZD1cInRyYWlsZXItaW1hZ2VcIlxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2VQYXRoKX1cblx0XHRcdC8+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17c2hvd1ZpZGVvfVxuXHRcdFx0XHRjbG9zZT17KCkgPT4gc2V0U2hvd1ZpZGVvKGZhbHNlKX1cblx0XHRcdFx0bXlSZWY9e2NvbnRhaW5lclJlZn1cblx0XHRcdFx0c2V0V2lkdGhBbmRIZWlnaHQ9e3NldFdpZHRoQW5kSGVpZ2h0fVxuXHRcdFx0PlxuXHRcdFx0XHQ8WW91VHViZVxuXHRcdFx0XHRcdHZpZGVvSWQ9e2lkfVxuXHRcdFx0XHRcdG9wdHM9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIlwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiWW91VHViZSIsIk1vZGFsIiwiVHJhaWxlciIsImlkIiwic2V0U2VsZWN0ZWRJbWFnZSIsInNob3dWaWRlbyIsInNldFNob3dWaWRlbyIsImNvbnRhaW5lclJlZiIsImltYWdlUGF0aCIsIndpZHRoIiwic2V0V2lkdGgiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJzZXRXaWR0aEFuZEhlaWdodCIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIm9wdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpIiwib25DbGljayIsImltZyIsInNyYyIsIm9uTW91c2VFbnRlciIsInNob3ciLCJjbG9zZSIsIm15UmVmIiwidmlkZW9JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/trailers/Trailer.tsx\n"));

/***/ })

});