const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); //dirname points to current folder location, ../ goes back on level in directories
    // console.log(adminData.products);

    const products = adminData.products; 
    res.render('shop', {
        prods: products,
        path: '/',
        pageTitle: 'Shop',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;