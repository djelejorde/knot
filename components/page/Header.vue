<template>
  <header class="relative bg-white w-100 z-50 shadow">
    <ul class="nav font-cinzel text-navy flex flex-wrap text-center justify-center items-center font-medium">
      <nuxt-link class="nav-item relative" :to="{ path: '/',hash:'#us'}">
        <li class="py-5 px-7">
          US
        </li>
      </nuxt-link>
      <nuxt-link class="nav-item relative" :to="{ path: '/',hash:'#rsvp'}">
        <li class="py-5 px-7">
          RSVP
        </li>
      </nuxt-link>
      <nuxt-link class="nav-item relative" :to="{ path: '/',hash:'#attire'}">
        <li class="py-5 px-7">
          ATTIRE
        </li>
      </nuxt-link>
      <nuxt-link class="nav-item relative" :to="{ path: '/',hash:'#map'}">
        <li class="py-5 px-7">
          MAP
        </li>
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.shadow {
  -webkit-box-shadow: 0px 4px 8px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 8px -6px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 8px -6px rgba(0,0,0,0.75);
}

.nav .nav-item::after {
  content: '';
  position: absolute;
  left: calc(50% - 7.5px);
  bottom: 12px;
  width: 15px;
  height: 3px;
  background: theme('colors.navy');
  opacity: 0;
  transform: translateY(15px);
  transition: all 200ms ease-in-out 200ms;
}

.nav .nav-item {
  transition: all 200ms ease-in-out 200ms;
}

.nav .nav-item:hover {
  background: theme('colors.gray.200');
}

.nav .nav-item:hover:after {
  opacity: 1;
  transform: translateY(0);
}
</style>
