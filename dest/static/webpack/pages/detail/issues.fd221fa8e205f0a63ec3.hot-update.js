webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: setCache, getCache, setArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCache", function() { return setCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setArray", function() { return setArray; });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
  maxAge: 1000 * 60 * 60
});
function setCache(repo) {
  var full_name = repo.full_name;
  cache.set(full_name, repo);
} // full_name:facebook/react

function getCache(full_name) {
  return cache.get(full_name);
} // 根据数组的一个列表插入

function setArray(repos) {
  repos.forEach(function (repo) {
    return setCache(repo);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcG8tYmFzaWMtY2FjaGUuanMiXSwibmFtZXMiOlsiY2FjaGUiLCJMUlUiLCJtYXhBZ2UiLCJzZXRDYWNoZSIsInJlcG8iLCJmdWxsX25hbWUiLCJzZXQiLCJnZXRDYWNoZSIsImdldCIsInNldEFycmF5IiwicmVwb3MiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsZ0RBQUosQ0FBUTtBQUNwQkMsUUFBTSxFQUFFLE9BQU8sRUFBUCxHQUFZO0FBREEsQ0FBUixDQUFkO0FBSU8sU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDN0IsTUFBTUMsU0FBUyxHQUFHRCxJQUFJLENBQUNDLFNBQXZCO0FBQ0FMLE9BQUssQ0FBQ00sR0FBTixDQUFVRCxTQUFWLEVBQXFCRCxJQUFyQjtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTRyxRQUFULENBQWtCRixTQUFsQixFQUE2QjtBQUNsQyxTQUFPTCxLQUFLLENBQUNRLEdBQU4sQ0FBVUgsU0FBVixDQUFQO0FBQ0QsQyxDQUVEOztBQUNPLFNBQVNJLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQzlCQSxPQUFLLENBQUNDLE9BQU4sQ0FBYyxVQUFDUCxJQUFEO0FBQUEsV0FBVUQsUUFBUSxDQUFDQyxJQUFELENBQWxCO0FBQUEsR0FBZDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuZmQyMjFmYThlMjA1ZjBhNjNlYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMUlUgZnJvbSBcImxydS1jYWNoZVwiO1xyXG5cclxuY29uc3QgY2FjaGUgPSBuZXcgTFJVKHtcclxuICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDYwLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYWNoZShyZXBvKSB7XHJcbiAgY29uc3QgZnVsbF9uYW1lID0gcmVwby5mdWxsX25hbWU7XHJcbiAgY2FjaGUuc2V0KGZ1bGxfbmFtZSwgcmVwbyk7XHJcbn1cclxuXHJcbi8vIGZ1bGxfbmFtZTpmYWNlYm9vay9yZWFjdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGUoZnVsbF9uYW1lKSB7XHJcbiAgcmV0dXJuIGNhY2hlLmdldChmdWxsX25hbWUpO1xyXG59XHJcblxyXG4vLyDmoLnmja7mlbDnu4TnmoTkuIDkuKrliJfooajmj5LlhaVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFycmF5KHJlcG9zKSB7XHJcbiAgcmVwb3MuZm9yRWFjaCgocmVwbykgPT4gc2V0Q2FjaGUocmVwbykpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=