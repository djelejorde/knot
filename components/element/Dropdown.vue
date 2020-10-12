<template>
  <div class="relative border border-navy px-4">
    <select
      class="border-0 py-3 w-full font-cinzel bg-white"
      :name="name"
      :required="required"
    >
      <option class="!text-gray-100 opacity-25">
        {{ placeholder }}
      </option>
      <option
        v-for="(option, key) in options"
        :key="key"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
select {
  outline: none;
}
</style>
