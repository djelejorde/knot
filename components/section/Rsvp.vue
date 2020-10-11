<template>
  <div class="flex-col text-center py-10">
    <h1 class="w-full font-scriptina text-navy text-6xl mb-8">
      RSVP
    </h1>

    <div class="flex flex-wrap w-full">
      <div class="w-full md:w-1/2 py-5 pr-5 md:border-r border-opacity-25 border-navy">
        <h3 class="font-cinzel text-navy font-bold text-md lg:text-lg xl:text-xl">
          WE'RE LOOKING FORWARD TO HAVE YOU
        </h3>
        <span class="text-navy font-body text-xs xl:text-sm">we appreciate your response on or before october 17, 2020</span>

        <div class="rsvp-form lg:px-8 xl:px-10">
          <form>
            <TextInput class="my-7" :name="'rsvp_code'" :placeholder="'rsvp code'" />

            <TextInput class="my-7" :name="'email'" :placeholder="'email'" />

            <TextInput class="my-7" :name="'mobile_number'" :placeholder="'mobile number'" />

            <TextArea class="my-7" :name="'allergies'" :placeholder="'allergies, if any'" />

            <Dropdown class="my-7" :name="'rice'" :placeholder="'preferred type of rice'" :options="['steam', 'seafood paella']" />

            <Button>GOING!</Button>
          </form>
        </div>
      </div>

      <div class="w-full md:w-1/2 mt-10 md:mt-0 pt-5 text-navy pl-5">
        <div class="font-cinzel tracking-distanced md:text-sm lg:text-md xl:text-xl">
          <span class="inline md:hidden xl:inline">NOVEMBER</span>
          <span class="hidden lg:inline xl:hidden">NOV</span> <span class="inline md:hidden lg:inline">12, 2020</span>
          <span class="hidden md:inline lg:hidden">11•12•2020</span>
          <br>
          THURSDAY
        </div>

        <div class="mt-10">
          <div class="text-navy font-cinzel text-md lg:text-lg xl:text-xl font-bold mb-5">
            ceremony
          </div>
          <div class="font-scriptina font-bold text-3xl">
            Saint Benedict Parish
          </div>
          <div class="lg:text-xs xl:text-sm font-body mt-6">
            ayala westgrove heights, silang, cavite
          </div>
        </div>

        <div class="mt-10">
          <div class="text-navy font-cinzel text-md lg:text-lg xl:text-xl font-bold mb-5">
            reception
          </div>
          <div class="font-scriptina font-bold text-3xl">
            Blue Moon Los Ilustrados
          </div>
          <div class="lg:text-xs xl:text-sm font-body mt-6">
            silang, cavite
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RsvpSection'
}
</script>
