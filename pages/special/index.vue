<template>
  <Layout>
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
import { API_ROUTES_SPECIAL_ROOT } from '~/config/constants'

export default {
  name: 'Services',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = []
      } = await getAsyncData(context, API_ROUTES_SPECIAL_ROOT)
      const {
        pageId = {}
      } = Array.isArray(components) ? components[0] : {}

      return {
        components: pageId.components,
        page: pageId,
        mode: pageId.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  }
}
</script>
