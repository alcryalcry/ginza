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
import get from '~/plugins/api'
import { API_ROUTES_ABOUT } from '~/config/constants'

import Layout from '~/components/Layout/Layout'

export default {
  components: {
    Layout
  },
  async asyncData(context) {
    const {
      header = {},
      footer = {},
      pageComponents = {}
    } = await get(context, API_ROUTES_ABOUT)
    return {
      header,
      footer,
      components: pageComponents.components
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
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
