export default (info) => {
  const {
    url = '',
    id = '',
    slug = '',
    type = '',
    city = '',
    title = '',
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
    url,
    id,
    slug,
    type,
    city,
    title,
    images,
    coords,
    params: adaptedParams
  }
}
