<template>
  <div class="border border-navy">
    <input
      class="border-0 py-3 px-4 w-full font-cinzel"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
    >
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'text'
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
input {
  outline: none;
}
</style>
