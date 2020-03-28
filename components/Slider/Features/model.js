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
      image = '',
      mode = ''
    } = item
    return {
      id,
      name,
      image,
      mode
    }
  })

  return {
    title,
    url,
    linkLabel,
    slides: adaptedSlides
  }
}
