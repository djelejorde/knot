(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-50d05f60'], { '23d6' (e, t, n) { 'use strict'; n.r(t); const a = function () { const e = this; const t = e.$createElement; const n = e._self._c || t; return n('div', [e._v(e._s(e.displayValue))]) }; const u = []; const r = (n('ac1f'), n('5319'), n('750b')); const c = n('e164'); const i = n('9923'); const l = i.i18n; const o = Object(r.b)({ props: { value: { type: String, default: null }, options: { type: Object, required: !0 } }, setup (e) { const t = Object(r.a)(function () { if (!e.value) { return '--' } const t = new Date(e.value.replace(/-/g, '/')); return e.options.localized ? l.d(t, 'short') : e.options.showRelative ? Object(c.a)(t, 0) : e.value }); return { displayValue: t } } }); const s = o; const f = n('2877'); const d = Object(f.a)(s, a, u, !1, null, null, null); t.default = d.exports }, e164 (e, t, n) { 'use strict'; n.d(t, 'a', function () { return r }); const a = n('750b'); const u = n('1556'); function r (e) { let t; const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4; const r = { addSuffix: !0 }; const c = Object(a.f)(Object(u.a)(e, new Date(), r)); return n !== 0 && (Object(a.d)(function () { t = setInterval(function () { c.value = Object(u.a)(e, new Date(), r) }, n) }), Object(a.e)(function () { clearInterval(t) })), c } } }])
// # sourceMappingURL=chunk-50d05f60.cd991920.js.map