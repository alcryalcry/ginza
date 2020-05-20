export default (info) => {
  const {
    title = '',
    isArrow = false,
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
    values: adaptedSlides
  }
}
