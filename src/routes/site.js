const express = require('express');
// const path = require('path');
// const fs = require('fs');

const router = express.Router();

// router.get('/about', (req, res) => {
//   const pathToHtmlFile = path.resolve(__dirname, '../../dist/about.html');
//   const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
//   res.send(contentFromHtml);
// });

router.get('/login-register', (req, res) => {
  res.render('pages/login-register', {
    pageTitle: `Login/Register`,
    path: '/login-register',
  });
});

router.get('/teams-events', (req, res) => {
  // res.send(`
  //   <h1>Teams List</h1>
  //   <br>
  //   <h1>Events List</h1>
  // `);
  res.render('pages/teams-events', {
    pageTitle: 'Teams & Events Page',
    path: '/teams-events',
  });
});

router.get('/', (req, res) => {
  // const pathToHtmlFile = path.resolve(__dirname, '../../dist/index.html');
  // const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
  // res.send(contentFromHtml);
  res.render('pages/about', { pageTitle: 'About Page', path: '/' });
});

module.exports = router;
