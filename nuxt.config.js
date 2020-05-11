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
  // generate: {
  //   routes: [
  //     '/apartments/1',
  //     '/apartments/1/gallery',
  //     '/hotels/1',
  //     '/hotels/2',
  //     '/hotels/1/room',
  //     '/restaurants/1'
  //   ]
  // },
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
    }
  ],
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-lazy-load',
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
    appEnv: process.env.APP_ENV
  }
}

if (process.env.IS_SERVER_MIDDLEWARE === 'true') {
  config.serverMiddleware.push({ path: '/api', handler: '~/api/index.js' })
}

module.exports = config
