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
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");





var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\with-repo-basic.jsx";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function withRepo(Comp) {
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
    var repoBasic = _ref.repoBasic,
        router = _ref.router,
        rest = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["repoBasic", "router"]);

    var query = makeQuery(router.query);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-2262278230" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-2262278230" + " " + "repo-basic",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Repo__WEBPACK_IMPORTED_MODULE_6__["default"], {
          repo: repoBasic
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "jsx-2262278230" + " " + "tabs",
          children: [type === 'index' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2262278230" + " " + "tab",
            children: "Readme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 45
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/detail".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "jsx-2262278230" + " " + "tab index",
              children: "Readme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 83
          }, this), type === 'issues' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2262278230" + " " + "tab",
            children: "Issues"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 46
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/detail/issues".concat(query),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "jsx-2262278230" + " " + "tab issues",
              children: "Issues"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 84
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "jsx-2262278230",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Comp, _objectSpread({}, rest), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2262278230",
        children: ".root.jsx-2262278230{padding-top:20px;}.repo-basic.jsx-2262278230{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-2262278230+.tab.jsx-2262278230{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXGNvbXBvbmVudHNcXHdpdGgtcmVwby1iYXNpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEM0QixBQUdrQyxBQUdKLEFBTUksYUFMSyxJQUh4QixBQVNBLGtCQUxxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxcY29tcG9uZW50c1xcd2l0aC1yZXBvLWJhc2ljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gXCIuL1JlcG9cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q2FjaGUsIHNldENhY2hlIH0gZnJvbSAnLi4vbGliL3JlcG8tYmFzaWMtY2FjaGUnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVwbyhDb21wLCB0eXBlID0gJ2luZGV4Jykge1xyXG4gICAgLy8g6L+Z5qC35oiR5Lus5oqK6ZSu5YC85a+555qE5b2i5byP5pig5bCE5oiQ5LqG5LiA5Liq5a2X56ym5LiyXHJcbiAgICBmdW5jdGlvbiBtYWtlUXVlcnkocXVlcnlPYmopIHtcclxuICAgICAgICAvLyDpgY3ljobov5nkuKogb2JqXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iailcclxuICAgICAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbihcIj1cIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgIC5qb2luKFwiJlwiKTtcclxuICAgICAgICByZXR1cm4gYD8ke3F1ZXJ5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gV2l0aERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyLCAuLi5yZXN0IH0pIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2luZGV4JyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPlJlYWRtZTwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSAnaXNzdWVzJyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPklzc3Vlczwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGlzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog5rOo5oSP5oiR5Lus5Zyo5L2/55SoIEhPQyDnmoTov4fnqIvvvIzmiJHku6zlnKjojrflj5YgSE9DIOiHquW3seimgeeUqOeahCBwcm9wcyDliankuIvmiYDmnInnmoTkvKDpgJLnu5kgQ29tcCDnmoQgcHJvcHMg6YO96KaB5Lyg5LiL5Y6777yM6ICM6L+Z5LiqIHByb3BzIOWwseaYryBDb21wIOecn+WunuimgeS9v+eUqOeahCBwcm9wcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcCB7Li4ucmVzdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50YWIgKyAudGFiIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG4gICAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdCBmdWxsX25hbWUgPSBgJHtvd25lcn0vJHtuYW1lfWBcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgcGFnZURhdGEgPSB7fVxyXG4gICAgICAgIGlmIChDb21wLmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgICAgICBwYWdlRGF0YSA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoZ2V0Q2FjaGUoZnVsbF9uYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVwb0Jhc2ljOiBnZXRDYWNoZShmdWxsX25hbWUpLFxyXG4gICAgICAgICAgICAgICAgLi4ucGFnZURhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgICAgICAgICB7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCB9LFxyXG4gICAgICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgICAgICBjdHgucmVzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g5pyN5Yqh56uv5riy5p+T5a+55LqO6L+Z5q615Luj56CB5piv5rKh5pyJ5b+F6KaB5Y675omn6KGM55qE77yM5aaC5p6c6YeN5aSN5omn6KGM5Lya5a+86Ie05oiR5Lus55qE5YaF5a2Y5rKh5pyJ5oSP5LmJ55qE5L2/55So77yM6L+Z5q615piv6Lef55So5oi355qE5pCc57Si5pyJ5YWz55qE77yM6Lef5pyN5Yqh56uv5pW05L2T5riy5p+T5piv5rKh5pyJ5YWz57O755qE77yM5omA5Lul6ZyA6KaB5bGP6JS95o6J44CCXHJcbiAgICAgICAgaWYgKCFpc1NlcnZlcikgc2V0Q2FjaGUocmVwb0Jhc2ljLmRhdGEpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXHJcbiAgICAgICAgICAgIC4uLnBhZ2VEYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhSZXBvKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\components\\\\with-repo-basic.jsx */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this);
  }

  var isServer = false;

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
              if (!Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_10__["getCache"])(full_name)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", _objectSpread({
                repoBasic: Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_10__["getCache"])(full_name)
              }, pageData));

            case 9:
              _context.next = 11;
              return _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 11:
              repoBasic = _context.sent;
              // 服务端渲染对于这段代码是没有必要去执行的，如果重复执行会导致我们的内存没有意义的使用，这段是跟用户的搜索有关的，跟服务端整体渲染是没有关系的，所以需要屏蔽掉。
              if (!isServer) Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_10__["setCache"])(repoBasic.data);
              return _context.abrupt("return", _objectSpread({
                repoBasic: repoBasic.data
              }, pageData));

            case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbIndpdGhSZXBvIiwiQ29tcCIsInR5cGUiLCJtYWtlUXVlcnkiLCJxdWVyeU9iaiIsInF1ZXJ5IiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInJlc3VsdCIsImVudHJ5IiwicHVzaCIsImpvaW4iLCJXaXRoRGV0YWlsIiwicmVwb0Jhc2ljIiwicm91dGVyIiwicmVzdCIsImlzU2VydmVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3duZXIiLCJuYW1lIiwiZnVsbF9uYW1lIiwicGFnZURhdGEiLCJnZXRDYWNoZSIsImFwaSIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJzZXRDYWNoZSIsImRhdGEiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFLZSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QztBQUFBLE1BQWhCQyxJQUFnQix1RUFBVCxPQUFTOztBQUNuRDtBQUNBLFdBQVNDLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQ3pCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUgsUUFBZixFQUNUSSxNQURTLENBQ0YsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQ3ZCRCxZQUFNLENBQUNFLElBQVAsQ0FBWUQsS0FBSyxDQUFDRSxJQUFOLENBQVcsR0FBWCxDQUFaO0FBQ0EsYUFBT0gsTUFBUDtBQUNILEtBSlMsRUFJUCxFQUpPLEVBS1RHLElBTFMsQ0FLSixHQUxJLENBQWQ7QUFNQSxzQkFBV1AsS0FBWDtBQUNIOztBQUVELFdBQVNRLFVBQVQsT0FBb0Q7QUFBQSxRQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsUUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFt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ZTFlYjA5NTJjZTM4MGQ5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXBvIGZyb20gXCIuL1JlcG9cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vbGliL2FwaVwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q2FjaGUsIHNldENhY2hlIH0gZnJvbSAnLi4vbGliL3JlcG8tYmFzaWMtY2FjaGUnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVwbyhDb21wLCB0eXBlID0gJ2luZGV4Jykge1xyXG4gICAgLy8g6L+Z5qC35oiR5Lus5oqK6ZSu5YC85a+555qE5b2i5byP5pig5bCE5oiQ5LqG5LiA5Liq5a2X56ym5LiyXHJcbiAgICBmdW5jdGlvbiBtYWtlUXVlcnkocXVlcnlPYmopIHtcclxuICAgICAgICAvLyDpgY3ljobov5nkuKogb2JqXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iailcclxuICAgICAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbihcIj1cIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgIC5qb2luKFwiJlwiKTtcclxuICAgICAgICByZXR1cm4gYD8ke3F1ZXJ5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gV2l0aERldGFpbCh7IHJlcG9CYXNpYywgcm91dGVyLCAuLi5yZXN0IH0pIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2luZGV4JyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPlJlYWRtZTwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaW5kZXhcIj5SZWFkbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSAnaXNzdWVzJyA/IDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPklzc3Vlczwvc3Bhbj4gOiA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGlzc3Vlc1wiPklzc3VlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog5rOo5oSP5oiR5Lus5Zyo5L2/55SoIEhPQyDnmoTov4fnqIvvvIzmiJHku6zlnKjojrflj5YgSE9DIOiHquW3seimgeeUqOeahCBwcm9wcyDliankuIvmiYDmnInnmoTkvKDpgJLnu5kgQ29tcCDnmoQgcHJvcHMg6YO96KaB5Lyg5LiL5Y6777yM6ICM6L+Z5LiqIHByb3BzIOWwseaYryBDb21wIOecn+WunuimgeS9v+eUqOeahCBwcm9wcyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcCB7Li4ucmVzdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmVwby1iYXNpYyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50YWIgKyAudGFiIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG4gICAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdCBmdWxsX25hbWUgPSBgJHtvd25lcn0vJHtuYW1lfWBcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgcGFnZURhdGEgPSB7fVxyXG4gICAgICAgIGlmIChDb21wLmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgICAgICBwYWdlRGF0YSA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoZ2V0Q2FjaGUoZnVsbF9uYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVwb0Jhc2ljOiBnZXRDYWNoZShmdWxsX25hbWUpLFxyXG4gICAgICAgICAgICAgICAgLi4ucGFnZURhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgICAgICAgICB7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9YCB9LFxyXG4gICAgICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgICAgICBjdHgucmVzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g5pyN5Yqh56uv5riy5p+T5a+55LqO6L+Z5q615Luj56CB5piv5rKh5pyJ5b+F6KaB5Y675omn6KGM55qE77yM5aaC5p6c6YeN5aSN5omn6KGM5Lya5a+86Ie05oiR5Lus55qE5YaF5a2Y5rKh5pyJ5oSP5LmJ55qE5L2/55So77yM6L+Z5q615piv6Lef55So5oi355qE5pCc57Si5pyJ5YWz55qE77yM6Lef5pyN5Yqh56uv5pW05L2T5riy5p+T5piv5rKh5pyJ5YWz57O755qE77yM5omA5Lul6ZyA6KaB5bGP6JS95o6J44CCXHJcbiAgICAgICAgaWYgKCFpc1NlcnZlcikgc2V0Q2FjaGUocmVwb0Jhc2ljLmRhdGEpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlcG9CYXNpYzogcmVwb0Jhc2ljLmRhdGEsXHJcbiAgICAgICAgICAgIC4uLnBhZ2VEYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB3aXRoUm91dGVyKFdpdGhEZXRhaWwpXHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhSZXBvKTsiXSwic291cmNlUm9vdCI6IiJ9