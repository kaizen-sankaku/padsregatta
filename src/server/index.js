const express = require('express');

const x = 'something';

console.log(x, express);

console.log('testing1');
console.log('testing2');

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
