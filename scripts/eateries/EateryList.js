//Declare eatery Select constant to save typing below
const eateryDropdown = document.getElementById("eatery__dropdown");

//Populate select with JSON return
const populateEaterySelect = () => {
    let wheelCtr = 0;

    const eateryDropdown = document.getElementById('eatery__dropdown')
    eateryDropdown.innerHTML = `<option value="0A">Select an Eatery</option>`
    eateryCollection.forEach(
        eateryObject => 
        {       
            if (wheelchairFlag === true) { 
                for (amenity in eateryObject.amenities) {
                    //console.log(`Amenities: ${amenity}-${eateryObject.amenities["wheelchairAccessible"]}->${eateryObject.amenities[amenity]}`)
                    
                    if (amenity === "wheelchairAccessible" & eateryObject.amenities[amenity] === true) {
                        wheelCtr++;
                        //console.log(`WheelchairAccessible Eateries: ${wheelCtr}`)
                        return eateryDropdown.innerHTML += `<option value="${eateryObject.id}">${eateryObject['businessName']}</option>`;
                    }
                }
            } else {
                return eateryDropdown.innerHTML += `<option value="${eateryObject.id}">${eateryObject['businessName']}</option>`;
            }

                
        }
    )
}

eateryDropdown.addEventListener("change", (clickEvent) => {
    clearEateryList();

    const eateryID = parseInt(clickEvent.target.value)
    //console.log(`option value ID: ${eateryID}`) 
    for (eatery of eateryCollection) {
        if (eatery["id"]  === eateryID) {
            // If empty array and object not already in array, push it to the array
            if ( eaterySelectedCollection.length < 1 ) {
                eaterySelectedCollection.push(eatery)
            } else if (eaterySelectedCollection.indexOf(eatery) === -1 ) {
                eaterySelectedCollection.push(eatery)
            }
            
        }
    }
    
    displayEateriesPreview(eaterySelectedCollection);
    if(eaterySelectedCollection != null) {
        document.getElementById("save__button").disabled = false
    }
    }
    
)

const previewEateries = document.querySelector(".preview__eateries");

const clearEateryList = () => previewEateries.innerHTML = ""
var activeEateryDetails = "";
var activeEateryModal = "";


const displayEateriesPreview = (eaterySelectedCollection) => {
    
    for (const currEateryObject of eaterySelectedCollection) {
 
        const eateryHTML = eateryConverter(currEateryObject);
        previewEateries.innerHTML += eateryHTML
        const eateryDetailVisibilityButtons = document.querySelectorAll(`.button__details--eatery`)
        eateryDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
               
                if ( document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display === "block") {
                    document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display = "none";
                    button.innerHTML ="Details"
                    activeEateryModal = "";
                } else {
                    if (activeEateryModal === "" ) {
                        document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display = "block";
                        activeEateryModal = document.getElementById(`modal__eatery__details__${clickEvent.target.id}`);
                        activeEateryDetails = button;
                        button.innerHTML ="Close"

                    }
                    
                }
                    
                })
            });
  
        
    }
}


