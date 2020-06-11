const weatherConverter = (weatherObject,dayCnt) => {
    
  return ` 
      <div class="weather__box" id="${dayCnt}__weather__box">
      <div class="weather__box__header"><h3>Day ${dayCnt}</h3></div>
        <div class="weather__box__text">
            <p id="${dayCnt}__weather__desc">Description: ${weatherObject.weather[0].description}</p>
            <p>Temperature Low: ${weatherObject.temp.min} F</p>
            <p>Temperature High: ${weatherObject.temp.max} F</p>
            <p>Feels Like Midday: ${weatherObject.feels_like.day} F</p>
        </div>
   `
  }

  
  function drawWeather(weatherObject,dayCnt) {
    var description = weatherObject.weather[0].description;
    description = description.toLowerCase();
    const dayWeatherDoc = document.getElementById(`${dayCnt}__weather__box`)
    document.getElementById(`${dayCnt}__weather__desc`).innerHTML = description;
    if ( description.indexOf('rain') > 0 ) {
      dayWeatherDoc.classList.add("rain")
     } 
}