const express = require('express');

const { getTeams } = require('../controllers/teams');

const router = express.Router();

router.get('/list', getTeams);

module.exports = router;
