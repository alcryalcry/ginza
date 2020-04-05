<template>
  <ul class="social">
    <li v-for="item in checkComponents" :key="item.name" class="social-item">
      <a class="link" :href="item.url" target="_blank">
        <component :is="item.name" />
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
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    checkComponents() {
      return this.model.filter(item => !!this.$options.components[item.name])
    }
  },
  created() {
  },
  methods: {
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
