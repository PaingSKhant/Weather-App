import { API_KEY } from "./api-key.js";

const icon = document.getElementById("icon");
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

async function Search(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      icon.textContent = data.timezone + ": " + data.currentConditions.icon;
      return data;
    } else {
      icon.textContent = `Error ${response.status}. Location Not found!`;
    }
  } catch (error) {
    icon.textContent = "Network connection error!";
    console.log(error);
  }
}

export function init() {
  searchBtn.addEventListener("click", () => {
    console.log(searchBar.value);
    Search(searchBar.value);
    searchBar.value = "";
  });
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      Search(searchBar.value);
      console.log(searchBar.value);
      searchBar.value = "";
    }
  });
}
