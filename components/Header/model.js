export default (info) => {
  const {
    menu = {
      phone: '',
      social: [],
      menuList: []
    },
    prevPage = '',
    cities = []
  } = info || {}

  const citiesModel = (cities || []).map((city) => {
    const { id = null, name = '' } = city
    return {
      id,
      name
    }
  })
  return {
    menu,
    prevPage,
    cities: citiesModel
  }
}
