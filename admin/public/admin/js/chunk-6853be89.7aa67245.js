(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-6853be89'], { 1148 (e, t, i) { 'use strict'; const n = i('a691'); const r = i('1d80'); e.exports = ''.repeat || function (e) { let t = String(r(this)); let i = ''; let a = n(e); if (a < 0 || a == 1 / 0) { throw new RangeError('Wrong number of repetitions') } for (;a > 0; (a >>>= 1) && (t += t)) { 1 & a && (i += t) } return i } }, 1683 (e, t, i) {}, '21f3' (e, t, i) { 'use strict'; const n = i('1683'); const r = i.n(n); r.a }, '281c' (e, t, i) { 'use strict'; i.d(t, 'a', function () { return n }); i('99af'), i('b6802'); function n () { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; const i = t ? 1e3 : 1024; if (!1 === Boolean(e)) { return '--' } if (Math.abs(e) < i) { return ''.concat(e, ' B') } const n = t ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']; let r = -1; let a = e; do { a /= i, r += 1 } while (Math.abs(a) >= i && r < n.length - 1); return ''.concat(a.toFixed(1), ' ').concat(n[r]) } }, '408a' (e, t, i) { const n = i('c6b6'); e.exports = function (e) { if (typeof e !== 'number' && n(e) != 'Number') { throw new TypeError('Incorrect invocation') } return +e } }, '53ca' (e, t, i) { 'use strict'; i.d(t, 'a', function () { return n }); i('a4d3'), i('e01a'), i('d28b'), i('e260'), i('d3b7'), i('3ca3'), i('ddb0'); function n (e) { return n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e }, n(e) } }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } }, b6802 (e, t, i) { 'use strict'; const n = i('23e7'); const r = i('a691'); const a = i('408a'); const o = i('1148'); const s = i('d039'); const c = 1.0.toFixed; const l = Math.floor; var u = function (e, t, i) { return t === 0 ? i : t % 2 === 1 ? u(e, t - 1, i * e) : u(e * e, t / 2, i) }; const d = function (e) { let t = 0; let i = e; while (i >= 4096) { t += 12, i /= 4096 } while (i >= 2) { t += 1, i /= 2 } return t }; const p = c && (8e-5.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || (0xDE0B6B3A7640080).toFixed(0) !== '1000000000000000128') || !s(function () { c.call({}) }); n({ target: 'Number', proto: !0, forced: p }, { toFixed (e) { let t; let i; let n; let s; let c = a(this); const p = r(e); const f = [0, 0, 0, 0, 0, 0]; let h = ''; let v = '0'; const m = function (e, t) { let i = -1; let n = t; while (++i < 6) { n += e * f[i], f[i] = n % 1e7, n = l(n / 1e7) } }; const g = function (e) { let t = 6; let i = 0; while (--t >= 0) { i += f[t], f[t] = l(i / e), i = i % e * 1e7 } }; const y = function () { let e = 6; let t = ''; while (--e >= 0) { if (t !== '' || e === 0 || f[e] !== 0) { const i = String(f[e]); t = t === '' ? i : t + o.call('0', 7 - i.length) + i } } return t }; if (p < 0 || p > 20) { throw new RangeError('Incorrect fraction digits') } if (c != c) { return 'NaN' } if (c <= -1e21 || c >= 1e21) { return String(c) } if (c < 0 && (h = '-', c = -c), c > 1e-21) { if (t = d(c * u(2, 69, 1)) - 69, i = t < 0 ? c * u(2, -t, 1) : c / u(2, t, 1), i *= 4503599627370496, t = 52 - t, t > 0) { m(0, i), n = p; while (n >= 7) { m(1e7, 0), n -= 7 }m(u(10, n, 1), 0), n = t - 1; while (n >= 23) { g(1 << 23), n -= 23 }g(1 << n), m(1, 1), g(2), v = y() } else { m(0, i), m(1 << -t, 0), v = y() + o.call('0', p) } } return p > 0 ? (s = v.length, v = h + (s <= p ? '0.' + o.call('0', p - s) + v : v.slice(0, s - p) + '.' + v.slice(s - p))) : v = h + v, v } }) }, dea2 (e, t, i) { 'use strict'; i.r(t); const n = function () { const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', { staticClass: 'input-single-file' }, [e.noFileAccess ? i('v-notice', { staticClass: 'notice' }, [e._v(' ' + e._s(e.$t('this_item_is_not_available')) + ' '), i('button', { on: { click (t) { return e.$emit('input', null) } } }, [i('v-icon', { directives: [{ name: 'tooltip', rawName: 'v-tooltip', value: e.$t('deselect'), expression: "$t('deselect')" }], attrs: { name: 'clear' } })], 1)]) : e.image === null && e.value !== null ? i('v-spinner') : [!1 === Array.isArray(e.value) && e.value ? i('v-card', { staticClass: 'card', attrs: { title: e.image.title, subtitle: e.subtitle + e.subtitleExtra, src: e.src, icon: e.icon, 'text-background': '', color: 'black', options: e.cardOptions, 'medium-image': e.width.startsWith('half'), 'big-image': e.width === 'full', 'only-show-on-hover': e.isImage }, on: { download: e.downloadFile, deselect (t) { return e.$emit('input', null) }, remove: e.removeFile } }) : i('v-upload', { staticClass: 'uploader', attrs: { small: '', disabled: e.readonly, accept: e.options.accept, multiple: !1 }, on: { upload: e.saveUpload } }), e.value ? e._e() : i('div', { staticClass: 'buttons' }, [i('v-button', { attrs: { type: 'button', disabled: e.readonly }, on: { click (t) { e.existing = !0 } } }, [i('v-icon', { attrs: { name: 'playlist_add', left: '' } }), e._v(' ' + e._s(e.$t('existing')) + ' ')], 1)], 1), e.existing ? i('portal', { attrs: { to: 'modal' } }, [i('v-modal', { attrs: { title: e.$t('choose_one'), buttons: { done: { text: e.$t('done') } } }, on: { cancel (t) { e.existing = !1 }, close (t) { e.existing = !1 }, done (t) { e.existing = !1 } } }, [i('div', { staticClass: 'content' }, [i('div', { staticClass: 'search' }, [i('v-input', { staticClass: 'search-input', attrs: { type: 'search', placeholder: e.$t('search_for_item') }, on: { input: e.onSearchInput } })], 1), i('v-items', { staticClass: 'items', attrs: { collection: 'directus_files', 'view-type': e.viewType, selection: e.value ? [e.value] : [], filters: e.filters, 'view-query': e.viewQuery, 'view-options': e.viewOptions }, on: { options: e.setViewOptions, query: e.setViewQuery, select: e.saveSelection } })], 1)])], 1) : e._e()]], 2) }; const r = []; const a = (i('a4d3'), i('99af'), i('4de4'), i('7db0'), i('4160'), i('45fc'), i('e439'), i('dbb4'), i('b64b'), i('ac1f'), i('5319'), i('1276'), i('2ca0'), i('498a'), i('159b'), i('53ca')); const o = (i('96cf'), i('1da1')); const s = i('2909'); const c = i('ade3'); const l = i('8db2'); const u = i.n(l); const d = i('281c'); const p = i('fe76'); const f = i('2f62'); const h = i('2ef0'); function v (e, t) { const i = Object.keys(e); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(e); t && (n = n.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), i.push.apply(i, n) } return i } function m (e) { for (let t = 1; t < arguments.length; t++) { var i = arguments[t] != null ? arguments[t] : {}; t % 2 ? v(Object(i), !0).forEach(function (t) { Object(c.a)(e, t, i[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach(function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t)) }) } return e } const g = { mixins: [u.a], data () { return { existing: !1, viewOptionsOverride: {}, viewTypeOverride: null, viewQueryOverride: {}, filtersOverride: [], image: null, noFileAccess: !1 } }, computed: m({}, Object(f.e)(['currentProjectKey']), { cardOptions () { const e = { download: { text: this.$t('file_download'), icon: 'file_download' }, deselect: { text: this.$t('deselect'), icon: 'clear' } }; return !0 === this.options.allowDelete && (e.remove = { text: this.$t('delete'), icon: 'delete' }), e }, subtitle () { return this.image ? this.image.filename_disk.split('.').pop().toUpperCase() + ' • ' + this.$d(new Date(this.image.uploaded_on.replace(/-/g, '/')), 'short') : '' }, subtitleExtra () { return this.image.type && this.image.type.startsWith('image') ? ' • ' + Object(d.a)(this.image.filesize) : '' }, src () { let e, t; if (!this.image.type || !this.image.type.startsWith('image')) { return null } if (this.image.type === 'image/svg+xml') { return this.image.data.asset_url } const i = this.width === 'full' ? 'large' : 'medium'; const n = this.options.crop ? 'crop' : 'contain'; return (e = this.image.data) === null || void 0 === e ? void 0 : (t = e.thumbnails.find(function (e) { return e.key === 'directus-'.concat(i, '-').concat(n) })) === null || void 0 === t ? void 0 : t.url }, isImage () { return this.image.type && this.image.type.startsWith('image') }, icon () { return this.image.type && !this.image.type.startsWith('image') ? Object(p.a)(this.image.type) : null }, viewOptions () { const e = this.options.viewOptions; return m({}, e, {}, this.viewOptionsOverride) }, viewType () { return this.viewTypeOverride ? this.viewTypeOverride : this.options.viewType }, viewQuery () { const e = this.options.viewQuery; return m({ sort: '-id' }, e, {}, this.viewQueryOverride) }, filters () { return [].concat(Object(s.a)(this.options.filters || []), Object(s.a)(this.fileTypeFilters), Object(s.a)(this.filtersOverride)) }, fileTypeFilters () { return !this.options.accept || this.filtersOverride.length > 0 || (this.options.filters || []).some(function (e) { return e.field === 'type' }) ? [] : [{ field: 'type', operator: 'in', value: (this.options.accept || '').trim().split(/,\s*/) }] } }), created () { const e = this; return Object(o.a)(regeneratorRuntime.mark(function t () { return regeneratorRuntime.wrap(function (t) { while (1) { switch (t.prev = t.next) { case 0:if (!e.value) { t.next = 3; break } return t.next = 3, e.fetchImage(); case 3:e.onSearchInput = Object(h.debounce)(e.onSearchInput, 200); case 4:case 'end':return t.stop() } } }, t) }))() }, watch: { value () { this.fetchImage() } }, methods: { fetchImage () { const e = this; return Object(o.a)(regeneratorRuntime.mark(function t () { let i, n; return regeneratorRuntime.wrap(function (t) { while (1) { switch (t.prev = t.next) { case 0:if (e.noFileAccess = !1, e.image = null, e.value) { t.next = 4; break } return t.abrupt('return'); case 4:return i = Object(a.a)(e.value) === 'object' ? e.value.id : e.value, t.prev = 5, t.next = 8, e.$api.getFile(String(i)); case 8:n = t.sent, e.image = n.data, t.next = 15; break; case 12:t.prev = 12, t.t0 = t.catch(5), e.noFileAccess = !0; case 15:case 'end':return t.stop() } } }, t, null, [[5, 12]]) }))() }, downloadFile () { window.open(this.image.data.full_url) }, saveUpload (e) { this.image = e.data, this.$emit('input', this.image.id) }, setViewOptions (e) { this.viewOptionsOverride = m({}, this.viewOptionsOverride, {}, e) }, setViewQuery (e) { this.viewQueryOverride = m({}, this.viewQueryOverride, {}, e) }, onSearchInput (e) { this.setViewQuery({ q: e }) }, saveSelection (e) { const t = e[e.length - 1]; t ? (this.image = t, this.$emit('input', t)) : (this.image = null, this.$emit('input', null)), this.existing = !1 }, removeFile () { const e = this; return Object(o.a)(regeneratorRuntime.mark(function t () { let i; return regeneratorRuntime.wrap(function (t) { while (1) { switch (t.prev = t.next) { case 0:return i = e.image, t.next = 3, e.$api.deleteItem('directus_files', i.id); case 3:e.$notify({ title: e.$t('item_deleted'), color: 'green', iconMain: 'check' }), e.image = null, e.$emit('input', null); case 6:case 'end':return t.stop() } } }, t) }))() } } }; const y = g; const b = (i('21f3'), i('2877')); const w = Object(b.a)(y, n, r, !1, null, '37786d6c', null); t.default = w.exports }, fe76 (e, t, i) { 'use strict'; i.d(t, 'a', function () { return n }); i('2ca0'); function n (e) { return e === 'application/pdf' ? 'picture_as_pdf' : e.startsWith('application') ? 'insert_drive_file' : e.startsWith('image') ? 'crop_original' : e.startsWith('video') ? 'videocam' : e.startsWith('code') ? 'code' : e.startsWith('audio') ? 'audiotrack' : 'save' } } }])
// # sourceMappingURL=chunk-6853be89.7aa67245.js.map