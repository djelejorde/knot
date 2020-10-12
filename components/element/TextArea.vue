<template>
  <div>
    <div class="border" :class="{ 'border-red' : error, 'border-navy' : !error }">
      <textarea
        rows="3"
        class="border-0 py-3 px-4 w-full font-cinzel"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        @keyup="error = false"
        @change="error = false"
      />
    </div>
    <div v-if="error" class="text-sm text-red mt-1 font-cinzel">
      This field is required.
    </div>
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
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      error: false
    }
  },
  watch: {
    hasError (val) {
      this.error = val
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
