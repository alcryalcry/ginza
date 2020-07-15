<template>
  <ul class="social">
    <li v-for="(item, index) in generatedList" :key="item.key" class="social-item">
      <a class="link" :href="'//' + item.value" target="_blank">
        <component :is="generatedComps[index]" />
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import instagram from '~/assets/svg/social/instagram.svg'
import facebook from '~/assets/svg/social/facebook.svg'
import tripadvisor from '~/assets/svg/social/tripadvisor.svg'

export default {
  components: {
    ExternalLink,
    instagram,
    facebook,
    tripadvisor
  },
  props: {
    info: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    ...mapGetters({
      GET_SOCIAL: 'GET_SOCIAL'
    }),
    generatedList() {
      return Object.entries(this.GET_SOCIAL).filter(([key]) => key !== 'id').map(([key, value]) => {
        return {
          key,
          value
        }
      })
    },
    generatedComps() {
      const capitalize = (string = '') => string.charAt(0).toLowerCase() + string.slice(1)
      return Object.entries(this.GET_SOCIAL).filter(([key]) => key !== 'phone' && key !== 'id').map(([ key, value ]) => {
        const componentName = capitalize(key)
        return () => import('~/assets/svg/social/' + componentName + '.svg')
          .then(m => m.default)
          .catch(e => import('~/assets/svg/social/default.svg'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  margin: 0 -1rem;

  .social-item {
    display: flex;
    flex: 0 0 auto;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem;
  }
}
</style>
