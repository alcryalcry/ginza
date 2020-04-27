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
import { mapGetters, mapMutations } from 'vuex'
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_HOUSING } from '~/config/constants'

import Layout from '~/components/Layout/Layout'

export default {
  name: 'Apartments',
  components: {
    Layout
  },
  async asyncData(context) {
    try {
      const {
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context,
        API_ROUTES_HOUSING
      )
      return {
        header,
        footer,
        components: pageComponents.components,
        mode: pageComponents.mode || ''
      }
    } catch (e) {
      console.warn('ERROR FROM page (asyncData)', e)
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
    },
    ...mapGetters({
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_CURRENT_HOUSING_TYPE: 'housing/GET_CURRENT_HOUSING_TYPE'
    })
  },
  created() {
    const type = this.GET_HOUSING_TYPES.find(item => item.id === this.$route.path.replace('/', ''))
    if (type !== this.GET_CURRENT_HOUSING_TYPE) {
      this.SET_CURRENT_HOUSING_TYPE(type)
    }
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_HOUSING_TYPE: 'housing/SET_CURRENT_HOUSING_TYPE'
    })
  }
}
</script>
