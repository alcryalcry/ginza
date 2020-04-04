export const HEADERS = {
  'Access-Control-Allow-Origin': '*'
}

export const {
  siteName: SITE_NAME = 'Ginza',
  pageDescription: PAGE_DESCRIPTION = '',
  api: {
    routes: {
      settings: API_ROUTES_SETTINGS = 'get-settings/',
      layout: API_ROUTES_LAYOUT = 'get-layout/',
      pages: {
        API_ROUTES_INDEX = 'get-page/index'
      } = {},
      get: {
        housing: API_ROUTES_HOUSING = 'housing'
      } = {},
      post: {
        feedback: API_ROUTES_FEEDBACK = 'feedback'
      } = {}
    } = {}
  } = {}
} = {}
