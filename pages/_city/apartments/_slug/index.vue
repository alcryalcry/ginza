<template>
  <Layout>
    <template v-slot:page-content>
      <FixedActions :info="fixedData" />
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
import { API_ROUTES_APARTMENTS_ROOT } from '~/config/constants'
import FixedActions from '~/components/FixedActions/FixedActions'

export default {
  name: 'ApartmentsOne',
  components: {
    FixedActions
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context,
        context.route.params.city + '/' +
        API_ROUTES_APARTMENTS_ROOT + '/' +
        context.route.params.slug + '/' +
        context.store.state.locale
      )
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
      fixedData: {
        ...this.$t('fixedActions.travelline')
      }
    }
  }
}
</script>
