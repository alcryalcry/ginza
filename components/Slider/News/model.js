export default (info) => {
  const {
    title = '',
    url = '',
    linkLabel = '',
    slides = []
  } = info || {}

  const adaptedSlides = (slides || []).map((item) => {
    const {
      id = null,
      name = '',
      image = ''
    } = item
    return {
      id,
      name,
      image
    }
  })

  return {
    title,
    url,
    linkLabel,
    slides: adaptedSlides
  }
}
