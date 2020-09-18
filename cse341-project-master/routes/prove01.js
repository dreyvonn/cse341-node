const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.use('/message',(req, res, next) => {
    res.render('pages/p01out', { 
        title: 'Prove 01 Input', 
        userInput1: req.body.message,
        userInput2: req.body.message2,
        path: '/p01out',
    });
});

router.use('/', (req, res, next) => {
    res.render('pages/p01in', { 
        title: 'Prove 01 Output', 
        path: '/p01in',
    });
});

module.exports = router;