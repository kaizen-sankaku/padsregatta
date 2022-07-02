const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
  res.render('pages/teams/list', {
    pageTitle: `Teams`,
    path: '/teams/list',
  });
});

module.exports = router;
