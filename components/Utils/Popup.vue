<template>
  <transition :name="name">
    <div v-if="isShow" class="popup">
      <div class="background" @click.stop="hide()" />
      <div class="popup-container">
        <button class="close" @click.prevent="hide()" @keydown.esc="hide()" />
        <div class="content">
          <slot />
        </div>
      </div>
    </div>\
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'popup'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow(isShow) {
      if (isShow) {
        document.body.addEventListener('keyup', this.initHideEvents, false)
        return
      }
      document.body.removeEventListener('keyup', this.initHideEvents, false)
    }
  },
  methods: {
    hide() {
      this.$emit('hide-popup')
    },
    scrollToTop () {
      this.$refs.scrollLockEl.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    initHideEvents(e) {
      if (e.keyCode === 27) {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: $zLayerMenuOpened;

  .close {
    position: fixed;
    top: 14rem;
    right: 100rem + 4rem;
    width: 5rem;
    height: 5rem;
    color: $black;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    transform: translateX(1000%);
    transition: transform 0.3s ease .3s, color .2s ease;
    z-index: $zLayerMenuOpenedBurgerBtn;
    .isActive & {
      transform: translateX(0%);
    }
    @include desktop {
      &:hover {
        color: $white;
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      margin: auto;
      background-color: $black;
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($black, 0.7);
  }

  .popup-container {
    position: relative;
    background: $white;
    z-index: $zLayerMenuOpened;
    @include desktop {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $containerWidth;
      height: 50rem;
    }
    @include mobile_tablet {
      max-width: 100vw;
    }
  }

  .content {
    height: 100%;
    color: $black;
  }
}
</style>
