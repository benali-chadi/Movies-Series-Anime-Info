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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_trailers_Trailers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/trailers/Trailers */ \"./src/components/trailers/Trailers.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar url = new URL(\"https://kitsu.io/api/edge/trending/anime\");\nvar Movies = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]), videosIds = ref[0], setVideosIds = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            poster: \"\",\n            info: {\n                title: \"\",\n                date: \"\",\n                genre: [\n                    \"\"\n                ]\n            },\n            rating: 0\n        }, \n    ]), Items = ref1[0], setItems = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"data =\", data);\n        var vidIds = data.map(function(v) {\n            // console.log(v.attributes.updatedAt);\n            return v.attributes.youtubeVideoId;\n        });\n        var Itms = data.map(function(itm) {\n            var attr = itm.attributes;\n            var genres = fetch(url.href + itm.relationships.genres.links.related).then(function(r) {\n                return r.json();\n            }).then(function(genres) {\n                return genres.map(function(genre) {\n                    return genre.attributes.name;\n                });\n            });\n            // .catch((e) => console.log(e));\n            console.log(\"genres =\", genres);\n            return {\n                poster: attr.original,\n                info: {\n                    title: attr.titles.en,\n                    date: attr.startDate,\n                    genre: genres\n                },\n                rating: attr.averageRating\n            };\n        });\n        setVideosIds(vidIds);\n        setItems(Itms);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_trailers_Trailers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            videosIds: videosIds\n        }, void 0, false, {\n            fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/pages/index.tsx\",\n            lineNumber: 52,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/chadi/coding/Web-Stuff/MyProjects/Movies Series Anime Info/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, _this);\n};\n_s(Movies, \"ibl7OlMpcxw2UHmo+yOiJm69DjQ=\");\n_c = Movies;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWNlbnRseU91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUmVjZW50bHlPdXRcIjtcbmltcG9ydCBUcmFpbGVycyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdHJhaWxlcnMvVHJhaWxlcnNcIjtcblxubGV0IHVybCA9IG5ldyBVUkwoXCJodHRwczovL2tpdHN1LmlvL2FwaS9lZGdlL3RyZW5kaW5nL2FuaW1lXCIpO1xuXG5jb25zdCBNb3ZpZXMgPSAoeyBkYXRhIH0pID0+IHtcblx0Y29uc3QgW3ZpZGVvc0lkcywgc2V0VmlkZW9zSWRzXSA9IHVzZVN0YXRlKFtcIlwiXSk7XG5cdGNvbnN0IFtJdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW1xuXHRcdHsgcG9zdGVyOiBcIlwiLCBpbmZvOiB7IHRpdGxlOiBcIlwiLCBkYXRlOiBcIlwiLCBnZW5yZTogW1wiXCJdIH0sIHJhdGluZzogMCB9LFxuXHRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiZGF0YSA9XCIsIGRhdGEpO1xuXG5cdFx0Y29uc3QgdmlkSWRzID0gZGF0YS5tYXAoKHYpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHYuYXR0cmlidXRlcy51cGRhdGVkQXQpO1xuXHRcdFx0cmV0dXJuIHYuYXR0cmlidXRlcy55b3V0dWJlVmlkZW9JZDtcblx0XHR9KTtcblx0XHRjb25zdCBJdG1zID0gZGF0YS5tYXAoKGl0bSkgPT4ge1xuXHRcdFx0Y29uc3QgYXR0ciA9IGl0bS5hdHRyaWJ1dGVzO1xuXHRcdFx0Y29uc3QgZ2VucmVzID0gZmV0Y2goXG5cdFx0XHRcdHVybC5ocmVmICsgaXRtLnJlbGF0aW9uc2hpcHMuZ2VucmVzLmxpbmtzLnJlbGF0ZWQsXG5cdFx0XHQpXG5cdFx0XHRcdC50aGVuKChyKSA9PiByLmpzb24oKSlcblx0XHRcdFx0LnRoZW4oKGdlbnJlcykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBnZW5yZXMubWFwKChnZW5yZSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGdlbnJlLmF0dHJpYnV0ZXMubmFtZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHQvLyAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJnZW5yZXMgPVwiLCBnZW5yZXMpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRwb3N0ZXI6IGF0dHIub3JpZ2luYWwsXG5cdFx0XHRcdGluZm86IHtcblx0XHRcdFx0XHR0aXRsZTogYXR0ci50aXRsZXMuZW4sXG5cdFx0XHRcdFx0ZGF0ZTogYXR0ci5zdGFydERhdGUsXG5cdFx0XHRcdFx0Z2VucmU6IGdlbnJlcyxcblx0XHRcdFx0fSxcblx0XHRcdFx0cmF0aW5nOiBhdHRyLmF2ZXJhZ2VSYXRpbmcsXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0c2V0VmlkZW9zSWRzKHZpZElkcyk7XG5cdFx0c2V0SXRlbXMoSXRtcyk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuXHRcdFx0PFRyYWlsZXJzIHZpZGVvc0lkcz17dmlkZW9zSWRzfSAvPlxuXHRcdFx0ey8qIDxSZWNlbnRseU91dCBkYXRhPXtJdGVtc30gLz4gKi99XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuXHR1cmwuc2VhcmNoUGFyYW1zLnNldChcInNvcnRcIiwgXCJ1cGRhdGVkQXRcIik7XG5cblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLmhyZWYpO1xuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblx0Y29uc29sZS5sb2coZGF0YVswXS5hdHRyaWJ1dGVzKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczogeyBkYXRhOiBkYXRhIH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJhaWxlcnMiLCJ1cmwiLCJVUkwiLCJNb3ZpZXMiLCJkYXRhIiwidmlkZW9zSWRzIiwic2V0VmlkZW9zSWRzIiwicG9zdGVyIiwiaW5mbyIsInRpdGxlIiwiZGF0ZSIsImdlbnJlIiwicmF0aW5nIiwiSXRlbXMiLCJzZXRJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJ2aWRJZHMiLCJtYXAiLCJ2IiwiYXR0cmlidXRlcyIsInlvdXR1YmVWaWRlb0lkIiwiSXRtcyIsIml0bSIsImF0dHIiLCJnZW5yZXMiLCJmZXRjaCIsImhyZWYiLCJyZWxhdGlvbnNoaXBzIiwibGlua3MiLCJyZWxhdGVkIiwidGhlbiIsInIiLCJqc29uIiwibmFtZSIsIm9yaWdpbmFsIiwidGl0bGVzIiwiZW4iLCJzdGFydERhdGUiLCJhdmVyYWdlUmF0aW5nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});