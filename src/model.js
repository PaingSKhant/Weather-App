import { API_KEY } from "./api-key.js";

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

function weatherCard(weather) {
  const timeZone = document.getElementById("time-zone");
  const iconImage = document.getElementById("icon-image");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feels-like");
  const weatherCondition = document.getElementById("weather");

  timeZone.textContent = weather.timeZone;
  //icon here
  temperature.textContent = weather.temp + " F";
  feelsLike.textContent = "Feels Like " + weather.feelsLike;
  weatherCondition.textContent = weather.condition;
}
