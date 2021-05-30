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
  lastFetchIdRef.current += 1; // 这个 fetchId 表示执行这次 request 的 id

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
      // 如果一旦这个 fetchId 和 id 不一致，所以前面的请求是可以抛弃的
      if (fetchId !== lastFetchIdRef.current) {
        return;
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
      lineNumber: 60,
      columnNumber: 89
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "Nothing Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 62,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImxhc3RGZXRjaElkUmVmIiwidXNlUmVmIiwiY3VycmVudCIsImZldGNoSWQiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImZldGNoVXNlciIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwicmVxdWVzdCIsInVybCIsInRoZW4iLCJyZXBzIiwiZGF0YSIsIml0ZW1zIiwibWFwIiwidXNlciIsInRleHQiLCJsb2dpbiIsImhhbmRsZUNoYW5nZSIsIndpZHRoIiwib3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsdURBQU9BLE1BQXRCOztBQUVBLFNBQVNDLFVBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3JDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7QUFFQUQsZ0JBQWMsQ0FBQ0UsT0FBZixJQUEwQixDQUExQixDQUpxQyxDQUtyQzs7QUFDQSxNQUFNQyxPQUFPLEdBQUdILGNBQWMsQ0FBQ0UsT0FBL0I7O0FBTnFDLGtCQVFMRSxzREFBUSxDQUFDLEtBQUQsQ0FSSDtBQUFBLE1BUTlCQyxRQVI4QjtBQUFBLE1BUXBCQyxXQVJvQjs7QUFBQSxtQkFVUEYsc0RBQVEsQ0FBQyxFQUFELENBVkQ7QUFBQSxNQVU5QkcsT0FWOEI7QUFBQSxNQVVyQkMsVUFWcUI7O0FBWXJDLE1BQU1DLFNBQVMsR0FBR0MseURBQVcsQ0FBQ0MsdURBQVEsQ0FBQyxVQUFBWixLQUFLLEVBQUk7QUFDNUNhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaO0FBRUFPLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUUsY0FBVSxDQUFDLEVBQUQsQ0FBVixDQUo0QyxDQUs1Qzs7QUFDQU0sbURBQUcsQ0FBQ0MsT0FBSixDQUFZO0FBQ1JDLFNBQUcsNEJBQXFCakIsS0FBckI7QUFESyxLQUFaLEVBRUdrQixJQUZILENBRVEsVUFBQUMsSUFBSSxFQUFJO0FBQ1o7QUFDQSxVQUFJZixPQUFPLEtBQUtILGNBQWMsQ0FBQ0UsT0FBL0IsRUFBd0M7QUFDcEM7QUFDSDs7QUFDRCxVQUFNaUIsSUFBSSxHQUFHRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLGVBQUs7QUFDdENDLGNBQUksRUFBRUQsSUFBSSxDQUFDRSxLQUQyQjtBQUV0Q3pCLGVBQUssRUFBRXVCLElBQUksQ0FBQ0U7QUFGMEIsU0FBTDtBQUFBLE9BQXhCLENBQWI7QUFJQVosYUFBTyxDQUFDQyxHQUFSLENBQVlNLElBQVo7QUFDQWIsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUUsZ0JBQVUsQ0FBQ1csSUFBRCxDQUFWO0FBQ0gsS0FkRDtBQWlCSCxHQXZCcUMsRUF1Qm5DLEdBdkJtQyxDQUFULEVBdUJwQixFQXZCb0IsQ0FBN0IsQ0FacUMsQ0FxQ3JDOztBQUNBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUMxQixLQUFELEVBQVc7QUFDNUI7QUFDQVMsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBRixlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FSLFlBQVEsQ0FBQ0MsS0FBRCxDQUFSO0FBQ0gsR0FMRCxDQXRDcUMsQ0ErQ3JDO0FBQ0E7OztBQUNBLHNCQUFPO0FBQVEsU0FBSyxFQUFFO0FBQUUyQixXQUFLLEVBQUU7QUFBVCxLQUFmO0FBQStCLGNBQVUsRUFBRSxJQUEzQztBQUFpRCxtQkFBZSxFQUFFckIsUUFBUSxnQkFBRztBQUFNLFVBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxnQkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckc7QUFBaUksZ0JBQVksRUFBRSxLQUEvSTtBQUFzSixlQUFXLEVBQUMsb0JBQWxLO0FBQXdLLGNBQVUsRUFBRSxJQUFwTDtBQUEwTCxZQUFRLEVBQUVJLFNBQXBNO0FBQStNLFlBQVEsRUFBRWdCLFlBQXpOO0FBQXVPLFNBQUssRUFBRTFCLEtBQTlPO0FBQUEsY0FFQ1EsT0FBTyxDQUFDYyxHQUFSLENBQVksVUFBQU0sR0FBRztBQUFBLDBCQUFJLHFFQUFDLE1BQUQ7QUFBUSxhQUFLLEVBQUVBLEdBQUcsQ0FBQzVCLEtBQW5CO0FBQUEsa0JBQTJDNEIsR0FBRyxDQUFDSjtBQUEvQyxTQUErQkksR0FBRyxDQUFDNUIsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBZjtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1IOztHQXZEUUYsVTs7S0FBQUEsVTtBQXlETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL2lzc3Vlcy5mNTljMWZhNDg0YWJhMDY1OTdlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFNlbGVjdCwgU3BpbiB9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXHJcblxyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb25cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFVzZXIoeyBvbkNoYW5nZSwgdmFsdWUgfSkge1xyXG4gICAgLy8g562J5ZCM5LqOIHtjdXJyZW50OjB9XHJcbiAgICBjb25zdCBsYXN0RmV0Y2hJZFJlZiA9IHVzZVJlZigwKVxyXG5cclxuICAgIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQgKz0gMVxyXG4gICAgLy8g6L+Z5LiqIGZldGNoSWQg6KGo56S65omn6KGM6L+Z5qyhIHJlcXVlc3Qg55qEIGlkXHJcbiAgICBjb25zdCBmZXRjaElkID0gbGFzdEZldGNoSWRSZWYuY3VycmVudFxyXG5cclxuICAgIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gdXNlQ2FsbGJhY2soZGVib3VuY2UodmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHJcbiAgICAgICAgc2V0RmV0Y2hpbmcodHJ1ZSlcclxuICAgICAgICBzZXRPcHRpb25zKFtdKVxyXG4gICAgICAgIC8vIOS4jemcgOimgeS8oOWFpSByZXEg5ZKMIHJlcyDvvIzlm6DkuLrov5nmmK/kuIDkuKropoHnlKjmiLfngrnovpPlhaXmiY3kvJrmiafooYznmoTmk43kvZzvvIzogq/lrprmmK/lnKjmtY/op4jlmajnjq/looPmiafooYznmoTlhoXlrrlcclxuICAgICAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9zZWFyY2gvdXNlcnM/cT0ke3ZhbHVlfWBcclxuICAgICAgICB9KS50aGVuKHJlcHMgPT4ge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzkuIDml6bov5nkuKogZmV0Y2hJZCDlkowgaWQg5LiN5LiA6Ie077yM5omA5Lul5YmN6Z2i55qE6K+35rGC5piv5Y+v5Lul5oqb5byD55qEXHJcbiAgICAgICAgICAgIGlmIChmZXRjaElkICE9PSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVwcy5kYXRhLml0ZW1zLm1hcCh1c2VyID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIubG9naW5cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0T3B0aW9ucyhkYXRhKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0sIDUwMCksIFtdKVxyXG5cclxuICAgIC8vIOeUqOaIt+WcqOS4i+aLieahhuWHuuadpemAieS6huafkOS4quWAvOS5i+WQjlxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gdmFsdWUg5piv5p+Q5LiqIG9wdGlvbiDnmoTlgLxcclxuICAgICAgICBzZXRPcHRpb25zKFtdKVxyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gc2hvd1NlYXJjaCAtPiDooajnpLrnmoTmmK8gc2VsZWN0IOWFt+acieaQnOe0ouWKn+iDvVxyXG4gICAgLy8gZmlsdGVyT3B0aW9uIC0+IOeUqOS6jiBTZWxlY3Qg57uE5Lu2546w5oiQ5bey57uP5pyJIE9wdGlvbiDmnaXlh7rnjrDkuobvvIzov5nkuKrml7blgJnmiJHku6zovpPlhaXmoYbkuK3ovpPlhaXmloflrZfvvIzmmK/ovpPlhaXmiJHku6znjrDmnInnmoTlt7Lnu4/lnKggT3B0aW9uIOmHjOmdoueahOWxleekuueahOi/meS6m+WGheWuueOAgiDlm6DkuLrmiJHku6zopoHlsZXnpLrmnI3liqHnq6/nmoTlhoXlrrnvvIzmiYDku6Xorr7nva7kuLogZmFsc2XjgIJcclxuICAgIHJldHVybiA8U2VsZWN0IHN0eWxlPXt7IHdpZHRoOiAyMDAgfX0gc2hvd1NlYXJjaD17dHJ1ZX0gbm90Rm91bmRDb250ZW50PXtmZXRjaGluZyA/IDxTcGluIHNpemU9J3NtYWxsJyAvPiA6IDxzcGFuPk5vdGhpbmcgRm91bmQ8L3NwYW4+fSBmaWx0ZXJPcHRpb249e2ZhbHNlfSBwbGFjZWhvbGRlcj0n5Yib5bu66ICFJyBhbGxvd0NsZWFyPXt0cnVlfSBvblNlYXJjaD17ZmV0Y2hVc2VyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXAob3BzID0+IDxPcHRpb24gdmFsdWU9e29wcy52YWx1ZX0ga2V5PXtvcHMudmFsdWV9PntvcHMudGV4dH08L09wdGlvbj4pXHJcbiAgICAgICAgfVxyXG4gICAgPC9TZWxlY3Q+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==