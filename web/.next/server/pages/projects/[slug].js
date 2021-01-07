module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: 'i59olcvl',\n  // you can find this in sanity.json\n  dataset: 'dev',\n  // or the name you chose in step 1\n  useCdn: true // `false` if you want to ensure fresh data\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQuanM/Y2MyNSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxvSEFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsS0FGaUI7QUFFVjtBQUNoQkMsUUFBTSxFQUFFLElBSGtCLENBR2I7O0FBSGEsQ0FBRCxDQUEzQiIsImZpbGUiOiIuL2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogJ2k1OW9sY3ZsJywgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cbiAgZGF0YXNldDogJ2RldicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/projects/[slug].js":
/*!**********************************!*\
  !*** ./pages/projects/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\nvar _jsxFileName = \"/home/puck3000/Sites/bfh/site/web/pages/projects/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\n\nconst Project = props => {\n  const {\n    title = 'Missing title',\n    atelierName = 'Atelier fehlt',\n    referencepic,\n    content = [],\n    gallery,\n    slides = []\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: [\"Titel: \", title]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Das Projekt \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 22\n      }, undefined), \" ist Teil des Atelier \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: atelierName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 64\n      }, undefined), \".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), referencepic && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"referencepic:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: urlFor(referencepic).width(500).url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread({\n      blocks: content,\n      imageOptions: {\n        w: 320,\n        h: 240,\n        fit: 'max'\n      }\n    }, _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config()), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined), gallery && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"Gallery:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, undefined), slides.map(slide => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: urlFor(slide).width(500).url()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 53\n        }, undefined)\n      }, slide._ref, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 32\n      }, undefined))]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst query = groq__WEBPACK_IMPORTED_MODULE_1___default.a`*[_type == \"projekt\" && slug.current == $slug][0]\n    {\n      title, \n      \"atelierName\": atelier->title,\n      \"referencepic\": referencepic,\n      content,\n      \"gallery\": gallery,\n      \"slides\": gallery.slide[].pic\n      \n    }\n  `;\n\nProject.getInitialProps = async function (context) {\n  // It's important to default the slug so that it doesn't return \"undefined\"\n  const {\n    slug = \"\"\n  } = context.query;\n  return await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanM/ODEyZSJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlByb2plY3QiLCJwcm9wcyIsInRpdGxlIiwiYXRlbGllck5hbWUiLCJyZWZlcmVuY2VwaWMiLCJjb250ZW50IiwiZ2FsbGVyeSIsInNsaWRlcyIsIndpZHRoIiwidXJsIiwidyIsImgiLCJmaXQiLCJjb25maWciLCJtYXAiLCJzbGlkZSIsIl9yZWYiLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxNQUFNSSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUN6QixRQUFNO0FBQ0pDLFNBQUssR0FBRyxlQURKO0FBRUpDLGVBQVcsR0FBRyxlQUZWO0FBR0pDLGdCQUhJO0FBSUpDLFdBQU8sR0FBRyxFQUpOO0FBS0pDLFdBTEk7QUFNSkMsVUFBTSxHQUFHO0FBTkwsTUFPRk4sS0FQSjtBQVNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw0QkFBWUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhDQUFlO0FBQUEsa0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZix5Q0FBeUQ7QUFBQSxrQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFJSUMsWUFBWSxpQkFDVjtBQUFBLDhCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFDRSxXQUFHLEVBQUVULE1BQU0sQ0FBQ1MsWUFBRCxDQUFOLENBQ0ZJLEtBREUsQ0FDSSxHQURKLEVBRUZDLEdBRkU7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMTixlQWVFLHFFQUFDLHFFQUFEO0FBQ0UsWUFBTSxFQUFFSixPQURWO0FBRUUsa0JBQVksRUFBRTtBQUFFSyxTQUFDLEVBQUUsR0FBTDtBQUFVQyxTQUFDLEVBQUUsR0FBYjtBQUFrQkMsV0FBRyxFQUFFO0FBQXZCO0FBRmhCLE9BR01kLCtDQUFNLENBQUNlLE1BQVAsRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGLEVBb0JHUCxPQUFPLGlCQUNOO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR0MsTUFBTSxDQUFDTyxHQUFQLENBQVdDLEtBQUssaUJBQUk7QUFBQSwrQkFBcUI7QUFDeEMsYUFBRyxFQUFFcEIsTUFBTSxDQUFDb0IsS0FBRCxDQUFOLENBQ0ZQLEtBREUsQ0FDSSxHQURKLEVBRUZDLEdBRkU7QUFEbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQixTQUFTTSxLQUFLLENBQUNDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcEIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0NELENBNUNEOztBQThDQSxNQUFNQyxLQUFLLEdBQUdDLDJDQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBVkE7O0FBYUFsQixPQUFPLENBQUNtQixlQUFSLEdBQTBCLGdCQUFlQyxPQUFmLEVBQXdCO0FBQzlDO0FBQ0EsUUFBTTtBQUFFQyxRQUFJLEdBQUc7QUFBVCxNQUFnQkQsT0FBTyxDQUFDSCxLQUE5QjtBQUNBLFNBQU8sTUFBTW5CLCtDQUFNLENBQUN3QixLQUFQLENBQWFMLEtBQWIsRUFBb0I7QUFBRUk7QUFBRixHQUFwQixDQUFiO0FBQ0QsQ0FKSDs7QUFNZXJCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0JyBcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgUHJvamVjdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IFxuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLCBcbiAgICBhdGVsaWVyTmFtZSA9ICdBdGVsaWVyIGZlaGx0JywgXG4gICAgcmVmZXJlbmNlcGljLFxuICAgIGNvbnRlbnQgPSBbXSxcbiAgICBnYWxsZXJ5LFxuICAgIHNsaWRlcyA9IFtdXG4gIH0gPSBwcm9wc1xuICAgIFxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgyPlRpdGVsOiB7dGl0bGV9PC9oMj5cbiAgICAgIDxwPkRhcyBQcm9qZWt0IDxzcGFuPnt0aXRsZX08L3NwYW4+IGlzdCBUZWlsIGRlcyBBdGVsaWVyIDxzcGFuPnthdGVsaWVyTmFtZX08L3NwYW4+LjwvcD5cbiAgICAgIHtcbiAgICAgICAgcmVmZXJlbmNlcGljICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5yZWZlcmVuY2VwaWM6PC9oMz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihyZWZlcmVuY2VwaWMpXG4gICAgICAgICAgICAgIC53aWR0aCg1MDApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICBibG9ja3M9e2NvbnRlbnR9XG4gICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiAzMjAsIGg6IDI0MCwgZml0OiAnbWF4JyB9fVxuICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgLz5cbiAgICAgIHtnYWxsZXJ5ICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+R2FsbGVyeTo8L2gzPlxuICAgICAgICAgIHtzbGlkZXMubWFwKHNsaWRlID0+IDxsaSBrZXk9e3NsaWRlLl9yZWZ9PjxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHNsaWRlKVxuICAgICAgICAgICAgICAud2lkdGgoNTAwKVxuICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgLz48L2xpPil9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xIGAqW190eXBlID09IFwicHJvamVrdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF1cbiAgICB7XG4gICAgICB0aXRsZSwgXG4gICAgICBcImF0ZWxpZXJOYW1lXCI6IGF0ZWxpZXItPnRpdGxlLFxuICAgICAgXCJyZWZlcmVuY2VwaWNcIjogcmVmZXJlbmNlcGljLFxuICAgICAgY29udGVudCxcbiAgICAgIFwiZ2FsbGVyeVwiOiBnYWxsZXJ5LFxuICAgICAgXCJzbGlkZXNcIjogZ2FsbGVyeS5zbGlkZVtdLnBpY1xuICAgICAgXG4gICAgfVxuICBgXG5cblxuUHJvamVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[slug].js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/block-content-to-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIj9mYWQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/block-content-to-react\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"groq\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncm9xXCI/ZTYzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncm9xLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///groq\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });