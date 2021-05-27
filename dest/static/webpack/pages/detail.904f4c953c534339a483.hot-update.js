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
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");





var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\with-repo-basic.jsx";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var isServer = false;
function withRepo(Comp) {
  var _s = $RefreshSig$();

  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

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
    _s();

    var repoBasic = _ref.repoBasic,
        router = _ref.router,
        rest = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["repoBasic", "router"]);

    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      // 服务端渲染对于这段代码是没有必要去执行的，如果重复执行会导致我们的内存没有意义的使用，这段是跟用户的搜索有关的，跟服务端整体渲染是没有关系的，所以需要屏蔽掉。
      if (!isServer) Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["setCache"])(repoBasic.data);
    });
    var query = makeQuery(router.query);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-2262278230" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-2262278230" + " " + "repo-basic",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Repo__WEBPACK_IMPORTED_MODULE_7__["default"], {
          repo: repoBasic
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "jsx-2262278230" + " " + "tabs",
          children: [type === 'index' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2262278230" + " " + "tab",
            children: "Readme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 45
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/detail".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "jsx-2262278230" + " " + "tab index",
              children: "Readme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 83
          }, this), type === 'issues' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2262278230" + " " + "tab",
            children: "Issues"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 46
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/detail/issues".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "jsx-2262278230" + " " + "tab issues",
              children: "Issues"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 84
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-2262278230",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Comp, _objectSpread({}, rest), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2262278230",
        children: ".root.jsx-2262278230{padding-top:20px;}.repo-basic.jsx-2262278230{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-2262278230+.tab.jsx-2262278230{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXGNvbXBvbmVudHNcXHdpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Q0QixBQUdrQyxBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxcY29tcG9uZW50c1xcd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi9SZXBvXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGdldENhY2hlLCBzZXRDYWNoZSB9IGZyb20gJy4uL2xpYi9yZXBvLWJhc2ljLWNhY2hlJ1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVwbyhDb21wLCB0eXBlID0gJ2luZGV4Jykge1xyXG4gICAgLy8g6L+Z5qC35oiR5Lus5oqK6ZSu5YC85a+555qE5b2i5byP5pig5bCE5oiQ5LqG5LiA5Liq5a2X56ym5LiyXHJcbiAgICBmdW5jdGlvbiBtYWtlUXVlcnkocXVlcnlPYmopIHtcclxuICAgICAgICAvLyDpgY3ljobov5nkuKogb2JqXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iailcclxuICAgICAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbihcIj1cIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgIC5qb2luKFwiJlwiKTtcclxuICAgICAgICByZXR1cm4gYD8ke3F1ZXJ5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gV2l0aERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyLCAuLi5yZXN0IH0pIHtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDmnI3liqHnq6/muLLmn5Plr7nkuo7ov5nmrrXku6PnoIHmmK/msqHmnInlv4XopoHljrvmiafooYznmoTvvIzlpoLmnpzph43lpI3miafooYzkvJrlr7zoh7TmiJHku6znmoTlhoXlrZjmsqHmnInmhI/kuYnnmoTkvb/nlKjvvIzov5nmrrXmmK/ot5/nlKjmiLfnmoTmkJzntKLmnInlhbPnmoTvvIzot5/mnI3liqHnq6/mlbTkvZPmuLLmn5PmmK/msqHmnInlhbPns7vnmoTvvIzmiYDku6XpnIDopoHlsY/olL3mjonjgIJcclxuICAgICAgICAgICAgaWYgKCFpc1NlcnZlcikgc2V0Q2FjaGUocmVwb0Jhc2ljLmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2luZGV4JyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPlJlYWRtZTwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSAnaXNzdWVzJyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPklzc3Vlczwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGlzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog5rOo5oSP5oiR5Lus5Zyo5L2/55SoIEhPQyDnmoTov4fnqIvvvIzmiJHku6zlnKjojrflj5YgSE9DIOiHquW3seimgeeUqOeahCBwcm9wcyDliankuIvmiYDmnInnmoTkvKDpgJLnu5kgQ29tcCDnmoQgcHJvcHMg6YO96KaB5Lyg5LiL5Y6777yM6ICM6L+Z5LiqIHByb3BzIOWwseaYryBDb21wIOecn+WunuimgeS9v+eUqOeahCBwcm9wcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcCB7Li4ucmVzdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50YWIgKyAudGFiIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8g5rOo5oSP5Zyo5a6i5oi356uv56ys5LiA5qyh5riy5p+T55qE5pe25YCZ77yM5piv5LiN5Lya6LCD55So6L+Z5LiqIGdldEluaXRpYWxQcm9wcyDvvIzmiYDku6XkuI3kvJrlnKjph4zpnaLov5vooYwgY2FjaGVcclxuICAgIFdpdGhEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IHBhZ2VEYXRhID0ge31cclxuICAgICAgICBpZiAoQ29tcC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgcGFnZURhdGEgPSBhd2FpdCBDb21wLmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKGdldENhY2hlKGZ1bGxfbmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlcG9CYXNpYzogZ2V0Q2FjaGUoZnVsbF9uYW1lKSxcclxuICAgICAgICAgICAgICAgIC4uLnBhZ2VEYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgICAgICAgICAgeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWAgfSxcclxuICAgICAgICAgICAgY3R4LnJlcSxcclxuICAgICAgICAgICAgY3R4LnJlc1xyXG4gICAgICAgICk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVwb0Jhc2ljOiByZXBvQmFzaWMuZGF0YSxcclxuICAgICAgICAgICAgLi4ucGFnZURhdGFcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHdpdGhSb3V0ZXIoV2l0aERldGFpbClcclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFJlcG8pOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\components\\\\with-repo-basic.jsx */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this);
  } // 注意在客户端第一次渲染的时候，是不会调用这个 getInitialProps ，所以不会在里面进行 cache


  _s(WithDetail, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  WithDetail.getInitialProps = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
      var _ctx$query, owner, name, full_name, pageData, repoBasic;

      return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              full_name = "".concat(owner, "/").concat(name);
              pageData = {};

              if (!Comp.getInitialProps) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return Comp.getInitialProps(ctx);

            case 6:
              pageData = _context.sent;

            case 7:
              if (!Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["getCache"])(full_name)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", _objectSpread({
                repoBasic: Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_11__["getCache"])(full_name)
              }, pageData));

            case 9:
              _context.next = 11;
              return _lib_api__WEBPACK_IMPORTED_MODULE_9___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 11:
              repoBasic = _context.sent;
              return _context.abrupt("return", _objectSpread({
                repoBasic: repoBasic.data
              }, pageData));

            case 13:
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

  return Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(WithDetail);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbImlzU2VydmVyIiwid2l0aFJlcG8iLCJDb21wIiwidHlwZSIsIm1ha2VRdWVyeSIsInF1ZXJ5T2JqIiwicXVlcnkiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicmVzdWx0IiwiZW50cnkiLCJwdXNoIiwiam9pbiIsIldpdGhEZXRhaWwiLCJyZXBvQmFzaWMiLCJyb3V0ZXIiLCJyZXN0IiwidXNlRWZmZWN0Iiwic2V0Q2FjaGUiLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3duZXIiLCJuYW1lIiwiZnVsbF9uYW1lIiwicGFnZURhdGEiLCJnZXRDYWNoZSIsImFwaSIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxRQUFkO0FBSWUsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0M7QUFBQTs7QUFBQSxNQUFoQkMsSUFBZ0IsdUVBQVQsT0FBUzs7QUFDbkQ7QUFDQSxXQUFTQyxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUN6QjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVILFFBQWYsRUFDVEksTUFEUyxDQUNGLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN2QkQsWUFBTSxDQUFDRSxJQUFQLENBQVlELEtBQUssQ0FBQ0UsSUFBTixDQUFXLEdBQVgsQ0FBWjtBQUNBLGFBQU9ILE1BQVA7QUFDSCxLQUpTLEVBSVAsRUFKTyxFQUtURyxJQUxTLENBS0osR0FMSSxDQUFkO0FBTUEsc0JBQVdQLEtBQVg7QUFDSDs7QUFFRCxXQUFTUSxVQUFULE9BQW9EO0FBQUE7O0FBQUEsUUFB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QUFBO0FBQUE7QUFBQTs7QUFtQ0EsU0FBT08sK0RBQVUsQ0FBQ25CLFVBQUQsQ0FBakI7QUFDSCxDLENBR0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsLjkwNGY0Yzk1M2M1MzQzMzlhNDgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlcG8gZnJvbSBcIi4vUmVwb1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9saWIvYXBpXCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDYWNoZSwgc2V0Q2FjaGUgfSBmcm9tICcuLi9saWIvcmVwby1iYXNpYy1jYWNoZSdcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJlcG8oQ29tcCwgdHlwZSA9ICdpbmRleCcpIHtcclxuICAgIC8vIOi/meagt+aIkeS7rOaKiumUruWAvOWvueeahOW9ouW8j+aYoOWwhOaIkOS6huS4gOS4quWtl+espuS4slxyXG4gICAgZnVuY3Rpb24gbWFrZVF1ZXJ5KHF1ZXJ5T2JqKSB7XHJcbiAgICAgICAgLy8g6YGN5Y6G6L+Z5LiqIG9ialxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVudHJ5LmpvaW4oXCI9XCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0sIFtdKVxyXG4gICAgICAgICAgICAuam9pbihcIiZcIik7XHJcbiAgICAgICAgcmV0dXJuIGA/JHtxdWVyeX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFdpdGhEZXRhaWwoeyByZXBvQmFzaWMsIHJvdXRlciwgLi4ucmVzdCB9KSB7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8g5pyN5Yqh56uv5riy5p+T5a+55LqO6L+Z5q615Luj56CB5piv5rKh5pyJ5b+F6KaB5Y675omn6KGM55qE77yM5aaC5p6c6YeN5aSN5omn6KGM5Lya5a+86Ie05oiR5Lus55qE5YaF5a2Y5rKh5pyJ5oSP5LmJ55qE5L2/55So77yM6L+Z5q615piv6Lef55So5oi355qE5pCc57Si5pyJ5YWz55qE77yM6Lef5pyN5Yqh56uv5pW05L2T5riy5p+T5piv5rKh5pyJ5YWz57O755qE77yM5omA5Lul6ZyA6KaB5bGP6JS95o6J44CCXHJcbiAgICAgICAgICAgIGlmICghaXNTZXJ2ZXIpIHNldENhY2hlKHJlcG9CYXNpYy5kYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBtYWtlUXVlcnkocm91dGVyLnF1ZXJ5KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwby1iYXNpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG9CYXNpY30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3R5cGUgPT09ICdpbmRleCcgPyA8c3BhbiBjbGFzc05hbWU9XCJ0YWJcIj5SZWFkbWU8L3NwYW4+IDogPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGluZGV4XCI+UmVhZG1lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2lzc3VlcycgPyA8c3BhbiBjbGFzc05hbWU9XCJ0YWJcIj5Jc3N1ZXM8L3NwYW4+IDogPExpbmsgaHJlZj17YC9kZXRhaWwvaXNzdWVzJHtxdWVyeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOazqOaEj+aIkeS7rOWcqOS9v+eUqCBIT0Mg55qE6L+H56iL77yM5oiR5Lus5Zyo6I635Y+WIEhPQyDoh6rlt7HopoHnlKjnmoQgcHJvcHMg5Ymp5LiL5omA5pyJ55qE5Lyg6YCS57uZIENvbXAg55qEIHByb3BzIOmDveimgeS8oOS4i+WOu++8jOiAjOi/meS4qiBwcm9wcyDlsLHmmK8gQ29tcCDnnJ/lrp7opoHkvb/nlKjnmoQgcHJvcHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXAgey4uLnJlc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJlcG8tYmFzaWMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGFiICsgLnRhYiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIOazqOaEj+WcqOWuouaIt+err+esrOS4gOasoea4suafk+eahOaXtuWAme+8jOaYr+S4jeS8muiwg+eUqOi/meS4qiBnZXRJbml0aWFsUHJvcHMg77yM5omA5Lul5LiN5Lya5Zyo6YeM6Z2i6L+b6KGMIGNhY2hlXHJcbiAgICBXaXRoRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZ1bGxfbmFtZSA9IGAke293bmVyfS8ke25hbWV9YFxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBwYWdlRGF0YSA9IHt9XHJcbiAgICAgICAgaWYgKENvbXAuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgICAgIHBhZ2VEYXRhID0gYXdhaXQgQ29tcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChnZXRDYWNoZShmdWxsX25hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXBvQmFzaWM6IGdldENhY2hlKGZ1bGxfbmFtZSksXHJcbiAgICAgICAgICAgICAgICAuLi5wYWdlRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVwb0Jhc2ljID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gIH0sXHJcbiAgICAgICAgICAgIGN0eC5yZXEsXHJcbiAgICAgICAgICAgIGN0eC5yZXNcclxuICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXHJcbiAgICAgICAgICAgIC4uLnBhZ2VEYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhSZXBvKTsiXSwic291cmNlUm9vdCI6IiJ9