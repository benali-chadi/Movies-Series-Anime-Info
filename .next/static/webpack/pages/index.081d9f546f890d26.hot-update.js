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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_react_youtube_dist_YouTube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/react-youtube/dist/YouTube */ \"./node_modules/react-youtube/dist/YouTube.mjs\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ \"./src/components/Modal.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Trailer = function(param) {\n    var id = param.id, setSelectedImage = param.setSelectedImage;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showVideo = ref[0], setShowVideo = ref[1];\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var imagePath = \"https://img.youtube.com/vi/\".concat(id, \"/mqdefault.jpg\");\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500), width = ref1[0], setWidth = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300), height = ref2[0], setHeight = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"curren =\", containerRef.current);\n        if (containerRef.current) {\n            console.log(\"width =\", containerRef.current.clientWidth, \"height =\", containerRef.current.clientHeight);\n            setWidth(containerRef.current.clientWidth);\n            setHeight(containerRef.current.clientHeight);\n        }\n    }, [\n        containerRef\n    ]);\n    var opts = {\n        width: width,\n        height: height\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex-shrink-0 cursor-pointer hover:scale-110\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa-solid fa-play absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)] text-white text-[3rem]\",\n                onClick: function() {\n                    return setShowVideo(true);\n                }\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imagePath,\n                className: \"rounded-3xl\",\n                id: \"trailer-image\",\n                onMouseEnter: function() {\n                    return setSelectedImage(imagePath);\n                }\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                show: showVideo,\n                close: function() {\n                    return setShowVideo(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: containerRef,\n                    className: \"w-[500px] h-[300px] md:w-[600px] md:h-[400px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_node_modules_react_youtube_dist_YouTube__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        videoId: id,\n                        opts: opts,\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/trailers/Trailer.tsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, _this);\n};\n_s(Trailer, \"vGcSqsRwjfbMkrBeyL1kYXnW8mA=\");\n_c = Trailer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trailer);\nvar _c;\n$RefreshReg$(_c, \"Trailer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90cmFpbGVycy9UcmFpbGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUErRDtBQUNRO0FBQzFDO0FBTzdCLElBQU1NLE9BQU8sR0FBYyxnQkFBOEI7UUFBM0JDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQjs7SUFDakQsSUFBa0NMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNNLFNBQVMsR0FBa0JOLEdBQWUsR0FBakMsRUFBRU8sWUFBWSxHQUFJUCxHQUFlLEdBQW5CO0lBQzlCLElBQU1RLFlBQVksR0FBR1QsNkNBQU0sQ0FBd0IsSUFBSSxDQUFDO0lBQ3hELElBQU1VLFNBQVMsR0FBRyw2QkFBNEIsQ0FBSyxNQUFjLENBQWpCTCxFQUFFLEVBQUMsZ0JBQWMsQ0FBQztJQUNsRSxJQUEwQkosSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFoQ1UsS0FBSyxHQUFjVixJQUFhLEdBQTNCLEVBQUVXLFFBQVEsR0FBSVgsSUFBYSxHQUFqQjtJQUN0QixJQUE0QkEsSUFBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFsQ1ksTUFBTSxHQUFlWixJQUFhLEdBQTVCLEVBQUVhLFNBQVMsR0FBSWIsSUFBYSxHQUFqQjtJQUV4QkYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2ZnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVQLFlBQVksQ0FBQ1EsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSVIsWUFBWSxDQUFDUSxPQUFPLEVBQUU7WUFDekJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUNWLFNBQVMsRUFDVFAsWUFBWSxDQUFDUSxPQUFPLENBQUNDLFdBQVcsRUFDaEMsVUFBVSxFQUNWVCxZQUFZLENBQUNRLE9BQU8sQ0FBQ0UsWUFBWSxDQUNqQyxDQUFDO1lBQ0ZQLFFBQVEsQ0FBQ0gsWUFBWSxDQUFDUSxPQUFPLENBQUNDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDSixTQUFTLENBQUNMLFlBQVksQ0FBQ1EsT0FBTyxDQUFDRSxZQUFZLENBQUMsQ0FBQztTQUM3QztLQUNELEVBQUU7UUFBQ1YsWUFBWTtLQUFDLENBQUMsQ0FBQztJQUVuQixJQUFNVyxJQUFJLEdBQUc7UUFDWlQsS0FBSyxFQUFFQSxLQUFLO1FBQ1pFLE1BQU0sRUFBRUEsTUFBTTtLQUNkO0lBRUQscUJBQ0MsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVEQUF1RDs7MEJBQ3JFLDhEQUFDQyxHQUFDO2dCQUNERCxTQUFTLEVBQUMsNkZBQTZGO2dCQUN2R0UsT0FBTyxFQUFFOzJCQUFNaEIsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFBQTs7Ozs7cUJBQzdCOzBCQUNMLDhEQUFDaUIsS0FBRztnQkFDSEMsR0FBRyxFQUFFaEIsU0FBUztnQkFDZFksU0FBUyxFQUFDLGFBQWE7Z0JBQ3ZCakIsRUFBRSxFQUFDLGVBQWU7Z0JBQ2xCc0IsWUFBWSxFQUFFOzJCQUFNckIsZ0JBQWdCLENBQUNJLFNBQVMsQ0FBQztpQkFBQTs7Ozs7cUJBQzlDOzBCQUNGLDhEQUFDUCw4Q0FBSztnQkFBQ3lCLElBQUksRUFBRXJCLFNBQVM7Z0JBQUVzQixLQUFLLEVBQUU7MkJBQU1yQixZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUFBOzBCQUN2RCw0RUFBQ2EsS0FBRztvQkFDSFMsR0FBRyxFQUFFckIsWUFBWTtvQkFDakJhLFNBQVMsRUFBQywrQ0FBK0M7OEJBRXpELDRFQUFDcEIsZ0ZBQU87d0JBQUM2QixPQUFPLEVBQUUxQixFQUFFO3dCQUFFZSxJQUFJLEVBQUVBLElBQUk7d0JBQUVFLFNBQVMsRUFBQyxFQUFFOzs7Ozs2QkFBRzs7Ozs7eUJBQzVDOzs7OztxQkFDQzs7Ozs7O2FBQ0gsQ0FDTDtDQUNGO0dBaERLbEIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBa0RiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJhaWxlcnMvVHJhaWxlci50c3g/YThiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC15b3V0dWJlL2Rpc3QvWW91VHViZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRpZDogc3RyaW5nO1xuXHRzZXRTZWxlY3RlZEltYWdlOiAocGF0aDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jb25zdCBUcmFpbGVyOiBGQzxQcm9wcz4gPSAoeyBpZCwgc2V0U2VsZWN0ZWRJbWFnZSB9KSA9PiB7XG5cdGNvbnN0IFtzaG93VmlkZW8sIHNldFNob3dWaWRlb10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCBpbWFnZVBhdGggPSBgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHtpZH0vbXFkZWZhdWx0LmpwZ2A7XG5cdGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoNTAwKTtcblx0Y29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDMwMCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImN1cnJlbiA9XCIsIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcblx0XHRpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcIndpZHRoID1cIixcblx0XHRcdFx0Y29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdFwiaGVpZ2h0ID1cIixcblx0XHRcdFx0Y29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0LFxuXHRcdFx0KTtcblx0XHRcdHNldFdpZHRoKGNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdHNldEhlaWdodChjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpO1xuXHRcdH1cblx0fSwgW2NvbnRhaW5lclJlZl0pO1xuXG5cdGNvbnN0IG9wdHMgPSB7XG5cdFx0d2lkdGg6IHdpZHRoLFxuXHRcdGhlaWdodDogaGVpZ2h0LFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LXNocmluay0wIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMFwiPlxuXHRcdFx0PGlcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGxheSBhYnNvbHV0ZSB0b3AtW2NhbGMoNTAlLTFyZW0pXSBsZWZ0LVtjYWxjKDUwJS0xcmVtKV0gdGV4dC13aGl0ZSB0ZXh0LVszcmVtXVwiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFNob3dWaWRlbyh0cnVlKX1cblx0XHRcdD48L2k+XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHNyYz17aW1hZ2VQYXRofVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLTN4bFwiXG5cdFx0XHRcdGlkPVwidHJhaWxlci1pbWFnZVwiXG5cdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2VsZWN0ZWRJbWFnZShpbWFnZVBhdGgpfVxuXHRcdFx0Lz5cblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VmlkZW99IGNsb3NlPXsoKSA9PiBzZXRTaG93VmlkZW8oZmFsc2UpfT5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17Y29udGFpbmVyUmVmfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctWzUwMHB4XSBoLVszMDBweF0gbWQ6dy1bNjAwcHhdIG1kOmgtWzQwMHB4XVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8WW91VHViZSB2aWRlb0lkPXtpZH0gb3B0cz17b3B0c30gY2xhc3NOYW1lPVwiXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiWW91VHViZSIsIk1vZGFsIiwiVHJhaWxlciIsImlkIiwic2V0U2VsZWN0ZWRJbWFnZSIsInNob3dWaWRlbyIsInNldFNob3dWaWRlbyIsImNvbnRhaW5lclJlZiIsImltYWdlUGF0aCIsIndpZHRoIiwic2V0V2lkdGgiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwib3B0cyIsImRpdiIsImNsYXNzTmFtZSIsImkiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwib25Nb3VzZUVudGVyIiwic2hvdyIsImNsb3NlIiwicmVmIiwidmlkZW9JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/trailers/Trailer.tsx\n"));

/***/ })

});