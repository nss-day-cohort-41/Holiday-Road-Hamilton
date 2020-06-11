const attractionTypeDropdown = document.querySelector(".attractions__dropdown")
const contentTarget = document.querySelector(".preview__attractions")
const clearAttractionsList = () => contentTarget.innerHTML = ""
let attractionSelectionArray = []

attractionTypeDropdown.addEventListener("change", changeEvent  => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value
    for(currentAttractionsObject of attractionData) {
        if (userChoice === currentAttractionsObject.name) {
            attractionSelectionArray.push(currentAttractionsObject)
            displayAttractionPreview(attractionSelectionArray)
        }
    }
    
})

const previewAttractions = document.querySelector(".preview__attractions");


const displayAttractionPreview = (locals) => {

    for (const currAttractionObject of locals) {
 
        const attractionHTML = attractionsItineraryConverter(currAttractionObject);
        previewAttractions.innerHTML += attractionHTML
        const attractionDetailVisibilityButtons = document.querySelectorAll(`.button__details`)
        attractionDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
                document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display = "block";
                activeModal = document.getElementById(`modal__eatery__details__${clickEvent.target.id}`);
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



