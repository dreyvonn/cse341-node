const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.use('/message',(req, res, next) => {
    res.render('pages/prove01/p01out', { 
        userInput1: req.body.message,
        userInput2: req.body.message2,
    });
});

router.use('/', (req, res, next) => {
    res.render('pages/prove01/p01in');
});

module.exports = router;