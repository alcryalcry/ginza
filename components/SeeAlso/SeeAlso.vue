<template>
  <Section class="section--apartment see-also">
    <div class="see-also-content">
      <div class="label" v-html="$t('seeAlso.label')" />
      <nuxt-link class="see-also-link link title--h2" :to="localePath(path)">
        <div class="title" v-html="model.linkLabel" />
        <div class="icon">
          <iconArrow />
        </div>
      </nuxt-link>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconArrow from '~/assets/svg/arrow.svg'

export default {
  components: {
    Section,
    iconArrow
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    path() {
      const url = this.model.url.charAt(0) === '/' ? this.model.url : '/' + this.model.url
      return {
        path: url
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.see-also {
  margin-top: 7rem;
}
.see-also-content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 9rem 0;
  @include mobile {
    padding: 5rem 0;
  }

  .label {
    margin-bottom: .5rem;
  }

  .icon {
    position: relative;
    display: flex;
    width: 2.7rem;
    height: 1.8rem;
    margin: 1rem auto 0;
  }
}
</style>
