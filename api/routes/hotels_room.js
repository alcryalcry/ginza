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
      mode: '',
      title: 'Royal Suite',
      label: 'by Ginza Hotels&Apartments',
      city: 'Ростов-на-Дону',
      category: 'Отель',
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
      mode: 'section--apartment',
      title: 'Услуги и удобства',
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
      mode: '',
      title: 'Политики',
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
      title: 'Смотрите также',
      url: '/',
      linkLabel: 'Все варианты',
      id: 'apartments',
      values: [
        {
          slug: 'rubinsteina12',
          city: 'Санкт-Петербург',
          title: 'Rubinsteina 12',
          images: [
            '/images/hotel/hotel-preview-1.jpg'
          ],
          coords: [59.932211, 30.346072],
          params: [
            {
              type: 'beds',
              value: '3'
            },
            {
              type: 'adult',
              value: '4'
            },
            {
              type: 'size',
              value: '57м'
            }
          ]
        },
        {
          slug: 'karavannaya11',
          city: 'Санкт-Петербург',
          title: 'Karavannaya 11',
          images: [
            '/images/hotel/hotel-preview-2.jpg'
          ],
          coords: [59.032211, 30.446072],
          params: [
            {
              type: 'beds',
              value: '3'
            },
            {
              type: 'adult',
              value: '4-6'
            },
            {
              type: 'size',
              value: '100м'
            }
          ]
        },
        {
          slug: 'moskovskiy191',
          city: 'Санкт-Петербург',
          title: 'Moskovskiy 191',
          images: [
            '/images/hotel/hotel-preview-3.jpg'
          ],
          coords: [59.232211, 30.906072],
          params: [
            {
              type: 'beds',
              value: '3'
            },
            {
              type: 'adult',
              value: '4'
            },
            {
              type: 'size',
              value: '60м'
            }
          ]
        },
        {
          slug: 'moskovskiy1912',
          city: 'Санкт-Петербург',
          title: 'Moskovskiy 191',
          images: [
            '/images/apartment/apartment-preview-1.jpg'
          ],
          coords: [59.232211, 30.906072],
          params: [
            {
              type: 'beds',
              value: '3'
            },
            {
              type: 'adult',
              value: '4'
            },
            {
              type: 'size',
              value: '60м'
            }
          ]
        },
        {
          slug: 'moskovskiy1913',
          city: 'Санкт-Петербург',
          title: 'Moskovskiy 191',
          images: [
            '/images/apartment/apartment-preview-2.jpg'
          ],
          coords: [59.232211, 30.906072],
          params: [
            {
              type: 'beds',
              value: '3'
            },
            {
              type: 'adult',
              value: '4'
            },
            {
              type: 'size',
              value: '60м'
            }
          ]
        },
        {
          slug: 'moskovskiy1914',
          city: 'Санкт-Петербург',
          title: 'Moskovskiy 191',
          images: [
            '/images/apartment/apartment-preview-3.jpg'
          ],
          coords: [59.232211, 30.906072],
          params: [
            {
              type: 'beds',
              value: '3'
            },
            {
              type: 'adult',
              value: '4'
            },
            {
              type: 'size',
              value: '60м'
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
