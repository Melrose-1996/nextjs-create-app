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
      lineNumber: 29,
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
          lineNumber: 33,
          columnNumber: 19
        }, this),
        style: {
          marginBottom: 20
        },
        dataSource: LANGUAGES,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 20
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJMQU5HVUFHRVMiLCJTT1JUX1RZUEUiLCJuYW1lIiwidmFsdWUiLCJvcmRlciIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbkJvdHRvbSIsIml0ZW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsInNvcnQiLCJsYW5nIiwicGFnZSIsInRvdGFsX2NvdW50IiwicXVlcnlTdHJpbmciLCJyZXF1ZXN0IiwidXJsIiwicmVxIiwicmVzIiwicmVzdWx0IiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFuQixDLENBRUE7OztBQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLFlBQTlCLEVBQTRDLE1BQTVDLEVBQW9ELE1BQXBELENBQWxCO0FBRUEsSUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBRGdCLEVBRWhCO0FBQUVBLE1BQUksRUFBRSxZQUFSO0FBQXNCQyxPQUFLLEVBQUUsT0FBN0I7QUFBc0NDLE9BQUssRUFBRTtBQUE3QyxDQUZnQixFQUdoQjtBQUFFRixNQUFJLEVBQUUsY0FBUjtBQUF3QkMsT0FBSyxFQUFFLE9BQS9CO0FBQXdDQyxPQUFLLEVBQUU7QUFBL0MsQ0FIZ0IsRUFJaEI7QUFBRUYsTUFBSSxFQUFFLFlBQVI7QUFBc0JDLE9BQUssRUFBRSxPQUE3QjtBQUFzQ0MsT0FBSyxFQUFFO0FBQTdDLENBSmdCLEVBS2hCO0FBQUVGLE1BQUksRUFBRSxjQUFSO0FBQXdCQyxPQUFLLEVBQUUsT0FBL0I7QUFBd0NDLE9BQUssRUFBRTtBQUEvQyxDQUxnQixDQUFsQjs7QUFRQSxTQUFTQyxNQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBakJDLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0U7QUFBSyxZQUFNLEVBQUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLFlBQU0sRUFBRSxDQUFiO0FBQUEsNkJBQ0U7QUFDRSxnQkFBUSxNQURWO0FBRUUsY0FBTSxlQUFFO0FBQU0sbUJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGVjtBQUdFLGFBQUssRUFBRTtBQUFFRyxzQkFBWSxFQUFFO0FBQWhCLFNBSFQ7QUFJRSxrQkFBVSxFQUFFVixTQUpkO0FBS0Usa0JBQVUsRUFBRSxvQkFBQ1csSUFBRCxFQUFVO0FBQ3BCLDhCQUFPLDBIQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7S0FsQlFOLE07O0FBb0JUQSxNQUFNLENBQUNPLGVBQVA7QUFBQSw2V0FBeUIsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkwsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaLEVBQWlCLEtBQWpCO0FBRHVCLHlCQUVvQkEsR0FBRyxDQUFDQyxLQUZ4QixFQUVmQSxLQUZlLGNBRWZBLEtBRmUsRUFFUkMsSUFGUSxjQUVSQSxJQUZRLEVBRUZDLElBRkUsY0FFRkEsSUFGRSxFQUVJWixLQUZKLGNBRUlBLEtBRkosRUFFV2EsSUFGWCxjQUVXQSxJQUZYOztBQUFBLGdCQUdsQkgsS0FIa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBSWQ7QUFDTFAsbUJBQUssRUFBRTtBQUNMVywyQkFBVyxFQUFFO0FBRFI7QUFERixhQUpjOztBQUFBO0FBVW5CQyx1QkFWbUIsZ0JBVUNMLEtBVkQ7QUFXdkIsZ0JBQUlFLElBQUosRUFBVUcsV0FBVyx3QkFBaUJILElBQWpCLENBQVg7QUFDVixnQkFBSUQsSUFBSixFQUFVSSxXQUFXLG9CQUFhSixJQUFiLG9CQUEyQlgsS0FBSyxJQUFJLE1BQXBDLENBQVg7QUFDVixnQkFBSWEsSUFBSixFQUFVRSxXQUFXLG9CQUFhRixJQUFiLENBQVg7QUFiYTtBQUFBLG1CQWNGbkIsR0FBRyxDQUFDc0IsT0FBSixDQUNuQjtBQUNFQyxpQkFBRyxnQ0FBeUJGLFdBQXpCO0FBREwsYUFEbUIsRUFJbkJOLEdBQUcsQ0FBQ1MsR0FKZSxFQUtuQlQsR0FBRyxDQUFDVSxHQUxlLENBZEU7O0FBQUE7QUFjakJDLGtCQWRpQjtBQUFBLDZDQXNCaEI7QUFDTGpCLG1CQUFLLEVBQUVpQixNQUFNLENBQUNDO0FBRFQsYUF0QmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTJCZSxxRUFBQUMsOERBQVUsQ0FBQ3JCLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmIyYzYzNjA4ZGJhMGIyM2NhZDcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbi8qKlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+mhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPnmoTpobnnm67lvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG16aG16Z2iXHJcbiAqXHJcbiAqL1xyXG5cclxuY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG4vLyDmkJzntKLmnaHku7ZcclxuY29uc3QgTEFOR1VBR0VTID0gW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJUeXBlU2NyaXB0XCIsIFwiSmF2YVwiLCBcIlJ1c3RcIl07XHJcblxyXG5jb25zdCBTT1JUX1RZUEUgPSBbXHJcbiAgeyBuYW1lOiBcIkJlc3QgTWF0Y2hcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IFN0YXJzXCIsIHZhbHVlOiBcInN0YXJzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuICB7IG5hbWU6IFwiTW9zdCBGb3Jrc1wiLCB2YWx1ZTogXCJmb3Jrc1wiLCBvcmRlcjogXCJkZXNjXCIgfSxcclxuICB7IG5hbWU6IFwiRmV3ZXN0IFN0YXJzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goeyByb3V0ZXIsIHJlcG9zIH0pIHtcclxuICBjb25zb2xlLmxvZyhyZXBvcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MjB9PjwvUm93PlxyXG4gICAgICA8Q29sIGd1dHRlcj17Nn0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+6K+t6KiAPC9zcGFuPn1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cclxuICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TGlzdC5JdGVtPjwvTGlzdC5JdGVtPjtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvTGlzdD5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eCwgMTExMTEpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVwb3M6IHtcclxuICAgICAgICB0b3RhbF9jb3VudDogMCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWA7XHJcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWA7XHJcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgXCJkZXNjXCJ9YDtcclxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==