(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-3bccc2c9'], { '09b5' (e, t, l) { 'use strict'; l.r(t); const n = function () { const e = this; const t = e.$createElement; const l = e._self._c || t; return l('div', { staticClass: 'readonly-checkboxes no-wrap' }, [e._v(e._s(e.displayValue))]) }; const i = []; const u = (l('d81d'), l('d3b7'), l('ac1f'), l('25f0'), l('1276'), l('8db2')); const a = l.n(u); const r = { name: 'ReadonlyCheckboxes', mixins: [a.a], computed: { selection () { if (this.value == null) { return [] } const e = this.type === 'VARCHAR' ? this.value.split(',') : this.value; return this.options.wrap && (e.pop(), e.shift()), e }, displayValue () { const e = this; const t = this.selection ? this.selection : []; return this.options.formatting && this.type === 'array' ? t.map(function (t) { return e.options.choices[t] ? e.options.choices[t] : t }).toString() : t.toString() } } }; const o = r; const s = l('2877'); const p = Object(s.a)(o, n, i, !1, null, null, null); t.default = p.exports }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } } }])
// # sourceMappingURL=chunk-3bccc2c9.b5df8696.js.map
