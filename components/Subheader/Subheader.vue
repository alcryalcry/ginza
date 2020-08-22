<template>
  <div class="subheader" :class="{ isScrolled: GET_HEADER_STATUS }">
    <div ref="stickyMenuWrapper" class="subheader-top">
      <button
        v-for="link in values"
        :key="link.url"
        ref="stickyMenuItems"
        class="subheader-link text--18"
        type="button"
        :class="{ isActive: link.isPopupLink ? false : activeLink === link.url }"
        @click="link.isPopupLink ? openPopup(popup) : toAnchor(link.url)"
        v-text="link.linkLabel"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import stickyMenu from '~/mixins/stickyMenu'
import popupMethods from '~/mixins/popupMethods'

export default {
  name: 'Subheader',
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
    ...mapGetters({
      GET_HEADER_STATUS: 'header/GET_HEADER_STATUS'
    }),
    model() {
      return MODEL(this.info)
    },
    values() {
      const values = this.model.values
      if (values && values.length === 1 && !values[0].linkLabel && !values[0].url) {
        return this.$t('subheader.services.values')
      }
      return this.model.values
    },
    popup() {
      return this.model.popup ? this.model.popup : this.$t('subheader.services.popup')
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
  top: calc(#{$headerHeight} - .05rem);
  z-index: $zLayerSticky;
  overflow: hidden;
  @include tablet {
    top: calc(#{$headerHeightTablet} - .05rem);
    height: 4.6rem;
    left: 0;
    right: 0;
    border-bottom: 1px solid $border;
  }
  @include mobile {
    top: calc(#{$headerHeightMobile} - .05rem);
    left: 0;
    right: 0;
    height: 4rem;
    border-bottom: 1px solid $border;
  }

  &.isScrolled {
    .subheader-link {
      color: $gray;
    }
  }

  .subheader-top {
    position: relative;
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid $border;
    width: 100%;
    overflow-x: auto;
    justify-content: center;
    -webkit-overflow-scrolling: touch;
    @include backdrop;

    @include mobile {
      padding-bottom: 2rem;
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
