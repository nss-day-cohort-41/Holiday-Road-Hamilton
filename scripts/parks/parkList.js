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
    parkQuery = "https://developer.nps.gov/api/v1/parks?stateCode=" + userChoice + `&api_key=${keys.npsKey}`
    getParkData().then((response) => displayParkList(response))

    //send data to userChoice global variable

})



parkTypeDropdown.addEventListener("change", (changeEvent) => {
    //get the value chosen by the user
    const userChoice = changeEvent.target.value
    for(currentParkObject of parkCollection2.data) {
        // console.log(parkCollection)
        // console.log(currentParkObject.id)
        if (userChoice === currentParkObject.parkCode) {

            natPark = currentParkObject
        }
    }
    console.log(natPark)
    displayParkPreview()
    
    // This is just to change the park selection for everything


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
    var activeParkDetails = "";
    var activeParkModal = "";
    clearParkPreview()

    const parkPreviewHTML = parkPreviewConverter(natPark)

    previewParkElement.innerHTML = parkPreviewHTML


    const parkDetailVisibilityButton = document.getElementById("parkPreviewButton")
    
   
    parkDetailVisibilityButton.addEventListener("click", clickEvent => {
           
            if ( document.getElementById(`modal__park__details`).style.display === "block") {
                document.getElementById(`modal__park__details`).style.display = "none";
                parkDetailVisibilityButton.innerHTML ="Details"
                activeParkModal = "";
            } else {
                if (activeParkModal === "" ) {
                    document.getElementById(`modal__park__details`).style.display = "block";
                    activeParkModal = document.getElementById(`modal__park__details`);
                    activeParkDetails = parkDetailVisibilityButton;
                    parkDetailVisibilityButton.innerHTML ="Close"

                }
                
            }
                
            })
        



}

const compareWheelchair = () => {
    for(currentWheelchairObject of wheelchairCollection) {
        park1 = currentWheelchairObject.parkCode
        for(currentParkObject of parkCollection2.data) {
            if (park1 === currentParkObject.parkCode) {
                let element = document.getElementById(`${currentParkObject.parkCode}`)
                element.classList.toggle("wheelchairHighlight")
            }
        }
    }
    

}