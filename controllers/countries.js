const mongoose = require('mongoose');

const Country = require('../models/country');

const Place = require('../models/place');

exports.getCountries = (req, res, next) => {
  Country.find()
    .then((countries) => {
      res.send(countries);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.getPlaces = (req, res, next) => {
  const { id } = req.params;

  Place.find({ countryId: mongoose.Types.ObjectId(id) })
    .then((places) => {
      console.log(id);
      res.send(places);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.getCountry = (req, res, next) => {
  const { id } = req.params;

  Country.findById(id)
    .then((country) => {
      console.log(id);
      res.send(country);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
