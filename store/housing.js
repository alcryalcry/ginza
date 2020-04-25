
export const state = () => ({
  types: [],
  type: {}
})

export const mutations = {
  SET_HOUSING_TYPES (state, payload = []) {
    state.types = [...payload]
  },
  SET_CURRENT_HOUSING_TYPE (state, payload = {}) {
    state.type = { ...payload }
  }
}

export const getters = {
  GET_HOUSING_TYPES: state => state.types,
  GET_CURRENT_HOUSING_TYPE: state => state.type
}

export const actions = {
  UPDATE_HOUSING_TYPES ({ commit, state }, payload = []) {
    commit('SET_HOUSING_TYPES', payload)
    if (!state.type.id) {
      commit('SET_CURRENT_HOUSING_TYPE', payload[0])
    }
  }
}
