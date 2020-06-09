const attractionTypeDropdown = document.querySelector(".attractions__dropdown")
const contentTarget = document.querySelector(".attractions__overview")
const clearAttractionsList = () => contentTarget.innerHTML = ""

attractionTypeDropdown.addEventListener("change", changeEvent  => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value
    // If the user chose Holy, clear the list and only show holy fish
    for(currentAttractionsObject of attractionData) {
        if (userChoice === currentAttractionsObject.name) {
            attractionsItineraryList(currentAttractionsObject)
        }
    }
})





counter = 0
const attractionsList = (locals) => {

    for (const currentAttractionsObject of locals) {
        const attractionsHTML = attractionsConverter(currentAttractionsObject)
        const attractionsDivElement = document.querySelector(".attractions__dropdown")
        attractionsDivElement.innerHTML += attractionsHTML
    }
}

 
const attractionsItineraryList = (locals) => {
        const attractionsHTML = attractionsItineraryConverter(locals)
        const attractionsArticleElement = document.querySelector(".preview__attractions")
        attractionsArticleElement.innerHTML += attractionsHTML
        
        const attractionDetailVisibilityButton = document.querySelectorAll(`.button__details`)
        
        counter ++
        if(counter >= 1) {
            attractionDetailVisibilityButton.addEventListener("click", clickEvent => {
                document.querySelector(`.attraction__details`).classList.toggle("hidden__details")
            })
        }
}

