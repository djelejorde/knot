<template>
  <div class="flex-col text-center py-6 sm:py-10">
    <div class="flex flex-wrap w-full">
      <div class="w-full mt-10 pt-5 text-navy">
        <div class="font-cinzel tracking-distanced md:text-sm lg:text-md xl:text-xl">
          <span class="hidden sm:inline md:hidden xl:inline">NOVEMBER</span>
          <span class="inline sm:hidden lg:inline xl:hidden">NOV</span> <span class="inline md:hidden lg:inline">12, 2020</span>
          <span class="hidden md:inline lg:hidden">11•12•2020</span>
          <br>
          THURSDAY, 2PM
        </div>

        <div class="mt-10">
          <div class="text-navy font-cinzel text-md lg:text-lg xl:text-xl font-bold mb-5">
            ceremony
          </div>
          <div class="font-scriptina text-3xl">
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
          <div class="font-scriptina text-3xl">
            Blue Moon Los Ilustrados
          </div>
          <div class="lg:text-xs xl:text-sm font-body mt-6">
            silang, cavite
          </div>
        </div>
      </div>

      <div id="gifts" class="w-full mt-10 pt-5 text-navy">
        <h2 class="font-scriptina text-navy text-5xl my-8">
          A Note on Gifts
        </h2>

        <div class="mt-10 font-body">
          <p v-show="!submitted" class="mb-5">
            to save you from looking, shopping and buying, <br>
            here’s an idea we like you trying! <br>
            a wishing well we thought would be great, <br>
            but only if you wish to participate. <br>
          </p>

          <div v-show="!submitted" class="mx-auto max-w-11">
            <loading
              :active.sync="isLoading"
              :can-cancel="false"
              :is-full-page="true"
            />

            <TextInput
              id="name"
              class="my-7"
              :name="'name'"
              :placeholder="'name'"
              :has-error="hasErrors.includes('name')"
            />

            <TextArea
              id="message"
              class="my-7"
              :name="'message'"
              :rows="8"
              :placeholder="'write your message here'"
              :has-error="hasErrors.includes('message')"
            />

            <Button
              @click="submitForm"
            >
              MAKE A WISH!
            </Button>
          </div>

          <div
            v-if="success"
            class="font-cinzel text-navy mt-8"
          >
            now your wish is in the well,
            <br>
            toss a coin, we'll never tell.
            <br>
            thank you!
            <br><br>
            <b>GCASH:</b> 0917-889-4536 / 0977-822-5864 <br>
            <b>BPI:</b> Fatima Louise Rance - 8929125968 <br>
            <b>BDO:</b> Denver John Elejorde - 004850262727
          </div>
          <div
            v-else-if="submitted && !success && !isLoading"
            class="font-cinzel text-red"
          >
            Something has happened. Please try again.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import Button from '@/components/element/Button.vue'
import TextArea from '@/components/element/TextArea.vue'
import TextInput from '@/components/element/TextInput.vue'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'RsvpSection',
  components: {
    Loading,
    Button,
    TextArea,
    TextInput
  },
  data () {
    return {
      name: '',
      message: '',
      hasErrors: [],
      isLoading: false,
      submitted: false,
      success: false
    }
  },
  methods: {
    validateForm () {
      const fields = ['name', 'message']

      for (const x in fields) {
        const field = document.querySelectorAll('#' + fields[x] + ' input, #' + fields[x] + ' textarea')[0]

        if (field.value === '' || field.value === null || field.value === undefined) {
          this.$set(this.hasErrors, x, fields[x])
        } else {
          this.hasErrors = this.hasErrors.filter(i => fields[x])
        }
      }

      this.name = document.querySelector('#name input').value
      this.message = document.querySelector('#message textarea').value

      if (this.hasErrors.length) {
        window.scrollTo(0, this.$el.offsetTop)

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
        this.isLoading = true
        this.submitted = true

        const form = {
          name: this.name,
          message: this.message,
          status: 'published'
        }

        const self = this

        self.postCollectionData('/gifts', form)
          .then((response) => {
            self.isLoading = false

            if (response.status === 200) {
              self.success = true
            } else {
              self.success = false
            }

            window.scrollTo(0, document.querySelector('#gifts').offsetTop)
          })
      }
    }
  }
}
</script>
