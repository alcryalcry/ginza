import axios from '~/plugins/axios'
import { API_ROUTES_HOUSING_LIST } from '~/config/constants'

export const state = () => ({
  types: [],
  isLoading: false,
  list: [],
  type: {}
})

export const mutations = {
  SET_HOUSING_STATUS (state, payload) {
    state.isLoading = payload
  },
  SET_HOUSING_LIST (state, payload = []) {
    state.list = JSON.parse(JSON.stringify(payload))
  },
  SET_HOUSING_TYPES (state, payload = []) {
    state.types = [...payload]
  },
  SET_CURRENT_HOUSING_TYPE (state, payload = {}) {
    state.type = { ...payload }
  }
}

export const getters = {
  GET_HOUSING_STATUS: state => state.isLoading,
  GET_HOUSING_LIST: state => state.list,
  GET_HOUSING_TYPES: state => state.types,
  GET_CURRENT_HOUSING_TYPE: state => state.type
}

export const actions = {
  async UPDATE_HOUSING_LIST ({ commit, rootState }) {
    const {
      cities: {
        city: { id = '' }
      }
    } = rootState
    commit('SET_HOUSING_STATUS', true)
    try {
      const {
        data: { list = [] }
      } = await axios.get(API_ROUTES_HOUSING_LIST, {
        params: { city: id }
      })
      commit('SET_HOUSING_LIST', list)
      commit('SET_HOUSING_STATUS', false)
    } catch (e) {
      commit('SET_HOUSING_STATUS', false)
      return console.error(API_ROUTES_HOUSING_LIST, e)
    }
  },
  UPDATE_HOUSING_TYPES ({ commit, state }, payload = []) {
    commit('SET_HOUSING_TYPES', payload)
    if (!state.type.id) {
      commit('SET_CURRENT_HOUSING_TYPE', payload[0])
    }
  }
}
