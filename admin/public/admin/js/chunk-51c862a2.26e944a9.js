(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-51c862a2'], { '4e08' (e, t, l) { 'use strict'; l.r(t); const n = function () { const e = this; const t = e.$createElement; const l = e._self._c || t; return l('v-input', { attrs: { id: e.name, type: 'number', min: '0', 'icon-left': 'swap_vert', value: e.value, readonly: e.readonly, maxlength: +e.length }, on: { input: e.updateValue } }) }; const u = []; const a = (l('a9e3'), l('8db2')); const i = l.n(a); const r = { mixins: [i.a], methods: { updateValue (e) { this.$emit('input', Number(e)) } } }; const p = r; const d = (l('b3ea'), l('2877')); const o = Object(d.a)(p, n, u, !1, null, 'b53ee684', null); t.default = o.exports }, 7307 (e, t, l) {}, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } }, b3ea (e, t, l) { 'use strict'; const n = l('7307'); const u = l.n(n); u.a } }])
// # sourceMappingURL=chunk-51c862a2.26e944a9.js.map
