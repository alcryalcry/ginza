export default (info) => {
  const {
    type = '',
    values = [],
    popup = {}
  } = info

  const adaptedValues = (values || []).map((item) => {
    const {
      url = '',
      linkLabel = '',
      isPopupLink = false
    } = item
    return {
      url,
      linkLabel,
      isPopupLink
    }
  })

  return {
    type,
    values: adaptedValues,
    popup
  }
}
