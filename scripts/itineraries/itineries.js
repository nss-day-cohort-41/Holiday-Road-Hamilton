
let postObject = {}
let eventCompare = ""
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
                        if (compare === place.parks.parkCode) {
                            return fetch(`https://developer.nps.gov/api/v1/events?&api_key=${keys.npsKey}`)
                            .then(response => response.json())
                            .then((event) => {
                                console.log(event)
                                for (let number = 0; number < 3; number ++) {
                                eventList(event.data[number])
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
    API.saveItineraryEntry(postObject)
    itinerariesList(postObject)
    eventCreator(eventCompare)
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


