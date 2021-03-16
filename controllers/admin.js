const Country = require('../models/country');

const Place = require('../models/place');

exports.postAddCountry = (req, res, next) => {
  const country = new Country({
    ...req.body,
  });
  country
    .save()
    .then(() => {
      console.log('Created Country');
      res.status(201).end();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.postAddPlace = (req, res, next) => {
  const place = new Place({
    ...req.body,
  });
  place
    .save()
    .then(() => {
      console.log('Created Place');
      res.status(201).end();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
