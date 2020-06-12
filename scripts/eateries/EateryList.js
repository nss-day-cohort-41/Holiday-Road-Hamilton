//Declare eatery Select constant to save typing below
const eateryDropdown = document.getElementById("eatery__dropdown");
const filterCheckboxes = ["eateryWCACheckbox","eateryWIFICheckbox"]
filterCheckboxes.forEach(addCheckboxListeners)
function addCheckboxListeners(filterCheckbox) {

    thisCheckbox = document.getElementById(filterCheckbox)
    thisCheckbox.addEventListener('click', thisButton => {
        
        eateryAPI.getEateries().then(populateEaterySelect)
    })
}


//Populate select with JSON return
const populateEaterySelect = () => {
    
    
    const eateryDropdown = document.getElementById('eatery__dropdown')
    eateryDropdown.innerHTML = "";
    eateryDropdown.innerHTML = `<option value="0A">Select an Eatery</option>`
    eateryCollection.forEach(
        eateryObject => 
        {       
            let WIFIStatus = false;
            let WCAStatus = false;
            let returnStatus = false;
            if ((getCheckboxState("eateryWCACheckbox") === true) || ((getCheckboxState("eateryWIFICheckbox")) === true)) { 
                for (amenity in eateryObject.amenities) {
                    if (amenity === "wheelchairAccessible" && eateryObject.amenities[amenity] === true) { WCAStatus = true }
                    if ( amenity === "wifi" && eateryObject.amenities[amenity] === true ) { WIFIStatus = true }
                }  // end amenties check

                // return if filtered
                if ( ( WCAStatus === true && WIFIStatus === true) && ( (getCheckboxState("eateryWCACheckbox") === true) && ( getCheckboxState("eateryWIFICheckbox") === true)) ) { 
                    
                    returnStatus = true;
                    return eateryDropdown.innerHTML += `<option value="${eateryObject}">${eateryObject['businessName']}</option>`; 
                } else {
                    if ( (WCAStatus === true) && (getCheckboxState("eateryWCACheckbox") === true) && (returnStatus === false) && (getCheckboxState("eateryWIFICheckbox") === false)) {
                        returnStatus = true;
                        return eateryDropdown.innerHTML += `<option value="${eateryObject.id}">${eateryObject['businessName']}</option>`; 
                    } 
                    if ( (WIFIStatus === true) && (getCheckboxState("eateryWIFICheckbox") === true)  && (returnStatus === false) && (getCheckboxState("eateryWCACheckbox") === false))  {
                        returnStatus = true;
                        return eateryDropdown.innerHTML += `<option value="${eateryObject.id}">${eateryObject['businessName']}</option>`; 
                    }
                }
                
            } else { 
                // return not filtered
                
                return eateryDropdown.innerHTML += `<option value="${eateryObject.id}">${eateryObject['businessName']}</option>`; 
            }

            
        }
    )
}

eateryDropdown.addEventListener("change", (clickEvent) => {
    clearEateryList();

    const eateryID = parseInt(clickEvent.target.value)
    
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


