module.exports = {
  title: 'Hotels Halls One',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'fixed_actions',
      values: [
        {
          id: 'phone',
          type: 'link',
          href: 'tel:88002012173',
          label: '8 800 201-21-73'
        },
        {
          id: 'booking',
          type: 'popup',
          label: 'Бронировать',
          isMobile: true,
          popup: {
            type: 'popupBooking',
            content: {
              image: '/images/restaurant/restaurant-full.jpg',
              logo: '/images/restaurant-logo.svg',
              fields: [
                {
                  type: 'text',
                  label: 'Имя',
                  name: 'userName',
                  validate: [
                    {
                      rule: 'required'
                    }
                  ]
                },
                {
                  type: 'phone',
                  label: 'Телефон',
                  name: 'userPhone',
                  validate: [
                    {
                      rule: 'phone'
                    }
                  ]
                },
                {
                  type: 'counter',
                  label: 'Гостей',
                  name: 'count'
                },
                {
                  type: 'date',
                  label: 'Дата',
                  name: 'date'
                }
              ]
            }
          }
        }
      ]
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
        title: 'Банкетный зал',
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
          id: 'spotlight',
          title: 'Профессиональное освещение'
        },
        {
          id: 'sound',
          title: 'Аудио&#8209;видео оборудование'
        },
        {
          id: 'coffeebreak',
          title: 'Зона для кофе&#8209;брейка'
        },
        {
          id: 'conditioning',
          title: 'Индивид. система кондиционирования'
        },
        {
          id: 'conference',
          title: 'Дополнительные конференц&#8209;комнаты'
        }
      ]
    },
    {
      name: 'seating_pattern',
      properties: {
        title: 'Схема рассадки'
      },
      values: [
        {
          id: '1',
          title: 'Театр',
          adult: '120 мест',
          image: '/images/seating-pattern/theater.svg'
        },
        {
          id: '2',
          title: 'Банкет',
          adult: '60 мест',
          image: '/images/seating-pattern/banquet.svg'
        },
        {
          id: '3',
          title: 'Класс',
          adult: '60 мест',
          image: '/images/seating-pattern/classroom.svg'
        },
        {
          id: '4',
          title: 'O-Shape',
          adult: '60 мест',
          image: '/images/seating-pattern/o-shape.svg'
        },
        {
          id: '5',
          title: 'U-Shape',
          adult: '60 мест',
          image: '/images/seating-pattern/u-shape.svg'
        },
        {
          id: '6',
          title: 'Фуршет',
          adult: '120 мест',
          image: '/images/seating-pattern/stand-up-meal.svg'
        }
      ]
    },
    {
      name: 'see_also',
      properties: {
        url: 'conference',
        linkLabel: 'Конференц-зал'
      }
    },
    {
      name: 'breadcrumbs',
      values: [
        {
          url: '/',
          linkLabel: 'Главная'
        },
        {
          url: '/hotels',
          linkLabel: 'Отели'
        },
        {
          url: '/hotels/arka',
          linkLabel: 'Отель Arka'
        },
        {
          url: '/hotels/arka/halls',
          linkLabel: 'Встречи & Мероприятия'
        },
        {
          url: null,
          linkLabel: 'Конференц-зал'
        }
      ]
    }
  ]
}
