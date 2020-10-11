const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const adminController = require('../controllers/admin');
const { allowedNodeEnvironmentFlags } = require('process');

//SHOP
router.get('/', shopController.getIndex);
router.post('/artist-details/:artistId', shopController.getArtistDetails);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/cart/delete-artist', shopController.postCartDeleteArtist);

//ADMIN
router.get('/admin', adminController.getIndex);
router.get('/admin/add-artist', adminController.getAddArtist);
router.post('/admin/add-artist', adminController.postAddArtist);
router.get('/admin/edit-artist/:artistId', adminController.getEditArtist);
router.post('/admin/edit-artist', adminController.postEditArtist);
router.post('/admin/delete-artist', adminController.postDeleteArtist);

module.exports = router;