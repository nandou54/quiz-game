function tp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i &&
            Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
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
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
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
})()
function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var qa = { exports: {} },
  Xo = {},
  Ga = { exports: {} },
  L = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for('react.element'),
  rp = Symbol.for('react.portal'),
  op = Symbol.for('react.fragment'),
  ip = Symbol.for('react.strict_mode'),
  lp = Symbol.for('react.profiler'),
  up = Symbol.for('react.provider'),
  sp = Symbol.for('react.context'),
  ap = Symbol.for('react.forward_ref'),
  cp = Symbol.for('react.suspense'),
  fp = Symbol.for('react.memo'),
  dp = Symbol.for('react.lazy'),
  ps = Symbol.iterator
function pp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ps && e[ps]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Xa = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Ya = Object.assign,
  Ja = {}
function Tn(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Ja), (this.updater = n || Xa)
}
Tn.prototype.isReactComponent = {}
Tn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Tn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Za() {}
Za.prototype = Tn.prototype
function lu(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Ja), (this.updater = n || Xa)
}
var uu = (lu.prototype = new Za())
uu.constructor = lu
Ya(uu, Tn.prototype)
uu.isPureReactComponent = !0
var hs = Array.isArray,
  ba = Object.prototype.hasOwnProperty,
  su = { current: null },
  ec = { key: !0, ref: !0, __self: !0, __source: !0 }
function tc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      ba.call(t, r) && !ec.hasOwnProperty(r) && (o[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) o.children = n
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2]
    o.children = s
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r])
  return { $$typeof: Tr, type: e, key: i, ref: l, props: o, _owner: su.current }
}
function hp(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function au(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tr
}
function mp(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var ms = /\/+/g
function Ci(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? mp('' + e.key)
    : t.toString(36)
}
function oo(e, t, n, r, o) {
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
          case Tr:
          case rp:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Ci(l, 0) : r),
      hs(o)
        ? ((n = ''),
          e != null && (n = e.replace(ms, '$&/') + '/'),
          oo(o, t, n, '', function (a) {
            return a
          }))
        : o != null &&
          (au(o) &&
            (o = hp(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ms, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), hs(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var s = r + Ci(i, u)
      l += oo(i, t, n, s, o)
    }
  else if (((s = pp(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Ci(i, u++)), (l += oo(i, t, n, s, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return l
}
function Ur(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    oo(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function yp(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var fe = { current: null },
  io = { transition: null },
  vp = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: io, ReactCurrentOwner: su }
L.Children = {
  map: Ur,
  forEach: function (e, t, n) {
    Ur(
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
      Ur(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Ur(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!au(e))
      throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
L.Component = Tn
L.Fragment = op
L.Profiler = lp
L.PureComponent = lu
L.StrictMode = ip
L.Suspense = cp
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Ya({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = su.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (s in t)
      ba.call(t, s) &&
        !ec.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2]
    r.children = u
  }
  return { $$typeof: Tr, type: e.type, key: o, ref: i, props: r, _owner: l }
}
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: sp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: up, _context: e }),
    (e.Consumer = e)
  )
}
L.createElement = tc
L.createFactory = function (e) {
  var t = tc.bind(null, e)
  return (t.type = e), t
}
L.createRef = function () {
  return { current: null }
}
L.forwardRef = function (e) {
  return { $$typeof: ap, render: e }
}
L.isValidElement = au
L.lazy = function (e) {
  return { $$typeof: dp, _payload: { _status: -1, _result: e }, _init: yp }
}
L.memo = function (e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t }
}
L.startTransition = function (e) {
  var t = io.transition
  io.transition = {}
  try {
    e()
  } finally {
    io.transition = t
  }
}
L.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
L.useCallback = function (e, t) {
  return fe.current.useCallback(e, t)
}
L.useContext = function (e) {
  return fe.current.useContext(e)
}
L.useDebugValue = function () {}
L.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e)
}
L.useEffect = function (e, t) {
  return fe.current.useEffect(e, t)
}
L.useId = function () {
  return fe.current.useId()
}
L.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n)
}
L.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t)
}
L.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t)
}
L.useMemo = function (e, t) {
  return fe.current.useMemo(e, t)
}
L.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n)
}
L.useRef = function (e) {
  return fe.current.useRef(e)
}
L.useState = function (e) {
  return fe.current.useState(e)
}
L.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n)
}
L.useTransition = function () {
  return fe.current.useTransition()
}
L.version = '18.2.0'
Ga.exports = L
var rt = Ga.exports
const nc = np(rt),
  ys = tp({ __proto__: null, default: nc }, [rt])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp = rt,
  wp = Symbol.for('react.element'),
  Sp = Symbol.for('react.fragment'),
  _p = Object.prototype.hasOwnProperty,
  Ep = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kp = { key: !0, ref: !0, __self: !0, __source: !0 }
function rc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) _p.call(t, r) && !kp.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: wp, type: e, key: i, ref: l, props: o, _owner: Ep.current }
}
Xo.Fragment = Sp
Xo.jsx = rc
Xo.jsxs = rc
qa.exports = Xo
var R = qa.exports,
  oc = { exports: {} },
  ic = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or = rt
function Cp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var xp = typeof Object.is == 'function' ? Object.is : Cp,
  Np = Or.useSyncExternalStore,
  Pp = Or.useRef,
  Rp = Or.useEffect,
  Tp = Or.useMemo,
  Op = Or.useDebugValue
ic.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = Pp(null)
  if (i.current === null) {
    var l = { hasValue: !1, value: null }
    i.current = l
  } else l = i.current
  i = Tp(
    function () {
      function s(g) {
        if (!a) {
          if (((a = !0), (c = g), (g = r(g)), o !== void 0 && l.hasValue)) {
            var y = l.value
            if (o(y, g)) return (f = y)
          }
          return (f = g)
        }
        if (((y = f), xp(c, g))) return y
        var v = r(g)
        return o !== void 0 && o(y, v) ? y : ((c = g), (f = v))
      }
      var a = !1,
        c,
        f,
        m = n === void 0 ? null : n
      return [
        function () {
          return s(t())
        },
        m === null
          ? void 0
          : function () {
              return s(m())
            }
      ]
    },
    [t, n, r, o]
  )
  var u = Np(e, i[0], i[1])
  return (
    Rp(
      function () {
        ;(l.hasValue = !0), (l.value = u)
      },
      [u]
    ),
    Op(u),
    u
  )
}
oc.exports = ic
var zp = oc.exports,
  lc = { exports: {} },
  xe = {},
  uc = { exports: {} },
  sc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(x, O) {
    var z = x.length
    x.push(O)
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        Z = x[K]
      if (0 < o(Z, O)) (x[K] = O), (x[z] = Z), (z = K)
      else break e
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0]
  }
  function r(x) {
    if (x.length === 0) return null
    var O = x[0],
      z = x.pop()
    if (z !== O) {
      x[0] = z
      e: for (var K = 0, Z = x.length, Mr = Z >>> 1; K < Mr; ) {
        var Dt = 2 * (K + 1) - 1,
          ki = x[Dt],
          At = Dt + 1,
          Ir = x[At]
        if (0 > o(ki, z))
          At < Z && 0 > o(Ir, ki)
            ? ((x[K] = Ir), (x[At] = z), (K = At))
            : ((x[K] = ki), (x[Dt] = z), (K = Dt))
        else if (At < Z && 0 > o(Ir, z)) (x[K] = Ir), (x[At] = z), (K = At)
        else break e
      }
    }
    return O
  }
  function o(x, O) {
    var z = x.sortIndex - O.sortIndex
    return z !== 0 ? z : x.id - O.id
  }
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
  var s = [],
    a = [],
    c = 1,
    f = null,
    m = 3,
    g = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function h(x) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a)
      else if (O.startTime <= x) r(a), (O.sortIndex = O.expirationTime), t(s, O)
      else break
      O = n(a)
    }
  }
  function S(x) {
    if (((v = !1), h(x), !y))
      if (n(s) !== null) (y = !0), _i(k)
      else {
        var O = n(a)
        O !== null && Ei(S, O.startTime - x)
      }
  }
  function k(x, O) {
    ;(y = !1), v && ((v = !1), p(T), (T = -1)), (g = !0)
    var z = m
    try {
      for (h(O), f = n(s); f !== null && (!(f.expirationTime > O) || (x && !De())); ) {
        var K = f.callback
        if (typeof K == 'function') {
          ;(f.callback = null), (m = f.priorityLevel)
          var Z = K(f.expirationTime <= O)
          ;(O = e.unstable_now()),
            typeof Z == 'function' ? (f.callback = Z) : f === n(s) && r(s),
            h(O)
        } else r(s)
        f = n(s)
      }
      if (f !== null) var Mr = !0
      else {
        var Dt = n(a)
        Dt !== null && Ei(S, Dt.startTime - O), (Mr = !1)
      }
      return Mr
    } finally {
      ;(f = null), (m = z), (g = !1)
    }
  }
  var N = !1,
    P = null,
    T = -1,
    Q = 5,
    j = -1
  function De() {
    return !(e.unstable_now() - j < Q)
  }
  function Dn() {
    if (P !== null) {
      var x = e.unstable_now()
      j = x
      var O = !0
      try {
        O = P(!0, x)
      } finally {
        O ? An() : ((N = !1), (P = null))
      }
    } else N = !1
  }
  var An
  if (typeof d == 'function')
    An = function () {
      d(Dn)
    }
  else if (typeof MessageChannel < 'u') {
    var ds = new MessageChannel(),
      ep = ds.port2
    ;(ds.port1.onmessage = Dn),
      (An = function () {
        ep.postMessage(null)
      })
  } else
    An = function () {
      E(Dn, 0)
    }
  function _i(x) {
    ;(P = x), N || ((N = !0), An())
  }
  function Ei(x, O) {
    T = E(function () {
      x(e.unstable_now())
    }, O)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), _i(k))
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (Q = 0 < x ? Math.floor(1e3 / x) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (x) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3
          break
        default:
          O = m
      }
      var z = m
      m = O
      try {
        return x()
      } finally {
        m = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, O) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          x = 3
      }
      var z = m
      m = x
      try {
        return O()
      } finally {
        m = z
      }
    }),
    (e.unstable_scheduleCallback = function (x, O, z) {
      var K = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? K + z : K))
          : (z = K),
        x)
      ) {
        case 1:
          var Z = -1
          break
        case 2:
          Z = 250
          break
        case 5:
          Z = 1073741823
          break
        case 4:
          Z = 1e4
          break
        default:
          Z = 5e3
      }
      return (
        (Z = z + Z),
        (x = {
          id: c++,
          callback: O,
          priorityLevel: x,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1
        }),
        z > K
          ? ((x.sortIndex = z),
            t(a, x),
            n(s) === null &&
              x === n(a) &&
              (v ? (p(T), (T = -1)) : (v = !0), Ei(S, z - K)))
          : ((x.sortIndex = Z), t(s, x), y || g || ((y = !0), _i(k))),
        x
      )
    }),
    (e.unstable_shouldYield = De),
    (e.unstable_wrapCallback = function (x) {
      var O = m
      return function () {
        var z = m
        m = O
        try {
          return x.apply(this, arguments)
        } finally {
          m = z
        }
      }
    })
})(sc)
uc.exports = sc
var Lp = uc.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ac = rt,
  Ee = Lp
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
var cc = new Set(),
  ur = {}
function Zt(e, t) {
  Sn(e, t), Sn(e + 'Capture', t)
}
function Sn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) cc.add(t[e])
}
var ot = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  rl = Object.prototype.hasOwnProperty,
  jp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vs = {},
  gs = {}
function Dp(e) {
  return rl.call(gs, e)
    ? !0
    : rl.call(vs, e)
      ? !1
      : jp.test(e)
        ? (gs[e] = !0)
        : ((vs[e] = !0), !1)
}
function Ap(e, t, n, r) {
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
function Fp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ap(e, t, n, r)) return !0
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
function de(e, t, n, r, o, i, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l)
}
var oe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    oe[e] = new de(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  oe[t] = new de(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  oe[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    oe[e] = new de(e, 2, !1, e, null, !1, !1)
  }
)
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    oe[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  oe[e] = new de(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  oe[e] = new de(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  oe[e] = new de(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  oe[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var cu = /[\-:]([a-z])/g
function fu(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(cu, fu)
    oe[t] = new de(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(cu, fu)
    oe[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(cu, fu)
  oe[t] = new de(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  oe[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
oe.xlinkHref = new de(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  oe[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function du(e, t, n, r) {
  var o = oe.hasOwnProperty(t) ? oe[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Fp(t, n, o, r) && (n = null),
    r || o === null
      ? Dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var at = ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $r = Symbol.for('react.element'),
  tn = Symbol.for('react.portal'),
  nn = Symbol.for('react.fragment'),
  pu = Symbol.for('react.strict_mode'),
  ol = Symbol.for('react.profiler'),
  fc = Symbol.for('react.provider'),
  dc = Symbol.for('react.context'),
  hu = Symbol.for('react.forward_ref'),
  il = Symbol.for('react.suspense'),
  ll = Symbol.for('react.suspense_list'),
  mu = Symbol.for('react.memo'),
  pt = Symbol.for('react.lazy'),
  pc = Symbol.for('react.offscreen'),
  ws = Symbol.iterator
function Fn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ws && e[ws]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var V = Object.assign,
  xi
function Qn(e) {
  if (xi === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      xi = (t && t[1]) || ''
    }
  return (
    `
` +
    xi +
    e
  )
}
var Ni = !1
function Pi(e, t) {
  if (!e || Ni) return ''
  Ni = !0
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
        } catch (a) {
          var r = a
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (a) {
          r = a
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (a) {
        r = a
      }
      e()
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
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
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= l && 0 <= u)
          break
        }
    }
  } finally {
    ;(Ni = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Qn(e) : ''
}
function Mp(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type)
    case 16:
      return Qn('Lazy')
    case 13:
      return Qn('Suspense')
    case 19:
      return Qn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Pi(e.type, !1)), e
    case 11:
      return (e = Pi(e.type.render, !1)), e
    case 1:
      return (e = Pi(e.type, !0)), e
    default:
      return ''
  }
}
function ul(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case nn:
      return 'Fragment'
    case tn:
      return 'Portal'
    case ol:
      return 'Profiler'
    case pu:
      return 'StrictMode'
    case il:
      return 'Suspense'
    case ll:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case dc:
        return (e.displayName || 'Context') + '.Consumer'
      case fc:
        return (e._context.displayName || 'Context') + '.Provider'
      case hu:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case mu:
        return (t = e.displayName || null), t !== null ? t : ul(e.type) || 'Memo'
      case pt:
        ;(t = e._payload), (e = e._init)
        try {
          return ul(e(t))
        } catch {}
    }
  return null
}
function Ip(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ul(t)
    case 8:
      return t === pu ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Pt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function hc(e) {
  var t = e.type
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  )
}
function Up(e) {
  var t = hc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
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
function Br(e) {
  e._valueTracker || (e._valueTracker = Up(e))
}
function mc(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = hc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function So(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function sl(e, t) {
  var n = t.checked
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Ss(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function yc(e, t) {
  ;(t = t.checked), t != null && du(e, 'checked', t, !1)
}
function al(e, t) {
  yc(e, t)
  var n = Pt(t.value),
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
    ? cl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && cl(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function _s(e, t, n) {
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
function cl(e, t, n) {
  ;(t !== 'number' || So(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Kn = Array.isArray
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Pt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function fl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91))
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Es(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92))
      if (Kn(n)) {
        if (1 < n.length) throw Error(_(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Pt(n) }
}
function vc(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function ks(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function gc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function dl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? gc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Hr,
  wc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Hr = Hr || document.createElement('div'),
          Hr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function sr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Yn = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  $p = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Yn).forEach(function (e) {
  $p.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e])
  })
})
function Sc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
      ? ('' + t).trim()
      : t + 'px'
}
function _c(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Sc(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var Bp = V(
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
function pl(e, t) {
  if (t) {
    if (Bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62))
  }
}
function hl(e, t) {
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
var ml = null
function yu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var yl = null,
  mn = null,
  yn = null
function Cs(e) {
  if ((e = jr(e))) {
    if (typeof yl != 'function') throw Error(_(280))
    var t = e.stateNode
    t && ((t = ei(t)), yl(e.stateNode, e.type, t))
  }
}
function Ec(e) {
  mn ? (yn ? yn.push(e) : (yn = [e])) : (mn = e)
}
function kc() {
  if (mn) {
    var e = mn,
      t = yn
    if (((yn = mn = null), Cs(e), t)) for (e = 0; e < t.length; e++) Cs(t[e])
  }
}
function Cc(e, t) {
  return e(t)
}
function xc() {}
var Ri = !1
function Nc(e, t, n) {
  if (Ri) return e(t, n)
  Ri = !0
  try {
    return Cc(e, t, n)
  } finally {
    ;(Ri = !1), (mn !== null || yn !== null) && (xc(), kc())
  }
}
function ar(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ei(n)
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
var vl = !1
if (ot)
  try {
    var Mn = {}
    Object.defineProperty(Mn, 'passive', {
      get: function () {
        vl = !0
      }
    }),
      window.addEventListener('test', Mn, Mn),
      window.removeEventListener('test', Mn, Mn)
  } catch {
    vl = !1
  }
function Hp(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (c) {
    this.onError(c)
  }
}
var Jn = !1,
  _o = null,
  Eo = !1,
  gl = null,
  Vp = {
    onError: function (e) {
      ;(Jn = !0), (_o = e)
    }
  }
function Wp(e, t, n, r, o, i, l, u, s) {
  ;(Jn = !1), (_o = null), Hp.apply(Vp, arguments)
}
function Qp(e, t, n, r, o, i, l, u, s) {
  if ((Wp.apply(this, arguments), Jn)) {
    if (Jn) {
      var a = _o
      ;(Jn = !1), (_o = null)
    } else throw Error(_(198))
    Eo || ((Eo = !0), (gl = a))
  }
}
function bt(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated
  }
  return null
}
function xs(e) {
  if (bt(e) !== e) throw Error(_(188))
}
function Kp(e) {
  var t = e.alternate
  if (!t) {
    if (((t = bt(e)), t === null)) throw Error(_(188))
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
        if (i === n) return xs(o), e
        if (i === r) return xs(o), t
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
function Rc(e) {
  return (e = Kp(e)), e !== null ? Tc(e) : null
}
function Tc(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Tc(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Oc = Ee.unstable_scheduleCallback,
  Ns = Ee.unstable_cancelCallback,
  qp = Ee.unstable_shouldYield,
  Gp = Ee.unstable_requestPaint,
  q = Ee.unstable_now,
  Xp = Ee.unstable_getCurrentPriorityLevel,
  vu = Ee.unstable_ImmediatePriority,
  zc = Ee.unstable_UserBlockingPriority,
  ko = Ee.unstable_NormalPriority,
  Yp = Ee.unstable_LowPriority,
  Lc = Ee.unstable_IdlePriority,
  Yo = null,
  Ge = null
function Jp(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == 'function')
    try {
      Ge.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : eh,
  Zp = Math.log,
  bp = Math.LN2
function eh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zp(e) / bp) | 0)) | 0
}
var Vr = 64,
  Wr = 4194304
function qn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Co(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var u = l & ~o
    u !== 0 ? (r = qn(u)) : ((i &= l), i !== 0 && (r = qn(i)))
  } else (l = n & ~o), l !== 0 ? (r = qn(l)) : i !== 0 && (r = qn(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $e(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function th(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function nh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - $e(i),
      u = 1 << l,
      s = o[l]
    s === -1 ? (!(u & n) || u & r) && (o[l] = th(u, t)) : s <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function wl(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function jc() {
  var e = Vr
  return (Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e
}
function Ti(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function zr(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n)
}
function rh(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $e(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function gu(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var F = 0
function Dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Ac,
  wu,
  Fc,
  Mc,
  Ic,
  Sl = !1,
  Qr = [],
  wt = null,
  St = null,
  _t = null,
  cr = new Map(),
  fr = new Map(),
  mt = [],
  oh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Ps(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      wt = null
      break
    case 'dragenter':
    case 'dragleave':
      St = null
      break
    case 'mouseover':
    case 'mouseout':
      _t = null
      break
    case 'pointerover':
    case 'pointerout':
      cr.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      fr.delete(t.pointerId)
  }
}
function In(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
      }),
      t !== null && ((t = jr(t)), t !== null && wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function ih(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (wt = In(wt, e, t, n, r, o)), !0
    case 'dragenter':
      return (St = In(St, e, t, n, r, o)), !0
    case 'mouseover':
      return (_t = In(_t, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return cr.set(i, In(cr.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), fr.set(i, In(fr.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}
function Uc(e) {
  var t = $t(e.target)
  if (t !== null) {
    var n = bt(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pc(n)), t !== null)) {
          ;(e.blockedOn = t),
            Ic(e.priority, function () {
              Fc(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function lo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(ml = r), n.target.dispatchEvent(r), (ml = null)
    } else return (t = jr(n)), t !== null && wu(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Rs(e, t, n) {
  lo(e) && n.delete(t)
}
function lh() {
  ;(Sl = !1),
    wt !== null && lo(wt) && (wt = null),
    St !== null && lo(St) && (St = null),
    _t !== null && lo(_t) && (_t = null),
    cr.forEach(Rs),
    fr.forEach(Rs)
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sl || ((Sl = !0), Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, lh)))
}
function dr(e) {
  function t(o) {
    return Un(o, e)
  }
  if (0 < Qr.length) {
    Un(Qr[0], e)
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    wt !== null && Un(wt, e),
      St !== null && Un(St, e),
      _t !== null && Un(_t, e),
      cr.forEach(t),
      fr.forEach(t),
      n = 0;
    n < mt.length;
    n++
  )
    (r = mt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < mt.length && ((n = mt[0]), n.blockedOn === null); )
    Uc(n), n.blockedOn === null && mt.shift()
}
var vn = at.ReactCurrentBatchConfig,
  xo = !0
function uh(e, t, n, r) {
  var o = F,
    i = vn.transition
  vn.transition = null
  try {
    ;(F = 1), Su(e, t, n, r)
  } finally {
    ;(F = o), (vn.transition = i)
  }
}
function sh(e, t, n, r) {
  var o = F,
    i = vn.transition
  vn.transition = null
  try {
    ;(F = 4), Su(e, t, n, r)
  } finally {
    ;(F = o), (vn.transition = i)
  }
}
function Su(e, t, n, r) {
  if (xo) {
    var o = _l(e, t, n, r)
    if (o === null) Ui(e, t, r, No, n), Ps(e, r)
    else if (ih(o, e, t, n, r)) r.stopPropagation()
    else if ((Ps(e, r), t & 4 && -1 < oh.indexOf(e))) {
      for (; o !== null; ) {
        var i = jr(o)
        if (
          (i !== null && Ac(i),
          (i = _l(e, t, n, r)),
          i === null && Ui(e, t, r, No, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Ui(e, t, r, null, n)
  }
}
var No = null
function _l(e, t, n, r) {
  if (((No = null), (e = yu(r)), (e = $t(e)), e !== null))
    if (((t = bt(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Pc(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (No = e), null
}
function $c(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (Xp()) {
        case vu:
          return 1
        case zc:
          return 4
        case ko:
        case Yp:
          return 16
        case Lc:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var vt = null,
  _u = null,
  uo = null
function Bc() {
  if (uo) return uo
  var e,
    t = _u,
    n = t.length,
    r,
    o = 'value' in vt ? vt.value : vt.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (uo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function so(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Kr() {
  return !0
}
function Ts() {
  return !1
}
function Ne(e) {
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
        ? Kr
        : Ts),
      (this.isPropagationStopped = Ts),
      this
    )
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr))
      },
      persist: function () {},
      isPersistent: Kr
    }),
    t
  )
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Eu = Ne(On),
  Lr = V({}, On, { view: 0, detail: 0 }),
  ah = Ne(Lr),
  Oi,
  zi,
  $n,
  Jo = V({}, Lr, {
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
    getModifierState: ku,
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
        : (e !== $n &&
            ($n && e.type === 'mousemove'
              ? ((Oi = e.screenX - $n.screenX), (zi = e.screenY - $n.screenY))
              : (zi = Oi = 0),
            ($n = e)),
          Oi)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : zi
    }
  }),
  Os = Ne(Jo),
  ch = V({}, Jo, { dataTransfer: 0 }),
  fh = Ne(ch),
  dh = V({}, Lr, { relatedTarget: 0 }),
  Li = Ne(dh),
  ph = V({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hh = Ne(ph),
  mh = V({}, On, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  yh = Ne(mh),
  vh = V({}, On, { data: 0 }),
  zs = Ne(vh),
  gh = {
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
  wh = {
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
  Sh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function _h(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1
}
function ku() {
  return _h
}
var Eh = V({}, Lr, {
    key: function (e) {
      if (e.key) {
        var t = gh[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = so(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? wh[e.keyCode] || 'Unidentified'
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
    getModifierState: ku,
    charCode: function (e) {
      return e.type === 'keypress' ? so(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? so(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    }
  }),
  kh = Ne(Eh),
  Ch = V({}, Jo, {
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
  Ls = Ne(Ch),
  xh = V({}, Lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ku
  }),
  Nh = Ne(xh),
  Ph = V({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rh = Ne(Ph),
  Th = V({}, Jo, {
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
  Oh = Ne(Th),
  zh = [9, 13, 27, 32],
  Cu = ot && 'CompositionEvent' in window,
  Zn = null
ot && 'documentMode' in document && (Zn = document.documentMode)
var Lh = ot && 'TextEvent' in window && !Zn,
  Hc = ot && (!Cu || (Zn && 8 < Zn && 11 >= Zn)),
  js = ' ',
  Ds = !1
function Vc(e, t) {
  switch (e) {
    case 'keyup':
      return zh.indexOf(t.keyCode) !== -1
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
function Wc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var rn = !1
function jh(e, t) {
  switch (e) {
    case 'compositionend':
      return Wc(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Ds = !0), js)
    case 'textInput':
      return (e = t.data), e === js && Ds ? null : e
    default:
      return null
  }
}
function Dh(e, t) {
  if (rn)
    return e === 'compositionend' || (!Cu && Vc(e, t))
      ? ((e = Bc()), (uo = _u = vt = null), (rn = !1), e)
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
      return Hc && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Ah = {
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
function As(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Ah[e.type] : t === 'textarea'
}
function Qc(e, t, n, r) {
  Ec(r),
    (t = Po(t, 'onChange')),
    0 < t.length &&
      ((n = new Eu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var bn = null,
  pr = null
function Fh(e) {
  nf(e, 0)
}
function Zo(e) {
  var t = un(e)
  if (mc(t)) return e
}
function Mh(e, t) {
  if (e === 'change') return t
}
var Kc = !1
if (ot) {
  var ji
  if (ot) {
    var Di = 'oninput' in document
    if (!Di) {
      var Fs = document.createElement('div')
      Fs.setAttribute('oninput', 'return;'), (Di = typeof Fs.oninput == 'function')
    }
    ji = Di
  } else ji = !1
  Kc = ji && (!document.documentMode || 9 < document.documentMode)
}
function Ms() {
  bn && (bn.detachEvent('onpropertychange', qc), (pr = bn = null))
}
function qc(e) {
  if (e.propertyName === 'value' && Zo(pr)) {
    var t = []
    Qc(t, pr, e, yu(e)), Nc(Fh, t)
  }
}
function Ih(e, t, n) {
  e === 'focusin'
    ? (Ms(), (bn = t), (pr = n), bn.attachEvent('onpropertychange', qc))
    : e === 'focusout' && Ms()
}
function Uh(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Zo(pr)
}
function $h(e, t) {
  if (e === 'click') return Zo(t)
}
function Bh(e, t) {
  if (e === 'input' || e === 'change') return Zo(t)
}
function Hh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ve = typeof Object.is == 'function' ? Object.is : Hh
function hr(e, t) {
  if (Ve(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!rl.call(t, o) || !Ve(e[o], t[o])) return !1
  }
  return !0
}
function Is(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Us(e, t) {
  var n = Is(e)
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
    n = Is(n)
  }
}
function Gc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gc(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function Xc() {
  for (var e = window, t = So(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = So(e.document)
  }
  return t
}
function xu(e) {
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
function Vh(e) {
  var t = Xc(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
    if (r !== null && xu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Us(n, i))
        var l = Us(n, r)
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Wh = ot && 'documentMode' in document && 11 >= document.documentMode,
  on = null,
  El = null,
  er = null,
  kl = !1
function $s(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  kl ||
    on == null ||
    on !== So(r) ||
    ((r = on),
    'selectionStart' in r && xu(r)
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
    (er && hr(er, r)) ||
      ((er = r),
      (r = Po(El, 'onSelect')),
      0 < r.length &&
        ((t = new Eu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))))
}
function qr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ln = {
    animationend: qr('Animation', 'AnimationEnd'),
    animationiteration: qr('Animation', 'AnimationIteration'),
    animationstart: qr('Animation', 'AnimationStart'),
    transitionend: qr('Transition', 'TransitionEnd')
  },
  Ai = {},
  Yc = {}
ot &&
  ((Yc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  'TransitionEvent' in window || delete ln.transitionend.transition)
function bo(e) {
  if (Ai[e]) return Ai[e]
  if (!ln[e]) return e
  var t = ln[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Yc) return (Ai[e] = t[n])
  return e
}
var Jc = bo('animationend'),
  Zc = bo('animationiteration'),
  bc = bo('animationstart'),
  ef = bo('transitionend'),
  tf = new Map(),
  Bs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function zt(e, t) {
  tf.set(e, t), Zt(t, [e])
}
for (var Fi = 0; Fi < Bs.length; Fi++) {
  var Mi = Bs[Fi],
    Qh = Mi.toLowerCase(),
    Kh = Mi[0].toUpperCase() + Mi.slice(1)
  zt(Qh, 'on' + Kh)
}
zt(Jc, 'onAnimationEnd')
zt(Zc, 'onAnimationIteration')
zt(bc, 'onAnimationStart')
zt('dblclick', 'onDoubleClick')
zt('focusin', 'onFocus')
zt('focusout', 'onBlur')
zt(ef, 'onTransitionEnd')
Sn('onMouseEnter', ['mouseout', 'mouseover'])
Sn('onMouseLeave', ['mouseout', 'mouseover'])
Sn('onPointerEnter', ['pointerout', 'pointerover'])
Sn('onPointerLeave', ['pointerout', 'pointerover'])
Zt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Zt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Zt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Zt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Zt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Gn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  qh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Gn))
function Hs(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Qp(r, t, void 0, e), (e.currentTarget = null)
}
function nf(e, t) {
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
          Hs(o, u, a), (i = s)
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
          Hs(o, u, a), (i = s)
        }
    }
  }
  if (Eo) throw ((e = gl), (Eo = !1), (gl = null), e)
}
function I(e, t) {
  var n = t[Rl]
  n === void 0 && (n = t[Rl] = new Set())
  var r = e + '__bubble'
  n.has(r) || (rf(t, e, 2, !1), n.add(r))
}
function Ii(e, t, n) {
  var r = 0
  t && (r |= 4), rf(n, e, r, t)
}
var Gr = '_reactListening' + Math.random().toString(36).slice(2)
function mr(e) {
  if (!e[Gr]) {
    ;(e[Gr] = !0),
      cc.forEach(function (n) {
        n !== 'selectionchange' && (qh.has(n) || Ii(n, !1, e), Ii(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Gr] || ((t[Gr] = !0), Ii('selectionchange', !1, t))
  }
}
function rf(e, t, n, r) {
  switch ($c(t)) {
    case 1:
      var o = uh
      break
    case 4:
      o = sh
      break
    default:
      o = Su
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !vl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function Ui(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
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
          if (((l = $t(u)), l === null)) return
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Nc(function () {
    var a = i,
      c = yu(n),
      f = []
    e: {
      var m = tf.get(e)
      if (m !== void 0) {
        var g = Eu,
          y = e
        switch (e) {
          case 'keypress':
            if (so(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = kh
            break
          case 'focusin':
            ;(y = 'focus'), (g = Li)
            break
          case 'focusout':
            ;(y = 'blur'), (g = Li)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Li
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
            g = Os
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = fh
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Nh
            break
          case Jc:
          case Zc:
          case bc:
            g = hh
            break
          case ef:
            g = Rh
            break
          case 'scroll':
            g = ah
            break
          case 'wheel':
            g = Oh
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = yh
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Ls
        }
        var v = (t & 4) !== 0,
          E = !v && e === 'scroll',
          p = v ? (m !== null ? m + 'Capture' : null) : m
        v = []
        for (var d = a, h; d !== null; ) {
          h = d
          var S = h.stateNode
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S), p !== null && ((S = ar(d, p)), S != null && v.push(yr(d, S, h)))),
            E)
          )
            break
          d = d.return
        }
        0 < v.length &&
          ((m = new g(m, y, null, n, c)), f.push({ event: m, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          m && n !== ml && (y = n.relatedTarget || n.fromElement) && ($t(y) || y[it]))
        )
          break e
        if (
          (g || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? $t(y) : null),
              y !== null &&
                ((E = bt(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((v = Os),
            (S = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Ls), (S = 'onPointerLeave'), (p = 'onPointerEnter'), (d = 'pointer')),
            (E = g == null ? m : un(g)),
            (h = y == null ? m : un(y)),
            (m = new v(S, d + 'leave', g, n, c)),
            (m.target = E),
            (m.relatedTarget = h),
            (S = null),
            $t(c) === a &&
              ((v = new v(p, d + 'enter', y, n, c)),
              (v.target = h),
              (v.relatedTarget = E),
              (S = v)),
            (E = S),
            g && y)
          )
            t: {
              for (v = g, p = y, d = 0, h = v; h; h = en(h)) d++
              for (h = 0, S = p; S; S = en(S)) h++
              for (; 0 < d - h; ) (v = en(v)), d--
              for (; 0 < h - d; ) (p = en(p)), h--
              for (; d--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t
                ;(v = en(v)), (p = en(p))
              }
              v = null
            }
          else v = null
          g !== null && Vs(f, m, g, v, !1), y !== null && E !== null && Vs(f, E, y, v, !0)
        }
      }
      e: {
        if (
          ((m = a ? un(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && m.type === 'file'))
        )
          var k = Mh
        else if (As(m))
          if (Kc) k = Bh
          else {
            k = Uh
            var N = Ih
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (k = $h)
        if (k && (k = k(e, a))) {
          Qc(f, k, n, c)
          break e
        }
        N && N(e, m, a),
          e === 'focusout' &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === 'number' &&
            cl(m, 'number', m.value)
      }
      switch (((N = a ? un(a) : window), e)) {
        case 'focusin':
          ;(As(N) || N.contentEditable === 'true') && ((on = N), (El = a), (er = null))
          break
        case 'focusout':
          er = El = on = null
          break
        case 'mousedown':
          kl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(kl = !1), $s(f, n, c)
          break
        case 'selectionchange':
          if (Wh) break
        case 'keydown':
        case 'keyup':
          $s(f, n, c)
      }
      var P
      if (Cu)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        rn
          ? Vc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (Hc &&
          n.locale !== 'ko' &&
          (rn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && rn && (P = Bc())
            : ((vt = c), (_u = 'value' in vt ? vt.value : vt.textContent), (rn = !0))),
        (N = Po(a, T)),
        0 < N.length &&
          ((T = new zs(T, e, null, n, c)),
          f.push({ event: T, listeners: N }),
          P ? (T.data = P) : ((P = Wc(n)), P !== null && (T.data = P)))),
        (P = Lh ? jh(e, n) : Dh(e, n)) &&
          ((a = Po(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new zs('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = P)))
    }
    nf(f, t)
  })
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Po(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ar(e, n)),
      i != null && r.unshift(yr(e, i, o)),
      (i = ar(e, t)),
      i != null && r.push(yr(e, i, o))),
      (e = e.return)
  }
  return r
}
function en(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Vs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = ar(n, i)), s != null && l.unshift(yr(n, s, u)))
        : o || ((s = ar(n, i)), s != null && l.push(yr(n, s, u)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var Gh = /\r\n?/g,
  Xh = /\u0000|\uFFFD/g
function Ws(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Gh,
      `
`
    )
    .replace(Xh, '')
}
function Xr(e, t, n) {
  if (((t = Ws(t)), Ws(e) !== t && n)) throw Error(_(425))
}
function Ro() {}
var Cl = null,
  xl = null
function Nl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Pl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Yh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Qs = typeof Promise == 'function' ? Promise : void 0,
  Jh =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Qs < 'u'
        ? function (e) {
            return Qs.resolve(null).then(e).catch(Zh)
          }
        : Pl
function Zh(e) {
  setTimeout(function () {
    throw e
  })
}
function $i(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), dr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  dr(t)
}
function Et(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Ks(e) {
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
var zn = Math.random().toString(36).slice(2),
  Ke = '__reactFiber$' + zn,
  vr = '__reactProps$' + zn,
  it = '__reactContainer$' + zn,
  Rl = '__reactEvents$' + zn,
  bh = '__reactListeners$' + zn,
  em = '__reactHandles$' + zn
function $t(e) {
  var t = e[Ke]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[it] || n[Ke])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ks(e); e !== null; ) {
          if ((n = e[Ke])) return n
          e = Ks(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function jr(e) {
  return (
    (e = e[Ke] || e[it]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(_(33))
}
function ei(e) {
  return e[vr] || null
}
var Tl = [],
  sn = -1
function Lt(e) {
  return { current: e }
}
function U(e) {
  0 > sn || ((e.current = Tl[sn]), (Tl[sn] = null), sn--)
}
function M(e, t) {
  sn++, (Tl[sn] = e.current), (e.current = t)
}
var Rt = {},
  se = Lt(Rt),
  me = Lt(!1),
  Qt = Rt
function _n(e, t) {
  var n = e.type.contextTypes
  if (!n) return Rt
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
function ye(e) {
  return (e = e.childContextTypes), e != null
}
function To() {
  U(me), U(se)
}
function qs(e, t, n) {
  if (se.current !== Rt) throw Error(_(168))
  M(se, t), M(me, n)
}
function of(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(_(108, Ip(e) || 'Unknown', o))
  return V({}, n, r)
}
function Oo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (Qt = se.current),
    M(se, e),
    M(me, me.current),
    !0
  )
}
function Gs(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(_(169))
  n
    ? ((e = of(e, t, Qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(me),
      U(se),
      M(se, e))
    : U(me),
    M(me, n)
}
var Ze = null,
  ti = !1,
  Bi = !1
function lf(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e)
}
function tm(e) {
  ;(ti = !0), lf(e)
}
function jt() {
  if (!Bi && Ze !== null) {
    Bi = !0
    var e = 0,
      t = F
    try {
      var n = Ze
      for (F = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ze = null), (ti = !1)
    } catch (o) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), Oc(vu, jt), o)
    } finally {
      ;(F = t), (Bi = !1)
    }
  }
  return null
}
var an = [],
  cn = 0,
  zo = null,
  Lo = 0,
  Pe = [],
  Re = 0,
  Kt = null,
  be = 1,
  et = ''
function Mt(e, t) {
  ;(an[cn++] = Lo), (an[cn++] = zo), (zo = e), (Lo = t)
}
function uf(e, t, n) {
  ;(Pe[Re++] = be), (Pe[Re++] = et), (Pe[Re++] = Kt), (Kt = e)
  var r = be
  e = et
  var o = 32 - $e(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - $e(t) + o
  if (30 < i) {
    var l = o - (o % 5)
    ;(i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (be = (1 << (32 - $e(t) + o)) | (n << o) | r),
      (et = i + e)
  } else (be = (1 << i) | (n << o) | r), (et = e)
}
function Nu(e) {
  e.return !== null && (Mt(e, 1), uf(e, 1, 0))
}
function Pu(e) {
  for (; e === zo; ) (zo = an[--cn]), (an[cn] = null), (Lo = an[--cn]), (an[cn] = null)
  for (; e === Kt; )
    (Kt = Pe[--Re]),
      (Pe[Re] = null),
      (et = Pe[--Re]),
      (Pe[Re] = null),
      (be = Pe[--Re]),
      (Pe[Re] = null)
}
var _e = null,
  we = null,
  $ = !1,
  Ie = null
function sf(e, t) {
  var n = Te(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Xs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (we = Et(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (we = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Kt !== null ? { id: be, overflow: et } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (we = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ol(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function zl(e) {
  if ($) {
    var t = we
    if (t) {
      var n = t
      if (!Xs(e, t)) {
        if (Ol(e)) throw Error(_(418))
        t = Et(n.nextSibling)
        var r = _e
        t && Xs(e, t) ? sf(r, n) : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (_e = e))
      }
    } else {
      if (Ol(e)) throw Error(_(418))
      ;(e.flags = (e.flags & -4097) | 2), ($ = !1), (_e = e)
    }
  }
}
function Ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  _e = e
}
function Yr(e) {
  if (e !== _e) return !1
  if (!$) return Ys(e), ($ = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Nl(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Ol(e)) throw (af(), Error(_(418)))
    for (; t; ) sf(e, t), (t = Et(t.nextSibling))
  }
  if ((Ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              we = Et(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      we = null
    }
  } else we = _e ? Et(e.stateNode.nextSibling) : null
  return !0
}
function af() {
  for (var e = we; e; ) e = Et(e.nextSibling)
}
function En() {
  ;(we = _e = null), ($ = !1)
}
function Ru(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e)
}
var nm = at.ReactCurrentBatchConfig
function Fe(e, t) {
  if (e && e.defaultProps) {
    ;(t = V({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var jo = Lt(null),
  Do = null,
  fn = null,
  Tu = null
function Ou() {
  Tu = fn = Do = null
}
function zu(e) {
  var t = jo.current
  U(jo), (e._currentValue = t)
}
function Ll(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function gn(e, t) {
  ;(Do = e),
    (Tu = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null))
}
function Le(e) {
  var t = e._currentValue
  if (Tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (Do === null) throw Error(_(308))
      ;(fn = e), (Do.dependencies = { lanes: 0, firstContext: e })
    } else fn = fn.next = e
  return t
}
var Bt = null
function Lu(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e)
}
function cf(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Lu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    lt(e, r)
  )
}
function lt(e, t) {
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
var ht = !1
function ju(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function ff(e, t) {
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
function tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function kt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), A & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      lt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Lu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    lt(e, n)
  )
}
function ao(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n)
  }
}
function Js(e, t) {
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
function Ao(e, t, n, r) {
  var o = e.updateQueue
  ht = !1
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending
  if (u !== null) {
    o.shared.pending = null
    var s = u,
      a = s.next
    ;(s.next = null), l === null ? (i = a) : (l.next = a), (l = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== l &&
        (u === null ? (c.firstBaseUpdate = a) : (u.next = a), (c.lastBaseUpdate = s)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(l = 0), (c = a = s = null), (u = i)
    do {
      var m = u.lane,
        g = u.eventTime
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null
            })
        e: {
          var y = e,
            v = u
          switch (((m = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                f = y.call(g, f, m)
                break e
              }
              f = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = v.payload),
                (m = typeof y == 'function' ? y.call(g, f, m) : y),
                m == null)
              )
                break e
              f = V({}, f, m)
              break e
            case 2:
              ht = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [u]) : m.push(u))
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }),
          c === null ? ((a = c = g), (s = f)) : (c = c.next = g),
          (l |= m)
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break
        ;(m = u),
          (u = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (l |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(Gt |= l), (e.lanes = l), (e.memoizedState = f)
  }
}
function Zs(e, t, n) {
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
var df = new ac.Component().refs
function jl(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ni = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bt(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ce(),
      o = xt(e),
      i = tt(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, o)),
      t !== null && (Be(t, e, o, r), ao(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ce(),
      o = xt(e),
      i = tt(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, o)),
      t !== null && (Be(t, e, o, r), ao(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ce(),
      r = xt(e),
      o = tt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = kt(e, o, r)),
      t !== null && (Be(t, e, r, n), ao(t, e, r))
  }
}
function bs(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !hr(n, r) || !hr(o, i)
        : !0
  )
}
function pf(e, t, n) {
  var r = !1,
    o = Rt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Le(i))
      : ((o = ye(t) ? Qt : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? _n(e, o) : Rt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ni),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function ea(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ni.enqueueReplaceState(t, t.state, null)
}
function Dl(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = df), ju(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Le(i))
    : ((i = ye(t) ? Qt : se.current), (o.context = _n(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (jl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && ni.enqueueReplaceState(o, o.state, null),
      Ao(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Bn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309))
        var r = n.stateNode
      }
      if (!r) throw Error(_(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs
            u === df && (u = o.refs = {}), l === null ? delete u[i] : (u[i] = l)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(_(284))
    if (!n._owner) throw Error(_(290, e))
  }
  return e
}
function Jr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function ta(e) {
  var t = e._init
  return t(e._payload)
}
function hf(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d)
    }
  }
  function n(p, d) {
    if (!e) return null
    for (; d !== null; ) t(p, d), (d = d.sibling)
    return null
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling)
    return p
  }
  function o(p, d) {
    return (p = Nt(p, d)), (p.index = 0), (p.sibling = null), p
  }
  function i(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    )
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function u(p, d, h, S) {
    return d === null || d.tag !== 6
      ? ((d = Gi(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d)
  }
  function s(p, d, h, S) {
    var k = h.type
    return k === nn
      ? c(p, d, h.props.children, S, h.key)
      : d !== null &&
          (d.elementType === k ||
            (typeof k == 'object' && k !== null && k.$$typeof === pt && ta(k) === d.type))
        ? ((S = o(d, h.props)), (S.ref = Bn(p, d, h)), (S.return = p), S)
        : ((S = yo(h.type, h.key, h.props, null, p.mode, S)),
          (S.ref = Bn(p, d, h)),
          (S.return = p),
          S)
  }
  function a(p, d, h, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Xi(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h.children || [])), (d.return = p), d)
  }
  function c(p, d, h, S, k) {
    return d === null || d.tag !== 7
      ? ((d = Wt(h, p.mode, S, k)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d)
  }
  function f(p, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Gi('' + d, p.mode, h)), (d.return = p), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case $r:
          return (
            (h = yo(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = Bn(p, null, d)),
            (h.return = p),
            h
          )
        case tn:
          return (d = Xi(d, p.mode, h)), (d.return = p), d
        case pt:
          var S = d._init
          return f(p, S(d._payload), h)
      }
      if (Kn(d) || Fn(d)) return (d = Wt(d, p.mode, h, null)), (d.return = p), d
      Jr(p, d)
    }
    return null
  }
  function m(p, d, h, S) {
    var k = d !== null ? d.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return k !== null ? null : u(p, d, '' + h, S)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case $r:
          return h.key === k ? s(p, d, h, S) : null
        case tn:
          return h.key === k ? a(p, d, h, S) : null
        case pt:
          return (k = h._init), m(p, d, k(h._payload), S)
      }
      if (Kn(h) || Fn(h)) return k !== null ? null : c(p, d, h, S, null)
      Jr(p, h)
    }
    return null
  }
  function g(p, d, h, S, k) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (p = p.get(h) || null), u(d, p, '' + S, k)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case $r:
          return (p = p.get(S.key === null ? h : S.key) || null), s(d, p, S, k)
        case tn:
          return (p = p.get(S.key === null ? h : S.key) || null), a(d, p, S, k)
        case pt:
          var N = S._init
          return g(p, d, h, N(S._payload), k)
      }
      if (Kn(S) || Fn(S)) return (p = p.get(h) || null), c(d, p, S, k, null)
      Jr(d, S)
    }
    return null
  }
  function y(p, d, h, S) {
    for (
      var k = null, N = null, P = d, T = (d = 0), Q = null;
      P !== null && T < h.length;
      T++
    ) {
      P.index > T ? ((Q = P), (P = null)) : (Q = P.sibling)
      var j = m(p, P, h[T], S)
      if (j === null) {
        P === null && (P = Q)
        break
      }
      e && P && j.alternate === null && t(p, P),
        (d = i(j, d, T)),
        N === null ? (k = j) : (N.sibling = j),
        (N = j),
        (P = Q)
    }
    if (T === h.length) return n(p, P), $ && Mt(p, T), k
    if (P === null) {
      for (; T < h.length; T++)
        (P = f(p, h[T], S)),
          P !== null &&
            ((d = i(P, d, T)), N === null ? (k = P) : (N.sibling = P), (N = P))
      return $ && Mt(p, T), k
    }
    for (P = r(p, P); T < h.length; T++)
      (Q = g(P, p, T, h[T], S)),
        Q !== null &&
          (e && Q.alternate !== null && P.delete(Q.key === null ? T : Q.key),
          (d = i(Q, d, T)),
          N === null ? (k = Q) : (N.sibling = Q),
          (N = Q))
    return (
      e &&
        P.forEach(function (De) {
          return t(p, De)
        }),
      $ && Mt(p, T),
      k
    )
  }
  function v(p, d, h, S) {
    var k = Fn(h)
    if (typeof k != 'function') throw Error(_(150))
    if (((h = k.call(h)), h == null)) throw Error(_(151))
    for (
      var N = (k = null), P = d, T = (d = 0), Q = null, j = h.next();
      P !== null && !j.done;
      T++, j = h.next()
    ) {
      P.index > T ? ((Q = P), (P = null)) : (Q = P.sibling)
      var De = m(p, P, j.value, S)
      if (De === null) {
        P === null && (P = Q)
        break
      }
      e && P && De.alternate === null && t(p, P),
        (d = i(De, d, T)),
        N === null ? (k = De) : (N.sibling = De),
        (N = De),
        (P = Q)
    }
    if (j.done) return n(p, P), $ && Mt(p, T), k
    if (P === null) {
      for (; !j.done; T++, j = h.next())
        (j = f(p, j.value, S)),
          j !== null &&
            ((d = i(j, d, T)), N === null ? (k = j) : (N.sibling = j), (N = j))
      return $ && Mt(p, T), k
    }
    for (P = r(p, P); !j.done; T++, j = h.next())
      (j = g(P, p, T, j.value, S)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? T : j.key),
          (d = i(j, d, T)),
          N === null ? (k = j) : (N.sibling = j),
          (N = j))
    return (
      e &&
        P.forEach(function (Dn) {
          return t(p, Dn)
        }),
      $ && Mt(p, T),
      k
    )
  }
  function E(p, d, h, S) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === nn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case $r:
          e: {
            for (var k = h.key, N = d; N !== null; ) {
              if (N.key === k) {
                if (((k = h.type), k === nn)) {
                  if (N.tag === 7) {
                    n(p, N.sibling), (d = o(N, h.props.children)), (d.return = p), (p = d)
                    break e
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === pt &&
                    ta(k) === N.type)
                ) {
                  n(p, N.sibling),
                    (d = o(N, h.props)),
                    (d.ref = Bn(p, N, h)),
                    (d.return = p),
                    (p = d)
                  break e
                }
                n(p, N)
                break
              } else t(p, N)
              N = N.sibling
            }
            h.type === nn
              ? ((d = Wt(h.props.children, p.mode, S, h.key)), (d.return = p), (p = d))
              : ((S = yo(h.type, h.key, h.props, null, p.mode, S)),
                (S.ref = Bn(p, d, h)),
                (S.return = p),
                (p = S))
          }
          return l(p)
        case tn:
          e: {
            for (N = h.key; d !== null; ) {
              if (d.key === N)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling), (d = o(d, h.children || [])), (d.return = p), (p = d)
                  break e
                } else {
                  n(p, d)
                  break
                }
              else t(p, d)
              d = d.sibling
            }
            ;(d = Xi(h, p.mode, S)), (d.return = p), (p = d)
          }
          return l(p)
        case pt:
          return (N = h._init), E(p, d, N(h._payload), S)
      }
      if (Kn(h)) return y(p, d, h, S)
      if (Fn(h)) return v(p, d, h, S)
      Jr(p, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = Gi(h, p.mode, S)), (d.return = p), (p = d)),
        l(p))
      : n(p, d)
  }
  return E
}
var kn = hf(!0),
  mf = hf(!1),
  Dr = {},
  Xe = Lt(Dr),
  gr = Lt(Dr),
  wr = Lt(Dr)
function Ht(e) {
  if (e === Dr) throw Error(_(174))
  return e
}
function Du(e, t) {
  switch ((M(wr, t), M(gr, e), M(Xe, Dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : dl(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = dl(t, e))
  }
  U(Xe), M(Xe, t)
}
function Cn() {
  U(Xe), U(gr), U(wr)
}
function yf(e) {
  Ht(wr.current)
  var t = Ht(Xe.current),
    n = dl(t, e.type)
  t !== n && (M(gr, e), M(Xe, n))
}
function Au(e) {
  gr.current === e && (U(Xe), U(gr))
}
var B = Lt(0)
function Fo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
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
var Hi = []
function Fu() {
  for (var e = 0; e < Hi.length; e++) Hi[e]._workInProgressVersionPrimary = null
  Hi.length = 0
}
var co = at.ReactCurrentDispatcher,
  Vi = at.ReactCurrentBatchConfig,
  qt = 0,
  H = null,
  Y = null,
  b = null,
  Mo = !1,
  tr = !1,
  Sr = 0,
  rm = 0
function ie() {
  throw Error(_(321))
}
function Mu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ve(e[n], t[n])) return !1
  return !0
}
function Iu(e, t, n, r, o, i) {
  if (
    ((qt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (co.current = e === null || e.memoizedState === null ? um : sm),
    (e = n(r, o)),
    tr)
  ) {
    i = 0
    do {
      if (((tr = !1), (Sr = 0), 25 <= i)) throw Error(_(301))
      ;(i += 1), (b = Y = null), (t.updateQueue = null), (co.current = am), (e = n(r, o))
    } while (tr)
  }
  if (
    ((co.current = Io),
    (t = Y !== null && Y.next !== null),
    (qt = 0),
    (b = Y = H = null),
    (Mo = !1),
    t)
  )
    throw Error(_(300))
  return e
}
function Uu() {
  var e = Sr !== 0
  return (Sr = 0), e
}
function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return b === null ? (H.memoizedState = b = e) : (b = b.next = e), b
}
function je() {
  if (Y === null) {
    var e = H.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Y.next
  var t = b === null ? H.memoizedState : b.next
  if (t !== null) (b = t), (Y = e)
  else {
    if (e === null) throw Error(_(310))
    ;(Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null
      }),
      b === null ? (H.memoizedState = b = e) : (b = b.next = e)
  }
  return b
}
function _r(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Wi(e) {
  var t = je(),
    n = t.queue
  if (n === null) throw Error(_(311))
  n.lastRenderedReducer = e
  var r = Y,
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
    ;(i = o.next), (r = r.baseState)
    var u = (l = null),
      s = null,
      a = i
    do {
      var c = a.lane
      if ((qt & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action))
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        }
        s === null ? ((u = s = f), (l = r)) : (s = s.next = f), (H.lanes |= c), (Gt |= c)
      }
      a = a.next
    } while (a !== null && a !== i)
    s === null ? (l = r) : (s.next = u),
      Ve(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (H.lanes |= i), (Gt |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Qi(e) {
  var t = je(),
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
    Ve(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function vf() {}
function gf(e, t) {
  var n = H,
    r = je(),
    o = t(),
    i = !Ve(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (he = !0)),
    (r = r.queue),
    $u(_f.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Er(9, Sf.bind(null, n, r, o, t), void 0, null), ee === null))
      throw Error(_(349))
    qt & 30 || wf(n, t, o)
  }
  return o
}
function wf(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Sf(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), Ef(t) && kf(e)
}
function _f(e, t, n) {
  return n(function () {
    Ef(t) && kf(e)
  })
}
function Ef(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Ve(e, n)
  } catch {
    return !0
  }
}
function kf(e) {
  var t = lt(e, 1)
  t !== null && Be(t, e, 1, -1)
}
function na(e) {
  var t = Qe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _r,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = lm.bind(null, H, e)),
    [t.memoizedState, e]
  )
}
function Er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Cf() {
  return je().memoizedState
}
function fo(e, t, n, r) {
  var o = Qe()
  ;(H.flags |= e), (o.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r))
}
function ri(e, t, n, r) {
  var o = je()
  r = r === void 0 ? null : r
  var i = void 0
  if (Y !== null) {
    var l = Y.memoizedState
    if (((i = l.destroy), r !== null && Mu(r, l.deps))) {
      o.memoizedState = Er(t, n, i, r)
      return
    }
  }
  ;(H.flags |= e), (o.memoizedState = Er(1 | t, n, i, r))
}
function ra(e, t) {
  return fo(8390656, 8, e, t)
}
function $u(e, t) {
  return ri(2048, 8, e, t)
}
function xf(e, t) {
  return ri(4, 2, e, t)
}
function Nf(e, t) {
  return ri(4, 4, e, t)
}
function Pf(e, t) {
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
function Rf(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ri(4, 4, Pf.bind(null, t, e), n)
}
function Bu() {}
function Tf(e, t) {
  var n = je()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Mu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Of(e, t) {
  var n = je()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function zf(e, t, n) {
  return qt & 21
    ? (Ve(n, t) || ((n = jc()), (H.lanes |= n), (Gt |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n))
}
function om(e, t) {
  var n = F
  ;(F = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Vi.transition
  Vi.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(F = n), (Vi.transition = r)
  }
}
function Lf() {
  return je().memoizedState
}
function im(e, t, n) {
  var r = xt(e)
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), jf(e))
  )
    Df(t, n)
  else if (((n = cf(e, t, n, r)), n !== null)) {
    var o = ce()
    Be(n, e, r, o), Af(n, t, r)
  }
}
function lm(e, t, n) {
  var r = xt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (jf(e)) Df(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n)
        if (((o.hasEagerState = !0), (o.eagerState = u), Ve(u, l))) {
          var s = t.interleaved
          s === null ? ((o.next = o), Lu(t)) : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = cf(e, t, o, r)), n !== null && ((o = ce()), Be(n, e, r, o), Af(n, t, r))
  }
}
function jf(e) {
  var t = e.alternate
  return e === H || (t !== null && t === H)
}
function Df(e, t) {
  tr = Mo = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Af(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n)
  }
}
var Io = {
    readContext: Le,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1
  },
  um = {
    readContext: Le,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Le,
    useEffect: ra,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), fo(4194308, 4, Pf.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return fo(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return fo(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Qe()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = Qe()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = im.bind(null, H, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Qe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: na,
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e)
    },
    useTransition: function () {
      var e = na(!1),
        t = e[0]
      return (e = om.bind(null, e[1])), (Qe().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        o = Qe()
      if ($) {
        if (n === void 0) throw Error(_(407))
        n = n()
      } else {
        if (((n = t()), ee === null)) throw Error(_(349))
        qt & 30 || wf(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        ra(_f.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Er(9, Sf.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Qe(),
        t = ee.identifierPrefix
      if ($) {
        var n = et,
          r = be
        ;(n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Sr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = rm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  sm = {
    readContext: Le,
    useCallback: Tf,
    useContext: Le,
    useEffect: $u,
    useImperativeHandle: Rf,
    useInsertionEffect: xf,
    useLayoutEffect: Nf,
    useMemo: Of,
    useReducer: Wi,
    useRef: Cf,
    useState: function () {
      return Wi(_r)
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = je()
      return zf(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Wi(_r)[0],
        t = je().memoizedState
      return [e, t]
    },
    useMutableSource: vf,
    useSyncExternalStore: gf,
    useId: Lf,
    unstable_isNewReconciler: !1
  },
  am = {
    readContext: Le,
    useCallback: Tf,
    useContext: Le,
    useEffect: $u,
    useImperativeHandle: Rf,
    useInsertionEffect: xf,
    useLayoutEffect: Nf,
    useMemo: Of,
    useReducer: Qi,
    useRef: Cf,
    useState: function () {
      return Qi(_r)
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = je()
      return Y === null ? (t.memoizedState = e) : zf(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Qi(_r)[0],
        t = je().memoizedState
      return [e, t]
    },
    useMutableSource: vf,
    useSyncExternalStore: gf,
    useId: Lf,
    unstable_isNewReconciler: !1
  }
function xn(e, t) {
  try {
    var n = '',
      r = t
    do (n += Mp(r)), (r = r.return)
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
  return { value: e, source: t, stack: o, digest: null }
}
function Ki(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Al(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var cm = typeof WeakMap == 'function' ? WeakMap : Map
function Ff(e, t, n) {
  ;(n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      $o || (($o = !0), (Ql = r)), Al(e, t)
    }),
    n
  )
}
function Mf(e, t, n) {
  ;(n = tt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Al(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Al(e, t),
          typeof r != 'function' && (Ct === null ? (Ct = new Set([this])) : Ct.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function oa(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new cm()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = Cm.bind(null, e, t, n)), t.then(e, e))
}
function ia(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function la(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tt(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var fm = at.ReactCurrentOwner,
  he = !1
function ae(e, t, n, r) {
  t.child = e === null ? mf(t, null, n, r) : kn(t, e.child, n, r)
}
function ua(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    gn(t, o),
    (r = Iu(e, t, n, r, i, o)),
    (n = Uu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ut(e, t, o))
      : ($ && n && Nu(t), (t.flags |= 1), ae(e, t, r, o), t.child)
  )
}
function sa(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Xu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), If(e, t, i, r, o))
      : ((e = yo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : hr), n(l, r) && e.ref === t.ref))
      return ut(e, t, o)
  }
  return (t.flags |= 1), (e = Nt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function If(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (hr(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (he = !0)
      else return (t.lanes = e.lanes), ut(e, t, o)
  }
  return Fl(e, t, n, r, o)
}
function Uf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(pn, ge),
        (ge |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          M(pn, ge),
          (ge |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        M(pn, ge),
        (ge |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(pn, ge),
      (ge |= r)
  return ae(e, t, o, n), t.child
}
function $f(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Fl(e, t, n, r, o) {
  var i = ye(n) ? Qt : se.current
  return (
    (i = _n(t, i)),
    gn(t, o),
    (n = Iu(e, t, n, r, i, o)),
    (r = Uu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ut(e, t, o))
      : ($ && r && Nu(t), (t.flags |= 1), ae(e, t, n, o), t.child)
  )
}
function aa(e, t, n, r, o) {
  if (ye(n)) {
    var i = !0
    Oo(t)
  } else i = !1
  if ((gn(t, o), t.stateNode === null)) po(e, t), pf(t, n, r), Dl(t, n, r, o), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps
    l.props = u
    var s = l.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = Le(a))
      : ((a = ye(n) ? Qt : se.current), (a = _n(t, a)))
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && ea(t, l, r, a)),
      (ht = !1)
    var m = t.memoizedState
    ;(l.state = m),
      Ao(t, r, l, o),
      (s = t.memoizedState),
      u !== r || m !== s || me.current || ht
        ? (typeof c == 'function' && (jl(t, n, c, r), (s = t.memoizedState)),
          (u = ht || bs(t, n, u, r, m, s, a))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(l = t.stateNode),
      ff(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Fe(t.type, u)),
      (l.props = a),
      (f = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Le(s))
        : ((s = ye(n) ? Qt : se.current), (s = _n(t, s)))
    var g = n.getDerivedStateFromProps
    ;(c = typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== f || m !== s) && ea(t, l, r, s)),
      (ht = !1),
      (m = t.memoizedState),
      (l.state = m),
      Ao(t, r, l, o)
    var y = t.memoizedState
    u !== f || m !== y || me.current || ht
      ? (typeof g == 'function' && (jl(t, n, g, r), (y = t.memoizedState)),
        (a = ht || bs(t, n, a, r, m, y, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, y, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, y, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Ml(e, t, n, r, i, o)
}
function Ml(e, t, n, r, o, i) {
  $f(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return o && Gs(t, n, !1), ut(e, t, i)
  ;(r = t.stateNode), (fm.current = t)
  var u = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = kn(t, e.child, null, i)), (t.child = kn(t, null, u, i)))
      : ae(e, t, u, i),
    (t.memoizedState = r.state),
    o && Gs(t, n, !0),
    t.child
  )
}
function Bf(e) {
  var t = e.stateNode
  t.pendingContext
    ? qs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qs(e, t.context, !1),
    Du(e, t.containerInfo)
}
function ca(e, t, n, r, o) {
  return En(), Ru(o), (t.flags |= 256), ae(e, t, n, r), t.child
}
var Il = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ul(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Hf(e, t, n) {
  var r = t.pendingProps,
    o = B.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u
  if (
    ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    M(B, o & 1),
    e === null)
  )
    return (
      zl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = li(l, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ul(n)),
              (t.memoizedState = Il),
              e)
            : Hu(t, l))
    )
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return dm(e, t, l, r, u, o, n)
  if (i) {
    ;(i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = Nt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = Nt(u, i)) : ((i = Wt(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ul(n)
          : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Il),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Nt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Hu(e, t) {
  return (
    (t = li({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Zr(e, t, n, r) {
  return (
    r !== null && Ru(r),
    kn(t, e.child, null, n),
    (e = Hu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function dm(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ki(Error(_(422)))), Zr(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = li({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Wt(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && kn(t, e.child, null, l),
          (t.child.memoizedState = Ul(l)),
          (t.memoizedState = Il),
          i)
  if (!(t.mode & 1)) return Zr(e, t, l, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(_(419))), (r = Ki(i, r, void 0)), Zr(e, t, l, r)
  }
  if (((u = (l & e.childLanes) !== 0), he || u)) {
    if (((r = ee), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), lt(e, o), Be(r, e, o, -1))
    }
    return Gu(), (r = Ki(Error(_(421)))), Zr(e, t, l, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = Et(o.nextSibling)),
      (_e = t),
      ($ = !0),
      (Ie = null),
      e !== null &&
        ((Pe[Re++] = be),
        (Pe[Re++] = et),
        (Pe[Re++] = Kt),
        (be = e.id),
        (et = e.overflow),
        (Kt = t)),
      (t = Hu(t, r.children)),
      (t.flags |= 4096),
      t)
}
function fa(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ll(e.return, t, n)
}
function qi(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function Vf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ae(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fa(e, n, t)
        else if (e.tag === 19) fa(e, n, t)
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
  if ((M(B, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Fo(e) === null && (o = n), (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          qi(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Fo(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        qi(t, !0, n, null, i)
        break
      case 'together':
        qi(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function po(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(_(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function pm(e, t, n) {
  switch (t.tag) {
    case 3:
      Bf(t), En()
      break
    case 5:
      yf(t)
      break
    case 1:
      ye(t.type) && Oo(t)
      break
    case 4:
      Du(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      M(jo, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Hf(e, t, n)
            : (M(B, B.current & 1), (e = ut(e, t, n)), e !== null ? e.sibling : null)
      M(B, B.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vf(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        M(B, B.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Uf(e, t, n)
  }
  return ut(e, t, n)
}
var Wf, $l, Qf, Kf
Wf = function (e, t) {
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
$l = function () {}
Qf = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Ht(Xe.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = sl(e, o)), (r = sl(e, r)), (i = [])
        break
      case 'select':
        ;(o = V({}, o, { value: void 0 })), (r = V({}, r, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = fl(e, o)), (r = fl(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ro)
    }
    pl(n, r)
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
            (ur.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null))
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
                (ur.hasOwnProperty(a)
                  ? (s != null && a === 'onScroll' && I('scroll', e),
                    i || u === s || (i = []))
                  : (i = i || []).push(a, s))
    }
    n && (i = i || []).push('style', n)
    var a = i
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
Kf = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Hn(e, t) {
  if (!$)
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
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function hm(e, t, n) {
  var r = t.pendingProps
  switch ((Pu(t), t.tag)) {
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
      return le(t), null
    case 1:
      return ye(t.type) && To(), le(t), null
    case 3:
      return (
        (r = t.stateNode),
        Cn(),
        U(me),
        U(se),
        Fu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (Gl(Ie), (Ie = null)))),
        $l(e, t),
        le(t),
        null
      )
    case 5:
      Au(t)
      var o = Ht(wr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Qf(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166))
          return le(t), null
        }
        if (((e = Ht(Xe.current)), Yr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[Ke] = t), (r[vr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              I('cancel', r), I('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              I('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Gn.length; o++) I(Gn[o], r)
              break
            case 'source':
              I('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              I('error', r), I('load', r)
              break
            case 'details':
              I('toggle', r)
              break
            case 'input':
              Ss(r, i), I('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }), I('invalid', r)
              break
            case 'textarea':
              Es(r, i), I('invalid', r)
          }
          pl(n, i), (o = null)
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l]
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : ur.hasOwnProperty(l) && u != null && l === 'onScroll' && I('scroll', r)
            }
          switch (n) {
            case 'input':
              Br(r), _s(r, i, !0)
              break
            case 'textarea':
              Br(r), ks(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Ro)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = gc(n)),
            e === 'http://www.w3.org/1999/xhtml'
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
            (e[Ke] = t),
            (e[vr] = r),
            Wf(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = hl(n, r)), n)) {
              case 'dialog':
                I('cancel', e), I('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                I('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Gn.length; o++) I(Gn[o], e)
                o = r
                break
              case 'source':
                I('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                I('error', e), I('load', e), (o = r)
                break
              case 'details':
                I('toggle', e), (o = r)
                break
              case 'input':
                Ss(e, r), (o = sl(e, r)), I('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = V({}, r, { value: void 0 })),
                  I('invalid', e)
                break
              case 'textarea':
                Es(e, r), (o = fl(e, r)), I('invalid', e)
                break
              default:
                o = r
            }
            pl(n, o), (u = o)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i]
                i === 'style'
                  ? _c(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && wc(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && sr(e, s)
                        : typeof s == 'number' && sr(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (ur.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && I('scroll', e)
                          : s != null && du(e, i, s, l))
              }
            switch (n) {
              case 'input':
                Br(e), _s(e, r, !1)
                break
              case 'textarea':
                Br(e), ks(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Pt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && hn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Ro)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return le(t), null
    case 6:
      if (e && t.stateNode != null) Kf(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166))
        if (((n = Ht(wr.current)), Ht(Xe.current), Yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (i = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xr(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r)
      }
      return le(t), null
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128))
          af(), En(), (t.flags |= 98560), (i = !1)
        else if (((i = Yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(_(317))
            i[Ke] = t
          } else En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          le(t), (i = !1)
        } else Ie !== null && (Gl(Ie), (Ie = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || B.current & 1 ? J === 0 && (J = 3) : Gu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null)
    case 4:
      return Cn(), $l(e, t), e === null && mr(t.stateNode.containerInfo), le(t), null
    case 10:
      return zu(t.type._context), le(t), null
    case 17:
      return ye(t.type) && To(), le(t), null
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Hn(i, !1)
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Fo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Hn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
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
                return M(B, (B.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            q() > Nn &&
            ((t.flags |= 128), (r = !0), Hn(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Fo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !$)
            )
              return le(t), null
          } else
            2 * q() - i.renderingStartTime > Nn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = q()),
          (t.sibling = null),
          (n = B.current),
          M(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null)
    case 22:
    case 23:
      return (
        qu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(_(156, t.tag))
}
function mm(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && To(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Cn(),
        U(me),
        U(se),
        Fu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Au(t), null
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340))
        En()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return U(B), null
    case 4:
      return Cn(), null
    case 10:
      return zu(t.type._context), null
    case 22:
    case 23:
      return qu(), null
    case 24:
      return null
    default:
      return null
  }
}
var br = !1,
  ue = !1,
  ym = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null
function dn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        W(e, t, r)
      }
    else n.current = null
}
function Bl(e, t, n) {
  try {
    n()
  } catch (r) {
    W(e, t, r)
  }
}
var da = !1
function vm(e, t) {
  if (((Cl = xo), (e = Xc()), xu(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            c = 0,
            f = e,
            m = null
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (u = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (m = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (m === n && ++a === o && (u = l),
                m === i && ++c === r && (s = l),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = m), (m = f.parentNode)
            }
            f = g
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (xl = { focusedElem: e, selectionRange: n }, xo = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e)
    else
      for (; C !== null; ) {
        t = C
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Fe(t.type, v),
                      E
                    )
                  p.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var h = t.stateNode.containerInfo
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(_(163))
            }
        } catch (S) {
          W(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (C = e)
          break
        }
        C = t.return
      }
  return (y = da), (da = !1), y
}
function nr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Bl(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function oi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Hl(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function qf(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), qf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[vr], delete t[Rl], delete t[bh], delete t[em])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Gf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function pa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gf(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Vl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ro))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vl(e, t, n), e = e.sibling; e !== null; ) Vl(e, t, n), (e = e.sibling)
}
function Wl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling)
}
var ne = null,
  Me = !1
function ct(e, t, n) {
  for (n = n.child; n !== null; ) Xf(e, t, n), (n = n.sibling)
}
function Xf(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == 'function')
    try {
      Ge.onCommitFiberUnmount(Yo, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ue || dn(n, t)
    case 6:
      var r = ne,
        o = Me
      ;(ne = null),
        ct(e, t, n),
        (ne = r),
        (Me = o),
        ne !== null &&
          (Me
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode))
      break
    case 18:
      ne !== null &&
        (Me
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8 ? $i(e.parentNode, n) : e.nodeType === 1 && $i(e, n),
            dr(e))
          : $i(ne, n.stateNode))
      break
    case 4:
      ;(r = ne),
        (o = Me),
        (ne = n.stateNode.containerInfo),
        (Me = !0),
        ct(e, t, n),
        (ne = r),
        (Me = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next
        do {
          var i = o,
            l = i.destroy
          ;(i = i.tag), l !== void 0 && (i & 2 || i & 4) && Bl(n, t, l), (o = o.next)
        } while (o !== r)
      }
      ct(e, t, n)
      break
    case 1:
      if (
        !ue &&
        (dn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          W(n, t, u)
        }
      ct(e, t, n)
      break
    case 21:
      ct(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ct(e, t, n), (ue = r))
        : ct(e, t, n)
      break
    default:
      ct(e, t, n)
  }
}
function ha(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new ym()),
      t.forEach(function (r) {
        var o = Nm.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Ae(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          l = t,
          u = l
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(ne = u.stateNode), (Me = !1)
              break e
            case 3:
              ;(ne = u.stateNode.containerInfo), (Me = !0)
              break e
            case 4:
              ;(ne = u.stateNode.containerInfo), (Me = !0)
              break e
          }
          u = u.return
        }
        if (ne === null) throw Error(_(160))
        Xf(i, l, o), (ne = null), (Me = !1)
        var s = o.alternate
        s !== null && (s.return = null), (o.return = null)
      } catch (a) {
        W(o, t, a)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yf(t, e), (t = t.sibling)
}
function Yf(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), We(e), r & 4)) {
        try {
          nr(3, e, e.return), oi(3, e)
        } catch (v) {
          W(e, e.return, v)
        }
        try {
          nr(5, e, e.return)
        } catch (v) {
          W(e, e.return, v)
        }
      }
      break
    case 1:
      Ae(t, e), We(e), r & 512 && n !== null && dn(n, n.return)
      break
    case 5:
      if ((Ae(t, e), We(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          sr(o, '')
        } catch (v) {
          W(e, e.return, v)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && yc(o, i), hl(u, l)
            var a = hl(u, i)
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1]
              c === 'style'
                ? _c(o, f)
                : c === 'dangerouslySetInnerHTML'
                  ? wc(o, f)
                  : c === 'children'
                    ? sr(o, f)
                    : du(o, c, f, a)
            }
            switch (u) {
              case 'input':
                al(o, i)
                break
              case 'textarea':
                vc(o, i)
                break
              case 'select':
                var m = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var g = i.value
                g != null
                  ? hn(o, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? hn(o, !!i.multiple, i.defaultValue, !0)
                      : hn(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[vr] = i
          } catch (v) {
            W(e, e.return, v)
          }
      }
      break
    case 6:
      if ((Ae(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (v) {
          W(e, e.return, v)
        }
      }
      break
    case 3:
      if ((Ae(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          dr(t.containerInfo)
        } catch (v) {
          W(e, e.return, v)
        }
      break
    case 4:
      Ae(t, e), We(e)
      break
    case 13:
      Ae(t, e),
        We(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Qu = q())),
        r & 4 && ha(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || c), Ae(t, e), (ue = a)) : Ae(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (C = e, c = e.child; c !== null; ) {
            for (f = C = c; C !== null; ) {
              switch (((m = C), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nr(4, m, m.return)
                  break
                case 1:
                  dn(m, m.return)
                  var y = m.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = m), (n = m.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
                    } catch (v) {
                      W(r, n, v)
                    }
                  }
                  break
                case 5:
                  dn(m, m.return)
                  break
                case 22:
                  if (m.memoizedState !== null) {
                    ya(f)
                    continue
                  }
              }
              g !== null ? ((g.return = m), (C = g)) : ya(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(o = f.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (u.style.display = Sc('display', l)))
              } catch (v) {
                W(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps
              } catch (v) {
                W(e, e.return, v)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Ae(t, e), We(e), r & 4 && ha(e)
      break
    case 21:
      break
    default:
      Ae(t, e), We(e)
  }
}
function We(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gf(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(_(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (sr(o, ''), (r.flags &= -33))
          var i = pa(e)
          Wl(e, i, o)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = pa(e)
          Vl(e, u, l)
          break
        default:
          throw Error(_(161))
      }
    } catch (s) {
      W(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function gm(e, t, n) {
  ;(C = e), Jf(e)
}
function Jf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var o = C,
      i = o.child
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || br
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || ue
        u = br
        var a = ue
        if (((br = l), (ue = s) && !a))
          for (C = o; C !== null; )
            (l = C),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? va(o)
                : s !== null
                  ? ((s.return = l), (C = s))
                  : va(o)
        for (; i !== null; ) (C = i), Jf(i), (i = i.sibling)
        ;(C = o), (br = u), (ue = a)
      }
      ma(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (C = i)) : ma(e)
  }
}
function ma(e) {
  for (; C !== null; ) {
    var t = C
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || oi(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && Zs(t, i, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Zs(t, l, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate
                if (a !== null) {
                  var c = a.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && dr(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(_(163))
          }
        ue || (t.flags & 512 && Hl(t))
      } catch (m) {
        W(t, t.return, m)
      }
    }
    if (t === e) {
      C = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (C = n)
      break
    }
    C = t.return
  }
}
function ya(e) {
  for (; C !== null; ) {
    var t = C
    if (t === e) {
      C = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (C = n)
      break
    }
    C = t.return
  }
}
function va(e) {
  for (; C !== null; ) {
    var t = C
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            oi(4, t)
          } catch (s) {
            W(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              W(t, o, s)
            }
          }
          var i = t.return
          try {
            Hl(t)
          } catch (s) {
            W(t, i, s)
          }
          break
        case 5:
          var l = t.return
          try {
            Hl(t)
          } catch (s) {
            W(t, l, s)
          }
      }
    } catch (s) {
      W(t, t.return, s)
    }
    if (t === e) {
      C = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (C = u)
      break
    }
    C = t.return
  }
}
var wm = Math.ceil,
  Uo = at.ReactCurrentDispatcher,
  Vu = at.ReactCurrentOwner,
  Oe = at.ReactCurrentBatchConfig,
  A = 0,
  ee = null,
  G = null,
  re = 0,
  ge = 0,
  pn = Lt(0),
  J = 0,
  kr = null,
  Gt = 0,
  ii = 0,
  Wu = 0,
  rr = null,
  pe = null,
  Qu = 0,
  Nn = 1 / 0,
  Je = null,
  $o = !1,
  Ql = null,
  Ct = null,
  eo = !1,
  gt = null,
  Bo = 0,
  or = 0,
  Kl = null,
  ho = -1,
  mo = 0
function ce() {
  return A & 6 ? q() : ho !== -1 ? ho : (ho = q())
}
function xt(e) {
  return e.mode & 1
    ? A & 2 && re !== 0
      ? re & -re
      : nm.transition !== null
        ? (mo === 0 && (mo = jc()), mo)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $c(e.type))),
          e)
    : 1
}
function Be(e, t, n, r) {
  if (50 < or) throw ((or = 0), (Kl = null), Error(_(185)))
  zr(e, n, r),
    (!(A & 2) || e !== ee) &&
      (e === ee && (!(A & 2) && (ii |= n), J === 4 && yt(e, re)),
      ve(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((Nn = q() + 500), ti && jt()))
}
function ve(e, t) {
  var n = e.callbackNode
  nh(e, t)
  var r = Co(e, e === ee ? re : 0)
  if (r === 0) n !== null && Ns(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ns(n), t === 1))
      e.tag === 0 ? tm(ga.bind(null, e)) : lf(ga.bind(null, e)),
        Jh(function () {
          !(A & 6) && jt()
        }),
        (n = null)
    else {
      switch (Dc(r)) {
        case 1:
          n = vu
          break
        case 4:
          n = zc
          break
        case 16:
          n = ko
          break
        case 536870912:
          n = Lc
          break
        default:
          n = ko
      }
      n = id(n, Zf.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Zf(e, t) {
  if (((ho = -1), (mo = 0), A & 6)) throw Error(_(327))
  var n = e.callbackNode
  if (wn() && e.callbackNode !== n) return null
  var r = Co(e, e === ee ? re : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Ho(e, r)
  else {
    t = r
    var o = A
    A |= 2
    var i = ed()
    ;(ee !== e || re !== t) && ((Je = null), (Nn = q() + 500), Vt(e, t))
    do
      try {
        Em()
        break
      } catch (u) {
        bf(e, u)
      }
    while (!0)
    Ou(),
      (Uo.current = i),
      (A = o),
      G !== null ? (t = 0) : ((ee = null), (re = 0), (t = J))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = wl(e)), o !== 0 && ((r = o), (t = ql(e, o)))), t === 1))
      throw ((n = kr), Vt(e, 0), yt(e, r), ve(e, q()), n)
    if (t === 6) yt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Sm(o) &&
          ((t = Ho(e, r)),
          t === 2 && ((i = wl(e)), i !== 0 && ((r = i), (t = ql(e, i)))),
          t === 1))
      )
        throw ((n = kr), Vt(e, 0), yt(e, r), ve(e, q()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345))
        case 2:
          It(e, pe, Je)
          break
        case 3:
          if ((yt(e, r), (r & 130023424) === r && ((t = Qu + 500 - q()), 10 < t))) {
            if (Co(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Pl(It.bind(null, e, pe, Je), t)
            break
          }
          It(e, pe, Je)
          break
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - $e(r)
            ;(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i)
          }
          if (
            ((r = o),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * wm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pl(It.bind(null, e, pe, Je), r)
            break
          }
          It(e, pe, Je)
          break
        case 5:
          It(e, pe, Je)
          break
        default:
          throw Error(_(329))
      }
    }
  }
  return ve(e, q()), e.callbackNode === n ? Zf.bind(null, e) : null
}
function ql(e, t) {
  var n = rr
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = Ho(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && Gl(t)),
    e
  )
}
function Gl(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e)
}
function Sm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Ve(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function yt(e, t) {
  for (
    t &= ~Wu, t &= ~ii, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function ga(e) {
  if (A & 6) throw Error(_(327))
  wn()
  var t = Co(e, 0)
  if (!(t & 1)) return ve(e, q()), null
  var n = Ho(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = wl(e)
    r !== 0 && ((t = r), (n = ql(e, r)))
  }
  if (n === 1) throw ((n = kr), Vt(e, 0), yt(e, t), ve(e, q()), n)
  if (n === 6) throw Error(_(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, pe, Je),
    ve(e, q()),
    null
  )
}
function Ku(e, t) {
  var n = A
  A |= 1
  try {
    return e(t)
  } finally {
    ;(A = n), A === 0 && ((Nn = q() + 500), ti && jt())
  }
}
function Xt(e) {
  gt !== null && gt.tag === 0 && !(A & 6) && wn()
  var t = A
  A |= 1
  var n = Oe.transition,
    r = F
  try {
    if (((Oe.transition = null), (F = 1), e)) return e()
  } finally {
    ;(F = r), (Oe.transition = n), (A = t), !(A & 6) && jt()
  }
}
function qu() {
  ;(ge = pn.current), U(pn)
}
function Vt(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Yh(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n
      switch ((Pu(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && To()
          break
        case 3:
          Cn(), U(me), U(se), Fu()
          break
        case 5:
          Au(r)
          break
        case 4:
          Cn()
          break
        case 13:
          U(B)
          break
        case 19:
          U(B)
          break
        case 10:
          zu(r.type._context)
          break
        case 22:
        case 23:
          qu()
      }
      n = n.return
    }
  if (
    ((ee = e),
    (G = e = Nt(e.current, null)),
    (re = ge = t),
    (J = 0),
    (kr = null),
    (Wu = ii = Gt = 0),
    (pe = rr = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var l = i.next
          ;(i.next = o), (r.next = l)
        }
        n.pending = r
      }
    Bt = null
  }
  return e
}
function bf(e, t) {
  do {
    var n = G
    try {
      if ((Ou(), (co.current = Io), Mo)) {
        for (var r = H.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Mo = !1
      }
      if (
        ((qt = 0),
        (b = Y = H = null),
        (tr = !1),
        (Sr = 0),
        (Vu.current = null),
        n === null || n.return === null)
      ) {
        ;(J = 1), (kr = t), (G = null)
        break
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t
        if (
          ((t = re),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            c = u,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = ia(l)
          if (g !== null) {
            ;(g.flags &= -257),
              la(g, l, u, i, t),
              g.mode & 1 && oa(i, a, t),
              (t = g),
              (s = a)
            var y = t.updateQueue
            if (y === null) {
              var v = new Set()
              v.add(s), (t.updateQueue = v)
            } else y.add(s)
            break e
          } else {
            if (!(t & 1)) {
              oa(i, a, t), Gu()
              break e
            }
            s = Error(_(426))
          }
        } else if ($ && u.mode & 1) {
          var E = ia(l)
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), la(E, l, u, i, t), Ru(xn(s, u))
            break e
          }
        }
        ;(i = s = xn(s, u)),
          J !== 4 && (J = 2),
          rr === null ? (rr = [i]) : rr.push(i),
          (i = l)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var p = Ff(i, s, t)
              Js(i, p)
              break e
            case 1:
              u = s
              var d = i.type,
                h = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (Ct === null || !Ct.has(h))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var S = Mf(i, u, t)
                Js(i, S)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      nd(n)
    } catch (k) {
      ;(t = k), G === n && n !== null && (G = n = n.return)
      continue
    }
    break
  } while (!0)
}
function ed() {
  var e = Uo.current
  return (Uo.current = Io), e === null ? Io : e
}
function Gu() {
  ;(J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Gt & 268435455) && !(ii & 268435455)) || yt(ee, re)
}
function Ho(e, t) {
  var n = A
  A |= 2
  var r = ed()
  ;(ee !== e || re !== t) && ((Je = null), Vt(e, t))
  do
    try {
      _m()
      break
    } catch (o) {
      bf(e, o)
    }
  while (!0)
  if ((Ou(), (A = n), (Uo.current = r), G !== null)) throw Error(_(261))
  return (ee = null), (re = 0), J
}
function _m() {
  for (; G !== null; ) td(G)
}
function Em() {
  for (; G !== null && !qp(); ) td(G)
}
function td(e) {
  var t = od(e.alternate, e, ge)
  ;(e.memoizedProps = e.pendingProps), t === null ? nd(e) : (G = t), (Vu.current = null)
}
function nd(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mm(n, t)), n !== null)) {
        ;(n.flags &= 32767), (G = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(J = 6), (G = null)
        return
      }
    } else if (((n = hm(n, t, ge)), n !== null)) {
      G = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      G = t
      return
    }
    G = t = e
  } while (t !== null)
  J === 0 && (J = 5)
}
function It(e, t, n) {
  var r = F,
    o = Oe.transition
  try {
    ;(Oe.transition = null), (F = 1), km(e, t, n, r)
  } finally {
    ;(Oe.transition = o), (F = r)
  }
  return null
}
function km(e, t, n, r) {
  do wn()
  while (gt !== null)
  if (A & 6) throw Error(_(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (rh(e, i),
    e === ee && ((G = ee = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      eo ||
      ((eo = !0),
      id(ko, function () {
        return wn(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Oe.transition), (Oe.transition = null)
    var l = F
    F = 1
    var u = A
    ;(A |= 4),
      (Vu.current = null),
      vm(e, n),
      Yf(n, e),
      Vh(xl),
      (xo = !!Cl),
      (xl = Cl = null),
      (e.current = n),
      gm(n),
      Gp(),
      (A = u),
      (F = l),
      (Oe.transition = i)
  } else e.current = n
  if (
    (eo && ((eo = !1), (gt = e), (Bo = o)),
    (i = e.pendingLanes),
    i === 0 && (Ct = null),
    Jp(n.stateNode),
    ve(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if ($o) throw (($o = !1), (e = Ql), (Ql = null), e)
  return (
    Bo & 1 && e.tag !== 0 && wn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Kl ? or++ : ((or = 0), (Kl = e))) : (or = 0),
    jt(),
    null
  )
}
function wn() {
  if (gt !== null) {
    var e = Dc(Bo),
      t = Oe.transition,
      n = F
    try {
      if (((Oe.transition = null), (F = 16 > e ? 16 : e), gt === null)) var r = !1
      else {
        if (((e = gt), (gt = null), (Bo = 0), A & 6)) throw Error(_(331))
        var o = A
        for (A |= 4, C = e.current; C !== null; ) {
          var i = C,
            l = i.child
          if (C.flags & 16) {
            var u = i.deletions
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s]
                for (C = a; C !== null; ) {
                  var c = C
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, c, i)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (C = f)
                  else
                    for (; C !== null; ) {
                      c = C
                      var m = c.sibling,
                        g = c.return
                      if ((qf(c), c === a)) {
                        C = null
                        break
                      }
                      if (m !== null) {
                        ;(m.return = g), (C = m)
                        break
                      }
                      C = g
                    }
                }
              }
              var y = i.alternate
              if (y !== null) {
                var v = y.child
                if (v !== null) {
                  y.child = null
                  do {
                    var E = v.sibling
                    ;(v.sibling = null), (v = E)
                  } while (v !== null)
                }
              }
              C = i
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (C = l)
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nr(9, i, i.return)
                }
              var p = i.sibling
              if (p !== null) {
                ;(p.return = i.return), (C = p)
                break e
              }
              C = i.return
            }
        }
        var d = e.current
        for (C = d; C !== null; ) {
          l = C
          var h = l.child
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (C = h)
          else
            e: for (l = d; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oi(9, u)
                  }
                } catch (k) {
                  W(u, u.return, k)
                }
              if (u === l) {
                C = null
                break e
              }
              var S = u.sibling
              if (S !== null) {
                ;(S.return = u.return), (C = S)
                break e
              }
              C = u.return
            }
        }
        if (((A = o), jt(), Ge && typeof Ge.onPostCommitFiberRoot == 'function'))
          try {
            Ge.onPostCommitFiberRoot(Yo, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(F = n), (Oe.transition = t)
    }
  }
  return !1
}
function wa(e, t, n) {
  ;(t = xn(n, t)),
    (t = Ff(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = ce()),
    e !== null && (zr(e, 1, t), ve(e, t))
}
function W(e, t, n) {
  if (e.tag === 3) wa(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Ct === null || !Ct.has(r)))
        ) {
          ;(e = xn(n, e)),
            (e = Mf(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = ce()),
            t !== null && (zr(t, 1, e), ve(t, e))
          break
        }
      }
      t = t.return
    }
}
function Cm(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > q() - Qu)
        ? Vt(e, 0)
        : (Wu |= n)),
    ve(e, t)
}
function rd(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304)) : (t = 1))
  var n = ce()
  ;(e = lt(e, t)), e !== null && (zr(e, t, n), ve(e, n))
}
function xm(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), rd(e, n)
}
function Nm(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(_(314))
  }
  r !== null && r.delete(t), rd(e, n)
}
var od
od = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), pm(e, t, n)
      he = !!(e.flags & 131072)
    }
  else (he = !1), $ && t.flags & 1048576 && uf(t, Lo, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      po(e, t), (e = t.pendingProps)
      var o = _n(t, se.current)
      gn(t, n), (o = Iu(null, t, r, e, o, n))
      var i = Uu()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), Oo(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            ju(t),
            (o.updater = ni),
            (t.stateNode = o),
            (o._reactInternals = t),
            Dl(t, r, e, n),
            (t = Ml(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Nu(t), ae(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (po(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Rm(r)),
          (e = Fe(r, e)),
          o)
        ) {
          case 0:
            t = Fl(null, t, r, e, n)
            break e
          case 1:
            t = aa(null, t, r, e, n)
            break e
          case 11:
            t = ua(null, t, r, e, n)
            break e
          case 14:
            t = sa(null, t, r, Fe(r.type, e), n)
            break e
        }
        throw Error(_(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        Fl(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        aa(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((Bf(t), e === null)) throw Error(_(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          ff(e, t),
          Ao(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = xn(Error(_(423)), t)), (t = ca(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = xn(Error(_(424)), t)), (t = ca(e, t, r, n, o))
            break e
          } else
            for (
              we = Et(t.stateNode.containerInfo.firstChild),
                _e = t,
                $ = !0,
                Ie = null,
                n = mf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((En(), r === o)) {
            t = ut(e, t, n)
            break e
          }
          ae(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        yf(t),
        e === null && zl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Nl(r, o) ? (l = null) : i !== null && Nl(r, i) && (t.flags |= 32),
        $f(e, t),
        ae(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && zl(t), null
    case 13:
      return Hf(e, t, n)
    case 4:
      return (
        Du(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        ua(e, t, r, o, n)
      )
    case 7:
      return ae(e, t, t.pendingProps, n), t.child
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          M(jo, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ve(i.value, l)) {
            if (i.children === o.children && !me.current) {
              t = ut(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies
              if (u !== null) {
                l = i.child
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ;(s = tt(-1, n & -n)), (s.tag = 2)
                      var a = i.updateQueue
                      if (a !== null) {
                        a = a.shared
                        var c = a.pending
                        c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)),
                          (a.pending = s)
                      }
                    }
                    ;(i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ll(i.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(_(341))
                ;(l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  Ll(l, n, t),
                  (l = i.sibling)
              } else l = i.child
              if (l !== null) l.return = i
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((i = l.sibling), i !== null)) {
                    ;(i.return = l.return), (l = i)
                    break
                  }
                  l = l.return
                }
              i = l
            }
        ae(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        gn(t, n),
        (o = Le(o)),
        (r = r(o)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type), (o = Fe(r, t.pendingProps)), (o = Fe(r.type, o)), sa(e, t, r, o, n)
      )
    case 15:
      return If(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        po(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), Oo(t)) : (e = !1),
        gn(t, n),
        pf(t, r, o),
        Dl(t, r, o, n),
        Ml(null, t, r, !0, e, n)
      )
    case 19:
      return Vf(e, t, n)
    case 22:
      return Uf(e, t, n)
  }
  throw Error(_(156, t.tag))
}
function id(e, t) {
  return Oc(e, t)
}
function Pm(e, t, n, r) {
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
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Te(e, t, n, r) {
  return new Pm(e, t, n, r)
}
function Xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Rm(e) {
  if (typeof e == 'function') return Xu(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11
    if (e === mu) return 14
  }
  return 2
}
function Nt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
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
function yo(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) Xu(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case nn:
        return Wt(n.children, o, i, t)
      case pu:
        ;(l = 8), (o |= 8)
        break
      case ol:
        return (e = Te(12, n, t, o | 2)), (e.elementType = ol), (e.lanes = i), e
      case il:
        return (e = Te(13, n, t, o)), (e.elementType = il), (e.lanes = i), e
      case ll:
        return (e = Te(19, n, t, o)), (e.elementType = ll), (e.lanes = i), e
      case pc:
        return li(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case fc:
              l = 10
              break e
            case dc:
              l = 9
              break e
            case hu:
              l = 11
              break e
            case mu:
              l = 14
              break e
            case pt:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(_(130, e == null ? e : typeof e, ''))
    }
  return (t = Te(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
}
function Wt(e, t, n, r) {
  return (e = Te(7, e, r, t)), (e.lanes = n), e
}
function li(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Gi(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e
}
function Xi(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function Tm(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ti(0)),
    (this.expirationTimes = Ti(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ti(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Yu(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new Tm(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    ju(i),
    e
  )
}
function Om(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: tn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function ld(e) {
  if (!e) return Rt
  e = e._reactInternals
  e: {
    if (bt(e) !== e || e.tag !== 1) throw Error(_(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(_(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (ye(n)) return of(e, n, t)
  }
  return t
}
function ud(e, t, n, r, o, i, l, u, s) {
  return (
    (e = Yu(n, r, !0, e, o, i, l, u, s)),
    (e.context = ld(null)),
    (n = e.current),
    (r = ce()),
    (o = xt(n)),
    (i = tt(r, o)),
    (i.callback = t ?? null),
    kt(n, i, o),
    (e.current.lanes = o),
    zr(e, o, r),
    ve(e, r),
    e
  )
}
function ui(e, t, n, r) {
  var o = t.current,
    i = ce(),
    l = xt(o)
  return (
    (n = ld(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(o, t, l)),
    e !== null && (Be(e, o, l, i), ao(e, o, l)),
    l
  )
}
function Vo(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Sa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ju(e, t) {
  Sa(e, t), (e = e.alternate) && Sa(e, t)
}
function zm() {
  return null
}
var sd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Zu(e) {
  this._internalRoot = e
}
si.prototype.render = Zu.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(_(409))
  ui(e, t, null, null)
}
si.prototype.unmount = Zu.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Xt(function () {
      ui(null, e, null, null)
    }),
      (t[it] = null)
  }
}
function si(e) {
  this._internalRoot = e
}
si.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Mc()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++);
    mt.splice(n, 0, e), n === 0 && Uc(e)
  }
}
function bu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function _a() {}
function Lm(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var a = Vo(l)
        i.call(a)
      }
    }
    var l = ud(t, r, e, 0, null, !1, !1, '', _a)
    return (
      (e._reactRootContainer = l),
      (e[it] = l.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      l
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var a = Vo(s)
      u.call(a)
    }
  }
  var s = Yu(e, 0, !1, null, null, !1, !1, '', _a)
  return (
    (e._reactRootContainer = s),
    (e[it] = s.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      ui(t, s, n, r)
    }),
    s
  )
}
function ci(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i
    if (typeof o == 'function') {
      var u = o
      o = function () {
        var s = Vo(l)
        u.call(s)
      }
    }
    ui(t, l, e, o)
  } else l = Lm(n, t, e, o, r)
  return Vo(l)
}
Ac = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = qn(t.pendingLanes)
        n !== 0 && (gu(t, n | 1), ve(t, q()), !(A & 6) && ((Nn = q() + 500), jt()))
      }
      break
    case 13:
      Xt(function () {
        var r = lt(e, 1)
        if (r !== null) {
          var o = ce()
          Be(r, e, 1, o)
        }
      }),
        Ju(e, 1)
  }
}
wu = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728)
    if (t !== null) {
      var n = ce()
      Be(t, e, 134217728, n)
    }
    Ju(e, 134217728)
  }
}
Fc = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = lt(e, t)
    if (n !== null) {
      var r = ce()
      Be(n, e, t, r)
    }
    Ju(e, t)
  }
}
Mc = function () {
  return F
}
Ic = function (e, t) {
  var n = F
  try {
    return (F = e), t()
  } finally {
    F = n
  }
}
yl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((al(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = ei(r)
            if (!o) throw Error(_(90))
            mc(r), al(r, o)
          }
        }
      }
      break
    case 'textarea':
      vc(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && hn(e, !!n.multiple, t, !1)
  }
}
Cc = Ku
xc = Xt
var jm = { usingClientEntryPoint: !1, Events: [jr, un, ei, Ec, kc, Ku] },
  Vn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  Dm = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: at.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || zm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var to = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!to.isDisabled && to.supportsFiber)
    try {
      ;(Yo = to.inject(Dm)), (Ge = to)
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!bu(t)) throw Error(_(200))
  return Om(e, t, null, n)
}
xe.createRoot = function (e, t) {
  if (!bu(e)) throw Error(_(299))
  var n = !1,
    r = '',
    o = sd
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Yu(e, 1, !1, null, null, n, !1, r, o)),
    (e[it] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new Zu(t)
  )
}
xe.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(_(188))
      : ((e = Object.keys(e).join(',')), Error(_(268, e)))
  return (e = Rc(t)), (e = e === null ? null : e.stateNode), e
}
xe.flushSync = function (e) {
  return Xt(e)
}
xe.hydrate = function (e, t, n) {
  if (!ai(t)) throw Error(_(200))
  return ci(null, e, t, !0, n)
}
xe.hydrateRoot = function (e, t, n) {
  if (!bu(e)) throw Error(_(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = sd
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = ud(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[it] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new si(t)
}
xe.render = function (e, t, n) {
  if (!ai(t)) throw Error(_(200))
  return ci(null, e, t, !1, n)
}
xe.unmountComponentAtNode = function (e) {
  if (!ai(e)) throw Error(_(40))
  return e._reactRootContainer
    ? (Xt(function () {
        ci(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[it] = null)
        })
      }),
      !0)
    : !1
}
xe.unstable_batchedUpdates = Ku
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ai(n)) throw Error(_(200))
  if (e == null || e._reactInternals === void 0) throw Error(_(38))
  return ci(e, t, n, !1, r)
}
xe.version = '18.2.0-next-9e3b772b8-20220608'
function ad() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)
    } catch (e) {
      console.error(e)
    }
}
ad(), (lc.exports = xe)
var cd = lc.exports
function Am(e) {
  e()
}
var fd = Am,
  Fm = (e) => (fd = e),
  Mm = () => fd,
  Se = 'default' in ys ? nc : ys,
  Ea = Symbol.for('react-redux-context'),
  ka = typeof globalThis < 'u' ? globalThis : {}
function Im() {
  if (!Se.createContext) return {}
  const e = ka[Ea] ?? (ka[Ea] = new Map())
  let t = e.get(Se.createContext)
  return t || ((t = Se.createContext(null)), e.set(Se.createContext, t)), t
}
var Tt = Im(),
  Um = () => {
    throw new Error('uSES not initialized!')
  }
function es(e = Tt) {
  return function () {
    return Se.useContext(e)
  }
}
var dd = es(),
  pd = Um,
  $m = (e) => {
    pd = e
  },
  Bm = (e, t) => e === t
function Hm(e = Tt) {
  const t = e === Tt ? dd : es(e)
  return function (r, o = {}) {
    const { equalityFn: i = Bm, devModeChecks: l = {} } =
        typeof o == 'function' ? { equalityFn: o } : o,
      {
        store: u,
        subscription: s,
        getServerState: a,
        stabilityCheck: c,
        identityFunctionCheck: f
      } = t()
    Se.useRef(!0)
    const m = Se.useCallback(
        {
          [r.name](y) {
            return r(y)
          }
        }[r.name],
        [r, c, l.stabilityCheck]
      ),
      g = pd(s.addNestedSub, u.getState, a || u.getState, m, i)
    return Se.useDebugValue(g), g
  }
}
var Yt = Hm()
function Vm() {
  const e = Mm()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let r = t
        for (; r; ) r.callback(), (r = r.next)
      })
    },
    get() {
      let r = [],
        o = t
      for (; o; ) r.push(o), (o = o.next)
      return r
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n })
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next))
        }
      )
    }
  }
}
var Ca = { notify() {}, get: () => [] }
function Wm(e, t) {
  let n,
    r = Ca,
    o = 0,
    i = !1
  function l(v) {
    c()
    const E = r.subscribe(v)
    let p = !1
    return () => {
      p || ((p = !0), E(), f())
    }
  }
  function u() {
    r.notify()
  }
  function s() {
    y.onStateChange && y.onStateChange()
  }
  function a() {
    return i
  }
  function c() {
    o++, n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Vm()))
  }
  function f() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Ca))
  }
  function m() {
    i || ((i = !0), c())
  }
  function g() {
    i && ((i = !1), f())
  }
  const y = {
    addNestedSub: l,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: m,
    tryUnsubscribe: g,
    getListeners: () => r
  }
  return y
}
var Qm =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Km = Qm ? Se.useLayoutEffect : Se.useEffect
function qm({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = 'once',
  identityFunctionCheck: i = 'once'
}) {
  const l = Se.useMemo(() => {
      const a = Wm(e)
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i
      }
    }, [e, r, o, i]),
    u = Se.useMemo(() => e.getState(), [e])
  Km(() => {
    const { subscription: a } = l
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      u !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0)
      }
    )
  }, [l, u])
  const s = t || Tt
  return Se.createElement(s.Provider, { value: l }, n)
}
var Gm = qm
function hd(e = Tt) {
  const t = e === Tt ? dd : es(e)
  return function () {
    const { store: r } = t()
    return r
  }
}
var Xm = hd()
function Ym(e = Tt) {
  const t = e === Tt ? Xm : hd(e)
  return function () {
    return t().dispatch
  }
}
var fi = Ym()
$m(zp.useSyncExternalStoreWithSelector)
Fm(cd.unstable_batchedUpdates)
const Jm = '_base_rvsh7_1',
  Zm = '_gradient_rvsh7_1',
  bm = '_foodanddrink_rvsh7_23',
  ey = '_geography_rvsh7_29',
  ty = '_generalknowledge_rvsh7_35',
  ny = '_history_rvsh7_41',
  ry = '_artandliterature_rvsh7_47',
  oy = '_movies_rvsh7_53',
  iy = '_music_rvsh7_59',
  ly = '_science_rvsh7_65',
  uy = '_societyandculture_rvsh7_71',
  sy = '_sportandleisure_rvsh7_77',
  ay = {
    base: Jm,
    gradient: Zm,
    foodanddrink: bm,
    geography: ey,
    generalknowledge: ty,
    history: ny,
    artandliterature: ry,
    movies: oy,
    music: iy,
    science: ly,
    societyandculture: uy,
    sportandleisure: sy
  },
  cy = '_base_pqebi_1',
  fy = '_appear_pqebi_1',
  dy = '_header_pqebi_9',
  py = '_questions_pqebi_40',
  hy = '_categories_pqebi_47',
  my = '_selected_pqebi_68',
  yy = '_play_pqebi_73',
  vy = '_forbidden_pqebi_78',
  Ft = {
    base: cy,
    appear: fy,
    header: dy,
    questions: py,
    categories: hy,
    selected: my,
    play: yy,
    forbidden: vy
  }
function Ln(e, t) {
  return t.map((r) => (r ? e[r] : '')).join(' ')
}
function te(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var gy = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  xa = gy,
  Yi = () => Math.random().toString(36).substring(7).split('').join('.'),
  wy = {
    INIT: `@@redux/INIT${Yi()}`,
    REPLACE: `@@redux/REPLACE${Yi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Yi()}`
  },
  Wo = wy
function ts(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function md(e, t, n) {
  if (typeof e != 'function') throw new Error(te(2))
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(te(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)), typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(te(1))
    return n(md)(e, t)
  }
  let r = e,
    o = t,
    i = new Map(),
    l = i,
    u = 0,
    s = !1
  function a() {
    l === i &&
      ((l = new Map()),
      i.forEach((E, p) => {
        l.set(p, E)
      }))
  }
  function c() {
    if (s) throw new Error(te(3))
    return o
  }
  function f(E) {
    if (typeof E != 'function') throw new Error(te(4))
    if (s) throw new Error(te(5))
    let p = !0
    a()
    const d = u++
    return (
      l.set(d, E),
      function () {
        if (p) {
          if (s) throw new Error(te(6))
          ;(p = !1), a(), l.delete(d), (i = null)
        }
      }
    )
  }
  function m(E) {
    if (!ts(E)) throw new Error(te(7))
    if (typeof E.type > 'u') throw new Error(te(8))
    if (typeof E.type != 'string') throw new Error(te(17))
    if (s) throw new Error(te(9))
    try {
      ;(s = !0), (o = r(o, E))
    } finally {
      s = !1
    }
    return (
      (i = l).forEach((d) => {
        d()
      }),
      E
    )
  }
  function g(E) {
    if (typeof E != 'function') throw new Error(te(10))
    ;(r = E), m({ type: Wo.REPLACE })
  }
  function y() {
    const E = f
    return {
      subscribe(p) {
        if (typeof p != 'object' || p === null) throw new Error(te(11))
        function d() {
          const S = p
          S.next && S.next(c())
        }
        return d(), { unsubscribe: E(d) }
      },
      [xa]() {
        return this
      }
    }
  }
  return (
    m({ type: Wo.INIT }),
    { dispatch: m, subscribe: f, getState: c, replaceReducer: g, [xa]: y }
  )
}
function Sy(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: Wo.INIT }) > 'u') throw new Error(te(12))
    if (typeof n(void 0, { type: Wo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(te(13))
  })
}
function _y(e) {
  const t = Object.keys(e),
    n = {}
  for (let i = 0; i < t.length; i++) {
    const l = t[i]
    typeof e[l] == 'function' && (n[l] = e[l])
  }
  const r = Object.keys(n)
  let o
  try {
    Sy(n)
  } catch (i) {
    o = i
  }
  return function (l = {}, u) {
    if (o) throw o
    let s = !1
    const a = {}
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        m = n[f],
        g = l[f],
        y = m(g, u)
      if (typeof y > 'u') throw (u && u.type, new Error(te(14)))
      ;(a[f] = y), (s = s || y !== g)
    }
    return (s = s || r.length !== Object.keys(l).length), s ? a : l
  }
}
function Qo(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r))
        )
}
function Ey(...e) {
  return (t) => (n, r) => {
    const o = t(n, r)
    let i = () => {
      throw new Error(te(15))
    }
    const l = { getState: o.getState, dispatch: (s, ...a) => i(s, ...a) },
      u = e.map((s) => s(l))
    return (i = Qo(...u)(o.dispatch)), { ...o, dispatch: i }
  }
}
function ky(e) {
  return ts(e) && 'type' in e && typeof e.type == 'string'
}
var yd = Symbol.for('immer-nothing'),
  Na = Symbol.for('immer-draftable'),
  ke = Symbol.for('immer-state')
function Ue(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Pn = Object.getPrototypeOf
function Ot(e) {
  return !!e && !!e[ke]
}
function st(e) {
  var t
  return e
    ? vd(e) ||
        Array.isArray(e) ||
        !!e[Na] ||
        !!((t = e.constructor) != null && t[Na]) ||
        pi(e) ||
        hi(e)
    : !1
}
var Cy = Object.prototype.constructor.toString()
function vd(e) {
  if (!e || typeof e != 'object') return !1
  const t = Pn(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object ? !0 : typeof n == 'function' && Function.toString.call(n) === Cy
}
function Cr(e, t) {
  di(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function di(e) {
  const t = e[ke]
  return t ? t.type_ : Array.isArray(e) ? 1 : pi(e) ? 2 : hi(e) ? 3 : 0
}
function Xl(e, t) {
  return di(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function gd(e, t, n) {
  const r = di(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function xy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function pi(e) {
  return e instanceof Map
}
function hi(e) {
  return e instanceof Set
}
function Ut(e) {
  return e.copy_ || e.base_
}
function Yl(e, t) {
  if (pi(e)) return new Map(e)
  if (hi(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  if (!t && vd(e)) return Pn(e) ? { ...e } : Object.assign(Object.create(null), e)
  const n = Object.getOwnPropertyDescriptors(e)
  delete n[ke]
  let r = Reflect.ownKeys(n)
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      l = n[i]
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (n[i] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[i] })
  }
  return Object.create(Pn(e), n)
}
function ns(e, t = !1) {
  return (
    mi(e) ||
      Ot(e) ||
      !st(e) ||
      (di(e) > 1 && (e.set = e.add = e.clear = e.delete = Ny),
      Object.freeze(e),
      t && Cr(e, (n, r) => ns(r, !0))),
    e
  )
}
function Ny() {
  Ue(2)
}
function mi(e) {
  return Object.isFrozen(e)
}
var Py = {}
function Jt(e) {
  const t = Py[e]
  return t || Ue(0, e), t
}
var xr
function wd() {
  return xr
}
function Ry(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 }
}
function Pa(e, t) {
  t &&
    (Jt('Patches'), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t))
}
function Jl(e) {
  Zl(e), e.drafts_.forEach(Ty), (e.drafts_ = null)
}
function Zl(e) {
  e === xr && (xr = e.parent_)
}
function Ra(e) {
  return (xr = Ry(xr, e))
}
function Ty(e) {
  const t = e[ke]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function Ta(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[ke].modified_ && (Jl(t), Ue(4)),
        st(e) && ((e = Ko(t, e)), t.parent_ || qo(t, e)),
        t.patches_ &&
          Jt('Patches').generateReplacementPatches_(
            n[ke].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ko(t, n, [])),
    Jl(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== yd ? e : void 0
  )
}
function Ko(e, t, n) {
  if (mi(t)) return t
  const r = t[ke]
  if (!r) return Cr(t, (o, i) => Oa(e, r, t, o, i, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return qo(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const o = r.copy_
    let i = o,
      l = !1
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      Cr(i, (u, s) => Oa(e, r, o, u, s, n, l)),
      qo(e, o, !1),
      n &&
        e.patches_ &&
        Jt('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function Oa(e, t, n, r, o, i, l) {
  if (Ot(o)) {
    const u = i && t && t.type_ !== 3 && !Xl(t.assigned_, r) ? i.concat(r) : void 0,
      s = Ko(e, o, u)
    if ((gd(n, r, s), Ot(s))) e.canAutoFreeze_ = !1
    else return
  } else l && n.add(o)
  if (st(o) && !mi(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    Ko(e, o), (!t || !t.scope_.parent_) && qo(e, o)
  }
}
function qo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ns(t, n)
}
function Oy(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : wd(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1
    }
  let o = r,
    i = rs
  n && ((o = [r]), (i = Nr))
  const { revoke: l, proxy: u } = Proxy.revocable(o, i)
  return (r.draft_ = u), (r.revoke_ = l), u
}
var rs = {
    get(e, t) {
      if (t === ke) return e
      const n = Ut(e)
      if (!Xl(n, t)) return zy(e, n, t)
      const r = n[t]
      return e.finalized_ || !st(r)
        ? r
        : r === Ji(e.base_, t)
          ? (Zi(e), (e.copy_[t] = eu(r, e)))
          : r
    },
    has(e, t) {
      return t in Ut(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(Ut(e))
    },
    set(e, t, n) {
      const r = Sd(Ut(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const o = Ji(Ut(e), t),
          i = o == null ? void 0 : o[ke]
        if (i && i.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (xy(n, o) && (n !== void 0 || Xl(e.base_, t))) return !0
        Zi(e), bl(e)
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      )
    },
    deleteProperty(e, t) {
      return (
        Ji(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Zi(e), bl(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Ut(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t]
        }
      )
    },
    defineProperty() {
      Ue(11)
    },
    getPrototypeOf(e) {
      return Pn(e.base_)
    },
    setPrototypeOf() {
      Ue(12)
    }
  },
  Nr = {}
Cr(rs, (e, t) => {
  Nr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
Nr.deleteProperty = function (e, t) {
  return Nr.set.call(this, e, t, void 0)
}
Nr.set = function (e, t, n) {
  return rs.set.call(this, e[0], t, n, e[0])
}
function Ji(e, t) {
  const n = e[ke]
  return (n ? Ut(n) : e)[t]
}
function zy(e, t, n) {
  var o
  const r = Sd(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (o = r.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0
}
function Sd(e, t) {
  if (!(t in e)) return
  let n = Pn(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = Pn(n)
  }
}
function bl(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && bl(e.parent_))
}
function Zi(e) {
  e.copy_ || (e.copy_ = Yl(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Ly = class {
  constructor(e) {
    ;(this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const i = n
          n = t
          const l = this
          return function (s = i, ...a) {
            return l.produce(s, (c) => n.call(this, c, ...a))
          }
        }
        typeof n != 'function' && Ue(6), r !== void 0 && typeof r != 'function' && Ue(7)
        let o
        if (st(t)) {
          const i = Ra(this),
            l = eu(t, void 0)
          let u = !0
          try {
            ;(o = n(l)), (u = !1)
          } finally {
            u ? Jl(i) : Zl(i)
          }
          return Pa(i, r), Ta(o, i)
        } else if (!t || typeof t != 'object') {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === yd && (o = void 0),
            this.autoFreeze_ && ns(o, !0),
            r)
          ) {
            const i = [],
              l = []
            Jt('Patches').generateReplacementPatches_(t, o, i, l), r(i, l)
          }
          return o
        } else Ue(1, t)
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function')
          return (l, ...u) => this.produceWithPatches(l, (s) => t(s, ...u))
        let r, o
        return [
          this.produce(t, n, (l, u) => {
            ;(r = l), (o = u)
          }),
          r,
          o
        ]
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy)
  }
  createDraft(e) {
    st(e) || Ue(8), Ot(e) && (e = _d(e))
    const t = Ra(this),
      n = eu(e, void 0)
    return (n[ke].isManual_ = !0), Zl(t), n
  }
  finishDraft(e, t) {
    const n = e && e[ke]
    ;(!n || !n.isManual_) && Ue(9)
    const { scope_: r } = n
    return Pa(r, t), Ta(void 0, r)
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e
  }
  applyPatches(e, t) {
    let n
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n]
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value
        break
      }
    }
    n > -1 && (t = t.slice(n + 1))
    const r = Jt('Patches').applyPatches_
    return Ot(e) ? r(e, t) : this.produce(e, (o) => r(o, t))
  }
}
function eu(e, t) {
  const n = pi(e)
    ? Jt('MapSet').proxyMap_(e, t)
    : hi(e)
      ? Jt('MapSet').proxySet_(e, t)
      : Oy(e, t)
  return (t ? t.scope_ : wd()).drafts_.push(n), n
}
function _d(e) {
  return Ot(e) || Ue(10, e), Ed(e)
}
function Ed(e) {
  if (!st(e) || mi(e)) return e
  const t = e[ke]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = Yl(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = Yl(e, !0)
  return (
    Cr(n, (r, o) => {
      gd(n, r, Ed(o))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
var Ce = new Ly(),
  kd = Ce.produce
Ce.produceWithPatches.bind(Ce)
Ce.setAutoFreeze.bind(Ce)
Ce.setUseStrictShallowCopy.bind(Ce)
Ce.applyPatches.bind(Ce)
Ce.createDraft.bind(Ce)
Ce.finishDraft.bind(Ce)
function jy(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function Dy(
  e,
  t = 'expected all items to be functions, instead received the following types: '
) {
  if (!e.every((n) => typeof n == 'function')) {
    const n = e
      .map((r) =>
        typeof r == 'function' ? `function ${r.name || 'unnamed'}()` : typeof r
      )
      .join(', ')
    throw new TypeError(`${t}[${n}]`)
  }
}
var za = (e) => (Array.isArray(e) ? e : [e])
function Ay(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    Dy(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function Fy(e, t) {
  const n = [],
    { length: r } = e
  for (let o = 0; o < r; o++) n.push(e[o].apply(null, t))
  return n
}
var My = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  Iy = typeof WeakRef < 'u' ? WeakRef : My,
  Uy = 0,
  La = 1
function no() {
  return { s: Uy, v: void 0, o: null, p: null }
}
function Cd(e, t = {}) {
  let n = no()
  const { resultEqualityCheck: r } = t
  let o,
    i = 0
  function l() {
    let u = n
    const { length: s } = arguments
    for (let f = 0, m = s; f < m; f++) {
      const g = arguments[f]
      if (typeof g == 'function' || (typeof g == 'object' && g !== null)) {
        let y = u.o
        y === null && (u.o = y = new WeakMap())
        const v = y.get(g)
        v === void 0 ? ((u = no()), y.set(g, u)) : (u = v)
      } else {
        let y = u.p
        y === null && (u.p = y = new Map())
        const v = y.get(g)
        v === void 0 ? ((u = no()), y.set(g, u)) : (u = v)
      }
    }
    const a = u
    let c
    if ((u.s === La ? (c = u.v) : ((c = e.apply(null, arguments)), i++), (a.s = La), r)) {
      const f = (o == null ? void 0 : o.deref()) ?? o
      f != null && r(f, c) && ((c = f), i !== 0 && i--),
        (o =
          (typeof c == 'object' && c !== null) || typeof c == 'function' ? new Iy(c) : c)
    }
    return (a.v = c), c
  }
  return (
    (l.clearCache = () => {
      ;(n = no()), l.resetResultsCount()
    }),
    (l.resultsCount = () => i),
    (l.resetResultsCount = () => {
      i = 0
    }),
    l
  )
}
function $y(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e
  return (...o) => {
    let i = 0,
      l = 0,
      u,
      s = {},
      a = o.pop()
    typeof a == 'object' && ((s = a), (a = o.pop())),
      jy(
        a,
        `createSelector expects an output function after the inputs, but received: [${typeof a}]`
      )
    const c = { ...n, ...s },
      {
        memoize: f,
        memoizeOptions: m = [],
        argsMemoize: g = Cd,
        argsMemoizeOptions: y = [],
        devModeChecks: v = {}
      } = c,
      E = za(m),
      p = za(y),
      d = Ay(o),
      h = f(
        function () {
          return i++, a.apply(null, arguments)
        },
        ...E
      ),
      S = g(
        function () {
          l++
          const N = Fy(d, arguments)
          return (u = h.apply(null, N)), u
        },
        ...p
      )
    return Object.assign(S, {
      resultFunc: a,
      memoizedResultFunc: h,
      dependencies: d,
      dependencyRecomputations: () => l,
      resetDependencyRecomputations: () => {
        l = 0
      },
      lastResult: () => u,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0
      },
      memoize: f,
      argsMemoize: g
    })
  }
}
function xd(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == 'function' ? i(n, r, e) : o(i)
}
var By = xd(),
  Hy = xd,
  Vy = (...e) => {
    const t = $y(...e)
    return (...n) => {
      const r = t(...n),
        o = (i, ...l) => r(Ot(i) ? _d(i) : i, ...l)
      return Object.assign(o, r), o
    }
  }
Vy(Cd)
var Wy =
  typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == 'object' ? Qo : Qo.apply(null, arguments)
      }
function Pr(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r)
      if (!o) throw new Error(He(0))
      return {
        type: e,
        payload: o.payload,
        ...('meta' in o && { meta: o.meta }),
        ...('error' in o && { error: o.error })
      }
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = () => `${e}`), (n.type = e), (n.match = (r) => ky(r) && r.type === e), n
  )
}
var Nd = class Xn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Xn.prototype)
  }
  static get [Symbol.species]() {
    return Xn
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Xn(...t[0].concat(this))
      : new Xn(...t.concat(this))
  }
}
function ja(e) {
  return st(e) ? kd(e, () => {}) : e
}
function Da(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t)
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o
  }
  if (!n.insert) throw new Error(He(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function Qy(e) {
  return typeof e == 'boolean'
}
var Ky = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0
      } = t ?? {}
      let l = new Nd()
      return n && (Qy(n) ? l.push(By) : l.push(Hy(n.extraArgument))), l
    },
  qy = 'RTK_autoBatch',
  Pd = (e) => (t) => {
    setTimeout(t, e)
  },
  Gy =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Pd(10),
  Xy =
    (e = { type: 'raf' }) =>
    (t) =>
    (...n) => {
      const r = t(...n)
      let o = !0,
        i = !1,
        l = !1
      const u = new Set(),
        s =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? Gy
              : e.type === 'callback'
                ? e.queueNotification
                : Pd(e.timeout),
        a = () => {
          ;(l = !1), i && ((i = !1), u.forEach((c) => c()))
        }
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => o && c(),
            m = r.subscribe(f)
          return (
            u.add(c),
            () => {
              m(), u.delete(c)
            }
          )
        },
        dispatch(c) {
          var f
          try {
            return (
              (o = !((f = c == null ? void 0 : c.meta) != null && f[qy])),
              (i = !o),
              i && (l || ((l = !0), s(a))),
              r.dispatch(c)
            )
          } finally {
            o = !0
          }
        }
      })
    },
  Yy = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let o = new Nd(e)
      return r && o.push(Xy(typeof r == 'object' ? r : void 0)), o
    },
  Jy = !0
function Zy(e) {
  const t = Ky(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: l = void 0
    } = e || {}
  let u
  if (typeof n == 'function') u = n
  else if (ts(n)) u = _y(n)
  else throw new Error(He(1))
  let s
  typeof r == 'function' ? (s = r(t)) : (s = t())
  let a = Qo
  o && (a = Wy({ trace: !Jy, ...(typeof o == 'object' && o) }))
  const c = Ey(...s),
    f = Yy(c)
  let m = typeof l == 'function' ? l(f) : f()
  const g = a(...m)
  return md(u, i, g)
}
function Rd(e) {
  const t = {},
    n = []
  let r
  const o = {
    addCase(i, l) {
      const u = typeof i == 'string' ? i : i.type
      if (!u) throw new Error(He(28))
      if (u in t) throw new Error(He(29))
      return (t[u] = l), o
    },
    addMatcher(i, l) {
      return n.push({ matcher: i, reducer: l }), o
    },
    addDefaultCase(i) {
      return (r = i), o
    }
  }
  return e(o), [t, n, r]
}
function by(e) {
  return typeof e == 'function'
}
function e0(e, t) {
  let [n, r, o] = Rd(t),
    i
  if (by(e)) i = () => ja(e())
  else {
    const u = ja(e)
    i = () => u
  }
  function l(u = i(), s) {
    let a = [n[s.type], ...r.filter(({ matcher: c }) => c(s)).map(({ reducer: c }) => c)]
    return (
      a.filter((c) => !!c).length === 0 && (a = [o]),
      a.reduce((c, f) => {
        if (f)
          if (Ot(c)) {
            const g = f(c, s)
            return g === void 0 ? c : g
          } else {
            if (st(c)) return kd(c, (m) => f(m, s))
            {
              const m = f(c, s)
              if (m === void 0) {
                if (c === null) return c
                throw new Error(He(9))
              }
              return m
            }
          }
        return c
      }, u)
    )
  }
  return (l.getInitialState = i), l
}
var t0 = Symbol.for('rtk-slice-createasyncthunk')
function n0(e, t) {
  return `${e}/${t}`
}
function r0({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[t0]
  return function (o) {
    const { name: i, reducerPath: l = i } = o
    if (!i) throw new Error(He(11))
    typeof process < 'u'
    const u = (typeof o.reducers == 'function' ? o.reducers(i0()) : o.reducers) || {},
      s = Object.keys(u),
      a = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      c = {
        addCase(E, p) {
          const d = typeof E == 'string' ? E : E.type
          if (!d) throw new Error(He(12))
          if (d in a.sliceCaseReducersByType) throw new Error(He(13))
          return (a.sliceCaseReducersByType[d] = p), c
        },
        addMatcher(E, p) {
          return a.sliceMatchers.push({ matcher: E, reducer: p }), c
        },
        exposeAction(E, p) {
          return (a.actionCreators[E] = p), c
        },
        exposeCaseReducer(E, p) {
          return (a.sliceCaseReducersByName[E] = p), c
        }
      }
    s.forEach((E) => {
      const p = u[E],
        d = {
          reducerName: E,
          type: n0(i, E),
          createNotation: typeof o.reducers == 'function'
        }
      u0(p) ? a0(d, p, c, t) : l0(d, p, c)
    })
    function f() {
      const [E = {}, p = [], d = void 0] =
          typeof o.extraReducers == 'function' ? Rd(o.extraReducers) : [o.extraReducers],
        h = { ...E, ...a.sliceCaseReducersByType }
      return e0(o.initialState, (S) => {
        for (let k in h) S.addCase(k, h[k])
        for (let k of a.sliceMatchers) S.addMatcher(k.matcher, k.reducer)
        for (let k of p) S.addMatcher(k.matcher, k.reducer)
        d && S.addDefaultCase(d)
      })
    }
    const m = (E) => E,
      g = new WeakMap()
    let y
    const v = {
      name: i,
      reducerPath: l,
      reducer(E, p) {
        return y || (y = f()), y(E, p)
      },
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState() {
        return y || (y = f()), y.getInitialState()
      },
      getSelectors(E = m) {
        const p = Da(g, this, { insert: () => new WeakMap() })
        return Da(p, E, {
          insert: () => {
            const d = {}
            for (const [h, S] of Object.entries(o.selectors ?? {}))
              d[h] = o0(this, S, E, this !== v)
            return d
          }
        })
      },
      selectSlice(E) {
        let p = E[this.reducerPath]
        return typeof p > 'u' && this !== v && (p = this.getInitialState()), p
      },
      get selectors() {
        return this.getSelectors(this.selectSlice)
      },
      injectInto(E, { reducerPath: p, ...d } = {}) {
        const h = p ?? this.reducerPath
        return (
          E.inject({ reducerPath: h, reducer: this.reducer }, d),
          { ...this, reducerPath: h }
        )
      }
    }
    return v
  }
}
function o0(e, t, n, r) {
  function o(i, ...l) {
    let u = n.call(e, i)
    return typeof u > 'u' && r && (u = e.getInitialState()), t(u, ...l)
  }
  return (o.unwrapped = t), o
}
var Td = r0()
function i0() {
  function e(t, n) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...n }
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n)
            }
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        )
      },
      preparedReducer(t, n) {
        return { _reducerDefinitionType: 'reducerWithPrepare', prepare: t, reducer: n }
      },
      asyncThunk: e
    }
  )
}
function l0({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, l
  if ('reducer' in r) {
    if (n && !s0(r)) throw new Error(He(17))
    ;(i = r.reducer), (l = r.prepare)
  } else i = r
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, l ? Pr(e, l) : Pr(e))
}
function u0(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function s0(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function a0({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(He(18))
  const {
      payloadCreator: i,
      fulfilled: l,
      pending: u,
      rejected: s,
      settled: a,
      options: c
    } = n,
    f = o(e, i, c)
  r.exposeAction(t, f),
    l && r.addCase(f.fulfilled, l),
    u && r.addCase(f.pending, u),
    s && r.addCase(f.rejected, s),
    a && r.addMatcher(f.settled, a),
    r.exposeCaseReducer(t, {
      fulfilled: l || ro,
      pending: u || ro,
      rejected: s || ro,
      settled: a || ro
    })
}
function ro() {}
var os = 'listenerMiddleware'
Pr(`${os}/add`)
Pr(`${os}/removeAll`)
Pr(`${os}/remove`)
function He(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
const c0 = { mode: 'initial', selectedCategories: [], questions: 5, startTime: 0 },
  Od = Td({
    name: 'app',
    initialState: c0,
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
    addCategory: f0,
    removeCategory: d0,
    setQuestions: p0,
    startGame: h0,
    endGame: m0,
    restart: y0
  } = Od.actions,
  v0 = Od.reducer,
  g0 = [
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
  w0 = g0.map((e) => e.replaceAll('_', ' ')),
  S0 = '_base_slcfb_1',
  _0 = { base: S0 }
function is({ children: e, className: t, ...n }) {
  return R.jsx('div', { className: `${_0.base} ${t}`, ...n, children: e })
}
const E0 = '_base_lonk2_1',
  k0 = '_primary_lonk2_21',
  C0 = { base: E0, primary: k0 }
function ir({ children: e, className: t, primary: n, ...r }) {
  const o = `${t} ${Ln(C0, ['base', n && 'primary'])}`
  return R.jsx('button', { className: o, ...r, children: e })
}
const x0 = '/quiz-game/favicon.svg',
  N0 = [5, 10, 15, 20]
function P0() {
  const { selectedCategories: e, questions: t } = Yt(({ app: c }) => c),
    n = fi(),
    r = w0.map((c) => ({ name: c, selected: e.includes(c) })),
    o = N0.map((c) => ({ number: c, selected: c === t })),
    i = (c) => {
      n(f0(c.target.value))
    },
    l = (c) => {
      n(d0(c.target.value))
    },
    u = (c) => {
      n(p0(c.target.value))
    },
    s = (c) => {
      c.preventDefault(), e.length && n(h0())
    },
    a = Ln(Ft, ['play', (e.length === 0 || t < 5 || t > 20) && 'forbidden'])
  return R.jsx('form', {
    onSubmit: s,
    children: R.jsxs(is, {
      className: Ft.base,
      children: [
        R.jsxs('div', {
          className: Ft.header,
          children: [
            R.jsx('object', {
              data: x0,
              type: 'image/svg+xml',
              'aria-label': 'Webpage icon'
            }),
            R.jsx('h1', { children: 'Quiz Game' })
          ]
        }),
        R.jsx('h2', { children: 'Number of questions' }),
        R.jsxs('div', {
          className: Ft.questions,
          children: [
            o.map(({ number: c, selected: f }) =>
              R.jsx(
                ir,
                {
                  className: f ? Ft.selected : '',
                  type: 'button',
                  value: c,
                  onClick: u,
                  children: c
                },
                c
              )
            ),
            R.jsx('input', {
              type: 'number',
              name: 'number',
              title: 'Custom umber of questions',
              value: t,
              onChange: u,
              min: 5,
              max: 40
            })
          ]
        }),
        R.jsx('h2', { children: 'Categories' }),
        R.jsx('div', {
          className: Ft.categories,
          children: r.map(({ name: c, selected: f }) =>
            R.jsxs(
              ir,
              {
                className: f ? Ft.selected : '',
                type: 'button',
                value: c,
                onClick: f ? l : i,
                children: [c, ' ', f ? '⨯' : '+']
              },
              c
            )
          )
        }),
        R.jsx('div', {
          className: a,
          children: R.jsx(ir, { primary: !0, children: 'Start Game' })
        })
      ]
    })
  })
}
const R0 = {},
  T0 = '_base_147cg_1',
  O0 = '_appear_147cg_1',
  z0 = '_question_147cg_7',
  L0 = '_answers_147cg_13',
  j0 = '_done_147cg_21',
  D0 = '_disappear_147cg_1',
  A0 = '_category_147cg_26',
  F0 = '_number_147cg_31',
  M0 = '_index_147cg_43',
  I0 = '_slash_147cg_48',
  U0 = '_total_147cg_53',
  ft = {
    base: T0,
    appear: O0,
    question: z0,
    answers: L0,
    done: j0,
    disappear: D0,
    category: A0,
    number: F0,
    index: M0,
    slash: I0,
    total: U0
  },
  $0 = '_base_1d00i_1',
  B0 = '_correct_1d00i_8',
  H0 = '_wrong_1d00i_12',
  V0 = { base: $0, correct: B0, wrong: H0 }
function W0({ label: e, correct: t, selected: n, done: r, onClick: o }) {
  const i = Ln(V0, ['base', r && (t ? 'correct' : n && 'wrong')])
  return R.jsx(ir, { className: i, onClick: o, children: e })
}
const Q0 = { cards: [], currentCard: {}, lastCard: !1, results: [] },
  zd = Td({
    name: 'game',
    initialState: Q0,
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
  { setCards: K0, answerCard: q0 } = zd.actions,
  G0 = zd.reducer
function X0({ index: e, category: t, question: n, correctAnswer: r, answers: o = [] }) {
  const i = fi(),
    [l, u] = rt.useState(!1),
    [s, a] = rt.useState(),
    { lastCard: c } = Yt(({ game: y }) => y),
    { questions: f } = Yt(({ app: y }) => y),
    m = Ln(ft, ['base', l && 'done']),
    g = (y) => {
      l ||
        (u(!0),
        a(y),
        setTimeout(() => {
          i(q0(y)), u(!1), c && i(m0())
        }, 2e3))
    }
  return R.jsxs(is, {
    className: m,
    children: [
      R.jsxs('div', {
        className: ft.number,
        children: [
          R.jsx('span', { className: ft.index, children: e + 1 }),
          R.jsx('span', { className: ft.slash, children: '/' }),
          R.jsx('span', { className: ft.total, children: f })
        ]
      }),
      R.jsx('div', { className: ft.category, children: t }),
      R.jsx('div', { className: ft.question, children: R.jsx('h3', { children: n }) }),
      R.jsx('div', {
        className: ft.answers,
        children: o.map((y, v) =>
          R.jsx(
            W0,
            {
              label: y,
              correct: r === y,
              selected: s === y,
              done: l,
              onClick: () => g(y)
            },
            v
          )
        )
      })
    ]
  })
}
function Ld(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Y0 } = Object.prototype,
  { getPrototypeOf: ls } = Object,
  yi = ((e) => (t) => {
    const n = Y0.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Ye = (e) => ((e = e.toLowerCase()), (t) => yi(t) === e),
  vi = (e) => (t) => typeof t === e,
  { isArray: jn } = Array,
  Rr = vi('undefined')
function J0(e) {
  return (
    e !== null &&
    !Rr(e) &&
    e.constructor !== null &&
    !Rr(e.constructor) &&
    ze(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const jd = Ye('ArrayBuffer')
function Z0(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && jd(e.buffer)),
    t
  )
}
const b0 = vi('string'),
  ze = vi('function'),
  Dd = vi('number'),
  gi = (e) => e !== null && typeof e == 'object',
  ev = (e) => e === !0 || e === !1,
  vo = (e) => {
    if (yi(e) !== 'object') return !1
    const t = ls(e)
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  tv = Ye('Date'),
  nv = Ye('File'),
  rv = Ye('Blob'),
  ov = Ye('FileList'),
  iv = (e) => gi(e) && ze(e.pipe),
  lv = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (ze(e.append) &&
          ((t = yi(e)) === 'formdata' ||
            (t === 'object' && ze(e.toString) && e.toString() === '[object FormData]'))))
    )
  },
  uv = Ye('URLSearchParams'),
  sv = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function Ar(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), jn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length
    let u
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e)
  }
}
function Ad(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Fd =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Md = (e) => !Rr(e) && e !== Fd
function tu() {
  const { caseless: e } = (Md(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Ad(t, o)) || o
      vo(t[i]) && vo(r)
        ? (t[i] = tu(t[i], r))
        : vo(r)
          ? (t[i] = tu({}, r))
          : jn(r)
            ? (t[i] = r.slice())
            : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Ar(arguments[r], n)
  return t
}
const av = (e, t, n, { allOwnKeys: r } = {}) => (
    Ar(
      t,
      (o, i) => {
        n && ze(o) ? (e[i] = Ld(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  cv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  fv = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  dv = (e, t, n, r) => {
    let o, i, l
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0))
      e = n !== !1 && ls(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  pv = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  hv = (e) => {
    if (!e) return null
    if (jn(e)) return e
    let t = e.length
    if (!Dd(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  mv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ls(Uint8Array)),
  yv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  vv = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  gv = Ye('HTMLFormElement'),
  wv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  Aa = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Sv = Ye('RegExp'),
  Id = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Ar(n, (o, i) => {
      let l
      ;(l = t(o, i, e)) !== !1 && (r[i] = l || o)
    }),
      Object.defineProperties(e, r)
  },
  _v = (e) => {
    Id(e, (t, n) => {
      if (ze(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const r = e[n]
      if (ze(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  Ev = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0
        })
      }
    return jn(e) ? r(e) : r(String(e).split(t)), n
  },
  kv = () => {},
  Cv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  bi = 'abcdefghijklmnopqrstuvwxyz',
  Fa = '0123456789',
  Ud = { DIGIT: Fa, ALPHA: bi, ALPHA_DIGIT: bi + bi.toUpperCase() + Fa },
  xv = (e = 16, t = Ud.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function Nv(e) {
  return !!(
    e &&
    ze(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const Pv = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (gi(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const i = jn(r) ? [] : {}
            return (
              Ar(r, (l, u) => {
                const s = n(l, o + 1)
                !Rr(s) && (i[u] = s)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  Rv = Ye('AsyncFunction'),
  Tv = (e) => e && (gi(e) || ze(e)) && ze(e.then) && ze(e.catch),
  w = {
    isArray: jn,
    isArrayBuffer: jd,
    isBuffer: J0,
    isFormData: lv,
    isArrayBufferView: Z0,
    isString: b0,
    isNumber: Dd,
    isBoolean: ev,
    isObject: gi,
    isPlainObject: vo,
    isUndefined: Rr,
    isDate: tv,
    isFile: nv,
    isBlob: rv,
    isRegExp: Sv,
    isFunction: ze,
    isStream: iv,
    isURLSearchParams: uv,
    isTypedArray: mv,
    isFileList: ov,
    forEach: Ar,
    merge: tu,
    extend: av,
    trim: sv,
    stripBOM: cv,
    inherits: fv,
    toFlatObject: dv,
    kindOf: yi,
    kindOfTest: Ye,
    endsWith: pv,
    toArray: hv,
    forEachEntry: yv,
    matchAll: vv,
    isHTMLForm: gv,
    hasOwnProperty: Aa,
    hasOwnProp: Aa,
    reduceDescriptors: Id,
    freezeMethods: _v,
    toObjectSet: Ev,
    toCamelCase: wv,
    noop: kv,
    toFiniteNumber: Cv,
    findKey: Ad,
    global: Fd,
    isContextDefined: Md,
    ALPHABET: Ud,
    generateString: xv,
    isSpecCompliantForm: Nv,
    toJSONObject: Pv,
    isAsyncFn: Rv,
    isThenable: Tv
  }
function D(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
w.inherits(D, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: w.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
})
const $d = D.prototype,
  Bd = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach((e) => {
  Bd[e] = { value: e }
})
Object.defineProperties(D, Bd)
Object.defineProperty($d, 'isAxiosError', { value: !0 })
D.from = (e, t, n, r, o, i) => {
  const l = Object.create($d)
  return (
    w.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype
      },
      (u) => u !== 'isAxiosError'
    ),
    D.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  )
}
const Ov = null
function nu(e) {
  return w.isPlainObject(e) || w.isArray(e)
}
function Hd(e) {
  return w.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Ma(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Hd(o)), !n && i ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function zv(e) {
  return w.isArray(e) && !e.some(nu)
}
const Lv = w.toFlatObject(w, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function wi(e, t, n) {
  if (!w.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = w.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, E) {
        return !w.isUndefined(E[v])
      }
    ))
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && w.isSpecCompliantForm(t)
  if (!w.isFunction(o)) throw new TypeError('visitor must be a function')
  function a(y) {
    if (y === null) return ''
    if (w.isDate(y)) return y.toISOString()
    if (!s && w.isBlob(y)) throw new D('Blob is not supported. Use a Buffer instead.')
    return w.isArrayBuffer(y) || w.isTypedArray(y)
      ? s && typeof Blob == 'function'
        ? new Blob([y])
        : Buffer.from(y)
      : y
  }
  function c(y, v, E) {
    let p = y
    if (y && !E && typeof y == 'object') {
      if (w.endsWith(v, '{}')) (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y))
      else if (
        (w.isArray(y) && zv(y)) ||
        ((w.isFileList(y) || w.endsWith(v, '[]')) && (p = w.toArray(y)))
      )
        return (
          (v = Hd(v)),
          p.forEach(function (h, S) {
            !(w.isUndefined(h) || h === null) &&
              t.append(l === !0 ? Ma([v], S, i) : l === null ? v : v + '[]', a(h))
          }),
          !1
        )
    }
    return nu(y) ? !0 : (t.append(Ma(E, v, i), a(y)), !1)
  }
  const f = [],
    m = Object.assign(Lv, { defaultVisitor: c, convertValue: a, isVisitable: nu })
  function g(y, v) {
    if (!w.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error('Circular reference detected in ' + v.join('.'))
      f.push(y),
        w.forEach(y, function (p, d) {
          ;(!(w.isUndefined(p) || p === null) &&
            o.call(t, p, w.isString(d) ? d.trim() : d, v, m)) === !0 &&
            g(p, v ? v.concat(d) : [d])
        }),
        f.pop()
    }
  }
  if (!w.isObject(e)) throw new TypeError('data must be an object')
  return g(e), t
}
function Ia(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0'
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function us(e, t) {
  ;(this._pairs = []), e && wi(e, this, t)
}
const Vd = us.prototype
Vd.append = function (t, n) {
  this._pairs.push([t, n])
}
Vd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ia)
      }
    : Ia
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function jv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Wd(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || jv,
    o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = w.isURLSearchParams(t) ? t.toString() : new us(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#')
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class Dv {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    w.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const Ua = Dv,
  Qd = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Av = typeof URLSearchParams < 'u' ? URLSearchParams : us,
  Fv = typeof FormData < 'u' ? FormData : null,
  Mv = typeof Blob < 'u' ? Blob : null,
  Iv = {
    isBrowser: !0,
    classes: { URLSearchParams: Av, FormData: Fv, Blob: Mv },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  Kd = typeof window < 'u' && typeof document < 'u',
  Uv = ((e) => Kd && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  $v =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Bv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Kd,
        hasStandardBrowserEnv: Uv,
        hasStandardBrowserWebWorkerEnv: $v
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qe = { ...Bv, ...Iv }
function Hv(e, t) {
  return wi(
    e,
    new qe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return qe.isNode && w.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function Vv(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Wv(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function qd(e) {
  function t(n, r, o, i) {
    let l = n[i++]
    const u = Number.isFinite(+l),
      s = i >= n.length
    return (
      (l = !l && w.isArray(o) ? o.length : l),
      s
        ? (w.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !w.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && w.isArray(o[l]) && (o[l] = Wv(o[l])),
          !u)
    )
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {}
    return (
      w.forEachEntry(e, (r, o) => {
        t(Vv(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function Qv(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const ss = {
  transitional: Qd,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = w.isObject(t)
      if ((i && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t)))
        return o && o ? JSON.stringify(qd(t)) : t
      if (
        w.isArrayBuffer(t) ||
        w.isBuffer(t) ||
        w.isStream(t) ||
        w.isFile(t) ||
        w.isBlob(t)
      )
        return t
      if (w.isArrayBufferView(t)) return t.buffer
      if (w.isURLSearchParams(t))
        return (
          n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1),
          t.toString()
        )
      let u
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Hv(t, this.formSerializer).toString()
        if ((u = w.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData
          return wi(u ? { 'files[]': t } : t, s && new s(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType('application/json', !1), Qv(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ss.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && w.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (u) {
          if (l)
            throw u.name === 'SyntaxError'
              ? D.from(u, D.ERR_BAD_RESPONSE, this, null, this.response)
              : u
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: qe.classes.FormData, Blob: qe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 }
  }
}
w.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ss.headers[e] = {}
})
const as = ss,
  Kv = w.toObjectSet([
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
  ]),
  qv = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            ;(o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && Kv[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  $a = Symbol('internals')
function Wn(e) {
  return e && String(e).trim().toLowerCase()
}
function go(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(go) : String(e)
}
function Gv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const Xv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function el(e, t, n, r, o) {
  if (w.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!w.isString(t))) {
    if (w.isString(r)) return t.indexOf(r) !== -1
    if (w.isRegExp(r)) return r.test(t)
  }
}
function Yv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Jv(e, t) {
  const n = w.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l)
      },
      configurable: !0
    })
  })
}
class Si {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(u, s, a) {
      const c = Wn(s)
      if (!c) throw new Error('header name must be a non-empty string')
      const f = w.findKey(o, c)
      ;(!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || s] = go(u))
    }
    const l = (u, s) => w.forEach(u, (a, c) => i(a, c, s))
    return (
      w.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : w.isString(t) && (t = t.trim()) && !Xv(t)
          ? l(qv(t), n)
          : t != null && i(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = Wn(t)), t)) {
      const r = w.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return Gv(o)
        if (w.isFunction(n)) return n.call(this, o, r)
        if (w.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Wn(t)), t)) {
      const r = w.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || el(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(l) {
      if (((l = Wn(l)), l)) {
        const u = w.findKey(r, l)
        u && (!n || el(r, r[u], u, n)) && (delete r[u], (o = !0))
      }
    }
    return w.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    for (; r--; ) {
      const i = n[r]
      ;(!t || el(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
    }
    return o
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      w.forEach(this, (o, i) => {
        const l = w.findKey(r, i)
        if (l) {
          ;(n[l] = go(o)), delete n[i]
          return
        }
        const u = t ? Yv(i) : String(i).trim()
        u !== i && delete n[i], (n[u] = go(o)), (r[u] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      w.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && w.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((o) => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[$a] = this[$a] = { accessors: {} }).accessors,
      o = this.prototype
    function i(l) {
      const u = Wn(l)
      r[u] || (Jv(o, l), (r[u] = !0))
    }
    return w.isArray(t) ? t.forEach(i) : i(t), this
  }
}
Si.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
w.reduceDescriptors(Si.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    }
  }
})
w.freezeMethods(Si)
const nt = Si
function tl(e, t) {
  const n = this || as,
    r = t || n,
    o = nt.from(r.headers)
  let i = r.data
  return (
    w.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function Gd(e) {
  return !!(e && e.__CANCEL__)
}
function Fr(e, t, n) {
  D.call(this, e ?? 'canceled', D.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
w.inherits(Fr, D, { __CANCEL__: !0 })
function Zv(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new D(
          'Request failed with status code ' + n.status,
          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      )
}
const bv = qe.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const l = [e + '=' + encodeURIComponent(t)]
        w.isNumber(n) && l.push('expires=' + new Date(n).toGMTString()),
          w.isString(r) && l.push('path=' + r),
          w.isString(o) && l.push('domain=' + o),
          i === !0 && l.push('secure'),
          (document.cookie = l.join('; '))
      },
      read(e) {
        const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      }
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {}
    }
function eg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function tg(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Xd(e, t) {
  return e && !eg(t) ? tg(e, t) : t
}
const ng = qe.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(i) {
        let l = i
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
          const u = w.isString(l) ? o(l) : l
          return u.protocol === r.protocol && u.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function rg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function og(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    i = 0,
    l
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        c = r[i]
      l || (l = a), (n[o] = s), (r[o] = a)
      let f = i,
        m = 0
      for (; f !== o; ) (m += n[f++]), (f = f % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return
      const g = c && a - c
      return g ? Math.round((m * 1e3) / g) : void 0
    }
  )
}
function Ba(e, t) {
  let n = 0
  const r = og(50, 250)
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      u = i - n,
      s = r(u),
      a = i <= l
    n = i
    const c = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && a ? (l - i) / s : void 0,
      event: o
    }
    ;(c[t ? 'download' : 'upload'] = !0), e(c)
  }
}
const ig = typeof XMLHttpRequest < 'u',
  lg =
    ig &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const i = nt.from(e.headers).normalize()
        let { responseType: l, withXSRFToken: u } = e,
          s
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener('abort', s)
        }
        let c
        if (w.isFormData(o)) {
          if (qe.hasStandardBrowserEnv || qe.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1)
          else if ((c = i.getContentType()) !== !1) {
            const [v, ...E] = c
              ? c
                  .split(';')
                  .map((p) => p.trim())
                  .filter(Boolean)
              : []
            i.setContentType([v || 'multipart/form-data', ...E].join('; '))
          }
        }
        let f = new XMLHttpRequest()
        if (e.auth) {
          const v = e.auth.username || '',
            E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          i.set('Authorization', 'Basic ' + btoa(v + ':' + E))
        }
        const m = Xd(e.baseURL, e.url)
        f.open(e.method.toUpperCase(), Wd(m, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout)
        function g() {
          if (!f) return
          const v = nt.from('getAllResponseHeaders' in f && f.getAllResponseHeaders()),
            p = {
              data: !l || l === 'text' || l === 'json' ? f.responseText : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: v,
              config: e,
              request: f
            }
          Zv(
            function (h) {
              n(h), a()
            },
            function (h) {
              r(h), a()
            },
            p
          ),
            (f = null)
        }
        if (
          ('onloadend' in f
            ? (f.onloadend = g)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(g)
              }),
          (f.onabort = function () {
            f && (r(new D('Request aborted', D.ECONNABORTED, e, f)), (f = null))
          }),
          (f.onerror = function () {
            r(new D('Network Error', D.ERR_NETWORK, e, f)), (f = null)
          }),
          (f.ontimeout = function () {
            let E = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const p = e.transitional || Qd
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
              r(new D(E, p.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, e, f)),
              (f = null)
          }),
          qe.hasStandardBrowserEnv &&
            (u && w.isFunction(u) && (u = u(e)), u || (u !== !1 && ng(m))))
        ) {
          const v = e.xsrfHeaderName && e.xsrfCookieName && bv.read(e.xsrfCookieName)
          v && i.set(e.xsrfHeaderName, v)
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in f &&
            w.forEach(i.toJSON(), function (E, p) {
              f.setRequestHeader(p, E)
            }),
          w.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            f.addEventListener('progress', Ba(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            f.upload &&
            f.upload.addEventListener('progress', Ba(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (v) => {
              f && (r(!v || v.type ? new Fr(null, e, f) : v), f.abort(), (f = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal && (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)))
        const y = rg(m)
        if (y && qe.protocols.indexOf(y) === -1) {
          r(new D('Unsupported protocol ' + y + ':', D.ERR_BAD_REQUEST, e))
          return
        }
        f.send(o || null)
      })
    },
  ru = { http: Ov, xhr: lg }
w.forEach(ru, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Ha = (e) => `- ${e}`,
  ug = (e) => w.isFunction(e) || e === null || e === !1,
  Yd = {
    getAdapter: (e) => {
      e = w.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let i = 0; i < t; i++) {
        n = e[i]
        let l
        if (((r = n), !ug(n) && ((r = ru[(l = String(n)).toLowerCase()]), r === void 0)))
          throw new D(`Unknown adapter '${l}'`)
        if (r) break
        o[l || '#' + i] = r
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([u, s]) =>
            `adapter ${u} ` +
            (s === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let l = t
          ? i.length > 1
            ? `since :
` +
              i.map(Ha).join(`
`)
            : ' ' + Ha(i[0])
          : 'as no adapter specified'
        throw new D(
          'There is no suitable adapter to dispatch the request ' + l,
          'ERR_NOT_SUPPORT'
        )
      }
      return r
    },
    adapters: ru
  }
function nl(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new Fr(null, e)
}
function Va(e) {
  return (
    nl(e),
    (e.headers = nt.from(e.headers)),
    (e.data = tl.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Yd.getAdapter(e.adapter || as.adapter)(e).then(
      function (r) {
        return (
          nl(e),
          (r.data = tl.call(e, e.transformResponse, r)),
          (r.headers = nt.from(r.headers)),
          r
        )
      },
      function (r) {
        return (
          Gd(r) ||
            (nl(e),
            r &&
              r.response &&
              ((r.response.data = tl.call(e, e.transformResponse, r.response)),
              (r.response.headers = nt.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const Wa = (e) => (e instanceof nt ? e.toJSON() : e)
function Rn(e, t) {
  t = t || {}
  const n = {}
  function r(a, c, f) {
    return w.isPlainObject(a) && w.isPlainObject(c)
      ? w.merge.call({ caseless: f }, a, c)
      : w.isPlainObject(c)
        ? w.merge({}, c)
        : w.isArray(c)
          ? c.slice()
          : c
  }
  function o(a, c, f) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(a)) return r(void 0, a, f)
    } else return r(a, c, f)
  }
  function i(a, c) {
    if (!w.isUndefined(c)) return r(void 0, c)
  }
  function l(a, c) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(a)) return r(void 0, a)
    } else return r(void 0, c)
  }
  function u(a, c, f) {
    if (f in t) return r(a, c)
    if (f in e) return r(void 0, a)
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (a, c) => o(Wa(a), Wa(c), !0)
  }
  return (
    w.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = s[c] || o,
        m = f(e[c], t[c], c)
      ;(w.isUndefined(m) && f !== u) || (n[c] = m)
    }),
    n
  )
}
const Jd = '1.6.2',
  cs = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  cs[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const Qa = {}
cs.transitional = function (t, n, r) {
  function o(i, l) {
    return '[Axios v' + Jd + "] Transitional option '" + i + "'" + l + (r ? '. ' + r : '')
  }
  return (i, l, u) => {
    if (t === !1)
      throw new D(o(l, ' has been removed' + (n ? ' in ' + n : '')), D.ERR_DEPRECATED)
    return (
      n &&
        !Qa[l] &&
        ((Qa[l] = !0),
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
function sg(e, t, n) {
  if (typeof e != 'object')
    throw new D('options must be an object', D.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i]
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e)
      if (s !== !0) throw new D('option ' + i + ' must be ' + s, D.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new D('Unknown option ' + i, D.ERR_BAD_OPTION)
  }
}
const ou = { assertOptions: sg, validators: cs },
  dt = ou.validators
class Go {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new Ua(), response: new Ua() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Rn(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      ou.assertOptions(
        r,
        {
          silentJSONParsing: dt.transitional(dt.boolean),
          forcedJSONParsing: dt.transitional(dt.boolean),
          clarifyTimeoutError: dt.transitional(dt.boolean)
        },
        !1
      ),
      o != null &&
        (w.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ou.assertOptions(o, { encode: dt.function, serialize: dt.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let l = i && w.merge(i.common, i[n.method])
    i &&
      w.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (y) => {
        delete i[y]
      }),
      (n.headers = nt.concat(l, i))
    const u = []
    let s = !0
    this.interceptors.request.forEach(function (v) {
      ;(typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected))
    })
    const a = []
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected)
    })
    let c,
      f = 0,
      m
    if (!s) {
      const y = [Va.bind(this), void 0]
      for (
        y.unshift.apply(y, u), y.push.apply(y, a), m = y.length, c = Promise.resolve(n);
        f < m;

      )
        c = c.then(y[f++], y[f++])
      return c
    }
    m = u.length
    let g = n
    for (f = 0; f < m; ) {
      const y = u[f++],
        v = u[f++]
      try {
        g = y(g)
      } catch (E) {
        v.call(this, E)
        break
      }
    }
    try {
      c = Va.call(this, g)
    } catch (y) {
      return Promise.reject(y)
    }
    for (f = 0, m = a.length; f < m; ) c = c.then(a[f++], a[f++])
    return c
  }
  getUri(t) {
    t = Rn(this.defaults, t)
    const n = Xd(t.baseURL, t.url)
    return Wd(n, t.params, t.paramsSerializer)
  }
}
w.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Go.prototype[t] = function (n, r) {
    return this.request(Rn(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
w.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        Rn(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l
        })
      )
    }
  }
  ;(Go.prototype[t] = n()), (Go.prototype[t + 'Form'] = n(!0))
})
const wo = Go
class fs {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (i) {
      n = i
    })
    const r = this
    this.promise.then((o) => {
      if (!r._listeners) return
      let i = r._listeners.length
      for (; i-- > 0; ) r._listeners[i](o)
      r._listeners = null
    }),
      (this.promise.then = (o) => {
        let i
        const l = new Promise((u) => {
          r.subscribe(u), (i = u)
        }).then(o)
        return (
          (l.cancel = function () {
            r.unsubscribe(i)
          }),
          l
        )
      }),
      t(function (i, l, u) {
        r.reason || ((r.reason = new Fr(i, l, u)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new fs(function (o) {
        t = o
      }),
      cancel: t
    }
  }
}
const ag = fs
function cg(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function fg(e) {
  return w.isObject(e) && e.isAxiosError === !0
}
const iu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries(iu).forEach(([e, t]) => {
  iu[t] = e
})
const dg = iu
function Zd(e) {
  const t = new wo(e),
    n = Ld(wo.prototype.request, t)
  return (
    w.extend(n, wo.prototype, t, { allOwnKeys: !0 }),
    w.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Zd(Rn(e, o))
    }),
    n
  )
}
const X = Zd(as)
X.Axios = wo
X.CanceledError = Fr
X.CancelToken = ag
X.isCancel = Gd
X.VERSION = Jd
X.toFormData = wi
X.AxiosError = D
X.Cancel = X.CanceledError
X.all = function (t) {
  return Promise.all(t)
}
X.spread = cg
X.isAxiosError = fg
X.mergeConfig = Rn
X.AxiosHeaders = nt
X.formToJSON = (e) => qd(w.isHTMLForm(e) ? new FormData(e) : e)
X.getAdapter = Yd.getAdapter
X.HttpStatusCode = dg
X.default = X
const pg = X
function hg(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1)),
      r = e[t]
    ;(e[t] = e[n]), (e[n] = r)
  }
}
function mg() {
  const [e, t] = rt.useState(!1),
    {
      app: { selectedCategories: n, questions: r },
      game: { currentCard: o }
    } = Yt((l) => l),
    i = fi()
  return (
    rt.useEffect(() => {
      const l = `https://the-trivia-api.com/v2/questions?categories=${n
        .join(',')
        .replaceAll(' ', '_')
        .toLowerCase()}&limit=${r}`
      pg.get(l)
        .then(({ data: u }) => {
          const s = u.map(
            ({ question: a, correctAnswer: c, incorrectAnswers: f, category: m }, g) => {
              f.length > 3 && f.splice(3)
              const y = [c, ...f]
              return (
                hg(y),
                {
                  index: g,
                  question: a.text,
                  answers: y,
                  correctAnswer: c,
                  category: m.replaceAll('_', ' ')
                }
              )
            }
          )
          i(K0(s)), t(!0)
        })
        .catch(console.log)
    }, []),
    { ready: e, currentCard: o }
  )
}
function yg() {
  const { ready: e, currentCard: t } = mg()
  return R.jsx('div', { className: R0.base, children: e && R.jsx(X0, { ...t }) })
}
const vg = '_base_fz0d2_1',
  gg = '_appear_fz0d2_1',
  wg = '_results_fz0d2_16',
  Sg = '_restart_fz0d2_31',
  _g = '_result_fz0d2_16',
  Eg = '_answer_fz0d2_35',
  kg = '_correct_fz0d2_39',
  lr = {
    base: vg,
    appear: gg,
    results: wg,
    restart: Sg,
    result: _g,
    answer: Eg,
    correct: kg
  }
function Cg() {
  const e = fi(),
    {
      app: { questions: t, startTime: n },
      game: { results: r }
    } = Yt((s) => s),
    o = r.filter(({ correct: s }) => s).length,
    i = (performance.now() - n) / 1e3
  let l = (o / r.length) * (r.length * 10 - i)
  l = l >= 0 ? l : o / r.length
  const u = () => {
    e(y0())
  }
  return R.jsxs(is, {
    className: lr.base,
    children: [
      R.jsxs('h1', { children: ['Score: ', l.toFixed(1)] }),
      R.jsxs('h3', { children: ['Correct answers: ', o, '/', t] }),
      R.jsxs('h3', { children: ['Time elapsed: ', i.toFixed(1), 's'] }),
      R.jsx('div', {
        className: lr.results,
        children: r.map(({ correct: s, answer: a, card: c }, f) =>
          R.jsx(xg, { number: f + 1, correct: s, answer: a, ...c }, f)
        )
      }),
      R.jsx('div', {
        className: lr.restart,
        children: R.jsx(ir, { primary: !0, onClick: u, children: 'Play again' })
      })
    ]
  })
}
function xg({ question: e, number: t, answer: n, correctAnswer: r, correct: o }) {
  const i = Ln(lr, ['result', o && 'correct'])
  return R.jsxs('div', {
    className: i,
    children: [
      R.jsxs('div', {
        children: [R.jsxs('b', { children: ['Question ', t, ':'] }), ' ', e]
      }),
      R.jsxs('div', {
        className: lr.answer,
        children: [
          R.jsx('b', { children: 'Your answer:' }),
          ' ',
          R.jsx('span', { children: n })
        ]
      }),
      !o &&
        R.jsxs('div', { children: [R.jsx('b', { children: 'Correct answer:' }), ' ', r] })
    ]
  })
}
const Ng = '_base_rox5q_1',
  Pg = { base: Ng }
function Rg() {
  return R.jsxs('div', {
    className: Pg.base,
    children: [
      R.jsx('a', {
        href: 'https://github.com/nanndo54/quiz-game',
        target: '_blank',
        rel: 'noreferrer',
        children: 'Source'
      }),
      R.jsx('a', {
        href: 'https://the-trivia-api.com',
        target: '_blank',
        rel: 'noreferrer',
        children: 'The Trivia API'
      })
    ]
  })
}
const Tg = { initial: R.jsx(P0, {}), game: R.jsx(yg, {}), score: R.jsx(Cg, {}) }
function Og() {
  const e = Yt((r) => r.app.mode),
    t = Yt((r) => r.game.currentCard),
    n = Ln(ay, ['base', t.category && t.category.replace(/\s/g, '').toLowerCase()])
  return R.jsxs('div', { className: n, children: [Tg[e], R.jsx(Rg, {})] })
}
const zg = { reducer: { app: v0, game: G0 } },
  Lg = Zy(zg)
var bd,
  Ka = cd
;(bd = Ka.createRoot), Ka.hydrateRoot
const jg = document.querySelector('main'),
  Dg = bd(jg)
Dg.render(R.jsx(Gm, { store: Lg, children: R.jsx(Og, {}) }))
