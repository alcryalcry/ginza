export default (info) => {
  const {
    title = '',
    cardLimit = 6,
    filterParams = []
  } = info || {}

  return {
    title,
    cardLimit,
    filterParams
  }
}
