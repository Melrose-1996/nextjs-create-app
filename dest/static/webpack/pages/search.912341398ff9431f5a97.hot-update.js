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
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);






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
  var _this = this;

  var router = _ref.router,
      repos = _ref.repos;
  console.log(repos);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
      gutter: 20
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      gutter: 6,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
        bordered: true,
        header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
          className: "list-header",
          children: "\u8BED\u8A00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 19
        }, this),
        style: {
          marginBottom: 20
        },
        dataSource: LANGUAGES,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 20
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Search));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJMQU5HVUFHRVMiLCJTT1JUX1RZUEUiLCJuYW1lIiwidmFsdWUiLCJvcmRlciIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbkJvdHRvbSIsIml0ZW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInNvcnQiLCJsYW5nIiwicGFnZSIsInRvdGFsX2NvdW50IiwicXVlcnlTdHJpbmciLCJyZXF1ZXN0IiwidXJsIiwicmVxIiwicmVzIiwicmVzdWx0IiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBbkIsQyxDQUVBOzs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QixLQUF2QixFQUE4QixZQUE5QixFQUE0QyxNQUE1QyxFQUFvRCxNQUFwRCxDQUFsQjtBQUVBLElBQU1DLFNBQVMsR0FBRyxDQUNoQjtBQUFFQyxNQUFJLEVBQUU7QUFBUixDQURnQixFQUVoQjtBQUFFQSxNQUFJLEVBQUUsWUFBUjtBQUFzQkMsT0FBSyxFQUFFLE9BQTdCO0FBQXNDQyxPQUFLLEVBQUU7QUFBN0MsQ0FGZ0IsRUFHaEI7QUFBRUYsTUFBSSxFQUFFLGNBQVI7QUFBd0JDLE9BQUssRUFBRSxPQUEvQjtBQUF3Q0MsT0FBSyxFQUFFO0FBQS9DLENBSGdCLEVBSWhCO0FBQUVGLE1BQUksRUFBRSxZQUFSO0FBQXNCQyxPQUFLLEVBQUUsT0FBN0I7QUFBc0NDLE9BQUssRUFBRTtBQUE3QyxDQUpnQixFQUtoQjtBQUFFRixNQUFJLEVBQUUsY0FBUjtBQUF3QkMsT0FBSyxFQUFFLE9BQS9CO0FBQXdDQyxPQUFLLEVBQUU7QUFBL0MsQ0FMZ0IsQ0FBbEI7O0FBUUEsU0FBU0MsTUFBVCxPQUFtQztBQUFBOztBQUFBLE1BQWpCQyxNQUFpQixRQUFqQkEsTUFBaUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNFO0FBQUssWUFBTSxFQUFFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxZQUFNLEVBQUUsQ0FBYjtBQUFBLDZCQUNFO0FBQ0UsZ0JBQVEsTUFEVjtBQUVFLGNBQU0sZUFBRTtBQUFNLG1CQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlY7QUFHRSxhQUFLLEVBQUU7QUFBRUcsc0JBQVksRUFBRTtBQUFoQixTQUhUO0FBSUUsa0JBQVUsRUFBRVYsU0FKZDtBQUtFLGtCQUFVLEVBQUUsb0JBQUNXLElBQUQsRUFBVTtBQUNwQiw4QkFBTywwSEFBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0tBbEJRTixNOztBQW9CVEEsTUFBTSxDQUFDTyxlQUFQO0FBQUEsNldBQXlCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJMLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBWixFQUFpQixLQUFqQjtBQUR1Qix5QkFFb0JBLEdBQUcsQ0FBQ0MsS0FGeEIsRUFFZkEsS0FGZSxjQUVmQSxLQUZlLEVBRVJDLElBRlEsY0FFUkEsSUFGUSxFQUVGQyxJQUZFLGNBRUZBLElBRkUsRUFFSVosS0FGSixjQUVJQSxLQUZKLEVBRVdhLElBRlgsY0FFV0EsSUFGWDs7QUFBQSxnQkFHbEJILEtBSGtCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQUlkO0FBQ0xQLG1CQUFLLEVBQUU7QUFDTFcsMkJBQVcsRUFBRTtBQURSO0FBREYsYUFKYzs7QUFBQTtBQVVuQkMsdUJBVm1CLGdCQVVDTCxLQVZEO0FBV3ZCLGdCQUFJRSxJQUFKLEVBQVVHLFdBQVcsd0JBQWlCSCxJQUFqQixDQUFYO0FBQ1YsZ0JBQUlELElBQUosRUFBVUksV0FBVyxvQkFBYUosSUFBYixvQkFBMkJYLEtBQUssSUFBSSxNQUFwQyxDQUFYO0FBQ1YsZ0JBQUlhLElBQUosRUFBVUUsV0FBVyxvQkFBYUYsSUFBYixDQUFYO0FBYmE7QUFBQSxtQkFjRm5CLEdBQUcsQ0FBQ3NCLE9BQUosQ0FDbkI7QUFDRUMsaUJBQUcsZ0NBQXlCRixXQUF6QjtBQURMLGFBRG1CLEVBSW5CTixHQUFHLENBQUNTLEdBSmUsRUFLbkJULEdBQUcsQ0FBQ1UsR0FMZSxDQWRFOztBQUFBO0FBY2pCQyxrQkFkaUI7QUFBQSw2Q0FzQmhCO0FBQ0xqQixtQkFBSyxFQUFFaUIsTUFBTSxDQUFDQztBQURULGFBdEJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQmUscUVBQUFDLDhEQUFVLENBQUNyQixNQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC45MTIzNDEzOThmZjk0MzFmNWE5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vKipcclxuICogc29ydDog5o6S5bqP5pa55byPXHJcbiAqIG9yZGVyOiDmjpLluo/pobrluo9cclxuICogbGFuZzog5LuT5bqT55qE6aG555uu5byA5Y+R5Li76K+t6KiAXHJcbiAqIHBhZ2U6IOWIhumhtemhtemdolxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuLy8g5pCc57Si5p2h5Lu2XHJcbmNvbnN0IExBTkdVQUdFUyA9IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiVHlwZVNjcmlwdFwiLCBcIkphdmFcIiwgXCJSdXN0XCJdO1xyXG5cclxuY29uc3QgU09SVF9UWVBFID0gW1xyXG4gIHsgbmFtZTogXCJCZXN0IE1hdGNoXCIgfSxcclxuICB7IG5hbWU6IFwiTW9zdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJkZXNjXCIgfSxcclxuICB7IG5hbWU6IFwiRmV3ZXN0IFN0YXJzXCIsIHZhbHVlOiBcInN0YXJzXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgRm9ya3NcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJmb3Jrc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKHsgcm91dGVyLCByZXBvcyB9KSB7XHJcbiAgY29uc29sZS5sb2cocmVwb3MpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezIwfT48L1Jvdz5cclxuICAgICAgPENvbCBndXR0ZXI9ezZ9PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XHJcbiAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPExpc3QuSXRlbT48L0xpc3QuSXRlbT47XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L0xpc3Q+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zb2xlLmxvZyhjdHgsIDExMTExKTtcclxuICBjb25zdCB7IHF1ZXJ5LCBzb3J0LCBsYW5nLCBvcmRlciwgcGFnZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGlmICghcXVlcnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlcG9zOiB7XHJcbiAgICAgICAgdG90YWxfY291bnQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgK2xhbmd1YWdlOiR7bGFuZ31gO1xyXG4gIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8IFwiZGVzY1wifWA7XHJcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVwb3M6IHJlc3VsdC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=