// array to store park data in once it has been fetched
let parkCollection = []

// object to store chosen park
let natPark = {}

// get selection of state from drop down
let e = document.getElementById("state")
let stateValue = e.options[e.selectedIndex].value

let parkQuery = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateValue + `&api_key=${keys.npsKey}`



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
            return arrayOfParks
        }
    )
}

// const parkList = (alpha) => {

//     console.log(alpha)
//     for (const park of alpha) {
//         parkListArray.push(park)
        
//     }


//     return parkListArray
// }