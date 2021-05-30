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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwibGFzdEZldGNoSWRSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwiZmV0Y2hJZCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZmV0Y2hVc2VyIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFwaSIsInJlcXVlc3QiLCJ1cmwiLCJ0aGVuIiwicmVwcyIsImRhdGEiLCJpdGVtcyIsIm1hcCIsInVzZXIiLCJ0ZXh0IiwibG9naW4iLCJoYW5kbGVDaGFuZ2UiLCJvbkNoYW5nZSIsIndpZHRoIiwib3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsdURBQU9BLE1BQXRCOztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbEI7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQUMsQ0FBRCxDQUE3QjtBQUVBRCxnQkFBYyxDQUFDRSxPQUFmLElBQTBCLENBQTFCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSCxjQUFjLENBQUNFLE9BQS9COztBQUxrQixrQkFPY0Usc0RBQVEsQ0FBQyxLQUFELENBUHRCO0FBQUEsTUFPWEMsUUFQVztBQUFBLE1BT0RDLFdBUEM7O0FBQUEsbUJBU1lGLHNEQUFRLENBQUMsRUFBRCxDQVRwQjtBQUFBLE1BU1hHLE9BVFc7QUFBQSxNQVNGQyxVQVRFOztBQVdsQixNQUFNQyxTQUFTLEdBQUdDLHlEQUFXLENBQUNDLHVEQUFRLENBQUMsVUFBQUMsS0FBSyxFQUFJO0FBQzVDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBTixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLGNBQVUsQ0FBQyxFQUFELENBQVYsQ0FKNEMsQ0FLNUM7O0FBQ0FPLG1EQUFHLENBQUNDLE9BQUosQ0FBWTtBQUNSQyxTQUFHLDRCQUFxQkwsS0FBckI7QUFESyxLQUFaLEVBRUdNLElBRkgsQ0FFUSxVQUFBQyxJQUFJLEVBQUk7QUFDWixVQUFJaEIsT0FBTyxLQUFLSCxjQUFjLENBQUNFLE9BQS9CLEVBQXdDO0FBQ3BDO0FBQ0g7O0FBQ0QsVUFBTWtCLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUFDLElBQUk7QUFBQSxlQUFLO0FBQ3RDQyxjQUFJLEVBQUVELElBQUksQ0FBQ0UsS0FEMkI7QUFFdENiLGVBQUssRUFBRVcsSUFBSSxDQUFDRTtBQUYwQixTQUFMO0FBQUEsT0FBeEIsQ0FBYjtBQUlBbkIsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUUsZ0JBQVUsQ0FBQ1ksSUFBRCxDQUFWO0FBQ0gsS0FaRDtBQWVILEdBckJxQyxFQXFCbkMsR0FyQm1DLENBQVQsRUFxQnBCLEVBckJvQixDQUE3Qjs7QUFzQkEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsS0FBRCxFQUFXO0FBQzVCSixjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FGLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQXFCLFlBQVEsQ0FBQ2YsS0FBRCxDQUFSO0FBQ0gsR0FKRCxDQWpDa0IsQ0F5Q2xCO0FBQ0E7OztBQUNBLHNCQUFPO0FBQVEsU0FBSyxFQUFFO0FBQUVnQixXQUFLLEVBQUU7QUFBVCxLQUFmO0FBQStCLGNBQVUsRUFBRSxJQUEzQztBQUFpRCxtQkFBZSxFQUFFdkIsUUFBUSxnQkFBRztBQUFNLFVBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxnQkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckc7QUFBaUksZ0JBQVksRUFBRSxLQUEvSTtBQUFzSixlQUFXLEVBQUMsb0JBQWxLO0FBQXdLLGNBQVUsRUFBRSxJQUFwTDtBQUEwTCxZQUFRLEVBQUVJLFNBQXBNO0FBQStNLFlBQVEsRUFBRWlCLFlBQXpOO0FBQUEsY0FFQ25CLE9BQU8sQ0FBQ2UsR0FBUixDQUFZLFVBQUFPLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFQSxHQUFHLENBQUNqQixLQUFuQjtBQUFBLGtCQUEyQ2lCLEdBQUcsQ0FBQ0w7QUFBL0MsU0FBK0JLLEdBQUcsQ0FBQ2pCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0FqRFFiLFU7O0tBQUFBLFU7QUFtRE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuYmM2YTU5MDAxZTE5MWM2MDYzZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xyXG5cclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKCkge1xyXG4gICAgLy8g562J5ZCM5LqOIHtjdXJyZW50OjB9XHJcbiAgICBjb25zdCBsYXN0RmV0Y2hJZFJlZiA9IHVzZVJlZigwKVxyXG5cclxuICAgIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQgKz0gMVxyXG4gICAgY29uc3QgZmV0Y2hJZCA9IGxhc3RGZXRjaElkUmVmLmN1cnJlbnRcclxuXHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlciA9IHVzZUNhbGxiYWNrKGRlYm91bmNlKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpXHJcbiAgICAgICAgc2V0T3B0aW9ucyhbXSlcclxuICAgICAgICAvLyDkuI3pnIDopoHkvKDlhaUgcmVxIOWSjCByZXMg77yM5Zug5Li66L+Z5piv5LiA5Liq6KaB55So5oi354K56L6T5YWl5omN5Lya5omn6KGM55qE5pON5L2c77yM6IKv5a6a5piv5Zyo5rWP6KeI5Zmo546v5aKD5omn6KGM55qE5YaF5a65XHJcbiAgICAgICAgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGAvc2VhcmNoL3VzZXJzP3E9JHt2YWx1ZX1gXHJcbiAgICAgICAgfSkudGhlbihyZXBzID0+IHtcclxuICAgICAgICAgICAgaWYgKGZldGNoSWQgIT09IGxhc3RGZXRjaElkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXBzLmRhdGEuaXRlbXMubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHVzZXIubG9naW4sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5sb2dpblxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldE9wdGlvbnMoZGF0YSlcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9LCA1MDApLCBbXSlcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldE9wdGlvbnMoW10pXHJcbiAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXHJcbiAgICAgICAgb25DaGFuZ2UodmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBzaG93U2VhcmNoIC0+IOihqOekuueahOaYryBzZWxlY3Qg5YW35pyJ5pCc57Si5Yqf6IO9XHJcbiAgICAvLyBmaWx0ZXJPcHRpb24gLT4g55So5LqOIFNlbGVjdCDnu4Tku7bnjrDmiJDlt7Lnu4/mnIkgT3B0aW9uIOadpeWHuueOsOS6hu+8jOi/meS4quaXtuWAmeaIkeS7rOi+k+WFpeahhuS4rei+k+WFpeaWh+Wtl++8jOaYr+i+k+WFpeaIkeS7rOeOsOacieeahOW3sue7j+WcqCBPcHRpb24g6YeM6Z2i55qE5bGV56S655qE6L+Z5Lqb5YaF5a6544CCIOWboOS4uuaIkeS7rOimgeWxleekuuacjeWKoeerr+eahOWGheWuue+8jOaJgOS7peiuvue9ruS4uiBmYWxzZeOAglxyXG4gICAgcmV0dXJuIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6IDIwMCB9fSBzaG93U2VhcmNoPXt0cnVlfSBub3RGb3VuZENvbnRlbnQ9e2ZldGNoaW5nID8gPFNwaW4gc2l6ZT0nc21hbGwnIC8+IDogPHNwYW4+Tm90aGluZyBGb3VuZDwvc3Bhbj59IGZpbHRlck9wdGlvbj17ZmFsc2V9IHBsYWNlaG9sZGVyPSfliJvlu7rogIUnIGFsbG93Q2xlYXI9e3RydWV9IG9uU2VhcmNoPXtmZXRjaFVzZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXAob3BzID0+IDxPcHRpb24gdmFsdWU9e29wcy52YWx1ZX0ga2V5PXtvcHMudmFsdWV9PntvcHMudGV4dH08L09wdGlvbj4pXHJcbiAgICAgICAgfVxyXG4gICAgPC9TZWxlY3Q+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==