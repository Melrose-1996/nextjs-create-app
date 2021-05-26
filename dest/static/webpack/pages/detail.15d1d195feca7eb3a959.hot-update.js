webpackHotUpdate_N_E("pages/detail",{

/***/ "./pages/detail/index.js":
/*!*******************************!*\
  !*** ./pages/detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\detail\\index.js";




 // 这样我们把键值对的形式映射成了一个字符串

function makeQuery(queryObj) {
  // 遍历这个 obj
  console.log(Object.entries(queryObj));
  var query = Object.entries(queryObj).reduce(function (result, entry) {
    result.push(entry.join("="));
    return result;
  }, []).join("&");
  return "?".concat(query);
}

function Detail(_ref) {
  var repoBasic = _ref.repoBasic,
      router = _ref.router;
  var query = makeQuery(router.query);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-2047657995" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-2047657995" + " " + "repo-basic",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        repo: repoBasic
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-2047657995" + " " + "tabs",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/detail".concat(query),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "jsx-2047657995" + " " + "tab index",
            children: "Readme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/detail/issues".concat(query),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "jsx-2047657995" + " " + "tab issues",
            children: "Issues"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-2047657995",
      children: "Readme"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2047657995",
      children: ".root.jsx-2047657995{padding-top:20px;}.repo-basic.jsx-2047657995{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-2047657995+.tab.jsx-2047657995{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHNEIsQUFHSixBQU1JLGFBTEssSUFIeEIsQUFTQSxrQkFMcUIsbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVwb1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyDov5nmoLfmiJHku6zmiorplK7lgLzlr7nnmoTlvaLlvI/mmKDlsITmiJDkuobkuIDkuKrlrZfnrKbkuLJcclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KHF1ZXJ5T2JqKSB7XHJcbiAgLy8g6YGN5Y6G6L+Z5LiqIG9ialxyXG5cclxuICBjb25zb2xlLmxvZyhPYmplY3QuZW50cmllcyhxdWVyeU9iaikpO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmopXHJcbiAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGVudHJ5LmpvaW4oXCI9XCIpKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sIFtdKVxyXG4gICAgLmpvaW4oXCImXCIpO1xyXG4gIHJldHVybiBgPyR7cXVlcnl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIgfSkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gbWFrZVF1ZXJ5KHJvdXRlci5xdWVyeSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG8tYmFzaWNcIj5cclxuICAgICAgICA8UmVwbyByZXBvPXtyZXBvQmFzaWN9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsL2lzc3VlcyR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlJlYWRtZTwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBvLWJhc2ljIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYiArIC50YWIge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhEZXRhaWwucHJvcCk7XHJcblxyXG5EZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eC5xdWVyeSk7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgbmFtZTogXCJtZWxyb3NlXCIsXHJcbiAgLy8gICB9O1xyXG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgIHJlc29sdmUoe30pO1xyXG4gIC8vICAgfSwgMzAwMCk7XHJcbiAgLy8gfSk7XHJcbiAgY29uc3QgcmVwb0Jhc2ljID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKERldGFpbCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c = Detail;
console.log(Detail.prop);

Detail.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$query, owner, name, repoBasic;

    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(ctx.query);
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name; //   return {
            //     name: "melrose",
            //   };
            // return new Promise((resolve) => {
            //   setTimeout(() => {
            //     resolve({});
            //   }, 3000);
            // });

            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_6___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name)
            }, ctx.req, ctx.res);

          case 4:
            repoBasic = _context.sent;
            return _context.abrupt("return", {
              repoBasic: repoBasic.data
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Detail));

var _c, _c2;

$RefreshReg$(_c, "Detail");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1ha2VRdWVyeSIsInF1ZXJ5T2JqIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImVudHJpZXMiLCJxdWVyeSIsInJlZHVjZSIsInJlc3VsdCIsImVudHJ5IiwicHVzaCIsImpvaW4iLCJEZXRhaWwiLCJyZXBvQmFzaWMiLCJyb3V0ZXIiLCJwcm9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3duZXIiLCJuYW1lIiwiYXBpIiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImRhdGEiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FJQTs7QUFDQSxTQUFTQSxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxPQUFQLENBQWVKLFFBQWYsQ0FBWjtBQUNBLE1BQU1LLEtBQUssR0FBR0YsTUFBTSxDQUFDQyxPQUFQLENBQWVKLFFBQWYsRUFDWE0sTUFEVyxDQUNKLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN6QkQsVUFBTSxDQUFDRSxJQUFQLENBQVlELEtBQUssQ0FBQ0UsSUFBTixDQUFXLEdBQVgsQ0FBWjtBQUNBLFdBQU9ILE1BQVA7QUFDRCxHQUpXLEVBSVQsRUFKUyxFQUtYRyxJQUxXLENBS04sR0FMTSxDQUFkO0FBTUEsb0JBQVdMLEtBQVg7QUFDRDs7QUFFRCxTQUFTTSxNQUFULE9BQXVDO0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNyQyxNQUFNUixLQUFLLEdBQUdOLFNBQVMsQ0FBQ2MsTUFBTSxDQUFDUixLQUFSLENBQXZCO0FBQ0Esc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxZQUFmO0FBQUEsOEJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxZQUFJLEVBQUVPO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSw0Q0FBZSxNQUFmO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLG1CQUFZUCxLQUFaLENBQVY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLDBCQUFtQkEsS0FBbkIsQ0FBVjtBQUFBLGlDQUNFO0FBQUEsZ0RBQWEsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0tBaENRTSxNO0FBa0NUVixPQUFPLENBQUNDLEdBQVIsQ0FBWVMsTUFBTSxDQUFDRyxJQUFuQjs7QUFFQUgsTUFBTSxDQUFDSSxlQUFQO0FBQUEscVVBQXlCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJmLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWMsR0FBRyxDQUFDWCxLQUFoQjtBQUR1Qix5QkFFQ1csR0FBRyxDQUFDWCxLQUZMLEVBRWZZLEtBRmUsY0FFZkEsS0FGZSxFQUVSQyxJQUZRLGNBRVJBLElBRlEsRUFHdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFWdUI7QUFBQSxtQkFXQ0MsK0NBQUcsQ0FBQ0MsT0FBSixDQUN0QjtBQUFFQyxpQkFBRyxtQkFBWUosS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQURzQixFQUV0QkYsR0FBRyxDQUFDTSxHQUZrQixFQUd0Qk4sR0FBRyxDQUFDTyxHQUhrQixDQVhEOztBQUFBO0FBV2pCWCxxQkFYaUI7QUFBQSw2Q0FnQmhCO0FBQ0xBLHVCQUFTLEVBQUVBLFNBQVMsQ0FBQ1k7QUFEaEIsYUFoQmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCZSxxRUFBQUMsOERBQVUsQ0FBQ2QsTUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwuMTVkMWQxOTVmZWNhN2ViM2E5NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlcG9cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8g6L+Z5qC35oiR5Lus5oqK6ZSu5YC85a+555qE5b2i5byP5pig5bCE5oiQ5LqG5LiA5Liq5a2X56ym5LiyXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShxdWVyeU9iaikge1xyXG4gIC8vIOmBjeWOhui/meS4qiBvYmpcclxuXHJcbiAgY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMocXVlcnlPYmopKTtcclxuICBjb25zdCBxdWVyeSA9IE9iamVjdC5lbnRyaWVzKHF1ZXJ5T2JqKVxyXG4gICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKFwiPVwiKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LCBbXSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxuICByZXR1cm4gYD8ke3F1ZXJ5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyIH0pIHtcclxuICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+SXNzdWVzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5SZWFkbWU8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWIgKyAudGFiIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc29sZS5sb2coRGV0YWlsLnByb3ApO1xyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zb2xlLmxvZyhjdHgucXVlcnkpO1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIG5hbWU6IFwibWVscm9zZVwiLFxyXG4gIC8vICAgfTtcclxuICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICByZXNvbHZlKHt9KTtcclxuICAvLyAgIH0sIDMwMDApO1xyXG4gIC8vIH0pO1xyXG4gIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcmVwb0Jhc2ljOiByZXBvQmFzaWMuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihEZXRhaWwpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9