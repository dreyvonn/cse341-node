const path = require('path');

const express = require('express');

const router = express.Router();

const p03Controller = require('../controllers/prove03');

router.get('/', p03Controller.getIndex);

router.post('/artist-details/:artistId', p03Controller.getArtistDetails);

module.exports = router;