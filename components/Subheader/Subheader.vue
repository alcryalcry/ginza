<template>
  <div class="subheader">
    <div v-if="model.type === 'anchors'" ref="stickyMenuWrapper" class="subheader-top">
      <button
        v-for="link in model.values"
        :key="link.url"
        ref="stickyMenuItems"
        class="subheader-link text--18"
        type="button"
        :class="{ isActive: link.isPopupLink ? false : activeLink === link.url }"
        @click="link.isPopupLink ? openPopup(model.popup) : toAnchor(link.url)"
        v-html="link.linkLabel"
      />
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import stickyMenu from '~/mixins/stickyMenu'
import popupMethods from '~/mixins/popupMethods'

export default {
  components: {
  },
  mixins: [stickyMenu, popupMethods],
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
    },
    stickyAnchors() {
      return this.model.values.map((anchor) => {
        return {
          href: anchor.url,
          id: anchor.url
        }
      })
    }
  },
  mounted() {
    if (process.browser) {
      this.activeLink = (this.model.values[0] || {}).url
    }
  },
  methods: {
    toAnchor(id) {
      this.activeLink = id
      this.scrollToSection(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.subheader {
  position: sticky;
  position: -webkit-sticky;
  top: calc(#{$headerHeight} - .1rem);
  z-index: $zLayerSticky;
  overflow: hidden;
  @include tablet {
    top: calc(#{$headerHeightTablet} - .1rem);
  }
  @include mobile {
    top: calc(#{$headerHeightMobile} - .1rem);
  }

  .subheader-top {
    position: relative;
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid $border;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    @include backdrop;

    @include tablet_desktop {
      justify-content: center;
    }
  }

  .subheader-link {
    color: $border;
    line-height: 1.4;
    margin: 0 1.5rem;
    white-space: nowrap;
    transition: color .2s ease;
    @include desktop {
      margin: 0 3rem;
    }

    &.isActive,
    &:active {
      color: $black17;
    }
    @include desktop {
      &:hover {
        color: $black17;
      }
    }
  }
}
</style>
