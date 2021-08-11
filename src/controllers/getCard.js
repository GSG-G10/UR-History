const fetch = require('node-fetch');

const getData = (req, res) => {
  const url = `https://history.muffinlabs.com/date/${req.params.month}/${req.params.day}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => res.json(response.data))
    .catch((error) => error);
};

module.exports = getData;
