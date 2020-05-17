import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      SET_POPUP_CONTENT: 'popup/SET_POPUP_CONTENT',
      SET_POPUP_TYPE: 'popup/SET_POPUP_TYPE',
      OPEN_POPUP: 'popup/OPEN_POPUP'
    }),
    openPopup({ content, type }) {
      this.SET_POPUP_TYPE(type)
      this.SET_POPUP_CONTENT(content)
      this.OPEN_POPUP()
    }
  }
}
