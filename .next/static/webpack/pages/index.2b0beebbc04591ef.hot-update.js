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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_react_youtube_dist_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/react-youtube/dist/YouTube */ \"./node_modules/react-youtube/dist/YouTube.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ \"./src/components/Modal.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Trailer = function(param) {\n    var id = param.id, setSelectedImage = param.setSelectedImage;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showVideo = ref[0], setShowVideo = ref[1];\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var imagePath = \"https://img.youtube.com/vi/\".concat(id, \"/mqdefault.jpg\");\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500), width = ref1[0], setWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300), height = ref2[0], setHeight = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"curren =\", containerRef.current);\n        if (containerRef.current) {\n            console.log(\"width =\", containerRef.current.clientWidth, \"height =\", containerRef.current.clientHeight);\n            setWidth(containerRef.current.clientWidth);\n            setHeight(containerRef.current.clientHeight);\n        }\n    }, [\n        containerRef\n    ]);\n    var opts = {\n        width: width,\n        height: height\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex-shrink-0 cursor-pointer hover:scale-110\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa-solid fa-play absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)] text-white text-[3rem]\",\n                onClick: function() {\n                    return setShowVideo(true);\n                }\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imagePath,\n                className: \"rounded-3xl\",\n                id: \"trailer-image\",\n                onMouseEnter: function() {\n                    return setSelectedImage(imagePath);\n                }\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: containerRef,\n                className: \"w-[500px] h-[300px] md:w-[600px] md:h-[400px] hidden\"\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                show: showVideo,\n                close: function() {\n                    return setShowVideo(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_react_youtube_dist_YouTube__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    videoId: id,\n                    opts: {\n                        width: width,\n                        height: height\n                    },\n                    className: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailer, \"vGcSqsRwjfbMkrBeyL1kYXnW8mA=\");\n_c = Trailer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailer);\nvar _c;\n$RefreshReg$(_c, \"Trailer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RyYWlsZXJzL1RyYWlsZXIudHN4P2E4YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBZb3VUdWJlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QteW91dHViZS9kaXN0L1lvdVR1YmVcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vTW9kYWxcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0aWQ6IHN0cmluZztcblx0c2V0U2VsZWN0ZWRJbWFnZTogKHBhdGg6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgVHJhaWxlcjogRkM8UHJvcHM+ID0gKHsgaWQsIHNldFNlbGVjdGVkSW1hZ2UgfSkgPT4ge1xuXHRjb25zdCBbc2hvd1ZpZGVvLCBzZXRTaG93VmlkZW9dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8bnVsbCB8IEhUTUxEaXZFbGVtZW50PihudWxsKTtcblx0Y29uc3QgaW1hZ2VQYXRoID0gYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7aWR9L21xZGVmYXVsdC5qcGdgO1xuXHRjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDUwMCk7XG5cdGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgzMDApO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJjdXJyZW4gPVwiLCBjb250YWluZXJSZWYuY3VycmVudCk7XG5cdFx0aWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XCJ3aWR0aCA9XCIsXG5cdFx0XHRcdGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoLFxuXHRcdFx0XHRcImhlaWdodCA9XCIsXG5cdFx0XHRcdGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCxcblx0XHRcdCk7XG5cdFx0XHRzZXRXaWR0aChjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aCk7XG5cdFx0XHRzZXRIZWlnaHQoY29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcblx0XHR9XG5cdH0sIFtjb250YWluZXJSZWZdKTtcblxuXHRjb25zdCBvcHRzID0ge1xuXHRcdHdpZHRoOiB3aWR0aCxcblx0XHRoZWlnaHQ6IGhlaWdodCxcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC1zaHJpbmstMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTBcIj5cblx0XHRcdDxpXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsYXkgYWJzb2x1dGUgdG9wLVtjYWxjKDUwJS0xcmVtKV0gbGVmdC1bY2FsYyg1MCUtMXJlbSldIHRleHQtd2hpdGUgdGV4dC1bM3JlbV1cIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRTaG93VmlkZW8odHJ1ZSl9XG5cdFx0XHQ+PC9pPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9e2ltYWdlUGF0aH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC0zeGxcIlxuXHRcdFx0XHRpZD1cInRyYWlsZXItaW1hZ2VcIlxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2VQYXRoKX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHJlZj17Y29udGFpbmVyUmVmfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJ3LVs1MDBweF0gaC1bMzAwcHhdIG1kOnctWzYwMHB4XSBtZDpoLVs0MDBweF0gaGlkZGVuXCJcblx0XHRcdD48L2Rpdj5cblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VmlkZW99IGNsb3NlPXsoKSA9PiBzZXRTaG93VmlkZW8oZmFsc2UpfT5cblx0XHRcdFx0PFlvdVR1YmVcblx0XHRcdFx0XHR2aWRlb0lkPXtpZH1cblx0XHRcdFx0XHRvcHRzPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWlsZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIllvdVR1YmUiLCJNb2RhbCIsIlRyYWlsZXIiLCJpZCIsInNldFNlbGVjdGVkSW1hZ2UiLCJzaG93VmlkZW8iLCJzZXRTaG93VmlkZW8iLCJjb250YWluZXJSZWYiLCJpbWFnZVBhdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIm9wdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpIiwib25DbGljayIsImltZyIsInNyYyIsIm9uTW91c2VFbnRlciIsInJlZiIsInNob3ciLCJjbG9zZSIsInZpZGVvSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/trailers/Trailer.tsx\n"));

/***/ })

});