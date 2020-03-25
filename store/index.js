
export const state = () => ({
  locales: ['ru', 'en'],
  locale: 'ru',
  cities: [],
  city: {}
})

export const mutations = {
  SET_LANG (state, payload = '') {
    if (state.locales.includes(payload)) {
      state.locale = payload
    }
  },
  SET_CITIES (state, payload = []) {
    state.cities = [...payload]
  },
  SET_CURRENT_CITY (state, payload = {}) {
    state.city = { ...payload }
  }
}

export const getters = {
  GET_LANG: state => state.locale,
  GET_CITIES: state => state.cities,
  GET_CURRENT_CITY: state => state.city
}

export const actions = {
  UPDATE_CITIES ({ commit, state }, payload = []) {
    commit('SET_CITIES', payload)
    if (!state.city.id) {
      commit('SET_CURRENT_CITY', payload[0])
    }
  }
}
