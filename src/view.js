import rainIcon from "./assets/rain.svg";

export function weatherCard(weather) {
  const timeZone = document.getElementById("time-zone");
  const iconImage = document.getElementById("icon-image");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feels-like");
  const weatherCondition = document.getElementById("weather");

  timeZone.textContent = weather.address;
  //icon here
  iconImage.src = weatherIcons(weather.icon);
  temperature.textContent = weather.temp + " F";
  feelsLike.textContent = "Feels Like " + weather.feelsLike;
  weatherCondition.textContent = weather.condition;
  console.log(weather.icon);
}

function weatherIcons(condition) {
  if (condition === "rain") return rainIcon;
}
