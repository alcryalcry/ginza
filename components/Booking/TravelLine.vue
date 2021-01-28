<template>
  <div class="booking">
    <div class="content-col">
      <div class="section header-top section--big section--no-p">
        <div class="container">
          <div class="header-row">
            <div class="header-col left">
              <client-only>
                <button class="back" @click="goToPrevPage">
                  <div class="back-link">
                    <iconBack />
                  </div>
                  <span class="text text--13">
                    {{ $t("header.back") }}
                  </span>
                </button>
              </client-only>
            </div>
            <div class="header-col center">
              <div class="logo">
                <iconLogo />
              </div>
            </div>
            <div class="header-col right" />
          </div>
        </div>
      </div>
      <div class="popup-booking-container">
        <div id="tl-booking-form" />
        <div id="amk-booking-integration" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import moment from 'moment'
import MODEL from './model'
import iconLogo from '~/assets/svg/logo.svg'
import iconBack from '~/assets/svg/back.svg'
import axios from '~/plugins/axios'
import { API_ROUTES_BOOKING_FORM } from '~/config/constants'

// import FormGenerator from '~/components/FormGenerator/FormGenerator'
// import iconCheck from '~/assets/svg/check.svg'

export default {
  name: 'TravelLine',
  components: {
    // FormGenerator,
    // iconCheck,
    iconLogo,
    iconBack
  },
  data() {
    return {
      isLoading: false,
      isShowResult: false
    }
  },
  computed: {
    ...mapGetters({
      GET_POPUP_CONTENT: 'popup/GET_POPUP_CONTENT',
      GET_POPUP_EXTEND_CONTENT: 'popup/GET_POPUP_EXTEND_CONTENT',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY',
      GET_PREV_PAGE: 'localStorage/GET_PREV_PAGE'
    }),
    model() {
      return MODEL(this.GET_POPUP_CONTENT)
    },
    formFields() {
      const { adults = 1, children = 0, date, nights = 1 } = this.$route.query
      let datesRange = []
      if (date) {
        datesRange = [
          moment(date).format('YYYY.MM.DD'),
          moment(date, 'YYYY.MM.DD').add(nights, 'days')
        ]
      }
      return [
        {
          'type': 'cities',
          'label': this.$t('COMMON.SELECT_CITY'),
          'name': 'cities',
          'validate': [
            {
              'rule': 'required'
            }
          ]
        },
        {
          'type': 'counter',
          'label': this.$t('COMMON.OF_ADULTS'),
          'name': 'adults',
          'minValue': 1,
          'value': +adults,
          'mode': 'half',
          'validate': [
            {
              'rule': 'counter'
            }
          ]
        },
        {
          'type': 'counter',
          'label': this.$t('COMMON.OF_CHILDREN'),
          'name': 'children',
          'minValue': 0,
          'value': +children,
          'mode': 'half',
          'validate': [
            {
              'rule': 'counter'
            }
          ]
        },
        {
          'type': 'datesRange',
          'label': this.$t('COMMON.DATES'),
          'name': 'datesRange',
          'value': datesRange,
          'validate': [
            {
              'rule': 'required'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.initWidget()
  },
  methods: {
    goToPrevPage() {
      const prevPage = this.GET_PREV_PAGE
      if (prevPage) {
        this.$router.push({ path: prevPage })
      } else {
        this.$router.push({ path: '/' })
      }
    },
    initWidget() {
      /* eslint-disable eqeqeq */

      function initAMK() {
        (function (w) {
          const f = {}
          const amkI = w.amkI = (w.amkI || {})
          const ab = amkI.booking = (amkI.booking || {})
          ab.params = (ab.params || f)
          if (!ab.__loader) {
            ab.__loader = true
            const d = w.document; const s = d.createElement('script')
            s.type = 'text/javascript'
            s.async = true
            s.src = 'https://booking.amk-web.com/iframe-integration/ru/1077/loader.js';
            (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s)
          }
        })(window)
      }

      function initTL() {
        (function (w) {
          const q = [
            // TODO: прокинуть сюда TLHotelId
            // перейти на страницу, параметры: booking/?date=2020-06-08&nights=1&adults=1
            // поля для onBookingSuccess:
            // TLHotelId, (bookingNumber, guests, id)
            //
            ['setContext', 'TL-INT-ginza-new', 'ru'],
            ['embed', 'booking-form', {
              container: 'tl-booking-form',
              onBookingSuccess: () => {
              },
              onBookingSuccessProps: ['bookingNumber', 'providerName', 'price', 'currency', 'roomTypes']
            }]
          ]
          const t = w.travelline = (w.travelline || {})
          const ti = t.integration = (t.integration || {})
          ti.__cq = ti.__cq ? ti.__cq.concat(q) : q
          if (!ti.__loader) {
            ti.__loader = true
            const d = w.document
            const p = d.location.protocol
            const s = d.createElement('script')
            s.type = 'text/javascript'
            s.async = true
            s.src = (p == 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
            (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s)
          }
        })(window)
      }

      if (this.GET_CURRENT_CITY.booking_system === 'FD') {
        initAMK()
      } else {
        initTL()
      }
    },
    getNights(range) {
      if (range && range[0] && range[1]) {
        return moment(range[1]).diff(moment(range[0]), 'days')
      }
      return 1
    },
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
      const adults = formData.adults
      const children = formData.children
      const date = formData.datesRange[0]
      const nights = this.getNights(formData.datesRange)

      const query = this.$router.query
      this.$router.replace({ query: { ...query, date, nights, adults, children } })
      this.initWidget()
      this.isLoading = false
      // axios.post(API_ROUTES_BOOKING_FORM, formData)
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      //   .finally(() => {
      //     this.isLoading = false
      //   })
      // axios.post(API_ROUTES_BOOKING_FORM, formData)
      //   .then(({ status }) => {
      //     if (status === 200 || status === 201) {
      //       this.isShowResult = true
      //     }
      //  }).catch((e) => {
      //    const {
      //      response = {}
      //    } = e || {}
      //    console.error(response, API_ROUTES_BOOKING_FORM)
      //   }).then(() => {
      //     this.isLoading = false
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>

  .header-top {
    position: relative;
    padding: 2rem 0;
    background: $white;
    border-bottom: 1px solid $border;
    z-index: $zLayerMenuOpenedBurgerBtn;
    transition: transform .2s ease .2s, background-color .2s ease, border-color .2s ease;
    @include mobile {
      padding: 1.5rem 0;
    }
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-col {
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    &.left {
      justify-content: flex-start;
      align-items: center;
      flex-basis: 35%;
    }
    &.center {
      justify-content: center;
      flex-basis: 30%;
    }
    &.right {
      justify-content: flex-end;
      flex-basis: 35%;
    }
    .logo {
      display: block;
      width: 13rem;
      height: 5rem;
      transition: color .2s ease;
      @include desktop {
        &:hover {
          color: $brown;
        }
      }
      @include mobile {
        width: 9rem;
        height: 3rem;
      }
    }
  }

  .booking {
    max-height: 100vh;
    position: relative;
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    @include desktop {
      flex-flow: row nowrap;
      align-items: stretch;
    }

    .booking-container {
      transition: opacity .3s ease;
      @include mobile_tablet {
        padding-top: 4rem;
      }

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
        max-width: 100rem;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 0 0 13rem;
      }
    }

    .content-col-wrapper {
      max-width: 100%;
      padding: 0;
      @include desktop {
        max-height: 100vh;
        overflow: hidden;
      }
    }

    .content-col {
      padding: 0;
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
      max-width: 100%;
      @include tablet {
        max-width: 100%;
      }
      @include desktop {
        height: 100%;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    &::v-deep {
      .form {
        .submit-container {
          position: sticky;
          bottom: 0;
          @include mobile {
            bottom: 2rem;
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
      background: $brown;
      color: white;
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
      display: none;
      // height: 50rem;
      // z-index: 0;
    }
    @include mobile {
      display: none;
      // height: 40rem;
      // z-index: 0;
    }
    @include desktop {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      width: calc(100% - 100rem);
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
    .logo {
      margin: 6rem auto !important;
    }
    @include tablet {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 2rem 4rem;
      color: $black17;
      // background: linear-gradient(180deg, rgba($black17,1) 0%, rgba($black17,.5) 75%, rgba($black17,0) 100%);
      z-index: 1;
    }
    @include mobile {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 1.5rem 2rem;
      color: $black17;
      // background: linear-gradient(180deg, rgba($black17,1) 0%, rgba($black17,.5) 75%, rgba($black17,0) 100%);
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

    @include mobile_tablet {
      color: $black17;
    }
    @include desktop {
      &:hover {
        color: $brown;
      }
    }
    @include burger_btn;
  }

  .back {
    display: flex;
    align-items: center;
    transition: color .2s ease;
    .back-link {
      display: flex;
      width: 3rem;
      height: 3rem;
      padding: 0.6rem;
    }
  }

</style>
