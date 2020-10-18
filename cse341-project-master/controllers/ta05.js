const session = require("express-session");

exports.getIndex = (req, res, next) => {
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05',
        style: req.session.style,
        // style: true,
        // counter: 1
        counter: req.session.counter
    });
};

exports.postChangeStyle = (req, res, next) => {
    let style = req.session.style;
    req.session.style = !style;
    res.redirect('/ta05');
};

exports.postCounter = (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (req.body.increase === 'true') {
        req.session.counter += 1
    }
    if (req.body.decrease === 'true') {
        req.session.counter -= 1
    }
    res.redirect('/ta05');
};

exports.postDestroy = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
    });
    res.redirect('/ta05');
};