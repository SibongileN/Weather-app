function searchCity(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-input");
    let city = document.querySelector("#city");

    city.innerHTML= searchInput.value;

}

let searchBar = document.querySelector("form");
searchBar.addEventListener("submit",searchCity);


let apiKey= "93704d2fc3113d491t780f96oa1cbb5b";
let apiUrl= `https://api.shecodes.io/weather/v1/current?lon={lon}&lat=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather)