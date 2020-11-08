const Product = require('../models/product');

const ITEMS_PER_PAGE = 10;

exports.getIndex = (req, res, next) => {
    const page = req.query.page;
    Product.fetchAll(products => {
        res.render('pages/prove08/index', { 
            title: 'Prove 08', 
            path: '/prove08',
            products: products,
            length: products.length / 10,
            remain: products.length % 10,
            page: page,
            searching: false
        });
    });
};

exports.postSearchProducts = (req, res, next) => {
    const searchName = req.body.searchName;
    const page = req.query.page;
    Product.getItemsByTag(searchName, products => {
        res.render('pages/prove08/index', {
            title: 'Search Results', 
            path: '/prove08/results',
            products: products,
            length: products.length / 10,
            remain: products.length % 10,
            page: page,
            searching: true
        });
    });
};