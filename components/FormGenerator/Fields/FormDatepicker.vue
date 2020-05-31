<template>
  <div class="form-datepicker" :class="{ disabled }">
    <client-only>
      <div class="input-label" :class="{ isInvalid }">
        <span class="input-placeholder">
          <span>{{ label }}</span>
        </span>
        <Datepicker
          v-model="value"
          class="form-input__control"
          :class="{ isActiveDates }"
          :language="currentLocale"
          :inline="true"
          :disabled="disabled"
          :monday-first="true"
          @selected="handleDateChange"
          @changedMonth="selectMonth"
          @selectMonth="selectMonth"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ru, en } from 'vuejs-datepicker/dist/locale'

export default {
  name: 'FormDatepicker',
  components: {
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      value: '',
      ru: ru,
      en: en,
      isActiveDates: false
    }
  },
  computed: {
    ...mapGetters({
      GET_LANG: 'GET_LANG'
    }),
    currentLocale() {
      return this[this.GET_LANG]
    }
  },
  methods: {
    handleDateChange(val) {
      this.$emit('input-change', +val)
    },
    selectMonth(payload) {
      const newDate = payload.timestamp ? payload.timestamp : payload
      const now = Date.now()
      this.isActiveDates = now <= +newDate
    }
  }
}
</script>

<style lang="scss" scoped>
.form-datepicker {
  .input-label {
    &::before {
      content: '';
      position: absolute;
      top: 1.4rem;
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
    .input-placeholder {
      position: absolute;
      top: .5rem;
      left: 0;
      pointer-events: none;
      transition: color .3s ease;
    }
    &.isInvalid {
      .input-placeholder {
        color: $red;
      }
      &::before {
        opacity: 1;
      }
    }
  }
  &::v-deep {
    &.disabled {
      .vdp-datepicker {
        pointer-events: none !important;
        * {
          pointer-events: none !important;
        }
      }
    }
    .vdp-datepicker {
      &.isActiveDates {
        .vdp-datepicker__calendar {
          .cell {
            &.day {
              opacity: 1;
              pointer-events: auto;
            }
          }
        }
      }
      .vdp-datepicker__calendar {
        max-width: 100%;
        margin-left: auto;
        background: transparent;
        border: none;

        header {
          display: flex;
          width: 60%;
          margin-left: auto;
          .up,
          .prev,
          .next {
            &:hover {
              background: none;
              color: $brown;
              &::after {
                background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi45MzA3NiA0OS40ODI4QzIuNTk1ODEgNDkuODI3NiAyLjE3NzEzIDUwIDEuNzE2NTkgNTBDMS4yNTYwNCA1MCAwLjgzNzM1OSA0OS44Mjc2IDAuNTAyNDE1IDQ5LjQ4MjhDLTAuMTY3NDcyIDQ4Ljc5MzEgLTAuMTY3NDcyIDQ3LjY3MjQgMC41MDI0MTUgNDYuOTgyOEwyMS44NTUxIDI1TDAuNTAyNDE1IDMuMDE3MjRDLTAuMTY3NDcyIDIuMzI3NTkgLTAuMTY3NDcyIDEuMjA2OSAwLjUwMjQxNSAwLjUxNzI0MUMxLjE3MjMgLTAuMTcyNDE0IDIuMjYwODcgLTAuMTcyNDE0IDIuOTMwNzYgMC41MTcyNDFMMjUuNDk3NiAyMy43NUMyNi4xNjc1IDI0LjQzOTcgMjYuMTY3NSAyNS41NjAzIDI1LjQ5NzYgMjYuMjVMMi45MzA3NiA0OS40ODI4WiIgZmlsbD0iI0IyN0E3OCIvPgo8L3N2Zz4K');
              }
              .page--dark & {
                &::after {
                  background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi45MzA3NiA0OS40ODI4QzIuNTk1ODEgNDkuODI3NiAyLjE3NzEzIDUwIDEuNzE2NTkgNTBDMS4yNTYwNCA1MCAwLjgzNzM1OSA0OS44Mjc2IDAuNTAyNDE1IDQ5LjQ4MjhDLTAuMTY3NDcyIDQ4Ljc5MzEgLTAuMTY3NDcyIDQ3LjY3MjQgMC41MDI0MTUgNDYuOTgyOEwyMS44NTUxIDI1TDAuNTAyNDE1IDMuMDE3MjRDLTAuMTY3NDcyIDIuMzI3NTkgLTAuMTY3NDcyIDEuMjA2OSAwLjUwMjQxNSAwLjUxNzI0MUMxLjE3MjMgLTAuMTcyNDE0IDIuMjYwODcgLTAuMTcyNDE0IDIuOTMwNzYgMC41MTcyNDFMMjUuNDk3NiAyMy43NUMyNi4xNjc1IDI0LjQzOTcgMjYuMTY3NSAyNS41NjAzIDI1LjQ5NzYgMjYuMjVMMi45MzA3NiA0OS40ODI4WiIgZmlsbD0iI0IyN0E3OCIvPgo8L3N2Zz4K');
                }
              }
            }
          }
          .prev,
          .next {
            &::after {
              @include absolute;
              margin: 0;
              border: none;
              background-size: 40%;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              // black
              background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi45MzA3NiA0OS40ODI4QzIuNTk1ODEgNDkuODI3NiAyLjE3NzEzIDUwIDEuNzE2NTkgNTBDMS4yNTYwNCA1MCAwLjgzNzM1OSA0OS44Mjc2IDAuNTAyNDE1IDQ5LjQ4MjhDLTAuMTY3NDcyIDQ4Ljc5MzEgLTAuMTY3NDcyIDQ3LjY3MjQgMC41MDI0MTUgNDYuOTgyOEwyMS44NTUxIDI1TDAuNTAyNDE1IDMuMDE3MjRDLTAuMTY3NDcyIDIuMzI3NTkgLTAuMTY3NDcyIDEuMjA2OSAwLjUwMjQxNSAwLjUxNzI0MUMxLjE3MjMgLTAuMTcyNDE0IDIuMjYwODcgLTAuMTcyNDE0IDIuOTMwNzYgMC41MTcyNDFMMjUuNDk3NiAyMy43NUMyNi4xNjc1IDI0LjQzOTcgMjYuMTY3NSAyNS41NjAzIDI1LjQ5NzYgMjYuMjVMMi45MzA3NiA0OS40ODI4WiIgZmlsbD0iIzE3MTcxNyIvPgo8L3N2Zz4K');
              transform: none;
            }
            .page--dark & {
              &::after {
              // white
                background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi45MzA3NiA0OS40ODI4QzIuNTk1ODEgNDkuODI3NiAyLjE3NzEzIDUwIDEuNzE2NTkgNTBDMS4yNTYwNCA1MCAwLjgzNzM1OSA0OS44Mjc2IDAuNTAyNDE1IDQ5LjQ4MjhDLTAuMTY3NDcyIDQ4Ljc5MzEgLTAuMTY3NDcyIDQ3LjY3MjQgMC41MDI0MTUgNDYuOTgyOEwyMS44NTUxIDI1TDAuNTAyNDE1IDMuMDE3MjRDLTAuMTY3NDcyIDIuMzI3NTkgLTAuMTY3NDcyIDEuMjA2OSAwLjUwMjQxNSAwLjUxNzI0MUMxLjE3MjMgLTAuMTcyNDE0IDIuMjYwODcgLTAuMTcyNDE0IDIuOTMwNzYgMC41MTcyNDFMMjUuNDk3NiAyMy43NUMyNi4xNjc1IDI0LjQzOTcgMjYuMTY3NSAyNS41NjAzIDI1LjQ5NzYgMjYuMjVMMi45MzA3NiA0OS40ODI4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4K');
              }
            }

          }
          .prev {
            &::after {
              transform: rotate(180deg);
            }
          }
        }

        .cell {
          &.blank {
            pointer-events: none;
          }
          &:not(.blank),
          &:not(.disabled) {
            &.day,
            &.month,
            &.year {
              &:hover {
                border-color: black;
              }
            }
          }
          &.selected {
            background: $brown;
            color: $white;
          }
          &.day {
            border: none;
            border-radius: 50%;
            opacity: .1;
            pointer-events: none;
            &.today {
              opacity: 1;
              pointer-events: auto;
              & ~ .day {
                pointer-events: auto;
                opacity: 1;
              }
            }
          }
          &.day,
          &.month,
          &.year {
            &:hover {
              border: none;
              color: $brown;
              &.selected {
                color: $white;
                background-color: $brownHover;
              }
            }
          }
        }
      }
    }
  }
}

</style>
