webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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






var _jsxFileName = "D:\\lls\\chenzhengquan\\Desktop\\muke-study\\nextjs-create-app\\pages\\index.js",
    _s = $RefreshSig$();



var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

 // 存储 tabs 栏的状态,以参数的形式传递下去


 // 加入缓存策略


var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_12___default.a({
  // 表示最长的事件不去使用缓存在里面 key 的数据，就会把该数据删除
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
  // 如果不传递参数，则之后在 mounted 的时候调用一次


  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (!isServer) {
      // 防止值为 null 的时候也缓存
      // if (userRepos) {
      //   cache.set("userRepos", userRepos);
      // }
      // if (userStaredRepos) {
      //   cache.set("userStaredRepos", userStaredRepos);
      // }
      // 这种方法是不管有没有发起请求获取到数据，一到时间就会刷新数据
      userLocalRepos = userRepos;
      userLocalStaredRepos = userStaredRepos;
      setTimeout(function () {
        userLocalRepos = null;
        userLocalStaredRepos = null;
      }, 1000 * 60 * 10);
    }
  }, [userRepos, userStaredRepos]);

  if (!user || !user.id) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-3088588873" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-3088588873",
        children: "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3088588873",
        children: ".root.jsx-3088588873{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVXLEFBRzRCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3JCIiwiZmlsZSI6IkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFicyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbi8vIOWtmOWCqCB0YWJzIOagj+eahOeKtuaAgSzku6Xlj4LmlbDnmoTlvaLlvI/kvKDpgJLkuIvljrtcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIOWKoOWFpee8k+WtmOetlueVpVxyXG5pbXBvcnQgTFJVIGZyb20gXCJscnUtY2FjaGVcIjtcclxuXHJcbmNvbnN0IGNhY2hlID0gbmV3IExSVSh7XHJcbiAgLy8g6KGo56S65pyA6ZW/55qE5LqL5Lu25LiN5Y675L2/55So57yT5a2Y5Zyo6YeM6Z2iIGtleSDnmoTmlbDmja7vvIzlsLHkvJrmioror6XmlbDmja7liKDpmaRcclxuICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDEwLFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKGlzTG9naW4pO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJSZXBvcyk7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlclN0YXJlZFJlcG9zKTtcclxuLy8gICByZXR1cm4gPHNwYW4+5Y6755m75b2VPC9zcGFuPjtcclxuLy8gfTtcclxuXHJcbi8vIOeUqOS6juWtmOWCqOS8oOmAkui/h+adpeeahOaVsOaNrlxyXG4vLyDms6jmhI/vvJrov5nkuKrmmK/lnKjmqKHlnZfnmoTlhajlsYDkvZznlKjln5/ph4zpnaLnmoTvvIzkvJrkuIDnm7TlrZjlnKjnmoTvvIzmsLjov5zpg73kvJrmnInlgLxcclxuLy8g5omA5Lul5a+55LqO5pyN5Yqh56uv5riy5p+T77yM5oiR5Lus6ZyA6KaB5YGa5bGC5Yik5pat77yM5LiN5bqU6K+l5L2/55So6L+Z5Liq5YWo5bGA5Y+Y6YeP55qE5YC8XHJcblxyXG5sZXQgdXNlckxvY2FsUmVwb3MsIHVzZXJMb2NhbFN0YXJlZFJlcG9zO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciwgcm91dGVyIH0pIHtcclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8IFwiMVwiO1xyXG5cclxuICBjb25zdCBoYW5kZWxUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g56ys5LiA6L+b5p2l55qE5pe25YCZ77yM5aaC5p6c6K+35rGC55qE5pyJ5pWw5o2u77yM5bCx5bqU6K+l5oqK5pWw5o2u57yT5a2Y6LW35p2l5LqGXHJcbiAgLy8g5aaC5p6c5LiN5Lyg6YCS5Y+C5pWw77yM5YiZ5LmL5ZCO5ZyoIG1vdW50ZWQg55qE5pe25YCZ6LCD55So5LiA5qyhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgLy8g6Ziy5q2i5YC85Li6IG51bGwg55qE5pe25YCZ5Lmf57yT5a2YXHJcbiAgICAgIC8vIGlmICh1c2VyUmVwb3MpIHtcclxuICAgICAgLy8gICBjYWNoZS5zZXQoXCJ1c2VyUmVwb3NcIiwgdXNlclJlcG9zKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBpZiAodXNlclN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KFwidXNlclN0YXJlZFJlcG9zXCIsIHVzZXJTdGFyZWRSZXBvcyk7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIOi/meenjeaWueazleaYr+S4jeeuoeacieayoeacieWPkei1t+ivt+axguiOt+WPluWIsOaVsOaNru+8jOS4gOWIsOaXtumXtOWwseS8muWIt+aWsOaVsOaNrlxyXG4gICAgICB1c2VyTG9jYWxSZXBvcyA9IHVzZXJSZXBvcztcclxuICAgICAgdXNlckxvY2FsU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3M7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHVzZXJMb2NhbFJlcG9zID0gbnVsbDtcclxuICAgICAgICB1c2VyTG9jYWxTdGFyZWRSZXBvcyA9IG51bGw7XHJcbiAgICAgIH0sIDEwMDAgKiA2MCAqIDEwKTtcclxuICAgIH1cclxuICB9LCBbdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3NdKTtcclxuXHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGNsYXNzTmFtZT1cImF2YXRhclwiIGFsdD1cInVzZXIgYXZhdGFyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2luIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWUgfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW8gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgPE1haWxPdXRsaW5lZCBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyLmVtYWlsIHx8IFwiLS1cIn08L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kZWxUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vLyDms6jmhI/miJHku6zlnKjnu4Tku7bkuK3vvIhnZXRJbml0aWFsUHJvcHPvvInkuK3vvIzlj6rkvJrkvb/nlKjliLAgcmVxdWVzdCDvvIzlm6DkuLogcmVxdWVzdCDkvJrluK7liqnmiJHku6zljrvliKTmlq3mmK/lrqLmiLfnq6/ov5jmmK/mnI3liqHnq69cclxuXHJcbi8vIOazqOaEjyBnZXRJbml0aWFsUHJvcHMg5Lya5Zyo5a6i5oi356uv5LiN5ZCM6aG16Z2i6Lez6L2s55qE5pe25YCZ5L2/55So77yM5ZCM5qC35pyN5Yqh56uv5aaC5p6c5oiR5Lus6K6/6Zeu55qE5pivIGluZGV4IOi/meS4qumhtemdou+8jOS5n+S8muiwg+eUqCBnZXRJbml0aWFsUHJvcHPvvIzlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnosIPnlKjnmoTml7blgJnvvIzmiJHku6znmoTov5DooYznjq/looPlpITkuo4gbm9kZS5qcyDnjq/looPvvIzogIzkuI3mmK/mtY/op4jlmajnmoTnjq/looPvvIzlpoLmnpzmiJHku6zlnKggbm9kZS5qcyDnmoTnjq/looPkuIvor7fmsYLlsLHkvJrlh7rnjrDor7fmsYLnmoTmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwLyDov5nmoLfnmoTlnLDlnYDvvIzmiYDku6XkvJrlpLHotKXvvIjpu5jorqTnmoTnq6/lj6PmmK84MO+8iVxyXG5cclxuLy8g5rOo5oSP6L+Z6YeM5pivIGN0eCDogIzkuI3mmK8ge2N0eH1cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIGlmIChjdHgucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gIC8vIHJldHVybiB7fTtcclxuICAvLyB9XHJcbiAgLy8gY29uc29sZS5sb2coY3R4LCAzMzMzKTtcclxuICAvLyByZXR1cm4ge307XHJcbiAgLy8g5oqlIEVycm9yOiBjb25uZWN0IEVDT05OUkVGVVNFRCAxMjcuMC4wLjE6ODAg55qE6ZSZ6K+vXHJcbiAgLy8g5aaC5p6c5piv5Zyo5rWP6KeI5Zmo6YeM6Z2i5Y+R6YCB55qE77yM5Lya5qC55o2u5oiR5Lus5o+Q5L6b55qE6Lev5b6E5Lya6Ieq5Yqo5Yqg5LiK5oiR5Lus5b2T5YmN572R56uZ55qE5Z+f5ZCN77yI5bCx5pivaHR0cDovL2xvY2FsaG9zdDozMDAwL++8ieaJgOS7peWug+WujOaVtOivt+axgui3r+W+hOWwseaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4gIC8vIOWmguaenOaYr+WcqOacjeWKoeerr+a4suafk+eahOaXtuWAmei/m+ihjOaJp+ihjOeahOivne+8jOaJgOS7peayoeaciea1j+iniOWZqOmHjOmdoueahOWfn+WQjeeahO+8jOi/meS4quaXtuWAmeivt+axgueahOi3r+W+hOiHquWKqOWcqCBheGlvcyDph4zpnaLlop7liqDnmoQgaHR0cDovLzEyNy4wLjAuMe+8iOm7mOiupDgw56uv5Y+j77yJL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3TvvIzov5nkuKrml7blgJnlsLHkuI3lr7nkuobvvIzmiJHku6wgODAg56uv5Y+j5rKh5pyJ5ZCv5Yqo77yM5Lmf5LiN5piv5oiR5Lus5oOz6K+35rGC55qE5Zyw5Z2AXHJcbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAvLyAgIC5nZXQoXCIvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiKVxyXG4gIC8vICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKTtcclxuXHJcbiAgLy8g5rOo5oSPIHJlcSDlkowgcmVzIOWPquacieWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeaJjeS8muaciVxyXG5cclxuICAvLyDms6jmhI/kuIDml6bnmbvlh7rkuobvvIzmiJHku6zpnIDopoHlgZrkuKror7fmsYLnmoTliKTmlq1cclxuICAvLyDlj6/ku6XpgJrov4cgY3R4LnJlcSDlkowgY3R4LnJlcyDvvIhub2RlLmpzIOWvueixoe+8jOS4jeS8muWtmOWcqOS6jua1j+iniOWZqOi/kOihjOeOr+Wig+mHjOmdoueahO+8ieadpei/m+ihjOWIpOaWre+8jOS9huaYr+WcqOespuWQiOWcqOacjeWKoeerr+WPr+S7peWIpOaWreOAguWcqOWuouaIt+err+i/m+ihjOWIpOaWre+8jOaYr+ayoeaciSBjdHgg5a+56LGh55qE44CCXHJcblxyXG4gIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgIC8vIGlmIChjYWNoZS5nZXQoXCJ1c2VyUmVwb3NcIikgJiYgY2FjaGUuZ2V0KFwidXNlclN0YXJlZFJlcG9zXCIpKSB7XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgdXNlclJlcG9zOiBjYWNoZS5nZXQoXCJ1c2VyUmVwb3NcIiksXHJcbiAgICAvLyAgICAgdXNlclN0YXJlZFJlcG9zOiBjYWNoZS5nZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiksXHJcbiAgICAvLyAgIH07XHJcbiAgICAvLyB9XHJcbiAgICBpZiAodXNlckxvY2FsUmVwb3MgJiYgdXNlckxvY2FsU3RhcmVkUmVwb3MpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVwb3M6IHVzZXJMb2NhbFJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogdXNlckxvY2FsU3RhcmVkUmVwb3MsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlj5Hotbfor7fmsYLvvIzliJflh7rkvaDmiYDmnInnmoTliJvlu7rnmoTku5PlupNcclxuICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7IHVybDogXCIvdXNlci9yZXBvc1wiIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xyXG4gIC8vIOiiq+WFs+azqOeahOS7k+W6k1xyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IFwiL2dpc3RzL3N0YXJyZWRcIiB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gaXNMb2dpbjogdHJ1ZSxcclxuICAgIC8vIHVzZXJSZXBvczogdXNlclJlcG9zLmRhdGEsXHJcbiAgICAvLyB1c2VyU3RhcmVkUmVwb3M6IHVzZXJTdGFyZWRSZXBvcy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDms6jmhI/lnKjlhpkgd2l0aFJvdXRlciDlkowgY29ubmVjdCDnmoTml7blgJnvvIzpnIDopoHmioogd2l0aFJvdXRlciDmlL7lnKjlpJbpnaJcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfTtcclxuICB9KShJbmRleClcclxuKTtcclxuIl19 */\n/*@ sourceURL=D:\\\\lls\\\\chenzhengquan\\\\Desktop\\\\muke-study\\\\nextjs-create-app\\\\pages\\\\index.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "login",
        children: user.login || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "name",
        children: user.name || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "bio",
        children: user.bio || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-4069790378" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["MailOutlined"], {
          style: {
            marginRight: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "mailto:".concat(user.email),
          className: "jsx-4069790378",
          children: user.email || "--"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
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
              lineNumber: 108,
              columnNumber: 15
            }, _this);
          })
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
          tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
          children: userStaredRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this);
          })
        }, "2", false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "4069790378",
      children: ".root.jsx-4069790378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-4069790378{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-4069790378{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-4069790378{margin-top:20px;color:#333;}.bio.jsx-4069790378{margin-top:20px;color:#333;}.avatar.jsx-4069790378{width:100%;border-radius:5px;}.user-repos.jsx-4069790378{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hTLEFBRzBCLEFBS0QsQUFPSSxBQUtBLEFBSUEsQUFJTCxBQUlDLFdBSE0sQ0FwQkEsSUFPSCxBQUtKLEFBSUEsV0FIYixBQUlBLEVBSUEsQ0FwQmdCLENBT0UsZ0JBQ2xCLHdCQWVBLEdBN0J5QixZQU9WLDBFQUNTLHVCQVBQLGVBQ2pCLHdDQU9BIiwiZmlsZSI6IkQ6XFxsbHNcXGNoZW56aGVuZ3F1YW5cXERlc2t0b3BcXG11a2Utc3R1ZHlcXG5leHRqcy1jcmVhdGUtYXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFicyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbi8vIOWtmOWCqCB0YWJzIOagj+eahOeKtuaAgSzku6Xlj4LmlbDnmoTlvaLlvI/kvKDpgJLkuIvljrtcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIOWKoOWFpee8k+WtmOetlueVpVxyXG5pbXBvcnQgTFJVIGZyb20gXCJscnUtY2FjaGVcIjtcclxuXHJcbmNvbnN0IGNhY2hlID0gbmV3IExSVSh7XHJcbiAgLy8g6KGo56S65pyA6ZW/55qE5LqL5Lu25LiN5Y675L2/55So57yT5a2Y5Zyo6YeM6Z2iIGtleSDnmoTmlbDmja7vvIzlsLHkvJrmioror6XmlbDmja7liKDpmaRcclxuICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDEwLFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKGlzTG9naW4pO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJSZXBvcyk7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlclN0YXJlZFJlcG9zKTtcclxuLy8gICByZXR1cm4gPHNwYW4+5Y6755m75b2VPC9zcGFuPjtcclxuLy8gfTtcclxuXHJcbi8vIOeUqOS6juWtmOWCqOS8oOmAkui/h+adpeeahOaVsOaNrlxyXG4vLyDms6jmhI/vvJrov5nkuKrmmK/lnKjmqKHlnZfnmoTlhajlsYDkvZznlKjln5/ph4zpnaLnmoTvvIzkvJrkuIDnm7TlrZjlnKjnmoTvvIzmsLjov5zpg73kvJrmnInlgLxcclxuLy8g5omA5Lul5a+55LqO5pyN5Yqh56uv5riy5p+T77yM5oiR5Lus6ZyA6KaB5YGa5bGC5Yik5pat77yM5LiN5bqU6K+l5L2/55So6L+Z5Liq5YWo5bGA5Y+Y6YeP55qE5YC8XHJcblxyXG5sZXQgdXNlckxvY2FsUmVwb3MsIHVzZXJMb2NhbFN0YXJlZFJlcG9zO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciwgcm91dGVyIH0pIHtcclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8IFwiMVwiO1xyXG5cclxuICBjb25zdCBoYW5kZWxUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g56ys5LiA6L+b5p2l55qE5pe25YCZ77yM5aaC5p6c6K+35rGC55qE5pyJ5pWw5o2u77yM5bCx5bqU6K+l5oqK5pWw5o2u57yT5a2Y6LW35p2l5LqGXHJcbiAgLy8g5aaC5p6c5LiN5Lyg6YCS5Y+C5pWw77yM5YiZ5LmL5ZCO5ZyoIG1vdW50ZWQg55qE5pe25YCZ6LCD55So5LiA5qyhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgLy8g6Ziy5q2i5YC85Li6IG51bGwg55qE5pe25YCZ5Lmf57yT5a2YXHJcbiAgICAgIC8vIGlmICh1c2VyUmVwb3MpIHtcclxuICAgICAgLy8gICBjYWNoZS5zZXQoXCJ1c2VyUmVwb3NcIiwgdXNlclJlcG9zKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBpZiAodXNlclN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KFwidXNlclN0YXJlZFJlcG9zXCIsIHVzZXJTdGFyZWRSZXBvcyk7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIOi/meenjeaWueazleaYr+S4jeeuoeacieayoeacieWPkei1t+ivt+axguiOt+WPluWIsOaVsOaNru+8jOS4gOWIsOaXtumXtOWwseS8muWIt+aWsOaVsOaNrlxyXG4gICAgICB1c2VyTG9jYWxSZXBvcyA9IHVzZXJSZXBvcztcclxuICAgICAgdXNlckxvY2FsU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3M7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHVzZXJMb2NhbFJlcG9zID0gbnVsbDtcclxuICAgICAgICB1c2VyTG9jYWxTdGFyZWRSZXBvcyA9IG51bGw7XHJcbiAgICAgIH0sIDEwMDAgKiA2MCAqIDEwKTtcclxuICAgIH1cclxuICB9LCBbdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3NdKTtcclxuXHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGNsYXNzTmFtZT1cImF2YXRhclwiIGFsdD1cInVzZXIgYXZhdGFyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2luIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWUgfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW8gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgPE1haWxPdXRsaW5lZCBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyLmVtYWlsIHx8IFwiLS1cIn08L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kZWxUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4vLyDms6jmhI/miJHku6zlnKjnu4Tku7bkuK3vvIhnZXRJbml0aWFsUHJvcHPvvInkuK3vvIzlj6rkvJrkvb/nlKjliLAgcmVxdWVzdCDvvIzlm6DkuLogcmVxdWVzdCDkvJrluK7liqnmiJHku6zljrvliKTmlq3mmK/lrqLmiLfnq6/ov5jmmK/mnI3liqHnq69cclxuXHJcbi8vIOazqOaEjyBnZXRJbml0aWFsUHJvcHMg5Lya5Zyo5a6i5oi356uv5LiN5ZCM6aG16Z2i6Lez6L2s55qE5pe25YCZ5L2/55So77yM5ZCM5qC35pyN5Yqh56uv5aaC5p6c5oiR5Lus6K6/6Zeu55qE5pivIGluZGV4IOi/meS4qumhtemdou+8jOS5n+S8muiwg+eUqCBnZXRJbml0aWFsUHJvcHPvvIzlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnosIPnlKjnmoTml7blgJnvvIzmiJHku6znmoTov5DooYznjq/looPlpITkuo4gbm9kZS5qcyDnjq/looPvvIzogIzkuI3mmK/mtY/op4jlmajnmoTnjq/looPvvIzlpoLmnpzmiJHku6zlnKggbm9kZS5qcyDnmoTnjq/looPkuIvor7fmsYLlsLHkvJrlh7rnjrDor7fmsYLnmoTmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwLyDov5nmoLfnmoTlnLDlnYDvvIzmiYDku6XkvJrlpLHotKXvvIjpu5jorqTnmoTnq6/lj6PmmK84MO+8iVxyXG5cclxuLy8g5rOo5oSP6L+Z6YeM5pivIGN0eCDogIzkuI3mmK8ge2N0eH1cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIC8vIGlmIChjdHgucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gIC8vIHJldHVybiB7fTtcclxuICAvLyB9XHJcbiAgLy8gY29uc29sZS5sb2coY3R4LCAzMzMzKTtcclxuICAvLyByZXR1cm4ge307XHJcbiAgLy8g5oqlIEVycm9yOiBjb25uZWN0IEVDT05OUkVGVVNFRCAxMjcuMC4wLjE6ODAg55qE6ZSZ6K+vXHJcbiAgLy8g5aaC5p6c5piv5Zyo5rWP6KeI5Zmo6YeM6Z2i5Y+R6YCB55qE77yM5Lya5qC55o2u5oiR5Lus5o+Q5L6b55qE6Lev5b6E5Lya6Ieq5Yqo5Yqg5LiK5oiR5Lus5b2T5YmN572R56uZ55qE5Z+f5ZCN77yI5bCx5pivaHR0cDovL2xvY2FsaG9zdDozMDAwL++8ieaJgOS7peWug+WujOaVtOivt+axgui3r+W+hOWwseaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4gIC8vIOWmguaenOaYr+WcqOacjeWKoeerr+a4suafk+eahOaXtuWAmei/m+ihjOaJp+ihjOeahOivne+8jOaJgOS7peayoeaciea1j+iniOWZqOmHjOmdoueahOWfn+WQjeeahO+8jOi/meS4quaXtuWAmeivt+axgueahOi3r+W+hOiHquWKqOWcqCBheGlvcyDph4zpnaLlop7liqDnmoQgaHR0cDovLzEyNy4wLjAuMe+8iOm7mOiupDgw56uv5Y+j77yJL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3TvvIzov5nkuKrml7blgJnlsLHkuI3lr7nkuobvvIzmiJHku6wgODAg56uv5Y+j5rKh5pyJ5ZCv5Yqo77yM5Lmf5LiN5piv5oiR5Lus5oOz6K+35rGC55qE5Zyw5Z2AXHJcbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAvLyAgIC5nZXQoXCIvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiKVxyXG4gIC8vICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKTtcclxuXHJcbiAgLy8g5rOo5oSPIHJlcSDlkowgcmVzIOWPquacieWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeaJjeS8muaciVxyXG5cclxuICAvLyDms6jmhI/kuIDml6bnmbvlh7rkuobvvIzmiJHku6zpnIDopoHlgZrkuKror7fmsYLnmoTliKTmlq1cclxuICAvLyDlj6/ku6XpgJrov4cgY3R4LnJlcSDlkowgY3R4LnJlcyDvvIhub2RlLmpzIOWvueixoe+8jOS4jeS8muWtmOWcqOS6jua1j+iniOWZqOi/kOihjOeOr+Wig+mHjOmdoueahO+8ieadpei/m+ihjOWIpOaWre+8jOS9huaYr+WcqOespuWQiOWcqOacjeWKoeerr+WPr+S7peWIpOaWreOAguWcqOWuouaIt+err+i/m+ihjOWIpOaWre+8jOaYr+ayoeaciSBjdHgg5a+56LGh55qE44CCXHJcblxyXG4gIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgIC8vIGlmIChjYWNoZS5nZXQoXCJ1c2VyUmVwb3NcIikgJiYgY2FjaGUuZ2V0KFwidXNlclN0YXJlZFJlcG9zXCIpKSB7XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgdXNlclJlcG9zOiBjYWNoZS5nZXQoXCJ1c2VyUmVwb3NcIiksXHJcbiAgICAvLyAgICAgdXNlclN0YXJlZFJlcG9zOiBjYWNoZS5nZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiksXHJcbiAgICAvLyAgIH07XHJcbiAgICAvLyB9XHJcbiAgICBpZiAodXNlckxvY2FsUmVwb3MgJiYgdXNlckxvY2FsU3RhcmVkUmVwb3MpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVwb3M6IHVzZXJMb2NhbFJlcG9zLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogdXNlckxvY2FsU3RhcmVkUmVwb3MsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlj5Hotbfor7fmsYLvvIzliJflh7rkvaDmiYDmnInnmoTliJvlu7rnmoTku5PlupNcclxuICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7IHVybDogXCIvdXNlci9yZXBvc1wiIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xyXG4gIC8vIOiiq+WFs+azqOeahOS7k+W6k1xyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IFwiL2dpc3RzL3N0YXJyZWRcIiB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gaXNMb2dpbjogdHJ1ZSxcclxuICAgIC8vIHVzZXJSZXBvczogdXNlclJlcG9zLmRhdGEsXHJcbiAgICAvLyB1c2VyU3RhcmVkUmVwb3M6IHVzZXJTdGFyZWRSZXBvcy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDms6jmhI/lnKjlhpkgd2l0aFJvdXRlciDlkowgY29ubmVjdCDnmoTml7blgJnvvIzpnIDopoHmioogd2l0aFJvdXRlciDmlL7lnKjlpJbpnaJcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfTtcclxuICB9KShJbmRleClcclxuKTtcclxuIl19 */\n/*@ sourceURL=D:\\\\lls\\\\chenzhengquan\\\\Desktop\\\\muke-study\\\\nextjs-create-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
} // 注意我们在组件中（getInitialProps）中，只会使用到 request ，因为 request 会帮助我们去判断是客户端还是服务端
// 注意 getInitialProps 会在客户端不同页面跳转的时候使用，同样服务端如果我们访问的是 index 这个页面，也会调用 getInitialProps，在服务端渲染的时候调用的时候，我们的运行环境处于 node.js 环境，而不是浏览器的环境，如果我们在 node.js 的环境下请求就会出现请求的是 http://localhost:3000/ 这样的地址，所以会失败（默认的端口是80）
// 注意这里是 ctx 而不是 {ctx}


_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var userRepos, userStaredRepos;
    return D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isServer) {
              _context.next = 3;
              break;
            }

            if (!(userLocalRepos && userLocalStaredRepos)) {
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
            return _context.abrupt("return", {// isLogin: true,
              // userRepos: userRepos.data,
              // userStaredRepos: userStaredRepos.data,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpIiwicmVxdWlyZSIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjYWNoZSIsIkxSVSIsIm1heEFnZSIsInVzZXJMb2NhbFJlcG9zIiwidXNlckxvY2FsU3RhcmVkUmVwb3MiLCJpc1NlcnZlciIsIkluZGV4IiwidXNlclJlcG9zIiwidXNlclN0YXJlZFJlcG9zIiwidXNlciIsInJvdXRlciIsInRhYktleSIsInF1ZXJ5Iiwia2V5IiwiaGFuZGVsVGFiQ2hhbmdlIiwiYWN0aXZlS2V5IiwiUm91dGVyIiwicHVzaCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJpZCIsIk9BVVRIX1VSTCIsImF2YXRhcl91cmwiLCJsb2dpbiIsIm5hbWUiLCJiaW8iLCJtYXJnaW5SaWdodCIsImVtYWlsIiwibWFwIiwicmVwbyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCIsIm1hcFN0YXRlIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQW5COztBQUdBO0FBRUE7QUFFQTs7aUJBQ2dDQyxrREFBUyxFO0lBQWpDQyxtQixjQUFBQSxtQjs7Q0FJUjs7QUFDQTtDQUlBOztBQUNBO0FBRUEsSUFBTUMsS0FBSyxHQUFHLElBQUlDLGlEQUFKLENBQVE7QUFDcEI7QUFDQUMsUUFBTSxFQUFFLE9BQU8sRUFBUCxHQUFZO0FBRkEsQ0FBUixDQUFkLEMsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsY0FBSixFQUFvQkMsb0JBQXBCO0FBRUEsSUFBTUMsUUFBUSxRQUFkOztBQUVBLFNBQVNDLEtBQVQsT0FBNkQ7QUFBQTs7QUFBQTs7QUFBQSxNQUE1Q0MsU0FBNEMsUUFBNUNBLFNBQTRDO0FBQUEsTUFBakNDLGVBQWlDLFFBQWpDQSxlQUFpQztBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDM0QsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsR0FBYixJQUFvQixHQUFuQzs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFNBQUQsRUFBZTtBQUNyQ0MsdURBQU0sQ0FBQ0MsSUFBUCxpQkFBcUJGLFNBQXJCO0FBQ0QsR0FGRCxDQUgyRCxDQU8zRDtBQUNBOzs7QUFDQUcsMERBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDYixRQUFMLEVBQWU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FGLG9CQUFjLEdBQUdJLFNBQWpCO0FBQ0FILDBCQUFvQixHQUFHSSxlQUF2QjtBQUNBVyxnQkFBVSxDQUFDLFlBQU07QUFDZmhCLHNCQUFjLEdBQUcsSUFBakI7QUFDQUMsNEJBQW9CLEdBQUcsSUFBdkI7QUFDRCxPQUhTLEVBR1AsT0FBTyxFQUFQLEdBQVksRUFITCxDQUFWO0FBSUQ7QUFDRixHQWxCUSxFQWtCTixDQUFDRyxTQUFELEVBQVlDLGVBQVosQ0FsQk0sQ0FBVDs7QUFvQkEsTUFBSSxDQUFDQyxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDVyxFQUFuQixFQUF1QjtBQUNyQix3QkFDRTtBQUFBLDBDQUFlLE1BQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLFlBQUksRUFBRXJCLG1CQUFtQixDQUFDc0IsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQW1CRDs7QUFFRCxzQkFDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQSw0QkFDRTtBQUFBLDBDQUFlLFdBQWY7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRVosSUFBSSxDQUFDYSxVQUFmO0FBQThDLFdBQUcsRUFBQyxhQUFsRDtBQUFBLDRDQUFxQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLDRDQUFnQixPQUFoQjtBQUFBLGtCQUF5QmIsSUFBSSxDQUFDYyxLQUFMLElBQWM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSw0Q0FBZ0IsTUFBaEI7QUFBQSxrQkFBd0JkLElBQUksQ0FBQ2UsSUFBTCxJQUFhO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUEsNENBQWdCLEtBQWhCO0FBQUEsa0JBQXVCZixJQUFJLENBQUNnQixHQUFMLElBQVk7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBQSw0Q0FBYSxPQUFiO0FBQUEsZ0NBQ0UscUVBQUMsOERBQUQ7QUFBYyxlQUFLLEVBQUU7QUFBRUMsdUJBQVcsRUFBRTtBQUFmO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLGNBQUksbUJBQVlqQixJQUFJLENBQUNrQixLQUFqQixDQUFQO0FBQUE7QUFBQSxvQkFBa0NsQixJQUFJLENBQUNrQixLQUFMLElBQWM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUEsMENBQWUsWUFBZjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBRWhCLE1BQWpCO0FBQXlCLGdCQUFRLEVBQUVHLGVBQW5DO0FBQW9ELGdCQUFRLEVBQUUsS0FBOUQ7QUFBQSxnQ0FDRSwwSEFBTSxPQUFOO0FBQWMsYUFBRyxFQUFDLDBCQUFsQjtBQUFBLG9CQUNHUCxTQUFTLENBQUNxQixHQUFWLENBQWMsVUFBQ0MsSUFBRDtBQUFBLGdDQUNiLHFFQUFDLHdEQUFEO0FBQU0sa0JBQUksRUFBRUE7QUFBWixlQUF1QkEsSUFBSSxDQUFDVCxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQURILFdBQTZCLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRSwwSEFBTSxPQUFOO0FBQWMsYUFBRyxFQUFDLHNDQUFsQjtBQUFBLG9CQUNHWixlQUFlLENBQUNvQixHQUFoQixDQUFvQixVQUFDQyxJQUFEO0FBQUEsZ0NBQ25CLHFFQUFDLHdEQUFEO0FBQU0sa0JBQUksRUFBRUE7QUFBWixlQUF1QkEsSUFBSSxDQUFDVCxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBLFdBQXBCO0FBREgsV0FBK0IsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQsQyxDQUNEO0FBRUE7QUFFQTs7O0dBeEhTZCxLOztLQUFBQSxLOztBQXlIVEEsS0FBSyxDQUFDd0IsZUFBTjtBQUFBLDZXQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFrQmpCMUIsUUFsQmlCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXlCaEJGLGNBQWMsSUFBSUMsb0JBekJGO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQTBCWDtBQUNMRyx1QkFBUyxFQUFFSixjQUROO0FBRUxLLDZCQUFlLEVBQUVKO0FBRlosYUExQlc7O0FBQUE7QUFBQTtBQUFBLG1CQWtDRVIsR0FBRyxDQUFDb0MsT0FBSixDQUFZO0FBQUVDLGlCQUFHLEVBQUU7QUFBUCxhQUFaLEVBQW9DRixHQUFHLENBQUNHLEdBQXhDLEVBQTZDSCxHQUFHLENBQUNJLEdBQWpELENBbENGOztBQUFBO0FBa0NoQjVCLHFCQWxDZ0I7QUFBQTtBQUFBLG1CQW9DUVgsR0FBRyxDQUFDb0MsT0FBSixDQUM1QjtBQUFFQyxpQkFBRyxFQUFFO0FBQVAsYUFENEIsRUFFNUJGLEdBQUcsQ0FBQ0csR0FGd0IsRUFHNUJILEdBQUcsQ0FBQ0ksR0FId0IsQ0FwQ1I7O0FBQUE7QUFvQ2hCM0IsMkJBcENnQjtBQUFBLDZDQTBDZixDQUNMO0FBQ0E7QUFDQTtBQUhLLGFBMUNlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FpREE7OztBQUNlNEIsOEhBQVUsQ0FDdkJDLDJEQUFPLENBQUMsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDL0IsU0FBTztBQUNMOUIsUUFBSSxFQUFFOEIsS0FBSyxDQUFDOUI7QUFEUCxHQUFQO0FBR0QsQ0FKTSxDQUFQLENBSUdILEtBSkgsQ0FEdUIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2ZiZGQxYTZkMGFmZWQxOTA2MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJzIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTWFpbE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVwb1wiO1xyXG5cclxuLy8g5a2Y5YKoIHRhYnMg5qCP55qE54q25oCBLOS7peWPguaVsOeahOW9ouW8j+S8oOmAkuS4i+WOu1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8g5Yqg5YWl57yT5a2Y562W55WlXHJcbmltcG9ydCBMUlUgZnJvbSBcImxydS1jYWNoZVwiO1xyXG5cclxuY29uc3QgY2FjaGUgPSBuZXcgTFJVKHtcclxuICAvLyDooajnpLrmnIDplb/nmoTkuovku7bkuI3ljrvkvb/nlKjnvJPlrZjlnKjph4zpnaIga2V5IOeahOaVsOaNru+8jOWwseS8muaKiuivpeaVsOaNruWIoOmZpFxyXG4gIG1heEFnZTogMTAwMCAqIDYwICogMTAsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbi8vICAgLy8gY29uc29sZS5sb2coaXNMb2dpbik7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlclJlcG9zKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyU3RhcmVkUmVwb3MpO1xyXG4vLyAgIHJldHVybiA8c3Bhbj7ljrvnmbvlvZU8L3NwYW4+O1xyXG4vLyB9O1xyXG5cclxuLy8g55So5LqO5a2Y5YKo5Lyg6YCS6L+H5p2l55qE5pWw5o2uXHJcbi8vIOazqOaEj++8mui/meS4quaYr+WcqOaooeWdl+eahOWFqOWxgOS9nOeUqOWfn+mHjOmdoueahO+8jOS8muS4gOebtOWtmOWcqOeahO+8jOawuOi/nOmDveS8muacieWAvFxyXG4vLyDmiYDku6Xlr7nkuo7mnI3liqHnq6/muLLmn5PvvIzmiJHku6zpnIDopoHlgZrlsYLliKTmlq3vvIzkuI3lupTor6Xkvb/nlKjov5nkuKrlhajlsYDlj5jph4/nmoTlgLxcclxuXHJcbmxldCB1c2VyTG9jYWxSZXBvcywgdXNlckxvY2FsU3RhcmVkUmVwb3M7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zLCB1c2VyLCByb3V0ZXIgfSkge1xyXG4gIGNvbnN0IHRhYktleSA9IHJvdXRlci5xdWVyeS5rZXkgfHwgXCIxXCI7XHJcblxyXG4gIGNvbnN0IGhhbmRlbFRhYkNoYW5nZSA9IChhY3RpdmVLZXkpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKTtcclxuICB9O1xyXG5cclxuICAvLyDnrKzkuIDov5vmnaXnmoTml7blgJnvvIzlpoLmnpzor7fmsYLnmoTmnInmlbDmja7vvIzlsLHlupTor6XmiormlbDmja7nvJPlrZjotbfmnaXkuoZcclxuICAvLyDlpoLmnpzkuI3kvKDpgJLlj4LmlbDvvIzliJnkuYvlkI7lnKggbW91bnRlZCDnmoTml7blgJnosIPnlKjkuIDmrKFcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc1NlcnZlcikge1xyXG4gICAgICAvLyDpmLLmraLlgLzkuLogbnVsbCDnmoTml7blgJnkuZ/nvJPlrZhcclxuICAgICAgLy8gaWYgKHVzZXJSZXBvcykge1xyXG4gICAgICAvLyAgIGNhY2hlLnNldChcInVzZXJSZXBvc1wiLCB1c2VyUmVwb3MpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGlmICh1c2VyU3RhcmVkUmVwb3MpIHtcclxuICAgICAgLy8gICBjYWNoZS5zZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiwgdXNlclN0YXJlZFJlcG9zKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8g6L+Z56eN5pa55rOV5piv5LiN566h5pyJ5rKh5pyJ5Y+R6LW36K+35rGC6I635Y+W5Yiw5pWw5o2u77yM5LiA5Yiw5pe26Ze05bCx5Lya5Yi35paw5pWw5o2uXHJcbiAgICAgIHVzZXJMb2NhbFJlcG9zID0gdXNlclJlcG9zO1xyXG4gICAgICB1c2VyTG9jYWxTdGFyZWRSZXBvcyA9IHVzZXJTdGFyZWRSZXBvcztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdXNlckxvY2FsUmVwb3MgPSBudWxsO1xyXG4gICAgICAgIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gbnVsbDtcclxuICAgICAgfSwgMTAwMCAqIDYwICogMTApO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvc10pO1xyXG5cclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5cclxuICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwiYXZhdGFyXCIgYWx0PVwidXNlciBhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW4gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZSB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpbyB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICA8TWFpbE91dGxpbmVkIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSAvPlxyXG4gICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+e3VzZXIuZW1haWwgfHwgXCItLVwifTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRlbFRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICB7dXNlclJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLXJlcG9zIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIOazqOaEj+aIkeS7rOWcqOe7hOS7tuS4re+8iGdldEluaXRpYWxQcm9wc++8ieS4re+8jOWPquS8muS9v+eUqOWIsCByZXF1ZXN0IO+8jOWboOS4uiByZXF1ZXN0IOS8muW4ruWKqeaIkeS7rOWOu+WIpOaWreaYr+WuouaIt+err+i/mOaYr+acjeWKoeerr1xyXG5cclxuLy8g5rOo5oSPIGdldEluaXRpYWxQcm9wcyDkvJrlnKjlrqLmiLfnq6/kuI3lkIzpobXpnaLot7PovaznmoTml7blgJnkvb/nlKjvvIzlkIzmoLfmnI3liqHnq6/lpoLmnpzmiJHku6zorr/pl67nmoTmmK8gaW5kZXgg6L+Z5Liq6aG16Z2i77yM5Lmf5Lya6LCD55SoIGdldEluaXRpYWxQcm9wc++8jOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeiwg+eUqOeahOaXtuWAme+8jOaIkeS7rOeahOi/kOihjOeOr+Wig+WkhOS6jiBub2RlLmpzIOeOr+Wig++8jOiAjOS4jeaYr+a1j+iniOWZqOeahOeOr+Wig++8jOWmguaenOaIkeS7rOWcqCBub2RlLmpzIOeahOeOr+Wig+S4i+ivt+axguWwseS8muWHuueOsOivt+axgueahOaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvIOi/meagt+eahOWcsOWdgO+8jOaJgOS7peS8muWksei0pe+8iOm7mOiupOeahOerr+WPo+aYrzgw77yJXHJcblxyXG4vLyDms6jmhI/ov5nph4zmmK8gY3R4IOiAjOS4jeaYryB7Y3R4fVxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgLy8gaWYgKGN0eC5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgLy8gcmV0dXJuIHt9O1xyXG4gIC8vIH1cclxuICAvLyBjb25zb2xlLmxvZyhjdHgsIDMzMzMpO1xyXG4gIC8vIHJldHVybiB7fTtcclxuICAvLyDmiqUgRXJyb3I6IGNvbm5lY3QgRUNPTk5SRUZVU0VEIDEyNy4wLjAuMTo4MCDnmoTplJnor69cclxuICAvLyDlpoLmnpzmmK/lnKjmtY/op4jlmajph4zpnaLlj5HpgIHnmoTvvIzkvJrmoLnmja7miJHku6zmj5DkvpvnmoTot6/lvoTkvJroh6rliqjliqDkuIrmiJHku6zlvZPliY3nvZHnq5nnmoTln5/lkI3vvIjlsLHmmK9odHRwOi8vbG9jYWxob3N0OjMwMDAv77yJ5omA5Lul5a6D5a6M5pW06K+35rGC6Lev5b6E5bCx5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XHJcbiAgLy8g5aaC5p6c5piv5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6L+b6KGM5omn6KGM55qE6K+d77yM5omA5Lul5rKh5pyJ5rWP6KeI5Zmo6YeM6Z2i55qE5Z+f5ZCN55qE77yM6L+Z5Liq5pe25YCZ6K+35rGC55qE6Lev5b6E6Ieq5Yqo5ZyoIGF4aW9zIOmHjOmdouWinuWKoOeahCBodHRwOi8vMTI3LjAuMC4x77yI6buY6K6kODDnq6/lj6PvvIkvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdO+8jOi/meS4quaXtuWAmeWwseS4jeWvueS6hu+8jOaIkeS7rCA4MCDnq6/lj6PmsqHmnInlkK/liqjvvIzkuZ/kuI3mmK/miJHku6zmg7Por7fmsYLnmoTlnLDlnYBcclxuICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvc1xyXG4gIC8vICAgLmdldChcIi9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XCIpXHJcbiAgLy8gICAudGhlbigocmVzcCkgPT4gY29uc29sZS5sb2cocmVzcCkpO1xyXG5cclxuICAvLyDms6jmhI8gcmVxIOWSjCByZXMg5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ5omN5Lya5pyJXHJcblxyXG4gIC8vIOazqOaEj+S4gOaXpueZu+WHuuS6hu+8jOaIkeS7rOmcgOimgeWBmuS4quivt+axgueahOWIpOaWrVxyXG4gIC8vIOWPr+S7pemAmui/hyBjdHgucmVxIOWSjCBjdHgucmVzIO+8iG5vZGUuanMg5a+56LGh77yM5LiN5Lya5a2Y5Zyo5LqO5rWP6KeI5Zmo6L+Q6KGM546v5aKD6YeM6Z2i55qE77yJ5p2l6L+b6KGM5Yik5pat77yM5L2G5piv5Zyo56ym5ZCI5Zyo5pyN5Yqh56uv5Y+v5Lul5Yik5pat44CC5Zyo5a6i5oi356uv6L+b6KGM5Yik5pat77yM5piv5rKh5pyJIGN0eCDlr7nosaHnmoTjgIJcclxuXHJcbiAgaWYgKCFpc1NlcnZlcikge1xyXG4gICAgLy8gaWYgKGNhY2hlLmdldChcInVzZXJSZXBvc1wiKSAmJiBjYWNoZS5nZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIikpIHtcclxuICAgIC8vICAgcmV0dXJuIHtcclxuICAgIC8vICAgICB1c2VyUmVwb3M6IGNhY2hlLmdldChcInVzZXJSZXBvc1wiKSxcclxuICAgIC8vICAgICB1c2VyU3RhcmVkUmVwb3M6IGNhY2hlLmdldChcInVzZXJTdGFyZWRSZXBvc1wiKSxcclxuICAgIC8vICAgfTtcclxuICAgIC8vIH1cclxuICAgIGlmICh1c2VyTG9jYWxSZXBvcyAmJiB1c2VyTG9jYWxTdGFyZWRSZXBvcykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZXBvczogdXNlckxvY2FsUmVwb3MsXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyTG9jYWxTdGFyZWRSZXBvcyxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOWPkei1t+ivt+axgu+8jOWIl+WHuuS9oOaJgOacieeahOWIm+W7uueahOS7k+W6k1xyXG4gIGNvbnN0IHVzZXJSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KHsgdXJsOiBcIi91c2VyL3JlcG9zXCIgfSwgY3R4LnJlcSwgY3R4LnJlcyk7XHJcbiAgLy8g6KKr5YWz5rOo55qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclN0YXJlZFJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7IHVybDogXCIvZ2lzdHMvc3RhcnJlZFwiIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyBpc0xvZ2luOiB0cnVlLFxyXG4gICAgLy8gdXNlclJlcG9zOiB1c2VyUmVwb3MuZGF0YSxcclxuICAgIC8vIHVzZXJTdGFyZWRSZXBvczogdXNlclN0YXJlZFJlcG9zLmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIOazqOaEj+WcqOWGmSB3aXRoUm91dGVyIOWSjCBjb25uZWN0IOeahOaXtuWAme+8jOmcgOimgeaKiiB3aXRoUm91dGVyIOaUvuWcqOWklumdolxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFxyXG4gIGNvbm5lY3QoZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICB9O1xyXG4gIH0pKEluZGV4KVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9