<template>
  <!-- <Layout :header="header" :footer="footer" :class="mode"> -->
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
import { API_ROUTES_ABOUT } from '~/config/constants'

export default {
  name: 'About',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        // header = {},
        // footer = {},
        components = {}
      } = await getAsyncData(context, API_ROUTES_ABOUT + '/' + context.store.state.locale)
      return {
        // header,
        // footer,
        components: components.components,
        page: components,
        mode: components.mode || ''
      }
    } catch (e) {
      // console.error('ERROR FROM page (asyncData)', e)
    }
  }
}
</script>
