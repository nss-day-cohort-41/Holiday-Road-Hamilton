//Declare eatery Select constant to save typing below
const eateryDropdown = document.getElementById("eatery__dropdown");

//Populate select with JSON return
const populateEaterySelect = () => {
    const eateryDropdown = document.getElementById('eatery__dropdown')
    eateryDropdown.innerHTML = `<option value="0A">Select an Eatery</option>`
    eateryCollection.forEach(
        eateryObject => 
        {

                return eateryDropdown.innerHTML += `<option value="${eateryObject.id}">${eateryObject['businessName']}</option>`;
        }
    )
}

eateryDropdown.addEventListener("change", (clickEvent) => {
    clearEateryList();
    const eateryID = parseInt(clickEvent.target.value)
    //console.log(`option value ID: ${eateryID}`) 
    for (eatery of eateryCollection) {
        if (eatery["id"]  === eateryID) {
            eaterySelectedCollection.push(eatery)
        }
    }
    
    displayEateriesPreview(eaterySelectedCollection);
    }
    
)

const previewEateries = document.querySelector(".preview__eateries");

const clearEateryList = () => previewEateries.innerHTML = ""
var activeDetails = "";
var activeModal = "";
var span = "";

const displayEateriesPreview = (eaterySelectedCollection) => {

    for (const currEateryObject of eaterySelectedCollection) {
 
        const eateryHTML = eateryConverter(currEateryObject);
        previewEateries.innerHTML += eateryHTML
        const eateryDetailVisibilityButtons = document.querySelectorAll(`.button__details`)
        eateryDetailVisibilityButtons.forEach(button => {
            button.addEventListener("click", clickEvent => {
               
                if ( document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display === "block") {
                    document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display = "none";
                    button.innerHTML ="Details"
                    activeModal = "";
                } else {
                    if (activeModal === "" ) {
                        document.getElementById(`modal__eatery__details__${clickEvent.target.id}`).style.display = "block";
                        activeModal = document.getElementById(`modal__eatery__details__${clickEvent.target.id}`);
                        activeDetails = button;
                        button.innerHTML ="Close"
                        span = document.getElementsByClassName("close")[0];
                    }
                    
                }
                    
                })
            });
  
        
    }
}


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == activeModal) {
//       activeModal.style.display = "none";
//       detailsButtons = document.querySelectorAll(`.button__details`)
//       for (button in detailsButtons) {
//           if (button.value === "Close") { button.innerHTML = "Details"}
//       }
//       activeModal = ""
//     }
//   }


