export default (info) => {
  const {
    title = '',
    rows = []
  } = info || {}

  const adaptedRows = (rows || []).map((row) => {
    const {
      type = '',
      cols = []
    } = row
    const adaptedCols = (cols || []).map((col) => {
      const {
        url = '',
        videoSrc = '',
        mode = '',
        image = ''
      } = col
      return {
        url,
        videoSrc,
        mode,
        image
      }
    })
    return {
      type,
      cols: adaptedCols
    }
  })

  return {
    title,
    rows: adaptedRows
  }
}
