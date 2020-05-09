export default (info) => {
  const {
    filterType = '',
    filters = [],
    values = []
  } = info

  const adaptedFilters = (filters || []).map((item) => {
    const {
      name = '',
      id = ''
    } = item
    return {
      name,
      id
    }
  })
  return {
    filterType,
    filters: adaptedFilters,
    values
  }
}
