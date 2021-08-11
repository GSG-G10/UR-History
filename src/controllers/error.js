const path = require('path');

const server = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', 'public', '505.html'));
};
const client = (req, res) => { res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html')); };
module.exports = {
  client,
  server,
};
