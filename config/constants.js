export const HEADERS = {
  'Access-Control-Allow-Origin': '*'
}

export const {
  siteName: SITE_NAME = 'Ginza',
  pageDescription: PAGE_DESCRIPTION = '',
  api: {
    routes: {
      settings: API_ROUTES_SETTINGS = 'get-settings',
      layout: API_ROUTES_LAYOUT = 'get-layout',
      pages: {
        API_ROUTES_INDEX = 'get-page/index',
        API_ROUTES_ABOUT = 'get-page/about',
        API_ROUTES_HOUSING = 'get-page/housing',
        API_ROUTES_APARTMENTS_ROOT = 'get-page/apartments',
        API_ROUTES_HOTELS_ROOT = 'get-page/hotels',
        API_ROUTES_RESTAURANTS_ROOT = 'get-page/restaurants'
      } = {},
      // get: {
      //   housing: API_ROUTES_HOUSING = 'housing'
      // } = {},
      post: {
        feedback: API_ROUTES_FEEDBACK = 'feedback'
      } = {}
    } = {}
  } = {}
} = {}
