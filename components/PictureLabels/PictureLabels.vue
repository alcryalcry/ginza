<template>
  <div class="picture-labels">
    <picture v-if="model.image" class="image">
      <img :src="model.image" alt="">
    </picture>
    <div v-if="model.labels.length" class="labels">
      <div
        v-for="label in model.labels"
        :key="label.text"
        class="labels-item"
        :style="{ left: label.x + '%', top: label.y + '%' }"
        :class="{ isActive: activeLabel.text === label.text }"
        @mouseenter="setActiveLabel(label)"
        @mouseleave="removeActiveLabel"
      />
    </div>
    <transition mode="out-in" name="fade-reversed">
      <div v-if="!!activeLabel.text" class="acitve-label">
        <span v-html="activeLabel.text" />
      </div>
    </transition>
  </div>
</template>

<script>
import MODEL from './model'

export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeLabel: {}
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  methods: {
    setActiveLabel(label) {
      this.$set(this, 'activeLabel', label)
    },
    removeActiveLabel() {
      this.$set(this, 'activeLabel', {})
    }
  }
}
</script>

<style lang="scss" scoped>
.picture-labels {
  position: relative;
  overflow: hidden;
  width: 100%;

  .acitve-label {
    position: absolute;
    left: 50%;
    bottom: 1.5rem;
    padding: 1rem 2.5rem;
    border-radius: 2rem;
    background: $white;
    transform: translateX(-50%);
    @include mobile_tablet {
      display: none;
    }
  }

  .labels-item {
    position: absolute;
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 50%;
    background: rgba($white, .2);
    overflow: hidden;
    cursor: pointer;
    @include mobile_tablet {
      display: none;
    }
    &.isActive {
      &::before {
        transform: translate3d(-50%, -50%, 0) scale(1);
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: $white;
      transform: translate3d(-50%, -50%, 0) scale(0.55);
      transition: .25s ease;
    }
  }
}
</style>
