<template>
  <Section class="fixed-actions section--no-p">
    <div class="actions" :class="{ isScrolled: GET_HEADER_STATUS || GET_MENU_STATUS, isShowMenu: GET_MENU_STATUS }">
      <ul class="actions-list">
        <li v-for="item in model.values" :key="item.id" :class="{ 'd-show': !item.isMobile }" class="actions-item">
          <a
            v-if="item.type === 'link'"
            class="actions-button"
            :href="item.href"
            :download="item.isDownload"
            target="_blank"
          >
            <span v-html="item.label" />
          </a>
          <button
            v-else-if="item.type === 'popup'"
            class="actions-button"
            @click="openPopup(item.popup)"
          >
            <span v-html="item.label" />
            <span v-if="item.id === 'booking'" class="icon">
              <iconArrow />
            </span>
          </button>
          <div
            v-else-if="item.type === 'cities'"
            class="actions-button"
          >
            <CitiesDropdown />
          </div>
          <!-- <button
            v-else-if="item.type === 'cities'"
            class="actions-button"
            @click="toggleComponent('cities')"
          >
            <span v-html="item.label" />
            <span class="icon bold">+</span>
          </button> -->
        </li>
      </ul>
    </div>
    <!-- <div class="hidden-content">
      <transition name="list-fade" mode="out-in">
        <div key="cities" v-if="activeComponent === 'cities'" class="actions-hidden actions-cities">
          <CitiesDropdown />
        </div>
      </transition>
    </div> -->
  </Section>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import Section from '~/components/Utils/Section'
import iconArrow from '~/assets/svg/arrow.svg'
import popupMethods from '~/mixins/popupMethods'
import CitiesDropdown from '~/components/Cities/CitiesDropdown'

export default {
  name: 'FixedActions',
  components: {
    Section,
    CitiesDropdown,
    iconArrow
  },
  mixins: [popupMethods],
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeComponent: null
    }
  },
  computed: {
    ...mapGetters({
      GET_HEADER_STATUS: 'header/GET_HEADER_STATUS',
      GET_MENU_STATUS: 'header/GET_MENU_STATUS'
    }),
    model() {
      return MODEL(this.info)
    }
  },
  methods: {
    closeComponent() {
      this.activeComponent = null
    },
    toggleComponent(name) {
      if (this.activeComponent !== name) {
        this.activeComponent = name
        return
      }
      this.activeComponent = null
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-actions {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2.5rem;
  z-index: 100;
  &::v-deep {
    >.container {
      display: flex;
      justify-content: center;
    }
  }
}

.actions {
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 5rem;
  background: $brown;
  padding: 0 3rem;
  border-radius: 4px;
  border: 1px solid $brown;
  transition: opacity .2s ease;
  @include mobile {
    width: 100%;
  }
  &.isShowMenu {
    @include mobile_tablet {
      opacity: 0;
      pointer-events: none;
    }
  }

  .booking--main & {
    background-color: $white;
    border-color: $border;
    .actions-item {
      .actions-button {
        color: $black17;
        &::v-deep {
          .cities-item.isActive .cities-btn {
            color: $black17;
          }
        }
        &:active {
          color: $brown;
          &::v-deep {
            .cities-item.isActive .cities-btn {
              color: $brown;
            }
          }
        }
        @include desktop {
          &:hover {
            color: $brown;
            &::v-deep {
              .cities-item.isActive .cities-btn {
                color: $brown;
              }
            }
          }
        }
      }
    }
    &.isScrolled {
      background-color: $brown;
      border-color: $brown;
      .actions-item {
        .actions-button {
          color: $white;
          &::v-deep {
            .cities-item.isActive .cities-btn {
              color: $white;
            }
          }
        }
      }
    }
  }
  .page--dark & {
    background-color: $white;
    border-color: $border;
    .actions-item {
      .actions-button {
        color: $black17;
        &:active {
          color: $brown;
          &::v-deep {
            .cities-item.isActive .cities-btn {
              color: $brown;
            }
          }
        }
        @include desktop {
          &:hover {
            color: $brown;
            &::v-deep {
              .cities-item.isActive .cities-btn {
                color: $brown;
              }
            }
          }
        }
      }
    }
  }

  .actions-list {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex: 1 1 auto;
    @include mobile {
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
    }
  }

  .actions-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex: 1 1 auto;
    padding: 0 3rem;
    @include mobile {
      padding: 0 2rem;
      margin: 2rem 0;
      width: 100%;
    }
    & + .actions-item {
      &::before {
        content: '';
        position: absolute;
        top: 1.2rem;
        left: 0;
        width: 1px;
        height: calc(100% - 2.4rem);
        background: $border;
        @include mobile_tablet {
          content: none;
        }
      }
    }
    .actions-button {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      color: $white;
      transition: color .2s ease;
      &::v-deep {
        .cities-item.isActive .cities-btn {
          color: $white;
        }
      }
      &:active {
        color: rgba($white, .5);
        &::v-deep {
          .cities-item.isActive .cities-btn {
            color: rgba($white, .5);
          }
        }
      }
      @include desktop {
        &:hover {
          color: rgba($white, .5);
          &::v-deep {
            .cities-item.isActive .cities-btn {
              color: rgba($white, .5);
            }
          }
        }
      }
      @include mobile {
        justify-content: center;
        text-align: center;
      }
      .icon {
        margin: .3rem 1.5rem 0;
        display: flex;
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  &::v-deep{
    .cities-dropdown {
      display: flex;
      align-items: center;
      height: 100%;
      .cities-item.isActive {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0;
        .cities-btn {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .icon {
          display: none;
        }
      }
      .cities-btn {
        font-size: 1.6rem;
        line-height: 2.2rem;
        letter-spacing: 0.02rem;
      }
      .dropdown-list {
        top: auto;
        bottom: calc(100% + 2rem);
      }
    }
  }
}
</style>
