<template>
  <div class="cities-dropdown">
    <div
      class="input-label"
      :class="{
        isFilled,
        isInvalid,
      }"
    >
      <button
        type="button"
        class="input"
        @click="toggleList"
      >
        <transition mode="out-in" name="fade-reversed">
          <span :key="model.id" v-html="model.label" />
        </transition>
      </button>
      <span class="input-placeholder">
        <span>{{ label }}</span>
      </span>
    </div>
    <transition mode="out-in" name="list-fade-reversed">
      <ul v-if="isOpen" :key="1" v-on-clickaway="closeList" class="dropdown-list">
        <li
          v-for="item in options"
          :key="item.id"
          :class="{ isActive: model.id === item.id }"
          class="cities-item"
        >
          <button
            type="button"
            class="cities-btn text--18"
            @click="selectItem(item)"
            v-html="item.label"
          />
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'FormPseudoSelect',
  mixins: [ clickaway ],
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => ([])
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false,
      model: {}
    }
  },
  computed: {
    isFilled() {
      return !!this.model.id
    }
  },
  mounted() {
    this.$set(this, 'model', this.value)
  },
  methods: {
    selectItem(item) {
      this.$set(this, 'model', item)
      this.$emit('input-change', item.id)
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
.cities-dropdown {
  position: relative;
  .cities-item {
    position: relative;
    transition: background-color .2s ease;
    &:active {
      background-color: $brown;
      .cities-btn {
        color: $white;
      }
    }
    @include desktop {
      &:hover {
        background-color: $brown;
        .cities-btn {
          color: $white;
        }
      }
    }

    &.isActive {
      background-color: rgba($brown, .75);
      .cities-btn {
        color: $white;
      }
    }
  }
  .dropdown-list {
    position: absolute;
    top: calc(100% + 2rem);
    left: 0;
    width: 100%;
    padding: 3rem 0;
    background: $white;
    box-shadow: 0px 10px 37px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid $border;
    z-index: 1;
    @include mobile {
      padding: 2rem 0;
      top: auto;
      bottom: 100%;
    }
  }
}
  .cities-btn {
    width: 100%;
    text-align: left;
    white-space: nowrap;
    padding: 1rem 3.5rem;
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

.input-label {
  position: relative;
  display: block;
  width: 100%;
  &.isInvalid {
    color: $red;
    .input-placeholder {
      color: $red;
    }
    &::before {
      opacity: 1;
    }
  }
  &.disabled {
    opacity: 0.5;
  }
  &.isFilled {
    .input-placeholder {
      top: 0;
      transform: scale(0.8);
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - .3rem);
    left: calc(-2.6rem);
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    background: $red;
    opacity: 0;
    transition: opacity .3s ease;
    @include mobile {
      content: none;
    }
  }
}

.input {
  display: block;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  padding: 2.5rem 0 2rem;
  min-height: 6.8rem;
  border-bottom: 1px solid $border;
  border-radius: 0;
  background: transparent;
  color: $black;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: 0.02rem;
  font-family: $fontBase;
  transition: 0.3s ease;
  appearance: none;

  &:focus {
    outline: none;
    & + .input-placeholder {
      top: 0;
      transform: scale(0.8);
    }
  }
}

.input-placeholder {
  position: absolute;
  top: 2rem;
  left: 0;
  display: flex;
  color: $black17;
  transition: 0.3s;
  transform-origin: left;
  pointer-events: none;
}
</style>
