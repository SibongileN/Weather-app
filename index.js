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
    console.log("temperature");

    let city = document.querySelector("#city");
city.innerHTML= response.data.city;    

    currentTemperature.innerHTML= `${temperature}`
}
function searchCity(city){
let apiKey= "93704d2fc3113d491t780f96oa1cbb5b";
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}=&key=${apiKey}`;
axios.get(apiUrl).then(displayWeather)
}