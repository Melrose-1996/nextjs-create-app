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
      if (userRepos) {
        cache.set("userRepos", userRepos);
      }

      if (userStaredRepos) {
        cache.set("userStaredRepos", userStaredRepos);
      } // userLocalRepos = userRepos;
      // userLocalStaredRepos = userStaredRepos;

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
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3088588873",
        children: ".root.jsx-3088588873{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRVcsQUFHNEIsYUFDQSwwRUFDUyw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIC8vIOihqOekuuacgOmVv+eahOS6i+S7tuS4jeWOu+S9v+eUqOe8k+WtmOWcqOmHjOmdoiBrZXkg55qE5pWw5o2u77yM5bCx5Lya5oqK6K+l5pWw5o2u5Yig6ZmkXHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCxcclxufSk7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJTdGFyZWRSZXBvcyk7XHJcbi8vICAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbi8vIH07XHJcblxyXG4vLyDnlKjkuo7lrZjlgqjkvKDpgJLov4fmnaXnmoTmlbDmja5cclxuLy8g5rOo5oSP77ya6L+Z5Liq5piv5Zyo5qih5Z2X55qE5YWo5bGA5L2c55So5Z+f6YeM6Z2i55qE77yM5Lya5LiA55u05a2Y5Zyo55qE77yM5rC46L+c6YO95Lya5pyJ5YC8XHJcbi8vIOaJgOS7peWvueS6juacjeWKoeerr+a4suafk++8jOaIkeS7rOmcgOimgeWBmuWxguWIpOaWre+8jOS4jeW6lOivpeS9v+eUqOi/meS4quWFqOWxgOWPmOmHj+eahOWAvFxyXG5sZXQgdXNlckxvY2FsUmVwb3MsIHVzZXJMb2NhbFN0YXJlZFJlcG9zO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciwgcm91dGVyIH0pIHtcclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8IFwiMVwiO1xyXG5cclxuICBjb25zdCBoYW5kZWxUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g56ys5LiA6L+b5p2l55qE5pe25YCZ77yM5aaC5p6c6K+35rGC55qE5pyJ5pWw5o2u77yM5bCx5bqU6K+l5oqK5pWw5o2u57yT5a2Y6LW35p2l5LqGXHJcbiAgLy8g5aaC5p6c5LiN5Lyg6YCS5Y+C5pWw77yM5YiZ5LmL5ZCO5ZyoIG1vdW50ZWQg55qE5pe25YCZ6LCD55So5LiA5qyhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgaWYgKHVzZXJSZXBvcykge1xyXG4gICAgICAgIGNhY2hlLnNldChcInVzZXJSZXBvc1wiLCB1c2VyUmVwb3MpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyU3RhcmVkUmVwb3MpIHtcclxuICAgICAgICBjYWNoZS5zZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiwgdXNlclN0YXJlZFJlcG9zKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2VyTG9jYWxSZXBvcyA9IHVzZXJSZXBvcztcclxuICAgICAgLy8gdXNlckxvY2FsU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3M7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zXSk7XHJcblxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAg54K55Ye755m75b2VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBjbGFzc05hbWU9XCJhdmF0YXJcIiBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbiB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbCB8fCBcIi0tXCJ9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGVsVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8g5rOo5oSP5oiR5Lus5Zyo57uE5Lu25Lit77yIZ2V0SW5pdGlhbFByb3Bz77yJ5Lit77yM5Y+q5Lya5L2/55So5YiwIHJlcXVlc3Qg77yM5Zug5Li6IHJlcXVlc3Qg5Lya5biu5Yqp5oiR5Lus5Y675Yik5pat5piv5a6i5oi356uv6L+Y5piv5pyN5Yqh56uvXHJcblxyXG4vLyDms6jmhI8gZ2V0SW5pdGlhbFByb3BzIOS8muWcqOWuouaIt+err+S4jeWQjOmhtemdoui3s+i9rOeahOaXtuWAmeS9v+eUqO+8jOWQjOagt+acjeWKoeerr+WmguaenOaIkeS7rOiuv+mXrueahOaYryBpbmRleCDov5nkuKrpobXpnaLvvIzkuZ/kvJrosIPnlKggZ2V0SW5pdGlhbFByb3Bz77yM5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6LCD55So55qE5pe25YCZ77yM5oiR5Lus55qE6L+Q6KGM546v5aKD5aSE5LqOIG5vZGUuanMg546v5aKD77yM6ICM5LiN5piv5rWP6KeI5Zmo55qE546v5aKD77yM5aaC5p6c5oiR5Lus5ZyoIG5vZGUuanMg55qE546v5aKD5LiL6K+35rGC5bCx5Lya5Ye6546w6K+35rGC55qE5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8g6L+Z5qC355qE5Zyw5Z2A77yM5omA5Lul5Lya5aSx6LSl77yI6buY6K6k55qE56uv5Y+j5pivODDvvIlcclxuXHJcbi8vIOazqOaEj+i/memHjOaYryBjdHgg6ICM5LiN5pivIHtjdHh9XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvLyDmiqUgRXJyb3I6IGNvbm5lY3QgRUNPTk5SRUZVU0VEIDEyNy4wLjAuMTo4MCDnmoTplJnor69cclxuICAvLyDlpoLmnpzmmK/lnKjmtY/op4jlmajph4zpnaLlj5HpgIHnmoTvvIzkvJrmoLnmja7miJHku6zmj5DkvpvnmoTot6/lvoTkvJroh6rliqjliqDkuIrmiJHku6zlvZPliY3nvZHnq5nnmoTln5/lkI3vvIjlsLHmmK9odHRwOi8vbG9jYWxob3N0OjMwMDAv77yJ5omA5Lul5a6D5a6M5pW06K+35rGC6Lev5b6E5bCx5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XHJcbiAgLy8g5aaC5p6c5piv5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6L+b6KGM5omn6KGM55qE6K+d77yM5omA5Lul5rKh5pyJ5rWP6KeI5Zmo6YeM6Z2i55qE5Z+f5ZCN55qE77yM6L+Z5Liq5pe25YCZ6K+35rGC55qE6Lev5b6E6Ieq5Yqo5ZyoIGF4aW9zIOmHjOmdouWinuWKoOeahCBodHRwOi8vMTI3LjAuMC4x77yI6buY6K6kODDnq6/lj6PvvIkvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdO+8jOi/meS4quaXtuWAmeWwseS4jeWvueS6hu+8jOaIkeS7rCA4MCDnq6/lj6PmsqHmnInlkK/liqjvvIzkuZ/kuI3mmK/miJHku6zmg7Por7fmsYLnmoTlnLDlnYBcclxuICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvc1xyXG4gIC8vICAgLmdldChcIi9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XCIpXHJcbiAgLy8gICAudGhlbigocmVzcCkgPT4gY29uc29sZS5sb2cocmVzcCkpO1xyXG5cclxuICAvLyDms6jmhI8gcmVxIOWSjCByZXMg5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ5omN5Lya5pyJXHJcblxyXG4gIC8vIOazqOaEj+S4gOaXpueZu+WHuuS6hu+8jOaIkeS7rOmcgOimgeWBmuS4quivt+axgueahOWIpOaWrVxyXG4gIC8vIOWPr+S7pemAmui/hyBjdHgucmVxIOWSjCBjdHgucmVzIO+8iG5vZGUuanMg5a+56LGh77yM5LiN5Lya5a2Y5Zyo5LqO5rWP6KeI5Zmo6L+Q6KGM546v5aKD6YeM6Z2i55qE77yJ5p2l6L+b6KGM5Yik5pat77yM5L2G5piv5Zyo56ym5ZCI5Zyo5pyN5Yqh56uv5Y+v5Lul5Yik5pat44CC5Zyo5a6i5oi356uv6L+b6KGM5Yik5pat77yM5piv5rKh5pyJIGN0eCDlr7nosaHnmoTjgIJcclxuXHJcbiAgaWYgKCFpc1NlcnZlcikge1xyXG4gICAgaWYgKGNhY2hlLmdldChcInVzZXJSZXBvc1wiKSAmJiBjYWNoZS5nZXQoXCJ1c2VyTG9jYWxTdGFyZWRSZXBvc1wiKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KFwidXNlckxvY2FsU3RhcmVkUmVwb3NcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlj5Hotbfor7fmsYLvvIzliJflh7rkvaDmiYDmnInnmoTliJvlu7rnmoTku5PlupNcclxuICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7IHVybDogXCIvdXNlci9yZXBvc1wiIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xyXG4gIC8vIOiiq+WFs+azqOeahOS7k+W6k1xyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IFwiL2dpc3RzL3N0YXJyZWRcIiB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgIHVzZXJSZXBvczogdXNlclJlcG9zLmRhdGEsXHJcbiAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJTdGFyZWRSZXBvcy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDms6jmhI/lnKjlhpkgd2l0aFJvdXRlciDlkowgY29ubmVjdCDnmoTml7blgJnvvIzpnIDopoHmioogd2l0aFJvdXRlciDmlL7lnKjlpJbpnaJcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfTtcclxuICB9KShJbmRleClcclxuKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\index.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "login",
        children: user.login || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "name",
        children: user.name || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "bio",
        children: user.bio || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-4069790378" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["MailOutlined"], {
          style: {
            marginRight: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "mailto:".concat(user.email),
          className: "jsx-4069790378",
          children: user.email || "--"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
              lineNumber: 100,
              columnNumber: 15
            }, _this);
          })
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
          tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
          children: userStaredRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this);
          })
        }, "2", false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "4069790378",
      children: ".root.jsx-4069790378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-4069790378{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-4069790378{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-4069790378{margin-top:20px;color:#333;}.bio.jsx-4069790378{margin-top:20px;color:#333;}.avatar.jsx-4069790378{width:100%;border-radius:5px;}.user-repos.jsx-4069790378{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R1MsQUFHMEIsQUFLRCxBQU9JLEFBS0EsQUFJQSxBQUlMLEFBSUMsV0FITSxDQXBCQSxJQU9ILEFBS0osQUFJQSxXQUhiLEFBSUEsRUFJQSxDQXBCZ0IsQ0FPRSxnQkFDbEIsd0JBZUEsR0E3QnlCLFlBT1YsMEVBQ1MsdUJBUFAsZUFDakIsd0NBT0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIC8vIOihqOekuuacgOmVv+eahOS6i+S7tuS4jeWOu+S9v+eUqOe8k+WtmOWcqOmHjOmdoiBrZXkg55qE5pWw5o2u77yM5bCx5Lya5oqK6K+l5pWw5o2u5Yig6ZmkXHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCxcclxufSk7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJTdGFyZWRSZXBvcyk7XHJcbi8vICAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbi8vIH07XHJcblxyXG4vLyDnlKjkuo7lrZjlgqjkvKDpgJLov4fmnaXnmoTmlbDmja5cclxuLy8g5rOo5oSP77ya6L+Z5Liq5piv5Zyo5qih5Z2X55qE5YWo5bGA5L2c55So5Z+f6YeM6Z2i55qE77yM5Lya5LiA55u05a2Y5Zyo55qE77yM5rC46L+c6YO95Lya5pyJ5YC8XHJcbi8vIOaJgOS7peWvueS6juacjeWKoeerr+a4suafk++8jOaIkeS7rOmcgOimgeWBmuWxguWIpOaWre+8jOS4jeW6lOivpeS9v+eUqOi/meS4quWFqOWxgOWPmOmHj+eahOWAvFxyXG5sZXQgdXNlckxvY2FsUmVwb3MsIHVzZXJMb2NhbFN0YXJlZFJlcG9zO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyB1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcywgdXNlciwgcm91dGVyIH0pIHtcclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8IFwiMVwiO1xyXG5cclxuICBjb25zdCBoYW5kZWxUYWJDaGFuZ2UgPSAoYWN0aXZlS2V5KSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g56ys5LiA6L+b5p2l55qE5pe25YCZ77yM5aaC5p6c6K+35rGC55qE5pyJ5pWw5o2u77yM5bCx5bqU6K+l5oqK5pWw5o2u57yT5a2Y6LW35p2l5LqGXHJcbiAgLy8g5aaC5p6c5LiN5Lyg6YCS5Y+C5pWw77yM5YiZ5LmL5ZCO5ZyoIG1vdW50ZWQg55qE5pe25YCZ6LCD55So5LiA5qyhXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgICAgaWYgKHVzZXJSZXBvcykge1xyXG4gICAgICAgIGNhY2hlLnNldChcInVzZXJSZXBvc1wiLCB1c2VyUmVwb3MpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1c2VyU3RhcmVkUmVwb3MpIHtcclxuICAgICAgICBjYWNoZS5zZXQoXCJ1c2VyU3RhcmVkUmVwb3NcIiwgdXNlclN0YXJlZFJlcG9zKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2VyTG9jYWxSZXBvcyA9IHVzZXJSZXBvcztcclxuICAgICAgLy8gdXNlckxvY2FsU3RhcmVkUmVwb3MgPSB1c2VyU3RhcmVkUmVwb3M7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zXSk7XHJcblxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAg54K55Ye755m75b2VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBjbGFzc05hbWU9XCJhdmF0YXJcIiBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbiB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbCB8fCBcIi0tXCJ9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGVsVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8g5rOo5oSP5oiR5Lus5Zyo57uE5Lu25Lit77yIZ2V0SW5pdGlhbFByb3Bz77yJ5Lit77yM5Y+q5Lya5L2/55So5YiwIHJlcXVlc3Qg77yM5Zug5Li6IHJlcXVlc3Qg5Lya5biu5Yqp5oiR5Lus5Y675Yik5pat5piv5a6i5oi356uv6L+Y5piv5pyN5Yqh56uvXHJcblxyXG4vLyDms6jmhI8gZ2V0SW5pdGlhbFByb3BzIOS8muWcqOWuouaIt+err+S4jeWQjOmhtemdoui3s+i9rOeahOaXtuWAmeS9v+eUqO+8jOWQjOagt+acjeWKoeerr+WmguaenOaIkeS7rOiuv+mXrueahOaYryBpbmRleCDov5nkuKrpobXpnaLvvIzkuZ/kvJrosIPnlKggZ2V0SW5pdGlhbFByb3Bz77yM5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6LCD55So55qE5pe25YCZ77yM5oiR5Lus55qE6L+Q6KGM546v5aKD5aSE5LqOIG5vZGUuanMg546v5aKD77yM6ICM5LiN5piv5rWP6KeI5Zmo55qE546v5aKD77yM5aaC5p6c5oiR5Lus5ZyoIG5vZGUuanMg55qE546v5aKD5LiL6K+35rGC5bCx5Lya5Ye6546w6K+35rGC55qE5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8g6L+Z5qC355qE5Zyw5Z2A77yM5omA5Lul5Lya5aSx6LSl77yI6buY6K6k55qE56uv5Y+j5pivODDvvIlcclxuXHJcbi8vIOazqOaEj+i/memHjOaYryBjdHgg6ICM5LiN5pivIHtjdHh9XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAvLyDmiqUgRXJyb3I6IGNvbm5lY3QgRUNPTk5SRUZVU0VEIDEyNy4wLjAuMTo4MCDnmoTplJnor69cclxuICAvLyDlpoLmnpzmmK/lnKjmtY/op4jlmajph4zpnaLlj5HpgIHnmoTvvIzkvJrmoLnmja7miJHku6zmj5DkvpvnmoTot6/lvoTkvJroh6rliqjliqDkuIrmiJHku6zlvZPliY3nvZHnq5nnmoTln5/lkI3vvIjlsLHmmK9odHRwOi8vbG9jYWxob3N0OjMwMDAv77yJ5omA5Lul5a6D5a6M5pW06K+35rGC6Lev5b6E5bCx5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XHJcbiAgLy8g5aaC5p6c5piv5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6L+b6KGM5omn6KGM55qE6K+d77yM5omA5Lul5rKh5pyJ5rWP6KeI5Zmo6YeM6Z2i55qE5Z+f5ZCN55qE77yM6L+Z5Liq5pe25YCZ6K+35rGC55qE6Lev5b6E6Ieq5Yqo5ZyoIGF4aW9zIOmHjOmdouWinuWKoOeahCBodHRwOi8vMTI3LjAuMC4x77yI6buY6K6kODDnq6/lj6PvvIkvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdO+8jOi/meS4quaXtuWAmeWwseS4jeWvueS6hu+8jOaIkeS7rCA4MCDnq6/lj6PmsqHmnInlkK/liqjvvIzkuZ/kuI3mmK/miJHku6zmg7Por7fmsYLnmoTlnLDlnYBcclxuICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvc1xyXG4gIC8vICAgLmdldChcIi9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN0XCIpXHJcbiAgLy8gICAudGhlbigocmVzcCkgPT4gY29uc29sZS5sb2cocmVzcCkpO1xyXG5cclxuICAvLyDms6jmhI8gcmVxIOWSjCByZXMg5Y+q5pyJ5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ5omN5Lya5pyJXHJcblxyXG4gIC8vIOazqOaEj+S4gOaXpueZu+WHuuS6hu+8jOaIkeS7rOmcgOimgeWBmuS4quivt+axgueahOWIpOaWrVxyXG4gIC8vIOWPr+S7pemAmui/hyBjdHgucmVxIOWSjCBjdHgucmVzIO+8iG5vZGUuanMg5a+56LGh77yM5LiN5Lya5a2Y5Zyo5LqO5rWP6KeI5Zmo6L+Q6KGM546v5aKD6YeM6Z2i55qE77yJ5p2l6L+b6KGM5Yik5pat77yM5L2G5piv5Zyo56ym5ZCI5Zyo5pyN5Yqh56uv5Y+v5Lul5Yik5pat44CC5Zyo5a6i5oi356uv6L+b6KGM5Yik5pat77yM5piv5rKh5pyJIGN0eCDlr7nosaHnmoTjgIJcclxuXHJcbiAgaWYgKCFpc1NlcnZlcikge1xyXG4gICAgaWYgKGNhY2hlLmdldChcInVzZXJSZXBvc1wiKSAmJiBjYWNoZS5nZXQoXCJ1c2VyTG9jYWxTdGFyZWRSZXBvc1wiKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpLFxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KFwidXNlckxvY2FsU3RhcmVkUmVwb3NcIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlj5Hotbfor7fmsYLvvIzliJflh7rkvaDmiYDmnInnmoTliJvlu7rnmoTku5PlupNcclxuICBjb25zdCB1c2VyUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdCh7IHVybDogXCIvdXNlci9yZXBvc1wiIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xyXG4gIC8vIOiiq+WFs+azqOeahOS7k+W6k1xyXG4gIGNvbnN0IHVzZXJTdGFyZWRSZXBvcyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgeyB1cmw6IFwiL2dpc3RzL3N0YXJyZWRcIiB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgIHVzZXJSZXBvczogdXNlclJlcG9zLmRhdGEsXHJcbiAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJTdGFyZWRSZXBvcy5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDms6jmhI/lnKjlhpkgd2l0aFJvdXRlciDlkowgY29ubmVjdCDnmoTml7blgJnvvIzpnIDopoHmioogd2l0aFJvdXRlciDmlL7lnKjlpJbpnaJcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfTtcclxuICB9KShJbmRleClcclxuKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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

            if (!(cache.get("userRepos") && cache.get("userLocalStaredRepos"))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              userRepos: cache.get("userRepos"),
              userStaredRepos: cache.get("userLocalStaredRepos")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpIiwicmVxdWlyZSIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjYWNoZSIsIkxSVSIsIm1heEFnZSIsInVzZXJMb2NhbFJlcG9zIiwidXNlckxvY2FsU3RhcmVkUmVwb3MiLCJpc1NlcnZlciIsIkluZGV4IiwidXNlclJlcG9zIiwidXNlclN0YXJlZFJlcG9zIiwidXNlciIsInJvdXRlciIsInRhYktleSIsInF1ZXJ5Iiwia2V5IiwiaGFuZGVsVGFiQ2hhbmdlIiwiYWN0aXZlS2V5IiwiUm91dGVyIiwicHVzaCIsInVzZUVmZmVjdCIsInNldCIsImlkIiwiT0FVVEhfVVJMIiwiYXZhdGFyX3VybCIsImxvZ2luIiwibmFtZSIsImJpbyIsIm1hcmdpblJpZ2h0IiwiZW1haWwiLCJtYXAiLCJyZXBvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZ2V0IiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImlzTG9naW4iLCJkYXRhIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJtYXBTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFuQjs7QUFHQTtBQUVBO0FBRUE7O2lCQUNnQ0Msa0RBQVMsRTtJQUFqQ0MsbUIsY0FBQUEsbUI7O0NBSVI7O0FBQ0E7Q0FJQTs7QUFDQTtBQUVBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxpREFBSixDQUFRO0FBQ3BCO0FBQ0FDLFFBQU0sRUFBRSxPQUFPLEVBQVAsR0FBWTtBQUZBLENBQVIsQ0FBZCxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQUlDLGNBQUosRUFBb0JDLG9CQUFwQjtBQUVBLElBQU1DLFFBQVEsUUFB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RUMsaUJBQUcsRUFBRTtBQUFQLGFBQVosRUFBb0NILEdBQUcsQ0FBQ0ksR0FBeEMsRUFBNkNKLEdBQUcsQ0FBQ0ssR0FBakQsQ0F2QkY7O0FBQUE7QUF1QmhCN0IscUJBdkJnQjtBQUFBO0FBQUEsbUJBeUJRWCxHQUFHLENBQUNxQyxPQUFKLENBQzVCO0FBQUVDLGlCQUFHLEVBQUU7QUFBUCxhQUQ0QixFQUU1QkgsR0FBRyxDQUFDSSxHQUZ3QixFQUc1QkosR0FBRyxDQUFDSyxHQUh3QixDQXpCUjs7QUFBQTtBQXlCaEI1QiwyQkF6QmdCO0FBQUEsNkNBK0JmO0FBQ0w2QixxQkFBTyxFQUFFLElBREo7QUFFTDlCLHVCQUFTLEVBQUVBLFNBQVMsQ0FBQytCLElBRmhCO0FBR0w5Qiw2QkFBZSxFQUFFQSxlQUFlLENBQUM4QjtBQUg1QixhQS9CZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBc0NBOzs7QUFDZUMsOEhBQVUsQ0FDdkJDLDJEQUFPLENBQUMsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDL0IsU0FBTztBQUNMakMsUUFBSSxFQUFFaUMsS0FBSyxDQUFDakM7QUFEUCxHQUFQO0FBR0QsQ0FKTSxDQUFQLENBSUdILEtBSkgsQ0FEdUIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2E5NjdmNWRiOGUwYThhMDk4YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJzIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgTWFpbE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVwb1wiO1xyXG5cclxuLy8g5a2Y5YKoIHRhYnMg5qCP55qE54q25oCBLOS7peWPguaVsOeahOW9ouW8j+S8oOmAkuS4i+WOu1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8g5Yqg5YWl57yT5a2Y562W55WlXHJcbmltcG9ydCBMUlUgZnJvbSBcImxydS1jYWNoZVwiO1xyXG5cclxuY29uc3QgY2FjaGUgPSBuZXcgTFJVKHtcclxuICAvLyDooajnpLrmnIDplb/nmoTkuovku7bkuI3ljrvkvb/nlKjnvJPlrZjlnKjph4zpnaIga2V5IOeahOaVsOaNru+8jOWwseS8muaKiuivpeaVsOaNruWIoOmZpFxyXG4gIG1heEFnZTogMTAwMCAqIDYwICogMTAsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbi8vICAgLy8gY29uc29sZS5sb2coaXNMb2dpbik7XHJcbi8vICAgLy8gY29uc29sZS5sb2codXNlclJlcG9zKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyU3RhcmVkUmVwb3MpO1xyXG4vLyAgIHJldHVybiA8c3Bhbj7ljrvnmbvlvZU8L3NwYW4+O1xyXG4vLyB9O1xyXG5cclxuLy8g55So5LqO5a2Y5YKo5Lyg6YCS6L+H5p2l55qE5pWw5o2uXHJcbi8vIOazqOaEj++8mui/meS4quaYr+WcqOaooeWdl+eahOWFqOWxgOS9nOeUqOWfn+mHjOmdoueahO+8jOS8muS4gOebtOWtmOWcqOeahO+8jOawuOi/nOmDveS8muacieWAvFxyXG4vLyDmiYDku6Xlr7nkuo7mnI3liqHnq6/muLLmn5PvvIzmiJHku6zpnIDopoHlgZrlsYLliKTmlq3vvIzkuI3lupTor6Xkvb/nlKjov5nkuKrlhajlsYDlj5jph4/nmoTlgLxcclxubGV0IHVzZXJMb2NhbFJlcG9zLCB1c2VyTG9jYWxTdGFyZWRSZXBvcztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCBcIjFcIjtcclxuXHJcbiAgY29uc3QgaGFuZGVsVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIC8vIOesrOS4gOi/m+adpeeahOaXtuWAme+8jOWmguaenOivt+axgueahOacieaVsOaNru+8jOWwseW6lOivpeaKiuaVsOaNrue8k+WtmOi1t+adpeS6hlxyXG4gIC8vIOWmguaenOS4jeS8oOmAkuWPguaVsO+8jOWImeS5i+WQjuWcqCBtb3VudGVkIOeahOaXtuWAmeiwg+eUqOS4gOasoVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIGlmICh1c2VyUmVwb3MpIHtcclxuICAgICAgICBjYWNoZS5zZXQoXCJ1c2VyUmVwb3NcIiwgdXNlclJlcG9zKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodXNlclN0YXJlZFJlcG9zKSB7XHJcbiAgICAgICAgY2FjaGUuc2V0KFwidXNlclN0YXJlZFJlcG9zXCIsIHVzZXJTdGFyZWRSZXBvcyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlckxvY2FsUmVwb3MgPSB1c2VyUmVwb3M7XHJcbiAgICAgIC8vIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvc10pO1xyXG5cclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5cclxuICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwiYXZhdGFyXCIgYWx0PVwidXNlciBhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW4gfHwgXCItLVwifTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZSB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpbyB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICA8TWFpbE91dGxpbmVkIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSAvPlxyXG4gICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+e3VzZXIuZW1haWwgfHwgXCItLVwifTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRlbFRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICB7dXNlclJlcG9zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0+PC9SZXBvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLXJlcG9zIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbi8vIOazqOaEj+aIkeS7rOWcqOe7hOS7tuS4re+8iGdldEluaXRpYWxQcm9wc++8ieS4re+8jOWPquS8muS9v+eUqOWIsCByZXF1ZXN0IO+8jOWboOS4uiByZXF1ZXN0IOS8muW4ruWKqeaIkeS7rOWOu+WIpOaWreaYr+WuouaIt+err+i/mOaYr+acjeWKoeerr1xyXG5cclxuLy8g5rOo5oSPIGdldEluaXRpYWxQcm9wcyDkvJrlnKjlrqLmiLfnq6/kuI3lkIzpobXpnaLot7PovaznmoTml7blgJnkvb/nlKjvvIzlkIzmoLfmnI3liqHnq6/lpoLmnpzmiJHku6zorr/pl67nmoTmmK8gaW5kZXgg6L+Z5Liq6aG16Z2i77yM5Lmf5Lya6LCD55SoIGdldEluaXRpYWxQcm9wc++8jOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeiwg+eUqOeahOaXtuWAme+8jOaIkeS7rOeahOi/kOihjOeOr+Wig+WkhOS6jiBub2RlLmpzIOeOr+Wig++8jOiAjOS4jeaYr+a1j+iniOWZqOeahOeOr+Wig++8jOWmguaenOaIkeS7rOWcqCBub2RlLmpzIOeahOeOr+Wig+S4i+ivt+axguWwseS8muWHuueOsOivt+axgueahOaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvIOi/meagt+eahOWcsOWdgO+8jOaJgOS7peS8muWksei0pe+8iOm7mOiupOeahOerr+WPo+aYrzgw77yJXHJcblxyXG4vLyDms6jmhI/ov5nph4zmmK8gY3R4IOiAjOS4jeaYryB7Y3R4fVxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgLy8g5oqlIEVycm9yOiBjb25uZWN0IEVDT05OUkVGVVNFRCAxMjcuMC4wLjE6ODAg55qE6ZSZ6K+vXHJcbiAgLy8g5aaC5p6c5piv5Zyo5rWP6KeI5Zmo6YeM6Z2i5Y+R6YCB55qE77yM5Lya5qC55o2u5oiR5Lus5o+Q5L6b55qE6Lev5b6E5Lya6Ieq5Yqo5Yqg5LiK5oiR5Lus5b2T5YmN572R56uZ55qE5Z+f5ZCN77yI5bCx5pivaHR0cDovL2xvY2FsaG9zdDozMDAwL++8ieaJgOS7peWug+WujOaVtOivt+axgui3r+W+hOWwseaYryBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFxyXG4gIC8vIOWmguaenOaYr+WcqOacjeWKoeerr+a4suafk+eahOaXtuWAmei/m+ihjOaJp+ihjOeahOivne+8jOaJgOS7peayoeaciea1j+iniOWZqOmHjOmdoueahOWfn+WQjeeahO+8jOi/meS4quaXtuWAmeivt+axgueahOi3r+W+hOiHquWKqOWcqCBheGlvcyDph4zpnaLlop7liqDnmoQgaHR0cDovLzEyNy4wLjAuMe+8iOm7mOiupDgw56uv5Y+j77yJL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3TvvIzov5nkuKrml7blgJnlsLHkuI3lr7nkuobvvIzmiJHku6wgODAg56uv5Y+j5rKh5pyJ5ZCv5Yqo77yM5Lmf5LiN5piv5oiR5Lus5oOz6K+35rGC55qE5Zyw5Z2AXHJcbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAvLyAgIC5nZXQoXCIvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdFwiKVxyXG4gIC8vICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKTtcclxuXHJcbiAgLy8g5rOo5oSPIHJlcSDlkowgcmVzIOWPquacieWcqOacjeWKoeerr+a4suafk+eahOaXtuWAmeaJjeS8muaciVxyXG5cclxuICAvLyDms6jmhI/kuIDml6bnmbvlh7rkuobvvIzmiJHku6zpnIDopoHlgZrkuKror7fmsYLnmoTliKTmlq1cclxuICAvLyDlj6/ku6XpgJrov4cgY3R4LnJlcSDlkowgY3R4LnJlcyDvvIhub2RlLmpzIOWvueixoe+8jOS4jeS8muWtmOWcqOS6jua1j+iniOWZqOi/kOihjOeOr+Wig+mHjOmdoueahO+8ieadpei/m+ihjOWIpOaWre+8jOS9huaYr+WcqOespuWQiOWcqOacjeWKoeerr+WPr+S7peWIpOaWreOAguWcqOWuouaIt+err+i/m+ihjOWIpOaWre+8jOaYr+ayoeaciSBjdHgg5a+56LGh55qE44CCXHJcblxyXG4gIGlmICghaXNTZXJ2ZXIpIHtcclxuICAgIGlmIChjYWNoZS5nZXQoXCJ1c2VyUmVwb3NcIikgJiYgY2FjaGUuZ2V0KFwidXNlckxvY2FsU3RhcmVkUmVwb3NcIikpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVwb3M6IGNhY2hlLmdldChcInVzZXJSZXBvc1wiKSxcclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IGNhY2hlLmdldChcInVzZXJMb2NhbFN0YXJlZFJlcG9zXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+R6LW36K+35rGC77yM5YiX5Ye65L2g5omA5pyJ55qE5Yib5bu655qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IFwiL3VzZXIvcmVwb3NcIiB9LCBjdHgucmVxLCBjdHgucmVzKTtcclxuICAvLyDooqvlhbPms6jnmoTku5PlupNcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBcIi9naXN0cy9zdGFycmVkXCIgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g5rOo5oSP5Zyo5YaZIHdpdGhSb3V0ZXIg5ZKMIGNvbm5lY3Qg55qE5pe25YCZ77yM6ZyA6KaB5oqKIHdpdGhSb3V0ZXIg5pS+5Zyo5aSW6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH07XHJcbiAgfSkoSW5kZXgpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=