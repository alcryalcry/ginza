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
          mode: 'vertical',
          image: 'https://picsum.photos/id/106/300/460',
          name: 'Gastro Space'
        },
        {
          id: 2,
          mode: 'horizontal',
          image: 'https://picsum.photos/id/1060/540/370',
          name: 'Lilo'
        },
        {
          id: 3,
          mode: 'vertical',
          image: 'https://picsum.photos/id/1062/300/460',
          name: 'Ten June'
        },
        {
          id: 4,
          mode: 'vertical',
          image: 'https://picsum.photos/id/106/300/460',
          name: 'Gastro Space'
        },
        {
          id: 5,
          mode: 'horizontal',
          image: 'https://picsum.photos/id/1060/540/370',
          name: 'Gastro Space'
        },
        {
          id: 6,
          mode: 'horizontal',
          image: 'https://picsum.photos/id/1062/300/460',
          name: 'Gastro Space'
        },
        {
          id: 7,
          mode: 'vertical',
          image: 'https://picsum.photos/id/106/300/460',
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
          image: 'https://picsum.photos/id/123/1440/700'
        },
        {
          id: 2,
          name: 'Банкетный зал',
          title: 'Банкетный зал',
          description: 'Романтичная обстановка, уютные номера, приятные сюрпризы.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/555/1440/700'
        },
        {
          id: 3,
          name: 'Конференц-зал',
          title: 'Конференц-зал',
          description: 'Все это обеспечит уединенный и незабываемый отдых в Ginza Hotels & Apartments.',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/445/1440/700'
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
          image: 'https://picsum.photos/id/594/250/280'
        },
        {
          url: '/',
          title: 'Экскурсии и туры',
          image: 'https://picsum.photos/id/444/250/280'
        },
        {
          url: '/',
          title: 'Beauty Concierge',
          image: 'https://picsum.photos/id/596/250/280'
        },
        {
          url: '/',
          title: 'Личный водитель',
          mode: 'size-full',
          image: 'https://picsum.photos/id/220/780/280'
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
          image: 'https://picsum.photos/id/237/60/60',
          userName: 'Лидия Черникова',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 2,
          image: 'https://picsum.photos/id/231/60/60',
          userName: 'Татьяна Путилина',
          text: 'Идеальное местоположение - самый центр города. Жили на верхнем этаже, порадовали очень большие окна и отличный вид на главную улицу города. Отель новый, все стильное, чистое, красивое.'
        },
        {
          id: 3,
          image: 'https://picsum.photos/id/200/60/60',
          userName: 'Лидия Черникова',
          text: 'Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство.'
        },
        {
          id: 4,
          image: 'https://picsum.photos/id/201/60/60',
          userName: 'Татьяна Путилина',
          text: 'Идеальное местоположение - самый центр города. Жили на верхнем этаже, порадовали очень большие окна и отличный вид на главную улицу города. Отель новый, все стильное, чистое, красивое.'
        },
        {
          id: 5,
          image: 'https://picsum.photos/id/202/60/60',
          userName: 'Лидия Черникова',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 6,
          image: 'https://picsum.photos/id/203/60/60',
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
