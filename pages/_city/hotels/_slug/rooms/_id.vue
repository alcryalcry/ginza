<template>
  <Layout show-travelline :travel-line-id="travelLineId">
    <template v-slot:page-content>
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
import { API_ROUTES_HOTELS_ROOT } from '~/config/constants'

export default {
  name: 'HotelsOneRoom',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {},
        tl_id: travelLineId
      } = await getAsyncData(context,
        context.route.params.city + '/' +
        API_ROUTES_HOTELS_ROOT + '/' +
        context.route.params.slug + '/' +
        'rooms' + '/' +
        context.route.params.id + '/' +
        context.store.state.locale
      )

      return {
        components: components.components,
        page: components,
        mode: components.mode || '',
        travelLineId
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  data() {
    return {
      travelLineId: null
    }
  }
}
</script>
