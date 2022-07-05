const express = require('express');

const { getEvent } = require('../controllers/event');

const router = express.Router();

router.get('/mandanibaydbregatta2022', getEvent);

module.exports = router;
