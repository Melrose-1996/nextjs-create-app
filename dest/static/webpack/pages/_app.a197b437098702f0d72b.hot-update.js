webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PageLoading */ "./components/PageLoading.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_my_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/my-context */ "./lib/my-context.js");
/* harmony import */ var _lib_with_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/with-redux */ "./lib/with-redux.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/store */ "./store/store.js");





var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import Router from "next/router";






 // 高阶组件


 // 用于判断是否处于 window 的环境

var isServer = false;
var __NEXT_REUDEX_STORE__ = "__NEXT_REUDEX_STORE__";

function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      reduxStore = _ref.reduxStore;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var handleStart = function handleStart() {
      return setLoading(true);
    };

    var handleComplete = function handleComplete() {
      return setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete); // 搜索仓库
    // axios
    //   .get("/github/search/repositories?q=react")
    //   .then((resp) => console.log(resp));

    return function () {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }); // return loading && <div>Loading....{/*I have an animation here*/}</div>;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
    store: reduxStore,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_lib_my_context__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
        value: "Melrose",
        children: [loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_PageLoading__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 22
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(MyApp, "MsU76xFyrXlTQc09gEkuFgUxVXA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"]];
});

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
    var appProps;
    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_6___default.a.getInitialProps(appContext);

          case 2:
            appProps = _context.sent;
            return _context.abrupt("return", _objectSpread({}, appProps));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(); // 创建 store 的方法


function getOrCreateStore(initialState) {
  // 服务端的情况
  if (isServer) {
    return Object(_store_store__WEBPACK_IMPORTED_MODULE_14__["default"])(initialState);
  } // 不是服务端的情况


  if (!window[__NEXT_REUDEX_STORE__]) {
    window[__NEXT_REUDEX_STORE__] = Object(_store_store__WEBPACK_IMPORTED_MODULE_14__["default"])(initialState);
  }

  return window[__NEXT_REUDEX_STORE__];
}

next_app__WEBPACK_IMPORTED_MODULE_6___default.a.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var reduxStore, req, session;
    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // 我们需要创建一个 store
            if (isServer) {
              req = ctx.ctx.req;
              session = req.session;

              if (session && session.userInfo) {
                reduxStore = getOrCreateStore({
                  user: session.userInfo
                });
              } else {
                reduxStore = getOrCreateStore();
              }
            } else {
              reduxStore = getOrCreateStore();
            }

            ctx.reduxStore = reduxStore; // let appProps = {};
            // if (typeof App.getInitialProps === "function") {
            //   appProps = await App.getInitialProps(ctx);
            // }

            return _context2.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              initialReduxState: reduxStore.getState()
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_lib_with_redux__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJpc1NlcnZlciIsIl9fTkVYVF9SRVVERVhfU1RPUkVfXyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVkdXhTdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiQXBwIiwiYXBwUHJvcHMiLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJ3aW5kb3ciLCJjdHgiLCJyZXEiLCJzZXNzaW9uIiwidXNlckluZm8iLCJ1c2VyIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInRlc3RIb2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Q0FJQTs7QUFDQTtDQUdBOztBQUNBLElBQU1BLFFBQVEsUUFBZDtBQUVBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5Qjs7QUFFQSxTQUFTQyxLQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDbkQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEbUQsa0JBRXJCQyxzREFBUSxDQUFDLEtBQUQsQ0FGYTtBQUFBLE1BRTVDQyxPQUY0QztBQUFBLE1BRW5DQyxVQUZtQzs7QUFJbkRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxX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RCxNQVVPO0FBQ0xoQix3QkFBVSxHQUFHZ0IsZ0JBQWdCLEVBQTdCO0FBQ0Q7O0FBRURJLGVBQUcsQ0FBQ3BCLFVBQUosR0FBaUJBLFVBQWpCLENBbkJvQixDQW9CcEI7QUFDQTtBQUNBO0FBQ0E7O0FBdkJvQiw4RUEwQmZlLFFBMUJlO0FBMkJsQlUsK0JBQWlCLEVBQUV6QixVQUFVLENBQUMwQixRQUFYO0FBM0JEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQStCZSxxRUFBQUMsZ0VBQU8sQ0FBQzlCLEtBQUQsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMTk3YjQzNzA5ODcwMmYwZDcyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5cclxuLy8gaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlTG9hZGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBNeUNvbnRleHQgZnJvbSBcIi4uL2xpYi9teS1jb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgdGVzdEhvYyBmcm9tIFwiLi4vbGliL3dpdGgtcmVkdXhcIjtcclxuXHJcbi8vIOmrmOmYtue7hOS7tlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcclxuXHJcbi8vIOeUqOS6juWIpOaWreaYr+WQpuWkhOS6jiB3aW5kb3cg55qE546v5aKDXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmNvbnN0IF9fTkVYVF9SRVVERVhfU1RPUkVfXyA9IFwiX19ORVhUX1JFVURFWF9TVE9SRV9fXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVN0YXJ0KTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKTtcclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZUNvbXBsZXRlKTtcclxuXHJcbiAgICAvLyDmkJzntKLku5PlupNcclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5nZXQoXCIvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiKVxyXG4gICAgLy8gICAudGhlbigocmVzcCkgPT4gY29uc29sZS5sb2cocmVzcCkpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVTdGFydCk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVDb21wbGV0ZSk7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICAvLyByZXR1cm4gbG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi4uey8qSSBoYXZlIGFuIGFuaW1hdGlvbiBoZXJlKi99PC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8TXlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPVwiTWVscm9zZVwiPlxyXG4gICAgICAgICAgey8qIDxQYWdlTG9hZGluZyAvPiAqL31cclxuICAgICAgICAgIHtsb2FkaW5nID8gPFBhZ2VMb2FkaW5nIC8+IDogbnVsbH1cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L015Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gIHJldHVybiB7IC4uLmFwcFByb3BzIH07XHJcbn07XHJcblxyXG4vLyDliJvlu7ogc3RvcmUg55qE5pa55rOVXHJcbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgLy8g5pyN5Yqh56uv55qE5oOF5Ya1XHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcbiAgLy8g5LiN5piv5pyN5Yqh56uv55qE5oOF5Ya1XHJcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFVURFWF9TVE9SRV9fXSkge1xyXG4gICAgd2luZG93W19fTkVYVF9SRVVERVhfU1RPUkVfX10gPSBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRVVERVhfU1RPUkVfX107XHJcbn1cclxuXHJcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgLy8g5oiR5Lus6ZyA6KaB5Yib5bu65LiA5LiqIHN0b3JlXHJcblxyXG4gIGxldCByZWR1eFN0b3JlO1xyXG5cclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIGNvbnN0IHsgcmVxIH0gPSBjdHguY3R4O1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHJlcS5zZXNzaW9uO1xyXG4gICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VySW5mbykge1xyXG4gICAgICByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSh7XHJcbiAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VySW5mbyxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xyXG4gIC8vIGxldCBhcHBQcm9wcyA9IHt9O1xyXG4gIC8vIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgLy8gICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5hcHBQcm9wcyxcclxuICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RIb2MoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9