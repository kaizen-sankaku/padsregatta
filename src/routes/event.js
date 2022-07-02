const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  res.render('pages/event', {
    pageTitle: `Teams`,
    path: '/event',
  });
});

module.exports = router;
