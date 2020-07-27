import { head } from './config'

import messagesEn from './locales/en.json'
import messagesRu from './locales/ru.json'

require('dotenv').config()

const config = {
  mode: 'universal',
  store: true,
  head,
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  serverMiddleware: [],
  generate: {
    routes: [
      '/apartments/rubinsteina12',
      '/apartments/karavannaya11',
      '/apartments/moskovskiy191',
      '/apartments/rubinsteina12/gallery',
      '/apartments/karavannaya11/gallery',
      '/apartments/moskovskiy191/gallery',
      '/hotels/arka',
      '/hotels/kvartira14',
      '/hotels/khedi',
      '/hotels/arka/restaurants/lilo',
      '/hotels/kvartira14/restaurants/lilo',
      '/hotels/khedi/restaurants/lilo',
      '/hotels/arka/halls',
      '/hotels/kvartira14/halls',
      '/hotels/khedi/halls',
      '/hotels/arka/halls/banquet',
      '/hotels/kvartira14/halls/banquet',
      '/hotels/khedi/halls/banquet',
      '/hotels/arka/halls/conference',
      '/hotels/kvartira14/halls/conference',
      '/hotels/khedi/halls/conference',
      '/hotels/arka/rooms/standart',
      '/hotels/kvartira14/rooms/standart',
      '/hotels/khedi/rooms/standart',
      '/hotels/arka/rooms/royal_suite',
      '/hotels/kvartira14/rooms/royal_suite',
      '/hotels/khedi/rooms/royal_suite',
      '/services/drive',
      '/services/tours',
      '/services/beauty',
      '/services/chisto',
      '/special/weddings',
      '/special/individual',
      '/blog/hermitage'
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~assets/scss/app.scss'

    // 'assets/scss/core/fonts.scss',
    // 'assets/scss/core/GUI.scss',
    // 'assets/scss/core/normalize.scss',
    // 'assets/scss/core/common.scss',
    // 'assets/scss/core/grid.scss'
  ],
  styleResources: {
    scss: [
      'assets/scss/global/mixins.scss',
      'assets/scss/global/vars.scss'
    ]
  },
  plugins: [
    '~/plugins/i18n.js',
    {
      src: '~plugins/v-body-scroll-lock.js',
      ssr: false
    },
    {
      src: '~plugins/vue-awesome-swiper.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-slide-toggle.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-yandex-maps.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vuelidate.js',
      ssr: false
    },
    {
      src: '~/plugins/vuejs-datepicker.js',
      ssr: false
    },
    {
      src: '~/plugins/image.js',
      ssr: false
    }
  ],
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // 'nuxt-lazy-load',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'En'
          },
          {
            code: 'ru',
            name: 'Ru'
          }
        ],
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
        vueI18n: {
          fallbackLocale: 'ru',
          messages: {
            ru: messagesRu,
            en: messagesEn
          }
        }
      }
    ]
  ],
  build: {
    assetsPublicPath: '/static/',
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }

      // SVG Loader
      config.module.rules
        .filter(r => r.test.toString().includes('svg'))
        .forEach((r) => {
          r.test = /\.(png|jpe?g|gif)$/
        })
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    },
    babel: {
      presets({ isServer }) {
        const targets = isServer
          ? {
            node: 'current'
          }
          : {
            ie: 11
          }
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              targets
            }
          ]
        ]
      }
    }
  },
  env: {
    apiRoot: process.env.API_ROOT,
    appEnv: process.env.APP_ENV,
    appImageRoot: process.env.APP_IMAGE_ROOT
  }
}

if (process.env.IS_SERVER_MIDDLEWARE === 'true') {
  config.serverMiddleware.push({ path: '/api', handler: '~/api/index.js' })
}

module.exports = config
