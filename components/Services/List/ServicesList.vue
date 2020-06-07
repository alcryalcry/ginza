<template>
  <ul class="services-list row">
    <li v-for="item in checkComponents" :key="item.name" class="col-t-3 col-m-4">
      <ExternalLink class="services-item" :url="item.url" :to="item.url">
        <div class="icon">
          <component :is="item.id" />
        </div>
        <div class="icon-logo">
          <iconGinza />
        </div>
        <div v-if="item.label" class="label text--18" v-html="item.label" />
      </ExternalLink>
    </li>
  </ul>
</template>

<script>
import MODEL from './model'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import iconGinza from '~/assets/svg/logo-ginza.svg'
import catering from '~/assets/svg/services/catering.svg'
import delivery from '~/assets/svg/services/delivery.svg'
import flower from '~/assets/svg/services/flower.svg'
import fitness from '~/assets/svg/services/fitness.svg'
import tour from '~/assets/svg/services/tour.svg'
import prime from '~/assets/svg/services/prime.svg'
import sky from '~/assets/svg/services/sky.svg'

export default {
  components: {
    ExternalLink,
    iconGinza,
    catering,
    delivery,
    flower,
    fitness,
    tour,
    prime,
    sky
  },
  props: {
    info: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    checkComponents() {
      return this.model.filter(item => !!this.$options.components[item.id])
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.services-list {
  @include desktop {
    margin: -1rem;
    justify-content: space-between;
  }

  .services-item {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
    @include mobile {
      padding: 1rem;
    }
    @include desktop {
      margin: 1rem;
      &:hover {
        .icon {
          background-color: $brown;
          color: $white;
        }
      }
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      border-radius: 50%;
      border: 1px solid $border;
      width: 10rem;
      height: 10rem;
      padding: 1.25rem;
      overflow: hidden;
      color: $brown;
      transition: background-color .2s ease, color .2s ease;
      @include tablet {
        width: 8rem;
        height: 8rem;
      }
      @include mobile {
        width: 7rem;
        height: 7rem;
        padding: 1rem;
      }
    }

    .icon-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: .5rem;
      width: 2.5rem;
      height: 1.5rem;
    }
  }
}
</style>
