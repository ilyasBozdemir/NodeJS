const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

//Template Engine
app.set("view engine", "ejs");

//midllewares
app.use(express.static('public'));

//routes
app.get("/", (req, res) => {
  res.render('index');
});
app.get("/abouut", (req, res) => {
  res.render('abouut');
});
app.get("/add", (req, res) => {
  res.render('add');
});
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});