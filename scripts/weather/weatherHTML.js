export const Weather = (weatherObject) => {
    return `
      <div class="weather__box">
        <h3>Forecast</h3>
        <p>Description: ${weatherObject.weather[0].description}</p>
        <p>Temperature Low: ${weatherObject.main.temp_min} F</p>
        <p>Temperature High: ${weatherObject.main.temp_max} F</p>
        <p>Feels Like: ${weatherObject.main.feels_like} F</p>
      </div>
    `
  }
  