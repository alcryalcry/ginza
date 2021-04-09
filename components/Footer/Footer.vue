<template>
  <footer class="footer">
    <Section class="section--no-p">
      <div class="footer-row isLogo">
        <div class="logo">
          <iconLogo />
        </div>
      </div>
      <div class="footer-row isList">
        <div class="row">
          <div class="col-3 colLogo">
            <div class="logo isMin">
              <iconLogoMin />
            </div>
          </div>
          <div class="col-9 col-t-12 col-m-12 isNoGut">
            <div class="footer-menu">
              <div class="row isNoGut">
                <div v-for="item in menu" :key="item.url" class="isNoGut col-4 col-t-4 col-m-6">
                  <ExternalLink :to="item.url" class="text--18 link footer-link" v-html="$t(`menu.${item.label}`)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-row isInfo">
        <div class="privacy">
          <ExternalLink
            class="link"
            :to="$t('footer.privacyUrl')"
            v-html="$t('footer.privacy')"
          />
        </div>
        <div class="footer-info">
          <div v-if="GET_SOCIAL.phone" class="phone">
            <a class="link" :href="`tel:${GET_SOCIAL.phone}`">{{ GET_SOCIAL.phone }}</a>
          </div>
          <div class="footer-social">
            <Social />
          </div>
        </div>
      </div>
      <div class="footer-row isInfo">
        <div class="credits">
          <span>{{ $t('footer.SITE_MADE_BY') }}</span>
          <ExternalLink
            class="link"
            :to="'https://interspace.studio/'"
            v-html="'Interspace Studio'"
          />
        </div>
      </div>
    </Section>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import Section from '~/components/Utils/Section'
import Social from '~/components/Social/Social'
import iconLogo from '~/assets/svg/logo.svg'
import iconLogoMin from '~/assets/svg/logo-min.svg'
import ExternalLink from '~/components/ExternalLink/ExternalLink'

export default {
  components: {
    Social,
    Section,
    iconLogo,
    iconLogoMin,
    ExternalLink
  },
  computed: {
    ...mapGetters({
      GET_SOCIAL: 'GET_SOCIAL',
      GET_CURRENT_CITY: 'localStorage/GET_CURRENT_CITY'
    }),
    menu() {
      return [
        {
          'label': 'about',
          'url': '/about'
        },
        {
          'label': 'apartments',
          'url': this.GET_CURRENT_CITY.en_name + '/apartments',
          'dependOnCity': true
        },
        {
          'label': 'hotels',
          'url': this.GET_CURRENT_CITY.en_name + '/hotels',
          'dependOnCity': true
        },
        {
          'label': 'services',
          'url': '/services'
        },
        {
          'label': 'special',
          'url': '/special'
        },
        {
          'label': 'posts',
          'url': '/posts'
        },
        {
          'label': 'investors',
          'url': '/investors'
        },
        {
          'label': 'contacts',
          'url': '/contacts'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-top: auto;
  padding: 4rem 0 10rem;
  background: $gray;

  &::before {
    content: '';
    @include absolute;
    background: linear-gradient(180deg, #EAE5E1 0%, #D1C6BF 95.24%);
    pointer-events: none;
  }

  .footer-row {
    position: relative;
    &.isInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include desktop {
        padding: 0;
      }
      @include mobile {
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 0;
      }
    }
    &.isList {
      padding: 6rem 0;
    }
    &.isLogo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .footer-info {
    display: flex;
    align-items: center;
    @include mobile {
      flex-flow: column nowrap;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0;
    }
    .footer-social {
      @include desktop {
        margin-left: 6rem;
      }
      @include tablet {
        margin-left: 3rem;
      }
      @include mobile {
        margin-top: 1rem;
      }
    }
    .social {
      @include desktop {
        margin: 0;
      }
      @include tablet {
        margin: 0;
      }
      &::v-deep {
        .social-item {
          @include tablet {
            width: 4rem;
            height: 4rem;
          }
          @include mobile {
            width: 4.5rem;
            height: 4.5rem;
          }
        }
      }
    }
  }

  .footer-link {
    display: inline-flex;
    padding: .75rem;
  }

  .colLogo {
    display: none;
    justify-content: flex-start;
    align-items: center;
    padding-left: 4rem;
    @include desktop {
      display: flex;
    }
  }

  .privacy {
    @include mobile {
      margin-bottom: 2rem;
    }
  }

  .credits {
    color: $gray69;
    font-size: 1.3rem;
    a {
      color: $gray69;
      &:hover {
        color: $brown;
      }
    }
    @include mobile {
      margin-bottom: 2rem;
    }
  }

  .logo {
    width: 14rem;
    height: 5rem;
    &.isMin {
      width: 5.1rem;
      height: 5.2rem;
    }
  }
}
</style>
