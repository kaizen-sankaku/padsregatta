const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const siteRoutes = require('./routes/site');
const userRoutes = require('./routes/user');
const teamsRoutes = require('./routes/teams');
const eventRoutes = require('./routes/event');
const loginRoutes = require('./routes/login');

const app = express();

// set the view engine
app.set('view engine', 'ejs');
// set the html templates dir
app.set('views', 'src/views');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoutes);
app.use('/teams', teamsRoutes);
app.use('/event', eventRoutes);
app.use('/login', loginRoutes);
app.use(siteRoutes);

// catch-all for unmatched routes
app.use((req, res) => {
  // res.status(404).send('<h1>Page not found.</h1>');
  res
    .status(404)
    .render('pages/404', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
