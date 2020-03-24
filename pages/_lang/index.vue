<template>
  <div class="page">
    <Header />
    <div class="page-content">
      <div class="section--first">
        <Hero />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Hero from '~/components/Hero/Hero'

export default {
  components: {
    Header,
    Footer,
    Hero
  }
}
</script>

<style lang="scss" scoper>
</style>
