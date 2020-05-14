export default (info) => {
  const {
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
    slug,
    type,
    city,
    title,
    images,
    coords,
    params: adaptedParams
  }
}
