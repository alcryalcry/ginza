export default (info) => {
  const {
    pageId = '',
    id = '',
    slug = '',
    type = '',
    city = '',
    name = '',
    preview = '',
    images = [],
    coords = [],
    params = []
  } = info

  const adaptedParams = (params || []).map((param) => {
    const {
      type = '',
      value = ''
    } = param
    return {
      type,
      value
    }
  })

  return {
    pageId,
    id,
    slug,
    type,
    city,
    name,
    preview,
    images,
    coords,
    params: adaptedParams
  }
}
