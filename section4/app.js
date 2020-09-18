const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('in the middleware');
    res.send('<html>the add product page</html>');
    // next(); //move on to the next middleware
});

app.use('/', (req, res, next) => {
    console.log('in the middleware');
    res.send('<html>the slash page</html>');
    // next(); //move on to the next middleware
});

app.listen(3000);