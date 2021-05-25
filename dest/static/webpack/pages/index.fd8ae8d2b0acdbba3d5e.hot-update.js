webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// // 专门处理 getInitalProps 请求接口功能的相关函数
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

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkOGFlOGQyYjBhY2RiYmEzZDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyDkuJPpl6jlpITnkIYgZ2V0SW5pdGFsUHJvcHMg6K+35rGC5o6l5Y+j5Yqf6IO955qE55u45YWz5Ye95pWwXHJcbi8vIC8vIOeUseS6juWcqOWuouaIt+err+aJp+ihjOWPiOimgeWcqOacjeWKoeerr+aJp+ihjO+8jOaJgOS7peS4jeebtOaOpeS9v+eUqCBleHBvcnRzIOi/meivreazle+8jOWcqCBuZG9lLmpzIOebruWJjeS4jeaUr+aMgVxyXG5cclxuLy8gY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XHJcblxyXG4vLyBjb25zdCBnaXRodWJfYmFzZV91cmwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb21cIjtcclxuXHJcbi8vIC8vIOi/meS4quaWueazleWwseaYr+WNlee6r+eahOWQkeacjeWKoeerr+WPkei1t+ivt+axgueahOaWueazlVxyXG4vLyBhc3luYyBmdW5jdGlvbiByZXF1ZXN0R2l0aHViKG1ldGhvZCwgdXJsLCBkYXRhLCBoZWFkZXJzKSB7XHJcbi8vICAgcmV0dXJuIGF3YWl0IGF4aW9zKHtcclxuLy8gICAgIHVybDogYCR7Z2l0aHViX2Jhc2VfdXJsfSR7dXJsfWAsXHJcbi8vICAgICBtZXRob2QsXHJcbi8vICAgICBkYXRhLFxyXG4vLyAgICAgaGVhZGVycyxcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuLy8gLy8g5pyN5Yqh56uvXHJcbi8vIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuLy8gYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCh7IG1ldGhvZCA9IFwiR0VUXCIsIHVybCwgZGF0YSA9IHt9IH0sIHJlcSwgcmVzKSB7XHJcbi8vICAgaWYgKCF1cmwpIHtcclxuLy8gICAgIHRocm93IEVycm9yKFwidXJsIG11c3QgcHJvdmlkZVwiKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGlmIChpc1NlcnZlcikge1xyXG4vLyAgICAgLy8g5pyN5Yqh56uvXHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXEsIDExMSk7XHJcbi8vICAgICBjb25zdCB7IHNlc3Npb24gfSA9IHJlcTtcclxuLy8gICAgIGNvbnN0IGdpdGh1YkF1dGggPSBzZXNzaW9uLmdpdGh1YkF1dGggfHwge307XHJcbi8vICAgICAvLyDor7fmsYIgZ2l0aHViIOaVsOaNrlxyXG4vLyAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4vLyAgICAgaWYgKGdpdGh1YkF1dGguYWNjZXNzX3Rva2VuKSB7XHJcbi8vICAgICAgIGhlYWRlcnNbXHJcbi8vICAgICAgICAgXCJBdXRob3JpemF0aW9uXCJcclxuLy8gICAgICAgXSA9IGAke2dpdGh1YkF1dGgudG9rZW5fdHlwZX0gJHtnaXRodWJBdXRoLmFjY2Vzc190b2tlbn1gO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICAvLyDlrqLmiLfnq68gLSDmiJHku6zmmK/pnIDopoHor7fmsYLoh6rlt7HnmoTmnI3liqHnmoTvvIzmiJHku6zoh6rlt7HnmoTmnI3liqHlr7nkuo4gVVJMIOS5n+S8mui/m+ihjOWkhOeQhlxyXG4vLyAgICAgLy8gL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCA9PiAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4vLyAgICAgLy8g6L+Z5qC35oiR5Lus5pyN5Yqh56uv6YCa6L+H5Yik5patIC9naXRodWIg5byA5aS055qE6L+Z5Liq6K+35rGC55qE5Zyw5Z2A6L+b6KGM5LiA5Liq54m55q6K55qE5aSE55CGXHJcbi8vICAgICByZXR1cm4gYXdhaXQgYXhpb3Moe1xyXG4vLyAgICAgICB1cmw6IGAvZ2l0aHViJHt1cmx9YCxcclxuLy8gICAgICAgbWV0aG9kLFxyXG4vLyAgICAgICBkYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcclxuLy8gICByZXF1ZXN0LFxyXG4vLyAgIHJlcXVlc3RHaXRodWIsXHJcbi8vIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=