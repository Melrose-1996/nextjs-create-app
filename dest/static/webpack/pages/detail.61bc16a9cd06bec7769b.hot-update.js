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
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\lls\\chenzhengquan\\Desktop\\muke-study\\nextjs-create-app\\components\\with-repo-basic.jsx";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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
        router = _ref.router,
        rest = Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["repoBasic", "router"]);

    var query = makeQuery(router.query);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-2262278230" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-2262278230" + " " + "repo-basic",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Repo__WEBPACK_IMPORTED_MODULE_6__["default"], {
          repo: repoBasic
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "jsx-2262278230" + " " + "tabs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/detail".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/detail/issues".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-2262278230",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Comp, _objectSpread({}, rest), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2262278230",
        children: ".root.jsx-2262278230{padding-top:20px;}.repo-basic.jsx-2262278230{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-2262278230+.tab.jsx-2262278230{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxjb21wb25lbnRzXFx3aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDNEIsQUFHa0MsQUFHSixBQU1JLGFBTEssSUFIeEIsQUFTQSxrQkFMcUIsbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxjb21wb25lbnRzXFx3aXRoLXJlcG8tYmFzaWMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcG8gZnJvbSBcIi4vUmVwb1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9saWIvYXBpXCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVwbyhDb21wKSB7XHJcbiAgICAvLyDov5nmoLfmiJHku6zmiorplK7lgLzlr7nnmoTlvaLlvI/mmKDlsITmiJDkuobkuIDkuKrlrZfnrKbkuLJcclxuICAgIGZ1bmN0aW9uIG1ha2VRdWVyeShxdWVyeU9iaikge1xyXG4gICAgICAgIC8vIOmBjeWOhui/meS4qiBvYmpcclxuICAgICAgICBjb25zdCBxdWVyeSA9IE9iamVjdC5lbnRyaWVzKHF1ZXJ5T2JqKVxyXG4gICAgICAgICAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKFwiPVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9LCBbXSlcclxuICAgICAgICAgICAgLmpvaW4oXCImXCIpO1xyXG4gICAgICAgIHJldHVybiBgPyR7cXVlcnl9YDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBXaXRoRGV0YWlsKHsgcmVwb0Jhc2ljLCByb3V0ZXIsIC4uLnJlc3QgfSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbWFrZVF1ZXJ5KHJvdXRlci5xdWVyeSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG8tYmFzaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvQmFzaWN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsJHtxdWVyeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGlzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDms6jmhI/miJHku6zlnKjkvb/nlKggSE9DIOeahOi/h+eoi++8jOaIkeS7rOWcqOiOt+WPliBIT0Mg6Ieq5bex6KaB55So55qEIHByb3BzIOWJqeS4i+aJgOacieeahOS8oOmAkue7mSBDb21wIOeahCBwcm9wcyDpg73opoHkvKDkuIvljrvvvIzogIzov5nkuKogcHJvcHMg5bCx5pivIENvbXAg55yf5a6e6KaB5L2/55So55qEIHByb3BzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wIHsuLi5yZXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5yZXBvLWJhc2ljIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRhYiArIC50YWIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgICAgICAgICB7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCB9LFxyXG4gICAgICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgICAgICBjdHgucmVzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHBhZ2VEYXRhID0ge31cclxuICAgICAgICBpZiAoQ29tcC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgcGFnZURhdGEgPSBhd2FpdCBDb21wLmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXHJcbiAgICAgICAgICAgIC4uLnBhZ2VEYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhSZXBvKTsiXX0= */\n/*@ sourceURL=D:\\\\lls\\\\chenzhengquan\\\\Desktop\\\\muke-study\\\\nextjs-create-app\\\\components\\\\with-repo-basic.jsx */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }

  WithDetail.getInitialProps = /*#__PURE__*/function () {
    var _ref2 = Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
      var _ctx$query, owner, name, repoBasic, pageData;

      return D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              _context.next = 3;
              return _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 3:
              repoBasic = _context.sent;
              pageData = {};

              if (!Comp.getInitialProps) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return Comp.getInitialProps(ctx);

            case 8:
              pageData = _context.sent;

            case 9:
              return _context.abrupt("return", _objectSpread({
                repoBasic: repoBasic.data
              }, pageData));

            case 10:
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

  return Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(WithDetail);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbIndpdGhSZXBvIiwiQ29tcCIsIm1ha2VRdWVyeSIsInF1ZXJ5T2JqIiwicXVlcnkiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicmVzdWx0IiwiZW50cnkiLCJwdXNoIiwiam9pbiIsIldpdGhEZXRhaWwiLCJyZXBvQmFzaWMiLCJyb3V0ZXIiLCJyZXN0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3duZXIiLCJuYW1lIiwiYXBpIiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsInBhZ2VEYXRhIiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUtlLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ25DO0FBQ0EsV0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDekI7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxRQUFmLEVBQ1RJLE1BRFMsQ0FDRixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDdkJELFlBQU0sQ0FBQ0UsSUFBUCxDQUFZRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxHQUFYLENBQVo7QUFDQSxhQUFPSCxNQUFQO0FBQ0gsS0FKUyxFQUlQLEVBSk8sRUFLVEcsSUFMUyxDQUtKLEdBTEksQ0FBZDtBQU1BLHNCQUFXUCxLQUFYO0FBQ0g7O0FBRUQsV0FBU1EsVUFBVCxPQUFvRDtBQUFBLFFBQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxRQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsUUFBUkMsSUFBUTs7QUFDaEQsUUFBTVgsS0FBSyxHQUFHRixTQUFTLENBQUNZLE1BQU0sQ0FBQ1YsS0FBUixDQUF2QjtBQUNBLHdCQUNJO0FBQUEsMENBQWUsTUFBZjtBQUFBLDhCQUNJO0FBQUEsNENBQWUsWUFBZjtBQUFBLGdDQUNJLHFFQUFDLDZDQUFEO0FBQU0sY0FBSSxFQUFFUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLDhDQUFlLE1BQWY7QUFBQSxrQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLG1CQUFZVCxLQUFaLENBQVY7QUFBQSxtQ0FDSTtBQUFBLGtEQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUkscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSwwQkFBbUJBLEtBQW5CLENBQVY7QUFBQSxtQ0FDSTtBQUFBLGtEQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVlJO0FBQUE7QUFBQSwrQkFFSSxxRUFBQyxJQUFELG9CQUFVVyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFpQ0g7O0FBRURILFlBQVUsQ0FBQ0ksZUFBWDtBQUFBLCtXQUE2QixpQkFBT0MsR0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ0RBLEdBQUcsQ0FBQ2IsS0FESCxFQUNqQmMsS0FEaUIsY0FDakJBLEtBRGlCLEVBQ1ZDLElBRFUsY0FDVkEsSUFEVTtBQUFBO0FBQUEscUJBRURDLCtDQUFHLENBQUNDLE9BQUosQ0FDcEI7QUFBRUMsbUJBQUcsbUJBQVlKLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsZUFEb0IsRUFFcEJGLEdBQUcsQ0FBQ00sR0FGZ0IsRUFHcEJOLEdBQUcsQ0FBQ08sR0FIZ0IsQ0FGQzs7QUFBQTtBQUVuQlgsdUJBRm1CO0FBUXJCWSxzQkFScUIsR0FRVixFQVJVOztBQUFBLG1CQVNyQnhCLElBQUksQ0FBQ2UsZUFUZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFVSmYsSUFBSSxDQUFDZSxlQUFMLENBQXFCQyxHQUFyQixDQVZJOztBQUFBO0FBVXJCUSxzQkFWcUI7O0FBQUE7QUFBQTtBQWFyQloseUJBQVMsRUFBRUEsU0FBUyxDQUFDYTtBQWJBLGlCQWNsQkQsUUFka0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUJBLFNBQU9FLDhEQUFVLENBQUNmLFVBQUQsQ0FBakI7QUFDSCxDLENBR0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsLjYxYmMxNmE5Y2QwNmJlYzc3NjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVwbyBmcm9tIFwiLi9SZXBvXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSZXBvKENvbXApIHtcclxuICAgIC8vIOi/meagt+aIkeS7rOaKiumUruWAvOWvueeahOW9ouW8j+aYoOWwhOaIkOS6huS4gOS4quWtl+espuS4slxyXG4gICAgZnVuY3Rpb24gbWFrZVF1ZXJ5KHF1ZXJ5T2JqKSB7XHJcbiAgICAgICAgLy8g6YGN5Y6G6L+Z5LiqIG9ialxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVudHJ5LmpvaW4oXCI9XCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0sIFtdKVxyXG4gICAgICAgICAgICAuam9pbihcIiZcIik7XHJcbiAgICAgICAgcmV0dXJuIGA/JHtxdWVyeX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFdpdGhEZXRhaWwoeyByZXBvQmFzaWMsIHJvdXRlciwgLi4ucmVzdCB9KSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBtYWtlUXVlcnkocm91dGVyLnF1ZXJ5KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwby1iYXNpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG9CYXNpY30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGluZGV4XCI+UmVhZG1lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsL2lzc3VlcyR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+SXNzdWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOazqOaEj+aIkeS7rOWcqOS9v+eUqCBIT0Mg55qE6L+H56iL77yM5oiR5Lus5Zyo6I635Y+WIEhPQyDoh6rlt7HopoHnlKjnmoQgcHJvcHMg5Ymp5LiL5omA5pyJ55qE5Lyg6YCS57uZIENvbXAg55qEIHByb3BzIOmDveimgeS8oOS4i+WOu++8jOiAjOi/meS4qiBwcm9wcyDlsLHmmK8gQ29tcCDnnJ/lrp7opoHkvb/nlKjnmoQgcHJvcHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXAgey4uLnJlc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJlcG8tYmFzaWMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGFiICsgLnRhYiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBXaXRoRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgICAgICAgY29uc3QgcmVwb0Jhc2ljID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gIH0sXHJcbiAgICAgICAgICAgIGN0eC5yZXEsXHJcbiAgICAgICAgICAgIGN0eC5yZXNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcGFnZURhdGEgPSB7fVxyXG4gICAgICAgIGlmIChDb21wLmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgICAgICBwYWdlRGF0YSA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVwb0Jhc2ljOiByZXBvQmFzaWMuZGF0YSxcclxuICAgICAgICAgICAgLi4ucGFnZURhdGFcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHdpdGhSb3V0ZXIoV2l0aERldGFpbClcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFJlcG8pOyJdLCJzb3VyY2VSb290IjoiIn0=