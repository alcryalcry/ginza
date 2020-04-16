export default (info) => {
  const {
    title = '',
    description = '',
    values = []
  } = info || {}

  const adaptedSlides = (values || []).map((item) => {
    const {
      id = null,
      userName = '',
      image = '',
      text = ''
    } = item
    return {
      id,
      userName,
      image,
      text
    }
  })

  return {
    title,
    description,
    values: adaptedSlides
  }
}
