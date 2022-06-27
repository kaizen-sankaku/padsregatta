const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/about', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../../dist/about.html');
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtml);
});

router.get('/teams-list', (req, res) => {
  res.send('<h1>Teams List</h1>');
});

router.get('/events-list', (req, res) => {
  res.send('<h1>Events List</h1>');
});

router.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../../dist/index.html');
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtml);
});

module.exports = router;
