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



var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\detail\\index.js";



 // 这样我们把键值对的形式映射成了一个字符串

function makeQuery(queryObj) {
  // 遍历这个 obj
  var query = Object.entries(queryObj).reduce(function (result, entry) {
    result.push(entry.join("="));
    return result;
  }, []).join("&");
  return "?".concat(query);
}

function Detail(_ref) {
  var repoBasic = _ref.repoBasic,
      router = _ref.router;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-2047657995" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-2047657995" + " " + "repo-basic",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        repo: repoBasic
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-2047657995" + " " + "tabs",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/detail".concat(makeQuery()),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "jsx-2047657995" + " " + "tab index",
            children: "Readme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/detail/issues",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: "jsx-2047657995" + " " + "tab issues",
            children: "Issues"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-2047657995",
      children: "Readme"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2047657995",
      children: ".root.jsx-2047657995{padding-top:20px;}.repo-basic.jsx-2047657995{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-2047657995+.tab.jsx-2047657995{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHNEIsQUFHSixBQU1JLGFBTEssSUFIeEIsQUFTQSxrQkFMcUIsbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVwb1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG4vLyDov5nmoLfmiJHku6zmiorplK7lgLzlr7nnmoTlvaLlvI/mmKDlsITmiJDkuobkuIDkuKrlrZfnrKbkuLJcclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KHF1ZXJ5T2JqKSB7XHJcbiAgLy8g6YGN5Y6G6L+Z5LiqIG9ialxyXG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmopXHJcbiAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGVudHJ5LmpvaW4oXCI9XCIpKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sIFtdKVxyXG4gICAgLmpvaW4oXCImXCIpO1xyXG4gIHJldHVybiBgPyR7cXVlcnl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwke21ha2VRdWVyeSgpfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RldGFpbC9pc3N1ZXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGlzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+UmVhZG1lPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlcG8tYmFzaWMge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFiICsgLnRhYiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKERldGFpbC5wcm9wKTtcclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3R4LnF1ZXJ5KTtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBuYW1lOiBcIm1lbHJvc2VcIixcclxuICAvLyAgIH07XHJcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgLy8gICB9LCAzMDAwKTtcclxuICAvLyB9KTtcclxuICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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

/* harmony default export */ __webpack_exports__["default"] = (Detail);

var _c;

$RefreshReg$(_c, "Detail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1ha2VRdWVyeSIsInF1ZXJ5T2JqIiwicXVlcnkiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicmVzdWx0IiwiZW50cnkiLCJwdXNoIiwiam9pbiIsIkRldGFpbCIsInJlcG9CYXNpYyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3duZXIiLCJuYW1lIiwiYXBpIiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxRQUFmLEVBQ1hJLE1BRFcsQ0FDSixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDekJELFVBQU0sQ0FBQ0UsSUFBUCxDQUFZRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxHQUFYLENBQVo7QUFDQSxXQUFPSCxNQUFQO0FBQ0QsR0FKVyxFQUlULEVBSlMsRUFLWEcsSUFMVyxDQUtOLEdBTE0sQ0FBZDtBQU1BLG9CQUFXUCxLQUFYO0FBQ0Q7O0FBRUQsU0FBU1EsTUFBVCxPQUF1QztBQUFBLE1BQXJCQyxTQUFxQixRQUFyQkEsU0FBcUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDckMsc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxZQUFmO0FBQUEsOEJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxZQUFJLEVBQUVEO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSw0Q0FBZSxNQUFmO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLG1CQUFZWCxTQUFTLEVBQXJCLENBQVY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsZ0JBQVg7QUFBQSxpQ0FDRTtBQUFBLGdEQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztLQS9CUVUsTTtBQWlDVEcsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0ssSUFBbkI7O0FBRUFMLE1BQU0sQ0FBQ00sZUFBUDtBQUFBLHFVQUF5QixpQkFBT0MsR0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCSixtQkFBTyxDQUFDQyxHQUFSLENBQVlHLEdBQUcsQ0FBQ2YsS0FBaEI7QUFEdUIseUJBRUNlLEdBQUcsQ0FBQ2YsS0FGTCxFQUVmZ0IsS0FGZSxjQUVmQSxLQUZlLEVBRVJDLElBRlEsY0FFUkEsSUFGUSxFQUd2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZ1QjtBQUFBLG1CQVdDQywrQ0FBRyxDQUFDQyxPQUFKLENBQ3RCO0FBQUVDLGlCQUFHLG1CQUFZSixLQUFaLGNBQXFCQyxJQUFyQjtBQUFMLGFBRHNCLEVBRXRCRixHQUFHLENBQUNNLEdBRmtCLEVBR3RCTixHQUFHLENBQUNPLEdBSGtCLENBWEQ7O0FBQUE7QUFXakJiLHFCQVhpQjtBQUFBLDZDQWdCaEI7QUFDTEEsdUJBQVMsRUFBRUEsU0FBUyxDQUFDYztBQURoQixhQWhCZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBcUJlZixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwuNzRhZDIzYjkwOTU4OGUzNTBjMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlcG9cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5cclxuLy8g6L+Z5qC35oiR5Lus5oqK6ZSu5YC85a+555qE5b2i5byP5pig5bCE5oiQ5LqG5LiA5Liq5a2X56ym5LiyXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShxdWVyeU9iaikge1xyXG4gIC8vIOmBjeWOhui/meS4qiBvYmpcclxuICBjb25zdCBxdWVyeSA9IE9iamVjdC5lbnRyaWVzKHF1ZXJ5T2JqKVxyXG4gICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKFwiPVwiKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LCBbXSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxuICByZXR1cm4gYD8ke3F1ZXJ5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwby1iYXNpY1wiPlxyXG4gICAgICAgIDxSZXBvIHJlcG89e3JlcG9CYXNpY30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsJHttYWtlUXVlcnkoKX1gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGluZGV4XCI+UmVhZG1lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXRhaWwvaXNzdWVzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlJlYWRtZTwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBvLWJhc2ljIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYiArIC50YWIge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhEZXRhaWwucHJvcCk7XHJcblxyXG5EZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eC5xdWVyeSk7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIC8vICAgcmV0dXJuIHtcclxuICAvLyAgICAgbmFtZTogXCJtZWxyb3NlXCIsXHJcbiAgLy8gICB9O1xyXG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgIHJlc29sdmUoe30pO1xyXG4gIC8vICAgfSwgMzAwMCk7XHJcbiAgLy8gfSk7XHJcbiAgY29uc3QgcmVwb0Jhc2ljID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=