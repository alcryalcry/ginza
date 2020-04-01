export default (info) => {
  const {
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
    values: adaptedSlides
  }
}
