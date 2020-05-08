module.exports = {
  title: 'Apartment one',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'slider_features',
      mode: 'section--min',
      modeSlider: 'section--min',
      title: 'Рестораны <br/>& Бары',
      subtext: 'К вашим услугам 2 ресторана с оригинальной концепцией, многофункциональное пространство для мероприятий любых форматов Gastrospace. Авторский ресторан Ten June с открыточным видом на исторический центр и грузинский ресторан Lilo, выполненный по мотивам народной грузинской сказки «Охотник из Лило» - это гастрономическое путешествие, которое позволит открыть новый мир вкусов, эмоций и впечатлений.',
      values: [
        {
          id: 1,
          slug: 'gastro_space',
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-1.jpg',
          name: 'Gastro Space'
        },
        {
          id: 2,
          slug: 'lilo',
          mode: 'horizontal',
          image: '/images/restaurant/restaurant-preview-2.jpg',
          name: 'Lilo'
        },
        {
          id: 3,
          slug: 'ten_june',
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-3.jpg',
          name: 'Ten June'
        },
        {
          id: 4,
          slug: 'rest4',
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-2.jpg',
          name: 'Gastro Space'
        },
        {
          id: 5,
          slug: 'rest5',
          mode: 'horizontal',
          image: '/images/restaurant/restaurant-preview-1.jpg',
          name: 'Gastro Space'
        },
        {
          id: 6,
          slug: 'rest6',
          mode: 'horizontal',
          image: '/images/restaurant/restaurant-preview-3.jpg',
          name: 'Gastro Space'
        },
        {
          id: 7,
          slug: 'rest7',
          mode: 'vertical',
          image: '/images/restaurant/restaurant-preview-1.jpg',
          name: 'Gastro Space'
        }
      ]
    },
    {
      name: 'banner_text',
      title: 'Организация событий',
      description: 'ARKA Hotel - многофункциональный деловой комплекс для организации событий самого высокого уровня: конференции, деловые встречи, мероприятия, свадьбы.',
      url: '/',
      linkLabel: 'Подробнее'
    },
    {
      name: 'slider_features_big',
      properties: {
        navigationMode: 'navigation--white'
      },
      values: [
        {
          id: 1,
          name: 'Встречи и мероприятия',
          title: 'Встречи и мероприятия',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/hall/hall-preview-1.jpg'
        },
        {
          id: 2,
          name: 'Банкетный зал',
          title: 'Банкетный зал',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/hall/hall-1.jpg'
        },
        {
          id: 3,
          name: 'Конференц-зал',
          title: 'Конференц-зал',
          description: 'Все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/restaurant/restaurant-1.jpg'
        }
      ]
    },
    {
      name: 'toggle_list',
      mode: '',
      title: 'Спецпредложения',
      description: 'Скидки и специальные предложения для наших гостей от Ginza Hotels&Apartments.',
      values: [
        {
          id: 1,
          title: '20% на меню ресторанов Gizna',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 2,
          title: 'от 10% при бронирование за сутки и более',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 3,
          title: 'от 15% для держателей карт Ginza',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        }
      ]
    },
    {
      name: 'services_additional',
      mode: '',
      title: 'Дополнительные услуги',
      description: 'После того как вы забронируете жилье, менеджер поездки договорится о дополнительных услугах.',
      descriptionIcon: true,
      values: [
        {
          url: '/',
          title: 'Свадебные предложения',
          image: '/images/service-additional/service-additional-1.jpg'
        },
        {
          url: '/',
          title: 'Экскурсии и туры',
          image: '/images/service-additional/service-additional-2.jpg'
        },
        {
          url: '/',
          title: 'Beauty Concierge',
          image: '/images/service-additional/service-additional-3.jpg'
        },
        {
          url: '/',
          title: 'Личный водитель',
          mode: 'size-full',
          image: '/images/service-additional/service-additional-full.jpg'
        }
      ]
    },
    {
      name: 'housing_location',
      mode: '',
      title: 'Расположение',
      coords: [59.932211, 30.346072],
      values: [
        {
          id: 1,
          name: 'Большой драматический театр имени Г. А. Товстоногова',
          distance: '5 мин',
          type: 'foot',
          url: '#'
        },
        {
          id: 2,
          name: 'Terrassa- Ресторан Ginza Project',
          distance: '7 мин',
          type: 'foot',
          url: '#'
        },
        {
          id: 3,
          name: 'Музей Анны Ахматовой в фонтанном доме- музей',
          distance: '10 мин',
          type: 'foot',
          url: '#'
        },
        {
          id: 4,
          name: 'Jamie\'s Italian- Ресторан Ginza Project',
          distance: '20 мин',
          type: 'foot',
          url: '#'
        },
        {
          id: 5,
          name: 'Царь - ресторан Ginza Project',
          distance: '5 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 6,
          name: 'Катюша - ресторан Ginza Project',
          distance: '9 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 7,
          name: 'Музей театрального и музыкального искусства - музей',
          distance: '15 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 8,
          name: 'Музей Фаберже - музей',
          distance: '20 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 9,
          name: 'Царь - ресторан Ginza Project',
          distance: '25 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 10,
          name: 'Катюша - ресторан Ginza Project',
          distance: '39 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 11,
          name: 'Музей театрального и музыкального искусства - музей',
          distance: '45 мин',
          type: 'car',
          url: '#'
        },
        {
          id: 12,
          name: 'Музей Фаберже - музей',
          distance: '60 мин',
          type: 'car',
          url: '#'
        }
      ]
    },
    {
      name: 'slider_reviews',
      mode: '',
      title: 'Отзывы гостей',
      description: 'После выезда мы просим гостей оставить их отзыв и пожелания.',
      values: [
        {
          id: 1,
          image: '/images/user/user-1.png',
          userName: 'Лидия Черникова',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 2,
          image: '/images/user/user-2.png',
          userName: 'Татьяна Путилина',
          text: 'Идеальное местоположение - самый центр города. Жили на верхнем этаже, порадовали очень большие окна и отличный вид на главную улицу города. Отель новый, все стильное, чистое, красивое.'
        },
        {
          id: 3,
          image: '/images/user/user-1.png',
          userName: 'Лидия Черникова',
          text: 'Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство.'
        },
        {
          id: 4,
          image: '/images/user/user-2.png',
          userName: 'Татьяна Путилина',
          text: 'Идеальное местоположение - самый центр города. Жили на верхнем этаже, порадовали очень большие окна и отличный вид на главную улицу города. Отель новый, все стильное, чистое, красивое.'
        },
        {
          id: 5,
          image: '/images/user/user-1.png',
          userName: 'Лидия Черникова',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 6,
          image: '/images/user/user-2.png',
          userName: 'Татьяна Путилина',
          text: 'Идеальное местоположение - самый центр города. Жили на верхнем этаже, порадовали очень большие окна и отличный вид на главную улицу города. Отель новый, все стильное, чистое, красивое.'
        }
      ]
    },
    {
      name: 'see_also',
      slug: '2',
      linkLabel: 'Отель Gastro Space'
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
