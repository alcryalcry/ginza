import { head } from './config'

import messagesEn from './locales/en.json'
import messagesRu from './locales/ru.json'

export default {
  mode: 'universal',
  store: true,
  head,
  loading: { color: '#fff' },
  css: [],
  plugins: [
    '~/plugins/i18n.js',
    { src: '~plugins/v-body-scroll-lock.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
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
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            ru: messagesRu,
            en: messagesEn
          }
        }
      }
    ]
  ],
  styleResources: {
    scss: [
      'assets/scss/core/normalize.scss',
      'assets/scss/core/vars.scss',
      'assets/scss/core/mixins.scss',
      'assets/scss/core/fonts.scss',
      'assets/scss/core/common.scss',
      'assets/scss/core/grid.scss'
    ]
  },
  axios: {},
  build: {
    filenames: {
      chunk: '[name].js'
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = '#source-map'
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
    }
  }
}
