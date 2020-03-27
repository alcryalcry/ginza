export default (info) => {
  const {
    phone = '',
    privacy = '',
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
    privacy,
    social,
    menuList: listModel
  }
}
