export default (info) => {
  return (info || []).map((item) => {
    const {
      iconName = '',
      label = ''
    } = item
    return {
      iconName,
      label
    }
  })
}
