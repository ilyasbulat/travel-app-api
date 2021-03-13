const path = require('path');

const express = require('express');

const countriesController = require('../controllers/countries');

const router = express.Router();

// router.get('/', shopController.getIndex);

router.get('/countries', countriesController.getCountries);

router.get('/countries/:id', countriesController.getCountry);

// router.get('/cart', shopController.getCart);

// router.post('/cart', shopController.postCart);

// router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// router.post('/create-order', shopController.postOrder);

// router.get('/orders', shopController.getOrders);

module.exports = router;
