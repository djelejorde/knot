(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-3bcef810'], { 5668 (e, t, l) { 'use strict'; l.r(t); const n = function () { const e = this; const t = e.$createElement; const l = e._self._c || t; return l('v-icon', { directives: [{ name: 'tooltip', rawName: 'v-tooltip', value: e.displayValue, expression: 'displayValue' }], attrs: { name: 'list_alt' } }) }; const a = []; const u = (l('99af'), l('a15b'), l('d81d'), l('b64b'), l('8db2')); const r = l.n(u); const i = { mixins: [r.a], computed: { displayValue () { const e = this; if (this.value === null) { return null } const t = Object.keys(this.value).map(function (t) { return ''.concat(t, ': ').concat(e.value[t]) }).join('\n'); return '<pre>'.concat(t, '</pre>') } } }; const p = i; const o = l('2877'); const d = Object(o.a)(p, n, a, !1, null, null, null); t.default = d.exports }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } } }])
// # sourceMappingURL=chunk-3bcef810.be8e695d.js.map
