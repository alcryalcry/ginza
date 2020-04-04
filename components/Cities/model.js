export default (info) => {
  const {
    phone = '',
    social = [],
    menuList = []
  } = (info || {})

  const listModel = (menuList || []).map((item) => {
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
    menuList: listModel
  }
}
