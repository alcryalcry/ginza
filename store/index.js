
export const state = () => ({
  locales: ['ru', 'en'],
  locale: 'ru'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const getters = {
  GET_LANG: state => state.locale
}

export const actions = {

}
