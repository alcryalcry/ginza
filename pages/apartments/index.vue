<template>
  <Layout :footer="false">
    <template v-slot:page-content>
      <HousingPage />
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
import HousingPage from '~/components/Housing/Page/HousingPage'

export default {
  name: 'Hotels',
  components: {
    HousingPage
  },
  mixins: [page],
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
