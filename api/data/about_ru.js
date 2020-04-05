module.exports = {
  title: 'Главная страница',
  description: 'Описание страницы',
  keywords: '',
  components: [
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
