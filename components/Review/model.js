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
      text = '',
      image_rows = [],
      slider_rows = []
    } = item
    return {
      name,
      title,
      text,
      image_rows,
      slider_rows
    }
  })

  return {
    description,
    values: adaptedValues
  }
}
