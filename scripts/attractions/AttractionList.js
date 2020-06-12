const attractionTypeDropdown = document.querySelector(".attractions__dropdown")
const contentTarget = document.querySelector(".preview__attractions")

const clearAttractionsList = () => contentTarget.innerHTML = ""
let attractionSelectionArray = []


attractionTypeDropdown.addEventListener("change", changeEvent  => {
    // Get the value of the option chosen by the user
    clearAttractionsList()
    const userChoice = changeEvent.target.value
    for(currentAttractionsObject of attractionData) {
         if (userChoice === currentAttractionsObject.name) {
             //added check for empty array or attraction not already in array 
            if ( attractionSelectionArray.length < 1 ) {
                attractionSelectionArray.push(currentAttractionsObject)
            } else if (attractionSelectionArray.indexOf(currentAttractionsObject) === -1 ) {
                attractionSelectionArray.push(currentAttractionsObject)       
            }
            
            
            displayAttractionPreview(attractionSelectionArray)
            if(attractionSelectionArray != undefined) {
                document.getElementById("eatery__dropdown").disabled = false
            }
            
        }
    }
   
})

const previewAttractions = document.querySelector(".preview__attractions");
var activeAttractionDetails = "";
var activeAttractionModal = "";

const displayAttractionPreview = (locals) => {

    for (const currAttractionObject of locals) {
 
        const attractionHTML = attractionsItineraryConverter(currAttractionObject);
        previewAttractions.innerHTML += attractionHTML
        const attractionDetailVisibilityButtons = document.querySelectorAll(`.button__details--attraction`)
        attractionDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
                if ( document.getElementById(`modal__attraction__details__${clickEvent.target.id}`).style.display === "block") {
                    document.getElementById(`modal__attraction__details__${clickEvent.target.id}`).style.display = "none";
                    button.innerHTML ="Details"
                    activeAttractionModal = "";
                } else {
                    if (activeAttractionModal === "" ) {
                        document.getElementById(`modal__attraction__details__${clickEvent.target.id}`).style.display = "block";
                        activeAttractionModal = document.getElementById(`modal__attraction__details__${clickEvent.target.id}`);
                        activeAttractionDetails = button;
                        button.innerHTML ="Close"

                    }
                    
                }
                    
                })
            });
        
    }
}

const attractionsList = (locals) => {

    for (const currentAttractionsObject of locals) {
        const attractionsHTML = attractionsConverter(currentAttractionsObject)
        const attractionsDivElement = document.querySelector(".attractions__dropdown")
        attractionsDivElement.innerHTML += attractionsHTML
    }
}



