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
      title = ''
    } = item
    return {
      id,
      name,
      image,
      title
    }
  })

  return {
    title,
    url,
    linkLabel,
    values: adaptedSlides
  }
}
