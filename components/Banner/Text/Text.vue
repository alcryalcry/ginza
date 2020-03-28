<template>
  <Section>
    <div class="banner-love">
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
  name: 'BannerLove',
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
.banner-love {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
}

.logo {
  width: 30rem;
  height: 10rem;
  @include mobile {
    width: 25rem;
    height: 7rem;
  }
}

.text {
  margin-top: -1rem;
}

</style>
