(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-8dd65600'], { '287e' (e, t, n) { 'use strict'; const i = n('6e3b'); const a = n.n(i); a.a }, '6e3b' (e, t, n) {}, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } }, db31 (e, t, n) { 'use strict'; n.r(t); const i = function () { const e = this; const t = e.$createElement; const n = e._self._c || t; return Object.keys(e.interfaceOptions).length === 0 ? n('v-notice', [e._v(' ' + e._s(e.$t('interface_has_no_options')) + ' ')]) : e.interfaceOptions ? n('v-sheet', [n('form', { on: { submit (e) { e.preventDefault() } } }, e._l(e.interfaceOptions, function (t, i) { return n('div', { key: i, staticClass: 'options' }, [n('label', { attrs: { for: i } }, [e._v(e._s(t.name))]), n('v-ext-input', { attrs: { id: t.interface, name: i, type: t.type, length: t.length, readonly: t.readonly, required: t.required, loading: t.loading, options: t.options, value: (e.value || {})[i], fields: e.interfaceOptions, values: e.val }, on: { input (t) { return e.stageValue(i, t) } } }), n('p', { staticClass: 'note', domProps: { innerHTML: e._s(e.$helpers.snarkdown(t.comment || '')) } })], 1) }), 0)]) : n('v-notice', [e._v(' ' + e._s(e.$t('select_interface')) + ' ')]) }; const a = []; const l = (n('d3b7'), n('ddb0'), n('ade3')); const r = n('8db2'); const u = n.n(r); const o = n('2ef0'); const s = { name: 'InterfaceOptions', mixins: [u.a], computed: { interfaceName () { const e = this.options.interfaceField; if (e) { return this.values[e] } }, interfaceOptions () { if (this.interfaceName) { return this.$store.state.extensions.interfaces[this.interfaceName].options } }, val () { return Array.isArray(this.value) ? {} : this.value } }, methods: { stageValue (e, t) { const n = Object(o.clone)(this.value || {}); const i = Object(o.merge)(n, Object(l.a)({}, e, t)); this.$emit('input', i) } } }; const c = s; const f = (n('287e'), n('2877')); const p = Object(f.a)(c, i, a, !1, null, '2a01c07c', null); t.default = p.exports } }])
// # sourceMappingURL=chunk-8dd65600.4a42434f.js.map
