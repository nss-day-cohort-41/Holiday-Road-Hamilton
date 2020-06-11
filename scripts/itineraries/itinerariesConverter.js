const itinerariesConverter = (itinerariesObject) => {
    return ` 
        <div class="itineraries__box">
          <h3>Your Itinerary</h3>
          <p>Park: ${itinerariesObject.parkName}</p>
          <p>Attraction: ${itinerariesObject.attractionName} F</p>
          <p>Eatery: ${itinerariesObject.eateryName} F</p>
        </div>
      `
    }