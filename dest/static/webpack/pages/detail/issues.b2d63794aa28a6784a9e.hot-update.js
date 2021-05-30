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

function SearchUser() {
  _s();

  var _this = this;

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
  }, 500), []); // showSearch -> 表示的是 select 具有搜索功能
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
      lineNumber: 46,
      columnNumber: 89
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "Nothing Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
        lineNumber: 48,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwibGFzdEZldGNoSWRSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwiZmV0Y2hJZCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZmV0Y2hVc2VyIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFwaSIsInJlcXVlc3QiLCJ1cmwiLCJ0aGVuIiwicmVwcyIsImRhdGEiLCJpdGVtcyIsIm1hcCIsInVzZXIiLCJ0ZXh0IiwibG9naW4iLCJ3aWR0aCIsIm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLHVEQUFPQSxNQUF0Qjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7QUFFQUQsZ0JBQWMsQ0FBQ0UsT0FBZixJQUEwQixDQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsY0FBYyxDQUFDRSxPQUEvQjs7QUFMa0Isa0JBT2NFLHNEQUFRLENBQUMsS0FBRCxDQVB0QjtBQUFBLE1BT1hDLFFBUFc7QUFBQSxNQU9EQyxXQVBDOztBQUFBLG1CQVNZRixzREFBUSxDQUFDLEVBQUQsQ0FUcEI7QUFBQSxNQVNYRyxPQVRXO0FBQUEsTUFTRkMsVUFURTs7QUFXbEIsTUFBTUMsU0FBUyxHQUFHQyx5REFBVyxDQUFDQyx1REFBUSxDQUFDLFVBQUFDLEtBQUssRUFBSTtBQUM1Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQU4sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxjQUFVLENBQUMsRUFBRCxDQUFWLENBSjRDLENBSzVDOztBQUNBTyxtREFBRyxDQUFDQyxPQUFKLENBQVk7QUFDUkMsU0FBRyw0QkFBcUJMLEtBQXJCO0FBREssS0FBWixFQUVHTSxJQUZILENBRVEsVUFBQUMsSUFBSSxFQUFJO0FBQ1osVUFBSWhCLE9BQU8sS0FBS0gsY0FBYyxDQUFDRSxPQUEvQixFQUF3QztBQUNwQztBQUNIOztBQUNELFVBQU1rQixJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsZUFBSztBQUN0Q0MsY0FBSSxFQUFFRCxJQUFJLENBQUNFLEtBRDJCO0FBRXRDYixlQUFLLEVBQUVXLElBQUksQ0FBQ0U7QUFGMEIsU0FBTDtBQUFBLE9BQXhCLENBQWI7QUFJQW5CLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUNZLElBQUQsQ0FBVjtBQUNILEtBWkQ7QUFlSCxHQXJCcUMsRUFxQm5DLEdBckJtQyxDQUFULEVBcUJwQixFQXJCb0IsQ0FBN0IsQ0FYa0IsQ0FpQ2xCO0FBQ0E7O0FBQ0Esc0JBQU87QUFBUSxTQUFLLEVBQUU7QUFBRU0sV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUErQixjQUFVLEVBQUUsSUFBM0M7QUFBaUQsbUJBQWUsRUFBRXJCLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHO0FBQWlJLGdCQUFZLEVBQUUsS0FBL0k7QUFBc0osZUFBVyxFQUFDLG9CQUFsSztBQUF3SyxjQUFVLEVBQUUsSUFBcEw7QUFBMEwsWUFBUSxFQUFFSSxTQUFwTTtBQUFBLGNBRUNGLE9BQU8sQ0FBQ2UsR0FBUixDQUFZLFVBQUFLLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFQSxHQUFHLENBQUNmLEtBQW5CO0FBQUEsa0JBQTJDZSxHQUFHLENBQUNIO0FBQS9DLFNBQStCRyxHQUFHLENBQUNmLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0F6Q1FiLFU7O0tBQUFBLFU7QUEyQ01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuYjJkNjM3OTRhYTI4YTY3ODRhOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xyXG5cclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKCkge1xyXG4gICAgLy8g562J5ZCM5LqOIHtjdXJyZW50OjB9XHJcbiAgICBjb25zdCBsYXN0RmV0Y2hJZFJlZiA9IHVzZVJlZigwKVxyXG5cclxuICAgIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQgKz0gMVxyXG4gICAgY29uc3QgZmV0Y2hJZCA9IGxhc3RGZXRjaElkUmVmLmN1cnJlbnRcclxuXHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlciA9IHVzZUNhbGxiYWNrKGRlYm91bmNlKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpXHJcbiAgICAgICAgc2V0T3B0aW9ucyhbXSlcclxuICAgICAgICAvLyDkuI3pnIDopoHkvKDlhaUgcmVxIOWSjCByZXMg77yM5Zug5Li66L+Z5piv5LiA5Liq6KaB55So5oi354K56L6T5YWl5omN5Lya5omn6KGM55qE5pON5L2c77yM6IKv5a6a5piv5Zyo5rWP6KeI5Zmo546v5aKD5omn6KGM55qE5YaF5a65XHJcbiAgICAgICAgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAvc2VhcmNoL3VzZXJzP3E9JHt2YWx1ZX1gXHJcbiAgICAgICAgfSkudGhlbihyZXBzID0+IHtcclxuICAgICAgICAgICAgaWYgKGZldGNoSWQgIT09IGxhc3RGZXRjaElkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXBzLmRhdGEuaXRlbXMubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHVzZXIubG9naW4sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5sb2dpblxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldE9wdGlvbnMoZGF0YSlcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9LCA1MDApLCBbXSlcclxuICAgIC8vIHNob3dTZWFyY2ggLT4g6KGo56S655qE5pivIHNlbGVjdCDlhbfmnInmkJzntKLlip/og71cclxuICAgIC8vIGZpbHRlck9wdGlvbiAtPiDnlKjkuo4gU2VsZWN0IOe7hOS7tueOsOaIkOW3sue7j+aciSBPcHRpb24g5p2l5Ye6546w5LqG77yM6L+Z5Liq5pe25YCZ5oiR5Lus6L6T5YWl5qGG5Lit6L6T5YWl5paH5a2X77yM5piv6L6T5YWl5oiR5Lus546w5pyJ55qE5bey57uP5ZyoIE9wdGlvbiDph4zpnaLnmoTlsZXnpLrnmoTov5nkupvlhoXlrrnjgIIg5Zug5Li65oiR5Lus6KaB5bGV56S65pyN5Yqh56uv55qE5YaF5a6577yM5omA5Lul6K6+572u5Li6IGZhbHNl44CCXHJcbiAgICByZXR1cm4gPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogMjAwIH19IHNob3dTZWFyY2g9e3RydWV9IG5vdEZvdW5kQ29udGVudD17ZmV0Y2hpbmcgPyA8U3BpbiBzaXplPSdzbWFsbCcgLz4gOiA8c3Bhbj5Ob3RoaW5nIEZvdW5kPC9zcGFuPn0gZmlsdGVyT3B0aW9uPXtmYWxzZX0gcGxhY2Vob2xkZXI9J+WIm+W7uuiAhScgYWxsb3dDbGVhcj17dHJ1ZX0gb25TZWFyY2g9e2ZldGNoVXNlcn0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1hcChvcHMgPT4gPE9wdGlvbiB2YWx1ZT17b3BzLnZhbHVlfSBrZXk9e29wcy52YWx1ZX0+e29wcy50ZXh0fTwvT3B0aW9uPilcclxuICAgICAgICB9XHJcbiAgICA8L1NlbGVjdD5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFVzZXIiXSwic291cmNlUm9vdCI6IiJ9