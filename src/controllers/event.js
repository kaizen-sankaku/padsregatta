const event = require('../models/event');

if (event.date_from === event.date_to) {
  event.date = event.date_from;
} else {
  event.date = `${event.date_from} to ${event.date_to}`;
}

exports.getEvent = (req, res) => {
  res.render('pages/event', {
    event: event,
    pageTitle: `Event`,
    path: '/event/mandanibaydbregatta2022',
  });
};
