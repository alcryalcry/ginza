<template>
  <Layout>
    <template v-slot:page-content>
      <component
        :is="item"
        v-for="(item, index) in generatedComps"
        :key="index"
        :data="getData.components[index]"
      />
    </template>
    <template v-slot:popup>
      <Popup>
        <PopupVideo />
      </Popup>
    </template>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Popup from '~/components/Utils/Popup'
import PopupVideo from '~/components/Popup/Video/PopupVideo'

import Layout from '~/components/Layout/Layout'

export default {
  name: 'HotelsOne',
  components: {
    Layout,
    Popup,
    PopupVideo
  },
  computed: {
    generatedComps() {
      console.warn(this.getData)
      return (this.getData.components || []).map((component) => {
        const componentName = component.name
        return () => import('~/components/_middleware/' + componentName + '/' + componentName + '.vue')
          .then(m => m.default)
          .catch(e => import('~/components/NotFound/NotFound.vue'))
      })
    },
    ...mapGetters({ getData: 'adminStore/get_state' })
  }
}
</script>
