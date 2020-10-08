import Vue from 'vue'

Vue.mixin({
  methods: {
    async fetchCollectionData (url) {
      const apiUrl = 'http://api.denverandfatima.co/knot/items'

      return await this.$axios.get(apiUrl + url)
    },
    async postCollectionData (url, params) {
      const apiUrl = 'http://api.denverandfatima.co/knot/items'

      return await this.$axios.post(apiUrl + url, params)
    }
  }
})
