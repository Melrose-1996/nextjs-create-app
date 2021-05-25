webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\lls\\chenzhengquan\\Desktop\\muke-study\\nextjs-create-app\\pages\\search.js";

/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 *
 */

var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js"); // 搜索条件


var LANGUAGES = ["JavaScript", "HTML", "CSS", "TypeScript", "Java", "Rust"];
var SORT_TYPE = [{
  name: "Best Match"
}, {
  name: "Most Stars",
  value: "stars",
  order: "desc"
}, {
  name: "Fewest Stars",
  value: "stars",
  order: "asc"
}, {
  name: "Most Forks",
  value: "forks",
  order: "desc"
}, {
  name: "Fewest Stars",
  value: "forks",
  order: "asc"
}];

function Search(_ref) {
  var router = _ref.router,
      repos = _ref.repos;
  console.log(repos);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
    children: router.query.query
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

_c = Search;

Search.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$query, query, sort, lang, order, page, queryString, result;

    return D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(ctx, 11111);
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, order = _ctx$query.order, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            queryString = "?q=".concat(query);
            if (lang) queryString += "+language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || "desc");
            if (page) queryString += "&page=".concat(page);
            _context.next = 10;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 12:
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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Search));

var _c, _c2;

$RefreshReg$(_c, "Search");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJMQU5HVUFHRVMiLCJTT1JUX1RZUEUiLCJuYW1lIiwidmFsdWUiLCJvcmRlciIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic29ydCIsImxhbmciLCJwYWdlIiwidG90YWxfY291bnQiLCJxdWVyeVN0cmluZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQW5CLEMsQ0FFQTs7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsWUFBOUIsRUFBNEMsTUFBNUMsRUFBb0QsTUFBcEQsQ0FBbEI7QUFFQSxJQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FEZ0IsRUFFaEI7QUFBRUEsTUFBSSxFQUFFLFlBQVI7QUFBc0JDLE9BQUssRUFBRSxPQUE3QjtBQUFzQ0MsT0FBSyxFQUFFO0FBQTdDLENBRmdCLEVBR2hCO0FBQUVGLE1BQUksRUFBRSxjQUFSO0FBQXdCQyxPQUFLLEVBQUUsT0FBL0I7QUFBd0NDLE9BQUssRUFBRTtBQUEvQyxDQUhnQixFQUloQjtBQUFFRixNQUFJLEVBQUUsWUFBUjtBQUFzQkMsT0FBSyxFQUFFLE9BQTdCO0FBQXNDQyxPQUFLLEVBQUU7QUFBN0MsQ0FKZ0IsRUFLaEI7QUFBRUYsTUFBSSxFQUFFLGNBQVI7QUFBd0JDLE9BQUssRUFBRSxPQUEvQjtBQUF3Q0MsT0FBSyxFQUFFO0FBQS9DLENBTGdCLENBQWxCOztBQVFBLFNBQVNDLE1BQVQsT0FBbUM7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUFPO0FBQUEsY0FBT0QsTUFBTSxDQUFDSSxLQUFQLENBQWFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUhRTCxNOztBQUtUQSxNQUFNLENBQUNNLGVBQVA7QUFBQSw2V0FBeUIsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFaLEVBQWlCLEtBQWpCO0FBRHVCLHlCQUVvQkEsR0FBRyxDQUFDRixLQUZ4QixFQUVmQSxLQUZlLGNBRWZBLEtBRmUsRUFFUkcsSUFGUSxjQUVSQSxJQUZRLEVBRUZDLElBRkUsY0FFRkEsSUFGRSxFQUVJVixLQUZKLGNBRUlBLEtBRkosRUFFV1csSUFGWCxjQUVXQSxJQUZYOztBQUFBLGdCQUdsQkwsS0FIa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBSWQ7QUFDTEgsbUJBQUssRUFBRTtBQUNMUywyQkFBVyxFQUFFO0FBRFI7QUFERixhQUpjOztBQUFBO0FBVW5CQyx1QkFWbUIsZ0JBVUNQLEtBVkQ7QUFXdkIsZ0JBQUlJLElBQUosRUFBVUcsV0FBVyx3QkFBaUJILElBQWpCLENBQVg7QUFDVixnQkFBSUQsSUFBSixFQUFVSSxXQUFXLG9CQUFhSixJQUFiLG9CQUEyQlQsS0FBSyxJQUFJLE1BQXBDLENBQVg7QUFDVixnQkFBSVcsSUFBSixFQUFVRSxXQUFXLG9CQUFhRixJQUFiLENBQVg7QUFiYTtBQUFBLG1CQWNGakIsR0FBRyxDQUFDb0IsT0FBSixDQUNuQjtBQUNFQyxpQkFBRyxnQ0FBeUJGLFdBQXpCO0FBREwsYUFEbUIsRUFJbkJMLEdBQUcsQ0FBQ1EsR0FKZSxFQUtuQlIsR0FBRyxDQUFDUyxHQUxlLENBZEU7O0FBQUE7QUFjakJDLGtCQWRpQjtBQUFBLDZDQXNCaEI7QUFDTGYsbUJBQUssRUFBRWUsTUFBTSxDQUFDQztBQURULGFBdEJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQmUscUVBQUFDLDhEQUFVLENBQUNuQixNQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC45YWQ5NmI5ODY1OTk4MjZmMjA2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vKipcclxuICogc29ydDog5o6S5bqP5pa55byPXHJcbiAqIG9yZGVyOiDmjpLluo/pobrluo9cclxuICogbGFuZzog5LuT5bqT55qE6aG555uu5byA5Y+R5Li76K+t6KiAXHJcbiAqIHBhZ2U6IOWIhumhtemhtemdolxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuLy8g5pCc57Si5p2h5Lu2XHJcbmNvbnN0IExBTkdVQUdFUyA9IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiVHlwZVNjcmlwdFwiLCBcIkphdmFcIiwgXCJSdXN0XCJdO1xyXG5cclxuY29uc3QgU09SVF9UWVBFID0gW1xyXG4gIHsgbmFtZTogXCJCZXN0IE1hdGNoXCIgfSxcclxuICB7IG5hbWU6IFwiTW9zdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJkZXNjXCIgfSxcclxuICB7IG5hbWU6IFwiRmV3ZXN0IFN0YXJzXCIsIHZhbHVlOiBcInN0YXJzXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgRm9ya3NcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJmb3Jrc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKHsgcm91dGVyLCByZXBvcyB9KSB7XHJcbiAgY29uc29sZS5sb2cocmVwb3MpO1xyXG4gIHJldHVybiA8c3Bhbj57cm91dGVyLnF1ZXJ5LnF1ZXJ5fTwvc3Bhbj47XHJcbn1cclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3R4LCAxMTExMSk7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvczoge1xyXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9