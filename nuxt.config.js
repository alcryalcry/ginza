import { head } from './config'

import messagesEn from './locales/en.json'
import messagesRu from './locales/ru.json'

require('dotenv').config()

export default {
  mode: 'universal',
  store: true,
  head,
  server: {
    port: 8080
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
    { src: '~plugins/v-body-scroll-lock.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
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
