<template>
  <section class="section" :class="sectionClassNames">
    <div class="container" :class="containerClassNames">
      <slot /></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    sectionClassNames: {
      type: String,
      default: ''
    },
    containerClassNames: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.section {
  position: relative;
  &.section--menu {
    >.container {
      @include mobile_tablet {
        display: flex;
      }
    }
  }
  &.section--big {
    >.container {
      @include desktop {
        max-width: $containerBigWidth;
      }
    }
  }
  &.section--min {
    >.container {
      @include desktop {
        max-width: $containerMinWidth;
      }
    }
  }
  &.section--no-pb {
    >.container {
      padding-bottom: 0;
    }
  }
  &.section--no-p {
    >.container {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  &.section--no-p-full {
    >.container {
      padding: 0;
    }
  }
  &.section--p6 {
    >.container {
      @include desktop {
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
    }
  }
  &.section--1440 {
    >.container {
      padding-right: 0;
      padding-left: 0;
      @include desktop {
        max-width: 144rem;
      }
    }
  }
  &.section--full {
    >.container {
      padding-right: 0;
      padding-left: 0;
      @include desktop {
        max-width: none;
      }
    }
  }
  &.section--apartment {
    >.container {
      border-top: 1px solid $border;
      @include desktop {
        padding: 3rem 0;
        max-width: $containerMinWidthApartment;
      }
      @include mobile_tablet {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
    }
  }
  &.container--relative {
    >.container {
      position: relative;
    }
  }

  &--black {
    background: $black;
  }
  &--gray {
    background: $grayBg;
  }
}

.container {
  @include desktop {
    max-width: $containerWidth;
    margin: 0 auto;
    padding: $sectionOffsetVertical $sectionOffsetHorizontal;
  }
  @include tablet {
    padding: $sectionOffsetVerticalTablet $sectionOffsetHorizontalTablet;
  }
  @include mobile {
    padding: $sectionOffsetVerticalMobile $sectionOffsetHorizontalMobile;
  }
}
</style>
