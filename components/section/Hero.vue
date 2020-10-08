<template>
  <main>
    <article>
      <header class="parallax">
        <div class="image-wrapper">
          <div class="text-wrapper absolute text-center">
            <h1 class="block leading-none p-4 text-navy whitespace-no-wrap font-scriptina text-3xl title md:p-8 md:text-7xl">
              Denver John  &nbsp;&nbsp;&amp;&nbsp;  Fatima Louise
            </h1>
            <h3 class="block font-cinzel text-navy tracking-distanced mt-6">
              NOVEMBER 12, 2020
            </h3>
          </div>

          <img :src="require('@/static/hero.jpg')" width="100%">
        </div>
      </header>
    </article>
  </main>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style>
@media only screen and (min-width : 768px) {
  /* .parallax-container {
    perspective: 1px;
    transform-style: preserve-3d;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
  } */

  /* .parallax {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    height: 100vh;
    transform: translateZ(-1px) scale(2);
    z-index: -1;
  } */

  .image-wrapper {
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .image-wrapper img {
    height: auto;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: auto;
  }

  .text-wrapper {
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
}
</style>
