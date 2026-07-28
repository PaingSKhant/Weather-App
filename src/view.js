import rainIcon from "./assets/rain.svg";
import rainGif from "./assets/rain.gif";

import snowIcon from "./assets/snow.svg";
import snowGif from "./assets/snow.gif";

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

function weatherIcons(icon) {
  const backgroundImage = document.getElementById("background-image");
  const headerIcon = document.getElementById("header-icon");
  const iconImage = document.getElementById("icon-image");
  if (icon === "rain") {
    headerIcon.src = rainIcon;
    iconImage.src = rainIcon;
    backgroundImage.src = rainGif;
  }
  if (icon === "snow") {
    headerIcon.src = snowIcon;
    iconImage.src = snowIcon;
    backgroundImage.src = snowGif;
  }
}

export function updateTemp(temp, unit) {
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feels-like");
  const unitToggle = document.getElementById("unit-toggle");

  if (unit === "C") {
    temperature.textContent = `${temp} ${unit}`;
    feelsLike.textContent = `${temp} ${unit}`;
    //change unit back to C
    unitToggle.textContent = "To Fahrenheit";
    unitToggle.dataset.unit = "C";
  } else if (unit === "F") {
    temperature.textContent = `${temp} ${unit}`;
    feelsLike.textContent = `${temp} ${unit}`;
    //change unit back to F
    unitToggle.textContent = "To Celsius";
    unitToggle.dataset.unit = "F";
  }
}
