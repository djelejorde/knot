<template>
  <div class="w-full">
    <div id="logo" class="z-50 fixed inset-0 bg-white hidden">
      <Logo class="w-64 fade-out" />
    </div>
    <div class="main z-40 relative">
      <Hero />
      <Header />
      <Us id="us" />
      <Monogram />
      <Gif class="container content" :source="require('@/static/meet_optimized.gif')" />
      <Rsvp id="rsvp" class="container content md:h-screen" />
      <Details class="container content" />
      <Gif class="container content" :source="require('@/static/hdnl.gif')" />
      <Monogram />
      <Footer />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/page/Logo.vue'
import Header from '@/components/page/Header.vue'
import Footer from '@/components/page/Footer.vue'
import Hero from '@/components/section/Hero.vue'
import Us from '@/components/section/Us.vue'
import Monogram from '@/components/section/Monogram.vue'
import Gif from '@/components/section/Gif.vue'
import Details from '@/components/section/Details.vue'
import Rsvp from '@/components/section/Rsvp.vue'

export default {
  name: 'HomePage',
  components: {
    Logo,
    Header,
    Footer,
    Hero,
    Us,
    Monogram,
    Gif,
    Details,
    Rsvp
  }
}
</script>

<style scoped>
.container.full {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container.content {
  @apply w-10/12;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
