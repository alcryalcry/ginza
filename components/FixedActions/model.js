export default (info) => {
  const {
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((item) => {
    const {
      id = '',
      type = '',
      href = '',
      isDownload = false,
      isMobile = false,
      label = '',
      popup = {
        type: '',
        content: {}
      }
    } = item

    return {
      id,
      type,
      href,
      isDownload,
      isMobile,
      label,
      popup
    }
  })

  return {
    values: adaptedValues
  }
}
