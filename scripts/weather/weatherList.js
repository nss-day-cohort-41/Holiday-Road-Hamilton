 const weatherList = (weather) =>{
    let dayCnt = 0;

    const weatherdivelement= document.querySelector(".weathercontainer")
    weatherdivelement.innerHTML = "";
    for (const currentweatherobject of weather.daily){
        dayCnt++;
        if (dayCnt < 6) {
            const weatherHTML= weatherConverter(currentweatherobject,dayCnt)
            weatherdivelement.innerHTML += weatherHTML
            drawWeather(currentweatherobject,dayCnt)
        }
    }

}