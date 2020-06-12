const itinerariesConverter = (itinerariesObject) => {
    return ` 

    <section class="section__itinerary__card">
    <div class="header__itinerary__card">Itinerary Card</div>
    <div class="content__itinerary__card">

        <div class="itineraries__box">
          <h3>Your Itinerary</h3>
          <p>Park: ${itinerariesObject.parks.name}</p>
          <p class="itinerary__attractions__${itinerariesObject.parks.id}"></p>
          <p class="itinerary__eateries__${itinerariesObject.parks.id}"></p>
        </div>

        </div>
        </div>
        <button name="events__button" class="button__events__${itinerariesObject.parks.parkCode}" id="${itinerariesObject.parks.parkCode}">Events</button>
        <div class="event__details hidden__details" id="details__${itinerariesObject.parks.parkCode}">
          <p class="event__details>
          </p>
        </div>
    </section>
      `
    }

    const itinerariesAttractionsConverter=(itinerariesAttractionsObject,counter) =>{    
      return `
      <p>Attraction: ${itinerariesAttractionsObject[counter].name}</p>
      `
    }

    const itinerariesEateriesConverter=(itinerariesEateriesObject,counter) =>{    
      return `
      <p>Eatery: ${itinerariesEateriesObject[counter].businessName}</p>
      `
    }

    const eventsConverter=(eventsObject) =>{    
      return `
      <p>Event: ${eventsObject.title}<br>
      ${eventsObject.description}</p>
      `
    }
    
                            
                     