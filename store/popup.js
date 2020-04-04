
export const state = () => ({
  isMenuOpen: false,
  isHeaderScrolled: false,
  isPopupShow: false
})

export const mutations = {
  SET_HEADER (state, payload) {
    state.isHeaderScrolled = payload
  },
  TOGGLE_MENU (state) {
    state.isMenuOpen = !state.isMenuOpen
  },
  CLOSE_MENU (state) {
    state.isMenuOpen = false
  },
  TOGGLE_POPUP (state) {
    state.isPopupShow = !state.isPopupShow
  },
  CLOSE_POPUP (state) {
    state.isPopupShow = false
  }
}

export const getters = {
  GET_HEADER_STATUS: state => state.isHeaderScrolled,
  GET_MENU_STATUS: state => state.isMenuOpen,
  GET_POPUP_STATUS: state => state.isPopupShow
}
