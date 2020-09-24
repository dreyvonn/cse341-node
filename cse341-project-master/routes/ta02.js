//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const { products } = require('../../section4/routes/admin');
const router = express.Router();

const users = [];
let removeFound = true;

router.post('/addUser', (req, res, next) => {
    users.push(req.body.userName);
    res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
    const index = users.indexOf(req.body.removeUser);
    if (index == -1) {
        removeFound = false;
    }
    else {
        for (let user of users) {
            if (user === req.body.removeUser) {
                users.splice(index, 1);
            }
        }
        removeFound = true;
    }
    res.redirect('/ta02');
});

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        userArray: users,
        remove: removeFound
    });
});

module.exports = router;