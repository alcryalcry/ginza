export default (info) => {
  const {
    markers = []
  } = info || {}

  return {
    markers
  }
}
