module.exports = {
  title: 'Apartment One Gallery',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'review_page',
      properties: {
        title: 'Karavannaya 11'
      },
      values: [
        {
          name: 'gallery_grid',
          title: 'Гостиная',
          anchor: 'living-room',
          rows: [
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-full',
                  image: '/images/gallery/gallery-2-1.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-one',
                  image: '/images/gallery/gallery-2-2.jpg'
                },
                {
                  mode: 'size-two',
                  image: '/images/gallery/gallery-2-aaa.jpg'
                }
              ]
            },
            {
              type: 'slider',
              cols: [
                {
                  mode: 'size-full',
                  values: [
                    {
                      id: 1,
                      image: '/images/gallery/gallery-2-18.jpg'
                    },
                    {
                      id: 2,
                      image: '/images/gallery/gallery-2-1.jpg'
                    },
                    {
                      id: 3,
                      image: '/images/gallery/gallery-2-19.jpg'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'gallery_grid',
          title: 'Кухня',
          anchor: 'kitchen',
          rows: [
            {
              type: 'slider',
              cols: [
                {
                  mode: 'size-full',
                  values: [
                    {
                      id: 1,
                      image: '/images/gallery/gallery-2-17.jpg'
                    },
                    {
                      id: 2,
                      image: '/images/gallery/gallery-1-1.jpg'
                    },
                    {
                      id: 3,
                      image: '/images/gallery/gallery-2-2.jpg'
                    }
                  ]
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-one',
                  image: '/images/gallery/gallery-2-16.jpg'
                },
                {
                  mode: 'size-two',
                  image: '/images/gallery/gallery-2-15.jpg'
                }
              ]
            }
          ]
        },
        {
          name: 'gallery_grid',
          title: 'Балкон',
          anchor: 'balcony',
          rows: [
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-half',
                  image: '/images/gallery/gallery-2-12.jpg'
                },
                {
                  mode: 'size-half',
                  image: '/images/gallery/gallery-2-13.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-half',
                  image: '/images/gallery/gallery-2-14.jpg'
                },
                {
                  mode: 'size-half',
                  image: '/images/gallery/gallery-2-10.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-full',
                  image: '/images/gallery/gallery-2-10.jpg'
                }
              ]
            }
          ]
        },
        {
          name: 'gallery_grid',
          title: 'Прихожая',
          anchor: 'hallway',
          rows: [
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-full',
                  image: '/images/gallery/gallery-2-9.jpg'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
