export default (info) => {
  const {
    values = []
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      mode = ''
    } = item
    return {
      mode,
      ...item
    }
  })

  return {
    values: adaptedValues
  }
}
