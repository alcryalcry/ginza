<template>
  <Section class="section--apartment see-also">
    <div class="see-also-content">
      <div class="label" v-html="$t('seeAlso.label')" />
      <ExternalLink class="see-also-link link title--h2" :to="model.url">
        <div class="title" v-html="model.linkLabel" />
        <div class="icon">
          <iconArrow />
        </div>
      </ExternalLink>
    </div>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconArrow from '~/assets/svg/arrow.svg'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    ExternalLink,
    Section,
    iconArrow
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
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
