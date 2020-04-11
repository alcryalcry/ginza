module.exports = {
  title: 'Главная страница',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'sub_header',
      type: 'anchors',
      values: [
        {
          linkLabel: 'Ginza Project',
          url: 'ginza-project'
        },
        {
          linkLabel: 'Ginza Hotels & Apartments',
          url: 'ginza-hotels-and-apartments'
        }
      ]
    },
    {
      name: 'about_numbers',
      anchor: 'ginza-project',
      values: [
        {
          value: '1 500 000',
          label: 'посетителей ежегодно',
          mode: 'main'
        },
        {
          value: '15',
          label: 'лет на рынке'
        },
        {
          value: '150',
          label: 'проектов по всему миру'
        }
      ]
    },
    {
      name: 'slider_features',
      title: 'Более 100 <br/>ресторанов',
      subtext: 'Ginza Project — это не просто заведения общественного питания. Это маленькая Грузия с ее прославленным харчо, колоритный Узбекистан — родина нашей любимой самсы, эмоциональная Италия и сдержанная Япония, высотная экскурсия по старому Петербургу за обедом, душевные посиделки в кругу семьи и ужин с партнерами по бизнесу. У каждого ресторана есть свой стиль, дизайн и душа, каждой частичке которой команда Ginza Project придает особое значение: от основателей холдинга до персонала заведений. Ведь нам важно, чтобы качественная и вкусная еда была доступна в любой день недели и время суток, а отдых — веселым, познавательным и интересным. Мы готовы поделиться своим опытом и вдохновением со всеми, кто живет полной жизнью: независимо от уровня дохода или гастрономических привычек. Мы собираем кухни множества стран, сотрудничаем с лучшими мировыми поварами и внимательно следим за работой каждого ресторана.',
      afterText: 'За 15 лет работы мы поняли, что хотим привнести качественное обслуживание не только в сферу общественного питания, но и во множество других аспектов жизни современного горожанина. Так появились дополнительные сервисы',
      url: '/',
      services: [
        {
          iconName: 'catering',
          label: 'Catering'
        },
        {
          iconName: 'delivery',
          label: 'Delivery Service'
        },
        {
          iconName: 'flower',
          label: 'Flower'
        },
        {
          iconName: 'fitness',
          label: 'Fitness'
        },
        {
          iconName: 'tuor',
          label: 'Tuor'
        },
        {
          iconName: 'prime',
          label: 'Prime'
        },
        {
          iconName: 'sky',
          label: 'Sky'
        }
      ],
      values: [
        {
          id: 1,
          mode: 'vertical',
          image: '/images/feature-1.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          image: '/images/feature-2.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          image: '/images/feature-3.jpg'
        },
        {
          id: 4,
          mode: 'vertical',
          image: '/images/feature-1.jpg'
        },
        {
          id: 5,
          mode: 'horizontal',
          image: '/images/feature-2.jpg'
        },
        {
          id: 6,
          mode: 'horizontal',
          image: '/images/feature-3.jpg'
        },
        {
          id: 7,
          mode: 'vertical',
          image: '/images/feature-1.jpg'
        }
      ]
    },
    {
      name: 'review',
      anchor: 'ginza-hotels-and-apartments',
      description: 'Ginza Hotels&Apartments – отели и премиальные апартаменты в Петербурге и Баку для тех, кто ценит свое время и привык получать лучшее. Все апартаменты отличает выгодное местоположение: отсюда всегда удобно добираться до аэропорта и вокзалов, бизнес-центров и магазинов.',
      values: [
        {
          name: 'gallery_grid',
          title: 'Дизайн',
          rows: [
            {
              type: 'video',
              cols: [
                {
                  videoSrc: 'https://player.vimeo.com/video/76979871',
                  mode: 'size-full',
                  image: 'https://i.picsum.photos/id/10/780/464.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-one',
                  image: 'https://i.picsum.photos/id/1014/300/464.jpg'
                },
                {
                  mode: 'size-two',
                  image: 'https://i.picsum.photos/id/1012/460/464.jpg'
                }
              ]
            }
          ]
        },
        {
          name: 'text',
          title: 'Искусно спроектированное жилье в идеальном состоянии — с роскошными удобствами, услугами и персональным менеджером.'
        },
        {
          name: 'gallery_grid',
          rows: [
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-full',
                  image: 'https://i.picsum.photos/id/1027/780/464.jpg'
                }
              ]
            }
          ]
        },
        {
          name: 'gallery_grid',
          title: 'Для отдыха <br/>с детьми',
          rows: [
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-two',
                  image: 'https://i.picsum.photos/id/1066/460/464.jpg'
                },
                {
                  mode: 'size-one',
                  image: 'https://i.picsum.photos/id/173/300/464.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-one',
                  image: 'https://i.picsum.photos/id/237/300/464.jpg'
                },
                {
                  mode: 'size-two',
                  image: 'https://i.picsum.photos/id/244/460/464.jpg'
                }
              ]
            }
          ]
        },
        {
          name: 'text',
          title: 'Искусно спроектированное жилье в идеальном состоянии — с роскошными удобствами, услугами и персональным менеджером.'
        },
        {
          name: 'gallery_grid',
          rows: [
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-full',
                  image: 'https://i.picsum.photos/id/225/780/464.jpg'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'slider_features',
      title: 'Вечеринки с Ginza Hotels & Apartments',
      url: '/',
      linkLabel: 'Подробнее',
      values: [
        {
          id: 1,
          mode: 'vertical',
          name: 'Завтраки в постель',
          image: '/images/feature-1.jpg'
        },
        {
          id: 2,
          mode: 'horizontal',
          name: '20% скидка в ресторанах Ginza Project ',
          image: '/images/feature-2.jpg'
        },
        {
          id: 3,
          mode: 'vertical',
          name: 'Сервис 24/7',
          image: '/images/feature-3.jpg'
        },
        {
          id: 4,
          mode: 'vertical',
          name: 'Расположение в центре города',
          image: '/images/feature-1.jpg'
        },
        {
          id: 5,
          mode: 'horizontal',
          name: 'Стильные интерьеры',
          image: '/images/feature-2.jpg'
        },
        {
          id: 6,
          mode: 'horizontal',
          name: 'Персональный вход',
          image: '/images/feature-3.jpg'
        },
        {
          id: 7,
          mode: 'vertical',
          name: 'VIP-экскурсии по городу',
          image: '/images/feature-1.jpg'
        }
      ]
    },
    {
      name: 'slider_instagram',
      title: 'Наше вдохновение <br />- это Вы!',
      url: '/',
      values: [
        {
          id: 1,
          url: '/',
          image: '/images/blog-1.jpg'
        },
        {
          id: 2,
          url: '/',
          image: '/images/blog-2.jpg'
        },
        {
          id: 3,
          url: '/',
          image: '/images/blog-3.jpg'
        },
        {
          id: 4,
          url: '/',
          image: '/images/blog-1.jpg'
        },
        {
          id: 5,
          url: '/',
          image: '/images/blog-2.jpg'
        },
        {
          id: 6,
          url: '/',
          image: '/images/blog-3.jpg'
        }
      ]
    },
    {
      name: 'breadcrumbs',
      values: [
        {
          url: '/',
          linkLabel: 'Главная'
        },
        {
          url: '/about',
          linkLabel: 'О нас'
        }
      ]
    }
  ]
}
