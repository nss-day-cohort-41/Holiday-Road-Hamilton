//api key c8fb6767591a6ee3fec1033c2dd048dc
let weather=[]

const eventHub = document.querySelector(".weathercontainer")

function checkStatus(res) {
  if (!res.ok) {
      console.log("unable to serve weather")
      throw new Error(res.Error);
  }
  return res;
}

const getWeather = (lat,long) => { 
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely&units=imperial&appid=c8fb6767591a6ee3fec1033c2dd048dc`)
    .then(checkStatus)
    .then((response) => response.json())
    .catch(error => {
      const weatherdivelement= document.querySelector(".weathercontainer")
      weatherdivelement.innerHTML = `<h4>Weather Not Available For This Location</h4>`;
      return Promise.reject()
      })
      .then((parsedWeather) => {
        weather = parsedWeather
        return weather
      })
     .then((weather)=>{
         console.log(weather)
         weatherList(weather)
     })
  }

