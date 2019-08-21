const { send } = require('micro');
const fetch = require('node-fetch');

const getJSONResponse = async function(url) {
  var headers = new fetch.Headers();

  const res = await fetch(url);

  if (res.ok) {
    try {
      const text = await res.text();
      const json = JSON.parse(text);
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  return null;
};

const error = function(res) {
  send(res, 400, 'Please specify a type of data to retrieve.');
};

module.exports = { getJSONResponse, error };
