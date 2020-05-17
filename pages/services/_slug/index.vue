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
      </Popup>
    </template>
  </Layout>
</template>

<script>
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_SERVICES_ROOT } from '~/config/constants'
import Popup from '~/components/Utils/Popup'
import PopupVideo from '~/components/Popup/Video/PopupVideo'

import Layout from '~/components/Layout/Layout'

export default {
  name: 'HotelsOneRoom',
  components: {
    Layout,
    Popup,
    PopupVideo
  },
  async asyncData(context) {
    try {
      const {
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context,
        API_ROUTES_SERVICES_ROOT + '/' +
        context.route.params.slug
      )
      return {
        header,
        footer,
        components: pageComponents.components,
        mode: pageComponents.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  computed: {
    generatedComps() {
      const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1)
      return (this.components || []).map((component) => {
        const componentName = capitalize(component.name)
        return () => import('~/components/_middleware/' + componentName + '/' + componentName + '.vue')
          .then(m => m.default)
          .catch(e => import('~/components/NotFound/NotFound.vue'))
      })
    }
  }
}
</script>
