<template>
  <div class="description">
    <HeadTitleMini :info="model" />
    <p v-if="model.text" class="text text--16" v-html="model.text" />
    <template v-if="model.moreText">
      <vue-slide-toggle :open="isOpen">
        <p class="more-text" v-html="model.moreText" />
      </vue-slide-toggle>
      <div class="more-link">
        <button
          class="link link--brown link--tdu"
          @click="isOpen = !isOpen"
          v-html="isOpen ? $t('showMoreDescription.hide') : $t('showMoreDescription.show')"
        />
      </div>
    </template>
  </div>
</template>

<script>
import MODEL from './model'
import HeadTitleMini from '~/components/HeadTitle/Mini/HeadTitleMini'

export default {
  components: {
    HeadTitleMini
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isOpen: false
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
.description {
  .text {
    margin-bottom: 3rem;
  }
  .more-text {
    padding-bottom: 3rem;
  }
}
</style>
