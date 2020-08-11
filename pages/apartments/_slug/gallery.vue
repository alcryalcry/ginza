<template>
  <LayoutGallery>
    <template v-slot:page-content>
      <component
        :is="item"
        v-for="(item, index) in generatedComps"
        :key="index"
        :data="components[index]"
      />
    </template>
  </LayoutGallery>
</template>

<script>
/* eslint-disable camelcase */
import page from '~/mixins/page'
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_APARTMENTS_ROOT } from '~/config/constants'

import LayoutGallery from '~/components/Layout/LayoutGallery'

export default {
  name: 'ApartmentsOneGallery',
  components: {
    LayoutGallery
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context,
        API_ROUTES_APARTMENTS_ROOT + '/' +
        context.route.params.slug + '/' +
        context.store.state.locale
      )
      return {
        components: components.gallery_components,
        page: components,
        mode: components.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  }
}
</script>
