import rainIcon from "./assets/rain.svg";
import snowIcon from "./assets/snow.svg";
import clearDayIcon from "./assets/clear-day.svg";
import clearNightIcon from "./assets/clear-night.svg";
import partlyCloudyDayIcon from "./assets/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import cloudyIcon from "./assets/cloudy.svg";
import fogIcon from "./assets/fog.svg";
import windIcon from "./assets/wind.svg";

import rainGif from "./assets/rain.gif";
import snowGif from "./assets/snow.gif";
import clearDayGif from "./assets/clear-day.gif";
import clearNightGif from "./assets/clear-night.gif";
import partlyCloudyDayGif from "./assets/partly-cloudy-day.gif";
import partlyCloudyNightGif from "./assets/partly-cloudy-night.gif";
import cloudyGif from "./assets/cloudy.gif";
import fogGif from "./assets/fog.gif";
import windGif from "./assets/wind.gif";

export function weatherCard(weather) {
  const timeZone = document.getElementById("time-zone");

  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feels-like");
  const weatherCondition = document.getElementById("weather");

  weatherIcons(weather.icon);

  timeZone.textContent = weather.address;
  //icon here
  temperature.textContent = weather.temp + " F";
  feelsLike.textContent = "Feels Like " + weather.feelsLike;
  weatherCondition.textContent = weather.condition;
  console.log(weather.icon);
}

function updateWeatherIcons(icon, gif) {
  const backgroundImage = document.getElementById("background-image");
  const headerIcon = document.getElementById("header-icon");
  const iconImage = document.getElementById("icon-image");

  headerIcon.src = icon;
  iconImage.src = icon;
  backgroundImage.src = gif;

  console.log(icon);
  console.log(gif);
}

function weatherIcons(icon) {
  if (icon === "rain") {
    updateWeatherIcons(rainIcon, rainGif);
    console.log("inside rain");
  } else if (icon === "snow") {
    updateWeatherIcons(snowIcon, snowGif);
  } else if (icon === "clear-day") {
    updateWeatherIcons(clearDayIcon, clearDayGif);
  } else if (icon === "clear-night") {
    updateWeatherIcons(clearNightIcon, clearNightGif);
  } else if (icon === "partly-cloudy-day") {
    updateWeatherIcons(partlyCloudyDayIcon, partlyCloudyDayGif);
  } else if (icon === "partly-cloudy-night") {
    updateWeatherIcons(partlyCloudyNightIcon, partlyCloudyNightGif);
  } else if (icon === "cloudy") {
    updateWeatherIcons(cloudyIcon, cloudyGif);
  } else if (icon === "fog") {
    updateWeatherIcons(fogIcon, fogGif);
  } else if (icon === "wind") {
    updateWeatherIcons(windIcon, windGif);
  } else {
    console.warn(`Unknown icon type: "${icon}". Falling back to clear-day.`);
    updateWeatherIcons(clearDayIcon, clearDayGif);
  }
}

export function updateTemp(temp, unit) {
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feels-like");
  const unitToggle = document.getElementById("unit-toggle");

  if (unit === "C") {
    temperature.textContent = `${temp} ${unit}`;
    feelsLike.textContent = `Feels Like: ${temp} ${unit}`;
    //change unit back to C
    unitToggle.textContent = "To Fahrenheit";
    unitToggle.dataset.unit = "C";
  } else if (unit === "F") {
    temperature.textContent = `${temp} ${unit}`;
    feelsLike.textContent = `Feels Like: ${temp} ${unit}`;
    //change unit back to F
    unitToggle.textContent = "To Celsius";
    unitToggle.dataset.unit = "F";
  }
}
