(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-264bd833'], { '32cb' (e, t, i) { 'use strict'; i.r(t); const n = function () { const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', { staticClass: 'interface-repeater' }, [i('draggable', { staticClass: 'row-container', class: { dragging: e.dragging }, attrs: { handle: '.drag-handle' }, on: { start (t) { e.dragging = !0 }, end: e.endDrag }, model: { value: e.rows, callback (t) { e.rows = t }, expression: 'rows' } }, e._l(e.rows, function (t, n) { return i('repeater-row', { key: t.__key, attrs: { row: t, fields: e.repeaterFields, inline: e.inline, template: e.options.template, duplicable: e.options.duplicable, open: e.open === n, placeholder: e.options.placeholder }, on: { open (t) { return e.toggleOpen(n) }, input (t) { return e.updateRow(n, t) }, remove (t) { return e.removeRow(n) }, duplicate (t) { return e.duplicateRow(n) } } }) }), 1), e.addButtonVisible ? i('div', { staticClass: 'add-new', on: { click: e.addRow } }, [i('v-icon', { attrs: { name: 'add', color: '--input-icon-color' } }), e._v(' ' + e._s(e.options.createItemText) + ' ')], 1) : e._e()], 1) }; const r = []; const o = (i('a4d3'), i('99af'), i('a623'), i('4de4'), i('4160'), i('caad'), i('d81d'), i('a434'), i('e439'), i('dbb4'), i('b64b'), i('07ac'), i('159b'), i('2909')); const l = i('ade3'); const a = i('8db2'); const s = i.n(a); const u = function () { const e = this; const t = e.$createElement; const i = e._self._c || t; return i('v-sheet', { ref: 'interfaceRoot', staticClass: 'repeater-row' }, [i('div', { staticClass: 'header' }, [i('div', { staticClass: 'drag-handle' }, [i('v-icon', { attrs: { name: 'drag_handle' } })], 1), i('div', { staticClass: 'content', class: { 'two-up': e.inline && e.fields.length === 2 } }, [e.inline ? e._l(e.fields, function (t) { return i('v-ext-input', { key: t.field, attrs: { id: t.interface || 'text-input', name: t.field, required: t.required, readonly: t.readonly, options: t.options, type: t.type, datatype: t.datatype, value: e.row[t.field], fields: e.fields, values: e.row, length: t.length, width: t.width }, on: { input (i) { return e.$emit('input', { field: t.field, value: i }) } } }) }) : i('button', { class: e.showPlaceholder ? 'placeholder' : 'preview', attrs: { type: 'button' }, on: { click (t) { return e.$emit('open') } } }, [e._v(' ' + e._s(e.showPlaceholder ? e.placeholder : e.displayValue) + ' ')])], 2), e.duplicable ? i('v-contextual-menu', { staticClass: 'more-options', attrs: { placement: 'bottom-end', options: e.rowOptions }, on: { click: e.rowOptionsClicked } }) : i('button', { attrs: { type: 'button' }, on: { click (t) { return e.$emit('remove') } } }, [i('v-icon', { staticClass: 'remove', attrs: { name: 'delete_outline' } })], 1)], 1), !1 === e.inline ? i('div', { directives: [{ name: 'show', rawName: 'v-show', value: e.open, expression: 'open' }], staticClass: 'body' }, [i('v-form', { attrs: { 'full-width': '', fields: e.fields, values: e.row, 'new-item': e.newItem }, on: { 'stage-value' (t) { return e.$emit('input', t) } } })], 1) : e._e()]) }; const c = []; const d = i('1581'); const p = { name: 'RepeaterRow', props: { row: { type: Object, required: !0 }, fields: { type: Array, required: !0 }, inline: { type: Boolean, default: !1 }, template: { type: String, default: null }, duplicable: { type: Boolean, default: !1 }, open: { type: Boolean, default: !1 }, placeholder: { type: String, required: !0 } }, computed: { newItem () { return !0 === this.row.newItem }, displayValue () { if (!this.template) { return this.row[this.fields[0].field] } const e = this.$helpers.micromustache.render(this.template, this.row); return e }, showPlaceholder () { const e = this; let t = [this.fields[0].field]; this.template && (t = Object(d.a)(this.template)); const i = t.every(function (t) { let i; return e.row[t] !== null && ((i = e.row[t]) === null || void 0 === i ? void 0 : i.length) > 0 }); return !1 === i }, rowOptions () { return [{ text: this.$t('delete'), icon: 'delete_outline' }, { text: this.$t('duplicate'), icon: 'control_point_duplicate' }] } }, methods: { rowOptionsClicked (e) { switch (e) { case 0:this.$emit('remove'); break; case 1:this.$emit('duplicate'); break; default: } } } }; const f = p; const h = (i('7a2a'), i('2877')); const w = Object(h.a)(f, u, c, !1, null, 'c79d5056', null); const v = w.exports; const m = i('8dee'); const y = i.n(m); const b = i('2ef0'); function g (e, t) { const i = Object.keys(e); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(e); t && (n = n.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), i.push.apply(i, n) } return i } function O (e) { for (let t = 1; t < arguments.length; t++) { var i = arguments[t] != null ? arguments[t] : {}; t % 2 ? g(Object(i), !0).forEach(function (t) { Object(l.a)(e, t, i[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : g(Object(i)).forEach(function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t)) }) } return e } const j = { name: 'Repeater', components: { RepeaterRow: v }, mixins: [s.a], data () { return { rows: [], dragging: !1, open: null } }, computed: { inline () { return !(this.repeaterFields.length > 2) && (this.repeaterFields.length === 1 || !1 !== ['full', 'fill'].includes(this.width) && this.repeaterFields.every(function (e) { return e.width === 'half' })) }, addButtonVisible () { return !this.options.limit || this.options.limit === 0 || this.rows.length < this.options.limit }, repeaterFields () { const e = this; return Array.isArray(this.options.fields) ? this.options.fields : Object.keys(this.options.fields).map(function (t) { return O({}, e.options.fields[t], { field: t }) }) } }, created () { this.setRows() }, methods: { addRow () { this.rows = [].concat(Object(o.a)(this.rows), [this.getNewRow()]), this.open = this.rows.length - 1, this.emitValue() }, updateRow (e, t) { const i = t.field; const n = t.value; const r = Object(b.clone)(this.rows); const o = r[e]; const a = O({}, o, Object(l.a)({}, i, n)); r[e] = a, this.rows = r, this.emitValue() }, removeRow (e) { const t = Object(b.clone)(this.rows); t.splice(e, 1), this.rows = t, this.emitValue() }, duplicateRow (e) { const t = Object(b.clone)(this.rows); const i = Object(b.clone)(this.rows[e]); t.splice(e + 1, 0, i), this.rows = t, this.emitValue() }, emitValue () { const e = Object(b.clone)(this.rows).map(function (e) { return delete e.__key, e }); if (e.length === 0) { return this.$emit('input', null) } this.options.structure === 'object' ? this.$emit('input', Object(b.keyBy)(e, this.options.structure_key)) : this.$emit('input', e) }, getNewRow () { const e = { __key: y.a.generate(), newItem: !0 }; return this.repeaterFields.forEach(function (t) { e[t.field] = t.default }), e }, setRows () { if (this.value !== null) { if (Array.isArray(this.value)) { this.rows = this.value } else if (typeof this.value === 'string') { try { this.rows = JSON.parse(this.value) } catch (e) { console.warn('Invalid JSON passed to repeater') } } else { this.rows = Object.values(this.value) } } else { this.rows = [] } }, endDrag () { this.dragging = !1, this.emitValue() }, toggleOpen (e) { this.open === e ? this.open = null : this.open = e } } }; const _ = j; const k = (i('8bfe'), Object(h.a)(_, n, r, !1, null, '518346e1', null)); t.default = k.exports }, '7a2a' (e, t, i) { 'use strict'; const n = i('843a'); const r = i.n(n); r.a }, '7ce02' (e, t, i) {}, '843a' (e, t, i) {}, '8bfe' (e, t, i) { 'use strict'; const n = i('7ce02'); const r = i.n(n); r.a }, '8db2' (e, t) { e.exports = { props: { id: { type: String, required: !0 }, name: { type: String, required: !0 }, value: { type: null, default: null }, type: { type: String, required: !0 }, length: { type: [String, Number], default: null }, readonly: { type: Boolean, default: !1 }, collection: { type: String, default: null }, primaryKey: { type: [Number, String], default: null }, required: { type: Boolean, default: !1 }, options: { type: Object, default: () => ({}) }, newItem: { type: Boolean, default: !1 }, relation: { type: Object, default: null }, fields: { type: Object, default: null }, values: { type: Object, default: null }, width: { type: String, default: null, validator (e) { return ['half', 'half-left', 'half-right', 'full', 'fill'].includes(e) } } } } }, a623 (e, t, i) { 'use strict'; const n = i('23e7'); const r = i('b727').every; const o = i('a640'); const l = i('ae40'); const a = o('every'); const s = l('every'); n({ target: 'Array', proto: !0, forced: !a || !s }, { every (e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) } }])
// # sourceMappingURL=chunk-264bd833.ea8d576d.js.map