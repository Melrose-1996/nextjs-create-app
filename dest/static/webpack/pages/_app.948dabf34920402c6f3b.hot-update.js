webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initialzeStore; });
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // applyMiddleware 是 redux 的中间件，构建一些第三方的一些扩展 redux 整个应用体系的方法。



var userInitialState = {};
var LOGOUT = "LOGOUT";
var UPDATE_USERNAME = "UPDATE_USERNAME";

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_USERNAME:
      // 这里state拿到的就是 user:{}
      return _objectSpread(_objectSpread({}, state), {}, {
        username: action.name
      });

    case LOGOUT:
      {
        return {};
      }

    default:
      return state;
  }
}
/* 
{ 
  user: {},
  count: {}
}
*/


var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  user: userReducer // 如果还有一个 count

}); // action creators

function logout() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/logout").then(function (resp) {
      if (resp.status === 200) {
        dispatch({
          type: LOGOUT
        });
      } else {
        console.log("logout failed", resp);
      }
    })["catch"](function (err) {
      console.log("logout failed", err);
    });
  };
} // console.log(store.getState());

function initialzeStore(state) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(allReducers, Object.assign({}, {
    user: userInitialState
  }, state), Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
  return store;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsidXNlckluaXRpYWxTdGF0ZSIsIkxPR09VVCIsIlVQREFURV9VU0VSTkFNRSIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidXNlcm5hbWUiLCJuYW1lIiwiYWxsUmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwibG9nb3V0IiwiZGlzcGF0Y2giLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJpbml0aWFsemVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJPYmplY3QiLCJhc3NpZ24iLCJhcHBseU1pZGRsZXdhcmUiLCJSZWR1eFRodW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsRUFBekI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7O0FBQ0EsU0FBU0MsV0FBVCxHQUF1RDtBQUFBLE1BQWxDQyxLQUFrQyx1RUFBMUJKLGdCQUEwQjtBQUFBLE1BQVJLLE1BQVE7O0FBQ3JELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtKLGVBQUw7QUFDRTtBQUNBLDZDQUVLRSxLQUZMO0FBR0VHLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ0c7QUFIbkI7O0FBS0YsU0FBS1AsTUFBTDtBQUFhO0FBQ1gsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQ7QUFDRSxhQUFPRyxLQUFQO0FBYko7QUFlRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUssV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxNQUFJLEVBQUVSLFdBRDRCLENBRWxDOztBQUZrQyxDQUFELENBQW5DLEMsQ0FLQTs7QUFDTyxTQUFTUyxNQUFULEdBQWtCO0FBQ3ZCLFNBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQ25CQyxnREFBSyxDQUNGQyxJQURILENBQ1EsU0FEUixFQUVHQyxJQUZILENBRVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsVUFBSUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3ZCTCxnQkFBUSxDQUFDO0FBQ1BQLGNBQUksRUFBRUw7QUFEQyxTQUFELENBQVI7QUFHRCxPQUpELE1BSU87QUFDTGtCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJILElBQTdCO0FBQ0Q7QUFDRixLQVZILFdBV1MsVUFBQ0ksR0FBRCxFQUFTO0FBQ2RGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJDLEdBQTdCO0FBQ0QsS0FiSDtBQWNELEdBZkQ7QUFnQkQsQyxDQUVEOztBQUNlLFNBQVNDLGNBQVQsQ0FBd0JsQixLQUF4QixFQUErQjtBQUM1QyxNQUFNbUIsS0FBSyxHQUFHQyx5REFBVyxDQUN2QmYsV0FEdUIsRUFFdkJnQixNQUFNLENBQUNDLE1BQVAsQ0FDRSxFQURGLEVBRUU7QUFDRWYsUUFBSSxFQUFFWDtBQURSLEdBRkYsRUFLRUksS0FMRixDQUZ1QixFQVN2QnVCLDZEQUFlLENBQUNDLG1EQUFELENBVFEsQ0FBekI7QUFXQSxTQUFPTCxLQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NDhkYWJmMzQ5MjA0MDJjNmYzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vIGFwcGx5TWlkZGxld2FyZSDmmK8gcmVkdXgg55qE5Lit6Ze05Lu277yM5p6E5bu65LiA5Lqb56ys5LiJ5pa555qE5LiA5Lqb5omp5bGVIHJlZHV4IOaVtOS4quW6lOeUqOS9k+ezu+eahOaWueazleOAglxyXG5pbXBvcnQgUmVkdXhUaHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IHVzZXJJbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCI7XHJcblxyXG5jb25zdCBVUERBVEVfVVNFUk5BTUUgPSBcIlVQREFURV9VU0VSTkFNRVwiO1xyXG5mdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IHVzZXJJbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBEQVRFX1VTRVJOQU1FOlxyXG4gICAgICAvLyDov5nph4xzdGF0ZeaLv+WIsOeahOWwseaYryB1c2VyOnt9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8g5rOo5oSP5oiR5Lus6KaB5L+d5oyB546w5Zyo55qE54q25oCB5pu05Y6f5YWI5LiA6Ie0XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi5uYW1lLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dPVVQ6IHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFxyXG57IFxyXG4gIHVzZXI6IHt9LFxyXG4gIGNvdW50OiB7fVxyXG59XHJcbiovXHJcbmNvbnN0IGFsbFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAvLyDlpoLmnpzov5jmnInkuIDkuKogY291bnRcclxufSk7XHJcblxyXG4vLyBhY3Rpb24gY3JlYXRvcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcIi9sb2dvdXRcIilcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dPVVQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXQgZmFpbGVkXCIsIHJlc3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ291dCBmYWlsZWRcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWx6ZVN0b3JlKHN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgIGFsbFJlZHVjZXJzLFxyXG4gICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHtcclxuICAgICAgICB1c2VyOiB1c2VySW5pdGlhbFN0YXRlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZVxyXG4gICAgKSxcclxuICAgIGFwcGx5TWlkZGxld2FyZShSZWR1eFRodW5rKVxyXG4gICk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=