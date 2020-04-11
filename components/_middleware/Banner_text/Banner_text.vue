<template>
  <Section :class="model.mode" :data-anchor="model.anchor">
    <HeadTitle class="isShort" :info="model" />
  </Section>
</template>

<script>
import Section from '~/components/Utils/Section'
import HeadTitle from '~/components/HeadTitle/HeadTitle'

export default {
  name: 'MiddlewareBannerText',
  components: {
    Section,
    HeadTitle
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    model() {
      return {
        mode: '',
        anchor: false,
        ...this.data
      }
    }
  }
}
</script>
