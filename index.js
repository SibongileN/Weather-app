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
    let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day = document.querySelector("#day")
    city.innerHTML= response.data.city;  
    description.innerHTML= response.data.condition.description;  
    humidity.innerHTML=`${currentHumidity}%`;
    wind.innerHTML=`${currentWind}km/h`;
    currentTemperature.innerHTML= `${temperature}°`;
    day.innerHTML= 

}
function searchCity(city){
let apiKey= "93704d2fc3113d491t780f96oa1cbb5b";
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}=&key=${apiKey}`;
axios.get(apiUrl).then(displayWeather)
}