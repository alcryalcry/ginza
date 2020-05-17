<template>
  <label
    class="input-label"
    :class="{ isFilled, isInvalid, disabled, visually_hidden: type === 'hidden' }"
  >
    <input
      ref="phone"
      v-model="model"
      :name="name"
      :type="type"
      :disabled="disabled"
      class="input"
    >
    <span class="input-placeholder">
      <span>{{ label }}</span>
    </span>
  </label>
</template>

<script>
import { parsePhoneNumberFromString } from 'libphonenumber-js'

export default {
  name: 'FormPhone',
  props: {
    label: {
      type: String,
      default: ''
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
      isPhoneValid: false,
      model: ''
    }
  },
  computed: {
    isFilled() {
      return this.model.length > 0
    }
  },
  watch: {
    model(val) {
      this.validatePhone()
    }
  },
  mounted() {
    if (this.type === 'hidden' && this.value) {
      this.$emit('input-change', this.model)
    }
  },
  methods: {
    validatePhone() {
      let str = ''
      switch (this.model.charAt(0)) {
        case '+':
          str = this.model
          break
        case '8':
          str = `+7${this.model.substring(1)}`
          break
        default:
          str = `+${this.model}`
          break
      }
      const phoneNumber = parsePhoneNumberFromString(str)
      this.isPhoneValid = phoneNumber ? phoneNumber.isValid() : false

      this.model = phoneNumber ? phoneNumber.formatInternational() : this.model
      this.$emit('input-change', { model: this.model, isValid: this.isPhoneValid })
    }
  }
}
</script>

<style lang="scss" scoped>
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
  box-sizing: border-box;
  padding: 2.5rem 0 2rem;
  min-height: 5rem;
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
}
</style>
