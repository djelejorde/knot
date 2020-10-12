<template>
  <div class="flex-col text-center py-10">
    <h1 class="w-full font-scriptina text-navy text-6xl mb-8">
      RSVP
    </h1>

    <div class="flex flex-wrap w-full">
      <div class="w-full md:w-1/2 py-5 sm:pr-5 md:border-r border-opacity-25 border-navy">
        <h3 class="font-cinzel text-navy font-bold text-md lg:text-lg xl:text-xl">
          WE'RE LOOKING FORWARD TO HAVE YOU
        </h3>
        <span class="text-navy font-body text-xs xl:text-sm">we appreciate your response on or before october 17, 2020</span>

        <form class="rsvp-form lg:px-8 xl:px-10" @submit="submit">
          <TextInput
            id="rsvp_code"
            class="my-7"
            :name="'rsvp_code'"
            :placeholder="'rsvp code'"
          />

          <div class="hidden">
            <TextInput
              id="email"
              class="my-7"
              :type="'email'"
              :name="'email'"
              :placeholder="'email'"
            />

            <TextInput
              id="mobile_number"
              class="my-7"
              :name="'mobile_number'"
              :placeholder="'mobile number'"
            />

            <TextArea
              id="allergies"
              class="my-7"
              :name="'allergies'"
              :placeholder="'allergies, if any'"
            />

            <Dropdown
              id="rice"
              class="my-7"
              :name="'rice'"
              :placeholder="'preferred type of rice'"
              :options="['Steam', 'Seafood Paella']"
            />

            <Button>GOING!</Button>
          </div>
        </form>
      </div>

      <div class="w-full md:w-1/2 mt-10 md:mt-0 pt-5 text-navy sm:pl-5">
        <div class="font-cinzel tracking-distanced md:text-sm lg:text-md xl:text-xl">
          <span class="hidden sm:inline md:hidden xl:inline">NOVEMBER</span>
          <span class="inline sm:hidden lg:inline xl:hidden">NOV</span> <span class="inline md:hidden lg:inline">12, 2020</span>
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
  name: 'RsvpSection',
  methods: {
    validateForm () {
      const fields = ['rsvp_code', 'email', 'mobile_number', 'allergies', 'rice']

      for (const x in fields) {
        const field = document.querySelector('#' + fields[x] + ' input')

        if (field.value === '' || field.value === null || field.value === undefined) {
          this.hasErrors.push(fields[x])
        }
      }

      if (this.hasErrors.length) {
        window.scrollTo(0, this.$el.offsetTop)

        alert('Paumanhin ngunit hindi nailista ang iyong pangalan. May kaunting suliranin sa iyong mga sagot.')

        return false
      }

      return true
    },
    sanitize (string) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
      }
      const reg = /[&<>"'/]/ig

      return string.replace(reg, match => (map[match]))
    },
    submitForm () {
      const valid = this.validateForm()

      if (valid) {
        const form = {
          name: this.sanitize(this.$el.querySelector('#full_name input').value),
          chapter: this.sanitize(this.$el.querySelector('#chapter input').value),
          email: this.sanitize(this.$el.querySelector('#email input').value),
          status: 'published'
        }

        this.postCollectionData('/participants', form)
          .then((response) => {
            if (response.status === 200) {
              this.resetForm()
              alert('Ang iyong pangalan ay nailista nang matagumpay!')
            } else {
              alert('Paumanhin ngunit hindi nailista ang iyong pangalan. May kaunting suliranin lamang sa aming panig. Subukan muli pagkaraan ng ilang minuto.')
            }
          })
      }
    },
    resetForm () {
      this.$el.querySelector('#full_name input').value = ''
      this.$el.querySelector('#chapter input').value = ''
      this.$el.querySelector('#email input').value = ''
    }
  }
}
</script>
