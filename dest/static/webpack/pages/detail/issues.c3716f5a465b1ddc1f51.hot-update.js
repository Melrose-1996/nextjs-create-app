webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./components/SearchUser.jsx":
/*!***********************************!*\
  !*** ./components/SearchUser.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\components\\SearchUser.jsx",
    _s = $RefreshSig$();



var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

function SearchUser() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var fetchUser = function fetchUser(value) {
    setFetching(true);
    setOptions([]); // 不需要传入 req 和 res ，因为这是一个要用户点输入才会执行的操作，肯定是在浏览器环境执行的内容

    _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (reps) {
      var data = reps.data.items.map(function (user) {
        return {
          text: user.login,
          value: user.login
        };
      });
      setFetching(false);
      setOptions(data);
    });
  }; // showSearch -> 表示的是 select 具有搜索功能
  // filterOption -> 用于 Select 组件现成已经有 Option 来出现了，这个时候我们输入框中输入文字，是输入我们现有的已经在 Option 里面的展示的这些内容。 因为我们要展示服务端的内容，所以设置为 false。


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    showSearch: true,
    notFoundContent: fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 66
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      children: "Nothing Found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 90
    }, this),
    filterOption: false,
    placeholder: "\u521B\u5EFA\u8005",
    allowClear: true,
    onSearch: fetchUser,
    children: options.map(function (ops) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
        value: ops.value,
        children: ops.text
      }, ops.value, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 32
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 12
  }, this);
}

_s(SearchUser, "AUpXBd5o9VOz09DOLFL33RRAChQ=");

_c = SearchUser;

var _c;

$RefreshReg$(_c, "SearchUser");

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

/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckOutlined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/CheckOutlined.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
exports.default = CheckOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
exports.default = DownOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/CheckOutlined.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ant-design/icons/CheckOutlined.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/CheckOutlined */ "./node_modules/@ant-design/icons/lib/icons/CheckOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _CheckOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/DownOutlined.js":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/DownOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/DownOutlined */ "./node_modules/@ant-design/icons/lib/icons/DownOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _DownOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/CheckOutlined.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/CheckOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/CheckOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _CheckOutlined.default
  }));
};

CheckOutlined.displayName = 'CheckOutlined';

var _default = /*#__PURE__*/React.forwardRef(CheckOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/DownOutlined.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/DownOutlined.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/DownOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _DownOutlined.default
  }));
};

DownOutlined.displayName = 'DownOutlined';

var _default = /*#__PURE__*/React.forwardRef(DownOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/select/index.js ***!
  \***********************************************/
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

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcSelect = _interopRequireWildcard(__webpack_require__(/*! rc-select */ "./node_modules/rc-select/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _iconUtil = _interopRequireDefault(__webpack_require__(/*! ./utils/iconUtil */ "./node_modules/antd/lib/select/utils/iconUtil.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _motion = __webpack_require__(/*! ../_util/motion */ "./node_modules/antd/lib/_util/motion.js");

// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
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

var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

var InternalSelect = function InternalSelect(_a, ref) {
  var _classNames2;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      className = _a.className,
      getPopupContainer = _a.getPopupContainer,
      dropdownClassName = _a.dropdownClassName,
      _a$listHeight = _a.listHeight,
      listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
      _a$listItemHeight = _a.listItemHeight,
      listItemHeight = _a$listItemHeight === void 0 ? 24 : _a$listItemHeight,
      customizeSize = _a.size,
      notFoundContent = _a.notFoundContent,
      props = __rest(_a, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;

  var size = React.useContext(_SizeContext["default"]);
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var mode = React.useMemo(function () {
    var m = props.mode;

    if (m === 'combobox') {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return m;
  }, [props.mode]);
  var isMultiple = mode === 'multiple' || mode === 'tags'; // ===================== Empty =====================

  var mergedNotFound;

  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty('Select');
  } // ===================== Icons =====================


  var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, props), {
    multiple: isMultiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      itemIcon = _getIcons.itemIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon;

  var selectProps = (0, _omit["default"])(props, ['suffixIcon', 'itemIcon']);
  var rcSelectRtlDropDownClassName = (0, _classnames["default"])(dropdownClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
  var mergedSize = customizeSize || size;
  var mergedClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className);
  return /*#__PURE__*/React.createElement(_rcSelect["default"], (0, _extends2["default"])({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, selectProps, {
    transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'slide-up', props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropDownClassName
  }));
};

var SelectRef = /*#__PURE__*/React.forwardRef(InternalSelect);
var Select = SelectRef;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
var _default = Select;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/utils/iconUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/select/utils/iconUtil.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getIcons;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/@ant-design/icons/DownOutlined.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/SearchOutlined */ "./node_modules/@ant-design/icons/SearchOutlined.js"));

function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      prefixCls = _ref.prefixCls;
  // Clear Icon
  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
          showSearch = _ref2.showSearch;

      if (open && showSearch) {
        return /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
          className: iconCls
        });
      }

      return /*#__PURE__*/React.createElement(_DownOutlined["default"], {
        className: iconCls
      });
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

/***/ }),

/***/ "./node_modules/rc-overflow/es/Item.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-overflow/es/Item.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");






function Item(props) {
  var prefixCls = props.prefixCls,
      item = props.item,
      renderItem = props.renderItem,
      responsive = props.responsive,
      registerSize = props.registerSize,
      itemKey = props.itemKey,
      className = props.className,
      style = props.style,
      children = props.children,
      display = props.display,
      order = props.order,
      Component = props.component,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["prefixCls", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"]);

  var mergedHidden = responsive && !display; // ================================ Effect ================================

  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []); // ================================ Render ================================

  var childNode = item !== undefined ? renderItem(item) : children;
  var itemNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, className),
    style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
      opacity: mergedHidden ? 0.2 : 1,
      height: mergedHidden ? 0 : undefined,
      overflowY: mergedHidden ? 'hidden' : undefined,
      order: responsive ? order : undefined,
      pointerEvents: mergedHidden ? 'none' : undefined
    }, style)
  }, restProps), childNode);

  if (responsive) {
    itemNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      }
    }, itemNode);
  }

  return itemNode;
}

/***/ }),

/***/ "./node_modules/rc-overflow/es/Overflow.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-overflow/es/Overflow.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./node_modules/rc-overflow/es/Item.js");
/* harmony import */ var _hooks_useBatchFrameState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useBatchFrameState */ "./node_modules/rc-overflow/es/hooks/useBatchFrameState.js");









var RESPONSIVE = 'responsive';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}

function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      renderItem = props.renderItem,
      itemKey = props.itemKey,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
      style = props.style,
      className = props.className,
      maxCount = props.maxCount,
      _props$renderRest = props.renderRest,
      renderRest = _props$renderRest === void 0 ? defaultRenderRest : _props$renderRest,
      renderItemProps = props.renderItemProps,
      suffix = props.suffix,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$itemComponent = props.itemComponent,
      itemComponent = _props$itemComponent === void 0 ? 'div' : _props$itemComponent,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["prefixCls", "data", "renderItem", "itemKey", "itemWidth", "style", "className", "maxCount", "renderRest", "renderItemProps", "suffix", "component", "itemComponent"]);

  var createUseState = Object(_hooks_useBatchFrameState__WEBPACK_IMPORTED_MODULE_7__["useBatchFrameState"])();

  var _createUseState = createUseState(0),
      _createUseState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_createUseState, 2),
      containerWidth = _createUseState2[0],
      setContainerWidth = _createUseState2[1];

  var _createUseState3 = createUseState(new Map()),
      _createUseState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_createUseState3, 2),
      itemWidths = _createUseState4[0],
      setItemWidths = _createUseState4[1];

  var _createUseState5 = createUseState(0),
      _createUseState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_createUseState5, 2),
      prevRestWidth = _createUseState6[0],
      setPrevRestWidth = _createUseState6[1];

  var _createUseState7 = createUseState(0),
      _createUseState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_createUseState7, 2),
      restWidth = _createUseState8[0],
      setRestWidth = _createUseState8[1];

  var _createUseState9 = createUseState(0),
      _createUseState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_createUseState9, 2),
      suffixWidth = _createUseState10[0],
      setSuffixWidth = _createUseState10[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      suffixFixedStart = _useState2[0],
      setSuffixFixedStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      displayCount = _useState4[0],
      setDisplayCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      restReady = _useState6[0],
      setRestReady = _useState6[1];

  var itemPrefixCls = "".concat(prefixCls, "-item"); // Always use the max width to avoid blink

  var mergedRestWidth = Math.max(prevRestWidth, restWidth); // ================================= Data =================================

  var isResponsive = data.length && maxCount === RESPONSIVE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */

  var showRest = isResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var items = data;

    if (isResponsive) {
      items = data.slice(0, Math.min(data.length, containerWidth / itemWidth));
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }

    return items;
  }, [data, itemWidth, containerWidth, maxCount, isResponsive]);
  var omittedItems = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    if (isResponsive) {
      return data.slice(displayCount + 1);
    }

    return data.slice(mergedData.length);
  }, [data, mergedData, isResponsive, displayCount]); // ================================= Item =================================

  var getKey = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (item, index) {
    var _ref;

    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(renderItem || function (item) {
    return item;
  }, [renderItem]);

  function updateDisplayCount(count, notReady) {
    setDisplayCount(count);

    if (!notReady) {
      setRestReady(count < data.length - 1);
    }
  } // ================================= Size =================================


  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }

  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);

      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }

      return clone;
    });
  }

  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }

  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  } // ================================ Effect ================================


  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }

  react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"](function () {
    if (containerWidth && mergedRestWidth && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

      if (!len) {
        updateDisplayCount(0);
        setSuffixFixedStart(null);
        return;
      }

      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i); // Break since data not ready

        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, true);
          break;
        } // Find best match


        totalWidth += currentItemWidth;

        if (i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= containerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex);
          setSuffixFixedStart(null);
          break;
        } else if (totalWidth + mergedRestWidth > containerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1);
          setSuffixFixedStart(totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        } else if (i === lastIndex) {
          // Reach the end
          updateDisplayCount(lastIndex);
          setSuffixFixedStart(totalWidth - suffixWidth);
          break;
        }
      }

      if (suffix && getItemWidth(0) + suffixWidth > containerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [containerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]); // ================================ Render ================================

  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};

  if (suffixFixedStart !== null && isResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }

  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: isResponsive,
    component: itemComponent
  };
  var overflowNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= displayCount
    }, renderItemProps === null || renderItemProps === void 0 ? void 0 : renderItemProps(item)));
  }), showRest ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, itemSharedProps, {
    // When not show, order should be the last
    order: displayRest ? displayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  }), typeof renderRest === 'function' ? renderRest(omittedItems) : renderRest) : null, suffix && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, itemSharedProps, {
    order: displayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));

  if (isResponsive) {
    overflowNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onResize: onOverflowResize
    }, overflowNode);
  }

  return overflowNode;
}

var ForwardOverflow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](Overflow);
ForwardOverflow.displayName = 'Overflow'; // Convert to generic type

/* harmony default export */ __webpack_exports__["default"] = (ForwardOverflow);

/***/ }),

/***/ "./node_modules/rc-overflow/es/hooks/useBatchFrameState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rc-overflow/es/hooks/useBatchFrameState.js ***!
  \*****************************************************************/
/*! exports provided: useBatchFrameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBatchFrameState", function() { return useBatchFrameState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");



/**
 * State generate. Return a `setState` but it will flush all state with one render to save perf.
 * This is not a realization of `unstable_batchedUpdates`.
 */

function useBatchFrameState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      forceUpdate = _useState2[1];

  var statesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var walkingIndex = 0;
  var beforeFrameId = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function createState(defaultValue) {
    var myIndex = walkingIndex;
    walkingIndex += 1; // Fill value if not exist yet

    if (statesRef.current.length < myIndex + 1) {
      statesRef.current[myIndex] = defaultValue;
    } // Return filled as `setState`


    var value = statesRef.current[myIndex];

    function setValue(val) {
      statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;
      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(beforeFrameId); // Flush with batch

      beforeFrameId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        if (!destroyRef.current) {
          forceUpdate({});
        }
      });
    }

    return [value, setValue];
  }

  return createState;
}

/***/ }),

/***/ "./node_modules/rc-overflow/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-overflow/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overflow */ "./node_modules/rc-overflow/es/Overflow.js");

/* harmony default export */ __webpack_exports__["default"] = (_Overflow__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-select/es/OptGroup.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/OptGroup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};

OptGroup.isSelectOptGroup = true;
/* harmony default export */ __webpack_exports__["default"] = (OptGroup);

/***/ }),

/***/ "./node_modules/rc-select/es/Option.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Option.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;
/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./node_modules/rc-select/es/OptionList.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-select/es/OptionList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/hooks/useMemo */ "./node_modules/rc-util/es/hooks/useMemo.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_virtual_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-virtual-list */ "./node_modules/rc-virtual-list/es/index.js");
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransBtn */ "./node_modules/rc-select/es/TransBtn.js");











/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */

var OptionList = function OptionList(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      flattenOptions = _ref.flattenOptions,
      childrenAsData = _ref.childrenAsData,
      values = _ref.values,
      searchValue = _ref.searchValue,
      multiple = _ref.multiple,
      defaultActiveFirstOption = _ref.defaultActiveFirstOption,
      height = _ref.height,
      itemHeight = _ref.itemHeight,
      notFoundContent = _ref.notFoundContent,
      open = _ref.open,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      virtual = _ref.virtual,
      onSelect = _ref.onSelect,
      onToggleOpen = _ref.onToggleOpen,
      onActiveValue = _ref.onActiveValue,
      onScroll = _ref.onScroll,
      onMouseEnter = _ref.onMouseEnter;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = Object(rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // =========================== List ===========================

  var listRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);

  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var scrollIntoView = function scrollIntoView(index) {
    if (listRef.current) {
      listRef.current.scrollTo({
        index: index
      });
    }
  }; // ========================== Active ==========================


  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;

    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
          group = _memoFlattenOptions$c.group,
          data = _memoFlattenOptions$c.data;

      if (!group && !data.disabled) {
        return current;
      }
    }

    return -1;
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](function () {
    return getEnabledActiveIndex(0);
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    }; // Trigger active event

    var flattenItem = memoFlattenOptions[index];

    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }

    onActiveValue(flattenItem.data.value, index, info);
  }; // Auto active first item when list length or searchValue changed


  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]); // Auto scroll to item position in single mode

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && values.size === 1) {
        var value = Array.from(values)[0];
        var index = memoFlattenOptions.findIndex(function (_ref2) {
          var data = _ref2.data;
          return data.value === value;
        });
        setActive(index);
        scrollIntoView(index);
      }
    }); // Force trigger scrollbar visible when open

    if (open) {
      var _listRef$current;

      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open]); // ========================== Values ==========================

  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !values.has(value)
      });
    } // Single mode should always close by select


    if (!multiple) {
      onToggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"](ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].UP:
          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].DOWN:
            {
              var offset = 0;

              if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].UP) {
                offset = -1;
              } else if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.data.value);
              } else {
                onSelectValue(undefined);
              }

              if (open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ESC:
            {
              onToggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  }); // ========================== Render ==========================

  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value,
        label = itemData.label,
        children = itemData.children;
    var attrs = Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_6__["default"])(itemData, true);
    var mergedLabel = childrenAsData ? children : label;
    return item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      "aria-label": typeof mergedLabel === 'string' ? mergedLabel : null
    }, attrs, {
      key: index,
      role: "option",
      id: "".concat(id, "_list_").concat(index),
      "aria-selected": values.has(value)
    }), value) : null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    role: "listbox",
    id: "".concat(id, "_list"),
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }, renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_virtual_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: height,
    itemHeight: itemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onScroll,
    virtual: virtual,
    onMouseEnter: onMouseEnter
  }, function (_ref3, itemIndex) {
    var _classNames;

    var group = _ref3.group,
        groupOption = _ref3.groupOption,
        data = _ref3.data;
    var label = data.label,
        key = data.key; // Group

    if (group) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
      }, label !== undefined ? label : key);
    }

    var disabled = data.disabled,
        value = data.value,
        title = data.title,
        children = data.children,
        style = data.style,
        className = data.className,
        otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(data, ["disabled", "value", "title", "children", "style", "className"]); // Option


    var selected = values.has(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = childrenAsData ? children : label;
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
    var content = mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

    var optionTitle = typeof content === 'string' || typeof content === 'number' ? content.toString() : undefined;

    if (title !== undefined) {
      optionTitle = title;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, otherProps, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }

        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"](menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};

var RefOptionList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ __webpack_exports__["default"] = (RefOptionList);

/***/ }),

/***/ "./node_modules/rc-select/es/Select.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Select.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _OptionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptionList */ "./node_modules/rc-select/es/OptionList.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Option */ "./node_modules/rc-select/es/Option.js");
/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OptGroup */ "./node_modules/rc-select/es/OptGroup.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/legacyUtil */ "./node_modules/rc-select/es/utils/legacyUtil.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-select/es/utils/valueUtil.js");
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generate */ "./node_modules/rc-select/es/generate.js");
/* harmony import */ var _utils_warningPropsUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/warningPropsUtil */ "./node_modules/rc-select/es/utils/warningPropsUtil.js");






/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */








var RefSelect = Object(_generate__WEBPACK_IMPORTED_MODULE_11__["default"])({
  prefixCls: 'rc-select',
  components: {
    optionList: _OptionList__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  convertChildrenToData: _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_9__["convertChildrenToData"],
  flattenOptions: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__["flattenOptions"],
  getLabeledValue: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__["getLabeledValue"],
  filterOptions: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__["filterOptions"],
  isValueDisabled: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__["isValueDisabled"],
  findValueOption: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__["findValueOption"],
  warningProps: _utils_warningPropsUtil__WEBPACK_IMPORTED_MODULE_12__["default"],
  fillOptionsWithMissingValue: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_10__["fillOptionsWithMissingValue"]
});
/**
 * Typescript not support generic with function component,
 * we have to wrap an class component to handle this.
 */

var Select = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Select);

  function Select() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Select);

    _this = _super.apply(this, arguments);
    _this.selectRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createRef"]();

    _this.focus = function () {
      _this.selectRef.current.focus();
    };

    _this.blur = function () {
      _this.selectRef.current.blur();
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Select, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](RefSelect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this.selectRef
      }, this.props));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Select.Option = _Option__WEBPACK_IMPORTED_MODULE_7__["default"];
Select.OptGroup = _OptGroup__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./node_modules/rc-select/es/SelectTrigger.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-select/es/SelectTrigger.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);








var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = typeof dropdownMatchSelectWidth !== 'number' ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
      disabled = props.disabled,
      visible = props.visible,
      children = props.children,
      popupElement = props.popupElement,
      containerWidth = props.containerWidth,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      empty = props.empty,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode"]);

  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;

  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }

  var builtInPlacements = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

  var popupRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"](ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });

  var popupStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({
    minWidth: containerWidth
  }, dropdownStyle);

  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
    showAction: [],
    hideAction: [],
    popupPlacement: direction === 'rtl' ? 'bottomRight' : 'bottomLeft',
    builtinPlacements: builtInPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      ref: popupRef
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames__WEBPACK_IMPORTED_MODULE_6___default()(dropdownClassName, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode
  }), children);
};

var RefSelectTrigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ __webpack_exports__["default"] = (RefSelectTrigger);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/Input.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/Input.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");





var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputElement = _ref.inputElement,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      editable = _ref.editable,
      accessibilityIndex = _ref.accessibilityIndex,
      value = _ref.value,
      maxLength = _ref.maxLength,
      _onKeyDown = _ref.onKeyDown,
      _onMouseDown = _ref.onMouseDown,
      _onChange = _ref.onChange,
      onPaste = _ref.onPaste,
      _onCompositionStart = _ref.onCompositionStart,
      _onCompositionEnd = _ref.onCompositionEnd,
      open = _ref.open,
      attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", null);
  var _inputNode = inputNode,
      originRef = _inputNode.ref,
      _inputNode$props = _inputNode.props,
      onOriginKeyDown = _inputNode$props.onKeyDown,
      onOriginChange = _inputNode$props.onChange,
      onOriginMouseDown = _inputNode$props.onMouseDown,
      onOriginCompositionStart = _inputNode$props.onCompositionStart,
      onOriginCompositionEnd = _inputNode$props.onCompositionEnd,
      style = _inputNode$props.style;
  inputNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](inputNode, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: id,
    ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    type: 'search',
    autoFocus: autoFocus,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), {}, {
      opacity: editable ? null : 0
    }),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': "".concat(id, "_list_").concat(accessibilityIndex)
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);

      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);

      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);

      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);

      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);

      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};

var RefInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](Input);
RefInput.displayName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (RefInput);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/MultipleSelector.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/MultipleSelector.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var rc_overflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-overflow */ "./node_modules/rc-overflow/es/index.js");
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TransBtn */ "./node_modules/rc-select/es/TransBtn.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input */ "./node_modules/rc-select/es/Selector/Input.js");
/* harmony import */ var _hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useLayoutEffect */ "./node_modules/rc-select/es/hooks/useLayoutEffect.js");











var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onToggleOpen = props.onToggleOpen,
      onSelect = props.onSelect,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      inputWidth = _useState2[0],
      setInputWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var selectionPrefixCls = "".concat(prefixCls, "-selection"); // ===================== Search ======================

  var inputValue = open || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || showSearch && (open || focused); // We measure width and set to the input immediately

  Object(_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest

  function defaultRenderSelector(content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(selectionPrefixCls, "-item"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }

  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }

  function renderItem(_ref) {
    var itemDisabled = _ref.disabled,
        label = _ref.label,
        value = _ref.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;

    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onSelect(value, {
        selected: false
      });
    };

    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(displayLabel, itemDisabled, closable, onClose);
  }

  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector(content, false);
  } // >>> Input Node


  var inputNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_4__["default"])(props, true)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0")); // >>> Selections

  var selectionNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_overflow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: "key",
    maxCount: maxTagCount
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, selectionNode, !values.length && !inputValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSelector);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/SingleSelector.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/SingleSelector.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./node_modules/rc-select/es/Selector/Input.js");





var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      id = props.id,
      inputRef = props.inputRef,
      disabled = props.disabled,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      mode = props.mode,
      open = props.open,
      values = props.values,
      placeholder = props.placeholder,
      tabIndex = props.tabIndex,
      showSearch = props.showSearch,
      searchValue = props.searchValue,
      activeValue = props.activeValue,
      maxLength = props.maxLength,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      inputChanged = _React$useState2[0],
      setInputChanged = _React$useState2[1];

  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';

  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]); // Not show text when closed expect combobox mode

  var hasTextInput = mode !== 'combobox' && !open ? false : !!inputValue;
  var title = item && (typeof item.label === 'string' || typeof item.label === 'number') ? item.label.toString() : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item && !hasTextInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: title
  }, item.label), !item && !hasTextInput && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-placeholder")
  }, placeholder));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleSelector);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var _MultipleSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MultipleSelector */ "./node_modules/rc-select/es/Selector/MultipleSelector.js");
/* harmony import */ var _SingleSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleSelector */ "./node_modules/rc-select/es/Selector/SingleSelector.js");
/* harmony import */ var _hooks_useLock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useLock */ "./node_modules/rc-select/es/hooks/useLock.js");



/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */







var Selector = function Selector(props, ref) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var compositionStatusRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  var prefixCls = props.prefixCls,
      multiple = props.multiple,
      open = props.open,
      mode = props.mode,
      showSearch = props.showSearch,
      tokenWithEnter = props.tokenWithEnter,
      onSearch = props.onSearch,
      onSearchSubmit = props.onSearchSubmit,
      onToggleOpen = props.onToggleOpen,
      onInputKeyDown = props.onInputKeyDown,
      domRef = props.domRef; // ======================= Ref =======================

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }); // ====================== Input ======================

  var _useLock = Object(_hooks_useLock__WEBPACK_IMPORTED_MODULE_6__["default"])(0),
      _useLock2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];

  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;

    if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].UP || which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].DOWN) {
      event.preventDefault();
    }

    if (onInputKeyDown) {
      onInputKeyDown(event);
    }

    if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit(event.target.value);
    }

    if (![rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].SHIFT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].TAB, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].BACKSPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].ESC].includes(which)) {
      onToggleOpen(true);
    }
  };
  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */


  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  }; // When paste come, ignore next onChange


  var pastedTextRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };

  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };

  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false; // Trigger search again to support `tokenSeparators` with typewriting

    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };

  var onInputChange = function onInputChange(event) {
    var value = event.target.value; // Pasted text should replace back to origin content

    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }

    pastedTextRef.current = null;
    triggerOnSearch(value);
  };

  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };

  var onClick = function onClick(_ref) {
    var target = _ref.target;

    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;

      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    if (event.target !== inputRef.current && !inputMouseDown) {
      event.preventDefault();
    }

    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open) {
        onSearch('', true, false);
      }

      onToggleOpen();
    }
  }; // ================= Inner Selector ==================


  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_MultipleSelector__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, sharedProps)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_SingleSelector__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, sharedProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};

var ForwardSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ __webpack_exports__["default"] = (ForwardSelector);

/***/ }),

/***/ "./node_modules/rc-select/es/TransBtn.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/TransBtn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
      customizeIcon = _ref.customizeIcon,
      customizeIconProps = _ref.customizeIconProps,
      _onMouseDown = _ref.onMouseDown,
      onClick = _ref.onClick,
      children = _ref.children;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (TransBtn);

/***/ }),

/***/ "./node_modules/rc-select/es/generate.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/generate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateSelector; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Selector */ "./node_modules/rc-select/es/Selector/index.js");
/* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectTrigger */ "./node_modules/rc-select/es/SelectTrigger.js");
/* harmony import */ var _interface_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interface/generator */ "./node_modules/rc-select/es/interface/generator.js");
/* harmony import */ var _utils_commonUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TransBtn */ "./node_modules/rc-select/es/TransBtn.js");
/* harmony import */ var _hooks_useLock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useLock */ "./node_modules/rc-select/es/hooks/useLock.js");
/* harmony import */ var _hooks_useDelayReset__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hooks/useDelayReset */ "./node_modules/rc-select/es/hooks/useDelayReset.js");
/* harmony import */ var _hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hooks/useLayoutEffect */ "./node_modules/rc-select/es/hooks/useLayoutEffect.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-select/es/utils/valueUtil.js");
/* harmony import */ var _hooks_useSelectTriggerControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hooks/useSelectTriggerControl */ "./node_modules/rc-select/es/hooks/useSelectTriggerControl.js");
/* harmony import */ var _hooks_useCacheDisplayValue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/useCacheDisplayValue */ "./node_modules/rc-select/es/hooks/useCacheDisplayValue.js");
/* harmony import */ var _hooks_useCacheOptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hooks/useCacheOptions */ "./node_modules/rc-select/es/hooks/useCacheOptions.js");







/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 */


















var DEFAULT_OMIT_PROPS = ['removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'tabIndex'];
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */

function generateSelector(config) {
  var defaultPrefixCls = config.prefixCls,
      OptionList = config.components.optionList,
      convertChildrenToData = config.convertChildrenToData,
      flattenOptions = config.flattenOptions,
      getLabeledValue = config.getLabeledValue,
      filterOptions = config.filterOptions,
      isValueDisabled = config.isValueDisabled,
      findValueOption = config.findValueOption,
      warningProps = config.warningProps,
      fillOptionsWithMissingValue = config.fillOptionsWithMissingValue,
      omitDOMProps = config.omitDOMProps; // Use raw define since `React.FC` not support generic

  function Select(props, ref) {
    var _classNames2;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? defaultPrefixCls : _props$prefixCls,
        className = props.className,
        id = props.id,
        open = props.open,
        defaultOpen = props.defaultOpen,
        options = props.options,
        children = props.children,
        mode = props.mode,
        value = props.value,
        defaultValue = props.defaultValue,
        labelInValue = props.labelInValue,
        showSearch = props.showSearch,
        inputValue = props.inputValue,
        searchValue = props.searchValue,
        filterOption = props.filterOption,
        filterSort = props.filterSort,
        _props$optionFilterPr = props.optionFilterProp,
        optionFilterProp = _props$optionFilterPr === void 0 ? 'value' : _props$optionFilterPr,
        _props$autoClearSearc = props.autoClearSearchValue,
        autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
        onSearch = props.onSearch,
        allowClear = props.allowClear,
        clearIcon = props.clearIcon,
        showArrow = props.showArrow,
        inputIcon = props.inputIcon,
        menuItemSelectedIcon = props.menuItemSelectedIcon,
        disabled = props.disabled,
        loading = props.loading,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        _props$notFoundConten = props.notFoundContent,
        notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
        optionLabelProp = props.optionLabelProp,
        backfill = props.backfill,
        tabIndex = props.tabIndex,
        getInputElement = props.getInputElement,
        getPopupContainer = props.getPopupContainer,
        _props$listHeight = props.listHeight,
        listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
        _props$listItemHeight = props.listItemHeight,
        listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
        animation = props.animation,
        transitionName = props.transitionName,
        virtual = props.virtual,
        dropdownStyle = props.dropdownStyle,
        dropdownClassName = props.dropdownClassName,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
        dropdownRender = props.dropdownRender,
        dropdownAlign = props.dropdownAlign,
        _props$showAction = props.showAction,
        showAction = _props$showAction === void 0 ? [] : _props$showAction,
        direction = props.direction,
        tokenSeparators = props.tokenSeparators,
        tagRender = props.tagRender,
        onPopupScroll = props.onPopupScroll,
        onDropdownVisibleChange = props.onDropdownVisibleChange,
        onFocus = props.onFocus,
        onBlur = props.onBlur,
        onKeyUp = props.onKeyUp,
        onKeyDown = props.onKeyDown,
        onMouseDown = props.onMouseDown,
        onChange = props.onChange,
        onSelect = props.onSelect,
        onDeselect = props.onDeselect,
        onClear = props.onClear,
        _props$internalProps = props.internalProps,
        internalProps = _props$internalProps === void 0 ? {} : _props$internalProps,
        restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(props, ["prefixCls", "className", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "filterSort", "optionFilterProp", "autoClearSearchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "tabIndex", "getInputElement", "getPopupContainer", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]);

    var useInternalProps = internalProps.mark === _interface_generator__WEBPACK_IMPORTED_MODULE_13__["INTERNAL_PROPS_MARK"];
    var domProps = omitDOMProps ? omitDOMProps(restProps) : restProps;
    DEFAULT_OMIT_PROPS.forEach(function (prop) {
      delete domProps[prop];
    });
    var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
    var triggerRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
    var selectorRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
    var listRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
    var tokenWithEnter = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      return (tokenSeparators || []).some(function (tokenSeparator) {
        return ['\n', '\r\n'].includes(tokenSeparator);
      });
    }, [tokenSeparators]);
    /** Used for component focused management */

    var _useDelayReset = Object(_hooks_useDelayReset__WEBPACK_IMPORTED_MODULE_17__["default"])(),
        _useDelayReset2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useDelayReset, 3),
        mockFocused = _useDelayReset2[0],
        setMockFocused = _useDelayReset2[1],
        cancelSetMockFocused = _useDelayReset2[2]; // Inner id for accessibility usage. Only work in client side


    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
        _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
        innerId = _useState2[0],
        setInnerId = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      setInnerId("rc_select_".concat(Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_14__["getUUID"])()));
    }, []);
    var mergedId = id || innerId; // optionLabelProp

    var mergedOptionLabelProp = optionLabelProp;

    if (mergedOptionLabelProp === undefined) {
      mergedOptionLabelProp = options ? 'label' : 'children';
    } // labelInValue


    var mergedLabelInValue = mode === 'combobox' ? false : labelInValue;
    var isMultiple = mode === 'tags' || mode === 'multiple';
    var mergedShowSearch = showSearch !== undefined ? showSearch : isMultiple || mode === 'combobox'; // ======================== Mobile ========================

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
        mobile = _useState4[0],
        setMobile = _useState4[1];

    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      // Only update on the client side
      setMobile(Object(rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_8__["default"])());
    }, []); // ============================== Ref ===============================

    var selectorDomRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
    react__WEBPACK_IMPORTED_MODULE_6__["useImperativeHandle"](ref, function () {
      var _selectorRef$current, _selectorRef$current2, _listRef$current;

      return {
        focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
        blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
        scrollTo: (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo
      };
    }); // ============================= Value ==============================

    var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_10__["default"])(defaultValue, {
      value: value
    }),
        _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setMergedValue = _useMergedState2[1];
    /** Unique raw values */


    var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      return Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_14__["toInnerValue"])(mergedValue, {
        labelInValue: mergedLabelInValue,
        combobox: mode === 'combobox'
      });
    }, [mergedValue, mergedLabelInValue]),
        _useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMemo, 2),
        mergedRawValue = _useMemo2[0],
        mergedValueMap = _useMemo2[1];
    /** We cache a set of raw values to speed up check */


    var rawValues = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      return new Set(mergedRawValue);
    }, [mergedRawValue]); // ============================= Option =============================
    // Set by option list active, it will merge into search input when mode is `combobox`

    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
        _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
        activeValue = _useState6[0],
        setActiveValue = _useState6[1];

    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
        _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
        innerSearchValue = _useState8[0],
        setInnerSearchValue = _useState8[1];

    var mergedSearchValue = innerSearchValue;

    if (mode === 'combobox' && mergedValue !== undefined) {
      mergedSearchValue = mergedValue;
    } else if (searchValue !== undefined) {
      mergedSearchValue = searchValue;
    } else if (inputValue) {
      mergedSearchValue = inputValue;
    }

    var mergedOptions = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      var newOptions = options;

      if (newOptions === undefined) {
        newOptions = convertChildrenToData(children);
      }
      /**
       * `tags` should fill un-list item.
       * This is not cool here since TreeSelect do not need this
       */


      if (mode === 'tags' && fillOptionsWithMissingValue) {
        newOptions = fillOptionsWithMissingValue(newOptions, mergedValue, mergedOptionLabelProp, labelInValue);
      }

      return newOptions || [];
    }, [options, children, mode, mergedValue]);
    var mergedFlattenOptions = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      return flattenOptions(mergedOptions, props);
    }, [mergedOptions]);
    var getValueOption = Object(_hooks_useCacheOptions__WEBPACK_IMPORTED_MODULE_22__["default"])(mergedFlattenOptions); // Display options for OptionList

    var displayOptions = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      if (!mergedSearchValue || !mergedShowSearch) {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(mergedOptions);
      }

      var filteredOptions = filterOptions(mergedSearchValue, mergedOptions, {
        optionFilterProp: optionFilterProp,
        filterOption: mode === 'combobox' && filterOption === undefined ? function () {
          return true;
        } : filterOption
      });

      if (mode === 'tags' && filteredOptions.every(function (opt) {
        return opt[optionFilterProp] !== mergedSearchValue;
      })) {
        filteredOptions.unshift({
          value: mergedSearchValue,
          label: mergedSearchValue,
          key: '__RC_SELECT_TAG_PLACEHOLDER__'
        });
      }

      if (filterSort && Array.isArray(filteredOptions)) {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(filteredOptions).sort(filterSort);
      }

      return filteredOptions;
    }, [mergedOptions, mergedSearchValue, mode, mergedShowSearch, filterSort]);
    var displayFlattenOptions = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      return flattenOptions(displayOptions, props);
    }, [displayOptions]);
    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      if (listRef.current && listRef.current.scrollTo) {
        listRef.current.scrollTo(0);
      }
    }, [mergedSearchValue]); // ============================ Selector ============================

    var displayValues = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
      var tmpValues = mergedRawValue.map(function (val) {
        var valueOptions = getValueOption([val]);
        var displayValue = getLabeledValue(val, {
          options: valueOptions,
          prevValueMap: mergedValueMap,
          labelInValue: mergedLabelInValue,
          optionLabelProp: mergedOptionLabelProp
        });
        return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, displayValue), {}, {
          disabled: isValueDisabled(val, valueOptions)
        });
      });

      if (!mode && tmpValues.length === 1 && tmpValues[0].value === null && tmpValues[0].label === null) {
        return [];
      }

      return tmpValues;
    }, [mergedValue, mergedOptions, mode]); // Polyfill with cache label

    displayValues = Object(_hooks_useCacheDisplayValue__WEBPACK_IMPORTED_MODULE_21__["default"])(displayValues);

    var triggerSelect = function triggerSelect(newValue, isSelect, source) {
      var newValueOption = getValueOption([newValue]);
      var outOption = findValueOption([newValue], newValueOption)[0];

      if (!internalProps.skipTriggerSelect) {
        // Skip trigger `onSelect` or `onDeselect` if configured
        var selectValue = mergedLabelInValue ? getLabeledValue(newValue, {
          options: newValueOption,
          prevValueMap: mergedValueMap,
          labelInValue: mergedLabelInValue,
          optionLabelProp: mergedOptionLabelProp
        }) : newValue;

        if (isSelect && onSelect) {
          onSelect(selectValue, outOption);
        } else if (!isSelect && onDeselect) {
          onDeselect(selectValue, outOption);
        }
      } // Trigger internal event


      if (useInternalProps) {
        if (isSelect && internalProps.onRawSelect) {
          internalProps.onRawSelect(newValue, outOption, source);
        } else if (!isSelect && internalProps.onRawDeselect) {
          internalProps.onRawDeselect(newValue, outOption, source);
        }
      }
    }; // We need cache options here in case user update the option list


    var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
        _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
        prevValueOptions = _useState10[0],
        setPrevValueOptions = _useState10[1];

    var triggerChange = function triggerChange(newRawValues) {
      if (useInternalProps && internalProps.skipTriggerChange) {
        return;
      }

      var newRawValuesOptions = getValueOption(newRawValues);
      var outValues = Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_14__["toOuterValues"])(Array.from(newRawValues), {
        labelInValue: mergedLabelInValue,
        options: newRawValuesOptions,
        getLabeledValue: getLabeledValue,
        prevValueMap: mergedValueMap,
        optionLabelProp: mergedOptionLabelProp
      });
      var outValue = isMultiple ? outValues : outValues[0]; // Skip trigger if prev & current value is both empty

      if (onChange && (mergedRawValue.length !== 0 || outValues.length !== 0)) {
        var outOptions = findValueOption(newRawValues, newRawValuesOptions, {
          prevValueOptions: prevValueOptions
        }); // We will cache option in case it removed by ajax

        setPrevValueOptions(outOptions.map(function (option, index) {
          var clone = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, option);

          Object.defineProperty(clone, '_INTERNAL_OPTION_VALUE_', {
            get: function get() {
              return newRawValues[index];
            }
          });
          return clone;
        }));
        onChange(outValue, isMultiple ? outOptions : outOptions[0]);
      }

      setMergedValue(outValue);
    };

    var onInternalSelect = function onInternalSelect(newValue, _ref) {
      var selected = _ref.selected,
          source = _ref.source;

      if (disabled) {
        return;
      }

      var newRawValue;

      if (isMultiple) {
        newRawValue = new Set(mergedRawValue);

        if (selected) {
          newRawValue.add(newValue);
        } else {
          newRawValue.delete(newValue);
        }
      } else {
        newRawValue = new Set();
        newRawValue.add(newValue);
      } // Multiple always trigger change and single should change if value changed


      if (isMultiple || !isMultiple && Array.from(mergedRawValue)[0] !== newValue) {
        triggerChange(Array.from(newRawValue));
      } // Trigger `onSelect`. Single mode always trigger select


      triggerSelect(newValue, !isMultiple || selected, source); // Clean search value if single or configured

      if (mode === 'combobox') {
        setInnerSearchValue(String(newValue));
        setActiveValue('');
      } else if (!isMultiple || autoClearSearchValue) {
        setInnerSearchValue('');
        setActiveValue('');
      }
    };

    var onInternalOptionSelect = function onInternalOptionSelect(newValue, info) {
      onInternalSelect(newValue, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, info), {}, {
        source: 'option'
      }));
    };

    var onInternalSelectionSelect = function onInternalSelectionSelect(newValue, info) {
      onInternalSelect(newValue, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, info), {}, {
        source: 'selection'
      }));
    }; // ============================= Input ==============================
    // Only works in `combobox`


    var customizeInputElement = mode === 'combobox' && getInputElement && getInputElement() || null; // ============================== Open ==============================

    var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_10__["default"])(undefined, {
      defaultValue: defaultOpen,
      value: open
    }),
        _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useMergedState3, 2),
        innerOpen = _useMergedState4[0],
        setInnerOpen = _useMergedState4[1];

    var mergedOpen = innerOpen; // Not trigger `open` in `combobox` when `notFoundContent` is empty

    var emptyListContent = !notFoundContent && !displayOptions.length;

    if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
      mergedOpen = false;
    }

    var triggerOpen = emptyListContent ? false : mergedOpen;

    var onToggleOpen = function onToggleOpen(newOpen) {
      var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

      if (innerOpen !== nextOpen && !disabled) {
        setInnerOpen(nextOpen);

        if (onDropdownVisibleChange) {
          onDropdownVisibleChange(nextOpen);
        }
      }
    };

    Object(_hooks_useSelectTriggerControl__WEBPACK_IMPORTED_MODULE_20__["default"])([containerRef.current, triggerRef.current && triggerRef.current.getPopupElement()], triggerOpen, onToggleOpen); // ============================= Search =============================

    var triggerSearch = function triggerSearch(searchText, fromTyping, isCompositing) {
      var ret = true;
      var newSearchText = searchText;
      setActiveValue(null); // Check if match the `tokenSeparators`

      var patchLabels = isCompositing ? null : Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_19__["getSeparatedContent"])(searchText, tokenSeparators);
      var patchRawValues = patchLabels;

      if (mode === 'combobox') {
        // Only typing will trigger onChange
        if (fromTyping) {
          triggerChange([newSearchText]);
        }
      } else if (patchLabels) {
        newSearchText = '';

        if (mode !== 'tags') {
          patchRawValues = patchLabels.map(function (label) {
            var item = mergedFlattenOptions.find(function (_ref2) {
              var data = _ref2.data;
              return data[mergedOptionLabelProp] === label;
            });
            return item ? item.data.value : null;
          }).filter(function (val) {
            return val !== null;
          });
        }

        var newRawValues = Array.from(new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(mergedRawValue), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(patchRawValues))));
        triggerChange(newRawValues);
        newRawValues.forEach(function (newRawValue) {
          triggerSelect(newRawValue, true, 'input');
        }); // Should close when paste finish

        onToggleOpen(false); // Tell Selector that break next actions

        ret = false;
      }

      setInnerSearchValue(newSearchText);

      if (onSearch && mergedSearchValue !== newSearchText) {
        onSearch(newSearchText);
      }

      return ret;
    }; // Only triggered when menu is closed & mode is tags
    // If menu is open, OptionList will take charge
    // If mode isn't tags, press enter is not meaningful when you can't see any option


    var onSearchSubmit = function onSearchSubmit(searchText) {
      // prevent empty tags from appearing when you click the Enter button
      if (!searchText || !searchText.trim()) {
        return;
      }

      var newRawValues = Array.from(new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(mergedRawValue), [searchText])));
      triggerChange(newRawValues);
      newRawValues.forEach(function (newRawValue) {
        triggerSelect(newRawValue, true, 'input');
      });
      setInnerSearchValue('');
    }; // Close dropdown when disabled change


    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      if (innerOpen && !!disabled) {
        setInnerOpen(false);
      }
    }, [disabled]); // Close will clean up single mode search text

    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      if (!mergedOpen && !isMultiple && mode !== 'combobox') {
        triggerSearch('', false, false);
      }
    }, [mergedOpen]); // ============================ Keyboard ============================

    /**
     * We record input value here to check if can press to clean up by backspace
     * - null: Key is not down, this is reset by key up
     * - true: Search text is empty when first time backspace down
     * - false: Search text is not empty when first time backspace down
     */

    var _useLock = Object(_hooks_useLock__WEBPACK_IMPORTED_MODULE_16__["default"])(),
        _useLock2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useLock, 2),
        getClearLock = _useLock2[0],
        setClearLock = _useLock2[1]; // KeyDown


    var onInternalKeyDown = function onInternalKeyDown(event) {
      var clearLock = getClearLock();
      var which = event.which;

      if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].ENTER) {
        // Do not submit form when type in the input
        if (mode !== 'combobox') {
          event.preventDefault();
        } // We only manage open state here, close logic should handle by list component


        if (!mergedOpen) {
          onToggleOpen(true);
        }
      }

      setClearLock(!!mergedSearchValue); // Remove value by `backspace`

      if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__["default"].BACKSPACE && !clearLock && isMultiple && !mergedSearchValue && mergedRawValue.length) {
        var removeInfo = Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_14__["removeLastEnabledValue"])(displayValues, mergedRawValue);

        if (removeInfo.removedValue !== null) {
          triggerChange(removeInfo.values);
          triggerSelect(removeInfo.removedValue, false, 'input');
        }
      }

      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (mergedOpen && listRef.current) {
        var _listRef$current2;

        (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
      }

      if (onKeyDown) {
        onKeyDown.apply(void 0, [event].concat(rest));
      }
    }; // KeyUp


    var onInternalKeyUp = function onInternalKeyUp(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (mergedOpen && listRef.current) {
        var _listRef$current3;

        (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
      }

      if (onKeyUp) {
        onKeyUp.apply(void 0, [event].concat(rest));
      }
    }; // ========================== Focus / Blur ==========================

    /** Record real focus status */


    var focusRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);

    var onContainerFocus = function onContainerFocus() {
      setMockFocused(true);

      if (!disabled) {
        if (onFocus && !focusRef.current) {
          onFocus.apply(void 0, arguments);
        } // `showAction` should handle `focus` if set


        if (showAction.includes('focus')) {
          onToggleOpen(true);
        }
      }

      focusRef.current = true;
    };

    var onContainerBlur = function onContainerBlur() {
      setMockFocused(false, function () {
        focusRef.current = false;
        onToggleOpen(false);
      });

      if (disabled) {
        return;
      }

      if (mergedSearchValue) {
        // `tags` mode should move `searchValue` into values
        if (mode === 'tags') {
          triggerSearch('', false, false);
          triggerChange(Array.from(new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(mergedRawValue), [mergedSearchValue]))));
        } else if (mode === 'multiple') {
          // `multiple` mode only clean the search value but not trigger event
          setInnerSearchValue('');
        }
      }

      if (onBlur) {
        onBlur.apply(void 0, arguments);
      }
    };

    var activeTimeoutIds = [];
    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      return function () {
        activeTimeoutIds.forEach(function (timeoutId) {
          return clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      };
    }, []);

    var onInternalMouseDown = function onInternalMouseDown(event) {
      var target = event.target;
      var popupElement = triggerRef.current && triggerRef.current.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function () {
          var index = activeTimeoutIds.indexOf(timeoutId);

          if (index !== -1) {
            activeTimeoutIds.splice(index, 1);
          }

          cancelSetMockFocused();

          if (!mobile && !popupElement.contains(document.activeElement)) {
            var _selectorRef$current3;

            (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }

      if (onMouseDown) {
        for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          restArgs[_key3 - 1] = arguments[_key3];
        }

        onMouseDown.apply(void 0, [event].concat(restArgs));
      }
    }; // ========================= Accessibility ==========================


    var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
        _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
        accessibilityIndex = _useState12[0],
        setAccessibilityIndex = _useState12[1];

    var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';

    var onActiveValue = function onActiveValue(active, index) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$source = _ref3.source,
          source = _ref3$source === void 0 ? 'keyboard' : _ref3$source;

      setAccessibilityIndex(index);

      if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
        setActiveValue(String(active));
      }
    }; // ============================= Popup ==============================


    var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
        _useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState13, 2),
        containerWidth = _useState14[0],
        setContainerWidth = _useState14[1];

    var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
        _useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState15, 2),
        forceUpdate = _useState16[1]; // We need force update here since popup dom is render async


    function onPopupMouseEnter() {
      forceUpdate({});
    }

    Object(_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_18__["default"])(function () {
      if (triggerOpen) {
        var newWidth = Math.ceil(containerRef.current.offsetWidth);

        if (containerWidth !== newWidth) {
          setContainerWidth(newWidth);
        }
      }
    }, [triggerOpen]);
    var popupNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](OptionList, {
      ref: listRef,
      prefixCls: prefixCls,
      id: mergedId,
      open: mergedOpen,
      childrenAsData: !options,
      options: displayOptions,
      flattenOptions: displayFlattenOptions,
      multiple: isMultiple,
      values: rawValues,
      height: listHeight,
      itemHeight: listItemHeight,
      onSelect: onInternalOptionSelect,
      onToggleOpen: onToggleOpen,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      notFoundContent: notFoundContent,
      onScroll: onPopupScroll,
      searchValue: mergedSearchValue,
      menuItemSelectedIcon: menuItemSelectedIcon,
      virtual: virtual !== false && dropdownMatchSelectWidth !== false,
      onMouseEnter: onPopupMouseEnter
    }); // ============================= Clear ==============================

    var clearNode;

    var onClearMouseDown = function onClearMouseDown() {
      // Trigger internal `onClear` event
      if (useInternalProps && internalProps.onClear) {
        internalProps.onClear();
      }

      if (onClear) {
        onClear();
      }

      triggerChange([]);
      triggerSearch('', false, false);
    };

    if (!disabled && allowClear && (mergedRawValue.length || mergedSearchValue)) {
      clearNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "".concat(prefixCls, "-clear"),
        onMouseDown: onClearMouseDown,
        customizeIcon: clearIcon
      }, "\xD7");
    } // ============================= Arrow ==============================


    var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !isMultiple && mode !== 'combobox';
    var arrowNode;

    if (mergedShowArrow) {
      arrowNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("".concat(prefixCls, "-arrow"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-arrow-loading"), loading)),
        customizeIcon: inputIcon,
        customizeIconProps: {
          loading: loading,
          searchValue: mergedSearchValue,
          open: mergedOpen,
          focused: mockFocused,
          showSearch: mergedShowSearch
        }
      });
    } // ============================ Warning =============================


    if ( true && warningProps) {
      warningProps(props);
    } // ============================= Render =============================


    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, className, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-multiple"), isMultiple), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-single"), !isMultiple), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-loading"), loading), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
      style: {
        width: 0,
        height: 0,
        display: 'flex',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(mergedRawValue.join(', '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_SelectTrigger__WEBPACK_IMPORTED_MODULE_12__["default"], {
      ref: triggerRef,
      disabled: disabled,
      prefixCls: prefixCls,
      visible: triggerOpen,
      popupElement: popupNode,
      containerWidth: containerWidth,
      animation: animation,
      transitionName: transitionName,
      dropdownStyle: dropdownStyle,
      dropdownClassName: dropdownClassName,
      direction: direction,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth,
      dropdownRender: dropdownRender,
      dropdownAlign: dropdownAlign,
      getPopupContainer: getPopupContainer,
      empty: !mergedOptions.length,
      getTriggerDOMNode: function getTriggerDOMNode() {
        return selectorDomRef.current;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Selector__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      domRef: selectorDomRef,
      prefixCls: prefixCls,
      inputElement: customizeInputElement,
      ref: selectorRef,
      id: mergedId,
      showSearch: mergedShowSearch,
      mode: mode,
      accessibilityIndex: accessibilityIndex,
      multiple: isMultiple,
      tagRender: tagRender,
      values: displayValues,
      open: mergedOpen,
      onToggleOpen: onToggleOpen,
      searchValue: mergedSearchValue,
      activeValue: activeValue,
      onSearch: triggerSearch,
      onSearchSubmit: onSearchSubmit,
      onSelect: onInternalSelectionSelect,
      tokenWithEnter: tokenWithEnter
    }))), arrowNode, clearNode);
  }

  var RefSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"](Select);
  return RefSelect;
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useCacheDisplayValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useCacheDisplayValue.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCacheDisplayValue; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useCacheDisplayValue(values) {
  var prevValuesRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](values);
  var mergedValues = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    // Create value - label map
    var valueLabels = new Map();
    prevValuesRef.current.forEach(function (_ref) {
      var value = _ref.value,
          label = _ref.label;

      if (value !== label) {
        valueLabels.set(value, label);
      }
    });
    var resultValues = values.map(function (item) {
      var cacheLabel = valueLabels.get(item.value);

      if (item.isCacheable && cacheLabel) {
        return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
          label: cacheLabel
        });
      }

      return item;
    });
    prevValuesRef.current = resultValues;
    return resultValues;
  }, [values]);
  return mergedValues;
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useCacheOptions.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useCacheOptions.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCacheOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCacheOptions(options) {
  var prevOptionMapRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var optionMap = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var map = new Map();
    options.forEach(function (item) {
      var value = item.data.value;
      map.set(value, item);
    });
    return map;
  }, [options]);
  prevOptionMapRef.current = optionMap;

  var getValueOption = function getValueOption(vals) {
    return vals.map(function (value) {
      return prevOptionMapRef.current.get(value);
    }).filter(Boolean);
  };

  return getValueOption;
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useDelayReset.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useDelayReset.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDelayReset; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */

function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      bool = _React$useState2[0],
      setBool = _React$useState2[1];

  var delayRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return cancelLatest;
  }, []);

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useLayoutEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useLayoutEffect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");
/* eslint-disable react-hooks/rules-of-hooks */


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

function useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (_utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__["isBrowserClient"]) {
    /* istanbul ignore next */
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](effect, deps);
  } else {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](effect, deps);
  }
}
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useLock.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useLock.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */

function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null); // Clean up

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }

  return [function () {
    return lockRef.current;
  }, doLock];
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useSelectTriggerControl.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useSelectTriggerControl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSelectTriggerControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSelectTriggerControl(elements, open, triggerOpen) {
  var propsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  propsRef.current = {
    elements: elements.filter(function (e) {
      return e;
    }),
    open: open,
    triggerOpen: triggerOpen
  };
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    function onGlobalMouseDown(event) {
      var target = event.target;

      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }

      if (propsRef.current.open && propsRef.current.elements.every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }

    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/rc-select/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-select/es/index.js ***!
  \********************************************/
/*! exports provided: Option, OptGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/rc-select/es/Select.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "./node_modules/rc-select/es/Option.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptGroup */ "./node_modules/rc-select/es/OptGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _OptGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_Select__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-select/es/interface/generator.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-select/es/interface/generator.js ***!
  \**********************************************************/
/*! exports provided: INTERNAL_PROPS_MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERNAL_PROPS_MARK", function() { return INTERNAL_PROPS_MARK; });
var INTERNAL_PROPS_MARK = 'RC_SELECT_INTERNAL_PROPS_MARK';

/***/ }),

/***/ "./node_modules/rc-select/es/utils/commonUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-select/es/utils/commonUtil.js ***!
  \*******************************************************/
/*! exports provided: toArray, toInnerValue, toOuterValues, removeLastEnabledValue, isClient, isBrowserClient, getUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInnerValue", function() { return toInnerValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toOuterValues", function() { return toOuterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLastEnabledValue", function() { return removeLastEnabledValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserClient", function() { return isBrowserClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return getUUID; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
/**
 * Convert outer props value into internal value
 */

function toInnerValue(value, _ref) {
  var labelInValue = _ref.labelInValue,
      combobox = _ref.combobox;
  var valueMap = new Map();

  if (value === undefined || value === '' && combobox) {
    return [[], valueMap];
  }

  var values = Array.isArray(value) ? value : [value];
  var rawValues = values;

  if (labelInValue) {
    rawValues = values.filter(function (item) {
      return item !== null;
    }).map(function (itemValue) {
      var key = itemValue.key,
          val = itemValue.value;
      var finalVal = val !== undefined ? val : key;
      valueMap.set(finalVal, itemValue);
      return finalVal;
    });
  }

  return [rawValues, valueMap];
}
/**
 * Convert internal value into out event value
 */

function toOuterValues(valueList, _ref2) {
  var optionLabelProp = _ref2.optionLabelProp,
      labelInValue = _ref2.labelInValue,
      prevValueMap = _ref2.prevValueMap,
      options = _ref2.options,
      getLabeledValue = _ref2.getLabeledValue;
  var values = valueList;

  if (labelInValue) {
    values = values.map(function (val) {
      return getLabeledValue(val, {
        options: options,
        prevValueMap: prevValueMap,
        labelInValue: labelInValue,
        optionLabelProp: optionLabelProp
      });
    });
  }

  return values;
}
function removeLastEnabledValue(measureValues, values) {
  var newValues = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(values);

  var removeIndex;

  for (removeIndex = measureValues.length - 1; removeIndex >= 0; removeIndex -= 1) {
    if (!measureValues[removeIndex].disabled) {
      break;
    }
  }

  var removedValue = null;

  if (removeIndex !== -1) {
    removedValue = newValues[removeIndex];
    newValues.splice(removeIndex, 1);
  }

  return {
    values: newValues,
    removedValue: removedValue
  };
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

var isBrowserClient =  true && isClient;
var uuid = 0;
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}

/***/ }),

/***/ "./node_modules/rc-select/es/utils/legacyUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-select/es/utils/legacyUtil.js ***!
  \*******************************************************/
/*! exports provided: convertChildrenToData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertChildrenToData", function() { return convertChildrenToData; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");





function convertNodeToOption(node) {
  var key = node.key,
      _node$props = node.props,
      children = _node$props.children,
      value = _node$props.value,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_node$props, ["children", "value"]);

  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}

function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(nodes).map(function (node, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](node) || !node.type) {
      return null;
    }

    var isSelectOptGroup = node.type.isSelectOptGroup,
        key = node.key,
        _node$props2 = node.props,
        children = _node$props2.children,
        restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_node$props2, ["children"]);

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}

/***/ }),

/***/ "./node_modules/rc-select/es/utils/valueUtil.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-select/es/utils/valueUtil.js ***!
  \******************************************************/
/*! exports provided: flattenOptions, findValueOption, getLabeledValue, filterOptions, getSeparatedContent, isValueDisabled, fillOptionsWithMissingValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenOptions", function() { return flattenOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findValueOption", function() { return findValueOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabeledValue", function() { return getLabeledValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterOptions", function() { return filterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeparatedContent", function() { return getSeparatedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueDisabled", function() { return isValueDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillOptionsWithMissingValue", function() { return fillOptionsWithMissingValue; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _commonUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");








function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}
/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */


function flattenOptions(options) {
  var flattenList = [];

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      if (isGroupOption || !('options' in data)) {
        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data
        });
      } else {
        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data
        });
        dig(data.options, true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject `props` into `option` for legacy usage
 */

function injectPropsWithOption(option) {
  var newOption = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }

  return newOption;
}

function findValueOption(values, options) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$prevValueOptions = _ref.prevValueOptions,
      prevValueOptions = _ref$prevValueOptions === void 0 ? [] : _ref$prevValueOptions;

  var optionMap = new Map();
  options.forEach(function (flattenItem) {
    if (!flattenItem.group) {
      var data = flattenItem.data; // Check if match

      optionMap.set(data.value, data);
    }
  });
  return values.map(function (val) {
    var option = optionMap.get(val); // Fallback to try to find prev options

    if (!option) {
      option = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, prevValueOptions.find(function (opt) {
        return opt._INTERNAL_OPTION_VALUE_ === val;
      }));
    }

    return injectPropsWithOption(option);
  });
}
var getLabeledValue = function getLabeledValue(value, _ref2) {
  var options = _ref2.options,
      prevValueMap = _ref2.prevValueMap,
      labelInValue = _ref2.labelInValue,
      optionLabelProp = _ref2.optionLabelProp;
  var item = findValueOption([value], options)[0];
  var result = {
    value: value
  };
  var prevValItem = labelInValue ? prevValueMap.get(value) : undefined;

  if (prevValItem && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(prevValItem) === 'object' && 'label' in prevValItem) {
    result.label = prevValItem.label;

    if (item && typeof prevValItem.label === 'string' && typeof item[optionLabelProp] === 'string' && prevValItem.label.trim() !== item[optionLabelProp].trim()) {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, '`label` of `value` is not same as `label` in Select options.');
    }
  } else if (item && optionLabelProp in item) {
    result.label = item[optionLabelProp];
  } else {
    result.label = value;
    result.isCacheable = true;
  } // Used for motion control


  result.key = result.value;
  return result;
};

function toRawString(content) {
  return Object(_commonUtil__WEBPACK_IMPORTED_MODULE_6__["toArray"])(content).join('');
}
/** Filter single option if match the search text */


function getFilterFunction(optionFilterProp) {
  return function (searchValue, option) {
    var lowerSearchText = searchValue.toLowerCase(); // Group label search

    if ('options' in option) {
      return toRawString(option.label).toLowerCase().includes(lowerSearchText);
    } // Option value search


    var rawValue = option[optionFilterProp];
    var value = toRawString(rawValue).toLowerCase();
    return value.includes(lowerSearchText);
  };
}
/** Filter options and return a new options by the search text */


function filterOptions(searchValue, options, _ref3) {
  var optionFilterProp = _ref3.optionFilterProp,
      filterOption = _ref3.filterOption;
  var filteredOptions = [];
  var filterFunc;

  if (filterOption === false) {
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options);
  }

  if (typeof filterOption === 'function') {
    filterFunc = filterOption;
  } else {
    filterFunc = getFilterFunction(optionFilterProp);
  }

  options.forEach(function (item) {
    // Group should check child options
    if ('options' in item) {
      // Check group first
      var matchGroup = filterFunc(searchValue, item);

      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        // Check option
        var subOptions = item.options.filter(function (subItem) {
          return filterFunc(searchValue, subItem);
        });

        if (subOptions.length) {
          filteredOptions.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, item), {}, {
            options: subOptions
          }));
        }
      }

      return;
    }

    if (filterFunc(searchValue, injectPropsWithOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref4) {
    var _ref5 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4),
        token = _ref5[0],
        restTokens = _ref5.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevList), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}
function isValueDisabled(value, options) {
  var option = findValueOption([value], options)[0];
  return option.disabled;
}
/**
 * `tags` mode should fill un-list item into the option list
 */

function fillOptionsWithMissingValue(options, value, optionLabelProp, labelInValue) {
  var values = Object(_commonUtil__WEBPACK_IMPORTED_MODULE_6__["toArray"])(value).slice().sort();

  var cloneOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options); // Convert options value to set


  var optionValues = new Set();
  options.forEach(function (opt) {
    if (opt.options) {
      opt.options.forEach(function (subOpt) {
        optionValues.add(subOpt.value);
      });
    } else {
      optionValues.add(opt.value);
    }
  }); // Fill missing value

  values.forEach(function (item) {
    var val = labelInValue ? item.value : item;

    if (!optionValues.has(val)) {
      var _ref6;

      cloneOptions.push(labelInValue ? (_ref6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, optionLabelProp, item.label), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, "value", val), _ref6) : {
        value: val
      });
    }
  });
  return cloneOptions;
}

/***/ }),

/***/ "./node_modules/rc-select/es/utils/warningPropsUtil.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-select/es/utils/warningPropsUtil.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var _legacyUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacyUtil */ "./node_modules/rc-select/es/utils/legacyUtil.js");
/* harmony import */ var _commonUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");







function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autoFocus = props.autoFocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = mode === 'multiple' || mode === 'tags';
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || Object(_legacyUtil__WEBPACK_IMPORTED_MODULE_4__["convertChildrenToData"])(children); // `tags` should not set option as disabled

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // `combobox` & `tags` should option be `string` type

  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }

      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  } // `combobox` should not use `optionLabelProp`


  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'); // Only `combobox` support `backfill`

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.'); // Only `combobox` support `getInputElement`

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.'); // Customize `getInputElement` should not use `allowClear` & `placeholder`

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["noteOnce"])(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'); // `onSearch` should use in `combobox` or `showSearch`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["noteOnce"])(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');

  if (value !== undefined && value !== null) {
    var values = Object(_commonUtil__WEBPACK_IMPORTED_MODULE_5__["toArray"])(value);
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!labelInValue || values.every(function (val) {
      return Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children).some(function (node) {
      if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](node) || !node.type) {
        return false;
      }

      var type = node.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var allChildrenValid = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }

    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warningProps);

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMemo.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useMemo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMemo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMergedState.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useMergedState.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useControlledState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](true);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

/***/ }),

/***/ "./node_modules/rc-util/es/pickAttrs.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-util/es/pickAttrs.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pickAttrs; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */

var ariaPrefix = 'aria-';
var dataPrefix = 'data-';

function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */


function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;

  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread({}, ariaOnly);
  }

  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if ( // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || // Data
    mergedConfig.data && match(key, dataPrefix) || // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/Filler.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/Filler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Fill component to provided the scroll content real height.
 */

var Filler = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (_ref, ref) {
  var height = _ref.height,
      offset = _ref.offset,
      children = _ref.children,
      prefixCls = _ref.prefixCls,
      onInnerResize = _ref.onInnerResize;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread(_objectSpread({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: outerStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;

      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: innerStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ __webpack_exports__["default"] = (Filler);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/Item.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/Item.js ***!
  \*************************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Item(_ref) {
  var children = _ref.children,
      setRef = _ref.setRef;
  var refFunc = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, {
    ref: refFunc
  });
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/List.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/List.js ***!
  \*************************************************/
/*! exports provided: RawList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawList", function() { return RawList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filler */ "./node_modules/rc-virtual-list/es/Filler.js");
/* harmony import */ var _ScrollBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollBar */ "./node_modules/rc-virtual-list/es/ScrollBar.js");
/* harmony import */ var _hooks_useChildren__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useChildren */ "./node_modules/rc-virtual-list/es/hooks/useChildren.js");
/* harmony import */ var _hooks_useHeights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useHeights */ "./node_modules/rc-virtual-list/es/hooks/useHeights.js");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useScrollTo */ "./node_modules/rc-virtual-list/es/hooks/useScrollTo.js");
/* harmony import */ var _hooks_useDiffItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useDiffItem */ "./node_modules/rc-virtual-list/es/hooks/useDiffItem.js");
/* harmony import */ var _hooks_useFrameWheel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useFrameWheel */ "./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js");
/* harmony import */ var _hooks_useMobileTouchMove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useMobileTouchMove */ "./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js");
/* harmony import */ var _hooks_useOriginScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useOriginScroll */ "./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
      className = props.className,
      height = props.height,
      itemHeight = props.itemHeight,
      _props$fullHeight = props.fullHeight,
      fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
      style = props.style,
      data = props.data,
      children = props.children,
      itemKey = props.itemKey,
      virtual = props.virtual,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      onScroll = props.onScroll,
      restProps = _objectWithoutProperties(props, ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll"]); // ================================= MISC =================================


  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollMoving = _useState4[0],
      setScrollMoving = _useState4[1];

  var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var fillerInnerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var scrollBarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================

  var getKey = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  }; // ================================ Scroll ================================

  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;

      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }

      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  } // ================================ Legacy ================================
  // Put ref here since the range is generate by follow


  var rangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useDiffItem = Object(_hooks_useDiffItem__WEBPACK_IMPORTED_MODULE_7__["default"])(mergedData, getKey),
      _useDiffItem2 = _slicedToArray(_useDiffItem, 1),
      diffItem = _useDiffItem2[0];

  diffItemRef.current = diffItem; // ================================ Height ================================

  var _useHeights = Object(_hooks_useHeights__WEBPACK_IMPORTED_MODULE_5__["default"])(getKey, null, null),
      _useHeights2 = _slicedToArray(_useHeights, 4),
      setInstanceRef = _useHeights2[0],
      collectHeight = _useHeights2[1],
      heights = _useHeights2[2],
      heightUpdatedMark = _useHeights2[3]; // ========================== Visible Calculation =========================


  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    if (!useVirtual) {
      return {
        scrollHeight: undefined,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    } // Always use virtual scroll bar in avoid shaking


    if (!inVirtual) {
      var _fillerInnerRef$curre;

      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    }

    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;

    for (var i = 0; i < dataLen; i += 1) {
      var item = mergedData[i];
      var key = getKey(item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight); // Check item top in the range

      if (currentItemBottom >= scrollTop && startIndex === undefined) {
        startIndex = i;
        startOffset = itemTop;
      } // Check item bottom in the range. We will render additional one item for motion usage


      if (currentItemBottom > scrollTop + height && endIndex === undefined) {
        endIndex = i;
      }

      itemTop = currentItemBottom;
    } // Fallback to normal if not match. This code should never reach

    /* istanbul ignore next */


    if (startIndex === undefined) {
      startIndex = 0;
      startOffset = 0;
    }

    if (endIndex === undefined) {
      endIndex = mergedData.length - 1;
    } // Give cache to improve scroll experience


    endIndex = Math.min(endIndex + 1, mergedData.length);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
      scrollHeight = _React$useMemo.scrollHeight,
      start = _React$useMemo.start,
      end = _React$useMemo.end,
      offset = _React$useMemo.offset;

  rangeRef.current.start = start;
  rangeRef.current.end = end; // =============================== In Range ===============================

  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;

  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;

    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }

    newTop = Math.max(newTop, 0);
    return newTop;
  }

  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = Object(_hooks_useOriginScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(isScrollAtTop, isScrollAtBottom); // ================================ Scroll ================================

  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  } // When data size reduce. It may trigger native scroll event back to fit scroll position


  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;

    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    } // Trigger origin onScroll


    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  } // Since this added in global,should use ref to keep update


  var _useFrameWheel = Object(_hooks_useFrameWheel__WEBPACK_IMPORTED_MODULE_8__["default"])(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
    syncScrollTop(function (top) {
      var newTop = top + offsetY;
      return newTop;
    });
  }),
      _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2),
      onRawWheel = _useFrameWheel2[0],
      onFireFoxScroll = _useFrameWheel2[1]; // Mobile touch move


  Object(_hooks_useMobileTouchMove__WEBPACK_IMPORTED_MODULE_9__["default"])(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }

    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }

    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      componentRef.current.removeEventListener('wheel', onRawWheel);
      componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual]); // ================================= Ref ==================================

  var scrollTo = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_6__["default"])(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;

    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"](ref, function () {
    return {
      scrollTo: scrollTo
    };
  }); // ================================ Render ================================

  var listChildren = Object(_hooks_useChildren__WEBPACK_IMPORTED_MODULE_4__["default"])(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;

  if (height) {
    componentStyle = _objectSpread(_defineProperty({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);

    if (useVirtual) {
      componentStyle.overflowY = 'hidden';

      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Filler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef
  }, listChildren)), useVirtual && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ScrollBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](RawList);
List.displayName = 'List';
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/ScrollBar.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/ScrollBar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MIN_SIZE = 20;

function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}

var ScrollBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollBar, _React$Component);

  var _super = _createSuper(ScrollBar);

  function ScrollBar() {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _super.apply(this, arguments);
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.thumbRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };

    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);

      _this.setState({
        visible: true
      });

      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };

    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };

    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    }; // ======================= Clean =======================


    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);

      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };

    _this.removeEvents = function () {
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);

      _this.scrollbarRef.current.removeEventListener('touchstart', _this.onScrollbarTouchStart);

      _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);

      _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);

      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(_this.moveRaf);
    }; // ======================= Thumb =======================


    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;

      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });

      onStartMove();

      _this.patchEvents();

      e.stopPropagation();
      e.preventDefault();
    };

    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
          dragging = _this$state.dragging,
          pageY = _this$state.pageY,
          startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(_this.moveRaf);

      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;

        var enableScrollRange = _this.getEnableScrollRange();

        var enableHeightRange = _this.getEnableHeightRange();

        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
          onScroll(newScrollTop);
        });
      }
    };

    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;

      _this.setState({
        dragging: false
      });

      onStopMove();

      _this.removeEvents();
    }; // ===================== Calculate =====================


    _this.getSpinHeight = function () {
      var _this$props = _this.props,
          height = _this$props.height,
          count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };

    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
          scrollHeight = _this$props2.scrollHeight,
          height = _this$props2.height;
      return scrollHeight - height || 0;
    };

    _this.getEnableHeightRange = function () {
      var height = _this.props.height;

      var spinHeight = _this.getSpinHeight();

      return height - spinHeight || 0;
    };

    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;

      var enableScrollRange = _this.getEnableScrollRange();

      var enableHeightRange = _this.getEnableHeightRange();

      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }

      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    }; // Not show scrollbar when height is large thane scrollHeight


    _this.getVisible = function () {
      var visible = _this.state.visible;
      var _this$props3 = _this.props,
          height = _this$props3.height,
          scrollHeight = _this$props3.scrollHeight;

      if (height >= scrollHeight) {
        return false;
      }

      return visible;
    };

    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    } // ====================== Render =======================

  }, {
    key: "render",
    value: function render() {
      var dragging = this.state.dragging;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var visible = this.getVisible();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.scrollbarRef,
        className: "".concat(prefixCls, "-scrollbar"),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: visible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.thumbRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);

  return ScrollBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useChildren.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useChildren.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item */ "./node_modules/rc-virtual-list/es/Item.js");


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {// style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Item__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useDiffItem.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDiffItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_algorithmUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/algorithmUtil */ "./node_modules/rc-virtual-list/es/utils/algorithmUtil.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](data),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      prevData = _React$useState2[0],
      setPrevData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      diffItem = _React$useState4[0],
      setDiffItem = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var diff = Object(_utils_algorithmUtil__WEBPACK_IMPORTED_MODULE_1__["findListDiffIndex"])(prevData || [], data || [], getKey);

    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }

    setPrevData(data);
  }, [data]);
  return [diffItem];
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFrameWheel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var _utils_isFirefox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isFirefox */ "./node_modules/rc-virtual-list/es/utils/isFirefox.js");
/* harmony import */ var _useOriginScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOriginScroll */ "./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js");




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var nextFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // Firefox patch

  var wheelValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isMouseScrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); // Scroll status sync

  var originScroll = Object(_useOriginScroll__WEBPACK_IMPORTED_MODULE_3__["default"])(isScrollAtTop, isScrollAtBottom);

  function onWheel(event) {
    if (!inVirtual) return;
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY; // Do nothing when scroll at the edge, Skip check when is in scroll

    if (originScroll(deltaY)) return; // Proxy of scroll events

    if (!_utils_isFirefox__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      event.preventDefault();
    }

    nextFrameRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  } // A patch for firefox


  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }

  return [onWheel, onFireFoxScroll];
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useHeights.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useHeights.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHeights; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var _utils_CacheMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CacheMap */ "./node_modules/rc-virtual-list/es/utils/CacheMap.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updatedMark = _React$useState2[0],
      setUpdatedMark = _React$useState2[1];

  var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());
  var heightsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new _utils_CacheMap__WEBPACK_IMPORTED_MODULE_2__["default"]());
  var heightUpdateIdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  function collectHeight() {
    heightUpdateIdRef.current += 1;
    var currentId = heightUpdateIdRef.current;
    Promise.resolve().then(function () {
      // Only collect when it's latest call
      if (currentId !== heightUpdateIdRef.current) return;
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
          var offsetHeight = htmlElement.offsetHeight;

          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      }); // Always trigger update mark to tell parent that should re-calculate heights when resized

      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }

  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);

    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    } // Instance changed


    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }

  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMobileTouchMove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var touchYRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // Smooth scroll

  var intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var cleanUpEvents;

  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;

      if (callback(offsetY)) {
        e.preventDefault();
      } // Smooth interval


      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;

        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };

  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };

  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();

    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };

  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }

    return function () {
      listRef.current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var lockTimeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  } // Pass to ref since global add is in closure


  var scrollPingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll = // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;

    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }

    return !lockRef.current && originScroll;
  };
});

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useScrollTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useScrollTo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    } // Normal scroll logic


    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(scrollRef.current);

    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === 'object') {
      var index;
      var align = arg.align;

      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }

      var _arg$offset = arg.offset,
          offset = _arg$offset === void 0 ? 0 : _arg$offset; // We will retry 3 times in case dynamic height shaking

      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign; // Go to next frame if height not exist

        if (height) {
          var mergedAlign = targetAlign || align; // Get top & bottom

          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);

          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;

            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          } // Scroll to


          var targetTop = null;

          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;

            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;

            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;

                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }

          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        } // We will retry since element may not sync height as it described


        scrollRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
          if (needCollectHeight) {
            collectHeight();
          }

          syncScroll(times - 1, newTargetAlign);
        });
      };

      syncScroll(3);
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/rc-virtual-list/es/List.js");

/* harmony default export */ __webpack_exports__["default"] = (_List__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/utils/CacheMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/utils/CacheMap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);

    this.maps = {};
    this.maps.prototype = null;
  }

  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);

  return CacheMap;
}();

/* harmony default export */ __webpack_exports__["default"] = (CacheMap);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/utils/algorithmUtil.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js ***!
  \****************************************************************/
/*! exports provided: getIndexByStartLoc, findListDiffIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexByStartLoc", function() { return getIndexByStartLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findListDiffIndex", function() { return findListDiffIndex; });
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2; // Balance

  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);

    if (index % 2) {
      return start + stepIndex + 1;
    }

    return start - stepIndex;
  } // One is out of range


  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }

  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */

function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;

  if (originLen === 0 && targetLen === 0) {
    return null;
  }

  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }

  var notExistKey = {
    __EMPTY_ITEM__: true
  };

  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }

    return notExistKey;
  } // Loop to find diff one


  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;

  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);

    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }

  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/utils/isFirefox.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/utils/isFirefox.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ __webpack_exports__["default"] = (isFF);

/***/ }),

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_with_repo_basic_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/with-repo-basic.jsx */ "./components/with-repo-basic.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/util */ "./lib/util.js");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser.jsx");







var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\detail\\issues.js",
    _s = $RefreshSig$();






var MdRenderer = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/MarkFdownRenderer */ "./components/MarkFdownRenderer.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/MarkFdownRenderer */ "./components/MarkFdownRenderer.jsx")];
    },
    modules: ["../../components/MarkFdownRenderer"]
  }
}); // 转义时间

_c2 = MdRenderer;

 // 显示 detail 的内容

function IssueDetail(_ref) {
  var issue = _ref.issue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-1960058629" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MdRenderer, {
      content: issue.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-1960058629" + " " + "actions",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: issue.html_url,
        target: "_blank",
        children: "\u6253\u5F00Issue\u8BA8\u8BBA\u9875\u9762"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "1960058629",
      children: ".root.jsx-1960058629{background:#fafafa;padding:20px;}.actions.jsx-1960058629{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBRzhCLEFBSUYsaUJBQ25CLEVBSmUsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXHBjXFxEZXNrdG9wXFzmhZXor77lrabkuaBcXG5leHRqcy1jcmVhdGUtYXBwXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB3aXRoUmVwbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG5jb25zdCBNZFJlbmRlcmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL01hcmtGZG93blJlbmRlcmVyXCIpKTtcclxuXHJcbi8vIOi9rOS5ieaXtumXtFxyXG5pbXBvcnQgeyBnZXRMYXN0VXBkYXRlZCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbFwiO1xyXG5cclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlclwiO1xyXG5cclxuLy8g5pi+56S6IGRldGFpbCDnmoTlhoXlrrlcclxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoeyBpc3N1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8TWRSZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIOaJk+W8gElzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHsgaXNzdWUgfSkge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8g5L2/55SoIHVzZUNhbGxiYWNrIOeahOaWueW8j+abtOaWsOaIkeS7rOeahCBzdGF0ZSwg6ICM5LiN5piv5L6d6LWW5LqOIHVzZVN0YXRlIOi/lOWbnueahOi/meS4qiBzdGF0Ze+8jOi/meagt+aIkeS7rOWwseS4jeS+nei1luS6juWklumDqOWjsOaYjueahOWPmOmHj++8jOi/meagt+WwsemAg+i/h+S6humXreWMheOAglxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKChkZXRhaWwpID0+ICFkZXRhaWwpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMTAsIHRvcDogMTAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3dEZXRhaWwgPyBcIuafpeeci1wiIDogXCLpmpDol49cIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0YWVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IGlzc3VlcyB9KSB7XHJcbiAgY29uc29sZS5sb2coaXNzdWVzLCBcIisrKysrKysrKysrXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcCgoaXNzdWUpID0+IChcclxuICAgICAgICAgIDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzc3VlczogaXNzdWVzUmVzcC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwbyhEZXRhaWwsIFwiaXNzdWVzXCIpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\issues.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_c3 = IssueDetail;

function IssueItem(_ref2) {
  _s();

  var issue = _ref2.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      showDetail = _useState[0],
      setShowDetail = _useState[1]; // 使用 useCallback 的方式更新我们的 state, 而不是依赖于 useState 返回的这个 state，这样我们就不依赖于外部声明的变量，这样就逃过了闭包。


  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-1445670956" + " " + "issue",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        type: "primary",
        size: "small",
        style: {
          position: "absolute",
          right: 10,
          top: 10
        },
        onClick: toggleShowDetail,
        children: showDetail ? "查看" : "隐藏"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-1445670956" + " " + "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: issue.user.avatar_url,
          shape: "square",
          size: 50
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-1445670956" + " " + "main-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
          className: "jsx-1445670956",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "jsx-1445670956",
            children: issue.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "jsx-1445670956" + " " + "sub-info",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "jsx-1445670956",
            children: ["Updataed at ", Object(_lib_util__WEBPACK_IMPORTED_MODULE_10__["getLastUpdated"])(issue.updated_at)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1445670956",
        children: ".issue.jsx-1445670956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1445670956:hover{background:#fafafa;}.issue.jsx-1445670956+.issue.jsx-1445670956{border-top:1px solid #eee;}.main-info.jsx-1445670956>h6.jsx-1445670956{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-1445670956{margin-right:20px;}.sub-info.jsx-1445670956{margin-bottom:0;}.sub-info.jsx-1445670956>span.jsx-1445670956+span.jsx-1445670956{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRW9CLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCbUIsS0FkbkIsS0FJcUIsT0FXSixZQVZqQixHQVdBLHFCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXHBjXFxEZXNrdG9wXFzmhZXor77lrabkuaBcXG5leHRqcy1jcmVhdGUtYXBwXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB3aXRoUmVwbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcblxyXG5jb25zdCBNZFJlbmRlcmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL01hcmtGZG93blJlbmRlcmVyXCIpKTtcclxuXHJcbi8vIOi9rOS5ieaXtumXtFxyXG5pbXBvcnQgeyBnZXRMYXN0VXBkYXRlZCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbFwiO1xyXG5cclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlclwiO1xyXG5cclxuLy8g5pi+56S6IGRldGFpbCDnmoTlhoXlrrlcclxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoeyBpc3N1ZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8TWRSZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIOaJk+W8gElzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHsgaXNzdWUgfSkge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8g5L2/55SoIHVzZUNhbGxiYWNrIOeahOaWueW8j+abtOaWsOaIkeS7rOeahCBzdGF0ZSwg6ICM5LiN5piv5L6d6LWW5LqOIHVzZVN0YXRlIOi/lOWbnueahOi/meS4qiBzdGF0Ze+8jOi/meagt+aIkeS7rOWwseS4jeS+nei1luS6juWklumDqOWjsOaYjueahOWPmOmHj++8jOi/meagt+WwsemAg+i/h+S6humXreWMheOAglxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKChkZXRhaWwpID0+ICFkZXRhaWwpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMTAsIHRvcDogMTAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3dEZXRhaWwgPyBcIuafpeeci1wiIDogXCLpmpDol49cIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0YWVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IGlzc3VlcyB9KSB7XHJcbiAgY29uc29sZS5sb2coaXNzdWVzLCBcIisrKysrKysrKysrXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcCgoaXNzdWUpID0+IChcclxuICAgICAgICAgIDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzc3VlczogaXNzdWVzUmVzcC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwbyhEZXRhaWwsIFwiaXNzdWVzXCIpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\issues.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), showDetail ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(IssueDetail, {
      issue: issue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }, this) : null]
  }, void 0, true);
}

_s(IssueItem, "LTT526Ou6O4hV61O48R6pcPiPec=");

_c4 = IssueItem;

function Detail(_ref3) {
  var _this = this;

  var issues = _ref3.issues;
  console.log(issues, "+++++++++++");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-3345775914" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-3345775914" + " " + "issues",
      children: issues.map(function (issue) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(IssueItem, {
          issue: issue
        }, issue.id, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3345775914",
      children: ".issues.jsx-3345775914{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR1MsQUFHbUMsc0JBQ0osa0JBQ0MsbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHdpdGhSZXBvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3hcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuXHJcbmNvbnN0IE1kUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvTWFya0Zkb3duUmVuZGVyZXJcIikpO1xyXG5cclxuLy8g6L2s5LmJ5pe26Ze0XHJcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsXCI7XHJcblxyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyXCI7XHJcblxyXG4vLyDmmL7npLogZGV0YWlsIOeahOWGheWuuVxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7IGlzc3VlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxNZFJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAg5omT5byASXNzdWXorqjorrrpobXpnaJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oeyBpc3N1ZSB9KSB7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyDkvb/nlKggdXNlQ2FsbGJhY2sg55qE5pa55byP5pu05paw5oiR5Lus55qEIHN0YXRlLCDogIzkuI3mmK/kvp3otZbkuo4gdXNlU3RhdGUg6L+U5Zue55qE6L+Z5LiqIHN0YXRl77yM6L+Z5qC35oiR5Lus5bCx5LiN5L6d6LWW5LqO5aSW6YOo5aOw5piO55qE5Y+Y6YeP77yM6L+Z5qC35bCx6YCD6L+H5LqG6Zet5YyF44CCXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoKGRldGFpbCkgPT4gIWRldGFpbCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAxMCwgdG9wOiAxMCB9fVxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2hvd0RldGFpbCA/IFwi5p+l55yLXCIgOiBcIumakOiXj1wifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VXBkYXRhZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHsgaXNzdWVzIH0pIHtcclxuICBjb25zb2xlLmxvZyhpc3N1ZXMsIFwiKysrKysrKysrKytcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgIHtpc3N1ZXMubWFwKChpc3N1ZSkgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5EZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuXHJcbiAgY29uc3QgaXNzdWVzUmVzcCA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgaXNzdWVzOiBpc3N1ZXNSZXNwLmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvKERldGFpbCwgXCJpc3N1ZXNcIik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\issues.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

_c5 = Detail;

Detail.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$query, owner, name, issuesResp;

    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 3;
            return _lib_api__WEBPACK_IMPORTED_MODULE_9___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res);

          case 3:
            issuesResp = _context.sent;
            return _context.abrupt("return", {
              issues: issuesResp.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c6 = Object(_components_with_repo_basic_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(Detail, "issues"));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "MdRenderer$dynamic");
$RefreshReg$(_c2, "MdRenderer");
$RefreshReg$(_c3, "IssueDetail");
$RefreshReg$(_c4, "IssueItem");
$RefreshReg$(_c5, "Detail");
$RefreshReg$(_c6, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0NoZWNrT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9Eb3duT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9DaGVja091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvRG93bk91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0NoZWNrT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvRG93bk91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L3V0aWxzL2ljb25VdGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtb3ZlcmZsb3cvZXMvSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW92ZXJmbG93L2VzL092ZXJmbG93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtb3ZlcmZsb3cvZXMvaG9va3MvdXNlQmF0Y2hGcmFtZVN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtb3ZlcmZsb3cvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvT3B0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvT3B0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL1NlbGVjdFRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0b3IvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0b3IvTXVsdGlwbGVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9TZWxlY3Rvci9TaW5nbGVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9TZWxlY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9UcmFuc0J0bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9ob29rcy91c2VDYWNoZURpc3BsYXlWYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9ob29rcy91c2VDYWNoZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaG9va3MvdXNlRGVsYXlSZXNldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9ob29rcy91c2VMYXlvdXRFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaG9va3MvdXNlTG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9ob29rcy91c2VTZWxlY3RUcmlnZ2VyQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9pbnRlcmZhY2UvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL3V0aWxzL2NvbW1vblV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvdXRpbHMvbGVnYWN5VXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy91dGlscy92YWx1ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvdXRpbHMvd2FybmluZ1Byb3BzVXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvaG9va3MvdXNlTWVtby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvaG9va3MvdXNlTWVyZ2VkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3BpY2tBdHRycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9GaWxsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9MaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdmlydHVhbC1saXN0L2VzL1Njcm9sbEJhci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9ob29rcy91c2VDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9ob29rcy91c2VEaWZmSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9ob29rcy91c2VGcmFtZVdoZWVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdmlydHVhbC1saXN0L2VzL2hvb2tzL3VzZUhlaWdodHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvaG9va3MvdXNlTW9iaWxlVG91Y2hNb3ZlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdmlydHVhbC1saXN0L2VzL2hvb2tzL3VzZU9yaWdpblNjcm9sbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9ob29rcy91c2VTY3JvbGxUby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy91dGlscy9DYWNoZU1hcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy91dGlscy9hbGdvcml0aG1VdGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdmlydHVhbC1saXN0L2VzL3V0aWxzL2lzRmlyZWZveC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6WyJPcHRpb24iLCJTZWFyY2hVc2VyIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmZXRjaFVzZXIiLCJ2YWx1ZSIsImFwaSIsInJlcXVlc3QiLCJ1cmwiLCJ0aGVuIiwicmVwcyIsImRhdGEiLCJpdGVtcyIsIm1hcCIsInVzZXIiLCJ0ZXh0IiwibG9naW4iLCJvcHMiLCJNZFJlbmRlcmVyIiwiZHluYW1pYyIsIklzc3VlRGV0YWlsIiwiaXNzdWUiLCJib2R5IiwiaHRtbF91cmwiLCJJc3N1ZUl0ZW0iLCJzaG93RGV0YWlsIiwic2V0U2hvd0RldGFpbCIsInRvZ2dsZVNob3dEZXRhaWwiLCJ1c2VDYWxsYmFjayIsImRldGFpbCIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJhdmF0YXJfdXJsIiwidGl0bGUiLCJnZXRMYXN0VXBkYXRlZCIsInVwZGF0ZWRfYXQiLCJEZXRhaWwiLCJpc3N1ZXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsIm93bmVyIiwibmFtZSIsInJlcSIsInJlcyIsImlzc3Vlc1Jlc3AiLCJ3aXRoUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsdURBQU9BLE1BQXRCOztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFY0Msc0RBQVEsQ0FBQyxLQUFELENBRnRCO0FBQUEsTUFFWEMsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBQUEsbUJBSVlGLHNEQUFRLENBQUMsRUFBRCxDQUpwQjtBQUFBLE1BSVhHLE9BSlc7QUFBQSxNQUlGQyxVQUpFOztBQU1sQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxLQUFLLEVBQUk7QUFFdkJKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUUsY0FBVSxDQUFDLEVBQUQsQ0FBVixDQUh1QixDQUl2Qjs7QUFDQUcsbURBQUcsQ0FBQ0MsT0FBSixDQUFZO0FBQ1JDLFNBQUcsNEJBQXFCSCxLQUFyQjtBQURLLEtBQVosRUFFR0ksSUFGSCxDQUVRLFVBQUFDLElBQUksRUFBSTtBQUNaLFVBQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUFDLElBQUk7QUFBQSxlQUFLO0FBQ3RDQyxjQUFJLEVBQUVELElBQUksQ0FBQ0UsS0FEMkI7QUFFdENYLGVBQUssRUFBRVMsSUFBSSxDQUFDRTtBQUYwQixTQUFMO0FBQUEsT0FBeEIsQ0FBYjtBQUlBZixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBRSxnQkFBVSxDQUFDUSxJQUFELENBQVY7QUFDSCxLQVREO0FBWUgsR0FqQkQsQ0FOa0IsQ0F3QmxCO0FBQ0E7OztBQUNBLHNCQUFPO0FBQVEsY0FBVSxFQUFFLElBQXBCO0FBQTBCLG1CQUFlLEVBQUVYLFFBQVEsZ0JBQUc7QUFBTSxVQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTlFO0FBQTBHLGdCQUFZLEVBQUUsS0FBeEg7QUFBK0gsZUFBVyxFQUFDLG9CQUEzSTtBQUFpSixjQUFVLEVBQUUsSUFBN0o7QUFBbUssWUFBUSxFQUFFSSxTQUE3SztBQUFBLGNBRUNGLE9BQU8sQ0FBQ1csR0FBUixDQUFZLFVBQUFJLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxNQUFEO0FBQVEsYUFBSyxFQUFFQSxHQUFHLENBQUNaLEtBQW5CO0FBQUEsa0JBQTJDWSxHQUFHLENBQUNGO0FBQS9DLFNBQStCRSxHQUFHLENBQUNaLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQWY7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0FoQ1FQLFU7O0tBQUFBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSSTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLFVBQVUseUJBQXlCLG1EQUFtRCxnQkFBZ0IsMEJBQTBCLGtNQUFrTSxFQUFFLEdBQUc7QUFDNVY7Ozs7Ozs7Ozs7Ozs7QUNKYTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsb0JBQW9CLFVBQVUseUJBQXlCLG1EQUFtRCxnQkFBZ0IsMEJBQTBCLG1NQUFtTSxFQUFFLEdBQUc7QUFDNVY7Ozs7Ozs7Ozs7Ozs7QUNKYTtBQUNiO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsOENBQThDLG1CQUFPLENBQUMsOEZBQTJCOztBQUVqRix3Q0FBd0MsdUNBQXVDLGtCQUFrQjs7QUFFakc7QUFDQTtBQUNBLDRCOzs7Ozs7Ozs7Ozs7QUNaYTtBQUNiO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNkNBQTZDLG1CQUFPLENBQUMsNEZBQTBCOztBQUUvRSx3Q0FBd0MsdUNBQXVDLGtCQUFrQjs7QUFFakc7QUFDQTtBQUNBLDRCOzs7Ozs7Ozs7Ozs7QUNaYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsa0hBQTZDOztBQUVqRyx1Q0FBdUMsbUJBQU8sQ0FBQywyRkFBd0I7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBLDJCOzs7Ozs7Ozs7Ozs7QUM5QmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRiw4QkFBOEIsbUJBQU8sQ0FBQyxzSEFBK0M7O0FBRXJGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDJDQUEyQyxtQkFBTyxDQUFDLGdIQUE0Qzs7QUFFL0YsdUNBQXVDLG1CQUFPLENBQUMsMkZBQXdCOztBQUV2RTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQSwyQjs7Ozs7Ozs7Ozs7O0FDOUJhOztBQUViLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckYsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDhDQUE4QyxtQkFBTyxDQUFDLHNHQUF1Qzs7QUFFN0YsdUNBQXVDLG1CQUFPLENBQUMsd0ZBQWdDOztBQUUvRSxvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsbUNBQW1DLG1CQUFPLENBQUMsNERBQWtCOztBQUU3RCx5Q0FBeUMsbUJBQU8sQ0FBQyxzREFBWTs7QUFFN0Qsd0NBQXdDLG1CQUFPLENBQUMsdURBQVc7O0FBRTNELHNCQUFzQixtQkFBTyxDQUFDLDRFQUFvQjs7QUFFbEQsdUNBQXVDLG1CQUFPLENBQUMsMEVBQWtCOztBQUVqRSwwQ0FBMEMsbUJBQU8sQ0FBQyw4RkFBZ0M7O0FBRWxGLGNBQWMsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkhBQTJILGNBQWM7QUFDekk7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsMERBQTBEOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRzs7O0FBR0gsa0dBQWtHO0FBQ2xHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1SEFBdUg7QUFDdkg7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7Ozs7Ozs7O0FDOUlhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCwyQ0FBMkMsbUJBQU8sQ0FBQyx3RkFBZ0M7O0FBRW5GLDhDQUE4QyxtQkFBTyxDQUFDLDhGQUFtQzs7QUFFekYsNENBQTRDLG1CQUFPLENBQUMsMEZBQWlDOztBQUVyRiw0Q0FBNEMsbUJBQU8sQ0FBQywwRkFBaUM7O0FBRXJGLGdEQUFnRCxtQkFBTyxDQUFDLGtHQUFxQzs7QUFFN0YsNkNBQTZDLG1CQUFPLENBQUMsNEZBQWtDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOzs7QUFHSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNXO0FBQ3FCO0FBQzNEO0FBQ0s7QUFDWTtBQUNqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrR0FBd0I7O0FBRTFDLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBOztBQUVBLEVBQUUsK0NBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNOztBQUVUO0FBQ0EsOEJBQThCLG1EQUFtQixZQUFZLGtGQUFRO0FBQ3JFLGVBQWUsaURBQVU7QUFDekIsV0FBVyx3RkFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSw0QkFBNEIsbURBQW1CLENBQUMsMERBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNZO0FBQ29CO0FBQzNEO0FBQ3dCO0FBQ25CO0FBQ1k7QUFDdEI7QUFDc0M7QUFDaEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0dBQXdCOztBQUUxQyx1QkFBdUIsb0ZBQWtCOztBQUV6QztBQUNBLHlCQUF5Qix3RkFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHdGQUFjO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsd0ZBQWM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3RkFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHdGQUFjO0FBQ3hDO0FBQ0E7O0FBRUEsa0JBQWtCLHNEQUFRO0FBQzFCLG1CQUFtQix3RkFBYztBQUNqQztBQUNBOztBQUVBLG1CQUFtQixzREFBUTtBQUMzQixtQkFBbUIsd0ZBQWM7QUFDakM7QUFDQTs7QUFFQSxtQkFBbUIsc0RBQVE7QUFDM0IsbUJBQW1CLHdGQUFjO0FBQ2pDO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRCwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHFEQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxxQkFBcUIscURBQU87QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxrREFBa0Q7O0FBRXJELGVBQWUseURBQVc7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILHlCQUF5Qix5REFBVztBQUNwQztBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBLEVBQUUscURBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QiwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyw0RUFBNEU7O0FBRS9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBbUIsWUFBWSxrRkFBUTtBQUN6RSxlQUFlLGlEQUFVO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsbURBQW1CLENBQUMsNkNBQUksRUFBRSxrRkFBUSxHQUFHO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsMkJBQTJCLG1EQUFtQixDQUFDLDZDQUFJLEVBQUUsa0ZBQVEsR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyw0R0FBNEcsbURBQW1CLENBQUMsNkNBQUksRUFBRSxrRkFBUSxHQUFHO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsZ0NBQWdDLG1EQUFtQixDQUFDLDBEQUFjO0FBQ2xFO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLGdEQUFnQjtBQUNuRCx5Q0FBeUM7O0FBRTFCLDhFQUFlLEU7Ozs7Ozs7Ozs7OztBQzFROUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNFO0FBQ2xCO0FBQ25CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asa0JBQWtCLHNEQUFRLEdBQUc7QUFDN0IsbUJBQW1CLHdGQUFjO0FBQ2pDOztBQUVBLGtCQUFrQixvREFBTTtBQUN4QixtQkFBbUIsb0RBQU07QUFDekI7QUFDQTtBQUNBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxzREFBRyx1QkFBdUI7O0FBRWhDLHNCQUFzQiw4REFBRztBQUN6QjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBa0M7QUFDbkIsZ0hBQVEsRTs7Ozs7Ozs7Ozs7O0FDRHZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNOdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLHFFQUFNLEU7Ozs7Ozs7Ozs7OztBQ05yQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdFO0FBQ2tCO0FBQ2hDO0FBQ1k7QUFDdkM7QUFDVTtBQUNJO0FBQ0U7QUFDWDtBQUNEO0FBQ0Q7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdFQUFPO0FBQ2xDO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRyxFQUFFOztBQUVMLGdCQUFnQiw0Q0FBWTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLDhDQUFjO0FBQ3RDO0FBQ0EsR0FBRztBQUNILHlCQUF5Qix3RkFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0osRUFBRSwrQ0FBZTtBQUNqQjtBQUNBLEdBQUcsNENBQTRDOztBQUUvQyxFQUFFLCtDQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osRUFBRSx5REFBeUI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDBEQUFPO0FBQ3RCLGVBQWUsMERBQU87QUFDdEI7QUFDQTs7QUFFQSw0QkFBNEIsMERBQU87QUFDbkM7QUFDQSxlQUFlLG9CQUFvQiwwREFBTztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsMERBQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsMERBQU87QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDtBQUNBLHdCQUF3QixtREFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQVM7QUFDekI7QUFDQSwrQkFBK0IsbURBQW1CLFFBQVEsa0ZBQVE7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsc0JBQXNCLG1EQUFtQixDQUFDLDhDQUFjLHFCQUFxQixtREFBbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLG1HQUFtRyxtREFBbUIsQ0FBQyx1REFBSTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQSwwQkFBMEIsbURBQW1CO0FBQzdDLG1CQUFtQixpREFBVTtBQUM3QixPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtHQUF3Qix5RUFBeUU7OztBQUd0SDtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFVLDZEQUE2RCxFQUFFLHlGQUFlLG9FQUFvRSx5RkFBZSw4RkFBOEYseUZBQWUsa0VBQWtFLHlGQUFlO0FBQ25ZO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbURBQW1CLFFBQVEsa0ZBQVEsR0FBRztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUssZ0JBQWdCLG1EQUFtQjtBQUN4QztBQUNBLEtBQUsseUJBQXlCLG9EQUFvQixnRUFBZ0UsbURBQW1CLENBQUMsa0RBQVE7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUNBQWlDLGdEQUFnQjtBQUNqRDtBQUNlLDRFQUFhLEU7Ozs7Ozs7Ozs7OztBQ3ZVNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ2M7QUFDTjtBQUNOO0FBQ007O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUNhO0FBQ2Q7QUFDSTtBQUN3RDtBQUNpSztBQUNqTjtBQUNVO0FBQ3BELGdCQUFnQiwwREFBZ0I7QUFDaEM7QUFDQTtBQUNBLGdCQUFnQixtREFBZ0I7QUFDaEMsR0FBRztBQUNILHlCQUF5Qix1RUFBMkI7QUFDcEQsa0JBQWtCLGdFQUFjO0FBQ2hDLG1CQUFtQixpRUFBcUI7QUFDeEMsaUJBQWlCLCtEQUEwQjtBQUMzQyxtQkFBbUIsaUVBQXFCO0FBQ3hDLG1CQUFtQixpRUFBcUI7QUFDeEMsZ0JBQWdCLGdFQUFZO0FBQzVCLCtCQUErQiw2RUFBMkI7QUFDMUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtRkFBUzs7QUFFWCxlQUFlLHNGQUFZOztBQUUzQjtBQUNBOztBQUVBLElBQUkseUZBQWU7O0FBRW5CO0FBQ0EsbUNBQW1DLCtDQUFlOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxzRkFBWTtBQUNkO0FBQ0E7QUFDQSwwQkFBMEIsbURBQW1CLFlBQVksa0ZBQVE7QUFDakU7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLCtDQUFlOztBQUVqQixnQkFBZ0IsK0NBQU07QUFDdEIsa0JBQWtCLGlEQUFRO0FBQ1gscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDckdyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNjO0FBQ0g7QUFDcUI7QUFDM0Q7QUFDRTtBQUNHOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0dBQXdCOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsNkNBQWE7QUFDdkM7QUFDQSxHQUFHLDhCQUE4Qjs7QUFFakMsOEdBQThHOztBQUU5RyxpQkFBaUIsNENBQVk7QUFDN0IsRUFBRSx5REFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsbUJBQW1CLHdGQUFhO0FBQ2hDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsc0JBQXNCLG1EQUFtQixDQUFDLGtEQUFPLEVBQUUsa0ZBQVEsR0FBRztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQW1CO0FBQzNDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBVSxvQkFBb0IseUZBQWUsR0FBRztBQUNwRTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLG9DQUFvQyxnREFBZ0I7QUFDcEQ7QUFDZSwrRUFBZ0IsRTs7Ozs7Ozs7Ozs7O0FDMUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRTtBQUN0QztBQUNLO0FBQ1E7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbURBQW1CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBa0IsWUFBWSx3RkFBYSxDQUFDLHdGQUFhO0FBQ3BGO0FBQ0EsU0FBUyxpRUFBVTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QixXQUFXLHdGQUFhLENBQUMsd0ZBQWEsR0FBRyxZQUFZO0FBQ3JEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRCQUE0QixnREFBZ0I7QUFDNUM7QUFDZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUN2R3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNGO0FBQ3ZDO0FBQ0U7QUFDRztBQUNTO0FBQ1Y7QUFDQTtBQUNQO0FBQzJCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFZOztBQUUvQixrQkFBa0Isc0RBQVE7QUFDMUIsbUJBQW1CLHdGQUFjO0FBQ2pDO0FBQ0E7O0FBRUEsbUJBQW1CLHNEQUFRO0FBQzNCLG1CQUFtQix3RkFBYztBQUNqQztBQUNBOztBQUVBLDhEQUE4RDs7QUFFOUQ7QUFDQSx5RUFBeUU7O0FBRXpFLEVBQUUsc0VBQWU7QUFDakI7QUFDQSxHQUFHLGdCQUFnQjtBQUNuQjs7QUFFQTtBQUNBLHdCQUF3QixtREFBbUI7QUFDM0MsaUJBQWlCLGlEQUFVLHlDQUF5Qyx5RkFBZSxHQUFHO0FBQ3RGLEtBQUssZUFBZSxtREFBbUI7QUFDdkM7QUFDQSxLQUFLLHFDQUFxQyxtREFBbUIsQ0FBQyxpREFBUTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtREFBbUI7QUFDM0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCwrQkFBK0IsbURBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZSxtREFBbUIsQ0FBQyw4Q0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9FQUFTO0FBQ3BCLEdBQUcsZ0JBQWdCLG1EQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHLHVCQUF1Qjs7QUFFMUIsbUNBQW1DLG1EQUFtQixDQUFDLG1EQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixtREFBbUIsQ0FBQyw4Q0FBYyxxRUFBcUUsbURBQW1CO0FBQ2hKO0FBQ0EsR0FBRztBQUNIOztBQUVlLDZFQUFjLEU7Ozs7Ozs7Ozs7OztBQ3ZMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNFO0FBQ3ZDO0FBQ2M7QUFDakI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsOENBQWM7QUFDdEMseUJBQXlCLHdGQUFjO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsK0NBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRywyQkFBMkI7O0FBRTlCO0FBQ0E7QUFDQSxzQkFBc0IsbURBQW1CLENBQUMsOENBQWMscUJBQXFCLG1EQUFtQjtBQUNoRztBQUNBLEdBQUcsZUFBZSxtREFBbUIsQ0FBQyw4Q0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0VBQVM7QUFDcEI7QUFDQSxHQUFHLHVEQUF1RCxtREFBbUI7QUFDN0U7QUFDQTtBQUNBLEdBQUcsc0RBQXNELG1EQUFtQjtBQUM1RTtBQUNBLEdBQUc7QUFDSDs7QUFFZSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUN0RjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNZOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0I7QUFDQTtBQUNVO0FBQ1M7QUFDSjtBQUNQOztBQUV2QztBQUNBLGlCQUFpQixvREFBTTtBQUN2Qiw2QkFBNkIsb0RBQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCLEVBQUUseURBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTs7QUFFTCxpQkFBaUIsOERBQU87QUFDeEIsa0JBQWtCLHdGQUFjO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsMERBQU8saUJBQWlCLDBEQUFPO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwwREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLDBEQUFPLFFBQVEsMERBQU8sTUFBTSwwREFBTyxZQUFZLDBEQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osc0JBQXNCLG9EQUFNOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1EQUFtQixDQUFDLHlEQUFnQixFQUFFLGtGQUFRLEdBQUcsc0NBQXNDLG1EQUFtQixDQUFDLHVEQUFjLEVBQUUsa0ZBQVEsR0FBRztBQUNqTCxzQkFBc0IsbURBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLG1DQUFtQyxnREFBZ0I7QUFDbkQ7QUFDZSw4RUFBZSxFOzs7Ozs7Ozs7Ozs7QUMvSzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDSzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsc0JBQXNCLG1EQUFtQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHLDJDQUEyQyxtREFBbUI7QUFDakUsZUFBZSxpREFBVTtBQUN6QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDekN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDYztBQUNIO0FBQ1M7QUFDUjtBQUNvQjs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUM4QjtBQUNwQjtBQUNFO0FBQ1A7QUFDeUI7QUFDM0I7QUFDVTtBQUNnQjtBQUNzQztBQUNoRTtBQUNJO0FBQ1k7QUFDSTtBQUNFO0FBQ2M7QUFDTjtBQUNWO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsb0JBQW9CLGtHQUF3Qjs7QUFFNUMsa0RBQWtELHlFQUFtQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLG9EQUFNO0FBQzdCLHFCQUFxQixvREFBTTtBQUMzQixzQkFBc0Isb0RBQU07QUFDNUIsa0JBQWtCLG9EQUFNO0FBQ3hCLHlCQUF5QixxREFBTztBQUNoQztBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQSx5QkFBeUIscUVBQWE7QUFDdEMsMEJBQTBCLHdGQUFjO0FBQ3hDO0FBQ0E7QUFDQSxrREFBa0Q7OztBQUdsRCxvQkFBb0Isc0RBQVE7QUFDNUIscUJBQXFCLHdGQUFjO0FBQ25DO0FBQ0E7O0FBRUEsSUFBSSx1REFBUztBQUNiLHFDQUFxQyxrRUFBTztBQUM1QyxLQUFLO0FBQ0wsaUNBQWlDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLHFHQUFxRzs7QUFFckcscUJBQXFCLHNEQUFRO0FBQzdCLHFCQUFxQix3RkFBYztBQUNuQztBQUNBOztBQUVBLElBQUksdURBQVM7QUFDYjtBQUNBLGdCQUFnQixtRUFBUTtBQUN4QixLQUFLLE1BQU07O0FBRVgseUJBQXlCLG9EQUFNO0FBQy9CLElBQUkseURBQXlCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsMEJBQTBCLGdGQUFjO0FBQ3hDO0FBQ0EsS0FBSztBQUNMLDJCQUEyQix3RkFBYztBQUN6QztBQUNBO0FBQ0E7OztBQUdBLG1CQUFtQixxREFBTztBQUMxQixhQUFhLHVFQUFZO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLG9CQUFvQix3RkFBYztBQUNsQztBQUNBO0FBQ0E7OztBQUdBLG9CQUFvQixxREFBTztBQUMzQjtBQUNBLEtBQUssb0JBQW9CO0FBQ3pCOztBQUVBLHFCQUFxQixzREFBUTtBQUM3QixxQkFBcUIsd0ZBQWM7QUFDbkM7QUFDQTs7QUFFQSxxQkFBcUIsc0RBQVE7QUFDN0IscUJBQXFCLHdGQUFjO0FBQ25DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHdCQUF3QixxREFBTztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixxREFBTztBQUN0QztBQUNBLEtBQUs7QUFDTCx5QkFBeUIsdUVBQWUsdUJBQXVCOztBQUUvRCx5QkFBeUIscURBQU87QUFDaEM7QUFDQSxlQUFlLDRGQUFrQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxlQUFlLDRGQUFrQjtBQUNqQzs7QUFFQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0MscURBQU87QUFDdkM7QUFDQSxLQUFLO0FBQ0wsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCOztBQUU1Qix3QkFBd0IscURBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZUFBZSx3RkFBYSxDQUFDLHdGQUFhLEdBQUcsbUJBQW1CO0FBQ2hFO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxzQ0FBc0M7O0FBRTNDLG9CQUFvQiw0RUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOLHFCQUFxQixzREFBUTtBQUM3QixzQkFBc0Isd0ZBQWM7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix3RUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0Esc0JBQXNCLHdGQUFhLEdBQUc7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1AsK0RBQStEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsd0ZBQWEsQ0FBQyx3RkFBYSxHQUFHLFdBQVc7QUFDMUU7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxpQ0FBaUMsd0ZBQWEsQ0FBQyx3RkFBYSxHQUFHLFdBQVc7QUFDMUU7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOOzs7QUFHQSxvR0FBb0c7O0FBRXBHLDJCQUEyQixnRkFBYztBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQix3RkFBYztBQUN6QztBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksK0VBQXVCLGdIQUFnSDs7QUFFM0k7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQiwrQ0FBK0MsNkVBQW1CO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQSx3REFBd0QsNEZBQWtCLGtCQUFrQiw0RkFBa0I7QUFDOUc7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYLDRCQUE0Qjs7QUFFNUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0QsNEZBQWtCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07OztBQUdOLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLLGNBQWM7O0FBRW5CLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwrREFBTztBQUMxQixvQkFBb0Isd0ZBQWM7QUFDbEM7QUFDQSxvQ0FBb0M7OztBQUdwQztBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDBEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3Qzs7QUFFeEMsb0JBQW9CLDBEQUFPO0FBQzNCLHlCQUF5QixpRkFBc0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEZBQTRGLGFBQWE7QUFDekc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxnR0FBZ0csZUFBZTtBQUMvRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOzs7QUFHQSxtQkFBbUIsb0RBQU07O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDRGQUFrQjtBQUN2RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxzR0FBc0csZUFBZTtBQUNySDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTixzQkFBc0Isc0RBQVE7QUFDOUIsc0JBQXNCLHdGQUFjO0FBQ3BDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTixzQkFBc0Isc0RBQVE7QUFDOUIsc0JBQXNCLHdGQUFjO0FBQ3BDO0FBQ0E7O0FBRUEsc0JBQXNCLHNEQUFRLEdBQUc7QUFDakMsc0JBQXNCLHdGQUFjO0FBQ3BDLHFDQUFxQzs7O0FBR3JDO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLElBQUksdUVBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxpQ0FBaUMsbURBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsbURBQW1CLENBQUMsa0RBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsbURBQW1CLENBQUMsa0RBQVE7QUFDM0QsbUJBQW1CLGlEQUFVLGlDQUFpQyx5RkFBZSxHQUFHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0wsUUFBUSxLQUFxQztBQUM3QztBQUNBLEtBQUs7OztBQUdMLDBCQUEwQixpREFBVSx5Q0FBeUMsRUFBRSx5RkFBZSwrREFBK0QseUZBQWUsK0RBQStELHlGQUFlLDhEQUE4RCx5RkFBZSxrRUFBa0UseUZBQWUsc0VBQXNFLHlGQUFlLDZEQUE2RCx5RkFBZSwyREFBMkQseUZBQWUsMkRBQTJELHlGQUFlLGlGQUFpRix5RkFBZTtBQUM3eUIsd0JBQXdCLG1EQUFtQixRQUFRLGtGQUFRO0FBQzNEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssOENBQThDLG1EQUFtQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLLHNEQUFzRCxtREFBbUIsQ0FBQyx1REFBYTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSxtREFBbUIsQ0FBQyxrREFBUSxFQUFFLGtGQUFRLEdBQUc7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsK0JBQStCLGdEQUFnQjtBQUMvQztBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2w0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRTtBQUN0QztBQUNoQjtBQUNmLHNCQUFzQiw0Q0FBWTtBQUNsQyxxQkFBcUIsNkNBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0ZBQWEsQ0FBQyx3RkFBYSxHQUFHLFdBQVc7QUFDeEQ7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNoQjtBQUNmLHlCQUF5Qiw0Q0FBWTtBQUNyQyxrQkFBa0IsNkNBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0U7QUFDdkM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSx3QkFBd0IsOENBQWM7QUFDdEMseUJBQXlCLHdGQUFjO0FBQ3ZDO0FBQ0E7O0FBRUEsaUJBQWlCLDRDQUFZOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwrQ0FBZTtBQUNqQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrQjtBQUN1QjtBQUN0RDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLE1BQU0saUVBQWU7QUFDckI7QUFDQSxJQUFJLHFEQUFxQjtBQUN6QixHQUFHO0FBQ0gsSUFBSSwrQ0FBZTtBQUNuQjtBQUNBO0FBQ0EsbUI7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLGdCQUFnQiw0Q0FBWTtBQUM1QixtQkFBbUIsNENBQVksT0FBTzs7QUFFdEMsRUFBRSwrQ0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNoQjtBQUNmLGlCQUFpQiw0Q0FBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0E7QUFDSTtBQUNOO0FBQ2IsOEdBQU0sRTs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQUE7QUFBTywwRDs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThFO0FBQ3ZFO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNPO0FBQ1Asa0JBQWtCLDRGQUFrQjs7QUFFcEM7O0FBRUEsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFTyxzQkFBc0IsS0FBK0I7QUFDNUQ7QUFDQTs7QUFFTztBQUNQLFlBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMxR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUU7QUFDcUI7QUFDM0Q7QUFDbUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0dBQXdCOztBQUUxQyxTQUFTLHdGQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0EsU0FBUywyRUFBTztBQUNoQix1QkFBdUIsb0RBQW9CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0dBQXdCOztBQUU1QztBQUNBO0FBQ0E7O0FBRUEsV0FBVyx3RkFBYSxDQUFDLHdGQUFhO0FBQ3RDO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNkO0FBQ29CO0FBQ3RCO0FBQ2E7QUFDNUI7QUFDRjs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isd0ZBQWEsR0FBRzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBTztBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFTztBQUNQLG1GQUFtRjtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQSxlQUFlLHdGQUFhLEdBQUc7QUFDL0I7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsaUZBQU87QUFDNUI7O0FBRUE7QUFDQSxNQUFNLGtFQUFPO0FBQ2I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsMkRBQU87QUFDaEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNEZBQWtCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLCtCQUErQix3RkFBYSxDQUFDLHdGQUFhLEdBQUcsV0FBVztBQUN4RTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixrRkFBUTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEZBQWtCLFlBQVksNEZBQWtCO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGVBQWUsMkRBQU87O0FBRXRCLHFCQUFxQiw0RkFBa0IsVUFBVTs7O0FBR2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtEQUFrRCxFQUFFLHlGQUFlLHNDQUFzQyx5RkFBZTtBQUN4SDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzNRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ3pCO0FBQ3dCO0FBQ0Q7QUFDRDtBQUNkOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUVBQXFCLFdBQVc7O0FBRWpFLEVBQUUsa0VBQU87QUFDVDtBQUNBLEdBQUcsbUdBQW1HOztBQUV0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUksa0VBQU87QUFDWCxHQUFHOzs7QUFHSCxFQUFFLGtFQUFPLG1JQUFtSTs7QUFFNUksRUFBRSxrRUFBTyxrRkFBa0Y7O0FBRTNGLEVBQUUsa0VBQU8sK0ZBQStGOztBQUV4RyxFQUFFLG1FQUFRLDRNQUE0TTs7QUFFdE47QUFDQSxJQUFJLGtFQUFPO0FBQ1g7O0FBRUEsRUFBRSxtRUFBUTs7QUFFVjtBQUNBLGlCQUFpQiwyREFBTztBQUN4QixJQUFJLGtFQUFPO0FBQ1gsYUFBYSxpRkFBTztBQUNwQixLQUFLLGlDQUFpQyw0Q0FBNEM7QUFDbEYsSUFBSSxrRUFBTztBQUNYLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxJQUFJLDJFQUFXO0FBQ2YseUJBQXlCLG9EQUFvQjtBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQiwyRUFBVztBQUMxQyw2QkFBNkIsb0RBQW9CO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxNQUFNLGtFQUFPO0FBQ2I7O0FBRUEsSUFBSSxrRUFBTztBQUNYO0FBQ0E7O0FBRWUsMkVBQVksRTs7Ozs7Ozs7Ozs7O0FDOUczQjtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNoQjtBQUNmLGlCQUFpQiw0Q0FBWSxHQUFHOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0U7QUFDdkM7QUFDaEI7QUFDZix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDhDQUFjO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLHdGQUFjO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0gsdUJBQXVCLDRDQUFZO0FBQ25DLEVBQUUsK0NBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUF3RTs7QUFFeEUsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELENBQUMseUZBQWUsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLDZDQUE2QywyRUFBMkUsRUFBRSxPQUFPLGlEQUFpRCxrRkFBa0YsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUVwaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsRUFBRTtBQUNoRjs7O0FBR2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxpREFBaUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFcGhCLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUVoTDtBQUNpQjtBQUNaO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsZ0RBQWdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQkFBaUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxzQkFBc0IsbURBQW1CO0FBQ3pDO0FBQ0EsR0FBRyxlQUFlLG1EQUFtQixDQUFDLDBEQUFjO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWUsbURBQW1CO0FBQ3JDO0FBQ0EsZUFBZSxpREFBVSxtQkFBbUI7QUFDNUM7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ2UscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDekRyQjtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUN4QjtBQUNQO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQWlCO0FBQ2pDO0FBQ0EsR0FBRztBQUNILHNCQUFzQixrREFBa0I7QUFDeEM7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBQTBDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxnRUFBZ0UsRUFBRSxFQUFFLGdDQUFnQyxFQUFFLGFBQWE7O0FBRW5WLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELDJDQUEyQyxFQUFFLEVBQUUsRUFBRSw2Q0FBNkMsMkVBQTJFLEVBQUUsT0FBTyxpREFBaUQsa0ZBQWtGLEVBQUUsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFcGhCLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTSxpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRSxxREFBcUQsK0JBQStCLDhEQUE4RCxZQUFZLG9DQUFvQyw2REFBNkQsWUFBWSw2QkFBNkIsT0FBTywyQkFBMkIsMENBQTBDLHdFQUF3RSwyQkFBMkIsRUFBRSxFQUFFLGVBQWU7O0FBRTFlLDBEQUEwRCwrQkFBK0IsaUJBQWlCLHNDQUFzQyxZQUFZLFlBQVksdUJBQXVCLE9BQU8scUJBQXFCLDBDQUEwQywyQkFBMkIsRUFBRSxlQUFlOztBQUVsUjtBQUNVO0FBQ0w7QUFDTjtBQUNNO0FBQ1U7QUFDRjtBQUNFO0FBQ0E7QUFDSTtBQUNVO0FBQ047QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ01BQWdNOzs7QUFHaE07QUFDQTs7QUFFQSxrQkFBa0Isc0RBQVE7QUFDMUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixzREFBUTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGlEQUFVO0FBQ2xDO0FBQ0EscUJBQXFCLG9EQUFNO0FBQzNCLHVCQUF1QixvREFBTTtBQUM3QixxQkFBcUIsb0RBQU0sR0FBRztBQUM5Qjs7QUFFQSxlQUFlLGlEQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7QUFHQSxpQkFBaUIsb0RBQU07QUFDdkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxvQkFBb0Isb0RBQU07O0FBRTFCLHFCQUFxQixrRUFBVztBQUNoQztBQUNBOztBQUVBLGlDQUFpQzs7QUFFakMsb0JBQW9CLGlFQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOzs7QUFHMUMsdUJBQXVCLDZDQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBLDJCQUEyQixvREFBTTtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQix1RUFBZSxrQ0FBa0M7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsR0FBRzs7O0FBR0gsdUJBQXVCLG9FQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJDQUEyQzs7O0FBRzNDLEVBQUUseUVBQWtCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSCxFQUFFLHFEQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCOztBQUVuQixpQkFBaUIsa0VBQVc7QUFDNUI7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsRUFBRSx5REFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMLHFCQUFxQixrRUFBVztBQUNoQzs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixtREFBbUI7QUFDekMseUNBQXlDLFlBQVk7QUFDckQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHLDJCQUEyQixtREFBbUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWUsbURBQW1CLENBQUMsK0NBQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkNBQTZDLG1EQUFtQixDQUFDLGtEQUFTO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsZ0RBQWdCO0FBQ3hDO0FBQ2UsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDcFZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF1QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUV4WCwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL00saURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFBeUUsZUFBZSxzREFBc0QsRUFBRSxFQUFFLHVEQUF1RDs7QUFFL1gsZ0NBQWdDLDRFQUE0RSxpQkFBaUIsVUFBVSxHQUFHLDhCQUE4Qjs7QUFFeEssZ0NBQWdDLDZEQUE2RCx5Q0FBeUMsOENBQThDLGlDQUFpQyxtREFBbUQseURBQXlELEVBQUUsT0FBTyx1Q0FBdUMsRUFBRSxpREFBaUQsR0FBRzs7QUFFdmEsaURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLHNDQUFzQyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLHdFQUF3RSxHQUFHLGFBQWEsRUFBRSxZQUFZLGNBQWMsRUFBRTs7QUFFbFUsNkJBQTZCLGdHQUFnRyxnREFBZ0QsR0FBRywyQkFBMkI7O0FBRTVLO0FBQ0s7QUFDSDtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQWU7QUFDckQsa0NBQWtDLCtDQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU0sc0RBQUc7QUFDVCxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBRzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw4REFBRztBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPLGVBQWUsbURBQW1CO0FBQ3pDO0FBQ0EsbUJBQW1CLGlEQUFVLDZEQUE2RDtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsK0NBQWU7Ozs7Ozs7Ozs7Ozs7O0FDcFJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ0E7QUFDaEI7QUFDZjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsd0NBQXdDLHVCQUF1QixLQUFLO0FBQy9HLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixtREFBbUIsQ0FBQywwQ0FBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVwQztBQUM0QjtBQUM1QztBQUNmLHdCQUF3Qiw4Q0FBYztBQUN0QztBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDhDQUFjO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLCtDQUFlO0FBQ2pCLGVBQWUsOEVBQWlCOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNFO0FBQ0s7QUFDVTtBQUNqQztBQUNmLGtCQUFrQixvREFBTTtBQUN4QixxQkFBcUIsb0RBQU0sT0FBTzs7QUFFbEMsc0JBQXNCLG9EQUFNO0FBQzVCLHlCQUF5QixvREFBTSxRQUFROztBQUV2QyxxQkFBcUIsZ0VBQWU7O0FBRXBDO0FBQ0E7QUFDQSxJQUFJLHNEQUFHO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkMscUNBQXFDOztBQUVyQyxTQUFTLHdEQUFJO0FBQ2I7QUFDQTs7QUFFQSwyQkFBMkIsOERBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVwQztBQUNBO0FBQ3NCO0FBQ1o7QUFDMUI7QUFDZix3QkFBd0IsOENBQWM7QUFDdEM7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvREFBTTtBQUMxQixtQkFBbUIsb0RBQU0sS0FBSyx1REFBUTtBQUN0QywwQkFBMEIsb0RBQU07O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEVBQVc7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNBO0FBQy9CO0FBQ2U7QUFDZixtQkFBbUIsb0RBQU07QUFDekIsa0JBQWtCLG9EQUFNO0FBQ3hCLG1CQUFtQixvREFBTSxPQUFPOztBQUVoQyxvQkFBb0Isb0RBQU07QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxxREFBcUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUErQjtBQUNmO0FBQ2hCO0FBQ0EsZ0JBQWdCLG9EQUFNO0FBQ3RCLHVCQUF1QixvREFBTTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSCxzQkFBc0Isb0RBQU07QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXVCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQytCO0FBQ0U7QUFDbEI7QUFDZixrQkFBa0IsNENBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLElBQUksc0RBQUc7O0FBRVA7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdULDRCQUE0Qiw4REFBRztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBMEI7QUFDWCw0R0FBSSxFOzs7Ozs7Ozs7Ozs7QUNEbkI7QUFBQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVjLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQzlCdkI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBLHVCQUF1QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUV4WDtBQUNlLG1FQUFJLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm5CO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTW9CLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNkpBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDhFQUFkO0FBQUE7QUFBQSxjQUFjLG9DQUFkO0FBQUE7QUFBQSxFQUExQixDLENBRUE7O01BRk1ELFU7QUFHTjtDQUlBOztBQUNBLFNBQVNFLFdBQVQsT0FBZ0M7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDOUIsc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0UscUVBQUMsVUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDBDQUFlLFNBQWY7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBRUQsS0FBSyxDQUFDRSxRQUFwQjtBQUE4QixjQUFNLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O01BcEJRSCxXOztBQXNCVCxTQUFTSSxTQUFULFFBQThCO0FBQUE7O0FBQUEsTUFBVEgsS0FBUyxTQUFUQSxLQUFTOztBQUFBLGtCQUNRdEIsc0RBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDckIwQixVQURxQjtBQUFBLE1BQ1RDLGFBRFMsaUJBRzVCOzs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3pDRixpQkFBYSxDQUFDLFVBQUNHLE1BQUQ7QUFBQSxhQUFZLENBQUNBLE1BQWI7QUFBQSxLQUFELENBQWI7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxPQUFmO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUUsVUFBWjtBQUF3QkMsZUFBSyxFQUFFLEVBQS9CO0FBQW1DQyxhQUFHLEVBQUU7QUFBeEMsU0FIVDtBQUlFLGVBQU8sRUFBRUwsZ0JBSlg7QUFBQSxrQkFNR0YsVUFBVSxHQUFHLElBQUgsR0FBVTtBQU52QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRTtBQUFBLDRDQUFlLFFBQWY7QUFBQSwrQkFDRTtBQUFRLGFBQUcsRUFBRUosS0FBSyxDQUFDUCxJQUFOLENBQVdtQixVQUF4QjtBQUFvQyxlQUFLLEVBQUMsUUFBMUM7QUFBbUQsY0FBSSxFQUFFO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFZRTtBQUFBLDRDQUFlLFdBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUEsaUNBQ0U7QUFBQTtBQUFBLHNCQUFPWixLQUFLLENBQUNhO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBLDhDQUFhLFVBQWI7QUFBQSxpQ0FDRTtBQUFBO0FBQUEsdUNBQW1CQyxpRUFBYyxDQUFDZCxLQUFLLENBQUNlLFVBQVAsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQW1ER1gsVUFBVSxnQkFBRyxxRUFBQyxXQUFEO0FBQWEsV0FBSyxFQUFFSjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBbUMsSUFuRGhEO0FBQUEsa0JBREY7QUF1REQ7O0dBOURRRyxTOztNQUFBQSxTOztBQWdFVCxTQUFTYSxNQUFULFFBQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxTQUFWQSxNQUFVO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQUFvQixhQUFwQjtBQUNBLHNCQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBLDRCQUNFO0FBQUEsMENBQWUsUUFBZjtBQUFBLGdCQUNHQSxNQUFNLENBQUN6QixHQUFQLENBQVcsVUFBQ1EsS0FBRDtBQUFBLDRCQUNWLHFFQUFDLFNBQUQ7QUFBVyxlQUFLLEVBQUVBO0FBQWxCLFdBQThCQSxLQUFLLENBQUNvQixFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7TUFyQlFKLE07O0FBdUJUQSxNQUFNLENBQUNLLGVBQVA7QUFBQSxxVUFBeUIsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNDQSxHQUFHLENBQUNDLEtBREwsRUFDZkMsS0FEZSxjQUNmQSxLQURlLEVBQ1JDLElBRFEsY0FDUkEsSUFEUTtBQUFBO0FBQUEsbUJBR0V4QywrQ0FBRyxDQUFDQyxPQUFKLENBQ3ZCO0FBQ0VDLGlCQUFHLG1CQUFZcUMsS0FBWixjQUFxQkMsSUFBckI7QUFETCxhQUR1QixFQUl2QkgsR0FBRyxDQUFDSSxHQUptQixFQUt2QkosR0FBRyxDQUFDSyxHQUxtQixDQUhGOztBQUFBO0FBR2pCQyxzQkFIaUI7QUFBQSw2Q0FVaEI7QUFDTFgsb0JBQU0sRUFBRVcsVUFBVSxDQUFDdEM7QUFEZCxhQVZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlZSxxRUFBQXVDLCtFQUFRLENBQUNiLE1BQUQsRUFBUyxRQUFULENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuYzM3MTZmNWE0NjViMWRkYzFmNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9saWIvYXBpJ1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvblxyXG5cclxuZnVuY3Rpb24gU2VhcmNoVXNlcigpIHtcclxuXHJcbiAgICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlciA9IHZhbHVlID0+IHtcclxuXHJcbiAgICAgICAgc2V0RmV0Y2hpbmcodHJ1ZSlcclxuICAgICAgICBzZXRPcHRpb25zKFtdKVxyXG4gICAgICAgIC8vIOS4jemcgOimgeS8oOWFpSByZXEg5ZKMIHJlcyDvvIzlm6DkuLrov5nmmK/kuIDkuKropoHnlKjmiLfngrnovpPlhaXmiY3kvJrmiafooYznmoTmk43kvZzvvIzogq/lrprmmK/lnKjmtY/op4jlmajnjq/looPmiafooYznmoTlhoXlrrlcclxuICAgICAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogYC9zZWFyY2gvdXNlcnM/cT0ke3ZhbHVlfWBcclxuICAgICAgICB9KS50aGVuKHJlcHMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVwcy5kYXRhLml0ZW1zLm1hcCh1c2VyID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB1c2VyLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVzZXIubG9naW5cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRPcHRpb25zKGRhdGEpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy8gc2hvd1NlYXJjaCAtPiDooajnpLrnmoTmmK8gc2VsZWN0IOWFt+acieaQnOe0ouWKn+iDvVxyXG4gICAgLy8gZmlsdGVyT3B0aW9uIC0+IOeUqOS6jiBTZWxlY3Qg57uE5Lu2546w5oiQ5bey57uP5pyJIE9wdGlvbiDmnaXlh7rnjrDkuobvvIzov5nkuKrml7blgJnmiJHku6zovpPlhaXmoYbkuK3ovpPlhaXmloflrZfvvIzmmK/ovpPlhaXmiJHku6znjrDmnInnmoTlt7Lnu4/lnKggT3B0aW9uIOmHjOmdoueahOWxleekuueahOi/meS6m+WGheWuueOAgiDlm6DkuLrmiJHku6zopoHlsZXnpLrmnI3liqHnq6/nmoTlhoXlrrnvvIzmiYDku6Xorr7nva7kuLogZmFsc2XjgIJcclxuICAgIHJldHVybiA8U2VsZWN0IHNob3dTZWFyY2g9e3RydWV9IG5vdEZvdW5kQ29udGVudD17ZmV0Y2hpbmcgPyA8U3BpbiBzaXplPSdzbWFsbCcgLz4gOiA8c3Bhbj5Ob3RoaW5nIEZvdW5kPC9zcGFuPn0gZmlsdGVyT3B0aW9uPXtmYWxzZX0gcGxhY2Vob2xkZXI9J+WIm+W7uuiAhScgYWxsb3dDbGVhcj17dHJ1ZX0gb25TZWFyY2g9e2ZldGNoVXNlcn0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1hcChvcHMgPT4gPE9wdGlvbiB2YWx1ZT17b3BzLnZhbHVlfSBrZXk9e29wcy52YWx1ZX0+e29wcy50ZXh0fTwvT3B0aW9uPilcclxuICAgICAgICB9XHJcbiAgICA8L1NlbGVjdD5cclxuXHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENoZWNrT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiY2hlY2tcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWNrT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERvd25PdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiZG93blwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRG93bk91dGxpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9DaGVja091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9DaGVja091dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0NoZWNrT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfRG93bk91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9Eb3duT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfRG93bk91dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfQ2hlY2tPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0NoZWNrT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgQ2hlY2tPdXRsaW5lZCA9IGZ1bmN0aW9uIENoZWNrT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0NoZWNrT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5DaGVja091dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0NoZWNrT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihDaGVja091dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Rvd25PdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Rvd25PdXRsaW5lZFwiKSk7XG5cbnZhciBfQW50ZEljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCIpKTtcblxuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbnZhciBEb3duT3V0bGluZWQgPSBmdW5jdGlvbiBEb3duT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0Rvd25PdXRsaW5lZC5kZWZhdWx0XG4gIH0pKTtcbn07XG5cbkRvd25PdXRsaW5lZC5kaXNwbGF5TmFtZSA9ICdEb3duT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihEb3duT3V0bGluZWQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL29taXRcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY1NlbGVjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy1zZWxlY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9pY29uVXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvaWNvblV0aWxcIikpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxudmFyIF9tb3Rpb24gPSByZXF1aXJlKFwiLi4vX3V0aWwvbW90aW9uXCIpO1xuXG4vLyBUT0RPOiA0LjAgLSBjb2RlbW9kIHNob3VsZCBoZWxwIHRvIGNoYW5nZSBgZmlsdGVyT3B0aW9uYCB0byBzdXBwb3J0IG5vZGUgcHJvcHMuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UgPSAnU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSc7XG5cbnZhciBJbnRlcm5hbFNlbGVjdCA9IGZ1bmN0aW9uIEludGVybmFsU2VsZWN0KF9hLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzMjtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgIGJvcmRlcmVkID0gX2EkYm9yZGVyZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfYSRib3JkZXJlZCxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX2EuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IF9hLmRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgX2EkbGlzdEhlaWdodCA9IF9hLmxpc3RIZWlnaHQsXG4gICAgICBsaXN0SGVpZ2h0ID0gX2EkbGlzdEhlaWdodCA9PT0gdm9pZCAwID8gMjU2IDogX2EkbGlzdEhlaWdodCxcbiAgICAgIF9hJGxpc3RJdGVtSGVpZ2h0ID0gX2EubGlzdEl0ZW1IZWlnaHQsXG4gICAgICBsaXN0SXRlbUhlaWdodCA9IF9hJGxpc3RJdGVtSGVpZ2h0ID09PSB2b2lkIDAgPyAyNCA6IF9hJGxpc3RJdGVtSGVpZ2h0LFxuICAgICAgY3VzdG9taXplU2l6ZSA9IF9hLnNpemUsXG4gICAgICBub3RGb3VuZENvbnRlbnQgPSBfYS5ub3RGb3VuZENvbnRlbnQsXG4gICAgICBwcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiYm9yZGVyZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJnZXRQb3B1cENvbnRhaW5lclwiLCBcImRyb3Bkb3duQ2xhc3NOYW1lXCIsIFwibGlzdEhlaWdodFwiLCBcImxpc3RJdGVtSGVpZ2h0XCIsIFwic2l6ZVwiLCBcIm5vdEZvdW5kQ29udGVudFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIHJlbmRlckVtcHR5ID0gX1JlYWN0JHVzZUNvbnRleHQucmVuZGVyRW1wdHksXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb24sXG4gICAgICB2aXJ0dWFsID0gX1JlYWN0JHVzZUNvbnRleHQudmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IF9SZWFjdCR1c2VDb250ZXh0LmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXSk7XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NlbGVjdCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciByb290UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCk7XG4gIHZhciBtb2RlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG0gPSBwcm9wcy5tb2RlO1xuXG4gICAgaWYgKG0gPT09ICdjb21ib2JveCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKG0gPT09IFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UpIHtcbiAgICAgIHJldHVybiAnY29tYm9ib3gnO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xuICB9LCBbcHJvcHMubW9kZV0pO1xuICB2YXIgaXNNdWx0aXBsZSA9IG1vZGUgPT09ICdtdWx0aXBsZScgfHwgbW9kZSA9PT0gJ3RhZ3MnOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gRW1wdHkgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1lcmdlZE5vdEZvdW5kO1xuXG4gIGlmIChub3RGb3VuZENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZE5vdEZvdW5kID0gbm90Rm91bmRDb250ZW50O1xuICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjb21ib2JveCcpIHtcbiAgICBtZXJnZWROb3RGb3VuZCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VkTm90Rm91bmQgPSByZW5kZXJFbXB0eSgnU2VsZWN0Jyk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09IEljb25zID09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF9nZXRJY29ucyA9ICgwLCBfaWNvblV0aWxbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwcm9wcyksIHtcbiAgICBtdWx0aXBsZTogaXNNdWx0aXBsZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICB9KSksXG4gICAgICBzdWZmaXhJY29uID0gX2dldEljb25zLnN1ZmZpeEljb24sXG4gICAgICBpdGVtSWNvbiA9IF9nZXRJY29ucy5pdGVtSWNvbixcbiAgICAgIHJlbW92ZUljb24gPSBfZ2V0SWNvbnMucmVtb3ZlSWNvbixcbiAgICAgIGNsZWFySWNvbiA9IF9nZXRJY29ucy5jbGVhckljb247XG5cbiAgdmFyIHNlbGVjdFByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocHJvcHMsIFsnc3VmZml4SWNvbicsICdpdGVtSWNvbiddKTtcbiAgdmFyIHJjU2VsZWN0UnRsRHJvcERvd25DbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShkcm9wZG93bkNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcm9wZG93bi1cIikuY29uY2F0KGRpcmVjdGlvbiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpKTtcbiAgdmFyIG1lcmdlZFNpemUgPSBjdXN0b21pemVTaXplIHx8IHNpemU7XG4gIHZhciBtZXJnZWRDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBtZXJnZWRTaXplID09PSAnbGFyZ2UnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIG1lcmdlZFNpemUgPT09ICdzbWFsbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJsZXNzXCIpLCAhYm9yZGVyZWQpLCBfY2xhc3NOYW1lczIpLCBjbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjU2VsZWN0W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICByZWY6IHJlZixcbiAgICB2aXJ0dWFsOiB2aXJ0dWFsLFxuICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gIH0sIHNlbGVjdFByb3BzLCB7XG4gICAgdHJhbnNpdGlvbk5hbWU6ICgwLCBfbW90aW9uLmdldFRyYW5zaXRpb25OYW1lKShyb290UHJlZml4Q2xzLCAnc2xpZGUtdXAnLCBwcm9wcy50cmFuc2l0aW9uTmFtZSksXG4gICAgbGlzdEhlaWdodDogbGlzdEhlaWdodCxcbiAgICBsaXN0SXRlbUhlaWdodDogbGlzdEl0ZW1IZWlnaHQsXG4gICAgbW9kZTogbW9kZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICBpbnB1dEljb246IHN1ZmZpeEljb24sXG4gICAgbWVudUl0ZW1TZWxlY3RlZEljb246IGl0ZW1JY29uLFxuICAgIHJlbW92ZUljb246IHJlbW92ZUljb24sXG4gICAgY2xlYXJJY29uOiBjbGVhckljb24sXG4gICAgbm90Rm91bmRDb250ZW50OiBtZXJnZWROb3RGb3VuZCxcbiAgICBjbGFzc05hbWU6IG1lcmdlZENsYXNzTmFtZSxcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiByY1NlbGVjdFJ0bERyb3BEb3duQ2xhc3NOYW1lXG4gIH0pKTtcbn07XG5cbnZhciBTZWxlY3RSZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbFNlbGVjdCk7XG52YXIgU2VsZWN0ID0gU2VsZWN0UmVmO1xuU2VsZWN0LlNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UgPSBTRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFO1xuU2VsZWN0Lk9wdGlvbiA9IF9yY1NlbGVjdC5PcHRpb247XG5TZWxlY3QuT3B0R3JvdXAgPSBfcmNTZWxlY3QuT3B0R3JvdXA7XG52YXIgX2RlZmF1bHQgPSBTZWxlY3Q7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0SWNvbnM7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfRG93bk91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRG93bk91dGxpbmVkXCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgX0NoZWNrT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja091dGxpbmVkXCIpKTtcblxudmFyIF9DbG9zZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfU2VhcmNoT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9TZWFyY2hPdXRsaW5lZFwiKSk7XG5cbmZ1bmN0aW9uIGdldEljb25zKF9yZWYpIHtcbiAgdmFyIHN1ZmZpeEljb24gPSBfcmVmLnN1ZmZpeEljb24sXG4gICAgICBjbGVhckljb24gPSBfcmVmLmNsZWFySWNvbixcbiAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uID0gX3JlZi5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgIHJlbW92ZUljb24gPSBfcmVmLnJlbW92ZUljb24sXG4gICAgICBsb2FkaW5nID0gX3JlZi5sb2FkaW5nLFxuICAgICAgbXVsdGlwbGUgPSBfcmVmLm11bHRpcGxlLFxuICAgICAgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHM7XG4gIC8vIENsZWFyIEljb25cbiAgdmFyIG1lcmdlZENsZWFySWNvbiA9IGNsZWFySWNvbjtcblxuICBpZiAoIWNsZWFySWNvbikge1xuICAgIG1lcmdlZENsZWFySWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZUNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpO1xuICB9IC8vIEFycm93IGl0ZW0gaWNvblxuXG5cbiAgdmFyIG1lcmdlZFN1ZmZpeEljb24gPSBudWxsO1xuXG4gIGlmIChzdWZmaXhJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBtZXJnZWRTdWZmaXhJY29uID0gc3VmZml4SWNvbjtcbiAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgbWVyZ2VkU3VmZml4SWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2FkaW5nT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBzcGluOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGljb25DbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN1ZmZpeFwiKTtcblxuICAgIG1lcmdlZFN1ZmZpeEljb24gPSBmdW5jdGlvbiBtZXJnZWRTdWZmaXhJY29uKF9yZWYyKSB7XG4gICAgICB2YXIgb3BlbiA9IF9yZWYyLm9wZW4sXG4gICAgICAgICAgc2hvd1NlYXJjaCA9IF9yZWYyLnNob3dTZWFyY2g7XG5cbiAgICAgIGlmIChvcGVuICYmIHNob3dTZWFyY2gpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TZWFyY2hPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGljb25DbHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRG93bk91dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBjbGFzc05hbWU6IGljb25DbHNcbiAgICAgIH0pO1xuICAgIH07XG4gIH0gLy8gQ2hlY2tlZCBpdGVtIGljb25cblxuXG4gIHZhciBtZXJnZWRJdGVtSWNvbiA9IG51bGw7XG5cbiAgaWYgKG1lbnVJdGVtU2VsZWN0ZWRJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICBtZXJnZWRJdGVtSWNvbiA9IG1lbnVJdGVtU2VsZWN0ZWRJY29uO1xuICB9IGVsc2UgaWYgKG11bHRpcGxlKSB7XG4gICAgbWVyZ2VkSXRlbUljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2hlY2tPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpO1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZEl0ZW1JY29uID0gbnVsbDtcbiAgfVxuXG4gIHZhciBtZXJnZWRSZW1vdmVJY29uID0gbnVsbDtcblxuICBpZiAocmVtb3ZlSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVyZ2VkUmVtb3ZlSWNvbiA9IHJlbW92ZUljb247XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VkUmVtb3ZlSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFySWNvbjogbWVyZ2VkQ2xlYXJJY29uLFxuICAgIHN1ZmZpeEljb246IG1lcmdlZFN1ZmZpeEljb24sXG4gICAgaXRlbUljb246IG1lcmdlZEl0ZW1JY29uLFxuICAgIHJlbW92ZUljb246IG1lcmdlZFJlbW92ZUljb25cbiAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmMtcmVzaXplLW9ic2VydmVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0ocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGl0ZW0gPSBwcm9wcy5pdGVtLFxuICAgICAgcmVuZGVySXRlbSA9IHByb3BzLnJlbmRlckl0ZW0sXG4gICAgICByZXNwb25zaXZlID0gcHJvcHMucmVzcG9uc2l2ZSxcbiAgICAgIHJlZ2lzdGVyU2l6ZSA9IHByb3BzLnJlZ2lzdGVyU2l6ZSxcbiAgICAgIGl0ZW1LZXkgPSBwcm9wcy5pdGVtS2V5LFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBkaXNwbGF5ID0gcHJvcHMuZGlzcGxheSxcbiAgICAgIG9yZGVyID0gcHJvcHMub3JkZXIsXG4gICAgICBDb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInByZWZpeENsc1wiLCBcIml0ZW1cIiwgXCJyZW5kZXJJdGVtXCIsIFwicmVzcG9uc2l2ZVwiLCBcInJlZ2lzdGVyU2l6ZVwiLCBcIml0ZW1LZXlcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCIsIFwiZGlzcGxheVwiLCBcIm9yZGVyXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICB2YXIgbWVyZ2VkSGlkZGVuID0gcmVzcG9uc2l2ZSAmJiAhZGlzcGxheTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gaW50ZXJuYWxSZWdpc3RlclNpemUod2lkdGgpIHtcbiAgICByZWdpc3RlclNpemUoaXRlbUtleSwgd2lkdGgpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaW50ZXJuYWxSZWdpc3RlclNpemUobnVsbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgY2hpbGROb2RlID0gaXRlbSAhPT0gdW5kZWZpbmVkID8gcmVuZGVySXRlbShpdGVtKSA6IGNoaWxkcmVuO1xuICB2YXIgaXRlbU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIG9wYWNpdHk6IG1lcmdlZEhpZGRlbiA/IDAuMiA6IDEsXG4gICAgICBoZWlnaHQ6IG1lcmdlZEhpZGRlbiA/IDAgOiB1bmRlZmluZWQsXG4gICAgICBvdmVyZmxvd1k6IG1lcmdlZEhpZGRlbiA/ICdoaWRkZW4nIDogdW5kZWZpbmVkLFxuICAgICAgb3JkZXI6IHJlc3BvbnNpdmUgPyBvcmRlciA6IHVuZGVmaW5lZCxcbiAgICAgIHBvaW50ZXJFdmVudHM6IG1lcmdlZEhpZGRlbiA/ICdub25lJyA6IHVuZGVmaW5lZFxuICAgIH0sIHN0eWxlKVxuICB9LCByZXN0UHJvcHMpLCBjaGlsZE5vZGUpO1xuXG4gIGlmIChyZXNwb25zaXZlKSB7XG4gICAgaXRlbU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgICAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKF9yZWYpIHtcbiAgICAgICAgdmFyIG9mZnNldFdpZHRoID0gX3JlZi5vZmZzZXRXaWR0aDtcbiAgICAgICAgaW50ZXJuYWxSZWdpc3RlclNpemUob2Zmc2V0V2lkdGgpO1xuICAgICAgfVxuICAgIH0sIGl0ZW1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBpdGVtTm9kZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3JjLXJlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IHsgdXNlQmF0Y2hGcmFtZVN0YXRlIH0gZnJvbSAnLi9ob29rcy91c2VCYXRjaEZyYW1lU3RhdGUnO1xudmFyIFJFU1BPTlNJVkUgPSAncmVzcG9uc2l2ZSc7XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZW5kZXJSZXN0KG9taXR0ZWRJdGVtcykge1xuICByZXR1cm4gXCIrIFwiLmNvbmNhdChvbWl0dGVkSXRlbXMubGVuZ3RoLCBcIiAuLi5cIik7XG59XG5cbmZ1bmN0aW9uIE92ZXJmbG93KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtb3ZlcmZsb3cnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgIF9wcm9wcyRkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgIGRhdGEgPSBfcHJvcHMkZGF0YSA9PT0gdm9pZCAwID8gW10gOiBfcHJvcHMkZGF0YSxcbiAgICAgIHJlbmRlckl0ZW0gPSBwcm9wcy5yZW5kZXJJdGVtLFxuICAgICAgaXRlbUtleSA9IHByb3BzLml0ZW1LZXksXG4gICAgICBfcHJvcHMkaXRlbVdpZHRoID0gcHJvcHMuaXRlbVdpZHRoLFxuICAgICAgaXRlbVdpZHRoID0gX3Byb3BzJGl0ZW1XaWR0aCA9PT0gdm9pZCAwID8gMTAgOiBfcHJvcHMkaXRlbVdpZHRoLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIG1heENvdW50ID0gcHJvcHMubWF4Q291bnQsXG4gICAgICBfcHJvcHMkcmVuZGVyUmVzdCA9IHByb3BzLnJlbmRlclJlc3QsXG4gICAgICByZW5kZXJSZXN0ID0gX3Byb3BzJHJlbmRlclJlc3QgPT09IHZvaWQgMCA/IGRlZmF1bHRSZW5kZXJSZXN0IDogX3Byb3BzJHJlbmRlclJlc3QsXG4gICAgICByZW5kZXJJdGVtUHJvcHMgPSBwcm9wcy5yZW5kZXJJdGVtUHJvcHMsXG4gICAgICBzdWZmaXggPSBwcm9wcy5zdWZmaXgsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGl0ZW1Db21wb25lbnQgPSBwcm9wcy5pdGVtQ29tcG9uZW50LFxuICAgICAgaXRlbUNvbXBvbmVudCA9IF9wcm9wcyRpdGVtQ29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRpdGVtQ29tcG9uZW50LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJkYXRhXCIsIFwicmVuZGVySXRlbVwiLCBcIml0ZW1LZXlcIiwgXCJpdGVtV2lkdGhcIiwgXCJzdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcIm1heENvdW50XCIsIFwicmVuZGVyUmVzdFwiLCBcInJlbmRlckl0ZW1Qcm9wc1wiLCBcInN1ZmZpeFwiLCBcImNvbXBvbmVudFwiLCBcIml0ZW1Db21wb25lbnRcIl0pO1xuXG4gIHZhciBjcmVhdGVVc2VTdGF0ZSA9IHVzZUJhdGNoRnJhbWVTdGF0ZSgpO1xuXG4gIHZhciBfY3JlYXRlVXNlU3RhdGUgPSBjcmVhdGVVc2VTdGF0ZSgwKSxcbiAgICAgIF9jcmVhdGVVc2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlVXNlU3RhdGUsIDIpLFxuICAgICAgY29udGFpbmVyV2lkdGggPSBfY3JlYXRlVXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Q29udGFpbmVyV2lkdGggPSBfY3JlYXRlVXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfY3JlYXRlVXNlU3RhdGUzID0gY3JlYXRlVXNlU3RhdGUobmV3IE1hcCgpKSxcbiAgICAgIF9jcmVhdGVVc2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlVXNlU3RhdGUzLCAyKSxcbiAgICAgIGl0ZW1XaWR0aHMgPSBfY3JlYXRlVXNlU3RhdGU0WzBdLFxuICAgICAgc2V0SXRlbVdpZHRocyA9IF9jcmVhdGVVc2VTdGF0ZTRbMV07XG5cbiAgdmFyIF9jcmVhdGVVc2VTdGF0ZTUgPSBjcmVhdGVVc2VTdGF0ZSgwKSxcbiAgICAgIF9jcmVhdGVVc2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlVXNlU3RhdGU1LCAyKSxcbiAgICAgIHByZXZSZXN0V2lkdGggPSBfY3JlYXRlVXNlU3RhdGU2WzBdLFxuICAgICAgc2V0UHJldlJlc3RXaWR0aCA9IF9jcmVhdGVVc2VTdGF0ZTZbMV07XG5cbiAgdmFyIF9jcmVhdGVVc2VTdGF0ZTcgPSBjcmVhdGVVc2VTdGF0ZSgwKSxcbiAgICAgIF9jcmVhdGVVc2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfY3JlYXRlVXNlU3RhdGU3LCAyKSxcbiAgICAgIHJlc3RXaWR0aCA9IF9jcmVhdGVVc2VTdGF0ZThbMF0sXG4gICAgICBzZXRSZXN0V2lkdGggPSBfY3JlYXRlVXNlU3RhdGU4WzFdO1xuXG4gIHZhciBfY3JlYXRlVXNlU3RhdGU5ID0gY3JlYXRlVXNlU3RhdGUoMCksXG4gICAgICBfY3JlYXRlVXNlU3RhdGUxMCA9IF9zbGljZWRUb0FycmF5KF9jcmVhdGVVc2VTdGF0ZTksIDIpLFxuICAgICAgc3VmZml4V2lkdGggPSBfY3JlYXRlVXNlU3RhdGUxMFswXSxcbiAgICAgIHNldFN1ZmZpeFdpZHRoID0gX2NyZWF0ZVVzZVN0YXRlMTBbMV07XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzdWZmaXhGaXhlZFN0YXJ0ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFN1ZmZpeEZpeGVkU3RhcnQgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBkaXNwbGF5Q291bnQgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0RGlzcGxheUNvdW50ID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICAgIHJlc3RSZWFkeSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBzZXRSZXN0UmVhZHkgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBpdGVtUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtXCIpOyAvLyBBbHdheXMgdXNlIHRoZSBtYXggd2lkdGggdG8gYXZvaWQgYmxpbmtcblxuICB2YXIgbWVyZ2VkUmVzdFdpZHRoID0gTWF0aC5tYXgocHJldlJlc3RXaWR0aCwgcmVzdFdpZHRoKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IERhdGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGlzUmVzcG9uc2l2ZSA9IGRhdGEubGVuZ3RoICYmIG1heENvdW50ID09PSBSRVNQT05TSVZFO1xuICAvKipcbiAgICogV2hlbiBpcyBgcmVzcG9uc2l2ZWAsIHdlIHdpbGwgYWx3YXlzIHJlbmRlciByZXN0IG5vZGUgdG8gZ2V0IHRoZSByZWFsIHdpZHRoIG9mIGl0IGZvciBjYWxjdWxhdGlvblxuICAgKi9cblxuICB2YXIgc2hvd1Jlc3QgPSBpc1Jlc3BvbnNpdmUgfHwgdHlwZW9mIG1heENvdW50ID09PSAnbnVtYmVyJyAmJiBkYXRhLmxlbmd0aCA+IG1heENvdW50O1xuICB2YXIgbWVyZ2VkRGF0YSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdGVtcyA9IGRhdGE7XG5cbiAgICBpZiAoaXNSZXNwb25zaXZlKSB7XG4gICAgICBpdGVtcyA9IGRhdGEuc2xpY2UoMCwgTWF0aC5taW4oZGF0YS5sZW5ndGgsIGNvbnRhaW5lcldpZHRoIC8gaXRlbVdpZHRoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWF4Q291bnQgPT09ICdudW1iZXInKSB7XG4gICAgICBpdGVtcyA9IGRhdGEuc2xpY2UoMCwgbWF4Q291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfSwgW2RhdGEsIGl0ZW1XaWR0aCwgY29udGFpbmVyV2lkdGgsIG1heENvdW50LCBpc1Jlc3BvbnNpdmVdKTtcbiAgdmFyIG9taXR0ZWRJdGVtcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1Jlc3BvbnNpdmUpIHtcbiAgICAgIHJldHVybiBkYXRhLnNsaWNlKGRpc3BsYXlDb3VudCArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLnNsaWNlKG1lcmdlZERhdGEubGVuZ3RoKTtcbiAgfSwgW2RhdGEsIG1lcmdlZERhdGEsIGlzUmVzcG9uc2l2ZSwgZGlzcGxheUNvdW50XSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJdGVtID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBnZXRLZXkgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIGlmICh0eXBlb2YgaXRlbUtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZW1LZXkoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChfcmVmID0gaXRlbUtleSAmJiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtW2l0ZW1LZXldKSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGluZGV4O1xuICB9LCBbaXRlbUtleV0pO1xuICB2YXIgbWVyZ2VkUmVuZGVySXRlbSA9IHVzZUNhbGxiYWNrKHJlbmRlckl0ZW0gfHwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSwgW3JlbmRlckl0ZW1dKTtcblxuICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5Q291bnQoY291bnQsIG5vdFJlYWR5KSB7XG4gICAgc2V0RGlzcGxheUNvdW50KGNvdW50KTtcblxuICAgIGlmICghbm90UmVhZHkpIHtcbiAgICAgIHNldFJlc3RSZWFkeShjb3VudCA8IGRhdGEubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaXplID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gb25PdmVyZmxvd1Jlc2l6ZShfLCBlbGVtZW50KSB7XG4gICAgc2V0Q29udGFpbmVyV2lkdGgoZWxlbWVudC5jbGllbnRXaWR0aCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclNpemUoa2V5LCB3aWR0aCkge1xuICAgIHNldEl0ZW1XaWR0aHMoZnVuY3Rpb24gKG9yaWdpbikge1xuICAgICAgdmFyIGNsb25lID0gbmV3IE1hcChvcmlnaW4pO1xuXG4gICAgICBpZiAod2lkdGggPT09IG51bGwpIHtcbiAgICAgICAgY2xvbmUuZGVsZXRlKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXQoa2V5LCB3aWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyT3ZlcmZsb3dTaXplKF8sIHdpZHRoKSB7XG4gICAgc2V0UmVzdFdpZHRoKHdpZHRoKTtcbiAgICBzZXRQcmV2UmVzdFdpZHRoKHJlc3RXaWR0aCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclN1ZmZpeFNpemUoXywgd2lkdGgpIHtcbiAgICBzZXRTdWZmaXhXaWR0aCh3aWR0aCk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBmdW5jdGlvbiBnZXRJdGVtV2lkdGgoaW5kZXgpIHtcbiAgICByZXR1cm4gaXRlbVdpZHRocy5nZXQoZ2V0S2V5KG1lcmdlZERhdGFbaW5kZXhdLCBpbmRleCkpO1xuICB9XG5cbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggJiYgbWVyZ2VkUmVzdFdpZHRoICYmIG1lcmdlZERhdGEpIHtcbiAgICAgIHZhciB0b3RhbFdpZHRoID0gc3VmZml4V2lkdGg7XG4gICAgICB2YXIgbGVuID0gbWVyZ2VkRGF0YS5sZW5ndGg7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gbGVuIC0gMTsgLy8gV2hlbiBkYXRhIGNvdW50IGNoYW5nZSB0byAwLCByZXNldCB0aGlzIHNpbmNlIG5vdCBsb29wIHdpbGwgcmVhY2hcblxuICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgdXBkYXRlRGlzcGxheUNvdW50KDApO1xuICAgICAgICBzZXRTdWZmaXhGaXhlZFN0YXJ0KG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtV2lkdGggPSBnZXRJdGVtV2lkdGgoaSk7IC8vIEJyZWFrIHNpbmNlIGRhdGEgbm90IHJlYWR5XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtV2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHVwZGF0ZURpc3BsYXlDb3VudChpIC0gMSwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gRmluZCBiZXN0IG1hdGNoXG5cblxuICAgICAgICB0b3RhbFdpZHRoICs9IGN1cnJlbnRJdGVtV2lkdGg7XG5cbiAgICAgICAgaWYgKGkgPT09IGxhc3RJbmRleCAtIDEgJiYgdG90YWxXaWR0aCArIGdldEl0ZW1XaWR0aChsYXN0SW5kZXgpIDw9IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgLy8gQWRkaXRpb25hbCBjaGVjayBpZiBtYXRjaCB0aGUgZW5kXG4gICAgICAgICAgdXBkYXRlRGlzcGxheUNvdW50KGxhc3RJbmRleCk7XG4gICAgICAgICAgc2V0U3VmZml4Rml4ZWRTdGFydChudWxsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFdpZHRoICsgbWVyZ2VkUmVzdFdpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAvLyBDYW4gbm90IGhvbGQgYWxsIHRoZSBjb250ZW50IHRvIHNob3cgcmVzdFxuICAgICAgICAgIHVwZGF0ZURpc3BsYXlDb3VudChpIC0gMSk7XG4gICAgICAgICAgc2V0U3VmZml4Rml4ZWRTdGFydCh0b3RhbFdpZHRoIC0gY3VycmVudEl0ZW1XaWR0aCAtIHN1ZmZpeFdpZHRoICsgcmVzdFdpZHRoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAvLyBSZWFjaCB0aGUgZW5kXG4gICAgICAgICAgdXBkYXRlRGlzcGxheUNvdW50KGxhc3RJbmRleCk7XG4gICAgICAgICAgc2V0U3VmZml4Rml4ZWRTdGFydCh0b3RhbFdpZHRoIC0gc3VmZml4V2lkdGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWZmaXggJiYgZ2V0SXRlbVdpZHRoKDApICsgc3VmZml4V2lkdGggPiBjb250YWluZXJXaWR0aCkge1xuICAgICAgICBzZXRTdWZmaXhGaXhlZFN0YXJ0KG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvbnRhaW5lcldpZHRoLCBpdGVtV2lkdGhzLCByZXN0V2lkdGgsIHN1ZmZpeFdpZHRoLCBnZXRLZXksIG1lcmdlZERhdGFdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGRpc3BsYXlSZXN0ID0gcmVzdFJlYWR5ICYmICEhb21pdHRlZEl0ZW1zLmxlbmd0aDtcbiAgdmFyIHN1ZmZpeFN0eWxlID0ge307XG5cbiAgaWYgKHN1ZmZpeEZpeGVkU3RhcnQgIT09IG51bGwgJiYgaXNSZXNwb25zaXZlKSB7XG4gICAgc3VmZml4U3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IHN1ZmZpeEZpeGVkU3RhcnQsXG4gICAgICB0b3A6IDBcbiAgICB9O1xuICB9XG5cbiAgdmFyIGl0ZW1TaGFyZWRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6IGl0ZW1QcmVmaXhDbHMsXG4gICAgcmVzcG9uc2l2ZTogaXNSZXNwb25zaXZlLFxuICAgIGNvbXBvbmVudDogaXRlbUNvbXBvbmVudFxuICB9O1xuICB2YXIgb3ZlcmZsb3dOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgcmVmOiByZWZcbiAgfSwgcmVzdFByb3BzKSwgbWVyZ2VkRGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGdldEtleShpdGVtLCBpbmRleCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIF9leHRlbmRzKHt9LCBpdGVtU2hhcmVkUHJvcHMsIHtcbiAgICAgIG9yZGVyOiBpbmRleCxcbiAgICAgIGtleToga2V5LFxuICAgICAgaXRlbTogaXRlbSxcbiAgICAgIHJlbmRlckl0ZW06IG1lcmdlZFJlbmRlckl0ZW0sXG4gICAgICBpdGVtS2V5OiBrZXksXG4gICAgICByZWdpc3RlclNpemU6IHJlZ2lzdGVyU2l6ZSxcbiAgICAgIGRpc3BsYXk6IGluZGV4IDw9IGRpc3BsYXlDb3VudFxuICAgIH0sIHJlbmRlckl0ZW1Qcm9wcyA9PT0gbnVsbCB8fCByZW5kZXJJdGVtUHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbmRlckl0ZW1Qcm9wcyhpdGVtKSkpO1xuICB9KSwgc2hvd1Jlc3QgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCBfZXh0ZW5kcyh7fSwgaXRlbVNoYXJlZFByb3BzLCB7XG4gICAgLy8gV2hlbiBub3Qgc2hvdywgb3JkZXIgc2hvdWxkIGJlIHRoZSBsYXN0XG4gICAgb3JkZXI6IGRpc3BsYXlSZXN0ID8gZGlzcGxheUNvdW50IDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1yZXN0XCIpLFxuICAgIHJlZ2lzdGVyU2l6ZTogcmVnaXN0ZXJPdmVyZmxvd1NpemUsXG4gICAgZGlzcGxheTogZGlzcGxheVJlc3RcbiAgfSksIHR5cGVvZiByZW5kZXJSZXN0ID09PSAnZnVuY3Rpb24nID8gcmVuZGVyUmVzdChvbWl0dGVkSXRlbXMpIDogcmVuZGVyUmVzdCkgOiBudWxsLCBzdWZmaXggJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgX2V4dGVuZHMoe30sIGl0ZW1TaGFyZWRQcm9wcywge1xuICAgIG9yZGVyOiBkaXNwbGF5Q291bnQsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1zdWZmaXhcIiksXG4gICAgcmVnaXN0ZXJTaXplOiByZWdpc3RlclN1ZmZpeFNpemUsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICBzdHlsZTogc3VmZml4U3R5bGVcbiAgfSksIHN1ZmZpeCkpO1xuXG4gIGlmIChpc1Jlc3BvbnNpdmUpIHtcbiAgICBvdmVyZmxvd05vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgICAgb25SZXNpemU6IG9uT3ZlcmZsb3dSZXNpemVcbiAgICB9LCBvdmVyZmxvd05vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93Tm9kZTtcbn1cblxudmFyIEZvcndhcmRPdmVyZmxvdyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKE92ZXJmbG93KTtcbkZvcndhcmRPdmVyZmxvdy5kaXNwbGF5TmFtZSA9ICdPdmVyZmxvdyc7IC8vIENvbnZlcnQgdG8gZ2VuZXJpYyB0eXBlXG5cbmV4cG9ydCBkZWZhdWx0IEZvcndhcmRPdmVyZmxvdzsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG4vKipcbiAqIFN0YXRlIGdlbmVyYXRlLiBSZXR1cm4gYSBgc2V0U3RhdGVgIGJ1dCBpdCB3aWxsIGZsdXNoIGFsbCBzdGF0ZSB3aXRoIG9uZSByZW5kZXIgdG8gc2F2ZSBwZXJmLlxuICogVGhpcyBpcyBub3QgYSByZWFsaXphdGlvbiBvZiBgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXNgLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXRjaEZyYW1lU3RhdGUoKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7fSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgc3RhdGVzUmVmID0gdXNlUmVmKFtdKTtcbiAgdmFyIGRlc3Ryb3lSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgd2Fsa2luZ0luZGV4ID0gMDtcbiAgdmFyIGJlZm9yZUZyYW1lSWQgPSAwO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZXN0cm95UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdGF0ZShkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgbXlJbmRleCA9IHdhbGtpbmdJbmRleDtcbiAgICB3YWxraW5nSW5kZXggKz0gMTsgLy8gRmlsbCB2YWx1ZSBpZiBub3QgZXhpc3QgeWV0XG5cbiAgICBpZiAoc3RhdGVzUmVmLmN1cnJlbnQubGVuZ3RoIDwgbXlJbmRleCArIDEpIHtcbiAgICAgIHN0YXRlc1JlZi5jdXJyZW50W215SW5kZXhdID0gZGVmYXVsdFZhbHVlO1xuICAgIH0gLy8gUmV0dXJuIGZpbGxlZCBhcyBgc2V0U3RhdGVgXG5cblxuICAgIHZhciB2YWx1ZSA9IHN0YXRlc1JlZi5jdXJyZW50W215SW5kZXhdO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodmFsKSB7XG4gICAgICBzdGF0ZXNSZWYuY3VycmVudFtteUluZGV4XSA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwoc3RhdGVzUmVmLmN1cnJlbnRbbXlJbmRleF0pIDogdmFsO1xuICAgICAgcmFmLmNhbmNlbChiZWZvcmVGcmFtZUlkKTsgLy8gRmx1c2ggd2l0aCBiYXRjaFxuXG4gICAgICBiZWZvcmVGcmFtZUlkID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFkZXN0cm95UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBmb3JjZVVwZGF0ZSh7fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTdGF0ZTtcbn0iLCJpbXBvcnQgT3ZlcmZsb3cgZnJvbSAnLi9PdmVyZmxvdyc7XG5leHBvcnQgZGVmYXVsdCBPdmVyZmxvdzsiLCIvKiogVGhpcyBpcyBhIHBsYWNlaG9sZGVyLCBub3QgcmVhbCByZW5kZXIgaW4gZG9tICovXG52YXIgT3B0R3JvdXAgPSBmdW5jdGlvbiBPcHRHcm91cCgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5PcHRHcm91cC5pc1NlbGVjdE9wdEdyb3VwID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IE9wdEdyb3VwOyIsIi8qKiBUaGlzIGlzIGEgcGxhY2Vob2xkZXIsIG5vdCByZWFsIHJlbmRlciBpbiBkb20gKi9cbnZhciBPcHRpb24gPSBmdW5jdGlvbiBPcHRpb24oKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxuT3B0aW9uLmlzU2VsZWN0T3B0aW9uID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgcGlja0F0dHJzIGZyb20gXCJyYy11dGlsL2VzL3BpY2tBdHRyc1wiO1xuaW1wb3J0IHVzZU1lbW8gZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVtb1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGlzdCBmcm9tICdyYy12aXJ0dWFsLWxpc3QnO1xuaW1wb3J0IFRyYW5zQnRuIGZyb20gJy4vVHJhbnNCdG4nO1xuLyoqXG4gKiBVc2luZyB2aXJ0dWFsIGxpc3Qgb2Ygb3B0aW9uIGRpc3BsYXkuXG4gKiBXaWxsIGZhbGxiYWNrIHRvIGRvbSBpZiB1c2UgY3VzdG9taXplIHJlbmRlci5cbiAqL1xuXG52YXIgT3B0aW9uTGlzdCA9IGZ1bmN0aW9uIE9wdGlvbkxpc3QoX3JlZiwgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGZsYXR0ZW5PcHRpb25zID0gX3JlZi5mbGF0dGVuT3B0aW9ucyxcbiAgICAgIGNoaWxkcmVuQXNEYXRhID0gX3JlZi5jaGlsZHJlbkFzRGF0YSxcbiAgICAgIHZhbHVlcyA9IF9yZWYudmFsdWVzLFxuICAgICAgc2VhcmNoVmFsdWUgPSBfcmVmLnNlYXJjaFZhbHVlLFxuICAgICAgbXVsdGlwbGUgPSBfcmVmLm11bHRpcGxlLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gX3JlZi5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIGl0ZW1IZWlnaHQgPSBfcmVmLml0ZW1IZWlnaHQsXG4gICAgICBub3RGb3VuZENvbnRlbnQgPSBfcmVmLm5vdEZvdW5kQ29udGVudCxcbiAgICAgIG9wZW4gPSBfcmVmLm9wZW4sXG4gICAgICBtZW51SXRlbVNlbGVjdGVkSWNvbiA9IF9yZWYubWVudUl0ZW1TZWxlY3RlZEljb24sXG4gICAgICB2aXJ0dWFsID0gX3JlZi52aXJ0dWFsLFxuICAgICAgb25TZWxlY3QgPSBfcmVmLm9uU2VsZWN0LFxuICAgICAgb25Ub2dnbGVPcGVuID0gX3JlZi5vblRvZ2dsZU9wZW4sXG4gICAgICBvbkFjdGl2ZVZhbHVlID0gX3JlZi5vbkFjdGl2ZVZhbHVlLFxuICAgICAgb25TY3JvbGwgPSBfcmVmLm9uU2Nyb2xsLFxuICAgICAgb25Nb3VzZUVudGVyID0gX3JlZi5vbk1vdXNlRW50ZXI7XG4gIHZhciBpdGVtUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtXCIpO1xuICB2YXIgbWVtb0ZsYXR0ZW5PcHRpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5PcHRpb25zO1xuICB9LCBbb3BlbiwgZmxhdHRlbk9wdGlvbnNdLCBmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgIHJldHVybiBuZXh0WzBdICYmIHByZXZbMV0gIT09IG5leHRbMV07XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gTGlzdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgbGlzdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgb25MaXN0TW91c2VEb3duID0gZnVuY3Rpb24gb25MaXN0TW91c2VEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICB2YXIgc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhpbmRleCkge1xuICAgIGlmIChsaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxUbyh7XG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSk7XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBBY3RpdmUgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBnZXRFbmFibGVkQWN0aXZlSW5kZXggPSBmdW5jdGlvbiBnZXRFbmFibGVkQWN0aXZlSW5kZXgoaW5kZXgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgIHZhciBsZW4gPSBtZW1vRmxhdHRlbk9wdGlvbnMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSAoaW5kZXggKyBpICogb2Zmc2V0ICsgbGVuKSAlIGxlbjtcbiAgICAgIHZhciBfbWVtb0ZsYXR0ZW5PcHRpb25zJGMgPSBtZW1vRmxhdHRlbk9wdGlvbnNbY3VycmVudF0sXG4gICAgICAgICAgZ3JvdXAgPSBfbWVtb0ZsYXR0ZW5PcHRpb25zJGMuZ3JvdXAsXG4gICAgICAgICAgZGF0YSA9IF9tZW1vRmxhdHRlbk9wdGlvbnMkYy5kYXRhO1xuXG4gICAgICBpZiAoIWdyb3VwICYmICFkYXRhLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRFbmFibGVkQWN0aXZlSW5kZXgoMCk7XG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBhY3RpdmVJbmRleCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRBY3RpdmVJbmRleCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHNldEFjdGl2ZSA9IGZ1bmN0aW9uIHNldEFjdGl2ZShpbmRleCkge1xuICAgIHZhciBmcm9tS2V5Ym9hcmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcbiAgICB2YXIgaW5mbyA9IHtcbiAgICAgIHNvdXJjZTogZnJvbUtleWJvYXJkID8gJ2tleWJvYXJkJyA6ICdtb3VzZSdcbiAgICB9OyAvLyBUcmlnZ2VyIGFjdGl2ZSBldmVudFxuXG4gICAgdmFyIGZsYXR0ZW5JdGVtID0gbWVtb0ZsYXR0ZW5PcHRpb25zW2luZGV4XTtcblxuICAgIGlmICghZmxhdHRlbkl0ZW0pIHtcbiAgICAgIG9uQWN0aXZlVmFsdWUobnVsbCwgLTEsIGluZm8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQWN0aXZlVmFsdWUoZmxhdHRlbkl0ZW0uZGF0YS52YWx1ZSwgaW5kZXgsIGluZm8pO1xuICB9OyAvLyBBdXRvIGFjdGl2ZSBmaXJzdCBpdGVtIHdoZW4gbGlzdCBsZW5ndGggb3Igc2VhcmNoVmFsdWUgY2hhbmdlZFxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRBY3RpdmUoZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uICE9PSBmYWxzZSA/IGdldEVuYWJsZWRBY3RpdmVJbmRleCgwKSA6IC0xKTtcbiAgfSwgW21lbW9GbGF0dGVuT3B0aW9ucy5sZW5ndGgsIHNlYXJjaFZhbHVlXSk7IC8vIEF1dG8gc2Nyb2xsIHRvIGl0ZW0gcG9zaXRpb24gaW4gc2luZ2xlIG1vZGVcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFJlYWN0IHdpbGwgc2tpcCBgb25DaGFuZ2VgIHdoZW4gY29tcG9uZW50IHVwZGF0ZS5cbiAgICAgKiBgc2V0QWN0aXZlYCBmdW5jdGlvbiB3aWxsIGNhbGwgcm9vdCBhY2Nlc3NpYmlsaXR5IHN0YXRlIHVwZGF0ZSB3aGljaCBtYWtlcyByZS1yZW5kZXIuXG4gICAgICogU28gd2UgbmVlZCB0byBkZWxheSB0byBsZXQgSW5wdXQgY29tcG9uZW50IHRyaWdnZXIgb25DaGFuZ2UgZmlyc3QuXG4gICAgICovXG4gICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFtdWx0aXBsZSAmJiBvcGVuICYmIHZhbHVlcy5zaXplID09PSAxKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IEFycmF5LmZyb20odmFsdWVzKVswXTtcbiAgICAgICAgdmFyIGluZGV4ID0gbWVtb0ZsYXR0ZW5PcHRpb25zLmZpbmRJbmRleChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XG4gICAgICAgICAgcmV0dXJuIGRhdGEudmFsdWUgPT09IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0QWN0aXZlKGluZGV4KTtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICAgICAgfVxuICAgIH0pOyAvLyBGb3JjZSB0cmlnZ2VyIHNjcm9sbGJhciB2aXNpYmxlIHdoZW4gb3BlblxuXG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHZhciBfbGlzdFJlZiRjdXJyZW50O1xuXG4gICAgICAoX2xpc3RSZWYkY3VycmVudCA9IGxpc3RSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2xpc3RSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2xpc3RSZWYkY3VycmVudC5zY3JvbGxUbyh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfTtcbiAgfSwgW29wZW5dKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gVmFsdWVzID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9uU2VsZWN0VmFsdWUgPSBmdW5jdGlvbiBvblNlbGVjdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9uU2VsZWN0KHZhbHVlLCB7XG4gICAgICAgIHNlbGVjdGVkOiAhdmFsdWVzLmhhcyh2YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0gLy8gU2luZ2xlIG1vZGUgc2hvdWxkIGFsd2F5cyBjbG9zZSBieSBzZWxlY3RcblxuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgb25Ub2dnbGVPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gS2V5Ym9hcmQgPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHdoaWNoID0gZXZlbnQud2hpY2g7XG5cbiAgICAgICAgc3dpdGNoICh3aGljaCkge1xuICAgICAgICAgIC8vID4+PiBBcnJvdyBrZXlzXG4gICAgICAgICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgICAgICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgICAgICAgICAgICBpZiAod2hpY2ggPT09IEtleUNvZGUuVVApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAtMTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCA9PT0gS2V5Q29kZS5ET1dOKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEFjdGl2ZUluZGV4ID0gZ2V0RW5hYmxlZEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4ICsgb2Zmc2V0LCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIHNjcm9sbEludG9WaWV3KG5leHRBY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlKG5leHRBY3RpdmVJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyA+Pj4gU2VsZWN0XG5cbiAgICAgICAgICBjYXNlIEtleUNvZGUuRU5URVI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIHZhbHVlXG4gICAgICAgICAgICAgIHZhciBpdGVtID0gbWVtb0ZsYXR0ZW5PcHRpb25zW2FjdGl2ZUluZGV4XTtcblxuICAgICAgICAgICAgICBpZiAoaXRlbSAmJiAhaXRlbS5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3RWYWx1ZShpdGVtLmRhdGEudmFsdWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0VmFsdWUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vID4+PiBDbG9zZVxuXG4gICAgICAgICAgY2FzZSBLZXlDb2RlLkVTQzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb25Ub2dnbGVPcGVuKGZhbHNlKTtcblxuICAgICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbktleVVwOiBmdW5jdGlvbiBvbktleVVwKCkge30sXG4gICAgICBzY3JvbGxUbzogZnVuY3Rpb24gc2Nyb2xsVG8oaW5kZXgpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICAgICAgfVxuICAgIH07XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBpZiAobWVtb0ZsYXR0ZW5PcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCJfbGlzdFwiKSxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoaXRlbVByZWZpeENscywgXCItZW1wdHlcIiksXG4gICAgICBvbk1vdXNlRG93bjogb25MaXN0TW91c2VEb3duXG4gICAgfSwgbm90Rm91bmRDb250ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaW5kZXgpIHtcbiAgICB2YXIgaXRlbSA9IG1lbW9GbGF0dGVuT3B0aW9uc1tpbmRleF07XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaXRlbURhdGEgPSBpdGVtLmRhdGEgfHwge307XG4gICAgdmFyIHZhbHVlID0gaXRlbURhdGEudmFsdWUsXG4gICAgICAgIGxhYmVsID0gaXRlbURhdGEubGFiZWwsXG4gICAgICAgIGNoaWxkcmVuID0gaXRlbURhdGEuY2hpbGRyZW47XG4gICAgdmFyIGF0dHJzID0gcGlja0F0dHJzKGl0ZW1EYXRhLCB0cnVlKTtcbiAgICB2YXIgbWVyZ2VkTGFiZWwgPSBjaGlsZHJlbkFzRGF0YSA/IGNoaWxkcmVuIDogbGFiZWw7XG4gICAgcmV0dXJuIGl0ZW0gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBcImFyaWEtbGFiZWxcIjogdHlwZW9mIG1lcmdlZExhYmVsID09PSAnc3RyaW5nJyA/IG1lcmdlZExhYmVsIDogbnVsbFxuICAgIH0sIGF0dHJzLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCJfbGlzdF9cIikuY29uY2F0KGluZGV4KSxcbiAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiB2YWx1ZXMuaGFzKHZhbHVlKVxuICAgIH0pLCB2YWx1ZSkgOiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgaWQ6IFwiXCIuY29uY2F0KGlkLCBcIl9saXN0XCIpLFxuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbiAgfSwgcmVuZGVySXRlbShhY3RpdmVJbmRleCAtIDEpLCByZW5kZXJJdGVtKGFjdGl2ZUluZGV4KSwgcmVuZGVySXRlbShhY3RpdmVJbmRleCArIDEpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdCwge1xuICAgIGl0ZW1LZXk6IFwia2V5XCIsXG4gICAgcmVmOiBsaXN0UmVmLFxuICAgIGRhdGE6IG1lbW9GbGF0dGVuT3B0aW9ucyxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBpdGVtSGVpZ2h0OiBpdGVtSGVpZ2h0LFxuICAgIGZ1bGxIZWlnaHQ6IGZhbHNlLFxuICAgIG9uTW91c2VEb3duOiBvbkxpc3RNb3VzZURvd24sXG4gICAgb25TY3JvbGw6IG9uU2Nyb2xsLFxuICAgIHZpcnR1YWw6IHZpcnR1YWwsXG4gICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXJcbiAgfSwgZnVuY3Rpb24gKF9yZWYzLCBpdGVtSW5kZXgpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgZ3JvdXAgPSBfcmVmMy5ncm91cCxcbiAgICAgICAgZ3JvdXBPcHRpb24gPSBfcmVmMy5ncm91cE9wdGlvbixcbiAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGE7XG4gICAgdmFyIGxhYmVsID0gZGF0YS5sYWJlbCxcbiAgICAgICAga2V5ID0gZGF0YS5rZXk7IC8vIEdyb3VwXG5cbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhpdGVtUHJlZml4Q2xzLCBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1ncm91cFwiKSlcbiAgICAgIH0sIGxhYmVsICE9PSB1bmRlZmluZWQgPyBsYWJlbCA6IGtleSk7XG4gICAgfVxuXG4gICAgdmFyIGRpc2FibGVkID0gZGF0YS5kaXNhYmxlZCxcbiAgICAgICAgdmFsdWUgPSBkYXRhLnZhbHVlLFxuICAgICAgICB0aXRsZSA9IGRhdGEudGl0bGUsXG4gICAgICAgIGNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbixcbiAgICAgICAgc3R5bGUgPSBkYXRhLnN0eWxlLFxuICAgICAgICBjbGFzc05hbWUgPSBkYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhkYXRhLCBbXCJkaXNhYmxlZFwiLCBcInZhbHVlXCIsIFwidGl0bGVcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCJdKTsgLy8gT3B0aW9uXG5cblxuICAgIHZhciBzZWxlY3RlZCA9IHZhbHVlcy5oYXModmFsdWUpO1xuICAgIHZhciBvcHRpb25QcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1vcHRpb25cIik7XG4gICAgdmFyIG9wdGlvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoaXRlbVByZWZpeENscywgb3B0aW9uUHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KG9wdGlvblByZWZpeENscywgXCItZ3JvdXBlZFwiKSwgZ3JvdXBPcHRpb24pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KG9wdGlvblByZWZpeENscywgXCItYWN0aXZlXCIpLCBhY3RpdmVJbmRleCA9PT0gaXRlbUluZGV4ICYmICFkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQob3B0aW9uUHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KG9wdGlvblByZWZpeENscywgXCItc2VsZWN0ZWRcIiksIHNlbGVjdGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICB2YXIgbWVyZ2VkTGFiZWwgPSBjaGlsZHJlbkFzRGF0YSA/IGNoaWxkcmVuIDogbGFiZWw7XG4gICAgdmFyIGljb25WaXNpYmxlID0gIW1lbnVJdGVtU2VsZWN0ZWRJY29uIHx8IHR5cGVvZiBtZW51SXRlbVNlbGVjdGVkSWNvbiA9PT0gJ2Z1bmN0aW9uJyB8fCBzZWxlY3RlZDtcbiAgICB2YXIgY29udGVudCA9IG1lcmdlZExhYmVsIHx8IHZhbHVlOyAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yNjcxN1xuXG4gICAgdmFyIG9wdGlvblRpdGxlID0gdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJyA/IGNvbnRlbnQudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25UaXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IHNlbGVjdGVkLFxuICAgICAgY2xhc3NOYW1lOiBvcHRpb25DbGFzc05hbWUsXG4gICAgICB0aXRsZTogb3B0aW9uVGl0bGUsXG4gICAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gb25Nb3VzZU1vdmUoKSB7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaXRlbUluZGV4IHx8IGRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QWN0aXZlKGl0ZW1JbmRleCk7XG4gICAgICB9LFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgIG9uU2VsZWN0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3B0aW9uUHJlZml4Q2xzLCBcIi1jb250ZW50XCIpXG4gICAgfSwgY29udGVudCksIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChtZW51SXRlbVNlbGVjdGVkSWNvbikgfHwgc2VsZWN0ZWQsIGljb25WaXNpYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zQnRuLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGl0ZW1QcmVmaXhDbHMsIFwiLW9wdGlvbi1zdGF0ZVwiKSxcbiAgICAgIGN1c3RvbWl6ZUljb246IG1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgY3VzdG9taXplSWNvblByb3BzOiB7XG4gICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgICB9XG4gICAgfSwgc2VsZWN0ZWQgPyAn4pyTJyA6IG51bGwpKTtcbiAgfSkpO1xufTtcblxudmFyIFJlZk9wdGlvbkxpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihPcHRpb25MaXN0KTtcblJlZk9wdGlvbkxpc3QuZGlzcGxheU5hbWUgPSAnT3B0aW9uTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBSZWZPcHRpb25MaXN0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcblxuLyoqXG4gKiBUbyBtYXRjaCBhY2Nlc3NpYmlsaXR5IHJlcXVpcmVtZW50LCB3ZSBhbHdheXMgcHJvdmlkZSBhbiBpbnB1dCBpbiB0aGUgY29tcG9uZW50LlxuICogT3RoZXIgZWxlbWVudCB3aWxsIG5vdCBzZXQgYHRhYkluZGV4YCB0byBhdm9pZCBgb25CbHVyYCBzZXF1ZW5jZSBwcm9ibGVtLlxuICogRm9yIGZvY3VzZWQgc2VsZWN0LCB3ZSBzZXQgYGFyaWEtbGl2ZT1cInBvbGl0ZVwiYCB0byB1cGRhdGUgdGhlIGFjY2Vzc2liaWxpdHkgY29udGVudC5cbiAqXG4gKiByZWY6XG4gKiAtIGtleWJvYXJkOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvUm9sZXMvbGlzdGJveF9yb2xlI0tleWJvYXJkX2ludGVyYWN0aW9uc1xuICpcbiAqIE5ldyBhcGk6XG4gKiAtIGxpc3RIZWlnaHRcbiAqIC0gbGlzdEl0ZW1IZWlnaHRcbiAqIC0gY29tcG9uZW50XG4gKlxuICogUmVtb3ZlIGRlcHJlY2F0ZWQgYXBpOlxuICogLSBtdWx0aXBsZVxuICogLSB0YWdzXG4gKiAtIGNvbWJvYm94XG4gKiAtIGZpcnN0QWN0aXZlVmFsdWVcbiAqIC0gZHJvcGRvd25NZW51U3R5bGVcbiAqIC0gb3BlbkNsYXNzTmFtZSAoTm90IGxpc3QgaW4gYXBpKVxuICpcbiAqIFVwZGF0ZTpcbiAqIC0gYGJhY2tmaWxsYCBvbmx5IHN1cHBvcnQgYGNvbWJvYm94YCBtb2RlXG4gKiAtIGBjb21ib2JveGAgbW9kZSBub3Qgc3VwcG9ydCBgbGFiZWxJblZhbHVlYCBzaW5jZSBpdCdzIG1lYW5pbmdsZXNzXG4gKiAtIGBnZXRJbnB1dEVsZW1lbnRgIG9ubHkgc3VwcG9ydCBgY29tYm9ib3hgIG1vZGVcbiAqIC0gYG9uQ2hhbmdlYCByZXR1cm4gT3B0aW9uRGF0YSBpbnN0ZWFkIG9mIFJlYWN0Tm9kZVxuICogLSBgZmlsdGVyT3B0aW9uYCBgb25DaGFuZ2VgIGBvblNlbGVjdGAgYWNjZXB0IE9wdGlvbkRhdGEgaW5zdGVhZCBvZiBSZWFjdE5vZGVcbiAqIC0gYGNvbWJvYm94YCBtb2RlIHRyaWdnZXIgYG9uQ2hhbmdlYCB3aWxsIGdldCBgdW5kZWZpbmVkYCBpZiBubyBgdmFsdWVgIG1hdGNoIGluIE9wdGlvblxuICogLSBgY29tYm9ib3hgIG1vZGUgbm90IHN1cHBvcnQgYG9wdGlvbkxhYmVsUHJvcGBcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdE9wdGlvbkxpc3QgZnJvbSAnLi9PcHRpb25MaXN0JztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IE9wdEdyb3VwIGZyb20gJy4vT3B0R3JvdXAnO1xuaW1wb3J0IHsgY29udmVydENoaWxkcmVuVG9EYXRhIGFzIGNvbnZlcnRTZWxlY3RDaGlsZHJlblRvRGF0YSB9IGZyb20gJy4vdXRpbHMvbGVnYWN5VXRpbCc7XG5pbXBvcnQgeyBnZXRMYWJlbGVkVmFsdWUgYXMgZ2V0U2VsZWN0TGFiZWxlZFZhbHVlLCBmaWx0ZXJPcHRpb25zIGFzIHNlbGVjdERlZmF1bHRGaWx0ZXJPcHRpb25zLCBpc1ZhbHVlRGlzYWJsZWQgYXMgaXNTZWxlY3RWYWx1ZURpc2FibGVkLCBmaW5kVmFsdWVPcHRpb24gYXMgZmluZFNlbGVjdFZhbHVlT3B0aW9uLCBmbGF0dGVuT3B0aW9ucywgZmlsbE9wdGlvbnNXaXRoTWlzc2luZ1ZhbHVlIH0gZnJvbSAnLi91dGlscy92YWx1ZVV0aWwnO1xuaW1wb3J0IGdlbmVyYXRlU2VsZWN0b3IgZnJvbSAnLi9nZW5lcmF0ZSc7XG5pbXBvcnQgd2FybmluZ1Byb3BzIGZyb20gJy4vdXRpbHMvd2FybmluZ1Byb3BzVXRpbCc7XG52YXIgUmVmU2VsZWN0ID0gZ2VuZXJhdGVTZWxlY3Rvcih7XG4gIHByZWZpeENsczogJ3JjLXNlbGVjdCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBvcHRpb25MaXN0OiBTZWxlY3RPcHRpb25MaXN0XG4gIH0sXG4gIGNvbnZlcnRDaGlsZHJlblRvRGF0YTogY29udmVydFNlbGVjdENoaWxkcmVuVG9EYXRhLFxuICBmbGF0dGVuT3B0aW9uczogZmxhdHRlbk9wdGlvbnMsXG4gIGdldExhYmVsZWRWYWx1ZTogZ2V0U2VsZWN0TGFiZWxlZFZhbHVlLFxuICBmaWx0ZXJPcHRpb25zOiBzZWxlY3REZWZhdWx0RmlsdGVyT3B0aW9ucyxcbiAgaXNWYWx1ZURpc2FibGVkOiBpc1NlbGVjdFZhbHVlRGlzYWJsZWQsXG4gIGZpbmRWYWx1ZU9wdGlvbjogZmluZFNlbGVjdFZhbHVlT3B0aW9uLFxuICB3YXJuaW5nUHJvcHM6IHdhcm5pbmdQcm9wcyxcbiAgZmlsbE9wdGlvbnNXaXRoTWlzc2luZ1ZhbHVlOiBmaWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWVcbn0pO1xuLyoqXG4gKiBUeXBlc2NyaXB0IG5vdCBzdXBwb3J0IGdlbmVyaWMgd2l0aCBmdW5jdGlvbiBjb21wb25lbnQsXG4gKiB3ZSBoYXZlIHRvIHdyYXAgYW4gY2xhc3MgY29tcG9uZW50IHRvIGhhbmRsZSB0aGlzLlxuICovXG5cbnZhciBTZWxlY3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWxlY3QpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuc2VsZWN0UmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZWxlY3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5ibHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2VsZWN0UmVmLmN1cnJlbnQuYmx1cigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlZlNlbGVjdCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMuc2VsZWN0UmVmXG4gICAgICB9LCB0aGlzLnByb3BzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblNlbGVjdC5PcHRHcm91cCA9IE9wdEdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIGdldEJ1aWx0SW5QbGFjZW1lbnRzID0gZnVuY3Rpb24gZ2V0QnVpbHRJblBsYWNlbWVudHMoZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKSB7XG4gIC8vIEVuYWJsZSBob3Jpem9udGFsIG92ZXJmbG93IGF1dG8tYWRqdXN0bWVudCB3aGVuIGEgY3VzdG9tIGRyb3Bkb3duIHdpZHRoIGlzIHByb3ZpZGVkXG4gIHZhciBhZGp1c3RYID0gdHlwZW9mIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCAhPT0gJ251bWJlcicgPyAwIDogMTtcbiAgcmV0dXJuIHtcbiAgICBib3R0b21MZWZ0OiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICAgIG9mZnNldDogWzAsIDRdLFxuICAgICAgb3ZlcmZsb3c6IHtcbiAgICAgICAgYWRqdXN0WDogYWRqdXN0WCxcbiAgICAgICAgYWRqdXN0WTogMVxuICAgICAgfVxuICAgIH0sXG4gICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgICBvdmVyZmxvdzoge1xuICAgICAgICBhZGp1c3RYOiBhZGp1c3RYLFxuICAgICAgICBhZGp1c3RZOiAxXG4gICAgICB9XG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICAgIG9mZnNldDogWzAsIC00XSxcbiAgICAgIG92ZXJmbG93OiB7XG4gICAgICAgIGFkanVzdFg6IGFkanVzdFgsXG4gICAgICAgIGFkanVzdFk6IDFcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvcFJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICAgIG9mZnNldDogWzAsIC00XSxcbiAgICAgIG92ZXJmbG93OiB7XG4gICAgICAgIGFkanVzdFg6IGFkanVzdFgsXG4gICAgICAgIGFkanVzdFk6IDFcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG52YXIgU2VsZWN0VHJpZ2dlciA9IGZ1bmN0aW9uIFNlbGVjdFRyaWdnZXIocHJvcHMsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHBvcHVwRWxlbWVudCA9IHByb3BzLnBvcHVwRWxlbWVudCxcbiAgICAgIGNvbnRhaW5lcldpZHRoID0gcHJvcHMuY29udGFpbmVyV2lkdGgsXG4gICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgZHJvcGRvd25TdHlsZSA9IHByb3BzLmRyb3Bkb3duU3R5bGUsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IHByb3BzLmRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgIGRpcmVjdGlvbiA9IF9wcm9wcyRkaXJlY3Rpb24gPT09IHZvaWQgMCA/ICdsdHInIDogX3Byb3BzJGRpcmVjdGlvbixcbiAgICAgIF9wcm9wcyRkcm9wZG93bk1hdGNoUyA9IHByb3BzLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IF9wcm9wcyRkcm9wZG93bk1hdGNoUyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyRkcm9wZG93bk1hdGNoUyxcbiAgICAgIGRyb3Bkb3duUmVuZGVyID0gcHJvcHMuZHJvcGRvd25SZW5kZXIsXG4gICAgICBkcm9wZG93bkFsaWduID0gcHJvcHMuZHJvcGRvd25BbGlnbixcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBlbXB0eSA9IHByb3BzLmVtcHR5LFxuICAgICAgZ2V0VHJpZ2dlckRPTU5vZGUgPSBwcm9wcy5nZXRUcmlnZ2VyRE9NTm9kZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiZGlzYWJsZWRcIiwgXCJ2aXNpYmxlXCIsIFwiY2hpbGRyZW5cIiwgXCJwb3B1cEVsZW1lbnRcIiwgXCJjb250YWluZXJXaWR0aFwiLCBcImFuaW1hdGlvblwiLCBcInRyYW5zaXRpb25OYW1lXCIsIFwiZHJvcGRvd25TdHlsZVwiLCBcImRyb3Bkb3duQ2xhc3NOYW1lXCIsIFwiZGlyZWN0aW9uXCIsIFwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCIsIFwiZHJvcGRvd25SZW5kZXJcIiwgXCJkcm9wZG93bkFsaWduXCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJlbXB0eVwiLCBcImdldFRyaWdnZXJET01Ob2RlXCJdKTtcblxuICB2YXIgZHJvcGRvd25QcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRyb3Bkb3duXCIpO1xuICB2YXIgcG9wdXBOb2RlID0gcG9wdXBFbGVtZW50O1xuXG4gIGlmIChkcm9wZG93blJlbmRlcikge1xuICAgIHBvcHVwTm9kZSA9IGRyb3Bkb3duUmVuZGVyKHBvcHVwRWxlbWVudCk7XG4gIH1cblxuICB2YXIgYnVpbHRJblBsYWNlbWVudHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0QnVpbHRJblBsYWNlbWVudHMoZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKTtcbiAgfSwgW2Ryb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gTW90aW9uID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgbWVyZ2VkVHJhbnNpdGlvbk5hbWUgPSBhbmltYXRpb24gPyBcIlwiLmNvbmNhdChkcm9wZG93blByZWZpeENscywgXCItXCIpLmNvbmNhdChhbmltYXRpb24pIDogdHJhbnNpdGlvbk5hbWU7IC8vID09PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBwb3B1cFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UG9wdXBFbGVtZW50OiBmdW5jdGlvbiBnZXRQb3B1cEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBwb3B1cFJlZi5jdXJyZW50O1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIHZhciBwb3B1cFN0eWxlID0gX29iamVjdFNwcmVhZCh7XG4gICAgbWluV2lkdGg6IGNvbnRhaW5lcldpZHRoXG4gIH0sIGRyb3Bkb3duU3R5bGUpO1xuXG4gIGlmICh0eXBlb2YgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID09PSAnbnVtYmVyJykge1xuICAgIHBvcHVwU3R5bGUud2lkdGggPSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gIH0gZWxzZSBpZiAoZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKSB7XG4gICAgcG9wdXBTdHlsZS53aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICBzaG93QWN0aW9uOiBbXSxcbiAgICBoaWRlQWN0aW9uOiBbXSxcbiAgICBwb3B1cFBsYWNlbWVudDogZGlyZWN0aW9uID09PSAncnRsJyA/ICdib3R0b21SaWdodCcgOiAnYm90dG9tTGVmdCcsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IGJ1aWx0SW5QbGFjZW1lbnRzLFxuICAgIHByZWZpeENsczogZHJvcGRvd25QcmVmaXhDbHMsXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogbWVyZ2VkVHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogcG9wdXBSZWZcbiAgICB9LCBwb3B1cE5vZGUpLFxuICAgIHBvcHVwQWxpZ246IGRyb3Bkb3duQWxpZ24sXG4gICAgcG9wdXBWaXNpYmxlOiB2aXNpYmxlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lcixcbiAgICBwb3B1cENsYXNzTmFtZTogY2xhc3NOYW1lcyhkcm9wZG93bkNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChkcm9wZG93blByZWZpeENscywgXCItZW1wdHlcIiksIGVtcHR5KSksXG4gICAgcG9wdXBTdHlsZTogcG9wdXBTdHlsZSxcbiAgICBnZXRUcmlnZ2VyRE9NTm9kZTogZ2V0VHJpZ2dlckRPTU5vZGVcbiAgfSksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBSZWZTZWxlY3RUcmlnZ2VyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoU2VsZWN0VHJpZ2dlcik7XG5SZWZTZWxlY3RUcmlnZ2VyLmRpc3BsYXlOYW1lID0gJ1NlbGVjdFRyaWdnZXInO1xuZXhwb3J0IGRlZmF1bHQgUmVmU2VsZWN0VHJpZ2dlcjsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KF9yZWYsIHJlZikge1xuICB2YXIgX2lucHV0Tm9kZTIsIF9pbnB1dE5vZGUyJHByb3BzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGlucHV0RWxlbWVudCA9IF9yZWYuaW5wdXRFbGVtZW50LFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgdGFiSW5kZXggPSBfcmVmLnRhYkluZGV4LFxuICAgICAgYXV0b0ZvY3VzID0gX3JlZi5hdXRvRm9jdXMsXG4gICAgICBhdXRvQ29tcGxldGUgPSBfcmVmLmF1dG9Db21wbGV0ZSxcbiAgICAgIGVkaXRhYmxlID0gX3JlZi5lZGl0YWJsZSxcbiAgICAgIGFjY2Vzc2liaWxpdHlJbmRleCA9IF9yZWYuYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgbWF4TGVuZ3RoID0gX3JlZi5tYXhMZW5ndGgsXG4gICAgICBfb25LZXlEb3duID0gX3JlZi5vbktleURvd24sXG4gICAgICBfb25Nb3VzZURvd24gPSBfcmVmLm9uTW91c2VEb3duLFxuICAgICAgX29uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9uUGFzdGUgPSBfcmVmLm9uUGFzdGUsXG4gICAgICBfb25Db21wb3NpdGlvblN0YXJ0ID0gX3JlZi5vbkNvbXBvc2l0aW9uU3RhcnQsXG4gICAgICBfb25Db21wb3NpdGlvbkVuZCA9IF9yZWYub25Db21wb3NpdGlvbkVuZCxcbiAgICAgIG9wZW4gPSBfcmVmLm9wZW4sXG4gICAgICBhdHRycyA9IF9yZWYuYXR0cnM7XG4gIHZhciBpbnB1dE5vZGUgPSBpbnB1dEVsZW1lbnQgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBudWxsKTtcbiAgdmFyIF9pbnB1dE5vZGUgPSBpbnB1dE5vZGUsXG4gICAgICBvcmlnaW5SZWYgPSBfaW5wdXROb2RlLnJlZixcbiAgICAgIF9pbnB1dE5vZGUkcHJvcHMgPSBfaW5wdXROb2RlLnByb3BzLFxuICAgICAgb25PcmlnaW5LZXlEb3duID0gX2lucHV0Tm9kZSRwcm9wcy5vbktleURvd24sXG4gICAgICBvbk9yaWdpbkNoYW5nZSA9IF9pbnB1dE5vZGUkcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbk9yaWdpbk1vdXNlRG93biA9IF9pbnB1dE5vZGUkcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBvbk9yaWdpbkNvbXBvc2l0aW9uU3RhcnQgPSBfaW5wdXROb2RlJHByb3BzLm9uQ29tcG9zaXRpb25TdGFydCxcbiAgICAgIG9uT3JpZ2luQ29tcG9zaXRpb25FbmQgPSBfaW5wdXROb2RlJHByb3BzLm9uQ29tcG9zaXRpb25FbmQsXG4gICAgICBzdHlsZSA9IF9pbnB1dE5vZGUkcHJvcHMuc3R5bGU7XG4gIGlucHV0Tm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXROb2RlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgIGlkOiBpZCxcbiAgICByZWY6IGNvbXBvc2VSZWYocmVmLCBvcmlnaW5SZWYpLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUgfHwgJ29mZicsXG4gICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLXNlYXJjaC1pbnB1dFwiKSwgKF9pbnB1dE5vZGUyID0gaW5wdXROb2RlKSA9PT0gbnVsbCB8fCBfaW5wdXROb2RlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9pbnB1dE5vZGUyJHByb3BzID0gX2lucHV0Tm9kZTIucHJvcHMpID09PSBudWxsIHx8IF9pbnB1dE5vZGUyJHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5wdXROb2RlMiRwcm9wcy5jbGFzc05hbWUpLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwge30sIHtcbiAgICAgIG9wYWNpdHk6IGVkaXRhYmxlID8gbnVsbCA6IDBcbiAgICB9KSxcbiAgICByb2xlOiAnY29tYm9ib3gnLFxuICAgICdhcmlhLWV4cGFuZGVkJzogb3BlbixcbiAgICAnYXJpYS1oYXNwb3B1cCc6ICdsaXN0Ym94JyxcbiAgICAnYXJpYS1vd25zJzogXCJcIi5jb25jYXQoaWQsIFwiX2xpc3RcIiksXG4gICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICdhcmlhLWNvbnRyb2xzJzogXCJcIi5jb25jYXQoaWQsIFwiX2xpc3RcIiksXG4gICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IFwiXCIuY29uY2F0KGlkLCBcIl9saXN0X1wiKS5jb25jYXQoYWNjZXNzaWJpbGl0eUluZGV4KVxuICB9LCBhdHRycyksIHt9LCB7XG4gICAgdmFsdWU6IGVkaXRhYmxlID8gdmFsdWUgOiAnJyxcbiAgICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgICByZWFkT25seTogIWVkaXRhYmxlLFxuICAgIHVuc2VsZWN0YWJsZTogIWVkaXRhYmxlID8gJ29uJyA6IG51bGwsXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcbiAgICAgIF9vbktleURvd24oZXZlbnQpO1xuXG4gICAgICBpZiAob25PcmlnaW5LZXlEb3duKSB7XG4gICAgICAgIG9uT3JpZ2luS2V5RG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIF9vbk1vdXNlRG93bihldmVudCk7XG5cbiAgICAgIGlmIChvbk9yaWdpbk1vdXNlRG93bikge1xuICAgICAgICBvbk9yaWdpbk1vdXNlRG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIF9vbkNoYW5nZShldmVudCk7XG5cbiAgICAgIGlmIChvbk9yaWdpbkNoYW5nZSkge1xuICAgICAgICBvbk9yaWdpbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNvbXBvc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydChldmVudCkge1xuICAgICAgX29uQ29tcG9zaXRpb25TdGFydChldmVudCk7XG5cbiAgICAgIGlmIChvbk9yaWdpbkNvbXBvc2l0aW9uU3RhcnQpIHtcbiAgICAgICAgb25PcmlnaW5Db21wb3NpdGlvblN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IGZ1bmN0aW9uIG9uQ29tcG9zaXRpb25FbmQoZXZlbnQpIHtcbiAgICAgIF9vbkNvbXBvc2l0aW9uRW5kKGV2ZW50KTtcblxuICAgICAgaWYgKG9uT3JpZ2luQ29tcG9zaXRpb25FbmQpIHtcbiAgICAgICAgb25PcmlnaW5Db21wb3NpdGlvbkVuZChldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblBhc3RlOiBvblBhc3RlXG4gIH0pKTtcbiAgcmV0dXJuIGlucHV0Tm9kZTtcbn07XG5cbnZhciBSZWZJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKElucHV0KTtcblJlZklucHV0LmRpc3BsYXlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IFJlZklucHV0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcGlja0F0dHJzIGZyb20gXCJyYy11dGlsL2VzL3BpY2tBdHRyc1wiO1xuaW1wb3J0IE92ZXJmbG93IGZyb20gJ3JjLW92ZXJmbG93JztcbmltcG9ydCBUcmFuc0J0biBmcm9tICcuLi9UcmFuc0J0bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgdXNlTGF5b3V0RWZmZWN0IGZyb20gJy4uL2hvb2tzL3VzZUxheW91dEVmZmVjdCc7XG5cbnZhciBvblByZXZlbnRNb3VzZURvd24gPSBmdW5jdGlvbiBvblByZXZlbnRNb3VzZURvd24oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG52YXIgU2VsZWN0U2VsZWN0b3IgPSBmdW5jdGlvbiBTZWxlY3RTZWxlY3Rvcihwcm9wcykge1xuICB2YXIgaWQgPSBwcm9wcy5pZCxcbiAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBwbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIG1vZGUgPSBwcm9wcy5tb2RlLFxuICAgICAgc2hvd1NlYXJjaCA9IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvQ29tcGxldGUgPSBwcm9wcy5hdXRvQ29tcGxldGUsXG4gICAgICBhY2Nlc3NpYmlsaXR5SW5kZXggPSBwcm9wcy5hY2Nlc3NpYmlsaXR5SW5kZXgsXG4gICAgICB0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgcmVtb3ZlSWNvbiA9IHByb3BzLnJlbW92ZUljb24sXG4gICAgICBtYXhUYWdDb3VudCA9IHByb3BzLm1heFRhZ0NvdW50LFxuICAgICAgbWF4VGFnVGV4dExlbmd0aCA9IHByb3BzLm1heFRhZ1RleHRMZW5ndGgsXG4gICAgICBfcHJvcHMkbWF4VGFnUGxhY2Vob2wgPSBwcm9wcy5tYXhUYWdQbGFjZWhvbGRlcixcbiAgICAgIG1heFRhZ1BsYWNlaG9sZGVyID0gX3Byb3BzJG1heFRhZ1BsYWNlaG9sID09PSB2b2lkIDAgPyBmdW5jdGlvbiAob21pdHRlZFZhbHVlcykge1xuICAgIHJldHVybiBcIisgXCIuY29uY2F0KG9taXR0ZWRWYWx1ZXMubGVuZ3RoLCBcIiAuLi5cIik7XG4gIH0gOiBfcHJvcHMkbWF4VGFnUGxhY2Vob2wsXG4gICAgICB0YWdSZW5kZXIgPSBwcm9wcy50YWdSZW5kZXIsXG4gICAgICBvblRvZ2dsZU9wZW4gPSBwcm9wcy5vblRvZ2dsZU9wZW4sXG4gICAgICBvblNlbGVjdCA9IHByb3BzLm9uU2VsZWN0LFxuICAgICAgb25JbnB1dENoYW5nZSA9IHByb3BzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICBvbklucHV0UGFzdGUgPSBwcm9wcy5vbklucHV0UGFzdGUsXG4gICAgICBvbklucHV0S2V5RG93biA9IHByb3BzLm9uSW5wdXRLZXlEb3duLFxuICAgICAgb25JbnB1dE1vdXNlRG93biA9IHByb3BzLm9uSW5wdXRNb3VzZURvd24sXG4gICAgICBvbklucHV0Q29tcG9zaXRpb25TdGFydCA9IHByb3BzLm9uSW5wdXRDb21wb3NpdGlvblN0YXJ0LFxuICAgICAgb25JbnB1dENvbXBvc2l0aW9uRW5kID0gcHJvcHMub25JbnB1dENvbXBvc2l0aW9uRW5kO1xuICB2YXIgbWVhc3VyZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlucHV0V2lkdGggPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5wdXRXaWR0aCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBmb2N1c2VkID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBzZWxlY3Rpb25QcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvblwiKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IFNlYXJjaCA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGlucHV0VmFsdWUgPSBvcGVuIHx8IG1vZGUgPT09ICd0YWdzJyA/IHNlYXJjaFZhbHVlIDogJyc7XG4gIHZhciBpbnB1dEVkaXRhYmxlID0gbW9kZSA9PT0gJ3RhZ3MnIHx8IHNob3dTZWFyY2ggJiYgKG9wZW4gfHwgZm9jdXNlZCk7IC8vIFdlIG1lYXN1cmUgd2lkdGggYW5kIHNldCB0byB0aGUgaW5wdXQgaW1tZWRpYXRlbHlcblxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldElucHV0V2lkdGgobWVhc3VyZVJlZi5jdXJyZW50LnNjcm9sbFdpZHRoKTtcbiAgfSwgW2lucHV0VmFsdWVdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID4+PiBSZW5kZXIgU2VsZWN0b3IgTm9kZS4gSW5jbHVkZXMgSXRlbSAmIFJlc3RcblxuICBmdW5jdGlvbiBkZWZhdWx0UmVuZGVyU2VsZWN0b3IoY29udGVudCwgaXRlbURpc2FibGVkLCBjbG9zYWJsZSwgb25DbG9zZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHNlbGVjdGlvblByZWZpeENscywgXCItaXRlbVwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChzZWxlY3Rpb25QcmVmaXhDbHMsIFwiLWl0ZW0tZGlzYWJsZWRcIiksIGl0ZW1EaXNhYmxlZCkpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoc2VsZWN0aW9uUHJlZml4Q2xzLCBcIi1pdGVtLWNvbnRlbnRcIilcbiAgICB9LCBjb250ZW50KSwgY2xvc2FibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNCdG4sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoc2VsZWN0aW9uUHJlZml4Q2xzLCBcIi1pdGVtLXJlbW92ZVwiKSxcbiAgICAgIG9uTW91c2VEb3duOiBvblByZXZlbnRNb3VzZURvd24sXG4gICAgICBvbkNsaWNrOiBvbkNsb3NlLFxuICAgICAgY3VzdG9taXplSWNvbjogcmVtb3ZlSWNvblxuICAgIH0sIFwiXFx4RDdcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3VzdG9taXplUmVuZGVyU2VsZWN0b3IodmFsdWUsIGNvbnRlbnQsIGl0ZW1EaXNhYmxlZCwgY2xvc2FibGUsIG9uQ2xvc2UpIHtcbiAgICB2YXIgb25Nb3VzZURvd24gPSBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBvblByZXZlbnRNb3VzZURvd24oZSk7XG4gICAgICBvblRvZ2dsZU9wZW4oIW9wZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuICAgIH0sIHRhZ1JlbmRlcih7XG4gICAgICBsYWJlbDogY29udGVudCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBpdGVtRGlzYWJsZWQsXG4gICAgICBjbG9zYWJsZTogY2xvc2FibGUsXG4gICAgICBvbkNsb3NlOiBvbkNsb3NlXG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySXRlbShfcmVmKSB7XG4gICAgdmFyIGl0ZW1EaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICAgIHZhciBjbG9zYWJsZSA9ICFkaXNhYmxlZCAmJiAhaXRlbURpc2FibGVkO1xuICAgIHZhciBkaXNwbGF5TGFiZWwgPSBsYWJlbDtcblxuICAgIGlmICh0eXBlb2YgbWF4VGFnVGV4dExlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsYWJlbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIHN0ckxhYmVsID0gU3RyaW5nKGRpc3BsYXlMYWJlbCk7XG5cbiAgICAgICAgaWYgKHN0ckxhYmVsLmxlbmd0aCA+IG1heFRhZ1RleHRMZW5ndGgpIHtcbiAgICAgICAgICBkaXNwbGF5TGFiZWwgPSBcIlwiLmNvbmNhdChzdHJMYWJlbC5zbGljZSgwLCBtYXhUYWdUZXh0TGVuZ3RoKSwgXCIuLi5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb25DbG9zZSA9IGZ1bmN0aW9uIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblNlbGVjdCh2YWx1ZSwge1xuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdHlwZW9mIHRhZ1JlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbWl6ZVJlbmRlclNlbGVjdG9yKHZhbHVlLCBkaXNwbGF5TGFiZWwsIGl0ZW1EaXNhYmxlZCwgY2xvc2FibGUsIG9uQ2xvc2UpIDogZGVmYXVsdFJlbmRlclNlbGVjdG9yKGRpc3BsYXlMYWJlbCwgaXRlbURpc2FibGVkLCBjbG9zYWJsZSwgb25DbG9zZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJSZXN0KG9taXR0ZWRWYWx1ZXMpIHtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBtYXhUYWdQbGFjZWhvbGRlciA9PT0gJ2Z1bmN0aW9uJyA/IG1heFRhZ1BsYWNlaG9sZGVyKG9taXR0ZWRWYWx1ZXMpIDogbWF4VGFnUGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIGRlZmF1bHRSZW5kZXJTZWxlY3Rvcihjb250ZW50LCBmYWxzZSk7XG4gIH0gLy8gPj4+IElucHV0IE5vZGVcblxuXG4gIHZhciBpbnB1dE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChzZWxlY3Rpb25QcmVmaXhDbHMsIFwiLXNlYXJjaFwiKSxcbiAgICBzdHlsZToge1xuICAgICAgd2lkdGg6IGlucHV0V2lkdGhcbiAgICB9LFxuICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICBzZXRGb2N1c2VkKHRydWUpO1xuICAgIH0sXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBzZXRGb2N1c2VkKGZhbHNlKTtcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICBvcGVuOiBvcGVuLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGlkOiBpZCxcbiAgICBpbnB1dEVsZW1lbnQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgIGVkaXRhYmxlOiBpbnB1dEVkaXRhYmxlLFxuICAgIGFjY2Vzc2liaWxpdHlJbmRleDogYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIG9uS2V5RG93bjogb25JbnB1dEtleURvd24sXG4gICAgb25Nb3VzZURvd246IG9uSW5wdXRNb3VzZURvd24sXG4gICAgb25DaGFuZ2U6IG9uSW5wdXRDaGFuZ2UsXG4gICAgb25QYXN0ZTogb25JbnB1dFBhc3RlLFxuICAgIG9uQ29tcG9zaXRpb25TdGFydDogb25JbnB1dENvbXBvc2l0aW9uU3RhcnQsXG4gICAgb25Db21wb3NpdGlvbkVuZDogb25JbnB1dENvbXBvc2l0aW9uRW5kLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICBhdHRyczogcGlja0F0dHJzKHByb3BzLCB0cnVlKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICByZWY6IG1lYXN1cmVSZWYsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChzZWxlY3Rpb25QcmVmaXhDbHMsIFwiLXNlYXJjaC1taXJyb3JcIiksXG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlXG4gIH0sIGlucHV0VmFsdWUsIFwiXFx4QTBcIikpOyAvLyA+Pj4gU2VsZWN0aW9uc1xuXG4gIHZhciBzZWxlY3Rpb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3ZlcmZsb3csIHtcbiAgICBwcmVmaXhDbHM6IFwiXCIuY29uY2F0KHNlbGVjdGlvblByZWZpeENscywgXCItb3ZlcmZsb3dcIiksXG4gICAgZGF0YTogdmFsdWVzLFxuICAgIHJlbmRlckl0ZW06IHJlbmRlckl0ZW0sXG4gICAgcmVuZGVyUmVzdDogcmVuZGVyUmVzdCxcbiAgICBzdWZmaXg6IGlucHV0Tm9kZSxcbiAgICBpdGVtS2V5OiBcImtleVwiLFxuICAgIG1heENvdW50OiBtYXhUYWdDb3VudFxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBzZWxlY3Rpb25Ob2RlLCAhdmFsdWVzLmxlbmd0aCAmJiAhaW5wdXRWYWx1ZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoc2VsZWN0aW9uUHJlZml4Q2xzLCBcIi1wbGFjZWhvbGRlclwiKVxuICB9LCBwbGFjZWhvbGRlcikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0U2VsZWN0b3I7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcGlja0F0dHJzIGZyb20gXCJyYy11dGlsL2VzL3BpY2tBdHRyc1wiO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG52YXIgU2luZ2xlU2VsZWN0b3IgPSBmdW5jdGlvbiBTaW5nbGVTZWxlY3Rvcihwcm9wcykge1xuICB2YXIgaW5wdXRFbGVtZW50ID0gcHJvcHMuaW5wdXRFbGVtZW50LFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYWNjZXNzaWJpbGl0eUluZGV4ID0gcHJvcHMuYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgICAgbW9kZSA9IHByb3BzLm1vZGUsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcyxcbiAgICAgIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICB0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgc2hvd1NlYXJjaCA9IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICBzZWFyY2hWYWx1ZSA9IHByb3BzLnNlYXJjaFZhbHVlLFxuICAgICAgYWN0aXZlVmFsdWUgPSBwcm9wcy5hY3RpdmVWYWx1ZSxcbiAgICAgIG1heExlbmd0aCA9IHByb3BzLm1heExlbmd0aCxcbiAgICAgIG9uSW5wdXRLZXlEb3duID0gcHJvcHMub25JbnB1dEtleURvd24sXG4gICAgICBvbklucHV0TW91c2VEb3duID0gcHJvcHMub25JbnB1dE1vdXNlRG93bixcbiAgICAgIG9uSW5wdXRDaGFuZ2UgPSBwcm9wcy5vbklucHV0Q2hhbmdlLFxuICAgICAgb25JbnB1dFBhc3RlID0gcHJvcHMub25JbnB1dFBhc3RlLFxuICAgICAgb25JbnB1dENvbXBvc2l0aW9uU3RhcnQgPSBwcm9wcy5vbklucHV0Q29tcG9zaXRpb25TdGFydCxcbiAgICAgIG9uSW5wdXRDb21wb3NpdGlvbkVuZCA9IHByb3BzLm9uSW5wdXRDb21wb3NpdGlvbkVuZDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBpbnB1dENoYW5nZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5wdXRDaGFuZ2VkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgY29tYm9ib3ggPSBtb2RlID09PSAnY29tYm9ib3gnO1xuICB2YXIgaW5wdXRFZGl0YWJsZSA9IGNvbWJvYm94IHx8IHNob3dTZWFyY2g7XG4gIHZhciBpdGVtID0gdmFsdWVzWzBdO1xuICB2YXIgaW5wdXRWYWx1ZSA9IHNlYXJjaFZhbHVlIHx8ICcnO1xuXG4gIGlmIChjb21ib2JveCAmJiBhY3RpdmVWYWx1ZSAmJiAhaW5wdXRDaGFuZ2VkKSB7XG4gICAgaW5wdXRWYWx1ZSA9IGFjdGl2ZVZhbHVlO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29tYm9ib3gpIHtcbiAgICAgIHNldElucHV0Q2hhbmdlZChmYWxzZSk7XG4gICAgfVxuICB9LCBbY29tYm9ib3gsIGFjdGl2ZVZhbHVlXSk7IC8vIE5vdCBzaG93IHRleHQgd2hlbiBjbG9zZWQgZXhwZWN0IGNvbWJvYm94IG1vZGVcblxuICB2YXIgaGFzVGV4dElucHV0ID0gbW9kZSAhPT0gJ2NvbWJvYm94JyAmJiAhb3BlbiA/IGZhbHNlIDogISFpbnB1dFZhbHVlO1xuICB2YXIgdGl0bGUgPSBpdGVtICYmICh0eXBlb2YgaXRlbS5sYWJlbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGl0ZW0ubGFiZWwgPT09ICdudW1iZXInKSA/IGl0ZW0ubGFiZWwudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb24tc2VhcmNoXCIpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBpZDogaWQsXG4gICAgb3Blbjogb3BlbixcbiAgICBpbnB1dEVsZW1lbnQ6IGlucHV0RWxlbWVudCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgZWRpdGFibGU6IGlucHV0RWRpdGFibGUsXG4gICAgYWNjZXNzaWJpbGl0eUluZGV4OiBhY2Nlc3NpYmlsaXR5SW5kZXgsXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgb25LZXlEb3duOiBvbklucHV0S2V5RG93bixcbiAgICBvbk1vdXNlRG93bjogb25JbnB1dE1vdXNlRG93bixcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgc2V0SW5wdXRDaGFuZ2VkKHRydWUpO1xuICAgICAgb25JbnB1dENoYW5nZShlKTtcbiAgICB9LFxuICAgIG9uUGFzdGU6IG9uSW5wdXRQYXN0ZSxcbiAgICBvbkNvbXBvc2l0aW9uU3RhcnQ6IG9uSW5wdXRDb21wb3NpdGlvblN0YXJ0LFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IG9uSW5wdXRDb21wb3NpdGlvbkVuZCxcbiAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgYXR0cnM6IHBpY2tBdHRycyhwcm9wcywgdHJ1ZSksXG4gICAgbWF4TGVuZ3RoOiBjb21ib2JveCA/IG1heExlbmd0aCA6IHVuZGVmaW5lZFxuICB9KSksICFjb21ib2JveCAmJiBpdGVtICYmICFoYXNUZXh0SW5wdXQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLWl0ZW1cIiksXG4gICAgdGl0bGU6IHRpdGxlXG4gIH0sIGl0ZW0ubGFiZWwpLCAhaXRlbSAmJiAhaGFzVGV4dElucHV0ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbi1wbGFjZWhvbGRlclwiKVxuICB9LCBwbGFjZWhvbGRlcikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlU2VsZWN0b3I7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcblxuLyoqXG4gKiBDdXJzb3IgcnVsZTpcbiAqIDEuIE9ubHkgYHNob3dTZWFyY2hgIGVuYWJsZWRcbiAqIDIuIE9ubHkgYG9wZW5gIGlzIGB0cnVlYFxuICogMy4gV2hlbiB0eXBpbmcsIHNldCBgb3BlbmAgdG8gYHRydWVgIHdoaWNoIGhpdCBydWxlIG9mIDJcbiAqXG4gKiBBY2Nlc3NpYmlsaXR5OlxuICogLSBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzL2V4YW1wbGVzL2NvbWJvYm94L2FyaWExLjFwYXR0ZXJuL2xpc3Rib3gtY29tYm8uaHRtbFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgTXVsdGlwbGVTZWxlY3RvciBmcm9tICcuL011bHRpcGxlU2VsZWN0b3InO1xuaW1wb3J0IFNpbmdsZVNlbGVjdG9yIGZyb20gJy4vU2luZ2xlU2VsZWN0b3InO1xuaW1wb3J0IHVzZUxvY2sgZnJvbSAnLi4vaG9va3MvdXNlTG9jayc7XG5cbnZhciBTZWxlY3RvciA9IGZ1bmN0aW9uIFNlbGVjdG9yKHByb3BzLCByZWYpIHtcbiAgdmFyIGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgY29tcG9zaXRpb25TdGF0dXNSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZSxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgbW9kZSA9IHByb3BzLm1vZGUsXG4gICAgICBzaG93U2VhcmNoID0gcHJvcHMuc2hvd1NlYXJjaCxcbiAgICAgIHRva2VuV2l0aEVudGVyID0gcHJvcHMudG9rZW5XaXRoRW50ZXIsXG4gICAgICBvblNlYXJjaCA9IHByb3BzLm9uU2VhcmNoLFxuICAgICAgb25TZWFyY2hTdWJtaXQgPSBwcm9wcy5vblNlYXJjaFN1Ym1pdCxcbiAgICAgIG9uVG9nZ2xlT3BlbiA9IHByb3BzLm9uVG9nZ2xlT3BlbixcbiAgICAgIG9uSW5wdXRLZXlEb3duID0gcHJvcHMub25JbnB1dEtleURvd24sXG4gICAgICBkb21SZWYgPSBwcm9wcy5kb21SZWY7IC8vID09PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfSxcbiAgICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH07XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09IElucHV0ID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgX3VzZUxvY2sgPSB1c2VMb2NrKDApLFxuICAgICAgX3VzZUxvY2syID0gX3NsaWNlZFRvQXJyYXkoX3VzZUxvY2ssIDIpLFxuICAgICAgZ2V0SW5wdXRNb3VzZURvd24gPSBfdXNlTG9jazJbMF0sXG4gICAgICBzZXRJbnB1dE1vdXNlRG93biA9IF91c2VMb2NrMlsxXTtcblxuICB2YXIgb25JbnRlcm5hbElucHV0S2V5RG93biA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxJbnB1dEtleURvd24oZXZlbnQpIHtcbiAgICB2YXIgd2hpY2ggPSBldmVudC53aGljaDtcblxuICAgIGlmICh3aGljaCA9PT0gS2V5Q29kZS5VUCB8fCB3aGljaCA9PT0gS2V5Q29kZS5ET1dOKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChvbklucHV0S2V5RG93bikge1xuICAgICAgb25JbnB1dEtleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICh3aGljaCA9PT0gS2V5Q29kZS5FTlRFUiAmJiBtb2RlID09PSAndGFncycgJiYgIWNvbXBvc2l0aW9uU3RhdHVzUmVmLmN1cnJlbnQgJiYgIW9wZW4pIHtcbiAgICAgIC8vIFdoZW4gbWVudSBpc24ndCBvcGVuLCBPcHRpb25MaXN0IHdvbid0IHRyaWdnZXIgYSB2YWx1ZSBjaGFuZ2VcbiAgICAgIC8vIFNvIHdoZW4gZW50ZXIgaXMgcHJlc3NlZCwgdGhlIHRhZydzIGlucHV0IHZhbHVlIHNob3VsZCBiZSBlbWl0dGVkIGhlcmUgdG8gbGV0IHNlbGVjdG9yIGtub3dcbiAgICAgIG9uU2VhcmNoU3VibWl0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFbS2V5Q29kZS5TSElGVCwgS2V5Q29kZS5UQUIsIEtleUNvZGUuQkFDS1NQQUNFLCBLZXlDb2RlLkVTQ10uaW5jbHVkZXMod2hpY2gpKSB7XG4gICAgICBvblRvZ2dsZU9wZW4odHJ1ZSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogV2UgY2FuIG5vdCB1c2UgYGZpbmRET01Ob2RlYCBzaW5lIGl0IHdpbGwgZ2V0IHdhcm5pbmcsXG4gICAqIGhhdmUgdG8gdXNlIHRpbWVyIHRvIGNoZWNrIGlmIGlzIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuXG5cbiAgdmFyIG9uSW50ZXJuYWxJbnB1dE1vdXNlRG93biA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxJbnB1dE1vdXNlRG93bigpIHtcbiAgICBzZXRJbnB1dE1vdXNlRG93bih0cnVlKTtcbiAgfTsgLy8gV2hlbiBwYXN0ZSBjb21lLCBpZ25vcmUgbmV4dCBvbkNoYW5nZVxuXG5cbiAgdmFyIHBhc3RlZFRleHRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdmFyIHRyaWdnZXJPblNlYXJjaCA9IGZ1bmN0aW9uIHRyaWdnZXJPblNlYXJjaCh2YWx1ZSkge1xuICAgIGlmIChvblNlYXJjaCh2YWx1ZSwgdHJ1ZSwgY29tcG9zaXRpb25TdGF0dXNSZWYuY3VycmVudCkgIT09IGZhbHNlKSB7XG4gICAgICBvblRvZ2dsZU9wZW4odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvbklucHV0Q29tcG9zaXRpb25TdGFydCA9IGZ1bmN0aW9uIG9uSW5wdXRDb21wb3NpdGlvblN0YXJ0KCkge1xuICAgIGNvbXBvc2l0aW9uU3RhdHVzUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9O1xuXG4gIHZhciBvbklucHV0Q29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiBvbklucHV0Q29tcG9zaXRpb25FbmQoZSkge1xuICAgIGNvbXBvc2l0aW9uU3RhdHVzUmVmLmN1cnJlbnQgPSBmYWxzZTsgLy8gVHJpZ2dlciBzZWFyY2ggYWdhaW4gdG8gc3VwcG9ydCBgdG9rZW5TZXBhcmF0b3JzYCB3aXRoIHR5cGV3cml0aW5nXG5cbiAgICBpZiAobW9kZSAhPT0gJ2NvbWJvYm94Jykge1xuICAgICAgdHJpZ2dlck9uU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlOyAvLyBQYXN0ZWQgdGV4dCBzaG91bGQgcmVwbGFjZSBiYWNrIHRvIG9yaWdpbiBjb250ZW50XG5cbiAgICBpZiAodG9rZW5XaXRoRW50ZXIgJiYgcGFzdGVkVGV4dFJlZi5jdXJyZW50ICYmIC9bXFxyXFxuXS8udGVzdChwYXN0ZWRUZXh0UmVmLmN1cnJlbnQpKSB7XG4gICAgICAvLyBDUkxGIHdpbGwgYmUgdHJlYXRlZCBhcyBhIHNpbmdsZSBzcGFjZSBmb3IgaW5wdXQgZWxlbWVudFxuICAgICAgdmFyIHJlcGxhY2VkVGV4dCA9IHBhc3RlZFRleHRSZWYuY3VycmVudC5yZXBsYWNlKC9bXFxyXFxuXSskLywgJycpLnJlcGxhY2UoL1xcclxcbi9nLCAnICcpLnJlcGxhY2UoL1tcXHJcXG5dL2csICcgJyk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVwbGFjZWRUZXh0LCBwYXN0ZWRUZXh0UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHBhc3RlZFRleHRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgdHJpZ2dlck9uU2VhcmNoKHZhbHVlKTtcbiAgfTtcblxuICB2YXIgb25JbnB1dFBhc3RlID0gZnVuY3Rpb24gb25JbnB1dFBhc3RlKGUpIHtcbiAgICB2YXIgY2xpcGJvYXJkRGF0YSA9IGUuY2xpcGJvYXJkRGF0YTtcbiAgICB2YXIgdmFsdWUgPSBjbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQnKTtcbiAgICBwYXN0ZWRUZXh0UmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfTtcblxuICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soX3JlZikge1xuICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcblxuICAgIGlmICh0YXJnZXQgIT09IGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIFNob3VsZCBmb2N1cyBpbnB1dCBpZiBjbGljayB0aGUgc2VsZWN0b3JcbiAgICAgIHZhciBpc0lFID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBvbk1vdXNlRG93biA9IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdmFyIGlucHV0TW91c2VEb3duID0gZ2V0SW5wdXRNb3VzZURvd24oKTtcblxuICAgIGlmIChldmVudC50YXJnZXQgIT09IGlucHV0UmVmLmN1cnJlbnQgJiYgIWlucHV0TW91c2VEb3duKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChtb2RlICE9PSAnY29tYm9ib3gnICYmICghc2hvd1NlYXJjaCB8fCAhaW5wdXRNb3VzZURvd24pIHx8ICFvcGVuKSB7XG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBvblNlYXJjaCgnJywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBvblRvZ2dsZU9wZW4oKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09IElubmVyIFNlbGVjdG9yID09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIHNoYXJlZFByb3BzID0ge1xuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBvbklucHV0S2V5RG93bjogb25JbnRlcm5hbElucHV0S2V5RG93bixcbiAgICBvbklucHV0TW91c2VEb3duOiBvbkludGVybmFsSW5wdXRNb3VzZURvd24sXG4gICAgb25JbnB1dENoYW5nZTogb25JbnB1dENoYW5nZSxcbiAgICBvbklucHV0UGFzdGU6IG9uSW5wdXRQYXN0ZSxcbiAgICBvbklucHV0Q29tcG9zaXRpb25TdGFydDogb25JbnB1dENvbXBvc2l0aW9uU3RhcnQsXG4gICAgb25JbnB1dENvbXBvc2l0aW9uRW5kOiBvbklucHV0Q29tcG9zaXRpb25FbmRcbiAgfTtcbiAgdmFyIHNlbGVjdE5vZGUgPSBtdWx0aXBsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE11bHRpcGxlU2VsZWN0b3IsIF9leHRlbmRzKHt9LCBwcm9wcywgc2hhcmVkUHJvcHMpKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVNlbGVjdG9yLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHNoYXJlZFByb3BzKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBkb21SZWYsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdG9yXCIpLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duXG4gIH0sIHNlbGVjdE5vZGUpO1xufTtcblxudmFyIEZvcndhcmRTZWxlY3RvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFNlbGVjdG9yKTtcbkZvcndhcmRTZWxlY3Rvci5kaXNwbGF5TmFtZSA9ICdTZWxlY3Rvcic7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkU2VsZWN0b3I7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBUcmFuc0J0biA9IGZ1bmN0aW9uIFRyYW5zQnRuKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY3VzdG9taXplSWNvbiA9IF9yZWYuY3VzdG9taXplSWNvbixcbiAgICAgIGN1c3RvbWl6ZUljb25Qcm9wcyA9IF9yZWYuY3VzdG9taXplSWNvblByb3BzLFxuICAgICAgX29uTW91c2VEb3duID0gX3JlZi5vbk1vdXNlRG93bixcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBpY29uO1xuXG4gIGlmICh0eXBlb2YgY3VzdG9taXplSWNvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGljb24gPSBjdXN0b21pemVJY29uKGN1c3RvbWl6ZUljb25Qcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgaWNvbiA9IGN1c3RvbWl6ZUljb247XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChfb25Nb3VzZURvd24pIHtcbiAgICAgICAgX29uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0eWxlOiB7XG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZSdcbiAgICB9LFxuICAgIHVuc2VsZWN0YWJsZTogXCJvblwiLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlXG4gIH0sIGljb24gIT09IHVuZGVmaW5lZCA/IGljb24gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24gKGNscykge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGNscywgXCItaWNvblwiKTtcbiAgICB9KSlcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zQnRuOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuXG4vKipcbiAqIFRvIG1hdGNoIGFjY2Vzc2liaWxpdHkgcmVxdWlyZW1lbnQsIHdlIGFsd2F5cyBwcm92aWRlIGFuIGlucHV0IGluIHRoZSBjb21wb25lbnQuXG4gKiBPdGhlciBlbGVtZW50IHdpbGwgbm90IHNldCBgdGFiSW5kZXhgIHRvIGF2b2lkIGBvbkJsdXJgIHNlcXVlbmNlIHByb2JsZW0uXG4gKiBGb3IgZm9jdXNlZCBzZWxlY3QsIHdlIHNldCBgYXJpYS1saXZlPVwicG9saXRlXCJgIHRvIHVwZGF0ZSB0aGUgYWNjZXNzaWJpbGl0eSBjb250ZW50LlxuICpcbiAqIHJlZjpcbiAqIC0ga2V5Ym9hcmQ6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FjY2Vzc2liaWxpdHkvQVJJQS9Sb2xlcy9saXN0Ym94X3JvbGUjS2V5Ym9hcmRfaW50ZXJhY3Rpb25zXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwicmMtdXRpbC9lcy9pc01vYmlsZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXNlTWVyZ2VkU3RhdGUgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVyZ2VkU3RhdGVcIjtcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuL1NlbGVjdG9yJztcbmltcG9ydCBTZWxlY3RUcmlnZ2VyIGZyb20gJy4vU2VsZWN0VHJpZ2dlcic7XG5pbXBvcnQgeyBJTlRFUk5BTF9QUk9QU19NQVJLIH0gZnJvbSAnLi9pbnRlcmZhY2UvZ2VuZXJhdG9yJztcbmltcG9ydCB7IHRvSW5uZXJWYWx1ZSwgdG9PdXRlclZhbHVlcywgcmVtb3ZlTGFzdEVuYWJsZWRWYWx1ZSwgZ2V0VVVJRCB9IGZyb20gJy4vdXRpbHMvY29tbW9uVXRpbCc7XG5pbXBvcnQgVHJhbnNCdG4gZnJvbSAnLi9UcmFuc0J0bic7XG5pbXBvcnQgdXNlTG9jayBmcm9tICcuL2hvb2tzL3VzZUxvY2snO1xuaW1wb3J0IHVzZURlbGF5UmVzZXQgZnJvbSAnLi9ob29rcy91c2VEZWxheVJlc2V0JztcbmltcG9ydCB1c2VMYXlvdXRFZmZlY3QgZnJvbSAnLi9ob29rcy91c2VMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgZ2V0U2VwYXJhdGVkQ29udGVudCB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcbmltcG9ydCB1c2VTZWxlY3RUcmlnZ2VyQ29udHJvbCBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdFRyaWdnZXJDb250cm9sJztcbmltcG9ydCB1c2VDYWNoZURpc3BsYXlWYWx1ZSBmcm9tICcuL2hvb2tzL3VzZUNhY2hlRGlzcGxheVZhbHVlJztcbmltcG9ydCB1c2VDYWNoZU9wdGlvbnMgZnJvbSAnLi9ob29rcy91c2VDYWNoZU9wdGlvbnMnO1xudmFyIERFRkFVTFRfT01JVF9QUk9QUyA9IFsncmVtb3ZlSWNvbicsICdwbGFjZWhvbGRlcicsICdhdXRvRm9jdXMnLCAnbWF4VGFnQ291bnQnLCAnbWF4VGFnVGV4dExlbmd0aCcsICdtYXhUYWdQbGFjZWhvbGRlcicsICdjaG9pY2VUcmFuc2l0aW9uTmFtZScsICdvbklucHV0S2V5RG93bicsICd0YWJJbmRleCddO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGluIGludGVybmFsIHVzYWdlLlxuICogRG8gbm90IHVzZSBpdCBpbiB5b3VyIHByb2QgZW52IHNpbmNlIHdlIG1heSByZWZhY3RvciB0aGlzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0b3IoY29uZmlnKSB7XG4gIHZhciBkZWZhdWx0UHJlZml4Q2xzID0gY29uZmlnLnByZWZpeENscyxcbiAgICAgIE9wdGlvbkxpc3QgPSBjb25maWcuY29tcG9uZW50cy5vcHRpb25MaXN0LFxuICAgICAgY29udmVydENoaWxkcmVuVG9EYXRhID0gY29uZmlnLmNvbnZlcnRDaGlsZHJlblRvRGF0YSxcbiAgICAgIGZsYXR0ZW5PcHRpb25zID0gY29uZmlnLmZsYXR0ZW5PcHRpb25zLFxuICAgICAgZ2V0TGFiZWxlZFZhbHVlID0gY29uZmlnLmdldExhYmVsZWRWYWx1ZSxcbiAgICAgIGZpbHRlck9wdGlvbnMgPSBjb25maWcuZmlsdGVyT3B0aW9ucyxcbiAgICAgIGlzVmFsdWVEaXNhYmxlZCA9IGNvbmZpZy5pc1ZhbHVlRGlzYWJsZWQsXG4gICAgICBmaW5kVmFsdWVPcHRpb24gPSBjb25maWcuZmluZFZhbHVlT3B0aW9uLFxuICAgICAgd2FybmluZ1Byb3BzID0gY29uZmlnLndhcm5pbmdQcm9wcyxcbiAgICAgIGZpbGxPcHRpb25zV2l0aE1pc3NpbmdWYWx1ZSA9IGNvbmZpZy5maWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWUsXG4gICAgICBvbWl0RE9NUHJvcHMgPSBjb25maWcub21pdERPTVByb3BzOyAvLyBVc2UgcmF3IGRlZmluZSBzaW5jZSBgUmVhY3QuRkNgIG5vdCBzdXBwb3J0IGdlbmVyaWNcblxuICBmdW5jdGlvbiBTZWxlY3QocHJvcHMsIHJlZikge1xuICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gZGVmYXVsdFByZWZpeENscyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICAgIGRlZmF1bHRPcGVuID0gcHJvcHMuZGVmYXVsdE9wZW4sXG4gICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBsYWJlbEluVmFsdWUgPSBwcm9wcy5sYWJlbEluVmFsdWUsXG4gICAgICAgIHNob3dTZWFyY2ggPSBwcm9wcy5zaG93U2VhcmNoLFxuICAgICAgICBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgICAgZmlsdGVyT3B0aW9uID0gcHJvcHMuZmlsdGVyT3B0aW9uLFxuICAgICAgICBmaWx0ZXJTb3J0ID0gcHJvcHMuZmlsdGVyU29ydCxcbiAgICAgICAgX3Byb3BzJG9wdGlvbkZpbHRlclByID0gcHJvcHMub3B0aW9uRmlsdGVyUHJvcCxcbiAgICAgICAgb3B0aW9uRmlsdGVyUHJvcCA9IF9wcm9wcyRvcHRpb25GaWx0ZXJQciA9PT0gdm9pZCAwID8gJ3ZhbHVlJyA6IF9wcm9wcyRvcHRpb25GaWx0ZXJQcixcbiAgICAgICAgX3Byb3BzJGF1dG9DbGVhclNlYXJjID0gcHJvcHMuYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlID0gX3Byb3BzJGF1dG9DbGVhclNlYXJjID09PSB2b2lkIDAgPyB0cnVlIDogX3Byb3BzJGF1dG9DbGVhclNlYXJjLFxuICAgICAgICBvblNlYXJjaCA9IHByb3BzLm9uU2VhcmNoLFxuICAgICAgICBhbGxvd0NsZWFyID0gcHJvcHMuYWxsb3dDbGVhcixcbiAgICAgICAgY2xlYXJJY29uID0gcHJvcHMuY2xlYXJJY29uLFxuICAgICAgICBzaG93QXJyb3cgPSBwcm9wcy5zaG93QXJyb3csXG4gICAgICAgIGlucHV0SWNvbiA9IHByb3BzLmlucHV0SWNvbixcbiAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb24gPSBwcm9wcy5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgbG9hZGluZyA9IHByb3BzLmxvYWRpbmcsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbixcbiAgICAgICAgX3Byb3BzJG5vdEZvdW5kQ29udGVuID0gcHJvcHMubm90Rm91bmRDb250ZW50LFxuICAgICAgICBub3RGb3VuZENvbnRlbnQgPSBfcHJvcHMkbm90Rm91bmRDb250ZW4gPT09IHZvaWQgMCA/ICdOb3QgRm91bmQnIDogX3Byb3BzJG5vdEZvdW5kQ29udGVuLFxuICAgICAgICBvcHRpb25MYWJlbFByb3AgPSBwcm9wcy5vcHRpb25MYWJlbFByb3AsXG4gICAgICAgIGJhY2tmaWxsID0gcHJvcHMuYmFja2ZpbGwsXG4gICAgICAgIHRhYkluZGV4ID0gcHJvcHMudGFiSW5kZXgsXG4gICAgICAgIGdldElucHV0RWxlbWVudCA9IHByb3BzLmdldElucHV0RWxlbWVudCxcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgX3Byb3BzJGxpc3RIZWlnaHQgPSBwcm9wcy5saXN0SGVpZ2h0LFxuICAgICAgICBsaXN0SGVpZ2h0ID0gX3Byb3BzJGxpc3RIZWlnaHQgPT09IHZvaWQgMCA/IDIwMCA6IF9wcm9wcyRsaXN0SGVpZ2h0LFxuICAgICAgICBfcHJvcHMkbGlzdEl0ZW1IZWlnaHQgPSBwcm9wcy5saXN0SXRlbUhlaWdodCxcbiAgICAgICAgbGlzdEl0ZW1IZWlnaHQgPSBfcHJvcHMkbGlzdEl0ZW1IZWlnaHQgPT09IHZvaWQgMCA/IDIwIDogX3Byb3BzJGxpc3RJdGVtSGVpZ2h0LFxuICAgICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgICBkcm9wZG93blN0eWxlID0gcHJvcHMuZHJvcGRvd25TdHlsZSxcbiAgICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gcHJvcHMuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgICBkcm9wZG93blJlbmRlciA9IHByb3BzLmRyb3Bkb3duUmVuZGVyLFxuICAgICAgICBkcm9wZG93bkFsaWduID0gcHJvcHMuZHJvcGRvd25BbGlnbixcbiAgICAgICAgX3Byb3BzJHNob3dBY3Rpb24gPSBwcm9wcy5zaG93QWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzJHNob3dBY3Rpb24gPT09IHZvaWQgMCA/IFtdIDogX3Byb3BzJHNob3dBY3Rpb24sXG4gICAgICAgIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgdG9rZW5TZXBhcmF0b3JzID0gcHJvcHMudG9rZW5TZXBhcmF0b3JzLFxuICAgICAgICB0YWdSZW5kZXIgPSBwcm9wcy50YWdSZW5kZXIsXG4gICAgICAgIG9uUG9wdXBTY3JvbGwgPSBwcm9wcy5vblBvcHVwU2Nyb2xsLFxuICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSA9IHByb3BzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgICBvbktleVVwID0gcHJvcHMub25LZXlVcCxcbiAgICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgICBvbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICBvblNlbGVjdCA9IHByb3BzLm9uU2VsZWN0LFxuICAgICAgICBvbkRlc2VsZWN0ID0gcHJvcHMub25EZXNlbGVjdCxcbiAgICAgICAgb25DbGVhciA9IHByb3BzLm9uQ2xlYXIsXG4gICAgICAgIF9wcm9wcyRpbnRlcm5hbFByb3BzID0gcHJvcHMuaW50ZXJuYWxQcm9wcyxcbiAgICAgICAgaW50ZXJuYWxQcm9wcyA9IF9wcm9wcyRpbnRlcm5hbFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRpbnRlcm5hbFByb3BzLFxuICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImlkXCIsIFwib3BlblwiLCBcImRlZmF1bHRPcGVuXCIsIFwib3B0aW9uc1wiLCBcImNoaWxkcmVuXCIsIFwibW9kZVwiLCBcInZhbHVlXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwibGFiZWxJblZhbHVlXCIsIFwic2hvd1NlYXJjaFwiLCBcImlucHV0VmFsdWVcIiwgXCJzZWFyY2hWYWx1ZVwiLCBcImZpbHRlck9wdGlvblwiLCBcImZpbHRlclNvcnRcIiwgXCJvcHRpb25GaWx0ZXJQcm9wXCIsIFwiYXV0b0NsZWFyU2VhcmNoVmFsdWVcIiwgXCJvblNlYXJjaFwiLCBcImFsbG93Q2xlYXJcIiwgXCJjbGVhckljb25cIiwgXCJzaG93QXJyb3dcIiwgXCJpbnB1dEljb25cIiwgXCJtZW51SXRlbVNlbGVjdGVkSWNvblwiLCBcImRpc2FibGVkXCIsIFwibG9hZGluZ1wiLCBcImRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiLCBcIm5vdEZvdW5kQ29udGVudFwiLCBcIm9wdGlvbkxhYmVsUHJvcFwiLCBcImJhY2tmaWxsXCIsIFwidGFiSW5kZXhcIiwgXCJnZXRJbnB1dEVsZW1lbnRcIiwgXCJnZXRQb3B1cENvbnRhaW5lclwiLCBcImxpc3RIZWlnaHRcIiwgXCJsaXN0SXRlbUhlaWdodFwiLCBcImFuaW1hdGlvblwiLCBcInRyYW5zaXRpb25OYW1lXCIsIFwidmlydHVhbFwiLCBcImRyb3Bkb3duU3R5bGVcIiwgXCJkcm9wZG93bkNsYXNzTmFtZVwiLCBcImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiLCBcImRyb3Bkb3duUmVuZGVyXCIsIFwiZHJvcGRvd25BbGlnblwiLCBcInNob3dBY3Rpb25cIiwgXCJkaXJlY3Rpb25cIiwgXCJ0b2tlblNlcGFyYXRvcnNcIiwgXCJ0YWdSZW5kZXJcIiwgXCJvblBvcHVwU2Nyb2xsXCIsIFwib25Ecm9wZG93blZpc2libGVDaGFuZ2VcIiwgXCJvbkZvY3VzXCIsIFwib25CbHVyXCIsIFwib25LZXlVcFwiLCBcIm9uS2V5RG93blwiLCBcIm9uTW91c2VEb3duXCIsIFwib25DaGFuZ2VcIiwgXCJvblNlbGVjdFwiLCBcIm9uRGVzZWxlY3RcIiwgXCJvbkNsZWFyXCIsIFwiaW50ZXJuYWxQcm9wc1wiXSk7XG5cbiAgICB2YXIgdXNlSW50ZXJuYWxQcm9wcyA9IGludGVybmFsUHJvcHMubWFyayA9PT0gSU5URVJOQUxfUFJPUFNfTUFSSztcbiAgICB2YXIgZG9tUHJvcHMgPSBvbWl0RE9NUHJvcHMgPyBvbWl0RE9NUHJvcHMocmVzdFByb3BzKSA6IHJlc3RQcm9wcztcbiAgICBERUZBVUxUX09NSVRfUFJPUFMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgZGVsZXRlIGRvbVByb3BzW3Byb3BdO1xuICAgIH0pO1xuICAgIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHRyaWdnZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHNlbGVjdG9yUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciBsaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHZhciB0b2tlbldpdGhFbnRlciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICh0b2tlblNlcGFyYXRvcnMgfHwgW10pLnNvbWUoZnVuY3Rpb24gKHRva2VuU2VwYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBbJ1xcbicsICdcXHJcXG4nXS5pbmNsdWRlcyh0b2tlblNlcGFyYXRvcik7XG4gICAgICB9KTtcbiAgICB9LCBbdG9rZW5TZXBhcmF0b3JzXSk7XG4gICAgLyoqIFVzZWQgZm9yIGNvbXBvbmVudCBmb2N1c2VkIG1hbmFnZW1lbnQgKi9cblxuICAgIHZhciBfdXNlRGVsYXlSZXNldCA9IHVzZURlbGF5UmVzZXQoKSxcbiAgICAgICAgX3VzZURlbGF5UmVzZXQyID0gX3NsaWNlZFRvQXJyYXkoX3VzZURlbGF5UmVzZXQsIDMpLFxuICAgICAgICBtb2NrRm9jdXNlZCA9IF91c2VEZWxheVJlc2V0MlswXSxcbiAgICAgICAgc2V0TW9ja0ZvY3VzZWQgPSBfdXNlRGVsYXlSZXNldDJbMV0sXG4gICAgICAgIGNhbmNlbFNldE1vY2tGb2N1c2VkID0gX3VzZURlbGF5UmVzZXQyWzJdOyAvLyBJbm5lciBpZCBmb3IgYWNjZXNzaWJpbGl0eSB1c2FnZS4gT25seSB3b3JrIGluIGNsaWVudCBzaWRlXG5cblxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgICAgaW5uZXJJZCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICAgIHNldElubmVySWQgPSBfdXNlU3RhdGUyWzFdO1xuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElubmVySWQoXCJyY19zZWxlY3RfXCIuY29uY2F0KGdldFVVSUQoKSkpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgbWVyZ2VkSWQgPSBpZCB8fCBpbm5lcklkOyAvLyBvcHRpb25MYWJlbFByb3BcblxuICAgIHZhciBtZXJnZWRPcHRpb25MYWJlbFByb3AgPSBvcHRpb25MYWJlbFByb3A7XG5cbiAgICBpZiAobWVyZ2VkT3B0aW9uTGFiZWxQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lcmdlZE9wdGlvbkxhYmVsUHJvcCA9IG9wdGlvbnMgPyAnbGFiZWwnIDogJ2NoaWxkcmVuJztcbiAgICB9IC8vIGxhYmVsSW5WYWx1ZVxuXG5cbiAgICB2YXIgbWVyZ2VkTGFiZWxJblZhbHVlID0gbW9kZSA9PT0gJ2NvbWJvYm94JyA/IGZhbHNlIDogbGFiZWxJblZhbHVlO1xuICAgIHZhciBpc011bHRpcGxlID0gbW9kZSA9PT0gJ3RhZ3MnIHx8IG1vZGUgPT09ICdtdWx0aXBsZSc7XG4gICAgdmFyIG1lcmdlZFNob3dTZWFyY2ggPSBzaG93U2VhcmNoICE9PSB1bmRlZmluZWQgPyBzaG93U2VhcmNoIDogaXNNdWx0aXBsZSB8fCBtb2RlID09PSAnY29tYm9ib3gnOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gTW9iaWxlID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgICAgbW9iaWxlID0gX3VzZVN0YXRlNFswXSxcbiAgICAgICAgc2V0TW9iaWxlID0gX3VzZVN0YXRlNFsxXTtcblxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBPbmx5IHVwZGF0ZSBvbiB0aGUgY2xpZW50IHNpZGVcbiAgICAgIHNldE1vYmlsZShpc01vYmlsZSgpKTtcbiAgICB9LCBbXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFyIHNlbGVjdG9yRG9tUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3NlbGVjdG9yUmVmJGN1cnJlbnQsIF9zZWxlY3RvclJlZiRjdXJyZW50MiwgX2xpc3RSZWYkY3VycmVudDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9jdXM6IChfc2VsZWN0b3JSZWYkY3VycmVudCA9IHNlbGVjdG9yUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9zZWxlY3RvclJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc2VsZWN0b3JSZWYkY3VycmVudC5mb2N1cyxcbiAgICAgICAgYmx1cjogKF9zZWxlY3RvclJlZiRjdXJyZW50MiA9IHNlbGVjdG9yUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9zZWxlY3RvclJlZiRjdXJyZW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3NlbGVjdG9yUmVmJGN1cnJlbnQyLmJsdXIsXG4gICAgICAgIHNjcm9sbFRvOiAoX2xpc3RSZWYkY3VycmVudCA9IGxpc3RSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2xpc3RSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2xpc3RSZWYkY3VycmVudC5zY3JvbGxUb1xuICAgICAgfTtcbiAgICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVmFsdWUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgX3VzZU1lcmdlZFN0YXRlID0gdXNlTWVyZ2VkU3RhdGUoZGVmYXVsdFZhbHVlLCB7XG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KSxcbiAgICAgICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgICAgIG1lcmdlZFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlswXSxcbiAgICAgICAgc2V0TWVyZ2VkVmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGUyWzFdO1xuICAgIC8qKiBVbmlxdWUgcmF3IHZhbHVlcyAqL1xuXG5cbiAgICB2YXIgX3VzZU1lbW8gPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0b0lubmVyVmFsdWUobWVyZ2VkVmFsdWUsIHtcbiAgICAgICAgbGFiZWxJblZhbHVlOiBtZXJnZWRMYWJlbEluVmFsdWUsXG4gICAgICAgIGNvbWJvYm94OiBtb2RlID09PSAnY29tYm9ib3gnXG4gICAgICB9KTtcbiAgICB9LCBbbWVyZ2VkVmFsdWUsIG1lcmdlZExhYmVsSW5WYWx1ZV0pLFxuICAgICAgICBfdXNlTWVtbzIgPSBfc2xpY2VkVG9BcnJheShfdXNlTWVtbywgMiksXG4gICAgICAgIG1lcmdlZFJhd1ZhbHVlID0gX3VzZU1lbW8yWzBdLFxuICAgICAgICBtZXJnZWRWYWx1ZU1hcCA9IF91c2VNZW1vMlsxXTtcbiAgICAvKiogV2UgY2FjaGUgYSBzZXQgb2YgcmF3IHZhbHVlcyB0byBzcGVlZCB1cCBjaGVjayAqL1xuXG5cbiAgICB2YXIgcmF3VmFsdWVzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFNldChtZXJnZWRSYXdWYWx1ZSk7XG4gICAgfSwgW21lcmdlZFJhd1ZhbHVlXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE9wdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFNldCBieSBvcHRpb24gbGlzdCBhY3RpdmUsIGl0IHdpbGwgbWVyZ2UgaW50byBzZWFyY2ggaW5wdXQgd2hlbiBtb2RlIGlzIGBjb21ib2JveGBcblxuICAgIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUobnVsbCksXG4gICAgICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICAgICAgYWN0aXZlVmFsdWUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgICBzZXRBY3RpdmVWYWx1ZSA9IF91c2VTdGF0ZTZbMV07XG5cbiAgICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKCcnKSxcbiAgICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgICBpbm5lclNlYXJjaFZhbHVlID0gX3VzZVN0YXRlOFswXSxcbiAgICAgICAgc2V0SW5uZXJTZWFyY2hWYWx1ZSA9IF91c2VTdGF0ZThbMV07XG5cbiAgICB2YXIgbWVyZ2VkU2VhcmNoVmFsdWUgPSBpbm5lclNlYXJjaFZhbHVlO1xuXG4gICAgaWYgKG1vZGUgPT09ICdjb21ib2JveCcgJiYgbWVyZ2VkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVyZ2VkU2VhcmNoVmFsdWUgPSBtZXJnZWRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHNlYXJjaFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lcmdlZFNlYXJjaFZhbHVlID0gc2VhcmNoVmFsdWU7XG4gICAgfSBlbHNlIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICBtZXJnZWRTZWFyY2hWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlZE9wdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXdPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgaWYgKG5ld09wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdPcHRpb25zID0gY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogYHRhZ3NgIHNob3VsZCBmaWxsIHVuLWxpc3QgaXRlbS5cbiAgICAgICAqIFRoaXMgaXMgbm90IGNvb2wgaGVyZSBzaW5jZSBUcmVlU2VsZWN0IGRvIG5vdCBuZWVkIHRoaXNcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChtb2RlID09PSAndGFncycgJiYgZmlsbE9wdGlvbnNXaXRoTWlzc2luZ1ZhbHVlKSB7XG4gICAgICAgIG5ld09wdGlvbnMgPSBmaWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWUobmV3T3B0aW9ucywgbWVyZ2VkVmFsdWUsIG1lcmdlZE9wdGlvbkxhYmVsUHJvcCwgbGFiZWxJblZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld09wdGlvbnMgfHwgW107XG4gICAgfSwgW29wdGlvbnMsIGNoaWxkcmVuLCBtb2RlLCBtZXJnZWRWYWx1ZV0pO1xuICAgIHZhciBtZXJnZWRGbGF0dGVuT3B0aW9ucyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZsYXR0ZW5PcHRpb25zKG1lcmdlZE9wdGlvbnMsIHByb3BzKTtcbiAgICB9LCBbbWVyZ2VkT3B0aW9uc10pO1xuICAgIHZhciBnZXRWYWx1ZU9wdGlvbiA9IHVzZUNhY2hlT3B0aW9ucyhtZXJnZWRGbGF0dGVuT3B0aW9ucyk7IC8vIERpc3BsYXkgb3B0aW9ucyBmb3IgT3B0aW9uTGlzdFxuXG4gICAgdmFyIGRpc3BsYXlPcHRpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIW1lcmdlZFNlYXJjaFZhbHVlIHx8ICFtZXJnZWRTaG93U2VhcmNoKSB7XG4gICAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkobWVyZ2VkT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJPcHRpb25zKG1lcmdlZFNlYXJjaFZhbHVlLCBtZXJnZWRPcHRpb25zLCB7XG4gICAgICAgIG9wdGlvbkZpbHRlclByb3A6IG9wdGlvbkZpbHRlclByb3AsXG4gICAgICAgIGZpbHRlck9wdGlvbjogbW9kZSA9PT0gJ2NvbWJvYm94JyAmJiBmaWx0ZXJPcHRpb24gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSA6IGZpbHRlck9wdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtb2RlID09PSAndGFncycgJiYgZmlsdGVyZWRPcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgcmV0dXJuIG9wdFtvcHRpb25GaWx0ZXJQcm9wXSAhPT0gbWVyZ2VkU2VhcmNoVmFsdWU7XG4gICAgICB9KSkge1xuICAgICAgICBmaWx0ZXJlZE9wdGlvbnMudW5zaGlmdCh7XG4gICAgICAgICAgdmFsdWU6IG1lcmdlZFNlYXJjaFZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBtZXJnZWRTZWFyY2hWYWx1ZSxcbiAgICAgICAgICBrZXk6ICdfX1JDX1NFTEVDVF9UQUdfUExBQ0VIT0xERVJfXydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXJTb3J0ICYmIEFycmF5LmlzQXJyYXkoZmlsdGVyZWRPcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KGZpbHRlcmVkT3B0aW9ucykuc29ydChmaWx0ZXJTb3J0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucztcbiAgICB9LCBbbWVyZ2VkT3B0aW9ucywgbWVyZ2VkU2VhcmNoVmFsdWUsIG1vZGUsIG1lcmdlZFNob3dTZWFyY2gsIGZpbHRlclNvcnRdKTtcbiAgICB2YXIgZGlzcGxheUZsYXR0ZW5PcHRpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmxhdHRlbk9wdGlvbnMoZGlzcGxheU9wdGlvbnMsIHByb3BzKTtcbiAgICB9LCBbZGlzcGxheU9wdGlvbnNdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGxpc3RSZWYuY3VycmVudCAmJiBsaXN0UmVmLmN1cnJlbnQuc2Nyb2xsVG8pIHtcbiAgICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbFRvKDApO1xuICAgICAgfVxuICAgIH0sIFttZXJnZWRTZWFyY2hWYWx1ZV0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNlbGVjdG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBkaXNwbGF5VmFsdWVzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdG1wVmFsdWVzID0gbWVyZ2VkUmF3VmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIHZhbHVlT3B0aW9ucyA9IGdldFZhbHVlT3B0aW9uKFt2YWxdKTtcbiAgICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9IGdldExhYmVsZWRWYWx1ZSh2YWwsIHtcbiAgICAgICAgICBvcHRpb25zOiB2YWx1ZU9wdGlvbnMsXG4gICAgICAgICAgcHJldlZhbHVlTWFwOiBtZXJnZWRWYWx1ZU1hcCxcbiAgICAgICAgICBsYWJlbEluVmFsdWU6IG1lcmdlZExhYmVsSW5WYWx1ZSxcbiAgICAgICAgICBvcHRpb25MYWJlbFByb3A6IG1lcmdlZE9wdGlvbkxhYmVsUHJvcFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGlzcGxheVZhbHVlKSwge30sIHtcbiAgICAgICAgICBkaXNhYmxlZDogaXNWYWx1ZURpc2FibGVkKHZhbCwgdmFsdWVPcHRpb25zKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW1vZGUgJiYgdG1wVmFsdWVzLmxlbmd0aCA9PT0gMSAmJiB0bXBWYWx1ZXNbMF0udmFsdWUgPT09IG51bGwgJiYgdG1wVmFsdWVzWzBdLmxhYmVsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRtcFZhbHVlcztcbiAgICB9LCBbbWVyZ2VkVmFsdWUsIG1lcmdlZE9wdGlvbnMsIG1vZGVdKTsgLy8gUG9seWZpbGwgd2l0aCBjYWNoZSBsYWJlbFxuXG4gICAgZGlzcGxheVZhbHVlcyA9IHVzZUNhY2hlRGlzcGxheVZhbHVlKGRpc3BsYXlWYWx1ZXMpO1xuXG4gICAgdmFyIHRyaWdnZXJTZWxlY3QgPSBmdW5jdGlvbiB0cmlnZ2VyU2VsZWN0KG5ld1ZhbHVlLCBpc1NlbGVjdCwgc291cmNlKSB7XG4gICAgICB2YXIgbmV3VmFsdWVPcHRpb24gPSBnZXRWYWx1ZU9wdGlvbihbbmV3VmFsdWVdKTtcbiAgICAgIHZhciBvdXRPcHRpb24gPSBmaW5kVmFsdWVPcHRpb24oW25ld1ZhbHVlXSwgbmV3VmFsdWVPcHRpb24pWzBdO1xuXG4gICAgICBpZiAoIWludGVybmFsUHJvcHMuc2tpcFRyaWdnZXJTZWxlY3QpIHtcbiAgICAgICAgLy8gU2tpcCB0cmlnZ2VyIGBvblNlbGVjdGAgb3IgYG9uRGVzZWxlY3RgIGlmIGNvbmZpZ3VyZWRcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gbWVyZ2VkTGFiZWxJblZhbHVlID8gZ2V0TGFiZWxlZFZhbHVlKG5ld1ZhbHVlLCB7XG4gICAgICAgICAgb3B0aW9uczogbmV3VmFsdWVPcHRpb24sXG4gICAgICAgICAgcHJldlZhbHVlTWFwOiBtZXJnZWRWYWx1ZU1hcCxcbiAgICAgICAgICBsYWJlbEluVmFsdWU6IG1lcmdlZExhYmVsSW5WYWx1ZSxcbiAgICAgICAgICBvcHRpb25MYWJlbFByb3A6IG1lcmdlZE9wdGlvbkxhYmVsUHJvcFxuICAgICAgICB9KSA6IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmIChpc1NlbGVjdCAmJiBvblNlbGVjdCkge1xuICAgICAgICAgIG9uU2VsZWN0KHNlbGVjdFZhbHVlLCBvdXRPcHRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1NlbGVjdCAmJiBvbkRlc2VsZWN0KSB7XG4gICAgICAgICAgb25EZXNlbGVjdChzZWxlY3RWYWx1ZSwgb3V0T3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUcmlnZ2VyIGludGVybmFsIGV2ZW50XG5cblxuICAgICAgaWYgKHVzZUludGVybmFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGlzU2VsZWN0ICYmIGludGVybmFsUHJvcHMub25SYXdTZWxlY3QpIHtcbiAgICAgICAgICBpbnRlcm5hbFByb3BzLm9uUmF3U2VsZWN0KG5ld1ZhbHVlLCBvdXRPcHRpb24sIHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzU2VsZWN0ICYmIGludGVybmFsUHJvcHMub25SYXdEZXNlbGVjdCkge1xuICAgICAgICAgIGludGVybmFsUHJvcHMub25SYXdEZXNlbGVjdChuZXdWYWx1ZSwgb3V0T3B0aW9uLCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgLy8gV2UgbmVlZCBjYWNoZSBvcHRpb25zIGhlcmUgaW4gY2FzZSB1c2VyIHVwZGF0ZSB0aGUgb3B0aW9uIGxpc3RcblxuXG4gICAgdmFyIF91c2VTdGF0ZTkgPSB1c2VTdGF0ZShbXSksXG4gICAgICAgIF91c2VTdGF0ZTEwID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlOSwgMiksXG4gICAgICAgIHByZXZWYWx1ZU9wdGlvbnMgPSBfdXNlU3RhdGUxMFswXSxcbiAgICAgICAgc2V0UHJldlZhbHVlT3B0aW9ucyA9IF91c2VTdGF0ZTEwWzFdO1xuXG4gICAgdmFyIHRyaWdnZXJDaGFuZ2UgPSBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKG5ld1Jhd1ZhbHVlcykge1xuICAgICAgaWYgKHVzZUludGVybmFsUHJvcHMgJiYgaW50ZXJuYWxQcm9wcy5za2lwVHJpZ2dlckNoYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdSYXdWYWx1ZXNPcHRpb25zID0gZ2V0VmFsdWVPcHRpb24obmV3UmF3VmFsdWVzKTtcbiAgICAgIHZhciBvdXRWYWx1ZXMgPSB0b091dGVyVmFsdWVzKEFycmF5LmZyb20obmV3UmF3VmFsdWVzKSwge1xuICAgICAgICBsYWJlbEluVmFsdWU6IG1lcmdlZExhYmVsSW5WYWx1ZSxcbiAgICAgICAgb3B0aW9uczogbmV3UmF3VmFsdWVzT3B0aW9ucyxcbiAgICAgICAgZ2V0TGFiZWxlZFZhbHVlOiBnZXRMYWJlbGVkVmFsdWUsXG4gICAgICAgIHByZXZWYWx1ZU1hcDogbWVyZ2VkVmFsdWVNYXAsXG4gICAgICAgIG9wdGlvbkxhYmVsUHJvcDogbWVyZ2VkT3B0aW9uTGFiZWxQcm9wXG4gICAgICB9KTtcbiAgICAgIHZhciBvdXRWYWx1ZSA9IGlzTXVsdGlwbGUgPyBvdXRWYWx1ZXMgOiBvdXRWYWx1ZXNbMF07IC8vIFNraXAgdHJpZ2dlciBpZiBwcmV2ICYgY3VycmVudCB2YWx1ZSBpcyBib3RoIGVtcHR5XG5cbiAgICAgIGlmIChvbkNoYW5nZSAmJiAobWVyZ2VkUmF3VmFsdWUubGVuZ3RoICE9PSAwIHx8IG91dFZhbHVlcy5sZW5ndGggIT09IDApKSB7XG4gICAgICAgIHZhciBvdXRPcHRpb25zID0gZmluZFZhbHVlT3B0aW9uKG5ld1Jhd1ZhbHVlcywgbmV3UmF3VmFsdWVzT3B0aW9ucywge1xuICAgICAgICAgIHByZXZWYWx1ZU9wdGlvbnM6IHByZXZWYWx1ZU9wdGlvbnNcbiAgICAgICAgfSk7IC8vIFdlIHdpbGwgY2FjaGUgb3B0aW9uIGluIGNhc2UgaXQgcmVtb3ZlZCBieSBhamF4XG5cbiAgICAgICAgc2V0UHJldlZhbHVlT3B0aW9ucyhvdXRPcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuICAgICAgICAgIHZhciBjbG9uZSA9IF9vYmplY3RTcHJlYWQoe30sIG9wdGlvbik7XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xvbmUsICdfSU5URVJOQUxfT1BUSU9OX1ZBTFVFXycsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3UmF3VmFsdWVzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgb25DaGFuZ2Uob3V0VmFsdWUsIGlzTXVsdGlwbGUgPyBvdXRPcHRpb25zIDogb3V0T3B0aW9uc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHNldE1lcmdlZFZhbHVlKG91dFZhbHVlKTtcbiAgICB9O1xuXG4gICAgdmFyIG9uSW50ZXJuYWxTZWxlY3QgPSBmdW5jdGlvbiBvbkludGVybmFsU2VsZWN0KG5ld1ZhbHVlLCBfcmVmKSB7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlO1xuXG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3UmF3VmFsdWU7XG5cbiAgICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICAgIG5ld1Jhd1ZhbHVlID0gbmV3IFNldChtZXJnZWRSYXdWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgbmV3UmF3VmFsdWUuYWRkKG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdSYXdWYWx1ZS5kZWxldGUobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdSYXdWYWx1ZSA9IG5ldyBTZXQoKTtcbiAgICAgICAgbmV3UmF3VmFsdWUuYWRkKG5ld1ZhbHVlKTtcbiAgICAgIH0gLy8gTXVsdGlwbGUgYWx3YXlzIHRyaWdnZXIgY2hhbmdlIGFuZCBzaW5nbGUgc2hvdWxkIGNoYW5nZSBpZiB2YWx1ZSBjaGFuZ2VkXG5cblxuICAgICAgaWYgKGlzTXVsdGlwbGUgfHwgIWlzTXVsdGlwbGUgJiYgQXJyYXkuZnJvbShtZXJnZWRSYXdWYWx1ZSlbMF0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRyaWdnZXJDaGFuZ2UoQXJyYXkuZnJvbShuZXdSYXdWYWx1ZSkpO1xuICAgICAgfSAvLyBUcmlnZ2VyIGBvblNlbGVjdGAuIFNpbmdsZSBtb2RlIGFsd2F5cyB0cmlnZ2VyIHNlbGVjdFxuXG5cbiAgICAgIHRyaWdnZXJTZWxlY3QobmV3VmFsdWUsICFpc011bHRpcGxlIHx8IHNlbGVjdGVkLCBzb3VyY2UpOyAvLyBDbGVhbiBzZWFyY2ggdmFsdWUgaWYgc2luZ2xlIG9yIGNvbmZpZ3VyZWRcblxuICAgICAgaWYgKG1vZGUgPT09ICdjb21ib2JveCcpIHtcbiAgICAgICAgc2V0SW5uZXJTZWFyY2hWYWx1ZShTdHJpbmcobmV3VmFsdWUpKTtcbiAgICAgICAgc2V0QWN0aXZlVmFsdWUoJycpO1xuICAgICAgfSBlbHNlIGlmICghaXNNdWx0aXBsZSB8fCBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xuICAgICAgICBzZXRJbm5lclNlYXJjaFZhbHVlKCcnKTtcbiAgICAgICAgc2V0QWN0aXZlVmFsdWUoJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb25JbnRlcm5hbE9wdGlvblNlbGVjdCA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxPcHRpb25TZWxlY3QobmV3VmFsdWUsIGluZm8pIHtcbiAgICAgIG9uSW50ZXJuYWxTZWxlY3QobmV3VmFsdWUsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaW5mbyksIHt9LCB7XG4gICAgICAgIHNvdXJjZTogJ29wdGlvbidcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgdmFyIG9uSW50ZXJuYWxTZWxlY3Rpb25TZWxlY3QgPSBmdW5jdGlvbiBvbkludGVybmFsU2VsZWN0aW9uU2VsZWN0KG5ld1ZhbHVlLCBpbmZvKSB7XG4gICAgICBvbkludGVybmFsU2VsZWN0KG5ld1ZhbHVlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGluZm8pLCB7fSwge1xuICAgICAgICBzb3VyY2U6ICdzZWxlY3Rpb24nXG4gICAgICB9KSk7XG4gICAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSW5wdXQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gT25seSB3b3JrcyBpbiBgY29tYm9ib3hgXG5cblxuICAgIHZhciBjdXN0b21pemVJbnB1dEVsZW1lbnQgPSBtb2RlID09PSAnY29tYm9ib3gnICYmIGdldElucHV0RWxlbWVudCAmJiBnZXRJbnB1dEVsZW1lbnQoKSB8fCBudWxsOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gT3BlbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBfdXNlTWVyZ2VkU3RhdGUzID0gdXNlTWVyZ2VkU3RhdGUodW5kZWZpbmVkLCB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRPcGVuLFxuICAgICAgdmFsdWU6IG9wZW5cbiAgICB9KSxcbiAgICAgICAgX3VzZU1lcmdlZFN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZTMsIDIpLFxuICAgICAgICBpbm5lck9wZW4gPSBfdXNlTWVyZ2VkU3RhdGU0WzBdLFxuICAgICAgICBzZXRJbm5lck9wZW4gPSBfdXNlTWVyZ2VkU3RhdGU0WzFdO1xuXG4gICAgdmFyIG1lcmdlZE9wZW4gPSBpbm5lck9wZW47IC8vIE5vdCB0cmlnZ2VyIGBvcGVuYCBpbiBgY29tYm9ib3hgIHdoZW4gYG5vdEZvdW5kQ29udGVudGAgaXMgZW1wdHlcblxuICAgIHZhciBlbXB0eUxpc3RDb250ZW50ID0gIW5vdEZvdW5kQ29udGVudCAmJiAhZGlzcGxheU9wdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRpc2FibGVkIHx8IGVtcHR5TGlzdENvbnRlbnQgJiYgbWVyZ2VkT3BlbiAmJiBtb2RlID09PSAnY29tYm9ib3gnKSB7XG4gICAgICBtZXJnZWRPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRyaWdnZXJPcGVuID0gZW1wdHlMaXN0Q29udGVudCA/IGZhbHNlIDogbWVyZ2VkT3BlbjtcblxuICAgIHZhciBvblRvZ2dsZU9wZW4gPSBmdW5jdGlvbiBvblRvZ2dsZU9wZW4obmV3T3Blbikge1xuICAgICAgdmFyIG5leHRPcGVuID0gbmV3T3BlbiAhPT0gdW5kZWZpbmVkID8gbmV3T3BlbiA6ICFtZXJnZWRPcGVuO1xuXG4gICAgICBpZiAoaW5uZXJPcGVuICE9PSBuZXh0T3BlbiAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgc2V0SW5uZXJPcGVuKG5leHRPcGVuKTtcblxuICAgICAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZShuZXh0T3Blbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlU2VsZWN0VHJpZ2dlckNvbnRyb2woW2NvbnRhaW5lclJlZi5jdXJyZW50LCB0cmlnZ2VyUmVmLmN1cnJlbnQgJiYgdHJpZ2dlclJlZi5jdXJyZW50LmdldFBvcHVwRWxlbWVudCgpXSwgdHJpZ2dlck9wZW4sIG9uVG9nZ2xlT3Blbik7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNlYXJjaCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFyIHRyaWdnZXJTZWFyY2ggPSBmdW5jdGlvbiB0cmlnZ2VyU2VhcmNoKHNlYXJjaFRleHQsIGZyb21UeXBpbmcsIGlzQ29tcG9zaXRpbmcpIHtcbiAgICAgIHZhciByZXQgPSB0cnVlO1xuICAgICAgdmFyIG5ld1NlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgICAgc2V0QWN0aXZlVmFsdWUobnVsbCk7IC8vIENoZWNrIGlmIG1hdGNoIHRoZSBgdG9rZW5TZXBhcmF0b3JzYFxuXG4gICAgICB2YXIgcGF0Y2hMYWJlbHMgPSBpc0NvbXBvc2l0aW5nID8gbnVsbCA6IGdldFNlcGFyYXRlZENvbnRlbnQoc2VhcmNoVGV4dCwgdG9rZW5TZXBhcmF0b3JzKTtcbiAgICAgIHZhciBwYXRjaFJhd1ZhbHVlcyA9IHBhdGNoTGFiZWxzO1xuXG4gICAgICBpZiAobW9kZSA9PT0gJ2NvbWJvYm94Jykge1xuICAgICAgICAvLyBPbmx5IHR5cGluZyB3aWxsIHRyaWdnZXIgb25DaGFuZ2VcbiAgICAgICAgaWYgKGZyb21UeXBpbmcpIHtcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKFtuZXdTZWFyY2hUZXh0XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGF0Y2hMYWJlbHMpIHtcbiAgICAgICAgbmV3U2VhcmNoVGV4dCA9ICcnO1xuXG4gICAgICAgIGlmIChtb2RlICE9PSAndGFncycpIHtcbiAgICAgICAgICBwYXRjaFJhd1ZhbHVlcyA9IHBhdGNoTGFiZWxzLm1hcChmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gbWVyZ2VkRmxhdHRlbk9wdGlvbnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICAgICAgICAgICAgICByZXR1cm4gZGF0YVttZXJnZWRPcHRpb25MYWJlbFByb3BdID09PSBsYWJlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmRhdGEudmFsdWUgOiBudWxsO1xuICAgICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsICE9PSBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld1Jhd1ZhbHVlcyA9IEFycmF5LmZyb20obmV3IFNldChbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG1lcmdlZFJhd1ZhbHVlKSwgX3RvQ29uc3VtYWJsZUFycmF5KHBhdGNoUmF3VmFsdWVzKSkpKTtcbiAgICAgICAgdHJpZ2dlckNoYW5nZShuZXdSYXdWYWx1ZXMpO1xuICAgICAgICBuZXdSYXdWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAobmV3UmF3VmFsdWUpIHtcbiAgICAgICAgICB0cmlnZ2VyU2VsZWN0KG5ld1Jhd1ZhbHVlLCB0cnVlLCAnaW5wdXQnKTtcbiAgICAgICAgfSk7IC8vIFNob3VsZCBjbG9zZSB3aGVuIHBhc3RlIGZpbmlzaFxuXG4gICAgICAgIG9uVG9nZ2xlT3BlbihmYWxzZSk7IC8vIFRlbGwgU2VsZWN0b3IgdGhhdCBicmVhayBuZXh0IGFjdGlvbnNcblxuICAgICAgICByZXQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2V0SW5uZXJTZWFyY2hWYWx1ZShuZXdTZWFyY2hUZXh0KTtcblxuICAgICAgaWYgKG9uU2VhcmNoICYmIG1lcmdlZFNlYXJjaFZhbHVlICE9PSBuZXdTZWFyY2hUZXh0KSB7XG4gICAgICAgIG9uU2VhcmNoKG5ld1NlYXJjaFRleHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07IC8vIE9ubHkgdHJpZ2dlcmVkIHdoZW4gbWVudSBpcyBjbG9zZWQgJiBtb2RlIGlzIHRhZ3NcbiAgICAvLyBJZiBtZW51IGlzIG9wZW4sIE9wdGlvbkxpc3Qgd2lsbCB0YWtlIGNoYXJnZVxuICAgIC8vIElmIG1vZGUgaXNuJ3QgdGFncywgcHJlc3MgZW50ZXIgaXMgbm90IG1lYW5pbmdmdWwgd2hlbiB5b3UgY2FuJ3Qgc2VlIGFueSBvcHRpb25cblxuXG4gICAgdmFyIG9uU2VhcmNoU3VibWl0ID0gZnVuY3Rpb24gb25TZWFyY2hTdWJtaXQoc2VhcmNoVGV4dCkge1xuICAgICAgLy8gcHJldmVudCBlbXB0eSB0YWdzIGZyb20gYXBwZWFyaW5nIHdoZW4geW91IGNsaWNrIHRoZSBFbnRlciBidXR0b25cbiAgICAgIGlmICghc2VhcmNoVGV4dCB8fCAhc2VhcmNoVGV4dC50cmltKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3UmF3VmFsdWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobWVyZ2VkUmF3VmFsdWUpLCBbc2VhcmNoVGV4dF0pKSk7XG4gICAgICB0cmlnZ2VyQ2hhbmdlKG5ld1Jhd1ZhbHVlcyk7XG4gICAgICBuZXdSYXdWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAobmV3UmF3VmFsdWUpIHtcbiAgICAgICAgdHJpZ2dlclNlbGVjdChuZXdSYXdWYWx1ZSwgdHJ1ZSwgJ2lucHV0Jyk7XG4gICAgICB9KTtcbiAgICAgIHNldElubmVyU2VhcmNoVmFsdWUoJycpO1xuICAgIH07IC8vIENsb3NlIGRyb3Bkb3duIHdoZW4gZGlzYWJsZWQgY2hhbmdlXG5cblxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaW5uZXJPcGVuICYmICEhZGlzYWJsZWQpIHtcbiAgICAgICAgc2V0SW5uZXJPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCBbZGlzYWJsZWRdKTsgLy8gQ2xvc2Ugd2lsbCBjbGVhbiB1cCBzaW5nbGUgbW9kZSBzZWFyY2ggdGV4dFxuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghbWVyZ2VkT3BlbiAmJiAhaXNNdWx0aXBsZSAmJiBtb2RlICE9PSAnY29tYm9ib3gnKSB7XG4gICAgICAgIHRyaWdnZXJTZWFyY2goJycsIGZhbHNlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgW21lcmdlZE9wZW5dKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBXZSByZWNvcmQgaW5wdXQgdmFsdWUgaGVyZSB0byBjaGVjayBpZiBjYW4gcHJlc3MgdG8gY2xlYW4gdXAgYnkgYmFja3NwYWNlXG4gICAgICogLSBudWxsOiBLZXkgaXMgbm90IGRvd24sIHRoaXMgaXMgcmVzZXQgYnkga2V5IHVwXG4gICAgICogLSB0cnVlOiBTZWFyY2ggdGV4dCBpcyBlbXB0eSB3aGVuIGZpcnN0IHRpbWUgYmFja3NwYWNlIGRvd25cbiAgICAgKiAtIGZhbHNlOiBTZWFyY2ggdGV4dCBpcyBub3QgZW1wdHkgd2hlbiBmaXJzdCB0aW1lIGJhY2tzcGFjZSBkb3duXG4gICAgICovXG5cbiAgICB2YXIgX3VzZUxvY2sgPSB1c2VMb2NrKCksXG4gICAgICAgIF91c2VMb2NrMiA9IF9zbGljZWRUb0FycmF5KF91c2VMb2NrLCAyKSxcbiAgICAgICAgZ2V0Q2xlYXJMb2NrID0gX3VzZUxvY2syWzBdLFxuICAgICAgICBzZXRDbGVhckxvY2sgPSBfdXNlTG9jazJbMV07IC8vIEtleURvd25cblxuXG4gICAgdmFyIG9uSW50ZXJuYWxLZXlEb3duID0gZnVuY3Rpb24gb25JbnRlcm5hbEtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBjbGVhckxvY2sgPSBnZXRDbGVhckxvY2soKTtcbiAgICAgIHZhciB3aGljaCA9IGV2ZW50LndoaWNoO1xuXG4gICAgICBpZiAod2hpY2ggPT09IEtleUNvZGUuRU5URVIpIHtcbiAgICAgICAgLy8gRG8gbm90IHN1Ym1pdCBmb3JtIHdoZW4gdHlwZSBpbiB0aGUgaW5wdXRcbiAgICAgICAgaWYgKG1vZGUgIT09ICdjb21ib2JveCcpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IC8vIFdlIG9ubHkgbWFuYWdlIG9wZW4gc3RhdGUgaGVyZSwgY2xvc2UgbG9naWMgc2hvdWxkIGhhbmRsZSBieSBsaXN0IGNvbXBvbmVudFxuXG5cbiAgICAgICAgaWYgKCFtZXJnZWRPcGVuKSB7XG4gICAgICAgICAgb25Ub2dnbGVPcGVuKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldENsZWFyTG9jayghIW1lcmdlZFNlYXJjaFZhbHVlKTsgLy8gUmVtb3ZlIHZhbHVlIGJ5IGBiYWNrc3BhY2VgXG5cbiAgICAgIGlmICh3aGljaCA9PT0gS2V5Q29kZS5CQUNLU1BBQ0UgJiYgIWNsZWFyTG9jayAmJiBpc011bHRpcGxlICYmICFtZXJnZWRTZWFyY2hWYWx1ZSAmJiBtZXJnZWRSYXdWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHJlbW92ZUluZm8gPSByZW1vdmVMYXN0RW5hYmxlZFZhbHVlKGRpc3BsYXlWYWx1ZXMsIG1lcmdlZFJhd1ZhbHVlKTtcblxuICAgICAgICBpZiAocmVtb3ZlSW5mby5yZW1vdmVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKHJlbW92ZUluZm8udmFsdWVzKTtcbiAgICAgICAgICB0cmlnZ2VyU2VsZWN0KHJlbW92ZUluZm8ucmVtb3ZlZFZhbHVlLCBmYWxzZSwgJ2lucHV0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lcmdlZE9wZW4gJiYgbGlzdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBfbGlzdFJlZiRjdXJyZW50MjtcblxuICAgICAgICAoX2xpc3RSZWYkY3VycmVudDIgPSBsaXN0UmVmLmN1cnJlbnQpLm9uS2V5RG93bi5hcHBseShfbGlzdFJlZiRjdXJyZW50MiwgW2V2ZW50XS5jb25jYXQocmVzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICAgIG9uS2V5RG93bi5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cbiAgICB9OyAvLyBLZXlVcFxuXG5cbiAgICB2YXIgb25JbnRlcm5hbEtleVVwID0gZnVuY3Rpb24gb25JbnRlcm5hbEtleVVwKGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICByZXN0W19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVyZ2VkT3BlbiAmJiBsaXN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIF9saXN0UmVmJGN1cnJlbnQzO1xuXG4gICAgICAgIChfbGlzdFJlZiRjdXJyZW50MyA9IGxpc3RSZWYuY3VycmVudCkub25LZXlVcC5hcHBseShfbGlzdFJlZiRjdXJyZW50MywgW2V2ZW50XS5jb25jYXQocmVzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25LZXlVcCkge1xuICAgICAgICBvbktleVVwLmFwcGx5KHZvaWQgMCwgW2V2ZW50XS5jb25jYXQocmVzdCkpO1xuICAgICAgfVxuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEZvY3VzIC8gQmx1ciA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqIFJlY29yZCByZWFsIGZvY3VzIHN0YXR1cyAqL1xuXG5cbiAgICB2YXIgZm9jdXNSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgdmFyIG9uQ29udGFpbmVyRm9jdXMgPSBmdW5jdGlvbiBvbkNvbnRhaW5lckZvY3VzKCkge1xuICAgICAgc2V0TW9ja0ZvY3VzZWQodHJ1ZSk7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKG9uRm9jdXMgJiYgIWZvY3VzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvbkZvY3VzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSAvLyBgc2hvd0FjdGlvbmAgc2hvdWxkIGhhbmRsZSBgZm9jdXNgIGlmIHNldFxuXG5cbiAgICAgICAgaWYgKHNob3dBY3Rpb24uaW5jbHVkZXMoJ2ZvY3VzJykpIHtcbiAgICAgICAgICBvblRvZ2dsZU9wZW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9jdXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfTtcblxuICAgIHZhciBvbkNvbnRhaW5lckJsdXIgPSBmdW5jdGlvbiBvbkNvbnRhaW5lckJsdXIoKSB7XG4gICAgICBzZXRNb2NrRm9jdXNlZChmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb2N1c1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIG9uVG9nZ2xlT3BlbihmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lcmdlZFNlYXJjaFZhbHVlKSB7XG4gICAgICAgIC8vIGB0YWdzYCBtb2RlIHNob3VsZCBtb3ZlIGBzZWFyY2hWYWx1ZWAgaW50byB2YWx1ZXNcbiAgICAgICAgaWYgKG1vZGUgPT09ICd0YWdzJykge1xuICAgICAgICAgIHRyaWdnZXJTZWFyY2goJycsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZShBcnJheS5mcm9tKG5ldyBTZXQoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShtZXJnZWRSYXdWYWx1ZSksIFttZXJnZWRTZWFyY2hWYWx1ZV0pKSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAvLyBgbXVsdGlwbGVgIG1vZGUgb25seSBjbGVhbiB0aGUgc2VhcmNoIHZhbHVlIGJ1dCBub3QgdHJpZ2dlciBldmVudFxuICAgICAgICAgIHNldElubmVyU2VhcmNoVmFsdWUoJycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGFjdGl2ZVRpbWVvdXRJZHMgPSBbXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWN0aXZlVGltZW91dElkcy5mb3JFYWNoKGZ1bmN0aW9uICh0aW1lb3V0SWQpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVUaW1lb3V0SWRzLnNwbGljZSgwLCBhY3RpdmVUaW1lb3V0SWRzLmxlbmd0aCk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHZhciBvbkludGVybmFsTW91c2VEb3duID0gZnVuY3Rpb24gb25JbnRlcm5hbE1vdXNlRG93bihldmVudCkge1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHZhciBwb3B1cEVsZW1lbnQgPSB0cmlnZ2VyUmVmLmN1cnJlbnQgJiYgdHJpZ2dlclJlZi5jdXJyZW50LmdldFBvcHVwRWxlbWVudCgpOyAvLyBXZSBzaG91bGQgZ2l2ZSBmb2N1cyBiYWNrIHRvIHNlbGVjdG9yIGlmIGNsaWNrZWQgaXRlbSBpcyBub3QgZm9jdXNhYmxlXG5cbiAgICAgIGlmIChwb3B1cEVsZW1lbnQgJiYgcG9wdXBFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbmRleCA9IGFjdGl2ZVRpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aXZlVGltZW91dElkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbmNlbFNldE1vY2tGb2N1c2VkKCk7XG5cbiAgICAgICAgICBpZiAoIW1vYmlsZSAmJiAhcG9wdXBFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICB2YXIgX3NlbGVjdG9yUmVmJGN1cnJlbnQzO1xuXG4gICAgICAgICAgICAoX3NlbGVjdG9yUmVmJGN1cnJlbnQzID0gc2VsZWN0b3JSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3NlbGVjdG9yUmVmJGN1cnJlbnQzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc2VsZWN0b3JSZWYkY3VycmVudDMuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVUaW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uTW91c2VEb3duKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIHJlc3RBcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZURvd24uYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChyZXN0QXJncykpO1xuICAgICAgfVxuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gQWNjZXNzaWJpbGl0eSA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICB2YXIgX3VzZVN0YXRlMTEgPSB1c2VTdGF0ZSgwKSxcbiAgICAgICAgX3VzZVN0YXRlMTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxMSwgMiksXG4gICAgICAgIGFjY2Vzc2liaWxpdHlJbmRleCA9IF91c2VTdGF0ZTEyWzBdLFxuICAgICAgICBzZXRBY2Nlc3NpYmlsaXR5SW5kZXggPSBfdXNlU3RhdGUxMlsxXTtcblxuICAgIHZhciBtZXJnZWREZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gIT09IHVuZGVmaW5lZCA/IGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA6IG1vZGUgIT09ICdjb21ib2JveCc7XG5cbiAgICB2YXIgb25BY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uIG9uQWN0aXZlVmFsdWUoYWN0aXZlLCBpbmRleCkge1xuICAgICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgICAgICBfcmVmMyRzb3VyY2UgPSBfcmVmMy5zb3VyY2UsXG4gICAgICAgICAgc291cmNlID0gX3JlZjMkc291cmNlID09PSB2b2lkIDAgPyAna2V5Ym9hcmQnIDogX3JlZjMkc291cmNlO1xuXG4gICAgICBzZXRBY2Nlc3NpYmlsaXR5SW5kZXgoaW5kZXgpO1xuXG4gICAgICBpZiAoYmFja2ZpbGwgJiYgbW9kZSA9PT0gJ2NvbWJvYm94JyAmJiBhY3RpdmUgIT09IG51bGwgJiYgc291cmNlID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgIHNldEFjdGl2ZVZhbHVlKFN0cmluZyhhY3RpdmUpKTtcbiAgICAgIH1cbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBQb3B1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgdmFyIF91c2VTdGF0ZTEzID0gdXNlU3RhdGUobnVsbCksXG4gICAgICAgIF91c2VTdGF0ZTE0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMTMsIDIpLFxuICAgICAgICBjb250YWluZXJXaWR0aCA9IF91c2VTdGF0ZTE0WzBdLFxuICAgICAgICBzZXRDb250YWluZXJXaWR0aCA9IF91c2VTdGF0ZTE0WzFdO1xuXG4gICAgdmFyIF91c2VTdGF0ZTE1ID0gdXNlU3RhdGUoe30pLFxuICAgICAgICBfdXNlU3RhdGUxNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTE1LCAyKSxcbiAgICAgICAgZm9yY2VVcGRhdGUgPSBfdXNlU3RhdGUxNlsxXTsgLy8gV2UgbmVlZCBmb3JjZSB1cGRhdGUgaGVyZSBzaW5jZSBwb3B1cCBkb20gaXMgcmVuZGVyIGFzeW5jXG5cblxuICAgIGZ1bmN0aW9uIG9uUG9wdXBNb3VzZUVudGVyKCkge1xuICAgICAgZm9yY2VVcGRhdGUoe30pO1xuICAgIH1cblxuICAgIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHJpZ2dlck9wZW4pIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gTWF0aC5jZWlsKGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldFdpZHRoKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyV2lkdGggIT09IG5ld1dpZHRoKSB7XG4gICAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgobmV3V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3RyaWdnZXJPcGVuXSk7XG4gICAgdmFyIHBvcHVwTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3QsIHtcbiAgICAgIHJlZjogbGlzdFJlZixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaWQ6IG1lcmdlZElkLFxuICAgICAgb3BlbjogbWVyZ2VkT3BlbixcbiAgICAgIGNoaWxkcmVuQXNEYXRhOiAhb3B0aW9ucyxcbiAgICAgIG9wdGlvbnM6IGRpc3BsYXlPcHRpb25zLFxuICAgICAgZmxhdHRlbk9wdGlvbnM6IGRpc3BsYXlGbGF0dGVuT3B0aW9ucyxcbiAgICAgIG11bHRpcGxlOiBpc011bHRpcGxlLFxuICAgICAgdmFsdWVzOiByYXdWYWx1ZXMsXG4gICAgICBoZWlnaHQ6IGxpc3RIZWlnaHQsXG4gICAgICBpdGVtSGVpZ2h0OiBsaXN0SXRlbUhlaWdodCxcbiAgICAgIG9uU2VsZWN0OiBvbkludGVybmFsT3B0aW9uU2VsZWN0LFxuICAgICAgb25Ub2dnbGVPcGVuOiBvblRvZ2dsZU9wZW4sXG4gICAgICBvbkFjdGl2ZVZhbHVlOiBvbkFjdGl2ZVZhbHVlLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBtZXJnZWREZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IG5vdEZvdW5kQ29udGVudCxcbiAgICAgIG9uU2Nyb2xsOiBvblBvcHVwU2Nyb2xsLFxuICAgICAgc2VhcmNoVmFsdWU6IG1lcmdlZFNlYXJjaFZhbHVlLFxuICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IG1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgdmlydHVhbDogdmlydHVhbCAhPT0gZmFsc2UgJiYgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoICE9PSBmYWxzZSxcbiAgICAgIG9uTW91c2VFbnRlcjogb25Qb3B1cE1vdXNlRW50ZXJcbiAgICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2xlYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgY2xlYXJOb2RlO1xuXG4gICAgdmFyIG9uQ2xlYXJNb3VzZURvd24gPSBmdW5jdGlvbiBvbkNsZWFyTW91c2VEb3duKCkge1xuICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBgb25DbGVhcmAgZXZlbnRcbiAgICAgIGlmICh1c2VJbnRlcm5hbFByb3BzICYmIGludGVybmFsUHJvcHMub25DbGVhcikge1xuICAgICAgICBpbnRlcm5hbFByb3BzLm9uQ2xlYXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uQ2xlYXIpIHtcbiAgICAgICAgb25DbGVhcigpO1xuICAgICAgfVxuXG4gICAgICB0cmlnZ2VyQ2hhbmdlKFtdKTtcbiAgICAgIHRyaWdnZXJTZWFyY2goJycsIGZhbHNlLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIGlmICghZGlzYWJsZWQgJiYgYWxsb3dDbGVhciAmJiAobWVyZ2VkUmF3VmFsdWUubGVuZ3RoIHx8IG1lcmdlZFNlYXJjaFZhbHVlKSkge1xuICAgICAgY2xlYXJOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNCdG4sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyXCIpLFxuICAgICAgICBvbk1vdXNlRG93bjogb25DbGVhck1vdXNlRG93bixcbiAgICAgICAgY3VzdG9taXplSWNvbjogY2xlYXJJY29uXG4gICAgICB9LCBcIlxceEQ3XCIpO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQXJyb3cgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAgIHZhciBtZXJnZWRTaG93QXJyb3cgPSBzaG93QXJyb3cgIT09IHVuZGVmaW5lZCA/IHNob3dBcnJvdyA6IGxvYWRpbmcgfHwgIWlzTXVsdGlwbGUgJiYgbW9kZSAhPT0gJ2NvbWJvYm94JztcbiAgICB2YXIgYXJyb3dOb2RlO1xuXG4gICAgaWYgKG1lcmdlZFNob3dBcnJvdykge1xuICAgICAgYXJyb3dOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNCdG4sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1sb2FkaW5nXCIpLCBsb2FkaW5nKSksXG4gICAgICAgIGN1c3RvbWl6ZUljb246IGlucHV0SWNvbixcbiAgICAgICAgY3VzdG9taXplSWNvblByb3BzOiB7XG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICBzZWFyY2hWYWx1ZTogbWVyZ2VkU2VhcmNoVmFsdWUsXG4gICAgICAgICAgb3BlbjogbWVyZ2VkT3BlbixcbiAgICAgICAgICBmb2N1c2VkOiBtb2NrRm9jdXNlZCxcbiAgICAgICAgICBzaG93U2VhcmNoOiBtZXJnZWRTaG93U2VhcmNoXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXYXJuaW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5pbmdQcm9wcykge1xuICAgICAgd2FybmluZ1Byb3BzKHByb3BzKTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvY3VzZWRcIiksIG1vY2tGb2N1c2VkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tdWx0aXBsZVwiKSwgaXNNdWx0aXBsZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2luZ2xlXCIpLCAhaXNNdWx0aXBsZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWxsb3ctY2xlYXJcIiksIGFsbG93Q2xlYXIpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctYXJyb3dcIiksIG1lcmdlZFNob3dBcnJvdyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nXCIpLCBsb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuXCIpLCBtZXJnZWRPcGVuKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jdXN0b21pemUtaW5wdXRcIiksIGN1c3RvbWl6ZUlucHV0RWxlbWVudCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2hvdy1zZWFyY2hcIiksIG1lcmdlZFNob3dTZWFyY2gpLCBfY2xhc3NOYW1lczIpKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWVcbiAgICB9LCBkb21Qcm9wcywge1xuICAgICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgICBvbk1vdXNlRG93bjogb25JbnRlcm5hbE1vdXNlRG93bixcbiAgICAgIG9uS2V5RG93bjogb25JbnRlcm5hbEtleURvd24sXG4gICAgICBvbktleVVwOiBvbkludGVybmFsS2V5VXAsXG4gICAgICBvbkZvY3VzOiBvbkNvbnRhaW5lckZvY3VzLFxuICAgICAgb25CbHVyOiBvbkNvbnRhaW5lckJsdXJcbiAgICB9KSwgbW9ja0ZvY3VzZWQgJiYgIW1lcmdlZE9wZW4gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LFxuICAgICAgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIlxuICAgIH0sIFwiXCIuY29uY2F0KG1lcmdlZFJhd1ZhbHVlLmpvaW4oJywgJykpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0VHJpZ2dlciwge1xuICAgICAgcmVmOiB0cmlnZ2VyUmVmLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICB2aXNpYmxlOiB0cmlnZ2VyT3BlbixcbiAgICAgIHBvcHVwRWxlbWVudDogcG9wdXBOb2RlLFxuICAgICAgY29udGFpbmVyV2lkdGg6IGNvbnRhaW5lcldpZHRoLFxuICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgICBkcm9wZG93blN0eWxlOiBkcm9wZG93blN0eWxlLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IGRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCxcbiAgICAgIGRyb3Bkb3duUmVuZGVyOiBkcm9wZG93blJlbmRlcixcbiAgICAgIGRyb3Bkb3duQWxpZ246IGRyb3Bkb3duQWxpZ24sXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBlbXB0eTogIW1lcmdlZE9wdGlvbnMubGVuZ3RoLFxuICAgICAgZ2V0VHJpZ2dlckRPTU5vZGU6IGZ1bmN0aW9uIGdldFRyaWdnZXJET01Ob2RlKCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3JEb21SZWYuY3VycmVudDtcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RvciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBkb21SZWY6IHNlbGVjdG9yRG9tUmVmLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpbnB1dEVsZW1lbnQ6IGN1c3RvbWl6ZUlucHV0RWxlbWVudCxcbiAgICAgIHJlZjogc2VsZWN0b3JSZWYsXG4gICAgICBpZDogbWVyZ2VkSWQsXG4gICAgICBzaG93U2VhcmNoOiBtZXJnZWRTaG93U2VhcmNoLFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIGFjY2Vzc2liaWxpdHlJbmRleDogYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgICAgbXVsdGlwbGU6IGlzTXVsdGlwbGUsXG4gICAgICB0YWdSZW5kZXI6IHRhZ1JlbmRlcixcbiAgICAgIHZhbHVlczogZGlzcGxheVZhbHVlcyxcbiAgICAgIG9wZW46IG1lcmdlZE9wZW4sXG4gICAgICBvblRvZ2dsZU9wZW46IG9uVG9nZ2xlT3BlbixcbiAgICAgIHNlYXJjaFZhbHVlOiBtZXJnZWRTZWFyY2hWYWx1ZSxcbiAgICAgIGFjdGl2ZVZhbHVlOiBhY3RpdmVWYWx1ZSxcbiAgICAgIG9uU2VhcmNoOiB0cmlnZ2VyU2VhcmNoLFxuICAgICAgb25TZWFyY2hTdWJtaXQ6IG9uU2VhcmNoU3VibWl0LFxuICAgICAgb25TZWxlY3Q6IG9uSW50ZXJuYWxTZWxlY3Rpb25TZWxlY3QsXG4gICAgICB0b2tlbldpdGhFbnRlcjogdG9rZW5XaXRoRW50ZXJcbiAgICB9KSkpLCBhcnJvd05vZGUsIGNsZWFyTm9kZSk7XG4gIH1cblxuICB2YXIgUmVmU2VsZWN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoU2VsZWN0KTtcbiAgcmV0dXJuIFJlZlNlbGVjdDtcbn0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FjaGVEaXNwbGF5VmFsdWUodmFsdWVzKSB7XG4gIHZhciBwcmV2VmFsdWVzUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlcyk7XG4gIHZhciBtZXJnZWRWYWx1ZXMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDcmVhdGUgdmFsdWUgLSBsYWJlbCBtYXBcbiAgICB2YXIgdmFsdWVMYWJlbHMgPSBuZXcgTWFwKCk7XG4gICAgcHJldlZhbHVlc1JlZi5jdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsO1xuXG4gICAgICBpZiAodmFsdWUgIT09IGxhYmVsKSB7XG4gICAgICAgIHZhbHVlTGFiZWxzLnNldCh2YWx1ZSwgbGFiZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXN1bHRWYWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY2FjaGVMYWJlbCA9IHZhbHVlTGFiZWxzLmdldChpdGVtLnZhbHVlKTtcblxuICAgICAgaWYgKGl0ZW0uaXNDYWNoZWFibGUgJiYgY2FjaGVMYWJlbCkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtKSwge30sIHtcbiAgICAgICAgICBsYWJlbDogY2FjaGVMYWJlbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgcHJldlZhbHVlc1JlZi5jdXJyZW50ID0gcmVzdWx0VmFsdWVzO1xuICAgIHJldHVybiByZXN1bHRWYWx1ZXM7XG4gIH0sIFt2YWx1ZXNdKTtcbiAgcmV0dXJuIG1lcmdlZFZhbHVlcztcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYWNoZU9wdGlvbnMob3B0aW9ucykge1xuICB2YXIgcHJldk9wdGlvbk1hcFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG9wdGlvbk1hcCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVtLmRhdGEudmFsdWU7XG4gICAgICBtYXAuc2V0KHZhbHVlLCBpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCBbb3B0aW9uc10pO1xuICBwcmV2T3B0aW9uTWFwUmVmLmN1cnJlbnQgPSBvcHRpb25NYXA7XG5cbiAgdmFyIGdldFZhbHVlT3B0aW9uID0gZnVuY3Rpb24gZ2V0VmFsdWVPcHRpb24odmFscykge1xuICAgIHJldHVybiB2YWxzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwcmV2T3B0aW9uTWFwUmVmLmN1cnJlbnQuZ2V0KHZhbHVlKTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gIH07XG5cbiAgcmV0dXJuIGdldFZhbHVlT3B0aW9uO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBTaW1pbGFyIHdpdGggYHVzZUxvY2tgLCBidXQgdGhpcyBob29rIHdpbGwgYWx3YXlzIGV4ZWN1dGUgbGFzdCB2YWx1ZS5cbiAqIFdoZW4gc2V0IHRvIGB0cnVlYCwgaXQgd2lsbCBrZWVwIGB0cnVlYCBmb3IgYSBzaG9ydCB0aW1lIGV2ZW4gaWYgYGZhbHNlYCBpcyBzZXQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVsYXlSZXNldCgpIHtcbiAgdmFyIHRpbWVvdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDEwO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGJvb2wgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Qm9vbCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGRlbGF5UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBjYW5jZWxMYXRlc3QgPSBmdW5jdGlvbiBjYW5jZWxMYXRlc3QoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dChkZWxheVJlZi5jdXJyZW50KTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYW5jZWxMYXRlc3Q7XG4gIH0sIFtdKTtcblxuICB2YXIgZGVsYXlTZXRCb29sID0gZnVuY3Rpb24gZGVsYXlTZXRCb29sKHZhbHVlLCBjYWxsYmFjaykge1xuICAgIGNhbmNlbExhdGVzdCgpO1xuICAgIGRlbGF5UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRCb29sKHZhbHVlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSwgdGltZW91dCk7XG4gIH07XG5cbiAgcmV0dXJuIFtib29sLCBkZWxheVNldEJvb2wsIGNhbmNlbExhdGVzdF07XG59IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQnJvd3NlckNsaWVudCB9IGZyb20gJy4uL3V0aWxzL2NvbW1vblV0aWwnO1xuLyoqXG4gKiBXcmFwIGBSZWFjdC51c2VMYXlvdXRFZmZlY3RgIHdoaWNoIHdpbGwgbm90IHRocm93IHdhcm5pbmcgbWVzc2FnZSBpbiB0ZXN0IGVudlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChlZmZlY3QsIGRlcHMpIHtcbiAgLy8gTmV2ZXIgaGFwcGVuIGluIHRlc3QgZW52XG4gIGlmIChpc0Jyb3dzZXJDbGllbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdChlZmZlY3QsIGRlcHMpO1xuICB9IGVsc2Uge1xuICAgIFJlYWN0LnVzZUVmZmVjdChlZmZlY3QsIGRlcHMpO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlICovIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBMb2NrZXIgcmV0dXJuIGNhY2hlZCBtYXJrLlxuICogSWYgc2V0IHRvIGB0cnVlYCwgd2lsbCByZXR1cm4gYHRydWVgIGluIGEgc2hvcnQgdGltZSBldmVuIGlmIHNldCBgZmFsc2VgLlxuICogSWYgc2V0IHRvIGBmYWxzZWAgYW5kIHRoZW4gc2V0IHRvIGB0cnVlYCwgd2lsbCBjaGFuZ2UgdG8gYHRydWVgLlxuICogQW5kIGFmdGVyIHRpbWUgZHVyYXRpb24sIGl0IHdpbGwgYmFjayB0byBgbnVsbGAgYXV0b21hdGljYWxseS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMb2NrKCkge1xuICB2YXIgZHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDI1MDtcbiAgdmFyIGxvY2tSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpOyAvLyBDbGVhbiB1cFxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gZG9Mb2NrKGxvY2tlZCkge1xuICAgIGlmIChsb2NrZWQgfHwgbG9ja1JlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICBsb2NrUmVmLmN1cnJlbnQgPSBsb2NrZWQ7XG4gICAgfVxuXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGxvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIFtmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxvY2tSZWYuY3VycmVudDtcbiAgfSwgZG9Mb2NrXTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3RUcmlnZ2VyQ29udHJvbChlbGVtZW50cywgb3BlbiwgdHJpZ2dlck9wZW4pIHtcbiAgdmFyIHByb3BzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBwcm9wc1JlZi5jdXJyZW50ID0ge1xuICAgIGVsZW1lbnRzOiBlbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pLFxuICAgIG9wZW46IG9wZW4sXG4gICAgdHJpZ2dlck9wZW46IHRyaWdnZXJPcGVuXG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gb25HbG9iYWxNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIGlmICh0YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudC5jb21wb3NlZCkge1xuICAgICAgICB0YXJnZXQgPSBldmVudC5jb21wb3NlZFBhdGgoKVswXSB8fCB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wc1JlZi5jdXJyZW50Lm9wZW4gJiYgcHJvcHNSZWYuY3VycmVudC5lbGVtZW50cy5ldmVyeShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSAmJiBlbGVtZW50ICE9PSB0YXJnZXQ7XG4gICAgICB9KSkge1xuICAgICAgICAvLyBTaG91bGQgdHJpZ2dlciBjbG9zZVxuICAgICAgICBwcm9wc1JlZi5jdXJyZW50LnRyaWdnZXJPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25HbG9iYWxNb3VzZURvd24pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uR2xvYmFsTW91c2VEb3duKTtcbiAgICB9O1xuICB9LCBbXSk7XG59IiwiaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJztcbmltcG9ydCBPcHRHcm91cCBmcm9tICcuL09wdEdyb3VwJztcbmV4cG9ydCB7IE9wdGlvbiwgT3B0R3JvdXAgfTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJleHBvcnQgdmFyIElOVEVSTkFMX1BST1BTX01BUksgPSAnUkNfU0VMRUNUX0lOVEVSTkFMX1BST1BTX01BUksnOyIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IFt2YWx1ZV0gOiBbXTtcbn1cbi8qKlxuICogQ29udmVydCBvdXRlciBwcm9wcyB2YWx1ZSBpbnRvIGludGVybmFsIHZhbHVlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSW5uZXJWYWx1ZSh2YWx1ZSwgX3JlZikge1xuICB2YXIgbGFiZWxJblZhbHVlID0gX3JlZi5sYWJlbEluVmFsdWUsXG4gICAgICBjb21ib2JveCA9IF9yZWYuY29tYm9ib3g7XG4gIHZhciB2YWx1ZU1hcCA9IG5ldyBNYXAoKTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgJiYgY29tYm9ib3gpIHtcbiAgICByZXR1cm4gW1tdLCB2YWx1ZU1hcF07XG4gIH1cblxuICB2YXIgdmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gIHZhciByYXdWYWx1ZXMgPSB2YWx1ZXM7XG5cbiAgaWYgKGxhYmVsSW5WYWx1ZSkge1xuICAgIHJhd1ZhbHVlcyA9IHZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtICE9PSBudWxsO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoaXRlbVZhbHVlKSB7XG4gICAgICB2YXIga2V5ID0gaXRlbVZhbHVlLmtleSxcbiAgICAgICAgICB2YWwgPSBpdGVtVmFsdWUudmFsdWU7XG4gICAgICB2YXIgZmluYWxWYWwgPSB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA6IGtleTtcbiAgICAgIHZhbHVlTWFwLnNldChmaW5hbFZhbCwgaXRlbVZhbHVlKTtcbiAgICAgIHJldHVybiBmaW5hbFZhbDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbcmF3VmFsdWVzLCB2YWx1ZU1hcF07XG59XG4vKipcbiAqIENvbnZlcnQgaW50ZXJuYWwgdmFsdWUgaW50byBvdXQgZXZlbnQgdmFsdWVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdG9PdXRlclZhbHVlcyh2YWx1ZUxpc3QsIF9yZWYyKSB7XG4gIHZhciBvcHRpb25MYWJlbFByb3AgPSBfcmVmMi5vcHRpb25MYWJlbFByb3AsXG4gICAgICBsYWJlbEluVmFsdWUgPSBfcmVmMi5sYWJlbEluVmFsdWUsXG4gICAgICBwcmV2VmFsdWVNYXAgPSBfcmVmMi5wcmV2VmFsdWVNYXAsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIGdldExhYmVsZWRWYWx1ZSA9IF9yZWYyLmdldExhYmVsZWRWYWx1ZTtcbiAgdmFyIHZhbHVlcyA9IHZhbHVlTGlzdDtcblxuICBpZiAobGFiZWxJblZhbHVlKSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gZ2V0TGFiZWxlZFZhbHVlKHZhbCwge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBwcmV2VmFsdWVNYXA6IHByZXZWYWx1ZU1hcCxcbiAgICAgICAgbGFiZWxJblZhbHVlOiBsYWJlbEluVmFsdWUsXG4gICAgICAgIG9wdGlvbkxhYmVsUHJvcDogb3B0aW9uTGFiZWxQcm9wXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGFzdEVuYWJsZWRWYWx1ZShtZWFzdXJlVmFsdWVzLCB2YWx1ZXMpIHtcbiAgdmFyIG5ld1ZhbHVlcyA9IF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZXMpO1xuXG4gIHZhciByZW1vdmVJbmRleDtcblxuICBmb3IgKHJlbW92ZUluZGV4ID0gbWVhc3VyZVZhbHVlcy5sZW5ndGggLSAxOyByZW1vdmVJbmRleCA+PSAwOyByZW1vdmVJbmRleCAtPSAxKSB7XG4gICAgaWYgKCFtZWFzdXJlVmFsdWVzW3JlbW92ZUluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJlbW92ZWRWYWx1ZSA9IG51bGw7XG5cbiAgaWYgKHJlbW92ZUluZGV4ICE9PSAtMSkge1xuICAgIHJlbW92ZWRWYWx1ZSA9IG5ld1ZhbHVlc1tyZW1vdmVJbmRleF07XG4gICAgbmV3VmFsdWVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlczogbmV3VmFsdWVzLFxuICAgIHJlbW92ZWRWYWx1ZTogcmVtb3ZlZFZhbHVlXG4gIH07XG59XG5leHBvcnQgdmFyIGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4vKiogSXMgY2xpZW50IHNpZGUgYW5kIG5vdCBqc2RvbSAqL1xuXG5leHBvcnQgdmFyIGlzQnJvd3NlckNsaWVudCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgaXNDbGllbnQ7XG52YXIgdXVpZCA9IDA7XG4vKiogR2V0IHVuaXF1ZSBpZCBmb3IgYWNjZXNzaWJpbGl0eSB1c2FnZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVVJRCgpIHtcbiAgdmFyIHJldElkOyAvLyBUZXN0IG5ldmVyIHJlYWNoXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgaWYgKGlzQnJvd3NlckNsaWVudCkge1xuICAgIHJldElkID0gdXVpZDtcbiAgICB1dWlkICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0SWQgPSAnVEVTVF9PUl9TU1InO1xuICB9XG5cbiAgcmV0dXJuIHJldElkO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvZXMvQ2hpbGRyZW4vdG9BcnJheVwiO1xuXG5mdW5jdGlvbiBjb252ZXJ0Tm9kZVRvT3B0aW9uKG5vZGUpIHtcbiAgdmFyIGtleSA9IG5vZGUua2V5LFxuICAgICAgX25vZGUkcHJvcHMgPSBub2RlLnByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBfbm9kZSRwcm9wcy5jaGlsZHJlbixcbiAgICAgIHZhbHVlID0gX25vZGUkcHJvcHMudmFsdWUsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX25vZGUkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwidmFsdWVcIl0pO1xuXG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBrZXk6IGtleSxcbiAgICB2YWx1ZTogdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9LCByZXN0UHJvcHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoaWxkcmVuVG9EYXRhKG5vZGVzKSB7XG4gIHZhciBvcHRpb25Pbmx5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgcmV0dXJuIHRvQXJyYXkobm9kZXMpLm1hcChmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGlzU2VsZWN0T3B0R3JvdXAgPSBub2RlLnR5cGUuaXNTZWxlY3RPcHRHcm91cCxcbiAgICAgICAga2V5ID0gbm9kZS5rZXksXG4gICAgICAgIF9ub2RlJHByb3BzMiA9IG5vZGUucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX25vZGUkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX25vZGUkcHJvcHMyLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICBpZiAob3B0aW9uT25seSB8fCAhaXNTZWxlY3RPcHRHcm91cCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnROb2RlVG9PcHRpb24obm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICBrZXk6IFwiX19SQ19TRUxFQ1RfR1JQX19cIi5jb25jYXQoa2V5ID09PSBudWxsID8gaW5kZXggOiBrZXksIFwiX19cIiksXG4gICAgICBsYWJlbDoga2V5XG4gICAgfSwgcmVzdFByb3BzKSwge30sIHtcbiAgICAgIG9wdGlvbnM6IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcbiAgICB9KTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0pO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3RvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQXJyYXlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vY29tbW9uVXRpbCc7XG5cbmZ1bmN0aW9uIGdldEtleShkYXRhLCBpbmRleCkge1xuICB2YXIga2V5ID0gZGF0YS5rZXk7XG4gIHZhciB2YWx1ZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkYXRhKSB7XG4gICAgdmFsdWUgPSBkYXRhLnZhbHVlO1xuICB9XG5cbiAgaWYgKGtleSAhPT0gbnVsbCAmJiBrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBcInJjLWluZGV4LWtleS1cIi5jb25jYXQoaW5kZXgpO1xufVxuLyoqXG4gKiBGbGF0IG9wdGlvbnMgaW50byBmbGF0dGVuIGxpc3QuXG4gKiBXZSB1c2UgYG9wdGlvbk9ubHlgIGhlcmUgaXMgYWltIHRvIGF2b2lkIHVzZXIgdXNlIG5lc3RlZCBvcHRpb24gZ3JvdXAuXG4gKiBIZXJlIGlzIHNpbXBseSBzZXQgYGtleWAgdG8gdGhlIGluZGV4IGlmIG5vdCBwcm92aWRlZC5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuT3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBmbGF0dGVuTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRpZyhsaXN0LCBpc0dyb3VwT3B0aW9uKSB7XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoaXNHcm91cE9wdGlvbiB8fCAhKCdvcHRpb25zJyBpbiBkYXRhKSkge1xuICAgICAgICAvLyBPcHRpb25cbiAgICAgICAgZmxhdHRlbkxpc3QucHVzaCh7XG4gICAgICAgICAga2V5OiBnZXRLZXkoZGF0YSwgZmxhdHRlbkxpc3QubGVuZ3RoKSxcbiAgICAgICAgICBncm91cE9wdGlvbjogaXNHcm91cE9wdGlvbixcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3B0aW9uIEdyb3VwXG4gICAgICAgIGZsYXR0ZW5MaXN0LnB1c2goe1xuICAgICAgICAgIGtleTogZ2V0S2V5KGRhdGEsIGZsYXR0ZW5MaXN0Lmxlbmd0aCksXG4gICAgICAgICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgZGlnKGRhdGEub3B0aW9ucywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkaWcob3B0aW9ucywgZmFsc2UpO1xuICByZXR1cm4gZmxhdHRlbkxpc3Q7XG59XG4vKipcbiAqIEluamVjdCBgcHJvcHNgIGludG8gYG9wdGlvbmAgZm9yIGxlZ2FjeSB1c2FnZVxuICovXG5cbmZ1bmN0aW9uIGluamVjdFByb3BzV2l0aE9wdGlvbihvcHRpb24pIHtcbiAgdmFyIG5ld09wdGlvbiA9IF9vYmplY3RTcHJlYWQoe30sIG9wdGlvbik7XG5cbiAgaWYgKCEoJ3Byb3BzJyBpbiBuZXdPcHRpb24pKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09wdGlvbiwgJ3Byb3BzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHdhcm5pbmcoZmFsc2UsICdSZXR1cm4gdHlwZSBpcyBvcHRpb24gaW5zdGVhZCBvZiBPcHRpb24gaW5zdGFuY2UuIFBsZWFzZSByZWFkIHZhbHVlIGRpcmVjdGx5IGluc3RlYWQgb2YgcmVhZGluZyBmcm9tIGBwcm9wc2AuJyk7XG4gICAgICAgIHJldHVybiBuZXdPcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3T3B0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFZhbHVlT3B0aW9uKHZhbHVlcywgb3B0aW9ucykge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmJHByZXZWYWx1ZU9wdGlvbnMgPSBfcmVmLnByZXZWYWx1ZU9wdGlvbnMsXG4gICAgICBwcmV2VmFsdWVPcHRpb25zID0gX3JlZiRwcmV2VmFsdWVPcHRpb25zID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkcHJldlZhbHVlT3B0aW9ucztcblxuICB2YXIgb3B0aW9uTWFwID0gbmV3IE1hcCgpO1xuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGZsYXR0ZW5JdGVtKSB7XG4gICAgaWYgKCFmbGF0dGVuSXRlbS5ncm91cCkge1xuICAgICAgdmFyIGRhdGEgPSBmbGF0dGVuSXRlbS5kYXRhOyAvLyBDaGVjayBpZiBtYXRjaFxuXG4gICAgICBvcHRpb25NYXAuc2V0KGRhdGEudmFsdWUsIGRhdGEpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb3B0aW9uID0gb3B0aW9uTWFwLmdldCh2YWwpOyAvLyBGYWxsYmFjayB0byB0cnkgdG8gZmluZCBwcmV2IG9wdGlvbnNcblxuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBvcHRpb24gPSBfb2JqZWN0U3ByZWFkKHt9LCBwcmV2VmFsdWVPcHRpb25zLmZpbmQoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICByZXR1cm4gb3B0Ll9JTlRFUk5BTF9PUFRJT05fVkFMVUVfID09PSB2YWw7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluamVjdFByb3BzV2l0aE9wdGlvbihvcHRpb24pO1xuICB9KTtcbn1cbmV4cG9ydCB2YXIgZ2V0TGFiZWxlZFZhbHVlID0gZnVuY3Rpb24gZ2V0TGFiZWxlZFZhbHVlKHZhbHVlLCBfcmVmMikge1xuICB2YXIgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBwcmV2VmFsdWVNYXAgPSBfcmVmMi5wcmV2VmFsdWVNYXAsXG4gICAgICBsYWJlbEluVmFsdWUgPSBfcmVmMi5sYWJlbEluVmFsdWUsXG4gICAgICBvcHRpb25MYWJlbFByb3AgPSBfcmVmMi5vcHRpb25MYWJlbFByb3A7XG4gIHZhciBpdGVtID0gZmluZFZhbHVlT3B0aW9uKFt2YWx1ZV0sIG9wdGlvbnMpWzBdO1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xuICB2YXIgcHJldlZhbEl0ZW0gPSBsYWJlbEluVmFsdWUgPyBwcmV2VmFsdWVNYXAuZ2V0KHZhbHVlKSA6IHVuZGVmaW5lZDtcblxuICBpZiAocHJldlZhbEl0ZW0gJiYgX3R5cGVvZihwcmV2VmFsSXRlbSkgPT09ICdvYmplY3QnICYmICdsYWJlbCcgaW4gcHJldlZhbEl0ZW0pIHtcbiAgICByZXN1bHQubGFiZWwgPSBwcmV2VmFsSXRlbS5sYWJlbDtcblxuICAgIGlmIChpdGVtICYmIHR5cGVvZiBwcmV2VmFsSXRlbS5sYWJlbCA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGl0ZW1bb3B0aW9uTGFiZWxQcm9wXSA9PT0gJ3N0cmluZycgJiYgcHJldlZhbEl0ZW0ubGFiZWwudHJpbSgpICE9PSBpdGVtW29wdGlvbkxhYmVsUHJvcF0udHJpbSgpKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnYGxhYmVsYCBvZiBgdmFsdWVgIGlzIG5vdCBzYW1lIGFzIGBsYWJlbGAgaW4gU2VsZWN0IG9wdGlvbnMuJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGl0ZW0gJiYgb3B0aW9uTGFiZWxQcm9wIGluIGl0ZW0pIHtcbiAgICByZXN1bHQubGFiZWwgPSBpdGVtW29wdGlvbkxhYmVsUHJvcF07XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LmxhYmVsID0gdmFsdWU7XG4gICAgcmVzdWx0LmlzQ2FjaGVhYmxlID0gdHJ1ZTtcbiAgfSAvLyBVc2VkIGZvciBtb3Rpb24gY29udHJvbFxuXG5cbiAgcmVzdWx0LmtleSA9IHJlc3VsdC52YWx1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRvUmF3U3RyaW5nKGNvbnRlbnQpIHtcbiAgcmV0dXJuIHRvQXJyYXkoY29udGVudCkuam9pbignJyk7XG59XG4vKiogRmlsdGVyIHNpbmdsZSBvcHRpb24gaWYgbWF0Y2ggdGhlIHNlYXJjaCB0ZXh0ICovXG5cblxuZnVuY3Rpb24gZ2V0RmlsdGVyRnVuY3Rpb24ob3B0aW9uRmlsdGVyUHJvcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHNlYXJjaFZhbHVlLCBvcHRpb24pIHtcbiAgICB2YXIgbG93ZXJTZWFyY2hUZXh0ID0gc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKTsgLy8gR3JvdXAgbGFiZWwgc2VhcmNoXG5cbiAgICBpZiAoJ29wdGlvbnMnIGluIG9wdGlvbikge1xuICAgICAgcmV0dXJuIHRvUmF3U3RyaW5nKG9wdGlvbi5sYWJlbCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaFRleHQpO1xuICAgIH0gLy8gT3B0aW9uIHZhbHVlIHNlYXJjaFxuXG5cbiAgICB2YXIgcmF3VmFsdWUgPSBvcHRpb25bb3B0aW9uRmlsdGVyUHJvcF07XG4gICAgdmFyIHZhbHVlID0gdG9SYXdTdHJpbmcocmF3VmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKGxvd2VyU2VhcmNoVGV4dCk7XG4gIH07XG59XG4vKiogRmlsdGVyIG9wdGlvbnMgYW5kIHJldHVybiBhIG5ldyBvcHRpb25zIGJ5IHRoZSBzZWFyY2ggdGV4dCAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zKHNlYXJjaFZhbHVlLCBvcHRpb25zLCBfcmVmMykge1xuICB2YXIgb3B0aW9uRmlsdGVyUHJvcCA9IF9yZWYzLm9wdGlvbkZpbHRlclByb3AsXG4gICAgICBmaWx0ZXJPcHRpb24gPSBfcmVmMy5maWx0ZXJPcHRpb247XG4gIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBbXTtcbiAgdmFyIGZpbHRlckZ1bmM7XG5cbiAgaWYgKGZpbHRlck9wdGlvbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBmaWx0ZXJGdW5jID0gZmlsdGVyT3B0aW9uO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlckZ1bmMgPSBnZXRGaWx0ZXJGdW5jdGlvbihvcHRpb25GaWx0ZXJQcm9wKTtcbiAgfVxuXG4gIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIC8vIEdyb3VwIHNob3VsZCBjaGVjayBjaGlsZCBvcHRpb25zXG4gICAgaWYgKCdvcHRpb25zJyBpbiBpdGVtKSB7XG4gICAgICAvLyBDaGVjayBncm91cCBmaXJzdFxuICAgICAgdmFyIG1hdGNoR3JvdXAgPSBmaWx0ZXJGdW5jKHNlYXJjaFZhbHVlLCBpdGVtKTtcblxuICAgICAgaWYgKG1hdGNoR3JvdXApIHtcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDaGVjayBvcHRpb25cbiAgICAgICAgdmFyIHN1Yk9wdGlvbnMgPSBpdGVtLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzdWJJdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbHRlckZ1bmMoc2VhcmNoVmFsdWUsIHN1Ykl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3ViT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMucHVzaChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pLCB7fSwge1xuICAgICAgICAgICAgb3B0aW9uczogc3ViT3B0aW9uc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckZ1bmMoc2VhcmNoVmFsdWUsIGluamVjdFByb3BzV2l0aE9wdGlvbihpdGVtKSkpIHtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VwYXJhdGVkQ29udGVudCh0ZXh0LCB0b2tlbnMpIHtcbiAgaWYgKCF0b2tlbnMgfHwgIXRva2Vucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNlcGFyYXRlKHN0ciwgX3JlZjQpIHtcbiAgICB2YXIgX3JlZjUgPSBfdG9BcnJheShfcmVmNCksXG4gICAgICAgIHRva2VuID0gX3JlZjVbMF0sXG4gICAgICAgIHJlc3RUb2tlbnMgPSBfcmVmNS5zbGljZSgxKTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiBbc3RyXTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdCA9IHN0ci5zcGxpdCh0b2tlbik7XG4gICAgbWF0Y2ggPSBtYXRjaCB8fCBsaXN0Lmxlbmd0aCA+IDE7XG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKGZ1bmN0aW9uIChwcmV2TGlzdCwgdW5pdFN0cikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocHJldkxpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoc2VwYXJhdGUodW5pdFN0ciwgcmVzdFRva2VucykpKTtcbiAgICB9LCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh1bml0KSB7XG4gICAgICByZXR1cm4gdW5pdDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBsaXN0ID0gc2VwYXJhdGUodGV4dCwgdG9rZW5zKTtcbiAgcmV0dXJuIG1hdGNoID8gbGlzdCA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZURpc2FibGVkKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBvcHRpb24gPSBmaW5kVmFsdWVPcHRpb24oW3ZhbHVlXSwgb3B0aW9ucylbMF07XG4gIHJldHVybiBvcHRpb24uZGlzYWJsZWQ7XG59XG4vKipcbiAqIGB0YWdzYCBtb2RlIHNob3VsZCBmaWxsIHVuLWxpc3QgaXRlbSBpbnRvIHRoZSBvcHRpb24gbGlzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWUob3B0aW9ucywgdmFsdWUsIG9wdGlvbkxhYmVsUHJvcCwgbGFiZWxJblZhbHVlKSB7XG4gIHZhciB2YWx1ZXMgPSB0b0FycmF5KHZhbHVlKS5zbGljZSgpLnNvcnQoKTtcblxuICB2YXIgY2xvbmVPcHRpb25zID0gX3RvQ29uc3VtYWJsZUFycmF5KG9wdGlvbnMpOyAvLyBDb252ZXJ0IG9wdGlvbnMgdmFsdWUgdG8gc2V0XG5cblxuICB2YXIgb3B0aW9uVmFsdWVzID0gbmV3IFNldCgpO1xuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgIGlmIChvcHQub3B0aW9ucykge1xuICAgICAgb3B0Lm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViT3B0KSB7XG4gICAgICAgIG9wdGlvblZhbHVlcy5hZGQoc3ViT3B0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25WYWx1ZXMuYWRkKG9wdC52YWx1ZSk7XG4gICAgfVxuICB9KTsgLy8gRmlsbCBtaXNzaW5nIHZhbHVlXG5cbiAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgdmFsID0gbGFiZWxJblZhbHVlID8gaXRlbS52YWx1ZSA6IGl0ZW07XG5cbiAgICBpZiAoIW9wdGlvblZhbHVlcy5oYXModmFsKSkge1xuICAgICAgdmFyIF9yZWY2O1xuXG4gICAgICBjbG9uZU9wdGlvbnMucHVzaChsYWJlbEluVmFsdWUgPyAoX3JlZjYgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWY2LCBvcHRpb25MYWJlbFByb3AsIGl0ZW0ubGFiZWwpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjYsIFwidmFsdWVcIiwgdmFsKSwgX3JlZjYpIDoge1xuICAgICAgICB2YWx1ZTogdmFsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2xvbmVPcHRpb25zO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nLCB7IG5vdGVPbmNlIH0gZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IHRvTm9kZUFycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCB7IGNvbnZlcnRDaGlsZHJlblRvRGF0YSB9IGZyb20gJy4vbGVnYWN5VXRpbCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9jb21tb25VdGlsJztcblxuZnVuY3Rpb24gd2FybmluZ1Byb3BzKHByb3BzKSB7XG4gIHZhciBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGJhY2tmaWxsID0gcHJvcHMuYmFja2ZpbGwsXG4gICAgICBhbGxvd0NsZWFyID0gcHJvcHMuYWxsb3dDbGVhcixcbiAgICAgIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICBnZXRJbnB1dEVsZW1lbnQgPSBwcm9wcy5nZXRJbnB1dEVsZW1lbnQsXG4gICAgICBzaG93U2VhcmNoID0gcHJvcHMuc2hvd1NlYXJjaCxcbiAgICAgIG9uU2VhcmNoID0gcHJvcHMub25TZWFyY2gsXG4gICAgICBkZWZhdWx0T3BlbiA9IHByb3BzLmRlZmF1bHRPcGVuLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgbGFiZWxJblZhbHVlID0gcHJvcHMubGFiZWxJblZhbHVlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgb3B0aW9uTGFiZWxQcm9wID0gcHJvcHMub3B0aW9uTGFiZWxQcm9wO1xuICB2YXIgbXVsdGlwbGUgPSBtb2RlID09PSAnbXVsdGlwbGUnIHx8IG1vZGUgPT09ICd0YWdzJztcbiAgdmFyIG1lcmdlZFNob3dTZWFyY2ggPSBzaG93U2VhcmNoICE9PSB1bmRlZmluZWQgPyBzaG93U2VhcmNoIDogbXVsdGlwbGUgfHwgbW9kZSA9PT0gJ2NvbWJvYm94JztcbiAgdmFyIG1lcmdlZE9wdGlvbnMgPSBvcHRpb25zIHx8IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbik7IC8vIGB0YWdzYCBzaG91bGQgbm90IHNldCBvcHRpb24gYXMgZGlzYWJsZWRcblxuICB3YXJuaW5nKG1vZGUgIT09ICd0YWdzJyB8fCBtZXJnZWRPcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvcHQpIHtcbiAgICByZXR1cm4gIW9wdC5kaXNhYmxlZDtcbiAgfSksICdQbGVhc2UgYXZvaWQgc2V0dGluZyBvcHRpb24gdG8gZGlzYWJsZWQgaW4gdGFncyBtb2RlIHNpbmNlIHVzZXIgY2FuIGFsd2F5cyB0eXBlIHRleHQgYXMgdGFnLicpOyAvLyBgY29tYm9ib3hgICYgYHRhZ3NgIHNob3VsZCBvcHRpb24gYmUgYHN0cmluZ2AgdHlwZVxuXG4gIGlmIChtb2RlID09PSAndGFncycgfHwgbW9kZSA9PT0gJ2NvbWJvYm94Jykge1xuICAgIHZhciBoYXNOdW1iZXJWYWx1ZSA9IG1lcmdlZE9wdGlvbnMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0ub3B0aW9ucykge1xuICAgICAgICByZXR1cm4gaXRlbS5vcHRpb25zLnNvbWUoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgKCd2YWx1ZScgaW4gb3B0ID8gb3B0LnZhbHVlIDogb3B0LmtleSkgPT09ICdudW1iZXInO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGVvZiAoJ3ZhbHVlJyBpbiBpdGVtID8gaXRlbS52YWx1ZSA6IGl0ZW0ua2V5KSA9PT0gJ251bWJlcic7XG4gICAgfSk7XG4gICAgd2FybmluZyghaGFzTnVtYmVyVmFsdWUsICdgdmFsdWVgIG9mIE9wdGlvbiBzaG91bGQgbm90IHVzZSBudW1iZXIgdHlwZSB3aGVuIGBtb2RlYCBpcyBgdGFnc2Agb3IgYGNvbWJvYm94YC4nKTtcbiAgfSAvLyBgY29tYm9ib3hgIHNob3VsZCBub3QgdXNlIGBvcHRpb25MYWJlbFByb3BgXG5cblxuICB3YXJuaW5nKG1vZGUgIT09ICdjb21ib2JveCcgfHwgIW9wdGlvbkxhYmVsUHJvcCwgJ2Bjb21ib2JveGAgbW9kZSBub3Qgc3VwcG9ydCBgb3B0aW9uTGFiZWxQcm9wYC4gUGxlYXNlIHNldCBgdmFsdWVgIG9uIE9wdGlvbiBkaXJlY3RseS4nKTsgLy8gT25seSBgY29tYm9ib3hgIHN1cHBvcnQgYGJhY2tmaWxsYFxuXG4gIHdhcm5pbmcobW9kZSA9PT0gJ2NvbWJvYm94JyB8fCAhYmFja2ZpbGwsICdgYmFja2ZpbGxgIG9ubHkgd29ya3Mgd2l0aCBgY29tYm9ib3hgIG1vZGUuJyk7IC8vIE9ubHkgYGNvbWJvYm94YCBzdXBwb3J0IGBnZXRJbnB1dEVsZW1lbnRgXG5cbiAgd2FybmluZyhtb2RlID09PSAnY29tYm9ib3gnIHx8ICFnZXRJbnB1dEVsZW1lbnQsICdgZ2V0SW5wdXRFbGVtZW50YCBvbmx5IHdvcmsgd2l0aCBgY29tYm9ib3hgIG1vZGUuJyk7IC8vIEN1c3RvbWl6ZSBgZ2V0SW5wdXRFbGVtZW50YCBzaG91bGQgbm90IHVzZSBgYWxsb3dDbGVhcmAgJiBgcGxhY2Vob2xkZXJgXG5cbiAgbm90ZU9uY2UobW9kZSAhPT0gJ2NvbWJvYm94JyB8fCAhZ2V0SW5wdXRFbGVtZW50IHx8ICFhbGxvd0NsZWFyIHx8ICFwbGFjZWhvbGRlciwgJ0N1c3RvbWl6ZSBgZ2V0SW5wdXRFbGVtZW50YCBzaG91bGQgY3VzdG9taXplIGNsZWFyIGFuZCBwbGFjZWhvbGRlciBsb2dpYyBpbnN0ZWFkIG9mIGNvbmZpZ3VyaW5nIGBhbGxvd0NsZWFyYCBhbmQgYHBsYWNlaG9sZGVyYC4nKTsgLy8gYG9uU2VhcmNoYCBzaG91bGQgdXNlIGluIGBjb21ib2JveGAgb3IgYHNob3dTZWFyY2hgXG5cbiAgaWYgKG9uU2VhcmNoICYmICFtZXJnZWRTaG93U2VhcmNoICYmIG1vZGUgIT09ICdjb21ib2JveCcgJiYgbW9kZSAhPT0gJ3RhZ3MnKSB7XG4gICAgd2FybmluZyhmYWxzZSwgJ2BvblNlYXJjaGAgc2hvdWxkIHdvcmsgd2l0aCBgc2hvd1NlYXJjaGAgaW5zdGVhZCBvZiB1c2UgYWxvbmUuJyk7XG4gIH1cblxuICBub3RlT25jZSghZGVmYXVsdE9wZW4gfHwgYXV0b0ZvY3VzLCAnYGRlZmF1bHRPcGVuYCBtYWtlcyBTZWxlY3Qgb3BlbiB3aXRob3V0IGZvY3VzIHdoaWNoIG1lYW5zIGl0IHdpbGwgbm90IGNsb3NlIGJ5IGNsaWNrIG91dHNpZGUuIFlvdSBjYW4gc2V0IGBhdXRvRm9jdXNgIGlmIG5lZWRlZC4nKTtcblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHZhciB2YWx1ZXMgPSB0b0FycmF5KHZhbHVlKTtcbiAgICB3YXJuaW5nKCFsYWJlbEluVmFsdWUgfHwgdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBfdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmICgna2V5JyBpbiB2YWwgfHwgJ3ZhbHVlJyBpbiB2YWwpO1xuICAgIH0pLCAnYHZhbHVlYCBzaG91bGQgaW4gc2hhcGUgb2YgYHsgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgbGFiZWw/OiBSZWFjdE5vZGUgfWAgd2hlbiB5b3Ugc2V0IGBsYWJlbEluVmFsdWVgIHRvIGB0cnVlYCcpO1xuICAgIHdhcm5pbmcoIW11bHRpcGxlIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpLCAnYHZhbHVlYCBzaG91bGQgYmUgYXJyYXkgd2hlbiBgbW9kZWAgaXMgYG11bHRpcGxlYCBvciBgdGFnc2AnKTtcbiAgfSAvLyBTeW50YWN0aWMgc3VnYXIgc2hvdWxkIHVzZSBjb3JyZWN0IGNoaWxkcmVuIHR5cGVcblxuXG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBpbnZhbGlkYXRlQ2hpbGRUeXBlID0gbnVsbDtcbiAgICB0b05vZGVBcnJheShjaGlsZHJlbikuc29tZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpIHx8ICFub2RlLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcblxuICAgICAgaWYgKHR5cGUuaXNTZWxlY3RPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZS5pc1NlbGVjdE9wdEdyb3VwKSB7XG4gICAgICAgIHZhciBhbGxDaGlsZHJlblZhbGlkID0gdG9Ob2RlQXJyYXkobm9kZS5wcm9wcy5jaGlsZHJlbikuZXZlcnkoZnVuY3Rpb24gKHN1Yk5vZGUpIHtcbiAgICAgICAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoc3ViTm9kZSkgfHwgIW5vZGUudHlwZSB8fCBzdWJOb2RlLnR5cGUuaXNTZWxlY3RPcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGludmFsaWRhdGVDaGlsZFR5cGUgPSBzdWJOb2RlLnR5cGU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYWxsQ2hpbGRyZW5WYWxpZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpbnZhbGlkYXRlQ2hpbGRUeXBlID0gdHlwZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGludmFsaWRhdGVDaGlsZFR5cGUpIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiYGNoaWxkcmVuYCBzaG91bGQgYmUgYFNlbGVjdC5PcHRpb25gIG9yIGBTZWxlY3QuT3B0R3JvdXBgIGluc3RlYWQgb2YgYFwiLmNvbmNhdChpbnZhbGlkYXRlQ2hpbGRUeXBlLmRpc3BsYXlOYW1lIHx8IGludmFsaWRhdGVDaGlsZFR5cGUubmFtZSB8fCBpbnZhbGlkYXRlQ2hpbGRUeXBlLCBcImAuXCIpKTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKGlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCwgJ2BpbnB1dFZhbHVlYCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBzZWFyY2hWYWx1ZWAgaW5zdGVhZC4nKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3YXJuaW5nUHJvcHM7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVtbyhnZXRWYWx1ZSwgY29uZGl0aW9uLCBzaG91bGRVcGRhdGUpIHtcbiAgdmFyIGNhY2hlUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcblxuICBpZiAoISgndmFsdWUnIGluIGNhY2hlUmVmLmN1cnJlbnQpIHx8IHNob3VsZFVwZGF0ZShjYWNoZVJlZi5jdXJyZW50LmNvbmRpdGlvbiwgY29uZGl0aW9uKSkge1xuICAgIGNhY2hlUmVmLmN1cnJlbnQudmFsdWUgPSBnZXRWYWx1ZSgpO1xuICAgIGNhY2hlUmVmLmN1cnJlbnQuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlUmVmLmN1cnJlbnQudmFsdWU7XG59IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb250cm9sbGVkU3RhdGUoZGVmYXVsdFN0YXRlVmFsdWUsIG9wdGlvbikge1xuICB2YXIgX3JlZiA9IG9wdGlvbiB8fCB7fSxcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWYuZGVmYXVsdFZhbHVlLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgcG9zdFN0YXRlID0gX3JlZi5wb3N0U3RhdGU7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0VmFsdWUoKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRTdGF0ZVZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFN0YXRlVmFsdWUoKSA6IGRlZmF1bHRTdGF0ZVZhbHVlO1xuICB9KSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgaW5uZXJWYWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbm5lclZhbHVlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgbWVyZ2VkVmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBpbm5lclZhbHVlO1xuXG4gIGlmIChwb3N0U3RhdGUpIHtcbiAgICBtZXJnZWRWYWx1ZSA9IHBvc3RTdGF0ZShtZXJnZWRWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyQ2hhbmdlKG5ld1ZhbHVlKSB7XG4gICAgc2V0SW5uZXJWYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICBpZiAobWVyZ2VkVmFsdWUgIT09IG5ld1ZhbHVlICYmIG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgbWVyZ2VkVmFsdWUpO1xuICAgIH1cbiAgfSAvLyBFZmZlY3Qgb2YgcmVzZXQgdmFsdWUgdG8gYHVuZGVmaW5lZGBcblxuXG4gIHZhciBmaXJzdFJlbmRlclJlZiA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmlyc3RSZW5kZXJSZWYuY3VycmVudCkge1xuICAgICAgZmlyc3RSZW5kZXJSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRJbm5lclZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gW21lcmdlZFZhbHVlLCB0cmlnZ2VyQ2hhbmdlXTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGF0dHJpYnV0ZXMgPSBcImFjY2VwdCBhY2NlcHRDaGFyc2V0IGFjY2Vzc0tleSBhY3Rpb24gYWxsb3dGdWxsU2NyZWVuIGFsbG93VHJhbnNwYXJlbmN5XFxuICAgIGFsdCBhc3luYyBhdXRvQ29tcGxldGUgYXV0b0ZvY3VzIGF1dG9QbGF5IGNhcHR1cmUgY2VsbFBhZGRpbmcgY2VsbFNwYWNpbmcgY2hhbGxlbmdlXFxuICAgIGNoYXJTZXQgY2hlY2tlZCBjbGFzc0lEIGNsYXNzTmFtZSBjb2xTcGFuIGNvbHMgY29udGVudCBjb250ZW50RWRpdGFibGUgY29udGV4dE1lbnVcXG4gICAgY29udHJvbHMgY29vcmRzIGNyb3NzT3JpZ2luIGRhdGEgZGF0ZVRpbWUgZGVmYXVsdCBkZWZlciBkaXIgZGlzYWJsZWQgZG93bmxvYWQgZHJhZ2dhYmxlXFxuICAgIGVuY1R5cGUgZm9ybSBmb3JtQWN0aW9uIGZvcm1FbmNUeXBlIGZvcm1NZXRob2QgZm9ybU5vVmFsaWRhdGUgZm9ybVRhcmdldCBmcmFtZUJvcmRlclxcbiAgICBoZWFkZXJzIGhlaWdodCBoaWRkZW4gaGlnaCBocmVmIGhyZWZMYW5nIGh0bWxGb3IgaHR0cEVxdWl2IGljb24gaWQgaW5wdXRNb2RlIGludGVncml0eVxcbiAgICBpcyBrZXlQYXJhbXMga2V5VHlwZSBraW5kIGxhYmVsIGxhbmcgbGlzdCBsb29wIGxvdyBtYW5pZmVzdCBtYXJnaW5IZWlnaHQgbWFyZ2luV2lkdGggbWF4IG1heExlbmd0aCBtZWRpYVxcbiAgICBtZWRpYUdyb3VwIG1ldGhvZCBtaW4gbWluTGVuZ3RoIG11bHRpcGxlIG11dGVkIG5hbWUgbm9WYWxpZGF0ZSBub25jZSBvcGVuXFxuICAgIG9wdGltdW0gcGF0dGVybiBwbGFjZWhvbGRlciBwb3N0ZXIgcHJlbG9hZCByYWRpb0dyb3VwIHJlYWRPbmx5IHJlbCByZXF1aXJlZFxcbiAgICByZXZlcnNlZCByb2xlIHJvd1NwYW4gcm93cyBzYW5kYm94IHNjb3BlIHNjb3BlZCBzY3JvbGxpbmcgc2VhbWxlc3Mgc2VsZWN0ZWRcXG4gICAgc2hhcGUgc2l6ZSBzaXplcyBzcGFuIHNwZWxsQ2hlY2sgc3JjIHNyY0RvYyBzcmNMYW5nIHNyY1NldCBzdGFydCBzdGVwIHN0eWxlXFxuICAgIHN1bW1hcnkgdGFiSW5kZXggdGFyZ2V0IHRpdGxlIHR5cGUgdXNlTWFwIHZhbHVlIHdpZHRoIHdtb2RlIHdyYXBcIjtcbnZhciBldmVudHNOYW1lID0gXCJvbkNvcHkgb25DdXQgb25QYXN0ZSBvbkNvbXBvc2l0aW9uRW5kIG9uQ29tcG9zaXRpb25TdGFydCBvbkNvbXBvc2l0aW9uVXBkYXRlIG9uS2V5RG93blxcbiAgICBvbktleVByZXNzIG9uS2V5VXAgb25Gb2N1cyBvbkJsdXIgb25DaGFuZ2Ugb25JbnB1dCBvblN1Ym1pdCBvbkNsaWNrIG9uQ29udGV4dE1lbnUgb25Eb3VibGVDbGlja1xcbiAgICBvbkRyYWcgb25EcmFnRW5kIG9uRHJhZ0VudGVyIG9uRHJhZ0V4aXQgb25EcmFnTGVhdmUgb25EcmFnT3ZlciBvbkRyYWdTdGFydCBvbkRyb3Agb25Nb3VzZURvd25cXG4gICAgb25Nb3VzZUVudGVyIG9uTW91c2VMZWF2ZSBvbk1vdXNlTW92ZSBvbk1vdXNlT3V0IG9uTW91c2VPdmVyIG9uTW91c2VVcCBvblNlbGVjdCBvblRvdWNoQ2FuY2VsXFxuICAgIG9uVG91Y2hFbmQgb25Ub3VjaE1vdmUgb25Ub3VjaFN0YXJ0IG9uU2Nyb2xsIG9uV2hlZWwgb25BYm9ydCBvbkNhblBsYXkgb25DYW5QbGF5VGhyb3VnaFxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlIG9uRW1wdGllZCBvbkVuY3J5cHRlZCBvbkVuZGVkIG9uRXJyb3Igb25Mb2FkZWREYXRhIG9uTG9hZGVkTWV0YWRhdGFcXG4gICAgb25Mb2FkU3RhcnQgb25QYXVzZSBvblBsYXkgb25QbGF5aW5nIG9uUHJvZ3Jlc3Mgb25SYXRlQ2hhbmdlIG9uU2Vla2VkIG9uU2Vla2luZyBvblN0YWxsZWQgb25TdXNwZW5kIG9uVGltZVVwZGF0ZSBvblZvbHVtZUNoYW5nZSBvbldhaXRpbmcgb25Mb2FkIG9uRXJyb3JcIjtcbnZhciBwcm9wTGlzdCA9IFwiXCIuY29uY2F0KGF0dHJpYnV0ZXMsIFwiIFwiKS5jb25jYXQoZXZlbnRzTmFtZSkuc3BsaXQoL1tcXHNcXG5dKy8pO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbnZhciBhcmlhUHJlZml4ID0gJ2FyaWEtJztcbnZhciBkYXRhUHJlZml4ID0gJ2RhdGEtJztcblxuZnVuY3Rpb24gbWF0Y2goa2V5LCBwcmVmaXgpIHtcbiAgcmV0dXJuIGtleS5pbmRleE9mKHByZWZpeCkgPT09IDA7XG59XG4vKipcbiAqIFBpY2tlciBwcm9wcyBmcm9tIGV4aXN0IHByb3BzIHdpdGggZmlsdGVyXG4gKiBAcGFyYW0gcHJvcHMgUGFzc2VkIHByb3BzXG4gKiBAcGFyYW0gYXJpYU9ubHkgYm9vbGVhbiB8IHsgYXJpYT86IGJvb2xlYW47IGRhdGE/OiBib29sZWFuOyBhdHRyPzogYm9vbGVhbjsgfSBmaWx0ZXIgY29uZmlnXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaWNrQXR0cnMocHJvcHMpIHtcbiAgdmFyIGFyaWFPbmx5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIG1lcmdlZENvbmZpZztcblxuICBpZiAoYXJpYU9ubHkgPT09IGZhbHNlKSB7XG4gICAgbWVyZ2VkQ29uZmlnID0ge1xuICAgICAgYXJpYTogdHJ1ZSxcbiAgICAgIGRhdGE6IHRydWUsXG4gICAgICBhdHRyOiB0cnVlXG4gICAgfTtcbiAgfSBlbHNlIGlmIChhcmlhT25seSA9PT0gdHJ1ZSkge1xuICAgIG1lcmdlZENvbmZpZyA9IHtcbiAgICAgIGFyaWE6IHRydWVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZENvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIGFyaWFPbmx5KTtcbiAgfVxuXG4gIHZhciBhdHRycyA9IHt9O1xuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCAvLyBBcmlhXG4gICAgbWVyZ2VkQ29uZmlnLmFyaWEgJiYgKGtleSA9PT0gJ3JvbGUnIHx8IG1hdGNoKGtleSwgYXJpYVByZWZpeCkpIHx8IC8vIERhdGFcbiAgICBtZXJnZWRDb25maWcuZGF0YSAmJiBtYXRjaChrZXksIGRhdGFQcmVmaXgpIHx8IC8vIEF0dHJcbiAgICBtZXJnZWRDb25maWcuYXR0ciAmJiBwcm9wTGlzdC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBhdHRyc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYXR0cnM7XG59IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyYy1yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG4vKipcbiAqIEZpbGwgY29tcG9uZW50IHRvIHByb3ZpZGVkIHRoZSBzY3JvbGwgY29udGVudCByZWFsIGhlaWdodC5cbiAqL1xuXG52YXIgRmlsbGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgaGVpZ2h0ID0gX3JlZi5oZWlnaHQsXG4gICAgICBvZmZzZXQgPSBfcmVmLm9mZnNldCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgb25Jbm5lclJlc2l6ZSA9IF9yZWYub25Jbm5lclJlc2l6ZTtcbiAgdmFyIG91dGVyU3R5bGUgPSB7fTtcbiAgdmFyIGlubmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH07XG5cbiAgaWYgKG9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgb3V0ZXJTdHlsZSA9IHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9O1xuICAgIGlubmVyU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGlubmVyU3R5bGUpLCB7fSwge1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoXCIuY29uY2F0KG9mZnNldCwgXCJweClcIiksXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogb3V0ZXJTdHlsZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZShfcmVmMikge1xuICAgICAgdmFyIG9mZnNldEhlaWdodCA9IF9yZWYyLm9mZnNldEhlaWdodDtcblxuICAgICAgaWYgKG9mZnNldEhlaWdodCAmJiBvbklubmVyUmVzaXplKSB7XG4gICAgICAgIG9uSW5uZXJSZXNpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogaW5uZXJTdHlsZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhvbGRlci1pbm5lclwiKSwgcHJlZml4Q2xzKSksXG4gICAgcmVmOiByZWZcbiAgfSwgY2hpbGRyZW4pKSk7XG59KTtcbkZpbGxlci5kaXNwbGF5TmFtZSA9ICdGaWxsZXInO1xuZXhwb3J0IGRlZmF1bHQgRmlsbGVyOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHNldFJlZiA9IF9yZWYuc2V0UmVmO1xuICB2YXIgcmVmRnVuYyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgc2V0UmVmKG5vZGUpO1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgcmVmOiByZWZGdW5jXG4gIH0pO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmlsbGVyIGZyb20gJy4vRmlsbGVyJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnLi9TY3JvbGxCYXInO1xuaW1wb3J0IHVzZUNoaWxkcmVuIGZyb20gJy4vaG9va3MvdXNlQ2hpbGRyZW4nO1xuaW1wb3J0IHVzZUhlaWdodHMgZnJvbSAnLi9ob29rcy91c2VIZWlnaHRzJztcbmltcG9ydCB1c2VTY3JvbGxUbyBmcm9tICcuL2hvb2tzL3VzZVNjcm9sbFRvJztcbmltcG9ydCB1c2VEaWZmSXRlbSBmcm9tICcuL2hvb2tzL3VzZURpZmZJdGVtJztcbmltcG9ydCB1c2VGcmFtZVdoZWVsIGZyb20gJy4vaG9va3MvdXNlRnJhbWVXaGVlbCc7XG5pbXBvcnQgdXNlTW9iaWxlVG91Y2hNb3ZlIGZyb20gJy4vaG9va3MvdXNlTW9iaWxlVG91Y2hNb3ZlJztcbmltcG9ydCB1c2VPcmlnaW5TY3JvbGwgZnJvbSAnLi9ob29rcy91c2VPcmlnaW5TY3JvbGwnO1xudmFyIEVNUFRZX0RBVEEgPSBbXTtcbnZhciBTY3JvbGxTdHlsZSA9IHtcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIG92ZXJmbG93QW5jaG9yOiAnbm9uZSdcbn07XG5leHBvcnQgZnVuY3Rpb24gUmF3TGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXZpcnR1YWwtbGlzdCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgaXRlbUhlaWdodCA9IHByb3BzLml0ZW1IZWlnaHQsXG4gICAgICBfcHJvcHMkZnVsbEhlaWdodCA9IHByb3BzLmZ1bGxIZWlnaHQsXG4gICAgICBmdWxsSGVpZ2h0ID0gX3Byb3BzJGZ1bGxIZWlnaHQgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkZnVsbEhlaWdodCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpdGVtS2V5ID0gcHJvcHMuaXRlbUtleSxcbiAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG9uU2Nyb2xsID0gcHJvcHMub25TY3JvbGwsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImhlaWdodFwiLCBcIml0ZW1IZWlnaHRcIiwgXCJmdWxsSGVpZ2h0XCIsIFwic3R5bGVcIiwgXCJkYXRhXCIsIFwiY2hpbGRyZW5cIiwgXCJpdGVtS2V5XCIsIFwidmlydHVhbFwiLCBcImNvbXBvbmVudFwiLCBcIm9uU2Nyb2xsXCJdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgdXNlVmlydHVhbCA9ICEhKHZpcnR1YWwgIT09IGZhbHNlICYmIGhlaWdodCAmJiBpdGVtSGVpZ2h0KTtcbiAgdmFyIGluVmlydHVhbCA9IHVzZVZpcnR1YWwgJiYgZGF0YSAmJiBpdGVtSGVpZ2h0ICogZGF0YS5sZW5ndGggPiBoZWlnaHQ7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzY3JvbGxUb3AgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2Nyb2xsVG9wID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHNjcm9sbE1vdmluZyA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTY3JvbGxNb3ZpbmcgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBtZXJnZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lKTtcbiAgdmFyIG1lcmdlZERhdGEgPSBkYXRhIHx8IEVNUFRZX0RBVEE7XG4gIHZhciBjb21wb25lbnRSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGZpbGxlcklubmVyUmVmID0gdXNlUmVmKCk7XG4gIHZhciBzY3JvbGxCYXJSZWYgPSB1c2VSZWYoKTsgLy8gSGFjayBvbiBzY3JvbGxiYXIgdG8gZW5hYmxlIGZsYXNoIGNhbGxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJdGVtIEtleSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGdldEtleSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtS2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlbUtleShpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtW2l0ZW1LZXldO1xuICB9LCBbaXRlbUtleV0pO1xuICB2YXIgc2hhcmVkQ29uZmlnID0ge1xuICAgIGdldEtleTogZ2V0S2V5XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNjcm9sbCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIHN5bmNTY3JvbGxUb3AobmV3VG9wKSB7XG4gICAgc2V0U2Nyb2xsVG9wKGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXdUb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSBuZXdUb3Aob3JpZ2luKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbmV3VG9wO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWxpZ25lZFRvcCA9IGtlZXBJblJhbmdlKHZhbHVlKTtcbiAgICAgIGNvbXBvbmVudFJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IGFsaWduZWRUb3A7XG4gICAgICByZXR1cm4gYWxpZ25lZFRvcDtcbiAgICB9KTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBMZWdhY3kgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gUHV0IHJlZiBoZXJlIHNpbmNlIHRoZSByYW5nZSBpcyBnZW5lcmF0ZSBieSBmb2xsb3dcblxuXG4gIHZhciByYW5nZVJlZiA9IHVzZVJlZih7XG4gICAgc3RhcnQ6IDAsXG4gICAgZW5kOiBtZXJnZWREYXRhLmxlbmd0aFxuICB9KTtcbiAgdmFyIGRpZmZJdGVtUmVmID0gdXNlUmVmKCk7XG5cbiAgdmFyIF91c2VEaWZmSXRlbSA9IHVzZURpZmZJdGVtKG1lcmdlZERhdGEsIGdldEtleSksXG4gICAgICBfdXNlRGlmZkl0ZW0yID0gX3NsaWNlZFRvQXJyYXkoX3VzZURpZmZJdGVtLCAxKSxcbiAgICAgIGRpZmZJdGVtID0gX3VzZURpZmZJdGVtMlswXTtcblxuICBkaWZmSXRlbVJlZi5jdXJyZW50ID0gZGlmZkl0ZW07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlaWdodCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBfdXNlSGVpZ2h0cyA9IHVzZUhlaWdodHMoZ2V0S2V5LCBudWxsLCBudWxsKSxcbiAgICAgIF91c2VIZWlnaHRzMiA9IF9zbGljZWRUb0FycmF5KF91c2VIZWlnaHRzLCA0KSxcbiAgICAgIHNldEluc3RhbmNlUmVmID0gX3VzZUhlaWdodHMyWzBdLFxuICAgICAgY29sbGVjdEhlaWdodCA9IF91c2VIZWlnaHRzMlsxXSxcbiAgICAgIGhlaWdodHMgPSBfdXNlSGVpZ2h0czJbMl0sXG4gICAgICBoZWlnaHRVcGRhdGVkTWFyayA9IF91c2VIZWlnaHRzMlszXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gVmlzaWJsZSBDYWxjdWxhdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXVzZVZpcnR1YWwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjcm9sbEhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgZW5kOiBtZXJnZWREYXRhLmxlbmd0aCAtIDEsXG4gICAgICAgIG9mZnNldDogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH0gLy8gQWx3YXlzIHVzZSB2aXJ0dWFsIHNjcm9sbCBiYXIgaW4gYXZvaWQgc2hha2luZ1xuXG5cbiAgICBpZiAoIWluVmlydHVhbCkge1xuICAgICAgdmFyIF9maWxsZXJJbm5lclJlZiRjdXJyZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiAoKF9maWxsZXJJbm5lclJlZiRjdXJyZSA9IGZpbGxlcklubmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9maWxsZXJJbm5lclJlZiRjdXJyZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZpbGxlcklubmVyUmVmJGN1cnJlLm9mZnNldEhlaWdodCkgfHwgMCxcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogbWVyZ2VkRGF0YS5sZW5ndGggLSAxLFxuICAgICAgICBvZmZzZXQ6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgaXRlbVRvcCA9IDA7XG4gICAgdmFyIHN0YXJ0SW5kZXg7XG4gICAgdmFyIHN0YXJ0T2Zmc2V0O1xuICAgIHZhciBlbmRJbmRleDtcbiAgICB2YXIgZGF0YUxlbiA9IG1lcmdlZERhdGEubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBpdGVtID0gbWVyZ2VkRGF0YVtpXTtcbiAgICAgIHZhciBrZXkgPSBnZXRLZXkoaXRlbSk7XG4gICAgICB2YXIgY2FjaGVIZWlnaHQgPSBoZWlnaHRzLmdldChrZXkpO1xuICAgICAgdmFyIGN1cnJlbnRJdGVtQm90dG9tID0gaXRlbVRvcCArIChjYWNoZUhlaWdodCA9PT0gdW5kZWZpbmVkID8gaXRlbUhlaWdodCA6IGNhY2hlSGVpZ2h0KTsgLy8gQ2hlY2sgaXRlbSB0b3AgaW4gdGhlIHJhbmdlXG5cbiAgICAgIGlmIChjdXJyZW50SXRlbUJvdHRvbSA+PSBzY3JvbGxUb3AgJiYgc3RhcnRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggPSBpO1xuICAgICAgICBzdGFydE9mZnNldCA9IGl0ZW1Ub3A7XG4gICAgICB9IC8vIENoZWNrIGl0ZW0gYm90dG9tIGluIHRoZSByYW5nZS4gV2Ugd2lsbCByZW5kZXIgYWRkaXRpb25hbCBvbmUgaXRlbSBmb3IgbW90aW9uIHVzYWdlXG5cblxuICAgICAgaWYgKGN1cnJlbnRJdGVtQm90dG9tID4gc2Nyb2xsVG9wICsgaGVpZ2h0ICYmIGVuZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5kSW5kZXggPSBpO1xuICAgICAgfVxuXG4gICAgICBpdGVtVG9wID0gY3VycmVudEl0ZW1Cb3R0b207XG4gICAgfSAvLyBGYWxsYmFjayB0byBub3JtYWwgaWYgbm90IG1hdGNoLiBUaGlzIGNvZGUgc2hvdWxkIG5ldmVyIHJlYWNoXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdGFydEluZGV4ID0gMDtcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kSW5kZXggPSBtZXJnZWREYXRhLmxlbmd0aCAtIDE7XG4gICAgfSAvLyBHaXZlIGNhY2hlIHRvIGltcHJvdmUgc2Nyb2xsIGV4cGVyaWVuY2VcblxuXG4gICAgZW5kSW5kZXggPSBNYXRoLm1pbihlbmRJbmRleCArIDEsIG1lcmdlZERhdGEubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsSGVpZ2h0OiBpdGVtVG9wLFxuICAgICAgc3RhcnQ6IHN0YXJ0SW5kZXgsXG4gICAgICBlbmQ6IGVuZEluZGV4LFxuICAgICAgb2Zmc2V0OiBzdGFydE9mZnNldFxuICAgIH07XG4gIH0sIFtpblZpcnR1YWwsIHVzZVZpcnR1YWwsIHNjcm9sbFRvcCwgbWVyZ2VkRGF0YSwgaGVpZ2h0VXBkYXRlZE1hcmssIGhlaWdodF0pLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gX1JlYWN0JHVzZU1lbW8uc2Nyb2xsSGVpZ2h0LFxuICAgICAgc3RhcnQgPSBfUmVhY3QkdXNlTWVtby5zdGFydCxcbiAgICAgIGVuZCA9IF9SZWFjdCR1c2VNZW1vLmVuZCxcbiAgICAgIG9mZnNldCA9IF9SZWFjdCR1c2VNZW1vLm9mZnNldDtcblxuICByYW5nZVJlZi5jdXJyZW50LnN0YXJ0ID0gc3RhcnQ7XG4gIHJhbmdlUmVmLmN1cnJlbnQuZW5kID0gZW5kOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEluIFJhbmdlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgbWF4U2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0O1xuICB2YXIgbWF4U2Nyb2xsSGVpZ2h0UmVmID0gdXNlUmVmKG1heFNjcm9sbEhlaWdodCk7XG4gIG1heFNjcm9sbEhlaWdodFJlZi5jdXJyZW50ID0gbWF4U2Nyb2xsSGVpZ2h0O1xuXG4gIGZ1bmN0aW9uIGtlZXBJblJhbmdlKG5ld1Njcm9sbFRvcCkge1xuICAgIHZhciBuZXdUb3AgPSBuZXdTY3JvbGxUb3A7XG5cbiAgICBpZiAoIU51bWJlci5pc05hTihtYXhTY3JvbGxIZWlnaHRSZWYuY3VycmVudCkpIHtcbiAgICAgIG5ld1RvcCA9IE1hdGgubWluKG5ld1RvcCwgbWF4U2Nyb2xsSGVpZ2h0UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIG5ld1RvcCA9IE1hdGgubWF4KG5ld1RvcCwgMCk7XG4gICAgcmV0dXJuIG5ld1RvcDtcbiAgfVxuXG4gIHZhciBpc1Njcm9sbEF0VG9wID0gc2Nyb2xsVG9wIDw9IDA7XG4gIHZhciBpc1Njcm9sbEF0Qm90dG9tID0gc2Nyb2xsVG9wID49IG1heFNjcm9sbEhlaWdodDtcbiAgdmFyIG9yaWdpblNjcm9sbCA9IHVzZU9yaWdpblNjcm9sbChpc1Njcm9sbEF0VG9wLCBpc1Njcm9sbEF0Qm90dG9tKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2Nyb2xsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gb25TY3JvbGxCYXIobmV3U2Nyb2xsVG9wKSB7XG4gICAgdmFyIG5ld1RvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICBzeW5jU2Nyb2xsVG9wKG5ld1RvcCk7XG4gIH0gLy8gV2hlbiBkYXRhIHNpemUgcmVkdWNlLiBJdCBtYXkgdHJpZ2dlciBuYXRpdmUgc2Nyb2xsIGV2ZW50IGJhY2sgdG8gZml0IHNjcm9sbCBwb3NpdGlvblxuXG5cbiAgZnVuY3Rpb24gb25GYWxsYmFja1Njcm9sbChlKSB7XG4gICAgdmFyIG5ld1Njcm9sbFRvcCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cbiAgICBpZiAobmV3U2Nyb2xsVG9wICE9PSBzY3JvbGxUb3ApIHtcbiAgICAgIHN5bmNTY3JvbGxUb3AobmV3U2Nyb2xsVG9wKTtcbiAgICB9IC8vIFRyaWdnZXIgb3JpZ2luIG9uU2Nyb2xsXG5cblxuICAgIG9uU2Nyb2xsID09PSBudWxsIHx8IG9uU2Nyb2xsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblNjcm9sbChlKTtcbiAgfSAvLyBTaW5jZSB0aGlzIGFkZGVkIGluIGdsb2JhbCxzaG91bGQgdXNlIHJlZiB0byBrZWVwIHVwZGF0ZVxuXG5cbiAgdmFyIF91c2VGcmFtZVdoZWVsID0gdXNlRnJhbWVXaGVlbCh1c2VWaXJ0dWFsLCBpc1Njcm9sbEF0VG9wLCBpc1Njcm9sbEF0Qm90dG9tLCBmdW5jdGlvbiAob2Zmc2V0WSkge1xuICAgIHN5bmNTY3JvbGxUb3AoZnVuY3Rpb24gKHRvcCkge1xuICAgICAgdmFyIG5ld1RvcCA9IHRvcCArIG9mZnNldFk7XG4gICAgICByZXR1cm4gbmV3VG9wO1xuICAgIH0pO1xuICB9KSxcbiAgICAgIF91c2VGcmFtZVdoZWVsMiA9IF9zbGljZWRUb0FycmF5KF91c2VGcmFtZVdoZWVsLCAyKSxcbiAgICAgIG9uUmF3V2hlZWwgPSBfdXNlRnJhbWVXaGVlbDJbMF0sXG4gICAgICBvbkZpcmVGb3hTY3JvbGwgPSBfdXNlRnJhbWVXaGVlbDJbMV07IC8vIE1vYmlsZSB0b3VjaCBtb3ZlXG5cblxuICB1c2VNb2JpbGVUb3VjaE1vdmUodXNlVmlydHVhbCwgY29tcG9uZW50UmVmLCBmdW5jdGlvbiAoZGVsdGFZLCBzbW9vdGhPZmZzZXQpIHtcbiAgICBpZiAob3JpZ2luU2Nyb2xsKGRlbHRhWSwgc21vb3RoT2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uUmF3V2hlZWwoe1xuICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge30sXG4gICAgICBkZWx0YVk6IGRlbHRhWVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaXJlZm94IG9ubHlcbiAgICBmdW5jdGlvbiBvbk1vek1vdXNlUGl4ZWxTY3JvbGwoZSkge1xuICAgICAgaWYgKHVzZVZpcnR1YWwpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25SYXdXaGVlbCk7XG4gICAgY29tcG9uZW50UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBvbkZpcmVGb3hTY3JvbGwpO1xuICAgIGNvbXBvbmVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBvbk1vek1vdXNlUGl4ZWxTY3JvbGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb21wb25lbnRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uUmF3V2hlZWwpO1xuICAgICAgY29tcG9uZW50UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBvbkZpcmVGb3hTY3JvbGwpO1xuICAgICAgY29tcG9uZW50UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignTW96TW91c2VQaXhlbFNjcm9sbCcsIG9uTW96TW91c2VQaXhlbFNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3VzZVZpcnR1YWxdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIHNjcm9sbFRvID0gdXNlU2Nyb2xsVG8oY29tcG9uZW50UmVmLCBtZXJnZWREYXRhLCBoZWlnaHRzLCBpdGVtSGVpZ2h0LCBnZXRLZXksIGNvbGxlY3RIZWlnaHQsIHN5bmNTY3JvbGxUb3AsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Njcm9sbEJhclJlZiRjdXJyZW50O1xuXG4gICAgKF9zY3JvbGxCYXJSZWYkY3VycmVudCA9IHNjcm9sbEJhclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfc2Nyb2xsQmFyUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zY3JvbGxCYXJSZWYkY3VycmVudC5kZWxheUhpZGRlbigpO1xuICB9KTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsVG86IHNjcm9sbFRvXG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBsaXN0Q2hpbGRyZW4gPSB1c2VDaGlsZHJlbihtZXJnZWREYXRhLCBzdGFydCwgZW5kLCBzZXRJbnN0YW5jZVJlZiwgY2hpbGRyZW4sIHNoYXJlZENvbmZpZyk7XG4gIHZhciBjb21wb25lbnRTdHlsZSA9IG51bGw7XG5cbiAgaWYgKGhlaWdodCkge1xuICAgIGNvbXBvbmVudFN0eWxlID0gX29iamVjdFNwcmVhZChfZGVmaW5lUHJvcGVydHkoe30sIGZ1bGxIZWlnaHQgPyAnaGVpZ2h0JyA6ICdtYXhIZWlnaHQnLCBoZWlnaHQpLCBTY3JvbGxTdHlsZSk7XG5cbiAgICBpZiAodXNlVmlydHVhbCkge1xuICAgICAgY29tcG9uZW50U3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgICAgIGlmIChzY3JvbGxNb3ZpbmcpIHtcbiAgICAgICAgY29tcG9uZW50U3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9KSxcbiAgICBjbGFzc05hbWU6IG1lcmdlZENsYXNzTmFtZVxuICB9LCByZXN0UHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaG9sZGVyXCIpLFxuICAgIHN0eWxlOiBjb21wb25lbnRTdHlsZSxcbiAgICByZWY6IGNvbXBvbmVudFJlZixcbiAgICBvblNjcm9sbDogb25GYWxsYmFja1Njcm9sbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGaWxsZXIsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBoZWlnaHQ6IHNjcm9sbEhlaWdodCxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBvbklubmVyUmVzaXplOiBjb2xsZWN0SGVpZ2h0LFxuICAgIHJlZjogZmlsbGVySW5uZXJSZWZcbiAgfSwgbGlzdENoaWxkcmVuKSksIHVzZVZpcnR1YWwgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQmFyLCB7XG4gICAgcmVmOiBzY3JvbGxCYXJSZWYsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgc2Nyb2xsSGVpZ2h0OiBzY3JvbGxIZWlnaHQsXG4gICAgY291bnQ6IG1lcmdlZERhdGEubGVuZ3RoLFxuICAgIG9uU2Nyb2xsOiBvblNjcm9sbEJhcixcbiAgICBvblN0YXJ0TW92ZTogZnVuY3Rpb24gb25TdGFydE1vdmUoKSB7XG4gICAgICBzZXRTY3JvbGxNb3ZpbmcodHJ1ZSk7XG4gICAgfSxcbiAgICBvblN0b3BNb3ZlOiBmdW5jdGlvbiBvblN0b3BNb3ZlKCkge1xuICAgICAgc2V0U2Nyb2xsTW92aW5nKGZhbHNlKTtcbiAgICB9XG4gIH0pKTtcbn1cbnZhciBMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoUmF3TGlzdCk7XG5MaXN0LmRpc3BsYXlOYW1lID0gJ0xpc3QnO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbnZhciBNSU5fU0laRSA9IDIwO1xuXG5mdW5jdGlvbiBnZXRQYWdlWShlKSB7XG4gIHJldHVybiAndG91Y2hlcycgaW4gZSA/IGUudG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG59XG5cbnZhciBTY3JvbGxCYXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNjcm9sbEJhciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTY3JvbGxCYXIpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbEJhcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsQmFyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMubW92ZVJhZiA9IG51bGw7XG4gICAgX3RoaXMuc2Nyb2xsYmFyUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnRodW1iUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnZpc2libGVUaW1lb3V0ID0gbnVsbDtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2VZOiBudWxsLFxuICAgICAgc3RhcnRUb3A6IG51bGwsXG4gICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5kZWxheUhpZGRlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChfdGhpcy52aXNpYmxlVGltZW91dCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnZpc2libGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblNjcm9sbGJhclRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbnRhaW5lck1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09IENsZWFuID09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAgIF90aGlzLnBhdGNoRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMub25Nb3VzZVVwKTtcblxuICAgICAgX3RoaXMudGh1bWJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBfdGhpcy5vbk1vdXNlTW92ZSk7XG5cbiAgICAgIF90aGlzLnRodW1iUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5vbk1vdXNlVXApO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgICBfdGhpcy5zY3JvbGxiYXJSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgX3RoaXMub25TY3JvbGxiYXJUb3VjaFN0YXJ0KTtcblxuICAgICAgX3RoaXMudGh1bWJSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgX3RoaXMub25Nb3VzZURvd24pO1xuXG4gICAgICBfdGhpcy50aHVtYlJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcblxuICAgICAgX3RoaXMudGh1bWJSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF90aGlzLm9uTW91c2VVcCk7XG5cbiAgICAgIHJhZi5jYW5jZWwoX3RoaXMubW92ZVJhZik7XG4gICAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gVGh1bWIgPT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uU3RhcnRNb3ZlID0gX3RoaXMucHJvcHMub25TdGFydE1vdmU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IHRydWUsXG4gICAgICAgIHBhZ2VZOiBnZXRQYWdlWShlKSxcbiAgICAgICAgc3RhcnRUb3A6IF90aGlzLmdldFRvcCgpXG4gICAgICB9KTtcblxuICAgICAgb25TdGFydE1vdmUoKTtcblxuICAgICAgX3RoaXMucGF0Y2hFdmVudHMoKTtcblxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgZHJhZ2dpbmcgPSBfdGhpcyRzdGF0ZS5kcmFnZ2luZyxcbiAgICAgICAgICBwYWdlWSA9IF90aGlzJHN0YXRlLnBhZ2VZLFxuICAgICAgICAgIHN0YXJ0VG9wID0gX3RoaXMkc3RhdGUuc3RhcnRUb3A7XG4gICAgICB2YXIgb25TY3JvbGwgPSBfdGhpcy5wcm9wcy5vblNjcm9sbDtcbiAgICAgIHJhZi5jYW5jZWwoX3RoaXMubW92ZVJhZik7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB2YXIgb2Zmc2V0WSA9IGdldFBhZ2VZKGUpIC0gcGFnZVk7XG4gICAgICAgIHZhciBuZXdUb3AgPSBzdGFydFRvcCArIG9mZnNldFk7XG5cbiAgICAgICAgdmFyIGVuYWJsZVNjcm9sbFJhbmdlID0gX3RoaXMuZ2V0RW5hYmxlU2Nyb2xsUmFuZ2UoKTtcblxuICAgICAgICB2YXIgZW5hYmxlSGVpZ2h0UmFuZ2UgPSBfdGhpcy5nZXRFbmFibGVIZWlnaHRSYW5nZSgpO1xuXG4gICAgICAgIHZhciBwdGcgPSBlbmFibGVIZWlnaHRSYW5nZSA/IG5ld1RvcCAvIGVuYWJsZUhlaWdodFJhbmdlIDogMDtcbiAgICAgICAgdmFyIG5ld1Njcm9sbFRvcCA9IE1hdGguY2VpbChwdGcgKiBlbmFibGVTY3JvbGxSYW5nZSk7XG4gICAgICAgIF90aGlzLm1vdmVSYWYgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uU2Nyb2xsKG5ld1Njcm9sbFRvcCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb25TdG9wTW92ZSA9IF90aGlzLnByb3BzLm9uU3RvcE1vdmU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgb25TdG9wTW92ZSgpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT0gQ2FsY3VsYXRlID09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICBfdGhpcy5nZXRTcGluSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMuaGVpZ2h0LFxuICAgICAgICAgIGNvdW50ID0gX3RoaXMkcHJvcHMuY291bnQ7XG4gICAgICB2YXIgYmFzZUhlaWdodCA9IGhlaWdodCAvIGNvdW50ICogMTA7XG4gICAgICBiYXNlSGVpZ2h0ID0gTWF0aC5tYXgoYmFzZUhlaWdodCwgTUlOX1NJWkUpO1xuICAgICAgYmFzZUhlaWdodCA9IE1hdGgubWluKGJhc2VIZWlnaHQsIGhlaWdodCAvIDIpO1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYmFzZUhlaWdodCk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEVuYWJsZVNjcm9sbFJhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF90aGlzJHByb3BzMi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMyLmhlaWdodDtcbiAgICAgIHJldHVybiBzY3JvbGxIZWlnaHQgLSBoZWlnaHQgfHwgMDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0RW5hYmxlSGVpZ2h0UmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gX3RoaXMucHJvcHMuaGVpZ2h0O1xuXG4gICAgICB2YXIgc3BpbkhlaWdodCA9IF90aGlzLmdldFNwaW5IZWlnaHQoKTtcblxuICAgICAgcmV0dXJuIGhlaWdodCAtIHNwaW5IZWlnaHQgfHwgMDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IF90aGlzLnByb3BzLnNjcm9sbFRvcDtcblxuICAgICAgdmFyIGVuYWJsZVNjcm9sbFJhbmdlID0gX3RoaXMuZ2V0RW5hYmxlU2Nyb2xsUmFuZ2UoKTtcblxuICAgICAgdmFyIGVuYWJsZUhlaWdodFJhbmdlID0gX3RoaXMuZ2V0RW5hYmxlSGVpZ2h0UmFuZ2UoKTtcblxuICAgICAgaWYgKHNjcm9sbFRvcCA9PT0gMCB8fCBlbmFibGVTY3JvbGxSYW5nZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHB0ZyA9IHNjcm9sbFRvcCAvIGVuYWJsZVNjcm9sbFJhbmdlO1xuICAgICAgcmV0dXJuIHB0ZyAqIGVuYWJsZUhlaWdodFJhbmdlO1xuICAgIH07IC8vIE5vdCBzaG93IHNjcm9sbGJhciB3aGVuIGhlaWdodCBpcyBsYXJnZSB0aGFuZSBzY3JvbGxIZWlnaHRcblxuXG4gICAgX3RoaXMuZ2V0VmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2aXNpYmxlID0gX3RoaXMuc3RhdGUudmlzaWJsZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczMuaGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF90aGlzJHByb3BzMy5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgIGlmIChoZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZpc2libGU7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY3JvbGxCYXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblNjcm9sbGJhclRvdWNoU3RhcnQpO1xuICAgICAgdGhpcy50aHVtYlJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uTW91c2VEb3duKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMuc2Nyb2xsVG9wICE9PSB0aGlzLnByb3BzLnNjcm9sbFRvcCkge1xuICAgICAgICB0aGlzLmRlbGF5SGlkZGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnZpc2libGVUaW1lb3V0KTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGRyYWdnaW5nID0gdGhpcy5zdGF0ZS5kcmFnZ2luZztcbiAgICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLnByb3BzLnByZWZpeENscztcbiAgICAgIHZhciBzcGluSGVpZ2h0ID0gdGhpcy5nZXRTcGluSGVpZ2h0KCk7XG4gICAgICB2YXIgdG9wID0gdGhpcy5nZXRUb3AoKTtcbiAgICAgIHZhciB2aXNpYmxlID0gdGhpcy5nZXRWaXNpYmxlKCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuc2Nyb2xsYmFyUmVmLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2Nyb2xsYmFyXCIpLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgZGlzcGxheTogdmlzaWJsZSA/IG51bGwgOiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Db250YWluZXJNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VNb3ZlOiB0aGlzLmRlbGF5SGlkZGVuXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogdGhpcy50aHVtYlJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2Nyb2xsYmFyLXRodW1iXCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2Nyb2xsYmFyLXRodW1iLW1vdmluZ1wiKSwgZHJhZ2dpbmcpKSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogc3BpbkhlaWdodCxcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOTksXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNjcm9sbEJhcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgU2Nyb2xsQmFyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vSXRlbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDaGlsZHJlbihsaXN0LCBzdGFydEluZGV4LCBlbmRJbmRleCwgc2V0Tm9kZVJlZiwgcmVuZGVyRnVuYywgX3JlZikge1xuICB2YXIgZ2V0S2V5ID0gX3JlZi5nZXRLZXk7XG4gIHJldHVybiBsaXN0LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4ICsgMSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHZhciBlbGVJbmRleCA9IHN0YXJ0SW5kZXggKyBpbmRleDtcbiAgICB2YXIgbm9kZSA9IHJlbmRlckZ1bmMoaXRlbSwgZWxlSW5kZXgsIHsvLyBzdHlsZTogc3RhdHVzID09PSAnTUVBU1VSRV9TVEFSVCcgPyB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0gOiB7fSxcbiAgICB9KTtcbiAgICB2YXIga2V5ID0gZ2V0S2V5KGl0ZW0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHNldFJlZjogZnVuY3Rpb24gc2V0UmVmKGVsZSkge1xuICAgICAgICByZXR1cm4gc2V0Tm9kZVJlZihpdGVtLCBlbGUpO1xuICAgICAgfVxuICAgIH0sIG5vZGUpO1xuICB9KTtcbn0iLCJmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kTGlzdERpZmZJbmRleCB9IGZyb20gJy4uL3V0aWxzL2FsZ29yaXRobVV0aWwnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlmZkl0ZW0oZGF0YSwgZ2V0S2V5LCBvbkRpZmYpIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBwcmV2RGF0YSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQcmV2RGF0YSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUzLCAyKSxcbiAgICAgIGRpZmZJdGVtID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICAgIHNldERpZmZJdGVtID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWZmID0gZmluZExpc3REaWZmSW5kZXgocHJldkRhdGEgfHwgW10sIGRhdGEgfHwgW10sIGdldEtleSk7XG5cbiAgICBpZiAoKGRpZmYgPT09IG51bGwgfHwgZGlmZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlmZi5pbmRleCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb25EaWZmID09PSBudWxsIHx8IG9uRGlmZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25EaWZmKGRpZmYuaW5kZXgpO1xuICAgICAgc2V0RGlmZkl0ZW0oZGF0YVtkaWZmLmluZGV4XSk7XG4gICAgfVxuXG4gICAgc2V0UHJldkRhdGEoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG4gIHJldHVybiBbZGlmZkl0ZW1dO1xufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5pbXBvcnQgaXNGRiBmcm9tICcuLi91dGlscy9pc0ZpcmVmb3gnO1xuaW1wb3J0IHVzZU9yaWdpblNjcm9sbCBmcm9tICcuL3VzZU9yaWdpblNjcm9sbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGcmFtZVdoZWVsKGluVmlydHVhbCwgaXNTY3JvbGxBdFRvcCwgaXNTY3JvbGxBdEJvdHRvbSwgb25XaGVlbERlbHRhKSB7XG4gIHZhciBvZmZzZXRSZWYgPSB1c2VSZWYoMCk7XG4gIHZhciBuZXh0RnJhbWVSZWYgPSB1c2VSZWYobnVsbCk7IC8vIEZpcmVmb3ggcGF0Y2hcblxuICB2YXIgd2hlZWxWYWx1ZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGlzTW91c2VTY3JvbGxSZWYgPSB1c2VSZWYoZmFsc2UpOyAvLyBTY3JvbGwgc3RhdHVzIHN5bmNcblxuICB2YXIgb3JpZ2luU2Nyb2xsID0gdXNlT3JpZ2luU2Nyb2xsKGlzU2Nyb2xsQXRUb3AsIGlzU2Nyb2xsQXRCb3R0b20pO1xuXG4gIGZ1bmN0aW9uIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBpZiAoIWluVmlydHVhbCkgcmV0dXJuO1xuICAgIHJhZi5jYW5jZWwobmV4dEZyYW1lUmVmLmN1cnJlbnQpO1xuICAgIHZhciBkZWx0YVkgPSBldmVudC5kZWx0YVk7XG4gICAgb2Zmc2V0UmVmLmN1cnJlbnQgKz0gZGVsdGFZO1xuICAgIHdoZWVsVmFsdWVSZWYuY3VycmVudCA9IGRlbHRhWTsgLy8gRG8gbm90aGluZyB3aGVuIHNjcm9sbCBhdCB0aGUgZWRnZSwgU2tpcCBjaGVjayB3aGVuIGlzIGluIHNjcm9sbFxuXG4gICAgaWYgKG9yaWdpblNjcm9sbChkZWx0YVkpKSByZXR1cm47IC8vIFByb3h5IG9mIHNjcm9sbCBldmVudHNcblxuICAgIGlmICghaXNGRikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBuZXh0RnJhbWVSZWYuY3VycmVudCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBQYXRjaCBhIG11bHRpcGxlIGZvciBGaXJlZm94IHRvIGZpeCB3aGVlbCBudW1iZXIgdG9vIHNtYWxsXG4gICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzI2MzcyI2lzc3VlY29tbWVudC02Nzk0NjAyNjZcbiAgICAgIHZhciBwYXRjaE11bHRpcGxlID0gaXNNb3VzZVNjcm9sbFJlZi5jdXJyZW50ID8gMTAgOiAxO1xuICAgICAgb25XaGVlbERlbHRhKG9mZnNldFJlZi5jdXJyZW50ICogcGF0Y2hNdWx0aXBsZSk7XG4gICAgICBvZmZzZXRSZWYuY3VycmVudCA9IDA7XG4gICAgfSk7XG4gIH0gLy8gQSBwYXRjaCBmb3IgZmlyZWZveFxuXG5cbiAgZnVuY3Rpb24gb25GaXJlRm94U2Nyb2xsKGV2ZW50KSB7XG4gICAgaWYgKCFpblZpcnR1YWwpIHJldHVybjtcbiAgICBpc01vdXNlU2Nyb2xsUmVmLmN1cnJlbnQgPSBldmVudC5kZXRhaWwgPT09IHdoZWVsVmFsdWVSZWYuY3VycmVudDtcbiAgfVxuXG4gIHJldHVybiBbb25XaGVlbCwgb25GaXJlRm94U2Nyb2xsXTtcbn0iLCJmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlXCI7XG5pbXBvcnQgQ2FjaGVNYXAgZnJvbSAnLi4vdXRpbHMvQ2FjaGVNYXAnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSGVpZ2h0cyhnZXRLZXksIG9uSXRlbUFkZCwgb25JdGVtUmVtb3ZlKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgdXBkYXRlZE1hcmsgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VXBkYXRlZE1hcmsgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBpbnN0YW5jZVJlZiA9IHVzZVJlZihuZXcgTWFwKCkpO1xuICB2YXIgaGVpZ2h0c1JlZiA9IHVzZVJlZihuZXcgQ2FjaGVNYXAoKSk7XG4gIHZhciBoZWlnaHRVcGRhdGVJZFJlZiA9IHVzZVJlZigwKTtcblxuICBmdW5jdGlvbiBjb2xsZWN0SGVpZ2h0KCkge1xuICAgIGhlaWdodFVwZGF0ZUlkUmVmLmN1cnJlbnQgKz0gMTtcbiAgICB2YXIgY3VycmVudElkID0gaGVpZ2h0VXBkYXRlSWRSZWYuY3VycmVudDtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE9ubHkgY29sbGVjdCB3aGVuIGl0J3MgbGF0ZXN0IGNhbGxcbiAgICAgIGlmIChjdXJyZW50SWQgIT09IGhlaWdodFVwZGF0ZUlkUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdmFyIGh0bWxFbGVtZW50ID0gZmluZERPTU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgdmFyIG9mZnNldEhlaWdodCA9IGh0bWxFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgIGlmIChoZWlnaHRzUmVmLmN1cnJlbnQuZ2V0KGtleSkgIT09IG9mZnNldEhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0c1JlZi5jdXJyZW50LnNldChrZXksIGh0bWxFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTsgLy8gQWx3YXlzIHRyaWdnZXIgdXBkYXRlIG1hcmsgdG8gdGVsbCBwYXJlbnQgdGhhdCBzaG91bGQgcmUtY2FsY3VsYXRlIGhlaWdodHMgd2hlbiByZXNpemVkXG5cbiAgICAgIHNldFVwZGF0ZWRNYXJrKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjICsgMTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VSZWYoaXRlbSwgaW5zdGFuY2UpIHtcbiAgICB2YXIga2V5ID0gZ2V0S2V5KGl0ZW0pO1xuICAgIHZhciBvcmlnaW4gPSBpbnN0YW5jZVJlZi5jdXJyZW50LmdldChrZXkpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZVJlZi5jdXJyZW50LnNldChrZXksIGluc3RhbmNlKTtcbiAgICAgIGNvbGxlY3RIZWlnaHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2VSZWYuY3VycmVudC5kZWxldGUoa2V5KTtcbiAgICB9IC8vIEluc3RhbmNlIGNoYW5nZWRcblxuXG4gICAgaWYgKCFvcmlnaW4gIT09ICFpbnN0YW5jZSkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIG9uSXRlbUFkZCA9PT0gbnVsbCB8fCBvbkl0ZW1BZGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uSXRlbUFkZChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uSXRlbVJlbW92ZSA9PT0gbnVsbCB8fCBvbkl0ZW1SZW1vdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uSXRlbVJlbW92ZShpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3NldEluc3RhbmNlUmVmLCBjb2xsZWN0SGVpZ2h0LCBoZWlnaHRzUmVmLmN1cnJlbnQsIHVwZGF0ZWRNYXJrXTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG52YXIgU01PT1RIX1BURyA9IDE0IC8gMTU7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNb2JpbGVUb3VjaE1vdmUoaW5WaXJ0dWFsLCBsaXN0UmVmLCBjYWxsYmFjaykge1xuICB2YXIgdG91Y2hlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciB0b3VjaFlSZWYgPSB1c2VSZWYoMCk7XG4gIHZhciBlbGVtZW50UmVmID0gdXNlUmVmKG51bGwpOyAvLyBTbW9vdGggc2Nyb2xsXG5cbiAgdmFyIGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgY2xlYW5VcEV2ZW50cztcblxuICB2YXIgb25Ub3VjaE1vdmUgPSBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHRvdWNoZWRSZWYuY3VycmVudCkge1xuICAgICAgdmFyIGN1cnJlbnRZID0gTWF0aC5jZWlsKGUudG91Y2hlc1swXS5wYWdlWSk7XG4gICAgICB2YXIgb2Zmc2V0WSA9IHRvdWNoWVJlZi5jdXJyZW50IC0gY3VycmVudFk7XG4gICAgICB0b3VjaFlSZWYuY3VycmVudCA9IGN1cnJlbnRZO1xuXG4gICAgICBpZiAoY2FsbGJhY2sob2Zmc2V0WSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSAvLyBTbW9vdGggaW50ZXJ2YWxcblxuXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2Zmc2V0WSAqPSBTTU9PVEhfUFRHO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2sob2Zmc2V0WSwgdHJ1ZSkgfHwgTWF0aC5hYnMob2Zmc2V0WSkgPD0gMC4xKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTYpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25Ub3VjaEVuZCA9IGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgdG91Y2hlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgY2xlYW5VcEV2ZW50cygpO1xuICB9O1xuXG4gIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIGNsZWFuVXBFdmVudHMoKTtcblxuICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAxICYmICF0b3VjaGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHRvdWNoZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICB0b3VjaFlSZWYuY3VycmVudCA9IE1hdGguY2VpbChlLnRvdWNoZXNbMF0ucGFnZVkpO1xuICAgICAgZWxlbWVudFJlZi5jdXJyZW50ID0gZS50YXJnZXQ7XG4gICAgICBlbGVtZW50UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZWxlbWVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgfVxuICB9O1xuXG4gIGNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbiBjbGVhblVwRXZlbnRzKCkge1xuICAgIGlmIChlbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGVsZW1lbnRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBlbGVtZW50UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5WaXJ0dWFsKSB7XG4gICAgICBsaXN0UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxpc3RSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICAgIGNsZWFuVXBFdmVudHMoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW2luVmlydHVhbF0pO1xufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoaXNTY3JvbGxBdFRvcCwgaXNTY3JvbGxBdEJvdHRvbSkge1xuICAvLyBEbyBsb2NrIGZvciBhIHdoZWVsIHdoZW4gc2Nyb2xsaW5nXG4gIHZhciBsb2NrUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGxvY2tUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGxvY2tTY3JvbGwoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGxvY2tUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIGxvY2tSZWYuY3VycmVudCA9IHRydWU7XG4gICAgbG9ja1RpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbG9ja1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSwgNTApO1xuICB9IC8vIFBhc3MgdG8gcmVmIHNpbmNlIGdsb2JhbCBhZGQgaXMgaW4gY2xvc3VyZVxuXG5cbiAgdmFyIHNjcm9sbFBpbmdSZWYgPSB1c2VSZWYoe1xuICAgIHRvcDogaXNTY3JvbGxBdFRvcCxcbiAgICBib3R0b206IGlzU2Nyb2xsQXRCb3R0b21cbiAgfSk7XG4gIHNjcm9sbFBpbmdSZWYuY3VycmVudC50b3AgPSBpc1Njcm9sbEF0VG9wO1xuICBzY3JvbGxQaW5nUmVmLmN1cnJlbnQuYm90dG9tID0gaXNTY3JvbGxBdEJvdHRvbTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkZWx0YVkpIHtcbiAgICB2YXIgc21vb3RoT2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgb3JpZ2luU2Nyb2xsID0gLy8gUGFzcyBvcmlnaW4gd2hlZWwgd2hlbiBvbiB0aGUgdG9wXG4gICAgZGVsdGFZIDwgMCAmJiBzY3JvbGxQaW5nUmVmLmN1cnJlbnQudG9wIHx8IC8vIFBhc3Mgb3JpZ2luIHdoZWVsIHdoZW4gb24gdGhlIGJvdHRvbVxuICAgIGRlbHRhWSA+IDAgJiYgc2Nyb2xsUGluZ1JlZi5jdXJyZW50LmJvdHRvbTtcblxuICAgIGlmIChzbW9vdGhPZmZzZXQgJiYgb3JpZ2luU2Nyb2xsKSB7XG4gICAgICAvLyBObyBuZWVkIGxvY2sgYW55bW9yZSB3aGVuIGl0J3Mgc21vb3RoIG9mZnNldCBmcm9tIHRvdWNoTW92ZSBpbnRlcnZhbFxuICAgICAgY2xlYXJUaW1lb3V0KGxvY2tUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgbG9ja1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghb3JpZ2luU2Nyb2xsIHx8IGxvY2tSZWYuY3VycmVudCkge1xuICAgICAgbG9ja1Njcm9sbCgpO1xuICAgIH1cblxuICAgIHJldHVybiAhbG9ja1JlZi5jdXJyZW50ICYmIG9yaWdpblNjcm9sbDtcbiAgfTtcbn0pOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTY3JvbGxUbyhjb250YWluZXJSZWYsIGRhdGEsIGhlaWdodHMsIGl0ZW1IZWlnaHQsIGdldEtleSwgY29sbGVjdEhlaWdodCwgc3luY1Njcm9sbFRvcCwgdHJpZ2dlckZsYXNoKSB7XG4gIHZhciBzY3JvbGxSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAvLyBXaGVuIG5vdCBhcmd1bWVudCBwcm92aWRlZCwgd2UgdGhpbmsgZGV2IG1heSB3YW50IHRvIHNob3cgdGhlIHNjcm9sbGJhclxuICAgIGlmIChhcmcgPT09IG51bGwgfHwgYXJnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyaWdnZXJGbGFzaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gTm9ybWFsIHNjcm9sbCBsb2dpY1xuXG5cbiAgICByYWYuY2FuY2VsKHNjcm9sbFJlZi5jdXJyZW50KTtcblxuICAgIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgICAgc3luY1Njcm9sbFRvcChhcmcpO1xuICAgIH0gZWxzZSBpZiAoYXJnICYmIF90eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBpbmRleDtcbiAgICAgIHZhciBhbGlnbiA9IGFyZy5hbGlnbjtcblxuICAgICAgaWYgKCdpbmRleCcgaW4gYXJnKSB7XG4gICAgICAgIGluZGV4ID0gYXJnLmluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBkYXRhLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBnZXRLZXkoaXRlbSkgPT09IGFyZy5rZXk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgX2FyZyRvZmZzZXQgPSBhcmcub2Zmc2V0LFxuICAgICAgICAgIG9mZnNldCA9IF9hcmckb2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX2FyZyRvZmZzZXQ7IC8vIFdlIHdpbGwgcmV0cnkgMyB0aW1lcyBpbiBjYXNlIGR5bmFtaWMgaGVpZ2h0IHNoYWtpbmdcblxuICAgICAgdmFyIHN5bmNTY3JvbGwgPSBmdW5jdGlvbiBzeW5jU2Nyb2xsKHRpbWVzLCB0YXJnZXRBbGlnbikge1xuICAgICAgICBpZiAodGltZXMgPCAwIHx8ICFjb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB2YXIgbmVlZENvbGxlY3RIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIG5ld1RhcmdldEFsaWduID0gdGFyZ2V0QWxpZ247IC8vIEdvIHRvIG5leHQgZnJhbWUgaWYgaGVpZ2h0IG5vdCBleGlzdFxuXG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VkQWxpZ24gPSB0YXJnZXRBbGlnbiB8fCBhbGlnbjsgLy8gR2V0IHRvcCAmIGJvdHRvbVxuXG4gICAgICAgICAgdmFyIHN0YWNrVG9wID0gMDtcbiAgICAgICAgICB2YXIgaXRlbVRvcCA9IDA7XG4gICAgICAgICAgdmFyIGl0ZW1Cb3R0b20gPSAwO1xuICAgICAgICAgIHZhciBtYXhMZW4gPSBNYXRoLm1pbihkYXRhLmxlbmd0aCwgaW5kZXgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbWF4TGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBnZXRLZXkoZGF0YVtpXSk7XG4gICAgICAgICAgICBpdGVtVG9wID0gc3RhY2tUb3A7XG4gICAgICAgICAgICB2YXIgY2FjaGVIZWlnaHQgPSBoZWlnaHRzLmdldChrZXkpO1xuICAgICAgICAgICAgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyAoY2FjaGVIZWlnaHQgPT09IHVuZGVmaW5lZCA/IGl0ZW1IZWlnaHQgOiBjYWNoZUhlaWdodCk7XG4gICAgICAgICAgICBzdGFja1RvcCA9IGl0ZW1Cb3R0b207XG5cbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleCAmJiBjYWNoZUhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG5lZWRDb2xsZWN0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIFNjcm9sbCB0b1xuXG5cbiAgICAgICAgICB2YXIgdGFyZ2V0VG9wID0gbnVsbDtcblxuICAgICAgICAgIHN3aXRjaCAobWVyZ2VkQWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IGl0ZW1Ub3AgLSBvZmZzZXQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBpdGVtQm90dG9tIC0gaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBjb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIGhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtVG9wIDwgc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgICBuZXdUYXJnZXRBbGlnbiA9ICd0b3AnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbUJvdHRvbSA+IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgbmV3VGFyZ2V0QWxpZ24gPSAnYm90dG9tJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFyZ2V0VG9wICE9PSBudWxsICYmIHRhcmdldFRvcCAhPT0gY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICBzeW5jU2Nyb2xsVG9wKHRhcmdldFRvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFdlIHdpbGwgcmV0cnkgc2luY2UgZWxlbWVudCBtYXkgbm90IHN5bmMgaGVpZ2h0IGFzIGl0IGRlc2NyaWJlZFxuXG5cbiAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChuZWVkQ29sbGVjdEhlaWdodCkge1xuICAgICAgICAgICAgY29sbGVjdEhlaWdodCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN5bmNTY3JvbGwodGltZXMgLSAxLCBuZXdUYXJnZXRBbGlnbik7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgc3luY1Njcm9sbCgzKTtcbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmV4cG9ydCBkZWZhdWx0IExpc3Q7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vLyBGaXJlZm94IGhhcyBsb3cgcGVyZm9ybWFuY2Ugb2YgbWFwLlxudmFyIENhY2hlTWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FjaGVNYXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhY2hlTWFwKTtcblxuICAgIHRoaXMubWFwcyA9IHt9O1xuICAgIHRoaXMubWFwcy5wcm90b3R5cGUgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhY2hlTWFwLCBbe1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIHRoaXMubWFwc1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBzW2tleV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhY2hlTWFwO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDYWNoZU1hcDsiLCIvKipcbiAqIEdldCBpbmRleCB3aXRoIHNwZWNpZmljIHN0YXJ0IGluZGV4IG9uZSBieSBvbmUuIGUuZy5cbiAqIG1pbjogMywgbWF4OiA5LCBzdGFydDogNlxuICpcbiAqIFJldHVybiBpbmRleCBpczpcbiAqIFswXTogNlxuICogWzFdOiA3XG4gKiBbMl06IDVcbiAqIFszXTogOFxuICogWzRdOiA0XG4gKiBbNV06IDlcbiAqIFs2XTogM1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXhCeVN0YXJ0TG9jKG1pbiwgbWF4LCBzdGFydCwgaW5kZXgpIHtcbiAgdmFyIGJlZm9yZUNvdW50ID0gc3RhcnQgLSBtaW47XG4gIHZhciBhZnRlckNvdW50ID0gbWF4IC0gc3RhcnQ7XG4gIHZhciBiYWxhbmNlQ291bnQgPSBNYXRoLm1pbihiZWZvcmVDb3VudCwgYWZ0ZXJDb3VudCkgKiAyOyAvLyBCYWxhbmNlXG5cbiAgaWYgKGluZGV4IDw9IGJhbGFuY2VDb3VudCkge1xuICAgIHZhciBzdGVwSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gMik7XG5cbiAgICBpZiAoaW5kZXggJSAyKSB7XG4gICAgICByZXR1cm4gc3RhcnQgKyBzdGVwSW5kZXggKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFydCAtIHN0ZXBJbmRleDtcbiAgfSAvLyBPbmUgaXMgb3V0IG9mIHJhbmdlXG5cblxuICBpZiAoYmVmb3JlQ291bnQgPiBhZnRlckNvdW50KSB7XG4gICAgcmV0dXJuIHN0YXJ0IC0gKGluZGV4IC0gYWZ0ZXJDb3VudCk7XG4gIH1cblxuICByZXR1cm4gc3RhcnQgKyAoaW5kZXggLSBiZWZvcmVDb3VudCk7XG59XG4vKipcbiAqIFdlIGFzc3VtZSB0aGF0IDIgbGlzdCBoYXMgb25seSAxIGl0ZW0gZGlmZiBhbmQgb3RoZXJzIGtlZXBpbmcgdGhlIG9yZGVyLlxuICogU28gd2UgY2FuIHVzZSBkaWNob3RvbXkgYWxnb3JpdGhtIHRvIGZpbmQgY2hhbmdlZCBvbmUuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMaXN0RGlmZkluZGV4KG9yaWdpbkxpc3QsIHRhcmdldExpc3QsIGdldEtleSkge1xuICB2YXIgb3JpZ2luTGVuID0gb3JpZ2luTGlzdC5sZW5ndGg7XG4gIHZhciB0YXJnZXRMZW4gPSB0YXJnZXRMaXN0Lmxlbmd0aDtcbiAgdmFyIHNob3J0TGlzdDtcbiAgdmFyIGxvbmdMaXN0O1xuXG4gIGlmIChvcmlnaW5MZW4gPT09IDAgJiYgdGFyZ2V0TGVuID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAob3JpZ2luTGVuIDwgdGFyZ2V0TGVuKSB7XG4gICAgc2hvcnRMaXN0ID0gb3JpZ2luTGlzdDtcbiAgICBsb25nTGlzdCA9IHRhcmdldExpc3Q7XG4gIH0gZWxzZSB7XG4gICAgc2hvcnRMaXN0ID0gdGFyZ2V0TGlzdDtcbiAgICBsb25nTGlzdCA9IG9yaWdpbkxpc3Q7XG4gIH1cblxuICB2YXIgbm90RXhpc3RLZXkgPSB7XG4gICAgX19FTVBUWV9JVEVNX186IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRJdGVtS2V5KGl0ZW0pIHtcbiAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBub3RFeGlzdEtleTtcbiAgfSAvLyBMb29wIHRvIGZpbmQgZGlmZiBvbmVcblxuXG4gIHZhciBkaWZmSW5kZXggPSBudWxsO1xuICB2YXIgbXVsdGlwbGUgPSBNYXRoLmFicyhvcmlnaW5MZW4gLSB0YXJnZXRMZW4pICE9PSAxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgc2hvcnRLZXkgPSBnZXRJdGVtS2V5KHNob3J0TGlzdFtpXSk7XG4gICAgdmFyIGxvbmdLZXkgPSBnZXRJdGVtS2V5KGxvbmdMaXN0W2ldKTtcblxuICAgIGlmIChzaG9ydEtleSAhPT0gbG9uZ0tleSkge1xuICAgICAgZGlmZkluZGV4ID0gaTtcbiAgICAgIG11bHRpcGxlID0gbXVsdGlwbGUgfHwgc2hvcnRLZXkgIT09IGdldEl0ZW1LZXkobG9uZ0xpc3RbaSArIDFdKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaWZmSW5kZXggPT09IG51bGwgPyBudWxsIDoge1xuICAgIGluZGV4OiBkaWZmSW5kZXgsXG4gICAgbXVsdGlwbGU6IG11bHRpcGxlXG4gIH07XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgaXNGRiA9ICh0eXBlb2YgbmF2aWdhdG9yID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobmF2aWdhdG9yKSkgPT09ICdvYmplY3QnICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbmV4cG9ydCBkZWZhdWx0IGlzRkY7IiwiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgd2l0aFJlcG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljLmpzeFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5cclxuY29uc3QgTWRSZW5kZXJlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9NYXJrRmRvd25SZW5kZXJlclwiKSk7XHJcblxyXG4vLyDovazkuYnml7bpl7RcclxuaW1wb3J0IHsgZ2V0TGFzdFVwZGF0ZWQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxcIjtcclxuXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXJcIjtcclxuXHJcbi8vIOaYvuekuiBkZXRhaWwg55qE5YaF5a65XHJcbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHsgaXNzdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPE1kUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICDmiZPlvIBJc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIElzc3VlSXRlbSh7IGlzc3VlIH0pIHtcclxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIOS9v+eUqCB1c2VDYWxsYmFjayDnmoTmlrnlvI/mm7TmlrDmiJHku6znmoQgc3RhdGUsIOiAjOS4jeaYr+S+nei1luS6jiB1c2VTdGF0ZSDov5Tlm57nmoTov5nkuKogc3RhdGXvvIzov5nmoLfmiJHku6zlsLHkuI3kvp3otZbkuo7lpJbpg6jlo7DmmI7nmoTlj5jph4/vvIzov5nmoLflsLHpgIPov4fkuobpl63ljIXjgIJcclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbCgoZGV0YWlsKSA9PiAhZGV0YWlsKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IDEwLCB0b3A6IDEwIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzaG93RGV0YWlsID8gXCLmn6XnnItcIiA6IFwi6ZqQ6JePXCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGFlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWwoeyBpc3N1ZXMgfSkge1xyXG4gIGNvbnNvbGUubG9nKGlzc3VlcywgXCIrKysrKysrKysrK1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoKGlzc3VlKSA9PiAoXHJcbiAgICAgICAgICA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG5cclxuICBjb25zdCBpc3N1ZXNSZXNwID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBpc3N1ZXM6IGlzc3Vlc1Jlc3AuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG8oRGV0YWlsLCBcImlzc3Vlc1wiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==