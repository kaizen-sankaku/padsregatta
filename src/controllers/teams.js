const teams = require('../models/team');

exports.getTeams = (req, res) => {
  res.render('pages/teams/list', {
    teams: teams,
    pageTitle: 'Teams',
    path: '/teams/list',
  });
};
