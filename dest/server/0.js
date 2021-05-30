exports.ids = [0];
exports.modules = {

/***/ "./components/MarkFdownRenderer.jsx":
/*!******************************************!*\
  !*** ./components/MarkFdownRenderer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "markdown-it");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! github-markdown-css */ "./node_modules/github-markdown-css/github-markdown.css");
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\MarkFdownRenderer.jsx";
 // 具体渲染内容都是跟 props 有关，如果 props 没有变化，则无需重新渲染


 // html: true -- 当传递了这个参数会把我们的 html 中的内容转化成 html
// linkify: true -- 当 html 里面有链接就会转化为可以点击的链接

const md = new markdown_it__WEBPACK_IMPORTED_MODULE_2___default.a({
  html: true,
  linkify: true
}); // 中文解码

function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function markdownRenderer({
  content,
  isBase64
}) {
  const markdown = isBase64 ? b64_to_utf8(content) : content; // markdown 的内容没有变化，则 html 的内容就不会变化(md.render 转化过程比较耗时)

  const html = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => md.render(markdown), [markdown]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "markdown-body",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}));

/***/ }),

/***/ "./node_modules/github-markdown-css/github-markdown.css":
/*!**************************************************************!*\
  !*** ./node_modules/github-markdown-css/github-markdown.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtGZG93blJlbmRlcmVyLmpzeCJdLCJuYW1lcyI6WyJtZCIsIk1hcmtkb3duSXQiLCJodG1sIiwibGlua2lmeSIsImI2NF90b191dGY4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwiYXRvYiIsIm1lbW8iLCJtYXJrZG93blJlbmRlcmVyIiwiY29udGVudCIsImlzQmFzZTY0IiwibWFya2Rvd24iLCJ1c2VNZW1vIiwicmVuZGVyIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7Q0FJQTtBQUNBOztBQUNBLE1BQU1BLEVBQUUsR0FBRyxJQUFJQyxrREFBSixDQUFlO0FBQ3RCQyxNQUFJLEVBQUUsSUFEZ0I7QUFFdEJDLFNBQU8sRUFBRTtBQUZhLENBQWYsQ0FBWCxDLENBTUE7O0FBQ0EsU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDdEIsU0FBT0Msa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxHQUFELENBQUwsQ0FBUCxDQUF6QjtBQUNIOztBQUVjSSw4SEFBSSxDQUFDLFNBQVNDLGdCQUFULENBQTBCO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxDQUExQixFQUFpRDtBQUNqRSxRQUFNQyxRQUFRLEdBQUdELFFBQVEsR0FBR1IsV0FBVyxDQUFDTyxPQUFELENBQWQsR0FBMEJBLE9BQW5ELENBRGlFLENBRWpFOztBQUNBLFFBQU1ULElBQUksR0FBR1kscURBQU8sQ0FBQyxNQUFNZCxFQUFFLENBQUNlLE1BQUgsQ0FBVUYsUUFBVixDQUFQLEVBQTRCLENBQUNBLFFBQUQsQ0FBNUIsQ0FBcEI7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ0k7QUFBSyw2QkFBdUIsRUFBRTtBQUFFRyxjQUFNLEVBQUVkO0FBQVY7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0gsQ0FUa0IsQ0FBbkIsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG4vLyDlhbfkvZPmuLLmn5PlhoXlrrnpg73mmK/ot58gcHJvcHMg5pyJ5YWz77yM5aaC5p6cIHByb3BzIOayoeacieWPmOWMlu+8jOWImeaXoOmcgOmHjeaWsOa4suafk1xyXG5cclxuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XHJcbmltcG9ydCBcImdpdGh1Yi1tYXJrZG93bi1jc3NcIjtcclxuXHJcblxyXG4vLyBodG1sOiB0cnVlIC0tIOW9k+S8oOmAkuS6hui/meS4quWPguaVsOS8muaKiuaIkeS7rOeahCBodG1sIOS4reeahOWGheWuuei9rOWMluaIkCBodG1sXHJcbi8vIGxpbmtpZnk6IHRydWUgLS0g5b2TIGh0bWwg6YeM6Z2i5pyJ6ZO+5o6l5bCx5Lya6L2s5YyW5Li65Y+v5Lul54K55Ye755qE6ZO+5o6lXHJcbmNvbnN0IG1kID0gbmV3IE1hcmtkb3duSXQoe1xyXG4gICAgaHRtbDogdHJ1ZSxcclxuICAgIGxpbmtpZnk6IHRydWUsXHJcbn0pO1xyXG5cclxuXHJcbi8vIOS4reaWh+ino+eggVxyXG5mdW5jdGlvbiBiNjRfdG9fdXRmOChzdHIpIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGF0b2Ioc3RyKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKGZ1bmN0aW9uIG1hcmtkb3duUmVuZGVyZXIoeyBjb250ZW50LCBpc0Jhc2U2NCB9KSB7XHJcbiAgICBjb25zdCBtYXJrZG93biA9IGlzQmFzZTY0ID8gYjY0X3RvX3V0ZjgoY29udGVudCkgOiBjb250ZW50XHJcbiAgICAvLyBtYXJrZG93biDnmoTlhoXlrrnmsqHmnInlj5jljJbvvIzliJkgaHRtbCDnmoTlhoXlrrnlsLHkuI3kvJrlj5jljJYobWQucmVuZGVyIOi9rOWMlui/h+eoi+avlOi+g+iAl+aXtilcclxuICAgIGNvbnN0IGh0bWwgPSB1c2VNZW1vKCgpID0+IG1kLnJlbmRlcihtYXJrZG93biksIFttYXJrZG93bl0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fT48L2Rpdj47XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=