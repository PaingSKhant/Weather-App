import { API_KEY } from "./api-key.js";
import { weatherCard } from "./view.js";

export const searchBar = document.getElementById("search-bar");
export const searchBtn = document.getElementById("search-btn");

let currentWeatherData = null;

export function getTemp() {
  return currentWeatherData.currentConditions.temp;
}

async function fetchData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
  );
  if (!response.ok) {
    if (response.status === 400 || response.status === 404) {
      throw new Error("Location not found. Check your spelling!");
    }
    throw new Error("Server error. Please try again later.");
  }
  currentWeatherData = await response.json();
  console.log("weather data");
  console.log(currentWeatherData);
  return processData(currentWeatherData);
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

export function changeTemp(format, temp) {
  if (!temp) return;

  if (format === "C") {
    return Math.round(((temp - 32) * 5) / 9);
  } else if (format === "F") return temp;
}

export async function handleSearch() {
  const location = searchBar.value.trim();
  if (!location) return;

  let data = await fetchData(location);

  if (data) {
    weatherCard(data);
    searchBar.value = "";
  }
}
