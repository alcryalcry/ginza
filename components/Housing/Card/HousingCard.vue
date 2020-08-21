<template>
  <ExternalLink :to="model.url" class="housing-card">
    <template v-if="model.images.length">
      <transition-group
        tag="div"
        class="images"
        mode="out-in"
        name="fade-reversed-long"
        @mouseenter.native="startChanger"
        @mouseleave.native="stopChanger"
      >
        <picture
          v-for="(image, index) in model.images"
          v-show="index === activeIndex"
          :key="index + 1"
          class="image"
        >
          <app-image :src="image" :alt="model.name" data-not-lazy /></picture>
      </transition-group>
    </template>
    <template v-else-if="model.preview">
      <div class="images">
        <picture class="image">
          <app-image :src="model.preview" :alt="model.name" data-not-lazy /></picture>
      </div>
    </template>
    <div class="content">
      <div v-if="model.city" class="city text--13 ls1" v-html="model.city.name" />
      <div v-if="model.name" class="title text--24" v-html="model.name" />
      <ApartmentCounter :info="model.params" color="gray" />
    </div>
  </ExternalLink>
</template>

<script>
import MODEL from './model'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import ApartmentCounter from '~/components/HeadTitle/Apartment/ApartmentCounter'

export default {
  name: 'HousingCard',
  components: {
    ExternalLink,
    ApartmentCounter
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    isNested: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: 0,
      intervalId: null
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    needChange() {
      return this.model.images.length > 1
    },
    checkComponents() {
      return this.model.params.map(item => !!this.$options.components[item.type])
    }
  },
  methods: {
    imageChanger() {
      if (this.activeIndex === this.model.images.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
    startChanger() {
      if (this.needChange) {
        this.imageChanger()
        this.intervalId = setInterval(() => {
          this.imageChanger()
        }, 1500)
      }
    },
    stopChanger() {
      if (this.needChange) {
        clearInterval(this.intervalId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-card {
  display: block;
  .images {
    position: relative;
    width: 100%;
    height: 40rem;
    z-index: 1;
    @include tablet {
      height: 30rem;
    }
    @include mobile {
      height: 30rem;
    }
  }
  .image {
    @include absolute;
    pointer-events: none;
  }
  .content {
    padding: 1rem 0;
  }

  .title {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: $bold;
    margin-bottom: .5rem;
    @include mobile {
      margin-top: .25rem;
    }
  }

  .city {
    color: $gray69;
  }

  .params {
    display: flex;
    flex-flow: row wrap;
    margin: -1.25rem;
  }
  .params-item {
    display: flex;
    align-items: center;
    margin: 1.25rem;
    color: $gray69;
  }
  .params-icon {
    display: flex;
    width: 2.2rem;
    height: 2.2rem;
    margin-right: .75rem;
  }
}
</style>
