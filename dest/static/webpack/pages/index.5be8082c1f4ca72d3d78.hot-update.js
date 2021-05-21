webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\index.js",
    _this = undefined;



var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var Index = function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
    children: "\u53BB\u767B\u5F55"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, _this);
}; // 注意我们在组件中（getInitialProps）中，只会使用到 request ，因为 request 会帮助我们去判断是客户端还是服务端
// 注意 getInitialProps 会在客户端不同页面跳转的时候使用，同样服务端如果我们访问的是 index 这个页面，也会调用 getInitialProps，在服务端渲染的时候调用的时候，我们的运行环境处于 node.js 环境，而不是浏览器的环境，如果我们在 node.js 的环境下请求就会出现请求的是 http://localhost:3000/ 这样的地址，所以会失败（默认的端口是80）


_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var appContext, result;
    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appContext = _ref.appContext;
            _context.next = 3;
            return api.request({
              url: "/search/repositories?q=react"
            }, appContext.req, appContext.res);

          case 3:
            result = _context.sent;
            return _context.abrupt("return", {
              data: result.data
            });

          case 5:
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

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpIiwicmVxdWlyZSIsIkluZGV4IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQW5COztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQsQyxDQUdBO0FBRUE7OztLQUxNQSxLOztBQU1OQSxLQUFLLENBQUNDLGVBQU47QUFBQSxxVUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLHNCQUFULFFBQVNBLFVBQVQ7QUFBQTtBQUFBLG1CQVNESixHQUFHLENBQUNLLE9BQUosQ0FDbkI7QUFBRUMsaUJBQUcsRUFBRTtBQUFQLGFBRG1CLEVBRW5CRixVQUFVLENBQUNHLEdBRlEsRUFHbkJILFVBQVUsQ0FBQ0ksR0FIUSxDQVRDOztBQUFBO0FBU2hCQyxrQkFUZ0I7QUFBQSw2Q0FlZjtBQUNMQyxrQkFBSSxFQUFFRCxNQUFNLENBQUNDO0FBRFIsYUFmZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQmVSLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViZTgwODJjMWY0Y2E3MmQzZDc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIHJldHVybiA8c3Bhbj7ljrvnmbvlvZU8L3NwYW4+O1xyXG59O1xyXG4vLyDms6jmhI/miJHku6zlnKjnu4Tku7bkuK3vvIhnZXRJbml0aWFsUHJvcHPvvInkuK3vvIzlj6rkvJrkvb/nlKjliLAgcmVxdWVzdCDvvIzlm6DkuLogcmVxdWVzdCDkvJrluK7liqnmiJHku6zljrvliKTmlq3mmK/lrqLmiLfnq6/ov5jmmK/mnI3liqHnq69cclxuXHJcbi8vIOazqOaEjyBnZXRJbml0aWFsUHJvcHMg5Lya5Zyo5a6i5oi356uv5LiN5ZCM6aG16Z2i6Lez6L2s55qE5pe25YCZ5L2/55So77yM5ZCM5qC35pyN5Yqh56uv5aaC5p6c5oiR5Lus6K6/6Zeu55qE5pivIGluZGV4IOi/meS4qumhtemdou+8jOS5n+S8muiwg+eUqCBnZXRJbml0aWFsUHJvcHPvvIzlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnosIPnlKjnmoTml7blgJnvvIzmiJHku6znmoTov5DooYznjq/looPlpITkuo4gbm9kZS5qcyDnjq/looPvvIzogIzkuI3mmK/mtY/op4jlmajnmoTnjq/looPvvIzlpoLmnpzmiJHku6zlnKggbm9kZS5qcyDnmoTnjq/looPkuIvor7fmsYLlsLHkvJrlh7rnjrDor7fmsYLnmoTmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwLyDov5nmoLfnmoTlnLDlnYDvvIzmiYDku6XkvJrlpLHotKXvvIjpu5jorqTnmoTnq6/lj6PmmK84MO+8iVxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBhcHBDb250ZXh0IH0pID0+IHtcclxuICAvLyDmiqUgRXJyb3I6IGNvbm5lY3QgRUNPTk5SRUZVU0VEIDEyNy4wLjAuMTo4MCDnmoTplJnor69cclxuICAvLyDlpoLmnpzmmK/lnKjmtY/op4jlmajph4zpnaLlj5HpgIHnmoTvvIzkvJrmoLnmja7miJHku6zmj5DkvpvnmoTot6/lvoTkvJroh6rliqjliqDkuIrmiJHku6zlvZPliY3nvZHnq5nnmoTln5/lkI3vvIjlsLHmmK9odHRwOi8vbG9jYWxob3N0OjMwMDAv77yJ5omA5Lul5a6D5a6M5pW06K+35rGC6Lev5b6E5bCx5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XHJcbiAgLy8g5aaC5p6c5piv5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6L+b6KGM5omn6KGM55qE6K+d77yM5omA5Lul5rKh5pyJ5rWP6KeI5Zmo6YeM6Z2i55qE5Z+f5ZCN55qE77yM6L+Z5Liq5pe25YCZ6K+35rGC55qE6Lev5b6E6Ieq5Yqo5ZyoIGF4aW9zIOmHjOmdouWinuWKoOeahCBodHRwOi8vMTI3LjAuMC4x77yI6buY6K6kODDnq6/lj6PvvIkvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdO+8jOi/meS4quaXtuWAmeWwseS4jeWvueS6hu+8jOaIkeS7rCA4MCDnq6/lj6PmsqHmnInlkK/liqjvvIzkuZ/kuI3mmK/miJHku6zmg7Por7fmsYLnmoTlnLDlnYBcclxuICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvc1xyXG4gIC8vICAgLmdldChcIi9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XCIpXHJcbiAgLy8gICAudGhlbigocmVzcCkgPT4gY29uc29sZS5sb2cocmVzcCkpO1xyXG5cclxuICAvLyDms6jmhI8gcmVxIOWSjCByZXMg5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ5omN5Lya5pyJXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7IHVybDogXCIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XCIgfSxcclxuICAgIGFwcENvbnRleHQucmVxLFxyXG4gICAgYXBwQ29udGV4dC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9