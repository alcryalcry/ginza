module.exports = {
  title: 'Apartment one',
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
          image: '/images/main/main-1.jpg'
        },
        {
          title: '2',
          image: '/images/main/main-2.jpg'
        },
        {
          title: '3',
          image: '/images/main/main-1.jpg'
        }
      ]
    },
    {
      name: 'apartment_head',
      properties: {
        mode: '',
        title: 'Royal Suite',
        label: 'by Ginza Hotels&Apartments',
        city: 'Ростов-на-Дону',
        category: 'Отель'
      },
      description: {
        title: 'Описание',
        text: 'Роскошный номер с большой гостиной и панорамными окнами.'
      },
      params: [
        {
          type: 'adult',
          value: '2 гостя'
        },
        {
          type: 'size',
          value: '57м'
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
      name: 'toggle_list',
      properties: {
        mode: '',
        title: 'Политики'
      },
      values: [
        {
          id: 1,
          title: 'Время заезда и выезда',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 2,
          title: 'Ранний заезд и поздний выезд',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 3,
          title: 'Гарантированные бронирования и депозиты',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 4,
          title: 'Отмена бронирования',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 5,
          title: 'Банковские карты',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        }
      ]
    },
    {
      name: 'slider_see_also',
      properties: {
        title: 'Смотрите также',
        url: 'other-hotel-slug',
        linkLabel: 'Все варианты',
        id: 'apartments'
      },
      values: [
        {
          id: 'standart',
          type: 'hotels',
          url: 'standart',
          title: 'Standart',
          images: [
            '/images/room/room-preview-1.jpg',
            '/images/hotel/hotel-preview-1.jpg'
          ],
          params: [
            {
              type: 'adult',
              value: 4
            },
            {
              type: 'size',
              value: '15м'
            }
          ]
        },
        {
          type: 'hotels',
          id: 'business',
          url: 'business',
          title: 'Business',
          images: [
            '/images/room/room-preview-2.jpg',
            '/images/hotel/hotel-preview-2.jpg'
          ],
          params: [
            {
              type: 'adult',
              value: 3
            },
            {
              type: 'size',
              value: '13м'
            }
          ]
        },
        {
          type: 'hotels',
          id: 'business_city_view',
          url: 'business_city_view',
          title: 'Business City View',
          images: [
            '/images/room/room-preview-3.jpg',
            '/images/hotel/hotel-preview-3.jpg'
          ],
          params: [
            {
              type: 'adult',
              value: 2
            },
            {
              type: 'size',
              value: '13м'
            }
          ]
        },
        {
          type: 'hotels',
          id: 'corner_suite',
          url: 'corner_suite',
          title: 'Corner Suite',
          images: [
            '/images/room/room-preview-4.jpg',
            '/images/hall/hall-preview-1.jpg'
          ],
          params: [
            {
              type: 'adult',
              value: 2
            },
            {
              type: 'size',
              value: '15м'
            }
          ]
        },
        {
          type: 'hotels',
          id: 'duplex_city_view',
          url: 'duplex_city_view',
          title: 'Duplex City View',
          images: [
            '/images/room/room-preview-5.jpg',
            '/images/hall/hall-preview-2.jpg'
          ],
          params: [
            {
              type: 'adult',
              value: 4
            },
            {
              type: 'size',
              value: '15м'
            }
          ]
        },
        {
          type: 'hotels',
          id: 'royal_suite',
          url: 'royal_suite',
          title: 'Royal Suite',
          images: [
            '/images/room/room-preview-6.jpg',
            '/images/hotel/hotel-preview-3.jpg'
          ],
          params: [
            {
              type: 'adult',
              value: 2
            },
            {
              type: 'size',
              value: '15м'
            }
          ]
        }
      ]
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
