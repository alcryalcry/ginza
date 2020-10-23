<template>
  <Layout show-travelline :footer="false">
    <template v-slot:page-content>
      <InvestorsForm />
    </template>
  </Layout>
</template>

<script>
import page from '~/mixins/page'
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_INVESTORS } from '~/config/constants'
import InvestorsForm from '~/components/Investors/Form/InvestorsForm'

export default {
  name: 'Investors',
  components: {
    InvestorsForm
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context, API_ROUTES_INVESTORS + '/' + context.store.state.locale)
      return {
        components: components.components,
        page: components,
        mode: components.mode || ''
      }
    } catch (e) {
      console.error('ERROR FROM page (asyncData)', e)
    }
  }
}
</script>
