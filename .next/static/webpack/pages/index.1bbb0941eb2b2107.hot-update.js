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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_RecentlyOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/RecentlyOut */ \"./src/components/RecentlyOut.tsx\");\n/* harmony import */ var _src_components_trailers_Trailers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/trailers/Trailers */ \"./src/components/trailers/Trailers.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Movies = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]), videosIds = ref[0], setVideosIds = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            poster: \"\",\n            info: {\n                title: \"\",\n                date: \"\",\n                genre: [\n                    \"\"\n                ]\n            },\n            rating: 0\n        }, \n    ]), Items = ref1[0], setItems = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"data =\", data);\n        var vidIds = data.map(function(v) {\n            // console.log(v.attributes.updatedAt);\n            return v.attributes.youtubeVideoId;\n        });\n        var Itms = data.map(function(itm) {\n            var attr = itm.attributes;\n            var genres = [];\n            fetch(\"https://kitsu.io/api/edge/\" + itm.relationships.genres.links.related).then(function(r) {\n                return r.json();\n            }).then(function(gs) {\n                genres = gs.data.map(function(g) {\n                    return g.attributes.name;\n                });\n                console.log(genres);\n            });\n            // .catch((e) => console.log(e));\n            console.log(\"genres =\", genres);\n            return {\n                poster: attr.original,\n                info: {\n                    title: attr.titles.en,\n                    date: attr.startDate,\n                    genre: genres\n                },\n                rating: attr.averageRating\n            };\n        });\n        setVideosIds(vidIds);\n        setItems(Itms);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_trailers_Trailers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                videosIds: videosIds\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_RecentlyOut__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: Items\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, _this);\n};\n_s(Movies, \"ibl7OlMpcxw2UHmo+yOiJm69DjQ=\");\n_c = Movies;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsTUFBTTs7QUFtRVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVjZW50bHlPdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1JlY2VudGx5T3V0XCI7XG5pbXBvcnQgVHJhaWxlcnMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3RyYWlsZXJzL1RyYWlsZXJzXCI7XG5cbmNvbnN0IE1vdmllcyA9ICh7IGRhdGEgfSkgPT4ge1xuXHRjb25zdCBbdmlkZW9zSWRzLCBzZXRWaWRlb3NJZHNdID0gdXNlU3RhdGUoW1wiXCJdKTtcblx0Y29uc3QgW0l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXG5cdFx0eyBwb3N0ZXI6IFwiXCIsIGluZm86IHsgdGl0bGU6IFwiXCIsIGRhdGU6IFwiXCIsIGdlbnJlOiBbXCJcIl0gfSwgcmF0aW5nOiAwIH0sXG5cdF0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJkYXRhID1cIiwgZGF0YSk7XG5cblx0XHRjb25zdCB2aWRJZHMgPSBkYXRhLm1hcCgodikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2codi5hdHRyaWJ1dGVzLnVwZGF0ZWRBdCk7XG5cdFx0XHRyZXR1cm4gdi5hdHRyaWJ1dGVzLnlvdXR1YmVWaWRlb0lkO1xuXHRcdH0pO1xuXHRcdGNvbnN0IEl0bXMgPSBkYXRhLm1hcCgoaXRtKSA9PiB7XG5cdFx0XHRjb25zdCBhdHRyID0gaXRtLmF0dHJpYnV0ZXM7XG5cdFx0XHRsZXQgZ2VucmVzID0gW107XG5cdFx0XHRmZXRjaChcblx0XHRcdFx0XCJodHRwczovL2tpdHN1LmlvL2FwaS9lZGdlL1wiICtcblx0XHRcdFx0XHRpdG0ucmVsYXRpb25zaGlwcy5nZW5yZXMubGlua3MucmVsYXRlZCxcblx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHIpID0+IHIuanNvbigpKVxuXHRcdFx0XHQudGhlbigoZ3MpID0+IHtcblx0XHRcdFx0XHRnZW5yZXMgPSBncy5kYXRhLm1hcCgoZykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGcuYXR0cmlidXRlcy5uYW1lO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGdlbnJlcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly8gLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImdlbnJlcyA9XCIsIGdlbnJlcyk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBvc3RlcjogYXR0ci5vcmlnaW5hbCxcblx0XHRcdFx0aW5mbzoge1xuXHRcdFx0XHRcdHRpdGxlOiBhdHRyLnRpdGxlcy5lbixcblx0XHRcdFx0XHRkYXRlOiBhdHRyLnN0YXJ0RGF0ZSxcblx0XHRcdFx0XHRnZW5yZTogZ2VucmVzLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRyYXRpbmc6IGF0dHIuYXZlcmFnZVJhdGluZyxcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRzZXRWaWRlb3NJZHModmlkSWRzKTtcblx0XHRzZXRJdGVtcyhJdG1zKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG5cdFx0XHQ8VHJhaWxlcnMgdmlkZW9zSWRzPXt2aWRlb3NJZHN9IC8+XG5cdFx0XHQ8UmVjZW50bHlPdXQgZGF0YT17SXRlbXN9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuXHRsZXQgdXJsID0gbmV3IFVSTChcImh0dHBzOi8va2l0c3UuaW8vYXBpL2VkZ2UvdHJlbmRpbmcvYW5pbWVcIik7XG5cblx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoXCJzb3J0XCIsIFwidXBkYXRlZEF0XCIpO1xuXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybC5ocmVmKTtcblx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdGNvbnNvbGUubG9nKGRhdGFbMF0uYXR0cmlidXRlcyk7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgZGF0YTogZGF0YSB9LFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlY2VudGx5T3V0IiwiVHJhaWxlcnMiLCJNb3ZpZXMiLCJkYXRhIiwidmlkZW9zSWRzIiwic2V0VmlkZW9zSWRzIiwicG9zdGVyIiwiaW5mbyIsInRpdGxlIiwiZGF0ZSIsImdlbnJlIiwicmF0aW5nIiwiSXRlbXMiLCJzZXRJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJ2aWRJZHMiLCJtYXAiLCJ2IiwiYXR0cmlidXRlcyIsInlvdXR1YmVWaWRlb0lkIiwiSXRtcyIsIml0bSIsImF0dHIiLCJnZW5yZXMiLCJmZXRjaCIsInJlbGF0aW9uc2hpcHMiLCJsaW5rcyIsInJlbGF0ZWQiLCJ0aGVuIiwiciIsImpzb24iLCJncyIsImciLCJuYW1lIiwib3JpZ2luYWwiLCJ0aXRsZXMiLCJlbiIsInN0YXJ0RGF0ZSIsImF2ZXJhZ2VSYXRpbmciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./src/components/Item.tsx":
/*!*********************************!*\
  !*** ./src/components/Item.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Item = Movie, Serie or Anime\nvar _this = undefined;\n\n\nvar Item = function(param) {\n    var poster = param.poster, info = param.info, rating = param.rating;\n    var backgroundStyle = {\n        background: \"url(\".concat(poster, \") no-repeat\"),\n        backgroundSize: \"12rem 17rem\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[12rem] h-[17rem] rounded-xl relative flex flex-col justify-end shadow-xl hover:shadow-2xl\",\n        style: backgroundStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-full bg-my-yellow w-[2.5rem] h-[2.5rem] flex flex-col items-center drop-shadow- justify-center absolute left-[40%] top-[-1rem] shadow-[inset_-1px_2px_5px_#000000]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold\",\n                    children: rating\n                }, void 0, false, {\n                    fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-2 pt-0 bg-gradient-to-t from-black rounded-b-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-bold text-white\",\n                        children: info.title\n                    }, void 0, false, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[1.5fr_1fr]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-bold text-white\",\n                                children: info.date\n                            }, void 0, false, {\n                                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2\",\n                                children: info.genre.map(function(g) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"inline-block text-xs pr-[2px] text-white\",\n                                        children: g\n                                    }, g, false, {\n                                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 9\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/Item.tsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, _this);\n};\n_c = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUErQjtBQUUvQjs7QUFBaUM7QUFZakMsSUFBTUMsSUFBSSxHQUFhLGdCQUE0QjtRQUExQkMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxNQUFNLFNBQU5BLE1BQU07SUFFNUMsSUFBTUMsZUFBZSxHQUFHO1FBQ3ZCQyxVQUFVLEVBQUUsTUFBSyxDQUFTLE1BQVcsQ0FBbEJKLE1BQU0sRUFBQyxhQUFXLENBQUM7UUFDdENLLGNBQWMsRUFBRSxhQUFhO0tBQzdCO0lBRUQscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFHLDhGQUE0RjtRQUFHQyxLQUFLLEVBQUVMLGVBQWU7OzBCQUNySSw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRLQUE0SzswQkFDMUwsNEVBQUNFLEdBQUM7b0JBQUNGLFNBQVMsRUFBQyxXQUFXOzhCQUFFTCxNQUFNOzs7Ozt5QkFBSzs7Ozs7cUJBQ2hDOzBCQUVOLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbURBQW1EOztrQ0FDakUsOERBQUNHLElBQUU7d0JBQUNILFNBQVMsRUFBQyxzQkFBc0I7a0NBQUVOLElBQUksQ0FBQ1UsS0FBSzs7Ozs7NkJBQU07a0NBQ3RELDhEQUFDTCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzswQ0FDMUMsOERBQUNLLElBQUU7Z0NBQUNMLFNBQVMsRUFBQyxzQkFBc0I7MENBQUVOLElBQUksQ0FBQ1ksSUFBSTs7Ozs7cUNBQU07MENBQ3JELDhEQUFDUCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzBDQUMvQk4sSUFBSSxDQUFDYSxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQyxFQUFJO29DQUNwQixxQkFDQyw4REFBQ0osSUFBRTt3Q0FBU0wsU0FBUyxFQUFDLDBDQUEwQztrREFBRVMsQ0FBQzt1Q0FBMURBLENBQUM7Ozs7NkNBQStELENBQ3pFO2lDQUNELENBQUM7Ozs7O3FDQUNHOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRDs7Ozs7O2FBQ0QsQ0FDTjtDQUNEO0FBNUJLakIsS0FBQUEsSUFBSTtBQThCViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JdGVtLnRzeD9lNWZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEl0ZW0gPSBNb3ZpZSwgU2VyaWUgb3IgQW5pbWVcblxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdHBvc3Rlcjogc3RyaW5nLFxuXHRpbmZvOiB7XG5cdFx0dGl0bGU6IHN0cmluZyxcblx0XHRkYXRlOiBzdHJpbmcsXG5cdFx0Z2VucmU6IHN0cmluZ1tdLFxuXHR9LFxuXHRyYXRpbmc6IG51bWJlcixcbn1cblxuY29uc3QgSXRlbTpGQzxQcm9wcz4gPSAoe3Bvc3RlciwgaW5mbywgcmF0aW5nfSkgPT4ge1xuXG5cdGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcblx0XHRiYWNrZ3JvdW5kOiBgdXJsKCR7cG9zdGVyfSkgbm8tcmVwZWF0YCxcblx0XHRiYWNrZ3JvdW5kU2l6ZTogXCIxMnJlbSAxN3JlbVwiXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgdy1bMTJyZW1dIGgtWzE3cmVtXSByb3VuZGVkLXhsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgc2hhZG93LXhsIGhvdmVyOnNoYWRvdy0yeGxgfSBzdHlsZT17YmFja2dyb3VuZFN0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLW15LXllbGxvdyB3LVsyLjVyZW1dIGgtWzIuNXJlbV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZHJvcC1zaGFkb3ctIGp1c3RpZnktY2VudGVyIGFic29sdXRlIGxlZnQtWzQwJV0gdG9wLVstMXJlbV0gc2hhZG93LVtpbnNldF8tMXB4XzJweF81cHhfIzAwMDAwMF1cIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3JhdGluZ308L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsvKiBJbmZvICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLTIgcHQtMCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2sgcm91bmRlZC1iLXhsXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPntpbmZvLnRpdGxlfTwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtWzEuNWZyXzFmcl1cIj5cblx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGVcIj57aW5mby5kYXRlfTwvaDQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XG5cdFx0XHRcdFx0XHR7aW5mby5nZW5yZS5tYXAoZyA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGtleT17Z30gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQteHMgcHItWzJweF0gdGV4dC13aGl0ZVwiPntnfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkl0ZW0iLCJwb3N0ZXIiLCJpbmZvIiwicmF0aW5nIiwiYmFja2dyb3VuZFN0eWxlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwIiwiaDMiLCJ0aXRsZSIsImg0IiwiZGF0ZSIsImdlbnJlIiwibWFwIiwiZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Item.tsx\n"));

/***/ }),

/***/ "./src/components/RecentlyOut.tsx":
/*!****************************************!*\
  !*** ./src/components/RecentlyOut.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./src/components/Item.tsx\");\nvar _this = undefined;\n\n\n\nvar RecentlyOut = function(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-w\",\n        children: data.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                poster: item.poster,\n                info: item.info,\n                rating: item.rating\n            }, void 0, false, {\n                fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/RecentlyOut.tsx\",\n                lineNumber: 23,\n                columnNumber: 6\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/src/components/RecentlyOut.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, _this);\n};\n_c = RecentlyOut;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentlyOut);\nvar _c;\n$RefreshReg$(_c, \"RecentlyOut\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNlbnRseU91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWtDO0FBQ1I7QUFnQjFCLElBQU1FLFdBQVcsR0FBYyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDckMscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFlBQVk7a0JBQ3pCRixJQUFJLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7WUFDbkIscUJBQ0MsOERBQUNOLDZDQUFJO2dCQUNKTyxNQUFNLEVBQUVELElBQUksQ0FBQ0MsTUFBTTtnQkFDbkJDLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUFJO2dCQUNmQyxNQUFNLEVBQUVILElBQUksQ0FBQ0csTUFBTTs7Ozs7cUJBQ2xCLENBQ0Q7U0FDRixDQUFDOzs7OzthQUNHLENBQ0w7Q0FDRjtBQWRLUixLQUFBQSxXQUFXO0FBZ0JqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY2VudGx5T3V0LnRzeD9lNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRkYXRhOiBbXG5cdFx0e1xuXHRcdFx0cG9zdGVyOiBzdHJpbmc7XG5cdFx0XHRpbmZvOiB7XG5cdFx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRcdGRhdGU6IHN0cmluZztcblx0XHRcdFx0Z2VucmU6IHN0cmluZ1tdO1xuXHRcdFx0fTtcblx0XHRcdHJhdGluZzogbnVtYmVyO1xuXHRcdH0sXG5cdF07XG59XG5cbmNvbnN0IFJlY2VudGx5T3V0OiBGQzxQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXdcIj5cblx0XHRcdHtkYXRhLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxJdGVtXG5cdFx0XHRcdFx0XHRwb3N0ZXI9e2l0ZW0ucG9zdGVyfVxuXHRcdFx0XHRcdFx0aW5mbz17aXRlbS5pbmZvfVxuXHRcdFx0XHRcdFx0cmF0aW5nPXtpdGVtLnJhdGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNlbnRseU91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkl0ZW0iLCJSZWNlbnRseU91dCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwicG9zdGVyIiwiaW5mbyIsInJhdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RecentlyOut.tsx\n"));

/***/ })

});