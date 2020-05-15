<template>
  <nuxt-link :to="localePath(path)" class="housing-card">
    <transition-group
      v-if="model.images.length"
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
        <img :src="image" :alt="model.title">
      </picture>
    </transition-group>
    <div class="content">
      <div v-if="model.city" class="city text--13 ls1" v-html="model.city" />
      <div v-if="model.title" class="title text--24" v-html="model.title" />
      <div class="params">
        <div v-for="(param, index) in model.params" :key="param.type" class="params-item">
          <div v-if="checkComponents[index]" class="params-icon">
            <component :is="param.type" />
          </div>
          <div class="params-text">{{ param.value }}</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import MODEL from './model'
import beds from '~/assets/svg/icon-beds.svg'
import adult from '~/assets/svg/icon-adult.svg'
import size from '~/assets/svg/icon-size.svg'

export default {
  name: 'HousingCard',
  components: {
    beds,
    adult,
    size
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
    },
    path() {
      const url = this.model.url.charAt(0) === '/' ? this.model.url : '/' + this.model.url
      return {
        path: this.isNested
          ? this.model.url
          : this.$route.path + url
      }
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
