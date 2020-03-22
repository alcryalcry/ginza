const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const formidable = require('express-formidable')
let currentLang = 'ru'

const reponseJson = name => require(`./data/${name}_${currentLang}.js`)
// const reponseJson = name => require(`./data/${name}.js`)

app.use(bodyParser.json())
app.use(formidable())

app.use(function (req, res, next) {
  currentLang = req.query.lang === 'en' ? 'en' : 'ru'
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  // res.header('Access-Control-Allow-Methods', 'GET,POST')
  next()
})

app.get('/', (req, res) => {
  res.send('API root')
})

app.get('/get-header', (req, res) => {
  res.send(reponseJson('header'))
})
app.get('/get-footer', (req, res) => {
  res.send(reponseJson('footer'))
})

app.get('/get-page/index', (req, res) => {
  res.send(reponseJson('index'))
})

app.post('/feedback', (req, res) => {
  res.jsonp({
    status: true
  })
})

app.listen(3000, function () {
  console.log('api listening on port 3000')
})

module.exports = {
  path: '/api',
  handler: app
}
