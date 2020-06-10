<template>
  <div>
    <HeaderGallery :info="model" @to-anchor="toAnchor" />
    <Section class="section--1440 section--no-p review">
      <Section class="review-content section--min">
        <div v-for="(item, index) in model.values" :key="item.name + index" :data-anchor="item.anchor" class="review-row">
          <GalleryGrid v-if="item.name === 'gallery_grid'" :info="item" title-class-names="text--24" />
          <div v-else-if="item.name === 'text'" class="review-text text--24" v-html="item.title" />
        </div>
      </Section>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import GalleryGrid from '~/components/GalleryGrid/GalleryGrid'
import stickyMenu from '~/mixins/stickyMenu'
import HeaderGallery from '~/components/Header/Gallery/HeaderGallery'

export default {
  name: 'ReviewPage',
  components: {
    Section,
    GalleryGrid,
    HeaderGallery
  },
  mixins: [stickyMenu],
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    ...mapGetters({
      GET_MENU_STATUS: 'header/GET_MENU_STATUS'
    }),
    stickyAnchors() {
      return this.model.values.map((item) => {
        return {
          href: item.anchor,
          id: item.anchor
        }
      })
    }
  },
  methods: {
    toAnchor(id) {
      this.scrollToSection(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.bt {
  border-top: 1px solid $border;
}
.review {
  .gallery-grid {
    &::v-deep {
      .title {
        font-weight: $bold;
      }
    }
  }
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
      padding-top: 10rem;
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
