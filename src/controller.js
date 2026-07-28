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

  unitToggle.addEventListener("click", (e) => {
    console.log(unitToggle.dataset.unit);

    if (unitToggle.dataset.unit === "F") {
      const newTemp = changeTemp("C", getTemp());
      updateTemp(newTemp, "C");

      console.log("C get temp" + newTemp);
    } else {
      const newTemp = changeTemp("F", getTemp());
      console.log("change back to F" + newTemp);
      updateTemp(newTemp, "F");
    }
  });
}

init();
