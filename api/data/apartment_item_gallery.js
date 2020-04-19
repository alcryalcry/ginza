module.exports = {
  title: 'Apartment One Gallery',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'review_page',
      title: 'Karavannaya 11',
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
                  image: 'https://picsum.photos/id/237/780/460.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-one',
                  image: 'https://picsum.photos/id/1066/460/464.jpg'
                },
                {
                  mode: 'size-two',
                  image: 'https://picsum.photos/id/173/300/464.jpg'
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
                      image: 'https://picsum.photos/id/237/780/460.jpg'
                    },
                    {
                      id: 2,
                      image: 'https://picsum.photos/id/237/780/460.jpg'
                    },
                    {
                      id: 3,
                      image: 'https://picsum.photos/id/237/780/460.jpg'
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
                      image: 'https://picsum.photos/id/237/780/460.jpg'
                    },
                    {
                      id: 2,
                      image: 'https://picsum.photos/id/237/780/460.jpg'
                    },
                    {
                      id: 3,
                      image: 'https://picsum.photos/id/237/780/460.jpg'
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
                  image: 'https://picsum.photos/id/1066/460/464.jpg'
                },
                {
                  mode: 'size-two',
                  image: 'https://picsum.photos/id/173/300/464.jpg'
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
                  image: 'https://picsum.photos/id/1066/480/480.jpg'
                },
                {
                  mode: 'size-half',
                  image: 'https://picsum.photos/id/173/380/480.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-half',
                  image: 'https://picsum.photos/id/1066/480/480.jpg'
                },
                {
                  mode: 'size-half',
                  image: 'https://picsum.photos/id/173/380/480.jpg'
                }
              ]
            },
            {
              type: 'image',
              cols: [
                {
                  mode: 'size-full',
                  image: 'https://picsum.photos/id/173/780/460.jpg'
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
                  image: 'https://picsum.photos/id/788/780/460.jpg'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
