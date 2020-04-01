<template>
  <Section>
    <div class="banner-sale">
      <div class="content">
        <div class="logo">
          <iconLove />
        </div>
        <div v-if="model.title" class="text text--18" v-html="model.title" />
      </div>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconLove from '~/assets/svg/love.svg'

export default {
  name: 'BannerSale',
  components: {
    Section,
    iconLove
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-sale {

}

</style>
