 const weatherList = (weather) =>{
    let dayCnt = 0;
    for (const currentweatherobject of weather.daily){
        dayCnt++;
        const weatherHTML= weatherConverter(currentweatherobject,dayCnt)
        const weatherdivelement= document.querySelector(".weathercontainer")
        weatherdivelement.innerHTML += weatherHTML
    }

}