<template>
  <LayoutGallery :class="mode">
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
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context,
        API_ROUTES_APARTMENTS_ROOT + '/' +
        context.route.params.slug + '/' +
        'gallery'
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
