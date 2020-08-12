export default (info) => {
  const {
    title = '',
    label = '',
    mode = '',
    // url = '',
    linkLabel = '',
    image = '',
    preview = '',
    tag = '',
    pageId = {}
  } = info

  const {
    url = ''
  } = pageId || {}

  return {
    title,
    label,
    mode,
    url,
    linkLabel,
    image,
    preview,
    tag
  }
}
