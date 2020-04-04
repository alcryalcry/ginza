export default (info) => {
  const {
    coords = [59.932211, 30.346072],
    zoom = 6,
    options = {},
    markers = []
  } = info || {}

  return {
    coords,
    zoom,
    options,
    markers
  }
}
