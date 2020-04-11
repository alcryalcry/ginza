<template>
  <div class="gallery-grid">
    <div v-if="model.title" class="title title--h2" v-html="model.title" />
    <div class="gallery-rows">
      <div v-for="(row, index) in model.rows" :key="row.type + index" class="gallery-row">
        <div v-for="(col, i) in row.cols" :key="col.image + i" class="gallery-col" :class="col.mode">
          <template v-if="row.type === 'image'">
            <picture v-if="col.image" class="image">
              <img :src="col.image" alt="">
            </picture>
          </template>
          <template v-else-if="row.type === 'video'">
            <VideoPreview :info="col" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import VideoPreview from '~/components/VideoPreview/VideoPreview'

export default {
  name: 'GalleryGrid',
  components: {
    VideoPreview
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
$sizeDesktop: 1rem;
$sizeTablet: 1rem;
$sizeMobile: 1rem;

.gallery-grid {
  .title {
    margin-bottom: 6rem;
  }
  .gallery-row {
    display: flex;
    flex-wrap: wrap;
    @include desktop {
      margin: 0 - $sizeDesktop;
    }
    & + .gallery-row {
      @include desktop {
        padding-top: $sizeDesktop;
      }
    }
  }
  .gallery-col {
    display: flex;
    height: 48rem;
    @include tablet {
      height: 42rem;
    }
    @include mobile {
      padding: 0;
      flex: 0 0 100%;
      height: 36rem;
      max-width: 100%;
    }

    .image {
      width: 100%;
    }

    &.size-full {
      flex: 0 0 100%;
      max-width: 100%;
      padding: $sizeDesktop;
      @include mobile {
        flex: 1 0 auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
    &.size-half {
      padding: $sizeDesktop;
      @include tablet_desktop {
        flex: 0 0 50%;
        max-width: 50%;
      }
      @include mobile {
        flex: 1 0 auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
    &.size-two {
      padding: $sizeDesktop;
      @include tablet_desktop {
        flex: 0 0 60%;
        max-width: 60%;
      }
      @include mobile {
        flex: 1 0 auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
    &.size-one {
      padding: $sizeDesktop;
      @include tablet_desktop {
        flex: 0 0 40%;
        max-width: 40%;
      }
      @include mobile {
        flex: 1 0 auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>
