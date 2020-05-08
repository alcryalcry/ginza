module.exports = {
  title: 'Restaurants one',
  description: 'Описание страницы',
  keywords: '',
  mode: 'page--dark',
  components: [
    {
      name: 'hero_restaurant',
      properties: {
        image: '/images/restaurant/restaurant-1.jpg',
        popupImage: '/images/restaurant/restaurant-full.jpg',
        logo: '/images/restaurant-logo.svg',
        restaurantName: 'Lilo',
        type: 'Ресторан',
        parentPlace: 'Arka',
        city: 'Ростов-на-Дону',
        menuFile: '/'
      }
    },
    {
      name: 'slider_features',
      beforeText: 'Мы очень любим своих гостей и делаем все, чтобы они провели свой отдых в Санкт-Петербурге незабываемо. Для лучшего обслуживания мы подготовили для Вас премиальный сервис, услуги которого постоянно обновляются.',
      values: [
        {
          id: 1,
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-1.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          image: '/images/restaurant/restaurant-preview-2.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-3.jpg'
        }
      ]
    },
    {
      name: 'see_also',
      slug: '2',
      linkLabel: 'Ресторан Gastro Space'
    },
    {
      name: 'breadcrumbs',
      values: [
        {
          url: '/',
          linkLabel: 'Апарт'
        },
        {
          url: '/about',
          linkLabel: 'О нас'
        }
      ]
    }
  ]
}
