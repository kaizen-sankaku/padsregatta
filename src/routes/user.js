const express = require('express');

const { getUserProfile, getUserWall } = require('../controllers/user');

const router = express.Router();

router.get('/profile', getUserProfile);

router.get('/wall', getUserWall);

module.exports = router;
