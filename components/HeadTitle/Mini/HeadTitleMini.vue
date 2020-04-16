<template>
  <div class="head-title-mini">
    <h4 v-if="model.title" class="title text--24">
      <div v-if="model.descriptionIcon" class="icon">
        <iconPlus />
      </div>
      <span v-html="model.title" />
    </h4>
    <p v-if="model.description" class="description text--16" v-html="model.description" />
  </div>
</template>

<script>
import MODEL from './model'
import iconPlus from '~/assets/svg/plus.svg'

export default {
  name: 'HeadTitleMini',
  components: {
    iconPlus
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
.head-title-mini {
  max-width: 40rem;
  margin-bottom: 3rem;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.4rem;
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    border-radius: 50%;
    background: $white;
    border: 1px solid $black17;
    color: $black17;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
}
</style>
