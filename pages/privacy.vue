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
  </Layout>
</template>

<script>
import page from '~/mixins/page'
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_PRIVACY } from '~/config/constants'

export default {
  name: 'Privacy',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context, API_ROUTES_PRIVACY)
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
