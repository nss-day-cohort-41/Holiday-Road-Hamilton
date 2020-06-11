
let postObject = {}
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

saveButton.addEventListener("click", (clickEvent) => {
    postObject.parks = natPark;
    postObject.weather = weatherArray
    postObject.attractions = attractionSelectionArray
    postObject.eateries = eaterySelectedCollection
    API.saveItineraryEntry(postObject)
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


