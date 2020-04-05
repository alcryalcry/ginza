export default (info) => {
  const {
    values = []
  } = info
  const adaptedValues = (values || []).map((item) => {
    const {
      value = '',
      label = '',
      mode = ''
    } = item
    return {
      value,
      label,
      mode
    }
  })
  return adaptedValues
}
