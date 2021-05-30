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
    onChange: handleChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwibGFzdEZldGNoSWRSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwiZmV0Y2hJZCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZmV0Y2hVc2VyIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFwaSIsInJlcXVlc3QiLCJ1cmwiLCJ0aGVuIiwicmVwcyIsImRhdGEiLCJpdGVtcyIsIm1hcCIsInVzZXIiLCJ0ZXh0IiwibG9naW4iLCJ3aWR0aCIsImhhbmRsZUNoYW5nZSIsIm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLHVEQUFPQSxNQUF0Qjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7QUFFQUQsZ0JBQWMsQ0FBQ0UsT0FBZixJQUEwQixDQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsY0FBYyxDQUFDRSxPQUEvQjs7QUFMa0Isa0JBT2NFLHNEQUFRLENBQUMsS0FBRCxDQVB0QjtBQUFBLE1BT1hDLFFBUFc7QUFBQSxNQU9EQyxXQVBDOztBQUFBLG1CQVNZRixzREFBUSxDQUFDLEVBQUQsQ0FUcEI7QUFBQSxNQVNYRyxPQVRXO0FBQUEsTUFTRkMsVUFURTs7QUFXbEIsTUFBTUMsU0FBUyxHQUFHQyx5REFBVyxDQUFDQyx1REFBUSxDQUFDLFVBQUFDLEtBQUssRUFBSTtBQUM1Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQU4sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxjQUFVLENBQUMsRUFBRCxDQUFWLENBSjRDLENBSzVDOztBQUNBTyxtREFBRyxDQUFDQyxPQUFKLENBQVk7QUFDUkMsU0FBRyw0QkFBcUJMLEtBQXJCO0FBREssS0FBWixFQUVHTSxJQUZILENBRVEsVUFBQUMsSUFBSSxFQUFJO0FBQ1osVUFBSWhCLE9BQU8sS0FBS0gsY0FBYyxDQUFDRSxPQUEvQixFQUF3QztBQUNwQztBQUNIOztBQUNELFVBQU1rQixJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCQyxHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsZUFBSztBQUN0Q0MsY0FBSSxFQUFFRCxJQUFJLENBQUNFLEtBRDJCO0FBRXRDYixlQUFLLEVBQUVXLElBQUksQ0FBQ0U7QUFGMEIsU0FBTDtBQUFBLE9BQXhCLENBQWI7QUFJQW5CLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUNZLElBQUQsQ0FBVjtBQUNILEtBWkQ7QUFlSCxHQXJCcUMsRUFxQm5DLEdBckJtQyxDQUFULEVBcUJwQixFQXJCb0IsQ0FBN0IsQ0FYa0IsQ0FpQ2xCO0FBQ0E7O0FBQ0Esc0JBQU87QUFBUSxTQUFLLEVBQUU7QUFBRU0sV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUErQixjQUFVLEVBQUUsSUFBM0M7QUFBaUQsbUJBQWUsRUFBRXJCLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHO0FBQWlJLGdCQUFZLEVBQUUsS0FBL0k7QUFBc0osZUFBVyxFQUFDLG9CQUFsSztBQUF3SyxjQUFVLEVBQUUsSUFBcEw7QUFBMEwsWUFBUSxFQUFFSSxTQUFwTTtBQUErTSxZQUFRLEVBQUVrQixZQUF6TjtBQUFBLGNBRUNwQixPQUFPLENBQUNlLEdBQVIsQ0FBWSxVQUFBTSxHQUFHO0FBQUEsMEJBQUkscUVBQUMsTUFBRDtBQUFRLGFBQUssRUFBRUEsR0FBRyxDQUFDaEIsS0FBbkI7QUFBQSxrQkFBMkNnQixHQUFHLENBQUNKO0FBQS9DLFNBQStCSSxHQUFHLENBQUNoQixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFmO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUg7O0dBekNRYixVOztLQUFBQSxVO0FBMkNNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjM1MzlhZjFjYWUxZWYyZTQyZGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuXHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoVXNlcigpIHtcclxuICAgIC8vIOetieWQjOS6jiB7Y3VycmVudDowfVxyXG4gICAgY29uc3QgbGFzdEZldGNoSWRSZWYgPSB1c2VSZWYoMClcclxuXHJcbiAgICBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50ICs9IDFcclxuICAgIGNvbnN0IGZldGNoSWQgPSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50XHJcblxyXG4gICAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSB1c2VDYWxsYmFjayhkZWJvdW5jZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKVxyXG4gICAgICAgIHNldE9wdGlvbnMoW10pXHJcbiAgICAgICAgLy8g5LiN6ZyA6KaB5Lyg5YWlIHJlcSDlkowgcmVzIO+8jOWboOS4uui/meaYr+S4gOS4quimgeeUqOaIt+eCuei+k+WFpeaJjeS8muaJp+ihjOeahOaTjeS9nO+8jOiCr+WumuaYr+WcqOa1j+iniOWZqOeOr+Wig+aJp+ihjOeahOWGheWuuVxyXG4gICAgICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgL3NlYXJjaC91c2Vycz9xPSR7dmFsdWV9YFxyXG4gICAgICAgIH0pLnRoZW4ocmVwcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmZXRjaElkICE9PSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVwcy5kYXRhLml0ZW1zLm1hcCh1c2VyID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIubG9naW5cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRPcHRpb25zKGRhdGEpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSwgNTAwKSwgW10pXHJcbiAgICAvLyBzaG93U2VhcmNoIC0+IOihqOekuueahOaYryBzZWxlY3Qg5YW35pyJ5pCc57Si5Yqf6IO9XHJcbiAgICAvLyBmaWx0ZXJPcHRpb24gLT4g55So5LqOIFNlbGVjdCDnu4Tku7bnjrDmiJDlt7Lnu4/mnIkgT3B0aW9uIOadpeWHuueOsOS6hu+8jOi/meS4quaXtuWAmeaIkeS7rOi+k+WFpeahhuS4rei+k+WFpeaWh+Wtl++8jOaYr+i+k+WFpeaIkeS7rOeOsOacieeahOW3sue7j+WcqCBPcHRpb24g6YeM6Z2i55qE5bGV56S655qE6L+Z5Lqb5YaF5a6544CCIOWboOS4uuaIkeS7rOimgeWxleekuuacjeWKoeerr+eahOWGheWuue+8jOaJgOS7peiuvue9ruS4uiBmYWxzZeOAglxyXG4gICAgcmV0dXJuIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6IDIwMCB9fSBzaG93U2VhcmNoPXt0cnVlfSBub3RGb3VuZENvbnRlbnQ9e2ZldGNoaW5nID8gPFNwaW4gc2l6ZT0nc21hbGwnIC8+IDogPHNwYW4+Tm90aGluZyBGb3VuZDwvc3Bhbj59IGZpbHRlck9wdGlvbj17ZmFsc2V9IHBsYWNlaG9sZGVyPSfliJvlu7rogIUnIGFsbG93Q2xlYXI9e3RydWV9IG9uU2VhcmNoPXtmZXRjaFVzZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXAob3BzID0+IDxPcHRpb24gdmFsdWU9e29wcy52YWx1ZX0ga2V5PXtvcHMudmFsdWV9PntvcHMudGV4dH08L09wdGlvbj4pXHJcbiAgICAgICAgfVxyXG4gICAgPC9TZWxlY3Q+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==