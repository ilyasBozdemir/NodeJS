const express = require('express');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');

const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
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
app.use(fileUpload());// middleware olarak kaydediyoruz.
app.use(methodOverride('_method',{
 
  methods:['POST','GET']

}
  ));

//routes

app.get('/', photoController.getAllPhotos);
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);


const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});