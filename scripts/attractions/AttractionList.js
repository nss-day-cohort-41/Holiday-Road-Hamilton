const attractionTypeDropdown = document.querySelector(".attractions__dropdown")
const contentTarget = document.querySelector(".attractions__overview")
const clearAttractionsList = () => contentTarget.innerHTML = ""
const attractionSelectionArray = []

attractionTypeDropdown.addEventListener("change", changeEvent  => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value
    for(currentAttractionsObject of attractionData) {
        if (userChoice === currentAttractionsObject.name) {
            attractionsItineraryList(currentAttractionsObject)
            attractionSelectionArray.push(currentAttractionsObject)
        }
    }
    console.log(attractionSelectionArray)
})






const attractionsList = (locals) => {
console.log(locals)
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
        // debugger
        const attractionDetailVisibilityButtons = document.querySelectorAll(`.button__details`)
        attractionDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
                document.getElementById(`details__${clickEvent.target.id}`).classList.toggle("hidden__details")
                })
                
        });
        
        
        
        
}

