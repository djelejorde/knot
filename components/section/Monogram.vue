<template>
  <div class="h-64 my-10">
    <div class="h-full" data-aos="fade-up" data-aos-once="true">
      <Logo />
    </div>
  </div>
</template>

<script>
import AOS from 'aos'

export default {
  name: 'MonogramSection',
  mounted () {
    AOS.init()
  }
}
</script>
