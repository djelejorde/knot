<template>
  <div>
    <div class="relative border px-4" :class="{ 'border-red' : error, 'border-navy' : !error }">
      <select
        class="border-0 py-3 w-full font-cinzel bg-white"
        :name="name"
        :required="required"
        @change="error = false"
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
    <div v-if="error" class="text-sm text-red mt-1 font-cinzel">
      This field is required.
    </div>
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
select {
  outline: none;
}
</style>
