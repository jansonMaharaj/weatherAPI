const request = require('request');

const weatherUrl = 'https://api.darksky.net/forecast/9885a0fbe25f78e2463131a47eecda74/37.8267,-122.4233';



/*request function takes 2 aurguments
first aurgument is the object which is the url
second is what function to run*/

request( {url: weatherUrl, json: true}, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(data.currently);
    // refactor code by json: true as a option
    // console.log(response.body.currently);

    const temp = (response.body.currently.temperature);
    const rainChance = (response.body.currently.precipProbability);
    const summary = (response.body.daily.data[0].summary);
    console.log(`${summary} It is currently ${temp} degress outside. There is a ${rainChance}% chance of rain.`);
    
})

//geocoding
// address -> lat/lag -> weather

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFoYXJham1hcCIsImEiOiJjazJjbnFxYXMwNm1iM21scHVvZDkzYWcyIn0._uguwQCI-Aq4Il7Yn4331A&limit=1';

request( {url: geocodeUrl, json:true}, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`latitude: ${latitude} and longitude: ${longitude}`);

} )





