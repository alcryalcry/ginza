export const HEADERS = {
  'Access-Control-Allow-Origin': '*'
}

export const {
  siteName: SITE_NAME = 'Ginza',
  pageDescription: PAGE_DESCRIPTION = '',
  api: {
    routes: {
      layout: API_ROUTES_LAYOUT = 'get-layout',
      post: {
        feedback: API_ROUTES_FEEDBACK = 'feedback'
      } = {},
      pages: {
        API_ROUTES_INDEX = 'get-page/index'
      } = {}
    } = {}
  } = {}
} = {}
