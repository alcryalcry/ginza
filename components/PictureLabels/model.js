export default (info) => {
  const {
    image = '',
    labels = []
  } = info

  const adaptedLables = (labels || []).map((item) => {
    const {
      x = null,
      y = null,
      text = ''
    } = item
    return {
      x,
      y,
      text
    }
  })
  return {
    image,
    labels: adaptedLables
  }
}
