export default function ({ app, route }) {
  app.store.commit('SET_LANG', app.i18n.locale)

  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.store.commit('SET_LANG', newLocale)
  }
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.store.dispatch('init')
  }
  if (!app.store.state.locales.includes(app.i18n.locale) || route.name === null) {
    console.warn('Something went wrong in Middleware')
    console.warn('ROUTE:')
    console.log(route)
    console.warn('STORE LOCALES:')
    console.log(app.store.state.locales)
    console.warn('LOCALE')
    console.log(app.i18n.locale)
    const redirectUrl = app.i18n.locale === app.i18n.fallbackLocale ? '/error' : `/${app.i18n.locale}/error`
    return app.context.redirect(redirectUrl, {
      statusCode: 404
    })
  }
}
