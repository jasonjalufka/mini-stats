const { getJSONResponse } = require('../utils');

const weather = async function() {
  const data = await getJSONResponse(
    `https://api.openweathermap.org/data/2.5/weather?lat=45.516647&lon=-122.6462477&units=imperial&appid=${process.env.WEATHER_API_KEY}`
  );

  return {
    temp: `${data.main.temp}°`,
    city: data.name,
    condition: data.weather[0].main
  };
};

module.exports = weather;
