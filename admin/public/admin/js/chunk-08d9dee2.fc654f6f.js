(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-08d9dee2'], { '532e' (e, t, n) { 'use strict'; n.r(t); const u = function () { const e = this; const t = e.$createElement; const n = e._self._c || t; return n('div', [e._v(e._s(e.displayValue))]) }; const a = []; const r = n('750b'); const c = n('e164'); const i = n('9923'); const l = i.i18n; const o = Object(r.b)({ props: { value: { type: String, default: null }, options: { type: Object, required: !0 } }, setup (e) { const t = Object(r.a)(function () { if (!e.value) { return '--' } const t = new Date(e.value); return e.options.showRelative ? Object(c.a)(t).value : l.d(t, 'long') }); return { displayValue: t } } }); const s = o; const f = n('2877'); const v = Object(f.a)(s, u, a, !1, null, null, null); t.default = v.exports }, e164 (e, t, n) { 'use strict'; n.d(t, 'a', function () { return r }); const u = n('750b'); const a = n('1556'); function r (e) { let t; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4; const r = { addSuffix: !0 }; const c = Object(u.f)(Object(a.a)(e, new Date(), r)); return n !== 0 && (Object(u.d)(function () { t = setInterval(function () { c.value = Object(a.a)(e, new Date(), r) }, n) }), Object(u.e)(function () { clearInterval(t) })), c } } }])
// # sourceMappingURL=chunk-08d9dee2.fc654f6f.js.map
