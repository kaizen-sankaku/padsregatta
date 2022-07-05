const users = require('./user');

const teams = [
  {
    name: 'Triton',
    owner: users[0],
    location: 'Manila',
    manager: 'John Doe',
    members: ['John Doe', 'Jane Doe'],
  },
  {
    name: 'Umagu',
    owner: users[0],
    location: 'Manila',
    manager: 'John Doe',
    members: ['John Doe', 'Jane Doe'],
  },
  {
    name: 'RCP Sea Dragons',
    owner: users[0],
    location: 'Manila',
    manager: 'John Doe',
    members: ['John Doe', 'Jane Doe'],
  },
];

module.exports = teams;
