webpackHotUpdate_N_E("pages/projects/[slug]",{

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/puck3000/Sites/bfh/site/web/pages/projects/[slug].js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"projekt\\\" && slug.current == $slug][0]\\n    {\\n      title, \\n      \\\"atelierName\\\": atelier->title,\\n      \\\"referencepic\\\": referencepic,\\n      content,\\n      \\\"gallery\\\": gallery,\\n      \\\"slides\\\": gallery.slide[].pic\\n      \\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()(_client__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).image(source);\n}\n\nvar Project = function Project(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$atelierName = props.atelierName,\n      atelierName = _props$atelierName === void 0 ? 'Atelier fehlt' : _props$atelierName,\n      referencepic = props.referencepic,\n      _props$content = props.content,\n      content = _props$content === void 0 ? [] : _props$content,\n      gallery = props.gallery,\n      _props$slides = props.slides,\n      slides = _props$slides === void 0 ? [] : _props$slides;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", {\n      children: [\"Titel: \", title]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n      children: [\"Das Projekt \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"span\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 22\n      }, _this), \" ist Teil des Atelier \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"span\", {\n        children: atelierName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 64\n      }, _this), \".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), referencepic && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h3\", {\n        children: \"referencepic:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n        src: urlFor(referencepic).width(500).url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread({\n      blocks: content,\n      imageOptions: {\n        w: 320,\n        h: 240,\n        fit: 'max'\n      }\n    }, _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].config()), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), gallery && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h3\", {\n        children: \"Gallery:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this), slides.map(function (slide) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n          src: urlFor(slide).width(500).url()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 32\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Project;\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nProject.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzPzgxMmUiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJQcm9qZWN0IiwicHJvcHMiLCJ0aXRsZSIsImF0ZWxpZXJOYW1lIiwicmVmZXJlbmNlcGljIiwiY29udGVudCIsImdhbGxlcnkiLCJzbGlkZXMiLCJ3aWR0aCIsInVybCIsInciLCJoIiwiZml0IiwiY29uZmlnIiwibWFwIiwic2xpZGUiLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEscUJBUXJCQSxLQVJxQixDQUV2QkMsS0FGdUI7QUFBQSxNQUV2QkEsS0FGdUIsNkJBRWYsZUFGZTtBQUFBLDJCQVFyQkQsS0FScUIsQ0FHdkJFLFdBSHVCO0FBQUEsTUFHdkJBLFdBSHVCLG1DQUdULGVBSFM7QUFBQSxNQUl2QkMsWUFKdUIsR0FRckJILEtBUnFCLENBSXZCRyxZQUp1QjtBQUFBLHVCQVFyQkgsS0FScUIsQ0FLdkJJLE9BTHVCO0FBQUEsTUFLdkJBLE9BTHVCLCtCQUtiLEVBTGE7QUFBQSxNQU12QkMsT0FOdUIsR0FRckJMLEtBUnFCLENBTXZCSyxPQU51QjtBQUFBLHNCQVFyQkwsS0FScUIsQ0FPdkJNLE1BUHVCO0FBQUEsTUFPdkJBLE1BUHVCLDhCQU9kLEVBUGM7QUFVekIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDRCQUFZTCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw4Q0FBZTtBQUFBLGtCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZix5Q0FBeUQ7QUFBQSxrQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBSUlDLFlBQVksaUJBQ1Y7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFDRSxXQUFHLEVBQUVULE1BQU0sQ0FBQ1MsWUFBRCxDQUFOLENBQ0ZJLEtBREUsQ0FDSSxHQURKLEVBRUZDLEdBRkU7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTE4sZUFlRSxxRUFBQyxxRUFBRDtBQUNFLFlBQU0sRUFBRUosT0FEVjtBQUVFLGtCQUFZLEVBQUU7QUFBRUssU0FBQyxFQUFFLEdBQUw7QUFBVUMsU0FBQyxFQUFFLEdBQWI7QUFBa0JDLFdBQUcsRUFBRTtBQUF2QjtBQUZoQixPQUdNZCwrQ0FBTSxDQUFDZSxNQUFQLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLEVBb0JHUCxPQUFPLGlCQUNOO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHQyxNQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsNEJBQUk7QUFDbkIsYUFBRyxFQUFFcEIsTUFBTSxDQUFDb0IsS0FBRCxDQUFOLENBQ0ZQLEtBREUsQ0FDSSxHQURKLEVBRUZDLEdBRkU7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUEsT0FBaEIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0E1Q0Q7O0tBQU1ULE87QUE4Q04sSUFBTWdCLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBYUFqQixPQUFPLENBQUNrQixlQUFSO0FBQUEsOExBQTBCLGlCQUFlQyxPQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEI7QUFEc0Isa0NBRUFBLE9BQU8sQ0FBQ0gsS0FGUixDQUVkSSxJQUZjLEVBRWRBLElBRmMsb0NBRVAsRUFGTztBQUFBO0FBQUEsbUJBR1R0QiwrQ0FBTSxDQUFDdUIsS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJLGtCQUFJLEVBQUpBO0FBQUYsYUFBcEIsQ0FIUzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lcEIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnIFxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBQcm9qZWN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgXG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsIFxuICAgIGF0ZWxpZXJOYW1lID0gJ0F0ZWxpZXIgZmVobHQnLCBcbiAgICByZWZlcmVuY2VwaWMsXG4gICAgY29udGVudCA9IFtdLFxuICAgIGdhbGxlcnksXG4gICAgc2xpZGVzID0gW11cbiAgfSA9IHByb3BzXG4gICAgXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDI+VGl0ZWw6IHt0aXRsZX08L2gyPlxuICAgICAgPHA+RGFzIFByb2pla3QgPHNwYW4+e3RpdGxlfTwvc3Bhbj4gaXN0IFRlaWwgZGVzIEF0ZWxpZXIgPHNwYW4+e2F0ZWxpZXJOYW1lfTwvc3Bhbj4uPC9wPlxuICAgICAge1xuICAgICAgICByZWZlcmVuY2VwaWMgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPnJlZmVyZW5jZXBpYzo8L2gzPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHJlZmVyZW5jZXBpYylcbiAgICAgICAgICAgICAgLndpZHRoKDUwMClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgIGJsb2Nrcz17Y29udGVudH1cbiAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAvPlxuICAgICAge2dhbGxlcnkgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5HYWxsZXJ5OjwvaDM+XG4gICAgICAgICAge3NsaWRlcy5tYXAoc2xpZGUgPT4gPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3Ioc2xpZGUpXG4gICAgICAgICAgICAgIC53aWR0aCg1MDApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAvPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xIGAqW190eXBlID09IFwicHJvamVrdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF1cbiAgICB7XG4gICAgICB0aXRsZSwgXG4gICAgICBcImF0ZWxpZXJOYW1lXCI6IGF0ZWxpZXItPnRpdGxlLFxuICAgICAgXCJyZWZlcmVuY2VwaWNcIjogcmVmZXJlbmNlcGljLFxuICAgICAgY29udGVudCxcbiAgICAgIFwiZ2FsbGVyeVwiOiBnYWxsZXJ5LFxuICAgICAgXCJzbGlkZXNcIjogZ2FsbGVyeS5zbGlkZVtdLnBpY1xuICAgICAgXG4gICAgfVxuICBgXG5cblxuUHJvamVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

/***/ })

})