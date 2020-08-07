<template>
  <Layout>
    <template v-slot:page-content>
      <BlogFilter />
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
import { API_ROUTES_BLOG_ROOT } from '~/config/constants'
import BlogFilter from '~/components/Blog/Filter/BlogFilter'

export default {
  name: 'Blog',
  components: {
    BlogFilter
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context, API_ROUTES_BLOG_ROOT)
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
