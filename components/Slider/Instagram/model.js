export default (info) => {
  const {
    title = '',
    url = '',
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      id = null,
      url = '',
      image = ''
    } = item
    return {
      id,
      url,
      image
    }
  })

  return {
    title,
    url,
    values: adaptedSlides
  }
}
