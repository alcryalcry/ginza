export const HEADERS = {
  'Access-Control-Allow-Origin': '*'
}

export const {
  siteName: SITE_NAME = 'Ginza',
  pageDescription: PAGE_DESCRIPTION = '',
  api: {
    routes: {
      get_header: API_ROUTES_HEADER = 'get-header',
      get_footer: API_ROUTES_FOOTER = 'get-footer',
      post: {
        feedback: API_ROUTES_FEEDBACK = 'feedback'
      } = {},
      pages: {
        API_ROUTES_INDEX = 'get-page/index'
      } = {}
    } = {}
  } = {}
} = {}
