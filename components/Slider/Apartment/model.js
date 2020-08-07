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
      images = ''
    } = item
    return {
      title,
      city,
      category,
      url,
      linkLabel,
      images
    }
  })

  return {
    popup,
    hasGallery,
    values: adaptedSlides
  }
}
