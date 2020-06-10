/* eslint-disable camelcase */
export default (info) => {
  const {
    description = '',
    values = []
  } = info || {}

  const adaptedValues = (values || []).map((item) => {
    const {
      name = '',
      title = '',
      image_rows = [],
      slider_rows = []
    } = item
    return {
      name,
      title,
      image_rows,
      slider_rows
    }
  })

  return {
    description,
    values: adaptedValues
  }
}
