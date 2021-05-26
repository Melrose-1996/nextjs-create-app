webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");









var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\search.js",
    _this = undefined;



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 *
 */

var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

 // 搜索条件

var LANGUAGES = ["JavaScript", "HTML", "CSS", "TypeScript", "Java", "Rust"];
var SORT_TYPE = [{
  name: "Best Match"
}, {
  name: "Most Stars",
  value: "stars",
  order: "desc"
}, {
  name: "Fewest Stars",
  value: "stars",
  order: "asc"
}, {
  name: "Most Forks",
  value: "forks",
  order: "desc"
}, {
  name: "Fewest Stars",
  value: "forks",
  order: "asc"
}];
var selectedItemStyle = {
  borderLeft: "2px solid #e36209",
  fontWeight: 100
}; // 这是一个纯粹的方法，方法一旦声明，不存在任何副作用
// const doSearch = useCallback((config) => {
//   Router.push({
//     pathname: "/search",
//     query: config,
//   });
// }, []);
// react 是一个组件化的框架，组件依靠 props 和 states 进行运行的，如果能够抽象成 props 那么就可以重新申明一个组件，让组件帮忙使用，在代码维护变得更加简单
// 防止了组件在点击的过程中重新声明渲染
// FilterLink 组件是纯粹根据 props 进行更新的，可以 memo 进行优化，当 props 没有进行变化的时候，这个组件不会被重新渲染

var FilterLink = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_9__["memo"])(_c = function _c(_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order;
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang);
  if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || "desc"); // if (page) queryString += `&page=${page}`;
  // const doSearch = (config) => {
  //   Router.push({
  //     pathname: "/search",
  //     query: {
  //       query,
  //       lang,
  //       sort,
  //       order,
  //     },
  //   });
  // };
  // 注意 a 标签不放链接，很难去做 SEO ，因为 SEO 会解析 HTML 的内容

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/search".concat(queryString),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
});
_c2 = FilterLink;

function Search(_ref2) {
  var _this2 = this;

  var router = _ref2.router,
      repos = _ref2.repos;

  // 注意这些数据都没有在 state 里面去创建，希望是这些页面显示的内容完全根据 url 来定的，使得整个组件是个受控的组件，不会产生任何的副作用。
  // 该路由是 withRouter 传递过来的
  var querys = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, router.query);

  var _router$query = router.query,
      sort = _router$query.sort,
      order = _router$query.order,
      lang = _router$query.lang; // 用于拼接路径的方法
  // 注意语言变化了，但是当时选中了一个排序方式，在语言变化的时候，不应该变化其排序，所以要把排序的参数放在 query 里面。
  // const handleLanguageChange = (language) => {
  //   Router.push({
  //     pathname: "/search",
  //     query: {
  //       query,
  //       lang: language,
  //       sort,
  //       order,
  //     },
  //   });
  // };
  // const handleSortChange = (sort) => {
  //   Router.push({
  //     pathname: "/search",
  //     query: {
  //       query,
  //       lang,
  //       sort: sort.value,
  //       order: sort.order,
  //     },
  //   });
  // };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "jsx-118147758" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
      gutter: 20,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutter: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
          bordered: true,
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "jsx-118147758" + " " + "list-header",
            children: "\u8BED\u8A00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, this),
          style: {
            marginBottom: 20
          },
          dataSource: LANGUAGES,
          renderItem: function renderItem(item) {
            var selected = lang === item;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
              style: selected ? selectedItemStyle : null,
              children: selected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                className: "jsx-118147758",
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 21
              }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                lang: item,
                name: item
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 21
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
          bordered: true,
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "jsx-118147758" + " " + "list-header",
            children: "\u6392\u5E8F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }, this),
          style: {
            marginBottom: 20
          },
          dataSource: SORT_TYPE,
          renderItem: function renderItem(item) {
            var selected = false;

            if (item.name === "Best Match" && !sort) {
              selected = true;
            } else if (item.value === sort && item.order === order) {
              selected = true;
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
              style: selected ? selectedItemStyle : null,
              children: selected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                className: "jsx-118147758",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 21
              }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                sort: item.value,
                order: item.order,
                name: item.name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 21
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, _this2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 18,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          className: "jsx-118147758" + " " + "repos-title",
          children: [repos.total_count, " \u4E2A\u4ED3\u5E93"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this), repos.items.map(function (repo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
            repo: repo
          }, repo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this2);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
      id: "118147758",
      children: ".root.jsx-118147758{padding:20px 0;}.list-header.jsx-118147758{font-weight:800;font-size:16px;}.repos-title.jsx-118147758{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxrQixBQUcwQixBQUdDLEFBSWEsZUFOL0IsQ0FHaUIsYUFJQSxFQUhqQixhQUltQixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXHNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vKipcclxuICogc29ydDog5o6S5bqP5pa55byPXHJcbiAqIG9yZGVyOiDmjpLluo/pobrluo9cclxuICogbGFuZzog5LuT5bqT55qE6aG555uu5byA5Y+R5Li76K+t6KiAXHJcbiAqIHBhZ2U6IOWIhumhtemhtemdolxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVwb1wiO1xyXG5cclxuLy8g5pCc57Si5p2h5Lu2XHJcbmNvbnN0IExBTkdVQUdFUyA9IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiVHlwZVNjcmlwdFwiLCBcIkphdmFcIiwgXCJSdXN0XCJdO1xyXG5cclxuY29uc3QgU09SVF9UWVBFID0gW1xyXG4gIHsgbmFtZTogXCJCZXN0IE1hdGNoXCIgfSxcclxuICB7IG5hbWU6IFwiTW9zdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJkZXNjXCIgfSxcclxuICB7IG5hbWU6IFwiRmV3ZXN0IFN0YXJzXCIsIHZhbHVlOiBcInN0YXJzXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgRm9ya3NcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJmb3Jrc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG5dO1xyXG5cclxuY29uc3Qgc2VsZWN0ZWRJdGVtU3R5bGUgPSB7XHJcbiAgYm9yZGVyTGVmdDogXCIycHggc29saWQgI2UzNjIwOVwiLFxyXG4gIGZvbnRXZWlnaHQ6IDEwMCxcclxufTtcclxuXHJcbi8vIOi/meaYr+S4gOS4que6r+eyueeahOaWueazle+8jOaWueazleS4gOaXpuWjsOaYju+8jOS4jeWtmOWcqOS7u+S9leWJr+S9nOeUqFxyXG4vLyBjb25zdCBkb1NlYXJjaCA9IHVzZUNhbGxiYWNrKChjb25maWcpID0+IHtcclxuLy8gICBSb3V0ZXIucHVzaCh7XHJcbi8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbi8vICAgICBxdWVyeTogY29uZmlnLFxyXG4vLyAgIH0pO1xyXG4vLyB9LCBbXSk7XHJcblxyXG4vLyByZWFjdCDmmK/kuIDkuKrnu4Tku7bljJbnmoTmoYbmnrbvvIznu4Tku7bkvp3pnaAgcHJvcHMg5ZKMIHN0YXRlcyDov5vooYzov5DooYznmoTvvIzlpoLmnpzog73lpJ/mir3osaHmiJAgcHJvcHMg6YKj5LmI5bCx5Y+v5Lul6YeN5paw55Sz5piO5LiA5Liq57uE5Lu277yM6K6p57uE5Lu25biu5b+Z5L2/55So77yM5Zyo5Luj56CB57u05oqk5Y+Y5b6X5pu05Yqg566A5Y2VXHJcbi8vIOmYsuatouS6hue7hOS7tuWcqOeCueWHu+eahOi/h+eoi+S4remHjeaWsOWjsOaYjua4suafk1xyXG4vLyBGaWx0ZXJMaW5rIOe7hOS7tuaYr+e6r+eyueagueaNriBwcm9wcyDov5vooYzmm7TmlrDnmoTvvIzlj6/ku6UgbWVtbyDov5vooYzkvJjljJbvvIzlvZMgcHJvcHMg5rKh5pyJ6L+b6KGM5Y+Y5YyW55qE5pe25YCZ77yM6L+Z5Liq57uE5Lu25LiN5Lya6KKr6YeN5paw5riy5p+TXHJcbmNvbnN0IEZpbHRlckxpbmsgPSBtZW1vKCh7IG5hbWUsIHF1ZXJ5LCBsYW5nLCBzb3J0LCBvcmRlciB9KSA9PiB7XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xdWVyeT0ke3F1ZXJ5fWA7XHJcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZz0ke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIC8vIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcblxyXG4gIC8vIGNvbnN0IGRvU2VhcmNoID0gKGNvbmZpZykgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZyxcclxuICAvLyAgICAgICBzb3J0LFxyXG4gIC8vICAgICAgIG9yZGVyLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuICAvLyDms6jmhI8gYSDmoIfnrb7kuI3mlL7pk77mjqXvvIzlvojpmr7ljrvlgZogU0VPIO+8jOWboOS4uiBTRU8g5Lya6Kej5p6QIEhUTUwg55qE5YaF5a65XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2Avc2VhcmNoJHtxdWVyeVN0cmluZ31gfT5cclxuICAgICAgPGE+e25hbWV9PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoKHsgcm91dGVyLCByZXBvcyB9KSB7XHJcbiAgLy8g5rOo5oSP6L+Z5Lqb5pWw5o2u6YO95rKh5pyJ5ZyoIHN0YXRlIOmHjOmdouWOu+WIm+W7uu+8jOW4jOacm+aYr+i/meS6m+mhtemdouaYvuekuueahOWGheWuueWujOWFqOagueaNriB1cmwg5p2l5a6a55qE77yM5L2/5b6X5pW05Liq57uE5Lu25piv5Liq5Y+X5o6n55qE57uE5Lu277yM5LiN5Lya5Lqn55Sf5Lu75L2V55qE5Ymv5L2c55So44CCXHJcblxyXG4gIC8vIOivpei3r+eUseaYryB3aXRoUm91dGVyIOS8oOmAkui/h+adpeeahFxyXG4gIGNvbnN0IHsgLi4ucXVlcnlzIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBzb3J0LCBvcmRlciwgbGFuZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyDnlKjkuo7mi7zmjqXot6/lvoTnmoTmlrnms5VcclxuICAvLyDms6jmhI/or63oqIDlj5jljJbkuobvvIzkvYbmmK/lvZPml7bpgInkuK3kuobkuIDkuKrmjpLluo/mlrnlvI/vvIzlnKjor63oqIDlj5jljJbnmoTml7blgJnvvIzkuI3lupTor6Xlj5jljJblhbbmjpLluo/vvIzmiYDku6XopoHmiormjpLluo/nmoTlj4LmlbDmlL7lnKggcXVlcnkg6YeM6Z2i44CCXHJcbiAgLy8gY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAvLyAgIFJvdXRlci5wdXNoKHtcclxuICAvLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4gIC8vICAgICBxdWVyeToge1xyXG4gIC8vICAgICAgIHF1ZXJ5LFxyXG4gIC8vICAgICAgIGxhbmc6IGxhbmd1YWdlLFxyXG4gIC8vICAgICAgIHNvcnQsXHJcbiAgLy8gICAgICAgb3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gIC8vIGNvbnN0IGhhbmRsZVNvcnRDaGFuZ2UgPSAoc29ydCkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZyxcclxuICAvLyAgICAgICBzb3J0OiBzb3J0LnZhbHVlLFxyXG4gIC8vICAgICAgIG9yZGVyOiBzb3J0Lm9yZGVyLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxyXG4gICAgICAgIDxDb2wgZ3V0dGVyPXs2fT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7or63oqIA8L3NwYW4+fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGl0ZW07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBsYW5nPXtpdGVtfSBuYW1lPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb1NlYXJjaCh7IHNvcnQsIG9yZGVyLCBxdWVyeSwgbGFuZzogaXRlbSB9KX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+5o6S5bqPPC9zcGFuPn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEV9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJCZXN0IE1hdGNoXCIgJiYgIXNvcnQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucXVlcnlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpdGVtLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZG9TZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBpdGVtLnZhbHVlIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBpdGVtLm9yZGVyIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3MtdGl0bGVcIj57cmVwb3MudG90YWxfY291bnR9IOS4quS7k+W6kzwvaDM+XHJcbiAgICAgICAgICB7cmVwb3MuaXRlbXMubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtaGVhZGVyIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBvcy10aXRsZSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5LCBzb3J0LCBsYW5nLCBvcmRlciwgcGFnZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGlmICghcXVlcnkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlcG9zOiB7XHJcbiAgICAgICAgdG90YWxfY291bnQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgK2xhbmd1YWdlOiR7bGFuZ31gO1xyXG4gIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8IFwiZGVzY1wifWA7XHJcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVwb3M6IHJlc3VsdC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\search.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

_c3 = Search;

Search.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$query, query, sort, lang, order, page, queryString, result;

    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, order = _ctx$query.order, page = _ctx$query.page;

            if (query) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 3:
            queryString = "?q=".concat(query);
            if (lang) queryString += "+language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || "desc");
            if (page) queryString += "&page=".concat(page);
            _context.next = 9;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 9:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Search));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "FilterLink$memo");
$RefreshReg$(_c2, "FilterLink");
$RefreshReg$(_c3, "Search");
$RefreshReg$(_c4, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJMQU5HVUFHRVMiLCJTT1JUX1RZUEUiLCJuYW1lIiwidmFsdWUiLCJvcmRlciIsInNlbGVjdGVkSXRlbVN0eWxlIiwiYm9yZGVyTGVmdCIsImZvbnRXZWlnaHQiLCJGaWx0ZXJMaW5rIiwibWVtbyIsInF1ZXJ5IiwibGFuZyIsInNvcnQiLCJxdWVyeVN0cmluZyIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwicXVlcnlzIiwibWFyZ2luQm90dG9tIiwiaXRlbSIsInNlbGVjdGVkIiwidG90YWxfY291bnQiLCJpdGVtcyIsIm1hcCIsInJlcG8iLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhZ2UiLCJyZXF1ZXN0IiwidXJsIiwicmVxIiwicmVzIiwicmVzdWx0IiwiZGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQW5COztDQUlBOztBQUNBLElBQU1DLFNBQVMsR0FBRyxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLFlBQTlCLEVBQTRDLE1BQTVDLEVBQW9ELE1BQXBELENBQWxCO0FBRUEsSUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUVDLE1BQUksRUFBRTtBQUFSLENBRGdCLEVBRWhCO0FBQUVBLE1BQUksRUFBRSxZQUFSO0FBQXNCQyxPQUFLLEVBQUUsT0FBN0I7QUFBc0NDLE9BQUssRUFBRTtBQUE3QyxDQUZnQixFQUdoQjtBQUFFRixNQUFJLEVBQUUsY0FBUjtBQUF3QkMsT0FBSyxFQUFFLE9BQS9CO0FBQXdDQyxPQUFLLEVBQUU7QUFB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b0JBQWFlLElBQWIsQ0FBWDtBQVphO0FBQUEsbUJBYUY5QixHQUFHLENBQUMrQixPQUFKLENBQ25CO0FBQ0VDLGlCQUFHLGdDQUF5QmpCLFdBQXpCO0FBREwsYUFEbUIsRUFJbkJjLEdBQUcsQ0FBQ0ksR0FKZSxFQUtuQkosR0FBRyxDQUFDSyxHQUxlLENBYkU7O0FBQUE7QUFhakJDLGtCQWJpQjtBQUFBLDZDQXFCaEI7QUFDTGpCLG1CQUFLLEVBQUVpQixNQUFNLENBQUNDO0FBRFQsYUFyQmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBCZSxxRUFBQUMsK0RBQVUsQ0FBQ3JCLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjhiNWVmNzk1MjU5Nzc0MzI2MGI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLyoqXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobXpobXpnaJcclxuICpcclxuICovXHJcblxyXG5jb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbi8vIOaQnOe0ouadoeS7tlxyXG5jb25zdCBMQU5HVUFHRVMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIlR5cGVTY3JpcHRcIiwgXCJKYXZhXCIsIFwiUnVzdFwiXTtcclxuXHJcbmNvbnN0IFNPUlRfVFlQRSA9IFtcclxuICB7IG5hbWU6IFwiQmVzdCBNYXRjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IEZvcmtzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xyXG4gIGJvcmRlckxlZnQ6IFwiMnB4IHNvbGlkICNlMzYyMDlcIixcclxuICBmb250V2VpZ2h0OiAxMDAsXHJcbn07XHJcblxyXG4vLyDov5nmmK/kuIDkuKrnuq/nsrnnmoTmlrnms5XvvIzmlrnms5XkuIDml6blo7DmmI7vvIzkuI3lrZjlnKjku7vkvZXlia/kvZznlKhcclxuLy8gY29uc3QgZG9TZWFyY2ggPSB1c2VDYWxsYmFjaygoY29uZmlnKSA9PiB7XHJcbi8vICAgUm91dGVyLnB1c2goe1xyXG4vLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4vLyAgICAgcXVlcnk6IGNvbmZpZyxcclxuLy8gICB9KTtcclxuLy8gfSwgW10pO1xyXG5cclxuLy8gcmVhY3Qg5piv5LiA5Liq57uE5Lu25YyW55qE5qGG5p6277yM57uE5Lu25L6d6Z2gIHByb3BzIOWSjCBzdGF0ZXMg6L+b6KGM6L+Q6KGM55qE77yM5aaC5p6c6IO95aSf5oq96LGh5oiQIHByb3BzIOmCo+S5iOWwseWPr+S7pemHjeaWsOeUs+aYjuS4gOS4que7hOS7tu+8jOiuqee7hOS7tuW4ruW/meS9v+eUqO+8jOWcqOS7o+eggee7tOaKpOWPmOW+l+abtOWKoOeugOWNlVxyXG4vLyDpmLLmraLkuobnu4Tku7blnKjngrnlh7vnmoTov4fnqIvkuK3ph43mlrDlo7DmmI7muLLmn5NcclxuLy8gRmlsdGVyTGluayDnu4Tku7bmmK/nuq/nsrnmoLnmja4gcHJvcHMg6L+b6KGM5pu05paw55qE77yM5Y+v5LulIG1lbW8g6L+b6KGM5LyY5YyW77yM5b2TIHByb3BzIOayoeaciei/m+ihjOWPmOWMlueahOaXtuWAme+8jOi/meS4que7hOS7tuS4jeS8muiiq+mHjeaWsOa4suafk1xyXG5jb25zdCBGaWx0ZXJMaW5rID0gbWVtbygoeyBuYW1lLCBxdWVyeSwgbGFuZywgc29ydCwgb3JkZXIgfSkgPT4ge1xyXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cXVlcnk9JHtxdWVyeX1gO1xyXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgJmxhbmc9JHtsYW5nfWA7XHJcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgXCJkZXNjXCJ9YDtcclxuICAvLyBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gO1xyXG5cclxuICAvLyBjb25zdCBkb1NlYXJjaCA9IChjb25maWcpID0+IHtcclxuICAvLyAgIFJvdXRlci5wdXNoKHtcclxuICAvLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4gIC8vICAgICBxdWVyeToge1xyXG4gIC8vICAgICAgIHF1ZXJ5LFxyXG4gIC8vICAgICAgIGxhbmcsXHJcbiAgLy8gICAgICAgc29ydCxcclxuICAvLyAgICAgICBvcmRlcixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcbiAgLy8g5rOo5oSPIGEg5qCH562+5LiN5pS+6ZO+5o6l77yM5b6I6Zq+5Y675YGaIFNFTyDvvIzlm6DkuLogU0VPIOS8muino+aekCBIVE1MIOeahOWGheWuuVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgL3NlYXJjaCR7cXVlcnlTdHJpbmd9YH0+XHJcbiAgICAgIDxhPntuYW1lfTwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHJvdXRlciwgcmVwb3MgfSkge1xyXG4gIC8vIOazqOaEj+i/meS6m+aVsOaNrumDveayoeacieWcqCBzdGF0ZSDph4zpnaLljrvliJvlu7rvvIzluIzmnJvmmK/ov5nkupvpobXpnaLmmL7npLrnmoTlhoXlrrnlrozlhajmoLnmja4gdXJsIOadpeWumueahO+8jOS9v+W+l+aVtOS4que7hOS7tuaYr+S4quWPl+aOp+eahOe7hOS7tu+8jOS4jeS8muS6p+eUn+S7u+S9leeahOWJr+S9nOeUqOOAglxyXG5cclxuICAvLyDor6Xot6/nlLHmmK8gd2l0aFJvdXRlciDkvKDpgJLov4fmnaXnmoRcclxuICBjb25zdCB7IC4uLnF1ZXJ5cyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgc29ydCwgb3JkZXIsIGxhbmcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgLy8g55So5LqO5ou85o6l6Lev5b6E55qE5pa55rOVXHJcbiAgLy8g5rOo5oSP6K+t6KiA5Y+Y5YyW5LqG77yM5L2G5piv5b2T5pe26YCJ5Lit5LqG5LiA5Liq5o6S5bqP5pa55byP77yM5Zyo6K+t6KiA5Y+Y5YyW55qE5pe25YCZ77yM5LiN5bqU6K+l5Y+Y5YyW5YW25o6S5bqP77yM5omA5Lul6KaB5oqK5o6S5bqP55qE5Y+C5pWw5pS+5ZyoIHF1ZXJ5IOmHjOmdouOAglxyXG4gIC8vIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nOiBsYW5ndWFnZSxcclxuICAvLyAgICAgICBzb3J0LFxyXG4gIC8vICAgICAgIG9yZGVyLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuICAvLyBjb25zdCBoYW5kbGVTb3J0Q2hhbmdlID0gKHNvcnQpID0+IHtcclxuICAvLyAgIFJvdXRlci5wdXNoKHtcclxuICAvLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4gIC8vICAgICBxdWVyeToge1xyXG4gIC8vICAgICAgIHF1ZXJ5LFxyXG4gIC8vICAgICAgIGxhbmcsXHJcbiAgLy8gICAgICAgc29ydDogc29ydC52YWx1ZSxcclxuICAvLyAgICAgICBvcmRlcjogc29ydC5vcmRlcixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezIwfT5cclxuICAgICAgICA8Q29sIGd1dHRlcj17Nn0+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+6K+t6KiAPC9zcGFuPn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBsYW5nID09PSBpdGVtO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmsgey4uLnF1ZXJ5c30gbGFuZz17aXRlbX0gbmFtZT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG9TZWFyY2goeyBzb3J0LCBvcmRlciwgcXVlcnksIGxhbmc6IGl0ZW0gfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuaOkuW6jzwvc3Bhbj59XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17U09SVF9UWVBFfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwiQmVzdCBNYXRjaFwiICYmICFzb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlID09PSBzb3J0ICYmIGl0ZW0ub3JkZXIgPT09IG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLnF1ZXJ5c31cclxuICAgICAgICAgICAgICAgICAgICAgIHNvcnQ9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17aXRlbS5vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGRvU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogaXRlbS52YWx1ZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogaXRlbS5vcmRlciB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTh9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9zLXRpdGxlXCI+e3JlcG9zLnRvdGFsX2NvdW50fSDkuKrku5PlupM8L2gzPlxyXG4gICAgICAgICAge3JlcG9zLml0ZW1zLm1hcCgocmVwbykgPT4gKFxyXG4gICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvczoge1xyXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9