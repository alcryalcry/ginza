<template>
  <Layout show-travelline>
    <template v-slot:page-content>
      <HousingSubheader :need-menu="false" />
      <component
        :is="item"
        v-for="(item, index) in generatedComps"
        :key="index"
        :data="components[index]"
      />
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
import { API_ROUTES_SERVICES_ROOT } from '~/config/constants'
import HousingSubheader from '~/components/Housing/Subheader/HousingSubheader'

export default {
  name: 'Services',
  components: {
    HousingSubheader
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context, API_ROUTES_SERVICES_ROOT + '/' + context.store.state.locale + '/')
      return {
        components: components.components,
        page: components,
        mode: components.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  data() {
    return {
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
      const components = await this.$options.asyncData(this.$root.$options.context)
      this.components = components.components
      this.page = components
      this.mode = components.mode || ''
    }
  }
}
</script>
