const Country = require('../models/country');

const Place = require('../models/place');

exports.postAddCountry = (req, res, next) => {
  const { imageUrl } = req.body;
  const { videoUrl } = req.body;
  const { currency } = req.body;
  const { capitalLocation } = req.body;
  const { localizations } = req.body;

  const country = new Country({
    imageUrl,
    videoUrl,
    currency,
    capitalLocation,
    localizations,
  });
  country
    .save()
    .then(() => {
      // console.log(result);
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
      // console.log(result);
      console.log('Created Place');
      res.status(201).end();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};
