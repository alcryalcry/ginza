export default (info) => {
  const {
    title = '',
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
    title,
    values: adaptedValues
  }
}
