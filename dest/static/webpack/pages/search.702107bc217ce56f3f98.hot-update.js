webpackHotUpdate_N_E("pages/search",{

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: set, get, setArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setArray", function() { return setArray; });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
  maxAge: 1000 * 60 * 60
});
function set(repo) {
  var full_name = repo.full_name;
  cache.set(full_name, repo);
} // full_name:facebook/react

function get(full_name) {
  return cache.get(full_name);
} // 根据数组的一个列表插入

function setArray(repos) {
  repos.forEach(function (repo) {
    return set(repo);
  });
}

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

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ }),

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
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");










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
      lineNumber: 77,
      columnNumber: 38
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
            lineNumber: 126,
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
                lineNumber: 134,
                columnNumber: 21
              }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                lang: item,
                name: item
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 21
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_list__WEBPACK_IMPORTED_MODULE_5___default.a, {
          bordered: true,
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
            className: "jsx-2060511232" + " " + "list-header",
            children: "\u6392\u5E8F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
                lineNumber: 162,
                columnNumber: 21
              }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FilterLink, _objectSpread(_objectSpread({}, querys), {}, {
                sort: item.value,
                order: item.order,
                name: item.name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 21
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 17
            }, _this2);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        span: 18,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h3", {
          className: "jsx-2060511232" + " " + "repos-title",
          children: [repos.total_count, " \u4E2A\u4ED3\u5E93"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, this), repos.items.map(function (repo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_13__["default"], {
            repo: repo
          }, repo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
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
                lineNumber: 209,
                columnNumber: 24
              }, _this2);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
      id: "2060511232",
      children: ".root.jsx-2060511232{padding:20px 0;}.list-header.jsx-2060511232{font-weight:800;font-size:16px;}.repos-title.jsx-2060511232{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-2060511232{padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxzZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc05rQixBQUcwQixBQUdDLEFBSWEsQUFLaEIsYUFDSyxFQVpwQixDQUdpQixhQUlBLEVBSGpCLEFBU0EsYUFMbUIsaUJBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgbWVtbywgaXNWYWxpZEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIFBhZ2luYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLyoqXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+eahOmhueebruW8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobXpobXpnaJcclxuICpcclxuICovXHJcblxyXG5jb25zdCBhcGkgPSByZXF1aXJlKFwiLi4vbGliL2FwaVwiKTtcclxuXHJcbmltcG9ydCBSZXBvIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcG9cIjtcclxuXHJcbmltcG9ydCB7IHNldEFycmF5IH0gZnJvbSBcIi4uL2xpYi9yZXBvLWJhc2ljLWNhY2hlXCI7XHJcblxyXG4vLyDmkJzntKLmnaHku7ZcclxuY29uc3QgTEFOR1VBR0VTID0gW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJUeXBlU2NyaXB0XCIsIFwiSmF2YVwiLCBcIlJ1c3RcIl07XHJcblxyXG5jb25zdCBTT1JUX1RZUEUgPSBbXHJcbiAgeyBuYW1lOiBcIkJlc3QgTWF0Y2hcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IFN0YXJzXCIsIHZhbHVlOiBcInN0YXJzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuICB7IG5hbWU6IFwiTW9zdCBGb3Jrc1wiLCB2YWx1ZTogXCJmb3Jrc1wiLCBvcmRlcjogXCJkZXNjXCIgfSxcclxuICB7IG5hbWU6IFwiRmV3ZXN0IFN0YXJzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImFzY1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBzZWxlY3RlZEl0ZW1TdHlsZSA9IHtcclxuICBib3JkZXJMZWZ0OiBcIjJweCBzb2xpZCAjZTM2MjA5XCIsXHJcbiAgZm9udFdlaWdodDogMTAwLFxyXG59O1xyXG5cclxuLy8g6L+Z5piv5LiA5Liq57qv57K555qE5pa55rOV77yM5pa55rOV5LiA5pem5aOw5piO77yM5LiN5a2Y5Zyo5Lu75L2V5Ymv5L2c55SoXHJcbi8vIGNvbnN0IGRvU2VhcmNoID0gdXNlQ2FsbGJhY2soKGNvbmZpZykgPT4ge1xyXG4vLyAgIFJvdXRlci5wdXNoKHtcclxuLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuLy8gICAgIHF1ZXJ5OiBjb25maWcsXHJcbi8vICAgfSk7XHJcbi8vIH0sIFtdKTtcclxuXHJcbi8vIHJlYWN0IOaYr+S4gOS4que7hOS7tuWMlueahOahhuaetu+8jOe7hOS7tuS+nemdoCBwcm9wcyDlkowgc3RhdGVzIOi/m+ihjOi/kOihjOeahO+8jOWmguaenOiDveWkn+aKveixoeaIkCBwcm9wcyDpgqPkuYjlsLHlj6/ku6Xph43mlrDnlLPmmI7kuIDkuKrnu4Tku7bvvIzorqnnu4Tku7bluK7lv5nkvb/nlKjvvIzlnKjku6PnoIHnu7TmiqTlj5jlvpfmm7TliqDnroDljZVcclxuLy8g6Ziy5q2i5LqG57uE5Lu25Zyo54K55Ye755qE6L+H56iL5Lit6YeN5paw5aOw5piO5riy5p+TXHJcbi8vIEZpbHRlckxpbmsg57uE5Lu25piv57qv57K55qC55o2uIHByb3BzIOi/m+ihjOabtOaWsOeahO+8jOWPr+S7pSBtZW1vIOi/m+ihjOS8mOWMlu+8jOW9kyBwcm9wcyDmsqHmnInov5vooYzlj5jljJbnmoTml7blgJnvvIzov5nkuKrnu4Tku7bkuI3kvJrooqvph43mlrDmuLLmn5NcclxuXHJcbmNvbnN0IHBlcl9wYWdlID0gMjA7XHJcbmNvbnN0IEZpbHRlckxpbmsgPSBtZW1vKCh7IG5hbWUsIHF1ZXJ5LCBsYW5nLCBzb3J0LCBvcmRlciwgcGFnZSB9KSA9PiB7XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xdWVyeT0ke3F1ZXJ5fWA7XHJcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZz0ke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcblxyXG4gIHF1ZXJ5U3RyaW5nICs9IGAmcGVyX3BhZ2U9JHtwZXJfcGFnZX1gO1xyXG4gIC8vIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcblxyXG4gIC8vIGNvbnN0IGRvU2VhcmNoID0gKGNvbmZpZykgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZyxcclxuICAvLyAgICAgICBzb3J0LFxyXG4gIC8vICAgICAgIG9yZGVyLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuICAvLyDms6jmhI8gYSDmoIfnrb7kuI3mlL7pk77mjqXvvIzlvojpmr7ljrvlgZogU0VPIO+8jOWboOS4uiBTRU8g5Lya6Kej5p6QIEhUTUwg55qE5YaF5a65XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2Avc2VhcmNoJHtxdWVyeVN0cmluZ31gfT5cclxuICAgICAgey8qIGlzVmFsaWRFbGVtZW50IOaYr+eUqOadpeWIpOaWreaYr+WQpuS4uuS4gOS4quagh+etviAqL31cclxuICAgICAge2lzVmFsaWRFbGVtZW50KG5hbWUpID8gbmFtZSA6IDxhPntuYW1lfTwvYT59XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4ge307XHJcblxyXG5mdW5jdGlvbiBTZWFyY2goeyByb3V0ZXIsIHJlcG9zIH0pIHtcclxuICBjb25zb2xlLmxvZyhyZXBvcyk7XHJcbiAgLy8g5rOo5oSP6L+Z5Lqb5pWw5o2u6YO95rKh5pyJ5ZyoIHN0YXRlIOmHjOmdouWOu+WIm+W7uu+8jOW4jOacm+aYr+i/meS6m+mhtemdouaYvuekuueahOWGheWuueWujOWFqOagueaNriB1cmwg5p2l5a6a55qE77yM5L2/5b6X5pW05Liq57uE5Lu25piv5Liq5Y+X5o6n55qE57uE5Lu277yM5LiN5Lya5Lqn55Sf5Lu75L2V55qE5Ymv5L2c55So44CCXHJcblxyXG4gIC8vIOivpei3r+eUseaYryB3aXRoUm91dGVyIOS8oOmAkui/h+adpeeahFxyXG4gIGNvbnN0IHsgLi4ucXVlcnlzIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgeyBzb3J0LCBvcmRlciwgbGFuZywgcGFnZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyDmiafooYzov5nkuKrmj5LlhaXvvIzmr4/mrKHpobXpnaLmuLLmn5PnmoTml7blgJnvvIzpg73kvJrljrvosIPnlKjlroNcclxuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xyXG5cclxuICAvLyDnlKjkuo7mi7zmjqXot6/lvoTnmoTmlrnms5VcclxuICAvLyDms6jmhI/or63oqIDlj5jljJbkuobvvIzkvYbmmK/lvZPml7bpgInkuK3kuobkuIDkuKrmjpLluo/mlrnlvI/vvIzlnKjor63oqIDlj5jljJbnmoTml7blgJnvvIzkuI3lupTor6Xlj5jljJblhbbmjpLluo/vvIzmiYDku6XopoHmiormjpLluo/nmoTlj4LmlbDmlL7lnKggcXVlcnkg6YeM6Z2i44CCXHJcbiAgLy8gY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAvLyAgIFJvdXRlci5wdXNoKHtcclxuICAvLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4gIC8vICAgICBxdWVyeToge1xyXG4gIC8vICAgICAgIHF1ZXJ5LFxyXG4gIC8vICAgICAgIGxhbmc6IGxhbmd1YWdlLFxyXG4gIC8vICAgICAgIHNvcnQsXHJcbiAgLy8gICAgICAgb3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gIC8vIGNvbnN0IGhhbmRsZVNvcnRDaGFuZ2UgPSAoc29ydCkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZyxcclxuICAvLyAgICAgICBzb3J0OiBzb3J0LnZhbHVlLFxyXG4gIC8vICAgICAgIG9yZGVyOiBzb3J0Lm9yZGVyLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxyXG4gICAgICAgIDxDb2wgZ3V0dGVyPXs2fT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7or63oqIA8L3NwYW4+fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGl0ZW07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBsYW5nPXtpdGVtfSBuYW1lPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb1NlYXJjaCh7IHNvcnQsIG9yZGVyLCBxdWVyeSwgbGFuZzogaXRlbSB9KX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+5o6S5bqPPC9zcGFuPn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEV9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJCZXN0IE1hdGNoXCIgJiYgIXNvcnQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3NlbGVjdGVkID8gc2VsZWN0ZWRJdGVtU3R5bGUgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucXVlcnlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpdGVtLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZG9TZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBpdGVtLnZhbHVlIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBpdGVtLm9yZGVyIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3MtdGl0bGVcIj57cmVwb3MudG90YWxfY291bnR9IOS4quS7k+W6kzwvaDM+XHJcbiAgICAgICAgICB7cmVwb3MuaXRlbXMubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgIHsvKiBpdGVtUmVuZGVyIOWwseaYr+aIkeS7rOavj+S4qiBpdGVtIOaYvuekuueahOWGheWuue+8jGl0ZW1SZW5kZXIg5bCx5piv5q+P5LiqIHBhZ2Ug5a+55bqU55qE6aG156CB77yMdHlwZSDlsLHmmK/ov5nkuKrliIbpobXlkJHliY3ov5jmmK/lkJHlkI7ov5jmmK/kuK3pl7TnmoTmjInpkq7vvIxvbCDlsLHmmK/nsbvkvLzkuo4gaWNvbiDvvIzms6jmhI8gcGFnZSDvvIwgdHlwZSDpg73mmK8gYSDmoIfnrb4gICovfVxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplPXtwZXJfcGFnZX1cclxuICAgICAgICAgICAgICBjdXJyZW50PXtOdW1iZXIocGFnZSkgfHwgMX1cclxuICAgICAgICAgICAgICB0b3RhbD17MTAwMH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17bm9vcH1cclxuICAgICAgICAgICAgICBpdGVtUmVuZGVyPXsocGFnZSwgdHlwZSwgb2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPVxyXG4gICAgICAgICAgICAgICAgICB0eXBlID09PSBcInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJwcmV2XCJcclxuICAgICAgICAgICAgICAgICAgICA/IHBhZ2UgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwYWdlICsgMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlID09PSBcInBhZ2VcIiA/IHBhZ2UgOiBvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RmlsdGVyTGluayB7Li4ucXVlcnlzfSBwYWdlPXtwfSBuYW1lPXtuYW1lfSAvPjtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlcG9zLXRpdGxlIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVwb3M6IHtcclxuICAgICAgICB0b3RhbF9jb3VudDogMCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWA7XHJcbiAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWA7XHJcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgXCJkZXNjXCJ9YDtcclxuICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gO1xyXG4gIHF1ZXJ5U3RyaW5nICs9IGAmcGVyX3BhZ2U9JHtwZXJfcGFnZX1gO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\search.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcG8tYmFzaWMtY2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9scnUtY2FjaGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95YWxsaXN0L2l0ZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveWFsbGlzdC95YWxsaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2guanMiXSwibmFtZXMiOlsiY2FjaGUiLCJMUlUiLCJtYXhBZ2UiLCJzZXQiLCJyZXBvIiwiZnVsbF9uYW1lIiwiZ2V0Iiwic2V0QXJyYXkiLCJyZXBvcyIsImZvckVhY2giLCJhcGkiLCJyZXF1aXJlIiwiTEFOR1VBR0VTIiwiU09SVF9UWVBFIiwibmFtZSIsInZhbHVlIiwib3JkZXIiLCJzZWxlY3RlZEl0ZW1TdHlsZSIsImJvcmRlckxlZnQiLCJmb250V2VpZ2h0IiwicGVyX3BhZ2UiLCJGaWx0ZXJMaW5rIiwibWVtbyIsInF1ZXJ5IiwibGFuZyIsInNvcnQiLCJwYWdlIiwicXVlcnlTdHJpbmciLCJpc1ZhbGlkRWxlbWVudCIsIm5vb3AiLCJTZWFyY2giLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnlzIiwidXNlRWZmZWN0IiwibWFyZ2luQm90dG9tIiwiaXRlbSIsInNlbGVjdGVkIiwidG90YWxfY291bnQiLCJpdGVtcyIsIm1hcCIsImlkIiwiTnVtYmVyIiwidHlwZSIsIm9sIiwicCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLGdEQUFKLENBQVE7QUFDcEJDLFFBQU0sRUFBRSxPQUFP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QUR4QixFQUNmQSxLQURlLGNBQ2ZBLEtBRGUsRUFDUkUsSUFEUSxjQUNSQSxJQURRLEVBQ0ZELElBREUsY0FDRkEsSUFERSxFQUNJUixLQURKLGNBQ0lBLEtBREosRUFDV1UsSUFEWCxjQUNXQSxJQURYOztBQUFBLGdCQUVsQkgsS0FGa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBR2Q7QUFDTGYsbUJBQUssRUFBRTtBQUNMK0IsMkJBQVcsRUFBRTtBQURSO0FBREYsYUFIYzs7QUFBQTtBQVNuQlosdUJBVG1CLGdCQVNDSixLQVREO0FBVXZCLGdCQUFJQyxJQUFKLEVBQVVHLFdBQVcsd0JBQWlCSCxJQUFqQixDQUFYO0FBQ1YsZ0JBQUlDLElBQUosRUFBVUUsV0FBVyxvQkFBYUYsSUFBYixvQkFBMkJULEtBQUssSUFBSSxNQUFwQyxDQUFYO0FBQ1YsZ0JBQUlVLElBQUosRUFBVUMsV0FBVyxvQkFBYUQsSUFBYixDQUFYO0FBQ1ZDLHVCQUFXLHdCQUFpQlAsUUFBakIsQ0FBWDtBQWJ1QjtBQUFBLG1CQWNGVixHQUFHLENBQUN1QyxPQUFKLENBQ25CO0FBQ0VDLGlCQUFHLGdDQUF5QnZCLFdBQXpCO0FBREwsYUFEbUIsRUFJbkJxQixHQUFHLENBQUNHLEdBSmUsRUFLbkJILEdBQUcsQ0FBQ0ksR0FMZSxDQWRFOztBQUFBO0FBY2pCQyxrQkFkaUI7QUFBQSw2Q0FzQmhCO0FBQ0w3QyxtQkFBSyxFQUFFNkMsTUFBTSxDQUFDQztBQURULGFBdEJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQmUscUVBQUFDLCtEQUFVLENBQUN6QixNQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC43MDIxMDdiYzIxN2NlNTZmM2Y5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIG1heEFnZTogMTAwMCAqIDYwICogNjAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldChyZXBvKSB7XHJcbiAgY29uc3QgZnVsbF9uYW1lID0gcmVwby5mdWxsX25hbWU7XHJcbiAgY2FjaGUuc2V0KGZ1bGxfbmFtZSwgcmVwbyk7XHJcbn1cclxuXHJcbi8vIGZ1bGxfbmFtZTpmYWNlYm9vay9yZWFjdFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGZ1bGxfbmFtZSkge1xyXG4gIHJldHVybiBjYWNoZS5nZXQoZnVsbF9uYW1lKTtcclxufVxyXG5cclxuLy8g5qC55o2u5pWw57uE55qE5LiA5Liq5YiX6KGo5o+S5YWlXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcnJheShyZXBvcykge1xyXG4gIHJlcG9zLmZvckVhY2goKHJlcG8pID0+IHNldChyZXBvKSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIEEgbGlua2VkIGxpc3QgdG8ga2VlcCB0cmFjayBvZiByZWNlbnRseS11c2VkLW5lc3NcbmNvbnN0IFlhbGxpc3QgPSByZXF1aXJlKCd5YWxsaXN0JylcblxuY29uc3QgTUFYID0gU3ltYm9sKCdtYXgnKVxuY29uc3QgTEVOR1RIID0gU3ltYm9sKCdsZW5ndGgnKVxuY29uc3QgTEVOR1RIX0NBTENVTEFUT1IgPSBTeW1ib2woJ2xlbmd0aENhbGN1bGF0b3InKVxuY29uc3QgQUxMT1dfU1RBTEUgPSBTeW1ib2woJ2FsbG93U3RhbGUnKVxuY29uc3QgTUFYX0FHRSA9IFN5bWJvbCgnbWF4QWdlJylcbmNvbnN0IERJU1BPU0UgPSBTeW1ib2woJ2Rpc3Bvc2UnKVxuY29uc3QgTk9fRElTUE9TRV9PTl9TRVQgPSBTeW1ib2woJ25vRGlzcG9zZU9uU2V0JylcbmNvbnN0IExSVV9MSVNUID0gU3ltYm9sKCdscnVMaXN0JylcbmNvbnN0IENBQ0hFID0gU3ltYm9sKCdjYWNoZScpXG5jb25zdCBVUERBVEVfQUdFX09OX0dFVCA9IFN5bWJvbCgndXBkYXRlQWdlT25HZXQnKVxuXG5jb25zdCBuYWl2ZUxlbmd0aCA9ICgpID0+IDFcblxuLy8gbHJ1TGlzdCBpcyBhIHlhbGxpc3Qgd2hlcmUgdGhlIGhlYWQgaXMgdGhlIHlvdW5nZXN0XG4vLyBpdGVtLCBhbmQgdGhlIHRhaWwgaXMgdGhlIG9sZGVzdC4gIHRoZSBsaXN0IGNvbnRhaW5zIHRoZSBIaXRcbi8vIG9iamVjdHMgYXMgdGhlIGVudHJpZXMuXG4vLyBFYWNoIEhpdCBvYmplY3QgaGFzIGEgcmVmZXJlbmNlIHRvIGl0cyBZYWxsaXN0Lk5vZGUuICBUaGlzXG4vLyBuZXZlciBjaGFuZ2VzLlxuLy9cbi8vIGNhY2hlIGlzIGEgTWFwIChvciBQc2V1ZG9NYXApIHRoYXQgbWF0Y2hlcyB0aGUga2V5cyB0b1xuLy8gdGhlIFlhbGxpc3QuTm9kZSBvYmplY3QuXG5jbGFzcyBMUlVDYWNoZSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJylcbiAgICAgIG9wdGlvbnMgPSB7IG1heDogb3B0aW9ucyB9XG5cbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICBvcHRpb25zID0ge31cblxuICAgIGlmIChvcHRpb25zLm1heCAmJiAodHlwZW9mIG9wdGlvbnMubWF4ICE9PSAnbnVtYmVyJyB8fCBvcHRpb25zLm1heCA8IDApKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyJylcbiAgICAvLyBLaW5kIG9mIHdlaXJkIHRvIGhhdmUgYSBkZWZhdWx0IG1heCBvZiBJbmZpbml0eSwgYnV0IG9oIHdlbGwuXG4gICAgY29uc3QgbWF4ID0gdGhpc1tNQVhdID0gb3B0aW9ucy5tYXggfHwgSW5maW5pdHlcblxuICAgIGNvbnN0IGxjID0gb3B0aW9ucy5sZW5ndGggfHwgbmFpdmVMZW5ndGhcbiAgICB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSA9ICh0eXBlb2YgbGMgIT09ICdmdW5jdGlvbicpID8gbmFpdmVMZW5ndGggOiBsY1xuICAgIHRoaXNbQUxMT1dfU1RBTEVdID0gb3B0aW9ucy5zdGFsZSB8fCBmYWxzZVxuICAgIGlmIChvcHRpb25zLm1heEFnZSAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhBZ2UgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBudW1iZXInKVxuICAgIHRoaXNbTUFYX0FHRV0gPSBvcHRpb25zLm1heEFnZSB8fCAwXG4gICAgdGhpc1tESVNQT1NFXSA9IG9wdGlvbnMuZGlzcG9zZVxuICAgIHRoaXNbTk9fRElTUE9TRV9PTl9TRVRdID0gb3B0aW9ucy5ub0Rpc3Bvc2VPblNldCB8fCBmYWxzZVxuICAgIHRoaXNbVVBEQVRFX0FHRV9PTl9HRVRdID0gb3B0aW9ucy51cGRhdGVBZ2VPbkdldCB8fCBmYWxzZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLy8gcmVzaXplIHRoZSBjYWNoZSB3aGVuIHRoZSBtYXggY2hhbmdlcy5cbiAgc2V0IG1heCAobUwpIHtcbiAgICBpZiAodHlwZW9mIG1MICE9PSAnbnVtYmVyJyB8fCBtTCA8IDApXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuXG4gICAgdGhpc1tNQVhdID0gbUwgfHwgSW5maW5pdHlcbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IG1heCAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTUFYXVxuICB9XG5cbiAgc2V0IGFsbG93U3RhbGUgKGFsbG93U3RhbGUpIHtcbiAgICB0aGlzW0FMTE9XX1NUQUxFXSA9ICEhYWxsb3dTdGFsZVxuICB9XG4gIGdldCBhbGxvd1N0YWxlICgpIHtcbiAgICByZXR1cm4gdGhpc1tBTExPV19TVEFMRV1cbiAgfVxuXG4gIHNldCBtYXhBZ2UgKG1BKSB7XG4gICAgaWYgKHR5cGVvZiBtQSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuXG4gICAgdGhpc1tNQVhfQUdFXSA9IG1BXG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBtYXhBZ2UgKCkge1xuICAgIHJldHVybiB0aGlzW01BWF9BR0VdXG4gIH1cblxuICAvLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIGxlbmd0aENhbGN1bGF0b3IgY2hhbmdlcy5cbiAgc2V0IGxlbmd0aENhbGN1bGF0b3IgKGxDKSB7XG4gICAgaWYgKHR5cGVvZiBsQyAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgIGxDID0gbmFpdmVMZW5ndGhcblxuICAgIGlmIChsQyAhPT0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0pIHtcbiAgICAgIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdID0gbENcbiAgICAgIHRoaXNbTEVOR1RIXSA9IDBcbiAgICAgIHRoaXNbTFJVX0xJU1RdLmZvckVhY2goaGl0ID0+IHtcbiAgICAgICAgaGl0Lmxlbmd0aCA9IHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdKGhpdC52YWx1ZSwgaGl0LmtleSlcbiAgICAgICAgdGhpc1tMRU5HVEhdICs9IGhpdC5sZW5ndGhcbiAgICAgIH0pXG4gICAgfVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbGVuZ3RoQ2FsY3VsYXRvciAoKSB7IHJldHVybiB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzW0xFTkdUSF0gfVxuICBnZXQgaXRlbUNvdW50ICgpIHsgcmV0dXJuIHRoaXNbTFJVX0xJU1RdLmxlbmd0aCB9XG5cbiAgcmZvckVhY2ggKGZuLCB0aGlzcCkge1xuICAgIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXNbTFJVX0xJU1RdLnRhaWw7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIGNvbnN0IHByZXYgPSB3YWxrZXIucHJldlxuICAgICAgZm9yRWFjaFN0ZXAodGhpcywgZm4sIHdhbGtlciwgdGhpc3ApXG4gICAgICB3YWxrZXIgPSBwcmV2XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaCAoZm4sIHRoaXNwKSB7XG4gICAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpc1tMUlVfTElTVF0uaGVhZDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgY29uc3QgbmV4dCA9IHdhbGtlci5uZXh0XG4gICAgICBmb3JFYWNoU3RlcCh0aGlzLCBmbiwgd2Fsa2VyLCB0aGlzcClcbiAgICAgIHdhbGtlciA9IG5leHRcbiAgICB9XG4gIH1cblxuICBrZXlzICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0udG9BcnJheSgpLm1hcChrID0+IGsua2V5KVxuICB9XG5cbiAgdmFsdWVzICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0udG9BcnJheSgpLm1hcChrID0+IGsudmFsdWUpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgaWYgKHRoaXNbRElTUE9TRV0gJiZcbiAgICAgICAgdGhpc1tMUlVfTElTVF0gJiZcbiAgICAgICAgdGhpc1tMUlVfTElTVF0ubGVuZ3RoKSB7XG4gICAgICB0aGlzW0xSVV9MSVNUXS5mb3JFYWNoKGhpdCA9PiB0aGlzW0RJU1BPU0VdKGhpdC5rZXksIGhpdC52YWx1ZSkpXG4gICAgfVxuXG4gICAgdGhpc1tDQUNIRV0gPSBuZXcgTWFwKCkgLy8gaGFzaCBvZiBpdGVtcyBieSBrZXlcbiAgICB0aGlzW0xSVV9MSVNUXSA9IG5ldyBZYWxsaXN0KCkgLy8gbGlzdCBvZiBpdGVtcyBpbiBvcmRlciBvZiB1c2UgcmVjZW5jeVxuICAgIHRoaXNbTEVOR1RIXSA9IDAgLy8gbGVuZ3RoIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gIH1cblxuICBkdW1wICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0ubWFwKGhpdCA9PlxuICAgICAgaXNTdGFsZSh0aGlzLCBoaXQpID8gZmFsc2UgOiB7XG4gICAgICAgIGs6IGhpdC5rZXksXG4gICAgICAgIHY6IGhpdC52YWx1ZSxcbiAgICAgICAgZTogaGl0Lm5vdyArIChoaXQubWF4QWdlIHx8IDApXG4gICAgICB9KS50b0FycmF5KCkuZmlsdGVyKGggPT4gaClcbiAgfVxuXG4gIGR1bXBMcnUgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXVxuICB9XG5cbiAgc2V0IChrZXksIHZhbHVlLCBtYXhBZ2UpIHtcbiAgICBtYXhBZ2UgPSBtYXhBZ2UgfHwgdGhpc1tNQVhfQUdFXVxuXG4gICAgaWYgKG1heEFnZSAmJiB0eXBlb2YgbWF4QWdlICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbnVtYmVyJylcblxuICAgIGNvbnN0IG5vdyA9IG1heEFnZSA/IERhdGUubm93KCkgOiAwXG4gICAgY29uc3QgbGVuID0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0odmFsdWUsIGtleSlcblxuICAgIGlmICh0aGlzW0NBQ0hFXS5oYXMoa2V5KSkge1xuICAgICAgaWYgKGxlbiA+IHRoaXNbTUFYXSkge1xuICAgICAgICBkZWwodGhpcywgdGhpc1tDQUNIRV0uZ2V0KGtleSkpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlID0gdGhpc1tDQUNIRV0uZ2V0KGtleSlcbiAgICAgIGNvbnN0IGl0ZW0gPSBub2RlLnZhbHVlXG5cbiAgICAgIC8vIGRpc3Bvc2Ugb2YgdGhlIG9sZCBvbmUgYmVmb3JlIG92ZXJ3cml0aW5nXG4gICAgICAvLyBzcGxpdCBvdXQgaW50byAyIGlmcyBmb3IgYmV0dGVyIGNvdmVyYWdlIHRyYWNraW5nXG4gICAgICBpZiAodGhpc1tESVNQT1NFXSkge1xuICAgICAgICBpZiAoIXRoaXNbTk9fRElTUE9TRV9PTl9TRVRdKVxuICAgICAgICAgIHRoaXNbRElTUE9TRV0oa2V5LCBpdGVtLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpdGVtLm5vdyA9IG5vd1xuICAgICAgaXRlbS5tYXhBZ2UgPSBtYXhBZ2VcbiAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpc1tMRU5HVEhdICs9IGxlbiAtIGl0ZW0ubGVuZ3RoXG4gICAgICBpdGVtLmxlbmd0aCA9IGxlblxuICAgICAgdGhpcy5nZXQoa2V5KVxuICAgICAgdHJpbSh0aGlzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSBuZXcgRW50cnkoa2V5LCB2YWx1ZSwgbGVuLCBub3csIG1heEFnZSlcblxuICAgIC8vIG92ZXJzaXplZCBvYmplY3RzIGZhbGwgb3V0IG9mIGNhY2hlIGF1dG9tYXRpY2FsbHkuXG4gICAgaWYgKGhpdC5sZW5ndGggPiB0aGlzW01BWF0pIHtcbiAgICAgIGlmICh0aGlzW0RJU1BPU0VdKVxuICAgICAgICB0aGlzW0RJU1BPU0VdKGtleSwgdmFsdWUpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXNbTEVOR1RIXSArPSBoaXQubGVuZ3RoXG4gICAgdGhpc1tMUlVfTElTVF0udW5zaGlmdChoaXQpXG4gICAgdGhpc1tDQUNIRV0uc2V0KGtleSwgdGhpc1tMUlVfTElTVF0uaGVhZClcbiAgICB0cmltKHRoaXMpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGhhcyAoa2V5KSB7XG4gICAgaWYgKCF0aGlzW0NBQ0hFXS5oYXMoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgaGl0ID0gdGhpc1tDQUNIRV0uZ2V0KGtleSkudmFsdWVcbiAgICByZXR1cm4gIWlzU3RhbGUodGhpcywgaGl0KVxuICB9XG5cbiAgZ2V0IChrZXkpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGtleSwgdHJ1ZSlcbiAgfVxuXG4gIHBlZWsgKGtleSkge1xuICAgIHJldHVybiBnZXQodGhpcywga2V5LCBmYWxzZSlcbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXNbTFJVX0xJU1RdLnRhaWxcbiAgICBpZiAoIW5vZGUpXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgZGVsKHRoaXMsIG5vZGUpXG4gICAgcmV0dXJuIG5vZGUudmFsdWVcbiAgfVxuXG4gIGRlbCAoa2V5KSB7XG4gICAgZGVsKHRoaXMsIHRoaXNbQ0FDSEVdLmdldChrZXkpKVxuICB9XG5cbiAgbG9hZCAoYXJyKSB7XG4gICAgLy8gcmVzZXQgdGhlIGNhY2hlXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgLy8gQSBwcmV2aW91cyBzZXJpYWxpemVkIGNhY2hlIGhhcyB0aGUgbW9zdCByZWNlbnQgaXRlbXMgZmlyc3RcbiAgICBmb3IgKGxldCBsID0gYXJyLmxlbmd0aCAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgICBjb25zdCBoaXQgPSBhcnJbbF1cbiAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGhpdC5lIHx8IDBcbiAgICAgIGlmIChleHBpcmVzQXQgPT09IDApXG4gICAgICAgIC8vIHRoZSBpdGVtIHdhcyBjcmVhdGVkIHdpdGhvdXQgZXhwaXJhdGlvbiBpbiBhIG5vbiBhZ2VkIGNhY2hlXG4gICAgICAgIHRoaXMuc2V0KGhpdC5rLCBoaXQudilcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtYXhBZ2UgPSBleHBpcmVzQXQgLSBub3dcbiAgICAgICAgLy8gZG9udCBhZGQgYWxyZWFkeSBleHBpcmVkIGl0ZW1zXG4gICAgICAgIGlmIChtYXhBZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52LCBtYXhBZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcnVuZSAoKSB7XG4gICAgdGhpc1tDQUNIRV0uZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gZ2V0KHRoaXMsIGtleSwgZmFsc2UpKVxuICB9XG59XG5cbmNvbnN0IGdldCA9IChzZWxmLCBrZXksIGRvVXNlKSA9PiB7XG4gIGNvbnN0IG5vZGUgPSBzZWxmW0NBQ0hFXS5nZXQoa2V5KVxuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGhpdCA9IG5vZGUudmFsdWVcbiAgICBpZiAoaXNTdGFsZShzZWxmLCBoaXQpKSB7XG4gICAgICBkZWwoc2VsZiwgbm9kZSlcbiAgICAgIGlmICghc2VsZltBTExPV19TVEFMRV0pXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvVXNlKSB7XG4gICAgICAgIGlmIChzZWxmW1VQREFURV9BR0VfT05fR0VUXSlcbiAgICAgICAgICBub2RlLnZhbHVlLm5vdyA9IERhdGUubm93KClcbiAgICAgICAgc2VsZltMUlVfTElTVF0udW5zaGlmdE5vZGUobm9kZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhpdC52YWx1ZVxuICB9XG59XG5cbmNvbnN0IGlzU3RhbGUgPSAoc2VsZiwgaGl0KSA9PiB7XG4gIGlmICghaGl0IHx8ICghaGl0Lm1heEFnZSAmJiAhc2VsZltNQVhfQUdFXSkpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBoaXQubm93XG4gIHJldHVybiBoaXQubWF4QWdlID8gZGlmZiA+IGhpdC5tYXhBZ2VcbiAgICA6IHNlbGZbTUFYX0FHRV0gJiYgKGRpZmYgPiBzZWxmW01BWF9BR0VdKVxufVxuXG5jb25zdCB0cmltID0gc2VsZiA9PiB7XG4gIGlmIChzZWxmW0xFTkdUSF0gPiBzZWxmW01BWF0pIHtcbiAgICBmb3IgKGxldCB3YWxrZXIgPSBzZWxmW0xSVV9MSVNUXS50YWlsO1xuICAgICAgc2VsZltMRU5HVEhdID4gc2VsZltNQVhdICYmIHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIC8vIFdlIGtub3cgdGhhdCB3ZSdyZSBhYm91dCB0byBkZWxldGUgdGhpcyBvbmUsIGFuZCBhbHNvXG4gICAgICAvLyB3aGF0IHRoZSBuZXh0IGxlYXN0IHJlY2VudGx5IHVzZWQga2V5IHdpbGwgYmUsIHNvIGp1c3RcbiAgICAgIC8vIGdvIGFoZWFkIGFuZCBzZXQgaXQgbm93LlxuICAgICAgY29uc3QgcHJldiA9IHdhbGtlci5wcmV2XG4gICAgICBkZWwoc2VsZiwgd2Fsa2VyKVxuICAgICAgd2Fsa2VyID0gcHJldlxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWwgPSAoc2VsZiwgbm9kZSkgPT4ge1xuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGhpdCA9IG5vZGUudmFsdWVcbiAgICBpZiAoc2VsZltESVNQT1NFXSlcbiAgICAgIHNlbGZbRElTUE9TRV0oaGl0LmtleSwgaGl0LnZhbHVlKVxuXG4gICAgc2VsZltMRU5HVEhdIC09IGhpdC5sZW5ndGhcbiAgICBzZWxmW0NBQ0hFXS5kZWxldGUoaGl0LmtleSlcbiAgICBzZWxmW0xSVV9MSVNUXS5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cbn1cblxuY2xhc3MgRW50cnkge1xuICBjb25zdHJ1Y3RvciAoa2V5LCB2YWx1ZSwgbGVuZ3RoLCBub3csIG1heEFnZSkge1xuICAgIHRoaXMua2V5ID0ga2V5XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGlzLm5vdyA9IG5vd1xuICAgIHRoaXMubWF4QWdlID0gbWF4QWdlIHx8IDBcbiAgfVxufVxuXG5jb25zdCBmb3JFYWNoU3RlcCA9IChzZWxmLCBmbiwgbm9kZSwgdGhpc3ApID0+IHtcbiAgbGV0IGhpdCA9IG5vZGUudmFsdWVcbiAgaWYgKGlzU3RhbGUoc2VsZiwgaGl0KSkge1xuICAgIGRlbChzZWxmLCBub2RlKVxuICAgIGlmICghc2VsZltBTExPV19TVEFMRV0pXG4gICAgICBoaXQgPSB1bmRlZmluZWRcbiAgfVxuICBpZiAoaGl0KVxuICAgIGZuLmNhbGwodGhpc3AsIGhpdC52YWx1ZSwgaGl0LmtleSwgc2VsZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMUlVDYWNoZVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChZYWxsaXN0KSB7XG4gIFlhbGxpc3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiogKCkge1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyOyB3YWxrZXIgPSB3YWxrZXIubmV4dCkge1xuICAgICAgeWllbGQgd2Fsa2VyLnZhbHVlXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gWWFsbGlzdFxuXG5ZYWxsaXN0Lk5vZGUgPSBOb2RlXG5ZYWxsaXN0LmNyZWF0ZSA9IFlhbGxpc3RcblxuZnVuY3Rpb24gWWFsbGlzdCAobGlzdCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIFlhbGxpc3QpKSB7XG4gICAgc2VsZiA9IG5ldyBZYWxsaXN0KClcbiAgfVxuXG4gIHNlbGYudGFpbCA9IG51bGxcbiAgc2VsZi5oZWFkID0gbnVsbFxuICBzZWxmLmxlbmd0aCA9IDBcblxuICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdC5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBzZWxmLnB1c2goaXRlbSlcbiAgICB9KVxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBzZWxmLnB1c2goYXJndW1lbnRzW2ldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxmXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnJlbW92ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5saXN0ICE9PSB0aGlzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmluZyBub2RlIHdoaWNoIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGxpc3QnKVxuICB9XG5cbiAgdmFyIG5leHQgPSBub2RlLm5leHRcbiAgdmFyIHByZXYgPSBub2RlLnByZXZcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQucHJldiA9IHByZXZcbiAgfVxuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5uZXh0ID0gbmV4dFxuICB9XG5cbiAgaWYgKG5vZGUgPT09IHRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5leHRcbiAgfVxuICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsID0gcHJldlxuICB9XG5cbiAgbm9kZS5saXN0Lmxlbmd0aC0tXG4gIG5vZGUubmV4dCA9IG51bGxcbiAgbm9kZS5wcmV2ID0gbnVsbFxuICBub2RlLmxpc3QgPSBudWxsXG5cbiAgcmV0dXJuIG5leHRcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudW5zaGlmdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobm9kZS5saXN0KSB7XG4gICAgbm9kZS5saXN0LnJlbW92ZU5vZGUobm9kZSlcbiAgfVxuXG4gIHZhciBoZWFkID0gdGhpcy5oZWFkXG4gIG5vZGUubGlzdCA9IHRoaXNcbiAgbm9kZS5uZXh0ID0gaGVhZFxuICBpZiAoaGVhZCkge1xuICAgIGhlYWQucHJldiA9IG5vZGVcbiAgfVxuXG4gIHRoaXMuaGVhZCA9IG5vZGVcbiAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwgPSBub2RlXG4gIH1cbiAgdGhpcy5sZW5ndGgrK1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wdXNoTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLnRhaWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChub2RlLmxpc3QpIHtcbiAgICBub2RlLmxpc3QucmVtb3ZlTm9kZShub2RlKVxuICB9XG5cbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWxcbiAgbm9kZS5saXN0ID0gdGhpc1xuICBub2RlLnByZXYgPSB0YWlsXG4gIGlmICh0YWlsKSB7XG4gICAgdGFpbC5uZXh0ID0gbm9kZVxuICB9XG5cbiAgdGhpcy50YWlsID0gbm9kZVxuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5vZGVcbiAgfVxuICB0aGlzLmxlbmd0aCsrXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHB1c2godGhpcywgYXJndW1lbnRzW2ldKVxuICB9XG4gIHJldHVybiB0aGlzLmxlbmd0aFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB1bnNoaWZ0KHRoaXMsIGFyZ3VtZW50c1tpXSlcbiAgfVxuICByZXR1cm4gdGhpcy5sZW5ndGhcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudGFpbCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciByZXMgPSB0aGlzLnRhaWwudmFsdWVcbiAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZcbiAgaWYgKHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbFxuICB9IGVsc2Uge1xuICAgIHRoaXMuaGVhZCA9IG51bGxcbiAgfVxuICB0aGlzLmxlbmd0aC0tXG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5oZWFkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdmFyIHJlcyA9IHRoaXMuaGVhZC52YWx1ZVxuICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dFxuICBpZiAodGhpcy5oZWFkKSB7XG4gICAgdGhpcy5oZWFkLnByZXYgPSBudWxsXG4gIH0gZWxzZSB7XG4gICAgdGhpcy50YWlsID0gbnVsbFxuICB9XG4gIHRoaXMubGVuZ3RoLS1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy5oZWFkLCBpID0gMDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIGksIHRoaXMpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5mb3JFYWNoUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMudGFpbCwgaSA9IHRoaXMubGVuZ3RoIC0gMTsgd2Fsa2VyICE9PSBudWxsOyBpLS0pIHtcbiAgICBmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIGksIHRoaXMpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobikge1xuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IG47IGkrKykge1xuICAgIC8vIGFib3J0IG91dCBvZiB0aGUgbGlzdCBlYXJseSBpZiB3ZSBoaXQgYSBjeWNsZVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgaWYgKGkgPT09IG4gJiYgd2Fsa2VyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdhbGtlci52YWx1ZVxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLmdldFJldmVyc2UgPSBmdW5jdGlvbiAobikge1xuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IG47IGkrKykge1xuICAgIC8vIGFib3J0IG91dCBvZiB0aGUgbGlzdCBlYXJseSBpZiB3ZSBoaXQgYSBjeWNsZVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgaWYgKGkgPT09IG4gJiYgd2Fsa2VyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdhbGtlci52YWx1ZVxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIHZhciByZXMgPSBuZXcgWWFsbGlzdCgpXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgIHJlcy5wdXNoKGZuLmNhbGwodGhpc3AsIHdhbGtlci52YWx1ZSwgdGhpcykpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLm1hcFJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICB2YXIgcmVzID0gbmV3IFlhbGxpc3QoKVxuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICByZXMucHVzaChmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIHRoaXMpKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoZm4sIGluaXRpYWwpIHtcbiAgdmFyIGFjY1xuICB2YXIgd2Fsa2VyID0gdGhpcy5oZWFkXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGFjYyA9IGluaXRpYWxcbiAgfSBlbHNlIGlmICh0aGlzLmhlYWQpIHtcbiAgICB3YWxrZXIgPSB0aGlzLmhlYWQubmV4dFxuICAgIGFjYyA9IHRoaXMuaGVhZC52YWx1ZVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBsaXN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhY2MgPSBmbihhY2MsIHdhbGtlci52YWx1ZSwgaSlcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZWR1Y2VSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsKSB7XG4gIHZhciBhY2NcbiAgdmFyIHdhbGtlciA9IHRoaXMudGFpbFxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBhY2MgPSBpbml0aWFsXG4gIH0gZWxzZSBpZiAodGhpcy50YWlsKSB7XG4gICAgd2Fsa2VyID0gdGhpcy50YWlsLnByZXZcbiAgICBhY2MgPSB0aGlzLnRhaWwudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbGlzdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgd2Fsa2VyICE9PSBudWxsOyBpLS0pIHtcbiAgICBhY2MgPSBmbihhY2MsIHdhbGtlci52YWx1ZSwgaSlcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGw7IGkrKykge1xuICAgIGFycltpXSA9IHdhbGtlci52YWx1ZVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS50b0FycmF5UmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhcnJbaV0gPSB3YWxrZXIudmFsdWVcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdG8gPSB0byB8fCB0aGlzLmxlbmd0aFxuICBpZiAodG8gPCAwKSB7XG4gICAgdG8gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICBmcm9tID0gZnJvbSB8fCAwXG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICB2YXIgcmV0ID0gbmV3IFlhbGxpc3QoKVxuICBpZiAodG8gPCBmcm9tIHx8IHRvIDwgMCkge1xuICAgIHJldHVybiByZXRcbiAgfVxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tID0gMFxuICB9XG4gIGlmICh0byA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdG8gPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgZnJvbTsgaSsrKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICBmb3IgKDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCB0bzsgaSsrLCB3YWxrZXIgPSB3YWxrZXIubmV4dCkge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNsaWNlUmV2ZXJzZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB0byA9IHRvIHx8IHRoaXMubGVuZ3RoXG4gIGlmICh0byA8IDApIHtcbiAgICB0byArPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZyb20gPSBmcm9tIHx8IDBcbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSArPSB0aGlzLmxlbmd0aFxuICB9XG4gIHZhciByZXQgPSBuZXcgWWFsbGlzdCgpXG4gIGlmICh0byA8IGZyb20gfHwgdG8gPCAwKSB7XG4gICAgcmV0dXJuIHJldFxuICB9XG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gPSAwXG4gIH1cbiAgaWYgKHRvID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0byA9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbCAmJiBpID4gdG87IGktLSkge1xuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgZm9yICg7IHdhbGtlciAhPT0gbnVsbCAmJiBpID4gZnJvbTsgaS0tLCB3YWxrZXIgPSB3YWxrZXIucHJldikge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNwbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZGVsZXRlQ291bnQsIC4uLm5vZGVzKSB7XG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgc3RhcnQgPSB0aGlzLmxlbmd0aCAtIDFcbiAgfVxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSB0aGlzLmxlbmd0aCArIHN0YXJ0O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBzdGFydDsgaSsrKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuXG4gIHZhciByZXQgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgd2Fsa2VyICYmIGkgPCBkZWxldGVDb3VudDsgaSsrKSB7XG4gICAgcmV0LnB1c2god2Fsa2VyLnZhbHVlKVxuICAgIHdhbGtlciA9IHRoaXMucmVtb3ZlTm9kZSh3YWxrZXIpXG4gIH1cbiAgaWYgKHdhbGtlciA9PT0gbnVsbCkge1xuICAgIHdhbGtlciA9IHRoaXMudGFpbFxuICB9XG5cbiAgaWYgKHdhbGtlciAhPT0gdGhpcy5oZWFkICYmIHdhbGtlciAhPT0gdGhpcy50YWlsKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB3YWxrZXIgPSBpbnNlcnQodGhpcywgd2Fsa2VyLCBub2Rlc1tpXSlcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCA9IHRoaXMuaGVhZFxuICB2YXIgdGFpbCA9IHRoaXMudGFpbFxuICBmb3IgKHZhciB3YWxrZXIgPSBoZWFkOyB3YWxrZXIgIT09IG51bGw7IHdhbGtlciA9IHdhbGtlci5wcmV2KSB7XG4gICAgdmFyIHAgPSB3YWxrZXIucHJldlxuICAgIHdhbGtlci5wcmV2ID0gd2Fsa2VyLm5leHRcbiAgICB3YWxrZXIubmV4dCA9IHBcbiAgfVxuICB0aGlzLmhlYWQgPSB0YWlsXG4gIHRoaXMudGFpbCA9IGhlYWRcbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gaW5zZXJ0IChzZWxmLCBub2RlLCB2YWx1ZSkge1xuICB2YXIgaW5zZXJ0ZWQgPSBub2RlID09PSBzZWxmLmhlYWQgP1xuICAgIG5ldyBOb2RlKHZhbHVlLCBudWxsLCBub2RlLCBzZWxmKSA6XG4gICAgbmV3IE5vZGUodmFsdWUsIG5vZGUsIG5vZGUubmV4dCwgc2VsZilcblxuICBpZiAoaW5zZXJ0ZWQubmV4dCA9PT0gbnVsbCkge1xuICAgIHNlbGYudGFpbCA9IGluc2VydGVkXG4gIH1cbiAgaWYgKGluc2VydGVkLnByZXYgPT09IG51bGwpIHtcbiAgICBzZWxmLmhlYWQgPSBpbnNlcnRlZFxuICB9XG5cbiAgc2VsZi5sZW5ndGgrK1xuXG4gIHJldHVybiBpbnNlcnRlZFxufVxuXG5mdW5jdGlvbiBwdXNoIChzZWxmLCBpdGVtKSB7XG4gIHNlbGYudGFpbCA9IG5ldyBOb2RlKGl0ZW0sIHNlbGYudGFpbCwgbnVsbCwgc2VsZilcbiAgaWYgKCFzZWxmLmhlYWQpIHtcbiAgICBzZWxmLmhlYWQgPSBzZWxmLnRhaWxcbiAgfVxuICBzZWxmLmxlbmd0aCsrXG59XG5cbmZ1bmN0aW9uIHVuc2hpZnQgKHNlbGYsIGl0ZW0pIHtcbiAgc2VsZi5oZWFkID0gbmV3IE5vZGUoaXRlbSwgbnVsbCwgc2VsZi5oZWFkLCBzZWxmKVxuICBpZiAoIXNlbGYudGFpbCkge1xuICAgIHNlbGYudGFpbCA9IHNlbGYuaGVhZFxuICB9XG4gIHNlbGYubGVuZ3RoKytcbn1cblxuZnVuY3Rpb24gTm9kZSAodmFsdWUsIHByZXYsIG5leHQsIGxpc3QpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vZGUpKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlKHZhbHVlLCBwcmV2LCBuZXh0LCBsaXN0KVxuICB9XG5cbiAgdGhpcy5saXN0ID0gbGlzdFxuICB0aGlzLnZhbHVlID0gdmFsdWVcblxuICBpZiAocHJldikge1xuICAgIHByZXYubmV4dCA9IHRoaXNcbiAgICB0aGlzLnByZXYgPSBwcmV2XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcmV2ID0gbnVsbFxuICB9XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXYgPSB0aGlzXG4gICAgdGhpcy5uZXh0ID0gbmV4dFxuICB9IGVsc2Uge1xuICAgIHRoaXMubmV4dCA9IG51bGxcbiAgfVxufVxuXG50cnkge1xuICAvLyBhZGQgaWYgc3VwcG9ydCBmb3IgU3ltYm9sLml0ZXJhdG9yIGlzIHByZXNlbnRcbiAgcmVxdWlyZSgnLi9pdGVyYXRvci5qcycpKFlhbGxpc3QpXG59IGNhdGNoIChlcikge31cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCBtZW1vLCBpc1ZhbGlkRWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgUGFnaW5hdGlvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vKipcclxuICogc29ydDog5o6S5bqP5pa55byPXHJcbiAqIG9yZGVyOiDmjpLluo/pobrluo9cclxuICogbGFuZzog5LuT5bqT55qE6aG555uu5byA5Y+R5Li76K+t6KiAXHJcbiAqIHBhZ2U6IOWIhumhtemhtemdolxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuLi9saWIvYXBpXCIpO1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVwb1wiO1xyXG5cclxuaW1wb3J0IHsgc2V0QXJyYXkgfSBmcm9tIFwiLi4vbGliL3JlcG8tYmFzaWMtY2FjaGVcIjtcclxuXHJcbi8vIOaQnOe0ouadoeS7tlxyXG5jb25zdCBMQU5HVUFHRVMgPSBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIlR5cGVTY3JpcHRcIiwgXCJKYXZhXCIsIFwiUnVzdFwiXTtcclxuXHJcbmNvbnN0IFNPUlRfVFlQRSA9IFtcclxuICB7IG5hbWU6IFwiQmVzdCBNYXRjaFwiIH0sXHJcbiAgeyBuYW1lOiBcIk1vc3QgU3RhcnNcIiwgdmFsdWU6IFwic3RhcnNcIiwgb3JkZXI6IFwiZGVzY1wiIH0sXHJcbiAgeyBuYW1lOiBcIkZld2VzdCBTdGFyc1wiLCB2YWx1ZTogXCJzdGFyc1wiLCBvcmRlcjogXCJhc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJNb3N0IEZvcmtzXCIsIHZhbHVlOiBcImZvcmtzXCIsIG9yZGVyOiBcImRlc2NcIiB9LFxyXG4gIHsgbmFtZTogXCJGZXdlc3QgU3RhcnNcIiwgdmFsdWU6IFwiZm9ya3NcIiwgb3JkZXI6IFwiYXNjXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xyXG4gIGJvcmRlckxlZnQ6IFwiMnB4IHNvbGlkICNlMzYyMDlcIixcclxuICBmb250V2VpZ2h0OiAxMDAsXHJcbn07XHJcblxyXG4vLyDov5nmmK/kuIDkuKrnuq/nsrnnmoTmlrnms5XvvIzmlrnms5XkuIDml6blo7DmmI7vvIzkuI3lrZjlnKjku7vkvZXlia/kvZznlKhcclxuLy8gY29uc3QgZG9TZWFyY2ggPSB1c2VDYWxsYmFjaygoY29uZmlnKSA9PiB7XHJcbi8vICAgUm91dGVyLnB1c2goe1xyXG4vLyAgICAgcGF0aG5hbWU6IFwiL3NlYXJjaFwiLFxyXG4vLyAgICAgcXVlcnk6IGNvbmZpZyxcclxuLy8gICB9KTtcclxuLy8gfSwgW10pO1xyXG5cclxuLy8gcmVhY3Qg5piv5LiA5Liq57uE5Lu25YyW55qE5qGG5p6277yM57uE5Lu25L6d6Z2gIHByb3BzIOWSjCBzdGF0ZXMg6L+b6KGM6L+Q6KGM55qE77yM5aaC5p6c6IO95aSf5oq96LGh5oiQIHByb3BzIOmCo+S5iOWwseWPr+S7pemHjeaWsOeUs+aYjuS4gOS4que7hOS7tu+8jOiuqee7hOS7tuW4ruW/meS9v+eUqO+8jOWcqOS7o+eggee7tOaKpOWPmOW+l+abtOWKoOeugOWNlVxyXG4vLyDpmLLmraLkuobnu4Tku7blnKjngrnlh7vnmoTov4fnqIvkuK3ph43mlrDlo7DmmI7muLLmn5NcclxuLy8gRmlsdGVyTGluayDnu4Tku7bmmK/nuq/nsrnmoLnmja4gcHJvcHMg6L+b6KGM5pu05paw55qE77yM5Y+v5LulIG1lbW8g6L+b6KGM5LyY5YyW77yM5b2TIHByb3BzIOayoeaciei/m+ihjOWPmOWMlueahOaXtuWAme+8jOi/meS4que7hOS7tuS4jeS8muiiq+mHjeaWsOa4suafk1xyXG5cclxuY29uc3QgcGVyX3BhZ2UgPSAyMDtcclxuY29uc3QgRmlsdGVyTGluayA9IG1lbW8oKHsgbmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0pID0+IHtcclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3F1ZXJ5PSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCZsYW5nPSR7bGFuZ31gO1xyXG4gIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8IFwiZGVzY1wifWA7XHJcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuXHJcbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgLy8gaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YDtcclxuXHJcbiAgLy8gY29uc3QgZG9TZWFyY2ggPSAoY29uZmlnKSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nLFxyXG4gIC8vICAgICAgIHNvcnQsXHJcbiAgLy8gICAgICAgb3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gIC8vIOazqOaEjyBhIOagh+etvuS4jeaUvumTvuaOpe+8jOW+iOmavuWOu+WBmiBTRU8g77yM5Zug5Li6IFNFTyDkvJrop6PmnpAgSFRNTCDnmoTlhoXlrrlcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PlxyXG4gICAgICB7LyogaXNWYWxpZEVsZW1lbnQg5piv55So5p2l5Yik5pat5piv5ZCm5Li65LiA5Liq5qCH562+ICovfVxyXG4gICAgICB7aXNWYWxpZEVsZW1lbnQobmFtZSkgPyBuYW1lIDogPGE+e25hbWV9PC9hPn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCh7IHJvdXRlciwgcmVwb3MgfSkge1xyXG4gIGNvbnNvbGUubG9nKHJlcG9zKTtcclxuICAvLyDms6jmhI/ov5nkupvmlbDmja7pg73msqHmnInlnKggc3RhdGUg6YeM6Z2i5Y675Yib5bu677yM5biM5pyb5piv6L+Z5Lqb6aG16Z2i5pi+56S655qE5YaF5a655a6M5YWo5qC55o2uIHVybCDmnaXlrprnmoTvvIzkvb/lvpfmlbTkuKrnu4Tku7bmmK/kuKrlj5fmjqfnmoTnu4Tku7bvvIzkuI3kvJrkuqfnlJ/ku7vkvZXnmoTlia/kvZznlKjjgIJcclxuXHJcbiAgLy8g6K+l6Lev55Sx5pivIHdpdGhSb3V0ZXIg5Lyg6YCS6L+H5p2l55qEXHJcbiAgY29uc3QgeyAuLi5xdWVyeXMgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IHNvcnQsIG9yZGVyLCBsYW5nLCBwYWdlIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIC8vIOaJp+ihjOi/meS4quaPkuWFpe+8jOavj+asoemhtemdoua4suafk+eahOaXtuWAme+8jOmDveS8muWOu+iwg+eUqOWug1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XHJcblxyXG4gIC8vIOeUqOS6juaLvOaOpei3r+W+hOeahOaWueazlVxyXG4gIC8vIOazqOaEj+ivreiogOWPmOWMluS6hu+8jOS9huaYr+W9k+aXtumAieS4reS6huS4gOS4quaOkuW6j+aWueW8j++8jOWcqOivreiogOWPmOWMlueahOaXtuWAme+8jOS4jeW6lOivpeWPmOWMluWFtuaOkuW6j++8jOaJgOS7peimgeaKiuaOkuW6j+eahOWPguaVsOaUvuWcqCBxdWVyeSDph4zpnaLjgIJcclxuICAvLyBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goe1xyXG4gIC8vICAgICBwYXRobmFtZTogXCIvc2VhcmNoXCIsXHJcbiAgLy8gICAgIHF1ZXJ5OiB7XHJcbiAgLy8gICAgICAgcXVlcnksXHJcbiAgLy8gICAgICAgbGFuZzogbGFuZ3VhZ2UsXHJcbiAgLy8gICAgICAgc29ydCxcclxuICAvLyAgICAgICBvcmRlcixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcbiAgLy8gY29uc3QgaGFuZGxlU29ydENoYW5nZSA9IChzb3J0KSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaCh7XHJcbiAgLy8gICAgIHBhdGhuYW1lOiBcIi9zZWFyY2hcIixcclxuICAvLyAgICAgcXVlcnk6IHtcclxuICAvLyAgICAgICBxdWVyeSxcclxuICAvLyAgICAgICBsYW5nLFxyXG4gIC8vICAgICAgIHNvcnQ6IHNvcnQudmFsdWUsXHJcbiAgLy8gICAgICAgb3JkZXI6IHNvcnQub3JkZXIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBndXR0ZXI9ezZ9PlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gaXRlbTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IGxhbmc9e2l0ZW19IG5hbWU9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VhcmNoKHsgc29ydCwgb3JkZXIsIHF1ZXJ5LCBsYW5nOiBpdGVtIH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBcIkJlc3QgTWF0Y2hcIiAmJiAhc29ydCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5xdWVyeXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb1NlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGl0ZW0udmFsdWUgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGl0ZW0ub3JkZXIgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH0g5Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgIHtyZXBvcy5pdGVtcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgey8qIGl0ZW1SZW5kZXIg5bCx5piv5oiR5Lus5q+P5LiqIGl0ZW0g5pi+56S655qE5YaF5a6577yMaXRlbVJlbmRlciDlsLHmmK/mr4/kuKogcGFnZSDlr7nlupTnmoTpobXnoIHvvIx0eXBlIOWwseaYr+i/meS4quWIhumhteWQkeWJjei/mOaYr+WQkeWQjui/mOaYr+S4remXtOeahOaMiemSru+8jG9sIOWwseaYr+exu+S8vOS6jiBpY29uIO+8jOazqOaEjyBwYWdlIO+8jCB0eXBlIOmDveaYryBhIOagh+etviAgKi99XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgcGFnZVNpemU9e3Blcl9wYWdlfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxyXG4gICAgICAgICAgICAgIHRvdGFsPXsxMDAwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtub29wfVxyXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhwYWdlLCB0eXBlLCBvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcInByZXZcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcGFnZSAtIDFcclxuICAgICAgICAgICAgICAgICAgICA6IHBhZ2UgKyAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHR5cGUgPT09IFwicGFnZVwiID8gcGFnZSA6IG9sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHBhZ2U9e3B9IG5hbWU9e25hbWV9IC8+O1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXBvczoge1xyXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcclxuICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcclxuICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCBcImRlc2NcIn1gO1xyXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWA7XHJcbiAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9