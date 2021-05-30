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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\SearchUser.jsx",
    _s = $RefreshSig$();




var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

function SearchUser(_ref) {
  _s();

  var _this = this;

  var onChange = _ref.onChange,
      value = _ref.value;
  // 等同于 {current:0}
  var lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);
  lastFetchIdRef.current += 1;
  var fetchId = lastFetchIdRef.current;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])(function (value) {
    console.log(value);
    setFetching(true);
    setOptions([]); // 不需要传入 req 和 res ，因为这是一个要用户点输入才会执行的操作，肯定是在浏览器环境执行的内容

    _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (reps) {
      if (fetchId !== lastFetchIdRef.current) {
        return;
      }

      var data = reps.data.items.map(function (user) {
        return {
          text: user.login,
          value: user.login
        };
      });
      setFetching(false);
      setOptions(data);
    });
  }, 500), []);

  var handleChange = function handleChange(value) {
    setOptions([]);
    setFetching(false);
    onChange(value);
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
      lineNumber: 54,
      columnNumber: 89
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "Nothing Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 113
    }, this),
    filterOption: false,
    placeholder: "\u521B\u5EFA\u8005",
    allowClear: true,
    onSearch: fetchUser,
    onChange: handleChange,
    children: options.map(function (ops) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
        value: ops.value,
        children: ops.text
      }, ops.value, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 12
  }, this);
}

_s(SearchUser, "e4cQ9fw7GhcqepdKW0sg1IDqLaE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImxhc3RGZXRjaElkUmVmIiwidXNlUmVmIiwiY3VycmVudCIsImZldGNoSWQiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImZldGNoVXNlciIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwicmVxdWVzdCIsInVybCIsInRoZW4iLCJyZXBzIiwiZGF0YSIsIml0ZW1zIiwibWFwIiwidXNlciIsInRleHQiLCJsb2dpbiIsImhhbmRsZUNoYW5nZSIsIndpZHRoIiwib3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsdURBQU9BLE1BQXRCOztBQUVBLFNBQVNDLFVBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3JDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7QUFFQUQsZ0JBQWMsQ0FBQ0UsT0FBZixJQUEwQixDQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsY0FBYyxDQUFDRSxPQUEvQjs7QUFMcUMsa0JBT0xFLHNEQUFRLENBQUMsS0FBRCxDQVBIO0FBQUEsTUFPOUJDLFFBUDhCO0FBQUEsTUFPcEJDLFdBUG9COztBQUFBLG1CQVNQRixzREFBUSxDQUFDLEVBQUQsQ0FURDtBQUFBLE1BUzlCRyxPQVQ4QjtBQUFBLE1BU3JCQyxVQVRxQjs7QUFXckMsTUFBTUMsU0FBUyxHQUFHQyx5REFBVyxDQUFDQyx1REFBUSxDQUFDLFVBQUFaLEtBQUssRUFBSTtBQUM1Q2EsV0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7QUFFQU8sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxjQUFVLENBQUMsRUFBRCxDQUFWLENBSjRDLENBSzVDOztBQUNBTSxtREFBRyxDQUFDQyxPQUFKLENBQVk7QUFDUkMsU0FBRyw0QkFBcUJqQixLQUFyQjtBQURLLEtBQVosRUFFR2tCLElBRkgsQ0FFUSxVQUFBQyxJQUFJLEVBQUk7QUFDWixVQUFJZixPQUFPLEtBQUtILGNBQWMsQ0FBQ0UsT0FBL0IsRUFBd0M7QUFDcEM7QUFDSDs7QUFDRCxVQUFNaUIsSUFBSSxHQUFHRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLGVBQUs7QUFDdENDLGNBQUksRUFBRUQsSUFBSSxDQUFDRSxLQUQyQjtBQUV0Q3pCLGVBQUssRUFBRXVCLElBQUksQ0FBQ0U7QUFGMEIsU0FBTDtBQUFBLE9BQXhCLENBQWI7QUFJQWxCLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUNXLElBQUQsQ0FBVjtBQUNILEtBWkQ7QUFlSCxHQXJCcUMsRUFxQm5DLEdBckJtQyxDQUFULEVBcUJwQixFQXJCb0IsQ0FBN0I7O0FBc0JBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUMxQixLQUFELEVBQVc7QUFDNUJTLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBUixZQUFRLENBQUNDLEtBQUQsQ0FBUjtBQUNILEdBSkQsQ0FqQ3FDLENBeUNyQztBQUNBOzs7QUFDQSxzQkFBTztBQUFRLFNBQUssRUFBRTtBQUFFMkIsV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUErQixjQUFVLEVBQUUsSUFBM0M7QUFBaUQsbUJBQWUsRUFBRXJCLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHO0FBQWlJLGdCQUFZLEVBQUUsS0FBL0k7QUFBc0osZUFBVyxFQUFDLG9CQUFsSztBQUF3SyxjQUFVLEVBQUUsSUFBcEw7QUFBMEwsWUFBUSxFQUFFSSxTQUFwTTtBQUErTSxZQUFRLEVBQUVnQixZQUF6TjtBQUFBLGNBRUNsQixPQUFPLENBQUNjLEdBQVIsQ0FBWSxVQUFBTSxHQUFHO0FBQUEsMEJBQUkscUVBQUMsTUFBRDtBQUFRLGFBQUssRUFBRUEsR0FBRyxDQUFDNUIsS0FBbkI7QUFBQSxrQkFBMkM0QixHQUFHLENBQUNKO0FBQS9DLFNBQStCSSxHQUFHLENBQUM1QixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFmO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUg7O0dBakRRRixVOztLQUFBQSxVO0FBbURNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLmFlNzI2NzNlN2NjZDZjODIzMWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuXHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoVXNlcih7IG9uQ2hhbmdlLCB2YWx1ZSB9KSB7XHJcbiAgICAvLyDnrYnlkIzkuo4ge2N1cnJlbnQ6MH1cclxuICAgIGNvbnN0IGxhc3RGZXRjaElkUmVmID0gdXNlUmVmKDApXHJcblxyXG4gICAgbGFzdEZldGNoSWRSZWYuY3VycmVudCArPSAxXHJcbiAgICBjb25zdCBmZXRjaElkID0gbGFzdEZldGNoSWRSZWYuY3VycmVudFxyXG5cclxuICAgIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gdXNlQ2FsbGJhY2soZGVib3VuY2UodmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0RmV0Y2hpbmcodHJ1ZSlcclxuICAgICAgICBzZXRPcHRpb25zKFtdKVxyXG4gICAgICAgIC8vIOS4jemcgOimgeS8oOWFpSByZXEg5ZKMIHJlcyDvvIzlm6DkuLrov5nmmK/kuIDkuKropoHnlKjmiLfngrnovpPlhaXmiY3kvJrmiafooYznmoTmk43kvZzvvIzogq/lrprmmK/lnKjmtY/op4jlmajnjq/looPmiafooYznmoTlhoXlrrlcclxuICAgICAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9zZWFyY2gvdXNlcnM/cT0ke3ZhbHVlfWBcclxuICAgICAgICB9KS50aGVuKHJlcHMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmV0Y2hJZCAhPT0gbGFzdEZldGNoSWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcHMuZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLmxvZ2luXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0T3B0aW9ucyhkYXRhKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0sIDUwMCksIFtdKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0T3B0aW9ucyhbXSlcclxuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgICBvbkNoYW5nZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHNob3dTZWFyY2ggLT4g6KGo56S655qE5pivIHNlbGVjdCDlhbfmnInmkJzntKLlip/og71cclxuICAgIC8vIGZpbHRlck9wdGlvbiAtPiDnlKjkuo4gU2VsZWN0IOe7hOS7tueOsOaIkOW3sue7j+aciSBPcHRpb24g5p2l5Ye6546w5LqG77yM6L+Z5Liq5pe25YCZ5oiR5Lus6L6T5YWl5qGG5Lit6L6T5YWl5paH5a2X77yM5piv6L6T5YWl5oiR5Lus546w5pyJ55qE5bey57uP5ZyoIE9wdGlvbiDph4zpnaLnmoTlsZXnpLrnmoTov5nkupvlhoXlrrnjgIIg5Zug5Li65oiR5Lus6KaB5bGV56S65pyN5Yqh56uv55qE5YaF5a6577yM5omA5Lul6K6+572u5Li6IGZhbHNl44CCXHJcbiAgICByZXR1cm4gPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogMjAwIH19IHNob3dTZWFyY2g9e3RydWV9IG5vdEZvdW5kQ29udGVudD17ZmV0Y2hpbmcgPyA8U3BpbiBzaXplPSdzbWFsbCcgLz4gOiA8c3Bhbj5Ob3RoaW5nIEZvdW5kPC9zcGFuPn0gZmlsdGVyT3B0aW9uPXtmYWxzZX0gcGxhY2Vob2xkZXI9J+WIm+W7uuiAhScgYWxsb3dDbGVhcj17dHJ1ZX0gb25TZWFyY2g9e2ZldGNoVXNlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1hcChvcHMgPT4gPE9wdGlvbiB2YWx1ZT17b3BzLnZhbHVlfSBrZXk9e29wcy52YWx1ZX0+e29wcy50ZXh0fTwvT3B0aW9uPilcclxuICAgICAgICB9XHJcbiAgICA8L1NlbGVjdD5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFVzZXIiXSwic291cmNlUm9vdCI6IiJ9