<template>
  <ul class="social">
    <li v-for="(item, index) in model" :key="item.name" class="social-item">
      <a class="link" :href="item.url" target="_blank">
        <component :is="generatedComps[index]" />
      </a>
    </li>
  </ul>
</template>

<script>
import MODEL from './model'
import instagram from '~/assets/svg/social/instagram.svg'
import facebook from '~/assets/svg/social/facebook.svg'
import tripadvisor from '~/assets/svg/social/tripadvisor.svg'

export default {
  components: {
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
    generatedComps() {
      const capitalize = (string = '') => string.charAt(0).toLowerCase() + string.slice(1)
      return this.model.map((component) => {
        const componentName = capitalize(component.name)
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
