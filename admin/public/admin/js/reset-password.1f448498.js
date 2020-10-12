(window.webpackJsonp = window.webpackJsonp || []).push([['reset-password'], { '0f67' (e, t, r) { 'use strict'; const n = r('f571'); const o = r.n(n); o.a }, '656d' (e, t, r) { 'use strict'; r.r(t); const n = function () { const e = this; const t = e.$createElement; const r = e._self._c || t; return r('PublicView', { attrs: { heading: e.$t('reset_password') } }, [!1 === e.resetMode && !1 === e.requestSent ? r('form', { on: { submit (t) { return t.preventDefault(), e.onRequest(t) } } }, [r('project-chooser'), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: e.email, expression: 'email' }, { name: 'focus', rawName: 'v-focus' }], attrs: { type: 'email', placeholder: e.$t('email'), required: '' }, domProps: { value: e.email }, on: { input (t) { t.target.composing || (e.email = t.target.value) } } }), r('div', { staticClass: 'buttons' }, [r('button', { attrs: { type: 'submit' } }, [e._v(e._s(e.$t('reset')))]), r('router-link', { staticClass: 'secondary', attrs: { to: '/login' } }, [e._v(e._s(e.$t('sign_in')))])], 1)], 1) : !0 === e.requestSent ? [r('p', [e._v(e._s(e.$t('password_reset_sent')))])] : e._e(), !0 === e.resetMode && !1 === e.resetDone ? r('form', { on: { submit (t) { return t.preventDefault(), e.onReset(t) } } }, [r('project-chooser'), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: e.password, expression: 'password' }], attrs: { type: 'password', placeholder: e.$t('password'), required: '' }, domProps: { value: e.password }, on: { input (t) { t.target.composing || (e.password = t.target.value) } } }), r('div', { staticClass: 'buttons' }, [r('button', { attrs: { type: 'submit' } }, [e._v(e._s(e.$t('reset')))])])], 1) : !0 === e.resetDone ? [r('p', [e._v(e._s(e.$t('password_reset_successful')))]), r('router-link', { attrs: { to: '/login' } }, [e._v(e._s(e.$t('sign_in')))])] : e._e(), e.notice.text ? r('public-notice', { attrs: { slot: 'notice', color: e.notice.color, icon: e.notice.icon, loading: e.requesting || e.resetting }, slot: 'notice' }, [e._v(' ' + e._s(e.notice.text) + ' ')]) : e._e()], 2) }; const o = []; const s = (r('a4d3'), r('99af'), r('4de4'), r('4160'), r('e439'), r('dbb4'), r('b64b'), r('159b'), r('96cf'), r('1da1')); const a = r('ade3'); const i = r('89b3'); const c = r('746c'); const u = r('8a0c'); const p = r('2f62'); const l = r('bc3a'); const d = r.n(l); function v (e, t) { const r = Object.keys(e); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(e); t && (n = n.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, n) } return r } function f (e) { for (let t = 1; t < arguments.length; t++) { var r = arguments[t] != null ? arguments[t] : {}; t % 2 ? v(Object(r), !0).forEach(function (t) { Object(a.a)(e, t, r[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }) } return e } const m = { name: 'ResetPassword', components: { PublicView: i.a, ProjectChooser: c.a, PublicNotice: u.a }, data () { return { email: '', password: '', requesting: !1, requestSent: !1, resetting: !1, resetDone: !1, notice: { text: this.$t('not_authenticated'), color: 'blue-grey-100', icon: 'lock_outline' } } }, computed: f({}, Object(p.e)(['currentProjectKey', 'apiRootPath']), { resetMode () { return void 0 !== this.$route.query.token } }), methods: { onRequest () { const e = this; return Object(s.a)(regeneratorRuntime.mark(function t () { let r, n, o, s; return regeneratorRuntime.wrap(function (t) { while (1) { switch (t.prev = t.next) { case 0:return e.requesting = !0, r = ''.concat(e.apiRootPath).concat(e.currentProjectKey), e.notice.text = e.$t('password_reset_sending'), t.prev = 3, t.next = 6, d.a.post(r + '/auth/password/request', { email: e.email }); case 6:e.requestSent = !0, t.next = 12; break; case 9:t.prev = 9, t.t0 = t.catch(3), e.$events.emit('error', { notify: (n = t.t0.response) === null || void 0 === n ? void 0 : (o = n.data) === null || void 0 === o ? void 0 : (s = o.error) === null || void 0 === s ? void 0 : s.message, error: t.t0 }); case 12:return t.prev = 12, e.requesting = !1, e.notice.text = e.$t('not_authenticated'), t.finish(12); case 16:case 'end':return t.stop() } } }, t, null, [[3, 9, 12, 16]]) }))() }, onReset () { const e = this; return Object(s.a)(regeneratorRuntime.mark(function t () { let r, n, o, s, a; return regeneratorRuntime.wrap(function (t) { while (1) { switch (t.prev = t.next) { case 0:return r = { token: e.$route.query.token, password: e.password }, e.requesting = !0, n = ''.concat(e.apiRootPath).concat(e.currentProjectKey), t.prev = 3, t.next = 6, d.a.post(n + '/auth/password/reset', r); case 6:e.resetDone = !0, t.next = 12; break; case 9:t.prev = 9, t.t0 = t.catch(3), e.$events.emit('error', { notify: (o = t.t0.response) === null || void 0 === o ? void 0 : (s = o.data) === null || void 0 === s ? void 0 : (a = s.error) === null || void 0 === a ? void 0 : a.message, error: t.t0 }); case 12:return t.prev = 12, e.resetting = !1, e.notice.text = e.$t('not_authenticated'), t.finish(12); case 16:case 'end':return t.stop() } } }, t, null, [[3, 9, 12, 16]]) }))() } } }; const b = m; const w = (r('0f67'), r('2877')); const g = Object(w.a)(b, n, o, !1, null, '7e8e0e25', null); t.default = g.exports }, f571 (e, t, r) {} }])
// # sourceMappingURL=reset-password.1f448498.js.map