const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
let currentLang = 'ru'

const reponseJson = name => require(`./data/${name}_${currentLang}.js`)
// const reponseJson = name => require(`./data/${name}.js`)

app.use(bodyParser.json())

app.use(function (req, res, next) {
  currentLang = req.query.lang === 'en' ? 'en' : 'ru'
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

app.get('/get-page/index', (req, res) => {
  res.send(reponseJson('index'))
})

app.get('/get-page/about', (req, res) => {
  res.send(reponseJson('about'))
})

app.get('/get-page/aparts', (req, res) => {
  res.send(reponseJson('aparts'))
})

app.get('/get-page/apartment/:id', (req, res) => {
  res.send(reponseJson('apartment_item'))
})

app.post('/feedback', (req, res) => {
  res.jsonp({
    status: true
  })
})

app.listen(PORT, () => {
  console.log(`api listening on port ${PORT}`)
})

// if (process.env.IS_SERVER_MIDDLEWARE === 'true') {
//   // export the server middleware
//   module.exports = {
//     path: '/api',
//     handler: app
//   }
// } else {
//   app.listen(PORT)
// }
