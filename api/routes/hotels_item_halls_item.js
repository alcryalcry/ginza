module.exports = {
  title: 'Hotels Halls One',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'booking_mini'
    },
    {
      name: 'slider_main_apartment',
      values: [
        {
          title: '1',
          image: '/images/hall/hall-1.jpg'
        },
        {
          title: '2',
          image: '/images/hall/hall-2.jpg'
        }
      ]
    },
    {
      name: 'apartment_head',
      properties: {
        mode: '',
        title: 'Конференц&#8209;зал',
        label: 'by Ginza Hotels&Apartments',
        city: 'Ростов-на-Дону / Отель Arka'
      },
      params: [
        {
          type: 'adult',
          value: 'до 120 посадочных мест'
        },
        {
          type: 'size',
          value: '160м'
        }
      ]
    },
    {
      name: 'features_list',
      properties: {
        mode: 'section--apartment',
        title: 'Услуги и удобства'
      },
      values: [
        {
          id: 'wifi',
          title: 'Wi Fi'
        },
        {
          id: 'safe',
          title: 'Сейф'
        },
        {
          id: 'menu',
          title: 'Меню подушек'
        },
        {
          id: 'baggage',
          title: 'Хранение багажа'
        },
        {
          id: 'tv',
          title: 'Цифровое телевидение'
        },
        {
          id: 'invalid',
          title: 'Доступ для инвалидных колясок'
        },
        {
          id: 'coffeemachine',
          title: 'Кофемашина Zielinski & Rozen'
        },
        {
          id: 'multilanguage',
          title: 'Многоязычный персонал'
        },
        {
          id: 'sport',
          title: 'Спортзал'
        },
        {
          id: 'minibar',
          title: 'Мини-бар'
        },
        {
          id: 'parking',
          title: 'Платная парковка'
        },
        {
          id: 'guide',
          title: 'Услуги гида'
        }
      ]
    },
    {
      name: 'see_also',
      properties: {
        slug: '2',
        linkLabel: 'Банкетный зал'
      }
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
