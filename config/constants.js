export const HEADERS = {
  'Access-Control-Allow-Origin': '*'
}

export const {
  siteName: SITE_NAME = 'Ginza',
  pageDescription: PAGE_DESCRIPTION = '',
  api: {
    routes: {
      social: API_ROUTES_SOCIAL = 'social',
      housing: API_ROUTES_HOUSING_LIST = 'get-housing-list',
      blog: API_ROUTES_BLOG_LIST = 'get-blog-list',
      pages: {
        API_ROUTES_ABOUT = 'about',

        API_ROUTES_APARTMENTS_ROOT = 'apartments',
        API_ROUTES_HOTELS_ROOT = 'hotels',
        API_ROUTES_HOUSING = 'get-page/housing',
        API_ROUTES_INDEX = 'get-page/index',
        API_ROUTES_INVESTORS = 'get-page/investors',
        API_ROUTES_CONTACTS = 'get-page/contacts',
        API_ROUTES_PRIVACY = 'get-page/privacy',
        API_ROUTES_SERVICES_ROOT = 'get-page/services',
        API_ROUTES_SPECIAL_ROOT = 'get-page/special',
        API_ROUTES_BLOG_ROOT = 'get-page/blog'
      } = {},
      // get: {
      //   housing: API_ROUTES_HOUSING = 'housing'
      // } = {},
      post: {
        booking_form: API_ROUTES_BOOKING_FORM = 'form/booking',
        manager_form: API_ROUTES_MANAGER_FORM = 'form/manager',
        investors_form: API_ROUTES_INVESTORS_FORM = 'form/investors',
        contacts_form: API_ROUTES_CONTACTS_FORM = 'form/contacts'
      } = {}
    } = {}
  } = {}
} = {}
