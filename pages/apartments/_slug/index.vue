<template>
  <Layout :header="header" :footer="footer" :class="mode">
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
import { API_ROUTES_APARTMENTS_ROOT } from '~/config/constants'

export default {
  name: 'ApartmentsOne',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context,
        API_ROUTES_APARTMENTS_ROOT + '/' +
        context.route.params.slug
      )
      return {
        header,
        footer,
        components: pageComponents.components,
        page: pageComponents,
        mode: pageComponents.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  }
}
</script>
