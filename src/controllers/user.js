const users = require('../models/user');
const event = require('../models/event');
const teams = require('../models/team');

exports.getUserProfile = (req, res) => {
  res.render('pages/user/profile', {
    user: users[0],
    pageTitle: 'User Profile',
    path: '/user/profile',
  });
};

exports.getUserWall = (req, res) => {
  res.render('pages/user/wall', {
    pageTitle: `User's Wall`,
    path: '/user/wall',
    event: event,
    team: teams[0],
  });
};
