const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

//Middleware
//Same path but GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

//filter for only POST or GET requests (app.get())
//Same path but POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;