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
  &.section--no-p {
    >.container {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  &.section--full {
    >.container {
      padding-right: 0;
      padding-left: 0;
      @include desktop {
        max-width: 144rem;
      }
    }
  }
  &.section--apartment {
    >.container {
      @include desktop {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
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
