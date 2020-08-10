<template>
  <Layout>
    <template v-slot:page-content>
      <Subheader :info="subheaderData" />
      <component
        :is="item"
        v-for="(item, index) in computedGeneratedComps"
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
import { API_ROUTES_SERVICES_ROOT } from '~/config/constants'
import Subheader from '~/components/Subheader/Subheader'

export default {
  name: 'ServicesOne',
  components: {
    Subheader
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context,
        API_ROUTES_SERVICES_ROOT + '/' +
        context.route.params.slug + '/' +
        context.store.state.locale
      )
      return {
        components: components.components,
        page: components,
        mode: components.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  data() {
    return {
      subheaderData: {
        ...this.$t('subheader.services')
      }
    }
  },
  computed: {
    computedGeneratedComps() {
      const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1)
      return (this.components || []).filter(component => component.name !== 'sub_header').map((component) => {
        const componentName = capitalize(component.name)
        return () => import('~/components/_middleware/' + componentName + '/' + componentName + '.vue')
          .then(m => m.default)
          .catch(e => import('~/components/NotFound/NotFound.vue'))
      })
    }
  }
}
</script>
