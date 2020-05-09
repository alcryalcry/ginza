export default (info) => {
  const {
    type = '',
    slug = '',
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
    type,
    slug,
    city,
    title,
    images,
    coords,
    params: adaptedParams
  }
}
