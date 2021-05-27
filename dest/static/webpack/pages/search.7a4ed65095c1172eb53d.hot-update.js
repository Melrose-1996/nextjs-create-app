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
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/antd/lib/pagination/index.js");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");










var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\search.js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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

var per_page = 20;
var FilterLink = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_10__["memo"])(_c = function _c(_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order,
      page = _ref.page;
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang);
  if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || "desc");
  if (page) queryString += "&page=".concat(page);
  queryString += "&per_page=".concat(per_page); // if (page) queryString += `&page=${page}`;
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/search".concat(queryString),
    children: /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_10__["isValidElement"])(name) ? name : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 38
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
});
_c2 = FilterLink;

var noop = function noop() {};

function Search(_ref2) {
  _s();

  var _this2 = this;

  var router = _ref2.router,
      repos = _ref2.repos;
  console.log(repos); // 注意这些数据都没有在 state 里面去创建，希望是这些页面显示的内容完全根据 url 来定的，使得整个组件是个受控的组件，不会产生任何的副作用。
  // 该路由是 withRouter 传递过来的

  var querys = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, router.query);

  var _router$query = router.query,
      sort = _router$query.sort,
      order = _router$query.order,
      lang = _router$query.lang,
      page = _router$query.page; // 执行这个插入，每次页面渲染的时候，都会去调用它

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {}); // 用于拼接路径的方法
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "jsx-2060511232" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
      gutter: 20,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        gutter: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
          bordered: true,
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
            className: "jsx-2060511232" + " " + "list-header",
            children: "\u8BED\u8A00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 21
          }, this),
          style: {
            marginBottom: 20
          },
          dataSource: LANGUAGES,
          renderItem: function renderItem(item) {
            var selected = lang === item;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
              style: selected ? selectedItemStyle : null,
              children: selected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
                className: "jsx-2060511232",
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 21
              }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                lang: item,
                name: item
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 21
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
          bordered: true,
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
            className: "jsx-2060511232" + " " + "list-header",
            children: "\u6392\u5E8F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
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

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
              style: selected ? selectedItemStyle : null,
              children: selected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
                className: "jsx-2060511232",
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 21
              }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                sort: item.value,
                order: item.order,
                name: item.name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 21
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, _this2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        span: 18,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
          className: "jsx-2060511232" + " " + "repos-title",
          children: [repos.total_count, " \u4E2A\u4ED3\u5E93"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this), repos.items.map(function (repo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_13__["default"], {
            repo: repo
          }, repo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this2);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "jsx-2060511232" + " " + "pagination",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_3___default.a, {
            pageSize: per_page,
            current: Number(page) || 1,
            total: 1000,
            onChange: noop,
            itemRender: function itemRender(page, type, ol) {
              var p = type === "page" ? page : type === "prev" ? page - 1 : page + 1;
              var name = type === "page" ? page : ol;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                page: p,
                name: name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 24
              }, _this2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
      id: "2060511232",
      children: ".root.jsx-2060511232{padding:20px 0;}.list-header.jsx-2060511232{font-weight:800;font-size:16px;}.repos-title.jsx-2060511232{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-2060511232{padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb05rQixBQUcwQixBQUdDLEFBSWEsQUFLaEIsYUFDSyxFQVpwQixDQUdpQixhQUlBLEVBSGpCLEFBU0EsYUFMbUIsaUJBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbywgaXNWYWxpZEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIFBhZ2luYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLyoqXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobXpobXpnaJcclxuICpcclxuICovXHJcblxyXG5jb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbi8vIOaQnOe0ouadoeS7tlxyXG5jb25zdCBMQU5HVUFHRVMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIlR5cGVTY3JpcHRcIiwgXCJKYXZhXCIsIFwiUnVzdFwiXTtcclxuXHJcbmNvbnN0IFNPUlRfVFlQRSA9IFtcclxuICB7IG5hbWU6IFwiQmVzdCBNYXRjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IEZvcmtzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xyXG4gIGJvcmRlckxlZnQ6IFwiMnB4IHNvbGlkICNlMzYyMDlcIixcclxuICBmb250V2VpZ2h0OiAxMDAsXHJcbn07XHJcblxyXG4vLyDov5nmmK/kuIDkuKrnuq/nsrnnmoTmlrnms5XvvIzmlrnms5XkuIDml6blo7DmmI7vvIzkuI3lrZjlnKjku7vkvZXlia/kvZznlKhcclxuLy8gY29uc3QgZG9TZWFyY2ggPSB1c2VDYWxsYmFjaygoY29uZmlnKSA9PiB7XHJcbi8vICAgUm91dGVyLnB1c2goe1xyXG4vLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4vLyAgICAgcXVlcnk6IGNvbmZpZyxcclxuLy8gICB9KTtcclxuLy8gfSwgW10pO1xyXG5cclxuLy8gcmVhY3Qg5piv5LiA5Liq57uE5Lu25YyW55qE5qGG5p6277yM57uE5Lu25L6d6Z2gIHByb3BzIOWSjCBzdGF0ZXMg6L+b6KGM6L+Q6KGM55qE77yM5aaC5p6c6IO95aSf5oq96LGh5oiQIHByb3BzIOmCo+S5iOWwseWPr+S7pemHjeaWsOeUs+aYjuS4gOS4que7hOS7tu+8jOiuqee7hOS7tuW4ruW/meS9v+eUqO+8jOWcqOS7o+eggee7tOaKpOWPmOW+l+abtOWKoOeugOWNlVxyXG4vLyDpmLLmraLkuobnu4Tku7blnKjngrnlh7vnmoTov4fnqIvkuK3ph43mlrDlo7DmmI7muLLmn5NcclxuLy8gRmlsdGVyTGluayDnu4Tku7bmmK/nuq/nsrnmoLnmja4gcHJvcHMg6L+b6KGM5pu05paw55qE77yM5Y+v5LulIG1lbW8g6L+b6KGM5LyY5YyW77yM5b2TIHByb3BzIOayoeaciei/m+ihjOWPmOWMlueahOaXtuWAme+8jOi/meS4que7hOS7tuS4jeS8muiiq+mHjeaWsOa4suafk1xyXG5cclxuY29uc3QgcGVyX3BhZ2UgPSAyMDtcclxuY29uc3QgRmlsdGVyTGluayA9IG1lbW8oKHsgbmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0pID0+IHtcclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3F1ZXJ5PSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCZsYW5nPSR7bGFuZ31gO1xyXG4gIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8IFwiZGVzY1wifWA7XHJcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuXHJcbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgLy8gaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuXHJcbiAgLy8gY29uc3QgZG9TZWFyY2ggPSAoY29uZmlnKSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nLFxyXG4gIC8vICAgICAgIHNvcnQsXHJcbiAgLy8gICAgICAgb3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gIC8vIOazqOaEjyBhIOagh+etvuS4jeaUvumTvuaOpe+8jOW+iOmavuWOu+WBmiBTRU8g77yM5Zug5Li6IFNFTyDkvJrop6PmnpAgSFRNTCDnmoTlhoXlrrlcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PlxyXG4gICAgICB7LyogaXNWYWxpZEVsZW1lbnQg5piv55So5p2l5Yik5pat5piv5ZCm5Li65LiA5Liq5qCH562+ICovfVxyXG4gICAgICB7aXNWYWxpZEVsZW1lbnQobmFtZSkgPyBuYW1lIDogPGE+e25hbWV9PC9hPn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHJvdXRlciwgcmVwb3MgfSkge1xyXG4gIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICAvLyDms6jmhI/ov5nkupvmlbDmja7pg73msqHmnInlnKggc3RhdGUg6YeM6Z2i5Y675Yib5bu677yM5biM5pyb5piv6L+Z5Lqb6aG16Z2i5pi+56S655qE5YaF5a655a6M5YWo5qC55o2uIHVybCDmnaXlrprnmoTvvIzkvb/lvpfmlbTkuKrnu4Tku7bmmK/kuKrlj5fmjqfnmoTnu4Tku7bvvIzkuI3kvJrkuqfnlJ/ku7vkvZXnmoTlia/kvZznlKjjgIJcclxuXHJcbiAgLy8g6K+l6Lev55Sx5pivIHdpdGhSb3V0ZXIg5Lyg6YCS6L+H5p2l55qEXHJcbiAgY29uc3QgeyAuLi5xdWVyeXMgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IHNvcnQsIG9yZGVyLCBsYW5nLCBwYWdlIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIC8vIOaJp+ihjOi/meS4quaPkuWFpe+8jOavj+asoemhtemdoua4suafk+eahOaXtuWAme+8jOmDveS8muWOu+iwg+eUqOWug1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XHJcblxyXG4gIC8vIOeUqOS6juaLvOaOpei3r+W+hOeahOaWueazlVxyXG4gIC8vIOazqOaEj+ivreiogOWPmOWMluS6hu+8jOS9huaYr+W9k+aXtumAieS4reS6huS4gOS4quaOkuW6j+aWueW8j++8jOWcqOivreiogOWPmOWMlueahOaXtuWAme+8jOS4jeW6lOivpeWPmOWMluWFtuaOkuW6j++8jOaJgOS7peimgeaKiuaOkuW6j+eahOWPguaVsOaUvuWcqCBxdWVyeSDph4zpnaLjgIJcclxuICAvLyBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZzogbGFuZ3VhZ2UsXHJcbiAgLy8gICAgICAgc29ydCxcclxuICAvLyAgICAgICBvcmRlcixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcbiAgLy8gY29uc3QgaGFuZGxlU29ydENoYW5nZSA9IChzb3J0KSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nLFxyXG4gIC8vICAgICAgIHNvcnQ6IHNvcnQudmFsdWUsXHJcbiAgLy8gICAgICAgb3JkZXI6IHNvcnQub3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBndXR0ZXI9ezZ9PlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gaXRlbTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IGxhbmc9e2l0ZW19IG5hbWU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VhcmNoKHsgc29ydCwgb3JkZXIsIHF1ZXJ5LCBsYW5nOiBpdGVtIH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBcIkJlc3QgTWF0Y2hcIiAmJiAhc29ydCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5xdWVyeXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb1NlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGl0ZW0udmFsdWUgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGl0ZW0ub3JkZXIgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH0g5Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgIHtyZXBvcy5pdGVtcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgey8qIGl0ZW1SZW5kZXIg5bCx5piv5oiR5Lus5q+P5LiqIGl0ZW0g5pi+56S655qE5YaF5a6577yMaXRlbVJlbmRlciDlsLHmmK/mr4/kuKogcGFnZSDlr7nlupTnmoTpobXnoIHvvIx0eXBlIOWwseaYr+i/meS4quWIhumhteWQkeWJjei/mOaYr+WQkeWQjui/mOaYr+S4remXtOeahOaMiemSru+8jG9sIOWwseaYr+exu+S8vOS6jiBpY29uIO+8jOazqOaEjyBwYWdlIO+8jCB0eXBlIOmDveaYryBhIOagh+etviAgKi99XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgcGFnZVNpemU9e3Blcl9wYWdlfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxyXG4gICAgICAgICAgICAgIHRvdGFsPXsxMDAwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtub29wfVxyXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhwYWdlLCB0eXBlLCBvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcInByZXZcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcGFnZSAtIDFcclxuICAgICAgICAgICAgICAgICAgICA6IHBhZ2UgKyAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHR5cGUgPT09IFwicGFnZVwiID8gcGFnZSA6IG9sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHBhZ2U9e3B9IG5hbWU9e25hbWV9IC8+O1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvczoge1xyXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\search.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, this);
}

_s(Search, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
            queryString += "&per_page=".concat(per_page);
            _context.next = 10;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 12:
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

/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Search));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJMQU5HVUFHRVMiLCJTT1JUX1RZUEUiLCJuYW1lIiwidmFsdWUiLCJvcmRlciIsInNlbGVjdGVkSXRlbVN0eWxlIiwiYm9yZGVyTGVmdCIsImZvbnRXZWlnaHQiLCJwZXJfcGFnZSIsIkZpbHRlckxpbmsiLCJtZW1vIiwicXVlcnkiLCJsYW5nIiwic29ydCIsInBhZ2UiLCJxdWVyeVN0cmluZyIsImlzVmFsaWRFbGVtZW50Iiwibm9vcCIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5cyIsInVzZUVmZmVjdCIsIm1hcmdpbkJvdHRvbSIsIml0ZW0iLCJzZWxlY3RlZCIsInRvdGFsX2NvdW50IiwiaXRlbXMiLCJtYXAiLCJyZXBvIiwiaWQiLCJOdW1iZXIiLCJ0eXBlIiwib2wiLCJwIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsInJlc3VsdCIsImRhdGEiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBbkI7O0NBSUE7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsWUFBOUIsRUFBNEMsTUFBNUMsRUFBb0QsTUFBcEQsQ0FBbEI7QUFFQSxJQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FEZ0IsRUFFaEI7QUFBRUEsTUFBSSxFQUFFLFlBQVI7QUFBc0JDLE9BQUssRUFBRSxPQUE3QjtBQUFzQ0Ms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VUcsV0FBVyx3QkFBaUJILElBQWpCLENBQVg7QUFDVixnQkFBSUMsSUFBSixFQUFVRSxXQUFXLG9CQUFhRixJQUFiLG9CQUEyQlQsS0FBSyxJQUFJLE1BQXBDLENBQVg7QUFDVixnQkFBSVUsSUFBSixFQUFVQyxXQUFXLG9CQUFhRCxJQUFiLENBQVg7QUFDVkMsdUJBQVcsd0JBQWlCUCxRQUFqQixDQUFYO0FBYnVCO0FBQUEsbUJBY0ZWLEdBQUcsQ0FBQ3lDLE9BQUosQ0FDbkI7QUFDRUMsaUJBQUcsZ0NBQXlCekIsV0FBekI7QUFETCxhQURtQixFQUluQnVCLEdBQUcsQ0FBQ0csR0FKZSxFQUtuQkgsR0FBRyxDQUFDSSxHQUxlLENBZEU7O0FBQUE7QUFjakJDLGtCQWRpQjtBQUFBLDZDQXNCaEI7QUFDTHZCLG1CQUFLLEVBQUV1QixNQUFNLENBQUNDO0FBRFQsYUF0QmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTJCZSxxRUFBQUMsK0RBQVUsQ0FBQzNCLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjdhNGVkNjUwOTVjMTE3MmViNTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbywgaXNWYWxpZEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIFBhZ2luYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLyoqXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobXpobXpnaJcclxuICpcclxuICovXHJcblxyXG5jb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbi8vIOaQnOe0ouadoeS7tlxyXG5jb25zdCBMQU5HVUFHRVMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIlR5cGVTY3JpcHRcIiwgXCJKYXZhXCIsIFwiUnVzdFwiXTtcclxuXHJcbmNvbnN0IFNPUlRfVFlQRSA9IFtcclxuICB7IG5hbWU6IFwiQmVzdCBNYXRjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IEZvcmtzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xyXG4gIGJvcmRlckxlZnQ6IFwiMnB4IHNvbGlkICNlMzYyMDlcIixcclxuICBmb250V2VpZ2h0OiAxMDAsXHJcbn07XHJcblxyXG4vLyDov5nmmK/kuIDkuKrnuq/nsrnnmoTmlrnms5XvvIzmlrnms5XkuIDml6blo7DmmI7vvIzkuI3lrZjlnKjku7vkvZXlia/kvZznlKhcclxuLy8gY29uc3QgZG9TZWFyY2ggPSB1c2VDYWxsYmFjaygoY29uZmlnKSA9PiB7XHJcbi8vICAgUm91dGVyLnB1c2goe1xyXG4vLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4vLyAgICAgcXVlcnk6IGNvbmZpZyxcclxuLy8gICB9KTtcclxuLy8gfSwgW10pO1xyXG5cclxuLy8gcmVhY3Qg5piv5LiA5Liq57uE5Lu25YyW55qE5qGG5p6277yM57uE5Lu25L6d6Z2gIHByb3BzIOWSjCBzdGF0ZXMg6L+b6KGM6L+Q6KGM55qE77yM5aaC5p6c6IO95aSf5oq96LGh5oiQIHByb3BzIOmCo+S5iOWwseWPr+S7pemHjeaWsOeUs+aYjuS4gOS4que7hOS7tu+8jOiuqee7hOS7tuW4ruW/meS9v+eUqO+8jOWcqOS7o+eggee7tOaKpOWPmOW+l+abtOWKoOeugOWNlVxyXG4vLyDpmLLmraLkuobnu4Tku7blnKjngrnlh7vnmoTov4fnqIvkuK3ph43mlrDlo7DmmI7muLLmn5NcclxuLy8gRmlsdGVyTGluayDnu4Tku7bmmK/nuq/nsrnmoLnmja4gcHJvcHMg6L+b6KGM5pu05paw55qE77yM5Y+v5LulIG1lbW8g6L+b6KGM5LyY5YyW77yM5b2TIHByb3BzIOayoeaciei/m+ihjOWPmOWMlueahOaXtuWAme+8jOi/meS4que7hOS7tuS4jeS8muiiq+mHjeaWsOa4suafk1xyXG5cclxuY29uc3QgcGVyX3BhZ2UgPSAyMDtcclxuY29uc3QgRmlsdGVyTGluayA9IG1lbW8oKHsgbmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0pID0+IHtcclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3F1ZXJ5PSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCZsYW5nPSR7bGFuZ31gO1xyXG4gIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8IFwiZGVzY1wifWA7XHJcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuXHJcbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgLy8gaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuXHJcbiAgLy8gY29uc3QgZG9TZWFyY2ggPSAoY29uZmlnKSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nLFxyXG4gIC8vICAgICAgIHNvcnQsXHJcbiAgLy8gICAgICAgb3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gIC8vIOazqOaEjyBhIOagh+etvuS4jeaUvumTvuaOpe+8jOW+iOmavuWOu+WBmiBTRU8g77yM5Zug5Li6IFNFTyDkvJrop6PmnpAgSFRNTCDnmoTlhoXlrrlcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PlxyXG4gICAgICB7LyogaXNWYWxpZEVsZW1lbnQg5piv55So5p2l5Yik5pat5piv5ZCm5Li65LiA5Liq5qCH562+ICovfVxyXG4gICAgICB7aXNWYWxpZEVsZW1lbnQobmFtZSkgPyBuYW1lIDogPGE+e25hbWV9PC9hPn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHJvdXRlciwgcmVwb3MgfSkge1xyXG4gIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICAvLyDms6jmhI/ov5nkupvmlbDmja7pg73msqHmnInlnKggc3RhdGUg6YeM6Z2i5Y675Yib5bu677yM5biM5pyb5piv6L+Z5Lqb6aG16Z2i5pi+56S655qE5YaF5a655a6M5YWo5qC55o2uIHVybCDmnaXlrprnmoTvvIzkvb/lvpfmlbTkuKrnu4Tku7bmmK/kuKrlj5fmjqfnmoTnu4Tku7bvvIzkuI3kvJrkuqfnlJ/ku7vkvZXnmoTlia/kvZznlKjjgIJcclxuXHJcbiAgLy8g6K+l6Lev55Sx5pivIHdpdGhSb3V0ZXIg5Lyg6YCS6L+H5p2l55qEXHJcbiAgY29uc3QgeyAuLi5xdWVyeXMgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IHNvcnQsIG9yZGVyLCBsYW5nLCBwYWdlIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIC8vIOaJp+ihjOi/meS4quaPkuWFpe+8jOavj+asoemhtemdoua4suafk+eahOaXtuWAme+8jOmDveS8muWOu+iwg+eUqOWug1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XHJcblxyXG4gIC8vIOeUqOS6juaLvOaOpei3r+W+hOeahOaWueazlVxyXG4gIC8vIOazqOaEj+ivreiogOWPmOWMluS6hu+8jOS9huaYr+W9k+aXtumAieS4reS6huS4gOS4quaOkuW6j+aWueW8j++8jOWcqOivreiogOWPmOWMlueahOaXtuWAme+8jOS4jeW6lOivpeWPmOWMluWFtuaOkuW6j++8jOaJgOS7peimgeaKiuaOkuW6j+eahOWPguaVsOaUvuWcqCBxdWVyeSDph4zpnaLjgIJcclxuICAvLyBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZzogbGFuZ3VhZ2UsXHJcbiAgLy8gICAgICAgc29ydCxcclxuICAvLyAgICAgICBvcmRlcixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcbiAgLy8gY29uc3QgaGFuZGxlU29ydENoYW5nZSA9IChzb3J0KSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nLFxyXG4gIC8vICAgICAgIHNvcnQ6IHNvcnQudmFsdWUsXHJcbiAgLy8gICAgICAgb3JkZXI6IHNvcnQub3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBndXR0ZXI9ezZ9PlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gaXRlbTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IGxhbmc9e2l0ZW19IG5hbWU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VhcmNoKHsgc29ydCwgb3JkZXIsIHF1ZXJ5LCBsYW5nOiBpdGVtIH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBcIkJlc3QgTWF0Y2hcIiAmJiAhc29ydCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5xdWVyeXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb1NlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGl0ZW0udmFsdWUgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGl0ZW0ub3JkZXIgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH0g5Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgIHtyZXBvcy5pdGVtcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgey8qIGl0ZW1SZW5kZXIg5bCx5piv5oiR5Lus5q+P5LiqIGl0ZW0g5pi+56S655qE5YaF5a6577yMaXRlbVJlbmRlciDlsLHmmK/mr4/kuKogcGFnZSDlr7nlupTnmoTpobXnoIHvvIx0eXBlIOWwseaYr+i/meS4quWIhumhteWQkeWJjei/mOaYr+WQkeWQjui/mOaYr+S4remXtOeahOaMiemSru+8jG9sIOWwseaYr+exu+S8vOS6jiBpY29uIO+8jOazqOaEjyBwYWdlIO+8jCB0eXBlIOmDveaYryBhIOagh+etviAgKi99XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgcGFnZVNpemU9e3Blcl9wYWdlfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxyXG4gICAgICAgICAgICAgIHRvdGFsPXsxMDAwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtub29wfVxyXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhwYWdlLCB0eXBlLCBvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcInByZXZcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcGFnZSAtIDFcclxuICAgICAgICAgICAgICAgICAgICA6IHBhZ2UgKyAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHR5cGUgPT09IFwicGFnZVwiID8gcGFnZSA6IG9sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHBhZ2U9e3B9IG5hbWU9e25hbWV9IC8+O1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvczoge1xyXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9