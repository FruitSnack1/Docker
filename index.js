const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    // 'mongodb://mongo:27017/docker-node-mongo',
    'mongodb://mongo:27017/db',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Item = require('./models/Item');

app.get('/', (req, res) => {
  Item.find()
    .then(users => res.render('index', { users }));
});

app.get('/site', (req,res) => {
  res.render('site');
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  });
  console.log(newItem);
  newItem.save().then(item => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
