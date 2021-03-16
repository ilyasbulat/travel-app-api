const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-country', adminController.postAddCountry);

router.post('/add-place', adminController.postAddPlace);

module.exports = router;
