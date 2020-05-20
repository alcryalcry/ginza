module.exports = {
  title: 'Сервисы One',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'services_head',
      properties: {
        tag: 'Сервис',
        title: 'Экскурсии и туры',
        description: 'Познакомиться с Петербургом поближе стоит с экскурсионными программами от Ginza Hotels & Apartments - классические и неформальные маршруты, профессиональные гиды, музеи без очередей, автомобили S-класса. Если Вы давно мечтали о захватывающей обзорной прогулке на вертолете, катере или карете - они также доступны к заказу. Ваш персональный менеджер позаботится обо всем.',
        image: '/images/feature/feature-big.jpg'
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
        url: 'services/beauty',
        linkLabel: 'Beauty Concierge'
      }
    }
  ]
}
