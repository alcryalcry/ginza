<template>
  <Layout class="isMainPage page--dark">
    <template v-slot:page-content>
      <FixedActions :info="fixedData" />
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
import { API_ROUTES_HOTELS_ROOT } from '~/config/constants'
import FixedActions from '~/components/FixedActions/FixedActions'

export default {
  name: 'RestaurantsOne',
  components: {
    FixedActions
  },
  mixins: [page],
  async asyncData(context) {
    try {
      let href = ''
      const {
        components = {}
      } = await getAsyncData(context,
        API_ROUTES_HOTELS_ROOT + '/' +
        context.route.params.slug + '/' +
        'restaurants' + '/' +
        context.route.params.id + '/' +
        context.store.state.locale
      )
      try {
        href = (((components || {}).components || []).find(item => item.name === 'fixed_actions')).values[0].href
        const image = (((components || {}).components || []).find(item => item.name === 'hero_restaurant')).properties.image
        const logo = (((components || {}).components || []).find(item => item.name === 'hero_restaurant')).properties.logo
        context.store.commit('popup/SET_POPUP_EXTEND_CONTENT', {
          image,
          logo,
          href
        })
      } catch (e) {
        console.error(e)
      }
      return {
        components: components.components,
        page: components,
        mode: components.mode || '',
        href
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  },
  data() {
    return {
      fixedData: {
        ...this.$t('fixedActions.restaurants')
      }
    }
  },
  mounted() {
    if (process.browser) {
      try {
        this.fixedData.values[0].href = this.href
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
