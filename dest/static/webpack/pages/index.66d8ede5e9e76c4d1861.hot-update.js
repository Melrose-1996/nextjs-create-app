webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

// // 专门处理 getInitalProps 请求接口功能的相关函数
// // 由于在客户端执行又要在服务端执行，所以不直接使用 exports 这语法，在 ndoe.js 目前不支持
// const axios = require("axios");
// const github_base_url = "https://api.github.com";
// // 这个方法就是单纯的向服务端发起请求的方法
// async function requestGithub(method, url, data, headers) {
//   return await axios({
//     url: `${github_base_url}${url}`,
//     method,
//     data,
//     headers,
//   });
// }
// // 服务端
// const isServer = typeof window === "undefined";
// async function request({ method = "GET", url, data = {} }, req, res) {
//   if (!url) {
//     throw Error("url must provide");
//   }
//   if (isServer) {
//     // 服务端
//     console.log(req, 111);
//     const { session } = req;
//     const githubAuth = session.githubAuth || {};
//     // 请求 github 数据
//     const headers = {};
//     if (githubAuth.access_token) {
//       headers[
//         "Authorization"
//       ] = `${githubAuth.token_type} ${githubAuth.access_token}`;
//     }
//     return await requestGithub(method, url, data, headers);
//   } else {
//     // 客户端 - 我们是需要请求自己的服务的，我们自己的服务对于 URL 也会进行处理
//     // /search/repositories?q=react => /github/search/repositories?q=react
//     // 这样我们服务端通过判断 /github 开头的这个请求的地址进行一个特殊的处理
//     return await axios({
//       url: `/github${url}`,
//       method,
//       data,
//     });
//   }
// }
// module.exports = {
//   request,
//   requestGithub,
// };
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var GITHUB_BASE_URL = "https://api.github.com";
var isServer = false; // 服务端环境需要手动拼接url

function requestGithub(_x, _x2, _x3, _x4) {
  return _requestGithub.apply(this, arguments);
}

function _requestGithub() {
  _requestGithub = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, data, headers) {
    var result;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (url) {
              _context.next = 2;
              break;
            }

            throw new Error("url must be provided");

          case 2:
            _context.next = 4;
            return axios({
              method: method,
              url: "".concat(GITHUB_BASE_URL).concat(url),
              data: data,
              headers: headers
            });

          case 4:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestGithub.apply(this, arguments);
}

function request(_x5, _x6, _x7) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref, req, res) {
    var _ref$method, method, url, _ref$data, data, session, _ref2, githubAuth, _ref3, access_token, token_type, headers, serverResult, clientResult;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref$method = _ref.method, method = _ref$method === void 0 ? "GET" : _ref$method, url = _ref.url, _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data;

            if (!isServer) {
              _context2.next = 11;
              break;
            }

            session = req.session;
            _ref2 = session || {}, githubAuth = _ref2.githubAuth;
            _ref3 = githubAuth || {}, access_token = _ref3.access_token, token_type = _ref3.token_type;
            headers = {};

            if (access_token) {
              headers.Authorization = "".concat(token_type, " ").concat(access_token);
            } // 服务端走requestGithub方法，
            // 补全api的前缀


            _context2.next = 9;
            return requestGithub(method, url, data, headers);

          case 9:
            serverResult = _context2.sent;
            return _context2.abrupt("return", serverResult);

          case 11:
            _context2.next = 13;
            return axios({
              method: method,
              url: "/github".concat(url),
              data: data
            });

          case 13:
            clientResult = _context2.sent;
            return _context2.abrupt("return", clientResult);

          case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJHSVRIVUJfQkFTRV9VUkwiLCJpc1NlcnZlciIsInJlcXVlc3RHaXRodWIiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiaGVhZGVycyIsIkVycm9yIiwicmVzdWx0IiwicmVxdWVzdCIsInJlcSIsInJlcyIsInNlc3Npb24iLCJnaXRodWJBdXRoIiwiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSIsIkF1dGhvcml6YXRpb24iLCJzZXJ2ZXJSZXN1bHQiLCJjbGllbnRSZXN1bHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsd0JBQXhCO0FBRUEsSUFBTUMsUUFBUSxRQUFkLEMsQ0FFQTs7U0FDZUMsYTs7Ozs7NEVBQWYsaUJBQTZCQyxNQUE3QixFQUFxQ0MsR0FBckMsRUFBMENDLElBQTFDLEVBQWdEQyxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDT0YsR0FEUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFFVSxJQUFJRyxLQUFKLENBQVUsc0JBQVYsQ0FGVjs7QUFBQTtBQUFBO0FBQUEsbUJBSXVCVCxLQUFLLENBQUM7QUFDekJLLG9CQUFNLEVBQU5BLE1BRHlCO0FBRXpCQyxpQkFBRyxZQUFLSixlQUFMLFNBQXVCSSxHQUF2QixDQUZzQjtBQUd6QkMsa0JBQUksRUFBSkEsSUFIeUI7QUFJekJDLHFCQUFPLEVBQVBBO0FBSnlCLGFBQUQsQ0FKNUI7O0FBQUE7QUFJUUUsa0JBSlI7QUFBQSw2Q0FXU0EsTUFYVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBY2VDLE87Ozs7O3NFQUFmLHdCQUEyREMsR0FBM0QsRUFBZ0VDLEdBQWhFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBeUJSLE1BQXpCLEVBQXlCQSxNQUF6Qiw0QkFBa0MsS0FBbEMsZ0JBQXlDQyxHQUF6QyxRQUF5Q0EsR0FBekMsbUJBQThDQyxJQUE5QyxFQUE4Q0EsSUFBOUMsMEJBQXFELEVBQXJEOztBQUFBLGlCQUNNSixRQUROO0FBQUE7QUFBQTtBQUFBOztBQUVZVyxtQkFGWixHQUV3QkYsR0FGeEIsQ0FFWUUsT0FGWjtBQUFBLG9CQUcyQkEsT0FBTyxJQUFJLEVBSHRDLEVBR1lDLFVBSFosU0FHWUEsVUFIWjtBQUFBLG9CQUl5Q0EsVUFBVSxJQUFJLEVBSnZELEVBSVlDLFlBSlosU0FJWUEsWUFKWixFQUkwQkMsVUFKMUIsU0FJMEJBLFVBSjFCO0FBS1VULG1CQUxWLEdBS29CLEVBTHBCOztBQU1JLGdCQUFJUSxZQUFKLEVBQWtCO0FBQ2hCUixxQkFBTyxDQUFDVSxhQUFSLGFBQTJCRCxVQUEzQixjQUF5Q0QsWUFBekM7QUFDRCxhQVJMLENBU0k7QUFDQTs7O0FBVko7QUFBQSxtQkFXK0JaLGFBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE9BQXBCLENBWDVDOztBQUFBO0FBV1VXLHdCQVhWO0FBQUEsOENBWVdBLFlBWlg7O0FBQUE7QUFBQTtBQUFBLG1CQWdCNkJuQixLQUFLLENBQUM7QUFDL0JLLG9CQUFNLEVBQU5BLE1BRCtCO0FBRS9CQyxpQkFBRyxtQkFBWUEsR0FBWixDQUY0QjtBQUcvQkMsa0JBQUksRUFBSkE7QUFIK0IsYUFBRCxDQWhCbEM7O0FBQUE7QUFnQlFhLHdCQWhCUjtBQUFBLDhDQXFCU0EsWUFyQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXdCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZYLFNBQU8sRUFBUEEsT0FEZTtBQUVmUCxlQUFhLEVBQWJBO0FBRmUsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZkOGVkZTVlOWU3NmM0ZDE4NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIOS4k+mXqOWkhOeQhiBnZXRJbml0YWxQcm9wcyDor7fmsYLmjqXlj6Plip/og73nmoTnm7jlhbPlh73mlbBcclxuLy8gLy8g55Sx5LqO5Zyo5a6i5oi356uv5omn6KGM5Y+I6KaB5Zyo5pyN5Yqh56uv5omn6KGM77yM5omA5Lul5LiN55u05o6l5L2/55SoIGV4cG9ydHMg6L+Z6K+t5rOV77yM5ZyoIG5kb2UuanMg55uu5YmN5LiN5pSv5oyBXHJcblxyXG4vLyBjb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcclxuXHJcbi8vIGNvbnN0IGdpdGh1Yl9iYXNlX3VybCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xyXG5cclxuLy8gLy8g6L+Z5Liq5pa55rOV5bCx5piv5Y2V57qv55qE5ZCR5pyN5Yqh56uv5Y+R6LW36K+35rGC55qE5pa55rOVXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpIHtcclxuLy8gICByZXR1cm4gYXdhaXQgYXhpb3Moe1xyXG4vLyAgICAgdXJsOiBgJHtnaXRodWJfYmFzZV91cmx9JHt1cmx9YCxcclxuLy8gICAgIG1ldGhvZCxcclxuLy8gICAgIGRhdGEsXHJcbi8vICAgICBoZWFkZXJzLFxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyAvLyDmnI3liqHnq69cclxuLy8gY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG4vLyBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KHsgbWV0aG9kID0gXCJHRVRcIiwgdXJsLCBkYXRhID0ge30gfSwgcmVxLCByZXMpIHtcclxuLy8gICBpZiAoIXVybCkge1xyXG4vLyAgICAgdGhyb3cgRXJyb3IoXCJ1cmwgbXVzdCBwcm92aWRlXCIpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgaWYgKGlzU2VydmVyKSB7XHJcbi8vICAgICAvLyDmnI3liqHnq69cclxuLy8gICAgIGNvbnNvbGUubG9nKHJlcSwgMTExKTtcclxuLy8gICAgIGNvbnN0IHsgc2Vzc2lvbiB9ID0gcmVxO1xyXG4vLyAgICAgY29uc3QgZ2l0aHViQXV0aCA9IHNlc3Npb24uZ2l0aHViQXV0aCB8fCB7fTtcclxuLy8gICAgIC8vIOivt+axgiBnaXRodWIg5pWw5o2uXHJcbi8vICAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbi8vICAgICBpZiAoZ2l0aHViQXV0aC5hY2Nlc3NfdG9rZW4pIHtcclxuLy8gICAgICAgaGVhZGVyc1tcclxuLy8gICAgICAgICBcIkF1dGhvcml6YXRpb25cIlxyXG4vLyAgICAgICBdID0gYCR7Z2l0aHViQXV0aC50b2tlbl90eXBlfSAke2dpdGh1YkF1dGguYWNjZXNzX3Rva2VufWA7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdEdpdGh1YihtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycyk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIC8vIOWuouaIt+erryAtIOaIkeS7rOaYr+mcgOimgeivt+axguiHquW3seeahOacjeWKoeeahO+8jOaIkeS7rOiHquW3seeahOacjeWKoeWvueS6jiBVUkwg5Lmf5Lya6L+b6KGM5aSE55CGXHJcbi8vICAgICAvLyAvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0ID0+IC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XHJcbi8vICAgICAvLyDov5nmoLfmiJHku6zmnI3liqHnq6/pgJrov4fliKTmlq0gL2dpdGh1YiDlvIDlpLTnmoTov5nkuKror7fmsYLnmoTlnLDlnYDov5vooYzkuIDkuKrnibnmrornmoTlpITnkIZcclxuLy8gICAgIHJldHVybiBhd2FpdCBheGlvcyh7XHJcbi8vICAgICAgIHVybDogYC9naXRodWIke3VybH1gLFxyXG4vLyAgICAgICBtZXRob2QsXHJcbi8vICAgICAgIGRhdGEsXHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0ge1xyXG4vLyAgIHJlcXVlc3QsXHJcbi8vICAgcmVxdWVzdEdpdGh1YixcclxuLy8gfTtcclxuXHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xyXG5cclxuY29uc3QgR0lUSFVCX0JBU0VfVVJMID0gXCJodHRwczovL2FwaS5naXRodWIuY29tXCI7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4vLyDmnI3liqHnq6/njq/looPpnIDopoHmiYvliqjmi7zmjqV1cmxcclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEdpdGh1YihtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycykge1xyXG4gIGlmICghdXJsKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmwgbXVzdCBiZSBwcm92aWRlZFwiKTtcclxuICB9XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgbWV0aG9kLFxyXG4gICAgdXJsOiBgJHtHSVRIVUJfQkFTRV9VUkx9JHt1cmx9YCxcclxuICAgIGRhdGEsXHJcbiAgICBoZWFkZXJzLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0KHsgbWV0aG9kID0gXCJHRVRcIiwgdXJsLCBkYXRhID0ge30gfSwgcmVxLCByZXMpIHtcclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbiB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyBnaXRodWJBdXRoIH0gPSBzZXNzaW9uIHx8IHt9O1xyXG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4sIHRva2VuX3R5cGUgfSA9IGdpdGh1YkF1dGggfHwge307XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICBpZiAoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGAke3Rva2VuX3R5cGV9ICR7YWNjZXNzX3Rva2VufWA7XHJcbiAgICB9XHJcbiAgICAvLyDmnI3liqHnq6/otbByZXF1ZXN0R2l0aHVi5pa55rOV77yMXHJcbiAgICAvLyDooaXlhahhcGnnmoTliY3nvIBcclxuICAgIGNvbnN0IHNlcnZlclJlc3VsdCA9IGF3YWl0IHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpO1xyXG4gICAgcmV0dXJuIHNlcnZlclJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIOWuouaIt+err+mcgOimgeaLvOaOpWdpdGh1YuWJjee8gCDorqlrb2HnmoRzZXJ2ZXLlj6/ku6Xor4bliKvlubbku6PnkIZcclxuICBjb25zdCBjbGllbnRSZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBtZXRob2QsXHJcbiAgICB1cmw6IGAvZ2l0aHViJHt1cmx9YCxcclxuICAgIGRhdGEsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudFJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcmVxdWVzdCxcclxuICByZXF1ZXN0R2l0aHViLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9