const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  res.render('pages/login', {
    pageTitle: `Login`,
    path: '/login',
  });
});

module.exports = router;
