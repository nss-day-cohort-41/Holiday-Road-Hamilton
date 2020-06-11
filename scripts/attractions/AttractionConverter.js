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
    <section class="attractions__overview section__attractions">
        <div class="div__section__attraction">
            <h1> ${attractionsObject.name} </h1>
            <img class="attraction__picture" src="${attractionsObject.picture}"
                alt="${attractionsObject.name} Info: ${attractionsObject.description}" />
        </div>
        <button name="details__button" class="button__details--attraction" id="${attractionsObject.id}">Details</button>
        </section>
        <div id="myModal" class="modal--attractions">
            <div class="modal__details--attractions" id="modal__attraction__details__${attractionsObject.id}">
                <div class="modal__content--attractions">
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