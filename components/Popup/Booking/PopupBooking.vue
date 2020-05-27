<template>
  <div v-if="GET_POPUP_TYPE === 'popupBooking'" v-bsl:reserveScrollBarGap="GET_POPUP_STATUS" class="popup-booking">
    <div class="popup-content">
      <div class="popup-head-row">
        <div class="popup-close">
          <button class="burger" type="button" @click="CLOSE_POPUP">
            <div class="burger-button">
              <div class="line" />
              <div class="line" />
              <div class="line" />
            </div>
          </button>
        </div>
        <transition mode="out-in" name="fade-reversed">
          <div v-if="!isShowResult" key="title" class="text--24 popup-head-title" v-html="$t('booking.title')" />
        </transition>
      </div>
      <div class="popup-booking-container" :class="{ isShowResult, isLoading }">
        <transition mode="out-in" name="list-fade">
          <FormGenerator v-if="!isShowResult" key="form" :is-loading="isLoading" :info="model.fields" @formSubmit="formSubmit" />
          <div v-else key="result" class="result">
            <div class="result-icon">
              <div class="icon">
                <iconCheck />
              </div>
            </div>
            <h5 v-if="model.resultTitle" class="result-title" v-html="model.resultTitle" />
            <p v-if="model.resultDescription" class="result-desc" v-html="model.resultDescription" />
            <a v-if="model.resultLink" :href="model.resultLink.href" class="result-link" v-html="model.resultLink.label" />
          </div>
        </transition>
      </div>
    </div>
    <div class="popup-image">
      <picture v-if="model.image" class="image">
        <img :src="model.image" alt="">
      </picture>
      <picture v-if="model.logo" class="logo">
        <img :src="model.logo" alt="">
      </picture>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import axios from '~/plugins/axios'
import { API_ROUTES_BOOKING_FORM } from '~/config/constants'

import FormGenerator from '~/components/FormGenerator/FormGenerator'
import iconCheck from '~/assets/svg/check.svg'

export default {
  name: 'PopupBooking',
  components: {
    FormGenerator,
    iconCheck
  },
  data() {
    return {
      isLoading: false,
      isShowResult: false
    }
  },
  computed: {
    model() {
      return MODEL(this.GET_POPUP_CONTENT)
    },
    ...mapGetters({
      GET_POPUP_TYPE: 'popup/GET_POPUP_TYPE',
      GET_POPUP_STATUS: 'popup/GET_POPUP_STATUS',
      GET_POPUP_CONTENT: 'popup/GET_POPUP_CONTENT'
    })
  },
  methods: {
    ...mapMutations({
      CLOSE_POPUP: 'popup/CLOSE_POPUP'
    }),
    formSubmit(data) {
      if (this.isLoading) {
        return
      }

      this.isLoading = true
      const formData = new FormData()
      for (const key in data) {
        if (key) {
          formData.set(key, data[key])
        }
      }
      axios.post(API_ROUTES_BOOKING_FORM, formData)
        .then(({ data }) => {
          if (data.status) {
            this.isShowResult = true
          }
        }).catch((e) => {
          console.error(e, API_ROUTES_BOOKING_FORM)
        }).then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-booking {
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  @include desktop {
    flex-flow: row nowrap;
    align-items: stretch;
    margin-bottom: 6rem;
  }

  .popup-booking-container {
    transition: opacity .3s ease;
    &.isLoading {
      opacity: .5;
      pointer-events: none;
      > * {
        pointer-events: none;
      }
    }
    &.isShowResult {
      @include desktop {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }

  .popup-content {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    padding: 3rem $sectionOffsetHorizontalMobile;
    overflow: unset;
    z-index: 1;
    @include tablet {
      width: 60rem;
      margin: 0 auto;
      padding: 4rem $sectionOffsetHorizontalTablet;
    }
    @include desktop {
      max-width: 49rem;
      padding: 6rem 8rem 6rem 13rem;
    }
  }

  &::v-deep {
    .form {
      .submit-container {
        @include desktop {
          position: sticky;
          bottom: 0;
        }
      }
      .submit-btn {
        background: $black17;
        color: $white;
        &:active {
          background: $brown;
          color: $white;
        }
        @include desktop {
          &:hover {
            background: $brown;
            color: $white;
          }
        }
      }
    }
  }
}

.result {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 1;
  text-align: center;
  @include desktop {
    margin: auto 0;
  }
  .result-title {
    margin-bottom: 1.5rem;
  }
  .result-link {
    padding-top: 4rem;
    margin-top: auto;
    transition: color .2s ease;
    &:active {
      color: $brown;
    }
    @include desktop {
      &:hover {
        color: $brown;
      }
    }
  }
  .result-description {
    margin-top: auto;
    margin-bottom: 1.5rem;
  }
  .result-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    width: 11rem;
    height: 11rem;
    margin-top: 3rem;
    margin-bottom: 4.5rem;
    padding: 4rem;
    border-radius: 50%;
    background: $gray30;
    color: $green;
    @include desktop {
      margin-top: auto;
    }
  }
  .icon {
    display: flex;
  }
}

.popup-image {
  position: relative;
  order: -1;
  z-index: 1;
  @include tablet {
    height: 50rem;
    z-index: 0;
  }
  @include mobile {
    height: 40rem;
    z-index: 0;
  }
  @include desktop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: calc(100% - 49rem);
    order: 2;
  }
  pointer-events: none;
  .image {
    display: flex;
    height: 100%;
    img {
      object-position: 50%;
    }
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14rem;
    height: 7rem;
    transform: translate3d(-50%, -50%, 0);
    img {
      object-fit: contain;
    }
  }
}

.popup-head-row {
  position: sticky;
  position: -webkit-sticky;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include tablet {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem 4rem;
    background: linear-gradient(180deg, rgba($black17,1) 0%, rgba($black17,.5) 75%, rgba($black17,0) 100%);
    z-index: 1;
  }
  @include mobile {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    background: linear-gradient(180deg, rgba($black17,1) 0%, rgba($black17,.5) 75%, rgba($black17,0) 100%);
    z-index: 2;
  }
}

.burger {
  display: flex;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
  &:active {
    color: $brown;
    outline: none;
  }
  @include desktop {
    &:hover {
      color: $brown;
    }
  }
}

@include burger_btn;

</style>
