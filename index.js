require('dotenv').config();
const { parse } = require('url');
const { error } = require('./utils');
const weather = require('./endpoints/weather');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { pathname } = parse(req.url, true);

  if (!pathname) return error(res);

  switch (pathname) {
    case '/weather':
      return weather();
    default:
      return error(res);
  }
};
