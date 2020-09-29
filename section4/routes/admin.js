const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

//Middleware
//Same path but GET
router.get('/add-product', productsController.getAddProduct);

//filter for only POST or GET requests (app.get())
//Same path but POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;