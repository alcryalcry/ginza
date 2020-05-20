export default (info) => {
  return (info || []).map((item) => {
    const {
      id = '',
      label = '',
      url = ''
    } = item
    return {
      id,
      label,
      url
    }
  })
}
