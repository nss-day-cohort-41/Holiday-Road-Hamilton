// array to store park data in once it has been fetched
let parkCollection = []

// get selection of state from drop down
let e = document.getElementById("state")
let stateValue = e.options[e.selectedIndex].value

let parkQuery = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateValue + "&api_key=WPMjMAxhvLivTCo3ad7Y1hb9QNTV8dMj910THzHP"



// fetch park data with sorted variable, the parse into json and put into parkCollection
const getParkData = () => {
    return fetch(`${parkQuery}`).then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfParks) => {
            parkCollection = arrayOfParks
            console.log(parkCollection)
        }
    )
}

