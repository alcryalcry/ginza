export default (info) => {
  const {
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((item) => {
    const {
      id = '',
      title = ''
    } = item

    return {
      id,
      title
    }
  })

  return {
    values: adaptedValues
  }
}
