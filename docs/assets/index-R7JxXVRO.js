function bd(e, t) {
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
function ep(e) {
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
  tp = Symbol.for('react.portal'),
  np = Symbol.for('react.fragment'),
  rp = Symbol.for('react.strict_mode'),
  op = Symbol.for('react.profiler'),
  ip = Symbol.for('react.provider'),
  lp = Symbol.for('react.context'),
  up = Symbol.for('react.forward_ref'),
  sp = Symbol.for('react.suspense'),
  ap = Symbol.for('react.memo'),
  cp = Symbol.for('react.lazy'),
  ps = Symbol.iterator
function fp(e) {
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
function dp(e, t) {
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
function pp(e) {
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
    ? pp('' + e.key)
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
          case tp:
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
            (o = dp(
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
  else if (((s = fp(e)), typeof s == 'function'))
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
function hp(e) {
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
  mp = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: io, ReactCurrentOwner: su }
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
L.Fragment = np
L.Profiler = op
L.PureComponent = lu
L.StrictMode = rp
L.Suspense = sp
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp
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
      $$typeof: lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: ip, _context: e }),
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
  return { $$typeof: up, render: e }
}
L.isValidElement = au
L.lazy = function (e) {
  return { $$typeof: cp, _payload: { _status: -1, _result: e }, _init: hp }
}
L.memo = function (e, t) {
  return { $$typeof: ap, type: e, compare: t === void 0 ? null : t }
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
const nc = ep(rt),
  ys = bd({ __proto__: null, default: nc }, [rt])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp = rt,
  vp = Symbol.for('react.element'),
  gp = Symbol.for('react.fragment'),
  wp = Object.prototype.hasOwnProperty,
  Sp = yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _p = { key: !0, ref: !0, __self: !0, __source: !0 }
function rc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) wp.call(t, r) && !_p.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: vp, type: e, key: i, ref: l, props: o, _owner: Sp.current }
}
Xo.Fragment = gp
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
function Ep(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var kp = typeof Object.is == 'function' ? Object.is : Ep,
  Cp = Or.useSyncExternalStore,
  xp = Or.useRef,
  Np = Or.useEffect,
  Pp = Or.useMemo,
  Rp = Or.useDebugValue
ic.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = xp(null)
  if (i.current === null) {
    var l = { hasValue: !1, value: null }
    i.current = l
  } else l = i.current
  i = Pp(
    function () {
      function s(g) {
        if (!a) {
          if (((a = !0), (c = g), (g = r(g)), o !== void 0 && l.hasValue)) {
            var y = l.value
            if (o(y, g)) return (f = y)
          }
          return (f = g)
        }
        if (((y = f), kp(c, g))) return y
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
  var u = Cp(e, i[0], i[1])
  return (
    Np(
      function () {
        ;(l.hasValue = !0), (l.value = u)
      },
      [u]
    ),
    Rp(u),
    u
  )
}
oc.exports = ic
var Tp = oc.exports,
  we = 'default' in ys ? nc : ys,
  vs = Symbol.for('react-redux-context'),
  gs = typeof globalThis < 'u' ? globalThis : {}
function Op() {
  if (!we.createContext) return {}
  const e = gs[vs] ?? (gs[vs] = new Map())
  let t = e.get(we.createContext)
  return t || ((t = we.createContext(null)), e.set(we.createContext, t)), t
}
var Pt = Op(),
  zp = () => {
    throw new Error('uSES not initialized!')
  }
function cu(e = Pt) {
  return function () {
    return we.useContext(e)
  }
}
var lc = cu(),
  uc = zp,
  Lp = (e) => {
    uc = e
  },
  jp = (e, t) => e === t
function Dp(e = Pt) {
  const t = e === Pt ? lc : cu(e)
  return function (r, o = {}) {
    const { equalityFn: i = jp, devModeChecks: l = {} } =
        typeof o == 'function' ? { equalityFn: o } : o,
      {
        store: u,
        subscription: s,
        getServerState: a,
        stabilityCheck: c,
        identityFunctionCheck: f
      } = t()
    we.useRef(!0)
    const m = we.useCallback(
        {
          [r.name](y) {
            return r(y)
          }
        }[r.name],
        [r, c, l.stabilityCheck]
      ),
      g = uc(s.addNestedSub, u.getState, a || u.getState, m, i)
    return we.useDebugValue(g), g
  }
}
var Qt = Dp()
function Ap(e) {
  e()
}
function Fp() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      Ap(() => {
        let n = e
        for (; n; ) n.callback(), (n = n.next)
      })
    },
    get() {
      let n = [],
        r = e
      for (; r; ) n.push(r), (r = r.next)
      return n
    },
    subscribe(n) {
      let r = !0,
        o = (t = { callback: n, next: null, prev: t })
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next))
        }
      )
    }
  }
}
var ws = { notify() {}, get: () => [] }
function Mp(e, t) {
  let n,
    r = ws,
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
    o++, n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Fp()))
  }
  function f() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = ws))
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
var Ip =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Up = Ip ? we.useLayoutEffect : we.useEffect
function $p({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = 'once',
  identityFunctionCheck: i = 'once'
}) {
  const l = we.useMemo(() => {
      const a = Mp(e)
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i
      }
    }, [e, r, o, i]),
    u = we.useMemo(() => e.getState(), [e])
  Up(() => {
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
  const s = t || Pt
  return we.createElement(s.Provider, { value: l }, n)
}
var Bp = $p
function sc(e = Pt) {
  const t = e === Pt ? lc : cu(e)
  return function () {
    const { store: r } = t()
    return r
  }
}
var Hp = sc()
function Vp(e = Pt) {
  const t = e === Pt ? Hp : sc(e)
  return function () {
    return t().dispatch
  }
}
var Yo = Vp()
Lp(Tp.useSyncExternalStoreWithSelector)
const Wp = '_base_rvsh7_1',
  Qp = '_gradient_rvsh7_1',
  Kp = '_foodanddrink_rvsh7_23',
  qp = '_geography_rvsh7_29',
  Gp = '_generalknowledge_rvsh7_35',
  Xp = '_history_rvsh7_41',
  Yp = '_artandliterature_rvsh7_47',
  Jp = '_movies_rvsh7_53',
  Zp = '_music_rvsh7_59',
  bp = '_science_rvsh7_65',
  eh = '_societyandculture_rvsh7_71',
  th = '_sportandleisure_rvsh7_77',
  nh = {
    base: Wp,
    gradient: Qp,
    foodanddrink: Kp,
    geography: qp,
    generalknowledge: Gp,
    history: Xp,
    artandliterature: Yp,
    movies: Jp,
    music: Zp,
    science: bp,
    societyandculture: eh,
    sportandleisure: th
  },
  rh = '_base_pqebi_1',
  oh = '_appear_pqebi_1',
  ih = '_header_pqebi_9',
  lh = '_questions_pqebi_40',
  uh = '_categories_pqebi_47',
  sh = '_selected_pqebi_68',
  ah = '_play_pqebi_73',
  ch = '_forbidden_pqebi_78',
  Ft = {
    base: rh,
    appear: oh,
    header: ih,
    questions: lh,
    categories: uh,
    selected: sh,
    play: ah,
    forbidden: ch
  }
function On(e, t) {
  return t.map((r) => (r ? e[r] : '')).join(' ')
}
function te(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var fh = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Ss = fh,
  xi = () => Math.random().toString(36).substring(7).split('').join('.'),
  dh = {
    INIT: `@@redux/INIT${xi()}`,
    REPLACE: `@@redux/REPLACE${xi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${xi()}`
  },
  So = dh
function fu(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function ac(e, t, n) {
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
    return n(ac)(e, t)
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
    if (!fu(E)) throw new Error(te(7))
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
    ;(r = E), m({ type: So.REPLACE })
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
      [Ss]() {
        return this
      }
    }
  }
  return (
    m({ type: So.INIT }),
    { dispatch: m, subscribe: f, getState: c, replaceReducer: g, [Ss]: y }
  )
}
function ph(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: So.INIT }) > 'u') throw new Error(te(12))
    if (typeof n(void 0, { type: So.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(te(13))
  })
}
function hh(e) {
  const t = Object.keys(e),
    n = {}
  for (let i = 0; i < t.length; i++) {
    const l = t[i]
    typeof e[l] == 'function' && (n[l] = e[l])
  }
  const r = Object.keys(n)
  let o
  try {
    ph(n)
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
function _o(...e) {
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
function mh(...e) {
  return (t) => (n, r) => {
    const o = t(n, r)
    let i = () => {
      throw new Error(te(15))
    }
    const l = { getState: o.getState, dispatch: (s, ...a) => i(s, ...a) },
      u = e.map((s) => s(l))
    return (i = _o(...u)(o.dispatch)), { ...o, dispatch: i }
  }
}
function yh(e) {
  return fu(e) && 'type' in e && typeof e.type == 'string'
}
var cc = Symbol.for('immer-nothing'),
  _s = Symbol.for('immer-draftable'),
  Ee = Symbol.for('immer-state')
function Ue(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Sn = Object.getPrototypeOf
function Rt(e) {
  return !!e && !!e[Ee]
}
function ot(e) {
  var t
  return e
    ? fc(e) ||
        Array.isArray(e) ||
        !!e[_s] ||
        !!((t = e.constructor) != null && t[_s]) ||
        Zo(e) ||
        bo(e)
    : !1
}
var vh = Object.prototype.constructor.toString()
function fc(e) {
  if (!e || typeof e != 'object') return !1
  const t = Sn(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object ? !0 : typeof n == 'function' && Function.toString.call(n) === vh
}
function ur(e, t) {
  Jo(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function Jo(e) {
  const t = e[Ee]
  return t ? t.type_ : Array.isArray(e) ? 1 : Zo(e) ? 2 : bo(e) ? 3 : 0
}
function rl(e, t) {
  return Jo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function dc(e, t, n) {
  const r = Jo(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function gh(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function Zo(e) {
  return e instanceof Map
}
function bo(e) {
  return e instanceof Set
}
function Mt(e) {
  return e.copy_ || e.base_
}
function ol(e, t) {
  if (Zo(e)) return new Map(e)
  if (bo(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  if (!t && fc(e)) return Sn(e) ? { ...e } : Object.assign(Object.create(null), e)
  const n = Object.getOwnPropertyDescriptors(e)
  delete n[Ee]
  let r = Reflect.ownKeys(n)
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      l = n[i]
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (n[i] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[i] })
  }
  return Object.create(Sn(e), n)
}
function du(e, t = !1) {
  return (
    ei(e) ||
      Rt(e) ||
      !ot(e) ||
      (Jo(e) > 1 && (e.set = e.add = e.clear = e.delete = wh),
      Object.freeze(e),
      t && ur(e, (n, r) => du(r, !0))),
    e
  )
}
function wh() {
  Ue(2)
}
function ei(e) {
  return Object.isFrozen(e)
}
var Sh = {}
function Kt(e) {
  const t = Sh[e]
  return t || Ue(0, e), t
}
var sr
function pc() {
  return sr
}
function _h(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 }
}
function Es(e, t) {
  t &&
    (Kt('Patches'), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t))
}
function il(e) {
  ll(e), e.drafts_.forEach(Eh), (e.drafts_ = null)
}
function ll(e) {
  e === sr && (sr = e.parent_)
}
function ks(e) {
  return (sr = _h(sr, e))
}
function Eh(e) {
  const t = e[Ee]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function Cs(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[Ee].modified_ && (il(t), Ue(4)),
        ot(e) && ((e = Eo(t, e)), t.parent_ || ko(t, e)),
        t.patches_ &&
          Kt('Patches').generateReplacementPatches_(
            n[Ee].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Eo(t, n, [])),
    il(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== cc ? e : void 0
  )
}
function Eo(e, t, n) {
  if (ei(t)) return t
  const r = t[Ee]
  if (!r) return ur(t, (o, i) => xs(e, r, t, o, i, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return ko(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const o = r.copy_
    let i = o,
      l = !1
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      ur(i, (u, s) => xs(e, r, o, u, s, n, l)),
      ko(e, o, !1),
      n &&
        e.patches_ &&
        Kt('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function xs(e, t, n, r, o, i, l) {
  if (Rt(o)) {
    const u = i && t && t.type_ !== 3 && !rl(t.assigned_, r) ? i.concat(r) : void 0,
      s = Eo(e, o, u)
    if ((dc(n, r, s), Rt(s))) e.canAutoFreeze_ = !1
    else return
  } else l && n.add(o)
  if (ot(o) && !ei(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    Eo(e, o), (!t || !t.scope_.parent_) && ko(e, o)
  }
}
function ko(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && du(t, n)
}
function kh(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : pc(),
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
    i = pu
  n && ((o = [r]), (i = ar))
  const { revoke: l, proxy: u } = Proxy.revocable(o, i)
  return (r.draft_ = u), (r.revoke_ = l), u
}
var pu = {
    get(e, t) {
      if (t === Ee) return e
      const n = Mt(e)
      if (!rl(n, t)) return Ch(e, n, t)
      const r = n[t]
      return e.finalized_ || !ot(r)
        ? r
        : r === Ni(e.base_, t)
          ? (Pi(e), (e.copy_[t] = sl(r, e)))
          : r
    },
    has(e, t) {
      return t in Mt(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(Mt(e))
    },
    set(e, t, n) {
      const r = hc(Mt(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const o = Ni(Mt(e), t),
          i = o == null ? void 0 : o[Ee]
        if (i && i.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (gh(n, o) && (n !== void 0 || rl(e.base_, t))) return !0
        Pi(e), ul(e)
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
        Ni(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Pi(e), ul(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Mt(e),
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
      return Sn(e.base_)
    },
    setPrototypeOf() {
      Ue(12)
    }
  },
  ar = {}
ur(pu, (e, t) => {
  ar[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
ar.deleteProperty = function (e, t) {
  return ar.set.call(this, e, t, void 0)
}
ar.set = function (e, t, n) {
  return pu.set.call(this, e[0], t, n, e[0])
}
function Ni(e, t) {
  const n = e[Ee]
  return (n ? Mt(n) : e)[t]
}
function Ch(e, t, n) {
  var o
  const r = hc(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (o = r.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0
}
function hc(e, t) {
  if (!(t in e)) return
  let n = Sn(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = Sn(n)
  }
}
function ul(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ul(e.parent_))
}
function Pi(e) {
  e.copy_ || (e.copy_ = ol(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var xh = class {
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
        if (ot(t)) {
          const i = ks(this),
            l = sl(t, void 0)
          let u = !0
          try {
            ;(o = n(l)), (u = !1)
          } finally {
            u ? il(i) : ll(i)
          }
          return Es(i, r), Cs(o, i)
        } else if (!t || typeof t != 'object') {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === cc && (o = void 0),
            this.autoFreeze_ && du(o, !0),
            r)
          ) {
            const i = [],
              l = []
            Kt('Patches').generateReplacementPatches_(t, o, i, l), r(i, l)
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
    ot(e) || Ue(8), Rt(e) && (e = mc(e))
    const t = ks(this),
      n = sl(e, void 0)
    return (n[Ee].isManual_ = !0), ll(t), n
  }
  finishDraft(e, t) {
    const n = e && e[Ee]
    ;(!n || !n.isManual_) && Ue(9)
    const { scope_: r } = n
    return Es(r, t), Cs(void 0, r)
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
    const r = Kt('Patches').applyPatches_
    return Rt(e) ? r(e, t) : this.produce(e, (o) => r(o, t))
  }
}
function sl(e, t) {
  const n = Zo(e)
    ? Kt('MapSet').proxyMap_(e, t)
    : bo(e)
      ? Kt('MapSet').proxySet_(e, t)
      : kh(e, t)
  return (t ? t.scope_ : pc()).drafts_.push(n), n
}
function mc(e) {
  return Rt(e) || Ue(10, e), yc(e)
}
function yc(e) {
  if (!ot(e) || ei(e)) return e
  const t = e[Ee]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = ol(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = ol(e, !0)
  return (
    ur(n, (r, o) => {
      dc(n, r, yc(o))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
var ke = new xh(),
  vc = ke.produce
ke.produceWithPatches.bind(ke)
ke.setAutoFreeze.bind(ke)
ke.setUseStrictShallowCopy.bind(ke)
ke.applyPatches.bind(ke)
ke.createDraft.bind(ke)
ke.finishDraft.bind(ke)
function Nh(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function Ph(
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
var Ns = (e) => (Array.isArray(e) ? e : [e])
function Rh(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    Ph(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function Th(e, t) {
  const n = [],
    { length: r } = e
  for (let o = 0; o < r; o++) n.push(e[o].apply(null, t))
  return n
}
var Oh = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  zh = typeof WeakRef < 'u' ? WeakRef : Oh,
  Lh = 0,
  Ps = 1
function $r() {
  return { s: Lh, v: void 0, o: null, p: null }
}
function gc(e, t = {}) {
  let n = $r()
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
        v === void 0 ? ((u = $r()), y.set(g, u)) : (u = v)
      } else {
        let y = u.p
        y === null && (u.p = y = new Map())
        const v = y.get(g)
        v === void 0 ? ((u = $r()), y.set(g, u)) : (u = v)
      }
    }
    const a = u
    let c
    if ((u.s === Ps ? (c = u.v) : ((c = e.apply(null, arguments)), i++), (a.s = Ps), r)) {
      const f = (o == null ? void 0 : o.deref()) ?? o
      f != null && r(f, c) && ((c = f), i !== 0 && i--),
        (o =
          (typeof c == 'object' && c !== null) || typeof c == 'function' ? new zh(c) : c)
    }
    return (a.v = c), c
  }
  return (
    (l.clearCache = () => {
      ;(n = $r()), l.resetResultsCount()
    }),
    (l.resultsCount = () => i),
    (l.resetResultsCount = () => {
      i = 0
    }),
    l
  )
}
function jh(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e
  return (...o) => {
    let i = 0,
      l = 0,
      u,
      s = {},
      a = o.pop()
    typeof a == 'object' && ((s = a), (a = o.pop())),
      Nh(
        a,
        `createSelector expects an output function after the inputs, but received: [${typeof a}]`
      )
    const c = { ...n, ...s },
      {
        memoize: f,
        memoizeOptions: m = [],
        argsMemoize: g = gc,
        argsMemoizeOptions: y = [],
        devModeChecks: v = {}
      } = c,
      E = Ns(m),
      p = Ns(y),
      d = Rh(o),
      h = f(
        function () {
          return i++, a.apply(null, arguments)
        },
        ...E
      ),
      S = g(
        function () {
          l++
          const N = Th(d, arguments)
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
function wc(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == 'function' ? i(n, r, e) : o(i)
}
var Dh = wc(),
  Ah = wc,
  Fh = (...e) => {
    const t = jh(...e)
    return (...n) => {
      const r = t(...n),
        o = (i, ...l) => r(Rt(i) ? mc(i) : i, ...l)
      return Object.assign(o, r), o
    }
  }
Fh(gc)
var Mh =
  typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == 'object' ? _o : _o.apply(null, arguments)
      }
function cr(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r)
      if (!o) throw new Error($e(0))
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
    (n.toString = () => `${e}`), (n.type = e), (n.match = (r) => yh(r) && r.type === e), n
  )
}
var Sc = class Qn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Qn.prototype)
  }
  static get [Symbol.species]() {
    return Qn
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Qn(...t[0].concat(this))
      : new Qn(...t.concat(this))
  }
}
function Rs(e) {
  return ot(e) ? vc(e, () => {}) : e
}
function Ts(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t)
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o
  }
  if (!n.insert) throw new Error($e(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function Ih(e) {
  return typeof e == 'boolean'
}
var Uh = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0
      } = t ?? {}
      let l = new Sc()
      return n && (Ih(n) ? l.push(Dh) : l.push(Ah(n.extraArgument))), l
    },
  $h = 'RTK_autoBatch',
  _c = (e) => (t) => {
    setTimeout(t, e)
  },
  Bh =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : _c(10),
  Hh =
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
              ? Bh
              : e.type === 'callback'
                ? e.queueNotification
                : _c(e.timeout),
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
              (o = !((f = c == null ? void 0 : c.meta) != null && f[$h])),
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
  Vh = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let o = new Sc(e)
      return r && o.push(Hh(typeof r == 'object' ? r : void 0)), o
    },
  Wh = !0
function Qh(e) {
  const t = Uh(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: l = void 0
    } = e || {}
  let u
  if (typeof n == 'function') u = n
  else if (fu(n)) u = hh(n)
  else throw new Error($e(1))
  let s
  typeof r == 'function' ? (s = r(t)) : (s = t())
  let a = _o
  o && (a = Mh({ trace: !Wh, ...(typeof o == 'object' && o) }))
  const c = mh(...s),
    f = Vh(c)
  let m = typeof l == 'function' ? l(f) : f()
  const g = a(...m)
  return ac(u, i, g)
}
function Ec(e) {
  const t = {},
    n = []
  let r
  const o = {
    addCase(i, l) {
      const u = typeof i == 'string' ? i : i.type
      if (!u) throw new Error($e(28))
      if (u in t) throw new Error($e(29))
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
function Kh(e) {
  return typeof e == 'function'
}
function qh(e, t) {
  let [n, r, o] = Ec(t),
    i
  if (Kh(e)) i = () => Rs(e())
  else {
    const u = Rs(e)
    i = () => u
  }
  function l(u = i(), s) {
    let a = [n[s.type], ...r.filter(({ matcher: c }) => c(s)).map(({ reducer: c }) => c)]
    return (
      a.filter((c) => !!c).length === 0 && (a = [o]),
      a.reduce((c, f) => {
        if (f)
          if (Rt(c)) {
            const g = f(c, s)
            return g === void 0 ? c : g
          } else {
            if (ot(c)) return vc(c, (m) => f(m, s))
            {
              const m = f(c, s)
              if (m === void 0) {
                if (c === null) return c
                throw new Error($e(9))
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
var Gh = Symbol.for('rtk-slice-createasyncthunk')
function Xh(e, t) {
  return `${e}/${t}`
}
function Yh({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Gh]
  return function (o) {
    const { name: i, reducerPath: l = i } = o
    if (!i) throw new Error($e(11))
    typeof process < 'u'
    const u = (typeof o.reducers == 'function' ? o.reducers(Zh()) : o.reducers) || {},
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
          if (!d) throw new Error($e(12))
          if (d in a.sliceCaseReducersByType) throw new Error($e(13))
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
          type: Xh(i, E),
          createNotation: typeof o.reducers == 'function'
        }
      em(p) ? nm(d, p, c, t) : bh(d, p, c)
    })
    function f() {
      const [E = {}, p = [], d = void 0] =
          typeof o.extraReducers == 'function' ? Ec(o.extraReducers) : [o.extraReducers],
        h = { ...E, ...a.sliceCaseReducersByType }
      return qh(o.initialState, (S) => {
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
        const p = Ts(g, this, { insert: () => new WeakMap() })
        return Ts(p, E, {
          insert: () => {
            const d = {}
            for (const [h, S] of Object.entries(o.selectors ?? {}))
              d[h] = Jh(this, S, E, this !== v)
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
function Jh(e, t, n, r) {
  function o(i, ...l) {
    let u = n.call(e, i)
    return typeof u > 'u' && r && (u = e.getInitialState()), t(u, ...l)
  }
  return (o.unwrapped = t), o
}
var kc = Yh()
function Zh() {
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
function bh({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, l
  if ('reducer' in r) {
    if (n && !tm(r)) throw new Error($e(17))
    ;(i = r.reducer), (l = r.prepare)
  } else i = r
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, l ? cr(e, l) : cr(e))
}
function em(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function tm(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function nm({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error($e(18))
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
      fulfilled: l || Br,
      pending: u || Br,
      rejected: s || Br,
      settled: a || Br
    })
}
function Br() {}
var hu = 'listenerMiddleware'
cr(`${hu}/add`)
cr(`${hu}/removeAll`)
cr(`${hu}/remove`)
function $e(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
const rm = { mode: 'initial', selectedCategories: [], questions: 5, startTime: 0 },
  Cc = kc({
    name: 'app',
    initialState: rm,
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
    addCategory: om,
    removeCategory: im,
    setQuestions: lm,
    startGame: um,
    endGame: sm,
    restart: am
  } = Cc.actions,
  cm = Cc.reducer,
  fm = [
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
  dm = fm.map((e) => e.replaceAll('_', ' ')),
  pm = '_base_slcfb_1',
  hm = { base: pm }
function mu({ children: e, className: t, ...n }) {
  return R.jsx('div', { className: `${hm.base} ${t}`, ...n, children: e })
}
const mm = '_base_lonk2_1',
  ym = '_primary_lonk2_21',
  vm = { base: mm, primary: ym }
function Yn({ children: e, className: t, primary: n, ...r }) {
  const o = `${t} ${On(vm, ['base', n && 'primary'])}`
  return R.jsx('button', { className: o, ...r, children: e })
}
const gm = '/quiz-game/favicon.svg',
  wm = [5, 10, 15, 20]
function Sm() {
  const { selectedCategories: e, questions: t } = Qt(({ app: c }) => c),
    n = Yo(),
    r = dm.map((c) => ({ name: c, selected: e.includes(c) })),
    o = wm.map((c) => ({ number: c, selected: c === t })),
    i = (c) => {
      n(om(c.target.value))
    },
    l = (c) => {
      n(im(c.target.value))
    },
    u = (c) => {
      n(lm(c.target.value))
    },
    s = (c) => {
      c.preventDefault(), e.length && n(um())
    },
    a = On(Ft, ['play', (e.length === 0 || t < 5 || t > 20) && 'forbidden'])
  return R.jsx('form', {
    onSubmit: s,
    children: R.jsxs(mu, {
      className: Ft.base,
      children: [
        R.jsxs('div', {
          className: Ft.header,
          children: [
            R.jsx('object', {
              data: gm,
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
                Yn,
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
              Yn,
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
          children: R.jsx(Yn, { primary: !0, children: 'Start Game' })
        })
      ]
    })
  })
}
const _m = {},
  Em = '_base_147cg_1',
  km = '_appear_147cg_1',
  Cm = '_question_147cg_7',
  xm = '_answers_147cg_13',
  Nm = '_done_147cg_21',
  Pm = '_disappear_147cg_1',
  Rm = '_category_147cg_26',
  Tm = '_number_147cg_31',
  Om = '_index_147cg_43',
  zm = '_slash_147cg_48',
  Lm = '_total_147cg_53',
  ct = {
    base: Em,
    appear: km,
    question: Cm,
    answers: xm,
    done: Nm,
    disappear: Pm,
    category: Rm,
    number: Tm,
    index: Om,
    slash: zm,
    total: Lm
  },
  jm = '_base_1d00i_1',
  Dm = '_correct_1d00i_8',
  Am = '_wrong_1d00i_12',
  Fm = { base: jm, correct: Dm, wrong: Am }
function Mm({ label: e, correct: t, selected: n, done: r, onClick: o }) {
  const i = On(Fm, ['base', r && (t ? 'correct' : n && 'wrong')])
  return R.jsx(Yn, { className: i, onClick: o, children: e })
}
const Im = { cards: [], currentCard: {}, lastCard: !1, results: [] },
  xc = kc({
    name: 'game',
    initialState: Im,
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
  { setCards: Um, answerCard: $m } = xc.actions,
  Bm = xc.reducer
function Hm({ index: e, category: t, question: n, correctAnswer: r, answers: o = [] }) {
  const i = Yo(),
    [l, u] = rt.useState(!1),
    [s, a] = rt.useState(),
    { lastCard: c } = Qt(({ game: y }) => y),
    { questions: f } = Qt(({ app: y }) => y),
    m = On(ct, ['base', l && 'done']),
    g = (y) => {
      l ||
        (u(!0),
        a(y),
        setTimeout(() => {
          i($m(y)), u(!1), c && i(sm())
        }, 2e3))
    }
  return R.jsxs(mu, {
    className: m,
    children: [
      R.jsxs('div', {
        className: ct.number,
        children: [
          R.jsx('span', { className: ct.index, children: e + 1 }),
          R.jsx('span', { className: ct.slash, children: '/' }),
          R.jsx('span', { className: ct.total, children: f })
        ]
      }),
      R.jsx('div', { className: ct.category, children: t }),
      R.jsx('div', { className: ct.question, children: R.jsx('h3', { children: n }) }),
      R.jsx('div', {
        className: ct.answers,
        children: o.map((y, v) =>
          R.jsx(
            Mm,
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
function Nc(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Vm } = Object.prototype,
  { getPrototypeOf: yu } = Object,
  ti = ((e) => (t) => {
    const n = Vm.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Ye = (e) => ((e = e.toLowerCase()), (t) => ti(t) === e),
  ni = (e) => (t) => typeof t === e,
  { isArray: zn } = Array,
  fr = ni('undefined')
function Wm(e) {
  return (
    e !== null &&
    !fr(e) &&
    e.constructor !== null &&
    !fr(e.constructor) &&
    Oe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Pc = Ye('ArrayBuffer')
function Qm(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pc(e.buffer)),
    t
  )
}
const Km = ni('string'),
  Oe = ni('function'),
  Rc = ni('number'),
  ri = (e) => e !== null && typeof e == 'object',
  qm = (e) => e === !0 || e === !1,
  lo = (e) => {
    if (ti(e) !== 'object') return !1
    const t = yu(e)
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Gm = Ye('Date'),
  Xm = Ye('File'),
  Ym = Ye('Blob'),
  Jm = Ye('FileList'),
  Zm = (e) => ri(e) && Oe(e.pipe),
  bm = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Oe(e.append) &&
          ((t = ti(e)) === 'formdata' ||
            (t === 'object' && Oe(e.toString) && e.toString() === '[object FormData]'))))
    )
  },
  ey = Ye('URLSearchParams'),
  ty = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function zr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), zn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length
    let u
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e)
  }
}
function Tc(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Oc =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  zc = (e) => !fr(e) && e !== Oc
function al() {
  const { caseless: e } = (zc(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Tc(t, o)) || o
      lo(t[i]) && lo(r)
        ? (t[i] = al(t[i], r))
        : lo(r)
          ? (t[i] = al({}, r))
          : zn(r)
            ? (t[i] = r.slice())
            : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && zr(arguments[r], n)
  return t
}
const ny = (e, t, n, { allOwnKeys: r } = {}) => (
    zr(
      t,
      (o, i) => {
        n && Oe(o) ? (e[i] = Nc(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ry = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  oy = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  iy = (e, t, n, r) => {
    let o, i, l
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0))
      e = n !== !1 && yu(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  ly = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  uy = (e) => {
    if (!e) return null
    if (zn(e)) return e
    let t = e.length
    if (!Rc(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  sy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && yu(Uint8Array)),
  ay = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  cy = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  fy = Ye('HTMLFormElement'),
  dy = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  Os = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  py = Ye('RegExp'),
  Lc = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    zr(n, (o, i) => {
      let l
      ;(l = t(o, i, e)) !== !1 && (r[i] = l || o)
    }),
      Object.defineProperties(e, r)
  },
  hy = (e) => {
    Lc(e, (t, n) => {
      if (Oe(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const r = e[n]
      if (Oe(r)) {
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
  my = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0
        })
      }
    return zn(e) ? r(e) : r(String(e).split(t)), n
  },
  yy = () => {},
  vy = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ri = 'abcdefghijklmnopqrstuvwxyz',
  zs = '0123456789',
  jc = { DIGIT: zs, ALPHA: Ri, ALPHA_DIGIT: Ri + Ri.toUpperCase() + zs },
  gy = (e = 16, t = jc.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function wy(e) {
  return !!(
    e &&
    Oe(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const Sy = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ri(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const i = zn(r) ? [] : {}
            return (
              zr(r, (l, u) => {
                const s = n(l, o + 1)
                !fr(s) && (i[u] = s)
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
  _y = Ye('AsyncFunction'),
  Ey = (e) => e && (ri(e) || Oe(e)) && Oe(e.then) && Oe(e.catch),
  w = {
    isArray: zn,
    isArrayBuffer: Pc,
    isBuffer: Wm,
    isFormData: bm,
    isArrayBufferView: Qm,
    isString: Km,
    isNumber: Rc,
    isBoolean: qm,
    isObject: ri,
    isPlainObject: lo,
    isUndefined: fr,
    isDate: Gm,
    isFile: Xm,
    isBlob: Ym,
    isRegExp: py,
    isFunction: Oe,
    isStream: Zm,
    isURLSearchParams: ey,
    isTypedArray: sy,
    isFileList: Jm,
    forEach: zr,
    merge: al,
    extend: ny,
    trim: ty,
    stripBOM: ry,
    inherits: oy,
    toFlatObject: iy,
    kindOf: ti,
    kindOfTest: Ye,
    endsWith: ly,
    toArray: uy,
    forEachEntry: ay,
    matchAll: cy,
    isHTMLForm: fy,
    hasOwnProperty: Os,
    hasOwnProp: Os,
    reduceDescriptors: Lc,
    freezeMethods: hy,
    toObjectSet: my,
    toCamelCase: dy,
    noop: yy,
    toFiniteNumber: vy,
    findKey: Tc,
    global: Oc,
    isContextDefined: zc,
    ALPHABET: jc,
    generateString: gy,
    isSpecCompliantForm: wy,
    toJSONObject: Sy,
    isAsyncFn: _y,
    isThenable: Ey
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
const Dc = D.prototype,
  Ac = {}
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
  Ac[e] = { value: e }
})
Object.defineProperties(D, Ac)
Object.defineProperty(Dc, 'isAxiosError', { value: !0 })
D.from = (e, t, n, r, o, i) => {
  const l = Object.create(Dc)
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
const ky = null
function cl(e) {
  return w.isPlainObject(e) || w.isArray(e)
}
function Fc(e) {
  return w.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Ls(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Fc(o)), !n && i ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function Cy(e) {
  return w.isArray(e) && !e.some(cl)
}
const xy = w.toFlatObject(w, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function oi(e, t, n) {
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
        (w.isArray(y) && Cy(y)) ||
        ((w.isFileList(y) || w.endsWith(v, '[]')) && (p = w.toArray(y)))
      )
        return (
          (v = Fc(v)),
          p.forEach(function (h, S) {
            !(w.isUndefined(h) || h === null) &&
              t.append(l === !0 ? Ls([v], S, i) : l === null ? v : v + '[]', a(h))
          }),
          !1
        )
    }
    return cl(y) ? !0 : (t.append(Ls(E, v, i), a(y)), !1)
  }
  const f = [],
    m = Object.assign(xy, { defaultVisitor: c, convertValue: a, isVisitable: cl })
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
function js(e) {
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
function vu(e, t) {
  ;(this._pairs = []), e && oi(e, this, t)
}
const Mc = vu.prototype
Mc.append = function (t, n) {
  this._pairs.push([t, n])
}
Mc.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, js)
      }
    : js
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function Ny(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Ic(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || Ny,
    o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = w.isURLSearchParams(t) ? t.toString() : new vu(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#')
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class Py {
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
const Ds = Py,
  Uc = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Ry = typeof URLSearchParams < 'u' ? URLSearchParams : vu,
  Ty = typeof FormData < 'u' ? FormData : null,
  Oy = typeof Blob < 'u' ? Blob : null,
  zy = {
    isBrowser: !0,
    classes: { URLSearchParams: Ry, FormData: Ty, Blob: Oy },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  },
  $c = typeof window < 'u' && typeof document < 'u',
  Ly = ((e) => $c && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  jy =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Dy = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: $c,
        hasStandardBrowserEnv: Ly,
        hasStandardBrowserWebWorkerEnv: jy
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  qe = { ...Dy, ...zy }
function Ay(e, t) {
  return oi(
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
function Fy(e) {
  return w.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function My(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function Bc(e) {
  function t(n, r, o, i) {
    let l = n[i++]
    if (l === '__proto__') return !0
    const u = Number.isFinite(+l),
      s = i >= n.length
    return (
      (l = !l && w.isArray(o) ? o.length : l),
      s
        ? (w.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !w.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && w.isArray(o[l]) && (o[l] = My(o[l])),
          !u)
    )
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {}
    return (
      w.forEachEntry(e, (r, o) => {
        t(Fy(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function Iy(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const gu = {
  transitional: Uc,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = w.isObject(t)
      if ((i && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t)))
        return o && o ? JSON.stringify(Bc(t)) : t
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
          return Ay(t, this.formSerializer).toString()
        if ((u = w.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData
          return oi(u ? { 'files[]': t } : t, s && new s(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType('application/json', !1), Iy(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || gu.transitional,
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
  gu.headers[e] = {}
})
const wu = gu,
  Uy = w.toObjectSet([
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
  $y = (e) => {
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
              !(!n || (t[n] && Uy[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  As = Symbol('internals')
function Fn(e) {
  return e && String(e).trim().toLowerCase()
}
function uo(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(uo) : String(e)
}
function By(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const Hy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Ti(e, t, n, r, o) {
  if (w.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!w.isString(t))) {
    if (w.isString(r)) return t.indexOf(r) !== -1
    if (w.isRegExp(r)) return r.test(t)
  }
}
function Vy(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Wy(e, t) {
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
class ii {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(u, s, a) {
      const c = Fn(s)
      if (!c) throw new Error('header name must be a non-empty string')
      const f = w.findKey(o, c)
      ;(!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || s] = uo(u))
    }
    const l = (u, s) => w.forEach(u, (a, c) => i(a, c, s))
    return (
      w.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : w.isString(t) && (t = t.trim()) && !Hy(t)
          ? l($y(t), n)
          : t != null && i(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = Fn(t)), t)) {
      const r = w.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return By(o)
        if (w.isFunction(n)) return n.call(this, o, r)
        if (w.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Fn(t)), t)) {
      const r = w.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Ti(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(l) {
      if (((l = Fn(l)), l)) {
        const u = w.findKey(r, l)
        u && (!n || Ti(r, r[u], u, n)) && (delete r[u], (o = !0))
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
      ;(!t || Ti(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
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
          ;(n[l] = uo(o)), delete n[i]
          return
        }
        const u = t ? Vy(i) : String(i).trim()
        u !== i && delete n[i], (n[u] = uo(o)), (r[u] = !0)
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
    const r = (this[As] = this[As] = { accessors: {} }).accessors,
      o = this.prototype
    function i(l) {
      const u = Fn(l)
      r[u] || (Wy(o, l), (r[u] = !0))
    }
    return w.isArray(t) ? t.forEach(i) : i(t), this
  }
}
ii.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
w.reduceDescriptors(ii.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    }
  }
})
w.freezeMethods(ii)
const tt = ii
function Oi(e, t) {
  const n = this || wu,
    r = t || n,
    o = tt.from(r.headers)
  let i = r.data
  return (
    w.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function Hc(e) {
  return !!(e && e.__CANCEL__)
}
function Lr(e, t, n) {
  D.call(this, e ?? 'canceled', D.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
w.inherits(Lr, D, { __CANCEL__: !0 })
function Qy(e, t, n) {
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
const Ky = qe.hasStandardBrowserEnv
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
function qy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Gy(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Vc(e, t) {
  return e && !qy(t) ? Gy(e, t) : t
}
const Xy = qe.hasStandardBrowserEnv
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
function Yy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Jy(e, t) {
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
function Fs(e, t) {
  let n = 0
  const r = Jy(50, 250)
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
const Zy = typeof XMLHttpRequest < 'u',
  by =
    Zy &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const i = tt.from(e.headers).normalize()
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
        const m = Vc(e.baseURL, e.url)
        f.open(e.method.toUpperCase(), Ic(m, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout)
        function g() {
          if (!f) return
          const v = tt.from('getAllResponseHeaders' in f && f.getAllResponseHeaders()),
            p = {
              data: !l || l === 'text' || l === 'json' ? f.responseText : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: v,
              config: e,
              request: f
            }
          Qy(
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
            const p = e.transitional || Uc
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
              r(new D(E, p.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, e, f)),
              (f = null)
          }),
          qe.hasStandardBrowserEnv &&
            (u && w.isFunction(u) && (u = u(e)), u || (u !== !1 && Xy(m))))
        ) {
          const v = e.xsrfHeaderName && e.xsrfCookieName && Ky.read(e.xsrfCookieName)
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
            f.addEventListener('progress', Fs(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            f.upload &&
            f.upload.addEventListener('progress', Fs(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (v) => {
              f && (r(!v || v.type ? new Lr(null, e, f) : v), f.abort(), (f = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal && (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)))
        const y = Yy(m)
        if (y && qe.protocols.indexOf(y) === -1) {
          r(new D('Unsupported protocol ' + y + ':', D.ERR_BAD_REQUEST, e))
          return
        }
        f.send(o || null)
      })
    },
  fl = { http: ky, xhr: by }
w.forEach(fl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Ms = (e) => `- ${e}`,
  e0 = (e) => w.isFunction(e) || e === null || e === !1,
  Wc = {
    getAdapter: (e) => {
      e = w.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let i = 0; i < t; i++) {
        n = e[i]
        let l
        if (((r = n), !e0(n) && ((r = fl[(l = String(n)).toLowerCase()]), r === void 0)))
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
              i.map(Ms).join(`
`)
            : ' ' + Ms(i[0])
          : 'as no adapter specified'
        throw new D(
          'There is no suitable adapter to dispatch the request ' + l,
          'ERR_NOT_SUPPORT'
        )
      }
      return r
    },
    adapters: fl
  }
function zi(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new Lr(null, e)
}
function Is(e) {
  return (
    zi(e),
    (e.headers = tt.from(e.headers)),
    (e.data = Oi.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Wc.getAdapter(e.adapter || wu.adapter)(e).then(
      function (r) {
        return (
          zi(e),
          (r.data = Oi.call(e, e.transformResponse, r)),
          (r.headers = tt.from(r.headers)),
          r
        )
      },
      function (r) {
        return (
          Hc(r) ||
            (zi(e),
            r &&
              r.response &&
              ((r.response.data = Oi.call(e, e.transformResponse, r.response)),
              (r.response.headers = tt.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const Us = (e) => (e instanceof tt ? e.toJSON() : e)
function _n(e, t) {
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
    headers: (a, c) => o(Us(a), Us(c), !0)
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
const Qc = '1.6.4',
  Su = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  Su[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const $s = {}
Su.transitional = function (t, n, r) {
  function o(i, l) {
    return '[Axios v' + Qc + "] Transitional option '" + i + "'" + l + (r ? '. ' + r : '')
  }
  return (i, l, u) => {
    if (t === !1)
      throw new D(o(l, ' has been removed' + (n ? ' in ' + n : '')), D.ERR_DEPRECATED)
    return (
      n &&
        !$s[l] &&
        (($s[l] = !0),
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
function t0(e, t, n) {
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
const dl = { assertOptions: t0, validators: Su },
  ft = dl.validators
class Co {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new Ds(), response: new Ds() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = _n(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      dl.assertOptions(
        r,
        {
          silentJSONParsing: ft.transitional(ft.boolean),
          forcedJSONParsing: ft.transitional(ft.boolean),
          clarifyTimeoutError: ft.transitional(ft.boolean)
        },
        !1
      ),
      o != null &&
        (w.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : dl.assertOptions(o, { encode: ft.function, serialize: ft.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let l = i && w.merge(i.common, i[n.method])
    i &&
      w.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (y) => {
        delete i[y]
      }),
      (n.headers = tt.concat(l, i))
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
      const y = [Is.bind(this), void 0]
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
      c = Is.call(this, g)
    } catch (y) {
      return Promise.reject(y)
    }
    for (f = 0, m = a.length; f < m; ) c = c.then(a[f++], a[f++])
    return c
  }
  getUri(t) {
    t = _n(this.defaults, t)
    const n = Vc(t.baseURL, t.url)
    return Ic(n, t.params, t.paramsSerializer)
  }
}
w.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Co.prototype[t] = function (n, r) {
    return this.request(_n(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
w.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        _n(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l
        })
      )
    }
  }
  ;(Co.prototype[t] = n()), (Co.prototype[t + 'Form'] = n(!0))
})
const so = Co
class _u {
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
        r.reason || ((r.reason = new Lr(i, l, u)), n(r.reason))
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
      token: new _u(function (o) {
        t = o
      }),
      cancel: t
    }
  }
}
const n0 = _u
function r0(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function o0(e) {
  return w.isObject(e) && e.isAxiosError === !0
}
const pl = {
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
Object.entries(pl).forEach(([e, t]) => {
  pl[t] = e
})
const i0 = pl
function Kc(e) {
  const t = new so(e),
    n = Nc(so.prototype.request, t)
  return (
    w.extend(n, so.prototype, t, { allOwnKeys: !0 }),
    w.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Kc(_n(e, o))
    }),
    n
  )
}
const X = Kc(wu)
X.Axios = so
X.CanceledError = Lr
X.CancelToken = n0
X.isCancel = Hc
X.VERSION = Qc
X.toFormData = oi
X.AxiosError = D
X.Cancel = X.CanceledError
X.all = function (t) {
  return Promise.all(t)
}
X.spread = r0
X.isAxiosError = o0
X.mergeConfig = _n
X.AxiosHeaders = tt
X.formToJSON = (e) => Bc(w.isHTMLForm(e) ? new FormData(e) : e)
X.getAdapter = Wc.getAdapter
X.HttpStatusCode = i0
X.default = X
const l0 = X
function u0(e) {
  for (let t = e.length - 1; t > 0; t--) {
    const n = Math.floor(Math.random() * (t + 1)),
      r = e[t]
    ;(e[t] = e[n]), (e[n] = r)
  }
}
function s0() {
  const [e, t] = rt.useState(!1),
    {
      app: { selectedCategories: n, questions: r },
      game: { currentCard: o }
    } = Qt((l) => l),
    i = Yo()
  return (
    rt.useEffect(() => {
      const l = `https://the-trivia-api.com/v2/questions?categories=${n
        .join(',')
        .replaceAll(' ', '_')
        .toLowerCase()}&limit=${r}`
      l0.get(l)
        .then(({ data: u }) => {
          const s = u.map(
            ({ question: a, correctAnswer: c, incorrectAnswers: f, category: m }, g) => {
              f.length > 3 && f.splice(3)
              const y = [c, ...f]
              return (
                u0(y),
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
          i(Um(s)), t(!0)
        })
        .catch(console.log)
    }, []),
    { ready: e, currentCard: o }
  )
}
function a0() {
  const { ready: e, currentCard: t } = s0()
  return R.jsx('div', { className: _m.base, children: e && R.jsx(Hm, { ...t }) })
}
const c0 = '_base_fz0d2_1',
  f0 = '_appear_fz0d2_1',
  d0 = '_results_fz0d2_16',
  p0 = '_restart_fz0d2_31',
  h0 = '_result_fz0d2_16',
  m0 = '_answer_fz0d2_35',
  y0 = '_correct_fz0d2_39',
  Jn = {
    base: c0,
    appear: f0,
    results: d0,
    restart: p0,
    result: h0,
    answer: m0,
    correct: y0
  }
function v0() {
  const e = Yo(),
    {
      app: { questions: t, startTime: n },
      game: { results: r }
    } = Qt((s) => s),
    o = r.filter(({ correct: s }) => s).length,
    i = (performance.now() - n) / 1e3
  let l = (o / r.length) * (r.length * 10 - i)
  l = l >= 0 ? l : o / r.length
  const u = () => {
    e(am())
  }
  return R.jsxs(mu, {
    className: Jn.base,
    children: [
      R.jsxs('h1', { children: ['Score: ', l.toFixed(1)] }),
      R.jsxs('h3', { children: ['Correct answers: ', o, '/', t] }),
      R.jsxs('h3', { children: ['Time elapsed: ', i.toFixed(1), 's'] }),
      R.jsx('div', {
        className: Jn.results,
        children: r.map(({ correct: s, answer: a, card: c }, f) =>
          R.jsx(g0, { number: f + 1, correct: s, answer: a, ...c }, f)
        )
      }),
      R.jsx('div', {
        className: Jn.restart,
        children: R.jsx(Yn, { primary: !0, onClick: u, children: 'Play again' })
      })
    ]
  })
}
function g0({ question: e, number: t, answer: n, correctAnswer: r, correct: o }) {
  const i = On(Jn, ['result', o && 'correct'])
  return R.jsxs('div', {
    className: i,
    children: [
      R.jsxs('div', {
        children: [R.jsxs('b', { children: ['Question ', t, ':'] }), ' ', e]
      }),
      R.jsxs('div', {
        className: Jn.answer,
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
const w0 = '_base_rox5q_1',
  S0 = { base: w0 }
function _0() {
  return R.jsxs('div', {
    className: S0.base,
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
const E0 = { initial: R.jsx(Sm, {}), game: R.jsx(a0, {}), score: R.jsx(v0, {}) }
function k0() {
  const e = Qt((r) => r.app.mode),
    t = Qt((r) => r.game.currentCard),
    n = On(nh, ['base', t.category && t.category.replace(/\s/g, '').toLowerCase()])
  return R.jsxs('div', { className: n, children: [E0[e], R.jsx(_0, {})] })
}
const C0 = { reducer: { app: cm, game: Bm } },
  x0 = Qh(C0)
var qc = { exports: {} },
  xe = {},
  Gc = { exports: {} },
  Xc = {}
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
      Zd = ds.port2
    ;(ds.port1.onmessage = Dn),
      (An = function () {
        Zd.postMessage(null)
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
})(Xc)
Gc.exports = Xc
var N0 = Gc.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc = rt,
  Ce = N0
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
var Jc = new Set(),
  dr = {}
function Zt(e, t) {
  En(e, t), En(e + 'Capture', t)
}
function En(e, t) {
  for (dr[e] = t, e = 0; e < t.length; e++) Jc.add(t[e])
}
var it = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  hl = Object.prototype.hasOwnProperty,
  P0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bs = {},
  Hs = {}
function R0(e) {
  return hl.call(Hs, e)
    ? !0
    : hl.call(Bs, e)
      ? !1
      : P0.test(e)
        ? (Hs[e] = !0)
        : ((Bs[e] = !0), !1)
}
function T0(e, t, n, r) {
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
function O0(e, t, n, r) {
  if (t === null || typeof t > 'u' || T0(e, t, n, r)) return !0
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
var Eu = /[\-:]([a-z])/g
function ku(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Eu, ku)
    oe[t] = new de(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Eu, ku)
    oe[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Eu, ku)
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
function Cu(e, t, n, r) {
  var o = oe.hasOwnProperty(t) ? oe[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (O0(t, n, o, r) && (n = null),
    r || o === null
      ? R0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var at = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hr = Symbol.for('react.element'),
  tn = Symbol.for('react.portal'),
  nn = Symbol.for('react.fragment'),
  xu = Symbol.for('react.strict_mode'),
  ml = Symbol.for('react.profiler'),
  Zc = Symbol.for('react.provider'),
  bc = Symbol.for('react.context'),
  Nu = Symbol.for('react.forward_ref'),
  yl = Symbol.for('react.suspense'),
  vl = Symbol.for('react.suspense_list'),
  Pu = Symbol.for('react.memo'),
  pt = Symbol.for('react.lazy'),
  ef = Symbol.for('react.offscreen'),
  Vs = Symbol.iterator
function Mn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Vs && e[Vs]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var V = Object.assign,
  Li
function Kn(e) {
  if (Li === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Li = (t && t[1]) || ''
    }
  return (
    `
` +
    Li +
    e
  )
}
var ji = !1
function Di(e, t) {
  if (!e || ji) return ''
  ji = !0
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
    ;(ji = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Kn(e) : ''
}
function z0(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type)
    case 16:
      return Kn('Lazy')
    case 13:
      return Kn('Suspense')
    case 19:
      return Kn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Di(e.type, !1)), e
    case 11:
      return (e = Di(e.type.render, !1)), e
    case 1:
      return (e = Di(e.type, !0)), e
    default:
      return ''
  }
}
function gl(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case nn:
      return 'Fragment'
    case tn:
      return 'Portal'
    case ml:
      return 'Profiler'
    case xu:
      return 'StrictMode'
    case yl:
      return 'Suspense'
    case vl:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case bc:
        return (e.displayName || 'Context') + '.Consumer'
      case Zc:
        return (e._context.displayName || 'Context') + '.Provider'
      case Nu:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Pu:
        return (t = e.displayName || null), t !== null ? t : gl(e.type) || 'Memo'
      case pt:
        ;(t = e._payload), (e = e._init)
        try {
          return gl(e(t))
        } catch {}
    }
  return null
}
function L0(e) {
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
      return gl(t)
    case 8:
      return t === xu ? 'StrictMode' : 'Mode'
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
function Tt(e) {
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
function tf(e) {
  var t = e.type
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  )
}
function j0(e) {
  var t = tf(e) ? 'checked' : 'value',
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
function Vr(e) {
  e._valueTracker || (e._valueTracker = j0(e))
}
function nf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = tf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function xo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function wl(e, t) {
  var n = t.checked
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Ws(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Tt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function rf(e, t) {
  ;(t = t.checked), t != null && Cu(e, 'checked', t, !1)
}
function Sl(e, t) {
  rf(e, t)
  var n = Tt(t.value),
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
    ? _l(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && _l(e, t.type, Tt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Qs(e, t, n) {
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
function _l(e, t, n) {
  ;(t !== 'number' || xo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var qn = Array.isArray
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Tt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function El(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91))
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Ks(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92))
      if (qn(n)) {
        if (1 < n.length) throw Error(_(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Tt(n) }
}
function of(e, t) {
  var n = Tt(t.value),
    r = Tt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function qs(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function lf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function kl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Wr,
  uf = (function (e) {
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
        Wr = Wr || document.createElement('div'),
          Wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function pr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Zn = {
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
  D0 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Zn).forEach(function (e) {
  D0.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e])
  })
})
function sf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
      ? ('' + t).trim()
      : t + 'px'
}
function af(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = sf(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var A0 = V(
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
function Cl(e, t) {
  if (t) {
    if (A0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function xl(e, t) {
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
var Nl = null
function Ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Pl = null,
  mn = null,
  yn = null
function Gs(e) {
  if ((e = Ar(e))) {
    if (typeof Pl != 'function') throw Error(_(280))
    var t = e.stateNode
    t && ((t = ci(t)), Pl(e.stateNode, e.type, t))
  }
}
function cf(e) {
  mn ? (yn ? yn.push(e) : (yn = [e])) : (mn = e)
}
function ff() {
  if (mn) {
    var e = mn,
      t = yn
    if (((yn = mn = null), Gs(e), t)) for (e = 0; e < t.length; e++) Gs(t[e])
  }
}
function df(e, t) {
  return e(t)
}
function pf() {}
var Ai = !1
function hf(e, t, n) {
  if (Ai) return e(t, n)
  Ai = !0
  try {
    return df(e, t, n)
  } finally {
    ;(Ai = !1), (mn !== null || yn !== null) && (pf(), ff())
  }
}
function hr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ci(n)
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
var Rl = !1
if (it)
  try {
    var In = {}
    Object.defineProperty(In, 'passive', {
      get: function () {
        Rl = !0
      }
    }),
      window.addEventListener('test', In, In),
      window.removeEventListener('test', In, In)
  } catch {
    Rl = !1
  }
function F0(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (c) {
    this.onError(c)
  }
}
var bn = !1,
  No = null,
  Po = !1,
  Tl = null,
  M0 = {
    onError: function (e) {
      ;(bn = !0), (No = e)
    }
  }
function I0(e, t, n, r, o, i, l, u, s) {
  ;(bn = !1), (No = null), F0.apply(M0, arguments)
}
function U0(e, t, n, r, o, i, l, u, s) {
  if ((I0.apply(this, arguments), bn)) {
    if (bn) {
      var a = No
      ;(bn = !1), (No = null)
    } else throw Error(_(198))
    Po || ((Po = !0), (Tl = a))
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
function mf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Xs(e) {
  if (bt(e) !== e) throw Error(_(188))
}
function $0(e) {
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
        if (i === n) return Xs(o), e
        if (i === r) return Xs(o), t
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
function yf(e) {
  return (e = $0(e)), e !== null ? vf(e) : null
}
function vf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = vf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var gf = Ce.unstable_scheduleCallback,
  Ys = Ce.unstable_cancelCallback,
  B0 = Ce.unstable_shouldYield,
  H0 = Ce.unstable_requestPaint,
  q = Ce.unstable_now,
  V0 = Ce.unstable_getCurrentPriorityLevel,
  Tu = Ce.unstable_ImmediatePriority,
  wf = Ce.unstable_UserBlockingPriority,
  Ro = Ce.unstable_NormalPriority,
  W0 = Ce.unstable_LowPriority,
  Sf = Ce.unstable_IdlePriority,
  li = null,
  Ge = null
function Q0(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == 'function')
    try {
      Ge.onCommitFiberRoot(li, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : G0,
  K0 = Math.log,
  q0 = Math.LN2
function G0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((K0(e) / q0) | 0)) | 0
}
var Qr = 64,
  Kr = 4194304
function Gn(e) {
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
function To(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var u = l & ~o
    u !== 0 ? (r = Gn(u)) : ((i &= l), i !== 0 && (r = Gn(i)))
  } else (l = n & ~o), l !== 0 ? (r = Gn(l)) : i !== 0 && (r = Gn(i))
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
      (n = 31 - Be(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function X0(e, t) {
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
function Y0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Be(i),
      u = 1 << l,
      s = o[l]
    s === -1 ? (!(u & n) || u & r) && (o[l] = X0(u, t)) : s <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function Ol(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function _f() {
  var e = Qr
  return (Qr <<= 1), !(Qr & 4194240) && (Qr = 64), e
}
function Fi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function jr(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n)
}
function J0(e, t) {
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
    var o = 31 - Be(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Ou(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var F = 0
function Ef(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var kf,
  zu,
  Cf,
  xf,
  Nf,
  zl = !1,
  qr = [],
  wt = null,
  St = null,
  _t = null,
  mr = new Map(),
  yr = new Map(),
  mt = [],
  Z0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Js(e, t) {
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
      mr.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      yr.delete(t.pointerId)
  }
}
function Un(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
      }),
      t !== null && ((t = Ar(t)), t !== null && zu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function b0(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (wt = Un(wt, e, t, n, r, o)), !0
    case 'dragenter':
      return (St = Un(St, e, t, n, r, o)), !0
    case 'mouseover':
      return (_t = Un(_t, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return mr.set(i, Un(mr.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), yr.set(i, Un(yr.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}
function Pf(e) {
  var t = $t(e.target)
  if (t !== null) {
    var n = bt(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mf(n)), t !== null)) {
          ;(e.blockedOn = t),
            Nf(e.priority, function () {
              Cf(n)
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
function ao(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Nl = r), n.target.dispatchEvent(r), (Nl = null)
    } else return (t = Ar(n)), t !== null && zu(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Zs(e, t, n) {
  ao(e) && n.delete(t)
}
function ev() {
  ;(zl = !1),
    wt !== null && ao(wt) && (wt = null),
    St !== null && ao(St) && (St = null),
    _t !== null && ao(_t) && (_t = null),
    mr.forEach(Zs),
    yr.forEach(Zs)
}
function $n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zl || ((zl = !0), Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, ev)))
}
function vr(e) {
  function t(o) {
    return $n(o, e)
  }
  if (0 < qr.length) {
    $n(qr[0], e)
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    wt !== null && $n(wt, e),
      St !== null && $n(St, e),
      _t !== null && $n(_t, e),
      mr.forEach(t),
      yr.forEach(t),
      n = 0;
    n < mt.length;
    n++
  )
    (r = mt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < mt.length && ((n = mt[0]), n.blockedOn === null); )
    Pf(n), n.blockedOn === null && mt.shift()
}
var vn = at.ReactCurrentBatchConfig,
  Oo = !0
function tv(e, t, n, r) {
  var o = F,
    i = vn.transition
  vn.transition = null
  try {
    ;(F = 1), Lu(e, t, n, r)
  } finally {
    ;(F = o), (vn.transition = i)
  }
}
function nv(e, t, n, r) {
  var o = F,
    i = vn.transition
  vn.transition = null
  try {
    ;(F = 4), Lu(e, t, n, r)
  } finally {
    ;(F = o), (vn.transition = i)
  }
}
function Lu(e, t, n, r) {
  if (Oo) {
    var o = Ll(e, t, n, r)
    if (o === null) Ki(e, t, r, zo, n), Js(e, r)
    else if (b0(o, e, t, n, r)) r.stopPropagation()
    else if ((Js(e, r), t & 4 && -1 < Z0.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ar(o)
        if (
          (i !== null && kf(i),
          (i = Ll(e, t, n, r)),
          i === null && Ki(e, t, r, zo, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Ki(e, t, r, null, n)
  }
}
var zo = null
function Ll(e, t, n, r) {
  if (((zo = null), (e = Ru(r)), (e = $t(e)), e !== null))
    if (((t = bt(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = mf(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (zo = e), null
}
function Rf(e) {
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
      switch (V0()) {
        case Tu:
          return 1
        case wf:
          return 4
        case Ro:
        case W0:
          return 16
        case Sf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var vt = null,
  ju = null,
  co = null
function Tf() {
  if (co) return co
  var e,
    t = ju,
    n = t.length,
    r,
    o = 'value' in vt ? vt.value : vt.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (co = o.slice(e, 1 < r ? 1 - r : void 0))
}
function fo(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Gr() {
  return !0
}
function bs() {
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
        ? Gr
        : bs),
      (this.isPropagationStopped = bs),
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
          (this.isDefaultPrevented = Gr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gr))
      },
      persist: function () {},
      isPersistent: Gr
    }),
    t
  )
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Du = Ne(Ln),
  Dr = V({}, Ln, { view: 0, detail: 0 }),
  rv = Ne(Dr),
  Mi,
  Ii,
  Bn,
  ui = V({}, Dr, {
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
    getModifierState: Au,
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
        : (e !== Bn &&
            (Bn && e.type === 'mousemove'
              ? ((Mi = e.screenX - Bn.screenX), (Ii = e.screenY - Bn.screenY))
              : (Ii = Mi = 0),
            (Bn = e)),
          Mi)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ii
    }
  }),
  ea = Ne(ui),
  ov = V({}, ui, { dataTransfer: 0 }),
  iv = Ne(ov),
  lv = V({}, Dr, { relatedTarget: 0 }),
  Ui = Ne(lv),
  uv = V({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sv = Ne(uv),
  av = V({}, Ln, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  cv = Ne(av),
  fv = V({}, Ln, { data: 0 }),
  ta = Ne(fv),
  dv = {
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
  pv = {
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
  hv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function mv(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = hv[e]) ? !!t[e] : !1
}
function Au() {
  return mv
}
var yv = V({}, Dr, {
    key: function (e) {
      if (e.key) {
        var t = dv[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = fo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? pv[e.keyCode] || 'Unidentified'
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
    getModifierState: Au,
    charCode: function (e) {
      return e.type === 'keypress' ? fo(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? fo(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    }
  }),
  vv = Ne(yv),
  gv = V({}, ui, {
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
  na = Ne(gv),
  wv = V({}, Dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Au
  }),
  Sv = Ne(wv),
  _v = V({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ev = Ne(_v),
  kv = V({}, ui, {
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
  Cv = Ne(kv),
  xv = [9, 13, 27, 32],
  Fu = it && 'CompositionEvent' in window,
  er = null
it && 'documentMode' in document && (er = document.documentMode)
var Nv = it && 'TextEvent' in window && !er,
  Of = it && (!Fu || (er && 8 < er && 11 >= er)),
  ra = ' ',
  oa = !1
function zf(e, t) {
  switch (e) {
    case 'keyup':
      return xv.indexOf(t.keyCode) !== -1
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
function Lf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var rn = !1
function Pv(e, t) {
  switch (e) {
    case 'compositionend':
      return Lf(t)
    case 'keypress':
      return t.which !== 32 ? null : ((oa = !0), ra)
    case 'textInput':
      return (e = t.data), e === ra && oa ? null : e
    default:
      return null
  }
}
function Rv(e, t) {
  if (rn)
    return e === 'compositionend' || (!Fu && zf(e, t))
      ? ((e = Tf()), (co = ju = vt = null), (rn = !1), e)
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
      return Of && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Tv = {
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
function ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Tv[e.type] : t === 'textarea'
}
function jf(e, t, n, r) {
  cf(r),
    (t = Lo(t, 'onChange')),
    0 < t.length &&
      ((n = new Du('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var tr = null,
  gr = null
function Ov(e) {
  Wf(e, 0)
}
function si(e) {
  var t = un(e)
  if (nf(t)) return e
}
function zv(e, t) {
  if (e === 'change') return t
}
var Df = !1
if (it) {
  var $i
  if (it) {
    var Bi = 'oninput' in document
    if (!Bi) {
      var la = document.createElement('div')
      la.setAttribute('oninput', 'return;'), (Bi = typeof la.oninput == 'function')
    }
    $i = Bi
  } else $i = !1
  Df = $i && (!document.documentMode || 9 < document.documentMode)
}
function ua() {
  tr && (tr.detachEvent('onpropertychange', Af), (gr = tr = null))
}
function Af(e) {
  if (e.propertyName === 'value' && si(gr)) {
    var t = []
    jf(t, gr, e, Ru(e)), hf(Ov, t)
  }
}
function Lv(e, t, n) {
  e === 'focusin'
    ? (ua(), (tr = t), (gr = n), tr.attachEvent('onpropertychange', Af))
    : e === 'focusout' && ua()
}
function jv(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return si(gr)
}
function Dv(e, t) {
  if (e === 'click') return si(t)
}
function Av(e, t) {
  if (e === 'input' || e === 'change') return si(t)
}
function Fv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ve = typeof Object.is == 'function' ? Object.is : Fv
function wr(e, t) {
  if (Ve(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!hl.call(t, o) || !Ve(e[o], t[o])) return !1
  }
  return !0
}
function sa(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function aa(e, t) {
  var n = sa(e)
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
    n = sa(n)
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
function Mf() {
  for (var e = window, t = xo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = xo(e.document)
  }
  return t
}
function Mu(e) {
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
function Mv(e) {
  var t = Mf(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && Ff(n.ownerDocument.documentElement, n)) {
    if (r !== null && Mu(n)) {
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
          (o = aa(n, i))
        var l = aa(n, r)
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
var Iv = it && 'documentMode' in document && 11 >= document.documentMode,
  on = null,
  jl = null,
  nr = null,
  Dl = !1
function ca(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Dl ||
    on == null ||
    on !== xo(r) ||
    ((r = on),
    'selectionStart' in r && Mu(r)
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
    (nr && wr(nr, r)) ||
      ((nr = r),
      (r = Lo(jl, 'onSelect')),
      0 < r.length &&
        ((t = new Du('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))))
}
function Xr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ln = {
    animationend: Xr('Animation', 'AnimationEnd'),
    animationiteration: Xr('Animation', 'AnimationIteration'),
    animationstart: Xr('Animation', 'AnimationStart'),
    transitionend: Xr('Transition', 'TransitionEnd')
  },
  Hi = {},
  If = {}
it &&
  ((If = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  'TransitionEvent' in window || delete ln.transitionend.transition)
function ai(e) {
  if (Hi[e]) return Hi[e]
  if (!ln[e]) return e
  var t = ln[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in If) return (Hi[e] = t[n])
  return e
}
var Uf = ai('animationend'),
  $f = ai('animationiteration'),
  Bf = ai('animationstart'),
  Hf = ai('transitionend'),
  Vf = new Map(),
  fa =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function zt(e, t) {
  Vf.set(e, t), Zt(t, [e])
}
for (var Vi = 0; Vi < fa.length; Vi++) {
  var Wi = fa[Vi],
    Uv = Wi.toLowerCase(),
    $v = Wi[0].toUpperCase() + Wi.slice(1)
  zt(Uv, 'on' + $v)
}
zt(Uf, 'onAnimationEnd')
zt($f, 'onAnimationIteration')
zt(Bf, 'onAnimationStart')
zt('dblclick', 'onDoubleClick')
zt('focusin', 'onFocus')
zt('focusout', 'onBlur')
zt(Hf, 'onTransitionEnd')
En('onMouseEnter', ['mouseout', 'mouseover'])
En('onMouseLeave', ['mouseout', 'mouseover'])
En('onPointerEnter', ['pointerout', 'pointerover'])
En('onPointerLeave', ['pointerout', 'pointerover'])
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
var Xn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Bv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Xn))
function da(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), U0(r, t, void 0, e), (e.currentTarget = null)
}
function Wf(e, t) {
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
          da(o, u, a), (i = s)
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
          da(o, u, a), (i = s)
        }
    }
  }
  if (Po) throw ((e = Tl), (Po = !1), (Tl = null), e)
}
function I(e, t) {
  var n = t[Ul]
  n === void 0 && (n = t[Ul] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Qf(t, e, 2, !1), n.add(r))
}
function Qi(e, t, n) {
  var r = 0
  t && (r |= 4), Qf(n, e, r, t)
}
var Yr = '_reactListening' + Math.random().toString(36).slice(2)
function Sr(e) {
  if (!e[Yr]) {
    ;(e[Yr] = !0),
      Jc.forEach(function (n) {
        n !== 'selectionchange' && (Bv.has(n) || Qi(n, !1, e), Qi(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Yr] || ((t[Yr] = !0), Qi('selectionchange', !1, t))
  }
}
function Qf(e, t, n, r) {
  switch (Rf(t)) {
    case 1:
      var o = tv
      break
    case 4:
      o = nv
      break
    default:
      o = Lu
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Rl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function Ki(e, t, n, r, o) {
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
  hf(function () {
    var a = i,
      c = Ru(n),
      f = []
    e: {
      var m = Vf.get(e)
      if (m !== void 0) {
        var g = Du,
          y = e
        switch (e) {
          case 'keypress':
            if (fo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = vv
            break
          case 'focusin':
            ;(y = 'focus'), (g = Ui)
            break
          case 'focusout':
            ;(y = 'blur'), (g = Ui)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Ui
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
            g = ea
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = iv
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Sv
            break
          case Uf:
          case $f:
          case Bf:
            g = sv
            break
          case Hf:
            g = Ev
            break
          case 'scroll':
            g = rv
            break
          case 'wheel':
            g = Cv
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = cv
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = na
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
              ((h = S), p !== null && ((S = hr(d, p)), S != null && v.push(_r(d, S, h)))),
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
          m && n !== Nl && (y = n.relatedTarget || n.fromElement) && ($t(y) || y[lt]))
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
            ((v = ea),
            (S = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = na), (S = 'onPointerLeave'), (p = 'onPointerEnter'), (d = 'pointer')),
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
          g !== null && pa(f, m, g, v, !1), y !== null && E !== null && pa(f, E, y, v, !0)
        }
      }
      e: {
        if (
          ((m = a ? un(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && m.type === 'file'))
        )
          var k = zv
        else if (ia(m))
          if (Df) k = Av
          else {
            k = jv
            var N = Lv
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (k = Dv)
        if (k && (k = k(e, a))) {
          jf(f, k, n, c)
          break e
        }
        N && N(e, m, a),
          e === 'focusout' &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === 'number' &&
            _l(m, 'number', m.value)
      }
      switch (((N = a ? un(a) : window), e)) {
        case 'focusin':
          ;(ia(N) || N.contentEditable === 'true') && ((on = N), (jl = a), (nr = null))
          break
        case 'focusout':
          nr = jl = on = null
          break
        case 'mousedown':
          Dl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Dl = !1), ca(f, n, c)
          break
        case 'selectionchange':
          if (Iv) break
        case 'keydown':
        case 'keyup':
          ca(f, n, c)
      }
      var P
      if (Fu)
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
          ? zf(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (Of &&
          n.locale !== 'ko' &&
          (rn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && rn && (P = Tf())
            : ((vt = c), (ju = 'value' in vt ? vt.value : vt.textContent), (rn = !0))),
        (N = Lo(a, T)),
        0 < N.length &&
          ((T = new ta(T, e, null, n, c)),
          f.push({ event: T, listeners: N }),
          P ? (T.data = P) : ((P = Lf(n)), P !== null && (T.data = P)))),
        (P = Nv ? Pv(e, n) : Rv(e, n)) &&
          ((a = Lo(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new ta('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = P)))
    }
    Wf(f, t)
  })
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Lo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = hr(e, n)),
      i != null && r.unshift(_r(e, i, o)),
      (i = hr(e, t)),
      i != null && r.push(_r(e, i, o))),
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
function pa(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = hr(n, i)), s != null && l.unshift(_r(n, s, u)))
        : o || ((s = hr(n, i)), s != null && l.push(_r(n, s, u)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var Hv = /\r\n?/g,
  Vv = /\u0000|\uFFFD/g
function ha(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Hv,
      `
`
    )
    .replace(Vv, '')
}
function Jr(e, t, n) {
  if (((t = ha(t)), ha(e) !== t && n)) throw Error(_(425))
}
function jo() {}
var Al = null,
  Fl = null
function Ml(e, t) {
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
var Il = typeof setTimeout == 'function' ? setTimeout : void 0,
  Wv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ma = typeof Promise == 'function' ? Promise : void 0,
  Qv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ma < 'u'
        ? function (e) {
            return ma.resolve(null).then(e).catch(Kv)
          }
        : Il
function Kv(e) {
  setTimeout(function () {
    throw e
  })
}
function qi(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), vr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  vr(t)
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
function ya(e) {
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
var jn = Math.random().toString(36).slice(2),
  Ke = '__reactFiber$' + jn,
  Er = '__reactProps$' + jn,
  lt = '__reactContainer$' + jn,
  Ul = '__reactEvents$' + jn,
  qv = '__reactListeners$' + jn,
  Gv = '__reactHandles$' + jn
function $t(e) {
  var t = e[Ke]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[lt] || n[Ke])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ya(e); e !== null; ) {
          if ((n = e[Ke])) return n
          e = ya(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Ar(e) {
  return (
    (e = e[Ke] || e[lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(_(33))
}
function ci(e) {
  return e[Er] || null
}
var $l = [],
  sn = -1
function Lt(e) {
  return { current: e }
}
function U(e) {
  0 > sn || ((e.current = $l[sn]), ($l[sn] = null), sn--)
}
function M(e, t) {
  sn++, ($l[sn] = e.current), (e.current = t)
}
var Ot = {},
  se = Lt(Ot),
  me = Lt(!1),
  qt = Ot
function kn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Ot
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
function Do() {
  U(me), U(se)
}
function va(e, t, n) {
  if (se.current !== Ot) throw Error(_(168))
  M(se, t), M(me, n)
}
function Kf(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(_(108, L0(e) || 'Unknown', o))
  return V({}, n, r)
}
function Ao(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ot),
    (qt = se.current),
    M(se, e),
    M(me, me.current),
    !0
  )
}
function ga(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(_(169))
  n
    ? ((e = Kf(e, t, qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(me),
      U(se),
      M(se, e))
    : U(me),
    M(me, n)
}
var Ze = null,
  fi = !1,
  Gi = !1
function qf(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e)
}
function Xv(e) {
  ;(fi = !0), qf(e)
}
function jt() {
  if (!Gi && Ze !== null) {
    Gi = !0
    var e = 0,
      t = F
    try {
      var n = Ze
      for (F = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Ze = null), (fi = !1)
    } catch (o) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), gf(Tu, jt), o)
    } finally {
      ;(F = t), (Gi = !1)
    }
  }
  return null
}
var an = [],
  cn = 0,
  Fo = null,
  Mo = 0,
  Pe = [],
  Re = 0,
  Gt = null,
  be = 1,
  et = ''
function It(e, t) {
  ;(an[cn++] = Mo), (an[cn++] = Fo), (Fo = e), (Mo = t)
}
function Gf(e, t, n) {
  ;(Pe[Re++] = be), (Pe[Re++] = et), (Pe[Re++] = Gt), (Gt = e)
  var r = be
  e = et
  var o = 32 - Be(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - Be(t) + o
  if (30 < i) {
    var l = o - (o % 5)
    ;(i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (be = (1 << (32 - Be(t) + o)) | (n << o) | r),
      (et = i + e)
  } else (be = (1 << i) | (n << o) | r), (et = e)
}
function Iu(e) {
  e.return !== null && (It(e, 1), Gf(e, 1, 0))
}
function Uu(e) {
  for (; e === Fo; ) (Fo = an[--cn]), (an[cn] = null), (Mo = an[--cn]), (an[cn] = null)
  for (; e === Gt; )
    (Gt = Pe[--Re]),
      (Pe[Re] = null),
      (et = Pe[--Re]),
      (Pe[Re] = null),
      (be = Pe[--Re]),
      (Pe[Re] = null)
}
var _e = null,
  Se = null,
  $ = !1,
  Ie = null
function Xf(e, t) {
  var n = Te(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function wa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Se = Et(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Se = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? { id: be, overflow: et } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Se = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Hl(e) {
  if ($) {
    var t = Se
    if (t) {
      var n = t
      if (!wa(e, t)) {
        if (Bl(e)) throw Error(_(418))
        t = Et(n.nextSibling)
        var r = _e
        t && wa(e, t) ? Xf(r, n) : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (_e = e))
      }
    } else {
      if (Bl(e)) throw Error(_(418))
      ;(e.flags = (e.flags & -4097) | 2), ($ = !1), (_e = e)
    }
  }
}
function Sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  _e = e
}
function Zr(e) {
  if (e !== _e) return !1
  if (!$) return Sa(e), ($ = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ml(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Bl(e)) throw (Yf(), Error(_(418)))
    for (; t; ) Xf(e, t), (t = Et(t.nextSibling))
  }
  if ((Sa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Se = Et(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Se = null
    }
  } else Se = _e ? Et(e.stateNode.nextSibling) : null
  return !0
}
function Yf() {
  for (var e = Se; e; ) e = Et(e.nextSibling)
}
function Cn() {
  ;(Se = _e = null), ($ = !1)
}
function $u(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e)
}
var Yv = at.ReactCurrentBatchConfig
function Fe(e, t) {
  if (e && e.defaultProps) {
    ;(t = V({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Io = Lt(null),
  Uo = null,
  fn = null,
  Bu = null
function Hu() {
  Bu = fn = Uo = null
}
function Vu(e) {
  var t = Io.current
  U(Io), (e._currentValue = t)
}
function Vl(e, t, n) {
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
  ;(Uo = e),
    (Bu = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null))
}
function Le(e) {
  var t = e._currentValue
  if (Bu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (Uo === null) throw Error(_(308))
      ;(fn = e), (Uo.dependencies = { lanes: 0, firstContext: e })
    } else fn = fn.next = e
  return t
}
var Bt = null
function Wu(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e)
}
function Jf(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Wu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ut(e, r)
  )
}
function ut(e, t) {
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
function Qu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Zf(e, t) {
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
function kt(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), A & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ut(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Wu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ut(e, n)
  )
}
function po(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ou(e, n)
  }
}
function _a(e, t) {
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
function $o(e, t, n, r) {
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
    ;(Yt |= l), (e.lanes = l), (e.memoizedState = f)
  }
}
function Ea(e, t, n) {
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
var bf = new Yc.Component().refs
function Wl(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var di = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bt(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ce(),
      o = xt(e),
      i = nt(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, o)),
      t !== null && (He(t, e, o, r), po(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ce(),
      o = xt(e),
      i = nt(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = kt(e, i, o)),
      t !== null && (He(t, e, o, r), po(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ce(),
      r = xt(e),
      o = nt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = kt(e, o, r)),
      t !== null && (He(t, e, r, n), po(t, e, r))
  }
}
function ka(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !wr(n, r) || !wr(o, i)
        : !0
  )
}
function ed(e, t, n) {
  var r = !1,
    o = Ot,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Le(i))
      : ((o = ye(t) ? qt : se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? kn(e, o) : Ot)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = di),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Ca(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && di.enqueueReplaceState(t, t.state, null)
}
function Ql(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = bf), Qu(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Le(i))
    : ((i = ye(t) ? qt : se.current), (o.context = kn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Wl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && di.enqueueReplaceState(o, o.state, null),
      $o(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Hn(e, t, n) {
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
            u === bf && (u = o.refs = {}), l === null ? delete u[i] : (u[i] = l)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(_(284))
    if (!n._owner) throw Error(_(290, e))
  }
  return e
}
function br(e, t) {
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
function xa(e) {
  var t = e._init
  return t(e._payload)
}
function td(e) {
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
      ? ((d = tl(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d)
  }
  function s(p, d, h, S) {
    var k = h.type
    return k === nn
      ? c(p, d, h.props.children, S, h.key)
      : d !== null &&
          (d.elementType === k ||
            (typeof k == 'object' && k !== null && k.$$typeof === pt && xa(k) === d.type))
        ? ((S = o(d, h.props)), (S.ref = Hn(p, d, h)), (S.return = p), S)
        : ((S = wo(h.type, h.key, h.props, null, p.mode, S)),
          (S.ref = Hn(p, d, h)),
          (S.return = p),
          S)
  }
  function a(p, d, h, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = nl(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h.children || [])), (d.return = p), d)
  }
  function c(p, d, h, S, k) {
    return d === null || d.tag !== 7
      ? ((d = Wt(h, p.mode, S, k)), (d.return = p), d)
      : ((d = o(d, h)), (d.return = p), d)
  }
  function f(p, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = tl('' + d, p.mode, h)), (d.return = p), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Hr:
          return (
            (h = wo(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = Hn(p, null, d)),
            (h.return = p),
            h
          )
        case tn:
          return (d = nl(d, p.mode, h)), (d.return = p), d
        case pt:
          var S = d._init
          return f(p, S(d._payload), h)
      }
      if (qn(d) || Mn(d)) return (d = Wt(d, p.mode, h, null)), (d.return = p), d
      br(p, d)
    }
    return null
  }
  function m(p, d, h, S) {
    var k = d !== null ? d.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return k !== null ? null : u(p, d, '' + h, S)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Hr:
          return h.key === k ? s(p, d, h, S) : null
        case tn:
          return h.key === k ? a(p, d, h, S) : null
        case pt:
          return (k = h._init), m(p, d, k(h._payload), S)
      }
      if (qn(h) || Mn(h)) return k !== null ? null : c(p, d, h, S, null)
      br(p, h)
    }
    return null
  }
  function g(p, d, h, S, k) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (p = p.get(h) || null), u(d, p, '' + S, k)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Hr:
          return (p = p.get(S.key === null ? h : S.key) || null), s(d, p, S, k)
        case tn:
          return (p = p.get(S.key === null ? h : S.key) || null), a(d, p, S, k)
        case pt:
          var N = S._init
          return g(p, d, h, N(S._payload), k)
      }
      if (qn(S) || Mn(S)) return (p = p.get(h) || null), c(d, p, S, k, null)
      br(d, S)
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
    if (T === h.length) return n(p, P), $ && It(p, T), k
    if (P === null) {
      for (; T < h.length; T++)
        (P = f(p, h[T], S)),
          P !== null &&
            ((d = i(P, d, T)), N === null ? (k = P) : (N.sibling = P), (N = P))
      return $ && It(p, T), k
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
      $ && It(p, T),
      k
    )
  }
  function v(p, d, h, S) {
    var k = Mn(h)
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
    if (j.done) return n(p, P), $ && It(p, T), k
    if (P === null) {
      for (; !j.done; T++, j = h.next())
        (j = f(p, j.value, S)),
          j !== null &&
            ((d = i(j, d, T)), N === null ? (k = j) : (N.sibling = j), (N = j))
      return $ && It(p, T), k
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
      $ && It(p, T),
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
        case Hr:
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
                    xa(k) === N.type)
                ) {
                  n(p, N.sibling),
                    (d = o(N, h.props)),
                    (d.ref = Hn(p, N, h)),
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
              : ((S = wo(h.type, h.key, h.props, null, p.mode, S)),
                (S.ref = Hn(p, d, h)),
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
            ;(d = nl(h, p.mode, S)), (d.return = p), (p = d)
          }
          return l(p)
        case pt:
          return (N = h._init), E(p, d, N(h._payload), S)
      }
      if (qn(h)) return y(p, d, h, S)
      if (Mn(h)) return v(p, d, h, S)
      br(p, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = tl(h, p.mode, S)), (d.return = p), (p = d)),
        l(p))
      : n(p, d)
  }
  return E
}
var xn = td(!0),
  nd = td(!1),
  Fr = {},
  Xe = Lt(Fr),
  kr = Lt(Fr),
  Cr = Lt(Fr)
function Ht(e) {
  if (e === Fr) throw Error(_(174))
  return e
}
function Ku(e, t) {
  switch ((M(Cr, t), M(kr, e), M(Xe, Fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kl(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kl(t, e))
  }
  U(Xe), M(Xe, t)
}
function Nn() {
  U(Xe), U(kr), U(Cr)
}
function rd(e) {
  Ht(Cr.current)
  var t = Ht(Xe.current),
    n = kl(t, e.type)
  t !== n && (M(kr, e), M(Xe, n))
}
function qu(e) {
  kr.current === e && (U(Xe), U(kr))
}
var B = Lt(0)
function Bo(e) {
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
var Xi = []
function Gu() {
  for (var e = 0; e < Xi.length; e++) Xi[e]._workInProgressVersionPrimary = null
  Xi.length = 0
}
var ho = at.ReactCurrentDispatcher,
  Yi = at.ReactCurrentBatchConfig,
  Xt = 0,
  H = null,
  Y = null,
  b = null,
  Ho = !1,
  rr = !1,
  xr = 0,
  Jv = 0
function ie() {
  throw Error(_(321))
}
function Xu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ve(e[n], t[n])) return !1
  return !0
}
function Yu(e, t, n, r, o, i) {
  if (
    ((Xt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ho.current = e === null || e.memoizedState === null ? tg : ng),
    (e = n(r, o)),
    rr)
  ) {
    i = 0
    do {
      if (((rr = !1), (xr = 0), 25 <= i)) throw Error(_(301))
      ;(i += 1), (b = Y = null), (t.updateQueue = null), (ho.current = rg), (e = n(r, o))
    } while (rr)
  }
  if (
    ((ho.current = Vo),
    (t = Y !== null && Y.next !== null),
    (Xt = 0),
    (b = Y = H = null),
    (Ho = !1),
    t)
  )
    throw Error(_(300))
  return e
}
function Ju() {
  var e = xr !== 0
  return (xr = 0), e
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
function Nr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ji(e) {
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
      if ((Xt & c) === c)
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
        s === null ? ((u = s = f), (l = r)) : (s = s.next = f), (H.lanes |= c), (Yt |= c)
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
    do (i = o.lane), (H.lanes |= i), (Yt |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Zi(e) {
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
function od() {}
function id(e, t) {
  var n = H,
    r = je(),
    o = t(),
    i = !Ve(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (he = !0)),
    (r = r.queue),
    Zu(sd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Pr(9, ud.bind(null, n, r, o, t), void 0, null), ee === null))
      throw Error(_(349))
    Xt & 30 || ld(n, t, o)
  }
  return o
}
function ld(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function ud(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), ad(t) && cd(e)
}
function sd(e, t, n) {
  return n(function () {
    ad(t) && cd(e)
  })
}
function ad(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Ve(e, n)
  } catch {
    return !0
  }
}
function cd(e) {
  var t = ut(e, 1)
  t !== null && He(t, e, 1, -1)
}
function Na(e) {
  var t = Qe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = eg.bind(null, H, e)),
    [t.memoizedState, e]
  )
}
function Pr(e, t, n, r) {
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
function fd() {
  return je().memoizedState
}
function mo(e, t, n, r) {
  var o = Qe()
  ;(H.flags |= e), (o.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r))
}
function pi(e, t, n, r) {
  var o = je()
  r = r === void 0 ? null : r
  var i = void 0
  if (Y !== null) {
    var l = Y.memoizedState
    if (((i = l.destroy), r !== null && Xu(r, l.deps))) {
      o.memoizedState = Pr(t, n, i, r)
      return
    }
  }
  ;(H.flags |= e), (o.memoizedState = Pr(1 | t, n, i, r))
}
function Pa(e, t) {
  return mo(8390656, 8, e, t)
}
function Zu(e, t) {
  return pi(2048, 8, e, t)
}
function dd(e, t) {
  return pi(4, 2, e, t)
}
function pd(e, t) {
  return pi(4, 4, e, t)
}
function hd(e, t) {
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
function md(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), pi(4, 4, hd.bind(null, t, e), n)
}
function bu() {}
function yd(e, t) {
  var n = je()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Xu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function vd(e, t) {
  var n = je()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function gd(e, t, n) {
  return Xt & 21
    ? (Ve(n, t) || ((n = _f()), (H.lanes |= n), (Yt |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n))
}
function Zv(e, t) {
  var n = F
  ;(F = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Yi.transition
  Yi.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(F = n), (Yi.transition = r)
  }
}
function wd() {
  return je().memoizedState
}
function bv(e, t, n) {
  var r = xt(e)
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Sd(e))
  )
    _d(t, n)
  else if (((n = Jf(e, t, n, r)), n !== null)) {
    var o = ce()
    He(n, e, r, o), Ed(n, t, r)
  }
}
function eg(e, t, n) {
  var r = xt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Sd(e)) _d(t, o)
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
          s === null ? ((o.next = o), Wu(t)) : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Jf(e, t, o, r)), n !== null && ((o = ce()), He(n, e, r, o), Ed(n, t, r))
  }
}
function Sd(e) {
  var t = e.alternate
  return e === H || (t !== null && t === H)
}
function _d(e, t) {
  rr = Ho = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Ed(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ou(e, n)
  }
}
var Vo = {
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
  tg = {
    readContext: Le,
    useCallback: function (e, t) {
      return (Qe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Le,
    useEffect: Pa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), mo(4194308, 4, hd.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return mo(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return mo(4, 2, e, t)
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
        (e = e.dispatch = bv.bind(null, H, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Qe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Na,
    useDebugValue: bu,
    useDeferredValue: function (e) {
      return (Qe().memoizedState = e)
    },
    useTransition: function () {
      var e = Na(!1),
        t = e[0]
      return (e = Zv.bind(null, e[1])), (Qe().memoizedState = e), [t, e]
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
        Xt & 30 || ld(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        Pa(sd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Pr(9, ud.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Qe(),
        t = ee.identifierPrefix
      if ($) {
        var n = et,
          r = be
        ;(n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = xr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Jv++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  ng = {
    readContext: Le,
    useCallback: yd,
    useContext: Le,
    useEffect: Zu,
    useImperativeHandle: md,
    useInsertionEffect: dd,
    useLayoutEffect: pd,
    useMemo: vd,
    useReducer: Ji,
    useRef: fd,
    useState: function () {
      return Ji(Nr)
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = je()
      return gd(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Ji(Nr)[0],
        t = je().memoizedState
      return [e, t]
    },
    useMutableSource: od,
    useSyncExternalStore: id,
    useId: wd,
    unstable_isNewReconciler: !1
  },
  rg = {
    readContext: Le,
    useCallback: yd,
    useContext: Le,
    useEffect: Zu,
    useImperativeHandle: md,
    useInsertionEffect: dd,
    useLayoutEffect: pd,
    useMemo: vd,
    useReducer: Zi,
    useRef: fd,
    useState: function () {
      return Zi(Nr)
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = je()
      return Y === null ? (t.memoizedState = e) : gd(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Zi(Nr)[0],
        t = je().memoizedState
      return [e, t]
    },
    useMutableSource: od,
    useSyncExternalStore: id,
    useId: wd,
    unstable_isNewReconciler: !1
  }
function Pn(e, t) {
  try {
    var n = '',
      r = t
    do (n += z0(r)), (r = r.return)
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
function bi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Kl(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var og = typeof WeakMap == 'function' ? WeakMap : Map
function kd(e, t, n) {
  ;(n = nt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Qo || ((Qo = !0), (nu = r)), Kl(e, t)
    }),
    n
  )
}
function Cd(e, t, n) {
  ;(n = nt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Kl(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Kl(e, t),
          typeof r != 'function' && (Ct === null ? (Ct = new Set([this])) : Ct.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Ra(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new og()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = gg.bind(null, e, t, n)), t.then(e, e))
}
function Ta(e) {
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
function Oa(e, t, n, r, o) {
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
              : ((t = nt(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var ig = at.ReactCurrentOwner,
  he = !1
function ae(e, t, n, r) {
  t.child = e === null ? nd(t, null, n, r) : xn(t, e.child, n, r)
}
function za(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    gn(t, o),
    (r = Yu(e, t, n, r, i, o)),
    (n = Ju()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        st(e, t, o))
      : ($ && n && Iu(t), (t.flags |= 1), ae(e, t, r, o), t.child)
  )
}
function La(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !us(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), xd(e, t, i, r, o))
      : ((e = wo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : wr), n(l, r) && e.ref === t.ref))
      return st(e, t, o)
  }
  return (t.flags |= 1), (e = Nt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function xd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (wr(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (he = !0)
      else return (t.lanes = e.lanes), st(e, t, o)
  }
  return ql(e, t, n, r, o)
}
function Nd(e, t, n) {
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
function Pd(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ql(e, t, n, r, o) {
  var i = ye(n) ? qt : se.current
  return (
    (i = kn(t, i)),
    gn(t, o),
    (n = Yu(e, t, n, r, i, o)),
    (r = Ju()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        st(e, t, o))
      : ($ && r && Iu(t), (t.flags |= 1), ae(e, t, n, o), t.child)
  )
}
function ja(e, t, n, r, o) {
  if (ye(n)) {
    var i = !0
    Ao(t)
  } else i = !1
  if ((gn(t, o), t.stateNode === null)) yo(e, t), ed(t, n, r), Ql(t, n, r, o), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps
    l.props = u
    var s = l.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = Le(a))
      : ((a = ye(n) ? qt : se.current), (a = kn(t, a)))
    var c = n.getDerivedStateFromProps,
      f = typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Ca(t, l, r, a)),
      (ht = !1)
    var m = t.memoizedState
    ;(l.state = m),
      $o(t, r, l, o),
      (s = t.memoizedState),
      u !== r || m !== s || me.current || ht
        ? (typeof c == 'function' && (Wl(t, n, c, r), (s = t.memoizedState)),
          (u = ht || ka(t, n, u, r, m, s, a))
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
      Zf(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Fe(t.type, u)),
      (l.props = a),
      (f = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Le(s))
        : ((s = ye(n) ? qt : se.current), (s = kn(t, s)))
    var g = n.getDerivedStateFromProps
    ;(c = typeof g == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== f || m !== s) && Ca(t, l, r, s)),
      (ht = !1),
      (m = t.memoizedState),
      (l.state = m),
      $o(t, r, l, o)
    var y = t.memoizedState
    u !== f || m !== y || me.current || ht
      ? (typeof g == 'function' && (Wl(t, n, g, r), (y = t.memoizedState)),
        (a = ht || ka(t, n, a, r, m, y, s) || !1)
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
  return Gl(e, t, n, r, i, o)
}
function Gl(e, t, n, r, o, i) {
  Pd(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return o && ga(t, n, !1), st(e, t, i)
  ;(r = t.stateNode), (ig.current = t)
  var u = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = xn(t, e.child, null, i)), (t.child = xn(t, null, u, i)))
      : ae(e, t, u, i),
    (t.memoizedState = r.state),
    o && ga(t, n, !0),
    t.child
  )
}
function Rd(e) {
  var t = e.stateNode
  t.pendingContext
    ? va(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && va(e, t.context, !1),
    Ku(e, t.containerInfo)
}
function Da(e, t, n, r, o) {
  return Cn(), $u(o), (t.flags |= 256), ae(e, t, n, r), t.child
}
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 }
function Yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Td(e, t, n) {
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
      Hl(t),
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
                : (i = yi(l, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Yl(n)),
              (t.memoizedState = Xl),
              e)
            : es(t, l))
    )
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return lg(e, t, l, r, u, o, n)
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
          ? Yl(n)
          : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xl),
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
function es(e, t) {
  return (
    (t = yi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function eo(e, t, n, r) {
  return (
    r !== null && $u(r),
    xn(t, e.child, null, n),
    (e = es(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function lg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bi(Error(_(422)))), eo(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = yi({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Wt(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && xn(t, e.child, null, l),
          (t.child.memoizedState = Yl(l)),
          (t.memoizedState = Xl),
          i)
  if (!(t.mode & 1)) return eo(e, t, l, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(_(419))), (r = bi(i, r, void 0)), eo(e, t, l, r)
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
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), ut(e, o), He(r, e, o, -1))
    }
    return ls(), (r = bi(Error(_(421)))), eo(e, t, l, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Se = Et(o.nextSibling)),
      (_e = t),
      ($ = !0),
      (Ie = null),
      e !== null &&
        ((Pe[Re++] = be),
        (Pe[Re++] = et),
        (Pe[Re++] = Gt),
        (be = e.id),
        (et = e.overflow),
        (Gt = t)),
      (t = es(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Aa(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Vl(e.return, t, n)
}
function el(e, t, n, r, o) {
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
function Od(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ae(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Aa(e, n, t)
        else if (e.tag === 19) Aa(e, n, t)
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
          (e = n.alternate), e !== null && Bo(e) === null && (o = n), (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          el(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Bo(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        el(t, !0, n, null, i)
        break
      case 'together':
        el(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function yo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
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
function ug(e, t, n) {
  switch (t.tag) {
    case 3:
      Rd(t), Cn()
      break
    case 5:
      rd(t)
      break
    case 1:
      ye(t.type) && Ao(t)
      break
    case 4:
      Ku(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      M(Io, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Td(e, t, n)
            : (M(B, B.current & 1), (e = st(e, t, n)), e !== null ? e.sibling : null)
      M(B, B.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Od(e, t, n)
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
      return (t.lanes = 0), Nd(e, t, n)
  }
  return st(e, t, n)
}
var zd, Jl, Ld, jd
zd = function (e, t) {
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
Jl = function () {}
Ld = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Ht(Xe.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = wl(e, o)), (r = wl(e, r)), (i = [])
        break
      case 'select':
        ;(o = V({}, o, { value: void 0 })), (r = V({}, r, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = El(e, o)), (r = El(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = jo)
    }
    Cl(n, r)
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
            (dr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null))
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
                (dr.hasOwnProperty(a)
                  ? (s != null && a === 'onScroll' && I('scroll', e),
                    i || u === s || (i = []))
                  : (i = i || []).push(a, s))
    }
    n && (i = i || []).push('style', n)
    var a = i
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
jd = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Vn(e, t) {
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
function sg(e, t, n) {
  var r = t.pendingProps
  switch ((Uu(t), t.tag)) {
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
      return ye(t.type) && Do(), le(t), null
    case 3:
      return (
        (r = t.stateNode),
        Nn(),
        U(me),
        U(se),
        Gu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (iu(Ie), (Ie = null)))),
        Jl(e, t),
        le(t),
        null
      )
    case 5:
      qu(t)
      var o = Ht(Cr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Ld(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166))
          return le(t), null
        }
        if (((e = Ht(Xe.current)), Zr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[Ke] = t), (r[Er] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Xn.length; o++) I(Xn[o], r)
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
              Ws(r, i), I('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }), I('invalid', r)
              break
            case 'textarea':
              Ks(r, i), I('invalid', r)
          }
          Cl(n, i), (o = null)
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l]
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && Jr(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 && Jr(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : dr.hasOwnProperty(l) && u != null && l === 'onScroll' && I('scroll', r)
            }
          switch (n) {
            case 'input':
              Vr(r), Qs(r, i, !0)
              break
            case 'textarea':
              Vr(r), qs(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = jo)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = lf(n)),
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
            (e[Er] = r),
            zd(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = xl(n, r)), n)) {
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
                for (o = 0; o < Xn.length; o++) I(Xn[o], e)
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
                Ws(e, r), (o = wl(e, r)), I('invalid', e)
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
                Ks(e, r), (o = El(e, r)), I('invalid', e)
                break
              default:
                o = r
            }
            Cl(n, o), (u = o)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i]
                i === 'style'
                  ? af(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && uf(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && pr(e, s)
                        : typeof s == 'number' && pr(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (dr.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && I('scroll', e)
                          : s != null && Cu(e, i, s, l))
              }
            switch (n) {
              case 'input':
                Vr(e), Qs(e, r, !1)
                break
              case 'textarea':
                Vr(e), qs(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Tt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && hn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = jo)
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
      if (e && t.stateNode != null) jd(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166))
        if (((n = Ht(Cr.current)), Ht(Xe.current), Zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (i = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(r.nodeValue, n, (e.mode & 1) !== 0)
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
        if ($ && Se !== null && t.mode & 1 && !(t.flags & 128))
          Yf(), Cn(), (t.flags |= 98560), (i = !1)
        else if (((i = Zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(_(317))
            i[Ke] = t
          } else Cn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          le(t), (i = !1)
        } else Ie !== null && (iu(Ie), (Ie = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || B.current & 1 ? J === 0 && (J = 3) : ls())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null)
    case 4:
      return Nn(), Jl(e, t), e === null && Sr(t.stateNode.containerInfo), le(t), null
    case 10:
      return Vu(t.type._context), le(t), null
    case 17:
      return ye(t.type) && Do(), le(t), null
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Vn(i, !1)
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Bo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Vn(i, !1),
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
            q() > Rn &&
            ((t.flags |= 128), (r = !0), Vn(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Bo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !$)
            )
              return le(t), null
          } else
            2 * q() - i.renderingStartTime > Rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(i, !1), (t.lanes = 4194304))
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
        is(),
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
function ag(e, t) {
  switch ((Uu(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && Do(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Nn(),
        U(me),
        U(se),
        Gu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return qu(t), null
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340))
        Cn()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return U(B), null
    case 4:
      return Nn(), null
    case 10:
      return Vu(t.type._context), null
    case 22:
    case 23:
      return is(), null
    case 24:
      return null
    default:
      return null
  }
}
var to = !1,
  ue = !1,
  cg = typeof WeakSet == 'function' ? WeakSet : Set,
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
function Zl(e, t, n) {
  try {
    n()
  } catch (r) {
    W(e, t, r)
  }
}
var Fa = !1
function fg(e, t) {
  if (((Al = Oo), (e = Mf()), Mu(e))) {
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
  for (Fl = { focusedElem: e, selectionRange: n }, Oo = !1, C = t; C !== null; )
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
  return (y = Fa), (Fa = !1), y
}
function or(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Zl(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function hi(e, t) {
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
function bl(e) {
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
function Dd(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Dd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[Er], delete t[Ul], delete t[qv], delete t[Gv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ad(e.return)) return null
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
function eu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = jo))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling)
}
function tu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; ) tu(e, t, n), (e = e.sibling)
}
var ne = null,
  Me = !1
function dt(e, t, n) {
  for (n = n.child; n !== null; ) Fd(e, t, n), (n = n.sibling)
}
function Fd(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == 'function')
    try {
      Ge.onCommitFiberUnmount(li, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ue || dn(n, t)
    case 6:
      var r = ne,
        o = Me
      ;(ne = null),
        dt(e, t, n),
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
            e.nodeType === 8 ? qi(e.parentNode, n) : e.nodeType === 1 && qi(e, n),
            vr(e))
          : qi(ne, n.stateNode))
      break
    case 4:
      ;(r = ne),
        (o = Me),
        (ne = n.stateNode.containerInfo),
        (Me = !0),
        dt(e, t, n),
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
          ;(i = i.tag), l !== void 0 && (i & 2 || i & 4) && Zl(n, t, l), (o = o.next)
        } while (o !== r)
      }
      dt(e, t, n)
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
      dt(e, t, n)
      break
    case 21:
      dt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), dt(e, t, n), (ue = r))
        : dt(e, t, n)
      break
    default:
      dt(e, t, n)
  }
}
function Ia(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new cg()),
      t.forEach(function (r) {
        var o = Sg.bind(null, e, r)
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
        Fd(i, l, o), (ne = null), (Me = !1)
        var s = o.alternate
        s !== null && (s.return = null), (o.return = null)
      } catch (a) {
        W(o, t, a)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Md(t, e), (t = t.sibling)
}
function Md(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), We(e), r & 4)) {
        try {
          or(3, e, e.return), hi(3, e)
        } catch (v) {
          W(e, e.return, v)
        }
        try {
          or(5, e, e.return)
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
          pr(o, '')
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
            u === 'input' && i.type === 'radio' && i.name != null && rf(o, i), xl(u, l)
            var a = xl(u, i)
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1]
              c === 'style'
                ? af(o, f)
                : c === 'dangerouslySetInnerHTML'
                  ? uf(o, f)
                  : c === 'children'
                    ? pr(o, f)
                    : Cu(o, c, f, a)
            }
            switch (u) {
              case 'input':
                Sl(o, i)
                break
              case 'textarea':
                of(o, i)
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
            o[Er] = i
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
          vr(t.containerInfo)
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
            (rs = q())),
        r & 4 && Ia(e)
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
                  or(4, m, m.return)
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
                    $a(f)
                    continue
                  }
              }
              g !== null ? ((g.return = m), (C = g)) : $a(f)
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
                      (u.style.display = sf('display', l)))
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
      Ae(t, e), We(e), r & 4 && Ia(e)
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
          if (Ad(n)) {
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
          r.flags & 32 && (pr(o, ''), (r.flags &= -33))
          var i = Ma(e)
          tu(e, i, o)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Ma(e)
          eu(e, u, l)
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
function dg(e, t, n) {
  ;(C = e), Id(e)
}
function Id(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var o = C,
      i = o.child
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || to
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || ue
        u = to
        var a = ue
        if (((to = l), (ue = s) && !a))
          for (C = o; C !== null; )
            (l = C),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ba(o)
                : s !== null
                  ? ((s.return = l), (C = s))
                  : Ba(o)
        for (; i !== null; ) (C = i), Id(i), (i = i.sibling)
        ;(C = o), (to = u), (ue = a)
      }
      Ua(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (C = i)) : Ua(e)
  }
}
function Ua(e) {
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
              ue || hi(5, t)
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
              i !== null && Ea(t, i, r)
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
                Ea(t, l, n)
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
                    f !== null && vr(f)
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
        ue || (t.flags & 512 && bl(t))
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
function $a(e) {
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
function Ba(e) {
  for (; C !== null; ) {
    var t = C
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            hi(4, t)
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
            bl(t)
          } catch (s) {
            W(t, i, s)
          }
          break
        case 5:
          var l = t.return
          try {
            bl(t)
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
var pg = Math.ceil,
  Wo = at.ReactCurrentDispatcher,
  ts = at.ReactCurrentOwner,
  ze = at.ReactCurrentBatchConfig,
  A = 0,
  ee = null,
  G = null,
  re = 0,
  ge = 0,
  pn = Lt(0),
  J = 0,
  Rr = null,
  Yt = 0,
  mi = 0,
  ns = 0,
  ir = null,
  pe = null,
  rs = 0,
  Rn = 1 / 0,
  Je = null,
  Qo = !1,
  nu = null,
  Ct = null,
  no = !1,
  gt = null,
  Ko = 0,
  lr = 0,
  ru = null,
  vo = -1,
  go = 0
function ce() {
  return A & 6 ? q() : vo !== -1 ? vo : (vo = q())
}
function xt(e) {
  return e.mode & 1
    ? A & 2 && re !== 0
      ? re & -re
      : Yv.transition !== null
        ? (go === 0 && (go = _f()), go)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rf(e.type))),
          e)
    : 1
}
function He(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (ru = null), Error(_(185)))
  jr(e, n, r),
    (!(A & 2) || e !== ee) &&
      (e === ee && (!(A & 2) && (mi |= n), J === 4 && yt(e, re)),
      ve(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((Rn = q() + 500), fi && jt()))
}
function ve(e, t) {
  var n = e.callbackNode
  Y0(e, t)
  var r = To(e, e === ee ? re : 0)
  if (r === 0) n !== null && Ys(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ys(n), t === 1))
      e.tag === 0 ? Xv(Ha.bind(null, e)) : qf(Ha.bind(null, e)),
        Qv(function () {
          !(A & 6) && jt()
        }),
        (n = null)
    else {
      switch (Ef(r)) {
        case 1:
          n = Tu
          break
        case 4:
          n = wf
          break
        case 16:
          n = Ro
          break
        case 536870912:
          n = Sf
          break
        default:
          n = Ro
      }
      n = Kd(n, Ud.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Ud(e, t) {
  if (((vo = -1), (go = 0), A & 6)) throw Error(_(327))
  var n = e.callbackNode
  if (wn() && e.callbackNode !== n) return null
  var r = To(e, e === ee ? re : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = qo(e, r)
  else {
    t = r
    var o = A
    A |= 2
    var i = Bd()
    ;(ee !== e || re !== t) && ((Je = null), (Rn = q() + 500), Vt(e, t))
    do
      try {
        yg()
        break
      } catch (u) {
        $d(e, u)
      }
    while (!0)
    Hu(),
      (Wo.current = i),
      (A = o),
      G !== null ? (t = 0) : ((ee = null), (re = 0), (t = J))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Ol(e)), o !== 0 && ((r = o), (t = ou(e, o)))), t === 1))
      throw ((n = Rr), Vt(e, 0), yt(e, r), ve(e, q()), n)
    if (t === 6) yt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !hg(o) &&
          ((t = qo(e, r)),
          t === 2 && ((i = Ol(e)), i !== 0 && ((r = i), (t = ou(e, i)))),
          t === 1))
      )
        throw ((n = Rr), Vt(e, 0), yt(e, r), ve(e, q()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345))
        case 2:
          Ut(e, pe, Je)
          break
        case 3:
          if ((yt(e, r), (r & 130023424) === r && ((t = rs + 500 - q()), 10 < t))) {
            if (To(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Il(Ut.bind(null, e, pe, Je), t)
            break
          }
          Ut(e, pe, Je)
          break
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Be(r)
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
                          : 1960 * pg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Il(Ut.bind(null, e, pe, Je), r)
            break
          }
          Ut(e, pe, Je)
          break
        case 5:
          Ut(e, pe, Je)
          break
        default:
          throw Error(_(329))
      }
    }
  }
  return ve(e, q()), e.callbackNode === n ? Ud.bind(null, e) : null
}
function ou(e, t) {
  var n = ir
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = qo(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && iu(t)),
    e
  )
}
function iu(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e)
}
function hg(e) {
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
    t &= ~ns, t &= ~mi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Ha(e) {
  if (A & 6) throw Error(_(327))
  wn()
  var t = To(e, 0)
  if (!(t & 1)) return ve(e, q()), null
  var n = qo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Ol(e)
    r !== 0 && ((t = r), (n = ou(e, r)))
  }
  if (n === 1) throw ((n = Rr), Vt(e, 0), yt(e, t), ve(e, q()), n)
  if (n === 6) throw Error(_(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ut(e, pe, Je),
    ve(e, q()),
    null
  )
}
function os(e, t) {
  var n = A
  A |= 1
  try {
    return e(t)
  } finally {
    ;(A = n), A === 0 && ((Rn = q() + 500), fi && jt())
  }
}
function Jt(e) {
  gt !== null && gt.tag === 0 && !(A & 6) && wn()
  var t = A
  A |= 1
  var n = ze.transition,
    r = F
  try {
    if (((ze.transition = null), (F = 1), e)) return e()
  } finally {
    ;(F = r), (ze.transition = n), (A = t), !(A & 6) && jt()
  }
}
function is() {
  ;(ge = pn.current), U(pn)
}
function Vt(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Wv(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n
      switch ((Uu(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Do()
          break
        case 3:
          Nn(), U(me), U(se), Gu()
          break
        case 5:
          qu(r)
          break
        case 4:
          Nn()
          break
        case 13:
          U(B)
          break
        case 19:
          U(B)
          break
        case 10:
          Vu(r.type._context)
          break
        case 22:
        case 23:
          is()
      }
      n = n.return
    }
  if (
    ((ee = e),
    (G = e = Nt(e.current, null)),
    (re = ge = t),
    (J = 0),
    (Rr = null),
    (ns = mi = Yt = 0),
    (pe = ir = null),
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
function $d(e, t) {
  do {
    var n = G
    try {
      if ((Hu(), (ho.current = Vo), Ho)) {
        for (var r = H.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Ho = !1
      }
      if (
        ((Xt = 0),
        (b = Y = H = null),
        (rr = !1),
        (xr = 0),
        (ts.current = null),
        n === null || n.return === null)
      ) {
        ;(J = 1), (Rr = t), (G = null)
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
          var g = Ta(l)
          if (g !== null) {
            ;(g.flags &= -257),
              Oa(g, l, u, i, t),
              g.mode & 1 && Ra(i, a, t),
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
              Ra(i, a, t), ls()
              break e
            }
            s = Error(_(426))
          }
        } else if ($ && u.mode & 1) {
          var E = Ta(l)
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Oa(E, l, u, i, t), $u(Pn(s, u))
            break e
          }
        }
        ;(i = s = Pn(s, u)),
          J !== 4 && (J = 2),
          ir === null ? (ir = [i]) : ir.push(i),
          (i = l)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var p = kd(i, s, t)
              _a(i, p)
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
                var S = Cd(i, u, t)
                _a(i, S)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Vd(n)
    } catch (k) {
      ;(t = k), G === n && n !== null && (G = n = n.return)
      continue
    }
    break
  } while (!0)
}
function Bd() {
  var e = Wo.current
  return (Wo.current = Vo), e === null ? Vo : e
}
function ls() {
  ;(J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Yt & 268435455) && !(mi & 268435455)) || yt(ee, re)
}
function qo(e, t) {
  var n = A
  A |= 2
  var r = Bd()
  ;(ee !== e || re !== t) && ((Je = null), Vt(e, t))
  do
    try {
      mg()
      break
    } catch (o) {
      $d(e, o)
    }
  while (!0)
  if ((Hu(), (A = n), (Wo.current = r), G !== null)) throw Error(_(261))
  return (ee = null), (re = 0), J
}
function mg() {
  for (; G !== null; ) Hd(G)
}
function yg() {
  for (; G !== null && !B0(); ) Hd(G)
}
function Hd(e) {
  var t = Qd(e.alternate, e, ge)
  ;(e.memoizedProps = e.pendingProps), t === null ? Vd(e) : (G = t), (ts.current = null)
}
function Vd(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ag(n, t)), n !== null)) {
        ;(n.flags &= 32767), (G = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(J = 6), (G = null)
        return
      }
    } else if (((n = sg(n, t, ge)), n !== null)) {
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
function Ut(e, t, n) {
  var r = F,
    o = ze.transition
  try {
    ;(ze.transition = null), (F = 1), vg(e, t, n, r)
  } finally {
    ;(ze.transition = o), (F = r)
  }
  return null
}
function vg(e, t, n, r) {
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
    (J0(e, i),
    e === ee && ((G = ee = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      no ||
      ((no = !0),
      Kd(Ro, function () {
        return wn(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = ze.transition), (ze.transition = null)
    var l = F
    F = 1
    var u = A
    ;(A |= 4),
      (ts.current = null),
      fg(e, n),
      Md(n, e),
      Mv(Fl),
      (Oo = !!Al),
      (Fl = Al = null),
      (e.current = n),
      dg(n),
      H0(),
      (A = u),
      (F = l),
      (ze.transition = i)
  } else e.current = n
  if (
    (no && ((no = !1), (gt = e), (Ko = o)),
    (i = e.pendingLanes),
    i === 0 && (Ct = null),
    Q0(n.stateNode),
    ve(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Qo) throw ((Qo = !1), (e = nu), (nu = null), e)
  return (
    Ko & 1 && e.tag !== 0 && wn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ru ? lr++ : ((lr = 0), (ru = e))) : (lr = 0),
    jt(),
    null
  )
}
function wn() {
  if (gt !== null) {
    var e = Ef(Ko),
      t = ze.transition,
      n = F
    try {
      if (((ze.transition = null), (F = 16 > e ? 16 : e), gt === null)) var r = !1
      else {
        if (((e = gt), (gt = null), (Ko = 0), A & 6)) throw Error(_(331))
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
                      or(8, c, i)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (C = f)
                  else
                    for (; C !== null; ) {
                      c = C
                      var m = c.sibling,
                        g = c.return
                      if ((Dd(c), c === a)) {
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
                    or(9, i, i.return)
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
                      hi(9, u)
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
            Ge.onPostCommitFiberRoot(li, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(F = n), (ze.transition = t)
    }
  }
  return !1
}
function Va(e, t, n) {
  ;(t = Pn(n, t)),
    (t = kd(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = ce()),
    e !== null && (jr(e, 1, t), ve(e, t))
}
function W(e, t, n) {
  if (e.tag === 3) Va(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Va(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Ct === null || !Ct.has(r)))
        ) {
          ;(e = Pn(n, e)),
            (e = Cd(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = ce()),
            t !== null && (jr(t, 1, e), ve(t, e))
          break
        }
      }
      t = t.return
    }
}
function gg(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > q() - rs)
        ? Vt(e, 0)
        : (ns |= n)),
    ve(e, t)
}
function Wd(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = Kr), (Kr <<= 1), !(Kr & 130023424) && (Kr = 4194304)) : (t = 1))
  var n = ce()
  ;(e = ut(e, t)), e !== null && (jr(e, t, n), ve(e, n))
}
function wg(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Wd(e, n)
}
function Sg(e, t) {
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
  r !== null && r.delete(t), Wd(e, n)
}
var Qd
Qd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) he = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), ug(e, t, n)
      he = !!(e.flags & 131072)
    }
  else (he = !1), $ && t.flags & 1048576 && Gf(t, Mo, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      yo(e, t), (e = t.pendingProps)
      var o = kn(t, se.current)
      gn(t, n), (o = Yu(null, t, r, e, o, n))
      var i = Ju()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), Ao(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Qu(t),
            (o.updater = di),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ql(t, r, e, n),
            (t = Gl(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Iu(t), ae(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (yo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Eg(r)),
          (e = Fe(r, e)),
          o)
        ) {
          case 0:
            t = ql(null, t, r, e, n)
            break e
          case 1:
            t = ja(null, t, r, e, n)
            break e
          case 11:
            t = za(null, t, r, e, n)
            break e
          case 14:
            t = La(null, t, r, Fe(r.type, e), n)
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
        ql(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        ja(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((Rd(t), e === null)) throw Error(_(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Zf(e, t),
          $o(t, r, null, n)
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
            ;(o = Pn(Error(_(423)), t)), (t = Da(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Pn(Error(_(424)), t)), (t = Da(e, t, r, n, o))
            break e
          } else
            for (
              Se = Et(t.stateNode.containerInfo.firstChild),
                _e = t,
                $ = !0,
                Ie = null,
                n = nd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Cn(), r === o)) {
            t = st(e, t, n)
            break e
          }
          ae(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        rd(t),
        e === null && Hl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ml(r, o) ? (l = null) : i !== null && Ml(r, i) && (t.flags |= 32),
        Pd(e, t),
        ae(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && Hl(t), null
    case 13:
      return Td(e, t, n)
    case 4:
      return (
        Ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        za(e, t, r, o, n)
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
          M(Io, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ve(i.value, l)) {
            if (i.children === o.children && !me.current) {
              t = st(e, t, n)
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
                      ;(s = nt(-1, n & -n)), (s.tag = 2)
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
                      Vl(i.return, n, t),
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
                  Vl(l, n, t),
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
        (r = t.type), (o = Fe(r, t.pendingProps)), (o = Fe(r.type, o)), La(e, t, r, o, n)
      )
    case 15:
      return xd(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Fe(r, o)),
        yo(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), Ao(t)) : (e = !1),
        gn(t, n),
        ed(t, r, o),
        Ql(t, r, o, n),
        Gl(null, t, r, !0, e, n)
      )
    case 19:
      return Od(e, t, n)
    case 22:
      return Nd(e, t, n)
  }
  throw Error(_(156, t.tag))
}
function Kd(e, t) {
  return gf(e, t)
}
function _g(e, t, n, r) {
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
  return new _g(e, t, n, r)
}
function us(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Eg(e) {
  if (typeof e == 'function') return us(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Nu)) return 11
    if (e === Pu) return 14
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
function wo(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) us(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case nn:
        return Wt(n.children, o, i, t)
      case xu:
        ;(l = 8), (o |= 8)
        break
      case ml:
        return (e = Te(12, n, t, o | 2)), (e.elementType = ml), (e.lanes = i), e
      case yl:
        return (e = Te(13, n, t, o)), (e.elementType = yl), (e.lanes = i), e
      case vl:
        return (e = Te(19, n, t, o)), (e.elementType = vl), (e.lanes = i), e
      case ef:
        return yi(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Zc:
              l = 10
              break e
            case bc:
              l = 9
              break e
            case Nu:
              l = 11
              break e
            case Pu:
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
function yi(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = ef),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function tl(e, t, n) {
  return (e = Te(6, e, null, t)), (e.lanes = n), e
}
function nl(e, t, n) {
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
function kg(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fi(0)),
    (this.expirationTimes = Fi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function ss(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new kg(e, t, n, u, s)),
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
    Qu(i),
    e
  )
}
function Cg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: tn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function qd(e) {
  if (!e) return Ot
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
    if (ye(n)) return Kf(e, n, t)
  }
  return t
}
function Gd(e, t, n, r, o, i, l, u, s) {
  return (
    (e = ss(n, r, !0, e, o, i, l, u, s)),
    (e.context = qd(null)),
    (n = e.current),
    (r = ce()),
    (o = xt(n)),
    (i = nt(r, o)),
    (i.callback = t ?? null),
    kt(n, i, o),
    (e.current.lanes = o),
    jr(e, o, r),
    ve(e, r),
    e
  )
}
function vi(e, t, n, r) {
  var o = t.current,
    i = ce(),
    l = xt(o)
  return (
    (n = qd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(o, t, l)),
    e !== null && (He(e, o, l, i), po(e, o, l)),
    l
  )
}
function Go(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Wa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function as(e, t) {
  Wa(e, t), (e = e.alternate) && Wa(e, t)
}
function xg() {
  return null
}
var Xd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function cs(e) {
  this._internalRoot = e
}
gi.prototype.render = cs.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(_(409))
  vi(e, t, null, null)
}
gi.prototype.unmount = cs.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Jt(function () {
      vi(null, e, null, null)
    }),
      (t[lt] = null)
  }
}
function gi(e) {
  this._internalRoot = e
}
gi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xf()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++);
    mt.splice(n, 0, e), n === 0 && Pf(e)
  }
}
function fs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function wi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Qa() {}
function Ng(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var a = Go(l)
        i.call(a)
      }
    }
    var l = Gd(t, r, e, 0, null, !1, !1, '', Qa)
    return (
      (e._reactRootContainer = l),
      (e[lt] = l.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      Jt(),
      l
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var a = Go(s)
      u.call(a)
    }
  }
  var s = ss(e, 0, !1, null, null, !1, !1, '', Qa)
  return (
    (e._reactRootContainer = s),
    (e[lt] = s.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function () {
      vi(t, s, n, r)
    }),
    s
  )
}
function Si(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i
    if (typeof o == 'function') {
      var u = o
      o = function () {
        var s = Go(l)
        u.call(s)
      }
    }
    vi(t, l, e, o)
  } else l = Ng(n, t, e, o, r)
  return Go(l)
}
kf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes)
        n !== 0 && (Ou(t, n | 1), ve(t, q()), !(A & 6) && ((Rn = q() + 500), jt()))
      }
      break
    case 13:
      Jt(function () {
        var r = ut(e, 1)
        if (r !== null) {
          var o = ce()
          He(r, e, 1, o)
        }
      }),
        as(e, 1)
  }
}
zu = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728)
    if (t !== null) {
      var n = ce()
      He(t, e, 134217728, n)
    }
    as(e, 134217728)
  }
}
Cf = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = ut(e, t)
    if (n !== null) {
      var r = ce()
      He(n, e, t, r)
    }
    as(e, t)
  }
}
xf = function () {
  return F
}
Nf = function (e, t) {
  var n = F
  try {
    return (F = e), t()
  } finally {
    F = n
  }
}
Pl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Sl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = ci(r)
            if (!o) throw Error(_(90))
            nf(r), Sl(r, o)
          }
        }
      }
      break
    case 'textarea':
      of(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && hn(e, !!n.multiple, t, !1)
  }
}
df = os
pf = Jt
var Pg = { usingClientEntryPoint: !1, Events: [Ar, un, ci, cf, ff, os] },
  Wn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  Rg = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
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
      return (e = yf(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || xg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ro.isDisabled && ro.supportsFiber)
    try {
      ;(li = ro.inject(Rg)), (Ge = ro)
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pg
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!fs(t)) throw Error(_(200))
  return Cg(e, t, null, n)
}
xe.createRoot = function (e, t) {
  if (!fs(e)) throw Error(_(299))
  var n = !1,
    r = '',
    o = Xd
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ss(e, 1, !1, null, null, n, !1, r, o)),
    (e[lt] = t.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    new cs(t)
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
  return (e = yf(t)), (e = e === null ? null : e.stateNode), e
}
xe.flushSync = function (e) {
  return Jt(e)
}
xe.hydrate = function (e, t, n) {
  if (!wi(t)) throw Error(_(200))
  return Si(null, e, t, !0, n)
}
xe.hydrateRoot = function (e, t, n) {
  if (!fs(e)) throw Error(_(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Xd
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Gd(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[lt] = t.current),
    Sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new gi(t)
}
xe.render = function (e, t, n) {
  if (!wi(t)) throw Error(_(200))
  return Si(null, e, t, !1, n)
}
xe.unmountComponentAtNode = function (e) {
  if (!wi(e)) throw Error(_(40))
  return e._reactRootContainer
    ? (Jt(function () {
        Si(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[lt] = null)
        })
      }),
      !0)
    : !1
}
xe.unstable_batchedUpdates = os
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wi(n)) throw Error(_(200))
  if (e == null || e._reactInternals === void 0) throw Error(_(38))
  return Si(e, t, n, !1, r)
}
xe.version = '18.2.0-next-9e3b772b8-20220608'
function Yd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd)
    } catch (e) {
      console.error(e)
    }
}
Yd(), (qc.exports = xe)
var Tg = qc.exports,
  Jd,
  Ka = Tg
;(Jd = Ka.createRoot), Ka.hydrateRoot
const Og = document.querySelector('main'),
  zg = Jd(Og)
zg.render(R.jsx(Bp, { store: x0, children: R.jsx(k0, {}) }))
