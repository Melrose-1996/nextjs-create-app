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
            console.log(req, 111111111111111111111);

            if (!isServer) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return");

          case 12:
            return _context2.abrupt("return", _context2.sent);

          case 15:
            _context2.next = 17;
            return axios({
              url: "/github".concat(url),
              method: method,
              data: data
            });

          case 17:
            return _context2.abrupt("return", _context2.sent);

          case 18:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJnaXRodWJfYmFzZV91cmwiLCJyZXF1ZXN0R2l0aHViIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImhlYWRlcnMiLCJpc1NlcnZlciIsInJlcXVlc3QiLCJyZXEiLCJyZXMiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsd0JBQXhCLEMsQ0FFQTs7U0FDZUMsYTs7RUFTZjs7Ozs0RUFUQSxpQkFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsRUFBZ0RDLE9BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlUCxLQUFLLENBQUM7QUFDakJLLGlCQUFHLFlBQUtILGVBQUwsU0FBdUJHLEdBQXZCLENBRGM7QUFFakJELG9CQUFNLEVBQU5BLE1BRmlCO0FBR2pCRSxrQkFBSSxFQUFKQSxJQUhpQjtBQUlqQkMscUJBQU8sRUFBUEE7QUFKaUIsYUFBRCxDQURwQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFVQSxJQUFNQyxRQUFRLFFBQWQ7O1NBQ2VDLE87Ozs7O3NFQUFmLHdCQUEyREMsR0FBM0QsRUFBZ0VDLEdBQWhFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBeUJQLE1BQXpCLEVBQXlCQSxNQUF6Qiw0QkFBa0MsS0FBbEMsZ0JBQXlDQyxHQUF6QyxRQUF5Q0EsR0FBekMsbUJBQThDQyxJQUE5QyxFQUE4Q0EsSUFBOUMsMEJBQXFELEVBQXJEOztBQUFBLGdCQUNPRCxHQURQO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUVVTyxLQUFLLENBQUMsa0JBQUQsQ0FGZjs7QUFBQTtBQUlFQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlKLEdBQVosRUFBaUIscUJBQWpCOztBQUpGLGlCQU1NRixRQU5OO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQXVCaUJSLEtBQUssQ0FBQztBQUNqQkssaUJBQUcsbUJBQVlBLEdBQVosQ0FEYztBQUVqQkQsb0JBQU0sRUFBTkEsTUFGaUI7QUFHakJFLGtCQUFJLEVBQUpBO0FBSGlCLGFBQUQsQ0F2QnRCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQStCQVMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZQLFNBQU8sRUFBUEEsT0FEZTtBQUVmTixlQUFhLEVBQWJBO0FBRmUsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzUxNjBmNTYzNzM2YWY3ODJjODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOS4k+mXqOWkhOeQhiBnZXRJbml0YWxQcm9wcyDor7fmsYLmjqXlj6Plip/og73nmoTnm7jlhbPlh73mlbBcclxuLy8g55Sx5LqO5Zyo5a6i5oi356uv5omn6KGM5Y+I6KaB5Zyo5pyN5Yqh56uv5omn6KGM77yM5omA5Lul5LiN55u05o6l5L2/55SoIGV4cG9ydHMg6L+Z6K+t5rOV77yM5ZyoIG5kb2UuanMg55uu5YmN5LiN5pSv5oyBXHJcblxyXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbmNvbnN0IGdpdGh1Yl9iYXNlX3VybCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xyXG5cclxuLy8g6L+Z5Liq5pa55rOV5bCx5piv5Y2V57qv55qE5ZCR5pyN5Yqh56uv5Y+R6LW36K+35rGC55qE5pa55rOVXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpIHtcclxuICByZXR1cm4gYXdhaXQgYXhpb3Moe1xyXG4gICAgdXJsOiBgJHtnaXRodWJfYmFzZV91cmx9JHt1cmx9YCxcclxuICAgIG1ldGhvZCxcclxuICAgIGRhdGEsXHJcbiAgICBoZWFkZXJzLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmnI3liqHnq69cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0KHsgbWV0aG9kID0gXCJHRVRcIiwgdXJsLCBkYXRhID0ge30gfSwgcmVxLCByZXMpIHtcclxuICBpZiAoIXVybCkge1xyXG4gICAgdGhyb3cgRXJyb3IoXCJ1cmwgbXVzdCBwcm92aWRlXCIpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhyZXEsIDExMTExMTExMTExMTExMTExMTExMSk7XHJcblxyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgLy8g5pyN5Yqh56uvXHJcbiAgICByZXR1cm47XHJcbiAgICBjb25zdCB7IHNlc3Npb24gfSA9IHJlcTtcclxuICAgIGNvbnN0IGdpdGh1YkF1dGggPSBzZXNzaW9uLmdpdGh1YkF1dGggfHwge307XHJcbiAgICAvLyDor7fmsYIgZ2l0aHViIOaVsOaNrlxyXG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgaWYgKGdpdGh1YkF1dGguYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgIGhlYWRlcnNbXHJcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCJcclxuICAgICAgXSA9IGAke2dpdGh1YkF1dGgudG9rZW5fdHlwZX0gJHtnaXRodWJBdXRoLmFjY2Vzc190b2tlbn1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDlrqLmiLfnq68gLSDmiJHku6zmmK/pnIDopoHor7fmsYLoh6rlt7HnmoTmnI3liqHnmoTvvIzmiJHku6zoh6rlt7HnmoTmnI3liqHlr7nkuo4gVVJMIOS5n+S8mui/m+ihjOWkhOeQhlxyXG4gICAgLy8gL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCA9PiAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4gICAgLy8g6L+Z5qC35oiR5Lus5pyN5Yqh56uv6YCa6L+H5Yik5patIC9naXRodWIg5byA5aS055qE6L+Z5Liq6K+35rGC55qE5Zyw5Z2A6L+b6KGM5LiA5Liq54m55q6K55qE5aSE55CGXHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3Moe1xyXG4gICAgICB1cmw6IGAvZ2l0aHViJHt1cmx9YCxcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZXF1ZXN0LFxyXG4gIHJlcXVlc3RHaXRodWIsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=