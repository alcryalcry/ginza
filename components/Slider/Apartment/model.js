export default (info) => {
  const {
    popup = {},
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      title = '',
      city = '',
      category = '',
      url = '',
      linkLabel = '',
      image = ''
    } = item
    return {
      title,
      city,
      category,
      url,
      linkLabel,
      image
    }
  })

  return {
    popup,
    values: adaptedSlides
  }
}
