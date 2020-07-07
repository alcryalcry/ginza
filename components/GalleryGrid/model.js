/* eslint-disable camelcase */
export default (info) => {
  const {
    title = '',
    text = '',
    image_rows = [],
    slider_rows = []
  } = info || {}

  const adaptedImageRows = (image_rows || []).map((row) => {
    const {
      type = '',
      cols = []
    } = row
    const adaptedCols = (cols || []).map((col) => {
      const {
        labels = [],
        url = '',
        videoSrc = '',
        mode = '',
        image = '',
        values = []
      } = col
      return {
        labels,
        url,
        videoSrc,
        mode,
        image,
        values
      }
    })
    return {
      type,
      cols: adaptedCols
    }
  })

  const adaptedSliderRows = (slider_rows || []).map((row) => {
    const {
      type = '',
      cols = []
    } = row
    const adaptedCols = (cols || []).map((col) => {
      const {
        url = '',
        videoSrc = '',
        mode = '',
        image = '',
        values = []
      } = col
      return {
        url,
        videoSrc,
        mode,
        image,
        values
      }
    })
    return {
      type,
      cols: adaptedCols
    }
  })

  return {
    title,
    text,
    imageRows: adaptedImageRows,
    sliderRows: adaptedSliderRows
  }
}
