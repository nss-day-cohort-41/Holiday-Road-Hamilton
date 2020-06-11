const itinerariesConverter = (itinerariesObject) => {
    return ` 

    <section class="section__itinerary__card">
    <div class="header__itinerary__card">Itinerary Card</div>
    <div class="content__itinerary__card">

        <div class="itineraries__box">
          <h3>Your Itinerary</h3>
          <p>Park: ${itinerariesObject.parks.name}</p>
          <p class="itinerary__attractions"></p>
          <p class="itinerary__eateries"></p>
        </div>

        </div>
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
    
                            
                     