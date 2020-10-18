const express = require('express');
const router = express.Router();

const ta05controller = require('../controllers/ta05');

router.get('/', ta05controller.getIndex);

router.post('/change-style', ta05controller.postChangeStyle);

router.post('/counter', ta05controller.postCounter);

router.post('/destroy', ta05controller.postDestroy);

module.exports = router;