<template>
  <div>
    <button class="bg-navy text-white cursor-pointer hover:text-gray-100 px-5 py-3 font-cinzel">
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
