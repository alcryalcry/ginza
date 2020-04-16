<template>
  <div class="reviews-card">
    <div class="head">
      <picture class="image">
        <img :src="model.image" :alt="model.name" data-manual-lazy>
      </picture>
      <div v-if="model.userName" class="name title--16 bold" v-html="model.userName" />
    </div>
    <div v-if="model.text" class="wrapper">
      <p class="reviews-card-text text--16" v-html="model.text" />
    </div>
  </div>
</template>

<script>
import MODEL from './model'

export default {
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.reviews-card {
  .head {
    display: flex;
    align-items: center;
    padding-left: 4.5rem;
    margin-bottom: 2rem;
  }
  .image {
    margin-right: 1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .wrapper {
    position: relative;
    padding: 2rem;
    background: $white;
    border: 1px solid $border;
    border-radius: 2px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -6px;
      left: 5.25rem;
      width: 10px;
      height: 10px;
      background: $white;
      border-top:1px solid $border;
      border-right:1px solid $border;
      transform:rotate(-45deg);
    }
  }
}
</style>
