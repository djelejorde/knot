<template>
  <div class="flex flex-wrap my-10">
    <div
      class="block w-full font-scriptina text-navy text-5xl mb-7 text-navy text-center"
    >
      Bride &nbsp;&amp; Groom
    </div>

    <div class="block w-full mt-7">
      <div class="flex flex-wrap w-10/12 mx-auto">
        <div class="text-right font-body w-1/4 mr-4">
          <div class="text-navy font-bold text-2xl">
            HER
          </div>
          <div class="text-gray-100 text-sm leading-tight">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
        <div class="flex-1 relative cursor-pointer hover-photo">
          <img class="z-40 block casual" :src="require('@/static/casual_fade.jpg')" width="100%">
          <img class="wacky hidden" :src="require('@/static/wacky_fade.jpg')" width="100%">
        </div>
        <div class="text-left font-body w-1/4 ml-4">
          <div class="text-navy font-bold text-2xl">
            HIM
          </div>
          <div class="text-gray-100 text-sm leading-tight">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsSection'
}
</script>

<style scoped>
.hover-photo:hover .casual {
  @apply hidden;
}

.hover-photo:hover .wacky {
  @apply block;
}
</style>
