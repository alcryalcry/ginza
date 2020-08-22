export default (info) => {
  const {
    title = '',
    values = []
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      id = '',
      title = '',
      illustration = '',
      adult = '',
      image = ''
    } = item
    return {
      id,
      title,
      illustration,
      adult,
      image
    }
  })

  return {
    title,
    values: adaptedValues
  }
}
