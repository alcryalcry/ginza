import {
  SITE_NAME
} from './constants'

const head = {
  titleTemplate: `%s | ${SITE_NAME}`,
  meta: [{
    charset: 'utf-8'
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, viewport-fit=cover'
  },
  {
    name: 'format-detection',
    content: 'telephone=no'
  },
  {
    name: 'msapplication-TileColor',
    content: '#85754E'
  },
  {
    name: 'theme-color',
    content: '#85754E'
  }
  ],
  link: [{
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png'
  },
  {
    rel: 'icon',
    sizes: '32x32',
    type: 'image/png',
    href: '/favicon-32x32.png'
  },
  {
    rel: 'icon',
    sizes: '16x16',
    type: 'image/png',
    href: '/favicon-16x16.png'
  },
  {
    rel: 'icon',
    type: 'image/ico',
    href: '/favicon.ico'
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest'
  },
  {
    rel: 'mask-icon',
    href: '/safari-pinned-tab.svg',
    color: '#85754E'
  }
  ]

}

export default head
