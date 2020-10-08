<template>
  <div>
    <div class="w-3/5 px-8 my-10">
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
