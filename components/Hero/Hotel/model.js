export default (info) => {
  const {
    image = '',
    type = '',
    placeName = '',
    city = '',
    anchorLink = '',
    description = ''
  } = info
  return {
    image,
    type,
    placeName,
    city,
    anchorLink,
    description
  }
}
