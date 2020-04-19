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
  data() {
    return {
      generatedComps: []
    }
  },
  created() {
    if (this.components) {
      this.components.forEach((component) => {
        const componentName = this.capitalize(component.name)
        const comp = () => import('~/components/_middleware/' + componentName + '/' + componentName + '.vue')
        this.generatedComps.push(comp)
      })
    } else {
      console.error('components not found')
    }
  },
  methods: {
    capitalize(string = '') {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
