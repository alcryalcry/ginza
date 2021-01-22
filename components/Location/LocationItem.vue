<template>
  <div class="item text--16">
    <div class="name">
      <a class="link" :href="info.url" v-html="info.name" />
    </div>
    <div class="info">
      <div class="distance" v-html="info.distance" />
      <div class="sign-text">{{ $t('COMMON.MIN') }}</div>
      <div class="icon">
        <component :is="info.type" v-if="$options.components[info.type]" />
      </div>
    </div>
  </div>
</template>

<script>
import foot from '~/assets/svg/location/foot.svg'
import car from '~/assets/svg/location/car.svg'

export default {
  components: {
    foot,
    car
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  @include mobile {
    align-items: flex-start;
    font-size: 1.4rem;
  }
}
.name {
  flex: 1 1 auto;
  padding-right: 2rem;
}
.sign-text {
  margin-left: 0.5rem;
}
.icon {
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
}
.info {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
</style>
