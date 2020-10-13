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
        <span class="text-navy font-body text-xs xl:text-sm">we appreciate your response on or before october 26, 2020</span>

        <div class="rsvp-form lg:px-8 xl:px-10">
          <loading
            :active.sync="isLoading"
            :can-cancel="false"
            :is-full-page="true"
          />
          <transition name="slide-up">
            <TextInput
              v-if="!hideRsvp"
              id="rsvp_code"
              class="my-7"
              :name="'rsvp_code'"
              :placeholder="'rsvp code'"
              @onType="checkCode"
            />
          </transition>

          <div>
            <div
              v-if="searched && !rsvp"
              class="!text-red text-xs font-body"
            >
              Sorry, your code is invalid.
            </div>

            <transition name="slide-down">
              <div
                v-if="searched && rsvp"
                class="text-navy text-xs font-body mt-5"
              >
                Hello, <br>
                <span class="font-scriptina text-3xl font-bold">{{ rsvp.full_name || 'Name' }} !</span>
                <br>
                <br>
                <span v-show="!submitted && !success">Please fill up the following to confirm your presence:</span>
              </div>
            </transition>
          </div>

          <div
            v-show="searched && rsvp && !success"
          >
            <TextInput
              id="email"
              class="my-7"
              :type="'email'"
              :name="'email'"
              :placeholder="'email'"
              :has-error="hasErrors.includes('email')"
            />

            <TextInput
              id="mobile_number"
              class="my-7"
              :name="'mobile_number'"
              :placeholder="'mobile number'"
              :has-error="hasErrors.includes('mobile_number')"
            />

            <Dropdown
              id="rice"
              class="my-7"
              :name="'rice'"
              :placeholder="'preferred type of rice'"
              :options="['Steam', 'Seafood Paella']"
              :has-error="hasErrors.includes('rice')"
            />

            <TextArea
              id="allergies"
              class="my-7"
              :name="'allergies'"
              :placeholder="'allergies, if any'"
            />

            <Button @click="submitForm">
              GOING!
            </Button>
          </div>

          <div
            v-if="success"
            class="font-cinzel text-navy mt-8"
          >
            Yay! Your table has been reserved.
            <br>
            No need to bring packed lunch.
            <br>
            See you!
          </div>
          <div
            v-else-if="submitted && !success && !isLoading"
            class="font-cinzel text-red"
          >
            Something has happened. Please try again.
          </div>
        </div>
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
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import Button from '@/components/element/Button.vue'
import Dropdown from '@/components/element/Dropdown.vue'
import TextArea from '@/components/element/TextArea.vue'
import TextInput from '@/components/element/TextInput.vue'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'RsvpSection',
  components: {
    Loading,
    Button,
    Dropdown,
    TextArea,
    TextInput
  },
  data () {
    return {
      code: '',
      personId: 0,
      rsvp: {},
      searched: false,
      hideRsvp: false,
      hasErrors: [],
      isLoading: false,
      submitted: false,
      success: false
    }
  },
  methods: {
    checkCode (code) {
      if (code && code.length === 4) {
        this.fetchCollectionData('/rsvp?fields=id,full_name&single=1&&filter[is_used][neq]=1&filter[code]=' + code)
          .then((response) => {
            if (response.data && Object.keys(response.data.data).length) {
              this.code = code
              this.rsvp = response.data.data
              this.personId = this.rsvp.id
              this.searched = true
              this.hideRsvp = true
            }
          })
      }
    },
    validateForm () {
      const fields = ['email', 'mobile_number', 'rice']

      for (const x in fields) {
        const field = document.querySelectorAll('#' + fields[x] + ' input, #' + fields[x] + ' select')[0]

        if (field.value === '' || field.value === null || field.value === undefined) {
          this.$set(this.hasErrors, x, fields[x])
        } else {
          this.hasErrors = this.hasErrors.filter(i => fields[x])
        }
      }

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

      if (valid && this.personId) {
        this.isLoading = true
        this.submitted = true

        const form = {
          full_name: this.rsvp.full_name,
          rsvp_code: this.code,
          email: this.sanitize(this.$el.querySelector('#email input').value),
          mobile_number: this.sanitize(this.$el.querySelector('#mobile_number input').value),
          rice: this.sanitize(this.$el.querySelector('#rice select').value),
          allergies: this.sanitize(this.$el.querySelector('#allergies textarea').value),
          status: 'published'
        }

        const self = this

        self.postCollectionData('/guests', form)
          .then((response) => {
            if (response.status === 200) {
              self.patchCollectionData('/rsvp/' + self.personId, { is_used: 1 })
                .then(() => {
                  self.isLoading = false
                  self.success = true
                })
            } else {
              // aler?t('Paumanhin ngunit hindi nailista ang iyong pangalan. May kaunting suliranin lamang sa aming panig. Subukan muli pagkaraan ng ilang minuto.')
            }
          })
      }
    }
  }
}
</script>

<style scoped>
.slide-down-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-down-enter-to {
   max-height: 100px;
   overflow: hidden;
}

.slide-down-enter {
   overflow: hidden;
   max-height: 0;
}

.slide-up-enter-active {
   -moz-transition-duration: 2s;
   -webkit-transition-duration: 2s;
   -o-transition-duration: 2s;
   transition-duration: 2s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-up-enter-to {
   max-height: 0;
   overflow: hidden;
}

.slide-up-enter {
   overflow: hidden;
   max-height: 100px;
}
</style>
