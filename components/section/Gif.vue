<template>
  <div>
    <div class="w-full sm:w-5/6 xl:w-3/5 sm:px-8 my-6 sm:my-10">
      <img :src="source" width="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GifSection',
  props: {
    source: {
      type: String,
      default: ''
    }
  }
}
</script>
