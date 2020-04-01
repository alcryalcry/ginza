export default (info) => {
  const {
    description = '',
    url = '',
    linkLabel = '',
    values = []
  } = info || {}

  const blocks = (values || []).map((item) => {
    const {
      description = '',
      sale = '',
      label = '',
      logo = '',
      image = ''
    } = item
    return {
      description,
      sale,
      label,
      logo,
      image
    }
  })

  return {
    description,
    url,
    linkLabel,
    values: blocks
  }
}
