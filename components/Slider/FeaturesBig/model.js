export default (info) => {
  const {
    url = '',
    linkLabel = '',
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
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
    values: adaptedSlides
  }
}
