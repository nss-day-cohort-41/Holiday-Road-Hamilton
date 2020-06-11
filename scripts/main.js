getWheelchairData().then(console.log(wheelchairCollection))
getParkData()

// Testing Eatery Fetch
eateryAPI.getEateries().then(populateEaterySelect)


getAttractionData().then((response) => attractionsList(response))

