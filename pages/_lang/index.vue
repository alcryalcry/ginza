<template>
  <div class="page">
    <Header :info="headerData" />
    <div class="page-content">
      <Hero />
    </div>
    <Footer :info="footerData" />
  </div>
</template>

<script>
import get from '~/plugins/api'
import { API_ROUTES_INDEX } from '~/config/constants'

import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Hero from '~/components/Hero/Hero'

export default {
  components: {
    Header,
    Footer,
    Hero
  },
  async asyncData (context) {
    return get(context, API_ROUTES_INDEX)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoper>
</style>
