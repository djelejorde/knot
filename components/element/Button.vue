<template>
  <div>
    <button class="bg-navy text-gray-100 cursor-pointer hover:text-white px-5 py-3 font-cinzel">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {

  }
}
</script>
