require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const app = express();

const countryRoutes = require('./routes/countries');
const adminRoutes = require('./routes/admin');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(countryRoutes);
app.use(errorController.get404);

mongoose
  .connect(process.env.DBS, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
