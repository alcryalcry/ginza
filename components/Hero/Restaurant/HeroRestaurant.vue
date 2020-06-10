<template>
  <div class="hero-restaurant">
    <picture v-if="model.image" class="image">
      <img :src="model.image" alt="">
    </picture>
    <div class="hero-restaurant-content">
      <picture v-if="model.logo" class="logo">
        <img :src="model.logo" alt="">
      </picture>
      <h4 class="title">
        <span v-if="model.type" class="type" v-html="model.type" />
        <span v-if="model.placeName" class="name" v-html="model.placeName" />
      </h4>
      <div class="place">
        <a :href="model.url" target="_blank" class="place-link text--13">
          <span v-if="model.placeParent" class="parent" v-html="model.placeParent" />
          <span v-if="model.city" class="city" v-html="model.city" />
        </a>
      </div>
      <!-- TODO: прокинуть данные меню ресторана -->
      <div class="mobile-link">
        <a class="link link--brown text--28 light link--arrow" href="/dummy.pdf" target="_blank">
          <span>Меню ресторана</span>
          <span class="icon">
            <iconArrow />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import iconArrow from '~/assets/svg/arrow.svg'

export default {
  name: 'HeroRestaurant',
  components: {
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
.mobile-link {
  margin-top: 4rem;
  @include desktop {
    display: none !important;
  }
}
.hero-restaurant {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 6rem 4rem 2.5rem;
  height: 90rem;
  max-height: 100vh;
  @include desktop {
    height: 90rem;
  }
  @include mobile {
    height: 85vh;
    padding: 4rem $sectionOffsetHorizontalMobile 2.5rem;
  }
  .image {
    @include absolute;
    pointer-events: none;
    &::before {
      content: '';
      @include absolute;
      background: linear-gradient(180deg, rgba(50, 50, 50, 0.1) 55.68%, rgba(0, 0, 0, 0.80415) 96%);
    }
  }
}

.hero-restaurant-content {
  position: relative;
  margin-bottom: 8rem;
  color: $white;
}

.logo {
  display: flex;
  margin: 0 auto 2.5rem;
  width: 14rem;
}

.title {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  .type {
    font-weight: $light;
    &::after {
      content: ' ';
    }
  }
  .name {
    font-weight: $medium;
  }
}

.place {
  display: flex;
  justify-content: center;
  color: $border;
  .place-link {
    text-align: center;
    @include desktop {
      &:hover {
        color: $brown;
        transition: color .2s ease;
      }
    }
  }
  .parent {
    &::after {
      content: ', ';
    }
  }
}

</style>
