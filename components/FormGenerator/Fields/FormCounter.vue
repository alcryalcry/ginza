<template>
  <div
    class="input-label"
    :class="{
      'is-invalid': isInvalid,
      'is-disabled': disabled,
    }"
  >
    <div class="input-placeholder text--16">
      <span>{{ label }}</span>
    </div>
    <div class="form-counter">
      <button class="counter-btn" type="button" @click="count(-1)">—</button>
      <input
        :value="model"
        class="input"
        type="number"
        :name="name"
        :disabled="disabled"
        @input="changeValue"
      >
      <button class="counter-btn" type="button" @click="count(1)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormCounter',
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
      type: Number,
      default: 1
    },
    minValue: {
      type: Number,
      default: 1
    },
    maxValue: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {
      model: null
    }
  },
  mounted() {
    this.model = this.value
    this.$emit('input-change', {
      model: this.model,
      minValue: this.minValue,
      maxValue: this.maxValue
    })
  },
  methods: {
    count(action) {
      this.model += action
      this.changeValue(false, true)
    },
    changeValue(e, isCounter) {
      const value = isCounter ? this.model : +e.target.value.replace(/[-+,.]*/g, '')
      let val = null
      if (value.length === 0) {
        val = 0
      } else if (+value > this.maxValue) {
        val = this.maxValue
      } else if (+value < this.minValue) {
        val = 0
      } else {
        val = +value
      }
      this.model = val
      if (!isCounter) {
        e.target.value = val
      }
      this.$emit('input-change', {
        model: this.model,
        minValue: this.minValue,
        maxValue: this.maxValue
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.form-counter {
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
}
.input-placeholder {
  flex: 1 1 auto;
}
.counter-btn {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.4rem;
  color: $black17;
  font-weight: $bold;
  width: 1.8rem;
  height: 1.8rem;
  &::before {
    content: '';
    @include absolute;
    border-radius: 50%;
    border: 1px solid $border;
  }
}
.input-label {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $border;

  &.is-invalid {
    color: $red;
    .input-placeholder {
      color: $red;
    }
    &::before {
      opacity: 1;
    }
  }
  &.is-disabled {
    opacity: 0.5;
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
  }
}

.input {
  display: block;
  width: 7rem;
  text-align: center;
  box-sizing: border-box;
  padding: 2rem 0;
  min-height: 5rem;
  border-radius: 0;
  background: transparent;
  color: $black;
  font-size: 5rem;
  line-height: 6rem;
  font-weight: $light;
  letter-spacing: 0.01rem;
  font-family: $fontBase;
  transition: 0.3s ease;
  appearance: none;

  &:focus {
    outline: none;
  }
}
</style>
