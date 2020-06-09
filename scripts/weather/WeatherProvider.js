//api key c8fb6767591a6ee3fec1033c2dd048dc

//Conversion Lat Long
const apiReturn = "lat:123123, long:-9999999.99"
const latlong = (apiReturn) => {
    const latlongArray = apiReturn.split(", ")
    const lat = latlongArray[0].substring(4,latlongArray[0].length)
    const long = latlongArray[1].substring(5,latlongArray[1].length)
    console.log(`lat: ${lat} and long: ${long}`)
}
latlong(apiReturn)

//
api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={your api key}