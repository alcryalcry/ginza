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
    values: adaptedSlides
  }
}
