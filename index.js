function searchCity(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-input");
    let city = document.querySelector("#city");

    city.innerHTML= searchInput.value;

}

let searchBar = document.querySelector("form");
searchBar.addEventListener("submit",searchCity);


