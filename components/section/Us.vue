<template>
  <div class="relative bg-white z-40 flex flex-wrap py-10">
    <div
      class="block w-full font-scriptina text-navy text-4xl xs:text-5xl mb-7 text-navy text-center"
    >
      Bride &nbsp;&amp; Groom
    </div>

    <div class="block w-full mt-7">
      <div class="flex md:flex-row-reverse flex-wrap w-10/12 mx-auto">
        <div class="text-left font-body w-full md:w-1/4 md:ml-4 flex flex-wrap flex-col-reverse sm:flex-col">
          <div class="md:w-full md:hidden sm:flex-1 mb-5 sm:mb-0 relative">
            <img class="z-40 block casual" :src="require('@/static/casual_fade.jpg')" width="100%">
          </div>
          <div class="w-full sm:w-1/2 pb-5 sm:pb-0 sm:pl-4 md:pl-0 md:w-full">
            <div class="md:w-full w-1/4 text-navy font-bold md:text-xl lg:text-2xl">
              HIM
            </div>
            <div class="text-gray-100 text-xs lg:text-sm leading-tight">
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
        <div class="hidden md:block flex-1 self-center relative cursor-pointer hover-photo">
          <img class="z-40 block casual" :src="require('@/static/casual_fade.jpg')" width="100%">
          <img class="wacky hidden" :src="require('@/static/wacky_fade.jpg')" width="100%">
        </div>
        <div class="text-right font-body md:w-1/4 md:mr-4 flex flex-wrap">
          <div class="w-full sm:w-1/2 pb-5 sm:pb-0 sm:pr-4 md:pr-0 md:w-full mt-2 md:mt-0">
            <div class="text-navy font-bold md:text-xl lg:text-2xl">
              HER
            </div>
            <div class="text-gray-100 text-xs lg:text-sm leading-tight">
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

          <div class="md:w-full sm:flex-1 relative">
            <img class="z-40 block casual" :src="require('@/static/wacky_fade.jpg')" width="100%">
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
