(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-8e696ca2'], { 1645 (e, t, l) { 'use strict'; const a = l('b916'); const n = l.n(a); n.a }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } }, b916 (e, t, l) {}, e3f1 (e, t, l) { 'use strict'; l.r(t); const a = function () { const e = this; const t = e.$createElement; const l = e._self._c || t; return l('span', { class: { empty: !e.displayValue } }, [e._v(' ' + e._s(e.displayValue) + ' '), e.displayValue ? e._e() : [e._v(' ' + e._s(e.$t('not_translated_in_language', { language: e.systemLanguagePrinted })) + ' ')]], 2) }; const n = []; const u = (l('ac1f'), l('1276'), l('ade3')); const i = l('8db2'); const s = l.n(i); const r = l('2ef0'); const p = { mixins: [s.a], computed: { systemLanguage () { return this.$i18n.locale }, systemLanguagePrinted () { return this.$i18n.availableLanguages[this.systemLanguage].split('(')[0] }, systemLanguageValues () { const e = this.options.languageField; const t = Object(r.find)(this.value, Object(u.a)({}, e, this.systemLanguage)); const l = Object(r.find)(this.value, Object(u.a)({}, e, this.systemLanguage.split('-')[0])); return t || l }, displayValue () { return this.value && this.value.length !== 0 ? this.options.template ? this.systemLanguageValues ? this.$helpers.micromustache.render(this.options.template, this.systemLanguageValues) : null : this.$tc('item_count', (this.value || []).length) : null } } }; const d = p; const o = (l('1645'), l('2877')); const c = Object(o.a)(d, a, n, !1, null, null, null); t.default = c.exports } }])
// # sourceMappingURL=chunk-8e696ca2.22a8cfd1.js.map
