<template>
  <Layout :is-header-main="true" class="isMainPage">
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
import { API_ROUTES_INDEX } from '~/config/constants'
import FixedActions from '~/components/FixedActions/FixedActions'

export default {
  name: 'MainPage',
  components: {
    FixedActions
  },
  mixins: [page],
  async asyncData(context) {
    try {
      const {
        components = {}
      } = await getAsyncData(context, API_ROUTES_INDEX + '/' + context.store.state.locale)
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
      fixedData: {
        ...this.$t('fixedActions.travelline')
      }
    }
  }
}
</script>

<style lang="scss" scoper>
.isMainPage {
  .page-content {
    @include desktop {
      margin-top: - $headerHeight;
    }
    @include tablet {
      margin-top: - $headerHeightTablet;
    }
    @include mobile {
      margin-top: - $headerHeightMobile;
    }
  }
}
</style>
