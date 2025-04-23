function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temprature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "0fb423d44d6ba3f282ct0c23foeafd77";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searhFormElement = document.querySelector("#search-form");
searhFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Tokyo");
