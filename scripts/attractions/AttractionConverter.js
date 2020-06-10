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
    <div class="">
        <h1> ${attractionsObject.name} </h1>
        <img class="attraction__picture" src="${attractionsObject.picture}"
            alt="${attractionsObject.name} Info: ${attractionsObject.description}" />
    </div>
    <button name="details__button" class="button__details" id="${attractionsObject.id}">Details</button>
    <div class="attraction__details hidden__details" id="details__${attractionsObject.id}">
        Details: <br>
            Name <strong>${attractionsObject.name}</strong><br>
            ${attractionsObject.city}, ${attractionsObject.state}<br>
            Description: ${attractionsObject.description}<br>
            Souveniers available: ${souvenirs}<br>
            Restrooms available: ${restrooms}
    </div>
</section>
   `

    return attractionsHTMLRepresentation
}