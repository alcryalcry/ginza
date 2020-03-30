export default (info) => {
  const {
    slides = []
  } = info || {}

  const adaptedSlides = (slides || []).map((item) => {
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
    slides: adaptedSlides
  }
}
