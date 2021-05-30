webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./components/SearchUser.jsx":
/*!***********************************!*\
  !*** ./components/SearchUser.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\SearchUser.jsx",
    _s = $RefreshSig$();



var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

function SearchUser() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var fetchUser = function fetchUser(value) {
    console.log(value);
    setFetching(true);
    setOptions([]); // 不需要传入 req 和 res ，因为这是一个要用户点输入才会执行的操作，肯定是在浏览器环境执行的内容

    _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (reps) {
      var data = reps.data.items.map(function (user) {
        return {
          text: user.login,
          value: user.login
        };
      });
      setFetching(false);
      setOptions(data);
    });
  }; // showSearch -> 表示的是 select 具有搜索功能
  // filterOption -> 用于 Select 组件现成已经有 Option 来出现了，这个时候我们输入框中输入文字，是输入我们现有的已经在 Option 里面的展示的这些内容。 因为我们要展示服务端的内容，所以设置为 false。


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: 200
    },
    showSearch: true,
    notFoundContent: fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 89
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "Nothing Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 113
    }, this),
    filterOption: false,
    placeholder: "\u521B\u5EFA\u8005",
    allowClear: true,
    onSearch: fetchUser,
    children: options.map(function (ops) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
        value: ops.value,
        children: ops.text
      }, ops.value, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 12
  }, this);
}

_s(SearchUser, "AUpXBd5o9VOz09DOLFL33RRAChQ=");

_c = SearchUser;
/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

var _c;

$RefreshReg$(_c, "SearchUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmZXRjaFVzZXIiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJhcGkiLCJyZXF1ZXN0IiwidXJsIiwidGhlbiIsInJlcHMiLCJkYXRhIiwiaXRlbXMiLCJtYXAiLCJ1c2VyIiwidGV4dCIsImxvZ2luIiwid2lkdGgiLCJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLHVEQUFPQSxNQUF0Qjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWNDLHNEQUFRLENBQUMsS0FBRCxDQUZ0QjtBQUFBLE1BRVhDLFFBRlc7QUFBQSxNQUVEQyxXQUZDOztBQUFBLG1CQUlZRixzREFBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUlYRyxPQUpXO0FBQUEsTUFJRkMsVUFKRTs7QUFNbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsS0FBSyxFQUFJO0FBQ3ZCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBSixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLGNBQVUsQ0FBQyxFQUFELENBQVYsQ0FKdUIsQ0FLdkI7O0FBQ0FLLG1EQUFHLENBQUNDLE9BQUosQ0FBWTtBQUNSQyxTQUFHLDRCQUFxQkwsS0FBckI7QUFESyxLQUFaLEVBRUdNLElBRkgsQ0FFUSxVQUFBQyxJQUFJLEVBQUk7QUFDWixVQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsZUFBSztBQUN0Q0MsY0FBSSxFQUFFRCxJQUFJLENBQUNFLEtBRDJCO0FBRXRDYixlQUFLLEVBQUVXLElBQUksQ0FBQ0U7QUFGMEIsU0FBTDtBQUFBLE9BQXhCLENBQWI7QUFJQWpCLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUNVLElBQUQsQ0FBVjtBQUNILEtBVEQ7QUFZSCxHQWxCRCxDQU5rQixDQXlCbEI7QUFDQTs7O0FBQ0Esc0JBQU87QUFBUSxTQUFLLEVBQUU7QUFBRU0sV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUErQixjQUFVLEVBQUUsSUFBM0M7QUFBaUQsbUJBQWUsRUFBRW5CLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHO0FBQWlJLGdCQUFZLEVBQUUsS0FBL0k7QUFBc0osZUFBVyxFQUFDLG9CQUFsSztBQUF3SyxjQUFVLEVBQUUsSUFBcEw7QUFBMEwsWUFBUSxFQUFFSSxTQUFwTTtBQUFBLGNBRUNGLE9BQU8sQ0FBQ2EsR0FBUixDQUFZLFVBQUFLLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFQSxHQUFHLENBQUNmLEtBQW5CO0FBQUEsa0JBQTJDZSxHQUFHLENBQUNIO0FBQS9DLFNBQStCRyxHQUFHLENBQUNmLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0FqQ1FQLFU7O0tBQUFBLFU7QUFtQ01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuODIwNmZjMDIzNjEyODNmYmM1YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoVXNlcigpIHtcclxuXHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlciA9IHZhbHVlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpXHJcbiAgICAgICAgc2V0T3B0aW9ucyhbXSlcclxuICAgICAgICAvLyDkuI3pnIDopoHkvKDlhaUgcmVxIOWSjCByZXMg77yM5Zug5Li66L+Z5piv5LiA5Liq6KaB55So5oi354K56L6T5YWl5omN5Lya5omn6KGM55qE5pON5L2c77yM6IKv5a6a5piv5Zyo5rWP6KeI5Zmo546v5aKD5omn6KGM55qE5YaF5a65XHJcbiAgICAgICAgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAvc2VhcmNoL3VzZXJzP3E9JHt2YWx1ZX1gXHJcbiAgICAgICAgfSkudGhlbihyZXBzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcHMuZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLmxvZ2luXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0T3B0aW9ucyhkYXRhKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuICAgIC8vIHNob3dTZWFyY2ggLT4g6KGo56S655qE5pivIHNlbGVjdCDlhbfmnInmkJzntKLlip/og71cclxuICAgIC8vIGZpbHRlck9wdGlvbiAtPiDnlKjkuo4gU2VsZWN0IOe7hOS7tueOsOaIkOW3sue7j+aciSBPcHRpb24g5p2l5Ye6546w5LqG77yM6L+Z5Liq5pe25YCZ5oiR5Lus6L6T5YWl5qGG5Lit6L6T5YWl5paH5a2X77yM5piv6L6T5YWl5oiR5Lus546w5pyJ55qE5bey57uP5ZyoIE9wdGlvbiDph4zpnaLnmoTlsZXnpLrnmoTov5nkupvlhoXlrrnjgIIg5Zug5Li65oiR5Lus6KaB5bGV56S65pyN5Yqh56uv55qE5YaF5a6577yM5omA5Lul6K6+572u5Li6IGZhbHNl44CCXHJcbiAgICByZXR1cm4gPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogMjAwIH19IHNob3dTZWFyY2g9e3RydWV9IG5vdEZvdW5kQ29udGVudD17ZmV0Y2hpbmcgPyA8U3BpbiBzaXplPSdzbWFsbCcgLz4gOiA8c3Bhbj5Ob3RoaW5nIEZvdW5kPC9zcGFuPn0gZmlsdGVyT3B0aW9uPXtmYWxzZX0gcGxhY2Vob2xkZXI9J+WIm+W7uuiAhScgYWxsb3dDbGVhcj17dHJ1ZX0gb25TZWFyY2g9e2ZldGNoVXNlcn0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1hcChvcHMgPT4gPE9wdGlvbiB2YWx1ZT17b3BzLnZhbHVlfSBrZXk9e29wcy52YWx1ZX0+e29wcy50ZXh0fTwvT3B0aW9uPilcclxuICAgICAgICB9XHJcbiAgICA8L1NlbGVjdD5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFVzZXIiXSwic291cmNlUm9vdCI6IiJ9