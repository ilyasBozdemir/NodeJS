const express = require('express');
const mongoose = require('mongoose');


const courseRoute = require('./routes/courseRoute');
const pageRoute = require('./routes/pageRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');


const app = express();

//DB Mongoose Connect
const URI = 'mongodb://localhost/smartedu-db';

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!');
  }
);

//templates Engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
