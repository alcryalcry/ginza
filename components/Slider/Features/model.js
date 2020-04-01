export default (info) => {
  const {
    title = '',
    url = '',
    linkLabel = '',
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
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
    values: adaptedSlides
  }
}
