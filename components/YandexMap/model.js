export default (info) => {
  const {
    coords = [59.932211, 30.346072],
    markers = []
  } = info || {}

  return {
    coords,
    markers
  }
}
