//api key c8fb6767591a6ee3fec1033c2dd048dc
import { keys } from '../Settings.js'

const eventHub = document.querySelector(".weathercontainer")

export const getWeather = (lat,long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&long=${long}&units=imperial&&appid=${keys.weatherKey}`)
      .then((response) => response.json())
      .then((parsedWeather) => {
        weather = parsedWeather.list[0]
      })
      .then(dispatchWeatherChangeEvent)
  }

//Conversion Lat Long
const apiReturn = "lat:123123, long:-9999999.99"
const latlong = (apiReturn) => {
    const latlongArray = apiReturn.split(", ")
    const lat = latlongArray[0].substring(4,latlongArray[0].length)
    const long = latlongArray[1].substring(5,latlongArray[1].length)
    console.log(`lat: ${lat} and long: ${long}`)
}
latlong(apiReturn)

/*
api.openweathermap.org/data/2.5/forecast?zip=37221&
units=imperial&&appid=c8fb6767591a6ee3fec1033c2dd048dc
lat={lat}&lon={lon}&appid={your api key}
*/

