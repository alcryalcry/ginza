import axios from '~/plugins/axios'
import { API_ROUTES_SOCIAL, API_ROUTES_CITIES } from '~/config/constants'

export const state = () => ({
  social: {},
  locales: ['ru', 'en'],
  locale: 'ru',
  adults: 1,
  children: 0,
  dates: []
})

export const getters = {
  GET_LANG: state => state.locale,
  GET_SOCIAL: state => state.social,
  GET_ADULTS: state => state.adults,
  GET_CHILDREN: state => state.children,
  GET_DATES: state => state.dates
}

export const mutations = {
  SET_ADULTS (state, payload = 1) {
    state.adults = payload
  },
  SET_CHILDREN (state, payload = 0) {
    state.children = payload
  },
  SET_DATES (state, payload = 0) {
    state.dates = payload
  },
  SET_SOCIAL (state, payload = {}) {
    state.social = JSON.parse(JSON.stringify(payload))
  },
  SET_LANG (state, payload = '') {
    if (state.locales.includes(payload)) {
      state.locale = payload
    }
  }
}

export const actions = {
  async init({ dispatch, commit, rootState }) {
    try {
      const cities = await axios.get(API_ROUTES_CITIES)
      dispatch('localStorage/UPDATE_CITIES', (cities || {}).data)
      const {
        data = []
      } = await axios.get(API_ROUTES_SOCIAL)
      commit('SET_SOCIAL', data[0])
      await dispatch('housing/UPDATE_HOUSING_TYPES', this.app.i18n.messages[rootState.locale || 'ru'].housingTypes)
      await dispatch('housing/UPDATE_HOUSING_LIST')
    } catch (e) {
      return console.error(API_ROUTES_SOCIAL, e)
    }
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch('init')
  }
}
