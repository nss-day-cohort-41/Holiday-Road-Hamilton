let eateryCollection = [];
let eaterySelectedCollection = [];

const eateryDropdown = document.getElementById("eatery__dropdown");

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


const eateryConverter = (eateryObject) => {
    // Build string from array
    let amenitiesStr = ""

    for (amenity in eateryObject.amenities) {
        
        if (eateryObject.amenities[amenity] === true) {
            if (amenitiesStr.length === 0) {
                    amenitiesStr = amenitiesStr + amenity
            } else {
                amenitiesStr = amenitiesStr + ", " + amenity
            }
        }
    }
    const eateryHTMLRepresentation = `
    <section class="section__eatery">
        <div class="div__section__eatery">
         <img class="eatery__picture" src=""
            alt="" />
        </div>
        <div class="eatery__details">
            <ul>
                <li>Name: ${eateryObject.businessName}</li>
                <li>Description: ${eateryObject.description}</li>
                <li>City: ${eateryObject.city}</li>
                <li>State: ${eateryObject.state}</li>
                <li>Amenties: ${amenitiesStr}</li>
            </ul>
         </div>
    </section>`;
    return eateryHTMLRepresentation;
}

const eateryAPI = {
    getEateries () {
        return fetch("http://localhost:8088/eateries")
            .then(eateryHTTPResponse => eateryHTTPResponse.json())
            .then( (arrayOfEateries) => eateryCollection = arrayOfEateries)
            .then(eateryCollection.forEach(
                eateryObject =>
                {   // Trim string values if possible
                    if (typeof eateryObject == 'string') { eateryObject = eateryObject.trim }
                }
            ))
    }
}

const previewEateries = document.querySelector(".preview__eateries");

const clearEateryList = () => previewEateries.innerHTML = ""


const displayEateriesPreview = (eaterySelectedCollection) => {

    for (const currEateryObject of eaterySelectedCollection) {
        const eateryHTML = eateryConverter(currEateryObject);
        previewEateries.innerHTML += eateryHTML

    }
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


