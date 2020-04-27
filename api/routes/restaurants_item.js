module.exports = {
  title: 'Restaurants one',
  description: 'Описание страницы',
  keywords: '',
  mode: 'page--dark',
  components: [
    {
      name: 'booking_mini'
    },
    {
      name: 'slider_features',
      beforeText: 'Мы очень любим своих гостей и делаем все, чтобы они провели свой отдых в Санкт-Петербурге незабываемо. Для лучшего обслуживания мы подготовили для Вас премиальный сервис, услуги которого постоянно обновляются.',
      values: [
        {
          id: 1,
          mode: 'vertical',
          image: 'https://picsum.photos/id/106/300/460'
        },
        {
          id: 2,
          mode: 'horizontal',
          image: 'https://picsum.photos/id/1060/540/370'
        },
        {
          id: 3,
          mode: 'vertical',
          image: 'https://picsum.photos/id/1062/300/460'
        },
        {
          id: 4,
          mode: 'vertical',
          image: 'https://picsum.photos/id/106/300/460'
        },
        {
          id: 5,
          mode: 'horizontal',
          image: 'https://picsum.photos/id/1060/540/370'
        },
        {
          id: 6,
          mode: 'horizontal',
          image: 'https://picsum.photos/id/1062/300/460'
        },
        {
          id: 7,
          mode: 'vertical',
          image: 'https://picsum.photos/id/106/300/460'
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
