<template>
  <div v-if="GET_POPUP_TYPE === 'popupBooking'" class="popup-booking">
    <Section class="section--big section--no-p">
      <div v-bsl:reserveScrollBarGap="GET_POPUP_STATUS" class="popup-content">
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
          <div class="text--24 popup-head-title">Бронирование</div>
        </div>
        <div class="popup-booking-container">
          <FormGenerator :info="model.fields" @formSubmit="formSubmit" />
        </div>
      </div>
    </Section>
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
import Section from '~/components/Utils/Section'
import FormGenerator from '~/components/FormGenerator/FormGenerator'

export default {
  name: 'PopupBooking',
  components: {
    Section,
    FormGenerator
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
    formSubmit(formData) {
      console.log(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-booking {
  .popup-content {
    margin-left: -3rem;
    padding-left: 3rem;
  }

  &::v-deep {
    .form {
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
.popup-content {
  max-width: 39rem;
  padding: 6rem 8rem 6rem 0;
}

.popup-image {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 95rem;
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
  @include mobile {
    padding: 1.5rem 0;
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
