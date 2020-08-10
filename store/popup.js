
export const state = () => ({
  popupStatus: false,
  popupType: '',
  popupContent: {},
  popupExtendContent: {}
})

export const mutations = {
  SET_POPUP_CONTENT (state, payload) {
    state.popupContent = payload
  },
  SET_POPUP_EXTEND_CONTENT (state, payload) {
    state.popupExtendContent = payload
  },
  SET_POPUP_TYPE (state, payload) {
    state.popupType = payload
  },
  OPEN_POPUP (state) {
    state.popupStatus = true
  },
  TOGGLE_POPUP (state) {
    state.popupStatus = !state.popupStatus
  },
  CLEAR_EXTEND (state) {
    state.popupExtendContent = {}
  },
  CLOSE_POPUP (state) {
    state.popupStatus = false
    state.popupContent = {}
  }
}

export const getters = {
  GET_POPUP_STATUS: state => state.popupStatus,
  GET_POPUP_TYPE: state => state.popupType,
  GET_POPUP_CONTENT: state => state.popupContent,
  GET_POPUP_EXTEND_CONTENT: state => state.popupExtendContent
}
