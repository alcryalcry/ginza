<template>
  <div class="subheader">
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'

export default {
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    currentActiveLink: {
      type: String,
      default: 'apartments'
    }
  },
  data() {
    return {
      activeLink: ''
    }
  },
  computed: {
    ...mapGetters({
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_CURRENT_HOUSING_TYPE: 'housing/GET_CURRENT_HOUSING_TYPE'
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
      this.$emit('select-type', type)
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
