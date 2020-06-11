const attractionsConverter = (attractionsObject) => {
    const attractionsHTMLRepresentation = `
      <option value="${attractionsObject.name}">${attractionsObject.name}</option>
   `

    return attractionsHTMLRepresentation
}

const attractionsItineraryConverter = (attractionsObject) => {
    var souvenirs = ""
    var restrooms = ""
    if (attractionsObject.amenities.souvenirs === true) {
       souvenirs = "Yes"
    }else {
        souvenirs = "No"
    }
    if (attractionsObject.amenities.restrooms === true) {
        restrooms = "Yes"
     }else {
         restrooms = "No"
     }
    const attractionsHTMLRepresentation = `
    <section class="attractions__overview">
        <div class="div__section__attraction">
            <h1> ${attractionsObject.name} </h1>
            <img class="attraction__picture" src="${attractionsObject.picture}"
                alt="${attractionsObject.name} Info: ${attractionsObject.description}" />
        </div>
        </section>
        <button name="details__button" class="button__details" id="${attractionsObject.id}">Details</button>
        <div id="myModal" class="modal">
            <div class="modal__eatery__details" id="modal__eatery__details__${attractionsObject.id}">
                <div class="modal__content">
                    <div class="eatery__details hidden__details" id="details__${attractionsObject.id}">
                        <span class="close">&times;</span>
                            <strong>${attractionsObject.name}</strong><br>
                            Description: ${attractionsObject.description}<br>
                            Location: ${attractionsObject.city}, ${attractionsObject.state}<br>
                            Amenties: <br>
                                Souvenirs: ${souvenirs}<br>
                                Restrooms:${restrooms}
                </div>
            </div>
        </div>
   `

    return attractionsHTMLRepresentation
}