module.exports = {
  title: 'Restaurants one',
  description: 'Описание страницы',
  keywords: '',
  mode: 'page--dark',
  components: [
    {
      name: 'fixed_actions',
      values: [
        {
          id: 'menu',
          type: 'link',
          href: '/',
          isDownload: true,
          label: 'Меню ресторана'
        },
        {
          id: 'booking',
          type: 'popup',
          label: 'Забронировать столик',
          isMobile: true,
          popup: {
            type: 'popupBooking',
            content: {
              image: '/images/restaurant/restaurant-full.jpg',
              logo: '/images/restaurant-logo.svg',
              resultTitle: 'Вы забронировали столик',
              resultDescription: 'Через несколько минут с Вами свяжется менеджер для уточнения деталей.',
              resultLink: {
                href: 'tel:88002012173',
                label: '8 800 201-21-73'
              },
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
                  name: 'count',
                  validate: [
                    {
                      rule: 'counter'
                    }
                  ]
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
      name: 'hero_restaurant',
      properties: {
        image: '/images/restaurant/restaurant-1.jpg',
        popupImage: '/images/restaurant/restaurant-full.jpg',
        logo: '/images/restaurant-logo.svg',
        placeName: 'Lilo',
        placeParent: 'Arka',
        type: 'Ресторан',
        city: 'Ростов-на-Дону',
        url: 'https://www.google.ru/maps/place/%D0%90rka/@59.9347163,30.3135365,14.7z/data=!4m8!1m2!2m1!1z0LDRgNC60LAg0YDQtdGB0YLQvtGA0LDQvQ!3m4!1s0x0:0x6fedfedf448ed3a2!8m2!3d59.9372654!4d30.321182'
      }
    },
    {
      name: 'slider_features',
      properties: {
        beforeText: 'Мы очень любим своих гостей и делаем все, чтобы они провели свой отдых в Санкт-Петербурге незабываемо. Для лучшего обслуживания мы подготовили для Вас премиальный сервис, услуги которого постоянно обновляются.'
      },
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
      properties: {
        slug: '2',
        linkLabel: 'Ресторан Gastro Space'
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
