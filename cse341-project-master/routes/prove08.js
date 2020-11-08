const express = require('express');

const prove08Controller = require('../controllers/prove08');

const router = express.Router();

router.get('/', prove08Controller.getIndex);

router.post('/search-product', prove08Controller.postSearchProducts);

module.exports = router;