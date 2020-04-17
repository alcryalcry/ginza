<template>
  <Section class="section--full review bt">
    <Section class="section--big review-head">
      <div class="row review-head-row">
        <div class="col-7 col-logo">
          <div class="logo">
            <iconLogo />
          </div>
        </div>
        <div class="col-5 col-description">
          <div v-if="model.description" class="review-head-description text--24" v-html="model.description" />
        </div>
      </div>
    </Section>
    <Section class="review-content section--min">
      <div v-for="(item, index) in model.values" :key="item.name + index" class="review-row">
        <GalleryGrid v-if="item.name === 'gallery_grid'" :info="item" />
        <div v-else-if="item.name === 'text'" class="review-text text--24" v-html="item.title" />
      </div>
    </Section>
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'
import GalleryGrid from '~/components/GalleryGrid/GalleryGrid'
import iconLogo from '~/assets/svg/logo.svg'

export default {
  name: 'Review',
  components: {
    Section,
    GalleryGrid,
    iconLogo
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
.bt {
  border-top: 1px solid $border;
}
.review {
  .review-head {
    .review-head-row {
      @include desktop {
        padding-right: 4rem;
      }
    }
    .col-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      @include mobile {
        margin-bottom: 4rem;
      }
    }
    .logo {
      width: 21.5rem;
      height: 7.5rem;
    }
    .col-description {
      max-width: 40rem;
    }
  }
  .review-row {
    & + .review-row {
      margin-top: 10rem;
    }
  }
  .review-text {
    max-width: 50rem;
    margin: 0 auto;
    font-weight: $light;
    text-align: center;
  }
}
</style>
