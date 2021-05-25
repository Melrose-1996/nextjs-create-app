webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

// 专门处理 getInitalProps 请求接口功能的相关函数
// 由于在客户端执行又要在服务端执行，所以不直接使用 exports 这语法，在 ndoe.js 目前不支持
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var github_base_url = "https://api.github.com"; // 这个方法就是单纯的向服务端发起请求的方法

function requestGithub(_x, _x2, _x3, _x4) {
  return _requestGithub.apply(this, arguments);
} // 服务端


function _requestGithub() {
  _requestGithub = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, data, headers) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios({
              url: "".concat(github_base_url).concat(url),
              method: method,
              data: data,
              headers: headers
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestGithub.apply(this, arguments);
}

var isServer = false;

function request(_x5, _x6, _x7) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref, req, res) {
    var _ref$method, method, url, _ref$data, data, session, githubAuth, headers;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref$method = _ref.method, method = _ref$method === void 0 ? "GET" : _ref$method, url = _ref.url, _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data;

            if (url) {
              _context2.next = 3;
              break;
            }

            throw Error("url must provide");

          case 3:
            if (!isServer) {
              _context2.next = 14;
              break;
            }

            // 服务端
            console.log(req, 111);
            session = req.session;
            githubAuth = session.githubAuth || {}; // 请求 github 数据

            headers = {};

            if (githubAuth.access_token) {
              headers["Authorization"] = "".concat(githubAuth.token_type, " ").concat(githubAuth.access_token);
            }

            _context2.next = 11;
            return requestGithub(method, url, data, headers);

          case 11:
            return _context2.abrupt("return", _context2.sent);

          case 14:
            _context2.next = 16;
            return axios({
              url: "/github".concat(url),
              method: method,
              data: data
            });

          case 16:
            return _context2.abrupt("return", _context2.sent);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _request.apply(this, arguments);
}

module.exports = {
  request: request,
  requestGithub: requestGithub
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJnaXRodWJfYmFzZV91cmwiLCJyZXF1ZXN0R2l0aHViIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImhlYWRlcnMiLCJpc1NlcnZlciIsInJlcXVlc3QiLCJyZXEiLCJyZXMiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uIiwiZ2l0aHViQXV0aCIsImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsd0JBQXhCLEMsQ0FFQTs7U0FDZUMsYTs7RUFTZjs7Ozs0RUFUQSxpQkFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsRUFBZ0RDLE9BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlUCxLQUFLLENBQUM7QUFDakJLLGlCQUFHLFlBQUtILGVBQUwsU0FBdUJHLEdBQXZCLENBRGM7QUFFakJELG9CQUFNLEVBQU5BLE1BRmlCO0FBR2pCRSxrQkFBSSxFQUFKQSxJQUhpQjtBQUlqQkMscUJBQU8sRUFBUEE7QUFKaUIsYUFBRCxDQURwQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFVQSxJQUFNQyxRQUFRLFFBQWQ7O1NBQ2VDLE87Ozs7O3NFQUFmLHdCQUEyREMsR0FBM0QsRUFBZ0VDLEdBQWhFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBeUJQLE1BQXpCLEVBQXlCQSxNQUF6Qiw0QkFBa0MsS0FBbEMsZ0JBQXlDQyxHQUF6QyxRQUF5Q0EsR0FBekMsbUJBQThDQyxJQUE5QyxFQUE4Q0EsSUFBOUMsMEJBQXFELEVBQXJEOztBQUFBLGdCQUNPRCxHQURQO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUVVTyxLQUFLLENBQUMsa0JBQUQsQ0FGZjs7QUFBQTtBQUFBLGlCQUtNSixRQUxOO0FBQUE7QUFBQTtBQUFBOztBQU1JO0FBQ0FLLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWixFQUFpQixHQUFqQjtBQUNRSyxtQkFSWixHQVF3QkwsR0FSeEIsQ0FRWUssT0FSWjtBQVNVQyxzQkFUVixHQVN1QkQsT0FBTyxDQUFDQyxVQUFSLElBQXNCLEVBVDdDLEVBVUk7O0FBQ01ULG1CQVhWLEdBV29CLEVBWHBCOztBQVlJLGdCQUFJUyxVQUFVLENBQUNDLFlBQWYsRUFBNkI7QUFDM0JWLHFCQUFPLENBQ0wsZUFESyxDQUFQLGFBRU9TLFVBQVUsQ0FBQ0UsVUFGbEIsY0FFZ0NGLFVBQVUsQ0FBQ0MsWUFGM0M7QUFHRDs7QUFoQkw7QUFBQSxtQkFpQmlCZCxhQUFhLENBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxPQUFwQixDQWpCOUI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBc0JpQlAsS0FBSyxDQUFDO0FBQ2pCSyxpQkFBRyxtQkFBWUEsR0FBWixDQURjO0FBRWpCRCxvQkFBTSxFQUFOQSxNQUZpQjtBQUdqQkUsa0JBQUksRUFBSkE7QUFIaUIsYUFBRCxDQXRCdEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBOEJBYSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZlgsU0FBTyxFQUFQQSxPQURlO0FBRWZOLGVBQWEsRUFBYkE7QUFGZSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZDRmYmFmMTNhNDNiNjUyZWRhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5LiT6Zeo5aSE55CGIGdldEluaXRhbFByb3BzIOivt+axguaOpeWPo+WKn+iDveeahOebuOWFs+WHveaVsFxyXG4vLyDnlLHkuo7lnKjlrqLmiLfnq6/miafooYzlj4jopoHlnKjmnI3liqHnq6/miafooYzvvIzmiYDku6XkuI3nm7TmjqXkvb/nlKggZXhwb3J0cyDov5nor63ms5XvvIzlnKggbmRvZS5qcyDnm67liY3kuI3mlK/mjIFcclxuXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xyXG5cclxuY29uc3QgZ2l0aHViX2Jhc2VfdXJsID0gXCJodHRwczovL2FwaS5naXRodWIuY29tXCI7XHJcblxyXG4vLyDov5nkuKrmlrnms5XlsLHmmK/ljZXnuq/nmoTlkJHmnI3liqHnq6/lj5Hotbfor7fmsYLnmoTmlrnms5VcclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEdpdGh1YihtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycykge1xyXG4gIHJldHVybiBhd2FpdCBheGlvcyh7XHJcbiAgICB1cmw6IGAke2dpdGh1Yl9iYXNlX3VybH0ke3VybH1gLFxyXG4gICAgbWV0aG9kLFxyXG4gICAgZGF0YSxcclxuICAgIGhlYWRlcnMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOacjeWKoeerr1xyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QoeyBtZXRob2QgPSBcIkdFVFwiLCB1cmwsIGRhdGEgPSB7fSB9LCByZXEsIHJlcykge1xyXG4gIGlmICghdXJsKSB7XHJcbiAgICB0aHJvdyBFcnJvcihcInVybCBtdXN0IHByb3ZpZGVcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIC8vIOacjeWKoeerr1xyXG4gICAgY29uc29sZS5sb2cocmVxLCAxMTEpO1xyXG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSByZXE7XHJcbiAgICBjb25zdCBnaXRodWJBdXRoID0gc2Vzc2lvbi5naXRodWJBdXRoIHx8IHt9O1xyXG4gICAgLy8g6K+35rGCIGdpdGh1YiDmlbDmja5cclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgIGlmIChnaXRodWJBdXRoLmFjY2Vzc190b2tlbikge1xyXG4gICAgICBoZWFkZXJzW1xyXG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiXHJcbiAgICAgIF0gPSBgJHtnaXRodWJBdXRoLnRva2VuX3R5cGV9ICR7Z2l0aHViQXV0aC5hY2Nlc3NfdG9rZW59YDtcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCByZXF1ZXN0R2l0aHViKG1ldGhvZCwgdXJsLCBkYXRhLCBoZWFkZXJzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8g5a6i5oi356uvIC0g5oiR5Lus5piv6ZyA6KaB6K+35rGC6Ieq5bex55qE5pyN5Yqh55qE77yM5oiR5Lus6Ieq5bex55qE5pyN5Yqh5a+55LqOIFVSTCDkuZ/kvJrov5vooYzlpITnkIZcclxuICAgIC8vIC9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QgPT4gL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcclxuICAgIC8vIOi/meagt+aIkeS7rOacjeWKoeerr+mAmui/h+WIpOaWrSAvZ2l0aHViIOW8gOWktOeahOi/meS4quivt+axgueahOWcsOWdgOi/m+ihjOS4gOS4queJueauiueahOWkhOeQhlxyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcclxuICAgICAgdXJsOiBgL2dpdGh1YiR7dXJsfWAsXHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcmVxdWVzdCxcclxuICByZXF1ZXN0R2l0aHViLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9