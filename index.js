function searchCity(city){
    let apiKey= "93704d2fc3113d491t780f96oa1cbb5b";
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}=&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather)
    }
    

function searchSubmit(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-input");
    searchCity(searchInput.value);
}

let searchBar = document.querySelector("form");
searchBar.addEventListener("submit",searchSubmit);


function displayWeather(response){
    let currentTemperature = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let city = document.querySelector("#city");
    let currentHumidity= response.data.temperature.humidity;
    let currentWind= response.data.wind.speed;
let today = document.querySelector("#today");
let icon= document.querySelector("#emoji");
icon.innerHTML= `<img src="${response.data.condition.icon_url}"/> `


    city.innerHTML= response.data.city;  
    description.innerHTML= response.data.condition.description;  
    humidity.innerHTML=`${currentHumidity}%`;
    wind.innerHTML=`${currentWind}km/h`;
    currentTemperature.innerHTML= `${temperature}°`;
    today.innerHTML= `${day}, ${hours}:${minutes}`;
    getForecast(response.data) 
}


    let now = new Date();
    let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let day= days[now.getDay()];
    let hours= now.getHours();
    let minutes= now.getMinutes();

    if (minutes < 10){
        minutes= `0${minutes}`;
    }
  
function getForecast(city){
    apiKey ="93704d2fc3113d491t780f96oa1cbb5b";
    apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios(apiUrl).then(displayForecast);
   
}

function displayForecast(response){
    
    let days = ["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"];

    let forecastHtml= "";

days.forEach(function (day){
    forecastHtml = forecastHtml +

    `<div class="daily-forecast">
      <div class="day" id="day">${day}</div>
      <div class="icon" id="forecast-icon">☁</div>
      <div class="forecast-temperature">
        <div class="forecast-temp"><strong>16°</strong></div>
        <div class="forecast-temp">16°</div>
      </div>
    </div>`;

});
let forecast = document.querySelector("#forecast");
forecast.innerHTML= forecastHtml;
}
displayForecast();
  


    


