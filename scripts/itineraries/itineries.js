var postObject = {}
postObject.parks = natPark;
postObject.weather = ""
postObject.attractions = attractionSelectionArray
postObject.eateries = eaterySelectedCollection
const API = {
    saveParkEntry: () => {
        return fetch("http://localhost:8088/itineraries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            id: 1,
            body: JSON.stringify(postObject)
        })
       
    }
}


