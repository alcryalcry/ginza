module.exports = {
  title: 'Apartment one',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'banner_text',
      properties: {
        title: 'Встречи <br/>& Мероприятия',
        description: 'ARKA Hotel - многофункциональный деловой комплекс для организации событий самого высокого уровня: конференции, деловые встречи, мероприятия, свадьбы.',
        links: [
          {
            url: 'halls/conference',
            linkLabel: 'Конференц-зал'
          },
          {
            url: 'halls/banquet',
            linkLabel: 'Банкетный зал'
          }
        ],
        features: {
          properties: {
            title: 'Услуги'
          },
          values: [
            {
              id: 'manager',
              title: 'Персональный менеджер'
            },
            {
              id: 'banquet',
              title: 'Банкетное обслуживание'
            },
            {
              id: 'sync',
              title: 'Возможность синхронного перевода'
            },
            {
              id: 'florist',
              title: 'Флорист'
            },
            {
              id: 'sound',
              title: 'Звукооператор'
            },
            {
              id: 'micro',
              title: 'Профессиональный ведущий'
            }
          ]
        }
      }
    },
    {
      name: 'slider_features',
      values: [
        {
          id: 1,
          mode: 'vertical',
          image: '/images/hall/hall-preview-2.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          image: '/images/hall/hall-preview-3.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          image: '/images/hall/hall-preview-4.jpg'
        }
      ]
    },
    {
      name: 'about_numbers',
      properties: {
        image: '/images/hall-scheme.svg',
        imageDescription: '160 кв. метров общая <br/>площадь зала',
        url: 'halls/conference',
        linkLabel: 'Конференц-зал',
        description: 'Для проведения мероприятий и&nbsp;профессиональных встреч',
        links: [
          {
            url: 'tel:88002012173',
            linkLabel: '8 800 201-21-73'
          },
          {
            url: 'mailto:sales.arka@ginzaproject.ru',
            linkLabel: 'sales.arka@ginzaproject.ru'
          }
        ]
      },
      values: [
        {
          value: '4',
          label: 'метра <br/>высота&nbsp;потолков'
        },
        {
          value: '120',
          label: 'до&nbsp;120 посадочных мест'
        }
      ]
    },
    {
      name: 'about_numbers',
      properties: {
        image: '/images/hall-scheme.svg',
        imageDescription: '160 кв. метров общая <br/>площадь зала',
        url: 'halls/banquet',
        linkLabel: 'Банкетный зал',
        description: 'Для проведения мероприятий и&nbsp;профессиональных встреч',
        links: [
          {
            url: 'tel:88002012173',
            linkLabel: '8 800 201-21-73'
          },
          {
            url: 'mailto:sales.arka@ginzaproject.ru',
            linkLabel: 'sales.arka@ginzaproject.ru'
          }
        ]
      },
      values: [
        {
          value: '4',
          label: 'метра <br/>высота&nbsp;потолков'
        },
        {
          value: '120',
          label: 'до&nbsp;120 посадочных мест'
        }
      ]
    },
    {
      name: 'see_also',
      properties: {
        url: 'halls/other-hotel-slug',
        linkLabel: 'Рестораны и бары'
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
