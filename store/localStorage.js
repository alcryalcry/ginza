export const state = () => ({
  cities: [],
  city: {}
})

export const mutations = {
  SET_CITIES (state, payload = []) {
    state.cities = [...payload]
  },
  SET_CURRENT_CITY (state, payload = {}) {
    state.city = { ...payload }
  }
}

export const getters = {
  GET_CITIES: state => state.cities,
  GET_CURRENT_CITY: state => state.city
}

export const actions = {
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
