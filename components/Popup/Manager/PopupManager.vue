<template>
  <div v-if="GET_POPUP_TYPE === 'popupManager'" v-bsl:reserveScrollBarGap="GET_POPUP_STATUS" class="popup-manager">
    <div class="popup-content">
      <div class="popup-head-row">
        <div class="logo">
          <iconLogo />
        </div>
        <div class="popup-close">
          <button class="burger" type="button" @click="CLOSE_POPUP">
            <div class="burger-button">
              <div class="line" />
              <div class="line" />
              <div class="line" />
            </div>
          </button>
        </div>
      </div>
      <div class="popup-manager-container" :class="{ isShowResult, isLoading }">
        <div class="title-block">
          <h1 v-if="$t('manager.title')" class="title title--h2" v-html="$t('manager.title')" />
          <p v-if="$t('manager.tag')" class="tag text--14" v-html="$t('manager.tag') + ' ' + GET_SOCIAL.phone" />
        </div>
        <transition mode="out-in" name="list-fade">
          <div v-if="!isShowResult" key="form" class="form-content">
            <FormGenerator
              :btn-label="$t('popup.submit')"
              :btn-submit-class="'link link--brown link--tdu'"
              :is-loading="isLoading"
              :info="$t('manager.fields')"
              @formSubmit="formSubmit"
            />
            <div class="logo-love">
              <iconLove />
            </div>
            <p v-if="$t('manager.disclaimer')" class="disclaimer text--12" v-html="$t('manager.disclaimer')" />
          </div>
          <div v-else key="result" class="result">
            <div class="result-icon">
              <div class="icon">
                <iconCheck />
              </div>
            </div>
            <h5 v-if="$('booking.resultTitle')" class="result-title" v-html="$t('booking.resultTitle')" />
            <p v-if="$('booking.resultDescription')" class="result-desc" v-html="$t('booking.resultDescription')" />
            <a v-if="GET_SOCIAL.phone" :href="`tel:${GET_SOCIAL.phone}`" class="result-link" v-html="GET_SOCIAL.phone" />
          </div>
        </transition>
      </div>
    </div>
    <div class="popup-image">
      <picture class="image">
        <img src="@/assets/images/popup-manager.jpg" alt="">
      </picture>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import MODEL from './model'
import axios from '~/plugins/axios'
import { API_ROUTES_MANAGER_FORM } from '~/config/constants'

import FormGenerator from '~/components/FormGenerator/FormGenerator'
import iconCheck from '~/assets/svg/check.svg'
import iconLogo from '~/assets/svg/logo.svg'
import iconLove from '~/assets/svg/love.svg'

export default {
  name: 'PopupManager',
  components: {
    FormGenerator,
    iconCheck,
    iconLogo,
    iconLove
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
      GET_SOCIAL: 'GET_SOCIAL',
      GET_POPUP_TYPE: 'popup/GET_POPUP_TYPE',
      GET_POPUP_STATUS: 'popup/GET_POPUP_STATUS',
      GET_POPUP_CONTENT: 'popup/GET_POPUP_CONTENT',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY'
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
      const formData = {}
      for (const key in data) {
        if (key) {
          formData[key] = data[key]
        }
      }
      formData.city = this.GET_CURRENT_CITY

      axios.post(API_ROUTES_MANAGER_FORM, formData)
        .then(({ data }) => {
          if (data.status) {
            this.isShowResult = true
          }
        }).catch((e) => {
          const {
            response = {}
          } = e || {}
          console.error(response, API_ROUTES_MANAGER_FORM)
        }).then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-manager {
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

  &::v-deep {
    .submit-container {
      @include mobile {
        margin-top: 4rem;
      }
    }
    .input-placeholder {
      font-weight: $light;
      color: $gray69;
      letter-spacing: 0.025rem;
    }
  }

  .popup-manager-container {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
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
      margin-left: auto;
      max-width: calc(100% - 48rem);
      padding: 2rem 8rem 6rem 10rem;
    }
  }

  &::v-deep {
    .form {
      @include desktop {
        max-width: 32rem;
      }
      .submit-btn {
        width: auto;
        height: auto;
        text-transform: none;
      }
    }
  }
}

.popup-image {
  position: relative;
  display: none;
  order: -1;
  z-index: 1;
  pointer-events: none;
  @include desktop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 48rem;
    order: 2;
  }
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
    z-index: 1;
  }
  @include mobile {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    z-index: 2;
  }
}

.burger {
  display: flex;
  align-items: center;
  margin-right: -1rem;
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

.tag {
  margin-top: 1rem;
  color: $gray69;
  letter-spacing: 0.1rem;
  &::v-deep {
    a {
      font-weight: $medium;
      transition: color .2s ease, border-color .2s ease;
      &:active {
        color: $brown;
      }
      @include desktop {
        &:hover {
          color: $brown;
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
  @include tablet_desktop {
    justify-content: center;
    margin: auto;
    max-width: 32rem;
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
    background: $brown;
    color: $white;
    @include desktop {
      // margin-top: auto;
    }
  }
  .icon {
    display: flex;
  }
}

.title-block {
  margin-top: 6rem;
}

.form-content {
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin-top: 6rem;
  @include mobile {
    margin-top: 4rem;
  }
}

.logo {
  display: block;
  width: 11rem;
  height: 4rem;
  @include mobile {
    width: 8.7rem;
    height: 3rem;
  }
}

.logo-love {
  margin-top: 2rem;
  padding: 3rem 0;
  width: 20rem;
  height: 12rem;
  // @include mobile {
  //   width: 25rem;
  //   height: 7rem;
  // }
}

.disclaimer {
  color: $gray69;
  letter-spacing: 0.02rem;
  margin-top: auto;
  line-height: 1.5;
  padding-top: 3rem;
  &::v-deep {
    a {
      color: $brown;
      transition: color .2s ease;
      &:active {
        color: $brownHover;
      }
      @include desktop {
        &:hover {
          color: $brownHover;
        }
      }
    }
  }
}

@include burger_btn;

</style>
