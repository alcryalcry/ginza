export default (info) => {
  const {
    title = '',
    isArrow = false,
    properties = {},
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
    isArrow,
    properties,
    values: adaptedSlides
  }
}
