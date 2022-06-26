const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtml);
  // res.send('Home Page');
});

app.get('/about/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/about.html');
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtml);
  // res.send('Home Page');
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
