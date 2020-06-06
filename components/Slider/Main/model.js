export default (info) => {
  const {
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      type = '',
      videoSrc = '',
      title = '',
      city = '',
      category = '',
      url = '',
      linkLabel = '',
      image = ''
    } = item
    return {
      type,
      videoSrc,
      title,
      city,
      category,
      url,
      linkLabel,
      image
    }
  })

  return {
    values: adaptedSlides
  }
}
