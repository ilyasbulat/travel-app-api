const express = require('express');

const countriesController = require('../controllers/countries');

const router = express.Router();

router.get('/countries', countriesController.getCountries);

router.get('/countries/:id', countriesController.getPlaces);

router.get('/country/:id', countriesController.getCountry);

module.exports = router;
