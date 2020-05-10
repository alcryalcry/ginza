export default (info) => {
  const {
    title = '',
    values = []
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      id = '',
      title = '',
      adult = '',
      image = ''
    } = item
    return {
      id,
      title,
      adult,
      image
    }
  })

  return {
    title,
    values: adaptedValues
  }
}
