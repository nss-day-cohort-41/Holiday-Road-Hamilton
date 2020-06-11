
const weatherConverter = (weatherObject) => {
 
 
  return ` 
      <div class="weather__box">
        <h3>Day</h3>
        <p>Description: ${weatherObject.weather[0].description}</p>
        <p>Temperature Low: ${weatherObject.temp.min} F</p>
        <p>Temperature High: ${weatherObject.temp.max} F</p>
        <p>Feels Like Midday: ${weatherObject.feels_like.day} F</p>
      </div>
    `
  }

