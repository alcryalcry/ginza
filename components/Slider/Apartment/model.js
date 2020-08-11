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
      image = '',
      images = ''
    } = item
    return {
      title,
      city,
      category,
      url,
      linkLabel,
      image,
      images
    }
  })

  return {
    popup,
    hasGallery,
    values: adaptedSlides
  }
}
