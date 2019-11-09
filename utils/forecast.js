const request = require('request');
// const weatherUrl = 'https://api.darksky.net/forecast/9885a0fbe25f78e2463131a47eecda74/37.8267,-122.4233';



/*request function takes 2 aurguments
first aurgument is the object which is the url
second is what function to run*/

// request( {url: weatherUrl, json: true}, (error, response) => {

//     if(error) {
//         console.log(`unable to connect to weather service!`)
//     } else if (response.body.error) {
//         console.log(`unable to find location`);
//     } else {
//         // const data = JSON.parse(response.body);
//         // console.log(data.currently);
//         // refactor code by json: true as a option
//         // console.log(response.body.currently);
    
//         const temp = (response.body.currently.temperature);
//         const rainChance = (response.body.currently.precipProbability);
//         const summary = (response.body.daily.data[0].summary);
//         console.log(`${summary} It is currently ${temp} degress outside. There is a ${rainChance}% chance of rain.`);

//     }
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
    const weatherUrl = 'https://api.darksky.net/forecast/9885a0fbe25f78e2463131a47eecda74/'+ latitude + ',' + longitude ;

    request({url: weatherUrl, json: true}, (error, response ) => {
        if(error) {
            callback('weather API not connected', undefined);
        } else if(response.body.error) {
            callback('weather API unable to find location', undefined);
        } else {
            callback(undefined, {
                location : response.body.timezone,
                temp : response.body.currently.temperature,
                rainChance : response.body.currently.precipProbability,
                summary: response.body.daily.data[0].summary 
            })
        }
    })
}

module.exports = forecast;

