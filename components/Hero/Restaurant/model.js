export default (info) => {
  const {
    image = '',
    popupImage = '',
    logo = '',
    type = '',
    restaurantName = '',
    parentPlace = '',
    city = '',
    menuFile = ''
  } = info
  return {
    image,
    popupImage,
    logo,
    type,
    restaurantName,
    parentPlace,
    city,
    menuFile
  }
}
