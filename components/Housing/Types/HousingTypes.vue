<template>
  <ul class="housing-types">
    <li
      v-for="type in curList"
      :key="type.id"
      class="housing-types-item"
      :class="{ isActive: type.id === curItem.id }"
    >
      <button
        type="button"
        class="housing-types-btn text--18"
        @click="selectType(type)"
        v-html="type.name"
      />
      <ExternalLink
        v-if="type.id === curItem.id"
        :key="GET_CURRENT_HOUSING_TYPE.id"
        class="link link--brown"
        :to="'/' + GET_CURRENT_CITY.en_name + GET_CURRENT_HOUSING_TYPE.id"
      >
        {{ $t('housing.all') }}
      </ExternalLink>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    ExternalLink
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    customList: {
      type: Array,
      default: () => ([])
    },
    selectedItem: {
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
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_CURRENT_HOUSING_TYPE: 'housing/GET_CURRENT_HOUSING_TYPE',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY',
    }),
    isCustomList() {
      return (this.customList || []).length
    },
    curItem() {
      return this.isCustomList ? this.selectedItem : this.GET_CURRENT_HOUSING_TYPE
    },
    curList() {
      return this.isCustomList ? this.customList : this.GET_HOUSING_TYPES
    }
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_HOUSING_TYPE: 'housing/SET_CURRENT_HOUSING_TYPE'
    }),
    selectType(type) {
      if (!this.isCustomList) {
        this.SET_CURRENT_HOUSING_TYPE(type)
      }
      this.$emit('select-type', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-types {
  @include mobile_tablet {
    margin-top: auto;
  }
  .housing-types-item {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 3.5rem;
    @include tablet {
      padding-left: 4rem;
    }
    @include mobile {
      padding-left: 3rem;
    }
    &.isActive {
      &::before {
        color: $black17;
        opacity: 1,
      }
      .housing-types-btn {
        color: $black17;
      }
    }
    & + .housing-types-item {
      margin-top: 2rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - .4rem);
      left: .4rem;
      display: flex;
      width: .8rem;
      height: .8rem;
      background: currentColor;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .housing-types-btn {
      cursor: pointer;
      color: $border;
      transition: color .2s ease;
      &:active {
        color: $black17;
      }
      @include desktop {
        &:hover {
          color: $black17;
        }
      }
    }

    .link {
      margin-left: 4rem;
    }
  }
}
</style>
