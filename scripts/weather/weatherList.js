 const weatherList = (weather) =>{
    for (const currentweatherobject of weather.daily){
        const weatherHTML= weatherConverter(currentweatherobject)
        const weatherdivelement= document.querySelector(".weathercontainer")
        weatherdivelement.innerHTML += weatherHTML
    }

}