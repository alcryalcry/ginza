export default (info) => {
  return (info || []).map((item) => {
    const {
      id = '',
      label = ''
    } = item
    return {
      id,
      label
    }
  })
}
