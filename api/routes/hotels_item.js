module.exports = {
  title: 'Apartment one',
  description: 'Описание страницы',
  keywords: '',
  meta: {
    breadcrumb: 'Royal Suite'
  },
  components: [
    {
      name: 'booking_mini'
    },
    {
      name: 'slider_main_apartment',
      values: [
        {
          title: '1',
          image: 'https://picsum.photos/id/896/1440/700'
        },
        {
          title: '2',
          image: 'https://picsum.photos/id/604/1440/700'
        },
        {
          title: '3',
          image: 'https://picsum.photos/id/594/1440/700'
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
          id: 'batler',
          title: 'Персональный батлер 24/7'
        },
        {
          id: 'babychair',
          title: 'Детский стул'
        },
        {
          id: 'delivery',
          title: 'Доставка еды и напитков'
        },
        {
          id: 'family',
          title: 'Семейные апартаменты'
        },
        {
          id: 'breakfast',
          title: 'Завтрак в номер'
        },
        {
          id: 'elevator',
          title: 'Лифт'
        },
        {
          id: 'coffeemachine',
          title: 'Кофемашина Nespresso'
        },
        {
          id: 'games',
          title: 'Настольные игры'
        },
        {
          id: 'ironing',
          title: 'Гладильные принадлежности'
        },
        {
          id: 'buro',
          title: 'Экскурсионное бюро'
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
            'https://picsum.photos/id/582/300/400',
            'https://picsum.photos/id/57/300/400',
            'https://picsum.photos/id/58/300/400'
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
            'https://picsum.photos/id/532/300/400',
            'https://picsum.photos/id/586/300/400',
            'https://picsum.photos/id/58/300/400'
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
            'https://picsum.photos/id/560/300/400',
            'https://picsum.photos/id/57/300/400',
            'https://picsum.photos/id/600/300/400'
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
            'https://picsum.photos/id/550/300/400',
            'https://picsum.photos/id/57/300/400',
            'https://picsum.photos/id/22/300/400'
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
            'https://picsum.photos/id/570/300/400',
            'https://picsum.photos/id/57/300/400',
            'https://picsum.photos/id/44/300/400'
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
            'https://picsum.photos/id/12/300/400',
            'https://picsum.photos/id/57/300/400',
            'https://picsum.photos/id/1/300/400'
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
