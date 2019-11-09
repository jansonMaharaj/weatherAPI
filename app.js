const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (error, geocodeData) => {
      if(error) {
        return console.log(error);
      }

    forecast( geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(geocodeData.locationName);
      console.log(forecastData);

    })
})


  