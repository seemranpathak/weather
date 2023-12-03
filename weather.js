    const apikey ="dd9df6aa6050ffe1a7c4bc7a5eadc860";
    const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon =document.querySelector(".weather-icon");
    async function checkWeather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
            var data = await response.json();
           
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

            if(data.weather[0].main =="clouds")
            {
            weatherIcon.src ="https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
            }
            else if(data.weather[0].main == "Clear")
            {
            weatherIcon.src ="https://cdn-icons-png.flaticon.com/128/7780/7780231.png";
            }
            else if(data.weather[0].main == "Rain")
            {
            weatherIcon.scr="https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
            }
            else if(data.weather[0].main == "Drizzle")
            {
            weatherIcon.scr="https://cdn-icons-png.flaticon.com/128/5113/5113614.png";
            }
            else if(data.weather[0].main == "Mist")
            {
            weatherIcon.scr="https://cdn-icons-png.flaticon.com/128/6205/6205812.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }     
                 
            searchBtn.addEventListener("click",()=>{
                checkWeather(searchBox.value);
               })

