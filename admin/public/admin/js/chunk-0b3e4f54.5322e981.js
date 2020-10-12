(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-0b3e4f54'], { 4280 (t, e, n) { 'use strict'; n.r(e); const a = function () { const t = this; const e = t.$createElement; const n = t._self._c || e; return n('div', { staticClass: 'interface-2fa-value' }, [t.tfa_secret ? n('v-notice', { staticClass: 'qr-info', attrs: { icon: 'info' } }, [t._v(' ' + t._s(t.$t('scan_in_authenticator')) + ' ')]) : t._e(), t.tfa_secret ? n('qr-code', { staticClass: 'qr', attrs: { value: t.totpUrl, options: { width: 200 } } }) : t._e(), t.value ? t._e() : n('v-button', { attrs: { loading: t.loading }, on: { click: t.getToken } }, [t._v('Enable 2FA')]), t.value ? n('v-button', { on: { click: t.removeValue } }, [t._v('Disable 2FA')]) : t._e()], 1) }; const l = []; const i = (n('99af'), n('d3b7'), n('8db2')); const r = n.n(i); const u = n('b2e5'); const o = n.n(u); const c = { name: 'Interface2faValue', components: { QrCode: o.a }, mixins: [r.a], data () { return { loading: !1, error: null, tfa_secret: null } }, computed: { totpUrl () { return 'otpauth://totp/Directus:'.concat(this.$store.state.currentUser.email, '?secret=').concat(this.tfa_secret, '&issuer=Directus') } }, methods: { getToken () { const t = this; this.loading = !0, this.$api.api.get('/utils/2fa_secret').then(function (t) { return t.data['2fa_secret'] }).then(function (e) { t.$emit('input', e), t.tfa_secret = e }).catch(function (e) { t.error = e }).finally(function () { return t.loading = !1 }) }, removeValue () { this.$emit('input', null), this.tfa_secret = null } } }; const s = c; const f = (n('6a6d'), n('2877')); const d = Object(f.a)(s, a, l, !1, null, '64ffdb20', null); e.default = d.exports }, '6a6d' (t, e, n) { 'use strict'; const a = n('a136'); const l = n.n(a); l.a }, '8db2' (t, e) { t.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (t) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(t) } } } } }, a136 (t, e, n) {} }])
// # sourceMappingURL=chunk-0b3e4f54.5322e981.js.map