const fetch = require('node-fetch');

const getData = (req, res) => {
  const url = `https://history.muffinlabs.com/date/${req.params.month}/${req.params.day}`;
  console.log(req.params);
  fetch(url)
    .then((data) => data.json())
    .catch((error) => error);
};

module.exports = getData;
