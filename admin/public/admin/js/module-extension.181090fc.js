(window.webpackJsonp = window.webpackJsonp || []).push([['module-extension'], { '68dd' (t, e, n) { 'use strict'; n.r(e); const s = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return !1 === t.exists ? n('v-not-found') : n('v-ext-module', { attrs: { id: t.id } }) }; const o = []; const i = (n('b0c0'), n('4360')); const r = n('f1d0'); const u = { name: 'ModuleExtension', metaInfo () { const t = this.$store.state.extensions.modules[this.id]; return t ? { title: t.name } : null }, components: { VNotFound: r.default }, props: { id: { type: String, required: !0 } }, data () { return { exists: !1 } }, beforeRouteEnter (t, e, n) { const s = i.a.state.extensions.modules; const o = t.params.id; let r = !1; return s.hasOwnProperty(o) && (r = !0), n(function (t) { t.exists = r }) }, beforeRouteUpdate (t, e, n) { const s = this.$store.state.extensions.modules; const o = this.id; return this.exists = !1, s.hasOwnProperty(o) && (this.exists = !0), n() } }; const a = u; const d = n('2877'); const l = Object(d.a)(a, s, o, !1, null, null, null); e.default = l.exports } }])
// # sourceMappingURL=module-extension.181090fc.js.map