import Vue from 'vue'

Vue.mixin({
  methods: {
    async fetchCollectionData (url) {
      const apiUrl = 'https://api.denverandfatima.co/v1/items'

      return await this.$axios.get(apiUrl + url)
    },
    async postCollectionData (url, params) {
      const apiUrl = 'https://api.denverandfatima.co/v1/items'

      return await this.$axios.post(apiUrl + url, params)
    },
    async patchCollectionData (url, params) {
      const apiUrl = 'https://api.denverandfatima.co/v1/items'

      return await this.$axios.$patch(apiUrl + url, params)
    }
  }
})
