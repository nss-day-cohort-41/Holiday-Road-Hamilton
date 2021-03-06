
let postObject = {}
let eventCompare = " "
document.getElementById("save__button").disabled = true
document.getElementById("attractions__dropdown").disabled = true
document.getElementById("eatery__dropdown").disabled = true
document.getElementById("park__dropdown").disabled = true

const deleteItenerary = () => {
return fetch(`http://localhost:8088/itineraries`).then(
    (response) => response.json())
    .then((response) => {
        let counter = 0;
        for(const data of response){
            counter ++
        fetch(`http://localhost:8088/itineraries/${counter}`, { method: "DELETE"})
        }
    })
}

const saveButton = document.querySelector(`.button__saveItinerary`)
const API = {
    saveItineraryEntry: () => {
        return fetch("http://localhost:8088/itineraries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(postObject)
        })
       
    }
}
const eventCreator = (compare) =>{
    return fetch("http://localhost:8088/itineraries").then(response => response.json()).then((response) => {
                    for (const place of response) {
                        if (eventCompare === place.parks.parkCode) {
                            return fetch("https://developer.nps.gov/api/v1/events?parkCode=" + eventCompare + "&pageSize=50&api_key=" + keys.npsKey)
                            .then(response => response.json())
                            .then((event) => {
                                    noEventList()
                                for (let number of event.data) {
                                   if (eventCompare === number.sitecode) {
                                        eventList(number)
                                   }
                                   
                                
                                }
                            })
                    }
                }
            })
}

saveButton.addEventListener("click", (clickEvent) => {
    
    postObject.parks = natPark;
    postObject.weather = weatherArray
    postObject.attractions = attractionSelectionArray
    postObject.eateries = eaterySelectedCollection
    eventCompare = postObject.parks.parkCode
    API.saveItineraryEntry(postObject).then(() => {
        eventCreator()
    })
    itinerariesList(postObject)
    const parkDivElement = document.querySelector(".preview__parks")
    parkDivElement.innerHTML = ""
    clearAttractionsList()
    clearEateryList()
    attractionSelectionArray = []
    eaterySelectedCollection = []
    const weatherdivelement= document.querySelector(".weathercontainer")
    weatherdivelement.innerHTML = ""

}   
)


