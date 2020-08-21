<template>
  <Section
    class="section--no-p section--big subheader"
    container-class-names="subheader-container"
    :class="{isScrolled: GET_HEADER_STATUS}"
  >
    <div class="cities">
      <CitiesDropdown />
    </div>
    <div v-if="needMenu" class="subheader-menu">
      <div ref="stickyMenuWrapper" class="subheader-top">
        <button
          v-for="type in GET_HOUSING_TYPES"
          :key="type.id"
          ref="stickyMenuItems"
          class="subheader-link text--18"
          type="button"
          :class="{ isActive: type.id === GET_CURRENT_HOUSING_TYPE.id }"
          @click="selectType(type)"
          v-html="type.name"
        />
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import CitiesDropdown from '~/components/Cities/CitiesDropdown'

export default {
  components: {
    CitiesDropdown,
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    currentActiveLink: {
      type: String,
      default: 'apartments'
    },
    needMenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeLink: ''
    }
  },
  computed: {
    ...mapGetters({
      GET_HEADER_STATUS: 'header/GET_HEADER_STATUS',
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_CURRENT_HOUSING_TYPE: 'housing/GET_CURRENT_HOUSING_TYPE',
      SET_CURRENT_CITY: 'localStorage/SET_CURRENT_CITY'
    }),
    model() {
      return MODEL(this.info)
    }
  },
  mounted() {
    this.activeLink = this.currentActiveLink
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_HOUSING_TYPE: 'housing/SET_CURRENT_HOUSING_TYPE'
    }),
    selectType(type) {
      this.SET_CURRENT_HOUSING_TYPE(type)
      this.SET_CURRENT_CITY(type)
      this.$emit('select-type', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.subheader {
  position: sticky;
  position: -webkit-sticky;
  top: calc(#{$headerHeight} - .05rem);
  padding: 1rem 0;
  border-bottom: 1px solid $border;
  z-index: $zLayerSticky;
  @include backdrop;

  @include tablet {
    top: calc(#{$headerHeightTablet} - .05rem);
  }
  @include mobile {
    top: calc(#{$headerHeightMobile} - .05rem);
  }

  &.isScrolled {
    .subheader-link {
      color: $gray;
    }
  }

  &::v-deep {
    .subheader-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 2.6rem;
      @include desktop {
        padding: 0 25rem;
      }
    }
  }
  .cities {
    display: none;
    @include desktop {
      display: block;
      position: absolute;
      top: 50%;
      left: $sectionOffsetHorizontal;
      max-width: 25rem;
      transform: translateY(-50%);
    }
  }

  .subheader-menu {
    overflow: hidden;
  }

  .subheader-top {
    position: relative;
    display: flex;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

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
