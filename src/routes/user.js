const express = require('express');
const event = require('../models/event');
const teams = require('../models/team');

const router = express.Router();

router.get('/profile', (req, res) => {
  res.render('pages/user/profile', {
    pageTitle: `User Profile`,
    path: '/user/profile',
  });
});

router.get('', (req, res) => {
  res.render('pages/user/user', {
    pageTitle: `User's Wall`,
    path: '/user',
    event: event,
    team: teams[0],
  });
});

module.exports = router;
