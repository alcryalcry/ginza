export default (info) => {
  const {
    title = '',
    cardLimit = 10,
    filterParams = []
  } = info || {}

  const adaptedFilterParams = (filterParams || []).map((item) => {
    const {
      id = '',
      label = ''
    } = item
    return {
      id,
      label
    }
  })

  return {
    title,
    cardLimit,
    filterParams: adaptedFilterParams
  }
}
