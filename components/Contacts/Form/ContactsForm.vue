<template>
  <div class="contacts-form">
    <div class="contacts-col">
      <div v-for="item in generatedSocial" :key="item.href" class="contacts-item">
        <div v-if="item.title" class="title text--12 gray ttu" v-html="item.title" />
        <div class="contacts-link">
          <a v-if="item.label" class="link" :href="item.href" v-html="item.label" />
        </div>
      </div>
      <div class="contacts-item investors">
        <ExternalLink
          class="link"
          to="investors"
          v-html="$t('contacts.investors')"
        />
      </div>
      <Social :info="model.social" />
    </div>
    <div class="form-container" :class="{ isShowResult, isLoading }">
      <transition mode="out-in" name="list-fade">
        <div v-if="!isShowResult" key="form" class="form-content">
          <FormGenerator
            :btn-label="$t('contacts.submit')"
            :btn-submit-class="'link link--brown link--tdu'"
            :is-loading="isLoading"
            :info="$t('contacts.fields')"
            @formSubmit="formSubmit"
          />
          <p v-if="$t('contacts.disclaimer')" class="disclaimer text--12" v-html="$t('contacts.disclaimer')" />
        </div>
        <div v-else key="result" class="result">
          <div class="result-icon">
            <div class="icon">
              <iconCheck />
            </div>
          </div>
          <h5 v-if="$t('contacts.resultTitle')" class="result-title" v-html="$t('contacts.resultTitle')" />
          <p v-if="$t('contacts.disclaimer')" class="result-desc" v-html="$t('contacts.disclaimer')" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MODEL from './model'
import axios from '~/plugins/axios'
import { API_ROUTES_CONTACTS_FORM } from '~/config/constants'

import ExternalLink from '~/components/ExternalLink/ExternalLink'
import Social from '~/components/Social/Social'
import FormGenerator from '~/components/FormGenerator/FormGenerator'
import iconCheck from '~/assets/svg/check.svg'

export default {
  name: 'ContactsForm',
  components: {
    ExternalLink,
    Social,
    FormGenerator,
    iconCheck
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isLoading: false,
      isShowResult: false
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    ...mapGetters({
      GET_SOCIAL: 'GET_SOCIAL',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY'
    }),
    generatedSocial() {
      return this.$t('contacts.social').filter(item => this.GET_SOCIAL[item.field]).map((item) => {
        return {
          ...item,
          label: this.GET_SOCIAL[item.field],
          href: `${item.prefix}${this.GET_SOCIAL[item.field]}`
        }
      })
    }
  },
  methods: {
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

      axios.post(API_ROUTES_CONTACTS_FORM, formData)
        .then(({ data }) => {
          if (data.status) {
            this.isShowResult = true
          }
        }).catch((e) => {
          const {
            response = {}
          } = e || {}
          console.error(response, API_ROUTES_CONTACTS_FORM)
        }).then(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-form {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  @include mobile {
    display: block;
  }

  .social {
    margin-top: 4rem;
  }

  &::v-deep {
    .cities-dropdown {
      padding: 0;
      border: none;
      .dropdown-list {
        @include mobile_tablet {
          top: auto;
        }
      }
    }
  }

  .contacts-col {
    margin: auto 0;
    padding-right: 8.5rem;
    padding: 4rem 8.5rem 4rem 2rem;
    border-right: 1px solid $border;
    @include tablet {
      padding: 4rem 6rem 4rem 2rem;
    }
    @include mobile {
      padding: 4rem 2rem 2rem;
    }
    .contacts-item {
      .title {
        margin-bottom: 1.5rem;
        color: $gray69;
        letter-spacing: 0.2rem;
      }
      & + .contacts-item {
        margin-top: 5rem;
        &.investors {
          margin-top: 8rem;
        }
        @include mobile {
          margin-top: 3rem;
          &.investors {
            margin-top: 5rem;
          }
        }
      }
    }
  }

    &::v-deep {
    .form {
      padding: 8rem 0;
      margin: auto 0;
      @include mobile {
        padding: 0;
      }
      .input {
        border-color: $border;
      }
      .input-label {
        &:not(.isInvalid) {
          .input-placeholder {
            color: $gray69;
          }
        }
        .input-placeholder {
          font-weight: $light;
          letter-spacing: 0.025rem;
        }
      }
      .submit-container {
        @include mobile {
          margin: 4rem 0 2rem;
        }
      }
      .submit-btn {
        width: auto;
        height: auto;
        text-transform: none;
      }
    }
  }
}

.form-container {
  flex: 0 1 auto;
  display: flex;
  flex-flow: column nowrap;
  padding: 3rem 4rem 3rem 8.5rem;

  @include tablet {
    padding: 3rem 4rem 3rem 6rem;
  }

  @include mobile {
    padding: 4rem 2rem;
  }
}

.title-block {
  width: 38rem;
  margin-top: 10rem;
  margin-bottom: 8rem;
  @include mobile {
    margin-top: 0;
    width: auto;
  }

  .description {
    margin-bottom: 2rem;
    line-height: 1.5;
  }

}

.form-content {
  position: relative;
  width: 32rem;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  @include mobile {
    width: auto;
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

.disclaimer {
  position: absolute;
  bottom: 0;
  left: 0;
  color: $gray69;
  letter-spacing: 0.02rem;
  margin-top: auto;
  line-height: 1.5;
  padding-top: 3rem;
  @include mobile {
    position: static;
  }
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

</style>
