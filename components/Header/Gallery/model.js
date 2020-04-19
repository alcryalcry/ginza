export default (info) => {
  const {
    title = '',
    values = []
  } = info || {}

  return {
    title,
    values
  }
}
