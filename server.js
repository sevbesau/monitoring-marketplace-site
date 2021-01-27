require('module-alias/register')

const express = require('express')
const path = require('path')
const ejs = require('ejs')
const env = require('./env')

const app = express()

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/dist'))

app.use(express.static(path.join(__dirname, '/dist')))

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(Number(env.port), () => {
  console.log(`Marketplace started on port ${env.port}`)
})
