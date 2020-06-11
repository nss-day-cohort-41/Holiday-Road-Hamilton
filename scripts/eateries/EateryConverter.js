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
            <h1>Name: ${eateryObject.businessName}</h1>
            <img class="eatery__picture" src="${eateryObject.picture}"
                alt="${eateryObject.businessName} Info: ${eateryObject.description}" />
        </div>
        <button name="details__button" class="button__details" id="${eateryObject.id}">Details</button>
    </section>
    <div id="myModal" class="modal">
        <div class="modal__eatery__details" id="modal__eatery__details__${eateryObject.id}">
            <div class="modal__content">
                <strong>${eateryObject.businessName}</strong><br>
                Description: ${eateryObject.description}<br>
                Location: ${eateryObject.city}, ${eateryObject.state}<br>
                Amenties: ${amenitiesStr}
            </div>
            
        </div>
        <span id="modal_close" onclick="document.getElementById('id01').style.display='none'" 
        class="w3-button w3-display-topright">&times;</span>
    </div>
    `;

    return eateryHTMLRepresentation;
}


