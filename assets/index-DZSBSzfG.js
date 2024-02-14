(function () {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === "childList")
                for (const u of o.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : l.crossOrigin === "anonymous"
                    ? (o.credentials = "omit")
                    : (o.credentials = "same-origin"),
            o
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = t(l);
        fetch(l.href, o);
    }
})();
function lc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Hi = { exports: {} },
    el = {},
    Qi = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xt = Symbol.for("react.element"),
    oc = Symbol.for("react.portal"),
    uc = Symbol.for("react.fragment"),
    ic = Symbol.for("react.strict_mode"),
    sc = Symbol.for("react.profiler"),
    ac = Symbol.for("react.provider"),
    cc = Symbol.for("react.context"),
    fc = Symbol.for("react.forward_ref"),
    dc = Symbol.for("react.suspense"),
    pc = Symbol.for("react.memo"),
    mc = Symbol.for("react.lazy"),
    Iu = Symbol.iterator;
function hc(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Iu && e[Iu]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var Ki = {
    isMounted: function () {
        return !1;
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { },
},
    Yi = Object.assign,
    Xi = {};
function ot(e, n, t) {
    (this.props = e),
        (this.context = n),
        (this.refs = Xi),
        (this.updater = t || Ki);
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function (e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gi() { }
Gi.prototype = ot.prototype;
function Ao(e, n, t) {
    (this.props = e),
        (this.context = n),
        (this.refs = Xi),
        (this.updater = t || Ki);
}
var Vo = (Ao.prototype = new Gi());
Vo.constructor = Ao;
Yi(Vo, ot.prototype);
Vo.isPureReactComponent = !0;
var Fu = Array.isArray,
    Zi = Object.prototype.hasOwnProperty,
    Bo = { current: null },
    Ji = { key: !0, ref: !0, __self: !0, __source: !0 };
function qi(e, n, t) {
    var r,
        l = {},
        o = null,
        u = null;
    if (n != null)
        for (r in (n.ref !== void 0 && (u = n.ref),
            n.key !== void 0 && (o = "" + n.key),
            n))
            Zi.call(n, r) && !Ji.hasOwnProperty(r) && (l[r] = n[r]);
    var i = arguments.length - 2;
    if (i === 1) l.children = t;
    else if (1 < i) {
        for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
    return {
        $$typeof: Xt,
        type: e,
        key: o,
        ref: u,
        props: l,
        _owner: Bo.current,
    };
}
function vc(e, n) {
    return {
        $$typeof: Xt,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Wo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xt;
}
function yc(e) {
    var n = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (t) {
            return n[t];
        })
    );
}
var ju = /\/+/g;
function wl(e, n) {
    return typeof e == "object" && e !== null && e.key != null
        ? yc("" + e.key)
        : n.toString(36);
}
function gr(e, n, t, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var u = !1;
    if (e === null) u = !0;
    else
        switch (o) {
            case "string":
            case "number":
                u = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Xt:
                    case oc:
                        u = !0;
                }
        }
    if (u)
        return (
            (u = e),
            (l = l(u)),
            (e = r === "" ? "." + wl(u, 0) : r),
            Fu(l)
                ? ((t = ""),
                    e != null && (t = e.replace(ju, "$&/") + "/"),
                    gr(l, n, t, "", function (c) {
                        return c;
                    }))
                : l != null &&
                (Wo(l) &&
                    (l = vc(
                        l,
                        t +
                        (!l.key || (u && u.key === l.key)
                            ? ""
                            : ("" + l.key).replace(ju, "$&/") + "/") +
                        e
                    )),
                    n.push(l)),
            1
        );
    if (((u = 0), (r = r === "" ? "." : r + ":"), Fu(e)))
        for (var i = 0; i < e.length; i++) {
            o = e[i];
            var s = r + wl(o, i);
            u += gr(o, n, t, s, l);
        }
    else if (((s = hc(e)), typeof s == "function"))
        for (e = s.call(e), i = 0; !(o = e.next()).done;)
            (o = o.value), (s = r + wl(o, i++)), (u += gr(o, n, t, s, l));
    else if (o === "object")
        throw (
            ((n = String(e)),
                Error(
                    "Objects are not valid as a React child (found: " +
                    (n === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : n) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
        );
    return u;
}
function nr(e, n, t) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        gr(e, r, "", "", function (o) {
            return n.call(t, o, l++);
        }),
        r
    );
}
function gc(e) {
    if (e._status === -1) {
        var n = e._result;
        (n = n()),
            n.then(
                function (t) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = t));
                },
                function (t) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = t));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = n));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ue = { current: null },
    wr = { transition: null },
    wc = {
        ReactCurrentDispatcher: ue,
        ReactCurrentBatchConfig: wr,
        ReactCurrentOwner: Bo,
    };
L.Children = {
    map: nr,
    forEach: function (e, n, t) {
        nr(
            e,
            function () {
                n.apply(this, arguments);
            },
            t
        );
    },
    count: function (e) {
        var n = 0;
        return (
            nr(e, function () {
                n++;
            }),
            n
        );
    },
    toArray: function (e) {
        return (
            nr(e, function (n) {
                return n;
            }) || []
        );
    },
    only: function (e) {
        if (!Wo(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
L.Component = ot;
L.Fragment = uc;
L.Profiler = sc;
L.PureComponent = Ao;
L.StrictMode = ic;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
L.cloneElement = function (e, n, t) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
    var r = Yi({}, e.props),
        l = e.key,
        o = e.ref,
        u = e._owner;
    if (n != null) {
        if (
            (n.ref !== void 0 && ((o = n.ref), (u = Bo.current)),
                n.key !== void 0 && (l = "" + n.key),
                e.type && e.type.defaultProps)
        )
            var i = e.type.defaultProps;
        for (s in n)
            Zi.call(n, s) &&
                !Ji.hasOwnProperty(s) &&
                (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = t;
    else if (1 < s) {
        i = Array(s);
        for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
        r.children = i;
    }
    return { $$typeof: Xt, type: e.type, key: l, ref: o, props: r, _owner: u };
};
L.createContext = function (e) {
    return (
        (e = {
            $$typeof: cc,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: ac, _context: e }),
        (e.Consumer = e)
    );
};
L.createElement = qi;
L.createFactory = function (e) {
    var n = qi.bind(null, e);
    return (n.type = e), n;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (e) {
    return { $$typeof: fc, render: e };
};
L.isValidElement = Wo;
L.lazy = function (e) {
    return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function (e, n) {
    return { $$typeof: pc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
    var n = wr.transition;
    wr.transition = {};
    try {
        e();
    } finally {
        wr.transition = n;
    }
};
L.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, n) {
    return ue.current.useCallback(e, n);
};
L.useContext = function (e) {
    return ue.current.useContext(e);
};
L.useDebugValue = function () { };
L.useDeferredValue = function (e) {
    return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
    return ue.current.useEffect(e, n);
};
L.useId = function () {
    return ue.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
    return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
    return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
    return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
    return ue.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
    return ue.current.useReducer(e, n, t);
};
L.useRef = function (e) {
    return ue.current.useRef(e);
};
L.useState = function (e) {
    return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
    return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
    return ue.current.useTransition();
};
L.version = "18.2.0";
Qi.exports = L;
var Qn = Qi.exports;
const kc = lc(Qn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc = Qn,
    Ec = Symbol.for("react.element"),
    Cc = Symbol.for("react.fragment"),
    xc = Object.prototype.hasOwnProperty,
    _c = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bi(e, n, t) {
    var r,
        l = {},
        o = null,
        u = null;
    t !== void 0 && (o = "" + t),
        n.key !== void 0 && (o = "" + n.key),
        n.ref !== void 0 && (u = n.ref);
    for (r in n) xc.call(n, r) && !Nc.hasOwnProperty(r) && (l[r] = n[r]);
    if (e && e.defaultProps)
        for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
    return {
        $$typeof: Ec,
        type: e,
        key: o,
        ref: u,
        props: l,
        _owner: _c.current,
    };
}
el.Fragment = Cc;
el.jsx = bi;
el.jsxs = bi;
Hi.exports = el;
var se = Hi.exports,
    Kl = {},
    es = { exports: {} },
    ge = {},
    ns = { exports: {} },
    ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function n(C, P) {
        var z = C.length;
        C.push(P);
        e: for (; 0 < z;) {
            var W = (z - 1) >>> 1,
                X = C[W];
            if (0 < l(X, P)) (C[W] = P), (C[z] = X), (z = W);
            else break e;
        }
    }
    function t(C) {
        return C.length === 0 ? null : C[0];
    }
    function r(C) {
        if (C.length === 0) return null;
        var P = C[0],
            z = C.pop();
        if (z !== P) {
            C[0] = z;
            e: for (var W = 0, X = C.length, bt = X >>> 1; W < bt;) {
                var vn = 2 * (W + 1) - 1,
                    gl = C[vn],
                    yn = vn + 1,
                    er = C[yn];
                if (0 > l(gl, z))
                    yn < X && 0 > l(er, gl)
                        ? ((C[W] = er), (C[yn] = z), (W = yn))
                        : ((C[W] = gl), (C[vn] = z), (W = vn));
                else if (yn < X && 0 > l(er, z)) (C[W] = er), (C[yn] = z), (W = yn);
                else break e;
            }
        }
        return P;
    }
    function l(C, P) {
        var z = C.sortIndex - P.sortIndex;
        return z !== 0 ? z : C.id - P.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var u = Date,
            i = u.now();
        e.unstable_now = function () {
            return u.now() - i;
        };
    }
    var s = [],
        c = [],
        h = 1,
        m = null,
        p = 3,
        g = !1,
        w = !1,
        k = !1,
        F = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(C) {
        for (var P = t(c); P !== null;) {
            if (P.callback === null) r(c);
            else if (P.startTime <= C)
                r(c), (P.sortIndex = P.expirationTime), n(s, P);
            else break;
            P = t(c);
        }
    }
    function v(C) {
        if (((k = !1), d(C), !w))
            if (t(s) !== null) (w = !0), vl(E);
            else {
                var P = t(c);
                P !== null && yl(v, P.startTime - C);
            }
    }
    function E(C, P) {
        (w = !1), k && ((k = !1), f(N), (N = -1)), (g = !0);
        var z = p;
        try {
            for (
                d(P), m = t(s);
                m !== null && (!(m.expirationTime > P) || (C && !Ne()));

            ) {
                var W = m.callback;
                if (typeof W == "function") {
                    (m.callback = null), (p = m.priorityLevel);
                    var X = W(m.expirationTime <= P);
                    (P = e.unstable_now()),
                        typeof X == "function" ? (m.callback = X) : m === t(s) && r(s),
                        d(P);
                } else r(s);
                m = t(s);
            }
            if (m !== null) var bt = !0;
            else {
                var vn = t(c);
                vn !== null && yl(v, vn.startTime - P), (bt = !1);
            }
            return bt;
        } finally {
            (m = null), (p = z), (g = !1);
        }
    }
    var x = !1,
        _ = null,
        N = -1,
        B = 5,
        T = -1;
    function Ne() {
        return !(e.unstable_now() - T < B);
    }
    function st() {
        if (_ !== null) {
            var C = e.unstable_now();
            T = C;
            var P = !0;
            try {
                P = _(!0, C);
            } finally {
                P ? at() : ((x = !1), (_ = null));
            }
        } else x = !1;
    }
    var at;
    if (typeof a == "function")
        at = function () {
            a(st);
        };
    else if (typeof MessageChannel < "u") {
        var Du = new MessageChannel(),
            rc = Du.port2;
        (Du.port1.onmessage = st),
            (at = function () {
                rc.postMessage(null);
            });
    } else
        at = function () {
            F(st, 0);
        };
    function vl(C) {
        (_ = C), x || ((x = !0), at());
    }
    function yl(C, P) {
        N = F(function () {
            C(e.unstable_now());
        }, P);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (C) {
            C.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || g || ((w = !0), vl(E));
        }),
        (e.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
                : (B = 0 < C ? Math.floor(1e3 / C) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return t(s);
        }),
        (e.unstable_next = function (C) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = p;
            }
            var z = p;
            p = P;
            try {
                return C();
            } finally {
                p = z;
            }
        }),
        (e.unstable_pauseExecution = function () { }),
        (e.unstable_requestPaint = function () { }),
        (e.unstable_runWithPriority = function (C, P) {
            switch (C) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    C = 3;
            }
            var z = p;
            p = C;
            try {
                return P();
            } finally {
                p = z;
            }
        }),
        (e.unstable_scheduleCallback = function (C, P, z) {
            var W = e.unstable_now();
            switch (
            (typeof z == "object" && z !== null
                ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
                : (z = W),
                C)
            ) {
                case 1:
                    var X = -1;
                    break;
                case 2:
                    X = 250;
                    break;
                case 5:
                    X = 1073741823;
                    break;
                case 4:
                    X = 1e4;
                    break;
                default:
                    X = 5e3;
            }
            return (
                (X = z + X),
                (C = {
                    id: h++,
                    callback: P,
                    priorityLevel: C,
                    startTime: z,
                    expirationTime: X,
                    sortIndex: -1,
                }),
                z > W
                    ? ((C.sortIndex = z),
                        n(c, C),
                        t(s) === null &&
                        C === t(c) &&
                        (k ? (f(N), (N = -1)) : (k = !0), yl(v, z - W)))
                    : ((C.sortIndex = X), n(s, C), w || g || ((w = !0), vl(E))),
                C
            );
        }),
        (e.unstable_shouldYield = Ne),
        (e.unstable_wrapCallback = function (C) {
            var P = p;
            return function () {
                var z = p;
                p = P;
                try {
                    return C.apply(this, arguments);
                } finally {
                    p = z;
                }
            };
        });
})(ts);
ns.exports = ts;
var Pc = ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rs = Qn,
    ye = Pc;
function y(e) {
    for (
        var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
        t < arguments.length;
        t++
    )
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var ls = new Set(),
    Rt = {};
function Tn(e, n) {
    qn(e, n), qn(e + "Capture", n);
}
function qn(e, n) {
    for (Rt[e] = n, e = 0; e < n.length; e++) ls.add(n[e]);
}
var He = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
),
    Yl = Object.prototype.hasOwnProperty,
    zc =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Uu = {},
    $u = {};
function Lc(e) {
    return Yl.call($u, e)
        ? !0
        : Yl.call(Uu, e)
            ? !1
            : zc.test(e)
                ? ($u[e] = !0)
                : ((Uu[e] = !0), !1);
}
function Tc(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : t !== null
                    ? !t.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Rc(e, n, t, r) {
    if (n === null || typeof n > "u" || Tc(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
        switch (t.type) {
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
    return !1;
}
function ie(e, n, t, r, l, o, u) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = o),
        (this.removeEmptyString = u);
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        b[e] = new ie(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var n = e[0];
    b[n] = new ie(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    b[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    b[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        b[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    b[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    b[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    b[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    b[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ho = /[\-:]([a-z])/g;
function Qo(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Ho, Qo);
        b[n] = new ie(n, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var n = e.replace(Ho, Qo);
        b[n] = new ie(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(Ho, Qo);
    b[n] = new ie(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ie(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ko(e, n, t, r) {
    var l = b.hasOwnProperty(n) ? b[n] : null;
    (l !== null
        ? l.type !== 0
        : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
        (Rc(n, t, l, r) && (t = null),
            r || l === null
                ? Lc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
                : l.mustUseProperty
                    ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
                    : ((n = l.attributeName),
                        (r = l.attributeNamespace),
                        t === null
                            ? e.removeAttribute(n)
                            : ((l = l.type),
                                (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = rs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tr = Symbol.for("react.element"),
    Mn = Symbol.for("react.portal"),
    Dn = Symbol.for("react.fragment"),
    Yo = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    os = Symbol.for("react.provider"),
    us = Symbol.for("react.context"),
    Xo = Symbol.for("react.forward_ref"),
    Gl = Symbol.for("react.suspense"),
    Zl = Symbol.for("react.suspense_list"),
    Go = Symbol.for("react.memo"),
    Ze = Symbol.for("react.lazy"),
    is = Symbol.for("react.offscreen"),
    Au = Symbol.iterator;
function ct(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Au && e[Au]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
}
var A = Object.assign,
    kl;
function gt(e) {
    if (kl === void 0)
        try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            kl = (n && n[1]) || "";
        }
    return (
        `
` +
        kl +
        e
    );
}
var Sl = !1;
function El(e, n) {
    if (!e || Sl) return "";
    Sl = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (
                ((n = function () {
                    throw Error();
                }),
                    Object.defineProperty(n.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(n, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (c) {
                    r = c;
                }
                e.call(n.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var l = c.stack.split(`
`),
                o = r.stack.split(`
`),
                u = l.length - 1,
                i = o.length - 1;
                1 <= u && 0 <= i && l[u] !== o[i];

            )
                i--;
            for (; 1 <= u && 0 <= i; u--, i--)
                if (l[u] !== o[i]) {
                    if (u !== 1 || i !== 1)
                        do
                            if ((u--, i--, 0 > i || l[u] !== o[i])) {
                                var s =
                                    `
` + l[u].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                    s.includes("<anonymous>") &&
                                    (s = s.replace("<anonymous>", e.displayName)),
                                    s
                                );
                            }
                        while (1 <= u && 0 <= i);
                    break;
                }
        }
    } finally {
        (Sl = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? gt(e) : "";
}
function Oc(e) {
    switch (e.tag) {
        case 5:
            return gt(e.type);
        case 16:
            return gt("Lazy");
        case 13:
            return gt("Suspense");
        case 19:
            return gt("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = El(e.type, !1)), e;
        case 11:
            return (e = El(e.type.render, !1)), e;
        case 1:
            return (e = El(e.type, !0)), e;
        default:
            return "";
    }
}
function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Dn:
            return "Fragment";
        case Mn:
            return "Portal";
        case Xl:
            return "Profiler";
        case Yo:
            return "StrictMode";
        case Gl:
            return "Suspense";
        case Zl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case us:
                return (e.displayName || "Context") + ".Consumer";
            case os:
                return (e._context.displayName || "Context") + ".Provider";
            case Xo:
                var n = e.render;
                return (
                    (e = e.displayName),
                    e ||
                    ((e = n.displayName || n.name || ""),
                        (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Go:
                return (
                    (n = e.displayName || null), n !== null ? n : Jl(e.type) || "Memo"
                );
            case Ze:
                (n = e._payload), (e = e._init);
                try {
                    return Jl(e(n));
                } catch { }
        }
    return null;
}
function Mc(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = n.render),
                (e = e.displayName || e.name || ""),
                n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jl(n);
        case 8:
            return n === Yo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n;
    }
    return null;
}
function fn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function ss(e) {
    var n = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (n === "checkbox" || n === "radio")
    );
}
function Dc(e) {
    var n = ss(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (
        !e.hasOwnProperty(n) &&
        typeof t < "u" &&
        typeof t.get == "function" &&
        typeof t.set == "function"
    ) {
        var l = t.get,
            o = t.set;
        return (
            Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (u) {
                    (r = "" + u), o.call(this, u);
                },
            }),
            Object.defineProperty(e, n, { enumerable: t.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (u) {
                    r = "" + u;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[n];
                },
            }
        );
    }
}
function rr(e) {
    e._valueTracker || (e._valueTracker = Dc(e));
}
function as(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return (
        e && (r = ss(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== t ? (n.setValue(e), !0) : !1
    );
}
function Tr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function ql(e, n) {
    var t = n.checked;
    return A({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked,
    });
}
function Vu(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    (t = fn(n.value != null ? n.value : t)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled:
                n.type === "checkbox" || n.type === "radio"
                    ? n.checked != null
                    : n.value != null,
        });
}
function cs(e, n) {
    (n = n.checked), n != null && Ko(e, "checked", n, !1);
}
function bl(e, n) {
    cs(e, n);
    var t = fn(n.value),
        r = n.type;
    if (t != null)
        r === "number"
            ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
            : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    n.hasOwnProperty("value")
        ? eo(e, n.type, t)
        : n.hasOwnProperty("defaultValue") && eo(e, n.type, fn(n.defaultValue)),
        n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
}
function Bu(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (n.value !== void 0 && n.value !== null)
            )
        )
            return;
        (n = "" + e._wrapperState.initialValue),
            t || n === e.value || (e.value = n),
            (e.defaultValue = n);
    }
    (t = e.name),
        t !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        t !== "" && (e.name = t);
}
function eo(e, n, t) {
    (n !== "number" || Tr(e.ownerDocument) !== e) &&
        (t == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var wt = Array.isArray;
function Kn(e, n, t, r) {
    if (((e = e.options), n)) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++)
            (l = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== l && (e[t].selected = l),
                l && r && (e[t].defaultSelected = !0);
    } else {
        for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
            if (e[l].value === t) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            n !== null || e[l].disabled || (n = e[l]);
        }
        n !== null && (n.selected = !0);
    }
}
function no(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
    return A({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Wu(e, n) {
    var t = n.value;
    if (t == null) {
        if (((t = n.children), (n = n.defaultValue), t != null)) {
            if (n != null) throw Error(y(92));
            if (wt(t)) {
                if (1 < t.length) throw Error(y(93));
                t = t[0];
            }
            n = t;
        }
        n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: fn(t) };
}
function fs(e, n) {
    var t = fn(n.value),
        r = fn(n.defaultValue);
    t != null &&
        ((t = "" + t),
            t !== e.value && (e.value = t),
            n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
        r != null && (e.defaultValue = "" + r);
}
function Hu(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ds(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function to(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ds(n)
        : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
}
var lr,
    ps = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (n, t, r, l) {
                MSApp.execUnsafeLocalFunction(function () {
                    return e(n, t, r, l);
                });
            }
            : e;
    })(function (e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = n;
        else {
            for (
                lr = lr || document.createElement("div"),
                lr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                n = lr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; n.firstChild;) e.appendChild(n.firstChild);
        }
    });
function Ot(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return;
        }
    }
    e.textContent = n;
}
var Et = {
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
    strokeWidth: !0,
},
    Ic = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function (e) {
    Ic.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Et[n] = Et[e]);
    });
});
function ms(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
        ? ""
        : t || typeof n != "number" || n === 0 || (Et.hasOwnProperty(e) && Et[e])
            ? ("" + n).trim()
            : n + "px";
}
function hs(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                l = ms(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
        }
}
var Fc = A(
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
        wbr: !0,
    }
);
function ro(e, n) {
    if (n) {
        if (Fc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null) throw Error(y(60));
            if (
                typeof n.dangerouslySetInnerHTML != "object" ||
                !("__html" in n.dangerouslySetInnerHTML)
            )
                throw Error(y(61));
        }
        if (n.style != null && typeof n.style != "object") throw Error(y(62));
    }
}
function lo(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var oo = null;
function Zo(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var uo = null,
    Yn = null,
    Xn = null;
function Qu(e) {
    if ((e = Jt(e))) {
        if (typeof uo != "function") throw Error(y(280));
        var n = e.stateNode;
        n && ((n = ol(n)), uo(e.stateNode, e.type, n));
    }
}
function vs(e) {
    Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function ys() {
    if (Yn) {
        var e = Yn,
            n = Xn;
        if (((Xn = Yn = null), Qu(e), n)) for (e = 0; e < n.length; e++) Qu(n[e]);
    }
}
function gs(e, n) {
    return e(n);
}
function ws() { }
var Cl = !1;
function ks(e, n, t) {
    if (Cl) return e(n, t);
    Cl = !0;
    try {
        return gs(e, n, t);
    } finally {
        (Cl = !1), (Yn !== null || Xn !== null) && (ws(), ys());
    }
}
function Mt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = ol(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                    (r = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(y(231, n, typeof t));
    return t;
}
var io = !1;
if (He)
    try {
        var ft = {};
        Object.defineProperty(ft, "passive", {
            get: function () {
                io = !0;
            },
        }),
            window.addEventListener("test", ft, ft),
            window.removeEventListener("test", ft, ft);
    } catch {
        io = !1;
    }
function jc(e, n, t, r, l, o, u, i, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, c);
    } catch (h) {
        this.onError(h);
    }
}
var Ct = !1,
    Rr = null,
    Or = !1,
    so = null,
    Uc = {
        onError: function (e) {
            (Ct = !0), (Rr = e);
        },
    };
function $c(e, n, t, r, l, o, u, i, s) {
    (Ct = !1), (Rr = null), jc.apply(Uc, arguments);
}
function Ac(e, n, t, r, l, o, u, i, s) {
    if (($c.apply(this, arguments), Ct)) {
        if (Ct) {
            var c = Rr;
            (Ct = !1), (Rr = null);
        } else throw Error(y(198));
        Or || ((Or = !0), (so = c));
    }
}
function Rn(e) {
    var n = e,
        t = e;
    if (e.alternate) for (; n.return;) n = n.return;
    else {
        e = n;
        do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
        while (e);
    }
    return n.tag === 3 ? t : null;
}
function Ss(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (
            (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
                n !== null)
        )
            return n.dehydrated;
    }
    return null;
}
function Ku(e) {
    if (Rn(e) !== e) throw Error(y(188));
}
function Vc(e) {
    var n = e.alternate;
    if (!n) {
        if (((n = Rn(e)), n === null)) throw Error(y(188));
        return n !== e ? null : e;
    }
    for (var t = e, r = n; ;) {
        var l = t.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                t = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === t) return Ku(l), e;
                if (o === r) return Ku(l), n;
                o = o.sibling;
            }
            throw Error(y(188));
        }
        if (t.return !== r.return) (t = l), (r = o);
        else {
            for (var u = !1, i = l.child; i;) {
                if (i === t) {
                    (u = !0), (t = l), (r = o);
                    break;
                }
                if (i === r) {
                    (u = !0), (r = l), (t = o);
                    break;
                }
                i = i.sibling;
            }
            if (!u) {
                for (i = o.child; i;) {
                    if (i === t) {
                        (u = !0), (t = o), (r = l);
                        break;
                    }
                    if (i === r) {
                        (u = !0), (r = o), (t = l);
                        break;
                    }
                    i = i.sibling;
                }
                if (!u) throw Error(y(189));
            }
        }
        if (t.alternate !== r) throw Error(y(190));
    }
    if (t.tag !== 3) throw Error(y(188));
    return t.stateNode.current === t ? e : n;
}
function Es(e) {
    return (e = Vc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var n = Cs(e);
        if (n !== null) return n;
        e = e.sibling;
    }
    return null;
}
var xs = ye.unstable_scheduleCallback,
    Yu = ye.unstable_cancelCallback,
    Bc = ye.unstable_shouldYield,
    Wc = ye.unstable_requestPaint,
    H = ye.unstable_now,
    Hc = ye.unstable_getCurrentPriorityLevel,
    Jo = ye.unstable_ImmediatePriority,
    _s = ye.unstable_UserBlockingPriority,
    Mr = ye.unstable_NormalPriority,
    Qc = ye.unstable_LowPriority,
    Ns = ye.unstable_IdlePriority,
    nl = null,
    je = null;
function Kc(e) {
    if (je && typeof je.onCommitFiberRoot == "function")
        try {
            je.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
        } catch { }
}
var Re = Math.clz32 ? Math.clz32 : Gc,
    Yc = Math.log,
    Xc = Math.LN2;
function Gc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Yc(e) / Xc) | 0)) | 0;
}
var or = 64,
    ur = 4194304;
function kt(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Dr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        u = t & 268435455;
    if (u !== 0) {
        var i = u & ~l;
        i !== 0 ? (r = kt(i)) : ((o &= u), o !== 0 && (r = kt(o)));
    } else (u = t & ~l), u !== 0 ? (r = kt(u)) : o !== 0 && (r = kt(o));
    if (r === 0) return 0;
    if (
        n !== 0 &&
        n !== r &&
        !(n & l) &&
        ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
        for (e = e.entanglements, n &= r; 0 < n;)
            (t = 31 - Re(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
}
function Zc(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
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
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Jc(e, n) {
    for (
        var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
        0 < o;

    ) {
        var u = 31 - Re(o),
            i = 1 << u,
            s = l[u];
        s === -1
            ? (!(i & t) || i & r) && (l[u] = Zc(i, n))
            : s <= n && (e.expiredLanes |= i),
            (o &= ~i);
    }
}
function ao(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ps() {
    var e = or;
    return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function xl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
}
function Gt(e, n, t) {
    (e.pendingLanes |= n),
        n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (n = 31 - Re(n)),
        (e[n] = t);
}
function qc(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= n),
        (e.mutableReadLanes &= n),
        (e.entangledLanes &= n),
        (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t;) {
        var l = 31 - Re(t),
            o = 1 << l;
        (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
    }
}
function qo(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t;) {
        var r = 31 - Re(t),
            l = 1 << r;
        (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
}
var O = 0;
function zs(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ls,
    bo,
    Ts,
    Rs,
    Os,
    co = !1,
    ir = [],
    tn = null,
    rn = null,
    ln = null,
    Dt = new Map(),
    It = new Map(),
    qe = [],
    bc =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Xu(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            tn = null;
            break;
        case "dragenter":
        case "dragleave":
            rn = null;
            break;
        case "mouseover":
        case "mouseout":
            ln = null;
            break;
        case "pointerover":
        case "pointerout":
            Dt.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            It.delete(n.pointerId);
    }
}
function dt(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
            blockedOn: n,
            domEventName: t,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [l],
        }),
            n !== null && ((n = Jt(n)), n !== null && bo(n)),
            e)
        : ((e.eventSystemFlags |= r),
            (n = e.targetContainers),
            l !== null && n.indexOf(l) === -1 && n.push(l),
            e);
}
function ef(e, n, t, r, l) {
    switch (n) {
        case "focusin":
            return (tn = dt(tn, e, n, t, r, l)), !0;
        case "dragenter":
            return (rn = dt(rn, e, n, t, r, l)), !0;
        case "mouseover":
            return (ln = dt(ln, e, n, t, r, l)), !0;
        case "pointerover":
            var o = l.pointerId;
            return Dt.set(o, dt(Dt.get(o) || null, e, n, t, r, l)), !0;
        case "gotpointercapture":
            return (
                (o = l.pointerId), It.set(o, dt(It.get(o) || null, e, n, t, r, l)), !0
            );
    }
    return !1;
}
function Ms(e) {
    var n = kn(e.target);
    if (n !== null) {
        var t = Rn(n);
        if (t !== null) {
            if (((n = t.tag), n === 13)) {
                if (((n = Ss(t)), n !== null)) {
                    (e.blockedOn = n),
                        Os(e.priority, function () {
                            Ts(t);
                        });
                    return;
                }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length;) {
        var t = fo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            (oo = r), t.target.dispatchEvent(r), (oo = null);
        } else return (n = Jt(t)), n !== null && bo(n), (e.blockedOn = t), !1;
        n.shift();
    }
    return !0;
}
function Gu(e, n, t) {
    kr(e) && t.delete(n);
}
function nf() {
    (co = !1),
        tn !== null && kr(tn) && (tn = null),
        rn !== null && kr(rn) && (rn = null),
        ln !== null && kr(ln) && (ln = null),
        Dt.forEach(Gu),
        It.forEach(Gu);
}
function pt(e, n) {
    e.blockedOn === n &&
        ((e.blockedOn = null),
            co ||
            ((co = !0),
                ye.unstable_scheduleCallback(ye.unstable_NormalPriority, nf)));
}
function Ft(e) {
    function n(l) {
        return pt(l, e);
    }
    if (0 < ir.length) {
        pt(ir[0], e);
        for (var t = 1; t < ir.length; t++) {
            var r = ir[t];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        tn !== null && pt(tn, e),
        rn !== null && pt(rn, e),
        ln !== null && pt(ln, e),
        Dt.forEach(n),
        It.forEach(n),
        t = 0;
        t < qe.length;
        t++
    )
        (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null);)
        Ms(t), t.blockedOn === null && qe.shift();
}
var Gn = Xe.ReactCurrentBatchConfig,
    Ir = !0;
function tf(e, n, t, r) {
    var l = O,
        o = Gn.transition;
    Gn.transition = null;
    try {
        (O = 1), eu(e, n, t, r);
    } finally {
        (O = l), (Gn.transition = o);
    }
}
function rf(e, n, t, r) {
    var l = O,
        o = Gn.transition;
    Gn.transition = null;
    try {
        (O = 4), eu(e, n, t, r);
    } finally {
        (O = l), (Gn.transition = o);
    }
}
function eu(e, n, t, r) {
    if (Ir) {
        var l = fo(e, n, t, r);
        if (l === null) Dl(e, n, r, Fr, t), Xu(e, r);
        else if (ef(l, e, n, t, r)) r.stopPropagation();
        else if ((Xu(e, r), n & 4 && -1 < bc.indexOf(e))) {
            for (; l !== null;) {
                var o = Jt(l);
                if (
                    (o !== null && Ls(o),
                        (o = fo(e, n, t, r)),
                        o === null && Dl(e, n, r, Fr, t),
                        o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else Dl(e, n, r, null, t);
    }
}
var Fr = null;
function fo(e, n, t, r) {
    if (((Fr = null), (e = Zo(r)), (e = kn(e)), e !== null))
        if (((n = Rn(e)), n === null)) e = null;
        else if (((t = n.tag), t === 13)) {
            if (((e = Ss(n)), e !== null)) return e;
            e = null;
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated)
                return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
        } else n !== e && (e = null);
    return (Fr = e), null;
}
function Ds(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Hc()) {
                case Jo:
                    return 1;
                case _s:
                    return 4;
                case Mr:
                case Qc:
                    return 16;
                case Ns:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var en = null,
    nu = null,
    Sr = null;
function Is() {
    if (Sr) return Sr;
    var e,
        n = nu,
        t = n.length,
        r,
        l = "value" in en ? en.value : en.textContent,
        o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++);
    return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
    var n = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
            : (e = n),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function sr() {
    return !0;
}
function Zu() {
    return !1;
}
function we(e) {
    function n(t, r, l, o, u) {
        (this._reactName = t),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = u),
            (this.currentTarget = null);
        for (var i in e)
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
            )
                ? sr
                : Zu),
            (this.isPropagationStopped = Zu),
            this
        );
    }
    return (
        A(n.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                    (t.preventDefault
                        ? t.preventDefault()
                        : typeof t.returnValue != "unknown" && (t.returnValue = !1),
                        (this.isDefaultPrevented = sr));
            },
            stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                    (t.stopPropagation
                        ? t.stopPropagation()
                        : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
                        (this.isPropagationStopped = sr));
            },
            persist: function () { },
            isPersistent: sr,
        }),
        n
    );
}
var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
},
    tu = we(ut),
    Zt = A({}, ut, { view: 0, detail: 0 }),
    lf = we(Zt),
    _l,
    Nl,
    mt,
    tl = A({}, Zt, {
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
        getModifierState: ru,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== mt &&
                    (mt && e.type === "mousemove"
                        ? ((_l = e.screenX - mt.screenX), (Nl = e.screenY - mt.screenY))
                        : (Nl = _l = 0),
                        (mt = e)),
                    _l);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Nl;
        },
    }),
    Ju = we(tl),
    of = A({}, tl, { dataTransfer: 0 }),
    uf = we(of),
    sf = A({}, Zt, { relatedTarget: 0 }),
    Pl = we(sf),
    af = A({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cf = we(af),
    ff = A({}, ut, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    df = we(ff),
    pf = A({}, ut, { data: 0 }),
    qu = we(pf),
    mf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    hf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    vf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function yf(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = vf[e]) ? !!n[e] : !1;
}
function ru() {
    return yf;
}
var gf = A({}, Zt, {
    key: function (e) {
        if (e.key) {
            var n = mf[e.key] || e.key;
            if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
            ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
                ? hf[e.keyCode] || "Unidentified"
                : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ru,
    charCode: function (e) {
        return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
        return e.type === "keypress"
            ? Er(e)
            : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
    },
}),
    wf = we(gf),
    kf = A({}, tl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    bu = we(kf),
    Sf = A({}, Zt, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ru,
    }),
    Ef = we(Sf),
    Cf = A({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xf = we(Cf),
    _f = A({}, tl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Nf = we(_f),
    Pf = [9, 13, 27, 32],
    lu = He && "CompositionEvent" in window,
    xt = null;
He && "documentMode" in document && (xt = document.documentMode);
var zf = He && "TextEvent" in window && !xt,
    Fs = He && (!lu || (xt && 8 < xt && 11 >= xt)),
    ei = " ",
    ni = !1;
function js(e, n) {
    switch (e) {
        case "keyup":
            return Pf.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Us(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function Lf(e, n) {
    switch (e) {
        case "compositionend":
            return Us(n);
        case "keypress":
            return n.which !== 32 ? null : ((ni = !0), ei);
        case "textInput":
            return (e = n.data), e === ei && ni ? null : e;
        default:
            return null;
    }
}
function Tf(e, n) {
    if (In)
        return e === "compositionend" || (!lu && js(e, n))
            ? ((e = Is()), (Sr = nu = en = null), (In = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
                if (n.char && 1 < n.char.length) return n.char;
                if (n.which) return String.fromCharCode(n.which);
            }
            return null;
        case "compositionend":
            return Fs && n.locale !== "ko" ? null : n.data;
        default:
            return null;
    }
}
var Rf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0,
};
function ti(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Rf[e.type] : n === "textarea";
}
function $s(e, n, t, r) {
    vs(r),
        (n = jr(n, "onChange")),
        0 < n.length &&
        ((t = new tu("onChange", "change", null, t, r)),
            e.push({ event: t, listeners: n }));
}
var _t = null,
    jt = null;
function Of(e) {
    Zs(e, 0);
}
function rl(e) {
    var n = Un(e);
    if (as(n)) return e;
}
function Mf(e, n) {
    if (e === "change") return n;
}
var As = !1;
if (He) {
    var zl;
    if (He) {
        var Ll = "oninput" in document;
        if (!Ll) {
            var ri = document.createElement("div");
            ri.setAttribute("oninput", "return;"),
                (Ll = typeof ri.oninput == "function");
        }
        zl = Ll;
    } else zl = !1;
    As = zl && (!document.documentMode || 9 < document.documentMode);
}
function li() {
    _t && (_t.detachEvent("onpropertychange", Vs), (jt = _t = null));
}
function Vs(e) {
    if (e.propertyName === "value" && rl(jt)) {
        var n = [];
        $s(n, jt, e, Zo(e)), ks(Of, n);
    }
}
function Df(e, n, t) {
    e === "focusin"
        ? (li(), (_t = n), (jt = t), _t.attachEvent("onpropertychange", Vs))
        : e === "focusout" && li();
}
function If(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return rl(jt);
}
function Ff(e, n) {
    if (e === "click") return rl(n);
}
function jf(e, n) {
    if (e === "input" || e === "change") return rl(n);
}
function Uf(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Me = typeof Object.is == "function" ? Object.is : Uf;
function Ut(e, n) {
    if (Me(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
        return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
        var l = t[r];
        if (!Yl.call(n, l) || !Me(e[l], n[l])) return !1;
    }
    return !0;
}
function oi(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
}
function ui(e, n) {
    var t = oi(e);
    e = 0;
    for (var r; t;) {
        if (t.nodeType === 3) {
            if (((r = e + t.textContent.length), e <= n && r >= n))
                return { node: t, offset: n - e };
            e = r;
        }
        e: {
            for (; t;) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e;
                }
                t = t.parentNode;
            }
            t = void 0;
        }
        t = oi(t);
    }
}
function Bs(e, n) {
    return e && n
        ? e === n
            ? !0
            : e && e.nodeType === 3
                ? !1
                : n && n.nodeType === 3
                    ? Bs(e, n.parentNode)
                    : "contains" in e
                        ? e.contains(n)
                        : e.compareDocumentPosition
                            ? !!(e.compareDocumentPosition(n) & 16)
                            : !1
        : !1;
}
function Ws() {
    for (var e = window, n = Tr(); n instanceof e.HTMLIFrameElement;) {
        try {
            var t = typeof n.contentWindow.location.href == "string";
        } catch {
            t = !1;
        }
        if (t) e = n.contentWindow;
        else break;
        n = Tr(e.document);
    }
    return n;
}
function ou(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        n &&
        ((n === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            n === "textarea" ||
            e.contentEditable === "true")
    );
}
function $f(e) {
    var n = Ws(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (
        n !== t &&
        t &&
        t.ownerDocument &&
        Bs(t.ownerDocument.documentElement, t)
    ) {
        if (r !== null && ou(t)) {
            if (
                ((n = r.start),
                    (e = r.end),
                    e === void 0 && (e = n),
                    "selectionStart" in t)
            )
                (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
            else if (
                ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
                    e.getSelection)
            ) {
                e = e.getSelection();
                var l = t.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = ui(t, o));
                var u = ui(t, r);
                l &&
                    u &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== u.node ||
                        e.focusOffset !== u.offset) &&
                    ((n = n.createRange()),
                        n.setStart(l.node, l.offset),
                        e.removeAllRanges(),
                        o > r
                            ? (e.addRange(n), e.extend(u.node, u.offset))
                            : (n.setEnd(u.node, u.offset), e.addRange(n)));
            }
        }
        for (n = [], e = t; (e = e.parentNode);)
            e.nodeType === 1 &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
            (e = n[t]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Af = He && "documentMode" in document && 11 >= document.documentMode,
    Fn = null,
    po = null,
    Nt = null,
    mo = !1;
function ii(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    mo ||
        Fn == null ||
        Fn !== Tr(r) ||
        ((r = Fn),
            "selectionStart" in r && ou(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : ((r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                ).getSelection()),
                    (r = {
                        anchorNode: r.anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset,
                    })),
            (Nt && Ut(Nt, r)) ||
            ((Nt = r),
                (r = jr(po, "onSelect")),
                0 < r.length &&
                ((n = new tu("onSelect", "select", null, n, t)),
                    e.push({ event: n, listeners: r }),
                    (n.target = Fn))));
}
function ar(e, n) {
    var t = {};
    return (
        (t[e.toLowerCase()] = n.toLowerCase()),
        (t["Webkit" + e] = "webkit" + n),
        (t["Moz" + e] = "moz" + n),
        t
    );
}
var jn = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
},
    Tl = {},
    Hs = {};
He &&
    ((Hs = document.createElement("div").style),
        "AnimationEvent" in window ||
        (delete jn.animationend.animation,
            delete jn.animationiteration.animation,
            delete jn.animationstart.animation),
        "TransitionEvent" in window || delete jn.transitionend.transition);
function ll(e) {
    if (Tl[e]) return Tl[e];
    if (!jn[e]) return e;
    var n = jn[e],
        t;
    for (t in n) if (n.hasOwnProperty(t) && t in Hs) return (Tl[e] = n[t]);
    return e;
}
var Qs = ll("animationend"),
    Ks = ll("animationiteration"),
    Ys = ll("animationstart"),
    Xs = ll("transitionend"),
    Gs = new Map(),
    si =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function pn(e, n) {
    Gs.set(e, n), Tn(n, [e]);
}
for (var Rl = 0; Rl < si.length; Rl++) {
    var Ol = si[Rl],
        Vf = Ol.toLowerCase(),
        Bf = Ol[0].toUpperCase() + Ol.slice(1);
    pn(Vf, "on" + Bf);
}
pn(Qs, "onAnimationEnd");
pn(Ks, "onAnimationIteration");
pn(Ys, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Xs, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var St =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(St));
function ai(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Ac(r, n, void 0, e), (e.currentTarget = null);
}
function Zs(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (n)
                for (var u = r.length - 1; 0 <= u; u--) {
                    var i = r[u],
                        s = i.instance,
                        c = i.currentTarget;
                    if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
                    ai(l, i, c), (o = s);
                }
            else
                for (u = 0; u < r.length; u++) {
                    if (
                        ((i = r[u]),
                            (s = i.instance),
                            (c = i.currentTarget),
                            (i = i.listener),
                            s !== o && l.isPropagationStopped())
                    )
                        break e;
                    ai(l, i, c), (o = s);
                }
        }
    }
    if (Or) throw ((e = so), (Or = !1), (so = null), e);
}
function D(e, n) {
    var t = n[wo];
    t === void 0 && (t = n[wo] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Js(n, e, 2, !1), t.add(r));
}
function Ml(e, n, t) {
    var r = 0;
    n && (r |= 4), Js(t, e, r, n);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function $t(e) {
    if (!e[cr]) {
        (e[cr] = !0),
            ls.forEach(function (t) {
                t !== "selectionchange" && (Wf.has(t) || Ml(t, !1, e), Ml(t, !0, e));
            });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[cr] || ((n[cr] = !0), Ml("selectionchange", !1, n));
    }
}
function Js(e, n, t, r) {
    switch (Ds(n)) {
        case 1:
            var l = tf;
            break;
        case 4:
            l = rf;
            break;
        default:
            l = eu;
    }
    (t = l.bind(null, n, t, e)),
        (l = void 0),
        !io ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(n, t, { capture: !0, passive: l })
                : e.addEventListener(n, t, !0)
            : l !== void 0
                ? e.addEventListener(n, t, { passive: l })
                : e.addEventListener(n, t, !1);
}
function Dl(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null)
        e: for (; ;) {
            if (r === null) return;
            var u = r.tag;
            if (u === 3 || u === 4) {
                var i = r.stateNode.containerInfo;
                if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
                if (u === 4)
                    for (u = r.return; u !== null;) {
                        var s = u.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = u.stateNode.containerInfo),
                                s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return;
                        u = u.return;
                    }
                for (; i !== null;) {
                    if (((u = kn(i)), u === null)) return;
                    if (((s = u.tag), s === 5 || s === 6)) {
                        r = o = u;
                        continue e;
                    }
                    i = i.parentNode;
                }
            }
            r = r.return;
        }
    ks(function () {
        var c = o,
            h = Zo(t),
            m = [];
        e: {
            var p = Gs.get(e);
            if (p !== void 0) {
                var g = tu,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Er(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = wf;
                        break;
                    case "focusin":
                        (w = "focus"), (g = Pl);
                        break;
                    case "focusout":
                        (w = "blur"), (g = Pl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Pl;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Ju;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = uf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Ef;
                        break;
                    case Qs:
                    case Ks:
                    case Ys:
                        g = cf;
                        break;
                    case Xs:
                        g = xf;
                        break;
                    case "scroll":
                        g = lf;
                        break;
                    case "wheel":
                        g = Nf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = df;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = bu;
                }
                var k = (n & 4) !== 0,
                    F = !k && e === "scroll",
                    f = k ? (p !== null ? p + "Capture" : null) : p;
                k = [];
                for (var a = c, d; a !== null;) {
                    d = a;
                    var v = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            v !== null &&
                            ((d = v),
                                f !== null && ((v = Mt(a, f)), v != null && k.push(At(a, v, d)))),
                            F)
                    )
                        break;
                    a = a.return;
                }
                0 < k.length &&
                    ((p = new g(p, w, null, t, h)), m.push({ event: p, listeners: k }));
            }
        }
        if (!(n & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                        (g = e === "mouseout" || e === "pointerout"),
                        p &&
                        t !== oo &&
                        (w = t.relatedTarget || t.fromElement) &&
                        (kn(w) || w[Qe]))
                )
                    break e;
                if (
                    (g || p) &&
                    ((p =
                        h.window === h
                            ? h
                            : (p = h.ownerDocument)
                                ? p.defaultView || p.parentWindow
                                : window),
                        g
                            ? ((w = t.relatedTarget || t.toElement),
                                (g = c),
                                (w = w ? kn(w) : null),
                                w !== null &&
                                ((F = Rn(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                                (w = null))
                            : ((g = null), (w = c)),
                        g !== w)
                ) {
                    if (
                        ((k = Ju),
                            (v = "onMouseLeave"),
                            (f = "onMouseEnter"),
                            (a = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                            ((k = bu),
                                (v = "onPointerLeave"),
                                (f = "onPointerEnter"),
                                (a = "pointer")),
                            (F = g == null ? p : Un(g)),
                            (d = w == null ? p : Un(w)),
                            (p = new k(v, a + "leave", g, t, h)),
                            (p.target = F),
                            (p.relatedTarget = d),
                            (v = null),
                            kn(h) === c &&
                            ((k = new k(f, a + "enter", w, t, h)),
                                (k.target = d),
                                (k.relatedTarget = F),
                                (v = k)),
                            (F = v),
                            g && w)
                    )
                        n: {
                            for (k = g, f = w, a = 0, d = k; d; d = On(d)) a++;
                            for (d = 0, v = f; v; v = On(v)) d++;
                            for (; 0 < a - d;) (k = On(k)), a--;
                            for (; 0 < d - a;) (f = On(f)), d--;
                            for (; a--;) {
                                if (k === f || (f !== null && k === f.alternate)) break n;
                                (k = On(k)), (f = On(f));
                            }
                            k = null;
                        }
                    else k = null;
                    g !== null && ci(m, p, g, k, !1),
                        w !== null && F !== null && ci(m, F, w, k, !0);
                }
            }
            e: {
                if (
                    ((p = c ? Un(c) : window),
                        (g = p.nodeName && p.nodeName.toLowerCase()),
                        g === "select" || (g === "input" && p.type === "file"))
                )
                    var E = Mf;
                else if (ti(p))
                    if (As) E = jf;
                    else {
                        E = If;
                        var x = Df;
                    }
                else
                    (g = p.nodeName) &&
                        g.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (E = Ff);
                if (E && (E = E(e, c))) {
                    $s(m, E, t, h);
                    break e;
                }
                x && x(e, p, c),
                    e === "focusout" &&
                    (x = p._wrapperState) &&
                    x.controlled &&
                    p.type === "number" &&
                    eo(p, "number", p.value);
            }
            switch (((x = c ? Un(c) : window), e)) {
                case "focusin":
                    (ti(x) || x.contentEditable === "true") &&
                        ((Fn = x), (po = c), (Nt = null));
                    break;
                case "focusout":
                    Nt = po = Fn = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (mo = !1), ii(m, t, h);
                    break;
                case "selectionchange":
                    if (Af) break;
                case "keydown":
                case "keyup":
                    ii(m, t, h);
            }
            var _;
            if (lu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                In
                    ? js(e, t) && (N = "onCompositionEnd")
                    : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
            N &&
                (Fs &&
                    t.locale !== "ko" &&
                    (In || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && In && (_ = Is())
                        : ((en = h),
                            (nu = "value" in en ? en.value : en.textContent),
                            (In = !0))),
                    (x = jr(c, N)),
                    0 < x.length &&
                    ((N = new qu(N, e, null, t, h)),
                        m.push({ event: N, listeners: x }),
                        _ ? (N.data = _) : ((_ = Us(t)), _ !== null && (N.data = _)))),
                (_ = zf ? Lf(e, t) : Tf(e, t)) &&
                ((c = jr(c, "onBeforeInput")),
                    0 < c.length &&
                    ((h = new qu("onBeforeInput", "beforeinput", null, t, h)),
                        m.push({ event: h, listeners: c }),
                        (h.data = _)));
        }
        Zs(m, n);
    });
}
function At(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
}
function jr(e, n) {
    for (var t = n + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
                (o = Mt(e, t)),
                o != null && r.unshift(At(e, o, l)),
                (o = Mt(e, n)),
                o != null && r.push(At(e, o, l))),
            (e = e.return);
    }
    return r;
}
function On(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function ci(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r;) {
        var i = t,
            s = i.alternate,
            c = i.stateNode;
        if (s !== null && s === r) break;
        i.tag === 5 &&
            c !== null &&
            ((i = c),
                l
                    ? ((s = Mt(t, o)), s != null && u.unshift(At(t, s, i)))
                    : l || ((s = Mt(t, o)), s != null && u.push(At(t, s, i)))),
            (t = t.return);
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
}
var Hf = /\r\n?/g,
    Qf = /\u0000|\uFFFD/g;
function fi(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Hf,
            `
`
        )
        .replace(Qf, "");
}
function fr(e, n, t) {
    if (((n = fi(n)), fi(e) !== n && t)) throw Error(y(425));
}
function Ur() { }
var ho = null,
    vo = null;
function yo(e, n) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof n.children == "string" ||
        typeof n.children == "number" ||
        (typeof n.dangerouslySetInnerHTML == "object" &&
            n.dangerouslySetInnerHTML !== null &&
            n.dangerouslySetInnerHTML.__html != null)
    );
}
var go = typeof setTimeout == "function" ? setTimeout : void 0,
    Kf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    di = typeof Promise == "function" ? Promise : void 0,
    Yf =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof di < "u"
                ? function (e) {
                    return di.resolve(null).then(e).catch(Xf);
                }
                : go;
function Xf(e) {
    setTimeout(function () {
        throw e;
    });
}
function Il(e, n) {
    var t = n,
        r = 0;
    do {
        var l = t.nextSibling;
        if ((e.removeChild(t), l && l.nodeType === 8))
            if (((t = l.data), t === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Ft(n);
                    return;
                }
                r--;
            } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
        t = l;
    } while (t);
    Ft(n);
}
function on(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3) break;
        if (n === 8) {
            if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
            if (n === "/$") return null;
        }
    }
    return e;
}
function pi(e) {
    e = e.previousSibling;
    for (var n = 0; e;) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--;
            } else t === "/$" && n++;
        }
        e = e.previousSibling;
    }
    return null;
}
var it = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + it,
    Vt = "__reactProps$" + it,
    Qe = "__reactContainer$" + it,
    wo = "__reactEvents$" + it,
    Gf = "__reactListeners$" + it,
    Zf = "__reactHandles$" + it;
function kn(e) {
    var n = e[Fe];
    if (n) return n;
    for (var t = e.parentNode; t;) {
        if ((n = t[Qe] || t[Fe])) {
            if (
                ((t = n.alternate),
                    n.child !== null || (t !== null && t.child !== null))
            )
                for (e = pi(e); e !== null;) {
                    if ((t = e[Fe])) return t;
                    e = pi(e);
                }
            return n;
        }
        (e = t), (t = e.parentNode);
    }
    return null;
}
function Jt(e) {
    return (
        (e = e[Fe] || e[Qe]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
}
function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
}
function ol(e) {
    return e[Vt] || null;
}
var ko = [],
    $n = -1;
function mn(e) {
    return { current: e };
}
function I(e) {
    0 > $n || ((e.current = ko[$n]), (ko[$n] = null), $n--);
}
function M(e, n) {
    $n++, (ko[$n] = e.current), (e.current = n);
}
var dn = {},
    re = mn(dn),
    fe = mn(!1),
    _n = dn;
function bn(e, n) {
    var t = e.type.contextTypes;
    if (!t) return dn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in t) l[o] = n[o];
    return (
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = n),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function de(e) {
    return (e = e.childContextTypes), e != null;
}
function $r() {
    I(fe), I(re);
}
function mi(e, n, t) {
    if (re.current !== dn) throw Error(y(168));
    M(re, n), M(fe, t);
}
function qs(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
        return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(y(108, Mc(e) || "Unknown", l));
    return A({}, t, r);
}
function Ar(e) {
    return (
        (e =
            ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
        (_n = re.current),
        M(re, e),
        M(fe, fe.current),
        !0
    );
}
function hi(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    t
        ? ((e = qs(e, n, _n)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            I(fe),
            I(re),
            M(re, e))
        : I(fe),
        M(fe, t);
}
var Ae = null,
    ul = !1,
    Fl = !1;
function bs(e) {
    Ae === null ? (Ae = [e]) : Ae.push(e);
}
function Jf(e) {
    (ul = !0), bs(e);
}
function hn() {
    if (!Fl && Ae !== null) {
        Fl = !0;
        var e = 0,
            n = O;
        try {
            var t = Ae;
            for (O = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ae = null), (ul = !1);
        } catch (l) {
            throw (Ae !== null && (Ae = Ae.slice(e + 1)), xs(Jo, hn), l);
        } finally {
            (O = n), (Fl = !1);
        }
    }
    return null;
}
var An = [],
    Vn = 0,
    Vr = null,
    Br = 0,
    ke = [],
    Se = 0,
    Nn = null,
    Ve = 1,
    Be = "";
function gn(e, n) {
    (An[Vn++] = Br), (An[Vn++] = Vr), (Vr = e), (Br = n);
}
function ea(e, n, t) {
    (ke[Se++] = Ve), (ke[Se++] = Be), (ke[Se++] = Nn), (Nn = e);
    var r = Ve;
    e = Be;
    var l = 32 - Re(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var o = 32 - Re(n) + l;
    if (30 < o) {
        var u = l - (l % 5);
        (o = (r & ((1 << u) - 1)).toString(32)),
            (r >>= u),
            (l -= u),
            (Ve = (1 << (32 - Re(n) + l)) | (t << l) | r),
            (Be = o + e);
    } else (Ve = (1 << o) | (t << l) | r), (Be = e);
}
function uu(e) {
    e.return !== null && (gn(e, 1), ea(e, 1, 0));
}
function iu(e) {
    for (; e === Vr;)
        (Vr = An[--Vn]), (An[Vn] = null), (Br = An[--Vn]), (An[Vn] = null);
    for (; e === Nn;)
        (Nn = ke[--Se]),
            (ke[Se] = null),
            (Be = ke[--Se]),
            (ke[Se] = null),
            (Ve = ke[--Se]),
            (ke[Se] = null);
}
var ve = null,
    he = null,
    j = !1,
    Te = null;
function na(e, n) {
    var t = Ee(5, null, null, 0);
    (t.elementType = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        (n = e.deletions),
        n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function vi(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return (
                (n =
                    n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
                        ? null
                        : n),
                n !== null
                    ? ((e.stateNode = n), (ve = e), (he = on(n.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                n !== null ? ((e.stateNode = n), (ve = e), (he = null), !0) : !1
            );
        case 13:
            return (
                (n = n.nodeType !== 8 ? null : n),
                n !== null
                    ? ((t = Nn !== null ? { id: Ve, overflow: Be } : null),
                        (e.memoizedState = {
                            dehydrated: n,
                            treeContext: t,
                            retryLane: 1073741824,
                        }),
                        (t = Ee(18, null, null, 0)),
                        (t.stateNode = n),
                        (t.return = e),
                        (e.child = t),
                        (ve = e),
                        (he = null),
                        !0)
                    : !1
            );
        default:
            return !1;
    }
}
function So(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
    if (j) {
        var n = he;
        if (n) {
            var t = n;
            if (!vi(e, n)) {
                if (So(e)) throw Error(y(418));
                n = on(t.nextSibling);
                var r = ve;
                n && vi(e, n)
                    ? na(r, t)
                    : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ve = e));
            }
        } else {
            if (So(e)) throw Error(y(418));
            (e.flags = (e.flags & -4097) | 2), (j = !1), (ve = e);
        }
    }
}
function yi(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    ve = e;
}
function dr(e) {
    if (e !== ve) return !1;
    if (!j) return yi(e), (j = !0), !1;
    var n;
    if (
        ((n = e.tag !== 3) &&
            !(n = e.tag !== 5) &&
            ((n = e.type),
                (n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps))),
            n && (n = he))
    ) {
        if (So(e)) throw (ta(), Error(y(418)));
        for (; n;) na(e, n), (n = on(n.nextSibling));
    }
    if ((yi(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(y(317));
        e: {
            for (e = e.nextSibling, n = 0; e;) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            he = on(e.nextSibling);
                            break e;
                        }
                        n--;
                    } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
                }
                e = e.nextSibling;
            }
            he = null;
        }
    } else he = ve ? on(e.stateNode.nextSibling) : null;
    return !0;
}
function ta() {
    for (var e = he; e;) e = on(e.nextSibling);
}
function et() {
    (he = ve = null), (j = !1);
}
function su(e) {
    Te === null ? (Te = [e]) : Te.push(e);
}
var qf = Xe.ReactCurrentBatchConfig;
function ze(e, n) {
    if (e && e.defaultProps) {
        (n = A({}, n)), (e = e.defaultProps);
        for (var t in e) n[t] === void 0 && (n[t] = e[t]);
        return n;
    }
    return n;
}
var Wr = mn(null),
    Hr = null,
    Bn = null,
    au = null;
function cu() {
    au = Bn = Hr = null;
}
function fu(e) {
    var n = Wr.current;
    I(Wr), (e._currentValue = n);
}
function Co(e, n, t) {
    for (; e !== null;) {
        var r = e.alternate;
        if (
            ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
                : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
                e === t)
        )
            break;
        e = e.return;
    }
}
function Zn(e, n) {
    (Hr = e),
        (au = Bn = null),
        (e = e.dependencies),
        e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function xe(e) {
    var n = e._currentValue;
    if (au !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
            if (Hr === null) throw Error(y(308));
            (Bn = e), (Hr.dependencies = { lanes: 0, firstContext: e });
        } else Bn = Bn.next = e;
    return n;
}
var Sn = null;
function du(e) {
    Sn === null ? (Sn = [e]) : Sn.push(e);
}
function ra(e, n, t, r) {
    var l = n.interleaved;
    return (
        l === null ? ((t.next = t), du(n)) : ((t.next = l.next), (l.next = t)),
        (n.interleaved = t),
        Ke(e, r)
    );
}
function Ke(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)
        (e.childLanes |= n),
            (t = e.alternate),
            t !== null && (t.childLanes |= n),
            (t = e),
            (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function pu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function la(e, n) {
    (e = e.updateQueue),
        n.updateQueue === e &&
        (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
        });
}
function We(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function un(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), R & 2)) {
        var l = r.pending;
        return (
            l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
            (r.pending = n),
            Ke(e, t)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((n.next = n), du(r)) : ((n.next = l.next), (l.next = n)),
        (r.interleaved = n),
        Ke(e, t)
    );
}
function Cr(e, n, t) {
    if (
        ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), qo(e, t);
    }
}
function gi(e, n) {
    var t = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
        var l = null,
            o = null;
        if (((t = t.firstBaseUpdate), t !== null)) {
            do {
                var u = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null,
                };
                o === null ? (l = o = u) : (o = o.next = u), (t = t.next);
            } while (t !== null);
            o === null ? (l = o = n) : (o = o.next = n);
        } else l = o = n;
        (t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = t);
        return;
    }
    (e = t.lastBaseUpdate),
        e === null ? (t.firstBaseUpdate = n) : (e.next = n),
        (t.lastBaseUpdate = n);
}
function Qr(e, n, t, r) {
    var l = e.updateQueue;
    Je = !1;
    var o = l.firstBaseUpdate,
        u = l.lastBaseUpdate,
        i = l.shared.pending;
    if (i !== null) {
        l.shared.pending = null;
        var s = i,
            c = s.next;
        (s.next = null), u === null ? (o = c) : (u.next = c), (u = s);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
                (i = h.lastBaseUpdate),
                i !== u &&
                (i === null ? (h.firstBaseUpdate = c) : (i.next = c),
                    (h.lastBaseUpdate = s)));
    }
    if (o !== null) {
        var m = l.baseState;
        (u = 0), (h = c = s = null), (i = o);
        do {
            var p = i.lane,
                g = i.eventTime;
            if ((r & p) === p) {
                h !== null &&
                    (h = h.next =
                    {
                        eventTime: g,
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null,
                    });
                e: {
                    var w = e,
                        k = i;
                    switch (((p = n), (g = t), k.tag)) {
                        case 1:
                            if (((w = k.payload), typeof w == "function")) {
                                m = w.call(g, m, p);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = k.payload),
                                    (p = typeof w == "function" ? w.call(g, m, p) : w),
                                    p == null)
                            )
                                break e;
                            m = A({}, m, p);
                            break e;
                        case 2:
                            Je = !0;
                    }
                }
                i.callback !== null &&
                    i.lane !== 0 &&
                    ((e.flags |= 64),
                        (p = l.effects),
                        p === null ? (l.effects = [i]) : p.push(i));
            } else
                (g = {
                    eventTime: g,
                    lane: p,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null,
                }),
                    h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
                    (u |= p);
            if (((i = i.next), i === null)) {
                if (((i = l.shared.pending), i === null)) break;
                (p = i),
                    (i = p.next),
                    (p.next = null),
                    (l.lastBaseUpdate = p),
                    (l.shared.pending = null);
            }
        } while (!0);
        if (
            (h === null && (s = m),
                (l.baseState = s),
                (l.firstBaseUpdate = c),
                (l.lastBaseUpdate = h),
                (n = l.shared.interleaved),
                n !== null)
        ) {
            l = n;
            do (u |= l.lane), (l = l.next);
            while (l !== n);
        } else o === null && (l.shared.lanes = 0);
        (zn |= u), (e.lanes = u), (e.memoizedState = m);
    }
}
function wi(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = t), typeof l != "function"))
                    throw Error(y(191, l));
                l.call(r);
            }
        }
}
var oa = new rs.Component().refs;
function xo(e, n, t, r) {
    (n = e.memoizedState),
        (t = t(r, n)),
        (t = t == null ? n : A({}, n, t)),
        (e.memoizedState = t),
        e.lanes === 0 && (e.updateQueue.baseState = t);
}
var il = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Rn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = oe(),
            l = an(e),
            o = We(r, l);
        (o.payload = n),
            t != null && (o.callback = t),
            (n = un(e, o, l)),
            n !== null && (Oe(n, e, l, r), Cr(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = oe(),
            l = an(e),
            o = We(r, l);
        (o.tag = 1),
            (o.payload = n),
            t != null && (o.callback = t),
            (n = un(e, o, l)),
            n !== null && (Oe(n, e, l, r), Cr(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = oe(),
            r = an(e),
            l = We(t, r);
        (l.tag = 2),
            n != null && (l.callback = n),
            (n = un(e, l, r)),
            n !== null && (Oe(n, e, r, t), Cr(n, e, r));
    },
};
function ki(e, n, t, r, l, o, u) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, u)
            : n.prototype && n.prototype.isPureReactComponent
                ? !Ut(t, r) || !Ut(l, o)
                : !0
    );
}
function ua(e, n, t) {
    var r = !1,
        l = dn,
        o = n.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = xe(o))
            : ((l = de(n) ? _n : re.current),
                (r = n.contextTypes),
                (o = (r = r != null) ? bn(e, l) : dn)),
        (n = new n(t, o)),
        (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = il),
        (e.stateNode = n),
        (n._reactInternals = e),
        r &&
        ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        n
    );
}
function Si(e, n, t, r) {
    (e = n.state),
        typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
        typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && il.enqueueReplaceState(n, n.state, null);
}
function _o(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = oa), pu(e);
    var o = n.contextType;
    typeof o == "object" && o !== null
        ? (l.context = xe(o))
        : ((o = de(n) ? _n : re.current), (l.context = bn(e, o))),
        (l.state = e.memoizedState),
        (o = n.getDerivedStateFromProps),
        typeof o == "function" && (xo(e, n, o, t), (l.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
            typeof l.componentWillMount != "function") ||
        ((n = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
            l.UNSAFE_componentWillMount(),
            n !== l.state && il.enqueueReplaceState(l, l.state, null),
            Qr(e, t, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ht(e, n, t) {
    if (
        ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (t._owner) {
            if (((t = t._owner), t)) {
                if (t.tag !== 1) throw Error(y(309));
                var r = t.stateNode;
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                o = "" + e;
            return n !== null &&
                n.ref !== null &&
                typeof n.ref == "function" &&
                n.ref._stringRef === o
                ? n.ref
                : ((n = function (u) {
                    var i = l.refs;
                    i === oa && (i = l.refs = {}),
                        u === null ? delete i[o] : (i[o] = u);
                }),
                    (n._stringRef = o),
                    n);
        }
        if (typeof e != "string") throw Error(y(284));
        if (!t._owner) throw Error(y(290, e));
    }
    return e;
}
function pr(e, n) {
    throw (
        ((e = Object.prototype.toString.call(n)),
            Error(
                y(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(n).join(", ") + "}"
                        : e
                )
            ))
    );
}
function Ei(e) {
    var n = e._init;
    return n(e._payload);
}
function ia(e) {
    function n(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
        }
    }
    function t(f, a) {
        if (!e) return null;
        for (; a !== null;) n(f, a), (a = a.sibling);
        return null;
    }
    function r(f, a) {
        for (f = new Map(); a !== null;)
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
        return f;
    }
    function l(f, a) {
        return (f = cn(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, a, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                    d !== null
                        ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
                        : ((f.flags |= 2), a))
                : ((f.flags |= 1048576), a)
        );
    }
    function u(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, v) {
        return a === null || a.tag !== 6
            ? ((a = Wl(d, f.mode, v)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, v) {
        var E = d.type;
        return E === Dn
            ? h(f, a, d.props.children, v, d.key)
            : a !== null &&
                (a.elementType === E ||
                    (typeof E == "object" &&
                        E !== null &&
                        E.$$typeof === Ze &&
                        Ei(E) === a.type))
                ? ((v = l(a, d.props)), (v.ref = ht(f, a, d)), (v.return = f), v)
                : ((v = Lr(d.type, d.key, d.props, null, f.mode, v)),
                    (v.ref = ht(f, a, d)),
                    (v.return = f),
                    v);
    }
    function c(f, a, d, v) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== d.containerInfo ||
            a.stateNode.implementation !== d.implementation
            ? ((a = Hl(d, f.mode, v)), (a.return = f), a)
            : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function h(f, a, d, v, E) {
        return a === null || a.tag !== 7
            ? ((a = xn(d, f.mode, v, E)), (a.return = f), a)
            : ((a = l(a, d)), (a.return = f), a);
    }
    function m(f, a, d) {
        if ((typeof a == "string" && a !== "") || typeof a == "number")
            return (a = Wl("" + a, f.mode, d)), (a.return = f), a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case tr:
                    return (
                        (d = Lr(a.type, a.key, a.props, null, f.mode, d)),
                        (d.ref = ht(f, null, a)),
                        (d.return = f),
                        d
                    );
                case Mn:
                    return (a = Hl(a, f.mode, d)), (a.return = f), a;
                case Ze:
                    var v = a._init;
                    return m(f, v(a._payload), d);
            }
            if (wt(a) || ct(a))
                return (a = xn(a, f.mode, d, null)), (a.return = f), a;
            pr(f, a);
        }
        return null;
    }
    function p(f, a, d, v) {
        var E = a !== null ? a.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return E !== null ? null : i(f, a, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case tr:
                    return d.key === E ? s(f, a, d, v) : null;
                case Mn:
                    return d.key === E ? c(f, a, d, v) : null;
                case Ze:
                    return (E = d._init), p(f, a, E(d._payload), v);
            }
            if (wt(d) || ct(d)) return E !== null ? null : h(f, a, d, v, null);
            pr(f, d);
        }
        return null;
    }
    function g(f, a, d, v, E) {
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return (f = f.get(d) || null), i(a, f, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case tr:
                    return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
                case Mn:
                    return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
                case Ze:
                    var x = v._init;
                    return g(f, a, d, x(v._payload), E);
            }
            if (wt(v) || ct(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
            pr(a, v);
        }
        return null;
    }
    function w(f, a, d, v) {
        for (
            var E = null, x = null, _ = a, N = (a = 0), B = null;
            _ !== null && N < d.length;
            N++
        ) {
            _.index > N ? ((B = _), (_ = null)) : (B = _.sibling);
            var T = p(f, _, d[N], v);
            if (T === null) {
                _ === null && (_ = B);
                break;
            }
            e && _ && T.alternate === null && n(f, _),
                (a = o(T, a, N)),
                x === null ? (E = T) : (x.sibling = T),
                (x = T),
                (_ = B);
        }
        if (N === d.length) return t(f, _), j && gn(f, N), E;
        if (_ === null) {
            for (; N < d.length; N++)
                (_ = m(f, d[N], v)),
                    _ !== null &&
                    ((a = o(_, a, N)), x === null ? (E = _) : (x.sibling = _), (x = _));
            return j && gn(f, N), E;
        }
        for (_ = r(f, _); N < d.length; N++)
            (B = g(_, f, N, d[N], v)),
                B !== null &&
                (e && B.alternate !== null && _.delete(B.key === null ? N : B.key),
                    (a = o(B, a, N)),
                    x === null ? (E = B) : (x.sibling = B),
                    (x = B));
        return (
            e &&
            _.forEach(function (Ne) {
                return n(f, Ne);
            }),
            j && gn(f, N),
            E
        );
    }
    function k(f, a, d, v) {
        var E = ct(d);
        if (typeof E != "function") throw Error(y(150));
        if (((d = E.call(d)), d == null)) throw Error(y(151));
        for (
            var x = (E = null), _ = a, N = (a = 0), B = null, T = d.next();
            _ !== null && !T.done;
            N++, T = d.next()
        ) {
            _.index > N ? ((B = _), (_ = null)) : (B = _.sibling);
            var Ne = p(f, _, T.value, v);
            if (Ne === null) {
                _ === null && (_ = B);
                break;
            }
            e && _ && Ne.alternate === null && n(f, _),
                (a = o(Ne, a, N)),
                x === null ? (E = Ne) : (x.sibling = Ne),
                (x = Ne),
                (_ = B);
        }
        if (T.done) return t(f, _), j && gn(f, N), E;
        if (_ === null) {
            for (; !T.done; N++, T = d.next())
                (T = m(f, T.value, v)),
                    T !== null &&
                    ((a = o(T, a, N)), x === null ? (E = T) : (x.sibling = T), (x = T));
            return j && gn(f, N), E;
        }
        for (_ = r(f, _); !T.done; N++, T = d.next())
            (T = g(_, f, N, T.value, v)),
                T !== null &&
                (e && T.alternate !== null && _.delete(T.key === null ? N : T.key),
                    (a = o(T, a, N)),
                    x === null ? (E = T) : (x.sibling = T),
                    (x = T));
        return (
            e &&
            _.forEach(function (st) {
                return n(f, st);
            }),
            j && gn(f, N),
            E
        );
    }
    function F(f, a, d, v) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === Dn &&
                d.key === null &&
                (d = d.props.children),
                typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case tr:
                    e: {
                        for (var E = d.key, x = a; x !== null;) {
                            if (x.key === E) {
                                if (((E = d.type), E === Dn)) {
                                    if (x.tag === 7) {
                                        t(f, x.sibling),
                                            (a = l(x, d.props.children)),
                                            (a.return = f),
                                            (f = a);
                                        break e;
                                    }
                                } else if (
                                    x.elementType === E ||
                                    (typeof E == "object" &&
                                        E !== null &&
                                        E.$$typeof === Ze &&
                                        Ei(E) === x.type)
                                ) {
                                    t(f, x.sibling),
                                        (a = l(x, d.props)),
                                        (a.ref = ht(f, x, d)),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                }
                                t(f, x);
                                break;
                            } else n(f, x);
                            x = x.sibling;
                        }
                        d.type === Dn
                            ? ((a = xn(d.props.children, f.mode, v, d.key)),
                                (a.return = f),
                                (f = a))
                            : ((v = Lr(d.type, d.key, d.props, null, f.mode, v)),
                                (v.ref = ht(f, a, d)),
                                (v.return = f),
                                (f = v));
                    }
                    return u(f);
                case Mn:
                    e: {
                        for (x = d.key; a !== null;) {
                            if (a.key === x)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo === d.containerInfo &&
                                    a.stateNode.implementation === d.implementation
                                ) {
                                    t(f, a.sibling),
                                        (a = l(a, d.children || [])),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                } else {
                                    t(f, a);
                                    break;
                                }
                            else n(f, a);
                            a = a.sibling;
                        }
                        (a = Hl(d, f.mode, v)), (a.return = f), (f = a);
                    }
                    return u(f);
                case Ze:
                    return (x = d._init), F(f, a, x(d._payload), v);
            }
            if (wt(d)) return w(f, a, d, v);
            if (ct(d)) return k(f, a, d, v);
            pr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
                a !== null && a.tag === 6
                    ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
                    : (t(f, a), (a = Wl(d, f.mode, v)), (a.return = f), (f = a)),
                u(f))
            : t(f, a);
    }
    return F;
}
var nt = ia(!0),
    sa = ia(!1),
    qt = {},
    Ue = mn(qt),
    Bt = mn(qt),
    Wt = mn(qt);
function En(e) {
    if (e === qt) throw Error(y(174));
    return e;
}
function mu(e, n) {
    switch ((M(Wt, n), M(Bt, e), M(Ue, qt), (e = n.nodeType), e)) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : to(null, "");
            break;
        default:
            (e = e === 8 ? n.parentNode : n),
                (n = e.namespaceURI || null),
                (e = e.tagName),
                (n = to(n, e));
    }
    I(Ue), M(Ue, n);
}
function tt() {
    I(Ue), I(Bt), I(Wt);
}
function aa(e) {
    En(Wt.current);
    var n = En(Ue.current),
        t = to(n, e.type);
    n !== t && (M(Bt, e), M(Ue, t));
}
function hu(e) {
    Bt.current === e && (I(Ue), I(Bt));
}
var U = mn(0);
function Kr(e) {
    for (var n = e; n !== null;) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (
                t !== null &&
                ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
            )
                return n;
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if (n.flags & 128) return n;
        } else if (n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return null;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
}
var jl = [];
function vu() {
    for (var e = 0; e < jl.length; e++)
        jl[e]._workInProgressVersionPrimary = null;
    jl.length = 0;
}
var xr = Xe.ReactCurrentDispatcher,
    Ul = Xe.ReactCurrentBatchConfig,
    Pn = 0,
    $ = null,
    K = null,
    G = null,
    Yr = !1,
    Pt = !1,
    Ht = 0,
    bf = 0;
function ee() {
    throw Error(y(321));
}
function yu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!Me(e[t], n[t])) return !1;
    return !0;
}
function gu(e, n, t, r, l, o) {
    if (
        ((Pn = o),
            ($ = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (xr.current = e === null || e.memoizedState === null ? rd : ld),
            (e = t(r, l)),
            Pt)
    ) {
        o = 0;
        do {
            if (((Pt = !1), (Ht = 0), 25 <= o)) throw Error(y(301));
            (o += 1),
                (G = K = null),
                (n.updateQueue = null),
                (xr.current = od),
                (e = t(r, l));
        } while (Pt);
    }
    if (
        ((xr.current = Xr),
            (n = K !== null && K.next !== null),
            (Pn = 0),
            (G = K = $ = null),
            (Yr = !1),
            n)
    )
        throw Error(y(300));
    return e;
}
function wu() {
    var e = Ht !== 0;
    return (Ht = 0), e;
}
function Ie() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return G === null ? ($.memoizedState = G = e) : (G = G.next = e), G;
}
function _e() {
    if (K === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = K.next;
    var n = G === null ? $.memoizedState : G.next;
    if (n !== null) (G = n), (K = e);
    else {
        if (e === null) throw Error(y(310));
        (K = e),
            (e = {
                memoizedState: K.memoizedState,
                baseState: K.baseState,
                baseQueue: K.baseQueue,
                queue: K.queue,
                next: null,
            }),
            G === null ? ($.memoizedState = G = e) : (G = G.next = e);
    }
    return G;
}
function Qt(e, n) {
    return typeof n == "function" ? n(e) : n;
}
function $l(e) {
    var n = _e(),
        t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = K,
        l = r.baseQueue,
        o = t.pending;
    if (o !== null) {
        if (l !== null) {
            var u = l.next;
            (l.next = o.next), (o.next = u);
        }
        (r.baseQueue = l = o), (t.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var i = (u = null),
            s = null,
            c = o;
        do {
            var h = c.lane;
            if ((Pn & h) === h)
                s !== null &&
                    (s = s.next =
                    {
                        lane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                    }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var m = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                s === null ? ((i = s = m), (u = r)) : (s = s.next = m),
                    ($.lanes |= h),
                    (zn |= h);
            }
            c = c.next;
        } while (c !== null && c !== o);
        s === null ? (u = r) : (s.next = i),
            Me(r, n.memoizedState) || (ce = !0),
            (n.memoizedState = r),
            (n.baseState = u),
            (n.baseQueue = s),
            (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), ($.lanes |= o), (zn |= o), (l = l.next);
        while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
}
function Al(e) {
    var n = _e(),
        t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
        l = t.pending,
        o = n.memoizedState;
    if (l !== null) {
        t.pending = null;
        var u = (l = l.next);
        do (o = e(o, u.action)), (u = u.next);
        while (u !== l);
        Me(o, n.memoizedState) || (ce = !0),
            (n.memoizedState = o),
            n.baseQueue === null && (n.baseState = o),
            (t.lastRenderedState = o);
    }
    return [o, r];
}
function ca() { }
function fa(e, n) {
    var t = $,
        r = _e(),
        l = n(),
        o = !Me(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (ce = !0)),
            (r = r.queue),
            ku(ma.bind(null, t, r, e), [e]),
            r.getSnapshot !== n || o || (G !== null && G.memoizedState.tag & 1))
    ) {
        if (
            ((t.flags |= 2048),
                Kt(9, pa.bind(null, t, r, l, n), void 0, null),
                Z === null)
        )
            throw Error(y(349));
        Pn & 30 || da(t, n, l);
    }
    return l;
}
function da(e, n, t) {
    (e.flags |= 16384),
        (e = { getSnapshot: n, value: t }),
        (n = $.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }),
                ($.updateQueue = n),
                (n.stores = [e]))
            : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function pa(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ha(n) && va(e);
}
function ma(e, n, t) {
    return t(function () {
        ha(n) && va(e);
    });
}
function ha(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !Me(e, t);
    } catch {
        return !0;
    }
}
function va(e) {
    var n = Ke(e, 1);
    n !== null && Oe(n, e, 1, -1);
}
function Ci(e) {
    var n = Ie();
    return (
        typeof e == "function" && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qt,
            lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = td.bind(null, $, e)),
        [n.memoizedState, e]
    );
}
function Kt(e, n, t, r) {
    return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        (n = $.updateQueue),
        n === null
            ? ((n = { lastEffect: null, stores: null }),
                ($.updateQueue = n),
                (n.lastEffect = e.next = e))
            : ((t = n.lastEffect),
                t === null
                    ? (n.lastEffect = e.next = e)
                    : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
        e
    );
}
function ya() {
    return _e().memoizedState;
}
function _r(e, n, t, r) {
    var l = Ie();
    ($.flags |= e),
        (l.memoizedState = Kt(1 | n, t, void 0, r === void 0 ? null : r));
}
function sl(e, n, t, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (K !== null) {
        var u = K.memoizedState;
        if (((o = u.destroy), r !== null && yu(r, u.deps))) {
            l.memoizedState = Kt(n, t, o, r);
            return;
        }
    }
    ($.flags |= e), (l.memoizedState = Kt(1 | n, t, o, r));
}
function xi(e, n) {
    return _r(8390656, 8, e, n);
}
function ku(e, n) {
    return sl(2048, 8, e, n);
}
function ga(e, n) {
    return sl(4, 2, e, n);
}
function wa(e, n) {
    return sl(4, 4, e, n);
}
function ka(e, n) {
    if (typeof n == "function")
        return (
            (e = e()),
            n(e),
            function () {
                n(null);
            }
        );
    if (n != null)
        return (
            (e = e()),
            (n.current = e),
            function () {
                n.current = null;
            }
        );
}
function Sa(e, n, t) {
    return (
        (t = t != null ? t.concat([e]) : null), sl(4, 4, ka.bind(null, n, e), t)
    );
}
function Su() { }
function Ea(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && yu(n, r[1])
        ? r[0]
        : ((t.memoizedState = [e, n]), e);
}
function Ca(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && yu(n, r[1])
        ? r[0]
        : ((e = e()), (t.memoizedState = [e, n]), e);
}
function xa(e, n, t) {
    return Pn & 21
        ? (Me(t, n) || ((t = Ps()), ($.lanes |= t), (zn |= t), (e.baseState = !0)),
            n)
        : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function ed(e, n) {
    var t = O;
    (O = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Ul.transition;
    Ul.transition = {};
    try {
        e(!1), n();
    } finally {
        (O = t), (Ul.transition = r);
    }
}
function _a() {
    return _e().memoizedState;
}
function nd(e, n, t) {
    var r = an(e);
    if (
        ((t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            Na(e))
    )
        Pa(n, t);
    else if (((t = ra(e, n, t, r)), t !== null)) {
        var l = oe();
        Oe(t, e, r, l), za(t, n, r);
    }
}
function td(e, n, t) {
    var r = an(e),
        l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Na(e)) Pa(n, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = n.lastRenderedReducer), o !== null)
        )
            try {
                var u = n.lastRenderedState,
                    i = o(u, t);
                if (((l.hasEagerState = !0), (l.eagerState = i), Me(i, u))) {
                    var s = n.interleaved;
                    s === null
                        ? ((l.next = l), du(n))
                        : ((l.next = s.next), (s.next = l)),
                        (n.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (t = ra(e, n, l, r)),
            t !== null && ((l = oe()), Oe(t, e, r, l), za(t, n, r));
    }
}
function Na(e) {
    var n = e.alternate;
    return e === $ || (n !== null && n === $);
}
function Pa(e, n) {
    Pt = Yr = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
        (e.pending = n);
}
function za(e, n, t) {
    if (t & 4194240) {
        var r = n.lanes;
        (r &= e.pendingLanes), (t |= r), (n.lanes = t), qo(e, t);
    }
}
var Xr = {
    readContext: xe,
    useCallback: ee,
    useContext: ee,
    useEffect: ee,
    useImperativeHandle: ee,
    useInsertionEffect: ee,
    useLayoutEffect: ee,
    useMemo: ee,
    useReducer: ee,
    useRef: ee,
    useState: ee,
    useDebugValue: ee,
    useDeferredValue: ee,
    useTransition: ee,
    useMutableSource: ee,
    useSyncExternalStore: ee,
    useId: ee,
    unstable_isNewReconciler: !1,
},
    rd = {
        readContext: xe,
        useCallback: function (e, n) {
            return (Ie().memoizedState = [e, n === void 0 ? null : n]), e;
        },
        useContext: xe,
        useEffect: xi,
        useImperativeHandle: function (e, n, t) {
            return (
                (t = t != null ? t.concat([e]) : null),
                _r(4194308, 4, ka.bind(null, n, e), t)
            );
        },
        useLayoutEffect: function (e, n) {
            return _r(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
            return _r(4, 2, e, n);
        },
        useMemo: function (e, n) {
            var t = Ie();
            return (
                (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
            );
        },
        useReducer: function (e, n, t) {
            var r = Ie();
            return (
                (n = t !== void 0 ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = nd.bind(null, $, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var n = Ie();
            return (e = { current: e }), (n.memoizedState = e);
        },
        useState: Ci,
        useDebugValue: Su,
        useDeferredValue: function (e) {
            return (Ie().memoizedState = e);
        },
        useTransition: function () {
            var e = Ci(!1),
                n = e[0];
            return (e = ed.bind(null, e[1])), (Ie().memoizedState = e), [n, e];
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, n, t) {
            var r = $,
                l = Ie();
            if (j) {
                if (t === void 0) throw Error(y(407));
                t = t();
            } else {
                if (((t = n()), Z === null)) throw Error(y(349));
                Pn & 30 || da(r, n, t);
            }
            l.memoizedState = t;
            var o = { value: t, getSnapshot: n };
            return (
                (l.queue = o),
                xi(ma.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Kt(9, pa.bind(null, r, o, t, n), void 0, null),
                t
            );
        },
        useId: function () {
            var e = Ie(),
                n = Z.identifierPrefix;
            if (j) {
                var t = Be,
                    r = Ve;
                (t = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + t),
                    (n = ":" + n + "R" + t),
                    (t = Ht++),
                    0 < t && (n += "H" + t.toString(32)),
                    (n += ":");
            } else (t = bf++), (n = ":" + n + "r" + t.toString(32) + ":");
            return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
    },
    ld = {
        readContext: xe,
        useCallback: Ea,
        useContext: xe,
        useEffect: ku,
        useImperativeHandle: Sa,
        useInsertionEffect: ga,
        useLayoutEffect: wa,
        useMemo: Ca,
        useReducer: $l,
        useRef: ya,
        useState: function () {
            return $l(Qt);
        },
        useDebugValue: Su,
        useDeferredValue: function (e) {
            var n = _e();
            return xa(n, K.memoizedState, e);
        },
        useTransition: function () {
            var e = $l(Qt)[0],
                n = _e().memoizedState;
            return [e, n];
        },
        useMutableSource: ca,
        useSyncExternalStore: fa,
        useId: _a,
        unstable_isNewReconciler: !1,
    },
    od = {
        readContext: xe,
        useCallback: Ea,
        useContext: xe,
        useEffect: ku,
        useImperativeHandle: Sa,
        useInsertionEffect: ga,
        useLayoutEffect: wa,
        useMemo: Ca,
        useReducer: Al,
        useRef: ya,
        useState: function () {
            return Al(Qt);
        },
        useDebugValue: Su,
        useDeferredValue: function (e) {
            var n = _e();
            return K === null ? (n.memoizedState = e) : xa(n, K.memoizedState, e);
        },
        useTransition: function () {
            var e = Al(Qt)[0],
                n = _e().memoizedState;
            return [e, n];
        },
        useMutableSource: ca,
        useSyncExternalStore: fa,
        useId: _a,
        unstable_isNewReconciler: !1,
    };
function rt(e, n) {
    try {
        var t = "",
            r = n;
        do (t += Oc(r)), (r = r.return);
        while (r);
        var l = t;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
}
function Vl(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function No(e, n) {
    try {
        console.error(n.value);
    } catch (t) {
        setTimeout(function () {
            throw t;
        });
    }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function La(e, n, t) {
    (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
        (t.callback = function () {
            Zr || ((Zr = !0), (Fo = r)), No(e, n);
        }),
        t
    );
}
function Ta(e, n, t) {
    (t = We(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = n.value;
        (t.payload = function () {
            return r(l);
        }),
            (t.callback = function () {
                No(e, n);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
        typeof o.componentDidCatch == "function" &&
        (t.callback = function () {
            No(e, n),
                typeof r != "function" &&
                (sn === null ? (sn = new Set([this])) : sn.add(this));
            var u = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: u !== null ? u : "",
            });
        }),
        t
    );
}
function _i(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ud();
        var l = new Set();
        r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = kd.bind(null, e, n, t)), n.then(e, e));
}
function Ni(e) {
    do {
        var n;
        if (
            ((n = e.tag === 13) &&
                ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
                n)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Pi(e, n, t, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === n
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
                (t.flags |= 131072),
                (t.flags &= -52805),
                t.tag === 1 &&
                (t.alternate === null
                    ? (t.tag = 17)
                    : ((n = We(-1, 1)), (n.tag = 2), un(t, n, 1))),
                (t.lanes |= 1)),
            e);
}
var id = Xe.ReactCurrentOwner,
    ce = !1;
function le(e, n, t, r) {
    n.child = e === null ? sa(n, null, t, r) : nt(n, e.child, t, r);
}
function zi(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return (
        Zn(n, l),
        (r = gu(e, n, t, r, o, l)),
        (t = wu()),
        e !== null && !ce
            ? ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~l),
                Ye(e, n, l))
            : (j && t && uu(n), (n.flags |= 1), le(e, n, r, l), n.child)
    );
}
function Li(e, n, t, r, l) {
    if (e === null) {
        var o = t.type;
        return typeof o == "function" &&
            !Lu(o) &&
            o.defaultProps === void 0 &&
            t.compare === null &&
            t.defaultProps === void 0
            ? ((n.tag = 15), (n.type = o), Ra(e, n, o, r, l))
            : ((e = Lr(t.type, null, r, n, n.mode, l)),
                (e.ref = n.ref),
                (e.return = n),
                (n.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var u = o.memoizedProps;
        if (
            ((t = t.compare), (t = t !== null ? t : Ut), t(u, r) && e.ref === n.ref)
        )
            return Ye(e, n, l);
    }
    return (
        (n.flags |= 1),
        (e = cn(o, r)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e)
    );
}
function Ra(e, n, t, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ut(o, r) && e.ref === n.ref)
            if (((ce = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (ce = !0);
            else return (n.lanes = e.lanes), Ye(e, n, l);
    }
    return Po(e, n, t, r, l);
}
function Oa(e, n, t) {
    var r = n.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(n.mode & 1))
            (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                M(Hn, me),
                (me |= t);
        else {
            if (!(t & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | t : t),
                    (n.lanes = n.childLanes = 1073741824),
                    (n.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (n.updateQueue = null),
                    M(Hn, me),
                    (me |= e),
                    null
                );
            (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = o !== null ? o.baseLanes : t),
                M(Hn, me),
                (me |= r);
        }
    else
        o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
            M(Hn, me),
            (me |= r);
    return le(e, n, l, t), n.child;
}
function Ma(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
        ((n.flags |= 512), (n.flags |= 2097152));
}
function Po(e, n, t, r, l) {
    var o = de(t) ? _n : re.current;
    return (
        (o = bn(n, o)),
        Zn(n, l),
        (t = gu(e, n, t, r, o, l)),
        (r = wu()),
        e !== null && !ce
            ? ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~l),
                Ye(e, n, l))
            : (j && r && uu(n), (n.flags |= 1), le(e, n, t, l), n.child)
    );
}
function Ti(e, n, t, r, l) {
    if (de(t)) {
        var o = !0;
        Ar(n);
    } else o = !1;
    if ((Zn(n, l), n.stateNode === null))
        Nr(e, n), ua(n, t, r), _o(n, t, r, l), (r = !0);
    else if (e === null) {
        var u = n.stateNode,
            i = n.memoizedProps;
        u.props = i;
        var s = u.context,
            c = t.contextType;
        typeof c == "object" && c !== null
            ? (c = xe(c))
            : ((c = de(t) ? _n : re.current), (c = bn(n, c)));
        var h = t.getDerivedStateFromProps,
            m =
                typeof h == "function" ||
                typeof u.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
                typeof u.componentWillReceiveProps != "function") ||
            ((i !== r || s !== c) && Si(n, u, r, c)),
            (Je = !1);
        var p = n.memoizedState;
        (u.state = p),
            Qr(n, r, u, l),
            (s = n.memoizedState),
            i !== r || p !== s || fe.current || Je
                ? (typeof h == "function" && (xo(n, t, h, r), (s = n.memoizedState)),
                    (i = Je || ki(n, t, i, r, p, s, c))
                        ? (m ||
                            (typeof u.UNSAFE_componentWillMount != "function" &&
                                typeof u.componentWillMount != "function") ||
                            (typeof u.componentWillMount == "function" &&
                                u.componentWillMount(),
                                typeof u.UNSAFE_componentWillMount == "function" &&
                                u.UNSAFE_componentWillMount()),
                            typeof u.componentDidMount == "function" && (n.flags |= 4194308))
                        : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
                            (n.memoizedProps = r),
                            (n.memoizedState = s)),
                    (u.props = r),
                    (u.state = s),
                    (u.context = c),
                    (r = i))
                : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
                    (r = !1));
    } else {
        (u = n.stateNode),
            la(e, n),
            (i = n.memoizedProps),
            (c = n.type === n.elementType ? i : ze(n.type, i)),
            (u.props = c),
            (m = n.pendingProps),
            (p = u.context),
            (s = t.contextType),
            typeof s == "object" && s !== null
                ? (s = xe(s))
                : ((s = de(t) ? _n : re.current), (s = bn(n, s)));
        var g = t.getDerivedStateFromProps;
        (h =
            typeof g == "function" ||
            typeof u.getSnapshotBeforeUpdate == "function") ||
            (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
                typeof u.componentWillReceiveProps != "function") ||
            ((i !== m || p !== s) && Si(n, u, r, s)),
            (Je = !1),
            (p = n.memoizedState),
            (u.state = p),
            Qr(n, r, u, l);
        var w = n.memoizedState;
        i !== m || p !== w || fe.current || Je
            ? (typeof g == "function" && (xo(n, t, g, r), (w = n.memoizedState)),
                (c = Je || ki(n, t, c, r, p, w, s) || !1)
                    ? (h ||
                        (typeof u.UNSAFE_componentWillUpdate != "function" &&
                            typeof u.componentWillUpdate != "function") ||
                        (typeof u.componentWillUpdate == "function" &&
                            u.componentWillUpdate(r, w, s),
                            typeof u.UNSAFE_componentWillUpdate == "function" &&
                            u.UNSAFE_componentWillUpdate(r, w, s)),
                        typeof u.componentDidUpdate == "function" && (n.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
                    : (typeof u.componentDidUpdate != "function" ||
                        (i === e.memoizedProps && p === e.memoizedState) ||
                        (n.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate != "function" ||
                        (i === e.memoizedProps && p === e.memoizedState) ||
                        (n.flags |= 1024),
                        (n.memoizedProps = r),
                        (n.memoizedState = w)),
                (u.props = r),
                (u.state = w),
                (u.context = s),
                (r = c))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && p === e.memoizedState) ||
                (n.flags |= 4),
                typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && p === e.memoizedState) ||
                (n.flags |= 1024),
                (r = !1));
    }
    return zo(e, n, t, r, o, l);
}
function zo(e, n, t, r, l, o) {
    Ma(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u) return l && hi(n, t, !1), Ye(e, n, o);
    (r = n.stateNode), (id.current = n);
    var i =
        u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (n.flags |= 1),
        e !== null && u
            ? ((n.child = nt(n, e.child, null, o)), (n.child = nt(n, null, i, o)))
            : le(e, n, i, o),
        (n.memoizedState = r.state),
        l && hi(n, t, !0),
        n.child
    );
}
function Da(e) {
    var n = e.stateNode;
    n.pendingContext
        ? mi(e, n.pendingContext, n.pendingContext !== n.context)
        : n.context && mi(e, n.context, !1),
        mu(e, n.containerInfo);
}
function Ri(e, n, t, r, l) {
    return et(), su(l), (n.flags |= 256), le(e, n, t, r), n.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, n, t) {
    var r = n.pendingProps,
        l = U.current,
        o = !1,
        u = (n.flags & 128) !== 0,
        i;
    if (
        ((i = u) ||
            (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
            i
                ? ((o = !0), (n.flags &= -129))
                : (e === null || e.memoizedState !== null) && (l |= 1),
            M(U, l & 1),
            e === null)
    )
        return (
            Eo(n),
            (e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (n.mode & 1
                    ? e.data === "$!"
                        ? (n.lanes = 8)
                        : (n.lanes = 1073741824)
                    : (n.lanes = 1),
                    null)
                : ((u = r.children),
                    (e = r.fallback),
                    o
                        ? ((r = n.mode),
                            (o = n.child),
                            (u = { mode: "hidden", children: u }),
                            !(r & 1) && o !== null
                                ? ((o.childLanes = 0), (o.pendingProps = u))
                                : (o = fl(u, r, 0, null)),
                            (e = xn(e, r, t, null)),
                            (o.return = n),
                            (e.return = n),
                            (o.sibling = e),
                            (n.child = o),
                            (n.child.memoizedState = To(t)),
                            (n.memoizedState = Lo),
                            e)
                        : Eu(n, u))
        );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
        return sd(e, n, u, r, i, l, t);
    if (o) {
        (o = r.fallback), (u = n.mode), (l = e.child), (i = l.sibling);
        var s = { mode: "hidden", children: r.children };
        return (
            !(u & 1) && n.child !== l
                ? ((r = n.child),
                    (r.childLanes = 0),
                    (r.pendingProps = s),
                    (n.deletions = null))
                : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
            i !== null ? (o = cn(i, o)) : ((o = xn(o, u, t, null)), (o.flags |= 2)),
            (o.return = n),
            (r.return = n),
            (r.sibling = o),
            (n.child = r),
            (r = o),
            (o = n.child),
            (u = e.child.memoizedState),
            (u =
                u === null
                    ? To(t)
                    : {
                        baseLanes: u.baseLanes | t,
                        cachePool: null,
                        transitions: u.transitions,
                    }),
            (o.memoizedState = u),
            (o.childLanes = e.childLanes & ~t),
            (n.memoizedState = Lo),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = cn(o, { mode: "visible", children: r.children })),
        !(n.mode & 1) && (r.lanes = t),
        (r.return = n),
        (r.sibling = null),
        e !== null &&
        ((t = n.deletions),
            t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r
    );
}
function Eu(e, n) {
    return (
        (n = fl({ mode: "visible", children: n }, e.mode, 0, null)),
        (n.return = e),
        (e.child = n)
    );
}
function mr(e, n, t, r) {
    return (
        r !== null && su(r),
        nt(n, e.child, null, t),
        (e = Eu(n, n.pendingProps.children)),
        (e.flags |= 2),
        (n.memoizedState = null),
        e
    );
}
function sd(e, n, t, r, l, o, u) {
    if (t)
        return n.flags & 256
            ? ((n.flags &= -257), (r = Vl(Error(y(422)))), mr(e, n, u, r))
            : n.memoizedState !== null
                ? ((n.child = e.child), (n.flags |= 128), null)
                : ((o = r.fallback),
                    (l = n.mode),
                    (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
                    (o = xn(o, l, u, null)),
                    (o.flags |= 2),
                    (r.return = n),
                    (o.return = n),
                    (r.sibling = o),
                    (n.child = r),
                    n.mode & 1 && nt(n, e.child, null, u),
                    (n.child.memoizedState = To(u)),
                    (n.memoizedState = Lo),
                    o);
    if (!(n.mode & 1)) return mr(e, n, u, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
        return (r = i), (o = Error(y(419))), (r = Vl(o, r, void 0)), mr(e, n, u, r);
    }
    if (((i = (u & e.childLanes) !== 0), ce || i)) {
        if (((r = Z), r !== null)) {
            switch (u & -u) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | u) ? 0 : l),
                l !== 0 &&
                l !== o.retryLane &&
                ((o.retryLane = l), Ke(e, l), Oe(r, e, l, -1));
        }
        return zu(), (r = Vl(Error(y(421)))), mr(e, n, u, r);
    }
    return l.data === "$?"
        ? ((n.flags |= 128),
            (n.child = e.child),
            (n = Sd.bind(null, e)),
            (l._reactRetry = n),
            null)
        : ((e = o.treeContext),
            (he = on(l.nextSibling)),
            (ve = n),
            (j = !0),
            (Te = null),
            e !== null &&
            ((ke[Se++] = Ve),
                (ke[Se++] = Be),
                (ke[Se++] = Nn),
                (Ve = e.id),
                (Be = e.overflow),
                (Nn = n)),
            (n = Eu(n, r.children)),
            (n.flags |= 4096),
            n);
}
function Oi(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Co(e.return, n, t);
}
function Bl(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l,
        })
        : ((o.isBackwards = n),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = t),
            (o.tailMode = l));
}
function Fa(e, n, t) {
    var r = n.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((le(e, n, r.children, t), (r = U.current), r & 2))
        (r = (r & 1) | 2), (n.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = n.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Oi(e, t, n);
                else if (e.tag === 19) Oi(e, t, n);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === n) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((M(U, r), !(n.mode & 1))) n.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (t = n.child, l = null; t !== null;)
                    (e = t.alternate),
                        e !== null && Kr(e) === null && (l = t),
                        (t = t.sibling);
                (t = l),
                    t === null
                        ? ((l = n.child), (n.child = null))
                        : ((l = t.sibling), (t.sibling = null)),
                    Bl(n, !1, l, t, o);
                break;
            case "backwards":
                for (t = null, l = n.child, n.child = null; l !== null;) {
                    if (((e = l.alternate), e !== null && Kr(e) === null)) {
                        n.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = t), (t = l), (l = e);
                }
                Bl(n, !0, t, null, o);
                break;
            case "together":
                Bl(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null;
        }
    return n.child;
}
function Nr(e, n) {
    !(n.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
    if (
        (e !== null && (n.dependencies = e.dependencies),
            (zn |= n.lanes),
            !(t & n.childLanes))
    )
        return null;
    if (e !== null && n.child !== e.child) throw Error(y(153));
    if (n.child !== null) {
        for (
            e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n;
            e.sibling !== null;

        )
            (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
        t.sibling = null;
    }
    return n.child;
}
function ad(e, n, t) {
    switch (n.tag) {
        case 3:
            Da(n), et();
            break;
        case 5:
            aa(n);
            break;
        case 1:
            de(n.type) && Ar(n);
            break;
        case 4:
            mu(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                l = n.memoizedProps.value;
            M(Wr, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = n.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (M(U, U.current & 1), (n.flags |= 128), null)
                    : t & n.child.childLanes
                        ? Ia(e, n, t)
                        : (M(U, U.current & 1),
                            (e = Ye(e, n, t)),
                            e !== null ? e.sibling : null);
            M(U, U.current & 1);
            break;
        case 19:
            if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
                if (r) return Fa(e, n, t);
                n.flags |= 128;
            }
            if (
                ((l = n.memoizedState),
                    l !== null &&
                    ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
                    M(U, U.current),
                    r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (n.lanes = 0), Oa(e, n, t);
    }
    return Ye(e, n, t);
}
var ja, Ro, Ua, $a;
ja = function (e, n) {
    for (var t = n.child; t !== null;) {
        if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === n) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === n) return;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
};
Ro = function () { };
Ua = function (e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = n.stateNode), En(Ue.current);
        var o = null;
        switch (t) {
            case "input":
                (l = ql(e, l)), (r = ql(e, r)), (o = []);
                break;
            case "select":
                (l = A({}, l, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (l = no(e, l)), (r = no(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Ur);
        }
        ro(t, r);
        var u;
        t = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var i = l[c];
                    for (u in i) i.hasOwnProperty(u) && (t || (t = {}), (t[u] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (Rt.hasOwnProperty(c)
                            ? o || (o = [])
                            : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (
                ((i = l != null ? l[c] : void 0),
                    r.hasOwnProperty(c) && s !== i && (s != null || i != null))
            )
                if (c === "style")
                    if (i) {
                        for (u in i)
                            !i.hasOwnProperty(u) ||
                                (s && s.hasOwnProperty(u)) ||
                                (t || (t = {}), (t[u] = ""));
                        for (u in s)
                            s.hasOwnProperty(u) &&
                                i[u] !== s[u] &&
                                (t || (t = {}), (t[u] = s[u]));
                    } else t || (o || (o = []), o.push(c, t)), (t = s);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                            (i = i ? i.__html : void 0),
                            s != null && i !== s && (o = o || []).push(c, s))
                        : c === "children"
                            ? (typeof s != "string" && typeof s != "number") ||
                            (o = o || []).push(c, "" + s)
                            : c !== "suppressContentEditableWarning" &&
                            c !== "suppressHydrationWarning" &&
                            (Rt.hasOwnProperty(c)
                                ? (s != null && c === "onScroll" && D("scroll", e),
                                    o || i === s || (o = []))
                                : (o = o || []).push(c, s));
        }
        t && (o = o || []).push("style", t);
        var c = o;
        (n.updateQueue = c) && (n.flags |= 4);
    }
};
$a = function (e, n, t, r) {
    t !== r && (n.flags |= 4);
};
function vt(e, n) {
    if (!j)
        switch (e.tailMode) {
            case "hidden":
                n = e.tail;
                for (var t = null; n !== null;)
                    n.alternate !== null && (t = n), (n = n.sibling);
                t === null ? (e.tail = null) : (t.sibling = null);
                break;
            case "collapsed":
                t = e.tail;
                for (var r = null; t !== null;)
                    t.alternate !== null && (r = t), (t = t.sibling);
                r === null
                    ? n || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ne(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var l = e.child; l !== null;)
            (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null;)
            (t |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function cd(e, n, t) {
    var r = n.pendingProps;
    switch ((iu(n), n.tag)) {
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
            return ne(n), null;
        case 1:
            return de(n.type) && $r(), ne(n), null;
        case 3:
            return (
                (r = n.stateNode),
                tt(),
                I(fe),
                I(re),
                vu(),
                r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                (dr(n)
                    ? (n.flags |= 4)
                    : e === null ||
                    (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                    ((n.flags |= 1024), Te !== null && ($o(Te), (Te = null)))),
                Ro(e, n),
                ne(n),
                null
            );
        case 5:
            hu(n);
            var l = En(Wt.current);
            if (((t = n.type), e !== null && n.stateNode != null))
                Ua(e, n, t, r, l),
                    e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
            else {
                if (!r) {
                    if (n.stateNode === null) throw Error(y(166));
                    return ne(n), null;
                }
                if (((e = En(Ue.current)), dr(n))) {
                    (r = n.stateNode), (t = n.type);
                    var o = n.memoizedProps;
                    switch (((r[Fe] = n), (r[Vt] = o), (e = (n.mode & 1) !== 0), t)) {
                        case "dialog":
                            D("cancel", r), D("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < St.length; l++) D(St[l], r);
                            break;
                        case "source":
                            D("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", r), D("load", r);
                            break;
                        case "details":
                            D("toggle", r);
                            break;
                        case "input":
                            Vu(r, o), D("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                D("invalid", r);
                            break;
                        case "textarea":
                            Wu(r, o), D("invalid", r);
                    }
                    ro(t, o), (l = null);
                    for (var u in o)
                        if (o.hasOwnProperty(u)) {
                            var i = o[u];
                            u === "children"
                                ? typeof i == "string"
                                    ? r.textContent !== i &&
                                    (o.suppressHydrationWarning !== !0 &&
                                        fr(r.textContent, i, e),
                                        (l = ["children", i]))
                                    : typeof i == "number" &&
                                    r.textContent !== "" + i &&
                                    (o.suppressHydrationWarning !== !0 &&
                                        fr(r.textContent, i, e),
                                        (l = ["children", "" + i]))
                                : Rt.hasOwnProperty(u) &&
                                i != null &&
                                u === "onScroll" &&
                                D("scroll", r);
                        }
                    switch (t) {
                        case "input":
                            rr(r), Bu(r, o, !0);
                            break;
                        case "textarea":
                            rr(r), Hu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Ur);
                    }
                    (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
                } else {
                    (u = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ds(t)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? t === "script"
                                ? ((e = u.createElement("div")),
                                    (e.innerHTML = "<script></script>"),
                                    (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                    ? (e = u.createElement(t, { is: r.is }))
                                    : ((e = u.createElement(t)),
                                        t === "select" &&
                                        ((u = e),
                                            r.multiple
                                                ? (u.multiple = !0)
                                                : r.size && (u.size = r.size)))
                            : (e = u.createElementNS(e, t)),
                        (e[Fe] = n),
                        (e[Vt] = r),
                        ja(e, n, !1, !1),
                        (n.stateNode = e);
                    e: {
                        switch (((u = lo(t, r)), t)) {
                            case "dialog":
                                D("cancel", e), D("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < St.length; l++) D(St[l], e);
                                l = r;
                                break;
                            case "source":
                                D("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", e), D("load", e), (l = r);
                                break;
                            case "details":
                                D("toggle", e), (l = r);
                                break;
                            case "input":
                                Vu(e, r), (l = ql(e, r)), D("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (l = A({}, r, { value: void 0 })),
                                    D("invalid", e);
                                break;
                            case "textarea":
                                Wu(e, r), (l = no(e, r)), D("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        ro(t, l), (i = l);
                        for (o in i)
                            if (i.hasOwnProperty(o)) {
                                var s = i[o];
                                o === "style"
                                    ? hs(e, s)
                                    : o === "dangerouslySetInnerHTML"
                                        ? ((s = s ? s.__html : void 0), s != null && ps(e, s))
                                        : o === "children"
                                            ? typeof s == "string"
                                                ? (t !== "textarea" || s !== "") && Ot(e, s)
                                                : typeof s == "number" && Ot(e, "" + s)
                                            : o !== "suppressContentEditableWarning" &&
                                            o !== "suppressHydrationWarning" &&
                                            o !== "autoFocus" &&
                                            (Rt.hasOwnProperty(o)
                                                ? s != null && o === "onScroll" && D("scroll", e)
                                                : s != null && Ko(e, o, s, u));
                            }
                        switch (t) {
                            case "input":
                                rr(e), Bu(e, r, !1);
                                break;
                            case "textarea":
                                rr(e), Hu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + fn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? Kn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                        Kn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Ur);
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (n.flags |= 4);
                }
                n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
            }
            return ne(n), null;
        case 6:
            if (e && n.stateNode != null) $a(e, n, e.memoizedProps, r);
            else {
                if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
                if (((t = En(Wt.current)), En(Ue.current), dr(n))) {
                    if (
                        ((r = n.stateNode),
                            (t = n.memoizedProps),
                            (r[Fe] = n),
                            (o = r.nodeValue !== t) && ((e = ve), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                fr(r.nodeValue, t, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    fr(r.nodeValue, t, (e.mode & 1) !== 0);
                        }
                    o && (n.flags |= 4);
                } else
                    (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
                        (r[Fe] = n),
                        (n.stateNode = r);
            }
            return ne(n), null;
        case 13:
            if (
                (I(U),
                    (r = n.memoizedState),
                    e === null ||
                    (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (j && he !== null && n.mode & 1 && !(n.flags & 128))
                    ta(), et(), (n.flags |= 98560), (o = !1);
                else if (((o = dr(n)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(y(318));
                        if (
                            ((o = n.memoizedState),
                                (o = o !== null ? o.dehydrated : null),
                                !o)
                        )
                            throw Error(y(317));
                        o[Fe] = n;
                    } else
                        et(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
                    ne(n), (o = !1);
                } else Te !== null && ($o(Te), (Te = null)), (o = !0);
                if (!o) return n.flags & 65536 ? n : null;
            }
            return n.flags & 128
                ? ((n.lanes = t), n)
                : ((r = r !== null),
                    r !== (e !== null && e.memoizedState !== null) &&
                    r &&
                    ((n.child.flags |= 8192),
                        n.mode & 1 &&
                        (e === null || U.current & 1 ? Y === 0 && (Y = 3) : zu())),
                    n.updateQueue !== null && (n.flags |= 4),
                    ne(n),
                    null);
        case 4:
            return (
                tt(), Ro(e, n), e === null && $t(n.stateNode.containerInfo), ne(n), null
            );
        case 10:
            return fu(n.type._context), ne(n), null;
        case 17:
            return de(n.type) && $r(), ne(n), null;
        case 19:
            if ((I(U), (o = n.memoizedState), o === null)) return ne(n), null;
            if (((r = (n.flags & 128) !== 0), (u = o.rendering), u === null))
                if (r) vt(o, !1);
                else {
                    if (Y !== 0 || (e !== null && e.flags & 128))
                        for (e = n.child; e !== null;) {
                            if (((u = Kr(e)), u !== null)) {
                                for (
                                    n.flags |= 128,
                                    vt(o, !1),
                                    r = u.updateQueue,
                                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                                    n.subtreeFlags = 0,
                                    r = t,
                                    t = n.child;
                                    t !== null;

                                )
                                    (o = t),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (u = o.alternate),
                                        u === null
                                            ? ((o.childLanes = 0),
                                                (o.lanes = e),
                                                (o.child = null),
                                                (o.subtreeFlags = 0),
                                                (o.memoizedProps = null),
                                                (o.memoizedState = null),
                                                (o.updateQueue = null),
                                                (o.dependencies = null),
                                                (o.stateNode = null))
                                            : ((o.childLanes = u.childLanes),
                                                (o.lanes = u.lanes),
                                                (o.child = u.child),
                                                (o.subtreeFlags = 0),
                                                (o.deletions = null),
                                                (o.memoizedProps = u.memoizedProps),
                                                (o.memoizedState = u.memoizedState),
                                                (o.updateQueue = u.updateQueue),
                                                (o.type = u.type),
                                                (e = u.dependencies),
                                                (o.dependencies =
                                                    e === null
                                                        ? null
                                                        : {
                                                            lanes: e.lanes,
                                                            firstContext: e.firstContext,
                                                        })),
                                        (t = t.sibling);
                                return M(U, (U.current & 1) | 2), n.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        H() > lt &&
                        ((n.flags |= 128), (r = !0), vt(o, !1), (n.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Kr(u)), e !== null)) {
                        if (
                            ((n.flags |= 128),
                                (r = !0),
                                (t = e.updateQueue),
                                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                                vt(o, !0),
                                o.tail === null && o.tailMode === "hidden" && !u.alternate && !j)
                        )
                            return ne(n), null;
                    } else
                        2 * H() - o.renderingStartTime > lt &&
                            t !== 1073741824 &&
                            ((n.flags |= 128), (r = !0), vt(o, !1), (n.lanes = 4194304));
                o.isBackwards
                    ? ((u.sibling = n.child), (n.child = u))
                    : ((t = o.last),
                        t !== null ? (t.sibling = u) : (n.child = u),
                        (o.last = u));
            }
            return o.tail !== null
                ? ((n = o.tail),
                    (o.rendering = n),
                    (o.tail = n.sibling),
                    (o.renderingStartTime = H()),
                    (n.sibling = null),
                    (t = U.current),
                    M(U, r ? (t & 1) | 2 : t & 1),
                    n)
                : (ne(n), null);
        case 22:
        case 23:
            return (
                Pu(),
                (r = n.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
                r && n.mode & 1
                    ? me & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                    : ne(n),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(y(156, n.tag));
}
function fd(e, n) {
    switch ((iu(n), n.tag)) {
        case 1:
            return (
                de(n.type) && $r(),
                (e = n.flags),
                e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 3:
            return (
                tt(),
                I(fe),
                I(re),
                vu(),
                (e = n.flags),
                e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 5:
            return hu(n), null;
        case 13:
            if ((I(U), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
                if (n.alternate === null) throw Error(y(340));
                et();
            }
            return (
                (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
            );
        case 19:
            return I(U), null;
        case 4:
            return tt(), null;
        case 10:
            return fu(n.type._context), null;
        case 22:
        case 23:
            return Pu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var hr = !1,
    te = !1,
    dd = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;
function Wn(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null);
            } catch (r) {
                V(e, n, r);
            }
        else t.current = null;
}
function Oo(e, n, t) {
    try {
        t();
    } catch (r) {
        V(e, n, r);
    }
}
var Mi = !1;
function pd(e, n) {
    if (((ho = Ir), (e = Ws()), ou(e))) {
        if ("selectionStart" in e)
            var t = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                t = ((t = e.ownerDocument) && t.defaultView) || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType, o.nodeType;
                    } catch {
                        t = null;
                        break e;
                    }
                    var u = 0,
                        i = -1,
                        s = -1,
                        c = 0,
                        h = 0,
                        m = e,
                        p = null;
                    n: for (; ;) {
                        for (
                            var g;
                            m !== t || (l !== 0 && m.nodeType !== 3) || (i = u + l),
                            m !== o || (r !== 0 && m.nodeType !== 3) || (s = u + r),
                            m.nodeType === 3 && (u += m.nodeValue.length),
                            (g = m.firstChild) !== null;

                        )
                            (p = m), (m = g);
                        for (; ;) {
                            if (m === e) break n;
                            if (
                                (p === t && ++c === l && (i = u),
                                    p === o && ++h === r && (s = u),
                                    (g = m.nextSibling) !== null)
                            )
                                break;
                            (m = p), (p = m.parentNode);
                        }
                        m = g;
                    }
                    t = i === -1 || s === -1 ? null : { start: i, end: s };
                } else t = null;
            }
        t = t || { start: 0, end: 0 };
    } else t = null;
    for (vo = { focusedElem: e, selectionRange: t }, Ir = !1, S = n; S !== null;)
        if (((n = S), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
            (e.return = n), (S = e);
        else
            for (; S !== null;) {
                n = S;
                try {
                    var w = n.alternate;
                    if (n.flags & 1024)
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var k = w.memoizedProps,
                                        F = w.memoizedState,
                                        f = n.stateNode,
                                        a = f.getSnapshotBeforeUpdate(
                                            n.elementType === n.type ? k : ze(n.type, k),
                                            F
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = n.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                    d.documentElement &&
                                    d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(y(163));
                        }
                } catch (v) {
                    V(n, n.return, v);
                }
                if (((e = n.sibling), e !== null)) {
                    (e.return = n.return), (S = e);
                    break;
                }
                S = n.return;
            }
    return (w = Mi), (Mi = !1), w;
}
function zt(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && Oo(n, t, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function al(e, n) {
    if (
        ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
        var t = (n = n.next);
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
            }
            t = t.next;
        } while (t !== n);
    }
}
function Mo(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t;
        }
        typeof n == "function" ? n(e) : (n.current = e);
    }
}
function Aa(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Aa(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
        ((n = e.stateNode),
            n !== null &&
            (delete n[Fe], delete n[Vt], delete n[wo], delete n[Gf], delete n[Zf])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Va(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Di(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Va(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Do(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            n
                ? t.nodeType === 8
                    ? t.parentNode.insertBefore(e, n)
                    : t.insertBefore(e, n)
                : (t.nodeType === 8
                    ? ((n = t.parentNode), n.insertBefore(e, t))
                    : ((n = t), n.appendChild(e)),
                    (t = t._reactRootContainer),
                    t != null || n.onclick !== null || (n.onclick = Ur));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Do(e, n, t), e = e.sibling; e !== null;) Do(e, n, t), (e = e.sibling);
}
function Io(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Io(e, n, t), e = e.sibling; e !== null;) Io(e, n, t), (e = e.sibling);
}
var J = null,
    Le = !1;
function Ge(e, n, t) {
    for (t = t.child; t !== null;) Ba(e, n, t), (t = t.sibling);
}
function Ba(e, n, t) {
    if (je && typeof je.onCommitFiberUnmount == "function")
        try {
            je.onCommitFiberUnmount(nl, t);
        } catch { }
    switch (t.tag) {
        case 5:
            te || Wn(t, n);
        case 6:
            var r = J,
                l = Le;
            (J = null),
                Ge(e, n, t),
                (J = r),
                (Le = l),
                J !== null &&
                (Le
                    ? ((e = J),
                        (t = t.stateNode),
                        e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
                    : J.removeChild(t.stateNode));
            break;
        case 18:
            J !== null &&
                (Le
                    ? ((e = J),
                        (t = t.stateNode),
                        e.nodeType === 8
                            ? Il(e.parentNode, t)
                            : e.nodeType === 1 && Il(e, t),
                        Ft(e))
                    : Il(J, t.stateNode));
            break;
        case 4:
            (r = J),
                (l = Le),
                (J = t.stateNode.containerInfo),
                (Le = !0),
                Ge(e, n, t),
                (J = r),
                (Le = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !te &&
                ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        u = o.destroy;
                    (o = o.tag),
                        u !== void 0 && (o & 2 || o & 4) && Oo(t, n, u),
                        (l = l.next);
                } while (l !== r);
            }
            Ge(e, n, t);
            break;
        case 1:
            if (
                !te &&
                (Wn(t, n),
                    (r = t.stateNode),
                    typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = t.memoizedProps),
                        (r.state = t.memoizedState),
                        r.componentWillUnmount();
                } catch (i) {
                    V(t, n, i);
                }
            Ge(e, n, t);
            break;
        case 21:
            Ge(e, n, t);
            break;
        case 22:
            t.mode & 1
                ? ((te = (r = te) || t.memoizedState !== null), Ge(e, n, t), (te = r))
                : Ge(e, n, t);
            break;
        default:
            Ge(e, n, t);
    }
}
function Ii(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new dd()),
            n.forEach(function (r) {
                var l = Ed.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
    }
}
function Pe(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
                var o = e,
                    u = n,
                    i = u;
                e: for (; i !== null;) {
                    switch (i.tag) {
                        case 5:
                            (J = i.stateNode), (Le = !1);
                            break e;
                        case 3:
                            (J = i.stateNode.containerInfo), (Le = !0);
                            break e;
                        case 4:
                            (J = i.stateNode.containerInfo), (Le = !0);
                            break e;
                    }
                    i = i.return;
                }
                if (J === null) throw Error(y(160));
                Ba(o, u, l), (J = null), (Le = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (c) {
                V(l, n, c);
            }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null;) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
    var t = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Pe(n, e), De(e), r & 4)) {
                try {
                    zt(3, e, e.return), al(3, e);
                } catch (k) {
                    V(e, e.return, k);
                }
                try {
                    zt(5, e, e.return);
                } catch (k) {
                    V(e, e.return, k);
                }
            }
            break;
        case 1:
            Pe(n, e), De(e), r & 512 && t !== null && Wn(t, t.return);
            break;
        case 5:
            if (
                (Pe(n, e),
                    De(e),
                    r & 512 && t !== null && Wn(t, t.return),
                    e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Ot(l, "");
                } catch (k) {
                    V(e, e.return, k);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    u = t !== null ? t.memoizedProps : o,
                    i = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        i === "input" && o.type === "radio" && o.name != null && cs(l, o),
                            lo(i, u);
                        var c = lo(i, o);
                        for (u = 0; u < s.length; u += 2) {
                            var h = s[u],
                                m = s[u + 1];
                            h === "style"
                                ? hs(l, m)
                                : h === "dangerouslySetInnerHTML"
                                    ? ps(l, m)
                                    : h === "children"
                                        ? Ot(l, m)
                                        : Ko(l, h, m, c);
                        }
                        switch (i) {
                            case "input":
                                bl(l, o);
                                break;
                            case "textarea":
                                fs(l, o);
                                break;
                            case "select":
                                var p = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null
                                    ? Kn(l, !!o.multiple, g, !1)
                                    : p !== !!o.multiple &&
                                    (o.defaultValue != null
                                        ? Kn(l, !!o.multiple, o.defaultValue, !0)
                                        : Kn(l, !!o.multiple, o.multiple ? [] : "", !1));
                        }
                        l[Vt] = o;
                    } catch (k) {
                        V(e, e.return, k);
                    }
            }
            break;
        case 6:
            if ((Pe(n, e), De(e), r & 4)) {
                if (e.stateNode === null) throw Error(y(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (k) {
                    V(e, e.return, k);
                }
            }
            break;
        case 3:
            if (
                (Pe(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
            )
                try {
                    Ft(n.containerInfo);
                } catch (k) {
                    V(e, e.return, k);
                }
            break;
        case 4:
            Pe(n, e), De(e);
            break;
        case 13:
            Pe(n, e),
                De(e),
                (l = e.child),
                l.flags & 8192 &&
                ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                    (l.alternate !== null && l.alternate.memoizedState !== null) ||
                    (_u = H())),
                r & 4 && Ii(e);
            break;
        case 22:
            if (
                ((h = t !== null && t.memoizedState !== null),
                    e.mode & 1 ? ((te = (c = te) || h), Pe(n, e), (te = c)) : Pe(n, e),
                    De(e),
                    r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                        (e.stateNode.isHidden = c) && !h && e.mode & 1)
                )
                    for (S = e, h = e.child; h !== null;) {
                        for (m = S = h; S !== null;) {
                            switch (((p = S), (g = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    zt(4, p, p.return);
                                    break;
                                case 1:
                                    Wn(p, p.return);
                                    var w = p.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        (r = p), (t = p.return);
                                        try {
                                            (n = r),
                                                (w.props = n.memoizedProps),
                                                (w.state = n.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (k) {
                                            V(r, t, k);
                                        }
                                    }
                                    break;
                                case 5:
                                    Wn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        ji(m);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = p), (S = g)) : ji(m);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, m = e; ;) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                (l = m.stateNode),
                                    c
                                        ? ((o = l.style),
                                            typeof o.setProperty == "function"
                                                ? o.setProperty("display", "none", "important")
                                                : (o.display = "none"))
                                        : ((i = m.stateNode),
                                            (s = m.memoizedProps.style),
                                            (u =
                                                s != null && s.hasOwnProperty("display")
                                                    ? s.display
                                                    : null),
                                            (i.style.display = ms("display", u)));
                            } catch (k) {
                                V(e, e.return, k);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null)
                            try {
                                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                            } catch (k) {
                                V(e, e.return, k);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), (m = m.return);
                    }
                    h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
                }
            }
            break;
        case 19:
            Pe(n, e), De(e), r & 4 && Ii(e);
            break;
        case 21:
            break;
        default:
            Pe(n, e), De(e);
    }
}
function De(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null;) {
                    if (Va(t)) {
                        var r = t;
                        break e;
                    }
                    t = t.return;
                }
                throw Error(y(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Ot(l, ""), (r.flags &= -33));
                    var o = Di(e);
                    Io(e, o, l);
                    break;
                case 3:
                case 4:
                    var u = r.stateNode.containerInfo,
                        i = Di(e);
                    Do(e, i, u);
                    break;
                default:
                    throw Error(y(161));
            }
        } catch (s) {
            V(e, e.return, s);
        }
        e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
}
function md(e, n, t) {
    (S = e), Ha(e);
}
function Ha(e, n, t) {
    for (var r = (e.mode & 1) !== 0; S !== null;) {
        var l = S,
            o = l.child;
        if (l.tag === 22 && r) {
            var u = l.memoizedState !== null || hr;
            if (!u) {
                var i = l.alternate,
                    s = (i !== null && i.memoizedState !== null) || te;
                i = hr;
                var c = te;
                if (((hr = u), (te = s) && !c))
                    for (S = l; S !== null;)
                        (u = S),
                            (s = u.child),
                            u.tag === 22 && u.memoizedState !== null
                                ? Ui(l)
                                : s !== null
                                    ? ((s.return = u), (S = s))
                                    : Ui(l);
                for (; o !== null;) (S = o), Ha(o), (o = o.sibling);
                (S = l), (hr = i), (te = c);
            }
            Fi(e);
        } else
            l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : Fi(e);
    }
}
function Fi(e) {
    for (; S !== null;) {
        var n = S;
        if (n.flags & 8772) {
            var t = n.alternate;
            try {
                if (n.flags & 8772)
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            te || al(5, n);
                            break;
                        case 1:
                            var r = n.stateNode;
                            if (n.flags & 4 && !te)
                                if (t === null) r.componentDidMount();
                                else {
                                    var l =
                                        n.elementType === n.type
                                            ? t.memoizedProps
                                            : ze(n.type, t.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        t.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = n.updateQueue;
                            o !== null && wi(n, o, r);
                            break;
                        case 3:
                            var u = n.updateQueue;
                            if (u !== null) {
                                if (((t = null), n.child !== null))
                                    switch (n.child.tag) {
                                        case 5:
                                            t = n.child.stateNode;
                                            break;
                                        case 1:
                                            t = n.child.stateNode;
                                    }
                                wi(n, u, t);
                            }
                            break;
                        case 5:
                            var i = n.stateNode;
                            if (t === null && n.flags & 4) {
                                t = i;
                                var s = n.memoizedProps;
                                switch (n.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && t.focus();
                                        break;
                                    case "img":
                                        s.src && (t.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (n.memoizedState === null) {
                                var c = n.alternate;
                                if (c !== null) {
                                    var h = c.memoizedState;
                                    if (h !== null) {
                                        var m = h.dehydrated;
                                        m !== null && Ft(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(y(163));
                    }
                te || (n.flags & 512 && Mo(n));
            } catch (p) {
                V(n, n.return, p);
            }
        }
        if (n === e) {
            S = null;
            break;
        }
        if (((t = n.sibling), t !== null)) {
            (t.return = n.return), (S = t);
            break;
        }
        S = n.return;
    }
}
function ji(e) {
    for (; S !== null;) {
        var n = S;
        if (n === e) {
            S = null;
            break;
        }
        var t = n.sibling;
        if (t !== null) {
            (t.return = n.return), (S = t);
            break;
        }
        S = n.return;
    }
}
function Ui(e) {
    for (; S !== null;) {
        var n = S;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try {
                        al(4, n);
                    } catch (s) {
                        V(n, t, s);
                    }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = n.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            V(n, l, s);
                        }
                    }
                    var o = n.return;
                    try {
                        Mo(n);
                    } catch (s) {
                        V(n, o, s);
                    }
                    break;
                case 5:
                    var u = n.return;
                    try {
                        Mo(n);
                    } catch (s) {
                        V(n, u, s);
                    }
            }
        } catch (s) {
            V(n, n.return, s);
        }
        if (n === e) {
            S = null;
            break;
        }
        var i = n.sibling;
        if (i !== null) {
            (i.return = n.return), (S = i);
            break;
        }
        S = n.return;
    }
}
var hd = Math.ceil,
    Gr = Xe.ReactCurrentDispatcher,
    Cu = Xe.ReactCurrentOwner,
    Ce = Xe.ReactCurrentBatchConfig,
    R = 0,
    Z = null,
    Q = null,
    q = 0,
    me = 0,
    Hn = mn(0),
    Y = 0,
    Yt = null,
    zn = 0,
    cl = 0,
    xu = 0,
    Lt = null,
    ae = null,
    _u = 0,
    lt = 1 / 0,
    $e = null,
    Zr = !1,
    Fo = null,
    sn = null,
    vr = !1,
    nn = null,
    Jr = 0,
    Tt = 0,
    jo = null,
    Pr = -1,
    zr = 0;
function oe() {
    return R & 6 ? H() : Pr !== -1 ? Pr : (Pr = H());
}
function an(e) {
    return e.mode & 1
        ? R & 2 && q !== 0
            ? q & -q
            : qf.transition !== null
                ? (zr === 0 && (zr = Ps()), zr)
                : ((e = O),
                    e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
                    e)
        : 1;
}
function Oe(e, n, t, r) {
    if (50 < Tt) throw ((Tt = 0), (jo = null), Error(y(185)));
    Gt(e, t, r),
        (!(R & 2) || e !== Z) &&
        (e === Z && (!(R & 2) && (cl |= t), Y === 4 && be(e, q)),
            pe(e, r),
            t === 1 && R === 0 && !(n.mode & 1) && ((lt = H() + 500), ul && hn()));
}
function pe(e, n) {
    var t = e.callbackNode;
    Jc(e, n);
    var r = Dr(e, e === Z ? q : 0);
    if (r === 0)
        t !== null && Yu(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
        if ((t != null && Yu(t), n === 1))
            e.tag === 0 ? Jf($i.bind(null, e)) : bs($i.bind(null, e)),
                Yf(function () {
                    !(R & 6) && hn();
                }),
                (t = null);
        else {
            switch (zs(r)) {
                case 1:
                    t = Jo;
                    break;
                case 4:
                    t = _s;
                    break;
                case 16:
                    t = Mr;
                    break;
                case 536870912:
                    t = Ns;
                    break;
                default:
                    t = Mr;
            }
            t = qa(t, Qa.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = t);
    }
}
function Qa(e, n) {
    if (((Pr = -1), (zr = 0), R & 6)) throw Error(y(327));
    var t = e.callbackNode;
    if (Jn() && e.callbackNode !== t) return null;
    var r = Dr(e, e === Z ? q : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = qr(e, r);
    else {
        n = r;
        var l = R;
        R |= 2;
        var o = Ya();
        (Z !== e || q !== n) && (($e = null), (lt = H() + 500), Cn(e, n));
        do
            try {
                gd();
                break;
            } catch (i) {
                Ka(e, i);
            }
        while (!0);
        cu(),
            (Gr.current = o),
            (R = l),
            Q !== null ? (n = 0) : ((Z = null), (q = 0), (n = Y));
    }
    if (n !== 0) {
        if (
            (n === 2 && ((l = ao(e)), l !== 0 && ((r = l), (n = Uo(e, l)))), n === 1)
        )
            throw ((t = Yt), Cn(e, 0), be(e, r), pe(e, H()), t);
        if (n === 6) be(e, r);
        else {
            if (
                ((l = e.current.alternate),
                    !(r & 30) &&
                    !vd(l) &&
                    ((n = qr(e, r)),
                        n === 2 && ((o = ao(e)), o !== 0 && ((r = o), (n = Uo(e, o)))),
                        n === 1))
            )
                throw ((t = Yt), Cn(e, 0), be(e, r), pe(e, H()), t);
            switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    wn(e, ae, $e);
                    break;
                case 3:
                    if (
                        (be(e, r), (r & 130023424) === r && ((n = _u + 500 - H()), 10 < n))
                    ) {
                        if (Dr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            oe(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = go(wn.bind(null, e, ae, $e), n);
                        break;
                    }
                    wn(e, ae, $e);
                    break;
                case 4:
                    if ((be(e, r), (r & 4194240) === r)) break;
                    for (n = e.eventTimes, l = -1; 0 < r;) {
                        var u = 31 - Re(r);
                        (o = 1 << u), (u = n[u]), u > l && (l = u), (r &= ~o);
                    }
                    if (
                        ((r = l),
                            (r = H() - r),
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
                                                        : 1960 * hd(r / 1960)) - r),
                            10 < r)
                    ) {
                        e.timeoutHandle = go(wn.bind(null, e, ae, $e), r);
                        break;
                    }
                    wn(e, ae, $e);
                    break;
                case 5:
                    wn(e, ae, $e);
                    break;
                default:
                    throw Error(y(329));
            }
        }
    }
    return pe(e, H()), e.callbackNode === t ? Qa.bind(null, e) : null;
}
function Uo(e, n) {
    var t = Lt;
    return (
        e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256),
        (e = qr(e, n)),
        e !== 2 && ((n = ae), (ae = t), n !== null && $o(n)),
        e
    );
}
function $o(e) {
    ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function vd(e) {
    for (var n = e; ;) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && ((t = t.stores), t !== null))
                for (var r = 0; r < t.length; r++) {
                    var l = t[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Me(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
            (t.return = n), (n = t);
        else {
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return !0;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }
    return !0;
}
function be(e, n) {
    for (
        n &= ~xu,
        n &= ~cl,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
        0 < n;

    ) {
        var t = 31 - Re(n),
            r = 1 << t;
        (e[t] = -1), (n &= ~r);
    }
}
function $i(e) {
    if (R & 6) throw Error(y(327));
    Jn();
    var n = Dr(e, 0);
    if (!(n & 1)) return pe(e, H()), null;
    var t = qr(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = ao(e);
        r !== 0 && ((n = r), (t = Uo(e, r)));
    }
    if (t === 1) throw ((t = Yt), Cn(e, 0), be(e, n), pe(e, H()), t);
    if (t === 6) throw Error(y(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = n),
        wn(e, ae, $e),
        pe(e, H()),
        null
    );
}
function Nu(e, n) {
    var t = R;
    R |= 1;
    try {
        return e(n);
    } finally {
        (R = t), R === 0 && ((lt = H() + 500), ul && hn());
    }
}
function Ln(e) {
    nn !== null && nn.tag === 0 && !(R & 6) && Jn();
    var n = R;
    R |= 1;
    var t = Ce.transition,
        r = O;
    try {
        if (((Ce.transition = null), (O = 1), e)) return e();
    } finally {
        (O = r), (Ce.transition = t), (R = n), !(R & 6) && hn();
    }
}
function Pu() {
    (me = Hn.current), I(Hn);
}
function Cn(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Kf(t)), Q !== null))
        for (t = Q.return; t !== null;) {
            var r = t;
            switch ((iu(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && $r();
                    break;
                case 3:
                    tt(), I(fe), I(re), vu();
                    break;
                case 5:
                    hu(r);
                    break;
                case 4:
                    tt();
                    break;
                case 13:
                    I(U);
                    break;
                case 19:
                    I(U);
                    break;
                case 10:
                    fu(r.type._context);
                    break;
                case 22:
                case 23:
                    Pu();
            }
            t = t.return;
        }
    if (
        ((Z = e),
            (Q = e = cn(e.current, null)),
            (q = me = n),
            (Y = 0),
            (Yt = null),
            (xu = cl = zn = 0),
            (ae = Lt = null),
            Sn !== null)
    ) {
        for (n = 0; n < Sn.length; n++)
            if (((t = Sn[n]), (r = t.interleaved), r !== null)) {
                t.interleaved = null;
                var l = r.next,
                    o = t.pending;
                if (o !== null) {
                    var u = o.next;
                    (o.next = l), (r.next = u);
                }
                t.pending = r;
            }
        Sn = null;
    }
    return e;
}
function Ka(e, n) {
    do {
        var t = Q;
        try {
            if ((cu(), (xr.current = Xr), Yr)) {
                for (var r = $.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                Yr = !1;
            }
            if (
                ((Pn = 0),
                    (G = K = $ = null),
                    (Pt = !1),
                    (Ht = 0),
                    (Cu.current = null),
                    t === null || t.return === null)
            ) {
                (Y = 1), (Yt = n), (Q = null);
                break;
            }
            e: {
                var o = e,
                    u = t.return,
                    i = t,
                    s = n;
                if (
                    ((n = q),
                        (i.flags |= 32768),
                        s !== null && typeof s == "object" && typeof s.then == "function")
                ) {
                    var c = s,
                        h = i,
                        m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = h.alternate;
                        p
                            ? ((h.updateQueue = p.updateQueue),
                                (h.memoizedState = p.memoizedState),
                                (h.lanes = p.lanes))
                            : ((h.updateQueue = null), (h.memoizedState = null));
                    }
                    var g = Ni(u);
                    if (g !== null) {
                        (g.flags &= -257),
                            Pi(g, u, i, o, n),
                            g.mode & 1 && _i(o, c, n),
                            (n = g),
                            (s = c);
                        var w = n.updateQueue;
                        if (w === null) {
                            var k = new Set();
                            k.add(s), (n.updateQueue = k);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(n & 1)) {
                            _i(o, c, n), zu();
                            break e;
                        }
                        s = Error(y(426));
                    }
                } else if (j && i.mode & 1) {
                    var F = Ni(u);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256),
                            Pi(F, u, i, o, n),
                            su(rt(s, i));
                        break e;
                    }
                }
                (o = s = rt(s, i)),
                    Y !== 4 && (Y = 2),
                    Lt === null ? (Lt = [o]) : Lt.push(o),
                    (o = u);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                            var f = La(o, s, n);
                            gi(o, f);
                            break e;
                        case 1:
                            i = s;
                            var a = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof a.getDerivedStateFromError == "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch == "function" &&
                                        (sn === null || !sn.has(d))))
                            ) {
                                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                                var v = Ta(o, i, n);
                                gi(o, v);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Ga(t);
        } catch (E) {
            (n = E), Q === t && t !== null && (Q = t = t.return);
            continue;
        }
        break;
    } while (!0);
}
function Ya() {
    var e = Gr.current;
    return (Gr.current = Xr), e === null ? Xr : e;
}
function zu() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
        Z === null || (!(zn & 268435455) && !(cl & 268435455)) || be(Z, q);
}
function qr(e, n) {
    var t = R;
    R |= 2;
    var r = Ya();
    (Z !== e || q !== n) && (($e = null), Cn(e, n));
    do
        try {
            yd();
            break;
        } catch (l) {
            Ka(e, l);
        }
    while (!0);
    if ((cu(), (R = t), (Gr.current = r), Q !== null)) throw Error(y(261));
    return (Z = null), (q = 0), Y;
}
function yd() {
    for (; Q !== null;) Xa(Q);
}
function gd() {
    for (; Q !== null && !Bc();) Xa(Q);
}
function Xa(e) {
    var n = Ja(e.alternate, e, me);
    (e.memoizedProps = e.pendingProps),
        n === null ? Ga(e) : (Q = n),
        (Cu.current = null);
}
function Ga(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (((e = n.return), n.flags & 32768)) {
            if (((t = fd(t, n)), t !== null)) {
                (t.flags &= 32767), (Q = t);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Y = 6), (Q = null);
                return;
            }
        } else if (((t = cd(t, n, me)), t !== null)) {
            Q = t;
            return;
        }
        if (((n = n.sibling), n !== null)) {
            Q = n;
            return;
        }
        Q = n = e;
    } while (n !== null);
    Y === 0 && (Y = 5);
}
function wn(e, n, t) {
    var r = O,
        l = Ce.transition;
    try {
        (Ce.transition = null), (O = 1), wd(e, n, t, r);
    } finally {
        (Ce.transition = l), (O = r);
    }
    return null;
}
function wd(e, n, t, r) {
    do Jn();
    while (nn !== null);
    if (R & 6) throw Error(y(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
        throw Error(y(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = t.lanes | t.childLanes;
    if (
        (qc(e, o),
            e === Z && ((Q = Z = null), (q = 0)),
            (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
            vr ||
            ((vr = !0),
                qa(Mr, function () {
                    return Jn(), null;
                })),
            (o = (t.flags & 15990) !== 0),
            t.subtreeFlags & 15990 || o)
    ) {
        (o = Ce.transition), (Ce.transition = null);
        var u = O;
        O = 1;
        var i = R;
        (R |= 4),
            (Cu.current = null),
            pd(e, t),
            Wa(t, e),
            $f(vo),
            (Ir = !!ho),
            (vo = ho = null),
            (e.current = t),
            md(t),
            Wc(),
            (R = i),
            (O = u),
            (Ce.transition = o);
    } else e.current = t;
    if (
        (vr && ((vr = !1), (nn = e), (Jr = l)),
            (o = e.pendingLanes),
            o === 0 && (sn = null),
            Kc(t.stateNode),
            pe(e, H()),
            n !== null)
    )
        for (r = e.onRecoverableError, t = 0; t < n.length; t++)
            (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Zr) throw ((Zr = !1), (e = Fo), (Fo = null), e);
    return (
        Jr & 1 && e.tag !== 0 && Jn(),
        (o = e.pendingLanes),
        o & 1 ? (e === jo ? Tt++ : ((Tt = 0), (jo = e))) : (Tt = 0),
        hn(),
        null
    );
}
function Jn() {
    if (nn !== null) {
        var e = zs(Jr),
            n = Ce.transition,
            t = O;
        try {
            if (((Ce.transition = null), (O = 16 > e ? 16 : e), nn === null))
                var r = !1;
            else {
                if (((e = nn), (nn = null), (Jr = 0), R & 6)) throw Error(y(331));
                var l = R;
                for (R |= 4, S = e.current; S !== null;) {
                    var o = S,
                        u = o.child;
                    if (S.flags & 16) {
                        var i = o.deletions;
                        if (i !== null) {
                            for (var s = 0; s < i.length; s++) {
                                var c = i[s];
                                for (S = c; S !== null;) {
                                    var h = S;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zt(8, h, o);
                                    }
                                    var m = h.child;
                                    if (m !== null) (m.return = h), (S = m);
                                    else
                                        for (; S !== null;) {
                                            h = S;
                                            var p = h.sibling,
                                                g = h.return;
                                            if ((Aa(h), h === c)) {
                                                S = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = g), (S = p);
                                                break;
                                            }
                                            S = g;
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var F = k.sibling;
                                        (k.sibling = null), (k = F);
                                    } while (k !== null);
                                }
                            }
                            S = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (S = u);
                    else
                        e: for (; S !== null;) {
                            if (((o = S), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zt(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (S = f);
                                break e;
                            }
                            S = o.return;
                        }
                }
                var a = e.current;
                for (S = a; S !== null;) {
                    u = S;
                    var d = u.child;
                    if (u.subtreeFlags & 2064 && d !== null) (d.return = u), (S = d);
                    else
                        e: for (u = a; S !== null;) {
                            if (((i = S), i.flags & 2048))
                                try {
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            al(9, i);
                                    }
                                } catch (E) {
                                    V(i, i.return, E);
                                }
                            if (i === u) {
                                S = null;
                                break e;
                            }
                            var v = i.sibling;
                            if (v !== null) {
                                (v.return = i.return), (S = v);
                                break e;
                            }
                            S = i.return;
                        }
                }
                if (
                    ((R = l), hn(), je && typeof je.onPostCommitFiberRoot == "function")
                )
                    try {
                        je.onPostCommitFiberRoot(nl, e);
                    } catch { }
                r = !0;
            }
            return r;
        } finally {
            (O = t), (Ce.transition = n);
        }
    }
    return !1;
}
function Ai(e, n, t) {
    (n = rt(t, n)),
        (n = La(e, n, 1)),
        (e = un(e, n, 1)),
        (n = oe()),
        e !== null && (Gt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
    if (e.tag === 3) Ai(e, e, t);
    else
        for (; n !== null;) {
            if (n.tag === 3) {
                Ai(n, e, t);
                break;
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (
                    typeof n.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (sn === null || !sn.has(r)))
                ) {
                    (e = rt(t, e)),
                        (e = Ta(n, e, 1)),
                        (n = un(n, e, 1)),
                        (e = oe()),
                        n !== null && (Gt(n, 1, e), pe(n, e));
                    break;
                }
            }
            n = n.return;
        }
}
function kd(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
        (n = oe()),
        (e.pingedLanes |= e.suspendedLanes & t),
        Z === e &&
        (q & t) === t &&
        (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > H() - _u)
            ? Cn(e, 0)
            : (xu |= t)),
        pe(e, n);
}
function Za(e, n) {
    n === 0 &&
        (e.mode & 1
            ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
            : (n = 1));
    var t = oe();
    (e = Ke(e, n)), e !== null && (Gt(e, n, t), pe(e, t));
}
function Sd(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), Za(e, t);
}
function Ed(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (t = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314));
    }
    r !== null && r.delete(n), Za(e, t);
}
var Ja;
Ja = function (e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
        else {
            if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), ad(e, n, t);
            ce = !!(e.flags & 131072);
        }
    else (ce = !1), j && n.flags & 1048576 && ea(n, Br, n.index);
    switch (((n.lanes = 0), n.tag)) {
        case 2:
            var r = n.type;
            Nr(e, n), (e = n.pendingProps);
            var l = bn(n, re.current);
            Zn(n, t), (l = gu(null, n, r, e, l, t));
            var o = wu();
            return (
                (n.flags |= 1),
                typeof l == "object" &&
                    l !== null &&
                    typeof l.render == "function" &&
                    l.$$typeof === void 0
                    ? ((n.tag = 1),
                        (n.memoizedState = null),
                        (n.updateQueue = null),
                        de(r) ? ((o = !0), Ar(n)) : (o = !1),
                        (n.memoizedState =
                            l.state !== null && l.state !== void 0 ? l.state : null),
                        pu(n),
                        (l.updater = il),
                        (n.stateNode = l),
                        (l._reactInternals = n),
                        _o(n, r, e, t),
                        (n = zo(null, n, r, !0, o, t)))
                    : ((n.tag = 0), j && o && uu(n), le(null, n, l, t), (n = n.child)),
                n
            );
        case 16:
            r = n.elementType;
            e: {
                switch (
                (Nr(e, n),
                    (e = n.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (n.type = r),
                    (l = n.tag = xd(r)),
                    (e = ze(r, e)),
                    l)
                ) {
                    case 0:
                        n = Po(null, n, r, e, t);
                        break e;
                    case 1:
                        n = Ti(null, n, r, e, t);
                        break e;
                    case 11:
                        n = zi(null, n, r, e, t);
                        break e;
                    case 14:
                        n = Li(null, n, r, ze(r.type, e), t);
                        break e;
                }
                throw Error(y(306, r, ""));
            }
            return n;
        case 0:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Po(e, n, r, l, t)
            );
        case 1:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Ti(e, n, r, l, t)
            );
        case 3:
            e: {
                if ((Da(n), e === null)) throw Error(y(387));
                (r = n.pendingProps),
                    (o = n.memoizedState),
                    (l = o.element),
                    la(e, n),
                    Qr(n, r, null, t);
                var u = n.memoizedState;
                if (((r = u.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: u.cache,
                            pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                            transitions: u.transitions,
                        }),
                            (n.updateQueue.baseState = o),
                            (n.memoizedState = o),
                            n.flags & 256)
                    ) {
                        (l = rt(Error(y(423)), n)), (n = Ri(e, n, r, t, l));
                        break e;
                    } else if (r !== l) {
                        (l = rt(Error(y(424)), n)), (n = Ri(e, n, r, t, l));
                        break e;
                    } else
                        for (
                            he = on(n.stateNode.containerInfo.firstChild),
                            ve = n,
                            j = !0,
                            Te = null,
                            t = sa(n, null, r, t),
                            n.child = t;
                            t;

                        )
                            (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
                else {
                    if ((et(), r === l)) {
                        n = Ye(e, n, t);
                        break e;
                    }
                    le(e, n, r, t);
                }
                n = n.child;
            }
            return n;
        case 5:
            return (
                aa(n),
                e === null && Eo(n),
                (r = n.type),
                (l = n.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (u = l.children),
                yo(r, l) ? (u = null) : o !== null && yo(r, o) && (n.flags |= 32),
                Ma(e, n),
                le(e, n, u, t),
                n.child
            );
        case 6:
            return e === null && Eo(n), null;
        case 13:
            return Ia(e, n, t);
        case 4:
            return (
                mu(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                e === null ? (n.child = nt(n, null, r, t)) : le(e, n, r, t),
                n.child
            );
        case 11:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                zi(e, n, r, l, t)
            );
        case 7:
            return le(e, n, n.pendingProps, t), n.child;
        case 8:
            return le(e, n, n.pendingProps.children, t), n.child;
        case 12:
            return le(e, n, n.pendingProps.children, t), n.child;
        case 10:
            e: {
                if (
                    ((r = n.type._context),
                        (l = n.pendingProps),
                        (o = n.memoizedProps),
                        (u = l.value),
                        M(Wr, r._currentValue),
                        (r._currentValue = u),
                        o !== null)
                )
                    if (Me(o.value, u)) {
                        if (o.children === l.children && !fe.current) {
                            n = Ye(e, n, t);
                            break e;
                        }
                    } else
                        for (o = n.child, o !== null && (o.return = n); o !== null;) {
                            var i = o.dependencies;
                            if (i !== null) {
                                u = o.child;
                                for (var s = i.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            (s = We(-1, t & -t)), (s.tag = 2);
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var h = c.pending;
                                                h === null
                                                    ? (s.next = s)
                                                    : ((s.next = h.next), (h.next = s)),
                                                    (c.pending = s);
                                            }
                                        }
                                        (o.lanes |= t),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= t),
                                            Co(o.return, t, n),
                                            (i.lanes |= t);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((u = o.return), u === null)) throw Error(y(341));
                                (u.lanes |= t),
                                    (i = u.alternate),
                                    i !== null && (i.lanes |= t),
                                    Co(u, t, n),
                                    (u = o.sibling);
                            } else u = o.child;
                            if (u !== null) u.return = o;
                            else
                                for (u = o; u !== null;) {
                                    if (u === n) {
                                        u = null;
                                        break;
                                    }
                                    if (((o = u.sibling), o !== null)) {
                                        (o.return = u.return), (u = o);
                                        break;
                                    }
                                    u = u.return;
                                }
                            o = u;
                        }
                le(e, n, l.children, t), (n = n.child);
            }
            return n;
        case 9:
            return (
                (l = n.type),
                (r = n.pendingProps.children),
                Zn(n, t),
                (l = xe(l)),
                (r = r(l)),
                (n.flags |= 1),
                le(e, n, r, t),
                n.child
            );
        case 14:
            return (
                (r = n.type),
                (l = ze(r, n.pendingProps)),
                (l = ze(r.type, l)),
                Li(e, n, r, l, t)
            );
        case 15:
            return Ra(e, n, n.type, n.pendingProps, t);
        case 17:
            return (
                (r = n.type),
                (l = n.pendingProps),
                (l = n.elementType === r ? l : ze(r, l)),
                Nr(e, n),
                (n.tag = 1),
                de(r) ? ((e = !0), Ar(n)) : (e = !1),
                Zn(n, t),
                ua(n, r, l),
                _o(n, r, l, t),
                zo(null, n, r, !0, e, t)
            );
        case 19:
            return Fa(e, n, t);
        case 22:
            return Oa(e, n, t);
    }
    throw Error(y(156, n.tag));
};
function qa(e, n) {
    return xs(e, n);
}
function Cd(e, n, t, r) {
    (this.tag = e),
        (this.key = t),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ee(e, n, t, r) {
    return new Cd(e, n, t, r);
}
function Lu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xd(e) {
    if (typeof e == "function") return Lu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Xo)) return 11;
        if (e === Go) return 14;
    }
    return 2;
}
function cn(e, n) {
    var t = e.alternate;
    return (
        t === null
            ? ((t = Ee(e.tag, n, e.key, e.mode)),
                (t.elementType = e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
            : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
        (t.flags = e.flags & 14680064),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies =
            n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
    );
}
function Lr(e, n, t, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) Lu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
        e: switch (e) {
            case Dn:
                return xn(t.children, l, o, n);
            case Yo:
                (u = 8), (l |= 8);
                break;
            case Xl:
                return (
                    (e = Ee(12, t, n, l | 2)), (e.elementType = Xl), (e.lanes = o), e
                );
            case Gl:
                return (e = Ee(13, t, n, l)), (e.elementType = Gl), (e.lanes = o), e;
            case Zl:
                return (e = Ee(19, t, n, l)), (e.elementType = Zl), (e.lanes = o), e;
            case is:
                return fl(t, l, o, n);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case os:
                            u = 10;
                            break e;
                        case us:
                            u = 9;
                            break e;
                        case Xo:
                            u = 11;
                            break e;
                        case Go:
                            u = 14;
                            break e;
                        case Ze:
                            (u = 16), (r = null);
                            break e;
                    }
                throw Error(y(130, e == null ? e : typeof e, ""));
        }
    return (
        (n = Ee(u, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
    );
}
function xn(e, n, t, r) {
    return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function fl(e, n, t, r) {
    return (
        (e = Ee(22, e, r, n)),
        (e.elementType = is),
        (e.lanes = t),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Wl(e, n, t) {
    return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Hl(e, n, t) {
    return (
        (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
        (n.lanes = t),
        (n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        n
    );
}
function _d(e, n, t, r, l) {
    (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = xl(0)),
        (this.expirationTimes = xl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
            0),
        (this.entanglements = xl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function Tu(e, n, t, r, l, o, u, i, s) {
    return (
        (e = new _d(e, n, t, i, s)),
        n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
        (o = Ee(3, null, null, n)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: t,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        pu(o),
        e
    );
}
function Nd(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Mn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t,
    };
}
function ba(e) {
    if (!e) return dn;
    e = e._reactInternals;
    e: {
        if (Rn(e) !== e || e.tag !== 1) throw Error(y(170));
        var n = e;
        do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (de(n.type)) {
                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            n = n.return;
        } while (n !== null);
        throw Error(y(171));
    }
    if (e.tag === 1) {
        var t = e.type;
        if (de(t)) return qs(e, t, n);
    }
    return n;
}
function ec(e, n, t, r, l, o, u, i, s) {
    return (
        (e = Tu(t, r, !0, e, l, o, u, i, s)),
        (e.context = ba(null)),
        (t = e.current),
        (r = oe()),
        (l = an(t)),
        (o = We(r, l)),
        (o.callback = n ?? null),
        un(t, o, l),
        (e.current.lanes = l),
        Gt(e, l, r),
        pe(e, r),
        e
    );
}
function dl(e, n, t, r) {
    var l = n.current,
        o = oe(),
        u = an(l);
    return (
        (t = ba(t)),
        n.context === null ? (n.context = t) : (n.pendingContext = t),
        (n = We(o, u)),
        (n.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (n.callback = r),
        (e = un(l, n, u)),
        e !== null && (Oe(e, l, u, o), Cr(e, l, u)),
        u
    );
}
function br(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Vi(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n;
    }
}
function Ru(e, n) {
    Vi(e, n), (e = e.alternate) && Vi(e, n);
}
function Pd() {
    return null;
}
var nc =
    typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
        };
function Ou(e) {
    this._internalRoot = e;
}
pl.prototype.render = Ou.prototype.render = function (e) {
    var n = this._internalRoot;
    if (n === null) throw Error(y(409));
    dl(e, n, null, null);
};
pl.prototype.unmount = Ou.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Ln(function () {
            dl(null, e, null, null);
        }),
            (n[Qe] = null);
    }
};
function pl(e) {
    this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var n = Rs();
        e = { blockedOn: null, target: e, priority: n };
        for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
        qe.splice(t, 0, e), t === 0 && Ms(e);
    }
};
function Mu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Bi() { }
function zd(e, n, t, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = br(u);
                o.call(c);
            };
        }
        var u = ec(n, r, e, 0, null, !1, !1, "", Bi);
        return (
            (e._reactRootContainer = u),
            (e[Qe] = u.current),
            $t(e.nodeType === 8 ? e.parentNode : e),
            Ln(),
            u
        );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
        var i = r;
        r = function () {
            var c = br(s);
            i.call(c);
        };
    }
    var s = Tu(e, 0, !1, null, null, !1, !1, "", Bi);
    return (
        (e._reactRootContainer = s),
        (e[Qe] = s.current),
        $t(e.nodeType === 8 ? e.parentNode : e),
        Ln(function () {
            dl(n, s, t, r);
        }),
        s
    );
}
function hl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
        var u = o;
        if (typeof l == "function") {
            var i = l;
            l = function () {
                var s = br(u);
                i.call(s);
            };
        }
        dl(n, u, e, l);
    } else u = zd(t, n, e, l, r);
    return br(u);
}
Ls = function (e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var t = kt(n.pendingLanes);
                t !== 0 &&
                    (qo(n, t | 1), pe(n, H()), !(R & 6) && ((lt = H() + 500), hn()));
            }
            break;
        case 13:
            Ln(function () {
                var r = Ke(e, 1);
                if (r !== null) {
                    var l = oe();
                    Oe(r, e, 1, l);
                }
            }),
                Ru(e, 1);
    }
};
bo = function (e) {
    if (e.tag === 13) {
        var n = Ke(e, 134217728);
        if (n !== null) {
            var t = oe();
            Oe(n, e, 134217728, t);
        }
        Ru(e, 134217728);
    }
};
Ts = function (e) {
    if (e.tag === 13) {
        var n = an(e),
            t = Ke(e, n);
        if (t !== null) {
            var r = oe();
            Oe(t, e, n, r);
        }
        Ru(e, n);
    }
};
Rs = function () {
    return O;
};
Os = function (e, n) {
    var t = O;
    try {
        return (O = e), n();
    } finally {
        O = t;
    }
};
uo = function (e, n, t) {
    switch (n) {
        case "input":
            if ((bl(e, t), (n = t.name), t.type === "radio" && n != null)) {
                for (t = e; t.parentNode;) t = t.parentNode;
                for (
                    t = t.querySelectorAll(
                        "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                    ),
                    n = 0;
                    n < t.length;
                    n++
                ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                        var l = ol(r);
                        if (!l) throw Error(y(90));
                        as(r), bl(r, l);
                    }
                }
            }
            break;
        case "textarea":
            fs(e, t);
            break;
        case "select":
            (n = t.value), n != null && Kn(e, !!t.multiple, n, !1);
    }
};
gs = Nu;
ws = Ln;
var Ld = { usingClientEntryPoint: !1, Events: [Jt, Un, ol, vs, ys, Nu] },
    yt = {
        findFiberByHostInstance: kn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Td = {
        bundleType: yt.bundleType,
        version: yt.version,
        rendererPackageName: yt.rendererPackageName,
        rendererConfig: yt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Es(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: yt.findFiberByHostInstance || Pd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yr.isDisabled && yr.supportsFiber)
        try {
            (nl = yr.inject(Td)), (je = yr);
        } catch { }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
ge.createPortal = function (e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mu(n)) throw Error(y(200));
    return Nd(e, n, null, t);
};
ge.createRoot = function (e, n) {
    if (!Mu(e)) throw Error(y(299));
    var t = !1,
        r = "",
        l = nc;
    return (
        n != null &&
        (n.unstable_strictMode === !0 && (t = !0),
            n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = Tu(e, 1, !1, null, null, t, !1, r, l)),
        (e[Qe] = n.current),
        $t(e.nodeType === 8 ? e.parentNode : e),
        new Ou(n)
    );
};
ge.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
        throw typeof e.render == "function"
            ? Error(y(188))
            : ((e = Object.keys(e).join(",")), Error(y(268, e)));
    return (e = Es(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
    return Ln(e);
};
ge.hydrate = function (e, n, t) {
    if (!ml(n)) throw Error(y(200));
    return hl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
    if (!Mu(e)) throw Error(y(405));
    var r = (t != null && t.hydratedSources) || null,
        l = !1,
        o = "",
        u = nc;
    if (
        (t != null &&
            (t.unstable_strictMode === !0 && (l = !0),
                t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
                t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
            (n = ec(n, null, e, 1, t ?? null, l, !1, o, u)),
            (e[Qe] = n.current),
            $t(e),
            r)
    )
        for (e = 0; e < r.length; e++)
            (t = r[e]),
                (l = t._getVersion),
                (l = l(t._source)),
                n.mutableSourceEagerHydrationData == null
                    ? (n.mutableSourceEagerHydrationData = [t, l])
                    : n.mutableSourceEagerHydrationData.push(t, l);
    return new pl(n);
};
ge.render = function (e, n, t) {
    if (!ml(n)) throw Error(y(200));
    return hl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
    if (!ml(e)) throw Error(y(40));
    return e._reactRootContainer
        ? (Ln(function () {
            hl(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Qe] = null);
            });
        }),
            !0)
        : !1;
};
ge.unstable_batchedUpdates = Nu;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
    if (!ml(t)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return hl(e, n, t, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
function tc() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
        } catch (e) {
            console.error(e);
        }
}
tc(), (es.exports = ge);
var Rd = es.exports,
    Wi = Rd;
(Kl.createRoot = Wi.createRoot), (Kl.hydrateRoot = Wi.hydrateRoot);
const Ql = (e, n) => {
    try {
        const t = window;
        (t.dataLayer = t.dataLayer ?? []),
            t.dataLayer.push({ event: e, action: n });
    } catch {
        console.log("error sending event");
    }
};
function Od() {
    const [e, n] = Qn.useState(0),
        [t, r] = Qn.useState(!1),
        l = e * 20 + 16,
        o = () => {
            n(e + 1), Ql("No Clicked", "click");
        },
        u = () => {
            r(!0), Ql("Yes Clicked", "click");
        };
    Qn.useEffect(() => {
        Ql("Page Loaded", "visit");
    }, []);
    const i = () => {
        const s = [
            "No",
            "Are you sure?",
            "What if I asked really nicely?",
            "Pretty please",
            "BABYYYY please yes vana na",
            "YES vandeu na meri mayaluuuuu",
            "PLEASE POOKIE",
            "But :*(",
            "I am going to die",
            "Yep im dead",
            "ok ur talking to my ghost",
            "please babe aba ta yes vana",
            ":((((",
            "PRETTY PLEASE",
            "HYAAAAAAA Pleaseee",
            "No :(",
        ];
        return s[Math.min(e, s.length - 1)];
    };
    return se.jsx("div", {
        className: "-mt-16 flex h-screen flex-col items-center justify-center",
        children: t
            ? se.jsxs(se.Fragment, {
                children: [
                    se.jsx("img", {
                        src: "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif",
                    }),
                    se.jsx("div", {
                        className: "my-4 text-4xl font-bold",
                        children: "WOOOOOO!!! I love you my pookie bookie cutie potootie booboo bear with forsted whipped cream sprinkes and a cherry on top. Aba Address deu 🥺🥺🥺!! ;))",
                    }),
                ],
            })
            : se.jsxs(se.Fragment, {
                children: [
                    se.jsx("img", {
                        className: "h-[200px]",
                        src: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
                    }),
                    se.jsx("h1", {
                        className: "my-4 text-4xl",
                        children: "Will you be my Valentine?",
                    }),
                    se.jsxs("div", {
                        className: "flex items-center",
                        children: [
                            se.jsx("button", {
                                className:
                                    "mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700",
                                style: { fontSize: l },
                                onClick: u,
                                children: "Yes",
                            }),
                            se.jsx("button", {
                                onClick: o,
                                className:
                                    " rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700",
                                children: e === 0 ? "No" : i(),
                            }),
                        ],
                    }),
                ],
            }),
    });
}
Kl.createRoot(document.getElementById("root")).render(
    se.jsx(kc.StrictMode, { children: se.jsx(Od, {}) })
);
