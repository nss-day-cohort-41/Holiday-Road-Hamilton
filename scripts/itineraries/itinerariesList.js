const itinerariesList = (itineraries) =>{
    //for (const currentitinerariesobject of itineraries){
        const itinerariesHTML= itinerariesConverter(itineraries)
        const itinerariesdivelement= document.querySelector(".aside__saved__itineraries")
        itinerariesdivelement.innerHTML += itinerariesHTML
        let attractioncounter = -1
        let eaterycounter = -1

        for (const attraction of itineraries.attractions){
            attractioncounter++
            const itinerariesAttractionsHTML= itinerariesAttractionsConverter(itineraries.attractions,attractioncounter)
            const itinerariesattractionsdivelement= document.querySelector(".itinerary__attractions")
            itinerariesattractionsdivelement.innerHTML += itinerariesAttractionsHTML
        }

        for (const eatery of itineraries.eateries){
            eaterycounter++
            const itinerariesEateriesHTML= itinerariesEateriesConverter(itineraries.eateries,eaterycounter)
            const itinerarieseateriesdivelement= document.querySelector(".itinerary__eateries")
            itinerarieseateriesdivelement.innerHTML += itinerariesEateriesHTML
        }

    } 
