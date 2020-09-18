const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parsing the request
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use('/add-product', (req, res, next) => {
    res.send('<form action="product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<html>here is the base page</html>');
    // next(); //move on to the next middleware
});

app.listen(3000);