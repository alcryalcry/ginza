export default (info) => {
  const {
    phone = '',
    social = [],
    list = []
  } = (info || {})

  const listModel = (list || []).map((item) => {
    const {
      label = '',
      url = ''
    } = item
    return {
      label,
      url
    }
  })
  return {
    phone,
    social,
    list: listModel
  }
}
