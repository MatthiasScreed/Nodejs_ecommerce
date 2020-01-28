const express = require('express')
const app = express()
const path = require('path')
const config = require('./app/config.js')
var mongoose = require('mongoose');
mongoose.connect(
  config.mongodbConnectionString, // vous devez bien entendu
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// var userSchema = new mongoose.Schema({
//   name: 'String'
//   name: 'String'
//   name: 'String'
// })

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', function (req, res) {
//   res.render('index')
// })
// app.get('/inscription', function (req, res) {
//   res.render('formulaire/form')
// })

// app.post('/', function (req, res) {
//   res.send('Add a User');
// });

require("./app/routes.js")(app)

app.listen(config.port, () => {
  console.log(`Le serveur est en écoute à l'adresse : http://127.0.0.1:${config.port}`)
})