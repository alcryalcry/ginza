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
        API_ROUTES_INDEX = 'get-page/index',
        API_ROUTES_ABOUT = 'get-page/about',
        API_ROUTES_APARTS = 'get-page/aparts',
        API_ROUTES_APARTMENT_ROOT = 'get-page/apartments'
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
