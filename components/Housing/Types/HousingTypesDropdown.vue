<template>
  <div class="housing-types-dropdown">
    <transition mode="out-in" name="fade-reversed">
      <div :key="GET_CURRENT_HOUSING_TYPE.id" class="housing-types-item isActive">
        <button
          type="button"
          class="housing-types-btn text--18"
          @click="toggleList"
          v-html="GET_CURRENT_HOUSING_TYPE.name"
        />
      </div>
    </transition>
    <transition mode="out-in" name="list-fade-reversed">
      <ul v-if="isOpen" :key="1" v-on-clickaway="closeList" class="dropdown-list">
        <li
          v-for="type in filteredTypes"
          :key="type.id"
          class="housing-types-item"
          :class="{ isActive: type.id === GET_CURRENT_HOUSING_TYPE.id }"
        >
          <button
            type="button"
            class="housing-types-btn text--18"
            @click="selectType(type)"
            v-html="type.name"
          />
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  components: {
  },
  mixins: [ clickaway ],
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      GET_HOUSING_TYPES: 'housing/GET_HOUSING_TYPES',
      GET_CURRENT_HOUSING_TYPE: 'housing/GET_CURRENT_HOUSING_TYPE'
    }),
    filteredTypes() {
      return this.GET_HOUSING_TYPES.filter(item => item.id !== this.GET_CURRENT_HOUSING_TYPE.id)
    }
  },
  methods: {
    ...mapMutations({
      SET_CURRENT_HOUSING_TYPE: 'housing/SET_CURRENT_HOUSING_TYPE'
    }),
    selectType(city) {
      this.SET_CURRENT_HOUSING_TYPE(city)
      this.closeList()
    },
    toggleList() {
      this.isOpen = !this.isOpen
    },
    closeList() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.housing-types-dropdown {
  position: relative;
  .dropdown-list {
    position: absolute;
    top: calc(100% + 2rem);
    left: 0;
    padding: 3rem 3.5rem 3rem 0;
    background: $white;
    box-shadow: 0px 10px 37px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid $border;
    z-index: 1;
    @include tablet {
      padding-right: 4rem;
    }
    @include mobile {
      padding-right: 3rem;
    }
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
