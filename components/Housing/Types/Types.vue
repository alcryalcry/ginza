<template>
  <ul class="housing-types">
    <li
      v-for="item in model.values"
      :key="item.id"
      class="housing-types-item"
      :class="{ isActive: item.id === activeType }"
    >
      <button
        type="button"
        class="housing-types-btn"
        @click="selectType(item.id)"
      >
        {{ item.title }}
      </button>
    </li>
  </ul>
</template>

<script>
import MODEL from './model'

export default {
  components: {
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    activeType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  },
  methods: {
    selectType(id) {
      this.$emit('select-type', id)
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
  }
}
</style>
