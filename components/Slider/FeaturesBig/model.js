export default (info) => {
  const {
    url = '',
    linkLabel = '',
    slides = []
  } = info || {}

  const adaptedSlides = (slides || []).map((item) => {
    const {
      id = null,
      title = '',
      description = '',
      url = '',
      linkLabel = '',
      name = '',
      image = ''
    } = item
    return {
      id,
      title,
      description,
      url,
      linkLabel,
      name,
      image
    }
  })

  return {
    url,
    linkLabel,
    slides: adaptedSlides
  }
}
