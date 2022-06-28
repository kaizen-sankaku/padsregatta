const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const siteRoutes = require('./routes/site');
// const userRoutes = require('./routes/user');
// const teamRoutes = require('./routes/team');
// const eventRoutes = require('./routes/event');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/user', userRoutes);
// app.use('/team', teamRoutes);
// app.use('/event', eventRoutes);
app.use(siteRoutes);

// catch-all for unmatched routes
app.use((req, res) => {
  res.status(404).send('<h1>Page not found.</h1>');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
