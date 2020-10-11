<template>
  <main class="relative z-30">
    <div class="image-wrapper md:h-screen">
      <div class="text-wrapper absolute text-center">
        <h1 class="block leading-none p-4 text-navy whitespace-no-wrap font-scriptina text-4xl md:text-5xl lg:text-6xl title md:p-8 xl:text-7xl">
          Denver John  &nbsp;&nbsp;&amp;&nbsp;  Fatima Louise
        </h1>
        <h3 class="block font-cinzel text-navy tracking-distanced mt-3 xl:mt-6 text-xs md:text-base">
          NOVEMBER 12, 2020
        </h3>
      </div>

      <parallax :sectionClass="'parallax'" :breakpoint="'(min-width: 768px)'" :section-height="sectionHeight">
        <img :src="require('@/static/hero.jpg')" width="100%">
      </parallax>
    </div>
  </main>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'HeroSection',
  components: { Parallax },
  data () {
    return {
      sectionHeight: 100
    }
  },
  mounted () {
    // if (window.screen.width < 768) {
    //   this.sectionHeight = 70
    // }
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  .parallax .is-parallax {
    position: initial !important;
    /* height: auto !important; */
  }
}

.text-wrapper {
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
</style>
