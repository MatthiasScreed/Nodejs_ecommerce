const express = require('express')
const app = express()
const path = require('path')
const config = require('../app/config.js')

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.render('index')
})
app.listen(config.portgit)