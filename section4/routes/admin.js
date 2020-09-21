const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//Middleware
//Same path but GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//filter for only POST or GET requests (app.get())
//Same path but POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;