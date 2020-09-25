const express = require('express');

const router = express.Router();

let title = '';
let summary = '';

router.get('/display', (req, res, next) => {
    res.render('pages/prove02/p02out', {
        pageTitle: 'Prove 02',
        title: title,
        summary: summary,
        path: '/prove02/p02out'
    });
});

router.post('/display', (req, res, next) => {
    title = req.body.title;
    summary = req.body.summary;
    res.redirect('/prove02');
});

router.use('/', (req, res, next) => {
    res.render('pages/prove02/p02in', {
        pageTitle: 'Prove 02',
        path: '/prove02/p02in',
    });
});

module.exports = router;