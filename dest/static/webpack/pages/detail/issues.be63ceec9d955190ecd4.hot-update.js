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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])(function (value) {
    // 每次执行发起请求的时候，让该值向上加 1
    lastFetchIdRef.current += 1; // 这个 fetchId 表示执行这次 request 的 id

    var fetchId = lastFetchIdRef.current;
    setFetching(true);
    setOptions([]); // 不需要传入 req 和 res ，因为这是一个要用户点输入才会执行的操作，肯定是在浏览器环境执行的内容

    if (!value) {
      return;
    }

    _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (reps) {
      // 如果一旦这个 fetchId 和 id 不一致，所以前面的请求是可以抛弃的
      if (fetchId !== lastFetchIdRef.current) {
        return setFetching(false);
      }

      var data = reps.data.items.map(function (user) {
        return {
          text: user.login,
          value: user.login
        };
      });
      console.log(data);
      setFetching(false);
      setOptions(data);
    });
  }, 500), []); // 用户在下拉框出来选了某个值之后

  var handleChange = function handleChange(value) {
    // value 是某个 option 的值
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
      lineNumber: 64,
      columnNumber: 89
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "Nothing Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 113
    }, this),
    filterOption: false,
    placeholder: "\u521B\u5EFA\u8005",
    allowClear: true,
    onSearch: fetchUser,
    onChange: handleChange,
    value: value,
    children: options.map(function (ops) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
        value: ops.value,
        children: ops.text
      }, ops.value, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImxhc3RGZXRjaElkUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmZXRjaFVzZXIiLCJ1c2VDYWxsYmFjayIsImRlYm91bmNlIiwiY3VycmVudCIsImZldGNoSWQiLCJhcGkiLCJyZXF1ZXN0IiwidXJsIiwidGhlbiIsInJlcHMiLCJkYXRhIiwiaXRlbXMiLCJtYXAiLCJ1c2VyIiwidGV4dCIsImxvZ2luIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsIndpZHRoIiwib3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsdURBQU9BLE1BQXRCOztBQUVBLFNBQVNDLFVBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3JDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7O0FBRnFDLGtCQUlMQyxzREFBUSxDQUFDLEtBQUQsQ0FKSDtBQUFBLE1BSTlCQyxRQUo4QjtBQUFBLE1BSXBCQyxXQUpvQjs7QUFBQSxtQkFNUEYsc0RBQVEsQ0FBQyxFQUFELENBTkQ7QUFBQSxNQU05QkcsT0FOOEI7QUFBQSxNQU1yQkMsVUFOcUI7O0FBUXJDLE1BQU1DLFNBQVMsR0FBR0MseURBQVcsQ0FBQ0MsdURBQVEsQ0FBQyxVQUFBVixLQUFLLEVBQUk7QUFFNUM7QUFDQUMsa0JBQWMsQ0FBQ1UsT0FBZixJQUEwQixDQUExQixDQUg0QyxDQUk1Qzs7QUFDQSxRQUFNQyxPQUFPLEdBQUdYLGNBQWMsQ0FBQ1UsT0FBL0I7QUFFQU4sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxjQUFVLENBQUMsRUFBRCxDQUFWLENBUjRDLENBUzVDOztBQUVBLFFBQUksQ0FBQ1AsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFDRGEsbURBQUcsQ0FBQ0MsT0FBSixDQUFZO0FBQ1JDLFNBQUcsNEJBQXFCZixLQUFyQjtBQURLLEtBQVosRUFFR2dCLElBRkgsQ0FFUSxVQUFBQyxJQUFJLEVBQUk7QUFDWjtBQUNBLFVBQUlMLE9BQU8sS0FBS1gsY0FBYyxDQUFDVSxPQUEvQixFQUF3QztBQUNwQyxlQUFPTixXQUFXLENBQUMsS0FBRCxDQUFsQjtBQUNIOztBQUNELFVBQU1hLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUFDLElBQUk7QUFBQSxlQUFLO0FBQ3RDQyxjQUFJLEVBQUVELElBQUksQ0FBQ0UsS0FEMkI7QUFFdEN2QixlQUFLLEVBQUVxQixJQUFJLENBQUNFO0FBRjBCLFNBQUw7QUFBQSxPQUF4QixDQUFiO0FBSUFDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBQ0FiLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUNXLElBQUQsQ0FBVjtBQUNILEtBZEQ7QUFpQkgsR0EvQnFDLEVBK0JuQyxHQS9CbUMsQ0FBVCxFQStCcEIsRUEvQm9CLENBQTdCLENBUnFDLENBeUNyQzs7QUFDQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDMUIsS0FBRCxFQUFXO0FBQzVCO0FBQ0FPLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBTixZQUFRLENBQUNDLEtBQUQsQ0FBUjtBQUNILEdBTEQsQ0ExQ3FDLENBbURyQztBQUNBOzs7QUFDQSxzQkFBTztBQUFRLFNBQUssRUFBRTtBQUFFMkIsV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUErQixjQUFVLEVBQUUsSUFBM0M7QUFBaUQsbUJBQWUsRUFBRXZCLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHO0FBQWlJLGdCQUFZLEVBQUUsS0FBL0k7QUFBc0osZUFBVyxFQUFDLG9CQUFsSztBQUF3SyxjQUFVLEVBQUUsSUFBcEw7QUFBMEwsWUFBUSxFQUFFSSxTQUFwTTtBQUErTSxZQUFRLEVBQUVrQixZQUF6TjtBQUF1TyxTQUFLLEVBQUUxQixLQUE5TztBQUFBLGNBRUNNLE9BQU8sQ0FBQ2MsR0FBUixDQUFZLFVBQUFRLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFQSxHQUFHLENBQUM1QixLQUFuQjtBQUFBLGtCQUEyQzRCLEdBQUcsQ0FBQ047QUFBL0MsU0FBK0JNLEdBQUcsQ0FBQzVCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0EzRFFGLFU7O0tBQUFBLFU7QUE2RE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuYmU2M2NlZWM5ZDk1NTE5MGVjZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xyXG5cclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKHsgb25DaGFuZ2UsIHZhbHVlIH0pIHtcclxuICAgIC8vIOetieWQjOS6jiB7Y3VycmVudDowfVxyXG4gICAgY29uc3QgbGFzdEZldGNoSWRSZWYgPSB1c2VSZWYoMClcclxuXHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlciA9IHVzZUNhbGxiYWNrKGRlYm91bmNlKHZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgLy8g5q+P5qyh5omn6KGM5Y+R6LW36K+35rGC55qE5pe25YCZ77yM6K6p6K+l5YC85ZCR5LiK5YqgIDFcclxuICAgICAgICBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50ICs9IDFcclxuICAgICAgICAvLyDov5nkuKogZmV0Y2hJZCDooajnpLrmiafooYzov5nmrKEgcmVxdWVzdCDnmoQgaWRcclxuICAgICAgICBjb25zdCBmZXRjaElkID0gbGFzdEZldGNoSWRSZWYuY3VycmVudFxyXG5cclxuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKVxyXG4gICAgICAgIHNldE9wdGlvbnMoW10pXHJcbiAgICAgICAgLy8g5LiN6ZyA6KaB5Lyg5YWlIHJlcSDlkowgcmVzIO+8jOWboOS4uui/meaYr+S4gOS4quimgeeUqOaIt+eCuei+k+WFpeaJjeS8muaJp+ihjOeahOaTjeS9nO+8jOiCr+WumuaYr+WcqOa1j+iniOWZqOeOr+Wig+aJp+ihjOeahOWGheWuuVxyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9zZWFyY2gvdXNlcnM/cT0ke3ZhbHVlfWBcclxuICAgICAgICB9KS50aGVuKHJlcHMgPT4ge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzkuIDml6bov5nkuKogZmV0Y2hJZCDlkowgaWQg5LiN5LiA6Ie077yM5omA5Lul5YmN6Z2i55qE6K+35rGC5piv5Y+v5Lul5oqb5byD55qEXHJcbiAgICAgICAgICAgIGlmIChmZXRjaElkICE9PSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcHMuZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdXNlci5sb2dpbixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLmxvZ2luXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldE9wdGlvbnMoZGF0YSlcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9LCA1MDApLCBbXSlcclxuXHJcbiAgICAvLyDnlKjmiLflnKjkuIvmi4nmoYblh7rmnaXpgInkuobmn5DkuKrlgLzkuYvlkI5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vIHZhbHVlIOaYr+afkOS4qiBvcHRpb24g55qE5YC8XHJcbiAgICAgICAgc2V0T3B0aW9ucyhbXSlcclxuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgICBvbkNoYW5nZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHNob3dTZWFyY2ggLT4g6KGo56S655qE5pivIHNlbGVjdCDlhbfmnInmkJzntKLlip/og71cclxuICAgIC8vIGZpbHRlck9wdGlvbiAtPiDnlKjkuo4gU2VsZWN0IOe7hOS7tueOsOaIkOW3sue7j+aciSBPcHRpb24g5p2l5Ye6546w5LqG77yM6L+Z5Liq5pe25YCZ5oiR5Lus6L6T5YWl5qGG5Lit6L6T5YWl5paH5a2X77yM5piv6L6T5YWl5oiR5Lus546w5pyJ55qE5bey57uP5ZyoIE9wdGlvbiDph4zpnaLnmoTlsZXnpLrnmoTov5nkupvlhoXlrrnjgIIg5Zug5Li65oiR5Lus6KaB5bGV56S65pyN5Yqh56uv55qE5YaF5a6577yM5omA5Lul6K6+572u5Li6IGZhbHNl44CCXHJcbiAgICByZXR1cm4gPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogMjAwIH19IHNob3dTZWFyY2g9e3RydWV9IG5vdEZvdW5kQ29udGVudD17ZmV0Y2hpbmcgPyA8U3BpbiBzaXplPSdzbWFsbCcgLz4gOiA8c3Bhbj5Ob3RoaW5nIEZvdW5kPC9zcGFuPn0gZmlsdGVyT3B0aW9uPXtmYWxzZX0gcGxhY2Vob2xkZXI9J+WIm+W7uuiAhScgYWxsb3dDbGVhcj17dHJ1ZX0gb25TZWFyY2g9e2ZldGNoVXNlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWFwKG9wcyA9PiA8T3B0aW9uIHZhbHVlPXtvcHMudmFsdWV9IGtleT17b3BzLnZhbHVlfT57b3BzLnRleHR9PC9PcHRpb24+KVxyXG4gICAgICAgIH1cclxuICAgIDwvU2VsZWN0PlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVXNlciJdLCJzb3VyY2VSb290IjoiIn0=