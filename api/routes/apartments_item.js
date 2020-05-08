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
      hasGallery: true,
      popup: {
        type: 'video',
        content: {
          title: 'Karavannaya 11',
          video: {
            videoSrc: 'https://player.vimeo.com/video/76979871',
            image: '/images/gallery/gallery-2-5.jpg'
          }
        }
      },
      values: [
        {
          title: '1',
          image: '/images/main/main-1.jpg'
        },
        {
          title: '2',
          image: '/images/gallery/gallery-2-2.jpg'
        },
        {
          title: '3',
          image: '/images/main/main-2.jpg'
        }
      ]
    },
    {
      name: 'apartment_head',
      mode: '',
      title: 'Karavannaya 11',
      label: 'by Ginza Hotels&Apartments',
      city: 'Санкт-Петербург',
      category: 'Апартаменты',
      description: {
        title: 'Описание',
        text: 'Просторные апартаменты расположились на пятом этаже старинного дома на углу Невского проспекта и Караванной улицы, построенного в стиле раннего классицизма 1780-х гг. с треугольными эркерами. Гости апартаментов смогут прикоснуться к истории Петрограда, остановившись водном из исторических центров его литературной жизни. Здесь жил Жуковский, бывали Тургенев и Вяземский.',
        moreText: 'Просторные апартаменты расположились на пятом этаже старинного дома на углу Невского проспекта и Караванной улицы, построенного в стиле раннего классицизма 1780-х гг. с треугольными эркерами. Гости апартаментов смогут прикоснуться к истории Петрограда, остановившись водном из исторических центров его литературной жизни. Здесь жил Жуковский, бывали Тургенев и Вяземский. Просторные апартаменты расположились на пятом этаже старинного дома на углу Невского проспекта и Караванной улицы, построенного в стиле раннего классицизма 1780-х гг. с треугольными эркерами. Гости апартаментов смогут прикоснуться к истории Петрограда, остановившись водном из исторических центров его литературной жизни. Здесь жил Жуковский, бывали Тургенев и Вяземский.'
      },
      params: [
        {
          type: 'beds',
          value: '3 номера'
        },
        {
          type: 'adult',
          value: '4 гостей'
        },
        {
          type: 'size',
          value: '57м'
        }
      ]
    },
    {
      name: 'features_comfort',
      mode: 'section--apartment',
      title: 'Для вашего комфорта',
      values: [
        {
          color: '#D698B9',
          title: 'Видовый балкон'
        },
        {
          color: '#AB93C9',
          title: 'Декоративный камин'
        },
        {
          color: '#FFBEA3',
          title: 'Трансфер от/до аэропорта'
        },
        {
          color: '#FAE3D9',
          title: 'Кухня с обеденной зоной'
        },
        {
          color: '#BBDED6',
          title: 'Детские принадлежности'
        },
        {
          color: '#8AC6D1',
          title: 'Просторная гостиная'
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
          id: 'nespresso',
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
          image: '/images/service-additional/service-additional-full.jpg'
        },
        {
          url: '/',
          title: 'Цветочный домик',
          image: '/images/gallery/gallery-2-12.jpg'
        },
        {
          url: '/',
          title: 'Прачечная и химчистка',
          image: '/images/gallery/gallery-2-10.jpg'
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
