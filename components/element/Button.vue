<template>
  <button class="bg-navy text-white cursor-pointer hover:text-gray-100 px-5 py-3 font-cinzel" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    click () {
      this.$emit('click', true)
    }
  }
}
</script>
