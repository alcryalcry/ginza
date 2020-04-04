export default (info) => {
  const {
    slug = '',
    city = '',
    title = '',
    images = [],
    coords = {
      lat: '',
      lng: ''
    },
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
    city,
    title,
    images,
    coords,
    params: adaptedParams
  }
}
