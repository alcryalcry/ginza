export default (info) => {
  return (info || []).map((item) => {
    const {
      id = null,
      image = ''
    } = item
    return {
      id,
      image
    }
  })
}
