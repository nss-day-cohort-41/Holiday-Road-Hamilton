// have a variable that stores the dropdown menu's element
const stateTypeDropdown = document.querySelector(".stateChoice")
const parkTypeDropdown = document.querySelector(".parkChoice")

//magic array that fixes some bullshit
let parkCollection2 = []

const clearParkArray = () => {
    parkCollection = []
}

const clearParkDropdown = () => parkTypeDropdown.innerHTML = ""


stateTypeDropdown.addEventListener("change", (changeEvent) => {
    //get the value chosen by the user
    const userChoice = changeEvent.target.value

    //clear array
    clearParkArray()
    clearParkDropdown()
    //refill array and refill the park list
    parkQuery = "https://developer.nps.gov/api/v1/parks?stateCode=" + userChoice + "&api_key=WPMjMAxhvLivTCo3ad7Y1hb9QNTV8dMj910THzHP"
    getParkData().then((response) => displayParkList(response))

    //send data to userChoice global variable

})

parkTypeDropdown.addEventListener("change", (changeEvent) => {
    //get the value chosen by the user
    const userChoice = changeEvent.target.value
    for(currentParkObject of parkCollection2.data) {
        // console.log(parkCollection)
        // console.log(currentParkObject.id)
        if (userChoice === currentParkObject.id) {

            natPark = currentParkObject
        }
    }
    displayParkPreview()
    
    // This is just to change the park selection for everything
    console.log(natPark)

    //call weather forecast
    getWeather(natPark.latitude, natPark.longitude)

})

//display parks in dropdown
const displayParkList = (parkListArray) => {
    
    // i dont even know
    parkCollection2 = parkListArray
    console.log(parkCollection)
    
    const parkListElement = document.querySelector(".parkChoice")
    parkListElement.innerHTML = `<option value="">Select a Park</option>`
    // parkCollection is an object with an array in the "data" key
    for (parkListObject of parkListArray.data) {
        const parkListHTML = parkDropdownConverter(parkListObject)

        // const parkListElement = document.querySelector(".parkChoice")
        parkListElement.innerHTML += parkListHTML
    }
}

const previewParkElement = document.querySelector(".preview__parks")

const clearParkPreview = () => previewParkElement.innerHTML = ""

const displayParkPreview = () => {
    clearParkPreview()

    const parkPreviewHTML = parkPreviewConverter(natPark)

    previewParkElement.innerHTML = parkPreviewHTML
}