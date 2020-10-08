<template>
  <div class="flex-col text-center">
    <h1 class="w-full font-scriptina text-navy text-6xl mb-10">
      RSVP
    </h1>

    <div class="flex flex-wrap w-full">
      <div class="w-1/2 py-5 pr-5 border-r border-opacity-25 border-navy">
        <h3 class="font-cinzel text-navy font-bold text-xl">
          WE'RE LOOKING FORWARD TO HAVE YOU
        </h3>
        <span class="text-navy font-body text-sm">we appreciate your response on or before october 17, 2020</span>

        <div class="rsvp-form px-10">
          <form>
            <TextInput class="my-7" :name="'full_name'" :placeholder="'full name'" />

            <TextInput class="my-7" :name="'email'" :placeholder="'email'" />

            <TextInput class="my-7" :name="'mobile_number'" :placeholder="'mobile number'" />

            <TextInput class="my-7" :name="'rsvp_code'" :placeholder="'rsvp code'" />

            <Button>GOING!</Button>
          </form>
        </div>
      </div>

      <div class="w-1/2 pt-5 text-navy pl-5">
        <div class="font-cinzel tracking-distanced text-xl">
          NOVEMBER 12, 2020
          <br>
          THURSDAY
        </div>

        <div class="mt-10">
          <div class="text-navy font-cinzel text-xl font-bold mb-5">
            ceremony
          </div>
          <div class="font-scriptina font-bold text-3xl">
            Saint Benedict Parish
          </div>
          <div class="text-sm font-body mt-6">
            ayala westgrove heights, silang, cavite
          </div>
        </div>

        <div class="mt-10">
          <div class="text-navy font-cinzel text-xl font-bold mb-5">
            reception
          </div>
          <div class="font-scriptina font-bold text-3xl">
            Saint Benedict Parish
          </div>
          <div class="text-sm font-body mt-6">
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
