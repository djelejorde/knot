(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-587c9700'], { '3bfc' (e, t, n) { 'use strict'; n.r(t); const l = function () { const e = this; const t = e.$createElement; const n = e._self._c || t; return n('v-slider', { staticClass: 'slider', attrs: { disabled: e.readonly, max: e.options.maximum, min: e.options.minimum, step: e.options.step, unit: e.options.unit, value: e.safeValue }, on: { input (t) { return e.$emit('input', t) } } }) }; const i = []; const u = n('8db2'); const a = n.n(u); const r = { name: 'InterfaceSlider', mixins: [a.a], computed: { safeValue () { return !this.value && (this.value !== 0 || this.options.minimum > 0) ? this.options.minimum : this.value } } }; const o = r; const s = (n('68d8'), n('2877')); const d = Object(s.a)(o, l, i, !1, null, '91ee42f6', null); t.default = d.exports }, '68d8' (e, t, n) { 'use strict'; const l = n('d257'); const i = n.n(l); i.a }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } }, d257 (e, t, n) {} }])
// # sourceMappingURL=chunk-587c9700.60f78398.js.map
