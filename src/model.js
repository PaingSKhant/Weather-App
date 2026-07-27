import { API_KEY } from "./api-key.js";
import { weatherCard } from "./view.js";

export const searchBar = document.getElementById("search-bar");
export const searchBtn = document.getElementById("search-btn");

async function fetchData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}

function processData(data) {
  return {
    address: data.resolvedAddress,
    timeZone: data.timezone,
    condition: data.currentConditions.conditions,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    temp: data.currentConditions.temp,
    icon: data.currentConditions.icon,
  };
}

function changeTemp(format, temp) {
  if (format === "C") {
    return ((temp - 32) * 5) / 9;
  }
  return temp;
}

export async function handleSearch() {
  const location = searchBar.value.trim();
  if (!location) return;

  let data = await fetchData(location);
  console.log(data);

  if (data) {
    let weather = processData(data);
    console.log(weather);
    weatherCard(weather);
    searchBar.value = "";
  }
}
