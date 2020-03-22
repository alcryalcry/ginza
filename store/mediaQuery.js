export const state = () => ({
  mq: 'desktop'
})

export const mutations = {
  SET_MQ(state, payload) {
    state.mq = payload
  }
}

export const getters = {
  GET_MQ: state => state.mq
}

export const actions = {
  UPDATE_MQ({ commit }, mediaQuery) {
    commit('SET_MQ', mediaQuery)
  }
}
