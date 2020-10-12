<template>
  <div class="border border-navy">
    <textarea
      rows="3"
      class="border-0 py-3 px-4 w-full font-cinzel"
      :name="name"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
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
textarea {
  resize: none;
  outline: none;
}
</style>
