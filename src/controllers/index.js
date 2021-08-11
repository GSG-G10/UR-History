const express = require('express');

const error = require('./error');
const getData = require('./getCard');

const router = express.Router();
router.get('/getCard/:month/:day', getData);
router.use(error.client);
router.use(error.server);
module.exports = router;
