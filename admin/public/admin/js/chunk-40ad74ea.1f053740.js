(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-40ad74ea'], { '2ef3' (e, t, l) {}, 8084 (e, t, l) { 'use strict'; const n = l('2ef3'); const u = l.n(n); u.a }, '88d8' (e, t, l) { 'use strict'; l.r(t); const n = function () { const e = this; const t = e.$createElement; const l = e._self._c || t; return l('div', { directives: [{ name: 'tooltip', rawName: 'v-tooltip', value: e.tooltipValue, expression: 'tooltipValue' }], staticClass: 'swatch', class: { light: e.tooLight(e.value) }, style: { backgroundColor: 'var(--' + e.value + ')' } }) }; const u = []; const a = (l('caad'), l('2532'), l('8db2')); const i = l.n(a); const r = { mixins: [i.a], computed: { tooltipValue () { return this.value ? this.$helpers.formatTitle(this.value) : null } }, methods: { tooLight (e) { return e ? !!(e.includes('white') || e.includes('100') || e.includes('50') && !e.includes('500')) : null } } }; const o = r; const d = (l('8084'), l('2877')); const s = Object(d.a)(o, n, u, !1, null, '4c2e4a78', null); t.default = s.exports }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } } }])
// # sourceMappingURL=chunk-40ad74ea.1f053740.js.map
