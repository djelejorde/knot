<template>
  <div class="flex-col">
    <div class="w-full text-center my-10">
      <h2 class="font-scriptina text-navy text-5xl mb-8">
        Attire
      </h2>
      <div class="font-body">
        barong tagalog or formal attire would be very much appreciated
        <br>
        ladies, you may have to walk on grass at times
        <br>
        block heels are encouraged
      </div>

      <div class="flex flex-wrap w-full justify-center items-center my-6">
        <div class="bg-navy border border-opacity-25 shadow-lg border-gray-100 mx-4 w-8 h-8 rounded-full" />
        <div class="bg-gray-100 border border-opacity-25 shadow-lg border-gray-100 mx-4 w-8 h-8 rounded-full" />
        <div class="bg-white border border-opacity-25 shadow-lg border-gray-100 mx-4 w-8 h-8 rounded-full" />
      </div>

      <div class="font-body">
        for your own safety, we strictly encourage everyone
        <br>
        to please wear face mask and face shield
      </div>
    </div>

    <div class="w-full text-center my-10">
      <h2 class="font-scriptina text-navy text-5xl mb-8">
        Map Guide
      </h2>

      <div class="w-2/3 mx-auto">
        <img :src="require('@/static/map.png')" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsSection'
}
</script>
