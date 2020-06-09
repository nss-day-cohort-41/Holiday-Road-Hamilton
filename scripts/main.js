// Testing Eatery Fetch
eateryAPI.getEateries().then(populateEaterySelect)

/*
const apiReturn = "lat:123123, long:-9999999.99"
const latlong = (apiReturn) => {
    const latlongArray = apiReturn.split(", ")
    const lat = latlongArray[0].substring(4,latlongArray[0].length)
    const long = latlongArray[1].substring(5,latlongArray[1].length)
    console.log(`lat: ${lat} and long: ${long}`)
}
latlong(apiReturn)
*/