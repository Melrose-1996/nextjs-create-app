webpackHotUpdate_N_E("pages/search",{

/***/ "./node_modules/antd/lib/_util/styleChecker.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/_util/styleChecker.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFlexGapSupported = exports.isStyleSupport = exports.canUseDocElement = void 0;

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Dom/canUseDom */ "./node_modules/rc-util/lib/Dom/canUseDom.js"));

var canUseDocElement = function canUseDocElement() {
  return (0, _canUseDom["default"])() && window.document.documentElement;
};

exports.canUseDocElement = canUseDocElement;

var isStyleSupport = function isStyleSupport(styleName) {
  if (canUseDocElement()) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};

exports.isStyleSupport = isStyleSupport;
var flexGapSupported;

var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  } // create flex container with row-gap set


  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  document.body.removeChild(flex);
  return flexGapSupported;
};

exports.detectFlexGapSupported = detectFlexGapSupported;

/***/ }),

/***/ "./node_modules/antd/lib/grid/RowContext.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/grid/RowContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var RowContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = RowContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/col.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/col.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }

  return flex;
}

var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = React.useContext(_RowContext["default"]),
      gutter = _React$useContext2.gutter,
      wrap = _React$useContext2.wrap,
      supportFlexGap = _React$useContext2.supportFlexGap;

  var customizePrefixCls = props.prefixCls,
      span = props.span,
      order = props.order,
      offset = props.offset,
      push = props.push,
      pull = props.pull,
      className = props.className,
      children = props.children,
      flex = props.flex,
      style = props.style,
      others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;

    var sizeProps = {};
    var propSize = props[size];

    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0, _typeof2["default"])(propSize) === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];
    sizeClassObj = (0, _extends3["default"])((0, _extends3["default"])({}, sizeClassObj), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = {}; // Horizontal gutter use padding

  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  } // Vertical gutter use padding when gap not support


  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

    if (flex === 'auto' && wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({}, others, {
    style: (0, _extends3["default"])((0, _extends3["default"])({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});
Col.displayName = 'Col';
var _default = Col;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/hooks/useFlexGapSupport.js":
/*!***************************************************************!*\
  !*** ./node_modules/antd/lib/grid/hooks/useFlexGapSupport.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styleChecker = __webpack_require__(/*! ../../_util/styleChecker */ "./node_modules/antd/lib/_util/styleChecker.js");

var _default = function _default() {
  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      flexible = _React$useState2[0],
      setFlexible = _React$useState2[1];

  React.useEffect(function () {
    setFlexible((0, _styleChecker.detectFlexGapSupported)());
  }, []);
  return flexible;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/grid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row["default"];
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col["default"];
  }
});
exports["default"] = void 0;

var _row = _interopRequireDefault(__webpack_require__(/*! ./row */ "./node_modules/antd/lib/grid/row.js"));

var _col = _interopRequireDefault(__webpack_require__(/*! ./col */ "./node_modules/antd/lib/grid/col.js"));

var _useBreakpoint = _interopRequireDefault(__webpack_require__(/*! ./hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var _default = {
  useBreakpoint: _useBreakpoint["default"]
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/row.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/row.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _responsiveObserve = _interopRequireWildcard(__webpack_require__(/*! ../_util/responsiveObserve */ "./node_modules/antd/lib/_util/responsiveObserve.js"));

var _useFlexGapSupport = _interopRequireDefault(__webpack_require__(/*! ./hooks/useFlexGapSupport */ "./node_modules/antd/lib/grid/hooks/useFlexGapSupport.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between');
var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var supportFlexGap = (0, _useFlexGapSupport["default"])();
  var gutterRef = React.useRef(gutter); // ================================== Effect ==================================

  React.useEffect(function () {
    var token = _responsiveObserve["default"].subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && (0, _typeof2["default"])(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0, _typeof2["default"])(currentGutter[0]) === 'object' || (0, _typeof2["default"])(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });

    return function () {
      return _responsiveObserve["default"].unsubscribe(token);
    };
  }, []); // ================================== Render ==================================

  var getGutter = function getGutter() {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach(function (g, index) {
      if ((0, _typeof2["default"])(g) === 'object') {
        for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
          var breakpoint = _responsiveObserve.responsiveArray[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(justify), justify), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(align), align), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // Add gutter related style

  var rowStyle = {};
  var horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
  var verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    var _gutters = (0, _slicedToArray2["default"])(gutters, 2);

    rowStyle.rowGap = _gutters[1];
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  var rowContext = React.useMemo(function () {
    return {
      gutter: gutters,
      wrap: wrap,
      supportFlexGap: supportFlexGap
    };
  }, [gutters, wrap, supportFlexGap]);
  return /*#__PURE__*/React.createElement(_RowContext["default"].Provider, {
    value: rowContext
  }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
    className: classes,
    style: (0, _extends2["default"])((0, _extends2["default"])({}, rowStyle), style),
    ref: ref
  }), children));
});
Row.displayName = 'Row';
var _default = Row;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/row/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _default = _grid.Row;
exports["default"] = _default;

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\lls\\chenzhengquan\\Desktop\\muke-study\\nextjs-create-app\\pages\\search.js";


/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库的项目开发主语言
 * page: 分页页面
 *
 */
var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js"); // 搜索条件


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

function Search(_ref) {
  var router = _ref.router,
      repos = _ref.repos;
  console.log(repos);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "root",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_c = Search;

Search.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$query, query, sort, lang, order, page, queryString, result;

    return D_lls_chenzhengquan_Desktop_muke_study_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(ctx, 11111);
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, order = _ctx$query.order, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            queryString = "?q=".concat(query);
            if (lang) queryString += "+language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || "desc");
            if (page) queryString += "&page=".concat(page);
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
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Search));

var _c, _c2;

$RefreshReg$(_c, "Search");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3N0eWxlQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvUm93Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvY29sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9ob29rcy91c2VGbGV4R2FwU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL3Jvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJMQU5HVUFHRVMiLCJTT1JUX1RZUEUiLCJuYW1lIiwidmFsdWUiLCJvcmRlciIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwic29ydCIsImxhbmciLCJwYWdlIiwidG90YWxfY291bnQiLCJxdWVyeVN0cmluZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSx3Q0FBd0MsbUJBQU8sQ0FBQyw4RUFBMkI7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxL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LDhEQUFVLENBQUNuQixNQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4xM2U3NTI2NzRkYmQ5ODYwMDY3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZXRlY3RGbGV4R2FwU3VwcG9ydGVkID0gZXhwb3J0cy5pc1N0eWxlU3VwcG9ydCA9IGV4cG9ydHMuY2FuVXNlRG9jRWxlbWVudCA9IHZvaWQgMDtcblxudmFyIF9jYW5Vc2VEb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9Eb20vY2FuVXNlRG9tXCIpKTtcblxudmFyIGNhblVzZURvY0VsZW1lbnQgPSBmdW5jdGlvbiBjYW5Vc2VEb2NFbGVtZW50KCkge1xuICByZXR1cm4gKDAsIF9jYW5Vc2VEb21bXCJkZWZhdWx0XCJdKSgpICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59O1xuXG5leHBvcnRzLmNhblVzZURvY0VsZW1lbnQgPSBjYW5Vc2VEb2NFbGVtZW50O1xuXG52YXIgaXNTdHlsZVN1cHBvcnQgPSBmdW5jdGlvbiBpc1N0eWxlU3VwcG9ydChzdHlsZU5hbWUpIHtcbiAgaWYgKGNhblVzZURvY0VsZW1lbnQoKSkge1xuICAgIHZhciBzdHlsZU5hbWVMaXN0ID0gQXJyYXkuaXNBcnJheShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogW3N0eWxlTmFtZV07XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIHN0eWxlTmFtZUxpc3Quc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWUgaW4gZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0cy5pc1N0eWxlU3VwcG9ydCA9IGlzU3R5bGVTdXBwb3J0O1xudmFyIGZsZXhHYXBTdXBwb3J0ZWQ7XG5cbnZhciBkZXRlY3RGbGV4R2FwU3VwcG9ydGVkID0gZnVuY3Rpb24gZGV0ZWN0RmxleEdhcFN1cHBvcnRlZCgpIHtcbiAgaWYgKCFjYW5Vc2VEb2NFbGVtZW50KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZmxleEdhcFN1cHBvcnRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZsZXhHYXBTdXBwb3J0ZWQ7XG4gIH0gLy8gY3JlYXRlIGZsZXggY29udGFpbmVyIHdpdGggcm93LWdhcCBzZXRcblxuXG4gIHZhciBmbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZmxleC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gIGZsZXguc3R5bGUucm93R2FwID0gJzFweCc7IC8vIGNyZWF0ZSB0d28sIGVsZW1lbnRzIGluc2lkZSBpdFxuXG4gIGZsZXguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICBmbGV4LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTsgLy8gYXBwZW5kIHRvIHRoZSBET00gKG5lZWRlZCB0byBvYnRhaW4gc2Nyb2xsSGVpZ2h0KVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmxleCk7XG4gIGZsZXhHYXBTdXBwb3J0ZWQgPSBmbGV4LnNjcm9sbEhlaWdodCA9PT0gMTsgLy8gZmxleCBjb250YWluZXIgc2hvdWxkIGJlIDFweCBoaWdoIGZyb20gdGhlIHJvdy1nYXBcblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZsZXgpO1xuICByZXR1cm4gZmxleEdhcFN1cHBvcnRlZDtcbn07XG5cbmV4cG9ydHMuZGV0ZWN0RmxleEdhcFN1cHBvcnRlZCA9IGRldGVjdEZsZXhHYXBTdXBwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIFJvd0NvbnRleHQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh7fSk7XG52YXIgX2RlZmF1bHQgPSBSb3dDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfUm93Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUm93Q29udGV4dFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gcGFyc2VGbGV4KGZsZXgpIHtcbiAgaWYgKHR5cGVvZiBmbGV4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChmbGV4LCBcIiBcIikuY29uY2F0KGZsZXgsIFwiIGF1dG9cIik7XG4gIH1cblxuICBpZiAoL15cXGQrKFxcLlxcZCspPyhweHxlbXxyZW18JSkkLy50ZXN0KGZsZXgpKSB7XG4gICAgcmV0dXJuIFwiMCAwIFwiLmNvbmNhdChmbGV4KTtcbiAgfVxuXG4gIHJldHVybiBmbGV4O1xufVxuXG52YXIgc2l6ZXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIENvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQyID0gUmVhY3QudXNlQ29udGV4dChfUm93Q29udGV4dFtcImRlZmF1bHRcIl0pLFxuICAgICAgZ3V0dGVyID0gX1JlYWN0JHVzZUNvbnRleHQyLmd1dHRlcixcbiAgICAgIHdyYXAgPSBfUmVhY3QkdXNlQ29udGV4dDIud3JhcCxcbiAgICAgIHN1cHBvcnRGbGV4R2FwID0gX1JlYWN0JHVzZUNvbnRleHQyLnN1cHBvcnRGbGV4R2FwO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBzcGFuID0gcHJvcHMuc3BhbixcbiAgICAgIG9yZGVyID0gcHJvcHMub3JkZXIsXG4gICAgICBvZmZzZXQgPSBwcm9wcy5vZmZzZXQsXG4gICAgICBwdXNoID0gcHJvcHMucHVzaCxcbiAgICAgIHB1bGwgPSBwcm9wcy5wdWxsLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGZsZXggPSBwcm9wcy5mbGV4LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwic3BhblwiLCBcIm9yZGVyXCIsIFwib2Zmc2V0XCIsIFwicHVzaFwiLCBcInB1bGxcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImZsZXhcIiwgXCJzdHlsZVwiXSk7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnY29sJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIHNpemVDbGFzc09iaiA9IHt9O1xuICBzaXplcy5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHZhciBzaXplUHJvcHMgPSB7fTtcbiAgICB2YXIgcHJvcFNpemUgPSBwcm9wc1tzaXplXTtcblxuICAgIGlmICh0eXBlb2YgcHJvcFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICBzaXplUHJvcHMuc3BhbiA9IHByb3BTaXplO1xuICAgIH0gZWxzZSBpZiAoKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkocHJvcFNpemUpID09PSAnb2JqZWN0Jykge1xuICAgICAgc2l6ZVByb3BzID0gcHJvcFNpemUgfHwge307XG4gICAgfVxuXG4gICAgZGVsZXRlIG90aGVyc1tzaXplXTtcbiAgICBzaXplQ2xhc3NPYmogPSAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKHt9LCBzaXplQ2xhc3NPYmopLCAoX2V4dGVuZHMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItXCIpLmNvbmNhdChzaXplUHJvcHMuc3BhbiksIHNpemVQcm9wcy5zcGFuICE9PSB1bmRlZmluZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLW9yZGVyLVwiKS5jb25jYXQoc2l6ZVByb3BzLm9yZGVyKSwgc2l6ZVByb3BzLm9yZGVyIHx8IHNpemVQcm9wcy5vcmRlciA9PT0gMCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItb2Zmc2V0LVwiKS5jb25jYXQoc2l6ZVByb3BzLm9mZnNldCksIHNpemVQcm9wcy5vZmZzZXQgfHwgc2l6ZVByb3BzLm9mZnNldCA9PT0gMCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSwgXCItcHVzaC1cIikuY29uY2F0KHNpemVQcm9wcy5wdXNoKSwgc2l6ZVByb3BzLnB1c2ggfHwgc2l6ZVByb3BzLnB1c2ggPT09IDApLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLXB1bGwtXCIpLmNvbmNhdChzaXplUHJvcHMucHVsbCksIHNpemVQcm9wcy5wdWxsIHx8IHNpemVQcm9wcy5wdWxsID09PSAwKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2V4dGVuZHMyKSk7XG4gIH0pO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzcGFuKSwgc3BhbiAhPT0gdW5kZWZpbmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcmRlci1cIikuY29uY2F0KG9yZGVyKSwgb3JkZXIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9mZnNldC1cIikuY29uY2F0KG9mZnNldCksIG9mZnNldCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHVzaC1cIikuY29uY2F0KHB1c2gpLCBwdXNoKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wdWxsLVwiKS5jb25jYXQocHVsbCksIHB1bGwpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSwgc2l6ZUNsYXNzT2JqKTtcbiAgdmFyIG1lcmdlZFN0eWxlID0ge307IC8vIEhvcml6b250YWwgZ3V0dGVyIHVzZSBwYWRkaW5nXG5cbiAgaWYgKGd1dHRlciAmJiBndXR0ZXJbMF0gPiAwKSB7XG4gICAgdmFyIGhvcml6b250YWxHdXR0ZXIgPSBndXR0ZXJbMF0gLyAyO1xuICAgIG1lcmdlZFN0eWxlLnBhZGRpbmdMZWZ0ID0gaG9yaXpvbnRhbEd1dHRlcjtcbiAgICBtZXJnZWRTdHlsZS5wYWRkaW5nUmlnaHQgPSBob3Jpem9udGFsR3V0dGVyO1xuICB9IC8vIFZlcnRpY2FsIGd1dHRlciB1c2UgcGFkZGluZyB3aGVuIGdhcCBub3Qgc3VwcG9ydFxuXG5cbiAgaWYgKGd1dHRlciAmJiBndXR0ZXJbMV0gPiAwICYmICFzdXBwb3J0RmxleEdhcCkge1xuICAgIHZhciB2ZXJ0aWNhbEd1dHRlciA9IGd1dHRlclsxXSAvIDI7XG4gICAgbWVyZ2VkU3R5bGUucGFkZGluZ1RvcCA9IHZlcnRpY2FsR3V0dGVyO1xuICAgIG1lcmdlZFN0eWxlLnBhZGRpbmdCb3R0b20gPSB2ZXJ0aWNhbEd1dHRlcjtcbiAgfVxuXG4gIGlmIChmbGV4KSB7XG4gICAgbWVyZ2VkU3R5bGUuZmxleCA9IHBhcnNlRmxleChmbGV4KTsgLy8gSGFjayBmb3IgRmlyZWZveCB0byBhdm9pZCBzaXplIGlzc3VlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9wdWxsLzIwMDIzI2lzc3VlY29tbWVudC01NjQzODk1NTNcblxuICAgIGlmIChmbGV4ID09PSAnYXV0bycgJiYgd3JhcCA9PT0gZmFsc2UgJiYgIW1lcmdlZFN0eWxlLm1pbldpZHRoKSB7XG4gICAgICBtZXJnZWRTdHlsZS5taW5XaWR0aCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgc3R5bGU6ICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIG1lcmdlZFN0eWxlKSwgc3R5bGUpLFxuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IHJlZlxuICB9KSwgY2hpbGRyZW4pO1xufSk7XG5Db2wuZGlzcGxheU5hbWUgPSAnQ29sJztcbnZhciBfZGVmYXVsdCA9IENvbDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3N0eWxlQ2hlY2tlciA9IHJlcXVpcmUoXCIuLi8uLi9fdXRpbC9zdHlsZUNoZWNrZXJcIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZmxleGlibGUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmxleGlibGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmxleGlibGUoKDAsIF9zdHlsZUNoZWNrZXIuZGV0ZWN0RmxleEdhcFN1cHBvcnRlZCkoKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGZsZXhpYmxlO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3dcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Jvd1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29sXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb2xbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm93XCIpKTtcblxudmFyIF9jb2wgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbFwiKSk7XG5cbnZhciBfdXNlQnJlYWtwb2ludCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaG9va3MvdXNlQnJlYWtwb2ludFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgdXNlQnJlYWtwb2ludDogX3VzZUJyZWFrcG9pbnRbXCJkZWZhdWx0XCJdXG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Sb3dDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Sb3dDb250ZXh0XCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfcmVzcG9uc2l2ZU9ic2VydmUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmVcIikpO1xuXG52YXIgX3VzZUZsZXhHYXBTdXBwb3J0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob29rcy91c2VGbGV4R2FwU3VwcG9ydFwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgUm93QWxpZ25zID0gKDAsIF90eXBlLnR1cGxlKSgndG9wJywgJ21pZGRsZScsICdib3R0b20nLCAnc3RyZXRjaCcpO1xudmFyIFJvd0p1c3RpZnkgPSAoMCwgX3R5cGUudHVwbGUpKCdzdGFydCcsICdlbmQnLCAnY2VudGVyJywgJ3NwYWNlLWFyb3VuZCcsICdzcGFjZS1iZXR3ZWVuJyk7XG52YXIgUm93ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBqdXN0aWZ5ID0gcHJvcHMuanVzdGlmeSxcbiAgICAgIGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRndXR0ZXIgPSBwcm9wcy5ndXR0ZXIsXG4gICAgICBndXR0ZXIgPSBfcHJvcHMkZ3V0dGVyID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGd1dHRlcixcbiAgICAgIHdyYXAgPSBwcm9wcy53cmFwLFxuICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJqdXN0aWZ5XCIsIFwiYWxpZ25cIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCIsIFwiZ3V0dGVyXCIsIFwid3JhcFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB4czogdHJ1ZSxcbiAgICBzbTogdHJ1ZSxcbiAgICBtZDogdHJ1ZSxcbiAgICBsZzogdHJ1ZSxcbiAgICB4bDogdHJ1ZSxcbiAgICB4eGw6IHRydWVcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBzY3JlZW5zID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFNjcmVlbnMgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBzdXBwb3J0RmxleEdhcCA9ICgwLCBfdXNlRmxleEdhcFN1cHBvcnRbXCJkZWZhdWx0XCJdKSgpO1xuICB2YXIgZ3V0dGVyUmVmID0gUmVhY3QudXNlUmVmKGd1dHRlcik7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlbiA9IF9yZXNwb25zaXZlT2JzZXJ2ZVtcImRlZmF1bHRcIl0uc3Vic2NyaWJlKGZ1bmN0aW9uIChzY3JlZW4pIHtcbiAgICAgIHZhciBjdXJyZW50R3V0dGVyID0gZ3V0dGVyUmVmLmN1cnJlbnQgfHwgMDtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGN1cnJlbnRHdXR0ZXIpICYmICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGN1cnJlbnRHdXR0ZXIpID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnRHdXR0ZXIpICYmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjdXJyZW50R3V0dGVyWzBdKSA9PT0gJ29iamVjdCcgfHwgKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY3VycmVudEd1dHRlclsxXSkgPT09ICdvYmplY3QnKSkge1xuICAgICAgICBzZXRTY3JlZW5zKHNjcmVlbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9yZXNwb25zaXZlT2JzZXJ2ZVtcImRlZmF1bHRcIl0udW5zdWJzY3JpYmUodG9rZW4pO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBnZXRHdXR0ZXIgPSBmdW5jdGlvbiBnZXRHdXR0ZXIoKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbMCwgMF07XG4gICAgdmFyIG5vcm1hbGl6ZWRHdXR0ZXIgPSBBcnJheS5pc0FycmF5KGd1dHRlcikgPyBndXR0ZXIgOiBbZ3V0dGVyLCAwXTtcbiAgICBub3JtYWxpemVkR3V0dGVyLmZvckVhY2goZnVuY3Rpb24gKGcsIGluZGV4KSB7XG4gICAgICBpZiAoKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoZykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3Jlc3BvbnNpdmVPYnNlcnZlLnJlc3BvbnNpdmVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBicmVha3BvaW50ID0gX3Jlc3BvbnNpdmVPYnNlcnZlLnJlc3BvbnNpdmVBcnJheVtpXTtcblxuICAgICAgICAgIGlmIChzY3JlZW5zW2JyZWFrcG9pbnRdICYmIGdbYnJlYWtwb2ludF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSBnW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2luZGV4XSA9IGcgfHwgMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdyb3cnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgZ3V0dGVycyA9IGdldEd1dHRlcigpO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm8td3JhcFwiKSwgd3JhcCA9PT0gZmFsc2UpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoanVzdGlmeSksIGp1c3RpZnkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYWxpZ24pLCBhbGlnbiksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpOyAvLyBBZGQgZ3V0dGVyIHJlbGF0ZWQgc3R5bGVcblxuICB2YXIgcm93U3R5bGUgPSB7fTtcbiAgdmFyIGhvcml6b250YWxHdXR0ZXIgPSBndXR0ZXJzWzBdID4gMCA/IGd1dHRlcnNbMF0gLyAtMiA6IHVuZGVmaW5lZDtcbiAgdmFyIHZlcnRpY2FsR3V0dGVyID0gZ3V0dGVyc1sxXSA+IDAgPyBndXR0ZXJzWzFdIC8gLTIgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKGhvcml6b250YWxHdXR0ZXIpIHtcbiAgICByb3dTdHlsZS5tYXJnaW5MZWZ0ID0gaG9yaXpvbnRhbEd1dHRlcjtcbiAgICByb3dTdHlsZS5tYXJnaW5SaWdodCA9IGhvcml6b250YWxHdXR0ZXI7XG4gIH1cblxuICBpZiAoc3VwcG9ydEZsZXhHYXApIHtcbiAgICAvLyBTZXQgZ2FwIGRpcmVjdCBpZiBmbGV4IGdhcCBzdXBwb3J0XG4gICAgdmFyIF9ndXR0ZXJzID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKGd1dHRlcnMsIDIpO1xuXG4gICAgcm93U3R5bGUucm93R2FwID0gX2d1dHRlcnNbMV07XG4gIH0gZWxzZSBpZiAodmVydGljYWxHdXR0ZXIpIHtcbiAgICByb3dTdHlsZS5tYXJnaW5Ub3AgPSB2ZXJ0aWNhbEd1dHRlcjtcbiAgICByb3dTdHlsZS5tYXJnaW5Cb3R0b20gPSB2ZXJ0aWNhbEd1dHRlcjtcbiAgfVxuXG4gIHZhciByb3dDb250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGd1dHRlcjogZ3V0dGVycyxcbiAgICAgIHdyYXA6IHdyYXAsXG4gICAgICBzdXBwb3J0RmxleEdhcDogc3VwcG9ydEZsZXhHYXBcbiAgICB9O1xuICB9LCBbZ3V0dGVycywgd3JhcCwgc3VwcG9ydEZsZXhHYXBdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Sb3dDb250ZXh0W1wiZGVmYXVsdFwiXS5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByb3dDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHN0eWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByb3dTdHlsZSksIHN0eWxlKSxcbiAgICByZWY6IHJlZlxuICB9KSwgY2hpbGRyZW4pKTtcbn0pO1xuUm93LmRpc3BsYXlOYW1lID0gJ1Jvdyc7XG52YXIgX2RlZmF1bHQgPSBSb3c7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZ3JpZCA9IHJlcXVpcmUoXCIuLi9ncmlkXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBfZ3JpZC5Sb3c7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcclxuLyoqXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobXpobXpnaJcclxuICpcclxuICovXHJcblxyXG5jb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbi8vIOaQnOe0ouadoeS7tlxyXG5jb25zdCBMQU5HVUFHRVMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIlR5cGVTY3JpcHRcIiwgXCJKYXZhXCIsIFwiUnVzdFwiXTtcclxuXHJcbmNvbnN0IFNPUlRfVFlQRSA9IFtcclxuICB7IG5hbWU6IFwiQmVzdCBNYXRjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IEZvcmtzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHJvdXRlciwgcmVwb3MgfSkge1xyXG4gIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3c+PC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eCwgMTExMTEpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVwb3M6IHtcclxuICAgICAgICB0b3RhbF9jb3VudDogMCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWA7XHJcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWA7XHJcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgXCJkZXNjXCJ9YDtcclxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==