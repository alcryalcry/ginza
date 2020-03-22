
export default function ({ app, route }) {
  app.store.commit('SET_LANG', app.i18n.locale)

  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.store.commit('SET_LANG', newLocale)
  }
  if (!app.store.state.locales.includes(app.i18n.locale) || route.name === null) {
    const redirectUrl = app.i18n.locale === app.i18n.fallbackLocale ? '/error' : `/${app.i18n.locale}/error`
    return app.context.redirect(redirectUrl, {
      statusCode: 404
    })
  }
}
