export default (info) => {
  const {
    image = '',
    popupImage = '',
    logo = '',
    type = '',
    placeName = '',
    placeParent = '',
    city = '',
    url = ''
  } = info
  return {
    image,
    popupImage,
    logo,
    type,
    placeName,
    placeParent,
    city,
    url
  }
}
