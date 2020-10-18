const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const adminController = require('../controllers/admin');
const authController = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');
const { allowedNodeEnvironmentFlags } = require('process');

//SHOP
router.get('/', shopController.getIndex);
router.post('/artist-details/:artistId', shopController.getArtistDetails);
router.get('/cart', isAuth, shopController.getCart);
router.post('/cart', isAuth, shopController.postCart);
router.post('/cart/delete-artist', isAuth, shopController.postCartDeleteArtist);
router.post('/create-order', isAuth, shopController.postOrder);
router.get('/orders', isAuth, shopController.getOrders);

//ADMIN
router.get('/admin', isAuth, adminController.getIndex);
router.get('/admin/add-artist', isAuth, adminController.getAddArtist);
router.post('/admin/add-artist', isAuth, adminController.postAddArtist);
router.get('/admin/edit-artist/:artistId', isAuth, adminController.getEditArtist);
router.post('/admin/edit-artist', isAuth, adminController.postEditArtist);
router.post('/admin/delete-artist', isAuth, adminController.postDeleteArtist);

//AUTH
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/logout', authController.getLogout);

module.exports = router;