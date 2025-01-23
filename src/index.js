function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}
let searhFormElement = document.querySelector("#search-form");
searhFormElement.addEventListener("submit", handleSearchSubmit);
