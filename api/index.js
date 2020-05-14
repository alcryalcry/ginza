const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
require('dotenv').config()

const reponseJson = name => require(`./routes/${name}.js`)

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  )
  // res.header("Access-Control-Allow-Methods", "GET,POST")
  next()
})

app.use((req, res, next) => {
  // const {
  //   headers: { host },
  //   url,
  //   params,
  //   query,
  //   body
  // } = req
  next()
})

app.get('/', (req, res) => {
  res.send('API root')
})

app.get('/get-settings', (req, res) => {
  res.send(reponseJson('settings'))
})

app.get('/get-layout', (req, res) => {
  res.send(reponseJson('layout'))
})

app.get('/get-housing-list', (req, res) => {
  const params = req.query
  reponseJson('housing_list')(params, res)
})

app.get('/get-page/index', (req, res) => {
  res.send(reponseJson('index'))
})

app.get('/get-page/about', (req, res) => {
  res.send(reponseJson('about'))
})

app.get('/get-page/housing', (req, res) => {
  res.send(reponseJson('housing'))
})

app.get('/get-page/apartments/:slug', (req, res) => {
  res.send(reponseJson('apartments_item'))
})

app.get('/get-page/apartments/:slug/gallery', (req, res) => {
  res.send(reponseJson('apartments_item_gallery'))
})

app.get('/get-page/hotels/:slug', (req, res) => {
  res.send(reponseJson('hotels_item'))
})

app.get('/get-page/hotels/:slug/halls', (req, res) => {
  res.send(reponseJson('hotels_item_halls'))
})

app.get('/get-page/hotels/:slug/halls/:id', (req, res) => {
  res.send(reponseJson('hotels_item_halls_item'))
})

app.get('/get-page/hotels/:slug/:room', (req, res) => {
  res.send(reponseJson('hotels_room'))
})

app.get('/get-page/restaurants/:slug', (req, res) => {
  res.send(reponseJson('restaurants_item'))
})

if (process.env.IS_SERVER_MIDDLEWARE === 'true') {
  module.exports = {
    path: '/api',
    handler: app
  }
} else {
  app.listen(PORT, () => {
    console.log(`api listening on port ${PORT}`)
  })
}
