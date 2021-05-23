webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\index.js",
    _s = $RefreshSig$();



var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

 // 存储 tabs 栏的状态,以参数的形式传递下去


 // 加入缓存策略


var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_12___default.a({
  maxAge: 1000 * 60 * 10
}); // const Index = ({ Component, pageProps, reduxStore }) => {
//   // console.log(isLogin);
//   // console.log(userRepos);
//   // console.log(userStaredRepos);
//   return <span>去登录</span>;
// };
// 用于存储传递过来的数据
// 注意：这个是在模块的全局作用域里面的，会一直存在的，永远都会有值
// 所以对于服务端渲染，我们需要做层判断，不应该使用这个全局变量的值

var userLocalRepos, userLocalStaredRepos;
var isServer = false;

function Index(_ref) {
  _s();

  var _this = this;

  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user,
      router = _ref.router;
  var tabKey = router.query.key || "1";

  var handelTabChange = function handelTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/?key=".concat(activeKey));
  }; // 第一进来的时候，如果请求的有数据，就应该把数据缓存起来了


  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (!isServer) {
      cache.set("userRepos", userRepos);
      cache.set("userStaredRepos", userStaredRepos); // userLocalRepos = userRepos;
      // userLocalStaredRepos = userStaredRepos;
    }
  }, []);

  if (!user || !user.id) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-3088588873" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-3088588873",
        children: "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3088588873",
        children: ".root.jsx-3088588873{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFcsQUFHNEIsYUFDQSwwRUFDUyw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIG1heEFnZTogMTAwMCAqIDYwICogMTAsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbi8vICAgLy8gY29uc29sZS5sb2coaXNMb2dpbik7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlclJlcG9zKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyU3RhcmVkUmVwb3MpO1xyXG4vLyAgIHJldHVybiA8c3Bhbj7ljrvnmbvlvZU8L3NwYW4+O1xyXG4vLyB9O1xyXG5cclxuLy8g55So5LqO5a2Y5YKo5Lyg6YCS6L+H5p2l55qE5pWw5o2uXHJcbi8vIOazqOaEj++8mui/meS4quaYr+WcqOaooeWdl+eahOWFqOWxgOS9nOeUqOWfn+mHjOmdoueahO+8jOS8muS4gOebtOWtmOWcqOeahO+8jOawuOi/nOmDveS8muacieWAvFxyXG4vLyDmiYDku6Xlr7nkuo7mnI3liqHnq6/muLLmn5PvvIzmiJHku6zpnIDopoHlgZrlsYLliKTmlq3vvIzkuI3lupTor6Xkvb/nlKjov5nkuKrlhajlsYDlj5jph4/nmoTlgLxcclxubGV0IHVzZXJMb2NhbFJlcG9zLCB1c2VyTG9jYWxTdGFyZWRSZXBvcztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCBcIjFcIjtcclxuXHJcbiAgY29uc3QgaGFuZGVsVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIC8vIOesrOS4gOi/m+adpeeahOaXtuWAme+8jOWmguaenOivt+axgueahOacieaVsOaNru+8jOWwseW6lOivpeaKiuaVsOaNrue8k+WtmOi1t+adpeS6hlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIGNhY2hlLnNldChcInVzZXJSZXBvc1wiLCB1c2VyUmVwb3MpO1xyXG4gICAgICBjYWNoZS5zZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiwgdXNlclN0YXJlZFJlcG9zKTtcclxuICAgICAgLy8gdXNlckxvY2FsUmVwb3MgPSB1c2VyUmVwb3M7XHJcbiAgICAgIC8vIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGNsYXNzTmFtZT1cImF2YXRhclwiIGFsdD1cInVzZXIgYXZhdGFyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2luIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWUgfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW8gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgPE1haWxPdXRsaW5lZCBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyLmVtYWlsIHx8IFwiLS1cIn08L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kZWxUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vLyDms6jmhI/miJHku6zlnKjnu4Tku7bkuK3vvIhnZXRJbml0aWFsUHJvcHPvvInkuK3vvIzlj6rkvJrkvb/nlKjliLAgcmVxdWVzdCDvvIzlm6DkuLogcmVxdWVzdCDkvJrluK7liqnmiJHku6zljrvliKTmlq3mmK/lrqLmiLfnq6/ov5jmmK/mnI3liqHnq69cclxuXHJcbi8vIOazqOaEjyBnZXRJbml0aWFsUHJvcHMg5Lya5Zyo5a6i5oi356uv5LiN5ZCM6aG16Z2i6Lez6L2s55qE5pe25YCZ5L2/55So77yM5ZCM5qC35pyN5Yqh56uv5aaC5p6c5oiR5Lus6K6/6Zeu55qE5pivIGluZGV4IOi/meS4qumhtemdou+8jOS5n+S8muiwg+eUqCBnZXRJbml0aWFsUHJvcHPvvIzlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnosIPnlKjnmoTml7blgJnvvIzmiJHku6znmoTov5DooYznjq/looPlpITkuo4gbm9kZS5qcyDnjq/looPvvIzogIzkuI3mmK/mtY/op4jlmajnmoTnjq/looPvvIzlpoLmnpzmiJHku6zlnKggbm9kZS5qcyDnmoTnjq/looPkuIvor7fmsYLlsLHkvJrlh7rnjrDor7fmsYLnmoTmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwLyDov5nmoLfnmoTlnLDlnYDvvIzmiYDku6XkvJrlpLHotKXvvIjpu5jorqTnmoTnq6/lj6PmmK84MO+8iVxyXG5cclxuLy8g5rOo5oSP6L+Z6YeM5pivIGN0eCDogIzkuI3mmK8ge2N0eH1cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIOaKpSBFcnJvcjogY29ubmVjdCBFQ09OTlJFRlVTRUQgMTI3LjAuMC4xOjgwIOeahOmUmeivr1xyXG4gIC8vIOWmguaenOaYr+WcqOa1j+iniOWZqOmHjOmdouWPkemAgeeahO+8jOS8muagueaNruaIkeS7rOaPkOS+m+eahOi3r+W+hOS8muiHquWKqOWKoOS4iuaIkeS7rOW9k+WJjee9keermeeahOWfn+WQje+8iOWwseaYr2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC/vvInmiYDku6XlroPlrozmlbTor7fmsYLot6/lvoTlsLHmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcclxuICAvLyDlpoLmnpzmmK/lnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnov5vooYzmiafooYznmoTor53vvIzmiYDku6XmsqHmnInmtY/op4jlmajph4zpnaLnmoTln5/lkI3nmoTvvIzov5nkuKrml7blgJnor7fmsYLnmoTot6/lvoToh6rliqjlnKggYXhpb3Mg6YeM6Z2i5aKe5Yqg55qEIGh0dHA6Ly8xMjcuMC4wLjHvvIjpu5jorqQ4MOerr+WPo++8iS9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN077yM6L+Z5Liq5pe25YCZ5bCx5LiN5a+55LqG77yM5oiR5LusIDgwIOerr+WPo+ayoeacieWQr+WKqO+8jOS5n+S4jeaYr+aIkeS7rOaDs+ivt+axgueahOWcsOWdgFxyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgLy8gICAuZ2V0KFwiL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcIilcclxuICAvLyAgIC50aGVuKChyZXNwKSA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XHJcblxyXG4gIC8vIOazqOaEjyByZXEg5ZKMIHJlcyDlj6rmnInlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnmiY3kvJrmnIlcclxuXHJcbiAgLy8g5rOo5oSP5LiA5pem55m75Ye65LqG77yM5oiR5Lus6ZyA6KaB5YGa5Liq6K+35rGC55qE5Yik5patXHJcbiAgLy8g5Y+v5Lul6YCa6L+HIGN0eC5yZXEg5ZKMIGN0eC5yZXMg77yIbm9kZS5qcyDlr7nosaHvvIzkuI3kvJrlrZjlnKjkuo7mtY/op4jlmajov5DooYznjq/looPph4zpnaLnmoTvvInmnaXov5vooYzliKTmlq3vvIzkvYbmmK/lnKjnrKblkIjlnKjmnI3liqHnq6/lj6/ku6XliKTmlq3jgILlnKjlrqLmiLfnq6/ov5vooYzliKTmlq3vvIzmmK/msqHmnIkgY3R4IOWvueixoeeahOOAglxyXG5cclxuICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICBpZiAoY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpICYmIHVzZXJMb2NhbFN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOiB1c2VyTG9jYWxSZXBvcyxcclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJMb2NhbFN0YXJlZFJlcG9zLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+R6LW36K+35rGC77yM5YiX5Ye65L2g5omA5pyJ55qE5Yib5bu655qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IFwiL3VzZXIvcmVwb3NcIiB9LCBjdHgucmVxLCBjdHgucmVzKTtcclxuICAvLyDooqvlhbPms6jnmoTku5PlupNcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBcIi9naXN0cy9zdGFycmVkXCIgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g5rOo5oSP5Zyo5YaZIHdpdGhSb3V0ZXIg5ZKMIGNvbm5lY3Qg55qE5pe25YCZ77yM6ZyA6KaB5oqKIHdpdGhSb3V0ZXIg5pS+5Zyo5aSW6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH07XHJcbiAgfSkoSW5kZXgpXHJcbik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\index.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "jsx-4069790378" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-4069790378" + " " + "user-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        src: user.avatar_url,
        alt: "user avatar",
        className: "jsx-4069790378" + " " + "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "login",
        children: user.login || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "name",
        children: user.name || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "bio",
        children: user.bio || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-4069790378" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["MailOutlined"], {
          style: {
            marginRight: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "mailto:".concat(user.email),
          className: "jsx-4069790378",
          children: user.email || "--"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-4069790378" + " " + "user-repos",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
        activeKey: tabKey,
        onChange: handelTabChange,
        animated: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
          tab: "\u4F60\u7684\u4ED3\u5E93",
          children: userRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this);
          })
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
          tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
          children: userStaredRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this);
          })
        }, "2", false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "4069790378",
      children: ".root.jsx-4069790378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-4069790378{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-4069790378{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-4069790378{margin-top:20px;color:#333;}.bio.jsx-4069790378{margin-top:20px;color:#333;}.avatar.jsx-4069790378{width:100%;border-radius:5px;}.user-repos.jsx-4069790378{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R1MsQUFHMEIsQUFLRCxBQU9JLEFBS0EsQUFJQSxBQUlMLEFBSUMsV0FITSxDQXBCQSxJQU9ILEFBS0osQUFJQSxXQUhiLEFBSUEsRUFJQSxDQXBCZ0IsQ0FPRSxnQkFDbEIsd0JBZUEsR0E3QnlCLFlBT1YsMEVBQ1MsdUJBUFAsZUFDakIsd0NBT0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIG1heEFnZTogMTAwMCAqIDYwICogMTAsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbi8vICAgLy8gY29uc29sZS5sb2coaXNMb2dpbik7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlclJlcG9zKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyU3RhcmVkUmVwb3MpO1xyXG4vLyAgIHJldHVybiA8c3Bhbj7ljrvnmbvlvZU8L3NwYW4+O1xyXG4vLyB9O1xyXG5cclxuLy8g55So5LqO5a2Y5YKo5Lyg6YCS6L+H5p2l55qE5pWw5o2uXHJcbi8vIOazqOaEj++8mui/meS4quaYr+WcqOaooeWdl+eahOWFqOWxgOS9nOeUqOWfn+mHjOmdoueahO+8jOS8muS4gOebtOWtmOWcqOeahO+8jOawuOi/nOmDveS8muacieWAvFxyXG4vLyDmiYDku6Xlr7nkuo7mnI3liqHnq6/muLLmn5PvvIzmiJHku6zpnIDopoHlgZrlsYLliKTmlq3vvIzkuI3lupTor6Xkvb/nlKjov5nkuKrlhajlsYDlj5jph4/nmoTlgLxcclxubGV0IHVzZXJMb2NhbFJlcG9zLCB1c2VyTG9jYWxTdGFyZWRSZXBvcztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCBcIjFcIjtcclxuXHJcbiAgY29uc3QgaGFuZGVsVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIC8vIOesrOS4gOi/m+adpeeahOaXtuWAme+8jOWmguaenOivt+axgueahOacieaVsOaNru+8jOWwseW6lOivpeaKiuaVsOaNrue8k+WtmOi1t+adpeS6hlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIGNhY2hlLnNldChcInVzZXJSZXBvc1wiLCB1c2VyUmVwb3MpO1xyXG4gICAgICBjYWNoZS5zZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiwgdXNlclN0YXJlZFJlcG9zKTtcclxuICAgICAgLy8gdXNlckxvY2FsUmVwb3MgPSB1c2VyUmVwb3M7XHJcbiAgICAgIC8vIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGNsYXNzTmFtZT1cImF2YXRhclwiIGFsdD1cInVzZXIgYXZhdGFyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2luIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWUgfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW8gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgPE1haWxPdXRsaW5lZCBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyLmVtYWlsIHx8IFwiLS1cIn08L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kZWxUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vLyDms6jmhI/miJHku6zlnKjnu4Tku7bkuK3vvIhnZXRJbml0aWFsUHJvcHPvvInkuK3vvIzlj6rkvJrkvb/nlKjliLAgcmVxdWVzdCDvvIzlm6DkuLogcmVxdWVzdCDkvJrluK7liqnmiJHku6zljrvliKTmlq3mmK/lrqLmiLfnq6/ov5jmmK/mnI3liqHnq69cclxuXHJcbi8vIOazqOaEjyBnZXRJbml0aWFsUHJvcHMg5Lya5Zyo5a6i5oi356uv5LiN5ZCM6aG16Z2i6Lez6L2s55qE5pe25YCZ5L2/55So77yM5ZCM5qC35pyN5Yqh56uv5aaC5p6c5oiR5Lus6K6/6Zeu55qE5pivIGluZGV4IOi/meS4qumhtemdou+8jOS5n+S8muiwg+eUqCBnZXRJbml0aWFsUHJvcHPvvIzlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnosIPnlKjnmoTml7blgJnvvIzmiJHku6znmoTov5DooYznjq/looPlpITkuo4gbm9kZS5qcyDnjq/looPvvIzogIzkuI3mmK/mtY/op4jlmajnmoTnjq/looPvvIzlpoLmnpzmiJHku6zlnKggbm9kZS5qcyDnmoTnjq/looPkuIvor7fmsYLlsLHkvJrlh7rnjrDor7fmsYLnmoTmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwLyDov5nmoLfnmoTlnLDlnYDvvIzmiYDku6XkvJrlpLHotKXvvIjpu5jorqTnmoTnq6/lj6PmmK84MO+8iVxyXG5cclxuLy8g5rOo5oSP6L+Z6YeM5pivIGN0eCDogIzkuI3mmK8ge2N0eH1cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIOaKpSBFcnJvcjogY29ubmVjdCBFQ09OTlJFRlVTRUQgMTI3LjAuMC4xOjgwIOeahOmUmeivr1xyXG4gIC8vIOWmguaenOaYr+WcqOa1j+iniOWZqOmHjOmdouWPkemAgeeahO+8jOS8muagueaNruaIkeS7rOaPkOS+m+eahOi3r+W+hOS8muiHquWKqOWKoOS4iuaIkeS7rOW9k+WJjee9keermeeahOWfn+WQje+8iOWwseaYr2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC/vvInmiYDku6XlroPlrozmlbTor7fmsYLot6/lvoTlsLHmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcclxuICAvLyDlpoLmnpzmmK/lnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnov5vooYzmiafooYznmoTor53vvIzmiYDku6XmsqHmnInmtY/op4jlmajph4zpnaLnmoTln5/lkI3nmoTvvIzov5nkuKrml7blgJnor7fmsYLnmoTot6/lvoToh6rliqjlnKggYXhpb3Mg6YeM6Z2i5aKe5Yqg55qEIGh0dHA6Ly8xMjcuMC4wLjHvvIjpu5jorqQ4MOerr+WPo++8iS9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN077yM6L+Z5Liq5pe25YCZ5bCx5LiN5a+55LqG77yM5oiR5LusIDgwIOerr+WPo+ayoeacieWQr+WKqO+8jOS5n+S4jeaYr+aIkeS7rOaDs+ivt+axgueahOWcsOWdgFxyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgLy8gICAuZ2V0KFwiL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcIilcclxuICAvLyAgIC50aGVuKChyZXNwKSA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XHJcblxyXG4gIC8vIOazqOaEjyByZXEg5ZKMIHJlcyDlj6rmnInlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnmiY3kvJrmnIlcclxuXHJcbiAgLy8g5rOo5oSP5LiA5pem55m75Ye65LqG77yM5oiR5Lus6ZyA6KaB5YGa5Liq6K+35rGC55qE5Yik5patXHJcbiAgLy8g5Y+v5Lul6YCa6L+HIGN0eC5yZXEg5ZKMIGN0eC5yZXMg77yIbm9kZS5qcyDlr7nosaHvvIzkuI3kvJrlrZjlnKjkuo7mtY/op4jlmajov5DooYznjq/looPph4zpnaLnmoTvvInmnaXov5vooYzliKTmlq3vvIzkvYbmmK/lnKjnrKblkIjlnKjmnI3liqHnq6/lj6/ku6XliKTmlq3jgILlnKjlrqLmiLfnq6/ov5vooYzliKTmlq3vvIzmmK/msqHmnIkgY3R4IOWvueixoeeahOOAglxyXG5cclxuICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICBpZiAoY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpICYmIHVzZXJMb2NhbFN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOiB1c2VyTG9jYWxSZXBvcyxcclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJMb2NhbFN0YXJlZFJlcG9zLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+R6LW36K+35rGC77yM5YiX5Ye65L2g5omA5pyJ55qE5Yib5bu655qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IFwiL3VzZXIvcmVwb3NcIiB9LCBjdHgucmVxLCBjdHgucmVzKTtcclxuICAvLyDooqvlhbPms6jnmoTku5PlupNcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBcIi9naXN0cy9zdGFycmVkXCIgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g5rOo5oSP5Zyo5YaZIHdpdGhSb3V0ZXIg5ZKMIGNvbm5lY3Qg55qE5pe25YCZ77yM6ZyA6KaB5oqKIHdpdGhSb3V0ZXIg5pS+5Zyo5aSW6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH07XHJcbiAgfSkoSW5kZXgpXHJcbik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
} // 注意我们在组件中（getInitialProps）中，只会使用到 request ，因为 request 会帮助我们去判断是客户端还是服务端
// 注意 getInitialProps 会在客户端不同页面跳转的时候使用，同样服务端如果我们访问的是 index 这个页面，也会调用 getInitialProps，在服务端渲染的时候调用的时候，我们的运行环境处于 node.js 环境，而不是浏览器的环境，如果我们在 node.js 的环境下请求就会出现请求的是 http://localhost:3000/ 这样的地址，所以会失败（默认的端口是80）
// 注意这里是 ctx 而不是 {ctx}


_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var userRepos, userStaredRepos;
    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isServer) {
              _context.next = 3;
              break;
            }

            if (!(cache.get("userRepos") && userLocalStaredRepos)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              userRepos: userLocalRepos,
              userStaredRepos: userLocalStaredRepos
            });

          case 3:
            _context.next = 5;
            return api.request({
              url: "/user/repos"
            }, ctx.req, ctx.res);

          case 5:
            userRepos = _context.sent;
            _context.next = 8;
            return api.request({
              url: "/gists/starred"
            }, ctx.req, ctx.res);

          case 8:
            userStaredRepos = _context.sent;
            return _context.abrupt("return", {
              isLogin: true,
              userRepos: userRepos.data,
              userStaredRepos: userStaredRepos.data
            });

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
}(); // 注意在写 withRouter 和 connect 的时候，需要把 withRouter 放在外面


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
})(Index)));

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpIiwicmVxdWlyZSIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjYWNoZSIsIkxSVSIsIm1heEFnZSIsInVzZXJMb2NhbFJlcG9zIiwidXNlckxvY2FsU3RhcmVkUmVwb3MiLCJpc1NlcnZlciIsIkluZGV4IiwidXNlclJlcG9zIiwidXNlclN0YXJlZFJlcG9zIiwidXNlciIsInJvdXRlciIsInRhYktleSIsInF1ZXJ5Iiwia2V5IiwiaGFuZGVsVGFiQ2hhbmdlIiwiYWN0aXZlS2V5IiwiUm91dGVyIiwicHVzaCIsInVzZUVmZmVjdCIsInNldCIsImlkIiwiT0FVVEhfVVJMIiwiYXZhdGFyX3VybCIsImxvZ2luIiwibmFtZSIsImJpbyIsIm1hcmdpblJpZ2h0IiwiZW1haWwiLCJtYXAiLCJyZXBvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZ2V0IiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImlzTG9naW4iLCJkYXRhIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJtYXBTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFuQjs7QUFHQTtBQUVBO0FBRUE7O2lCQUNnQ0Msa0RBQVMsRTtJQUFqQ0MsbUIsY0FBQUEsbUI7O0NBSVI7O0FBQ0E7Q0FJQTs7QUFDQTtBQUVBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxpREFBSixDQUFRO0FBQ3BCQyxRQUFNLEVBQUUsT0FBTyxFQUFQLEdBQVk7QUFEQSxDQUFSLENBQWQsQyxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQyxjQUFKLEVBQW9CQyxvQkFBcEI7QUFFQSxJQUFNQyxRQUFRLFFBQWQ7O0FB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NUJILEdBQUcsQ0FBQ0ksR0FGd0IsRUFHNUJKLEdBQUcsQ0FBQ0ssR0FId0IsQ0F6QlI7O0FBQUE7QUF5QmhCNUIsMkJBekJnQjtBQUFBLDZDQStCZjtBQUNMNkIscUJBQU8sRUFBRSxJQURKO0FBRUw5Qix1QkFBUyxFQUFFQSxTQUFTLENBQUMrQixJQUZoQjtBQUdMOUIsNkJBQWUsRUFBRUEsZUFBZSxDQUFDOEI7QUFINUIsYUEvQmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSSxDQXNDQTs7O0FBQ2VDLDhIQUFVLENBQ3ZCQywyREFBTyxDQUFDLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQy9CLFNBQU87QUFDTGpDLFFBQUksRUFBRWlDLEtBQUssQ0FBQ2pDO0FBRFAsR0FBUDtBQUdELENBSk0sQ0FBUCxDQUlHSCxLQUpILENBRHVCLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxYTNiNjVhYzIyYjZkZGNmMmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFicyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbi8vIOWtmOWCqCB0YWJzIOagj+eahOeKtuaAgSzku6Xlj4LmlbDnmoTlvaLlvI/kvKDpgJLkuIvljrtcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIOWKoOWFpee8k+WtmOetlueVpVxyXG5pbXBvcnQgTFJVIGZyb20gXCJscnUtY2FjaGVcIjtcclxuXHJcbmNvbnN0IGNhY2hlID0gbmV3IExSVSh7XHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCxcclxufSk7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJTdGFyZWRSZXBvcyk7XHJcbi8vICAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbi8vIH07XHJcblxyXG4vLyDnlKjkuo7lrZjlgqjkvKDpgJLov4fmnaXnmoTmlbDmja5cclxuLy8g5rOo5oSP77ya6L+Z5Liq5piv5Zyo5qih5Z2X55qE5YWo5bGA5L2c55So5Z+f6YeM6Z2i55qE77yM5Lya5LiA55u05a2Y5Zyo55qE77yM5rC46L+c6YO95Lya5pyJ5YC8XHJcbi8vIOaJgOS7peWvueS6juacjeWKoeerr+a4suafk++8jOaIkeS7rOmcgOimgeWBmuWxguWIpOaWre+8jOS4jeW6lOivpeS9v+eUqOi/meS4quWFqOWxgOWPmOmHj+eahOWAvFxyXG5sZXQgdXNlckxvY2FsUmVwb3MsIHVzZXJMb2NhbFN0YXJlZFJlcG9zO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciwgcm91dGVyIH0pIHtcclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8IFwiMVwiO1xyXG5cclxuICBjb25zdCBoYW5kZWxUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g56ys5LiA6L+b5p2l55qE5pe25YCZ77yM5aaC5p6c6K+35rGC55qE5pyJ5pWw5o2u77yM5bCx5bqU6K+l5oqK5pWw5o2u57yT5a2Y6LW35p2l5LqGXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgY2FjaGUuc2V0KFwidXNlclJlcG9zXCIsIHVzZXJSZXBvcyk7XHJcbiAgICAgIGNhY2hlLnNldChcInVzZXJTdGFyZWRSZXBvc1wiLCB1c2VyU3RhcmVkUmVwb3MpO1xyXG4gICAgICAvLyB1c2VyTG9jYWxSZXBvcyA9IHVzZXJSZXBvcztcclxuICAgICAgLy8gdXNlckxvY2FsU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3M7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5cclxuICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwiYXZhdGFyXCIgYWx0PVwidXNlciBhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW4gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZSB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpbyB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICA8TWFpbE91dGxpbmVkIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSAvPlxyXG4gICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+e3VzZXIuZW1haWwgfHwgXCItLVwifTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRlbFRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICB7dXNlclJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLXJlcG9zIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIOazqOaEj+aIkeS7rOWcqOe7hOS7tuS4re+8iGdldEluaXRpYWxQcm9wc++8ieS4re+8jOWPquS8muS9v+eUqOWIsCByZXF1ZXN0IO+8jOWboOS4uiByZXF1ZXN0IOS8muW4ruWKqeaIkeS7rOWOu+WIpOaWreaYr+WuouaIt+err+i/mOaYr+acjeWKoeerr1xyXG5cclxuLy8g5rOo5oSPIGdldEluaXRpYWxQcm9wcyDkvJrlnKjlrqLmiLfnq6/kuI3lkIzpobXpnaLot7PovaznmoTml7blgJnkvb/nlKjvvIzlkIzmoLfmnI3liqHnq6/lpoLmnpzmiJHku6zorr/pl67nmoTmmK8gaW5kZXgg6L+Z5Liq6aG16Z2i77yM5Lmf5Lya6LCD55SoIGdldEluaXRpYWxQcm9wc++8jOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeiwg+eUqOeahOaXtuWAme+8jOaIkeS7rOeahOi/kOihjOeOr+Wig+WkhOS6jiBub2RlLmpzIOeOr+Wig++8jOiAjOS4jeaYr+a1j+iniOWZqOeahOeOr+Wig++8jOWmguaenOaIkeS7rOWcqCBub2RlLmpzIOeahOeOr+Wig+S4i+ivt+axguWwseS8muWHuueOsOivt+axgueahOaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvIOi/meagt+eahOWcsOWdgO+8jOaJgOS7peS8muWksei0pe+8iOm7mOiupOeahOerr+WPo+aYrzgw77yJXHJcblxyXG4vLyDms6jmhI/ov5nph4zmmK8gY3R4IOiAjOS4jeaYryB7Y3R4fVxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgLy8g5oqlIEVycm9yOiBjb25uZWN0IEVDT05OUkVGVVNFRCAxMjcuMC4wLjE6ODAg55qE6ZSZ6K+vXHJcbiAgLy8g5aaC5p6c5piv5Zyo5rWP6KeI5Zmo6YeM6Z2i5Y+R6YCB55qE77yM5Lya5qC55o2u5oiR5Lus5o+Q5L6b55qE6Lev5b6E5Lya6Ieq5Yqo5Yqg5LiK5oiR5Lus5b2T5YmN572R56uZ55qE5Z+f5ZCN77yI5bCx5pivaHR0cDovL2xvY2FsaG9zdDozMDAwL++8ieaJgOS7peWug+WujOaVtOivt+axgui3r+W+hOWwseaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4gIC8vIOWmguaenOaYr+WcqOacjeWKoeerr+a4suafk+eahOaXtuWAmei/m+ihjOaJp+ihjOeahOivne+8jOaJgOS7peayoeaciea1j+iniOWZqOmHjOmdoueahOWfn+WQjeeahO+8jOi/meS4quaXtuWAmeivt+axgueahOi3r+W+hOiHquWKqOWcqCBheGlvcyDph4zpnaLlop7liqDnmoQgaHR0cDovLzEyNy4wLjAuMe+8iOm7mOiupDgw56uv5Y+j77yJL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3TvvIzov5nkuKrml7blgJnlsLHkuI3lr7nkuobvvIzmiJHku6wgODAg56uv5Y+j5rKh5pyJ5ZCv5Yqo77yM5Lmf5LiN5piv5oiR5Lus5oOz6K+35rGC55qE5Zyw5Z2AXHJcbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAvLyAgIC5nZXQoXCIvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiKVxyXG4gIC8vICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKTtcclxuXHJcbiAgLy8g5rOo5oSPIHJlcSDlkowgcmVzIOWPquacieWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeaJjeS8muaciVxyXG5cclxuICAvLyDms6jmhI/kuIDml6bnmbvlh7rkuobvvIzmiJHku6zpnIDopoHlgZrkuKror7fmsYLnmoTliKTmlq1cclxuICAvLyDlj6/ku6XpgJrov4cgY3R4LnJlcSDlkowgY3R4LnJlcyDvvIhub2RlLmpzIOWvueixoe+8jOS4jeS8muWtmOWcqOS6jua1j+iniOWZqOi/kOihjOeOr+Wig+mHjOmdoueahO+8ieadpei/m+ihjOWIpOaWre+8jOS9huaYr+WcqOespuWQiOWcqOacjeWKoeerr+WPr+S7peWIpOaWreOAguWcqOWuouaIt+err+i/m+ihjOWIpOaWre+8jOaYr+ayoeaciSBjdHgg5a+56LGh55qE44CCXHJcblxyXG4gIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgIGlmIChjYWNoZS5nZXQoXCJ1c2VyUmVwb3NcIikgJiYgdXNlckxvY2FsU3RhcmVkUmVwb3MpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVwb3M6IHVzZXJMb2NhbFJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogdXNlckxvY2FsU3RhcmVkUmVwb3MsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlj5Hotbfor7fmsYLvvIzliJflh7rkvaDmiYDmnInnmoTliJvlu7rnmoTku5PlupNcclxuICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7IHVybDogXCIvdXNlci9yZXBvc1wiIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xyXG4gIC8vIOiiq+WFs+azqOeahOS7k+W6k1xyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IFwiL2dpc3RzL3N0YXJyZWRcIiB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgIHVzZXJSZXBvczogdXNlclJlcG9zLmRhdGEsXHJcbiAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJTdGFyZWRSZXBvcy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDms6jmhI/lnKjlhpkgd2l0aFJvdXRlciDlkowgY29ubmVjdCDnmoTml7blgJnvvIzpnIDopoHmioogd2l0aFJvdXRlciDmlL7lnKjlpJbpnaJcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfTtcclxuICB9KShJbmRleClcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==