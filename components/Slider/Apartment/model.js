export default (info) => {
  const {
    popup = {},
    hasGallery = false,
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
    hasGallery,
    values: adaptedSlides
  }
}
