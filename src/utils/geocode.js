const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3VmZWxhbGV4YW5kZXIiLCJhIjoiY2p2YnNzcHFoMWJudTRlcGtsd2NkdXJjMiJ9.Z8mJO13GO_u75POuiawnOw&limit=1'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unnable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unnable to find location. Tyr another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode


