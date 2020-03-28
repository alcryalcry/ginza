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

<style lang="scss" scoped>
.section {
  position: relative;
  &--black {
    background: $black;
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

  .section--menu & {
    @include mobile {
      display: flex;
    }
  }

  .section--big & {
    @include desktop {
      max-width: $containerBigWidth;
    }
  }

  .section--min & {
    @include desktop {
      max-width: $containerMinWidth;
    }
  }

  .section--no-p & {
    padding-top: 0;
    padding-bottom: 0;
  }

}
</style>
