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
        <div id="myModal" class="modal">

        <button name="details__button" class="button__details" id="${eateryObject.id}">Details</button>
        <div class="modal-content">
        <span class="close">&times;</span>
        <p>
        <div class="eatery__details hidden__details" id="eatery__details__${eateryObject.id}">
            <strong>${eateryObject.businessName}</strong><br>
            Description: ${eateryObject.description}<br>
            Location: ${eateryObject.city}, ${eateryObject.state}<br>
            Amenties: ${amenitiesStr}
         </div>
        </p>
        </div>
        
        
    </section>`;
    return eateryHTMLRepresentation;
}

