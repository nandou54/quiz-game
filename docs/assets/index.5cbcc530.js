const pd = function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
}
pd()
var B = { exports: {} },
  $ = {}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var bu = Object.getOwnPropertySymbols,
  md = Object.prototype.hasOwnProperty,
  hd = Object.prototype.propertyIsEnumerable
function vd(e) {
  if (e == null)
    throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function yd() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
    var r = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i]
    })
    if (r.join('') !== '0123456789') return !1
    var o = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (i) {
        o[i] = i
      }),
      Object.keys(Object.assign({}, o)).join('') === 'abcdefghijklmnopqrst'
    )
  } catch {
    return !1
  }
}
var Ba = yd()
  ? Object.assign
  : function (e, t) {
      for (var n, r = vd(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i])
        for (var l in n) md.call(n, l) && (r[l] = n[l])
        if (bu) {
          o = bu(n)
          for (var u = 0; u < o.length; u++) hd.call(n, o[u]) && (r[o[u]] = n[o[u]])
        }
      }
      return r
    }
/** @license React v17.0.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zl = Ba,
  hn = 60103,
  Va = 60106
$.Fragment = 60107
$.StrictMode = 60108
$.Profiler = 60114
var Wa = 60109,
  Ha = 60110,
  Qa = 60112
$.Suspense = 60113
var qa = 60115,
  Ka = 60116
if (typeof Symbol == 'function' && Symbol.for) {
  var Oe = Symbol.for
  ;(hn = Oe('react.element')),
    (Va = Oe('react.portal')),
    ($.Fragment = Oe('react.fragment')),
    ($.StrictMode = Oe('react.strict_mode')),
    ($.Profiler = Oe('react.profiler')),
    (Wa = Oe('react.provider')),
    (Ha = Oe('react.context')),
    (Qa = Oe('react.forward_ref')),
    ($.Suspense = Oe('react.suspense')),
    (qa = Oe('react.memo')),
    (Ka = Oe('react.lazy'))
}
var Ju = typeof Symbol == 'function' && Symbol.iterator
function gd(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ju && e[Ju]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
function _r(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Xa = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Ya = {}
function vn(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Ya), (this.updater = n || Xa)
}
vn.prototype.isReactComponent = {}
vn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(_r(85))
  this.updater.enqueueSetState(this, e, t, 'setState')
}
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ga() {}
Ga.prototype = vn.prototype
function Fl(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Ya), (this.updater = n || Xa)
}
var Ul = (Fl.prototype = new Ga())
Ul.constructor = Fl
zl(Ul, vn.prototype)
Ul.isPureReactComponent = !0
var Bl = { current: null },
  ba = Object.prototype.hasOwnProperty,
  Ja = { key: !0, ref: !0, __self: !0, __source: !0 }
function Za(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      ba.call(t, r) && !Ja.hasOwnProperty(r) && (o[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) o.children = n
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2]
    o.children = s
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r])
  return { $$typeof: hn, type: e, key: i, ref: l, props: o, _owner: Bl.current }
}
function wd(e, t) {
  return {
    $$typeof: hn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function Vl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === hn
}
function Sd(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Zu = /\/+/g
function pi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Sd('' + e.key)
    : t.toString(36)
}
function Hr(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case hn:
          case Va:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + pi(l, 0) : r),
      Array.isArray(o)
        ? ((n = ''),
          e != null && (n = e.replace(Zu, '$&/') + '/'),
          Hr(o, t, n, '', function (a) {
            return a
          }))
        : o != null &&
          (Vl(o) &&
            (o = wd(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Zu, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Array.isArray(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var s = r + pi(i, u)
      l += Hr(i, t, n, s, o)
    }
  else if (((s = gd(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + pi(i, u++)), (l += Hr(i, t, n, s, o))
  else if (i === 'object')
    throw (
      ((t = '' + e),
      Error(
        _r(
          31,
          t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t
        )
      ))
    )
  return l
}
function Rr(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Hr(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function _d(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 && ((n = n.default), (e._status = 1), (e._result = n))
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n))
        }
      )
  }
  if (e._status === 1) return e._result
  throw e._result
}
var ef = { current: null }
function Qe() {
  var e = ef.current
  if (e === null) throw Error(_r(321))
  return e
}
var Ed = {
  ReactCurrentDispatcher: ef,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Bl,
  IsSomeRendererActing: { current: !1 },
  assign: zl
}
$.Children = {
  map: Rr,
  forEach: function (e, t, n) {
    Rr(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      Rr(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Rr(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Vl(e)) throw Error(_r(143))
    return e
  }
}
$.Component = vn
$.PureComponent = Fl
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ed
$.cloneElement = function (e, t, n) {
  if (e == null) throw Error(_r(267, e))
  var r = zl({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Bl.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (s in t)
      ba.call(t, s) &&
        !Ja.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2]
    r.children = u
  }
  return { $$typeof: hn, type: e.type, key: o, ref: i, props: r, _owner: l }
}
$.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Ha,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }),
    (e.Provider = { $$typeof: Wa, _context: e }),
    (e.Consumer = e)
  )
}
$.createElement = Za
$.createFactory = function (e) {
  var t = Za.bind(null, e)
  return (t.type = e), t
}
$.createRef = function () {
  return { current: null }
}
$.forwardRef = function (e) {
  return { $$typeof: Qa, render: e }
}
$.isValidElement = Vl
$.lazy = function (e) {
  return { $$typeof: Ka, _payload: { _status: -1, _result: e }, _init: _d }
}
$.memo = function (e, t) {
  return { $$typeof: qa, type: e, compare: t === void 0 ? null : t }
}
$.useCallback = function (e, t) {
  return Qe().useCallback(e, t)
}
$.useContext = function (e, t) {
  return Qe().useContext(e, t)
}
$.useDebugValue = function () {}
$.useEffect = function (e, t) {
  return Qe().useEffect(e, t)
}
$.useImperativeHandle = function (e, t, n) {
  return Qe().useImperativeHandle(e, t, n)
}
$.useLayoutEffect = function (e, t) {
  return Qe().useLayoutEffect(e, t)
}
$.useMemo = function (e, t) {
  return Qe().useMemo(e, t)
}
$.useReducer = function (e, t, n) {
  return Qe().useReducer(e, t, n)
}
$.useRef = function (e) {
  return Qe().useRef(e)
}
$.useState = function (e) {
  return Qe().useState(e)
}
$.version = '17.0.0'
B.exports = $
var tf = B.exports,
  Wl = { exports: {} },
  Pe = {},
  nf = { exports: {} },
  rf = {}
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  var t, n, r, o
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var l = Date,
      u = l.now()
    e.unstable_now = function () {
      return l.now() - u
    }
  }
  if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
    var s = null,
      a = null,
      f = function () {
        if (s !== null)
          try {
            var k = e.unstable_now()
            s(!0, k), (s = null)
          } catch (T) {
            throw (setTimeout(f, 0), T)
          }
      }
    ;(t = function (k) {
      s !== null ? setTimeout(t, 0, k) : ((s = k), setTimeout(f, 0))
    }),
      (n = function (k, T) {
        a = setTimeout(k, T)
      }),
      (r = function () {
        clearTimeout(a)
      }),
      (e.unstable_shouldYield = function () {
        return !1
      }),
      (o = e.unstable_forceFrameRate = function () {})
  } else {
    var v = window.setTimeout,
      m = window.clearTimeout
    if (typeof console != 'undefined') {
      var g = window.cancelAnimationFrame
      typeof window.requestAnimationFrame != 'function' &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof g != 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          )
    }
    var S = !1,
      w = null,
      d = -1,
      c = 5,
      p = 0
    ;(e.unstable_shouldYield = function () {
      return e.unstable_now() >= p
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (k) {
        0 > k || 125 < k
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (c = 0 < k ? Math.floor(1e3 / k) : 5)
      })
    var h = new MessageChannel(),
      y = h.port2
    ;(h.port1.onmessage = function () {
      if (w !== null) {
        var k = e.unstable_now()
        p = k + c
        try {
          w(!0, k) ? y.postMessage(null) : ((S = !1), (w = null))
        } catch (T) {
          throw (y.postMessage(null), T)
        }
      } else S = !1
    }),
      (t = function (k) {
        ;(w = k), S || ((S = !0), y.postMessage(null))
      }),
      (n = function (k, T) {
        d = v(function () {
          k(e.unstable_now())
        }, T)
      }),
      (r = function () {
        m(d), (d = -1)
      })
  }
  function x(k, T) {
    var L = k.length
    k.push(T)
    e: for (;;) {
      var W = (L - 1) >>> 1,
        G = k[W]
      if (G !== void 0 && 0 < R(G, T)) (k[W] = T), (k[L] = G), (L = W)
      else break e
    }
  }
  function E(k) {
    return (k = k[0]), k === void 0 ? null : k
  }
  function O(k) {
    var T = k[0]
    if (T !== void 0) {
      var L = k.pop()
      if (L !== T) {
        k[0] = L
        e: for (var W = 0, G = k.length; W < G; ) {
          var gt = 2 * (W + 1) - 1,
            wt = k[gt],
            xn = gt + 1,
            It = k[xn]
          if (wt !== void 0 && 0 > R(wt, L))
            It !== void 0 && 0 > R(It, wt)
              ? ((k[W] = It), (k[xn] = L), (W = xn))
              : ((k[W] = wt), (k[gt] = L), (W = gt))
          else if (It !== void 0 && 0 > R(It, L)) (k[W] = It), (k[xn] = L), (W = xn)
          else break e
        }
      }
      return T
    }
    return null
  }
  function R(k, T) {
    var L = k.sortIndex - T.sortIndex
    return L !== 0 ? L : k.id - T.id
  }
  var P = [],
    Y = [],
    ai = 1,
    Se = null,
    te = 3,
    Tr = !1,
    yt = !1,
    Cn = !1
  function fi(k) {
    for (var T = E(Y); T !== null; ) {
      if (T.callback === null) O(Y)
      else if (T.startTime <= k) O(Y), (T.sortIndex = T.expirationTime), x(P, T)
      else break
      T = E(Y)
    }
  }
  function ci(k) {
    if (((Cn = !1), fi(k), !yt))
      if (E(P) !== null) (yt = !0), t(di)
      else {
        var T = E(Y)
        T !== null && n(ci, T.startTime - k)
      }
  }
  function di(k, T) {
    ;(yt = !1), Cn && ((Cn = !1), r()), (Tr = !0)
    var L = te
    try {
      for (
        fi(T), Se = E(P);
        Se !== null && (!(Se.expirationTime > T) || (k && !e.unstable_shouldYield()));

      ) {
        var W = Se.callback
        if (typeof W == 'function') {
          ;(Se.callback = null), (te = Se.priorityLevel)
          var G = W(Se.expirationTime <= T)
          ;(T = e.unstable_now()),
            typeof G == 'function' ? (Se.callback = G) : Se === E(P) && O(P),
            fi(T)
        } else O(P)
        Se = E(P)
      }
      if (Se !== null) var gt = !0
      else {
        var wt = E(Y)
        wt !== null && n(ci, wt.startTime - T), (gt = !1)
      }
      return gt
    } finally {
      ;(Se = null), (te = L), (Tr = !1)
    }
  }
  var dd = o
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null
    }),
    (e.unstable_continueExecution = function () {
      yt || Tr || ((yt = !0), t(di))
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return te
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return E(P)
    }),
    (e.unstable_next = function (k) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var T = 3
          break
        default:
          T = te
      }
      var L = te
      te = T
      try {
        return k()
      } finally {
        te = L
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = dd),
    (e.unstable_runWithPriority = function (k, T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          k = 3
      }
      var L = te
      te = k
      try {
        return T()
      } finally {
        te = L
      }
    }),
    (e.unstable_scheduleCallback = function (k, T, L) {
      var W = e.unstable_now()
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? W + L : W))
          : (L = W),
        k)
      ) {
        case 1:
          var G = -1
          break
        case 2:
          G = 250
          break
        case 5:
          G = 1073741823
          break
        case 4:
          G = 1e4
          break
        default:
          G = 5e3
      }
      return (
        (G = L + G),
        (k = {
          id: ai++,
          callback: T,
          priorityLevel: k,
          startTime: L,
          expirationTime: G,
          sortIndex: -1
        }),
        L > W
          ? ((k.sortIndex = L),
            x(Y, k),
            E(P) === null && k === E(Y) && (Cn ? r() : (Cn = !0), n(ci, L - W)))
          : ((k.sortIndex = G), x(P, k), yt || Tr || ((yt = !0), t(di))),
        k
      )
    }),
    (e.unstable_wrapCallback = function (k) {
      var T = te
      return function () {
        var L = te
        te = T
        try {
          return k.apply(this, arguments)
        } finally {
          te = L
        }
      }
    })
})(rf)
nf.exports = rf
/** @license React v17.0.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $o = B.exports,
  F = Ba,
  K = nf.exports
function _(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
if (!$o) throw Error(_(227))
var of = new Set(),
  or = {}
function Lt(e, t) {
  an(e, t), an(e + 'Capture', t)
}
function an(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) of.add(t[e])
}
var He = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  kd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  es = Object.prototype.hasOwnProperty,
  ts = {},
  ns = {}
function Cd(e) {
  return es.call(ns, e)
    ? !0
    : es.call(ts, e)
    ? !1
    : kd.test(e)
    ? (ns[e] = !0)
    : ((ts[e] = !0), !1)
}
function xd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Pd(e, t, n, r) {
  if (t === null || typeof t == 'undefined' || xd(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ae(e, t, n, r, o, i, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l)
}
var ee = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new ae(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  ee[t] = new ae(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    ee[e] = new ae(e, 2, !1, e, null, !1, !1)
  }
)
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new ae(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ee[e] = new ae(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new ae(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Hl = /[\-:]([a-z])/g
function Ql(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Hl, Ql)
    ee[t] = new ae(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Hl, Ql)
    ee[t] = new ae(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Hl, Ql)
  ee[t] = new ae(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ee.xlinkHref = new ae(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function ql(e, t, n, r) {
  var o = ee.hasOwnProperty(t) ? ee[t] : null,
    i =
      o !== null
        ? o.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== 'o' && t[0] !== 'O') ||
            (t[1] !== 'n' && t[1] !== 'N')
          )
  i ||
    (Pd(t, n, o, r) && (n = null),
    r || o === null
      ? Cd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var $t = $o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zn = 60103,
  Et = 60106,
  Xe = 60107,
  Kl = 60108,
  Hn = 60114,
  Xl = 60109,
  Yl = 60110,
  Mo = 60112,
  Qn = 60113,
  ro = 60120,
  Do = 60115,
  Gl = 60116,
  bl = 60121,
  Jl = 60128,
  lf = 60129,
  Zl = 60130,
  Qi = 60131
if (typeof Symbol == 'function' && Symbol.for) {
  var q = Symbol.for
  ;(zn = q('react.element')),
    (Et = q('react.portal')),
    (Xe = q('react.fragment')),
    (Kl = q('react.strict_mode')),
    (Hn = q('react.profiler')),
    (Xl = q('react.provider')),
    (Yl = q('react.context')),
    (Mo = q('react.forward_ref')),
    (Qn = q('react.suspense')),
    (ro = q('react.suspense_list')),
    (Do = q('react.memo')),
    (Gl = q('react.lazy')),
    (bl = q('react.block')),
    q('react.scope'),
    (Jl = q('react.opaque.id')),
    (lf = q('react.debug_trace_mode')),
    (Zl = q('react.offscreen')),
    (Qi = q('react.legacy_hidden'))
}
var rs = typeof Symbol == 'function' && Symbol.iterator
function Pn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (rs && e[rs]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var mi
function Fn(e) {
  if (mi === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      mi = (t && t[1]) || ''
    }
  return (
    `
` +
    mi +
    e
  )
}
var hi = !1
function jr(e, t) {
  if (!e || hi) return ''
  hi = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (s) {
          var r = s
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (s) {
          r = s
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (s) {
        r = s
      }
      e()
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u]))
                return (
                  `
` + o[l].replace(' at new ', ' at ')
                )
            while (1 <= l && 0 <= u)
          break
        }
    }
  } finally {
    ;(hi = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Fn(e) : ''
}
function Od(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type)
    case 16:
      return Fn('Lazy')
    case 13:
      return Fn('Suspense')
    case 19:
      return Fn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = jr(e.type, !1)), e
    case 11:
      return (e = jr(e.type.render, !1)), e
    case 22:
      return (e = jr(e.type._render, !1)), e
    case 1:
      return (e = jr(e.type, !0)), e
    default:
      return ''
  }
}
function Gt(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Xe:
      return 'Fragment'
    case Et:
      return 'Portal'
    case Hn:
      return 'Profiler'
    case Kl:
      return 'StrictMode'
    case Qn:
      return 'Suspense'
    case ro:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Yl:
        return (e.displayName || 'Context') + '.Consumer'
      case Xl:
        return (e._context.displayName || 'Context') + '.Provider'
      case Mo:
        var t = e.render
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        )
      case Do:
        return Gt(e.type)
      case bl:
        return Gt(e._render)
      case Gl:
        ;(t = e._payload), (e = e._init)
        try {
          return Gt(e(t))
        } catch {}
    }
  return null
}
function ut(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e
    default:
      return ''
  }
}
function uf(e) {
  var t = e.type
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  )
}
function Nd(e) {
  var t = uf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n != 'undefined' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (l) {
          ;(r = '' + l), i.call(this, l)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function Lr(e) {
  e._valueTracker || (e._valueTracker = Nd(e))
}
function sf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = uf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function oo(e) {
  if (
    ((e = e || (typeof document != 'undefined' ? document : void 0)),
    typeof e == 'undefined')
  )
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function qi(e, t) {
  var n = t.checked
  return F({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked
  })
}
function os(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function af(e, t) {
  ;(t = t.checked), t != null && ql(e, 'checked', t, !1)
}
function Ki(e, t) {
  af(e, t)
  var n = ut(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Xi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Xi(e, t.type, ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function is(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Xi(e, t, n) {
  ;(t !== 'number' || oo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
function Td(e) {
  var t = ''
  return (
    $o.Children.forEach(e, function (n) {
      n != null && (t += n)
    }),
    t
  )
}
function Yi(e, t) {
  return (e = F({ children: void 0 }, t)), (t = Td(t.children)) && (e.children = t), e
}
function bt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + ut(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Gi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91))
  return F({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function ls(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92))
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(_(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: ut(n) }
}
function ff(e, t) {
  var n = ut(t.value),
    r = ut(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function us(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
var bi = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg'
}
function cf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Ji(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? cf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var $r,
  df = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== bi.svg || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        $r = $r || document.createElement('div'),
          $r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = $r.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function ir(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var qn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Rd = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(qn).forEach(function (e) {
  Rd.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e])
  })
})
function pf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (qn.hasOwnProperty(e) && qn[e])
    ? ('' + t).trim()
    : t + 'px'
}
function mf(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = pf(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var jd = F(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function Zi(e, t) {
  if (t) {
    if (jd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60))
      if (
        !(
          typeof t.dangerouslySetInnerHTML == 'object' &&
          '__html' in t.dangerouslySetInnerHTML
        )
      )
        throw Error(_(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62))
  }
}
function el(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
function eu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var tl = null,
  Jt = null,
  Zt = null
function ss(e) {
  if ((e = kr(e))) {
    if (typeof tl != 'function') throw Error(_(280))
    var t = e.stateNode
    t && ((t = Bo(t)), tl(e.stateNode, e.type, t))
  }
}
function hf(e) {
  Jt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Jt = e)
}
function vf() {
  if (Jt) {
    var e = Jt,
      t = Zt
    if (((Zt = Jt = null), ss(e), t)) for (e = 0; e < t.length; e++) ss(t[e])
  }
}
function tu(e, t) {
  return e(t)
}
function yf(e, t, n, r, o) {
  return e(t, n, r, o)
}
function nu() {}
var gf = tu,
  kt = !1,
  vi = !1
function ru() {
  ;(Jt !== null || Zt !== null) && (nu(), vf())
}
function Ld(e, t, n) {
  if (vi) return e(t, n)
  vi = !0
  try {
    return gf(e, t, n)
  } finally {
    ;(vi = !1), ru()
  }
}
function lr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Bo(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(_(231, t, typeof n))
  return n
}
var nl = !1
if (He)
  try {
    var On = {}
    Object.defineProperty(On, 'passive', {
      get: function () {
        nl = !0
      }
    }),
      window.addEventListener('test', On, On),
      window.removeEventListener('test', On, On)
  } catch {
    nl = !1
  }
function $d(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (f) {
    this.onError(f)
  }
}
var Kn = !1,
  io = null,
  lo = !1,
  rl = null,
  Md = {
    onError: function (e) {
      ;(Kn = !0), (io = e)
    }
  }
function Dd(e, t, n, r, o, i, l, u, s) {
  ;(Kn = !1), (io = null), $d.apply(Md, arguments)
}
function Ad(e, t, n, r, o, i, l, u, s) {
  if ((Dd.apply(this, arguments), Kn)) {
    if (Kn) {
      var a = io
      ;(Kn = !1), (io = null)
    } else throw Error(_(198))
    lo || ((lo = !0), (rl = a))
  }
}
function Mt(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function wf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated
  }
  return null
}
function as(e) {
  if (Mt(e) !== e) throw Error(_(188))
}
function Id(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(_(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return as(o), e
        if (i === r) return as(o), t
        i = i.sibling
      }
      throw Error(_(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          ;(l = !0), (n = o), (r = i)
          break
        }
        if (u === r) {
          ;(l = !0), (r = o), (n = i)
          break
        }
        u = u.sibling
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            ;(l = !0), (n = i), (r = o)
            break
          }
          if (u === r) {
            ;(l = !0), (r = i), (n = o)
            break
          }
          u = u.sibling
        }
        if (!l) throw Error(_(189))
      }
    }
    if (n.alternate !== r) throw Error(_(190))
  }
  if (n.tag !== 3) throw Error(_(188))
  return n.stateNode.current === n ? e : t
}
function Sf(e) {
  if (((e = Id(e)), !e)) return null
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t
    if (t.child) (t.child.return = t), (t = t.child)
    else {
      if (t === e) break
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return null
}
function fs(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0
    t = t.return
  }
  return !1
}
var _f,
  ou,
  Ef,
  kf,
  ol = !1,
  je = [],
  Ze = null,
  et = null,
  tt = null,
  ur = new Map(),
  sr = new Map(),
  Nn = [],
  cs =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function il(e, t, n, r, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: o,
    targetContainers: [r]
  }
}
function ds(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ze = null
      break
    case 'dragenter':
    case 'dragleave':
      et = null
      break
    case 'mouseover':
    case 'mouseout':
      tt = null
      break
    case 'pointerover':
    case 'pointerout':
      ur.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      sr.delete(t.pointerId)
  }
}
function Tn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = il(t, n, r, o, i)), t !== null && ((t = kr(t)), t !== null && ou(t)), e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function zd(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Ze = Tn(Ze, e, t, n, r, o)), !0
    case 'dragenter':
      return (et = Tn(et, e, t, n, r, o)), !0
    case 'mouseover':
      return (tt = Tn(tt, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return ur.set(i, Tn(ur.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), sr.set(i, Tn(sr.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}
function Fd(e) {
  var t = Ct(e.target)
  if (t !== null) {
    var n = Mt(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wf(n)), t !== null)) {
          ;(e.blockedOn = t),
            kf(e.lanePriority, function () {
              K.unstable_runWithPriority(e.priority, function () {
                Ef(n)
              })
            })
          return
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Qr(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n !== null) return (t = kr(n)), t !== null && ou(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ps(e, t, n) {
  Qr(e) && n.delete(t)
}
function Ud() {
  for (ol = !1; 0 < je.length; ) {
    var e = je[0]
    if (e.blockedOn !== null) {
      ;(e = kr(e.blockedOn)), e !== null && _f(e)
      break
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = su(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (n !== null) {
        e.blockedOn = n
        break
      }
      t.shift()
    }
    e.blockedOn === null && je.shift()
  }
  Ze !== null && Qr(Ze) && (Ze = null),
    et !== null && Qr(et) && (et = null),
    tt !== null && Qr(tt) && (tt = null),
    ur.forEach(ps),
    sr.forEach(ps)
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ol || ((ol = !0), K.unstable_scheduleCallback(K.unstable_NormalPriority, Ud)))
}
function Cf(e) {
  function t(o) {
    return Rn(o, e)
  }
  if (0 < je.length) {
    Rn(je[0], e)
    for (var n = 1; n < je.length; n++) {
      var r = je[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Ze !== null && Rn(Ze, e),
      et !== null && Rn(et, e),
      tt !== null && Rn(tt, e),
      ur.forEach(t),
      sr.forEach(t),
      n = 0;
    n < Nn.length;
    n++
  )
    (r = Nn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
    Fd(n), n.blockedOn === null && Nn.shift()
}
function Mr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Ht = {
    animationend: Mr('Animation', 'AnimationEnd'),
    animationiteration: Mr('Animation', 'AnimationIteration'),
    animationstart: Mr('Animation', 'AnimationStart'),
    transitionend: Mr('Transition', 'TransitionEnd')
  },
  yi = {},
  xf = {}
He &&
  ((xf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  'TransitionEvent' in window || delete Ht.transitionend.transition)
function Ao(e) {
  if (yi[e]) return yi[e]
  if (!Ht[e]) return e
  var t = Ht[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in xf) return (yi[e] = t[n])
  return e
}
var Pf = Ao('animationend'),
  Of = Ao('animationiteration'),
  Nf = Ao('animationstart'),
  Tf = Ao('transitionend'),
  Rf = new Map(),
  iu = new Map(),
  Bd = [
    'abort',
    'abort',
    Pf,
    'animationEnd',
    Of,
    'animationIteration',
    Nf,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    Tf,
    'transitionEnd',
    'waiting',
    'waiting'
  ]
function lu(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      o = e[n + 1]
    ;(o = 'on' + (o[0].toUpperCase() + o.slice(1))),
      iu.set(r, t),
      Rf.set(r, o),
      Lt(o, [r])
  }
}
var Vd = K.unstable_now
Vd()
var D = 8
function Vt(e) {
  if ((1 & e) !== 0) return (D = 15), 1
  if ((2 & e) !== 0) return (D = 14), 2
  if ((4 & e) !== 0) return (D = 13), 4
  var t = 24 & e
  return t !== 0
    ? ((D = 12), t)
    : (e & 32) !== 0
    ? ((D = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((D = 10), t)
        : (e & 256) !== 0
        ? ((D = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((D = 8), t)
            : (e & 4096) !== 0
            ? ((D = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((D = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((D = 5), t)
                    : e & 67108864
                    ? ((D = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((D = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((D = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((D = 1), 1073741824)
                        : ((D = 8), e))))))
}
function Wd(e) {
  switch (e) {
    case 99:
      return 15
    case 98:
      return 10
    case 97:
    case 96:
      return 8
    case 95:
      return 2
    default:
      return 0
  }
}
function Hd(e) {
  switch (e) {
    case 15:
    case 14:
      return 99
    case 13:
    case 12:
    case 11:
    case 10:
      return 98
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97
    case 3:
    case 2:
    case 1:
      return 95
    case 0:
      return 90
    default:
      throw Error(_(358, e))
  }
}
function ar(e, t) {
  var n = e.pendingLanes
  if (n === 0) return (D = 0)
  var r = 0,
    o = 0,
    i = e.expiredLanes,
    l = e.suspendedLanes,
    u = e.pingedLanes
  if (i !== 0) (r = i), (o = D = 15)
  else if (((i = n & 134217727), i !== 0)) {
    var s = i & ~l
    s !== 0 ? ((r = Vt(s)), (o = D)) : ((u &= i), u !== 0 && ((r = Vt(u)), (o = D)))
  } else
    (i = n & ~l), i !== 0 ? ((r = Vt(i)), (o = D)) : u !== 0 && ((r = Vt(u)), (o = D))
  if (r === 0) return 0
  if (
    ((r = 31 - st(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & l) === 0)
  ) {
    if ((Vt(t), o <= D)) return t
    D = o
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - st(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function jf(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function uo(e, t) {
  switch (e) {
    case 15:
      return 1
    case 14:
      return 2
    case 12:
      return (e = Wt(24 & ~t)), e === 0 ? uo(10, t) : e
    case 10:
      return (e = Wt(192 & ~t)), e === 0 ? uo(8, t) : e
    case 8:
      return (
        (e = Wt(3584 & ~t)), e === 0 && ((e = Wt(4186112 & ~t)), e === 0 && (e = 512)), e
      )
    case 2:
      return (t = Wt(805306368 & ~t)), t === 0 && (t = 268435456), t
  }
  throw Error(_(358, e))
}
function Wt(e) {
  return e & -e
}
function Io(e, t, n) {
  e.pendingLanes |= t
  var r = t - 1
  ;(e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n)
}
var st = Math.clz32 ? Math.clz32 : Kd,
  Qd = Math.log,
  qd = Math.LN2
function Kd(e) {
  return e === 0 ? 32 : (31 - ((Qd(e) / qd) | 0)) | 0
}
var Xd = K.unstable_UserBlockingPriority,
  Yd = K.unstable_runWithPriority,
  qr = !0
function Gd(e, t, n, r) {
  kt || nu()
  var o = uu,
    i = kt
  kt = !0
  try {
    yf(o, e, t, n, r)
  } finally {
    ;(kt = i) || ru()
  }
}
function bd(e, t, n, r) {
  Yd(Xd, uu.bind(null, e, t, n, r))
}
function uu(e, t, n, r) {
  if (qr) {
    var o
    if ((o = (t & 4) === 0) && 0 < je.length && -1 < cs.indexOf(e))
      (e = il(null, e, t, n, r)), je.push(e)
    else {
      var i = su(e, t, n, r)
      if (i === null) o && ds(e, r)
      else {
        if (o) {
          if (-1 < cs.indexOf(e)) {
            ;(e = il(i, e, t, n, r)), je.push(e)
            return
          }
          if (zd(i, e, t, n, r)) return
          ds(e, r)
        }
        Hf(e, t, r, null, n)
      }
    }
  }
}
function su(e, t, n, r) {
  var o = eu(r)
  if (((o = Ct(o)), o !== null)) {
    var i = Mt(o)
    if (i === null) o = null
    else {
      var l = i.tag
      if (l === 13) {
        if (((o = wf(i)), o !== null)) return o
        o = null
      } else if (l === 3) {
        if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null
        o = null
      } else i !== o && (o = null)
    }
  }
  return Hf(e, t, r, o, n), null
}
var Ge = null,
  au = null,
  Kr = null
function Lf() {
  if (Kr) return Kr
  var e,
    t = au,
    n = t.length,
    r,
    o = 'value' in Ge ? Ge.value : Ge.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Kr = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Xr(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Dr() {
  return !0
}
function ms() {
  return !1
}
function ye(e) {
  function t(n, r, o, i, l) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null)
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Dr
        : ms),
      (this.isPropagationStopped = ms),
      this
    )
  }
  return (
    F(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Dr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Dr))
      },
      persist: function () {},
      isPersistent: Dr
    }),
    t
  )
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  fu = ye(yn),
  Er = F({}, yn, { view: 0, detail: 0 }),
  Jd = ye(Er),
  gi,
  wi,
  jn,
  zo = F({}, Er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== jn &&
            (jn && e.type === 'mousemove'
              ? ((gi = e.screenX - jn.screenX), (wi = e.screenY - jn.screenY))
              : (wi = gi = 0),
            (jn = e)),
          gi)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : wi
    }
  }),
  hs = ye(zo),
  Zd = F({}, zo, { dataTransfer: 0 }),
  ep = ye(Zd),
  tp = F({}, Er, { relatedTarget: 0 }),
  Si = ye(tp),
  np = F({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rp = ye(np),
  op = F({}, yn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  ip = ye(op),
  lp = F({}, yn, { data: 0 }),
  vs = ye(lp),
  up = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  sp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  ap = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function fp(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = ap[e]) ? !!t[e] : !1
}
function cu() {
  return fp
}
var cp = F({}, Er, {
    key: function (e) {
      if (e.key) {
        var t = up[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? sp[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cu,
    charCode: function (e) {
      return e.type === 'keypress' ? Xr(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Xr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  dp = ye(cp),
  pp = F({}, zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  ys = ye(pp),
  mp = F({}, Er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cu
  }),
  hp = ye(mp),
  vp = F({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yp = ye(vp),
  gp = F({}, zo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  wp = ye(gp),
  Sp = [9, 13, 27, 32],
  du = He && 'CompositionEvent' in window,
  Xn = null
He && 'documentMode' in document && (Xn = document.documentMode)
var _p = He && 'TextEvent' in window && !Xn,
  $f = He && (!du || (Xn && 8 < Xn && 11 >= Xn)),
  gs = String.fromCharCode(32),
  ws = !1
function Mf(e, t) {
  switch (e) {
    case 'keyup':
      return Sp.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Df(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Qt = !1
function Ep(e, t) {
  switch (e) {
    case 'compositionend':
      return Df(t)
    case 'keypress':
      return t.which !== 32 ? null : ((ws = !0), gs)
    case 'textInput':
      return (e = t.data), e === gs && ws ? null : e
    default:
      return null
  }
}
function kp(e, t) {
  if (Qt)
    return e === 'compositionend' || (!du && Mf(e, t))
      ? ((e = Lf()), (Kr = au = Ge = null), (Qt = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return $f && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Cp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function Ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Cp[e.type] : t === 'textarea'
}
function Af(e, t, n, r) {
  hf(r),
    (t = so(t, 'onChange')),
    0 < t.length &&
      ((n = new fu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var Yn = null,
  fr = null
function xp(e) {
  Bf(e, 0)
}
function Fo(e) {
  var t = Kt(e)
  if (sf(t)) return e
}
function Pp(e, t) {
  if (e === 'change') return t
}
var If = !1
if (He) {
  var _i
  if (He) {
    var Ei = 'oninput' in document
    if (!Ei) {
      var _s = document.createElement('div')
      _s.setAttribute('oninput', 'return;'), (Ei = typeof _s.oninput == 'function')
    }
    _i = Ei
  } else _i = !1
  If = _i && (!document.documentMode || 9 < document.documentMode)
}
function Es() {
  Yn && (Yn.detachEvent('onpropertychange', zf), (fr = Yn = null))
}
function zf(e) {
  if (e.propertyName === 'value' && Fo(fr)) {
    var t = []
    if ((Af(t, fr, e, eu(e)), (e = xp), kt)) e(t)
    else {
      kt = !0
      try {
        tu(e, t)
      } finally {
        ;(kt = !1), ru()
      }
    }
  }
}
function Op(e, t, n) {
  e === 'focusin'
    ? (Es(), (Yn = t), (fr = n), Yn.attachEvent('onpropertychange', zf))
    : e === 'focusout' && Es()
}
function Np(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Fo(fr)
}
function Tp(e, t) {
  if (e === 'click') return Fo(t)
}
function Rp(e, t) {
  if (e === 'input' || e === 'change') return Fo(t)
}
function jp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var _e = typeof Object.is == 'function' ? Object.is : jp,
  Lp = Object.prototype.hasOwnProperty
function cr(e, t) {
  if (_e(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) if (!Lp.call(t, n[r]) || !_e(e[n[r]], t[n[r]])) return !1
  return !0
}
function ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Cs(e, t) {
  var n = ks(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = ks(n)
  }
}
function Ff(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ff(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function xs() {
  for (var e = window, t = oo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = oo(e.document)
  }
  return t
}
function ll(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
var $p = He && 'documentMode' in document && 11 >= document.documentMode,
  qt = null,
  ul = null,
  Gn = null,
  sl = !1
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  sl ||
    qt == null ||
    qt !== oo(r) ||
    ((r = qt),
    'selectionStart' in r && ll(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (Gn && cr(Gn, r)) ||
      ((Gn = r),
      (r = so(ul, 'onSelect')),
      0 < r.length &&
        ((t = new fu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qt))))
}
lu(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' '
  ),
  0
)
lu(
  'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
    ' '
  ),
  1
)
lu(Bd, 2)
for (
  var Os =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' '
      ),
    ki = 0;
  ki < Os.length;
  ki++
)
  iu.set(Os[ki], 0)
an('onMouseEnter', ['mouseout', 'mouseover'])
an('onMouseLeave', ['mouseout', 'mouseover'])
an('onPointerEnter', ['pointerout', 'pointerover'])
an('onPointerLeave', ['pointerout', 'pointerover'])
Lt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Lt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Lt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Lt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Lt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Lt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Un =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Uf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Un))
function Ns(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Ad(r, t, void 0, e), (e.currentTarget = null)
}
function Bf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e
          Ns(o, u, a), (i = s)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e
          Ns(o, u, a), (i = s)
        }
    }
  }
  if (lo) throw ((e = rl), (lo = !1), (rl = null), e)
}
function A(e, t) {
  var n = qf(t),
    r = e + '__bubble'
  n.has(r) || (Wf(t, e, 2, !1), n.add(r))
}
var Ts = '_reactListening' + Math.random().toString(36).slice(2)
function Vf(e) {
  e[Ts] ||
    ((e[Ts] = !0),
    of.forEach(function (t) {
      Uf.has(t) || Rs(t, !1, e, null), Rs(t, !0, e, null)
    }))
}
function Rs(e, t, n, r) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    i = n
  if (
    (e === 'selectionchange' && n.nodeType !== 9 && (i = n.ownerDocument),
    r !== null && !t && Uf.has(e))
  ) {
    if (e !== 'scroll') return
    ;(o |= 2), (i = r)
  }
  var l = qf(i),
    u = e + '__' + (t ? 'capture' : 'bubble')
  l.has(u) || (t && (o |= 4), Wf(i, e, o, t), l.add(u))
}
function Wf(e, t, n, r) {
  var o = iu.get(t)
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = Gd
      break
    case 1:
      o = bd
      break
    default:
      o = uu
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !nl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function Hf(e, t, n, r, o) {
  var i = r
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return
            l = l.return
          }
        for (; u !== null; ) {
          if (((l = Ct(u)), l === null)) return
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Ld(function () {
    var a = i,
      f = eu(n),
      v = []
    e: {
      var m = Rf.get(e)
      if (m !== void 0) {
        var g = fu,
          S = e
        switch (e) {
          case 'keypress':
            if (Xr(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = dp
            break
          case 'focusin':
            ;(S = 'focus'), (g = Si)
            break
          case 'focusout':
            ;(S = 'blur'), (g = Si)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Si
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = hs
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = ep
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = hp
            break
          case Pf:
          case Of:
          case Nf:
            g = rp
            break
          case Tf:
            g = yp
            break
          case 'scroll':
            g = Jd
            break
          case 'wheel':
            g = wp
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = ip
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ys
        }
        var w = (t & 4) !== 0,
          d = !w && e === 'scroll',
          c = w ? (m !== null ? m + 'Capture' : null) : m
        w = []
        for (var p = a, h; p !== null; ) {
          h = p
          var y = h.stateNode
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y), c !== null && ((y = lr(p, c)), y != null && w.push(dr(p, y, h)))),
            d)
          )
            break
          p = p.return
        }
        0 < w.length &&
          ((m = new g(m, S, null, n, f)), v.push({ event: m, listeners: w }))
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          m &&
            (t & 16) === 0 &&
            (S = n.relatedTarget || n.fromElement) &&
            (Ct(S) || S[gn]))
        )
          break e
        if (
          (g || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((S = n.relatedTarget || n.toElement),
              (g = a),
              (S = S ? Ct(S) : null),
              S !== null &&
                ((d = Mt(S)), S !== d || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = a)),
          g !== S)
        ) {
          if (
            ((w = hs),
            (y = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = ys), (y = 'onPointerLeave'), (c = 'onPointerEnter'), (p = 'pointer')),
            (d = g == null ? m : Kt(g)),
            (h = S == null ? m : Kt(S)),
            (m = new w(y, p + 'leave', g, n, f)),
            (m.target = d),
            (m.relatedTarget = h),
            (y = null),
            Ct(f) === a &&
              ((w = new w(c, p + 'enter', S, n, f)),
              (w.target = h),
              (w.relatedTarget = d),
              (y = w)),
            (d = y),
            g && S)
          )
            t: {
              for (w = g, c = S, p = 0, h = w; h; h = zt(h)) p++
              for (h = 0, y = c; y; y = zt(y)) h++
              for (; 0 < p - h; ) (w = zt(w)), p--
              for (; 0 < h - p; ) (c = zt(c)), h--
              for (; p--; ) {
                if (w === c || (c !== null && w === c.alternate)) break t
                ;(w = zt(w)), (c = zt(c))
              }
              w = null
            }
          else w = null
          g !== null && js(v, m, g, w, !1), S !== null && d !== null && js(v, d, S, w, !0)
        }
      }
      e: {
        if (
          ((m = a ? Kt(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && m.type === 'file'))
        )
          var x = Pp
        else if (Ss(m))
          if (If) x = Rp
          else {
            x = Np
            var E = Op
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (x = Tp)
        if (x && (x = x(e, a))) {
          Af(v, x, n, f)
          break e
        }
        E && E(e, m, a),
          e === 'focusout' &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === 'number' &&
            Xi(m, 'number', m.value)
      }
      switch (((E = a ? Kt(a) : window), e)) {
        case 'focusin':
          ;(Ss(E) || E.contentEditable === 'true') && ((qt = E), (ul = a), (Gn = null))
          break
        case 'focusout':
          Gn = ul = qt = null
          break
        case 'mousedown':
          sl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(sl = !1), Ps(v, n, f)
          break
        case 'selectionchange':
          if ($p) break
        case 'keydown':
        case 'keyup':
          Ps(v, n, f)
      }
      var O
      if (du)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart'
              break e
            case 'compositionend':
              R = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              R = 'onCompositionUpdate'
              break e
          }
          R = void 0
        }
      else
        Qt
          ? Mf(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart')
      R &&
        ($f &&
          n.locale !== 'ko' &&
          (Qt || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && Qt && (O = Lf())
            : ((Ge = f), (au = 'value' in Ge ? Ge.value : Ge.textContent), (Qt = !0))),
        (E = so(a, R)),
        0 < E.length &&
          ((R = new vs(R, e, null, n, f)),
          v.push({ event: R, listeners: E }),
          O ? (R.data = O) : ((O = Df(n)), O !== null && (R.data = O)))),
        (O = _p ? Ep(e, n) : kp(e, n)) &&
          ((a = so(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new vs('onBeforeInput', 'beforeinput', null, n, f)),
            v.push({ event: f, listeners: a }),
            (f.data = O)))
    }
    Bf(v, t)
  })
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function so(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = lr(e, n)),
      i != null && r.unshift(dr(e, i, o)),
      (i = lr(e, t)),
      i != null && r.push(dr(e, i, o))),
      (e = e.return)
  }
  return r
}
function zt(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function js(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = lr(n, i)), s != null && l.unshift(dr(n, s, u)))
        : o || ((s = lr(n, i)), s != null && l.push(dr(n, s, u)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
function ao() {}
var Ci = null,
  xi = null
function Qf(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus
  }
  return !1
}
function al(e, t) {
  return (
    e === 'textarea' ||
    e === 'option' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ls = typeof setTimeout == 'function' ? setTimeout : void 0,
  Mp = typeof clearTimeout == 'function' ? clearTimeout : void 0
function pu(e) {
  e.nodeType === 1
    ? (e.textContent = '')
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''))
}
function en(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
  }
  return e
}
function $s(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Pi = 0
function Dp(e) {
  return { $$typeof: Jl, toString: e, valueOf: e }
}
var Uo = Math.random().toString(36).slice(2),
  be = '__reactFiber$' + Uo,
  fo = '__reactProps$' + Uo,
  gn = '__reactContainer$' + Uo,
  Ms = '__reactEvents$' + Uo
function Ct(e) {
  var t = e[be]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[be])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = $s(e); e !== null; ) {
          if ((n = e[be])) return n
          e = $s(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function kr(e) {
  return (
    (e = e[be] || e[gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(_(33))
}
function Bo(e) {
  return e[fo] || null
}
function qf(e) {
  var t = e[Ms]
  return t === void 0 && (t = e[Ms] = new Set()), t
}
var fl = [],
  Xt = -1
function ht(e) {
  return { current: e }
}
function I(e) {
  0 > Xt || ((e.current = fl[Xt]), (fl[Xt] = null), Xt--)
}
function V(e, t) {
  Xt++, (fl[Xt] = e.current), (e.current = t)
}
var at = {},
  ue = ht(at),
  de = ht(!1),
  Nt = at
function fn(e, t) {
  var n = e.type.contextTypes
  if (!n) return at
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function pe(e) {
  return (e = e.childContextTypes), e != null
}
function co() {
  I(de), I(ue)
}
function Ds(e, t, n) {
  if (ue.current !== at) throw Error(_(168))
  V(ue, t), V(de, n)
}
function Kf(e, t, n) {
  var r = e.stateNode
  if (((e = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in e)) throw Error(_(108, Gt(t) || 'Unknown', o))
  return F({}, n, r)
}
function Yr(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || at),
    (Nt = ue.current),
    V(ue, e),
    V(de, de.current),
    !0
  )
}
function As(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(_(169))
  n
    ? ((e = Kf(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(de),
      I(ue),
      V(ue, e))
    : I(de),
    V(de, n)
}
var mu = null,
  Ot = null,
  Ap = K.unstable_runWithPriority,
  hu = K.unstable_scheduleCallback,
  cl = K.unstable_cancelCallback,
  Ip = K.unstable_shouldYield,
  Is = K.unstable_requestPaint,
  dl = K.unstable_now,
  zp = K.unstable_getCurrentPriorityLevel,
  Vo = K.unstable_ImmediatePriority,
  Xf = K.unstable_UserBlockingPriority,
  Yf = K.unstable_NormalPriority,
  Gf = K.unstable_LowPriority,
  bf = K.unstable_IdlePriority,
  Oi = {},
  Fp = Is !== void 0 ? Is : function () {},
  Fe = null,
  Gr = null,
  Ni = !1,
  zs = dl(),
  ie =
    1e4 > zs
      ? dl
      : function () {
          return dl() - zs
        }
function cn() {
  switch (zp()) {
    case Vo:
      return 99
    case Xf:
      return 98
    case Yf:
      return 97
    case Gf:
      return 96
    case bf:
      return 95
    default:
      throw Error(_(332))
  }
}
function Jf(e) {
  switch (e) {
    case 99:
      return Vo
    case 98:
      return Xf
    case 97:
      return Yf
    case 96:
      return Gf
    case 95:
      return bf
    default:
      throw Error(_(332))
  }
}
function Tt(e, t) {
  return (e = Jf(e)), Ap(e, t)
}
function pr(e, t, n) {
  return (e = Jf(e)), hu(e, t, n)
}
function Ie() {
  if (Gr !== null) {
    var e = Gr
    ;(Gr = null), cl(e)
  }
  Zf()
}
function Zf() {
  if (!Ni && Fe !== null) {
    Ni = !0
    var e = 0
    try {
      var t = Fe
      Tt(99, function () {
        for (; e < t.length; e++) {
          var n = t[e]
          do n = n(!0)
          while (n !== null)
        }
      }),
        (Fe = null)
    } catch (n) {
      throw (Fe !== null && (Fe = Fe.slice(e + 1)), hu(Vo, Ie), n)
    } finally {
      Ni = !1
    }
  }
}
var Up = $t.ReactCurrentBatchConfig
function Ne(e, t) {
  if (e && e.defaultProps) {
    ;(t = F({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var po = ht(null),
  mo = null,
  Yt = null,
  ho = null
function vu() {
  ho = Yt = mo = null
}
function yu(e) {
  var t = po.current
  I(po), (e.type._context._currentValue = t)
}
function ec(e, t) {
  for (; e !== null; ) {
    var n = e.alternate
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break
      n.childLanes |= t
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t)
    e = e.return
  }
}
function tn(e, t) {
  ;(mo = e),
    (ho = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Re = !0), (e.firstContext = null))
}
function Ce(e, t) {
  if (ho !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != 'number' || t === 1073741823) && ((ho = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Yt === null)
    ) {
      if (mo === null) throw Error(_(308))
      ;(Yt = t), (mo.dependencies = { lanes: 0, firstContext: t, responders: null })
    } else Yt = Yt.next = t
  return e._currentValue
}
var Ke = !1
function gu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null
  }
}
function tc(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function nt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function rt(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
  }
}
function Fs(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function mr(e, t, n, r) {
  var o = e.updateQueue
  Ke = !1
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending
  if (u !== null) {
    o.shared.pending = null
    var s = u,
      a = s.next
    ;(s.next = null), l === null ? (i = a) : (l.next = a), (l = s)
    var f = e.alternate
    if (f !== null) {
      f = f.updateQueue
      var v = f.lastBaseUpdate
      v !== l &&
        (v === null ? (f.firstBaseUpdate = a) : (v.next = a), (f.lastBaseUpdate = s))
    }
  }
  if (i !== null) {
    ;(v = o.baseState), (l = 0), (f = a = s = null)
    do {
      u = i.lane
      var m = i.eventTime
      if ((r & u) === u) {
        f !== null &&
          (f = f.next =
            {
              eventTime: m,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null
            })
        e: {
          var g = e,
            S = i
          switch (((u = t), (m = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == 'function')) {
                v = g.call(m, v, u)
                break e
              }
              v = g
              break e
            case 3:
              g.flags = (g.flags & -4097) | 64
            case 0:
              if (
                ((g = S.payload),
                (u = typeof g == 'function' ? g.call(m, v, u) : g),
                u == null)
              )
                break e
              v = F({}, v, u)
              break e
            case 2:
              Ke = !0
          }
        }
        i.callback !== null &&
          ((e.flags |= 32), (u = o.effects), u === null ? (o.effects = [i]) : u.push(i))
      } else
        (m = {
          eventTime: m,
          lane: u,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        }),
          f === null ? ((a = f = m), (s = v)) : (f = f.next = m),
          (l |= u)
      if (((i = i.next), i === null)) {
        if (((u = o.shared.pending), u === null)) break
        ;(i = u.next), (u.next = null), (o.lastBaseUpdate = u), (o.shared.pending = null)
      }
    } while (1)
    f === null && (s = v),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (xr |= l),
      (e.lanes = l),
      (e.memoizedState = v)
  }
}
function Us(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(_(191, o))
        o.call(r)
      }
    }
}
var nc = new $o.Component().refs
function vo(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : F({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = he(),
      o = ot(e),
      i = nt(r, o)
    ;(i.payload = t), n != null && (i.callback = n), rt(e, i), it(e, o, r)
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = he(),
      o = ot(e),
      i = nt(r, o)
    ;(i.tag = 1), (i.payload = t), n != null && (i.callback = n), rt(e, i), it(e, o, r)
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = he(),
      r = ot(e),
      o = nt(n, r)
    ;(o.tag = 2), t != null && (o.callback = t), rt(e, o), it(e, r, n)
  }
}
function Bs(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(o, i)
      : !0
  )
}
function rc(e, t, n) {
  var r = !1,
    o = at,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Ce(i))
      : ((o = pe(t) ? Nt : ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, o) : at)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Vs(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wo.enqueueReplaceState(t, t.state, null)
}
function pl(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = nc), gu(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Ce(i))
    : ((i = pe(t) ? Nt : ue.current), (o.context = fn(e, i))),
    mr(e, n, o, r),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (vo(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Wo.enqueueReplaceState(o, o.state, null),
      mr(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4)
}
var Ar = Array.isArray
function Ln(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309))
        var r = n.stateNode
      }
      if (!r) throw Error(_(147, e))
      var o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = r.refs
            l === nc && (l = r.refs = {}), i === null ? delete l[o] : (l[o] = i)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(_(284))
    if (!n._owner) throw Error(_(290, e))
  }
  return e
}
function Ir(e, t) {
  if (e.type !== 'textarea')
    throw Error(
      _(
        31,
        Object.prototype.toString.call(t) === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t
      )
    )
}
function oc(e) {
  function t(d, c) {
    if (e) {
      var p = d.lastEffect
      p !== null
        ? ((p.nextEffect = c), (d.lastEffect = c))
        : (d.firstEffect = d.lastEffect = c),
        (c.nextEffect = null),
        (c.flags = 8)
    }
  }
  function n(d, c) {
    if (!e) return null
    for (; c !== null; ) t(d, c), (c = c.sibling)
    return null
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling)
    return d
  }
  function o(d, c) {
    return (d = ct(d, c)), (d.index = 0), (d.sibling = null), d
  }
  function i(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags = 2), c) : p)
            : ((d.flags = 2), c))
        : c
    )
  }
  function l(d) {
    return e && d.alternate === null && (d.flags = 2), d
  }
  function u(d, c, p, h) {
    return c === null || c.tag !== 6
      ? ((c = $i(p, d.mode, h)), (c.return = d), c)
      : ((c = o(c, p)), (c.return = d), c)
  }
  function s(d, c, p, h) {
    return c !== null && c.elementType === p.type
      ? ((h = o(c, p.props)), (h.ref = Ln(d, c, p)), (h.return = d), h)
      : ((h = eo(p.type, p.key, p.props, null, d.mode, h)),
        (h.ref = Ln(d, c, p)),
        (h.return = d),
        h)
  }
  function a(d, c, p, h) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Mi(p, d.mode, h)), (c.return = d), c)
      : ((c = o(c, p.children || [])), (c.return = d), c)
  }
  function f(d, c, p, h, y) {
    return c === null || c.tag !== 7
      ? ((c = ln(p, d.mode, h, y)), (c.return = d), c)
      : ((c = o(c, p)), (c.return = d), c)
  }
  function v(d, c, p) {
    if (typeof c == 'string' || typeof c == 'number')
      return (c = $i('' + c, d.mode, p)), (c.return = d), c
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case zn:
          return (
            (p = eo(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Ln(d, null, c)),
            (p.return = d),
            p
          )
        case Et:
          return (c = Mi(c, d.mode, p)), (c.return = d), c
      }
      if (Ar(c) || Pn(c)) return (c = ln(c, d.mode, p, null)), (c.return = d), c
      Ir(d, c)
    }
    return null
  }
  function m(d, c, p, h) {
    var y = c !== null ? c.key : null
    if (typeof p == 'string' || typeof p == 'number')
      return y !== null ? null : u(d, c, '' + p, h)
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case zn:
          return p.key === y
            ? p.type === Xe
              ? f(d, c, p.props.children, h, y)
              : s(d, c, p, h)
            : null
        case Et:
          return p.key === y ? a(d, c, p, h) : null
      }
      if (Ar(p) || Pn(p)) return y !== null ? null : f(d, c, p, h, null)
      Ir(d, p)
    }
    return null
  }
  function g(d, c, p, h, y) {
    if (typeof h == 'string' || typeof h == 'number')
      return (d = d.get(p) || null), u(c, d, '' + h, y)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case zn:
          return (
            (d = d.get(h.key === null ? p : h.key) || null),
            h.type === Xe ? f(c, d, h.props.children, y, h.key) : s(c, d, h, y)
          )
        case Et:
          return (d = d.get(h.key === null ? p : h.key) || null), a(c, d, h, y)
      }
      if (Ar(h) || Pn(h)) return (d = d.get(p) || null), f(c, d, h, y, null)
      Ir(c, h)
    }
    return null
  }
  function S(d, c, p, h) {
    for (
      var y = null, x = null, E = c, O = (c = 0), R = null;
      E !== null && O < p.length;
      O++
    ) {
      E.index > O ? ((R = E), (E = null)) : (R = E.sibling)
      var P = m(d, E, p[O], h)
      if (P === null) {
        E === null && (E = R)
        break
      }
      e && E && P.alternate === null && t(d, E),
        (c = i(P, c, O)),
        x === null ? (y = P) : (x.sibling = P),
        (x = P),
        (E = R)
    }
    if (O === p.length) return n(d, E), y
    if (E === null) {
      for (; O < p.length; O++)
        (E = v(d, p[O], h)),
          E !== null &&
            ((c = i(E, c, O)), x === null ? (y = E) : (x.sibling = E), (x = E))
      return y
    }
    for (E = r(d, E); O < p.length; O++)
      (R = g(E, d, O, p[O], h)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? O : R.key),
          (c = i(R, c, O)),
          x === null ? (y = R) : (x.sibling = R),
          (x = R))
    return (
      e &&
        E.forEach(function (Y) {
          return t(d, Y)
        }),
      y
    )
  }
  function w(d, c, p, h) {
    var y = Pn(p)
    if (typeof y != 'function') throw Error(_(150))
    if (((p = y.call(p)), p == null)) throw Error(_(151))
    for (
      var x = (y = null), E = c, O = (c = 0), R = null, P = p.next();
      E !== null && !P.done;
      O++, P = p.next()
    ) {
      E.index > O ? ((R = E), (E = null)) : (R = E.sibling)
      var Y = m(d, E, P.value, h)
      if (Y === null) {
        E === null && (E = R)
        break
      }
      e && E && Y.alternate === null && t(d, E),
        (c = i(Y, c, O)),
        x === null ? (y = Y) : (x.sibling = Y),
        (x = Y),
        (E = R)
    }
    if (P.done) return n(d, E), y
    if (E === null) {
      for (; !P.done; O++, P = p.next())
        (P = v(d, P.value, h)),
          P !== null &&
            ((c = i(P, c, O)), x === null ? (y = P) : (x.sibling = P), (x = P))
      return y
    }
    for (E = r(d, E); !P.done; O++, P = p.next())
      (P = g(E, d, O, P.value, h)),
        P !== null &&
          (e && P.alternate !== null && E.delete(P.key === null ? O : P.key),
          (c = i(P, c, O)),
          x === null ? (y = P) : (x.sibling = P),
          (x = P))
    return (
      e &&
        E.forEach(function (ai) {
          return t(d, ai)
        }),
      y
    )
  }
  return function (d, c, p, h) {
    var y = typeof p == 'object' && p !== null && p.type === Xe && p.key === null
    y && (p = p.props.children)
    var x = typeof p == 'object' && p !== null
    if (x)
      switch (p.$$typeof) {
        case zn:
          e: {
            for (x = p.key, y = c; y !== null; ) {
              if (y.key === x) {
                switch (y.tag) {
                  case 7:
                    if (p.type === Xe) {
                      n(d, y.sibling),
                        (c = o(y, p.props.children)),
                        (c.return = d),
                        (d = c)
                      break e
                    }
                    break
                  default:
                    if (y.elementType === p.type) {
                      n(d, y.sibling),
                        (c = o(y, p.props)),
                        (c.ref = Ln(d, y, p)),
                        (c.return = d),
                        (d = c)
                      break e
                    }
                }
                n(d, y)
                break
              } else t(d, y)
              y = y.sibling
            }
            p.type === Xe
              ? ((c = ln(p.props.children, d.mode, h, p.key)), (c.return = d), (d = c))
              : ((h = eo(p.type, p.key, p.props, null, d.mode, h)),
                (h.ref = Ln(d, c, p)),
                (h.return = d),
                (d = h))
          }
          return l(d)
        case Et:
          e: {
            for (y = p.key; c !== null; ) {
              if (c.key === y)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling), (c = o(c, p.children || [])), (c.return = d), (d = c)
                  break e
                } else {
                  n(d, c)
                  break
                }
              else t(d, c)
              c = c.sibling
            }
            ;(c = Mi(p, d.mode, h)), (c.return = d), (d = c)
          }
          return l(d)
      }
    if (typeof p == 'string' || typeof p == 'number')
      return (
        (p = '' + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = $i(p, d.mode, h)), (c.return = d), (d = c)),
        l(d)
      )
    if (Ar(p)) return S(d, c, p, h)
    if (Pn(p)) return w(d, c, p, h)
    if ((x && Ir(d, p), typeof p == 'undefined' && !y))
      switch (d.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(_(152, Gt(d.type) || 'Component'))
      }
    return n(d, c)
  }
}
var yo = oc(!0),
  ic = oc(!1),
  Cr = {},
  Me = ht(Cr),
  hr = ht(Cr),
  vr = ht(Cr)
function xt(e) {
  if (e === Cr) throw Error(_(174))
  return e
}
function ml(e, t) {
  switch ((V(vr, t), V(hr, e), V(Me, Cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ji(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ji(t, e))
  }
  I(Me), V(Me, t)
}
function dn() {
  I(Me), I(hr), I(vr)
}
function Ws(e) {
  xt(vr.current)
  var t = xt(Me.current),
    n = Ji(t, e.type)
  t !== n && (V(hr, e), V(Me, n))
}
function wu(e) {
  hr.current === e && (I(Me), I(hr))
}
var U = ht(0)
function go(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Be = null,
  Je = null,
  De = !1
function lc(e, t) {
  var n = Ee(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n)
}
function Hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      )
    case 13:
      return !1
    default:
      return !1
  }
}
function hl(e) {
  if (De) {
    var t = Je
    if (t) {
      var n = t
      if (!Hs(e, t)) {
        if (((t = en(n.nextSibling)), !t || !Hs(e, t))) {
          ;(e.flags = (e.flags & -1025) | 2), (De = !1), (Be = e)
          return
        }
        lc(Be, n)
      }
      ;(Be = e), (Je = en(t.firstChild))
    } else (e.flags = (e.flags & -1025) | 2), (De = !1), (Be = e)
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Be = e
}
function zr(e) {
  if (e !== Be) return !1
  if (!De) return Qs(e), (De = !0), !1
  var t = e.type
  if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !al(t, e.memoizedProps)))
    for (t = Je; t; ) lc(e, t), (t = en(t.nextSibling))
  if ((Qs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Je = en(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Je = null
    }
  } else Je = Be ? en(e.stateNode.nextSibling) : null
  return !0
}
function Ti() {
  ;(Je = Be = null), (De = !1)
}
var nn = []
function Su() {
  for (var e = 0; e < nn.length; e++) nn[e]._workInProgressVersionPrimary = null
  nn.length = 0
}
var bn = $t.ReactCurrentDispatcher,
  ke = $t.ReactCurrentBatchConfig,
  yr = 0,
  H = null,
  re = null,
  J = null,
  wo = !1,
  Jn = !1
function fe() {
  throw Error(_(321))
}
function _u(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!_e(e[n], t[n])) return !1
  return !0
}
function Eu(e, t, n, r, o, i) {
  if (
    ((yr = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bn.current = e === null || e.memoizedState === null ? Vp : Wp),
    (e = n(r, o)),
    Jn)
  ) {
    i = 0
    do {
      if (((Jn = !1), !(25 > i))) throw Error(_(301))
      ;(i += 1), (J = re = null), (t.updateQueue = null), (bn.current = Hp), (e = n(r, o))
    } while (Jn)
  }
  if (
    ((bn.current = ko),
    (t = re !== null && re.next !== null),
    (yr = 0),
    (J = re = H = null),
    (wo = !1),
    t)
  )
    throw Error(_(300))
  return e
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J
}
function Dt() {
  if (re === null) {
    var e = H.alternate
    e = e !== null ? e.memoizedState : null
  } else e = re.next
  var t = J === null ? H.memoizedState : J.next
  if (t !== null) (J = t), (re = e)
  else {
    if (e === null) throw Error(_(310))
    ;(re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e)
  }
  return J
}
function Le(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function $n(e) {
  var t = Dt(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = re,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var l = o.next
      ;(o.next = i.next), (i.next = l)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(o = o.next), (r = r.baseState)
    var u = (l = i = null),
      s = o
    do {
      var a = s.lane
      if ((yr & a) === a)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action))
      else {
        var f = {
          lane: a,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null
        }
        u === null ? ((l = u = f), (i = r)) : (u = u.next = f), (H.lanes |= a), (xr |= a)
      }
      s = s.next
    } while (s !== null && s !== o)
    u === null ? (i = r) : (u.next = l),
      _e(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r)
  }
  return [t.memoizedState, n.dispatch]
}
function Mn(e) {
  var t = Dt(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var l = (o = o.next)
    do (i = e(i, l.action)), (l = l.next)
    while (l !== o)
    _e(i, t.memoizedState) || (Re = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function qs(e, t, n) {
  var r = t._getVersion
  r = r(t._source)
  var o = t._workInProgressVersionPrimary
  if (
    (o !== null
      ? (e = o === r)
      : ((e = e.mutableReadLanes),
        (e = (yr & e) === e) && ((t._workInProgressVersionPrimary = r), nn.push(t))),
    e)
  )
    return n(t._source)
  throw (nn.push(t), Error(_(350)))
}
function uc(e, t, n, r) {
  var o = se
  if (o === null) throw Error(_(349))
  var i = t._getVersion,
    l = i(t._source),
    u = bn.current,
    s = u.useState(function () {
      return qs(o, t, n)
    }),
    a = s[1],
    f = s[0]
  s = J
  var v = e.memoizedState,
    m = v.refs,
    g = m.getSnapshot,
    S = v.source
  v = v.subscribe
  var w = H
  return (
    (e.memoizedState = { refs: m, source: t, subscribe: r }),
    u.useEffect(
      function () {
        ;(m.getSnapshot = n), (m.setSnapshot = a)
        var d = i(t._source)
        if (!_e(l, d)) {
          ;(d = n(t._source)),
            _e(f, d) || (a(d), (d = ot(w)), (o.mutableReadLanes |= d & o.pendingLanes)),
            (d = o.mutableReadLanes),
            (o.entangledLanes |= d)
          for (var c = o.entanglements, p = d; 0 < p; ) {
            var h = 31 - st(p),
              y = 1 << h
            ;(c[h] |= d), (p &= ~y)
          }
        }
      },
      [n, t, r]
    ),
    u.useEffect(
      function () {
        return r(t._source, function () {
          var d = m.getSnapshot,
            c = m.setSnapshot
          try {
            c(d(t._source))
            var p = ot(w)
            o.mutableReadLanes |= p & o.pendingLanes
          } catch (h) {
            c(function () {
              throw h
            })
          }
        })
      },
      [t, r]
    ),
    (_e(g, n) && _e(S, t) && _e(v, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Le,
        lastRenderedState: f
      }),
      (e.dispatch = a = xu.bind(null, H, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (f = qs(o, t, n)),
      (s.memoizedState = s.baseState = f)),
    f
  )
}
function sc(e, t, n) {
  var r = Dt()
  return uc(r, e, t, n)
}
function Dn(e) {
  var t = Pt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      { pending: null, dispatch: null, lastRenderedReducer: Le, lastRenderedState: e }),
    (e = e.dispatch = xu.bind(null, H, e)),
    [t.memoizedState, e]
  )
}
function So(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null }), (H.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Ks(e) {
  var t = Pt()
  return (e = { current: e }), (t.memoizedState = e)
}
function _o() {
  return Dt().memoizedState
}
function vl(e, t, n, r) {
  var o = Pt()
  ;(H.flags |= e), (o.memoizedState = So(1 | t, n, void 0, r === void 0 ? null : r))
}
function ku(e, t, n, r) {
  var o = Dt()
  r = r === void 0 ? null : r
  var i = void 0
  if (re !== null) {
    var l = re.memoizedState
    if (((i = l.destroy), r !== null && _u(r, l.deps))) {
      So(t, n, i, r)
      return
    }
  }
  ;(H.flags |= e), (o.memoizedState = So(1 | t, n, i, r))
}
function Xs(e, t) {
  return vl(516, 4, e, t)
}
function Eo(e, t) {
  return ku(516, 4, e, t)
}
function ac(e, t) {
  return ku(4, 2, e, t)
}
function fc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function cc(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ku(4, 2, fc.bind(null, t, e), n)
}
function Cu() {}
function dc(e, t) {
  var n = Dt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && _u(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function pc(e, t) {
  var n = Dt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Bp(e, t) {
  var n = cn()
  Tt(98 > n ? 98 : n, function () {
    e(!0)
  }),
    Tt(97 < n ? 97 : n, function () {
      var r = ke.transition
      ke.transition = 1
      try {
        e(!1), t()
      } finally {
        ke.transition = r
      }
    })
}
function xu(e, t, n) {
  var r = he(),
    o = ot(e),
    i = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
    l = t.pending
  if (
    (l === null ? (i.next = i) : ((i.next = l.next), (l.next = i)),
    (t.pending = i),
    (l = e.alternate),
    e === H || (l !== null && l === H))
  )
    Jn = wo = !0
  else {
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var u = t.lastRenderedState,
          s = l(u, n)
        if (((i.eagerReducer = l), (i.eagerState = s), _e(s, u))) return
      } catch {
      } finally {
      }
    it(e, o, r)
  }
}
var ko = {
    readContext: Ce,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useOpaqueIdentifier: fe,
    unstable_isNewReconciler: !1
  },
  Vp = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Ce,
    useEffect: Xs,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), vl(4, 2, fc.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return vl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Pt()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = Pt()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }),
        (e = e.dispatch = xu.bind(null, H, e)),
        [r.memoizedState, e]
      )
    },
    useRef: Ks,
    useState: Dn,
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = Dn(e),
        n = t[0],
        r = t[1]
      return (
        Xs(
          function () {
            var o = ke.transition
            ke.transition = 1
            try {
              r(e)
            } finally {
              ke.transition = o
            }
          },
          [e]
        ),
        n
      )
    },
    useTransition: function () {
      var e = Dn(!1),
        t = e[0]
      return (e = Bp.bind(null, e[1])), Ks(e), [e, t]
    },
    useMutableSource: function (e, t, n) {
      var r = Pt()
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n
        }),
        uc(r, e, t, n)
      )
    },
    useOpaqueIdentifier: function () {
      if (De) {
        var e = !1,
          t = Dp(function () {
            throw (e || ((e = !0), n('r:' + (Pi++).toString(36))), Error(_(355)))
          }),
          n = Dn(t)[1]
        return (
          (H.mode & 2) === 0 &&
            ((H.flags |= 516),
            So(
              5,
              function () {
                n('r:' + (Pi++).toString(36))
              },
              void 0,
              null
            )),
          t
        )
      }
      return (t = 'r:' + (Pi++).toString(36)), Dn(t), t
    },
    unstable_isNewReconciler: !1
  },
  Wp = {
    readContext: Ce,
    useCallback: dc,
    useContext: Ce,
    useEffect: Eo,
    useImperativeHandle: cc,
    useLayoutEffect: ac,
    useMemo: pc,
    useReducer: $n,
    useRef: _o,
    useState: function () {
      return $n(Le)
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = $n(Le),
        n = t[0],
        r = t[1]
      return (
        Eo(
          function () {
            var o = ke.transition
            ke.transition = 1
            try {
              r(e)
            } finally {
              ke.transition = o
            }
          },
          [e]
        ),
        n
      )
    },
    useTransition: function () {
      var e = $n(Le)[0]
      return [_o().current, e]
    },
    useMutableSource: sc,
    useOpaqueIdentifier: function () {
      return $n(Le)[0]
    },
    unstable_isNewReconciler: !1
  },
  Hp = {
    readContext: Ce,
    useCallback: dc,
    useContext: Ce,
    useEffect: Eo,
    useImperativeHandle: cc,
    useLayoutEffect: ac,
    useMemo: pc,
    useReducer: Mn,
    useRef: _o,
    useState: function () {
      return Mn(Le)
    },
    useDebugValue: Cu,
    useDeferredValue: function (e) {
      var t = Mn(Le),
        n = t[0],
        r = t[1]
      return (
        Eo(
          function () {
            var o = ke.transition
            ke.transition = 1
            try {
              r(e)
            } finally {
              ke.transition = o
            }
          },
          [e]
        ),
        n
      )
    },
    useTransition: function () {
      var e = Mn(Le)[0]
      return [_o().current, e]
    },
    useMutableSource: sc,
    useOpaqueIdentifier: function () {
      return Mn(Le)[0]
    },
    unstable_isNewReconciler: !1
  },
  Qp = $t.ReactCurrentOwner,
  Re = !1
function ce(e, t, n, r) {
  t.child = e === null ? ic(t, null, n, r) : yo(t, e.child, n, r)
}
function Ys(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    tn(t, o),
    (r = Eu(e, t, n, r, i, o)),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), Ve(e, t, o))
      : ((t.flags |= 1), ce(e, t, r, o), t.child)
  )
}
function Gs(e, t, n, r, o, i) {
  if (e === null) {
    var l = n.type
    return typeof l == 'function' &&
      !ju(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), mc(e, t, l, r, o, i))
      : ((e = eo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  return (
    (l = e.child),
    (o & i) === 0 &&
    ((o = l.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : cr),
    n(o, r) && e.ref === t.ref)
      ? Ve(e, t, i)
      : ((t.flags |= 1), (e = ct(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
  )
}
function mc(e, t, n, r, o, i) {
  if (e !== null && cr(e.memoizedProps, r) && e.ref === t.ref)
    if (((Re = !1), (i & o) !== 0)) (e.flags & 16384) !== 0 && (Re = !0)
    else return (t.lanes = e.lanes), Ve(e, t, i)
  return yl(e, t, n, r, i)
}
function Ri(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden' || r.mode === 'unstable-defer-without-hiding')
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), Ur(t, n)
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), Ur(t, i !== null ? i.baseLanes : n)
    else
      return (
        (e = i !== null ? i.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        Ur(t, e),
        null
      )
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), Ur(t, r)
  return ce(e, t, o, n), t.child
}
function hc(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) && (t.flags |= 128)
}
function yl(e, t, n, r, o) {
  var i = pe(n) ? Nt : ue.current
  return (
    (i = fn(t, i)),
    tn(t, o),
    (n = Eu(e, t, n, r, i, o)),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), Ve(e, t, o))
      : ((t.flags |= 1), ce(e, t, n, o), t.child)
  )
}
function bs(e, t, n, r, o) {
  if (pe(n)) {
    var i = !0
    Yr(t)
  } else i = !1
  if ((tn(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      rc(t, n, r),
      pl(t, n, r, o),
      (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps
    l.props = u
    var s = l.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = Ce(a))
      : ((a = pe(n) ? Nt : ue.current), (a = fn(t, a)))
    var f = n.getDerivedStateFromProps,
      v = typeof f == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Vs(t, l, r, a)),
      (Ke = !1)
    var m = t.memoizedState
    ;(l.state = m),
      mr(t, r, l, o),
      (s = t.memoizedState),
      u !== r || m !== s || de.current || Ke
        ? (typeof f == 'function' && (vo(t, n, f, r), (s = t.memoizedState)),
          (u = Ke || Bs(t, n, u, r, m, s, a))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4), (r = !1))
  } else {
    ;(l = t.stateNode),
      tc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ne(t.type, u)),
      (l.props = a),
      (v = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ce(s))
        : ((s = pe(n) ? Nt : ue.current), (s = fn(t, s)))
    var g = n.getDerivedStateFromProps
    ;(f = typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== v || m !== s) && Vs(t, l, r, s)),
      (Ke = !1),
      (m = t.memoizedState),
      (l.state = m),
      mr(t, r, l, o)
    var S = t.memoizedState
    u !== v || m !== S || de.current || Ke
      ? (typeof g == 'function' && (vo(t, n, g, r), (S = t.memoizedState)),
        (a = Ke || Bs(t, n, a, r, m, S, s))
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, S, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, S, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (l.props = r),
        (l.state = S),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1))
  }
  return gl(e, t, n, r, i, o)
}
function gl(e, t, n, r, o, i) {
  hc(e, t)
  var l = (t.flags & 64) !== 0
  if (!r && !l) return o && As(t, n, !1), Ve(e, t, i)
  ;(r = t.stateNode), (Qp.current = t)
  var u = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = yo(t, e.child, null, i)), (t.child = yo(t, null, u, i)))
      : ce(e, t, u, i),
    (t.memoizedState = r.state),
    o && As(t, n, !0),
    t.child
  )
}
function Js(e) {
  var t = e.stateNode
  t.pendingContext
    ? Ds(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ds(e, t.context, !1),
    ml(e, t.containerInfo)
}
var Fr = { dehydrated: null, retryLane: 0 }
function Zs(e, t, n) {
  var r = t.pendingProps,
    o = U.current,
    i = !1,
    l
  return (
    (l = (t.flags & 64) !== 0) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (o |= 1),
    V(U, o & 1),
    e === null
      ? (r.fallback !== void 0 && hl(t),
        (e = r.children),
        (o = r.fallback),
        i
          ? ((e = ea(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Fr),
            e)
          : typeof r.unstable_expectedLoadTime == 'number'
          ? ((e = ea(t, e, o, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Fr),
            (t.lanes = 33554432),
            e)
          : ((n = Lu({ mode: 'visible', children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? i
        ? ((r = na(e, t, r.children, r.fallback, n)),
          (i = t.child),
          (o = e.child.memoizedState),
          (i.memoizedState =
            o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
          (i.childLanes = e.childLanes & ~n),
          (t.memoizedState = Fr),
          r)
        : ((n = ta(e, t, r.children, n)), (t.memoizedState = null), n)
      : i
      ? ((r = na(e, t, r.children, r.fallback, n)),
        (i = t.child),
        (o = e.child.memoizedState),
        (i.memoizedState =
          o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = Fr),
        r)
      : ((n = ta(e, t, r.children, n)), (t.memoizedState = null), n)
  )
}
function ea(e, t, n, r) {
  var o = e.mode,
    i = e.child
  return (
    (t = { mode: 'hidden', children: t }),
    (o & 2) === 0 && i !== null
      ? ((i.childLanes = 0), (i.pendingProps = t))
      : (i = Lu(t, o, 0, null)),
    (n = ln(n, o, r, null)),
    (i.return = e),
    (n.return = e),
    (i.sibling = n),
    (e.child = i),
    n
  )
}
function ta(e, t, n, r) {
  var o = e.child
  return (
    (e = o.sibling),
    (n = ct(o, { mode: 'visible', children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  )
}
function na(e, t, n, r, o) {
  var i = t.mode,
    l = e.child
  e = l.sibling
  var u = { mode: 'hidden', children: n }
  return (
    (i & 2) === 0 && t.child !== l
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = u),
        (l = n.lastEffect),
        l !== null
          ? ((t.firstEffect = n.firstEffect), (t.lastEffect = l), (l.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = ct(l, u)),
    e !== null ? (r = ct(e, r)) : ((r = ln(r, i, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  )
}
function ra(e, t) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), ec(e.return, t)
}
function ji(e, t, n, r, o, i) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: i
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o),
      (l.lastEffect = i))
}
function oa(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ce(e, t, r.children, n), (r = U.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64)
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ra(e, n)
        else if (e.tag === 19) ra(e, n)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((V(U, r), (t.mode & 2) === 0)) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && go(e) === null && (o = n), (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ji(t, !1, o, n, i, t.lastEffect)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && go(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        ji(t, !0, n, null, i, t.lastEffect)
        break
      case 'together':
        ji(t, !1, null, null, void 0, t.lastEffect)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ve(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xr |= t.lanes),
    (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(_(153))
    if (t.child !== null) {
      for (
        e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t)
      n.sibling = null
    }
    return t.child
  }
  return null
}
var vc, wl, yc, gc
vc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
wl = function () {}
yc = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), xt(Me.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = qi(e, o)), (r = qi(e, r)), (i = [])
        break
      case 'option':
        ;(o = Yi(e, o)), (r = Yi(e, r)), (i = [])
        break
      case 'select':
        ;(o = F({}, o, { value: void 0 })), (r = F({}, r, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Gi(e, o)), (r = Gi(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ao)
    }
    Zi(n, r)
    var l
    n = null
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a]
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (or.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null))
    for (a in r) {
      var s = r[a]
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in s)
              s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), (n[l] = s[l]))
          } else n || (i || (i = []), i.push(a, n)), (n = s)
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (or.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && A('scroll', e),
                  i || u === s || (i = []))
                : typeof s == 'object' && s !== null && s.$$typeof === Jl
                ? s.toString()
                : (i = i || []).push(a, s))
    }
    n && (i = i || []).push('style', n)
    var a = i
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
gc = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function An(e, t) {
  if (!De)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function qp(e, t, n) {
  var r = t.pendingProps
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null
    case 1:
      return pe(t.type) && co(), null
    case 3:
      return (
        dn(),
        I(de),
        I(ue),
        Su(),
        (r = t.stateNode),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zr(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        wl(t),
        null
      )
    case 5:
      wu(t)
      var o = xt(vr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        yc(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128)
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166))
          return null
        }
        if (((e = xt(Me.current)), zr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[be] = t), (r[fo] = i), n)) {
            case 'dialog':
              A('cancel', r), A('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              A('load', r)
              break
            case 'video':
            case 'audio':
              for (e = 0; e < Un.length; e++) A(Un[e], r)
              break
            case 'source':
              A('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              A('error', r), A('load', r)
              break
            case 'details':
              A('toggle', r)
              break
            case 'input':
              os(r, i), A('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }), A('invalid', r)
              break
            case 'textarea':
              ls(r, i), A('invalid', r)
          }
          Zi(n, i), (e = null)
          for (var l in i)
            i.hasOwnProperty(l) &&
              ((o = i[l]),
              l === 'children'
                ? typeof o == 'string'
                  ? r.textContent !== o && (e = ['children', o])
                  : typeof o == 'number' &&
                    r.textContent !== '' + o &&
                    (e = ['children', '' + o])
                : or.hasOwnProperty(l) && o != null && l === 'onScroll' && A('scroll', r))
          switch (n) {
            case 'input':
              Lr(r), is(r, i, !0)
              break
            case 'textarea':
              Lr(r), us(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = ao)
          }
          ;(r = e), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          switch (
            ((l = o.nodeType === 9 ? o : o.ownerDocument),
            e === bi.html && (e = cf(n)),
            e === bi.html
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[be] = t),
            (e[fo] = r),
            vc(e, t, !1, !1),
            (t.stateNode = e),
            (l = el(n, r)),
            n)
          ) {
            case 'dialog':
              A('cancel', e), A('close', e), (o = r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              A('load', e), (o = r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Un.length; o++) A(Un[o], e)
              o = r
              break
            case 'source':
              A('error', e), (o = r)
              break
            case 'img':
            case 'image':
            case 'link':
              A('error', e), A('load', e), (o = r)
              break
            case 'details':
              A('toggle', e), (o = r)
              break
            case 'input':
              os(e, r), (o = qi(e, r)), A('invalid', e)
              break
            case 'option':
              o = Yi(e, r)
              break
            case 'select':
              ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                (o = F({}, r, { value: void 0 })),
                A('invalid', e)
              break
            case 'textarea':
              ls(e, r), (o = Gi(e, r)), A('invalid', e)
              break
            default:
              o = r
          }
          Zi(n, o)
          var u = o
          for (i in u)
            if (u.hasOwnProperty(i)) {
              var s = u[i]
              i === 'style'
                ? mf(e, s)
                : i === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0), s != null && df(e, s))
                : i === 'children'
                ? typeof s == 'string'
                  ? (n !== 'textarea' || s !== '') && ir(e, s)
                  : typeof s == 'number' && ir(e, '' + s)
                : i !== 'suppressContentEditableWarning' &&
                  i !== 'suppressHydrationWarning' &&
                  i !== 'autoFocus' &&
                  (or.hasOwnProperty(i)
                    ? s != null && i === 'onScroll' && A('scroll', e)
                    : s != null && ql(e, i, s, l))
            }
          switch (n) {
            case 'input':
              Lr(e), is(e, r, !1)
              break
            case 'textarea':
              Lr(e), us(e)
              break
            case 'option':
              r.value != null && e.setAttribute('value', '' + ut(r.value))
              break
            case 'select':
              ;(e.multiple = !!r.multiple),
                (i = r.value),
                i != null
                  ? bt(e, !!r.multiple, i, !1)
                  : r.defaultValue != null && bt(e, !!r.multiple, r.defaultValue, !0)
              break
            default:
              typeof o.onClick == 'function' && (e.onclick = ao)
          }
          Qf(n, r) && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 128)
      }
      return null
    case 6:
      if (e && t.stateNode != null) gc(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166))
        ;(n = xt(vr.current)),
          xt(Me.current),
          zr(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[be] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[be] = t),
              (t.stateNode = r))
      }
      return null
    case 13:
      return (
        I(U),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && zr(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null && t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (U.current & 1) !== 0
                ? Z === 0 && (Z = 3)
                : ((Z === 0 || Z === 3) && (Z = 4),
                  se === null ||
                    ((xr & 134217727) === 0 && (Sn & 134217727) === 0) ||
                    rn(se, le))),
            (r || n) && (t.flags |= 4),
            null)
      )
    case 4:
      return dn(), wl(t), e === null && Vf(t.stateNode.containerInfo), null
    case 10:
      return yu(t), null
    case 17:
      return pe(t.type) && co(), null
    case 19:
      if ((I(U), (r = t.memoizedState), r === null)) return null
      if (((i = (t.flags & 64) !== 0), (l = r.rendering), l === null))
        if (i) An(r, !1)
        else {
          if (Z !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = go(e)), l !== null)) {
                for (
                  t.flags |= 64,
                    An(r, !1),
                    i = l.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 2),
                    (i.nextEffect = null),
                    (i.firstEffect = null),
                    (i.lastEffect = null),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return V(U, (U.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          r.tail !== null &&
            ie() > xl &&
            ((t.flags |= 64), (i = !0), An(r, !1), (t.lanes = 33554432))
        }
      else {
        if (!i)
          if (((e = go(l)), e !== null)) {
            if (
              ((t.flags |= 64),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(r, !0),
              r.tail === null && r.tailMode === 'hidden' && !l.alternate && !De)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              )
          } else
            2 * ie() - r.renderingStartTime > xl &&
              n !== 1073741824 &&
              ((t.flags |= 64), (i = !0), An(r, !1), (t.lanes = 33554432))
        r.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = r.last), n !== null ? (n.sibling = l) : (t.child = l), (r.last = l))
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = ie()),
          (n.sibling = null),
          (t = U.current),
          V(U, i ? (t & 1) | 2 : t & 1),
          n)
        : null
    case 23:
    case 24:
      return (
        Ru(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== 'unstable-defer-without-hiding' &&
          (t.flags |= 4),
        null
      )
  }
  throw Error(_(156, t.tag))
}
function Kp(e) {
  switch (e.tag) {
    case 1:
      pe(e.type) && co()
      var t = e.flags
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
    case 3:
      if ((dn(), I(de), I(ue), Su(), (t = e.flags), (t & 64) !== 0)) throw Error(_(285))
      return (e.flags = (t & -4097) | 64), e
    case 5:
      return wu(e), null
    case 13:
      return I(U), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
    case 19:
      return I(U), null
    case 4:
      return dn(), null
    case 10:
      return yu(e), null
    case 23:
    case 24:
      return Ru(), null
    default:
      return null
  }
}
function Pu(e, t) {
  try {
    var n = '',
      r = t
    do (n += Od(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o }
}
function Sl(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Xp = typeof WeakMap == 'function' ? WeakMap : Map
function wc(e, t, n) {
  ;(n = nt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      xo || ((xo = !0), (Pl = r)), Sl(e, t)
    }),
    n
  )
}
function Sc(e, t, n) {
  ;(n = nt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    n.payload = function () {
      return Sl(e, t), r(o)
    }
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        typeof r != 'function' &&
          ($e === null ? ($e = new Set([this])) : $e.add(this), Sl(e, t))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
var Yp = typeof WeakSet == 'function' ? WeakSet : Set
function ia(e) {
  var t = e.ref
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null)
      } catch (n) {
        lt(e, n)
      }
    else t.current = null
}
function Gp(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState
        ;(e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : Ne(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t)
      }
      return
    case 3:
      t.flags & 256 && pu(t.stateNode.containerInfo)
      return
    case 5:
    case 6:
    case 4:
    case 17:
      return
  }
  throw Error(_(163))
}
function bp(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create
            e.destroy = r()
          }
          e = e.next
        } while (e !== t)
      }
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next
        do {
          var o = e
          ;(r = o.next),
            (o = o.tag),
            (o & 4) !== 0 && (o & 1) !== 0 && (Tc(n, e), im(n, e)),
            (e = r)
        } while (e !== t)
      }
      return
    case 1:
      ;(e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type ? t.memoizedProps : Ne(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && Us(n, t, e)
      return
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode
              break
            case 1:
              e = n.child.stateNode
          }
        Us(n, t, e)
      }
      return
    case 5:
      ;(e = n.stateNode),
        t === null && n.flags & 4 && Qf(n.type, n.memoizedProps) && e.focus()
      return
    case 6:
      return
    case 4:
      return
    case 12:
      return
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && Cf(n))))
      return
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return
  }
  throw Error(_(163))
}
function la(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode
      if (t)
        (r = r.style),
          typeof r.setProperty == 'function'
            ? r.setProperty('display', 'none', 'important')
            : (r.display = 'none')
      else {
        r = n.stateNode
        var o = n.memoizedProps.style
        ;(o = o != null && o.hasOwnProperty('display') ? o.display : null),
          (r.style.display = pf('display', o))
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? '' : n.memoizedProps
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === e) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
function ua(e, t) {
  if (Ot && typeof Ot.onCommitFiberUnmount == 'function')
    try {
      Ot.onCommitFiberUnmount(mu, t)
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var n = (e = e.next)
        do {
          var r = n,
            o = r.destroy
          if (((r = r.tag), o !== void 0))
            if ((r & 4) !== 0) Tc(t, n)
            else {
              r = t
              try {
                o()
              } catch (i) {
                lt(r, i)
              }
            }
          n = n.next
        } while (n !== e)
      }
      break
    case 1:
      if ((ia(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
        try {
          ;(e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount()
        } catch (i) {
          lt(t, i)
        }
      break
    case 5:
      ia(t)
      break
    case 4:
      _c(e, t)
  }
}
function sa(e) {
  ;(e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null)
}
function aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fa(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (aa(t)) break e
      t = t.return
    }
    throw Error(_(160))
  }
  var n = t
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1
      break
    case 3:
      ;(t = t.containerInfo), (r = !0)
      break
    case 4:
      ;(t = t.containerInfo), (r = !0)
      break
    default:
      throw Error(_(161))
  }
  n.flags & 16 && (ir(t, ''), (n.flags &= -17))
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || aa(n.return)) {
        n = null
        break e
      }
      n = n.return
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t
      ;(n.child.return = n), (n = n.child)
    }
    if (!(n.flags & 2)) {
      n = n.stateNode
      break e
    }
  }
  r ? _l(e, n, t) : El(e, n, t)
}
function _l(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ao))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_l(e, t, n), e = e.sibling; e !== null; ) _l(e, t, n), (e = e.sibling)
}
function El(e, t, n) {
  var r = e.tag,
    o = r === 5 || r === 6
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (El(e, t, n), e = e.sibling; e !== null; ) El(e, t, n), (e = e.sibling)
}
function _c(e, t) {
  for (var n = t, r = !1, o, i; ; ) {
    if (!r) {
      r = n.return
      e: for (;;) {
        if (r === null) throw Error(_(160))
        switch (((o = r.stateNode), r.tag)) {
          case 5:
            i = !1
            break e
          case 3:
            ;(o = o.containerInfo), (i = !0)
            break e
          case 4:
            ;(o = o.containerInfo), (i = !0)
            break e
        }
        r = r.return
      }
      r = !0
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var l = e, u = n, s = u; ; )
        if ((ua(l, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child)
        else {
          if (s === u) break e
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === u) break e
            s = s.return
          }
          ;(s.sibling.return = s.return), (s = s.sibling)
        }
      i
        ? ((l = o),
          (u = n.stateNode),
          l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u))
        : o.removeChild(n.stateNode)
    } else if (n.tag === 4) {
      if (n.child !== null) {
        ;(o = n.stateNode.containerInfo), (i = !0), (n.child.return = n), (n = n.child)
        continue
      }
    } else if ((ua(e, n), n.child !== null)) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      ;(n = n.return), n.tag === 4 && (r = !1)
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
function Li(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next)
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next)
        while (r !== n)
      }
      return
    case 1:
      return
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps
        var o = e !== null ? e.memoizedProps : r
        e = t.type
        var i = t.updateQueue
        if (((t.updateQueue = null), i !== null)) {
          for (
            n[fo] = r,
              e === 'input' && r.type === 'radio' && r.name != null && af(n, r),
              el(e, o),
              t = el(e, r),
              o = 0;
            o < i.length;
            o += 2
          ) {
            var l = i[o],
              u = i[o + 1]
            l === 'style'
              ? mf(n, u)
              : l === 'dangerouslySetInnerHTML'
              ? df(n, u)
              : l === 'children'
              ? ir(n, u)
              : ql(n, l, u, t)
          }
          switch (e) {
            case 'input':
              Ki(n, r)
              break
            case 'textarea':
              ff(n, r)
              break
            case 'select':
              ;(e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (i = r.value),
                i != null
                  ? bt(n, !!r.multiple, i, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? bt(n, !!r.multiple, r.defaultValue, !0)
                      : bt(n, !!r.multiple, r.multiple ? [] : '', !1))
          }
        }
      }
      return
    case 6:
      if (t.stateNode === null) throw Error(_(162))
      t.stateNode.nodeValue = t.memoizedProps
      return
    case 3:
      ;(n = t.stateNode), n.hydrate && ((n.hydrate = !1), Cf(n.containerInfo))
      return
    case 12:
      return
    case 13:
      t.memoizedState !== null && ((Tu = ie()), la(t.child, !0)), ca(t)
      return
    case 19:
      ca(t)
      return
    case 17:
      return
    case 23:
    case 24:
      la(t, t.memoizedState !== null)
      return
  }
  throw Error(_(163))
}
function ca(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Yp()),
      t.forEach(function (r) {
        var o = sm.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Jp(e, t) {
  return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1
}
var Zp = Math.ceil,
  Co = $t.ReactCurrentDispatcher,
  Ou = $t.ReactCurrentOwner,
  N = 0,
  se = null,
  Q = null,
  le = 0,
  Rt = 0,
  kl = ht(0),
  Z = 0,
  Ho = null,
  wn = 0,
  xr = 0,
  Sn = 0,
  Nu = 0,
  Cl = null,
  Tu = 0,
  xl = 1 / 0
function _n() {
  xl = ie() + 500
}
var C = null,
  xo = !1,
  Pl = null,
  $e = null,
  ft = !1,
  Zn = null,
  Bn = 90,
  Ol = [],
  Nl = [],
  We = null,
  er = 0,
  Tl = null,
  br = -1,
  Ue = 0,
  Jr = 0,
  tr = null,
  Zr = !1
function he() {
  return (N & 48) !== 0 ? ie() : br !== -1 ? br : (br = ie())
}
function ot(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1
  if ((e & 4) === 0) return cn() === 99 ? 1 : 2
  if ((Ue === 0 && (Ue = wn), Up.transition !== 0)) {
    Jr !== 0 && (Jr = Cl !== null ? Cl.pendingLanes : 0), (e = Ue)
    var t = 4186112 & ~Jr
    return (
      (t &= -t), t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)), t
    )
  }
  return (
    (e = cn()),
    (N & 4) !== 0 && e === 98 ? (e = uo(12, Ue)) : ((e = Wd(e)), (e = uo(e, Ue))),
    e
  )
}
function it(e, t, n) {
  if (50 < er) throw ((er = 0), (Tl = null), Error(_(185)))
  if (((e = Qo(e, t)), e === null)) return null
  Io(e, t, n), e === se && ((Sn |= t), Z === 4 && rn(e, le))
  var r = cn()
  t === 1
    ? (N & 8) !== 0 && (N & 48) === 0
      ? Rl(e)
      : (xe(e, n), N === 0 && (_n(), Ie()))
    : ((N & 4) === 0 ||
        (r !== 98 && r !== 99) ||
        (We === null ? (We = new Set([e])) : We.add(e)),
      xe(e, n)),
    (Cl = e)
}
function Qo(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
function xe(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      o = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var u = 31 - st(l),
      s = 1 << u,
      a = i[u]
    if (a === -1) {
      if ((s & r) === 0 || (s & o) !== 0) {
        ;(a = t), Vt(s)
        var f = D
        i[u] = 10 <= f ? a + 250 : 6 <= f ? a + 5e3 : -1
      }
    } else a <= t && (e.expiredLanes |= s)
    l &= ~s
  }
  if (((r = ar(e, e === se ? le : 0)), (t = D), r === 0))
    n !== null && (n !== Oi && cl(n), (e.callbackNode = null), (e.callbackPriority = 0))
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return
      n !== Oi && cl(n)
    }
    t === 15
      ? ((n = Rl.bind(null, e)),
        Fe === null ? ((Fe = [n]), (Gr = hu(Vo, Zf))) : Fe.push(n),
        (n = Oi))
      : t === 14
      ? (n = pr(99, Rl.bind(null, e)))
      : ((n = Hd(t)), (n = pr(n, Ec.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n)
  }
}
function Ec(e) {
  if (((br = -1), (Jr = Ue = 0), (N & 48) !== 0)) throw Error(_(327))
  var t = e.callbackNode
  if (vt() && e.callbackNode !== t) return null
  var n = ar(e, e === se ? le : 0)
  if (n === 0) return null
  var r = n,
    o = N
  N |= 16
  var i = Pc()
  ;(se !== e || le !== r) && (_n(), on(e, r))
  do
    try {
      nm()
      break
    } catch (u) {
      xc(e, u)
    }
  while (1)
  if (
    (vu(),
    (Co.current = i),
    (N = o),
    Q !== null ? (r = 0) : ((se = null), (le = 0), (r = Z)),
    (wn & Sn) !== 0)
  )
    on(e, 0)
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((N |= 64),
        e.hydrate && ((e.hydrate = !1), pu(e.containerInfo)),
        (n = jf(e)),
        n !== 0 && (r = Vn(e, n))),
      r === 1)
    )
      throw ((t = Ho), on(e, 0), rn(e, n), xe(e, ie()), t)
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
      case 0:
      case 1:
        throw Error(_(345))
      case 2:
        St(e)
        break
      case 3:
        if ((rn(e, n), (n & 62914560) === n && ((r = Tu + 500 - ie()), 10 < r))) {
          if (ar(e, 0) !== 0) break
          if (((o = e.suspendedLanes), (o & n) !== n)) {
            he(), (e.pingedLanes |= e.suspendedLanes & o)
            break
          }
          e.timeoutHandle = Ls(St.bind(null, e), r)
          break
        }
        St(e)
        break
      case 4:
        if ((rn(e, n), (n & 4186112) === n)) break
        for (r = e.eventTimes, o = -1; 0 < n; ) {
          var l = 31 - st(n)
          ;(i = 1 << l), (l = r[l]), l > o && (o = l), (n &= ~i)
        }
        if (
          ((n = o),
          (n = ie() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * Zp(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Ls(St.bind(null, e), n)
          break
        }
        St(e)
        break
      case 5:
        St(e)
        break
      default:
        throw Error(_(329))
    }
  }
  return xe(e, ie()), e.callbackNode === t ? Ec.bind(null, e) : null
}
function rn(e, t) {
  for (
    t &= ~Nu, t &= ~Sn, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Rl(e) {
  if ((N & 48) !== 0) throw Error(_(327))
  if ((vt(), e === se && (e.expiredLanes & le) !== 0)) {
    var t = le,
      n = Vn(e, t)
    ;(wn & Sn) !== 0 && ((t = ar(e, t)), (n = Vn(e, t)))
  } else (t = ar(e, 0)), (n = Vn(e, t))
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((N |= 64),
      e.hydrate && ((e.hydrate = !1), pu(e.containerInfo)),
      (t = jf(e)),
      t !== 0 && (n = Vn(e, t))),
    n === 1)
  )
    throw ((n = Ho), on(e, 0), rn(e, t), xe(e, ie()), n)
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    St(e),
    xe(e, ie()),
    null
  )
}
function em() {
  if (We !== null) {
    var e = We
    ;(We = null),
      e.forEach(function (t) {
        ;(t.expiredLanes |= 24 & t.pendingLanes), xe(t, ie())
      })
  }
  Ie()
}
function kc(e, t) {
  var n = N
  N |= 1
  try {
    return e(t)
  } finally {
    ;(N = n), N === 0 && (_n(), Ie())
  }
}
function Cc(e, t) {
  var n = N
  ;(N &= -2), (N |= 8)
  try {
    return e(t)
  } finally {
    ;(N = n), N === 0 && (_n(), Ie())
  }
}
function Ur(e, t) {
  V(kl, Rt), (Rt |= t), (wn |= t)
}
function Ru() {
  ;(Rt = kl.current), I(kl)
}
function on(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Mp(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n
      switch (r.tag) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && co()
          break
        case 3:
          dn(), I(de), I(ue), Su()
          break
        case 5:
          wu(r)
          break
        case 4:
          dn()
          break
        case 13:
          I(U)
          break
        case 19:
          I(U)
          break
        case 10:
          yu(r)
          break
        case 23:
        case 24:
          Ru()
      }
      n = n.return
    }
  ;(se = e),
    (Q = ct(e.current, null)),
    (le = Rt = wn = t),
    (Z = 0),
    (Ho = null),
    (Nu = Sn = xr = 0)
}
function xc(e, t) {
  do {
    var n = Q
    try {
      if ((vu(), (bn.current = ko), wo)) {
        for (var r = H.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        wo = !1
      }
      if (
        ((yr = 0),
        (J = re = H = null),
        (Jn = !1),
        (Ou.current = null),
        n === null || n.return === null)
      ) {
        ;(Z = 1), (Ho = t), (Q = null)
        break
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t
        if (
          ((t = le),
          (u.flags |= 2048),
          (u.firstEffect = u.lastEffect = null),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s
          if ((u.mode & 2) === 0) {
            var f = u.alternate
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null))
          }
          var v = (U.current & 1) !== 0,
            m = l
          do {
            var g
            if ((g = m.tag === 13)) {
              var S = m.memoizedState
              if (S !== null) g = S.dehydrated !== null
              else {
                var w = m.memoizedProps
                g =
                  w.fallback === void 0
                    ? !1
                    : w.unstable_avoidThisFallback !== !0
                    ? !0
                    : !v
              }
            }
            if (g) {
              var d = m.updateQueue
              if (d === null) {
                var c = new Set()
                c.add(a), (m.updateQueue = c)
              } else d.add(a)
              if ((m.mode & 2) === 0) {
                if (
                  ((m.flags |= 64), (u.flags |= 16384), (u.flags &= -2981), u.tag === 1)
                )
                  if (u.alternate === null) u.tag = 17
                  else {
                    var p = nt(-1, 1)
                    ;(p.tag = 2), rt(u, p)
                  }
                u.lanes |= 1
                break e
              }
              ;(s = void 0), (u = t)
              var h = i.pingCache
              if (
                (h === null
                  ? ((h = i.pingCache = new Xp()), (s = new Set()), h.set(a, s))
                  : ((s = h.get(a)), s === void 0 && ((s = new Set()), h.set(a, s))),
                !s.has(u))
              ) {
                s.add(u)
                var y = um.bind(null, i, a, u)
                a.then(y, y)
              }
              ;(m.flags |= 4096), (m.lanes = t)
              break e
            }
            m = m.return
          } while (m !== null)
          s = Error(
            (Gt(u.type) || 'A React component') +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          )
        }
        Z !== 5 && (Z = 2), (s = Pu(s, u)), (m = l)
        do {
          switch (m.tag) {
            case 3:
              ;(i = s), (m.flags |= 4096), (t &= -t), (m.lanes |= t)
              var x = wc(m, i, t)
              Fs(m, x)
              break e
            case 1:
              i = s
              var E = m.type,
                O = m.stateNode
              if (
                (m.flags & 64) === 0 &&
                (typeof E.getDerivedStateFromError == 'function' ||
                  (O !== null &&
                    typeof O.componentDidCatch == 'function' &&
                    ($e === null || !$e.has(O))))
              ) {
                ;(m.flags |= 4096), (t &= -t), (m.lanes |= t)
                var R = Sc(m, i, t)
                Fs(m, R)
                break e
              }
          }
          m = m.return
        } while (m !== null)
      }
      Nc(n)
    } catch (P) {
      ;(t = P), Q === n && n !== null && (Q = n = n.return)
      continue
    }
    break
  } while (1)
}
function Pc() {
  var e = Co.current
  return (Co.current = ko), e === null ? ko : e
}
function Vn(e, t) {
  var n = N
  N |= 16
  var r = Pc()
  ;(se === e && le === t) || on(e, t)
  do
    try {
      tm()
      break
    } catch (o) {
      xc(e, o)
    }
  while (1)
  if ((vu(), (N = n), (Co.current = r), Q !== null)) throw Error(_(261))
  return (se = null), (le = 0), Z
}
function tm() {
  for (; Q !== null; ) Oc(Q)
}
function nm() {
  for (; Q !== null && !Ip(); ) Oc(Q)
}
function Oc(e) {
  var t = Rc(e.alternate, e, Rt)
  ;(e.memoizedProps = e.pendingProps), t === null ? Nc(e) : (Q = t), (Ou.current = null)
}
function Nc(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = qp(n, t, Rt)), n !== null)) {
        Q = n
        return
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (Rt & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, o = n.child; o !== null; )
          (r |= o.lanes | o.childLanes), (o = o.sibling)
        n.childLanes = r
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t),
          (e.lastEffect = t)))
    } else {
      if (((n = Kp(t)), n !== null)) {
        ;(n.flags &= 2047), (Q = n)
        return
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
    }
    if (((t = t.sibling), t !== null)) {
      Q = t
      return
    }
    Q = t = e
  } while (t !== null)
  Z === 0 && (Z = 5)
}
function St(e) {
  var t = cn()
  return Tt(99, rm.bind(null, e, t)), null
}
function rm(e, t) {
  do vt()
  while (Zn !== null)
  if ((N & 48) !== 0) throw Error(_(327))
  var n = e.finishedWork
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177))
  e.callbackNode = null
  var r = n.lanes | n.childLanes,
    o = r,
    i = e.pendingLanes & ~o
  ;(e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements)
  for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
    var s = 31 - st(i),
      a = 1 << s
    ;(o[s] = 0), (l[s] = -1), (u[s] = -1), (i &= ~a)
  }
  if (
    (We !== null && (r & 24) === 0 && We.has(e) && We.delete(e),
    e === se && ((Q = se = null), (le = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (((o = N), (N |= 32), (Ou.current = null), (Ci = qr), (l = xs()), ll(l))) {
      if ('selectionStart' in l) u = { start: l.selectionStart, end: l.selectionEnd }
      else
        e: if (
          ((u = ((u = l.ownerDocument) && u.defaultView) || window),
          (a = u.getSelection && u.getSelection()) && a.rangeCount !== 0)
        ) {
          ;(u = a.anchorNode),
            (i = a.anchorOffset),
            (s = a.focusNode),
            (a = a.focusOffset)
          try {
            u.nodeType, s.nodeType
          } catch {
            u = null
            break e
          }
          var f = 0,
            v = -1,
            m = -1,
            g = 0,
            S = 0,
            w = l,
            d = null
          t: for (;;) {
            for (
              var c;
              w !== u || (i !== 0 && w.nodeType !== 3) || (v = f + i),
                w !== s || (a !== 0 && w.nodeType !== 3) || (m = f + a),
                w.nodeType === 3 && (f += w.nodeValue.length),
                (c = w.firstChild) !== null;

            )
              (d = w), (w = c)
            for (;;) {
              if (w === l) break t
              if (
                (d === u && ++g === i && (v = f),
                d === s && ++S === a && (m = f),
                (c = w.nextSibling) !== null)
              )
                break
              ;(w = d), (d = w.parentNode)
            }
            w = c
          }
          u = v === -1 || m === -1 ? null : { start: v, end: m }
        } else u = null
      u = u || { start: 0, end: 0 }
    } else u = null
    ;(xi = { focusedElem: l, selectionRange: u }),
      (qr = !1),
      (tr = null),
      (Zr = !1),
      (C = r)
    do
      try {
        om()
      } catch (P) {
        if (C === null) throw Error(_(330))
        lt(C, P), (C = C.nextEffect)
      }
    while (C !== null)
    ;(tr = null), (C = r)
    do
      try {
        for (l = e; C !== null; ) {
          var p = C.flags
          if ((p & 16 && ir(C.stateNode, ''), p & 128)) {
            var h = C.alternate
            if (h !== null) {
              var y = h.ref
              y !== null && (typeof y == 'function' ? y(null) : (y.current = null))
            }
          }
          switch (p & 1038) {
            case 2:
              fa(C), (C.flags &= -3)
              break
            case 6:
              fa(C), (C.flags &= -3), Li(C.alternate, C)
              break
            case 1024:
              C.flags &= -1025
              break
            case 1028:
              ;(C.flags &= -1025), Li(C.alternate, C)
              break
            case 4:
              Li(C.alternate, C)
              break
            case 8:
              ;(u = C), _c(l, u)
              var x = u.alternate
              sa(u), x !== null && sa(x)
          }
          C = C.nextEffect
        }
      } catch (P) {
        if (C === null) throw Error(_(330))
        lt(C, P), (C = C.nextEffect)
      }
    while (C !== null)
    if (
      ((y = xi),
      (h = xs()),
      (p = y.focusedElem),
      (l = y.selectionRange),
      h !== p && p && p.ownerDocument && Ff(p.ownerDocument.documentElement, p))
    ) {
      for (
        l !== null &&
          ll(p) &&
          ((h = l.start),
          (y = l.end),
          y === void 0 && (y = h),
          ('selectionStart' in p)
            ? ((p.selectionStart = h), (p.selectionEnd = Math.min(y, p.value.length)))
            : ((y = ((h = p.ownerDocument || document) && h.defaultView) || window),
              y.getSelection &&
                ((y = y.getSelection()),
                (u = p.textContent.length),
                (x = Math.min(l.start, u)),
                (l = l.end === void 0 ? x : Math.min(l.end, u)),
                !y.extend && x > l && ((u = l), (l = x), (x = u)),
                (u = Cs(p, x)),
                (i = Cs(p, l)),
                u &&
                  i &&
                  (y.rangeCount !== 1 ||
                    y.anchorNode !== u.node ||
                    y.anchorOffset !== u.offset ||
                    y.focusNode !== i.node ||
                    y.focusOffset !== i.offset) &&
                  ((h = h.createRange()),
                  h.setStart(u.node, u.offset),
                  y.removeAllRanges(),
                  x > l
                    ? (y.addRange(h), y.extend(i.node, i.offset))
                    : (h.setEnd(i.node, i.offset), y.addRange(h)))))),
          h = [],
          y = p;
        (y = y.parentNode);

      )
        y.nodeType === 1 && h.push({ element: y, left: y.scrollLeft, top: y.scrollTop })
      for (typeof p.focus == 'function' && p.focus(), p = 0; p < h.length; p++)
        (y = h[p]), (y.element.scrollLeft = y.left), (y.element.scrollTop = y.top)
    }
    ;(qr = !!Ci), (xi = Ci = null), (e.current = n), (C = r)
    do
      try {
        for (p = e; C !== null; ) {
          var E = C.flags
          if ((E & 36 && bp(p, C.alternate, C), E & 128)) {
            h = void 0
            var O = C.ref
            if (O !== null) {
              var R = C.stateNode
              switch (C.tag) {
                case 5:
                  h = R
                  break
                default:
                  h = R
              }
              typeof O == 'function' ? O(h) : (O.current = h)
            }
          }
          C = C.nextEffect
        }
      } catch (P) {
        if (C === null) throw Error(_(330))
        lt(C, P), (C = C.nextEffect)
      }
    while (C !== null)
    ;(C = null), Fp(), (N = o)
  } else e.current = n
  if (ft) (ft = !1), (Zn = e), (Bn = t)
  else
    for (C = r; C !== null; )
      (t = C.nextEffect),
        (C.nextEffect = null),
        C.flags & 8 && ((E = C), (E.sibling = null), (E.stateNode = null)),
        (C = t)
  if (
    ((r = e.pendingLanes),
    r === 0 && ($e = null),
    r === 1 ? (e === Tl ? er++ : ((er = 0), (Tl = e))) : (er = 0),
    (n = n.stateNode),
    Ot && typeof Ot.onCommitFiberRoot == 'function')
  )
    try {
      Ot.onCommitFiberRoot(mu, n, void 0, (n.current.flags & 64) === 64)
    } catch {}
  if ((xe(e, ie()), xo)) throw ((xo = !1), (e = Pl), (Pl = null), e)
  return (N & 8) !== 0 || Ie(), null
}
function om() {
  for (; C !== null; ) {
    var e = C.alternate
    Zr ||
      tr === null ||
      ((C.flags & 8) !== 0
        ? fs(C, tr) && (Zr = !0)
        : C.tag === 13 && Jp(e, C) && fs(C, tr) && (Zr = !0))
    var t = C.flags
    ;(t & 256) !== 0 && Gp(e, C),
      (t & 512) === 0 ||
        ft ||
        ((ft = !0),
        pr(97, function () {
          return vt(), null
        })),
      (C = C.nextEffect)
  }
}
function vt() {
  if (Bn !== 90) {
    var e = 97 < Bn ? 97 : Bn
    return (Bn = 90), Tt(e, lm)
  }
  return !1
}
function im(e, t) {
  Ol.push(t, e),
    ft ||
      ((ft = !0),
      pr(97, function () {
        return vt(), null
      }))
}
function Tc(e, t) {
  Nl.push(t, e),
    ft ||
      ((ft = !0),
      pr(97, function () {
        return vt(), null
      }))
}
function lm() {
  if (Zn === null) return !1
  var e = Zn
  if (((Zn = null), (N & 48) !== 0)) throw Error(_(331))
  var t = N
  N |= 32
  var n = Nl
  Nl = []
  for (var r = 0; r < n.length; r += 2) {
    var o = n[r],
      i = n[r + 1],
      l = o.destroy
    if (((o.destroy = void 0), typeof l == 'function'))
      try {
        l()
      } catch (s) {
        if (i === null) throw Error(_(330))
        lt(i, s)
      }
  }
  for (n = Ol, Ol = [], r = 0; r < n.length; r += 2) {
    ;(o = n[r]), (i = n[r + 1])
    try {
      var u = o.create
      o.destroy = u()
    } catch (s) {
      if (i === null) throw Error(_(330))
      lt(i, s)
    }
  }
  for (u = e.current.firstEffect; u !== null; )
    (e = u.nextEffect),
      (u.nextEffect = null),
      u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
      (u = e)
  return (N = t), Ie(), !0
}
function da(e, t, n) {
  ;(t = Pu(n, t)),
    (t = wc(e, t, 1)),
    rt(e, t),
    (t = he()),
    (e = Qo(e, 1)),
    e !== null && (Io(e, 1, t), xe(e, t))
}
function lt(e, t) {
  if (e.tag === 3) da(e, e, t)
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        da(n, e, t)
        break
      } else if (n.tag === 1) {
        var r = n.stateNode
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && ($e === null || !$e.has(r)))
        ) {
          e = Pu(t, e)
          var o = Sc(n, e, 1)
          if ((rt(n, o), (o = he()), (n = Qo(n, 1)), n !== null)) Io(n, 1, o), xe(n, o)
          else if (
            typeof r.componentDidCatch == 'function' &&
            ($e === null || !$e.has(r))
          )
            try {
              r.componentDidCatch(t, e)
            } catch {}
          break
        }
      }
      n = n.return
    }
}
function um(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = he()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (le & n) === n &&
      (Z === 4 || (Z === 3 && (le & 62914560) === le && 500 > ie() - Tu)
        ? on(e, 0)
        : (Nu |= n)),
    xe(e, t)
}
function sm(e, t) {
  var n = e.stateNode
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = cn() === 99 ? 1 : 2)
        : (Ue === 0 && (Ue = wn), (t = Wt(62914560 & ~Ue)), t === 0 && (t = 4194304))),
    (n = he()),
    (e = Qo(e, t)),
    e !== null && (Io(e, t, n), xe(e, n))
}
var Rc
Rc = function (e, t, n) {
  var r = t.lanes
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) Re = !0
    else if ((n & r) !== 0) Re = (e.flags & 16384) !== 0
    else {
      switch (((Re = !1), t.tag)) {
        case 3:
          Js(t), Ti()
          break
        case 5:
          Ws(t)
          break
        case 1:
          pe(t.type) && Yr(t)
          break
        case 4:
          ml(t, t.stateNode.containerInfo)
          break
        case 10:
          r = t.memoizedProps.value
          var o = t.type._context
          V(po, o._currentValue), (o._currentValue = r)
          break
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? Zs(e, t, n)
              : (V(U, U.current & 1), (t = Ve(e, t, n)), t !== null ? t.sibling : null)
          V(U, U.current & 1)
          break
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return oa(e, t, n)
            t.flags |= 64
          }
          if (
            ((o = t.memoizedState),
            o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            V(U, U.current),
            r)
          )
            break
          return null
        case 23:
        case 24:
          return (t.lanes = 0), Ri(e, t, n)
      }
      return Ve(e, t, n)
    }
  else Re = !1
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = fn(t, ue.current)),
        tn(t, n),
        (o = Eu(null, t, r, e, o, n)),
        (t.flags |= 1),
        typeof o == 'object' &&
          o !== null &&
          typeof o.render == 'function' &&
          o.$$typeof === void 0)
      ) {
        if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), pe(r))) {
          var i = !0
          Yr(t)
        } else i = !1
        ;(t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
          gu(t)
        var l = r.getDerivedStateFromProps
        typeof l == 'function' && vo(t, r, l, e),
          (o.updater = Wo),
          (t.stateNode = o),
          (o._reactInternals = t),
          pl(t, r, e, n),
          (t = gl(null, t, r, !0, i, n))
      } else (t.tag = 0), ce(null, t, o, n), (t = t.child)
      return t
    case 16:
      o = t.elementType
      e: {
        switch (
          (e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (i = o._init),
          (o = i(o._payload)),
          (t.type = o),
          (i = t.tag = fm(o)),
          (e = Ne(o, e)),
          i)
        ) {
          case 0:
            t = yl(null, t, o, e, n)
            break e
          case 1:
            t = bs(null, t, o, e, n)
            break e
          case 11:
            t = Ys(null, t, o, e, n)
            break e
          case 14:
            t = Gs(null, t, o, Ne(o.type, e), r, n)
            break e
        }
        throw Error(_(306, o, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ne(r, o)),
        yl(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ne(r, o)),
        bs(e, t, r, o, n)
      )
    case 3:
      if ((Js(t), (r = t.updateQueue), e === null || r === null)) throw Error(_(282))
      if (
        ((r = t.pendingProps),
        (o = t.memoizedState),
        (o = o !== null ? o.element : null),
        tc(e, t),
        mr(t, r, null, n),
        (r = t.memoizedState.element),
        r === o)
      )
        Ti(), (t = Ve(e, t, n))
      else {
        if (
          ((o = t.stateNode),
          (i = o.hydrate) &&
            ((Je = en(t.stateNode.containerInfo.firstChild)), (Be = t), (i = De = !0)),
          i)
        ) {
          if (((e = o.mutableSourceEagerHydrationData), e != null))
            for (o = 0; o < e.length; o += 2)
              (i = e[o]), (i._workInProgressVersionPrimary = e[o + 1]), nn.push(i)
          for (n = ic(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling)
        } else ce(e, t, r, n), Ti()
        t = t.child
      }
      return t
    case 5:
      return (
        Ws(t),
        e === null && hl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        al(r, o) ? (l = null) : i !== null && al(r, i) && (t.flags |= 16),
        hc(e, t),
        ce(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && hl(t), null
    case 13:
      return Zs(e, t, n)
    case 4:
      return (
        ml(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yo(t, null, r, n)) : ce(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ne(r, o)),
        Ys(e, t, r, o, n)
      )
    case 7:
      return ce(e, t, t.pendingProps, n), t.child
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        ;(r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (i = o.value)
        var u = t.type._context
        if ((V(po, u._currentValue), (u._currentValue = i), l !== null))
          if (
            ((u = l.value),
            (i = _e(u, i)
              ? 0
              : (typeof r._calculateChangedBits == 'function'
                  ? r._calculateChangedBits(u, i)
                  : 1073741823) | 0),
            i === 0)
          ) {
            if (l.children === o.children && !de.current) {
              t = Ve(e, t, n)
              break e
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var s = u.dependencies
              if (s !== null) {
                l = u.child
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r && (a.observedBits & i) !== 0) {
                    u.tag === 1 && ((a = nt(-1, n & -n)), (a.tag = 2), rt(u, a)),
                      (u.lanes |= n),
                      (a = u.alternate),
                      a !== null && (a.lanes |= n),
                      ec(u.return, n),
                      (s.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else l = u.tag === 10 && u.type === t.type ? null : u.child
              if (l !== null) l.return = u
              else
                for (l = u; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((u = l.sibling), u !== null)) {
                    ;(u.return = l.return), (l = u)
                    break
                  }
                  l = l.return
                }
              u = l
            }
        ce(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (i = t.pendingProps),
        (r = i.children),
        tn(t, n),
        (o = Ce(o, i.unstable_observedBits)),
        (r = r(o)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (o = t.type),
        (i = Ne(o, t.pendingProps)),
        (i = Ne(o.type, i)),
        Gs(e, t, o, i, r, n)
      )
    case 15:
      return mc(e, t, t.type, t.pendingProps, r, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ne(r, o)),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        pe(r) ? ((e = !0), Yr(t)) : (e = !1),
        tn(t, n),
        rc(t, r, o),
        pl(t, r, o, n),
        gl(null, t, r, !0, e, n)
      )
    case 19:
      return oa(e, t, n)
    case 23:
      return Ri(e, t, n)
    case 24:
      return Ri(e, t, n)
  }
  throw Error(_(156, t.tag))
}
function am(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ee(e, t, n, r) {
  return new am(e, t, n, r)
}
function ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function fm(e) {
  if (typeof e == 'function') return ju(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Mo)) return 11
    if (e === Do) return 14
  }
  return 2
}
function ct(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function eo(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) ju(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case Xe:
        return ln(n.children, o, i, t)
      case lf:
        ;(l = 8), (o |= 16)
        break
      case Kl:
        ;(l = 8), (o |= 1)
        break
      case Hn:
        return (
          (e = Ee(12, n, t, o | 8)), (e.elementType = Hn), (e.type = Hn), (e.lanes = i), e
        )
      case Qn:
        return (
          (e = Ee(13, n, t, o)), (e.type = Qn), (e.elementType = Qn), (e.lanes = i), e
        )
      case ro:
        return (e = Ee(19, n, t, o)), (e.elementType = ro), (e.lanes = i), e
      case Zl:
        return Lu(n, o, i, t)
      case Qi:
        return (e = Ee(24, n, t, o)), (e.elementType = Qi), (e.lanes = i), e
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Xl:
              l = 10
              break e
            case Yl:
              l = 9
              break e
            case Mo:
              l = 11
              break e
            case Do:
              l = 14
              break e
            case Gl:
              ;(l = 16), (r = null)
              break e
            case bl:
              l = 22
              break e
          }
        throw Error(_(130, e == null ? e : typeof e, ''))
    }
  return (t = Ee(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
}
function ln(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e
}
function Lu(e, t, n, r) {
  return (e = Ee(23, e, r, t)), (e.elementType = Zl), (e.lanes = n), e
}
function $i(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e
}
function Mi(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function cm(e, t, n) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Array(31).fill(0)),
    (this.expirationTimes = Array(31).fill(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Array(31).fill(0)),
    (this.mutableSourceEagerHydrationData = null)
}
function dm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Et,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function Po(e, t, n, r) {
  var o = t.current,
    i = he(),
    l = ot(o)
  e: if (n) {
    n = n._reactInternals
    t: {
      if (Mt(n) !== n || n.tag !== 1) throw Error(_(170))
      var u = n
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context
            break t
          case 1:
            if (pe(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext
              break t
            }
        }
        u = u.return
      } while (u !== null)
      throw Error(_(171))
    }
    if (n.tag === 1) {
      var s = n.type
      if (pe(s)) {
        n = Kf(n, s, u)
        break e
      }
    }
    n = u
  } else n = at
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    rt(o, t),
    it(o, l, i),
    l
  )
}
function Di(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function pa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function $u(e, t) {
  pa(e, t), (e = e.alternate) && pa(e, t)
}
function pm() {
  return null
}
function Mu(e, t, n) {
  var r =
    (n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources) || null
  if (
    ((n = new cm(e, t, n != null && n.hydrate === !0)),
    (t = Ee(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    gu(t),
    (e[gn] = n.current),
    Vf(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e]
      var o = t._getVersion
      ;(o = o(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o)
    }
  this._internalRoot = n
}
Mu.prototype.render = function (e) {
  Po(e, this._internalRoot, null, null)
}
Mu.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo
  Po(null, e, null, function () {
    t[gn] = null
  })
}
function Pr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function mm(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n)
  return new Mu(e, 0, t ? { hydrate: !0 } : void 0)
}
function qo(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i._internalRoot
    if (typeof o == 'function') {
      var u = o
      o = function () {
        var a = Di(l)
        u.call(a)
      }
    }
    Po(t, l, e, o)
  } else {
    if (
      ((i = n._reactRootContainer = mm(n, r)),
      (l = i._internalRoot),
      typeof o == 'function')
    ) {
      var s = o
      o = function () {
        var a = Di(l)
        s.call(a)
      }
    }
    Cc(function () {
      Po(t, l, e, o)
    })
  }
  return Di(l)
}
_f = function (e) {
  if (e.tag === 13) {
    var t = he()
    it(e, 4, t), $u(e, 4)
  }
}
ou = function (e) {
  if (e.tag === 13) {
    var t = he()
    it(e, 67108864, t), $u(e, 67108864)
  }
}
Ef = function (e) {
  if (e.tag === 13) {
    var t = he(),
      n = ot(e)
    it(e, n, t), $u(e, n)
  }
}
kf = function (e, t) {
  return t()
}
tl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ki(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Bo(r)
            if (!o) throw Error(_(90))
            sf(r), Ki(r, o)
          }
        }
      }
      break
    case 'textarea':
      ff(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && bt(e, !!n.multiple, t, !1)
  }
}
tu = kc
yf = function (e, t, n, r, o) {
  var i = N
  N |= 4
  try {
    return Tt(98, e.bind(null, t, n, r, o))
  } finally {
    ;(N = i), N === 0 && (_n(), Ie())
  }
}
nu = function () {
  ;(N & 49) === 0 && (em(), vt())
}
gf = function (e, t) {
  var n = N
  N |= 2
  try {
    return e(t)
  } finally {
    ;(N = n), N === 0 && (_n(), Ie())
  }
}
function jc(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Pr(t)) throw Error(_(200))
  return dm(e, t, null, n)
}
var hm = { Events: [kr, Kt, Bo, hf, vf, vt, { current: !1 }] },
  In = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: '17.0.0',
    rendererPackageName: 'react-dom'
  },
  vm = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sf(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: In.findFiberByHostInstance || pm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Br.isDisabled && Br.supportsFiber)
    try {
      ;(mu = Br.inject(vm)), (Ot = Br)
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm
Pe.createPortal = jc
Pe.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(_(188)) : Error(_(268, Object.keys(e)))
  return (e = Sf(t)), (e = e === null ? null : e.stateNode), e
}
Pe.flushSync = function (e, t) {
  var n = N
  if ((n & 48) !== 0) return e(t)
  N |= 1
  try {
    if (e) return Tt(99, e.bind(null, t))
  } finally {
    ;(N = n), Ie()
  }
}
Pe.hydrate = function (e, t, n) {
  if (!Pr(t)) throw Error(_(200))
  return qo(null, e, t, !0, n)
}
Pe.render = function (e, t, n) {
  if (!Pr(t)) throw Error(_(200))
  return qo(null, e, t, !1, n)
}
Pe.unmountComponentAtNode = function (e) {
  if (!Pr(e)) throw Error(_(40))
  return e._reactRootContainer
    ? (Cc(function () {
        qo(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[gn] = null)
        })
      }),
      !0)
    : !1
}
Pe.unstable_batchedUpdates = kc
Pe.unstable_createPortal = function (e, t) {
  return jc(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null)
}
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pr(n)) throw Error(_(200))
  if (e == null || e._reactInternals === void 0) throw Error(_(38))
  return qo(e, t, n, !1, r)
}
Pe.version = '17.0.0'
function Lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc)
    } catch (e) {
      console.error(e)
    }
}
Lc(), (Wl.exports = Pe)
var ym = Wl.exports,
  dt = tf.createContext(null)
function gm(e) {
  e()
}
var $c = gm,
  wm = function (t) {
    return ($c = t)
  },
  Sm = function () {
    return $c
  }
function _m() {
  var e = Sm(),
    t = null,
    n = null
  return {
    clear: function () {
      ;(t = null), (n = null)
    },
    notify: function () {
      e(function () {
        for (var o = t; o; ) o.callback(), (o = o.next)
      })
    },
    get: function () {
      for (var o = [], i = t; i; ) o.push(i), (i = i.next)
      return o
    },
    subscribe: function (o) {
      var i = !0,
        l = (n = { callback: o, next: null, prev: n })
      return (
        l.prev ? (l.prev.next = l) : (t = l),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            l.next ? (l.next.prev = l.prev) : (n = l.prev),
            l.prev ? (l.prev.next = l.next) : (t = l.next))
        }
      )
    }
  }
}
var ma = {
  notify: function () {},
  get: function () {
    return []
  }
}
function Mc(e, t) {
  var n,
    r = ma
  function o(v) {
    return s(), r.subscribe(v)
  }
  function i() {
    r.notify()
  }
  function l() {
    f.onStateChange && f.onStateChange()
  }
  function u() {
    return Boolean(n)
  }
  function s() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = _m()))
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = ma))
  }
  var f = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: s,
    tryUnsubscribe: a,
    getListeners: function () {
      return r
    }
  }
  return f
}
var jl =
    typeof window != 'undefined' &&
    typeof window.document != 'undefined' &&
    typeof window.document.createElement != 'undefined'
      ? B.exports.useLayoutEffect
      : B.exports.useEffect,
  Du = { exports: {} },
  Or = {}
/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em = B.exports,
  Dc = 60103
Or.Fragment = 60107
if (typeof Symbol == 'function' && Symbol.for) {
  var ha = Symbol.for
  ;(Dc = ha('react.element')), (Or.Fragment = ha('react.fragment'))
}
var km = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cm = Object.prototype.hasOwnProperty,
  xm = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ac(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) Cm.call(t, r) && !xm.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Dc, type: e, key: i, ref: l, props: o, _owner: km.current }
}
Or.jsx = Ac
Or.jsxs = Ac
Du.exports = Or
const j = Du.exports.jsx,
  oe = Du.exports.jsxs
function Pm(e) {
  var t = e.store,
    n = e.context,
    r = e.children,
    o = B.exports.useMemo(
      function () {
        var u = Mc(t)
        return (u.onStateChange = u.notifyNestedSubs), { store: t, subscription: u }
      },
      [t]
    ),
    i = B.exports.useMemo(
      function () {
        return t.getState()
      },
      [t]
    )
  jl(
    function () {
      var u = o.subscription
      return (
        u.trySubscribe(),
        i !== t.getState() && u.notifyNestedSubs(),
        function () {
          u.tryUnsubscribe(), (u.onStateChange = null)
        }
      )
    },
    [o, i]
  )
  var l = n || dt
  return j(l.Provider, { value: o, children: r })
}
var Ic = { exports: {} },
  M = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X = typeof Symbol == 'function' && Symbol.for,
  Au = X ? Symbol.for('react.element') : 60103,
  Iu = X ? Symbol.for('react.portal') : 60106,
  Ko = X ? Symbol.for('react.fragment') : 60107,
  Xo = X ? Symbol.for('react.strict_mode') : 60108,
  Yo = X ? Symbol.for('react.profiler') : 60114,
  Go = X ? Symbol.for('react.provider') : 60109,
  bo = X ? Symbol.for('react.context') : 60110,
  zu = X ? Symbol.for('react.async_mode') : 60111,
  Jo = X ? Symbol.for('react.concurrent_mode') : 60111,
  Zo = X ? Symbol.for('react.forward_ref') : 60112,
  ei = X ? Symbol.for('react.suspense') : 60113,
  Om = X ? Symbol.for('react.suspense_list') : 60120,
  ti = X ? Symbol.for('react.memo') : 60115,
  ni = X ? Symbol.for('react.lazy') : 60116,
  Nm = X ? Symbol.for('react.block') : 60121,
  Tm = X ? Symbol.for('react.fundamental') : 60117,
  Rm = X ? Symbol.for('react.responder') : 60118,
  jm = X ? Symbol.for('react.scope') : 60119
function ge(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Au:
        switch (((e = e.type), e)) {
          case zu:
          case Jo:
          case Ko:
          case Yo:
          case Xo:
          case ei:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case bo:
              case Zo:
              case ni:
              case ti:
              case Go:
                return e
              default:
                return t
            }
        }
      case Iu:
        return t
    }
  }
}
function zc(e) {
  return ge(e) === Jo
}
M.AsyncMode = zu
M.ConcurrentMode = Jo
M.ContextConsumer = bo
M.ContextProvider = Go
M.Element = Au
M.ForwardRef = Zo
M.Fragment = Ko
M.Lazy = ni
M.Memo = ti
M.Portal = Iu
M.Profiler = Yo
M.StrictMode = Xo
M.Suspense = ei
M.isAsyncMode = function (e) {
  return zc(e) || ge(e) === zu
}
M.isConcurrentMode = zc
M.isContextConsumer = function (e) {
  return ge(e) === bo
}
M.isContextProvider = function (e) {
  return ge(e) === Go
}
M.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Au
}
M.isForwardRef = function (e) {
  return ge(e) === Zo
}
M.isFragment = function (e) {
  return ge(e) === Ko
}
M.isLazy = function (e) {
  return ge(e) === ni
}
M.isMemo = function (e) {
  return ge(e) === ti
}
M.isPortal = function (e) {
  return ge(e) === Iu
}
M.isProfiler = function (e) {
  return ge(e) === Yo
}
M.isStrictMode = function (e) {
  return ge(e) === Xo
}
M.isSuspense = function (e) {
  return ge(e) === ei
}
M.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ko ||
    e === Jo ||
    e === Yo ||
    e === Xo ||
    e === ei ||
    e === Om ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ni ||
        e.$$typeof === ti ||
        e.$$typeof === Go ||
        e.$$typeof === bo ||
        e.$$typeof === Zo ||
        e.$$typeof === Tm ||
        e.$$typeof === Rm ||
        e.$$typeof === jm ||
        e.$$typeof === Nm))
  )
}
M.typeOf = ge
Ic.exports = M
var Fc = Ic.exports,
  Lm = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  $m = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  Uc = {}
Uc[Fc.ForwardRef] = Lm
Uc[Fc.Memo] = $m
function Bc() {
  var e = B.exports.useContext(dt)
  return e
}
function Vc(e) {
  e === void 0 && (e = dt)
  var t =
    e === dt
      ? Bc
      : function () {
          return B.exports.useContext(e)
        }
  return function () {
    var r = t(),
      o = r.store
    return o
  }
}
var Mm = Vc()
function Dm(e) {
  e === void 0 && (e = dt)
  var t = e === dt ? Mm : Vc(e)
  return function () {
    var r = t()
    return r.dispatch
  }
}
var ri = Dm(),
  Am = function (t, n) {
    return t === n
  }
function Im(e, t, n, r) {
  var o = B.exports.useReducer(function (S) {
      return S + 1
    }, 0),
    i = o[1],
    l = B.exports.useMemo(
      function () {
        return Mc(n, r)
      },
      [n, r]
    ),
    u = B.exports.useRef(),
    s = B.exports.useRef(),
    a = B.exports.useRef(),
    f = B.exports.useRef(),
    v = n.getState(),
    m
  try {
    if (e !== s.current || v !== a.current || u.current) {
      var g = e(v)
      f.current === void 0 || !t(g, f.current) ? (m = g) : (m = f.current)
    } else m = f.current
  } catch (S) {
    throw (
      (u.current &&
        (S.message +=
          `
The error may be correlated with this previous error:
` +
          u.current.stack +
          `

`),
      S)
    )
  }
  return (
    jl(function () {
      ;(s.current = e), (a.current = v), (f.current = m), (u.current = void 0)
    }),
    jl(
      function () {
        function S() {
          try {
            var w = n.getState()
            if (w === a.current) return
            var d = s.current(w)
            if (t(d, f.current)) return
            ;(f.current = d), (a.current = w)
          } catch (c) {
            u.current = c
          }
          i()
        }
        return (
          (l.onStateChange = S),
          l.trySubscribe(),
          S(),
          function () {
            return l.tryUnsubscribe()
          }
        )
      },
      [n, l]
    ),
    m
  )
}
function zm(e) {
  e === void 0 && (e = dt)
  var t =
    e === dt
      ? Bc
      : function () {
          return B.exports.useContext(e)
        }
  return function (r, o) {
    o === void 0 && (o = Am)
    var i = t(),
      l = i.store,
      u = i.subscription,
      s = Im(r, o, l, u)
    return B.exports.useDebugValue(s), s
  }
}
var pn = zm()
wm(Wl.exports.unstable_batchedUpdates)
const Fm = '_base_rvsh7_1',
  Um = '_gradient_rvsh7_1',
  Bm = '_foodanddrink_rvsh7_23',
  Vm = '_geography_rvsh7_29',
  Wm = '_generalknowledge_rvsh7_35',
  Hm = '_history_rvsh7_41',
  Qm = '_artandliterature_rvsh7_47',
  qm = '_movies_rvsh7_53',
  Km = '_music_rvsh7_59',
  Xm = '_science_rvsh7_65',
  Ym = '_societyandculture_rvsh7_71',
  Gm = '_sportandleisure_rvsh7_77'
var bm = {
  base: Fm,
  gradient: Um,
  foodanddrink: Bm,
  geography: Vm,
  generalknowledge: Wm,
  history: Hm,
  artandliterature: Qm,
  movies: qm,
  music: Km,
  science: Xm,
  societyandculture: Ym,
  sportandleisure: Gm
}
const Jm = '_base_188nm_1',
  Zm = '_appear_188nm_1',
  eh = '_questions_188nm_27',
  th = '_categories_188nm_34',
  nh = '_selected_188nm_55',
  rh = '_play_188nm_60',
  oh = '_forbidden_188nm_65'
var Ft = {
  base: Jm,
  appear: Zm,
  questions: eh,
  categories: th,
  selected: nh,
  play: rh,
  forbidden: oh
}
function En(e, t) {
  return t.map((r) => (r ? e[r] : '')).join(' ')
}
function Te(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  )
}
function pt(e) {
  return !!e && !!e[z]
}
function mt(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != 'object') return !1
      var n = Object.getPrototypeOf(t)
      if (n === null) return !0
      var r = Object.hasOwnProperty.call(n, 'constructor') && n.constructor
      return r === Object || (typeof r == 'function' && Function.toString.call(r) === ph)
    })(e) ||
      Array.isArray(e) ||
      !!e[Ea] ||
      !!e.constructor[Ea] ||
      Fu(e) ||
      Uu(e))
  )
}
function jt(e, t, n) {
  n === void 0 && (n = !1),
    kn(e) === 0
      ? (n ? Object.keys : sn)(e).forEach(function (r) {
          ;(n && typeof r == 'symbol') || t(r, e[r], e)
        })
      : e.forEach(function (r, o) {
          return t(o, r, e)
        })
}
function kn(e) {
  var t = e[z]
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : Fu(e) ? 2 : Uu(e) ? 3 : 0
}
function un(e, t) {
  return kn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function ih(e, t) {
  return kn(e) === 2 ? e.get(t) : e[t]
}
function Wc(e, t, n) {
  var r = kn(e)
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n)
}
function Hc(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Fu(e) {
  return ch && e instanceof Map
}
function Uu(e) {
  return dh && e instanceof Set
}
function _t(e) {
  return e.o || e.t
}
function Bu(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = qc(e)
  delete t[z]
  for (var n = sn(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o]
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function Vu(e, t) {
  return (
    t === void 0 && (t = !1),
    Wu(e) ||
      pt(e) ||
      !mt(e) ||
      (kn(e) > 1 && (e.set = e.add = e.clear = e.delete = lh),
      Object.freeze(e),
      t &&
        jt(
          e,
          function (n, r) {
            return Vu(r, !0)
          },
          !0
        )),
    e
  )
}
function lh() {
  Te(2)
}
function Wu(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function Ae(e) {
  var t = Dl[e]
  return t || Te(18, e), t
}
function uh(e, t) {
  Dl[e] || (Dl[e] = t)
}
function Ll() {
  return gr
}
function Ai(e, t) {
  t && (Ae('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function Oo(e) {
  $l(e), e.p.forEach(sh), (e.p = null)
}
function $l(e) {
  e === gr && (gr = e.l)
}
function va(e) {
  return (gr = { p: [], l: gr, h: e, m: !0, _: 0 })
}
function sh(e) {
  var t = e[z]
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0)
}
function Ii(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    r = e !== void 0 && e !== n
  return (
    t.h.g || Ae('ES5').S(t, e, r),
    r
      ? (n[z].P && (Oo(t), Te(4)),
        mt(e) && ((e = No(t, e)), t.l || To(t, e)),
        t.u && Ae('Patches').M(n[z].t, e, t.u, t.s))
      : (e = No(t, n, [])),
    Oo(t),
    t.u && t.v(t.u, t.s),
    e !== Qc ? e : void 0
  )
}
function No(e, t, n) {
  if (Wu(t)) return t
  var r = t[z]
  if (!r)
    return (
      jt(
        t,
        function (i, l) {
          return ya(e, r, t, i, l, n)
        },
        !0
      ),
      t
    )
  if (r.A !== e) return t
  if (!r.P) return To(e, r.t, !0), r.t
  if (!r.I) {
    ;(r.I = !0), r.A._--
    var o = r.i === 4 || r.i === 5 ? (r.o = Bu(r.k)) : r.o
    jt(r.i === 3 ? new Set(o) : o, function (i, l) {
      return ya(e, r, o, i, l, n)
    }),
      To(e, o, !1),
      n && e.u && Ae('Patches').R(r, n, e.u, e.s)
  }
  return r.o
}
function ya(e, t, n, r, o, i) {
  if (pt(o)) {
    var l = No(e, o, i && t && t.i !== 3 && !un(t.D, r) ? i.concat(r) : void 0)
    if ((Wc(n, r, l), !pt(l))) return
    e.m = !1
  }
  if (mt(o) && !Wu(o)) {
    if (!e.h.F && e._ < 1) return
    No(e, o), (t && t.A.l) || To(e, o)
  }
}
function To(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Vu(t, n)
}
function zi(e, t) {
  var n = e[z]
  return (n ? _t(n) : e)[t]
}
function ga(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t)
      if (r) return r
      n = Object.getPrototypeOf(n)
    }
}
function Ye(e) {
  e.P || ((e.P = !0), e.l && Ye(e.l))
}
function Fi(e) {
  e.o || (e.o = Bu(e.t))
}
function Ml(e, t, n) {
  var r = Fu(t)
    ? Ae('MapSet').N(t, n)
    : Uu(t)
    ? Ae('MapSet').T(t, n)
    : e.g
    ? (function (o, i) {
        var l = Array.isArray(o),
          u = {
            i: l ? 1 : 0,
            A: i ? i.A : Ll(),
            P: !1,
            I: !1,
            D: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1
          },
          s = u,
          a = wr
        l && ((s = [u]), (a = Wn))
        var f = Proxy.revocable(s, a),
          v = f.revoke,
          m = f.proxy
        return (u.k = m), (u.j = v), m
      })(t, n)
    : Ae('ES5').J(t, n)
  return (n ? n.A : Ll()).p.push(r), r
}
function ah(e) {
  return (
    pt(e) || Te(22, e),
    (function t(n) {
      if (!mt(n)) return n
      var r,
        o = n[z],
        i = kn(n)
      if (o) {
        if (!o.P && (o.i < 4 || !Ae('ES5').K(o))) return o.t
        ;(o.I = !0), (r = wa(n, i)), (o.I = !1)
      } else r = wa(n, i)
      return (
        jt(r, function (l, u) {
          ;(o && ih(o.t, l) === u) || Wc(r, l, t(u))
        }),
        i === 3 ? new Set(r) : r
      )
    })(e)
  )
}
function wa(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return Bu(e)
}
function fh() {
  function e(i, l) {
    var u = o[i]
    return (
      u
        ? (u.enumerable = l)
        : (o[i] = u =
            {
              configurable: !0,
              enumerable: l,
              get: function () {
                var s = this[z]
                return wr.get(s, i)
              },
              set: function (s) {
                var a = this[z]
                wr.set(a, i, s)
              }
            }),
      u
    )
  }
  function t(i) {
    for (var l = i.length - 1; l >= 0; l--) {
      var u = i[l][z]
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Ye(u)
            break
          case 4:
            n(u) && Ye(u)
        }
    }
  }
  function n(i) {
    for (var l = i.t, u = i.k, s = sn(u), a = s.length - 1; a >= 0; a--) {
      var f = s[a]
      if (f !== z) {
        var v = l[f]
        if (v === void 0 && !un(l, f)) return !0
        var m = u[f],
          g = m && m[z]
        if (g ? g.t !== v : !Hc(m, v)) return !0
      }
    }
    var S = !!l[z]
    return s.length !== sn(l).length + (S ? 0 : 1)
  }
  function r(i) {
    var l = i.k
    if (l.length !== i.t.length) return !0
    var u = Object.getOwnPropertyDescriptor(l, l.length - 1)
    if (u && !u.get) return !0
    for (var s = 0; s < l.length; s++) if (!l.hasOwnProperty(s)) return !0
    return !1
  }
  var o = {}
  uh('ES5', {
    J: function (i, l) {
      var u = Array.isArray(i),
        s = (function (f, v) {
          if (f) {
            for (var m = Array(v.length), g = 0; g < v.length; g++)
              Object.defineProperty(m, '' + g, e(g, !0))
            return m
          }
          var S = qc(v)
          delete S[z]
          for (var w = sn(S), d = 0; d < w.length; d++) {
            var c = w[d]
            S[c] = e(c, f || !!S[c].enumerable)
          }
          return Object.create(Object.getPrototypeOf(v), S)
        })(u, i),
        a = {
          i: u ? 5 : 4,
          A: l ? l.A : Ll(),
          P: !1,
          I: !1,
          D: {},
          l,
          t: i,
          k: s,
          o: null,
          O: !1,
          C: !1
        }
      return Object.defineProperty(s, z, { value: a, writable: !0 }), s
    },
    S: function (i, l, u) {
      u
        ? pt(l) && l[z].A === i && t(i.p)
        : (i.u &&
            (function s(a) {
              if (a && typeof a == 'object') {
                var f = a[z]
                if (f) {
                  var v = f.t,
                    m = f.k,
                    g = f.D,
                    S = f.i
                  if (S === 4)
                    jt(m, function (h) {
                      h !== z &&
                        (v[h] !== void 0 || un(v, h)
                          ? g[h] || s(m[h])
                          : ((g[h] = !0), Ye(f)))
                    }),
                      jt(v, function (h) {
                        m[h] !== void 0 || un(m, h) || ((g[h] = !1), Ye(f))
                      })
                  else if (S === 5) {
                    if ((r(f) && (Ye(f), (g.length = !0)), m.length < v.length))
                      for (var w = m.length; w < v.length; w++) g[w] = !1
                    else for (var d = v.length; d < m.length; d++) g[d] = !0
                    for (var c = Math.min(m.length, v.length), p = 0; p < c; p++)
                      m.hasOwnProperty(p) || (g[p] = !0), g[p] === void 0 && s(m[p])
                  }
                }
              }
            })(i.p[0]),
          t(i.p))
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i)
    }
  })
}
var Sa,
  gr,
  Hu = typeof Symbol != 'undefined' && typeof Symbol('x') == 'symbol',
  ch = typeof Map != 'undefined',
  dh = typeof Set != 'undefined',
  _a =
    typeof Proxy != 'undefined' &&
    Proxy.revocable !== void 0 &&
    typeof Reflect != 'undefined',
  Qc = Hu ? Symbol.for('immer-nothing') : (((Sa = {})['immer-nothing'] = !0), Sa),
  Ea = Hu ? Symbol.for('immer-draftable') : '__$immer_draftable',
  z = Hu ? Symbol.for('immer-state') : '__$immer_state',
  ph = '' + Object.prototype.constructor,
  sn =
    typeof Reflect != 'undefined' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
      : Object.getOwnPropertyNames,
  qc =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        sn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  Dl = {},
  wr = {
    get: function (e, t) {
      if (t === z) return e
      var n = _t(e)
      if (!un(n, t))
        return (function (o, i, l) {
          var u,
            s = ga(i, l)
          return s
            ? 'value' in s
              ? s.value
              : (u = s.get) === null || u === void 0
              ? void 0
              : u.call(o.k)
            : void 0
        })(e, n, t)
      var r = n[t]
      return e.I || !mt(r)
        ? r
        : r === zi(e.t, t)
        ? (Fi(e), (e.o[t] = Ml(e.A.h, r, e)))
        : r
    },
    has: function (e, t) {
      return t in _t(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(_t(e))
    },
    set: function (e, t, n) {
      var r = ga(_t(e), t)
      if (r != null && r.set) return r.set.call(e.k, n), !0
      if (!e.P) {
        var o = zi(_t(e), t),
          i = o == null ? void 0 : o[z]
        if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0
        if (Hc(n, o) && (n !== void 0 || un(e.t, t))) return !0
        Fi(e), Ye(e)
      }
      return (
        (e.o[t] === n && typeof n != 'number' && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      )
    },
    deleteProperty: function (e, t) {
      return (
        zi(e.t, t) !== void 0 || t in e.t ? ((e.D[t] = !1), Fi(e), Ye(e)) : delete e.D[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = _t(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t]
        }
      )
    },
    defineProperty: function () {
      Te(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      Te(12)
    }
  },
  Wn = {}
jt(wr, function (e, t) {
  Wn[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (Wn.deleteProperty = function (e, t) {
    return Wn.set.call(this, e, t, void 0)
  }),
  (Wn.set = function (e, t, n) {
    return wr.set.call(this, e[0], t, n, e[0])
  })
var mh = (function () {
    function e(n) {
      var r = this
      ;(this.g = _a),
        (this.F = !0),
        (this.produce = function (o, i, l) {
          if (typeof o == 'function' && typeof i != 'function') {
            var u = i
            i = o
            var s = r
            return function (w) {
              var d = this
              w === void 0 && (w = u)
              for (
                var c = arguments.length, p = Array(c > 1 ? c - 1 : 0), h = 1;
                h < c;
                h++
              )
                p[h - 1] = arguments[h]
              return s.produce(w, function (y) {
                var x
                return (x = i).call.apply(x, [d, y].concat(p))
              })
            }
          }
          var a
          if (
            (typeof i != 'function' && Te(6),
            l !== void 0 && typeof l != 'function' && Te(7),
            mt(o))
          ) {
            var f = va(r),
              v = Ml(r, o, void 0),
              m = !0
            try {
              ;(a = i(v)), (m = !1)
            } finally {
              m ? Oo(f) : $l(f)
            }
            return typeof Promise != 'undefined' && a instanceof Promise
              ? a.then(
                  function (w) {
                    return Ai(f, l), Ii(w, f)
                  },
                  function (w) {
                    throw (Oo(f), w)
                  }
                )
              : (Ai(f, l), Ii(a, f))
          }
          if (!o || typeof o != 'object') {
            if (
              ((a = i(o)) === void 0 && (a = o),
              a === Qc && (a = void 0),
              r.F && Vu(a, !0),
              l)
            ) {
              var g = [],
                S = []
              Ae('Patches').M(o, a, g, S), l(g, S)
            }
            return a
          }
          Te(21, o)
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (a) {
              for (
                var f = arguments.length, v = Array(f > 1 ? f - 1 : 0), m = 1;
                m < f;
                m++
              )
                v[m - 1] = arguments[m]
              return r.produceWithPatches(a, function (g) {
                return o.apply(void 0, [g].concat(v))
              })
            }
          var l,
            u,
            s = r.produce(o, i, function (a, f) {
              ;(l = a), (u = f)
            })
          return typeof Promise != 'undefined' && s instanceof Promise
            ? s.then(function (a) {
                return [a, l, u]
              })
            : [s, l, u]
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (n) {
        mt(n) || Te(8), pt(n) && (n = ah(n))
        var r = va(this),
          o = Ml(this, n, void 0)
        return (o[z].C = !0), $l(r), o
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[z],
          i = o.A
        return Ai(i, r), Ii(void 0, i)
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n
      }),
      (t.setUseProxies = function (n) {
        n && !_a && Te(20), (this.g = n)
      }),
      (t.applyPatches = function (n, r) {
        var o
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o]
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value
            break
          }
        }
        o > -1 && (r = r.slice(o + 1))
        var l = Ae('Patches').$
        return pt(n)
          ? l(n, r)
          : this.produce(n, function (u) {
              return l(u, r)
            })
      }),
      e
    )
  })(),
  ve = new mh(),
  hh = ve.produce
ve.produceWithPatches.bind(ve)
ve.setAutoFreeze.bind(ve)
ve.setUseProxies.bind(ve)
ve.applyPatches.bind(ve)
ve.createDraft.bind(ve)
ve.finishDraft.bind(ve)
var ka = hh
function vh(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function Ca(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ca(Object(n), !0).forEach(function (r) {
          vh(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ca(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function ne(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var Pa = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  Ui = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  Ro = {
    INIT: '@@redux/INIT' + Ui(),
    REPLACE: '@@redux/REPLACE' + Ui(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Ui()
    }
  }
function yh(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function Kc(e, t, n) {
  var r
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(ne(0))
  if (
    (typeof t == 'function' && typeof n == 'undefined' && ((n = t), (t = void 0)),
    typeof n != 'undefined')
  ) {
    if (typeof n != 'function') throw new Error(ne(1))
    return n(Kc)(e, t)
  }
  if (typeof e != 'function') throw new Error(ne(2))
  var o = e,
    i = t,
    l = [],
    u = l,
    s = !1
  function a() {
    u === l && (u = l.slice())
  }
  function f() {
    if (s) throw new Error(ne(3))
    return i
  }
  function v(w) {
    if (typeof w != 'function') throw new Error(ne(4))
    if (s) throw new Error(ne(5))
    var d = !0
    return (
      a(),
      u.push(w),
      function () {
        if (!!d) {
          if (s) throw new Error(ne(6))
          ;(d = !1), a()
          var p = u.indexOf(w)
          u.splice(p, 1), (l = null)
        }
      }
    )
  }
  function m(w) {
    if (!yh(w)) throw new Error(ne(7))
    if (typeof w.type == 'undefined') throw new Error(ne(8))
    if (s) throw new Error(ne(9))
    try {
      ;(s = !0), (i = o(i, w))
    } finally {
      s = !1
    }
    for (var d = (l = u), c = 0; c < d.length; c++) {
      var p = d[c]
      p()
    }
    return w
  }
  function g(w) {
    if (typeof w != 'function') throw new Error(ne(10))
    ;(o = w), m({ type: Ro.REPLACE })
  }
  function S() {
    var w,
      d = v
    return (
      (w = {
        subscribe: function (p) {
          if (typeof p != 'object' || p === null) throw new Error(ne(11))
          function h() {
            p.next && p.next(f())
          }
          h()
          var y = d(h)
          return { unsubscribe: y }
        }
      }),
      (w[Pa] = function () {
        return this
      }),
      w
    )
  }
  return (
    m({ type: Ro.INIT }),
    (r = { dispatch: m, subscribe: v, getState: f, replaceReducer: g }),
    (r[Pa] = S),
    r
  )
}
function gh(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ro.INIT })
    if (typeof r == 'undefined') throw new Error(ne(12))
    if (typeof n(void 0, { type: Ro.PROBE_UNKNOWN_ACTION() }) == 'undefined')
      throw new Error(ne(13))
  })
}
function wh(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r]
    typeof e[o] == 'function' && (n[o] = e[o])
  }
  var i = Object.keys(n),
    l
  try {
    gh(n)
  } catch (u) {
    l = u
  }
  return function (s, a) {
    if ((s === void 0 && (s = {}), l)) throw l
    for (var f = !1, v = {}, m = 0; m < i.length; m++) {
      var g = i[m],
        S = n[g],
        w = s[g],
        d = S(w, a)
      if (typeof d == 'undefined') throw (a && a.type, new Error(ne(14)))
      ;(v[g] = d), (f = f || d !== w)
    }
    return (f = f || i.length !== Object.keys(s).length), f ? v : s
  }
}
function jo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return t.length === 0
    ? function (r) {
        return r
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments))
        }
      })
}
function Sh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(ne(15))
        },
        l = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments)
          }
        },
        u = t.map(function (s) {
          return s(l)
        })
      return (i = jo.apply(void 0, u)(o.dispatch)), xa(xa({}, o), {}, { dispatch: i })
    }
  }
}
function Xc(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState
    return function (l) {
      return function (u) {
        return typeof u == 'function' ? u(o, i, e) : l(u)
      }
    }
  }
  return t
}
var Yc = Xc()
Yc.withExtraArgument = Xc
var Oa = Yc,
  _h =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o
              }) ||
            function (r, o) {
              for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          )
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype =
          n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })()
globalThis && globalThis.__generator
var Lo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n]
      return e
    },
  Eh = Object.defineProperty,
  Na = Object.getOwnPropertySymbols,
  kh = Object.prototype.hasOwnProperty,
  Ch = Object.prototype.propertyIsEnumerable,
  Ta = function (e, t, n) {
    return t in e
      ? Eh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n)
  },
  Sr = function (e, t) {
    for (var n in t || (t = {})) kh.call(t, n) && Ta(e, n, t[n])
    if (Na)
      for (var r = 0, o = Na(t); r < o.length; r++) {
        var n = o[r]
        Ch.call(t, n) && Ta(e, n, t[n])
      }
    return e
  },
  xh =
    typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? jo : jo.apply(null, arguments)
        }
function Ph(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
var Oh = (function (e) {
  _h(t, e)
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
    var o = e.apply(this, n) || this
    return Object.setPrototypeOf(o, t.prototype), o
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t
      },
      enumerable: !1,
      configurable: !0
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      return e.prototype.concat.apply(this, n)
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Lo([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Lo([void 0], n.concat(this))))()
    }),
    t
  )
})(Array)
function Nh(e) {
  return typeof e == 'boolean'
}
function Th() {
  return function (t) {
    return Rh(t)
  }
}
function Rh(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    n = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck
  var r = new Oh()
  return n && (Nh(n) ? r.push(Oa) : r.push(Oa.withExtraArgument(n.extraArgument))), r
}
var jh = !0
function Lh(e) {
  var t = Th(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    l = i === void 0 ? t() : i,
    u = n.devTools,
    s = u === void 0 ? !0 : u,
    a = n.preloadedState,
    f = a === void 0 ? void 0 : a,
    v = n.enhancers,
    m = v === void 0 ? void 0 : v,
    g
  if (typeof o == 'function') g = o
  else if (Ph(o)) g = wh(o)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    )
  var S = l
  typeof S == 'function' && (S = S(t))
  var w = Sh.apply(void 0, S),
    d = jo
  s && (d = xh(Sr({ trace: !jh }, typeof s == 'object' && s)))
  var c = [w]
  Array.isArray(m) ? (c = Lo([w], m)) : typeof m == 'function' && (c = m(c))
  var p = d.apply(void 0, c)
  return Kc(g, f, p)
}
function Ra(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]
    if (t) {
      var i = t.apply(void 0, r)
      if (!i) throw new Error('prepareAction did not return an object')
      return Sr(
        Sr({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      )
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = function () {
      return '' + e
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e
    }),
    n
  )
}
function Gc(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, l) {
        var u = typeof i == 'string' ? i : i.type
        if (u in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          )
        return (t[u] = l), o
      },
      addMatcher: function (i, l) {
        return n.push({ matcher: i, reducer: l }), o
      },
      addDefaultCase: function (i) {
        return (r = i), o
      }
    }
  return e(o), [t, n, r]
}
function $h(e, t, n, r) {
  n === void 0 && (n = [])
  var o = typeof t == 'function' ? Gc(t) : [t, n, r],
    i = o[0],
    l = o[1],
    u = o[2],
    s = ka(e, function () {})
  return function (a, f) {
    a === void 0 && (a = s)
    var v = Lo(
      [i[f.type]],
      l
        .filter(function (m) {
          var g = m.matcher
          return g(f)
        })
        .map(function (m) {
          var g = m.reducer
          return g
        })
    )
    return (
      v.filter(function (m) {
        return !!m
      }).length === 0 && (v = [u]),
      v.reduce(function (m, g) {
        if (g)
          if (pt(m)) {
            var S = m,
              w = g(S, f)
            return typeof w == 'undefined' ? m : w
          } else {
            if (mt(m))
              return ka(m, function (d) {
                return g(d, f)
              })
            var w = g(m, f)
            if (typeof w == 'undefined') {
              if (m === null) return m
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              )
            }
            return w
          }
        return m
      }, a)
    )
  }
}
function Mh(e, t) {
  return e + '/' + t
}
function bc(e) {
  var t = e.name,
    n = e.initialState
  if (!t) throw new Error('`name` is a required option for createSlice')
  var r = e.reducers || {},
    o = typeof e.extraReducers == 'function' ? Gc(e.extraReducers) : [e.extraReducers],
    i = o[0],
    l = i === void 0 ? {} : i,
    u = o[1],
    s = u === void 0 ? [] : u,
    a = o[2],
    f = a === void 0 ? void 0 : a,
    v = Object.keys(r),
    m = {},
    g = {},
    S = {}
  v.forEach(function (c) {
    var p = r[c],
      h = Mh(t, c),
      y,
      x
    'reducer' in p ? ((y = p.reducer), (x = p.prepare)) : (y = p),
      (m[c] = y),
      (g[h] = y),
      (S[c] = x ? Ra(h, x) : Ra(h))
  })
  var w = Sr(Sr({}, l), g),
    d = $h(n, w, s, f)
  return { name: t, reducer: d, actions: S, caseReducers: m }
}
fh()
const Dh = { mode: 'initial', selectedCategories: [], questions: 5, startTime: 0 },
  Jc = bc({
    name: 'app',
    initialState: Dh,
    reducers: {
      addCategory: (e, t) => {
        e.selectedCategories.push(t.payload)
      },
      removeCategory: (e, t) => {
        const n = e.selectedCategories.indexOf(t.payload)
        e.selectedCategories.splice(n, 1)
      },
      setQuestions: (e, t) => {
        e.questions = Number(t.payload)
      },
      startGame: (e) => {
        ;(e.mode = 'game'), (e.startTime = performance.now())
      },
      endGame: (e) => {
        e.mode = 'score'
      },
      restart: (e) => {
        e.mode = 'initial'
      }
    }
  }),
  {
    addCategory: Ah,
    removeCategory: Ih,
    setQuestions: zh,
    startGame: Fh,
    endGame: Uh,
    restart: Bh
  } = Jc.actions
var Vh = Jc.reducer
const Wh = [
    'food_and_drink',
    'geography',
    'general_knowledge',
    'history',
    'arts_and_literature',
    'science',
    'society_and_culture',
    'music',
    'film_and_tv',
    'sport_and_leisure'
  ],
  Hh = Wh.map((e) => e.replaceAll('_', ' ')),
  Qh = '_base_slcfb_1'
var qh = { base: Qh }
function Qu({ children: e, className: t, ...n }) {
  return j('div', { className: `${qh.base} ${t}`, ...n, children: e })
}
const Kh = '_base_lonk2_1',
  Xh = '_primary_lonk2_21'
var Yh = { base: Kh, primary: Xh }
function nr({ children: e, className: t, primary: n, ...r }) {
  const o = `${t} ${En(Yh, ['base', n && 'primary'])}`
  return j('button', { className: o, ...r, children: e })
}
const Gh = [5, 10, 15, 20]
function bh() {
  const { selectedCategories: e, questions: t } = pn(({ app: f }) => f),
    n = ri(),
    r = Hh.map((f) => ({ name: f, selected: e.includes(f) })),
    o = Gh.map((f) => ({ number: f, selected: f === t })),
    i = (f) => {
      n(Ah(f.target.value))
    },
    l = (f) => {
      n(Ih(f.target.value))
    },
    u = (f) => {
      n(zh(f.target.value))
    },
    s = (f) => {
      f.preventDefault(), e.length && n(Fh())
    },
    a = En(Ft, ['play', (e.length === 0 || t < 5 || t > 20) && 'forbidden'])
  return j('form', {
    onSubmit: s,
    children: oe(Qu, {
      className: Ft.base,
      children: [
        j('div', { children: j('h1', { children: 'Welcome to Quiz Game' }) }),
        j('h3', { children: 'Questions' }),
        oe('div', {
          className: Ft.questions,
          children: [
            o.map(({ number: f, selected: v }) =>
              j(
                nr,
                {
                  className: v ? Ft.selected : '',
                  type: 'button',
                  value: f,
                  onClick: u,
                  children: f
                },
                f
              )
            ),
            j('input', {
              type: 'number',
              name: 'number',
              value: t,
              onChange: u,
              min: 5,
              max: 40
            })
          ]
        }),
        j('h3', { children: 'Categories' }),
        j('div', {
          className: Ft.categories,
          children: r.map(({ name: f, selected: v }) =>
            oe(
              nr,
              {
                className: v ? Ft.selected : '',
                type: 'button',
                value: f,
                onClick: v ? l : i,
                children: [f, ' ', v ? '\u2A2F' : '+']
              },
              f
            )
          )
        }),
        j('div', {
          className: a,
          children: j(nr, { primary: !0, children: 'Start Game' })
        })
      ]
    })
  })
}
var Jh = {}
const Zh = '_base_147cg_1',
  ev = '_appear_147cg_1',
  tv = '_question_147cg_7',
  nv = '_answers_147cg_13',
  rv = '_done_147cg_21',
  ov = '_disappear_147cg_1',
  iv = '_category_147cg_26',
  lv = '_number_147cg_31',
  uv = '_index_147cg_43',
  sv = '_slash_147cg_48',
  av = '_total_147cg_53'
var qe = {
  base: Zh,
  appear: ev,
  question: tv,
  answers: nv,
  done: rv,
  disappear: ov,
  category: iv,
  number: lv,
  index: uv,
  slash: sv,
  total: av
}
const fv = '_base_1d00i_1',
  cv = '_correct_1d00i_8',
  dv = '_wrong_1d00i_12'
var pv = { base: fv, correct: cv, wrong: dv }
function mv({ label: e, correct: t, selected: n, done: r, onClick: o }) {
  const i = En(pv, ['base', r && (t ? 'correct' : n && 'wrong')])
  return j(nr, { className: i, onClick: o, children: e })
}
const hv = { cards: [], currentCard: {}, lastCard: !1, results: [] },
  Zc = bc({
    name: 'game',
    initialState: hv,
    reducers: {
      setCards: (e, t) => {
        ;(e.cards = t.payload),
          (e.currentCard = e.cards[0]),
          (e.lastCard = !1),
          (e.results = [])
      },
      answerCard: (e, t) => {
        const n = {
          card: e.currentCard,
          answer: t.payload,
          correct: t.payload === e.currentCard.correctAnswer
        }
        if ((e.results.push(n), e.lastCard)) return
        const r = e.currentCard.index,
          o = e.cards[r + 1]
        ;(e.currentCard = o), r === e.cards.length - 2 && (e.lastCard = !0)
      }
    }
  }),
  { setCards: vv, answerCard: yv } = Zc.actions
var gv = Zc.reducer
function wv({ index: e, category: t, question: n, correctAnswer: r, answers: o = [] }) {
  const i = ri(),
    [l, u] = B.exports.useState(!1),
    [s, a] = B.exports.useState(),
    { lastCard: f } = pn(({ game: S }) => S),
    { questions: v } = pn(({ app: S }) => S),
    m = En(qe, ['base', l && 'done']),
    g = (S) => {
      l ||
        (u(!0),
        a(S),
        setTimeout(() => {
          i(yv(S)), u(!1), f && i(Uh())
        }, 2e3))
    }
  return oe(Qu, {
    className: m,
    children: [
      oe('div', {
        className: qe.number,
        children: [
          j('span', { className: qe.index, children: e + 1 }),
          j('span', { className: qe.slash, children: '/' }),
          j('span', { className: qe.total, children: v })
        ]
      }),
      j('div', { className: qe.category, children: t }),
      j('div', { className: qe.question, children: j('h3', { children: n }) }),
      j('div', {
        className: qe.answers,
        children: o.map((S, w) =>
          j(
            mv,
            {
              label: S,
              correct: r === S,
              selected: s === S,
              done: l,
              onClick: () => g(S)
            },
            w
          )
        )
      })
    ]
  })
}
var qu = { exports: {} },
  ed = function (t, n) {
    return function () {
      for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
        o[i] = arguments[i]
      return t.apply(n, o)
    }
  },
  Sv = ed,
  At = Object.prototype.toString
function Ku(e) {
  return At.call(e) === '[object Array]'
}
function Al(e) {
  return typeof e == 'undefined'
}
function _v(e) {
  return (
    e !== null &&
    !Al(e) &&
    e.constructor !== null &&
    !Al(e.constructor) &&
    typeof e.constructor.isBuffer == 'function' &&
    e.constructor.isBuffer(e)
  )
}
function Ev(e) {
  return At.call(e) === '[object ArrayBuffer]'
}
function kv(e) {
  return typeof FormData != 'undefined' && e instanceof FormData
}
function Cv(e) {
  var t
  return (
    typeof ArrayBuffer != 'undefined' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && e.buffer instanceof ArrayBuffer),
    t
  )
}
function xv(e) {
  return typeof e == 'string'
}
function Pv(e) {
  return typeof e == 'number'
}
function td(e) {
  return e !== null && typeof e == 'object'
}
function to(e) {
  if (At.call(e) !== '[object Object]') return !1
  var t = Object.getPrototypeOf(e)
  return t === null || t === Object.prototype
}
function Ov(e) {
  return At.call(e) === '[object Date]'
}
function Nv(e) {
  return At.call(e) === '[object File]'
}
function Tv(e) {
  return At.call(e) === '[object Blob]'
}
function nd(e) {
  return At.call(e) === '[object Function]'
}
function Rv(e) {
  return td(e) && nd(e.pipe)
}
function jv(e) {
  return typeof URLSearchParams != 'undefined' && e instanceof URLSearchParams
}
function Lv(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
}
function $v() {
  return typeof navigator != 'undefined' &&
    (navigator.product === 'ReactNative' ||
      navigator.product === 'NativeScript' ||
      navigator.product === 'NS')
    ? !1
    : typeof window != 'undefined' && typeof document != 'undefined'
}
function Xu(e, t) {
  if (!(e === null || typeof e == 'undefined'))
    if ((typeof e != 'object' && (e = [e]), Ku(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e)
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
}
function Il() {
  var e = {}
  function t(o, i) {
    to(e[i]) && to(o)
      ? (e[i] = Il(e[i], o))
      : to(o)
      ? (e[i] = Il({}, o))
      : Ku(o)
      ? (e[i] = o.slice())
      : (e[i] = o)
  }
  for (var n = 0, r = arguments.length; n < r; n++) Xu(arguments[n], t)
  return e
}
function Mv(e, t, n) {
  return (
    Xu(t, function (o, i) {
      n && typeof o == 'function' ? (e[i] = Sv(o, n)) : (e[i] = o)
    }),
    e
  )
}
function Dv(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}
var we = {
    isArray: Ku,
    isArrayBuffer: Ev,
    isBuffer: _v,
    isFormData: kv,
    isArrayBufferView: Cv,
    isString: xv,
    isNumber: Pv,
    isObject: td,
    isPlainObject: to,
    isUndefined: Al,
    isDate: Ov,
    isFile: Nv,
    isBlob: Tv,
    isFunction: nd,
    isStream: Rv,
    isURLSearchParams: jv,
    isStandardBrowserEnv: $v,
    forEach: Xu,
    merge: Il,
    extend: Mv,
    trim: Lv,
    stripBOM: Dv
  },
  Ut = we
function ja(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
var rd = function (t, n, r) {
    if (!n) return t
    var o
    if (r) o = r(n)
    else if (Ut.isURLSearchParams(n)) o = n.toString()
    else {
      var i = []
      Ut.forEach(n, function (s, a) {
        s === null ||
          typeof s == 'undefined' ||
          (Ut.isArray(s) ? (a = a + '[]') : (s = [s]),
          Ut.forEach(s, function (v) {
            Ut.isDate(v)
              ? (v = v.toISOString())
              : Ut.isObject(v) && (v = JSON.stringify(v)),
              i.push(ja(a) + '=' + ja(v))
          }))
      }),
        (o = i.join('&'))
    }
    if (o) {
      var l = t.indexOf('#')
      l !== -1 && (t = t.slice(0, l)), (t += (t.indexOf('?') === -1 ? '?' : '&') + o)
    }
    return t
  },
  Av = we
function oi() {
  this.handlers = []
}
oi.prototype.use = function (t, n, r) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }),
    this.handlers.length - 1
  )
}
oi.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null)
}
oi.prototype.forEach = function (t) {
  Av.forEach(this.handlers, function (r) {
    r !== null && t(r)
  })
}
var Iv = oi,
  zv = we,
  Fv = function (t, n) {
    zv.forEach(t, function (o, i) {
      i !== n && i.toUpperCase() === n.toUpperCase() && ((t[n] = o), delete t[i])
    })
  },
  od = function (t, n, r, o, i) {
    return (
      (t.config = n),
      r && (t.code = r),
      (t.request = o),
      (t.response = i),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        }
      }),
      t
    )
  },
  Uv = od,
  id = function (t, n, r, o, i) {
    var l = new Error(t)
    return Uv(l, n, r, o, i)
  },
  Bv = id,
  Vv = function (t, n, r) {
    var o = r.config.validateStatus
    !r.status || !o || o(r.status)
      ? t(r)
      : n(Bv('Request failed with status code ' + r.status, r.config, null, r.request, r))
  },
  Vr = we,
  Wv = Vr.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (n, r, o, i, l, u) {
            var s = []
            s.push(n + '=' + encodeURIComponent(r)),
              Vr.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
              Vr.isString(i) && s.push('path=' + i),
              Vr.isString(l) && s.push('domain=' + l),
              u === !0 && s.push('secure'),
              (document.cookie = s.join('; '))
          },
          read: function (n) {
            var r = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'))
            return r ? decodeURIComponent(r[3]) : null
          },
          remove: function (n) {
            this.write(n, '', Date.now() - 864e5)
          }
        }
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {}
        }
      })(),
  Hv = function (t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
  },
  Qv = function (t, n) {
    return n ? t.replace(/\/+$/, '') + '/' + n.replace(/^\/+/, '') : t
  },
  qv = Hv,
  Kv = Qv,
  Xv = function (t, n) {
    return t && !qv(n) ? Kv(t, n) : n
  },
  Bi = we,
  Yv = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ],
  Gv = function (t) {
    var n = {},
      r,
      o,
      i
    return (
      t &&
        Bi.forEach(
          t.split(`
`),
          function (u) {
            if (
              ((i = u.indexOf(':')),
              (r = Bi.trim(u.substr(0, i)).toLowerCase()),
              (o = Bi.trim(u.substr(i + 1))),
              r)
            ) {
              if (n[r] && Yv.indexOf(r) >= 0) return
              r === 'set-cookie'
                ? (n[r] = (n[r] ? n[r] : []).concat([o]))
                : (n[r] = n[r] ? n[r] + ', ' + o : o)
            }
          }
        ),
      n
    )
  },
  La = we,
  bv = La.isStandardBrowserEnv()
    ? (function () {
        var t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a'),
          r
        function o(i) {
          var l = i
          return (
            t && (n.setAttribute('href', l), (l = n.href)),
            n.setAttribute('href', l),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
            }
          )
        }
        return (
          (r = o(window.location.href)),
          function (l) {
            var u = La.isString(l) ? o(l) : l
            return u.protocol === r.protocol && u.host === r.host
          }
        )
      })()
    : (function () {
        return function () {
          return !0
        }
      })()
function Yu(e) {
  this.message = e
}
Yu.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '')
}
Yu.prototype.__CANCEL__ = !0
var ii = Yu,
  Wr = we,
  Jv = Vv,
  Zv = Wv,
  ey = rd,
  ty = Xv,
  ny = Gv,
  ry = bv,
  Vi = id,
  oy = ui,
  iy = ii,
  $a = function (t) {
    return new Promise(function (r, o) {
      var i = t.data,
        l = t.headers,
        u = t.responseType,
        s
      function a() {
        t.cancelToken && t.cancelToken.unsubscribe(s),
          t.signal && t.signal.removeEventListener('abort', s)
      }
      Wr.isFormData(i) && delete l['Content-Type']
      var f = new XMLHttpRequest()
      if (t.auth) {
        var v = t.auth.username || '',
          m = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : ''
        l.Authorization = 'Basic ' + btoa(v + ':' + m)
      }
      var g = ty(t.baseURL, t.url)
      f.open(t.method.toUpperCase(), ey(g, t.params, t.paramsSerializer), !0),
        (f.timeout = t.timeout)
      function S() {
        if (!!f) {
          var d = 'getAllResponseHeaders' in f ? ny(f.getAllResponseHeaders()) : null,
            c = !u || u === 'text' || u === 'json' ? f.responseText : f.response,
            p = {
              data: c,
              status: f.status,
              statusText: f.statusText,
              headers: d,
              config: t,
              request: f
            }
          Jv(
            function (y) {
              r(y), a()
            },
            function (y) {
              o(y), a()
            },
            p
          ),
            (f = null)
        }
      }
      if (
        ('onloadend' in f
          ? (f.onloadend = S)
          : (f.onreadystatechange = function () {
              !f ||
                f.readyState !== 4 ||
                (f.status === 0 &&
                  !(f.responseURL && f.responseURL.indexOf('file:') === 0)) ||
                setTimeout(S)
            }),
        (f.onabort = function () {
          !f || (o(Vi('Request aborted', t, 'ECONNABORTED', f)), (f = null))
        }),
        (f.onerror = function () {
          o(Vi('Network Error', t, null, f)), (f = null)
        }),
        (f.ontimeout = function () {
          var c = 'timeout of ' + t.timeout + 'ms exceeded',
            p = t.transitional || oy.transitional
          t.timeoutErrorMessage && (c = t.timeoutErrorMessage),
            o(Vi(c, t, p.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', f)),
            (f = null)
        }),
        Wr.isStandardBrowserEnv())
      ) {
        var w =
          (t.withCredentials || ry(g)) && t.xsrfCookieName
            ? Zv.read(t.xsrfCookieName)
            : void 0
        w && (l[t.xsrfHeaderName] = w)
      }
      'setRequestHeader' in f &&
        Wr.forEach(l, function (c, p) {
          typeof i == 'undefined' && p.toLowerCase() === 'content-type'
            ? delete l[p]
            : f.setRequestHeader(p, c)
        }),
        Wr.isUndefined(t.withCredentials) || (f.withCredentials = !!t.withCredentials),
        u && u !== 'json' && (f.responseType = t.responseType),
        typeof t.onDownloadProgress == 'function' &&
          f.addEventListener('progress', t.onDownloadProgress),
        typeof t.onUploadProgress == 'function' &&
          f.upload &&
          f.upload.addEventListener('progress', t.onUploadProgress),
        (t.cancelToken || t.signal) &&
          ((s = function (d) {
            !f || (o(!d || (d && d.type) ? new iy('canceled') : d), f.abort(), (f = null))
          }),
          t.cancelToken && t.cancelToken.subscribe(s),
          t.signal && (t.signal.aborted ? s() : t.signal.addEventListener('abort', s))),
        i || (i = null),
        f.send(i)
    })
  },
  b = we,
  Ma = Fv,
  ly = od,
  uy = { 'Content-Type': 'application/x-www-form-urlencoded' }
function Da(e, t) {
  !b.isUndefined(e) && b.isUndefined(e['Content-Type']) && (e['Content-Type'] = t)
}
function sy() {
  var e
  return (
    (typeof XMLHttpRequest != 'undefined' ||
      (typeof process != 'undefined' &&
        Object.prototype.toString.call(process) === '[object process]')) &&
      (e = $a),
    e
  )
}
function ay(e, t, n) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
var li = {
  transitional: { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  adapter: sy(),
  transformRequest: [
    function (t, n) {
      return (
        Ma(n, 'Accept'),
        Ma(n, 'Content-Type'),
        b.isFormData(t) ||
        b.isArrayBuffer(t) ||
        b.isBuffer(t) ||
        b.isStream(t) ||
        b.isFile(t) ||
        b.isBlob(t)
          ? t
          : b.isArrayBufferView(t)
          ? t.buffer
          : b.isURLSearchParams(t)
          ? (Da(n, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString())
          : b.isObject(t) || (n && n['Content-Type'] === 'application/json')
          ? (Da(n, 'application/json'), ay(t))
          : t
      )
    }
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || li.transitional,
        r = n && n.silentJSONParsing,
        o = n && n.forcedJSONParsing,
        i = !r && this.responseType === 'json'
      if (i || (o && b.isString(t) && t.length))
        try {
          return JSON.parse(t)
        } catch (l) {
          if (i) throw l.name === 'SyntaxError' ? ly(l, this, 'E_JSON_PARSE') : l
        }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } }
}
b.forEach(['delete', 'get', 'head'], function (t) {
  li.headers[t] = {}
})
b.forEach(['post', 'put', 'patch'], function (t) {
  li.headers[t] = b.merge(uy)
})
var ui = li,
  fy = we,
  cy = ui,
  dy = function (t, n, r) {
    var o = this || cy
    return (
      fy.forEach(r, function (l) {
        t = l.call(o, t, n)
      }),
      t
    )
  },
  ld = function (t) {
    return !!(t && t.__CANCEL__)
  },
  Aa = we,
  Wi = dy,
  py = ld,
  my = ui,
  hy = ii
function Hi(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new hy('canceled')
}
var vy = function (t) {
    Hi(t),
      (t.headers = t.headers || {}),
      (t.data = Wi.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Aa.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      Aa.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (o) {
          delete t.headers[o]
        }
      )
    var n = t.adapter || my.adapter
    return n(t).then(
      function (o) {
        return Hi(t), (o.data = Wi.call(t, o.data, o.headers, t.transformResponse)), o
      },
      function (o) {
        return (
          py(o) ||
            (Hi(t),
            o &&
              o.response &&
              (o.response.data = Wi.call(
                t,
                o.response.data,
                o.response.headers,
                t.transformResponse
              ))),
          Promise.reject(o)
        )
      }
    )
  },
  me = we,
  ud = function (t, n) {
    n = n || {}
    var r = {}
    function o(f, v) {
      return me.isPlainObject(f) && me.isPlainObject(v)
        ? me.merge(f, v)
        : me.isPlainObject(v)
        ? me.merge({}, v)
        : me.isArray(v)
        ? v.slice()
        : v
    }
    function i(f) {
      if (me.isUndefined(n[f])) {
        if (!me.isUndefined(t[f])) return o(void 0, t[f])
      } else return o(t[f], n[f])
    }
    function l(f) {
      if (!me.isUndefined(n[f])) return o(void 0, n[f])
    }
    function u(f) {
      if (me.isUndefined(n[f])) {
        if (!me.isUndefined(t[f])) return o(void 0, t[f])
      } else return o(void 0, n[f])
    }
    function s(f) {
      if (f in n) return o(t[f], n[f])
      if (f in t) return o(void 0, t[f])
    }
    var a = {
      url: l,
      method: l,
      data: l,
      baseURL: u,
      transformRequest: u,
      transformResponse: u,
      paramsSerializer: u,
      timeout: u,
      timeoutMessage: u,
      withCredentials: u,
      adapter: u,
      responseType: u,
      xsrfCookieName: u,
      xsrfHeaderName: u,
      onUploadProgress: u,
      onDownloadProgress: u,
      decompress: u,
      maxContentLength: u,
      maxBodyLength: u,
      transport: u,
      httpAgent: u,
      httpsAgent: u,
      cancelToken: u,
      socketPath: u,
      responseEncoding: u,
      validateStatus: s
    }
    return (
      me.forEach(Object.keys(t).concat(Object.keys(n)), function (v) {
        var m = a[v] || i,
          g = m(v)
        ;(me.isUndefined(g) && m !== s) || (r[v] = g)
      }),
      r
    )
  },
  sd = { version: '0.22.0' },
  yy = sd.version,
  Gu = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
  Gu[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
var Ia = {}
Gu.transitional = function (t, n, r) {
  function o(i, l) {
    return '[Axios v' + yy + "] Transitional option '" + i + "'" + l + (r ? '. ' + r : '')
  }
  return function (i, l, u) {
    if (t === !1) throw new Error(o(l, ' has been removed' + (n ? ' in ' + n : '')))
    return (
      n &&
        !Ia[l] &&
        ((Ia[l] = !0),
        console.warn(
          o(
            l,
            ' has been deprecated since v' + n + ' and will be removed in the near future'
          )
        )),
      t ? t(i, l, u) : !0
    )
  }
}
function gy(e, t, n) {
  if (typeof e != 'object') throw new TypeError('options must be an object')
  for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
    var i = r[o],
      l = t[i]
    if (l) {
      var u = e[i],
        s = u === void 0 || l(u, i, e)
      if (s !== !0) throw new TypeError('option ' + i + ' must be ' + s)
      continue
    }
    if (n !== !0) throw Error('Unknown option ' + i)
  }
}
var wy = { assertOptions: gy, validators: Gu },
  ad = we,
  Sy = rd,
  za = Iv,
  Fa = vy,
  si = ud,
  fd = wy,
  Bt = fd.validators
function Nr(e) {
  ;(this.defaults = e), (this.interceptors = { request: new za(), response: new za() })
}
Nr.prototype.request = function (t) {
  typeof t == 'string'
    ? ((t = arguments[1] || {}), (t.url = arguments[0]))
    : (t = t || {}),
    (t = si(this.defaults, t)),
    t.method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = 'get')
  var n = t.transitional
  n !== void 0 &&
    fd.assertOptions(
      n,
      {
        silentJSONParsing: Bt.transitional(Bt.boolean),
        forcedJSONParsing: Bt.transitional(Bt.boolean),
        clarifyTimeoutError: Bt.transitional(Bt.boolean)
      },
      !1
    )
  var r = [],
    o = !0
  this.interceptors.request.forEach(function (m) {
    ;(typeof m.runWhen == 'function' && m.runWhen(t) === !1) ||
      ((o = o && m.synchronous), r.unshift(m.fulfilled, m.rejected))
  })
  var i = []
  this.interceptors.response.forEach(function (m) {
    i.push(m.fulfilled, m.rejected)
  })
  var l
  if (!o) {
    var u = [Fa, void 0]
    for (
      Array.prototype.unshift.apply(u, r), u = u.concat(i), l = Promise.resolve(t);
      u.length;

    )
      l = l.then(u.shift(), u.shift())
    return l
  }
  for (var s = t; r.length; ) {
    var a = r.shift(),
      f = r.shift()
    try {
      s = a(s)
    } catch (v) {
      f(v)
      break
    }
  }
  try {
    l = Fa(s)
  } catch (v) {
    return Promise.reject(v)
  }
  for (; i.length; ) l = l.then(i.shift(), i.shift())
  return l
}
Nr.prototype.getUri = function (t) {
  return (
    (t = si(this.defaults, t)), Sy(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
  )
}
ad.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Nr.prototype[t] = function (n, r) {
    return this.request(si(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
ad.forEach(['post', 'put', 'patch'], function (t) {
  Nr.prototype[t] = function (n, r, o) {
    return this.request(si(o || {}, { method: t, url: n, data: r }))
  }
})
var _y = Nr,
  Ey = ii
function mn(e) {
  if (typeof e != 'function') throw new TypeError('executor must be a function.')
  var t
  this.promise = new Promise(function (o) {
    t = o
  })
  var n = this
  this.promise.then(function (r) {
    if (!!n._listeners) {
      var o,
        i = n._listeners.length
      for (o = 0; o < i; o++) n._listeners[o](r)
      n._listeners = null
    }
  }),
    (this.promise.then = function (r) {
      var o,
        i = new Promise(function (l) {
          n.subscribe(l), (o = l)
        }).then(r)
      return (
        (i.cancel = function () {
          n.unsubscribe(o)
        }),
        i
      )
    }),
    e(function (o) {
      n.reason || ((n.reason = new Ey(o)), t(n.reason))
    })
}
mn.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason
}
mn.prototype.subscribe = function (t) {
  if (this.reason) {
    t(this.reason)
    return
  }
  this._listeners ? this._listeners.push(t) : (this._listeners = [t])
}
mn.prototype.unsubscribe = function (t) {
  if (!!this._listeners) {
    var n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
}
mn.source = function () {
  var t,
    n = new mn(function (o) {
      t = o
    })
  return { token: n, cancel: t }
}
var ky = mn,
  Cy = function (t) {
    return function (r) {
      return t.apply(null, r)
    }
  },
  xy = function (t) {
    return typeof t == 'object' && t.isAxiosError === !0
  },
  Ua = we,
  Py = ed,
  no = _y,
  Oy = ud,
  Ny = ui
function cd(e) {
  var t = new no(e),
    n = Py(no.prototype.request, t)
  return (
    Ua.extend(n, no.prototype, t),
    Ua.extend(n, t),
    (n.create = function (o) {
      return cd(Oy(e, o))
    }),
    n
  )
}
var ze = cd(Ny)
ze.Axios = no
ze.Cancel = ii
ze.CancelToken = ky
ze.isCancel = ld
ze.VERSION = sd.version
ze.all = function (t) {
  return Promise.all(t)
}
ze.spread = Cy
ze.isAxiosError = xy
qu.exports = ze
qu.exports.default = ze
var Ty = qu.exports
function Ry(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1)),
      r = e[t]
    ;(e[t] = e[n]), (e[n] = r)
  }
}
function jy() {
  const [e, t] = B.exports.useState(!1),
    {
      app: { selectedCategories: n, questions: r },
      game: { currentCard: o }
    } = pn((l) => l),
    i = ri()
  return (
    B.exports.useEffect(() => {
      const l = `https://the-trivia-api.com/v2/questions?categories=${n
        .join(',')
        .replaceAll(' ', '_')
        .toLowerCase()}&limit=${r}`
      Ty.get(l)
        .then(({ data: u }) => {
          const s = u.map(
            ({ question: a, correctAnswer: f, incorrectAnswers: v, category: m }, g) => {
              v.length > 3 && v.splice(3)
              const S = [f, ...v]
              return (
                Ry(S),
                {
                  index: g,
                  question: a.text,
                  answers: S,
                  correctAnswer: f,
                  category: m.replaceAll('_', ' ')
                }
              )
            }
          )
          i(vv(s)), t(!0)
        })
        .catch(console.log)
    }, []),
    { ready: e, currentCard: o }
  )
}
function Ly() {
  const { ready: e, currentCard: t } = jy()
  return j('div', { className: Jh.base, children: e && j(wv, { ...t }) })
}
const $y = '_base_fz0d2_1',
  My = '_appear_fz0d2_1',
  Dy = '_results_fz0d2_16',
  Ay = '_restart_fz0d2_31',
  Iy = '_result_fz0d2_16',
  zy = '_answer_fz0d2_35',
  Fy = '_correct_fz0d2_39'
var rr = {
  base: $y,
  appear: My,
  results: Dy,
  restart: Ay,
  result: Iy,
  answer: zy,
  correct: Fy
}
function Uy() {
  const e = ri(),
    {
      app: { questions: t, startTime: n },
      game: { results: r }
    } = pn((s) => s),
    o = r.filter(({ correct: s }) => s).length,
    i = (performance.now() - n) / 1e3
  let l = (o / r.length) * (r.length * 10 - i)
  l = l >= 0 ? l : o / r.length
  const u = () => {
    e(Bh())
  }
  return oe(Qu, {
    className: rr.base,
    children: [
      oe('h1', { children: ['Score: ', l.toFixed(1)] }),
      oe('h3', { children: ['Correct answers: ', o, '/', t] }),
      oe('h3', { children: ['Time elapsed: ', i.toFixed(1), 's'] }),
      j('div', {
        className: rr.results,
        children: r.map(({ correct: s, answer: a, card: f }, v) =>
          j(By, { number: v + 1, correct: s, answer: a, ...f }, v)
        )
      }),
      j('div', {
        className: rr.restart,
        children: j(nr, { primary: !0, onClick: u, children: 'Restart' })
      })
    ]
  })
}
function By({ question: e, number: t, answer: n, correctAnswer: r, correct: o }) {
  const i = En(rr, ['result', o && 'correct'])
  return oe('div', {
    className: i,
    children: [
      oe('div', { children: [oe('b', { children: ['Question ', t, ':'] }), ' ', e] }),
      oe('div', {
        className: rr.answer,
        children: [j('b', { children: 'Your answer:' }), ' ', j('span', { children: n })]
      }),
      !o && oe('div', { children: [j('b', { children: 'Correct answer:' }), ' ', r] })
    ]
  })
}
const Vy = '_base_rox5q_1'
var Wy = { base: Vy }
function Hy() {
  return oe('div', {
    className: Wy.base,
    children: [
      j('a', {
        href: 'https://github.com/pabloc54/quiz',
        target: '_blank',
        rel: 'noreferrer',
        children: 'Source'
      }),
      j('a', {
        href: 'https://the-trivia-api.com',
        target: '_blank',
        rel: 'noreferrer',
        children: 'The Trivia API'
      })
    ]
  })
}
const Qy = { initial: j(bh, {}), game: j(Ly, {}), score: j(Uy, {}) }
function qy() {
  const { mode: e, currentCard: t } = pn(
      ({ app: { mode: r }, game: { currentCard: o } }) => ({ mode: r, currentCard: o })
    ),
    n = En(bm, ['base', t.category && t.category.replace(/\s/g, '').toLowerCase()])
  return oe('div', { className: n, children: [Qy[e], j(Hy, {})] })
}
const Ky = { reducer: { app: Vh, game: gv } },
  Xy = Lh(Ky)
ym.render(
  j(tf.StrictMode, { children: j(Pm, { store: Xy, children: j(qy, {}) }) }),
  document.querySelector('main')
)
