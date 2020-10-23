<template>
  <Layout :footer="false" show-travelline>
    <template v-slot:page-content>
      <HousingPage :info="components" />
    </template>
    <template v-slot:popup>
      <Popup>
        <PopupVideo />
        <PopupBooking />
        <PopupManager />
        <PopupTravelLine />
      </Popup>
    </template>
  </Layout>
</template>

<script>
import page from '~/mixins/page'
import getAsyncData, { getWithParams } from '~/plugins/getAsyncData'
import { API_ROUTES_APARTMENTS_ROOT } from '~/config/constants'
import HousingPage from '~/components/Housing/Page/HousingPage'

export default {
  name: 'Apartments',
  components: {
    HousingPage
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const { components } = await getAsyncData(context, API_ROUTES_APARTMENTS_ROOT + '/')
      return { components }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  data() {
    return {
      components: [],
      storeListener: null
    }
  },
  mounted() {
    this.storeListener = this.$store.subscribe((mutation) => {
      if (mutation.type === 'localStorage/SET_CURRENT_CITY') {
        this.updatePageData()
      }
    })
  },
  destroyed() {
    this.storeListener()
  },
  methods: {
    async updatePageData() {
      const { components } = await this.$options.asyncData(this.$root.$options.context)
      this.components = components
    }
  }
}
</script>
