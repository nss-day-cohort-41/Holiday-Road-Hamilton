// have a variable that stores the dropdown menu's element
const parkTypeDropdown = document.querySelector(".typeChoice")

const clearParkArray = () => {
    parkCollection = []
}

parkTypeDropdown.addEventListener("change", (changeEvent) => {
    //get the value chosen by the user
    const userChoice = changeEvent.target.value

    //clear array
    clearParkArray()
    //refill array
    parkQuery = "https://developer.nps.gov/api/v1/parks?stateCode=" + userChoice + "&api_key=WPMjMAxhvLivTCo3ad7Y1hb9QNTV8dMj910THzHP"
    getParkData()

    console.log(parkQuery)
    console.log(parkCollection)
})