<template>
  <div>
    <div class="border" :class="{ 'border-red' : error, 'border-navy' : !error }">
      <input
        v-model="value"
        class="border-0 py-3 px-4 w-full font-cinzel"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        @keyup="onType"
        @change="error = false"
      >
    </div>
    <div v-if="error" class="text-sm text-red mt-1 font-cinzel">
      This field is required.
    </div>
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
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: null,
      error: false
    }
  },
  watch: {
    hasError (val) {
      this.error = val
    }
  },
  methods: {
    onType () {
      this.error = false
      this.$emit('onType', this.value)
    }
  }
}
</script>

<style scoped>
input {
  outline: none;
}
</style>
