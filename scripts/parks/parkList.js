// have a variable that stores the dropdown menu's element
const stateTypeDropdown = document.querySelector(".stateChoice")
const parkTypeDropdown = document.querySelector(".parkChoice")

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

})

parkTypeDropdown.addEventListener("change", (changeEvent) => {
    //get the value chosen by the user
    const userChoice = changeEvent.target.value
    
    // This is just to change the park selection for everything


})

const displayParkList = (parkListArray) => {
    
    console.log(parkListArray)
    // parkCollection is an object with an array in the "data" key
    for (parkListObject of parkListArray.data) {
        const parkListHTML = parkDropdownConverter(parkListObject)

        const parkListElement = document.querySelector(".parkChoice")
        parkListElement.innerHTML += parkListHTML
    }
}