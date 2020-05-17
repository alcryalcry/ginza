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
      housing: API_ROUTES_HOUSING_LIST = 'get-housing-list',
      pages: {
        API_ROUTES_INDEX = 'get-page/index',
        API_ROUTES_ABOUT = 'get-page/about',
        API_ROUTES_PRIVACY = 'get-page/privacy',
        API_ROUTES_HOUSING = 'get-page/housing',
        API_ROUTES_APARTMENTS_ROOT = 'get-page/apartments',
        API_ROUTES_HOTELS_ROOT = 'get-page/hotels'
      } = {},
      // get: {
      //   housing: API_ROUTES_HOUSING = 'housing'
      // } = {},
      post: {
        booking: API_ROUTES_BOOKING = 'booking'
      } = {}
    } = {}
  } = {}
} = {}
