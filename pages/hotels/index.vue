<template>
  <Layout :footer="false">
    <template v-slot:page-content>
      <HousingPage :key="pageType" :info="components" :type="pageType" />
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
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_HOTELS_ROOT } from '~/config/constants'
import HousingPage from '~/components/Housing/Page/HousingPage'

export default {
  name: 'Hotels',
  components: {
    HousingPage
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const { components } = await getAsyncData(context, API_ROUTES_HOTELS_ROOT + '/')
      return { components }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  data() {
    return {
      components: [],
      pageType: 'hotels',
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
