import "./style.css";

import {
  handleSearch,
  searchBar,
  searchBtn,
  getTemp,
  changeTemp,
} from "./model.js";
import { updateTemp } from "./view.js";

const unitToggle = document.getElementById("unit-toggle");

function init() {
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  searchBtn.addEventListener("click", handleSearch);

  unitToggle.addEventListener("click", () => {
    if (unitToggle.dataset.unit === "F") {
      const newTemp = changeTemp("C", getTemp());
      updateTemp(newTemp, "C");
    } else {
      const newTemp = changeTemp("F", getTemp());
      updateTemp(newTemp, "F");
    }
  });
}

init();
