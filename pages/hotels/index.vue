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
        <PopupBooking />
        <PopupManager />
        <PopupTravelLine />
      </Popup>
    </template>
  </Layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import page from '~/mixins/page'
import getAsyncData from '~/plugins/getAsyncData'
import { API_ROUTES_HOUSING } from '~/config/constants'

export default {
  name: 'Hotels',
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        header = {},
        footer = {},
        pageComponents = {}
      } = await getAsyncData(context, API_ROUTES_HOUSING)
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
  },
  computed: {
    ...mapGetters({
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_CURRENT_HOUSING_TYPE: 'housing/GET_CURRENT_HOUSING_TYPE'
    })
  },
  created() {
    const type = this.GET_HOUSING_TYPES.find(item => this.$route.path.includes(item.id)) || {}
    if (type.id && type.id !== this.GET_CURRENT_HOUSING_TYPE.id) {
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
