<template>
  <div class="hero-hotel">
    <div class="hero-hotel-row">
      <picture v-if="model.image" class="image">
        <app-image :src="model.image" alt="" /></picture>
      <div class="hero-hotel-content">
        <h4 class="title">
          <span v-if="model.type" class="type" v-html="model.type" />
          <span v-if="model.placeName" class="name" v-html="model.placeName" />
        </h4>
        <h5 target="_blank" class="place text--13">
          <span v-if="model.city" class="city" v-html="model.city" />
        </h5>
        <p class="description text--24" v-html="model.description" />
        <div v-if="model.anchorLink" class="hero-anchor">
          <button class="link link--brown link--tdu" @click="scrollToSection" v-html="$t('hotels.anchorLabel')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MODEL from './model'

export default {
  name: 'HeroHotel',
  components: {
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
  },
  methods: {
    scrollToSection() {
      const currentElement = document.querySelector(`[data-anchor="${this.model.anchorLink}"]`)
      if (currentElement) {
        currentElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-hotel {
  max-width: 106rem;
  margin: 0 auto;
  padding: 6rem 2rem;
  @include mobile {
    padding: 0;
  }
}
.hero-hotel-row {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include mobile {
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
}

.image {
  display: flex;
  flex: 0 0 52rem;
  @include tablet {
    flex: 0 0 32rem;
  }
  @include mobile {
    flex: 0 0 auto;
  }
}

.hero-hotel-content {
  position: relative;
  flex: 1 1 auto;
  padding: 6rem 3rem;
  margin-left: 2rem;
  background: $grayBg;
  align-self: stretch;
  @include mobile {
    padding: 4rem;
    margin: 0;
  }
}

.description {
  margin-top: 5rem;
}

.hero-anchor {
  margin-top: 3rem;
}

.title {
  color: $brown;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  .type {
    font-weight: $bold;
    &::after {
      content: ' ';
    }
  }
  .name {
    font-weight: $bold;
  }
}

.place {
  color: $gray69;
  letter-spacing: 0.1rem;
  font-weight: $medium;
}

</style>
