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
    value: value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImxhc3RGZXRjaElkUmVmIiwidXNlUmVmIiwiY3VycmVudCIsImZldGNoSWQiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImZldGNoVXNlciIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwicmVxdWVzdCIsInVybCIsInRoZW4iLCJyZXBzIiwiZGF0YSIsIml0ZW1zIiwibWFwIiwidXNlciIsInRleHQiLCJsb2dpbiIsImhhbmRsZUNoYW5nZSIsIndpZHRoIiwib3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsdURBQU9BLE1BQXRCOztBQUVBLFNBQVNDLFVBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3JDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7QUFFQUQsZ0JBQWMsQ0FBQ0UsT0FBZixJQUEwQixDQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0gsY0FBYyxDQUFDRSxPQUEvQjs7QUFMcUMsa0JBT0xFLHNEQUFRLENBQUMsS0FBRCxDQVBIO0FBQUEsTUFPOUJDLFFBUDhCO0FBQUEsTUFPcEJDLFdBUG9COztBQUFBLG1CQVNQRixzREFBUSxDQUFDLEVBQUQsQ0FURDtBQUFBLE1BUzlCRyxPQVQ4QjtBQUFBLE1BU3JCQyxVQVRxQjs7QUFXckMsTUFBTUMsU0FBUyxHQUFHQyx5REFBVyxDQUFDQyx1REFBUSxDQUFDLFVBQUFaLEtBQUssRUFBSTtBQUM1Q2EsV0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7QUFFQU8sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSxjQUFVLENBQUMsRUFBRCxDQUFWLENBSjRDLENBSzVDOztBQUNBTSxtREFBRyxDQUFDQyxPQUFKLENBQVk7QUFDUkMsU0FBRyw0QkFBcUJqQixLQUFyQjtBQURLLEtBQVosRUFFR2tCLElBRkgsQ0FFUSxVQUFBQyxJQUFJLEVBQUk7QUFDWixVQUFJZixPQUFPLEtBQUtILGNBQWMsQ0FBQ0UsT0FBL0IsRUFBd0M7QUFDcEM7QUFDSDs7QUFDRCxVQUFNaUIsSUFBSSxHQUFHRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLGVBQUs7QUFDdENDLGNBQUksRUFBRUQsSUFBSSxDQUFDRSxLQUQyQjtBQUV0Q3pCLGVBQUssRUFBRXVCLElBQUksQ0FBQ0U7QUFGMEIsU0FBTDtBQUFBLE9BQXhCLENBQWI7QUFJQWxCLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FFLGdCQUFVLENBQUNXLElBQUQsQ0FBVjtBQUNILEtBWkQ7QUFlSCxHQXJCcUMsRUFxQm5DLEdBckJtQyxDQUFULEVBcUJwQixFQXJCb0IsQ0FBN0I7O0FBc0JBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUMxQixLQUFELEVBQVc7QUFDNUJTLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUYsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBUixZQUFRLENBQUNDLEtBQUQsQ0FBUjtBQUNILEdBSkQsQ0FqQ3FDLENBeUNyQztBQUNBOzs7QUFDQSxzQkFBTztBQUFRLFNBQUssRUFBRTtBQUFFMkIsV0FBSyxFQUFFO0FBQVQsS0FBZjtBQUErQixjQUFVLEVBQUUsSUFBM0M7QUFBaUQsbUJBQWUsRUFBRXJCLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXJHO0FBQWlJLGdCQUFZLEVBQUUsS0FBL0k7QUFBc0osZUFBVyxFQUFDLG9CQUFsSztBQUF3SyxjQUFVLEVBQUUsSUFBcEw7QUFBMEwsWUFBUSxFQUFFSSxTQUFwTTtBQUErTSxZQUFRLEVBQUVnQixZQUF6TjtBQUF1TyxTQUFLLEVBQUUxQixLQUE5TztBQUFBLGNBRUNRLE9BQU8sQ0FBQ2MsR0FBUixDQUFZLFVBQUFNLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFQSxHQUFHLENBQUM1QixLQUFuQjtBQUFBLGtCQUEyQzRCLEdBQUcsQ0FBQ0o7QUFBL0MsU0FBK0JJLEdBQUcsQ0FBQzVCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0FqRFFGLFU7O0tBQUFBLFU7QUFtRE1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuYWVjOWM3ZDg3YmM1MTgzYjEzM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xyXG5cclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKHsgb25DaGFuZ2UsIHZhbHVlIH0pIHtcclxuICAgIC8vIOetieWQjOS6jiB7Y3VycmVudDowfVxyXG4gICAgY29uc3QgbGFzdEZldGNoSWRSZWYgPSB1c2VSZWYoMClcclxuXHJcbiAgICBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50ICs9IDFcclxuICAgIGNvbnN0IGZldGNoSWQgPSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50XHJcblxyXG4gICAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSB1c2VDYWxsYmFjayhkZWJvdW5jZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKVxyXG4gICAgICAgIHNldE9wdGlvbnMoW10pXHJcbiAgICAgICAgLy8g5LiN6ZyA6KaB5Lyg5YWlIHJlcSDlkowgcmVzIO+8jOWboOS4uui/meaYr+S4gOS4quimgeeUqOaIt+eCuei+k+WFpeaJjeS8muaJp+ihjOeahOaTjeS9nO+8jOiCr+WumuaYr+WcqOa1j+iniOWZqOeOr+Wig+aJp+ihjOeahOWGheWuuVxyXG4gICAgICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBgL3NlYXJjaC91c2Vycz9xPSR7dmFsdWV9YFxyXG4gICAgICAgIH0pLnRoZW4ocmVwcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmZXRjaElkICE9PSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVwcy5kYXRhLml0ZW1zLm1hcCh1c2VyID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIubG9naW5cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRPcHRpb25zKGRhdGEpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSwgNTAwKSwgW10pXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRPcHRpb25zKFtdKVxyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gc2hvd1NlYXJjaCAtPiDooajnpLrnmoTmmK8gc2VsZWN0IOWFt+acieaQnOe0ouWKn+iDvVxyXG4gICAgLy8gZmlsdGVyT3B0aW9uIC0+IOeUqOS6jiBTZWxlY3Qg57uE5Lu2546w5oiQ5bey57uP5pyJIE9wdGlvbiDmnaXlh7rnjrDkuobvvIzov5nkuKrml7blgJnmiJHku6zovpPlhaXmoYbkuK3ovpPlhaXmloflrZfvvIzmmK/ovpPlhaXmiJHku6znjrDmnInnmoTlt7Lnu4/lnKggT3B0aW9uIOmHjOmdoueahOWxleekuueahOi/meS6m+WGheWuueOAgiDlm6DkuLrmiJHku6zopoHlsZXnpLrmnI3liqHnq6/nmoTlhoXlrrnvvIzmiYDku6Xorr7nva7kuLogZmFsc2XjgIJcclxuICAgIHJldHVybiA8U2VsZWN0IHN0eWxlPXt7IHdpZHRoOiAyMDAgfX0gc2hvd1NlYXJjaD17dHJ1ZX0gbm90Rm91bmRDb250ZW50PXtmZXRjaGluZyA/IDxTcGluIHNpemU9J3NtYWxsJyAvPiA6IDxzcGFuPk5vdGhpbmcgRm91bmQ8L3NwYW4+fSBmaWx0ZXJPcHRpb249e2ZhbHNlfSBwbGFjZWhvbGRlcj0n5Yib5bu66ICFJyBhbGxvd0NsZWFyPXt0cnVlfSBvblNlYXJjaD17ZmV0Y2hVc2VyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXAob3BzID0+IDxPcHRpb24gdmFsdWU9e29wcy52YWx1ZX0ga2V5PXtvcHMudmFsdWV9PntvcHMudGV4dH08L09wdGlvbj4pXHJcbiAgICAgICAgfVxyXG4gICAgPC9TZWxlY3Q+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==