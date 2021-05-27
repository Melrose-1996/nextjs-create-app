webpackHotUpdate_N_E("pages/detail",{

/***/ "./components/with-repo-basic.jsx":
/*!****************************************!*\
  !*** ./components/with-repo-basic.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withRepo; });
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "D:\\lls\\chenzhengquan\\Desktop\\muke-study\\nextjs-create-app\\components\\with-repo-basic.jsx";





function withRepo(Comp) {
  // 这样我们把键值对的形式映射成了一个字符串
  function makeQuery(queryObj) {
    // 遍历这个 obj
    var query = Object.entries(queryObj).reduce(function (result, entry) {
      result.push(entry.join("="));
      return result;
    }, []).join("&");
    return "?".concat(query);
  }

  function WithDetail(_ref) {
    var repoBasic = _ref.repoBasic,
        router = _ref.router;
    var query = makeQuery(router.query);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-2262278230" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-2262278230" + " " + "repo-basic",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Repo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          repo: repoBasic
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "jsx-2262278230" + " " + "tabs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/detail".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "jsx-2262278230" + " " + "tab index",
              children: "Readme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/detail/issues".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "jsx-2262278230" + " " + "tab issues",
              children: "Issues"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-2262278230",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Comp, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "2262278230",
        children: ".root.jsx-2262278230{padding-top:20px;}.repo-basic.jsx-2262278230{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-2262278230+.tab.jsx-2262278230{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxjb21wb25lbnRzXFx3aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDNEIsQUFHa0MsQUFHSixBQU1JLGFBTEssSUFIeEIsQUFTQSxrQkFMcUIsbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxjb21wb25lbnRzXFx3aXRoLXJlcG8tYmFzaWMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG8gZnJvbSBcIi4vUmVwb1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9saWIvYXBpXCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVwbyhDb21wKSB7XHJcbiAgICAvLyDov5nmoLfmiJHku6zmiorplK7lgLzlr7nnmoTlvaLlvI/mmKDlsITmiJDkuobkuIDkuKrlrZfnrKbkuLJcclxuICAgIGZ1bmN0aW9uIG1ha2VRdWVyeShxdWVyeU9iaikge1xyXG4gICAgICAgIC8vIOmBjeWOhui/meS4qiBvYmpcclxuICAgICAgICBjb25zdCBxdWVyeSA9IE9iamVjdC5lbnRyaWVzKHF1ZXJ5T2JqKVxyXG4gICAgICAgICAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKFwiPVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LCBbXSlcclxuICAgICAgICAgICAgLmpvaW4oXCImXCIpO1xyXG4gICAgICAgIHJldHVybiBgPyR7cXVlcnl9YDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBXaXRoRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIgfSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbWFrZVF1ZXJ5KHJvdXRlci5xdWVyeSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG8tYmFzaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvQmFzaWN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsJHtxdWVyeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGlzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxDb21wIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5yZXBvLWJhc2ljIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRhYiArIC50YWIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgICAgICAgICB7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCB9LFxyXG4gICAgICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgICAgICBjdHgucmVzXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhSZXBvKTsiXX0= */\n/*@ sourceURL=D:\\\\lls\\\\chenzhengquan\\\\Desktop\\\\muke-study\\\\nextjs-create-app\\\\components\\\\with-repo-basic.jsx */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }

  WithDetail.getInitialProps = /*#__PURE__*/function () {
    var _ref2 = Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
      var _ctx$query, owner, name, repoBasic;

      return D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              _context.next = 3;
              return _lib_api__WEBPACK_IMPORTED_MODULE_6___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 3:
              repoBasic = _context.sent;
              return _context.abrupt("return", {
                repoBasic: repoBasic.data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(WithDetail);
} // export default withRouter(withRepo);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbIndpdGhSZXBvIiwiQ29tcCIsIm1ha2VRdWVyeSIsInF1ZXJ5T2JqIiwicXVlcnkiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicmVzdWx0IiwiZW50cnkiLCJwdXNoIiwiam9pbiIsIldpdGhEZXRhaWwiLCJyZXBvQmFzaWMiLCJyb3V0ZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJvd25lciIsIm5hbWUiLCJhcGkiLCJyZXF1ZXN0IiwidXJsIiwicmVxIiwicmVzIiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUtlLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ25DO0FBQ0EsV0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDekI7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxRQUFmLEVBQ1RJLE1BRFMsQ0FDRixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDdkJELFlBQU0sQ0FBQ0UsSUFBUCxDQUFZRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxHQUFYLENBQVo7QUFDQSxhQUFPSCxNQUFQO0FBQ0gsS0FKUyxFQUlQLEVBSk8sRUFLVEcsSUFMUyxDQUtKLEdBTEksQ0FBZDtBQU1BLHNCQUFXUCxLQUFYO0FBQ0g7O0FBRUQsV0FBU1EsVUFBVCxPQUEyQztBQUFBLFFBQXJCQyxTQUFxQixRQUFyQkEsU0FBcUI7QUFBQSxRQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDdkMsUUFBTVYsS0FBSyxHQUFHRixTQUFTLENBQUNZLE1BQU0sQ0FBQ1YsS0FBUixDQUF2QjtBQUNBLHdCQUNJO0FBQUEsMENBQWUsTUFBZjtBQUFBLDhCQUNJO0FBQUEsNENBQWUsWUFBZjtBQUFBLGdDQUNJLHFFQUFDLDZDQUFEO0FBQU0sY0FBSSxFQUFFUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLDhDQUFlLE1BQWY7QUFBQSxrQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLG1CQUFZVCxLQUFaLENBQVY7QUFBQSxtQ0FDSTtBQUFBLGtEQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSwwQkFBbUJBLEtBQW5CLENBQVY7QUFBQSxtQ0FDSTtBQUFBLGtEQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVlJO0FBQUE7QUFBQSwrQkFBSyxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUE4Qkg7O0FBRURRLFlBQVUsQ0FBQ0csZUFBWDtBQUFBLCtXQUE2QixpQkFBT0MsR0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ0RBLEdBQUcsQ0FBQ1osS0FESCxFQUNqQmEsS0FEaUIsY0FDakJBLEtBRGlCLEVBQ1ZDLElBRFUsY0FDVkEsSUFEVTtBQUFBO0FBQUEscUJBRURDLCtDQUFHLENBQUNDLE9BQUosQ0FDcEI7QUFBRUMsbUJBQUcsbUJBQVlKLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsZUFEb0IsRUFFcEJGLEdBQUcsQ0FBQ00sR0FGZ0IsRUFHcEJOLEdBQUcsQ0FBQ08sR0FIZ0IsQ0FGQzs7QUFBQTtBQUVuQlYsdUJBRm1CO0FBQUEsK0NBT2xCO0FBQ0hBLHlCQUFTLEVBQUVBLFNBQVMsQ0FBQ1c7QUFEbEIsZUFQa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBWUEsU0FBT0MsOERBQVUsQ0FBQ2IsVUFBRCxDQUFqQjtBQUNILEMsQ0FHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwuZmU1YTkwYTk2Zjc5YWM4MmMwYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gXCIuL1JlcG9cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJlcG8oQ29tcCkge1xyXG4gICAgLy8g6L+Z5qC35oiR5Lus5oqK6ZSu5YC85a+555qE5b2i5byP5pig5bCE5oiQ5LqG5LiA5Liq5a2X56ym5LiyXHJcbiAgICBmdW5jdGlvbiBtYWtlUXVlcnkocXVlcnlPYmopIHtcclxuICAgICAgICAvLyDpgY3ljobov5nkuKogb2JqXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iailcclxuICAgICAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbihcIj1cIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgIC5qb2luKFwiJlwiKTtcclxuICAgICAgICByZXR1cm4gYD8ke3F1ZXJ5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gV2l0aERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyIH0pIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwvaXNzdWVzJHtxdWVyeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48Q29tcCAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50YWIgKyAudGFiIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIFdpdGhEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICAgICAgICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgICAgICAgICAgeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWAgfSxcclxuICAgICAgICAgICAgY3R4LnJlcSxcclxuICAgICAgICAgICAgY3R4LnJlc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVwb0Jhc2ljOiByZXBvQmFzaWMuZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gd2l0aFJvdXRlcihXaXRoRGV0YWlsKVxyXG59XHJcblxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih3aXRoUmVwbyk7Il0sInNvdXJjZVJvb3QiOiIifQ==