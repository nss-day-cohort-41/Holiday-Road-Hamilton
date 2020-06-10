getParkData().then(
    (response) => {
        displayParkList(response)
    }
)
// Testing Eatery Fetch
eateryAPI.getEateries().then(populateEaterySelect)


getAttractionData().then((response) => attractionsList(response))

