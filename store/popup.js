
export const state = () => ({
  popupStatus: true,
  popupType: 'popupBooking',
  popupContent: {
    image: '/images/restaurant/restaurant-full.jpg',
    logo: '/images/restaurant-logo.svg',
    fields: [
      {
        type: 'text',
        label: 'Имя',
        name: 'userName',
        validate: [
          {
            rule: 'required'
          }
        ]
      },
      {
        type: 'phone',
        label: 'Телефон',
        name: 'userPhone',
        validate: [
          {
            rule: 'phone'
          }
        ]
      },
      {
        type: 'counter',
        label: 'Гостей',
        name: 'count'
      },
      {
        type: 'date',
        label: 'Дата',
        name: 'date'
      }
    ]
  }
})

export const mutations = {
  SET_POPUP_CONTENT (state, payload) {
    state.popupContent = payload
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
  CLOSE_POPUP (state) {
    state.popupStatus = false
    state.popupContent = {}
  }
}

export const getters = {
  GET_POPUP_STATUS: state => state.popupStatus,
  GET_POPUP_TYPE: state => state.popupType,
  GET_POPUP_CONTENT: state => state.popupContent
}
