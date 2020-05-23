export default (info) => {
  const {
    columns = [],
    rows = []
  } = info

  return {
    columns,
    rows
  }
}
