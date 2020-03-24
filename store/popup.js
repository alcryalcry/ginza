
export const state = () => ({
  isPopupShow: false,
  isMenuOpen: false
})

export const mutations = {
  TOGGLE_MENU (state) {
    state.isMenuOpen = !state.isMenuOpen
  },
  CLOSE_MENU (state) {
    state.isMenuOpen = false
  },
  TOGGLE_POPUP (state, payload) {
    state.isPopupShow = !state.isPopupShow
  },
  CLOSE_POPUP (state) {
    state.isPopupShow = false
  }
}

export const getters = {
  GET_POPUP_STATUS: state => state.isPopupShow,
  GET_MENU_STATUS: state => state.isMenuOpen
}
