export default (info) => {
  const {
    type = '',
    values = []
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      url = '',
      linkLabel = ''
    } = item
    return {
      url,
      linkLabel
    }
  })

  return {
    type,
    values: adaptedValues
  }
}
