const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const ejs = require('ejs');

const Photo = require('./models/Photo');

const app = express();

mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



//Template Engine
app.set("view engine", "ejs");

//midllewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//routes

app.get('/', async (req, res) => {
const photos = await Photo.find({});
res.render('index', { photos });
});


app.get("/abouut", (req, res) => {
  res.render('abouut');
});


app.get("/add", (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
   // async - await yapısı kullanacağız.
  await Photo.create(req.body);  // body bilgisini Photo modeli sayesinde
  // veritabanında dökümana dönüştürüyoruz.
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});