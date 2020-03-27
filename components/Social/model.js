export default (info) => {
  return (info || []).map((item) => {
    const {
      url = '',
      name = ''
    } = item
    return {
      url,
      name
    }
  })
}
