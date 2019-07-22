const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/32320380ed2166e2c768c6f2b613f501/${latitude},${longitude}?units=si`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unnable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unnable to find location', undefined)
        } else {
            callback(undefined, {
                temp: body.currently.temperature,
                hiTemp: body.daily.data[0].apparentTemperatureHigh,
                summary: body.daily.data[0].summary
            })
            // `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast