export default (info) => {
  const {
    title = '',
    label = '',
    mode = '',
    url = '',
    linkLabel = '',
    image = '',
    tag = ''
  } = info

  return {
    title,
    label,
    mode,
    url,
    linkLabel,
    image,
    tag
  }
}
