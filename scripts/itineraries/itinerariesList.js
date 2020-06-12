const eventList = (eventsObject) => {
    console.log(eventsObject)
    const eventsHTML= eventsConverter(eventsObject)
    const eventsDivElement= document.querySelector(".event__details")
    eventsDivElement.innerHTML += eventsHTML
}



const itinerariesList = (itineraries) =>{
    
        const itinerariesHTML= itinerariesConverter(itineraries)
        const itinerariesdivelement= document.querySelector(".aside__saved__itineraries")
        itinerariesdivelement.innerHTML += itinerariesHTML
        let attractioncounter = -1
        let eaterycounter = -1

        for (const attraction of itineraries.attractions){
            console.log(itineraries.attractions)
            attractioncounter++
            const itinerariesAttractionsHTML= itinerariesAttractionsConverter(itineraries.attractions,attractioncounter)
            console.log(itineraries.parks.name)
            const itinerariesattractionsdivelement= document.querySelector(`.itinerary__attractions__${itineraries.parks.id}`)
            itinerariesattractionsdivelement.innerHTML += itinerariesAttractionsHTML
        }

        for (const eatery of itineraries.eateries){
            console.log(itineraries.eateries)
            eaterycounter++
            const itinerariesEateriesHTML= itinerariesEateriesConverter(itineraries.eateries,eaterycounter)
            const itinerarieseateriesdivelement= document.querySelector(`.itinerary__eateries__${itineraries.parks.id}`)
            itinerarieseateriesdivelement.innerHTML += itinerariesEateriesHTML
        }

        const eventDetailVisibilityButtons = document.querySelectorAll(`.button__events__${itineraries.parks.parkCode}`)
        eventDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
                document.getElementById(`details__${clickEvent.target.id}`).classList.toggle("hidden__details")
            })
        })
    }