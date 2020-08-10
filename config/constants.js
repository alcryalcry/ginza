export const HEADERS = {
  'Access-Control-Allow-Origin': '*'
}

export const {
  siteName: SITE_NAME = 'Ginza',
  pageDescription: PAGE_DESCRIPTION = '',
  api: {
    routes: {
      social: API_ROUTES_SOCIAL = 'social', // done
      housing: API_ROUTES_HOUSING_LIST = 'get-housing-list',
      pages: {
        API_ROUTES_ABOUT = 'about', // done
        API_ROUTES_INVESTORS = 'investors', // done
        API_ROUTES_CITIES = 'cities', // done
        API_ROUTES_CONTACTS = 'contact_us', // done
        API_ROUTES_BLOG_ROOT = 'posts', // done TODO: (CORS ERROR)
        API_ROUTES_SERVICES_ROOT = 'services', // done

        API_ROUTES_APARTMENTS_ROOT = 'apartments',
        API_ROUTES_HOTELS_ROOT = 'hotels',
        API_ROUTES_HOUSING = 'get-page/housing',
        API_ROUTES_INDEX = 'get-page/index',
        API_ROUTES_PRIVACY = 'get-page/privacy',
        API_ROUTES_SPECIAL_ROOT = 'get-page/special'
      } = {},
      // get: {
      //   housing: API_ROUTES_HOUSING = 'housing'
      // } = {},
      post: {
        investors_form: API_ROUTES_INVESTORS_FORM = 'request_presentation', // done TODO: (CORS ERROR)
        contacts_form: API_ROUTES_CONTACTS_FORM = 'contact_requests', // done TODO: (CORS ERROR)
        booking_form: API_ROUTES_BOOKING_FORM = 'bookings', // done TODO: (CORS ERROR)

        manager_form: API_ROUTES_MANAGER_FORM = 'form/manager'
      } = {}
    } = {}
  } = {}
} = {}
