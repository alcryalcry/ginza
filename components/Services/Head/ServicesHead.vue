<template>
  <Section class="section--full services-head">
    <Section class="section--min section--no-p">
      <h5 v-if="model.tag" class="tag text--12 ttu regular" v-html="model.tag" />
      <h2 v-if="model.title" class="title title--h2" v-html="model.title" />
      <div v-if="model.label" class="label text--12 ttu regular" v-html="model.label" />
    </Section>

    <Section v-if="model.image" class="section--min section--no-p">
      <picture class="image">
        <app-image :src="model.image" alt="" /></picture>
    </Section>

    <SliderFeatures v-if="model.values && model.values.length" :data="{ modeSlider: 'section--min', values: model.values }" />

    <Section class="section--min section--no-p">
      <p v-if="model.description" class="description" v-html="model.description" />
    </Section>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import SliderFeatures from '~/components/_middleware/Slider_features/Slider_features'

export default {
  components: {
    Section,
    SliderFeatures
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
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.services-head {
  .services-slider {
    padding: 0 4rem;
  }
  .image {
    display: flex;
    width: 100%;
    height: 46rem;
    margin-top: 6rem;
    @include mobile {
      max-width: calc(100% + 4rem);
      width: calc(100% + 4rem);
      margin-top: 4rem;
      margin: 4rem -2rem 0;
      height: 36rem;
    }
    img {
      object-fit: cover;
    }
  }
  .title {
    text-align: center;
  }
  .tag {
    text-align: center;
    color: $gray69;
    letter-spacing: 0.1rem;
  }
  .label {
    margin-top: .5rem;
    font-size: 1rem;
    line-height: 1.25;
    text-align: center;
    color: $gray69;
    letter-spacing: 0.2rem;
  }
  .description {
    margin: 6rem auto 0;
    max-width: 46rem;
    @include mobile {
      margin-top: 4rem;
    }
  }
}
</style>
