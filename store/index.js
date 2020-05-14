import axios from '~/plugins/axios'
import { API_ROUTES_SETTINGS } from '~/config/constants'

export const state = () => ({
  locales: ['ru', 'en'],
  locale: 'ru'
})

export const mutations = {
  SET_LANG (state, payload = '') {
    if (state.locales.includes(payload)) {
      state.locale = payload
    }
  }
}

export const getters = {
  GET_LANG: state => state.locale
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      const {
        data: {
          settings = {}
        }
      } = await axios.get(API_ROUTES_SETTINGS)
      dispatch('cities/UPDATE_CITIES', settings.cities)
      dispatch('housing/UPDATE_HOUSING_TYPES', settings.housingTypes)
      dispatch('housing/UPDATE_HOUSING_LIST')
    } catch (e) {
      return console.error(API_ROUTES_SETTINGS, e)
    }
  }
}
