const request = require('request');
//geocoding
// address -> lat/lag -> weather

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFoYXJham1hcCIsImEiOiJjazJjbnFxYXMwNm1iM21scHVvZDkzYWcyIn0._uguwQCI-Aq4Il7Yn4331A&limit=1';

// request( {url: geocodeUrl, json:true}, (error, response) => {

//     if(error) {
//         console.log(`unable to connect to the mapbox API`);
//     } else if(response.body.features.length === 0) {
//         console.log(`mapbox was unable to find your location`);
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(`latitude: ${latitude} and longitude: ${longitude}`);  
//     }


// } )


const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFoYXJham1hcCIsImEiOiJjazJjbnFxYXMwNm1iM21scHVvZDkzYWcyIn0._uguwQCI-Aq4Il7Yn4331A&limit=1'

    request({url: geocodeUrl, json: true}, (error, response) => {
        if(error) {
            callback('unable to conect to mapbox API', undefined);
        } else if (response.body.features.length === 0 ) {
            callback('mapbox was unable to find your location ', undefined);
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                locationName: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode