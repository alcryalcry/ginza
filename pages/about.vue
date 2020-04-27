<template>
  <Layout :header="header" :footer="footer">
    <template v-slot:page-content>
      <component
        :is="item"
        v-for="(item, index) in generatedComps"
        :key="index"
        :data="components[index]"
      />
    </template>
  </Layout>
</template>

<script>
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_ABOUT } from '~/config/constants'

import Layout from '~/components/Layout/Layout'

export default {
  name: 'About',
  components: {
    Layout
  },
  async asyncData(context) {
    try {
      const {
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context, API_ROUTES_ABOUT)
      return {
        header,
        footer,
        components: pageComponents.components
      }
    } catch (e) {
      console.warn('ERROR FROM page (asyncData)', e)
    }
  },
  computed: {
    generatedComps() {
      const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1)
      return this.components.map((component) => {
        const componentName = capitalize(component.name)
        return () => import('~/components/_middleware/' + componentName + '/' + componentName + '.vue')
          .then(m => m.default)
          .catch(e => import('~/components/NotFound/NotFound.vue'))
      })
    }
  }
}
</script>
