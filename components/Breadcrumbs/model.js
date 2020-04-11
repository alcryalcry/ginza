export default (info) => {
  const {
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
  return adaptedValues
}
