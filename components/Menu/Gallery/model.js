export default (info) => {
  const {
    values = []
  } = (info || {})

  const listModel = (values || []).map((item) => {
    const {
      title = '',
      anchor = ''
    } = item
    return {
      title,
      anchor
    }
  })
  return {
    menuList: listModel
  }
}
