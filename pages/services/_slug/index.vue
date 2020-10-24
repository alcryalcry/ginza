<template>
  <Layout show-travelline>
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
import { API_ROUTES_SERVICES_ROOT } from '~/config/constants'

export default {
  name: 'ServicesOne',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context,
        API_ROUTES_SERVICES_ROOT + '/' +
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
  }
}
</script>
