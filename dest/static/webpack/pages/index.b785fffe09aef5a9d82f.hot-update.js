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
  var _ref = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var result;
    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(ctx, 111111111111111111111111); // 报 Error: connect ECONNREFUSED 127.0.0.1:80 的错误
            // 如果是在浏览器里面发送的，会根据我们提供的路径会自动加上我们当前网站的域名（就是http://localhost:3000/）所以它完整请求路径就是 http://localhost:3000/github/search/repositories?q=react
            // 如果是在服务端渲染的时候进行执行的话，所以没有浏览器里面的域名的，这个时候请求的路径自动在 axios 里面增加的 http://127.0.0.1（默认80端口）/github/search/repositories?q=react，这个时候就不对了，我们 80 端口没有启动，也不是我们想请求的地址
            // const result = await axios
            //   .get("/github/search/repositories?q=react")
            //   .then((resp) => console.log(resp));
            // 注意 req 和 res 只有在服务端渲染的时候才会有

            _context.next = 3;
            return api.request({
              url: "/search/repositories?q=react"
            }, ctx.req, ctx.res);

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
    return _ref.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpIiwicmVxdWlyZSIsIkluZGV4IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQW5COztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQsQyxDQUdBO0FBRUE7OztLQUxNQSxLOztBQU1OQSxLQUFLLENBQUNDLGVBQU47QUFBQSxvVUFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFBaUIsd0JBQWpCLEVBRHNCLENBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVRzQjtBQUFBLG1CQVVESixHQUFHLENBQUNPLE9BQUosQ0FDbkI7QUFBRUMsaUJBQUcsRUFBRTtBQUFQLGFBRG1CLEVBRW5CSixHQUFHLENBQUNLLEdBRmUsRUFHbkJMLEdBQUcsQ0FBQ00sR0FIZSxDQVZDOztBQUFBO0FBVWhCQyxrQkFWZ0I7QUFBQSw2Q0FnQmY7QUFDTEMsa0JBQUksRUFBRUQsTUFBTSxDQUFDQztBQURSLGFBaEJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCZVYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc4NWZmZmUwOWFlZjVhOWQ4MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbn07XHJcbi8vIOazqOaEj+aIkeS7rOWcqOe7hOS7tuS4re+8iGdldEluaXRpYWxQcm9wc++8ieS4re+8jOWPquS8muS9v+eUqOWIsCByZXF1ZXN0IO+8jOWboOS4uiByZXF1ZXN0IOS8muW4ruWKqeaIkeS7rOWOu+WIpOaWreaYr+WuouaIt+err+i/mOaYr+acjeWKoeerr1xyXG5cclxuLy8g5rOo5oSPIGdldEluaXRpYWxQcm9wcyDkvJrlnKjlrqLmiLfnq6/kuI3lkIzpobXpnaLot7PovaznmoTml7blgJnkvb/nlKjvvIzlkIzmoLfmnI3liqHnq6/lpoLmnpzmiJHku6zorr/pl67nmoTmmK8gaW5kZXgg6L+Z5Liq6aG16Z2i77yM5Lmf5Lya6LCD55SoIGdldEluaXRpYWxQcm9wc++8jOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeiwg+eUqOeahOaXtuWAme+8jOaIkeS7rOeahOi/kOihjOeOr+Wig+WkhOS6jiBub2RlLmpzIOeOr+Wig++8jOiAjOS4jeaYr+a1j+iniOWZqOeahOeOr+Wig++8jOWmguaenOaIkeS7rOWcqCBub2RlLmpzIOeahOeOr+Wig+S4i+ivt+axguWwseS8muWHuueOsOivt+axgueahOaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvIOi/meagt+eahOWcsOWdgO+8jOaJgOS7peS8muWksei0pe+8iOm7mOiupOeahOerr+WPo+aYrzgw77yJXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zb2xlLmxvZyhjdHgsIDExMTExMTExMTExMTExMTExMTExMTExMSk7XHJcbiAgLy8g5oqlIEVycm9yOiBjb25uZWN0IEVDT05OUkVGVVNFRCAxMjcuMC4wLjE6ODAg55qE6ZSZ6K+vXHJcbiAgLy8g5aaC5p6c5piv5Zyo5rWP6KeI5Zmo6YeM6Z2i5Y+R6YCB55qE77yM5Lya5qC55o2u5oiR5Lus5o+Q5L6b55qE6Lev5b6E5Lya6Ieq5Yqo5Yqg5LiK5oiR5Lus5b2T5YmN572R56uZ55qE5Z+f5ZCN77yI5bCx5pivaHR0cDovL2xvY2FsaG9zdDozMDAwL++8ieaJgOS7peWug+WujOaVtOivt+axgui3r+W+hOWwseaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4gIC8vIOWmguaenOaYr+WcqOacjeWKoeerr+a4suafk+eahOaXtuWAmei/m+ihjOaJp+ihjOeahOivne+8jOaJgOS7peayoeaciea1j+iniOWZqOmHjOmdoueahOWfn+WQjeeahO+8jOi/meS4quaXtuWAmeivt+axgueahOi3r+W+hOiHquWKqOWcqCBheGlvcyDph4zpnaLlop7liqDnmoQgaHR0cDovLzEyNy4wLjAuMe+8iOm7mOiupDgw56uv5Y+j77yJL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3TvvIzov5nkuKrml7blgJnlsLHkuI3lr7nkuobvvIzmiJHku6wgODAg56uv5Y+j5rKh5pyJ5ZCv5Yqo77yM5Lmf5LiN5piv5oiR5Lus5oOz6K+35rGC55qE5Zyw5Z2AXHJcbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAvLyAgIC5nZXQoXCIvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiKVxyXG4gIC8vICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKTtcclxuXHJcbiAgLy8g5rOo5oSPIHJlcSDlkowgcmVzIOWPquacieWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeaJjeS8muaciVxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IFwiL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=