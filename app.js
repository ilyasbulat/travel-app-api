require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

// const adminRoutes = require('./routes/admin');
const countryRoutes = require('./routes/countries');
const adminRoutes = require('./routes/admin');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     User.findById('5baa2528563f16379fc8a610')
//         .then(user => {
//             req.user = user
//             next();
//         })
//         .catch(err => console.log(err));
// });

// app.use('/admin', adminRoutes);

app.use('/admin', adminRoutes);
app.use(countryRoutes);
app.use(errorController.get404);

mongoose
  .connect(process.env.DBS)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
