module.exports = {
  title: 'Сервисы',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'banner_text',
      properties: {
        title: 'Индивидуальный сервиc',
        description: 'Мы очень любим своих гостей и делаем все, чтобы они провели свой отдых в Санкт-Петербурге незабываемо. Для лучшего обслуживания мы подготовили для Вас премиальный сервис, услуги которого постоянно обновляются.'
      }
    },
    {
      name: 'services_page',
      values: [
        {
          title: 'Beauty concierge',
          description: 'Мы знаем, как это важно – выглядеть безупречно. Для гостей действует специальное меню Beauty Concierge – в котором Вы найдете то, что Вам по душе. Специалисты премиального салона готовы провести выбранные Beauty-процедуры прямо в номере.',
          linkLabel: 'Подробнее',
          url: 'beauty',
          tag: 'Ginza Beauty',
          image: '/images/services/services-preview-1.jpg',
          color: '#FAF3F7',
          isInverted: false
        },
        {
          title: 'Экскурсии и туры',
          description: 'Познакомиться с Петербургом поближе стоит с экскурсионными программами от Ginza Hotels & Apartments - классические и неформальные маршруты, профессиональные гиды, музеи без очередей, автомобили S-класса. Если Вы давно мечтали о захватывающей обзорной прогулке на вертолете, катере или карете - они также доступны к заказу. Ваш персональный менеджер позаботится обо всем.',
          linkLabel: 'Подробнее',
          url: 'tours',
          tag: 'Ginza Tours',
          image: '/images/services/services-preview-2.jpg',
          color: '#FFF7F4',
          isInverted: true
        },
        {
          title: 'Личный водитель',
          description: 'Для удобного, передвижения по городу, мы предлагаем услуги комфортабельного трансфера. Автомобили S-класса доставят Вас в любую нужную точку города. С нами вы не пропустите ни одной важной встречи.',
          linkLabel: 'Связаться с менеджером',
          url: 'drive',
          tag: 'Ginza Drive',
          image: '/images/services/services-preview-3.jpg',
          color: '#F9F9F9',
          isInverted: false
        },
        {
          title: 'Цветочный домик',
          description: 'Повод не нужен для того, чтобы порадовать себя и своих близких. Флористы Цветочного домика Ginza соберут для Вас авторский букет, который станет отличным подарком для тех, кого Вы любите. А по карте гостя Ginza Hotels & Apartments предоставляется скидка - 10%.',
          linkLabel: 'Заказать доставку',
          url: 'flowers',
          tag: 'Ginza Flowers',
          image: '/images/gallery/gallery-2-12.jpg',
          color: '#F1F8FA',
          isInverted: true
        },
        {
          title: 'Прачечная и химчистка',
          description: 'Химчистка Ginza Chisto предоставляет услуги по чистке, стирке и глажке. В работе используется инновационное оборудование – японские роботы фирмы Sankosha, которые не имеют аналогов в Петербурге.',
          linkLabel: 'Связаться с менеджером',
          url: 'chisto',
          tag: 'Ginza Chisto',
          image: '/images/gallery/gallery-2-4.jpg',
          color: '#F5F2F9',
          isInverted: false
        }
      ]
    },
    {
      name: 'see_also',
      properties: {
        url: 'services/special',
        linkLabel: 'Спецпредложения'
      }
    }
  ]
}
