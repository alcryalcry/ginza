export const state = () => ({
  cities: [],
  city: {},
  prevPage: ''
})

export const mutations = {
  SET_CITIES (state, payload = []) {
    state.cities = [...payload]
  },
  SET_CURRENT_CITY (state, payload = {}) {
    state.city = { ...payload }
  },
  SET_PREV_PAGE (state, payload = '') {
    state.prevPage = payload
  }
}

export const getters = {
  GET_CITIES: state => state.cities,
  GET_CURRENT_CITY: state => state.city,
  GET_PREV_PAGE: state => state.prevPage
}

export const actions = {
  UPDATE_PREV_PAGE ({ commit, state, dispatch }, payload) {
    commit('SET_PREV_PAGE', payload)
  },
  UPDATE_CURRENT_CITY ({ commit, dispatch }, payload) {
    commit('SET_CURRENT_CITY', payload)
    // dispatch('housing/UPDATE_HOUSING_LIST', null, { root: true })
  },
  UPDATE_CITIES ({ commit, state, dispatch }, payload = []) {
    commit('SET_CITIES', payload)
    const {
      params: {
        city = ''
      } = {}
    } = this.$router.currentRoute || {}
    if (!state.city.id) {
      commit('SET_CURRENT_CITY', payload.find(item => item.en_name === city) || payload[0])
    }
  }
}
