const itinerariesList = (itineraries) =>{
    for (const currentitinerariesobject of itineraries){
        const itinerariesHTML= itinerariesConverter(currentitinerariesobject)
        const itinerariesdivelement= document.querySelector(".itinerariescontainer")
        itinerariesdivelement.innerHTML += itinerariesHTML
    } 

}